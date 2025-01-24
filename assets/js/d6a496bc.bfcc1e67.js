"use strict";(self.webpackChunkdocs_github_io=self.webpackChunkdocs_github_io||[]).push([[1998],{220:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>s,contentTitle:()=>d,default:()=>l,frontMatter:()=>r,metadata:()=>c,toc:()=>u});var t=i(4848),o=i(8453);const r={sidebar_position:5},d="@FieldSequence \uc5b4\ub178\ud14c\uc774\uc158 \uae30\ub2a5 \uc0ac\uc6a9",c={id:"studio-guide/sequence_kor",title:"@FieldSequence \uc5b4\ub178\ud14c\uc774\uc158 \uae30\ub2a5 \uc0ac\uc6a9",description:"\uac1c\uc694",source:"@site/docs/studio-guide/sequence_kor.md",sourceDirName:"studio-guide",slug:"/studio-guide/sequence_kor",permalink:"/docs/studio-guide/sequence_kor",draft:!1,unlisted:!1,editUrl:"https://gitlab.com/vizend/docs/-/edit/main/docs/studio-guide/sequence_kor.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Create Backend & Frontend Project",permalink:"/docs/studio-guide/project_eng"},next:{title:"Using of @FieldSequence annotation",permalink:"/docs/studio-guide/sequence_eng"}},s={},u=[{value:"\uac1c\uc694",id:"\uac1c\uc694",level:2},{value:"@FieldSequence \uc5b4\ub178\ud14c\uc774\uc158 \ucd94\uac00",id:"fieldsequence-\uc5b4\ub178\ud14c\uc774\uc158-\ucd94\uac00",level:2},{value:"\uc2dc\ud000\uc2a4 \uc0dd\uc131 \ucf54\ub4dc",id:"\uc2dc\ud000\uc2a4-\uc0dd\uc131-\ucf54\ub4dc",level:2}];function a(e){const n={code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"fieldsequence-\uc5b4\ub178\ud14c\uc774\uc158-\uae30\ub2a5-\uc0ac\uc6a9",children:"@FieldSequence \uc5b4\ub178\ud14c\uc774\uc158 \uae30\ub2a5 \uc0ac\uc6a9"}),"\n",(0,t.jsx)(n.h2,{id:"\uac1c\uc694",children:"\uac1c\uc694"}),"\n",(0,t.jsx)(n.p,{children:"\uc5b4\ub178\ud14c\uc774\uc158 \u2018@FieldSequence\u2019\ub85c \uc2dc\ud000\uc2a4 \uad00\ub828 \ucf54\ub4dc\ub97c \uc0dd\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,t.jsx)(n.h2,{id:"fieldsequence-\uc5b4\ub178\ud14c\uc774\uc158-\ucd94\uac00",children:"@FieldSequence \uc5b4\ub178\ud14c\uc774\uc158 \ucd94\uac00"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Java",children:"@Getter\n@Setter\n@NoArgsConstructor\npublic class Foo extends StageEntity {\n    //\n    private String name;\n    @FieldSequence\n    private int firstSequence;\n    @FieldSequence\n    private int secondSequence;\n...\n"})}),"\n",(0,t.jsx)(n.p,{children:"Foo Entity \uc758 \uc18d\uc131\uc744 \uc785\ub825\ud558\uace0 \ud544\uc694\ud55c \uacbd\uc6b0 \ud574\ub2f9 \uc18d\uc131 \uc704\uc5d0 \u2018@FieldSequence\u2019 \uc5b4\ub178\ud14c\uc774\uc158\uc744 \ucd94\uac00\ud558\uc5ec \uad00\ub828 \ucf54\ub4dc\ub97c \uc0dd\uc131\ud560 \uc218 \uc788\ub3c4\ub85d \ud569\ub2c8\ub2e4."}),"\n",(0,t.jsx)(n.h2,{id:"\uc2dc\ud000\uc2a4-\uc0dd\uc131-\ucf54\ub4dc",children:"\uc2dc\ud000\uc2a4 \uc0dd\uc131 \ucf54\ub4dc"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"img_1.png",src:i(4566).A+"",width:"792",height:"1648"})}),"\n",(0,t.jsx)(n.p,{children:"Backend code \ub97c \uc0dd\uc131\ud55c \ud6c4 FooLogic, FooStore, FooJpaStore \ubc0f FooJpaRepository \uc5d0 \uc2dc\ud000\uc2a4 \uad00\ub828 \ucf54\ub4dc\uac00 \ud568\uaed8 \uc0dd\uc131\uc774 \ub429\ub2c8\ub2e4."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Java",children:"public int nextFirstSequence(String fooId) {\n    /* Gen by Vizend Studio v6.1.0 */\n    return fooStore.nextFirstSequence(fooId, 1);\n}\npublic int nextSecondSequence(String fooId) {\n    /* Gen by Vizend Studio v6.1.0 */\n    return fooStore.nextSecondSequence(fooId, 1);\n}\npublic int[] nextFirstSequence(String fooId, int limit) {\n    /* Gen by Vizend Studio v6.1.0 */\n    int lastSeq = fooStore.nextFirstSequence(fooId, limit);\n    int[] sequences = new int[limit];\n    int index = 0;\n    for (int seq = lastSeq - limit + 1; seq <= lastSeq; seq++) {\n        sequences[index] = seq;\n        index++;\n    }\n    return sequences;\n}\npublic int[] nextSecondSequence(String fooId, int limit) {\n    /* Gen by Vizend Studio v6.1.0 */\n    int lastSeq = fooStore.nextSecondSequence(fooId, limit);\n    int[] sequences = new int[limit];\n    int index = 0;\n    for (int seq = lastSeq - limit + 1; seq <= lastSeq; seq++) {\n        sequences[index] = seq;\n        index++;\n    }\n    return sequences;\n}\n...\n"})}),"\n",(0,t.jsx)(n.p,{children:"FooLogic \ud074\ub798\uc2a4\uc5d0\uc11c \uc790\ub3d9 \uc0dd\uc131\ub41c \uc2dc\ud000\uc2a4 \ucf54\ub4dc\uc785\ub2c8\ub2e4."}),"\n",(0,t.jsx)(n.p,{children:"int nextFirstSequence(String fooId) \uba54\uc18c\ub4dc\ub294 fooId \uc5d0 \ud574\ub2f9\ud558\ub294 Foo \uc5d4\ud2f0\ud2f0\uc758 \ub2e4\uc74c \uc2dc\ud000\uc2a4(firstSequence) \uac12\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4. \uc989 1 \ub9cc\ud07c \uc99d\uac00\ud55c \uac12\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4. (\uc608, \ub9cc\uc77c \ud574\ub2f9 \uc2dc\ud000\uc2a4(firstSequence)\uac00 3 \uc774\uba74 1 \uc744 \uc99d\uac00\uc2dc\ud0a8 \ud6c4 \uadf8 \uac12\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.)"}),"\n",(0,t.jsx)(n.p,{children:"int nextSecondSequence(String fooId) \uba54\uc18c\ub4dc\ub294 \uc704\uc640 \ub3d9\uc77c\ud558\uba70 \ub2e8\uc9c0 \uc0ac\uc6a9\ud558\ub294 \uc2dc\ud000\uc2a4(secondSequence)\uac00 \ub2e4\ub985\ub2c8\ub2e4."}),"\n",(0,t.jsxs)(n.p,{children:["int[] nextFirstSequence(String fooId, int limit) \uba54\uc18c\ub4dc\ub294 fooId \uc5d0 \ud574\ub2f9\ud558\ub294 Foo \uc5d4\ud2f0\ud2f0\uc758 \ub2e4\uc74c \uc2dc\ud000\uc2a4(firstSequence) \uac12\uc744 \ubc30\uc5f4\ub85c \uc5ec\ub7ec \uac1c \ubc18\ud658\ud569\ub2c8\ub2e4. \uc989 limit \ub9cc\ud07c \uc99d\uac00\ud55c \ud6c4 \uc2dc\ud000\uc2a4 \ucd08\uae30\uac12\uacfc \uc99d\uac00\ud55c \uac12 \uc0ac\uc774\uc758 \uac12\ub4e4\uc744 \ubc30\uc5f4\ub85c \ubc18\ud658\ud569\ub2c8\ub2e4. (\uc608, \ub9cc\uc77c \u2018limit\u2019\uc774 3 \uc774\uace0 \ud574\ub2f9 \uc2dc\ud000\uc2a4(firstSequence)\uac00 3 \uc774\uba74 \u2018",6,"\u2019\uacfc \uac19\uc740 \ubc30\uc5f4\uc774 \ubc18\ud658\ub429\ub2c8\ub2e4.)"]}),"\n",(0,t.jsx)(n.p,{children:"int[] nextSecondSequence(String fooId) \uba54\uc18c\ub4dc\ub294 \uc704\uc640 \ub3d9\uc77c\ud558\uba70 \ub2e8\uc9c0 \uc0ac\uc6a9\ud558\ub294 \uc2dc\ud000\uc2a4(secondSequence)\uac00 \ub2e4\ub985\ub2c8\ub2e4."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Java",children:'@Generated("Gen by Vizend Studio v6.1.0")\npublic interface FooStore {\n    /* Gen by Vizend Studio v6.1.0 */\n    void create(Foo foo);\n    void createAll(List<Foo> foos);\n    Foo retrieve(String id);\n    Foo retrieve(QueryParams queryParams);\n    List<Foo> retrieveAll(List<String> fooIds);\n    List<Foo> retrieveList(QueryParams queryParams, Offset offset);\n    void update(Foo foo);\n    void delete(Foo foo);\n    void delete(String id);\n    boolean exists(String id);\n    int nextFirstSequence(String id, int increment);\n    int nextSecondSequence(String id, int increment);\n}\n...\n'})}),"\n",(0,t.jsx)(n.p,{children:"FooStore \uc778\ud130\ud398\uc774\uc2a4\uc5d0\uc11c \uc0dd\uc131\ub41c \uc2dc\ud000\uc2a4 \ucf54\ub4dc\ub294 nextFirstSequence(), nextSecondSequence() \uba54\uc18c\ub4dc\uc785\ub2c8\ub2e4."}),"\n",(0,t.jsx)(n.p,{children:"Int nextFirstSequence(String id, int increment) \ub294 id \uc5d0 \ud574\ub2f9\ud558\ub294 Foo \uc5d4\ud2f0\ud2f0\uc758 firstSequence \ub97c increment \ub9cc\ud07c \uc99d\uac00\uc2dc\ud0a8 \uac12\uc744 \ub9ac\ud134\ud569\ub2c8\ub2e4."}),"\n",(0,t.jsx)(n.p,{children:"Int nextSecondSequence(String id, int increment) \ub294 \uc704\uc640 \ub3d9\uc77c\ud558\uba70 \uc2dc\ud000\uc2a4\ub9cc secondSequence \ub85c \ub2e4\ub985\ub2c8\ub2e4."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Java",children:'@Override\npublic int nextFirstSequence(String id, int increment) {\n    /* Gen by Vizend Studio v6.1.0 */\n    fooJpaRepository.increaseFirstSequence(id, increment);\n    Optional<FooJpo> fooJpo = fooJpaRepository.findById(id);\n    if (fooJpo.isEmpty()) {\n        throw new NoSuchElementException("Foo id: " + id);\n    }\n    return fooJpo.get().getFirstSequence();\n}\n@Override\npublic int nextSecondSequence(String id, int increment) {\n    /* Gen by Vizend Studio v6.1.0 */\n    fooJpaRepository.increaseSecondSequence(id, increment);\n    Optional<FooJpo> fooJpo = fooJpaRepository.findById(id);\n    if (fooJpo.isEmpty()) {\n        throw new NoSuchElementException("Foo id: " + id);\n    }\n    return fooJpo.get().getSecondSequence();\n}\n...\n'})}),"\n",(0,t.jsx)(n.p,{children:"FooJpaStore \uc758 \uc2dc\ud000\uc2a4 \ucf54\ub4dc\uc785\ub2c8\ub2e4."}),"\n",(0,t.jsx)(n.p,{children:"JpaRepository \ub97c \uc0ac\uc6a9\ud558\uc5ec \uc2dc\ud000\uc2a4\ub97c \uc99d\uac00\uc2dc\ud0a4\uba70 \ud574\ub2f9 \uc5d4\ud2f0\ud2f0\uac00 \uc874\uc7ac\ud558\uc9c0 \uc54a\uc740 \uacbd\uc6b0 NoSuchElementException \uc744 \ubc1c\uc0dd\uc2dc\ud0b5\ub2c8\ub2e4."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Java",children:'@Generated("Gen by Vizend Studio v6.1.0")\npublic interface FooJpaRepository extends JpaRepository<FooJpo, String> {\n    /* Gen by Vizend Studio v6.1.0 */\n    @Modifying\n    @Query("update FooJpo a set a.firstSequence = a.firstSequence + :increment where id =\n            void increaseFirstSequence(@Param("id") String id, @Param("increment") int increment)\n    @Modifying\n    @Query("update FooJpo a set a.secondSequence = a.secondSequence + :increment whe\n            = :id")\n            void increaseSecondSequence(@Param("id") String id, @Param("increment") int increme\n}\n...\n'})}),"\n",(0,t.jsx)(n.p,{children:"FooJpaRepository \uc758 \uc2dc\ud000\uc2a4 \ucf54\ub4dc\uc785\ub2c8\ub2e4."}),"\n",(0,t.jsx)(n.p,{children:"\uc5d4\ud2f0\ud2f0 \ud14c\uc774\ube14\uc758 \uc2dc\ud000\uc2a4 \ud544\ub4dc\ub97c \uc5c5\ub370\uc774\ud2b8\ud558\ub294 \ucffc\ub9ac\uac00 JPQL \ub85c \uad6c\ud604\ub418\uc5c8\uc2b5\ub2c8\ub2e4. \uc77c\ubc18\uc801\uc73c\ub85c JPQL \uc740 DML Operation(insert, update, delete)\uc744 \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. @Modifying \uc5b4\ub178\ud14c\uc774\uc158\uc744 \uc120\uc5b8\ud568\uc73c\ub85c\uc368 DML \uc774 \uac00\ub2a5\ud558\uac8c \ud558\uc600\uc2b5\ub2c8\ub2e4."})]})}function l(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},4566:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/se-sequenceTree-f27a43b600671b686517df135ded9330.png"},8453:(e,n,i)=>{i.d(n,{R:()=>d,x:()=>c});var t=i(6540);const o={},r=t.createContext(o);function d(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);