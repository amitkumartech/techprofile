"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[741],{9741:(Y,f,a)=>{a.r(f),a.d(f,{TechprofileModule:()=>L});var l=a(6814),h=a(9310),_=a(5592),C=a(7453),x=a(4829),v=a(4564),O=a(8251),P=a(7400),M=a(2714),y=a(1406),t=a(4946),k=a(9862);let w=(()=>{class n{constructor(e){this.http=e,this.apiUrl="https://api.github.com/users/amitkumartech",this.apiUrlRepos="https://api.github.com/users/amitkumartech/repos"}getGithubProfile(){return this.http.get(this.apiUrl)}getRepositories(){return this.http.get(this.apiUrlRepos)}static#t=this.\u0275fac=function(o){return new(o||n)(t.LFG(k.eN))};static#n=this.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function T(n,s){1&n&&(t.TgZ(0,"div"),t.O4$(),t.TgZ(1,"svg",2),t._UZ(2,"circle",3),t.qZA()())}function Z(n,s){if(1&n&&(t.TgZ(0,"span",17)(1,"span",18),t._uU(2),t.qZA()()),2&n){const e=s.$implicit;t.xp6(2),t.hij(" ",e," ")}}const A=function(n,s){return["fas",n,s]};function S(n,s){if(1&n&&(t.TgZ(0,"li"),t._UZ(1,"i",16),t._uU(2),t.qZA()),2&n){const e=s.$implicit,o=t.oxw(3);t.xp6(1),t.Udp("color",o.getIconColor(e.name)),t.Q6J("ngClass",t.WLB(5,A,o.getIconClass(e.name),o.iconSizeClass)),t.xp6(1),t.AsE(" ",e.name,": ",e.percentage.toFixed(2),"% ")}}function I(n,s){if(1&n&&(t.TgZ(0,"div")(1,"ul",19),t.YNc(2,S,3,8,"li",20),t.qZA()()),2&n){const e=t.oxw(2);t.xp6(2),t.Q6J("ngForOf",e.topLanguages)}}const U=function(){return["fas","fab fa-github"]};function z(n,s){if(1&n&&(t.TgZ(0,"div",4)(1,"div",5)(2,"div",6)(3,"div",7)(4,"div",8)(5,"span"),t._uU(6,"Technical Expertise"),t.qZA()()(),t.TgZ(7,"div",9)(8,"div",10),t.YNc(9,Z,3,1,"span",11),t.qZA()()()(),t.TgZ(10,"div",12)(11,"div",6)(12,"div",7)(13,"div",8)(14,"span"),t._uU(15,"Top Skills in Use"),t.qZA()()(),t.TgZ(16,"div",9)(17,"div",10),t.YNc(18,I,3,1,"div",0),t.qZA()()()(),t.TgZ(19,"div",13)(20,"div",6)(21,"div",7)(22,"div",8)(23,"span"),t._uU(24,"GitHub Profile Overview"),t.qZA()()(),t.TgZ(25,"div",9)(26,"div",10)(27,"h4",14),t._uU(28),t.qZA(),t.TgZ(29,"p"),t._uU(30),t.qZA(),t.TgZ(31,"p")(32,"a",15),t._uU(33," View my GitHub profile "),t._UZ(34,"i",16),t.qZA()()()()()()()),2&n){const e=t.oxw();t.xp6(9),t.Q6J("ngForOf",e.skills),t.xp6(9),t.Q6J("ngIf",e.topLanguages.length>0),t.xp6(10),t.Oqu(e.profile.bio),t.xp6(2),t.hij("Public Repositories: ",e.profile.public_repos,""),t.xp6(2),t.s9C("href",e.profile.html_url,t.LSH),t.xp6(2),t.Udp("color",e.getIconColor("#e34c26")),t.Q6J("ngClass",t.DdM(8,U))}}const F=[{path:"portfolio",component:(()=>{class n{constructor(e){this.githubService=e,this.loader=!1,this.topLanguages=[],this.languageIcons={JavaScript:"fab fa-js-square",TypeScript:"fab fa-js-square",HTML:"fab fa-html5",CSS:"fab fa-css3-alt",Python:"fab fa-python"},this.languageColors={JavaScript:"#f0db4f",TypeScript:"#007acc",HTML:"#e34c26",CSS:"#2965f1",Python:"#3572A5"},this.iconSizeClass="fa-2x",this.skills=y.n.split(", ")}ngOnInit(){this.GetGithubData()}getIconClass(e){return this.languageIcons[e]||"fab fa-code"}getIconColor(e){return this.languageColors[e]||"#333"}GetGithubData(){this.loader=!0,function b(...n){const s=(0,v.jO)(n),{args:e,keys:o}=(0,C.D)(n),c=new _.y(i=>{const{length:r}=e;if(!r)return void i.complete();const p=new Array(r);let u=r,m=r;for(let g=0;g<r;g++){let d=!1;(0,x.Xf)(e[g]).subscribe((0,O.x)(i,j=>{d||(d=!0,m--),p[g]=j},()=>u--,void 0,()=>{(!u||!d)&&(m||i.next(o?(0,M.n)(o,p):p),i.complete())}))}});return s?c.pipe((0,P.Z)(s)):c}([this.githubService.getGithubProfile(),this.githubService.getRepositories()]).subscribe(([e,o])=>{this.profile=e,this.analyseRepoResponse(o),this.loader=!1},e=>{console.error("Error:",e),this.loader=!1})}analyseRepoResponse(e){const o={};let c=0;e.forEach(i=>{i.language&&i.size&&(o[i.language]?o[i.language]+=i.size:o[i.language]=i.size,c+=i.size)}),this.topLanguages=Object.keys(o).map(i=>({name:i,percentage:o[i]/c*100})),this.topLanguages.sort((i,r)=>r.percentage-i.percentage),this.topLanguages.sort((i,r)=>r.percentage-i.percentage)}static#t=this.\u0275fac=function(o){return new(o||n)(t.Y36(w))};static#n=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-portfolio"]],decls:2,vars:2,consts:[[4,"ngIf"],["class","container",4,"ngIf"],["viewBox","0 0 38 38","xmlns","http://www.w3.org/2000/svg",1,"loader"],["cx","19","cy","19","r","18","stroke-width","2","fill","none","stroke-linecap","round",1,"loader-circle"],[1,"container"],[1,"container__skills"],[1,"card"],[1,"card-header"],[1,"card-title"],[1,"card-body"],[1,"row"],["class","skills",4,"ngFor","ngForOf"],[1,"container__top-skills"],[1,"container__github-profile-overview"],[1,"container__overview__bio"],["target","_blank",3,"href"],[3,"ngClass"],[1,"skills"],[1,"skills__skill-item"],[1,"responsive-list"],[4,"ngFor","ngForOf"]],template:function(o,c){1&o&&(t.YNc(0,T,3,0,"div",0),t.YNc(1,z,35,9,"div",1)),2&o&&(t.Q6J("ngIf",c.loader),t.xp6(1),t.Q6J("ngIf",!c.loader))},dependencies:[l.mk,l.sg,l.O5],styles:["@keyframes _ngcontent-%COMP%_easeIn{0%{opacity:0;transform:scale(.6)}to{opacity:1;transform:scale(1)}}@keyframes _ngcontent-%COMP%_fadeIn{0%{opacity:0;transform:translateY(-50px)}to{opacity:1;transform:translateY(0)}}.container[_ngcontent-%COMP%]{margin-left:auto;margin-right:auto;width:70%}@media (max-width: 768px){.container[_ngcontent-%COMP%]{width:100%}}.container__github-profile-overview[_ngcontent-%COMP%], .container__skills[_ngcontent-%COMP%], .container__top-skills[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_fadeIn 1s ease 0s 1 normal forwards;border:none}.container__github-profile-overview[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%], .container__skills[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%], .container__top-skills[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{margin-top:40px;border:none;box-shadow:0 0 10px #0000001a}.container__github-profile-overview[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .container__skills[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .container__top-skills[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block;width:300px;background-color:#656464;color:#fff;padding:5px;box-sizing:border-box}@media (max-width: 768px){.container__github-profile-overview[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .container__skills[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .container__top-skills[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:100%}}ul[_ngcontent-%COMP%]{list-style-type:none}.container__overview__bio[_ngcontent-%COMP%]{background-color:#fff;color:#007acc}.card-title[_ngcontent-%COMP%]{font-size:24px}.card-body[_ngcontent-%COMP%]{padding:20px}.responsive-list[_ngcontent-%COMP%]{list-style-type:none;padding:0;margin:0;display:flex;flex-wrap:wrap}.responsive-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{flex-basis:calc(33.33% - 20px);max-width:calc(33.33% - 20px);text-align:left;padding:5px;transition:.5s ease-out;cursor:default}.responsive-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{transform:translateY(-.25rem)}@media (max-width: 768px){.responsive-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{flex-basis:calc(50% - 20px);max-width:calc(50% - 20px)}}@media (max-width: 480px){.responsive-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{flex-basis:100%;max-width:100%}}.key-highlights[_ngcontent-%COMP%]{padding:50px 0}.container[_ngcontent-%COMP%]{max-width:960px;margin:0 auto}h2[_ngcontent-%COMP%]{font-size:2rem;text-align:center;margin-bottom:30px}.highlight-item[_ngcontent-%COMP%]{background-color:#fff;border:1px solid #ddd;padding:20px;margin-bottom:20px}.highlight-item[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:1.5rem;margin-bottom:10px}.highlight-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1rem;line-height:1.6}.skills__skill-item[_ngcontent-%COMP%]{display:inline-block;background-color:#007acc;box-sizing:border-box;margin:5px;padding:5px;color:#fff;box-shadow:0 1px 1px #0000001f,0 1px 2px #0000003d;transition:.5s ease-out;cursor:default}.skills__skill-item[_ngcontent-%COMP%]:hover{transform:translateY(-.25rem);box-shadow:0 3px 15px #0003}.loader[_ngcontent-%COMP%]{width:38px;height:38px;display:block;margin:0 auto;animation:_ngcontent-%COMP%_rotate 2s linear infinite;height:100vh;display:flex;justify-content:center;align-items:center}.loader-circle[_ngcontent-%COMP%]{stroke:#3498db;stroke-dasharray:75.4;stroke-dashoffset:75.4;animation:_ngcontent-%COMP%_dash 1.5s ease-in-out infinite}@keyframes _ngcontent-%COMP%_rotate{to{transform:rotate(360deg)}}@keyframes _ngcontent-%COMP%_dash{0%{stroke-dashoffset:75.4}50%{stroke-dashoffset:0}to{stroke-dashoffset:75.4}}"]})}return n})()},{path:"",redirectTo:"portfolio",pathMatch:"full"}];let J=(()=>{class n{static#t=this.\u0275fac=function(o){return new(o||n)};static#n=this.\u0275mod=t.oAB({type:n});static#e=this.\u0275inj=t.cJS({imports:[h.Bz.forChild(F),h.Bz]})}return n})(),L=(()=>{class n{static#t=this.\u0275fac=function(o){return new(o||n)};static#n=this.\u0275mod=t.oAB({type:n});static#e=this.\u0275inj=t.cJS({imports:[l.ez,J]})}return n})()}}]);