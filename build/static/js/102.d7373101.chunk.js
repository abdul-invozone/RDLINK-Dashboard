(this["webpackJsonprdlink-admin-dashboard"]=this["webpackJsonprdlink-admin-dashboard"]||[]).push([[102],{1874:function(e,a,t){"use strict";t.r(a);var s=t(15),r=t(0),c=t(79),n=t.n(c),o=t(1146),l=t(1193),i=t(449),d=t(565),u=t(455),b=t(456),m=t(453),j=t(454),p=t(564),g=t(458),O=t(6);a.default=function(){var e=Object(r.useState)(null),a=Object(s.a)(e,2),t=a[0],c=a[1];Object(r.useEffect)((function(){n.a.get("/faq/data/question").then((function(e){return c(e.data)}))}),[]);return Object(O.jsxs)(r.Fragment,{children:[Object(O.jsx)(i.a,{breadCrumbTitle:"Knowledge Base",breadCrumbParent:"Pages",breadCrumbParent2:"Knowledge Base",breadCrumbParent3:"Category",breadCrumbActive:"Question"}),null!==t?Object(O.jsx)("div",{id:"knowledge-base-question",children:Object(O.jsxs)(u.a,{children:[Object(O.jsx)(b.a,{lg:"3",md:{size:5,order:1},sm:{size:12},xs:{order:2},children:Object(O.jsx)(m.a,{children:Object(O.jsxs)(j.a,{children:[Object(O.jsxs)("h6",{className:"kb-title",children:[Object(O.jsx)(o.a,{size:20,className:"mr-50"}),Object(O.jsx)("span",{children:"Related Questions"})]}),Object(O.jsx)(p.a,{className:"list-group-circle mt-1",children:t.relatedQuestions.map((function(e){return Object(O.jsx)(d.a,{className:"text-body",tag:"a",href:"/",onClick:function(e){return e.preventDefault()},children:e.question},e.id)}))})]})})}),Object(O.jsx)(b.a,{lg:"9",md:{size:7,order:2},sm:{size:12},xs:{order:1},children:Object(O.jsx)(m.a,{children:Object(O.jsxs)(j.a,{children:[Object(O.jsxs)(g.a,{className:"mb-1",children:[Object(O.jsx)(l.a,{size:21,className:"mr-25"}),Object(O.jsx)("span",{children:t.title})]}),Object(O.jsxs)("p",{className:"mb-2",children:["Last updated on ",t.lastUpdated]}),Object(O.jsx)("div",{dangerouslySetInnerHTML:{__html:t.content}})]})})})]})}):null]})}},449:function(e,a,t){"use strict";var s=t(451),r=t(1139),c=t(1097),n=t(1161),o=t(1156),l=t(1094),i=t(460),d=t(461),u=t(463),b=t(1341),m=t(1062),j=t(1072),p=t(6);a.a=function(e){var a=e.breadCrumbTitle,t=e.breadCrumbParent,g=e.breadCrumbParent2,O=e.breadCrumbParent3,f=e.breadCrumbActive;return Object(p.jsxs)("div",{className:"content-header row",children:[Object(p.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2",children:Object(p.jsx)("div",{className:"row breadcrumbs-top",children:Object(p.jsxs)("div",{className:"col-12",children:[a?Object(p.jsx)("h2",{className:"content-header-title float-left mb-0",children:a}):"",Object(p.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(p.jsxs)(i.a,{children:[Object(p.jsx)(d.a,{tag:"li",children:Object(p.jsx)(s.b,{to:"/",children:"Home"})}),Object(p.jsx)(d.a,{tag:"li",className:"text-primary",children:t}),g?Object(p.jsx)(d.a,{tag:"li",className:"text-primary",children:g}):"",O?Object(p.jsx)(d.a,{tag:"li",className:"text-primary",children:O}):"",Object(p.jsx)(d.a,{tag:"li",active:!0,children:f})]})})]})})}),Object(p.jsx)("div",{className:"content-header-right text-md-right col-md-3 col-12 d-md-block d-none",children:Object(p.jsx)("div",{className:"form-group breadcrum-right dropdown",children:Object(p.jsxs)(u.a,{children:[Object(p.jsx)(b.a,{color:"primary",size:"sm",className:"btn-icon btn-round dropdown-toggle",children:Object(p.jsx)(r.a,{size:14})}),Object(p.jsxs)(m.a,{tag:"ul",right:!0,children:[Object(p.jsxs)(j.a,{tag:s.b,to:"/apps/chat",children:[Object(p.jsx)(c.a,{className:"mr-1",size:14}),Object(p.jsx)("span",{className:"align-middle",children:"Todo"})]}),Object(p.jsxs)(j.a,{tag:s.b,to:"/apps/chat",children:[Object(p.jsx)(n.a,{className:"mr-1",size:14}),Object(p.jsx)("span",{className:"align-middle",children:"Chat"})]}),Object(p.jsxs)(j.a,{tag:s.b,to:"/apps/email",children:[Object(p.jsx)(o.a,{className:"mr-1",size:14}),Object(p.jsx)("span",{className:"align-middle",children:"Email"})]}),Object(p.jsxs)(j.a,{tag:s.b,to:"/apps/calendar",children:[Object(p.jsx)(l.a,{className:"mr-1",size:14}),Object(p.jsx)("span",{className:"align-middle",children:"Calendar"})]})]})]})})})]})}},450:function(e,a,t){"use strict";var s=t(14),r=t(0),c=t.n(r),n=t(5),o=t.n(n),l=t(462),i={children:o.a.node},d=function(e){return c.a.createElement(l.a,Object(s.a)({group:!0},e))};d.propTypes=i,a.a=d},453:function(e,a,t){"use strict";var s=t(14),r=t(20),c=t(0),n=t.n(c),o=t(5),l=t.n(o),i=t(56),d=t.n(i),u=t(78),b={tag:u.tagPropType,inverse:l.a.bool,color:l.a.string,body:l.a.bool,outline:l.a.bool,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},m=function(e){var a=e.className,t=e.cssModule,c=e.color,o=e.body,l=e.inverse,i=e.outline,b=e.tag,m=e.innerRef,j=Object(r.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),p=Object(u.mapToCssModules)(d()(a,"card",!!l&&"text-white",!!o&&"card-body",!!c&&(i?"border":"bg")+"-"+c),t);return n.a.createElement(b,Object(s.a)({},j,{className:p,ref:m}))};m.propTypes=b,m.defaultProps={tag:"div"},a.a=m},454:function(e,a,t){"use strict";var s=t(14),r=t(20),c=t(0),n=t.n(c),o=t(5),l=t.n(o),i=t(56),d=t.n(i),u=t(78),b={tag:u.tagPropType,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},m=function(e){var a=e.className,t=e.cssModule,c=e.innerRef,o=e.tag,l=Object(r.a)(e,["className","cssModule","innerRef","tag"]),i=Object(u.mapToCssModules)(d()(a,"card-body"),t);return n.a.createElement(o,Object(s.a)({},l,{className:i,ref:c}))};m.propTypes=b,m.defaultProps={tag:"div"},a.a=m},455:function(e,a,t){"use strict";var s=t(14),r=t(20),c=t(0),n=t.n(c),o=t(5),l=t.n(o),i=t(56),d=t.n(i),u=t(78),b=l.a.oneOfType([l.a.number,l.a.string]),m={tag:u.tagPropType,noGutters:l.a.bool,className:l.a.string,cssModule:l.a.object,form:l.a.bool,xs:b,sm:b,md:b,lg:b,xl:b},j={tag:"div",widths:["xs","sm","md","lg","xl"]},p=function(e){var a=e.className,t=e.cssModule,c=e.noGutters,o=e.tag,l=e.form,i=e.widths,b=Object(r.a)(e,["className","cssModule","noGutters","tag","form","widths"]),m=[];i.forEach((function(a,t){var s=e[a];if(delete b[a],s){var r=!t;m.push(r?"row-cols-"+s:"row-cols-"+a+"-"+s)}}));var j=Object(u.mapToCssModules)(d()(a,c?"no-gutters":null,l?"form-row":"row",m),t);return n.a.createElement(o,Object(s.a)({},b,{className:j}))};p.propTypes=m,p.defaultProps=j,a.a=p},456:function(e,a,t){"use strict";var s=t(14),r=t(20),c=t(0),n=t.n(c),o=t(5),l=t.n(o),i=t(56),d=t.n(i),u=t(78),b=l.a.oneOfType([l.a.number,l.a.string]),m=l.a.oneOfType([l.a.bool,l.a.number,l.a.string,l.a.shape({size:l.a.oneOfType([l.a.bool,l.a.number,l.a.string]),order:b,offset:b})]),j={tag:u.tagPropType,xs:m,sm:m,md:m,lg:m,xl:m,className:l.a.string,cssModule:l.a.object,widths:l.a.array},p={tag:"div",widths:["xs","sm","md","lg","xl"]},g=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},O=function(e){var a=e.className,t=e.cssModule,c=e.widths,o=e.tag,l=Object(r.a)(e,["className","cssModule","widths","tag"]),i=[];c.forEach((function(a,s){var r=e[a];if(delete l[a],r||""===r){var c=!s;if(Object(u.isObject)(r)){var n,o=c?"-":"-"+a+"-",b=g(c,a,r.size);i.push(Object(u.mapToCssModules)(d()(((n={})[b]=r.size||""===r.size,n["order"+o+r.order]=r.order||0===r.order,n["offset"+o+r.offset]=r.offset||0===r.offset,n)),t))}else{var m=g(c,a,r);i.push(m)}}})),i.length||i.push("col");var b=Object(u.mapToCssModules)(d()(a,i),t);return n.a.createElement(o,Object(s.a)({},l,{className:b}))};O.propTypes=j,O.defaultProps=p,a.a=O},458:function(e,a,t){"use strict";var s=t(14),r=t(20),c=t(0),n=t.n(c),o=t(5),l=t.n(o),i=t(56),d=t.n(i),u=t(78),b={tag:u.tagPropType,className:l.a.string,cssModule:l.a.object},m=function(e){var a=e.className,t=e.cssModule,c=e.tag,o=Object(r.a)(e,["className","cssModule","tag"]),l=Object(u.mapToCssModules)(d()(a,"card-title"),t);return n.a.createElement(c,Object(s.a)({},o,{className:l}))};m.propTypes=b,m.defaultProps={tag:"div"},a.a=m},460:function(e,a,t){"use strict";var s=t(14),r=t(20),c=t(0),n=t.n(c),o=t(5),l=t.n(o),i=t(56),d=t.n(i),u=t(78),b={tag:u.tagPropType,listTag:u.tagPropType,className:l.a.string,listClassName:l.a.string,cssModule:l.a.object,children:l.a.node,"aria-label":l.a.string},m=function(e){var a=e.className,t=e.listClassName,c=e.cssModule,o=e.children,l=e.tag,i=e.listTag,b=e["aria-label"],m=Object(r.a)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),j=Object(u.mapToCssModules)(d()(a),c),p=Object(u.mapToCssModules)(d()("breadcrumb",t),c);return n.a.createElement(l,Object(s.a)({},m,{className:j,"aria-label":b}),n.a.createElement(i,{className:p},o))};m.propTypes=b,m.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},a.a=m},461:function(e,a,t){"use strict";var s=t(14),r=t(20),c=t(0),n=t.n(c),o=t(5),l=t.n(o),i=t(56),d=t.n(i),u=t(78),b={tag:u.tagPropType,active:l.a.bool,className:l.a.string,cssModule:l.a.object},m=function(e){var a=e.className,t=e.cssModule,c=e.active,o=e.tag,l=Object(r.a)(e,["className","cssModule","active","tag"]),i=Object(u.mapToCssModules)(d()(a,!!c&&"active","breadcrumb-item"),t);return n.a.createElement(o,Object(s.a)({},l,{className:i,"aria-current":c?"page":void 0}))};m.propTypes=b,m.defaultProps={tag:"li"},a.a=m},463:function(e,a,t){"use strict";t.d(a,"a",(function(){return p}));var s=t(452),r=t(14),c=t(116),n=t(115),o=t(0),l=t.n(o),i=t(5),d=t.n(i),u=t(450),b=t(78);function m(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);a&&(s=s.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,s)}return t}var j=["defaultOpen"],p=function(e){function a(a){var t;return(t=e.call(this,a)||this).state={isOpen:a.defaultOpen||!1},t.toggle=t.toggle.bind(Object(c.a)(t)),t}Object(n.a)(a,e);var t=a.prototype;return t.toggle=function(){this.setState({isOpen:!this.state.isOpen})},t.render=function(){return l.a.createElement(u.a,Object(r.a)({isOpen:this.state.isOpen,toggle:this.toggle},Object(b.omit)(this.props,j)))},a}(o.Component);p.propTypes=function(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?m(Object(t),!0).forEach((function(a){Object(s.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}({defaultOpen:d.a.bool},u.a.propTypes)},564:function(e,a,t){"use strict";var s=t(14),r=t(20),c=t(0),n=t.n(c),o=t(5),l=t.n(o),i=t(56),d=t.n(i),u=t(78),b={tag:u.tagPropType,flush:l.a.bool,className:l.a.string,cssModule:l.a.object,horizontal:l.a.oneOfType([l.a.bool,l.a.string])},m=function(e){var a=e.className,t=e.cssModule,c=e.tag,o=e.flush,l=e.horizontal,i=Object(r.a)(e,["className","cssModule","tag","flush","horizontal"]),b=Object(u.mapToCssModules)(d()(a,"list-group",o?"list-group-flush":function(e){return!1!==e&&(!0===e||"xs"===e?"list-group-horizontal":"list-group-horizontal-"+e)}(l)),t);return n.a.createElement(c,Object(s.a)({},i,{className:b}))};m.propTypes=b,m.defaultProps={tag:"ul",horizontal:!1},a.a=m},565:function(e,a,t){"use strict";var s=t(14),r=t(20),c=t(0),n=t.n(c),o=t(5),l=t.n(o),i=t(56),d=t.n(i),u=t(78),b={tag:u.tagPropType,active:l.a.bool,disabled:l.a.bool,color:l.a.string,action:l.a.bool,className:l.a.any,cssModule:l.a.object},m=function(e){e.preventDefault()},j=function(e){var a=e.className,t=e.cssModule,c=e.tag,o=e.active,l=e.disabled,i=e.action,b=e.color,j=Object(r.a)(e,["className","cssModule","tag","active","disabled","action","color"]),p=Object(u.mapToCssModules)(d()(a,!!o&&"active",!!l&&"disabled",!!i&&"list-group-item-action",!!b&&"list-group-item-"+b,"list-group-item"),t);return l&&(j.onClick=m),n.a.createElement(c,Object(s.a)({},j,{className:p}))};j.propTypes=b,j.defaultProps={tag:"li"},a.a=j}}]);
//# sourceMappingURL=102.d7373101.chunk.js.map