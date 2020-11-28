(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{144:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return o}));var n=a(2),r=a(6),i=(a(0),a(182)),c={id:"getting-started",title:"Getting started",sidebar_label:"Getting started"},s={unversionedId:"guides/getting-started",id:"version-7.0.0/guides/getting-started",isDocsHomePage:!1,title:"Getting started",description:"Travis (.com)",source:"@site/versioned_docs/version-7.0.0/guides/getting-started.md",slug:"/guides/getting-started",permalink:"/docs/guides/getting-started",editUrl:"https://github.com/nartc/mapper/edit/master/automapper-docusaurus/versioned_docs/version-7.0.0/guides/getting-started.md",version:"7.0.0",sidebar_label:"Getting started",sidebar:"version-7.0.0/docs",previous:{title:"Alternatives",permalink:"/docs/introduction/alternatives"},next:{title:"Basic concepts",permalink:"/docs/guides/basic-concept"}},l=[{value:"Lodash Note",id:"lodash-note",children:[]},{value:"Support",id:"support",children:[]},{value:"Example",id:"example",children:[]}],p={rightToc:l};function o(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"https://img.shields.io/travis/com/nartc/mapper?label=travis&style=for-the-badge",alt:"Travis (.com)"})),"\n",Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"https://img.shields.io/bundlephobia/minzip/@nartc/automapper?label=bundlephobia&style=for-the-badge",alt:"npm bundle size (scoped)"})),"\n",Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"https://img.shields.io/npm/dt/@nartc/automapper?label=total&style=for-the-badge",alt:"npm"})),"\n",Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"https://img.shields.io/npm/v/@nartc/automapper?style=for-the-badge",alt:"npm (scoped)"})),"\n",Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"https://img.shields.io/npm/l/@nartc/automapper?style=for-the-badge",alt:"NPM"})),"\n",Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"https://img.shields.io/coveralls/github/nartc/mapper?style=for-the-badge",alt:"Coveralls github"})),"\n",Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"https://img.shields.io/snyk/vulnerabilities/github/nartc/mapper?style=for-the-badge",alt:"Snyk Vulnerabilities for GitHub Repo"}))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"NPM")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"npm install @nartc/automapper\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"npm i @nartc/automapper\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Yarn:")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"yarn add @nartc/automapper\n")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"@nartc/automapper")," utilizes ",Object(i.b)("inlineCode",{parentName:"p"},"reflect-metadata")," for the ",Object(i.b)("strong",{parentName:"p"},"Reflection")," capabilities as a ",Object(i.b)("inlineCode",{parentName:"p"},"peerDependency")," so you will also need to install ",Object(i.b)("inlineCode",{parentName:"p"},"reflect-metadata")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"npm i reflect-metadata\n")),Object(i.b)("p",null,"In ",Object(i.b)("inlineCode",{parentName:"p"},"tsconfig.json"),", you need to make sure to turn on ",Object(i.b)("inlineCode",{parentName:"p"},"emitDecoratorMetadata")," and ",Object(i.b)("inlineCode",{parentName:"p"},"experimentalDecorators")," flags as ",Object(i.b)("inlineCode",{parentName:"p"},"@nartc/automapper")," makes use of ",Object(i.b)("strong",{parentName:"p"},"Decorators"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'// sample tsconfig.json\n\n{\n  "compilerOptions": {\n    "emitDecoratorMetadata": true,\n    "experimentalDecorators": true\n  }\n}\n')),Object(i.b)("h3",{id:"lodash-note"},"Lodash Note"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"@nartc/automapper")," uses ",Object(i.b)("inlineCode",{parentName:"p"},"lodash.set")," from ",Object(i.b)("inlineCode",{parentName:"p"},"lodash"),". Since ",Object(i.b)("inlineCode",{parentName:"p"},"set")," is the only method that ",Object(i.b)("inlineCode",{parentName:"p"},"@nartc/automapper")," needs from ",Object(i.b)("inlineCode",{parentName:"p"},"lodash"),", I only have ",Object(i.b)("inlineCode",{parentName:"p"},"lodash.set")," installed as a single-method library to minimize the bundle size as much as possible.\n",Object(i.b)("inlineCode",{parentName:"p"},"lodash.set")," is a ",Object(i.b)("inlineCode",{parentName:"p"},"dependency")," so it will be installed automatically with ",Object(i.b)("inlineCode",{parentName:"p"},"@nartc/automapper"),"."),Object(i.b)("h3",{id:"support"},"Support"),Object(i.b)("ul",{className:"contains-task-list"},Object(i.b)("li",Object(n.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(n.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","Basic Mapping between two classes"),Object(i.b)("li",Object(n.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(n.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","Basic Mapping for nested classes"),Object(i.b)("li",Object(n.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(n.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","Mapping Inheritance - with caveats regarding typings."),Object(i.b)("li",Object(n.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(n.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","Array/List Mapping"),Object(i.b)("li",Object(n.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(n.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","Flattening"),Object(i.b)("li",Object(n.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(n.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","ReverseMap"),Object(i.b)("li",Object(n.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(n.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","Value Converters"),Object(i.b)("li",Object(n.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(n.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","Value Resolvers"),Object(i.b)("li",Object(n.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(n.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","Async"),Object(i.b)("li",Object(n.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(n.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","Before/After Callback"),Object(i.b)("li",Object(n.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(n.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","Naming Conventions"),Object(i.b)("li",Object(n.a)({parentName:"ul"},{className:"task-list-item"}),Object(i.b)("input",Object(n.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","Null Substitution - ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/lqmanh"}),"@lqmanh")," pointed out the difference in ",Object(i.b)("inlineCode",{parentName:"li"},"fromValue()")," and ",Object(i.b)("inlineCode",{parentName:"li"},"nullSubstitution()")," use-case, and that difference is totally valid. Hence, ",Object(i.b)("inlineCode",{parentName:"li"},"nullSubstitution")," is now supported.")),Object(i.b)("h3",{id:"example"},"Example"),Object(i.b)("p",null,"Now you can start decorating your class's properties with ",Object(i.b)("inlineCode",{parentName:"p"},"AutoMap")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"class User {\n  @AutoMap()\n  firstName: string;\n  @AutoMap()\n  lastName: string;\n  @AutoMap()\n  age: number;\n  @AutoMap()\n  bio: string;\n}\n\nclass UserVm {\n  @AutoMap()\n  firstName: string;\n  @AutoMap()\n  lastName: string;\n  @AutoMap()\n  age: number;\n  @AutoMap()\n  bio: string;\n}\n\nMapper.createMap(User, UserVm);\n\n// A User instance. Can also be fetched from the database\nconst user = new User();\nuser.firstName = 'Chau';\nuser.lastName = 'Tran';\nuser.age = 28;\nuser.bio = 'Developer';\n\n/**\n * User { firstName: 'Chau', lastName: 'Tran', age: 28, bio: 'Developer' }\n */\n\nconst vm = Mapper.map(user, UserVm);\n/**\n * UserVm { firstName: 'Chau', lastName: 'Tran', age: 28, bio: 'Developer' }\n */\n\n// Pseudo code to get a list of Users\nconst users = this.db.User.findAll();\nconst vms = Mapper.mapArray(users, UserVm);\n/**\n * [UserVm, UserVm, UserVm ...]\n */\n")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"More complex mapping examples will be addressed in later sections. And you probably already notice the verbose issue with ",Object(i.b)("inlineCode",{parentName:"p"},"@AutoMap()"),", check out the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/plugin"}),"Plugin")," section to learn how to address this. Throughout the documentations, I will keep the ",Object(i.b)("inlineCode",{parentName:"p"},"@AutoMap()")," decorator in the sample snippets to make the documentations clear.")))}o.isMDXComponent=!0},182:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),o=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},b=function(e){var t=o(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=o(a),u=n,d=b["".concat(c,".").concat(u)]||b[u]||m[u]||i;return a?r.a.createElement(d,s(s({ref:t},p),{},{components:a})):r.a.createElement(d,s({ref:t},p))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,c=new Array(i);c[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,c[1]=s;for(var p=2;p<i;p++)c[p]=a[p];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);