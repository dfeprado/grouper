"use strict";(self.webpackChunkgrouper=self.webpackChunkgrouper||[]).push([[541],{541:(d,f,u)=>{u.r(f),u.d(f,{MemberShufflePageModule:()=>p});var l=u(895),r=u(736),e=u(256),m=u(259),h=u(905);function a(o,n){if(1&o&&(e.TgZ(0,"li")(1,"span"),e._uU(2),e.qZA()()),2&o){const t=n.$implicit;e.xp6(2),e.Oqu(t)}}const g=[{path:"",component:(()=>{class o{constructor(t,s,i){this.members=t,this.group=s,this.router=i,this.shufflintTimeout=0}ngOnInit(){this.shuffle()}shuffle(){this.shuffled=this.members.shuffle(),this.shufflintTimeout=window.setTimeout(()=>this.shuffle(),200)}done(){this.group.setGroups(this.shuffled),this.router.navigate(["/groups"])}ngOnDestroy(){window.clearTimeout(this.shufflintTimeout)}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(m.Z),e.Y36(h.l),e.Y36(r.F0))},o.\u0275cmp=e.Xpm({type:o,selectors:[["grp-member-shuffle-page"]],decls:10,vars:1,consts:[["routerLink","/"],[3,"click"],[4,"ngFor","ngForOf"]],template:function(t,s){1&t&&(e.TgZ(0,"h1"),e._uU(1,"Embaralhando os membros"),e.qZA(),e.TgZ(2,"p"),e._uU(3,"Pressione o bot\xe3o abaixo quando estiver satisfeito"),e.qZA(),e.TgZ(4,"a",0),e._uU(5,"Voltar"),e.qZA(),e.TgZ(6,"button",1),e.NdJ("click",function(){return s.done()}),e._uU(7,"Pronto"),e.qZA(),e.TgZ(8,"ul"),e.YNc(9,a,3,1,"li",2),e.qZA()),2&t&&(e.xp6(9),e.Q6J("ngForOf",s.shuffled))},dependencies:[l.sg,r.rH]}),o})()}];let c=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[r.Bz.forChild(g),r.Bz]}),o})(),p=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[l.ez,c]}),o})()}}]);