"use strict";(self.webpackChunkdocs_github_io=self.webpackChunkdocs_github_io||[]).push([[2675],{9459:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>d,toc:()=>c});var i=n(4848),s=n(8453);const a={sidebar_position:15},r="Entity \uc640 Cdo \uc0dd\uc131",d={id:"studio-guide/cre-entityCdo_kor",title:"Entity \uc640 Cdo \uc0dd\uc131",description:"Entity \uc640 Cdo \uc0dd\uc131",source:"@site/docs/studio-guide/cre-entityCdo_kor.md",sourceDirName:"studio-guide",slug:"/studio-guide/cre-entityCdo_kor",permalink:"/docs/studio-guide/cre-entityCdo_kor",draft:!1,unlisted:!1,editUrl:"https://gitlab.com/vizend/docs/-/edit/main/docs/studio-guide/cre-entityCdo_kor.md",tags:[],version:"current",sidebarPosition:15,frontMatter:{sidebar_position:15},sidebar:"tutorialSidebar",previous:{title:"Field Encryption",permalink:"/docs/studio-guide/encrypt_eng"},next:{title:"Create the Entity and Cdo",permalink:"/docs/studio-guide/cre-entityCdo_eng"}},o={},c=[{value:"Entity \uc640 Cdo \uc0dd\uc131",id:"entity-\uc640-cdo-\uc0dd\uc131-1",level:2}];function g(t){const e={code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",...(0,s.R)(),...t.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"entity-\uc640-cdo-\uc0dd\uc131",children:"Entity \uc640 Cdo \uc0dd\uc131"}),"\n",(0,i.jsx)(e.h2,{id:"entity-\uc640-cdo-\uc0dd\uc131-1",children:"Entity \uc640 Cdo \uc0dd\uc131"}),"\n",(0,i.jsxs)(e.p,{children:["foo-aggregate \ubaa8\ub4c8\uc744 \uc120\ud0dd\ud558\uace0 -> \uc624\ub978\ucabd \ub9c8\uc6b0\uc2a4\ub97c \ud074\ub9ad\ud558\uace0 -> Vizend Studio -> \u2018Create Aggregate entity and Cdo\u2026\u2019\ub97c \ud074\ub9ad\ud569\ub2c8\ub2e4.\n",(0,i.jsx)(e.img,{alt:"img.png",src:n(3388).A+"",width:"2106",height:"646"})]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"img_1.png",src:n(5981).A+"",width:"634",height:"560"})}),"\n",(0,i.jsx)(e.p,{children:"Entity type \uc635\uc158\uc740 StageEntity, DomainEntity, VoidEntity \uc640 DataEntity \ucd1d 4 \uac00\uc9c0\uac00 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,i.jsx)(e.p,{children:"StageEntity \ub294 Stage \uc5d0\uc11c \ud65c\ub3d9\ud558\uae30 \uc704\ud55c identity \ub97c \ud3ec\ud568\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,i.jsx)(e.p,{children:"DomainEntity \ub294 \uc77c\ubc18\uc801\uc73c\ub85c \ud50c\ub7ab\ud3fc \uc218\uc900\uc5d0\uc11c \ud504\ub808\uc784\uc6cc\ud06c\ub97c \uac1c\ubc1c\ud560 \ub54c \uc0ac\uc6a9\ub429\ub2c8\ub2e4."}),"\n",(0,i.jsx)(e.p,{children:"VoidEntity \ub294 \uc8fc\ub85c \ub370\uc774\ud130\ub97c \uc800\uc7a5\ud558\uc9c0 \uc54a\uac70\ub098 \ube44\uc5b4 \uc788\ub294 Entity \uc785\ub2c8\ub2e4. \ub370\uc774\ud130\ubca0\uc774\uc2a4\uc5d0 \uc800\uc7a5\ub418\ub294 \uac83\uc774 \uc544\ub2c8\ub77c \ub2e8\uc21c\ud788 \ucf54\ub4dc\uc5d0\uc11c \ud2b9\uc815 \uc791\uc5c5\uc744 \uc218\ud589\ud558\uae30 \uc704\ud574 \uc0ac\uc6a9\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,i.jsx)(e.p,{children:"DataEntity \ub294 \uae30\uc874\uc5d0 \uc874\uc7ac\ud558\ub294 DB \ud14c\uc774\ube14\uc744 \uae30\uc900\uc73c\ub85c \uc0dd\uc131\ub418\ub294 Entity \uc785\ub2c8\ub2e4."}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"img_2.png",src:n(2743).A+"",width:"632",height:"566"})}),"\n",(0,i.jsx)(e.p,{children:"\ud544\uc694\ud55c \uc815\ubcf4\ub97c \uc120\ud0dd \ubc0f \uc785\ub825\ud558\uace0 OK \ubc84\ud2bc\uc744 \ud074\ub9ad\ud569\ub2c8\ub2e4.\n\u2018Aggregate root\u2019\ub97c \uccb4\ud06c\ud558\uba74 Entity \ud074\ub798\uc2a4\ub294 DomainAggregate\ub97c \uad6c\ud604\ud558\uac8c \ub429\ub2c8\ub2e4. \ubc18\uba74\uc5d0 \uccb4\ud06c\ud558\uc9c0 \uc54a\uc740 \uacbd\uc6b0\uc5d0\ub294 DomainAggregate \ub97c \uad6c\ud604\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.img,{alt:"img_3.png",src:n(9549).A+"",width:"1398",height:"630"}),"\n\u2018Aggregate root\u2019\ub97c \uccb4\ud06c\ud55c \uacbd\uc6b0 DomainAggregate \ub97c \uad6c\ud604\ud558\uac8c \ub429\ub2c8\ub2e4."]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.img,{alt:"img_4.png",src:n(6670).A+"",width:"1158",height:"508"}),"\nStageEntity\uc758 \uae30\ubcf8 \uad6c\ud604\uc785\ub2c8\ub2e4. Stage \uc5d0\uc11c \ud65c\ub3d9\ud558\uae30 \uc704\ud55c \uc815\ubcf4\ub4e4\uc744 \ub2f4\uace0 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.img,{alt:"img_5.png",src:n(2100).A+"",width:"1200",height:"762"}),"\nDomainEntity\uc758 \uae30\ubcf8 \uad6c\ud604\uc785\ub2c8\ub2e4. \uc544\uc774\ub514\uc640 \ubc84\uc804 \ub4f1 \uc8fc\ub85c \uacf5\ud1b5\ub41c \ub3c4\uba54\uc778 \ubaa8\ub378\uc744 \uc815\uc758\ud558\ub294 \ub370 \uc0ac\uc6a9\ub429\ub2c8\ub2e4."]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-Java",children:"@Getter\n@Setter\n@NoArgsConstructor\npublic class Bar extends StageEntity implements DomainAggregate {\n    //\n    private String name;\n    private String address;\n    private int age;\n    ...\n"})}),"\n",(0,i.jsx)(e.p,{children:"Entity \uc640 Cdo \ub97c \uc0dd\uc131\ud55c \ud6c4\uc5d0 Bar Entity \uc5d0 \ud544\uc694\ud55c \uc18d\uc131\uc744 \uc785\ub825\ud569\ub2c8\ub2e4."}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-Java",children:"@Getter\n@Setter\n@Builder\n@AllArgsConstructor\n@NoArgsConstructor\npublic class BarCdo extends CreationDataObject {\n    //\n    private String name;\n    private int age;\n    ...\n"})}),"\n",(0,i.jsx)(e.p,{children:"BarCdo \ud074\ub798\uc2a4\ub294 Bar Entity \uc0dd\uc131\uc5d0 \ud544\uc218\uc801\uc73c\ub85c \ud544\uc694\ud55c \uc18d\uc131\uc744 \uc815\uc758\ud569\ub2c8\ub2e4."}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.img,{alt:"img_6.png",src:n(1396).A+"",width:"910",height:"696"}),"\ngenId() \uba54\uc18c\ub4dc\ub97c default \ub85c \uc0ac\uc6a9\ud558\uba74 \uc784\uc758\uc758 Id \ub97c \uc0dd\uc131\ud558\uac8c \ub429\ub2c8\ub2e4.\n\uac1c\ubc1c\uc790\uac00 Bar Entity \uc758 ID \uaddc\uce59\uc744 \uc5ec\uae30\uc11c \uc815\uc758\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.img,{alt:"img_7.png",src:n(607).A+"",width:"940",height:"1408"}),"\nCdo \ud074\ub798\uc2a4\uc758 sample() \uba54\uc18c\ub4dc\ub294 \uac00\uae09\uc801 \uad6c\ud604\ud558\ub294 \uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4. \ud654\uba74\uc744 \uac1c\ubc1c\ud558\ub294 \uac1c\ubc1c\uc790\uac00 \uc774 sample()\ub97c \ubcf4\uace0 \uc774 \ub370\uc774\ud130\ub97c \uc5b4\ub5bb\uac8c \uc785\ub825\ud574\uc57c \ud558\ub294\uc9c0 \uc27d\uac8c \ud30c\uc545\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-Java",children:'public static BarCdo sample() {\n//\n    return BarCdo.builder()\n            .name("Dave")\n            .age(33)\n            .build();\n}\n    ...\n'})}),"\n",(0,i.jsx)(e.p,{children:"Sample() \uba54\uc18c\ub4dc\ub294 Builder \ud328\ud134\uc744 \uc0ac\uc6a9\ud558\uc5ec \uc190\uc27d\uac8c Sample \ucf54\ub4dc\ub97c \uc791\uc131\ud558\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4."})]})}function p(t={}){const{wrapper:e}={...(0,s.R)(),...t.components};return e?(0,i.jsx)(e,{...t,children:(0,i.jsx)(g,{...t})}):g(t)}},2743:(t,e,n)=>{n.d(e,{A:()=>i});const i=n.p+"assets/images/cre-entity-aggregate-root-3c3f7fb470d1ebf9ae038a49d5c0ef4e.png"},607:(t,e,n)=>{n.d(e,{A:()=>i});const i=n.p+"assets/images/cre-entity-cdoSample-5989b6e366a6d5d1120427e2182c1efe.png"},2100:(t,e,n)=>{n.d(e,{A:()=>i});const i=n.p+"assets/images/cre-entity-domainentity-4ec056ae5cc8207bd93489f81a87562c.png"},1396:(t,e,n)=>{n.d(e,{A:()=>i});const i=n.p+"assets/images/cre-entity-genID-523c3852c924150219c99290428d01d7.png"},9549:(t,e,n)=>{n.d(e,{A:()=>i});const i=n.p+"assets/images/cre-entity-implements-DomainAggregate-5e9fab2564a31a6737d5626e890be9fe.png"},6670:(t,e,n)=>{n.d(e,{A:()=>i});const i=n.p+"assets/images/cre-entity-stageentity-10ac648bd8ca33c8dd53e88eeaf088d7.png"},5981:(t,e,n)=>{n.d(e,{A:()=>i});const i=n.p+"assets/images/cre-entity-type-d2b509f83b7158445e27cb590c3ad7e9.png"},3388:(t,e,n)=>{n.d(e,{A:()=>i});const i=n.p+"assets/images/create-entity-7f83819499329ff16cf6f423f7ba45af.png"},8453:(t,e,n)=>{n.d(e,{R:()=>r,x:()=>d});var i=n(6540);const s={},a=i.createContext(s);function r(t){const e=i.useContext(a);return i.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function d(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:r(t.components),i.createElement(a.Provider,{value:e},t.children)}}}]);