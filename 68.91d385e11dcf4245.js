"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[68],{5068:(M,g,s)=>{s.r(g),s.d(g,{TechprofileModule:()=>x});var c=s(6814),p=s(6743),d=s(1406),t=s(4946),h=s(9862);let f=(()=>{class n{constructor(e){this.http=e,this.apiUrl="https://api.github.com/users/amitkumartech",this.apiUrlRepos="https://api.github.com/users/amitkumartech/repos"}getGithubProfile(){return this.http.get(this.apiUrl)}getRepositories(){return this.http.get(this.apiUrlRepos)}static#t=this.\u0275fac=function(i){return new(i||n)(t.LFG(h.eN))};static#n=this.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function _(n,r){if(1&n&&(t.TgZ(0,"span",16)(1,"span",17),t._uU(2),t.qZA()()),2&n){const e=r.$implicit;t.xp6(2),t.hij(" ",e," ")}}const u=function(n,r){return["fas",n,r]};function m(n,r){if(1&n&&(t.TgZ(0,"li"),t._UZ(1,"i",13),t._uU(2),t.qZA()),2&n){const e=r.$implicit,i=t.oxw(2);t.xp6(1),t.Udp("color",i.getIconColor(e.name)),t.Q6J("ngClass",t.WLB(5,u,i.getIconClass(e.name),i.iconSizeClass)),t.xp6(1),t.AsE(" ",e.name,": ",e.percentage.toFixed(2),"% ")}}function C(n,r){if(1&n&&(t.TgZ(0,"div")(1,"ul",18),t.YNc(2,m,3,8,"li",19),t.qZA()()),2&n){const e=t.oxw();t.xp6(2),t.Q6J("ngForOf",e.topLanguages)}}const v=function(){return["fas","fab fa-github"]},P=[{path:"portfolio",component:(()=>{class n{constructor(e){this.githubService=e,this.topLanguages=[],this.languageIcons={JavaScript:"fab fa-js-square",TypeScript:"fab fa-js-square",HTML:"fab fa-html5",CSS:"fab fa-css3-alt",Python:"fab fa-python"},this.languageColors={JavaScript:"#f0db4f",TypeScript:"#007acc",HTML:"#e34c26",CSS:"#2965f1",Python:"#3572A5"},this.iconSizeClass="fa-2x",this.skills=d.n.split(", ")}ngOnInit(){this.githubService.getGithubProfile().subscribe(e=>{this.profile=e}),this.githubService.getRepositories().subscribe(e=>{const i={};let a=0;e.forEach(o=>{o.language&&o.size&&(i[o.language]?i[o.language]+=o.size:i[o.language]=o.size,a+=o.size)}),this.topLanguages=Object.keys(i).map(o=>({name:o,percentage:i[o]/a*100})),this.topLanguages.sort((o,l)=>l.percentage-o.percentage),this.topLanguages.sort((o,l)=>l.percentage-o.percentage)})}getIconClass(e){return this.languageIcons[e]||"fab fa-code"}getIconColor(e){return this.languageColors[e]||"#333"}static#t=this.\u0275fac=function(i){return new(i||n)(t.Y36(f))};static#n=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-portfolio"]],decls:56,vars:10,consts:[[1,"container"],[1,"container__skills"],[1,"card"],[1,"card-header"],[1,"card-title"],[1,"card-body"],[1,"row"],["class","skills",4,"ngFor","ngForOf"],[1,"container__top-skills"],[4,"ngIf"],[1,"container__github-profile-overview"],[1,"container__overview__bio"],["target","_blank",3,"href"],[3,"ngClass"],[1,"key-highlights"],[1,"highlight-item"],[1,"skills"],[1,"skills__skill-item"],[1,"responsive-list"],[4,"ngFor","ngForOf"]],template:function(i,a){1&i&&(t.TgZ(0,"div",0)(1,"h2"),t._uU(2),t.qZA(),t.TgZ(3,"div",1)(4,"div",2)(5,"div",3)(6,"div",4)(7,"span"),t._uU(8,"Technical Expertise"),t.qZA()()(),t.TgZ(9,"div",5)(10,"div",6),t.YNc(11,_,3,1,"span",7),t.qZA()()()(),t.TgZ(12,"div",8)(13,"div",2)(14,"div",3)(15,"div",4)(16,"span"),t._uU(17,"Top Skills in Use"),t.qZA()()(),t.TgZ(18,"div",5)(19,"div",6),t.YNc(20,C,3,1,"div",9),t.qZA()()()(),t.TgZ(21,"div",10)(22,"div",2)(23,"div",3)(24,"div",4)(25,"span"),t._uU(26,"GitHub Profile Overview"),t.qZA()()(),t.TgZ(27,"div",5)(28,"div",6)(29,"h4",11),t._uU(30),t.qZA(),t.TgZ(31,"p"),t._uU(32),t.qZA(),t.TgZ(33,"p")(34,"a",12),t._uU(35," View my GitHub profile "),t._UZ(36,"i",13),t.qZA()()()()()(),t.TgZ(37,"section",14)(38,"div",0)(39,"h2"),t._uU(40,"Key Highlights"),t.qZA(),t.TgZ(41,"div",15)(42,"h3"),t._uU(43,"Project Management"),t.qZA(),t.TgZ(44,"p"),t._uU(45,"Successfully led and delivered multiple projects within deadlines."),t.qZA()(),t.TgZ(46,"div",15)(47,"h3"),t._uU(48,"Technical Skills"),t.qZA(),t.TgZ(49,"p"),t._uU(50,"Proficient in Angular, TypeScript, HTML/CSS, and responsive web design."),t.qZA()(),t.TgZ(51,"div",15)(52,"h3"),t._uU(53,"Team Collaboration"),t.qZA(),t.TgZ(54,"p"),t._uU(55,"Effective communication and teamwork skills, contributing to a collaborative work environment."),t.qZA()()()()()),2&i&&(t.xp6(2),t.Oqu(a.profile.name),t.xp6(9),t.Q6J("ngForOf",a.skills),t.xp6(9),t.Q6J("ngIf",a.topLanguages.length>0),t.xp6(10),t.Oqu(a.profile.bio),t.xp6(2),t.hij("Public Repositories: ",a.profile.public_repos,""),t.xp6(2),t.s9C("href",a.profile.html_url,t.LSH),t.xp6(2),t.Udp("color",a.getIconColor("#e34c26")),t.Q6J("ngClass",t.DdM(9,v)))},dependencies:[c.mk,c.sg,c.O5],styles:["@keyframes _ngcontent-%COMP%_easeIn{0%{opacity:0;transform:scale(.6)}to{opacity:1;transform:scale(1)}}@keyframes _ngcontent-%COMP%_fadeIn{0%{opacity:0;transform:translateY(-50px)}to{opacity:1;transform:translateY(0)}}.container[_ngcontent-%COMP%]{margin-left:auto;margin-right:auto;width:70%}@media (max-width: 768px){.container[_ngcontent-%COMP%]{width:100%}}.container__github-profile-overview[_ngcontent-%COMP%], .container__skills[_ngcontent-%COMP%], .container__top-skills[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_fadeIn 1s ease 0s 1 normal forwards;border:none}.container__github-profile-overview[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%], .container__skills[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%], .container__top-skills[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{margin-top:40px;border:none;box-shadow:0 0 10px #0000001a}.container__github-profile-overview[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .container__skills[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .container__top-skills[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block;width:300px;background-color:#656464;color:#fff;padding:5px;box-sizing:border-box}@media (max-width: 768px){.container__github-profile-overview[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .container__skills[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .container__top-skills[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:100%}}ul[_ngcontent-%COMP%]{list-style-type:none}.container__overview__bio[_ngcontent-%COMP%]{background-color:#fff;color:#007acc}.card-title[_ngcontent-%COMP%]{font-size:24px}.card-body[_ngcontent-%COMP%]{padding:20px}.responsive-list[_ngcontent-%COMP%]{list-style-type:none;padding:0;margin:0;display:flex;flex-wrap:wrap}.responsive-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{flex-basis:calc(33.33% - 20px);max-width:calc(33.33% - 20px);text-align:left;padding:5px;transition:.5s ease-out;cursor:default}.responsive-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{transform:translateY(-.25rem)}@media (max-width: 768px){.responsive-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{flex-basis:calc(50% - 20px);max-width:calc(50% - 20px)}}@media (max-width: 480px){.responsive-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{flex-basis:100%;max-width:100%}}.key-highlights[_ngcontent-%COMP%]{padding:50px 0}.container[_ngcontent-%COMP%]{max-width:960px;margin:0 auto}h2[_ngcontent-%COMP%]{font-size:2rem;text-align:center;margin-bottom:30px}.highlight-item[_ngcontent-%COMP%]{background-color:#fff;border:1px solid #ddd;padding:20px;margin-bottom:20px}.highlight-item[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:1.5rem;margin-bottom:10px}.highlight-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1rem;line-height:1.6}.skills__skill-item[_ngcontent-%COMP%]{display:inline-block;background-color:#007acc;box-sizing:border-box;margin:5px;padding:5px;color:#fff;box-shadow:0 1px 1px #0000001f,0 1px 2px #0000003d;transition:.5s ease-out;cursor:default}.skills__skill-item[_ngcontent-%COMP%]:hover{transform:translateY(-.25rem);box-shadow:0 3px 15px #0003}"]})}return n})()},{path:"",redirectTo:"portfolio",pathMatch:"full"}];let O=(()=>{class n{static#t=this.\u0275fac=function(i){return new(i||n)};static#n=this.\u0275mod=t.oAB({type:n});static#e=this.\u0275inj=t.cJS({imports:[p.Bz.forChild(P),p.Bz]})}return n})(),x=(()=>{class n{static#t=this.\u0275fac=function(i){return new(i||n)};static#n=this.\u0275mod=t.oAB({type:n});static#e=this.\u0275inj=t.cJS({imports:[c.ez,O]})}return n})()}}]);