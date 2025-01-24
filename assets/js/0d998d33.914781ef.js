"use strict";(self.webpackChunkdocs_github_io=self.webpackChunkdocs_github_io||[]).push([[6223],{3254:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>d,toc:()=>o});var r=t(4848),a=t(8453);const s={sidebar_position:14},i="Field Encryption",d={id:"studio-guide/encrypt_eng",title:"Field Encryption",description:"Encryption technology is generally used when storing sensitive information in a database. For example, field encryption can be used to prevent data breaches of passwords required for login functionality.",source:"@site/docs/studio-guide/encrypt_eng.md",sourceDirName:"studio-guide",slug:"/studio-guide/encrypt_eng",permalink:"/docs/studio-guide/encrypt_eng",draft:!1,unlisted:!1,editUrl:"https://gitlab.com/vizend/docs/-/edit/main/docs/studio-guide/encrypt_eng.md",tags:[],version:"current",sidebarPosition:14,frontMatter:{sidebar_position:14},sidebar:"tutorialSidebar",previous:{title:"Field\uc554\ud638\ud654",permalink:"/docs/studio-guide/encrypt_kor"},next:{title:"Entity \uc640 Cdo \uc0dd\uc131",permalink:"/docs/studio-guide/cre-entityCdo_kor"}},c={},o=[{value:"Usage of @FieldEncrypted",id:"usage-of-fieldencrypted",level:2},{value:"Create Backend Codes",id:"create-backend-codes",level:2},{value:"Create Feature Codes",id:"create-feature-codes",level:2}];function l(e){const n={code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"field-encryption",children:"Field Encryption"}),"\n",(0,r.jsx)(n.p,{children:"Encryption technology is generally used when storing sensitive information in a database. For example, field encryption can be used to prevent data breaches of passwords required for login functionality."}),"\n",(0,r.jsx)(n.h2,{id:"usage-of-fieldencrypted",children:"Usage of @FieldEncrypted"}),"\n",(0,r.jsxs)(n.p,{children:["After creating the Entity class, input the login-related attributes.\n",(0,r.jsx)(n.img,{alt:"img.png",src:t(998).A+"",width:"1724",height:"598"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Java",children:"@Getter\n@Setter\n@NoArgsConstructor\npublic class Bar extends StageEntity {\n    //\n    public enum BarField {\n        name, userId, password\n    }\n\n    private String name;\n    private String userId;\n    @FieldEncrypted\n    private String password;\n    ...\n"})}),"\n",(0,r.jsx)(n.p,{children:'To prevent sentitive data breaches of password attribute, the "@FieldEncrypted" annotation has been added.'}),"\n",(0,r.jsx)(n.p,{children:"After completing all attributes and settings, use the automation feature to create the modifyAttributes() method and an internal Enum that lists the fields. Also enter the attributes to BarCdo class as well."}),"\n",(0,r.jsx)(n.p,{children:"Use \u2018Gen the field enum\u2019 to create inner Enum."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Java",children:"public class Bar extends StageEntity {\n    //\n    public enum BarField {\n        name, userId, password\n    }\n    ...\n"})}),"\n",(0,r.jsx)(n.p,{children:"Use \u2018Update modifyAttributes()\u2019 to modify original codes."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Java",children:'@Override\nprotected void modifyAttributes(NameValueList nameValues) {\n    //\n    for (NameValue nameValue : nameValues.list()) {\n        String value = nameValue.getValue();\n        switch(nameValue.getName()) {\n            case "name":\n                this.name = value;\n                break;\n            case "userId":\n                this.userId = value;\n                break;\n            case "password":\n                this.password = value;\n                break;\n            default:\n                throw new IllegalArgumentException("Update not allowed: " + nameValue);\n        }\n    }\n}\n...\n'})}),"\n",(0,r.jsx)(n.p,{children:"Enter Attributes to BarCdo Class"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Java",children:"@Getter\n@Setter\n@Builder\n@AllArgsConstructor\n@NoArgsConstructor\npublic class BarCdo extends CreationDataObject {\n    //\n    private String name;\n    private String userId;\n    private  String password;\n    ...\n"})}),"\n",(0,r.jsx)(n.h2,{id:"create-backend-codes",children:"Create Backend Codes"}),"\n",(0,r.jsxs)(n.p,{children:["With the current setup, generate backend codes.\n",(0,r.jsx)(n.img,{alt:"img_1.png",src:t(1316).A+"",width:"1704",height:"1018"})]}),"\n",(0,r.jsxs)(n.p,{children:["After the completion of Backend Codes generation, you can verify the @FieldEncrypted related code in the BarJpo class.\n",(0,r.jsx)(n.img,{alt:"img_2.png",src:t(8071).A+"",width:"2050",height:"1180"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Java",children:'@Getter\n@Setter\n@NoArgsConstructor\n@Entity\n@Table(name = "BAR")\n@Generated("Gen by Vizend Studio v6.1.0")\npublic class BarJpo extends StageEntityJpo {\n    /* Gen by Vizend Studio v6.1.0 */\n    private String name;\n    private String userId;\n    private String password;\n    public BarJpo(Bar bar) {\n        /* Gen by Vizend Studio v6.1.0 */\n        super(bar);\n        BeanUtils.copyProperties(bar, this);\n        this.password = ValueEncryptor.encrypt(bar.getPassword());\n    }\n    public Bar toDomain() {\n        /* Gen by Vizend Studio v6.1.0 */\n        Bar bar = new Bar(getId(), genRequesterKey());\n        BeanUtils.copyProperties(this, bar);\n        bar.setPassword(ValueEncryptor.decrypt(this.password));\n        return bar;\n    }\n    ...\n'})}),"\n",(0,r.jsx)(n.p,{children:"this.password = ValueEncryptor.encrypt(bar.getPassword()); encrypts the password information entered by the user, it will transform into an unreadable string that others cannot understand before storing it in the database."}),"\n",(0,r.jsx)(n.p,{children:"In contrast, bar.setPassword(ValueEncryptor.decrypt(this.password)); retrieves the encrypted password information stored in the database, decrypts it back into its original password form, and sets it to the Entity field."}),"\n",(0,r.jsx)(n.h2,{id:"create-feature-codes",children:"Create Feature Codes"}),"\n",(0,r.jsx)(n.p,{children:"In order to check the database encryption functionality, we will add a few features. First, we will add a register feature to the Bar Entity."}),"\n",(0,r.jsx)(n.p,{children:"Create a Feature Request through module Fa\xe7ade."}),"\n",(0,r.jsxs)(n.p,{children:["Select the bar-fa\xe7ade -> Vizend Studio -> Click \u2019Create Feature Request\u2019.\n",(0,r.jsx)(n.img,{alt:"img_3.png",src:t(8033).A+"",width:"1874",height:"958"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"img_4.png",src:t(7588).A+"",width:"1000",height:"452"})}),"\n",(0,r.jsx)(n.p,{children:"Select \u2018CommandRequst\u2019 to create register feature."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Java",children:"@Getter\n@Setter\n@AllArgsConstructor\n@NoArgsConstructor\n@AuthorizedRole(BarRole.Director)\npublic class RegisterBarCommand extends CommandRequest {\n    //\n    private String name;\n    private String userId;\n    private String password;\n\n    public void validate() {\n        /**\n         *  FIXME : User Implementation\n         * Example.\n         * Assert.hasText(skuNo, \"'skuNo' is required\");\n         * Assert.isTrue(increaseRate > 0, \"'increaseRate' is greater than 0\");\n         */\n    }\n    ...\n"})}),"\n",(0,r.jsx)(n.p,{children:"Enter the relevant attributes and modify the validate() method as needed."}),"\n",(0,r.jsx)(n.p,{children:"After completing the input and modifications, generate the Feature code."}),"\n",(0,r.jsxs)(n.p,{children:["Select the RegisterBarCommand -> Vizend Studio -> Click \u2019Create Feature Codes\u2019.\n",(0,r.jsx)(n.img,{alt:"img_5.png",src:t(4498).A+"",width:"1940",height:"1048"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"img_6.png",src:t(5518).A+"",width:"740",height:"230"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"img_7.png",src:t(6297).A+"",width:"778",height:"1522"})}),"\n",(0,r.jsx)(n.p,{children:"FooBarFlow, FooBarFlowFacade, FooBarFlowResource have been generated."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Java",children:"@Service\n@Transactional\n@RequiredArgsConstructor\npublic class FooBarFlow {\n    //\n\n    public String registerBar(String name, String userId, String password) {\n        /*FIXME: User Implementation*/\n        return null;\n    }\n}\n...\n"})}),"\n",(0,r.jsx)(n.p,{children:"The registerBar() method in the FooBarFlow class is the part that developers need to implement."}),"\n",(0,r.jsx)(n.p,{children:"Below is an example of register-related code."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Java",children:"@Service\n@Transactional\n@RequiredArgsConstructor\npublic class FooBarFlow {\n    //\n    private final BarLogic barLogic;\n\n    public String registerBar(String name, String userId, String password) {\n        BarCdo barCdo = BarCdo.builder()\n                .name(name)\n                .userId(userId)\n                .password(password)\n                .build();\n\n        String id = barLogic.registerBar(barCdo);\n        return id;\n    }\n}\n...\n"})}),"\n",(0,r.jsx)(n.p,{children:"If you declare the field as final, Spring will implant the BarLogic bean into that field via the constructor of the respective class."}),"\n",(0,r.jsx)(n.p,{children:"Next, we will add a retrieve feature to the Bar Entity."}),"\n",(0,r.jsxs)(n.p,{children:["Select the bar-fa\xe7ade -> Vizend Studio -> Click \u2019Create Feature Request\u2019.\n",(0,r.jsx)(n.img,{alt:"img_8.png",src:t(2692).A+"",width:"1554",height:"948"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"img_9.png",src:t(6808).A+"",width:"1010",height:"452"})}),"\n",(0,r.jsx)(n.p,{children:"Select \u2018QueryRequest\u2019 to create find feature."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"img_10.png",src:t(2500).A+"",width:"1008",height:"450"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"img_11.png",src:t(6259).A+"",width:"732",height:"1204"})}),"\n",(0,r.jsx)(n.p,{children:"FindBarQuery has been generated. Once the FindBarQuery is created, add the userId field to enable querying by userId, and input the query result type as the generic type of QueryRequest."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Java",children:"@Getter\n@Setter\n@AllArgsConstructor\n@NoArgsConstructor\n@AuthorizedRole(BarRole.Director)\npublic class FindBarQuery extends QueryRequest<Bar> {\n    //\n    private String userId;\n\n    public void validate() {\n        /**\n         *  FIXME : User Implementation\n         * Example.\n         * Assert.hasText(skuNo, \"'skuNo' is required\");\n         * Assert.isTrue(increaseRate > 0, \"'increaseRate' is greater than 0\");\n         */\n    }\n    ...\n"})}),"\n",(0,r.jsx)(n.p,{children:"After completing the input and modifications, generate the Feature code."}),"\n",(0,r.jsxs)(n.p,{children:["Select the FindBarQuery -> Vizend Studio -> Click \u2019Create Feature Codes\u2019.\n",(0,r.jsx)(n.img,{alt:"img_12.png",src:t(7837).A+"",width:"1826",height:"1026"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"img_13.png",src:t(9859).A+"",width:"744",height:"236"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"img_14.png",src:t(7219).A+"",width:"768",height:"1698"})}),"\n",(0,r.jsx)(n.p,{children:"FooBarSeek, FooBarSeekFacade, FooBarSeekResource have been generated."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Java",children:"@Service\n@Transactional\n@RequiredArgsConstructor\npublic class FooBarSeek {\n    //\n\n    public Bar findBar(String userId) {\n        /*FIXME: User Implementation*/\n        return null;\n    }\n}\n...\n"})}),"\n",(0,r.jsx)(n.p,{children:"The findBar() method in the FooBarSeek class is the part that developers need to implement."}),"\n",(0,r.jsxs)(n.p,{children:["Below is an example of retrieve-related code.\n",(0,r.jsx)(n.img,{alt:"img_15.png",src:t(3438).A+"",width:"930",height:"828"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Java",children:"@Service\n@Transactional\n@RequiredArgsConstructor\npublic class FooBarSeek {\n    //\n    private final BarLogic barLogic;\n\n    public Bar findBar(String userId) {\n        Bar bar = barLogic.findByUserId(userId);\n        return bar;\n    }\n}\n...\n"})}),"\n",(0,r.jsx)(n.p,{children:"If you declare the field as final, Spring will implant the BarLogic bean into that field via the constructor of the respective class."}),"\n",(0,r.jsx)(n.p,{children:"findByUserId\u2019 feature needs to added to the OptionStore interface. (Manual Information is in the Backend Code generation chapter.)"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Java",children:"public interface BarOptionStore {\n    //\n    Bar retrieveByUserId(String userId);\n}\n...\n"})}),"\n",(0,r.jsx)(n.p,{children:"The method naming should adhere to the conventions of QueryMethod in Spring Data."}),"\n",(0,r.jsxs)(n.p,{children:["After adding the relevant content to BarOptionStore, you can generate Option Store Codes through the studio.\n",(0,r.jsx)(n.img,{alt:"img_16.png",src:t(7230).A+"",width:"1502",height:"594"}),"\nThe code related to findByUserId() method is generated in the BarLogic, BarOptionJpaStore class, and BarJpaRepository."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Java",children:"public Bar findByUserId(String userId) {\n    /* Gen by Vizend Studio v6.1.0 */\n    return barOptionStore.retrieveByUserId(userId);\n}\n...\n"})}),"\n",(0,r.jsx)(n.p,{children:"BarLogic Class"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Java",children:"@Override\npublic Bar retrieveByUserId(String userId) {\n    /* Gen by Vizend Studio v6.1.0 */\n    return barJpaRepository.findByUserId(userId).map(BarJpo::toDomain).orElse(null);\n}\n...\n"})}),"\n",(0,r.jsx)(n.p,{children:"BarOptionJpaStroe Class"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Java",children:"public interface BarJpaRepository extends JpaRepository<BarJpo, String> {\n    /* Gen by Vizend Studio v6.1.0 */\n    Optional<BarJpo> findByUserId(String userId);\n}\n...\n"})}),"\n",(0,r.jsx)(n.p,{children:"BarJpaRepository Interface"}),"\n",(0,r.jsxs)(n.p,{children:["Before running the tests, refer to the schema.script file to configure the corresponding database and account.\n",(0,r.jsx)(n.img,{alt:"img_17.png",src:t(1614).A+"",width:"1312",height:"1290"}),"\nIn the terminal, use the mysql command to connect to MariaDB and create the bar database."]}),"\n",(0,r.jsxs)(n.p,{children:["You can run Spring Boot and use Swagger-UI to verify the list of provided APIs.\n",(0,r.jsx)(n.img,{alt:"img_18.png",src:t(1667).A+"",width:"3142",height:"652"}),'\nThe "register-bar" and "find-bar" features have been added.']}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.img,{alt:"img_19.png",src:t(3406).A+"",width:"2900",height:"412"}),'\nClick "Try it out" button to input data.']}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.img,{alt:"img_20.png",src:t(5831).A+"",width:"2890",height:"1286"}),'\nAfter entering the data, click "Execute" button to verify if it has been successfully stored.']}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.img,{alt:"img_21.png",src:t(7375).A+"",width:"2862",height:"1750"}),"\nThe data has been successfully stored."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.img,{alt:"img_22.png",src:t(9076).A+"",width:"2922",height:"310"}),"\nYou can also check it in the terminal."]}),"\n",(0,r.jsx)(n.p,{children:"The password part is stored encrypted"}),"\n",(0,r.jsx)(n.p,{children:"You can also verify in Swagger-UI whether the encrypted password is returned as the original input string when retrieving data stored in the database."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.img,{alt:"img_23.png",src:t(5043).A+"",width:"2932",height:"402"}),'\nClick "Try it out" button to input userId information.']}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.img,{alt:"img_24.png",src:t(6135).A+"",width:"2900",height:"1292"}),'\nAfter entering the userId, click "Execute" button to verify if it has been successfully retrieved.']}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.img,{alt:"img_25.png",src:t(6828).A+"",width:"2856",height:"1656"}),"\nThe encrypted password has been successfully decrypted and returned."]})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8071:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/enc-BarJpo-13eafff3f7027fe6c7033823a253900d.png"},7219:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/enc-FindForQueryCodes-6e412caf6bd59d96aa37f32aaa40fdec.png"},6135:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/enc-add-userId-7868e13fced550dbb358f074dccc2c60.png"},998:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/enc-attributesForBarClass-76b7e42dac0afee9f18851319554914a.png"},9859:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/enc-barForQuery-46165af1532118073a6c28ed19d76f5b.png"},7588:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/enc-commandCreate-e2ce2203b572de0ffe2caddb7963e8f8.png"},1316:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/enc-create-backendcodes-bar-49e049c3e3af25212ac8e1a6c2aa43e4.png"},4498:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/enc-createFeatureCodes1-aee51bce69fec7188ef939040dd38571.png"},7230:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/enc-createOptionStoreCode-234a7a4a21792ab270083d36bc75c77b.png"},2500:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/enc-creation-eeee3821dbc63c2ad3b3b521702d0e1b.png"},6297:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/enc-featureTree-b16ed03ebae2925756f537bdf731ec75.png"},7837:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/enc-find-featureCodes-a560e0855adfc2b959f43d665b7ae5ed.png"},3438:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/enc-findById-e0ed0fcfa42206c10c81fa8e012d360e.png"},5518:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/enc-flowName-ac94ae0923988047ee58eb04f162d15e.png"},6808:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/enc-queryRequest-6e30b855552eba3f4cede76df6c59de4.png"},6259:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/enc-queryTree-cc7106897292b2806d0997cc4b954285.png"},8033:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/enc-requestFeture-f58386aa9dda85aa4d776ad33e899e03.png"},2692:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/enc-requestFeture2-3cb32c9561e7fe79d4274ed1c8bd9ddf.png"},5831:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/enc-save-data-9f9d4707dd8ff837a19732a1fc959178.png"},9076:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/enc-saveTerminal-dd40a6051d4e4dabf666993d44752395.png"},1614:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/enc-schema-5f75505a77509a247d6bad15044b07b2.png"},6828:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/enc-swagger-find-ok-057e220d404a069d4735aeb79ea7a236.png"},7375:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/enc-swagger-saveOK-1527a0ce8c890780976951838efecfb0.png"},3406:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/enc-swagger-tryitout-db6b7b42d1ec06f1d384147adf728316.png"},1667:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/enc-swagger-50a44606e817effe14bc319922164b56.png"},5043:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/enc-tryitoutForFind-5e5a83ac996473388a8d7b0623498040.png"},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>d});var r=t(6540);const a={},s=r.createContext(a);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);