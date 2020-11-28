(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{182:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),l=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},b=function(e){var t=l(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=l(n),u=a,d=b["".concat(i,".").concat(u)]||b[u]||m[u]||o;return n?r.a.createElement(d,p(p({ref:t},s),{},{components:n})):r.a.createElement(d,p({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},75:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));var a=n(2),r=n(6),o=(n(0),n(182)),i={id:"basic",title:"ForMember Basic",sidebar_label:"Basic"},p={unversionedId:"usages/mapping-configuration/for-member/basic",id:"version-7.0.0/usages/mapping-configuration/for-member/basic",isDocsHomePage:!1,title:"ForMember Basic",description:"Beside the auto-configuration, @nartc/automapper needs to provide a way to allow the consumers to customize the mapping configurations on as many things as possible.",source:"@site/versioned_docs/version-7.0.0/usages/mapping-configuration/for-member/basic.md",slug:"/usages/mapping-configuration/for-member/basic",permalink:"/docs/usages/mapping-configuration/for-member/basic",editUrl:"https://github.com/nartc/mapper/edit/master/automapper-docusaurus/versioned_docs/version-7.0.0/usages/mapping-configuration/for-member/basic.md",version:"7.0.0",sidebar_label:"Basic",sidebar:"version-7.0.0/docs",previous:{title:"Initialize",permalink:"/docs/usages/init/initialize"},next:{title:"MapFrom",permalink:"/docs/usages/mapping-configuration/for-member/map-from"}},c=[],s={rightToc:c};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Beside the ",Object(o.b)("strong",{parentName:"p"},"auto-configuration"),", ",Object(o.b)("inlineCode",{parentName:"p"},"@nartc/automapper")," needs to provide a way to allow the consumers to ",Object(o.b)("strong",{parentName:"p"},"customize")," the mapping configurations on as many things as possible.\nLet's take a look at the following snippet:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"class User {\n  @AutoMap() firstName: string;\n  @AutoMap() lastName: string;\n  @AutoMap() age: number;\n  @AutoMap() bio: string;\n}\n\nclass UserVm {\n  @AutoMap() firstName: string;\n  @AutoMap() lastName: string;\n  @AutoMap() fullName: string;\n  @AutoMap() age: number;\n  @AutoMap() isAdult: boolean;\n  @AutoMap() bio: string;\n}\n")),Object(o.b)("p",null,"When you run ",Object(o.b)("inlineCode",{parentName:"p"},"Mapper.createMap(User, UserVm)"),", the following properties are ",Object(o.b)("strong",{parentName:"p"},"auto-configured")," on ",Object(o.b)("inlineCode",{parentName:"p"},"UserVm")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript",metastring:"{2,3,5,7}","{2,3,5,7}":!0}),"class UserVm {\n  @AutoMap() firstName: string;\n  @AutoMap() lastName: string;\n  @AutoMap() fullName: string;\n  @AutoMap() age: number;\n  @AutoMap() isAdult: boolean;\n  @AutoMap() bio: string;\n}\n")),Object(o.b)("p",null,"Now when you invoke ",Object(o.b)("inlineCode",{parentName:"p"},"map()")," to map from an instance of ",Object(o.b)("inlineCode",{parentName:"p"},"User")," to ",Object(o.b)("inlineCode",{parentName:"p"},"UserVm"),", you will get an ",Object(o.b)("inlineCode",{parentName:"p"},"Error")," showing some ",Object(o.b)("strong",{parentName:"p"},"unmapped properties"),". Namely, ",Object(o.b)("inlineCode",{parentName:"p"},"fullName")," and ",Object(o.b)("inlineCode",{parentName:"p"},"isAdult")," in this case.\n",Object(o.b)("inlineCode",{parentName:"p"},"fullName")," and ",Object(o.b)("inlineCode",{parentName:"p"},"isAdult")," are not in ",Object(o.b)("inlineCode",{parentName:"p"},"User"),", hence, ",Object(o.b)("inlineCode",{parentName:"p"},"@nartc/automapper")," cannot ",Object(o.b)("em",{parentName:"p"},"automap")," them to ",Object(o.b)("inlineCode",{parentName:"p"},"UserVm"),". To customize the mapping configuration for a ",Object(o.b)("inlineCode",{parentName:"p"},"member"),", use ",Object(o.b)("inlineCode",{parentName:"p"},"forMember()")," on ",Object(o.b)("inlineCode",{parentName:"p"},"CreateMapFluentFunction")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("inlineCode",{parentName:"p"},"CreateMapFluentFunction")," is the returned value of ",Object(o.b)("inlineCode",{parentName:"p"},"createMap()"))),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"Mapper.createMap(User, UserVm)\n  .forMember(\n    dest => dest.fullName,\n    mapFrom(src => src.firstName + ' ' + src.lastName)\n  )\n  .forMember(\n    dest => dest.isAdult,\n    mapFrom(src => src.age >= 18)\n  );\n")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"forMember()")," takes in two arguments:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Destination Member Selector: This argument is a ",Object(o.b)("inlineCode",{parentName:"li"},"selectorFn")," that receives the ",Object(o.b)("inlineCode",{parentName:"li"},"destination")," and needs to return the ",Object(o.b)("inlineCode",{parentName:"li"},"member")," that you want to configure the mapping. Eg: ",Object(o.b)("inlineCode",{parentName:"li"},"destination => destination.fullName")),Object(o.b)("li",{parentName:"ol"},"MemberMapFunction: A function that will be applied to the Destination Member.")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"There is not a dedicated section for ",Object(o.b)("inlineCode",{parentName:"p"},"@AutoMap()")," in the docs so this following note will be mentioned here. All members that are configured manually by ",Object(o.b)("inlineCode",{parentName:"p"},"forMember()")," ",Object(o.b)("strong",{parentName:"p"},"DO NOT")," need to have ",Object(o.b)("inlineCode",{parentName:"p"},"@AutoMap()")," decorated")),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"Selector")," approach allows ",Object(o.b)("inlineCode",{parentName:"p"},"@nartc/automapper")," to provide an extensive typing definitions that greatly improve ",Object(o.b)("strong",{parentName:"p"},"Developer Experience"),"."),Object(o.b)("p",null,"All ",Object(o.b)("inlineCode",{parentName:"p"},"MemberMapFunction")," are separate functions that allows ",Object(o.b)("strong",{parentName:"p"},"tree-shake")," tool to tree-shake those mapping operations that are not used."))}l.isMDXComponent=!0}}]);