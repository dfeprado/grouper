import 'dart:async';
import 'package:jaspr/dom.dart';
import 'package:jaspr/jaspr.dart';

class MembersPage extends StatelessComponent {
  const MembersPage({super.key});

  @override
  Component build(BuildContext context) {
    return section([
      h1([.text("Membros")]),
      _MembersTextArea(),
    ]);
  }

  @css
  static List<StyleRule> get styles => [
    css(".h-width").styles(width: 90.percent),
    css(
      ".members-textarea",
    ).styles(height: 50.percent, fontSize: 1.5.em, lineHeight: 1.5.em, raw: {"resize": "none"}),
    css.media(MediaQuery.screen(minWidth: 600.px), [css(".h-width").styles(width: 500.px)]),
  ];
}

class _MembersTextArea extends StatefulComponent {
  _MembersTextArea({super.key});

  @override
  State<StatefulComponent> createState() => _MembersTextAreaState();
}

class _MembersTextAreaState extends State<_MembersTextArea> {
  List<String> _members = [];
  Timer? _debounceTimer;
  UniqueKey _textAreaKey = UniqueKey();
  final int _minimumParticipats = 4;

  @override
  Component build(BuildContext context) {
    return .fragment([
      p([.text("${_members.length} participantes")]),
      if (_members.length < _minimumParticipats)
        p(styles: Styles(color: Colors.red), [.text("Escreva pelo menos 4 nomes")]),
      textarea(
        key: _textAreaKey,
        classes: "members-textarea h-width",
        onInput: (value) {
          _debounceTimer?.cancel();
          _debounceTimer = Timer(const Duration(milliseconds: 500), () {
            setState(() {
              _members = value.split("\n").map((e) => e.trim()).where((e) => e.isNotEmpty).toList();
            });
          });
        },
        placeholder: "Escreva um nome por linha",
        [.text(_members.join("\n"))],
      ),
      div(
        classes: "h-width",
        styles: Styles(
          display: .flex,
          border: Border.all(color: Colors.black),
        ),
        [
          button(
            onClick: () {
              if (_members.isEmpty) {
                return;
              }

              setState(() {
                _members = [..._members]..sort();
                _textAreaKey = UniqueKey();
              });
            },
            [.text("Ordenar")],
          ),
        ],
      ),
    ]);
  }
}
