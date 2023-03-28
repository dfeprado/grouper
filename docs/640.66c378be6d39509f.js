"use strict";(self.webpackChunkgrouper=self.webpackChunkgrouper||[]).push([[640],{640:(Bn,de,l)=>{l.r(de),l.d(de,{ListPageModule:()=>Sn});var F=l(895),R=l(736),o=l(256),ft=l(259),pt=l(905),mt=l(76),gt=l(751),_t=l(742),yt=l(421),vt=l(669),Ct=l(403),Vt=l(268),At=l(810),bt=l(4);let ce=(()=>{class n{constructor(e,r){this._renderer=e,this._elementRef=r,this.onChange=i=>{},this.onTouched=()=>{}}setProperty(e,r){this._renderer.setProperty(this._elementRef.nativeElement,e,r)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(o.Qsj),o.Y36(o.SBq))},n.\u0275dir=o.lG2({type:n}),n})(),g=(()=>{class n extends ce{}return n.\u0275fac=function(){let t;return function(r){return(t||(t=o.n5z(n)))(r||n)}}(),n.\u0275dir=o.lG2({type:n,features:[o.qOj]}),n})();const h=new o.OlP("NgValueAccessor"),Ft={provide:h,useExisting:(0,o.Gpc)(()=>E),multi:!0},Ot=new o.OlP("CompositionEventMode");let E=(()=>{class n extends ce{constructor(e,r,i){super(e,r),this._compositionMode=i,this._composing=!1,null==this._compositionMode&&(this._compositionMode=!function Et(){const n=(0,F.q)()?(0,F.q)().getUserAgent():"";return/android (\d+)/.test(n.toLowerCase())}())}writeValue(e){this.setProperty("value",e??"")}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(o.Qsj),o.Y36(o.SBq),o.Y36(Ot,8))},n.\u0275dir=o.lG2({type:n,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(e,r){1&e&&o.NdJ("input",function(s){return r._handleInput(s.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(s){return r._compositionEnd(s.target.value)})},features:[o._Bn([Ft]),o.qOj]}),n})();const wt=!1;function f(n){return null==n||("string"==typeof n||Array.isArray(n))&&0===n.length}const u=new o.OlP("NgValidators"),p=new o.OlP("NgAsyncValidators");function O(n){return null}function Ae(n){return null!=n}function Me(n){const t=(0,o.QGY)(n)?(0,mt.D)(n):n;if(wt&&!(0,o.CqO)(t)){let e="Expected async validator to return Promise or Observable.";throw"object"==typeof n&&(e+=" Are you using a synchronous validator where an async validator is expected?"),new o.vHH(-1101,e)}return t}function be(n){let t={};return n.forEach(e=>{t=null!=e?{...t,...e}:t}),0===Object.keys(t).length?null:t}function De(n,t){return t.map(e=>e(n))}function Fe(n){return n.map(t=>function St(n){return!n.validate}(t)?t:e=>t.validate(e))}function H(n){return null!=n?function Ee(n){if(!n)return null;const t=n.filter(Ae);return 0==t.length?null:function(e){return be(De(e,t))}}(Fe(n)):null}function U(n){return null!=n?function Oe(n){if(!n)return null;const t=n.filter(Ae);return 0==t.length?null:function(e){return function Mt(...n){const t=(0,vt.jO)(n),{args:e,keys:r}=(0,_t.D)(n),i=new gt.y(s=>{const{length:a}=e;if(!a)return void s.complete();const c=new Array(a);let y=a,V=a;for(let k=0;k<a;k++){let ue=!1;(0,yt.Xf)(e[k]).subscribe((0,Ct.x)(s,Gn=>{ue||(ue=!0,V--),c[k]=Gn},()=>y--,void 0,()=>{(!y||!ue)&&(V||s.next(r?(0,At.n)(r,c):c),s.complete())}))}});return t?i.pipe((0,Vt.Z)(t)):i}(De(e,t).map(Me)).pipe((0,bt.U)(be))}}(Fe(n)):null}function we(n,t){return null===n?[t]:Array.isArray(n)?[...n,t]:[n,t]}function L(n){return n?Array.isArray(n)?n:[n]:[]}function w(n,t){return Array.isArray(n)?n.includes(t):n===t}function Ge(n,t){const e=L(t);return L(n).forEach(i=>{w(e,i)||e.push(i)}),e}function Be(n,t){return L(t).filter(e=>!w(n,e))}class xe{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(t){this._rawValidators=t||[],this._composedValidatorFn=H(this._rawValidators)}_setAsyncValidators(t){this._rawAsyncValidators=t||[],this._composedAsyncValidatorFn=U(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(t){this._onDestroyCallbacks.push(t)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(t=>t()),this._onDestroyCallbacks=[]}reset(t){this.control&&this.control.reset(t)}hasError(t,e){return!!this.control&&this.control.hasError(t,e)}getError(t,e){return this.control?this.control.getError(t,e):null}}class d extends xe{get formDirective(){return null}get path(){return null}}class m extends xe{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}}class Pe{constructor(t){this._cd=t}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}}let Te=(()=>{class n extends Pe{constructor(e){super(e)}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(m,2))},n.\u0275dir=o.lG2({type:n,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(e,r){2&e&&o.ekj("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},features:[o.qOj]}),n})();const A="VALID",S="INVALID",v="PENDING",M="DISABLED";function G(n){return null!=n&&!Array.isArray(n)&&"object"==typeof n}class He{constructor(t,e){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(t),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(t){this._rawValidators=this._composedValidatorFn=t}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(t){this._rawAsyncValidators=this._composedAsyncValidatorFn=t}get parent(){return this._parent}get valid(){return this.status===A}get invalid(){return this.status===S}get pending(){return this.status==v}get disabled(){return this.status===M}get enabled(){return this.status!==M}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(t){this._assignValidators(t)}setAsyncValidators(t){this._assignAsyncValidators(t)}addValidators(t){this.setValidators(Ge(t,this._rawValidators))}addAsyncValidators(t){this.setAsyncValidators(Ge(t,this._rawAsyncValidators))}removeValidators(t){this.setValidators(Be(t,this._rawValidators))}removeAsyncValidators(t){this.setAsyncValidators(Be(t,this._rawAsyncValidators))}hasValidator(t){return w(this._rawValidators,t)}hasAsyncValidator(t){return w(this._rawAsyncValidators,t)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(t={}){this.touched=!0,this._parent&&!t.onlySelf&&this._parent.markAsTouched(t)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(t=>t.markAllAsTouched())}markAsUntouched(t={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(e=>{e.markAsUntouched({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}markAsDirty(t={}){this.pristine=!1,this._parent&&!t.onlySelf&&this._parent.markAsDirty(t)}markAsPristine(t={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(e=>{e.markAsPristine({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}markAsPending(t={}){this.status=v,!1!==t.emitEvent&&this.statusChanges.emit(this.status),this._parent&&!t.onlySelf&&this._parent.markAsPending(t)}disable(t={}){const e=this._parentMarkedDirty(t.onlySelf);this.status=M,this.errors=null,this._forEachChild(r=>{r.disable({...t,onlySelf:!0})}),this._updateValue(),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors({...t,skipPristineCheck:e}),this._onDisabledChange.forEach(r=>r(!0))}enable(t={}){const e=this._parentMarkedDirty(t.onlySelf);this.status=A,this._forEachChild(r=>{r.enable({...t,onlySelf:!0})}),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent}),this._updateAncestors({...t,skipPristineCheck:e}),this._onDisabledChange.forEach(r=>r(!1))}_updateAncestors(t){this._parent&&!t.onlySelf&&(this._parent.updateValueAndValidity(t),t.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(t){this._parent=t}getRawValue(){return this.value}updateValueAndValidity(t={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===A||this.status===v)&&this._runAsyncValidator(t.emitEvent)),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!t.onlySelf&&this._parent.updateValueAndValidity(t)}_updateTreeValidity(t={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(t)),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?M:A}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(t){if(this.asyncValidator){this.status=v,this._hasOwnPendingAsyncValidator=!0;const e=Me(this.asyncValidator(this));this._asyncValidationSubscription=e.subscribe(r=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(r,{emitEvent:t})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(t,e={}){this.errors=t,this._updateControlsErrors(!1!==e.emitEvent)}get(t){let e=t;return null==e||(Array.isArray(e)||(e=e.split(".")),0===e.length)?null:e.reduce((r,i)=>r&&r._find(i),this)}getError(t,e){const r=e?this.get(e):this;return r&&r.errors?r.errors[t]:null}hasError(t,e){return!!this.getError(t,e)}get root(){let t=this;for(;t._parent;)t=t._parent;return t}_updateControlsErrors(t){this.status=this._calculateStatus(),t&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(t)}_initObservables(){this.valueChanges=new o.vpe,this.statusChanges=new o.vpe}_calculateStatus(){return this._allControlsDisabled()?M:this.errors?S:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(v)?v:this._anyControlsHaveStatus(S)?S:A}_anyControlsHaveStatus(t){return this._anyControls(e=>e.status===t)}_anyControlsDirty(){return this._anyControls(t=>t.dirty)}_anyControlsTouched(){return this._anyControls(t=>t.touched)}_updatePristine(t={}){this.pristine=!this._anyControlsDirty(),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}_updateTouched(t={}){this.touched=this._anyControlsTouched(),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}_registerOnCollectionChange(t){this._onCollectionChange=t}_setUpdateStrategy(t){G(t)&&null!=t.updateOn&&(this._updateOn=t.updateOn)}_parentMarkedDirty(t){return!t&&!(!this._parent||!this._parent.dirty)&&!this._parent._anyControlsDirty()}_find(t){return null}_assignValidators(t){this._rawValidators=Array.isArray(t)?t.slice():t,this._composedValidatorFn=function Rt(n){return Array.isArray(n)?H(n):n||null}(this._rawValidators)}_assignAsyncValidators(t){this._rawAsyncValidators=Array.isArray(t)?t.slice():t,this._composedAsyncValidatorFn=function Ht(n){return Array.isArray(n)?U(n):n||null}(this._rawAsyncValidators)}}const C=new o.OlP("CallSetDisabledState",{providedIn:"root",factory:()=>B}),B="always";function b(n,t,e=B){(function Z(n,t){const e=function Ne(n){return n._rawValidators}(n);null!==t.validator?n.setValidators(we(e,t.validator)):"function"==typeof e&&n.setValidators([e]);const r=function Se(n){return n._rawAsyncValidators}(n);null!==t.asyncValidator?n.setAsyncValidators(we(r,t.asyncValidator)):"function"==typeof r&&n.setAsyncValidators([r]);const i=()=>n.updateValueAndValidity();T(t._rawValidators,i),T(t._rawAsyncValidators,i)})(n,t),t.valueAccessor.writeValue(n.value),(n.disabled||"always"===e)&&t.valueAccessor.setDisabledState?.(n.disabled),function jt(n,t){t.valueAccessor.registerOnChange(e=>{n._pendingValue=e,n._pendingChange=!0,n._pendingDirty=!0,"change"===n.updateOn&&Ue(n,t)})}(n,t),function Yt(n,t){const e=(r,i)=>{t.valueAccessor.writeValue(r),i&&t.viewToModelUpdate(r)};n.registerOnChange(e),t._registerOnDestroy(()=>{n._unregisterOnChange(e)})}(n,t),function qt(n,t){t.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,"blur"===n.updateOn&&n._pendingChange&&Ue(n,t),"submit"!==n.updateOn&&n.markAsTouched()})}(n,t),function Lt(n,t){if(t.valueAccessor.setDisabledState){const e=r=>{t.valueAccessor.setDisabledState(r)};n.registerOnDisabledChange(e),t._registerOnDestroy(()=>{n._unregisterOnDisabledChange(e)})}}(n,t)}function T(n,t){n.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(t)})}function Ue(n,t){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),t.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function qe(n,t){const e=n.indexOf(t);e>-1&&n.splice(e,1)}function Ye(n){return"object"==typeof n&&null!==n&&2===Object.keys(n).length&&"value"in n&&"disabled"in n}const $e=class extends He{constructor(t=null,e,r){super(function $(n){return(G(n)?n.validators:n)||null}(e),function W(n,t){return(G(t)?t.asyncValidators:n)||null}(r,e)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(t),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),G(e)&&(e.nonNullable||e.initialValueIsDefault)&&(this.defaultValue=Ye(t)?t.value:t)}setValue(t,e={}){this.value=this._pendingValue=t,this._onChange.length&&!1!==e.emitModelToViewChange&&this._onChange.forEach(r=>r(this.value,!1!==e.emitViewToModelChange)),this.updateValueAndValidity(e)}patchValue(t,e={}){this.setValue(t,e)}reset(t=this.defaultValue,e={}){this._applyFormState(t),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),this._pendingChange=!1}_updateValue(){}_anyControls(t){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(t){this._onChange.push(t)}_unregisterOnChange(t){qe(this._onChange,t)}registerOnDisabledChange(t){this._onDisabledChange.push(t)}_unregisterOnDisabledChange(t){qe(this._onDisabledChange,t)}_forEachChild(t){}_syncPendingControls(){return!("submit"!==this.updateOn||(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),!this._pendingChange)||(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),0))}_applyFormState(t){Ye(t)?(this.value=this._pendingValue=t.value,t.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=t}},Kt={provide:m,useExisting:(0,o.Gpc)(()=>ee)},Ze=(()=>Promise.resolve())();let ee=(()=>{class n extends m{constructor(e,r,i,s,a,c){super(),this._changeDetectorRef=a,this.callSetDisabledState=c,this.control=new $e,this._registered=!1,this.update=new o.vpe,this._parent=e,this._setValidators(r),this._setAsyncValidators(i),this.valueAccessor=function X(n,t){if(!t)return null;let e,r,i;return Array.isArray(t),t.forEach(s=>{s.constructor===E?e=s:function zt(n){return Object.getPrototypeOf(n.constructor)===g}(s)?r=s:i=s}),i||r||e||null}(0,s)}ngOnChanges(e){if(this._checkForErrors(),!this._registered||"name"in e){if(this._registered&&(this._checkName(),this.formDirective)){const r=e.name.previousValue;this.formDirective.removeControl({name:r,path:this._getPath(r)})}this._setUpControl()}"isDisabled"in e&&this._updateDisabled(e),function Q(n,t){if(!n.hasOwnProperty("model"))return!1;const e=n.model;return!!e.isFirstChange()||!Object.is(t,e.currentValue)}(e,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&null!=this.options.updateOn&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!(!this.options||!this.options.standalone)}_setUpStandalone(){b(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),this._isStandalone()}_updateValue(e){Ze.then(()=>{this.control.setValue(e,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(e){const r=e.isDisabled.currentValue,i=0!==r&&(0,o.D6c)(r);Ze.then(()=>{i&&!this.control.disabled?this.control.disable():!i&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(e){return this._parent?function x(n,t){return[...t.path,n]}(e,this._parent):[e]}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(d,9),o.Y36(u,10),o.Y36(p,10),o.Y36(h,10),o.Y36(o.sBO,8),o.Y36(C,8))},n.\u0275dir=o.lG2({type:n,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:["disabled","isDisabled"],model:["ngModel","model"],options:["ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[o._Bn([Kt]),o.qOj,o.TTD]}),n})();const tn={provide:h,useExisting:(0,o.Gpc)(()=>te),multi:!0};let te=(()=>{class n extends g{writeValue(e){this.setProperty("value",e??"")}registerOnChange(e){this.onChange=r=>{e(""==r?null:parseFloat(r))}}}return n.\u0275fac=function(){let t;return function(r){return(t||(t=o.n5z(n)))(r||n)}}(),n.\u0275dir=o.lG2({type:n,selectors:[["input","type","number","formControlName",""],["input","type","number","formControl",""],["input","type","number","ngModel",""]],hostBindings:function(e,r){1&e&&o.NdJ("input",function(s){return r.onChange(s.target.value)})("blur",function(){return r.onTouched()})},features:[o._Bn([tn]),o.qOj]}),n})(),Je=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({}),n})();let _=(()=>{class n{constructor(){this._validator=O}ngOnChanges(e){if(this.inputName in e){const r=this.normalizeInput(e[this.inputName].currentValue);this._enabled=this.enabled(r),this._validator=this._enabled?this.createValidator(r):O,this._onChange&&this._onChange()}}validate(e){return this._validator(e)}registerOnValidatorChange(e){this._onChange=e}enabled(e){return null!=e}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275dir=o.lG2({type:n,features:[o.TTD]}),n})();const yn={provide:u,useExisting:(0,o.Gpc)(()=>ae),multi:!0};let ae=(()=>{class n extends _{constructor(){super(...arguments),this.inputName="min",this.normalizeInput=e=>function st(n){return"number"==typeof n?n:parseFloat(n)}(e),this.createValidator=e=>function pe(n){return t=>{if(f(t.value)||f(n))return null;const e=parseFloat(t.value);return!isNaN(e)&&e<n?{min:{min:n,actual:t.value}}:null}}(e)}}return n.\u0275fac=function(){let t;return function(r){return(t||(t=o.n5z(n)))(r||n)}}(),n.\u0275dir=o.lG2({type:n,selectors:[["input","type","number","min","","formControlName",""],["input","type","number","min","","formControl",""],["input","type","number","min","","ngModel",""]],hostVars:1,hostBindings:function(e,r){2&e&&o.uIk("min",r._enabled?r.min:null)},inputs:{min:"min"},features:[o._Bn([yn]),o.qOj]}),n})(),Dn=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[Je]}),n})(),En=(()=>{class n{static withConfig(e){return{ngModule:n,providers:[{provide:C,useValue:e.callSetDisabledState??B}]}}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[Dn]}),n})();function On(n,t){if(1&n){const e=o.EpF();o.TgZ(0,"li")(1,"span"),o._uU(2),o.TgZ(3,"button",0),o.NdJ("click",function(){const i=o.CHM(e),s=i.index,a=i.$implicit,c=o.oxw();return o.KtG(c.remove(s,a))}),o._uU(4,"Remover"),o.qZA()()()}if(2&n){const e=t.$implicit;o.xp6(2),o.hij("",e," ")}}const wn=[{path:"",component:(()=>{class n{constructor(e,r){this.members=e,this.group=r}addMember(){const e=prompt("Qual \xe9 o nome do membro?");e&&this.members.push(e)}remove(e,r){confirm(`Tem certeza que quer remover ${r}?`)&&this.members.remove(e)}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(ft.Z),o.Y36(pt.l))},n.\u0275cmp=o.Xpm({type:n,selectors:[["grp-list-page"]],decls:20,vars:4,consts:[[3,"click"],["routerLink","member-shuffle"],["for","groups"],["id","groups","type","number","min","1",3,"ngModel","ngModelChange"],[4,"ngFor","ngForOf"]],template:function(e,r){1&e&&(o.TgZ(0,"h1"),o._uU(1,"Membros"),o.qZA(),o.TgZ(2,"button",0),o.NdJ("click",function(){return r.addMember()}),o._uU(3,"Adicionar"),o.qZA(),o.TgZ(4,"a",1),o._uU(5,"Sortear"),o.qZA(),o.TgZ(6,"p")(7,"strong"),o._uU(8,"Total de membros:"),o.qZA(),o._uU(9),o.qZA(),o.TgZ(10,"label",2),o._uU(11,"Grupos"),o.qZA(),o._uU(12,"\xa0"),o.TgZ(13,"input",3),o.NdJ("ngModelChange",function(s){return r.group.count=s}),o.qZA(),o.TgZ(14,"p")(15,"strong"),o._uU(16,"Total de pessoas por grupo:"),o.qZA(),o._uU(17),o.qZA(),o.TgZ(18,"ul"),o.YNc(19,On,5,1,"li",4),o.qZA()),2&e&&(o.xp6(9),o.hij(" ",r.members.count,""),o.xp6(4),o.Q6J("ngModel",r.group.count),o.xp6(4),o.hij(" ",r.group.membersPerGroup,""),o.xp6(2),o.Q6J("ngForOf",r.members.list))},dependencies:[F.sg,R.rH,E,te,Te,ae,ee],changeDetection:0}),n})()}];let Nn=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[R.Bz.forChild(wn),R.Bz]}),n})(),Sn=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[F.ez,Nn,En]}),n})()}}]);