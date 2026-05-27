import 'package:grouper/pages/groupformation.page.dart';
import 'package:grouper/pages/groupsettings.page.dart';
import 'package:grouper/pages/members.page.dart';
import 'package:jaspr/dom.dart';
import 'package:jaspr/jaspr.dart';
import 'package:jaspr_router/jaspr_router.dart';

import 'components/header.dart';
import 'pages/about.dart';
import 'pages/home.dart';

// The main component of your application.
class App extends StatelessComponent {
  const App({super.key});

  @override
  Component build(BuildContext context) {
    // TODO: implement build
    return div(classes: "main", [
      Router(
        routes: [
          ShellRoute(
            builder: (context, state, child) => .fragment([
              child,
            ]),
            routes: [
              Route(path: "/", title: "Membros", builder: (context, state) => const MembersPage()),
              Route(
                path: '/groupsettings',
                title: "Configurações de grupos",
                builder: (context, state) => const GroupSettingsPage(),
              ),
              Route(
                path: "/groupformation",
                title: "Grupos",
                builder: (context, state) => const GroupFormationPage(),
              ),
            ],
          ),
        ],
      ),
    ]);
  }

  @css
  static List<StyleRule> get styles => [
    css(".main", [css("&").styles(display: .flex, height: 100.vh, flexDirection: .column, flexWrap: .wrap)]),
    css(
      "section",
    ).styles(display: .flex, flexDirection: .column, justifyContent: .start, alignItems: .center, flex: Flex(grow: 1)),
  ];
  // const App({super.key});

  // @override
  // Component build(BuildContext context) {
  //   // This method is rerun every time the component is rebuilt.

  //   // Renders a <div class="main"> html element with children.
  //   return div(classes: 'main', [
  //     Router(routes: [
  //       ShellRoute(
  //         builder: (context, state, child) => .fragment([
  //           const Header(),
  //           child,
  //         ]),
  //         routes: [
  //           Route(path: '/', title: 'Home', builder: (context, state) => const Home()),
  //           Route(path: '/about', title: 'About', builder: (context, state) => const About()),
  //         ],
  //       ),
  //     ]),
  //   ]);
  // }

  // // Defines the CSS styles for this component.
  // //
  // // By using the @css annotation, these will be rendered automatically to CSS and included in your page.
  // // Must be a variable or getter of type [List<StyleRule>].
  // @css
  // static List<StyleRule> get styles => [
  //   css('.main', [
  //     // The '&' refers to the parent selector of a nested style rules.
  //     css('&').styles(
  //       display: .flex,
  //       height: 100.vh,
  //       flexDirection: .column,
  //       flexWrap: .wrap,
  //     ),
  //     css('section').styles(
  //       display: .flex,
  //       flexDirection: .column,
  //       justifyContent: .center,
  //       alignItems: .center,
  //       flex: Flex(grow: 1),
  //     ),
  //   ]),
  // ];
}
