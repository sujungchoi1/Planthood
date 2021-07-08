(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{126:function(e,t,c){},156:function(e,t,c){},162:function(e,t,c){},181:function(e,t,c){},185:function(e,t,c){},186:function(e,t,c){},188:function(e,t,c){},189:function(e,t,c){},191:function(e,t,c){"use strict";c.r(t);var a=c(2),n=c(1),s=c(49),l=c.n(s),i=(c(156),c(25)),j=(c(162),c(11)),r=c(203),o=c(204),d=c(206),b=c(54),h=c(31),u=c.n(h),O=c(131),m=(c(181),c(134)),x=function(){return Object(a.jsxs)("header",{children:[Object(a.jsx)(i.a,{to:"/",children:Object(a.jsxs)("div",{className:"leftHeader",children:[Object(a.jsx)("h1",{children:"Planthood"}),Object(a.jsx)("h1",{className:"icon",children:Object(a.jsx)(O.a,{})})]})}),Object(a.jsx)("div",{className:"button",children:Object(a.jsx)(o.a,{className:"ui green basic button large",children:Object(a.jsxs)(i.a,{style:{color:"green"},to:"/search",children:[Object(a.jsx)(m.a,{})," search plants"]})})})]})},p=(c(185),function(e){var t=Object(n.useState)([]),c=Object(j.a)(t,2),s=c[0],l=c[1],i=Object(n.useState)([]),h=Object(j.a)(i,2),O=h[0],m=h[1],p=Object(n.useState)(null),g=Object(j.a)(p,2),f=g[0],v=g[1];return Object(a.jsxs)("div",{className:"wrapper",children:[Object(a.jsx)(x,{}),Object(a.jsxs)("div",{className:"landingDisplay",children:[Object(a.jsx)("h2",{children:"Got a new plant?"}),Object(a.jsxs)(r.a,{className:"searchBox",children:[Object(a.jsxs)(r.a.Group,{children:[Object(a.jsx)(r.a.Input,{placeholder:"ex) parlor palm",name:"name",value:O,onChange:function(e){return m(e.target.value)}}),Object(a.jsx)(o.a,{onClick:function(e){e.preventDefault(),u.a.get("https://cors-anywhere.herokuapp.com/https://trefle.io/api/v1/species/search?q=".concat(O,"&token=wfOfrblXggceP_xcDAcmmxDOO4XmIyJY1KgXKK0_utA")).then((function(e){e.data.data.length>0?(l(e.data.data),console.log(e.data)):(console.log("error message"),v("Please try another keyword."))})).catch((function(e){console.log(e)}))},style:{backgroundColor:"#fff19c"},content:"SEARCH"})]})," "]}),f?Object(a.jsxs)("div",{style:{color:"red"},children:[" ",f," "]}):null,Object(a.jsx)("div",{className:"list",children:Object(a.jsx)(d.a,{columns:3,divided:!0,children:s.map((function(e,t){return Object(a.jsx)("div",{children:Object(a.jsx)(d.a.Row,{children:Object(a.jsx)(d.a.Column,{children:Object(a.jsxs)("div",{className:"plantList",plant:e,children:[Object(a.jsx)("img",{className:"plantApiImage",width:"150",height:"150",src:e.image_url,alt:e.common_name}),Object(a.jsxs)("div",{className:"plantListDetail",children:[Object(a.jsxs)("h3",{children:[Object(a.jsx)(b.a,{}),"Common Name: ",Object(a.jsx)("span",{children:e.common_name})]}),Object(a.jsxs)("h3",{children:[Object(a.jsx)(b.a,{}),"Scientific Name: ",Object(a.jsx)("span",{children:e.scientific_name})," "]}),Object(a.jsxs)("h3",{children:[Object(a.jsx)(b.a,{}),"Family Name: ",Object(a.jsx)("span",{children:e.family_common_name})," "]})]})]},t)})})})}))})})]})]})}),g=c(108),f=(c(186),c(135)),v=c.n(f),N=c(136),w=function(e){var t=e.onSubmitProp,c=e.errors,s=Object(n.useState)(""),l=Object(j.a)(s,2),i=l[0],d=l[1],b=Object(n.useState)(""),h=Object(j.a)(b,2),u=h[0],O=h[1],m=Object(n.useState)(""),x=Object(j.a)(m,2),p=x[0],f=x[1],w=Object(n.useState)(""),y=Object(j.a)(w,2),S=y[0],C=y[1],k=Object(n.useState)(""),A=Object(j.a)(k,2),F=A[0],_=A[1],D=Object(n.useState)(""),I=Object(j.a)(D,2),P=I[0],L=I[1],E=Object(n.useState)(""),G=Object(j.a)(E,2),R=G[0],B=G[1],K=Object(n.useState)(""),T=Object(j.a)(K,2),U=T[0],q=T[1],J=Object(n.useState)([]),X=Object(j.a)(J,2),H=X[0],z=X[1];return Object(a.jsx)("div",{className:"contentForm",children:Object(a.jsxs)(r.a,{onSubmit:function(e){e.preventDefault(),t({name:i,nickname:p,scientificName:u,dateAdopted:S,images:H,light:F,water:P,info:R,image:U})},children:[c.map((function(e,t){return Object(a.jsxs)("h3",{style:{color:"orange"},children:[" ",e," "]},t)})),Object(a.jsxs)(r.a.Group,{widths:"equal",children:[Object(a.jsx)(r.a.Input,{fluid:!0,label:"Nickname (*required)",type:"text",onChange:function(e){return f(e.target.value)},value:p}),Object(a.jsx)(r.a.Input,{fluid:!0,label:"Name",type:"text",onChange:function(e){return d(e.target.value)},value:i}),Object(a.jsx)(r.a.Input,{fluid:!0,label:"Scientific Name",type:"text",onChange:function(e){return O(e.target.value)},value:u})]}),Object(a.jsxs)(r.a.Field,{className:"dateForm",children:[Object(a.jsx)("label",{children:"Date Adopted:"}),Object(a.jsx)("input",{type:"date",onChange:function(e){return C(e.target.value)},value:S})]}),Object(a.jsxs)(r.a.Field,{className:"dropdownForm",children:[Object(a.jsx)("label",{children:"Light:"}),Object(a.jsxs)("select",{onChange:function(e){return _(e.target.value)},name:"select",value:F,children:[Object(a.jsx)("option",{value:"default",children:"Please select"}),Object(a.jsx)("option",{value:"low",children:"low"}),Object(a.jsx)("option",{value:"medium",children:"medium"}),Object(a.jsx)("option",{value:"high",children:"high"})]})]}),Object(a.jsxs)(r.a.Field,{className:"dropdownForm",children:[Object(a.jsx)("label",{children:"Water:"}),Object(a.jsxs)("select",{onChange:function(e){return L(e.target.value)},name:"select",value:P,children:[Object(a.jsx)("option",{value:"default",children:"Please select"}),Object(a.jsx)("option",{value:"low",children:"low"}),Object(a.jsx)("option",{value:"medium",children:"medium"}),Object(a.jsx)("option",{value:"high",children:"high"})]})]}),Object(a.jsx)(v.a,{multiple:!0,value:H,onChange:function(e,t){console.log(e,t),z(e)},maxNumber:69,dataURLKey:"data_url",children:function(e){var t=e.imageList,c=e.onImageUpload,n=e.isDragging,s=e.dragProps;return Object(a.jsxs)("div",{className:"upload__image-wrapper",children:[Object(a.jsxs)(o.a,Object(g.a)(Object(g.a)({className:"ui blue basic button",style:n?{color:"red"}:null,onClick:c},s),{},{children:[Object(a.jsx)(N.a,{style:{fontSize:"25px"}}),Object(a.jsx)("span",{className:"imageButton",children:"Click here to uplad your plant photo "})]})),"\xa0",t.map((function(e,t){return Object(a.jsxs)("div",{className:"image-item",children:[Object(a.jsx)("img",{src:e.data_url,alt:"",width:"100"}),Object(a.jsx)("div",{className:"image-item__btn-wrapper"})]},t)}))]})}}),Object(a.jsxs)(r.a.Field,{className:"imageUrl",children:[Object(a.jsx)("label",{children:"image url:"}),Object(a.jsx)("input",{type:"text",onChange:function(e){return q(e.target.value)},value:U})]}),Object(a.jsxs)(r.a.Field,{className:"imageUrl",children:[Object(a.jsx)("label",{children:"IMAGES?"}),Object(a.jsx)("input",{type:"file",onChange:function(e){return q(e.target.value)},value:U})]}),Object(a.jsx)(r.a.TextArea,{className:"textArea",label:"About",placeholder:"Anything else you want to add?",onChange:function(e){return B(e.target.value)},value:R}),Object(a.jsx)(o.a,{className:"yellow large",style:{marginTop:"10px"},children:"Submit"})]})})},y=(c(188),function(){var e=Object(n.useState)([]),t=Object(j.a)(e,2),c=(t[0],t[1],Object(n.useState)([])),s=Object(j.a)(c,2),l=s[0],r=s[1];return Object(a.jsxs)("div",{className:"wrapper",children:[Object(a.jsx)(x,{}),Object(a.jsxs)("div",{className:"plantForm",children:[Object(a.jsx)("h2",{children:"Add a new plant !"}),Object(a.jsx)(w,{onSubmitProp:function(e){u.a.post("http://localhost:8050/api/plants/new",e).then((function(e){console.log(e),Object(i.c)("/")})).catch((function(e){console.log(e);for(var t=e.response.data.errors,c=[],a=0,n=Object.keys(t);a<n.length;a++){var s=n[a];c.push(t[s].message)}r(c)}))},errors:l})]})]})}),S=(c(189),function(e){var t=Object(n.useState)([]),c=Object(j.a)(t,2),s=c[0],l=c[1];return Object(n.useEffect)((function(){u.a.get("http://localhost:8050/api/plants").then((function(e){l(e.data)})).catch((function(e){return console.log("Error: ",e)}))}),[]),Object(a.jsxs)("div",{className:"wrapper",children:[Object(a.jsx)(x,{}),Object(a.jsxs)("div",{className:"landingDisplay",children:[Object(a.jsx)("h2",{children:"Got a new plant?"}),Object(a.jsx)(i.a,{to:"/new",children:Object(a.jsx)(o.a,{className:"yellow large",content:"Add them to your plant log!"})}),Object(a.jsx)("div",{className:"divider"}),Object(a.jsxs)("div",{className:"list",children:[Object(a.jsx)("h2",{children:"Plants added so far:"}),Object(a.jsx)(d.a,{columns:3,divided:!0,children:s.map((function(e,t){return Object(a.jsx)("div",{children:Object(a.jsx)(d.a.Row,{children:Object(a.jsx)(d.a.Column,{children:Object(a.jsxs)("div",{className:"plantList",plant:e,children:[Object(a.jsx)("img",{className:"plantApiImage",width:"190",height:"190",src:e.image,alt:e.common_name}),Object(a.jsxs)("div",{className:"plantListDetail",children:[Object(a.jsxs)("h3",{children:[Object(a.jsx)(b.a,{}),"Nickname: ",Object(a.jsx)("span",{children:e.nickname})]}),Object(a.jsxs)("h3",{children:[Object(a.jsx)(b.a,{}),"Common Name: ",Object(a.jsx)("span",{children:e.name})," "]})]})]},t)})})})}))})]})]})]})}),C=(c(126),function(e){var t=Object(n.useState)(),c=Object(j.a)(t,2),s=c[0],l=c[1],i=Object(n.useState)(!1),r=Object(j.a)(i,2),o=r[0],d=r[1];return Object(n.useEffect)((function(){u.a.get("http://localhost:8050/api/plants/".concat(e.id)).then((function(e){l(e.data),d(!0)})).catch((function(e){return console.log(e)}))}),[]),Object(a.jsxs)("div",{className:"wrapper",children:[Object(a.jsx)(x,{}),o&&Object(a.jsxs)("div",{className:"plantDetail",children:[Object(a.jsx)("h1",{children:s.nickname}),Object(a.jsxs)("div",{className:"plantDetailContent",children:[Object(a.jsx)("img",{src:s.image,alt:"",width:"200"}),Object(a.jsxs)("div",{className:"plantDetailContentRight",children:[Object(a.jsxs)("h4",{children:["common name: ",s.name]}),Object(a.jsxs)("h4",{children:["scientific name: ",s.scientificName]}),Object(a.jsxs)("h4",{children:["water: ",s.water]}),Object(a.jsxs)("h4",{children:["light: ",s.light]}),Object(a.jsxs)("h4",{children:["desc: ",s.info]})]})]})]})]})});var k=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsxs)(i.b,{children:[Object(a.jsx)(S,{path:"/"}),Object(a.jsx)(p,{path:"/search"}),Object(a.jsx)(y,{path:"/new"}),Object(a.jsx)(C,{path:"/detail/:id"})]})})},A=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,207)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,l=t.getTTFB;c(e),a(e),n(e),s(e),l(e)}))};c(190);l.a.render(Object(a.jsx)(k,{}),document.getElementById("root")),A()}},[[191,1,2]]]);
//# sourceMappingURL=main.723983cb.chunk.js.map