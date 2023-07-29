"use strict";(self.webpackChunkpersonal_blog_template=self.webpackChunkpersonal_blog_template||[]).push([[5778],{3470:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>h,default:()=>v,frontMatter:()=>m,metadata:()=>g,toc:()=>y});var a=n(7462),l=(n(7294),n(4137)),r=n(3992),i=n(425),o=n(7130);const c="/**\n * Get all values of specific key in object\n * @param {object} obj A javascript object to get values\n * @param {string} key A key of object\n * @returns \n */\nfunction GetValuesByKey(obj, key) {\n    let values = [];\n    for (let i in obj) {\n        if (!obj.hasOwnProperty(i)) continue;\n        if (typeof obj[i] == 'object') {\n            values = values.concat(GetValuesByKey(obj[i], key));\n        } else if (i == key) {\n            values.push(obj[i]);\n        }\n    }\n    return values;\n}",s='function GetValuesByKey(obj, key) {\n    let values = [];\n    for (let i in obj) {\n        if (!obj.hasOwnProperty(i)) continue;\n        if (typeof obj[i] == \'object\') {\n            values = values.concat(GetValuesByKey(obj[i], key));\n        } else if (i == key) {\n            values.push(obj[i]);\n        }\n    }\n    return values;\n}\n\nconst data = {\n    "id": 1,\n    "name": "Item 1",\n    "link": "/item-1",\n    "relatedItems": [\n        {\n            "id": 2,\n            "name": "Item 2",\n            "link": "/item-2"\n        },\n        {\n            "id": 3,\n            "name": "Item 3",\n            "link": "/item-3"\n        },\n        {\n            "id": 4,\n            "name": "Item 4",\n            "link": "/item-4"\n        }\n    ]\n}\n\nvar result = GetValuesByKey(data, "link");\nrender(JSON.stringify(result));',u="/**\n * Flattens an object to a single level object\n * @param {object} obj Object to flatten \n * @returns An object with all keys and values flattened\n */\nfunction FlattenObject(obj) {\n    const flattened = {};\n\n    Object.keys(obj).forEach((key) => {\n        if (typeof obj[key] === 'object' && obj[key] !== null) {\n            Object.assign(flattened, flattenObject(obj[key]));\n        } else {\n            flattened[key] = obj[key];\n        }\n    });\n\n    return flattened;\n}",b='/**\n * Flattens an object to a single level object\n * @param {object} obj Object to flatten \n * @returns An object with all keys and values flattened\n */\nfunction FlattenObject(obj) {\n  const flattened = {};\n\n  Object.keys(obj).forEach((key) => {\n    if (typeof obj[key] === \'object\' && obj[key] !== null) {\n      Object.assign(flattened, FlattenObject(obj[key]));\n    } else {\n      flattened[key] = obj[key];\n    }\n  });\n\n  return flattened;\n}\n\nconst data = {\n  "word": "pho",\n  "meanings": {\n    "partOfSpeech": "noun",\n    "definitions": "A Vietnamese soup with a beef base, typically served with rice noodles and beef or chicken."\n  }\n}\n\nvar result = FlattenObject(data, "");\nrender(JSON.stringify(result));',p="/**\n * Flattens a javascript object with the keys as the path\n * @param {object} obj A javascript object to flatten\n * @param {string} prefix A prefix to add to keys\n * @returns An object with all keys and values flattened\n */\nfunction FlattenObjectWithKey(obj, prefix = '') {\n    return Object.keys(obj).reduce((acc, k) => {\n        const pre = prefix.length ? `${prefix}.` : '';\n        if (typeof obj[k] === 'object' && obj[k] !== null && !Array.isArray(obj[k])) {\n            Object.assign(acc, FlattenObjectWithKey(obj[k], pre + k));\n        } else {\n            acc[pre + k] = obj[k];\n        }\n        return acc;\n    }, {});\n}",d='/**\n * Flattens a javascript object with the keys as the path\n * @param {object} obj A javascript object to flatten\n * @param {string} prefix A prefix to add to keys\n * @returns An object with all keys and values flattened\n */\nfunction FlattenObjectWithKey(obj, prefix = \'\') {\n  return Object.keys(obj).reduce((acc, k) => {\n    const pre = prefix.length ? `${prefix}.` : \'\';\n    if (typeof obj[k] === \'object\' && obj[k] !== null && !Array.isArray(obj[k])) {\n      Object.assign(acc, FlattenObjectWithKey(obj[k], pre + k));\n    } else {\n      acc[pre + k] = obj[k];\n    }\n    return acc;\n  }, {});\n}\n\nconst data = {\n  "word": "pho",\n  "meanings": {\n    "partOfSpeech": "noun",\n    "definitions": "A Vietnamese soup with a beef base, typically served with rice noodles and beef or chicken."\n  }\n}\n\nvar result = FlattenObjectWithKey(data, "");\nrender(JSON.stringify(result));',m={slug:"helpful-javascript-utility-functions",title:"Nh\u1eefng h\xe0m JavaScript h\u1eefu \xedch",authors:["TienNHM"],tags:["javascript","resources","learning"],enableComments:!0,draft:!1,image:"https://i.pinimg.com/originals/71/ee/32/71ee32577432648f9e45fbd63b2cf261.jpg"},h=void 0,g={permalink:"/blog/helpful-javascript-utility-functions",editUrl:"https://github.com/itute/itute.github.io/tree/master/blog/2023-06-15-helpful-javascript-utility-functions/part-01-helpful-javascript-utility-functions.mdx",source:"@site/blog/2023-06-15-helpful-javascript-utility-functions/part-01-helpful-javascript-utility-functions.mdx",title:"Nh\u1eefng h\xe0m JavaScript h\u1eefu \xedch",description:"Ng\xe0y nay, JavaScript l\xe0 m\u1ed9t trong nh\u1eefng ng\xf4n ng\u1eef l\u1eadp tr\xecnh ph\u1ed5 bi\u1ebfn nh\u1ea5t tr\xean th\u1ebf gi\u1edbi. N\xf3 \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng b\u1edfi nhi\u1ec1u c\xf4ng ty nh\u01b0 Google, Facebook, Microsoft, v.v. \u0111\u1ec3 x\xe2y d\u1ef1ng c\xe1c \u1ee9ng d\u1ee5ng web. JavaScript l\xe0 m\u1ed9t ng\xf4n ng\u1eef r\u1ea5t m\u1ea1nh m\u1ebd c\xf3 th\u1ec3 \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng \u0111\u1ec3 x\xe2y d\u1ef1ng c\xe1c \u1ee9ng d\u1ee5ng web ph\u1ee9c t\u1ea1p. N\xf3 c\u0169ng l\xe0 m\u1ed9t ng\xf4n ng\u1eef r\u1ea5t linh ho\u1ea1t c\xf3 th\u1ec3 \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng \u0111\u1ec3 x\xe2y d\u1ef1ng c\xe1c \u1ee9ng d\u1ee5ng web \u0111\u01a1n gi\u1ea3n.",date:"2023-06-15T00:00:00.000Z",formattedDate:"15 th\xe1ng 6, 2023",tags:[{label:"javascript",permalink:"/blog/tags/javascript"},{label:"resources",permalink:"/blog/tags/resources"},{label:"learning",permalink:"/blog/tags/learning"}],readingTime:1.87,hasTruncateMarker:!0,authors:[{name:"Nguy\u1ec5n Hu\u1ef3nh Minh Ti\u1ebfn",title:"Fullstack Developer",url:"https://github.com/TienNHM",imageURL:"https://github.com/TienNHM.png",key:"TienNHM"}],frontMatter:{slug:"helpful-javascript-utility-functions",title:"Nh\u1eefng h\xe0m JavaScript h\u1eefu \xedch",authors:["TienNHM"],tags:["javascript","resources","learning"],enableComments:!0,draft:!1,image:"https://i.pinimg.com/originals/71/ee/32/71ee32577432648f9e45fbd63b2cf261.jpg"},nextItem:{title:"C\xe1c trang web t\u1ed1t nh\u1ea5t \u0111\u1ec3 h\u1ecdc JavaScript",permalink:"/blog/best-websites-to-learn-javascript"}},f={authorsImageUrls:[void 0]},y=[{value:"1. GetValuesByKey",id:"1-getvaluesbykey",level:2},{value:"2. Flatten object",id:"2-flatten-object",level:2},{value:"2.1. Flatten object",id:"21-flatten-object",level:3},{value:"2.2. Flatten object with key",id:"22-flatten-object-with-key",level:3}],k={toc:y},j="wrapper";function v(e){let{components:t,...n}=e;return(0,l.kt)(j,(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",{align:"right"},(0,l.kt)("img",{src:"https://api.visitorbadge.io/api/visitors?path=https%3A%2F%2Fitute.github.io%2Fblog%2Fhelpful-javascript-utility-functions&label=\u26aaViews&labelColor=%2337d67a&countColor=%23555555&style=flat&labelStyle=upper",loading:"lazy",decoding:"async"})),(0,l.kt)("p",null,"Ng\xe0y nay, JavaScript l\xe0 m\u1ed9t trong nh\u1eefng ng\xf4n ng\u1eef l\u1eadp tr\xecnh ph\u1ed5 bi\u1ebfn nh\u1ea5t tr\xean th\u1ebf gi\u1edbi. N\xf3 \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng b\u1edfi nhi\u1ec1u c\xf4ng ty nh\u01b0 Google, Facebook, Microsoft, v.v. \u0111\u1ec3 x\xe2y d\u1ef1ng c\xe1c \u1ee9ng d\u1ee5ng web. JavaScript l\xe0 m\u1ed9t ng\xf4n ng\u1eef r\u1ea5t m\u1ea1nh m\u1ebd c\xf3 th\u1ec3 \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng \u0111\u1ec3 x\xe2y d\u1ef1ng c\xe1c \u1ee9ng d\u1ee5ng web ph\u1ee9c t\u1ea1p. N\xf3 c\u0169ng l\xe0 m\u1ed9t ng\xf4n ng\u1eef r\u1ea5t linh ho\u1ea1t c\xf3 th\u1ec3 \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng \u0111\u1ec3 x\xe2y d\u1ef1ng c\xe1c \u1ee9ng d\u1ee5ng web \u0111\u01a1n gi\u1ea3n."),(0,l.kt)("p",null,"Trong b\xe0i vi\u1ebft n\xe0y, t\xf4i s\u1ebd li\u1ec7t k\xea m\u1ed9t s\u1ed1 h\xe0m ti\u1ec7n \xedch JavaScript h\u1eefu \xedch nh\u1ea5t m\xe0 t\xf4i \u0111\xe3 s\u1eed d\u1ee5ng trong c\xe1c d\u1ef1 \xe1n c\u1ee7a m\xecnh."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://i.pinimg.com/originals/71/ee/32/71ee32577432648f9e45fbd63b2cf261.jpg",alt:"JavaScript"})),(0,l.kt)("h2",{id:"1-getvaluesbykey"},"1. GetValuesByKey"),(0,l.kt)("p",null,"H\xe0m n\xe0y s\u1ebd gi\xfap b\u1ea1n l\u1ea5y c\xe1c gi\xe1 tr\u1ecb c\xf3 c\xf9ng t\xean field trong m\u1ed9t ",(0,l.kt)("inlineCode",{parentName:"p"},"object"),", bao g\u1ed3m c\xe1c ",(0,l.kt)("inlineCode",{parentName:"p"},"object")," con l\u1ed3ng nhau. N\xf3 s\u1ebd tr\u1ea3 v\u1ec1 m\u1ed9t m\u1ea3ng c\xe1c gi\xe1 tr\u1ecb t\xecm \u0111\u01b0\u1ee3c."),(0,l.kt)(r.Z,{defaultValue:"source",className:"unique-tabs",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"source",label:"Source code \ud83d\udcc3",mdxType:"TabItem"},(0,l.kt)(o.Z,{language:"js",showLineNumbers:!0,title:"GetValuesByKey.js",mdxType:"CodeBlock"},c)),(0,l.kt)(i.Z,{value:"try",label:"Ch\u1ea1y th\u1eed \ud83e\uddd1\u200d\ud83d\udcbb",mdxType:"TabItem"},(0,l.kt)(o.Z,{language:"js",showLineNumbers:!0,live:!0,noInline:!0,mdxType:"CodeBlock"},s))),(0,l.kt)("h2",{id:"2-flatten-object"},"2. Flatten object"),(0,l.kt)("h3",{id:"21-flatten-object"},"2.1. Flatten object"),(0,l.kt)("p",null,"H\xe0m n\xe0y s\u1ebd gi\xfap b\u1ea1n l\xe0m ph\u1eb3ng m\u1ed9t ",(0,l.kt)("inlineCode",{parentName:"p"},"object")," c\xf3 c\xe1c ",(0,l.kt)("inlineCode",{parentName:"p"},"object")," con l\u1ed3ng nhau. N\xf3 s\u1ebd tr\u1ea3 v\u1ec1 m\u1ed9t ",(0,l.kt)("inlineCode",{parentName:"p"},"object")," m\u1edbi v\u1edbi c\xe1c ",(0,l.kt)("inlineCode",{parentName:"p"},"key")," l\xe0 ",(0,l.kt)("inlineCode",{parentName:"p"},"key")," c\u1ee7a c\xe1c ",(0,l.kt)("inlineCode",{parentName:"p"},"object")," con l\u1ed3ng nhau."),(0,l.kt)(r.Z,{defaultValue:"source",className:"unique-tabs",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"source",label:"Source code \ud83d\udcc3",mdxType:"TabItem"},(0,l.kt)(o.Z,{language:"js",showLineNumbers:!0,title:"FlattenObject.js",mdxType:"CodeBlock"},u)),(0,l.kt)(i.Z,{value:"try",label:"Ch\u1ea1y th\u1eed \ud83e\uddd1\u200d\ud83d\udcbb",mdxType:"TabItem"},(0,l.kt)(o.Z,{language:"js",showLineNumbers:!0,live:!0,noInline:!0,mdxType:"CodeBlock"},b))),(0,l.kt)("h3",{id:"22-flatten-object-with-key"},"2.2. Flatten object with key"),(0,l.kt)("p",null,"H\xe0m n\xe0y s\u1ebd gi\xfap b\u1ea1n l\xe0m ph\u1eb3ng m\u1ed9t ",(0,l.kt)("inlineCode",{parentName:"p"},"object")," c\xf3 c\xe1c ",(0,l.kt)("inlineCode",{parentName:"p"},"object")," con l\u1ed3ng nhau. N\xf3 s\u1ebd tr\u1ea3 v\u1ec1 m\u1ed9t ",(0,l.kt)("inlineCode",{parentName:"p"},"object")," m\u1edbi v\u1edbi c\xe1c ",(0,l.kt)("inlineCode",{parentName:"p"},"key")," l\xe0 ",(0,l.kt)("inlineCode",{parentName:"p"},"key")," c\u1ee7a c\xe1c ",(0,l.kt)("inlineCode",{parentName:"p"},"object")," con l\u1ed3ng nhau, nh\u01b0ng c\xf3 th\xeam ",(0,l.kt)("inlineCode",{parentName:"p"},"key")," c\u1ee7a ",(0,l.kt)("inlineCode",{parentName:"p"},"object")," cha \u1edf \u0111\u1ea7u ",(0,l.kt)("inlineCode",{parentName:"p"},"key")," c\u1ee7a ",(0,l.kt)("inlineCode",{parentName:"p"},"object")," con."),(0,l.kt)(r.Z,{defaultValue:"source",className:"unique-tabs",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"source",label:"Source code \ud83d\udcc3",mdxType:"TabItem"},(0,l.kt)(o.Z,{language:"js",showLineNumbers:!0,title:"FlattenObjectWithKey.js",mdxType:"CodeBlock"},p)),(0,l.kt)(i.Z,{value:"try",label:"Ch\u1ea1y th\u1eed \ud83e\uddd1\u200d\ud83d\udcbb",mdxType:"TabItem"},(0,l.kt)(o.Z,{language:"js",showLineNumbers:!0,live:!0,noInline:!0,mdxType:"CodeBlock"},d))))}v.isMDXComponent=!0},425:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),l=n(6010);const r={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(r.tabItem,i),hidden:n},t)}},3992:(e,t,n)=>{n.d(t,{Z:()=>v});var a=n(7462),l=n(7294),r=n(6010),i=n(2957),o=n(6550),c=n(5238),s=n(3609),u=n(2560);function b(e){return function(e){return l.Children.map(e,(e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:l}}=e;return{value:t,label:n,attributes:a,default:l}}))}function p(e){const{values:t,children:n}=e;return(0,l.useMemo)((()=>{const e=t??b(n);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c._X)(r),(0,l.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(a.location.search);t.set(r,e),a.replace({...a.location,search:t.toString()})}),[r,a])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,r=p(e),[i,o]=(0,l.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r}))),[c,s]=m({queryString:n,groupId:a}),[b,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,r]=(0,u.Nk)(n);return[a,(0,l.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:a}),g=(()=>{const e=c??b;return d({value:e,tabValues:r})?e:null})();(0,l.useLayoutEffect)((()=>{g&&o(g)}),[g]);return{selectedValue:i,selectValue:(0,l.useCallback)((e=>{if(!d({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);o(e),s(e),h(e)}),[s,h,r]),tabValues:r}}var g=n(1048);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:n,selectedValue:o,selectValue:c,tabValues:s}=e;const u=[],{blockElementScrollPositionUntilNextRender:b}=(0,i.o5)(),p=e=>{const t=e.currentTarget,n=u.indexOf(t),a=s[n].value;a!==o&&(b(t),c(a))},d=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t)},s.map((e=>{let{value:t,label:n,attributes:i}=e;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>u.push(e),onKeyDown:d,onClick:p},i,{className:(0,r.Z)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":o===t})}),n??t)})))}function k(e){let{lazy:t,children:n,selectedValue:a}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===a));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function j(e){const t=h(e);return l.createElement("div",{className:(0,r.Z)("tabs-container",f.tabList)},l.createElement(y,(0,a.Z)({},e,t)),l.createElement(k,(0,a.Z)({},e,t)))}function v(e){const t=(0,g.Z)();return l.createElement(j,(0,a.Z)({key:String(t)},e))}},8263:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294);const l={React:a,...a}}}]);