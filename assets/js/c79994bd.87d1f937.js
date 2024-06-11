"use strict";(self.webpackChunkdocs_github_io=self.webpackChunkdocs_github_io||[]).push([[8790],{9336:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>u,frontMatter:()=>d,metadata:()=>s,toc:()=>c});var o=n(4848),i=n(8453);const d={sidebar_position:10},r="Usage of VoidEntity",s={id:"studio-guide/voidEntity_eng",title:"Usage of VoidEntity",description:"Overview",source:"@site/docs/studio-guide/voidEntity_eng.md",sourceDirName:"studio-guide",slug:"/studio-guide/voidEntity_eng",permalink:"/docs/studio-guide/voidEntity_eng",draft:!1,unlisted:!1,editUrl:"https://gitlab.com/vizend/docs/-/edit/main/docs/studio-guide/voidEntity_eng.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"VoidEntity \uc0ac\uc6a9 \ubc29\ubc95",permalink:"/docs/studio-guide/voidEntity_kor"},next:{title:"Entity, Cdo  \uc0dd\uc131\uc744 \uc704\ud55c YAML \uc791\uc131 \uac00\uc774\ub4dc",permalink:"/docs/studio-guide/yaml_kor"}},a={},c=[{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2}];function l(e){const t={code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"usage-of-voidentity",children:"Usage of VoidEntity"}),"\n",(0,o.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,o.jsx)(t.p,{children:"To directly define the identity of an Entity, you can use VoidEntity in Studio. The identity used in existing DomainEntity and StageEntity will be managed within the platform."}),"\n",(0,o.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"img.png",src:n(7411).A+"",width:"328",height:"294"})}),"\n",(0,o.jsx)(t.p,{children:"Select the menu for creating an Entity, and choose VoidEntity as the Entity type from the following dialogue box."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-java",children:"@Getter\n@Setter\n@NoArgsConstructor\npublic class Foo extends VoidEntity {\n\n    public Foo(String id) {\n        // TODO : Set the id to your own value\n    }\n\n    public Foo(FooCdo fooCdo) {\n        super();\n        BeanUtils.copyProperties(fooCdo, this);\n    }\n\n    @Override\n    public String getId() {\n        // TODO : Get the id from your own value\n        return null;\n    }\n...\n"})}),"\n",(0,o.jsx)(t.p,{children:"Here's a snippet of the generated code for VoidEntity. Developers need to implement the constructor and the internals of the get method to exchange identity with other platform codes such as Logic or Event."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-java",children:"@Getter\n@Setter\n@NoArgsConstructor\npublic class Foo extends VoidEntity {\n    @FieldId\n    private String myFooId;\n    private String name;\n\n    public Foo(String id) {\n        this.myFooId = id;\n    }\n\n    public Foo(FooCdo fooCdo) {\n        super();\n        BeanUtils.copyProperties(fooCdo, this);\n    }\n\n    @Override\n    public String getId() {\n        return myFooId;\n    }\n...\n"})}),"\n",(0,o.jsx)(t.p,{children:"In the above code, myFooId is the entity ID. To inform Studio that myFooId is an ID, we add the '@FieldId' annotation. Then, we implement the constructor and getId method."}),"\n",(0,o.jsx)(t.p,{children:"After that, select the Foo entity to generate all other codes. Since the identity is located in the Foo entity, the generated code will be slightly different from StageEntity and DomainEntity."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-java",children:'@Getter\n@Setter\n@NoArgsConstructor\n@Entity\n@Table(name = "FOO")\npublic class FooJpo implements JsonSerializable {\n    /* Gen by Vizend Studio v5.1.0 */\n    @Id\n    private String myFooId;\n    private String name;\n\n    public FooJpo(Foo foo) {\n        /* Gen by Vizend Studio v5.1.0 */\n        BeanUtils.copyProperties(foo, this);\n    }\n\n    public Foo toDomain() {\n        /* Gen by Vizend Studio v5.1.0 */\n        Foo foo = new Foo();\n        BeanUtils.copyProperties(this, foo);\n        return foo;\n    }\n...\n'})}),"\n",(0,o.jsx)(t.p,{children:"In the generated JPO, the '@Id' annotation has been applied to myFooId. Additionally, the constructor and toDomain method code in the JPO differs from that of the existing DomainEntity's JPO."}),"\n",(0,o.jsx)(t.p,{children:"The usage of VoidEntity is shown above."})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},7411:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/ve-aggregate-entity-662e16066d8a1b31dbf761b4b62ec9de.png"},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>s});var o=n(6540);const i={},d=o.createContext(i);function r(e){const t=o.useContext(d);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(d.Provider,{value:t},e.children)}}}]);