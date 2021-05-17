(this["webpackJsonprdlink-admin-dashboard"]=this["webpackJsonprdlink-admin-dashboard"]||[]).push([[113],{1802:function(e,a,t){},1956:function(e,a,t){"use strict";t.r(a);var s=t(15),c=t(0),l=t(79),n=t.n(l),r=t(456),o=t(457),i=t(575),d=t(6),u=function(e){var a=e.data;return Object(d.jsxs)("div",{className:"pricing-faq",children:[Object(d.jsx)("h3",{className:"text-center",children:"FAQ's"}),Object(d.jsx)("p",{className:"text-center",children:"Let us help answer the most common questions."}),Object(d.jsx)(r.a,{className:"my-2",children:Object(d.jsx)(o.a,{className:"mx-auto",sm:"12",lg:{size:10,offset:2},children:Object(d.jsx)(i.a,{type:"margin",data:a,titleKey:"question",contentKey:"ans",accordion:!0})})})]})},j=t(21),b=t(56),m=t.n(b),p=t(458),f=t(460),g=t(1254),h=t(461),O=t(637),x=t(638),y=t(447),v=function(e){var a=e.data,t=e.duration;return Object(d.jsx)(r.a,{className:"pricing-card",children:Object(d.jsx)(o.a,{className:"mx-auto",sm:{offset:2,size:10},lg:{offset:2,size:10},md:"12",children:Object(d.jsx)(r.a,{children:a.map((function(e,a){var s,c="yearly"===t?e.yearlyPlan.perMonth:e.monthlyPrice,l="yearly"===t?e.yearlyPlan.totalAnnual:e.monthlyPrice,n="Basic"===e.title?"mb-2 mt-5":"Standard"===e.title?"mb-1":"mb-2";return Object(d.jsx)(o.a,{md:"4",xs:"12",children:Object(d.jsx)(p.a,{className:m()("text-center",(s={},Object(j.a)(s,"".concat(e.title.toLowerCase(),"-pricing"),e.title),Object(j.a)(s,"popular",!0===e.popular),s)),children:Object(d.jsxs)(f.a,{children:[!0===e.popular?Object(d.jsx)("div",{className:"pricing-badge text-right",children:Object(d.jsx)(g.a,{color:"light-primary",pill:!0,children:"Popular"})}):null,Object(d.jsx)("img",{className:n,src:e.img,alt:"pricing svg"}),Object(d.jsx)("h3",{children:e.title}),Object(d.jsx)(h.a,{children:e.subtitle}),Object(d.jsxs)("div",{className:"annual-plan",children:[Object(d.jsxs)("div",{className:"plan-price mt-2",children:[Object(d.jsx)("sup",{className:"font-medium-1 font-weight-bold text-primary mr-25",children:"$"}),Object(d.jsx)("span",{className:"pricing-".concat(e.title.toLowerCase(),"-value font-weight-bolder text-primary"),children:c}),Object(d.jsx)("span",{className:"pricing-duration text-body font-medium-1 font-weight-bold ml-25",children:"/month"})]}),"Basic"!==e.title&&"yearly"===t?Object(d.jsxs)("small",{className:"annual-pricing text-muted",children:["USD ",l," / year"]}):null]}),Object(d.jsx)(O.a,{tag:"ul",className:"list-group-circle text-left mb-2",children:e.planBenefits.map((function(e,a){return Object(d.jsx)(x.a,{tag:"li",children:e},a)}))}),Object(d.jsx)(y.a.Ripple,{color:"Basic"===e.title?"success":"primary",outline:"Standard"!==e.title,block:!0,children:"Basic"===e.title?"Your current plan":"Upgrade"})]})})},a)}))})})})},N=t.p+"static/media/pricing-Illustration.b00baee8.svg",M=function(){return Object(d.jsx)("div",{className:"pricing-free-trial",children:Object(d.jsx)(r.a,{children:Object(d.jsx)(o.a,{className:"mx-auto",lg:{size:10,offset:3},sm:"12",children:Object(d.jsxs)("div",{className:"pricing-trial-content d-flex justify-content-between",children:[Object(d.jsxs)("div",{className:"text-center text-md-left mt-3",children:[Object(d.jsx)("h3",{className:"text-primary",children:"Still not convinced? Start with a 14-day FREE trial!"}),Object(d.jsx)("h5",{children:"You will get full access to with all the features for 14 days."}),Object(d.jsx)("div",{className:"mt-2 mt-lg-3",children:Object(d.jsx)(y.a.Ripple,{color:"primary",children:"Start 14-day FREE trial"})})]}),Object(d.jsx)("img",{className:"pricing-trial-img img-fluid",src:N,alt:"trial svg",style:{transform:"scaleX(1)"}})]})})})})},T=(t(598),t(1080)),w=function(e){var a=e.duration,t=e.setDuration;return Object(d.jsxs)("div",{className:"text-center",children:[Object(d.jsx)("h1",{className:"mt-5",children:"Pricing Plans"}),Object(d.jsx)("p",{className:"mb-2 pb-75",children:"All plans include 40+ advanced tools and features to boost your product. Choose the best plan to fit your needs."}),Object(d.jsxs)("div",{className:"d-flex align-items-center justify-content-center mb-5 pb-50",children:[Object(d.jsx)("h6",{className:"mr-1 mb-0",children:"Monthly"}),Object(d.jsx)(T.a,{id:"plan-switch",type:"switch",checked:"yearly"===a,onChange:function(e){e.target.checked?t("yearly"):t("monthly")}}),Object(d.jsx)("h6",{className:"ml-50 mb-0",children:"Annually"})]})]})};t(1802),a.default=function(){var e=Object(c.useState)(null),a=Object(s.a)(e,2),t=a[0],l=a[1],r=Object(c.useState)(null),o=Object(s.a)(r,2),i=o[0],j=o[1],b=Object(c.useState)("monthly"),m=Object(s.a)(b,2),p=m[0],f=m[1];return Object(c.useEffect)((function(){n.a.get("/pricing/data").then((function(e){var a=[],t=[];Object.entries(e.data).forEach((function(e){var c=Object(s.a)(e,2),n=c[0],r=c[1];"qandA"!==n?(a.push(r),l([].concat(a))):(t.push(r),j(t[0]))}))}))}),[]),Object(d.jsxs)("div",{id:"pricing-table",children:[Object(d.jsx)(w,{duration:p,setDuration:f}),null!==t&&null!==i?Object(d.jsxs)(c.Fragment,{children:[Object(d.jsx)(v,{data:t,duration:p}),Object(d.jsx)(M,{}),Object(d.jsx)(u,{data:i})]}):null]})}},456:function(e,a,t){"use strict";var s=t(14),c=t(20),l=t(0),n=t.n(l),r=t(5),o=t.n(r),i=t(56),d=t.n(i),u=t(78),j=o.a.oneOfType([o.a.number,o.a.string]),b={tag:u.tagPropType,noGutters:o.a.bool,className:o.a.string,cssModule:o.a.object,form:o.a.bool,xs:j,sm:j,md:j,lg:j,xl:j},m={tag:"div",widths:["xs","sm","md","lg","xl"]},p=function(e){var a=e.className,t=e.cssModule,l=e.noGutters,r=e.tag,o=e.form,i=e.widths,j=Object(c.a)(e,["className","cssModule","noGutters","tag","form","widths"]),b=[];i.forEach((function(a,t){var s=e[a];if(delete j[a],s){var c=!t;b.push(c?"row-cols-"+s:"row-cols-"+a+"-"+s)}}));var m=Object(u.mapToCssModules)(d()(a,l?"no-gutters":null,o?"form-row":"row",b),t);return n.a.createElement(r,Object(s.a)({},j,{className:m}))};p.propTypes=b,p.defaultProps=m,a.a=p},457:function(e,a,t){"use strict";var s=t(14),c=t(20),l=t(0),n=t.n(l),r=t(5),o=t.n(r),i=t(56),d=t.n(i),u=t(78),j=o.a.oneOfType([o.a.number,o.a.string]),b=o.a.oneOfType([o.a.bool,o.a.number,o.a.string,o.a.shape({size:o.a.oneOfType([o.a.bool,o.a.number,o.a.string]),order:j,offset:j})]),m={tag:u.tagPropType,xs:b,sm:b,md:b,lg:b,xl:b,className:o.a.string,cssModule:o.a.object,widths:o.a.array},p={tag:"div",widths:["xs","sm","md","lg","xl"]},f=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},g=function(e){var a=e.className,t=e.cssModule,l=e.widths,r=e.tag,o=Object(c.a)(e,["className","cssModule","widths","tag"]),i=[];l.forEach((function(a,s){var c=e[a];if(delete o[a],c||""===c){var l=!s;if(Object(u.isObject)(c)){var n,r=l?"-":"-"+a+"-",j=f(l,a,c.size);i.push(Object(u.mapToCssModules)(d()(((n={})[j]=c.size||""===c.size,n["order"+r+c.order]=c.order||0===c.order,n["offset"+r+c.offset]=c.offset||0===c.offset,n)),t))}else{var b=f(l,a,c);i.push(b)}}})),i.length||i.push("col");var j=Object(u.mapToCssModules)(d()(a,i),t);return n.a.createElement(r,Object(s.a)({},o,{className:j}))};g.propTypes=m,g.defaultProps=p,a.a=g},458:function(e,a,t){"use strict";var s=t(14),c=t(20),l=t(0),n=t.n(l),r=t(5),o=t.n(r),i=t(56),d=t.n(i),u=t(78),j={tag:u.tagPropType,inverse:o.a.bool,color:o.a.string,body:o.a.bool,outline:o.a.bool,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},b=function(e){var a=e.className,t=e.cssModule,l=e.color,r=e.body,o=e.inverse,i=e.outline,j=e.tag,b=e.innerRef,m=Object(c.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),p=Object(u.mapToCssModules)(d()(a,"card",!!o&&"text-white",!!r&&"card-body",!!l&&(i?"border":"bg")+"-"+l),t);return n.a.createElement(j,Object(s.a)({},m,{className:p,ref:b}))};b.propTypes=j,b.defaultProps={tag:"div"},a.a=b},460:function(e,a,t){"use strict";var s=t(14),c=t(20),l=t(0),n=t.n(l),r=t(5),o=t.n(r),i=t(56),d=t.n(i),u=t(78),j={tag:u.tagPropType,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},b=function(e){var a=e.className,t=e.cssModule,l=e.innerRef,r=e.tag,o=Object(c.a)(e,["className","cssModule","innerRef","tag"]),i=Object(u.mapToCssModules)(d()(a,"card-body"),t);return n.a.createElement(r,Object(s.a)({},o,{className:i,ref:l}))};b.propTypes=j,b.defaultProps={tag:"div"},a.a=b},461:function(e,a,t){"use strict";var s=t(14),c=t(20),l=t(0),n=t.n(l),r=t(5),o=t.n(r),i=t(56),d=t.n(i),u=t(78),j={tag:u.tagPropType,className:o.a.string,cssModule:o.a.object},b=function(e){var a=e.className,t=e.cssModule,l=e.tag,r=Object(c.a)(e,["className","cssModule","tag"]),o=Object(u.mapToCssModules)(d()(a,"card-text"),t);return n.a.createElement(l,Object(s.a)({},r,{className:o}))};b.propTypes=j,b.defaultProps={tag:"p"},a.a=b},463:function(e,a,t){"use strict";var s=t(14),c=t(20),l=t(0),n=t.n(l),r=t(5),o=t.n(r),i=t(56),d=t.n(i),u=t(78),j={tag:u.tagPropType,className:o.a.string,cssModule:o.a.object},b=function(e){var a=e.className,t=e.cssModule,l=e.tag,r=Object(c.a)(e,["className","cssModule","tag"]),o=Object(u.mapToCssModules)(d()(a,"card-header"),t);return n.a.createElement(l,Object(s.a)({},r,{className:o}))};b.propTypes=j,b.defaultProps={tag:"div"},a.a=b},575:function(e,a,t){"use strict";var s=t(1),c=t(21),l=t(15),n=t(118),r=t(0),o=t(56),i=t.n(o),d=t(1137),u=t(458),j=t(463),b=t(459),m=t(895),p=t(460),f=t(6),g=function(e){var a,t=e.data,o=e.type,g=e.accordion,h=e.active,O=e.toggle,x=e.titleKey,y=e.contentKey,v=e.className,N=Object(r.useState)(g?h:Object(n.a)(h)),M=Object(l.a)(N,2),T=M[0],w=M[1],P=function(e){if(g)w(e===T?null:e);else{var a=T,t=a.indexOf(e);a.includes(e)?(a.splice(t,1),w(Object(n.a)(a))):(a.push(e),w(Object(n.a)(a)))}};return Object(f.jsx)("div",{className:i()("collapse-icon",(a={},Object(c.a)(a,v,v),Object(c.a)(a,"collapse-default",!o),Object(c.a)(a,"collapse-shadow","shadow"===o),Object(c.a)(a,"collapse-border","border"===o),Object(c.a)(a,"collapse-margin","margin"===o),a)),children:t.map((function(e,a){var t,l=x?e[x]:e.title,n=y?e[y]:e.content;return Object(f.jsxs)(u.a,{className:i()("app-collapse",(t={},Object(c.a)(t,e.className,e.className),Object(c.a)(t,"open",g?T===a:T.includes(a)&&"shadow"===o),t)),children:[Object(f.jsxs)(j.a,Object(s.a)(Object(s.a)({className:i()("align-items-center",{collapsed:g?T!==a:!T.includes(a)})},"hover"===O?{onMouseEnter:function(){return P(a)}}:{onClick:function(){return P(a)}}),{},{children:[Object(f.jsx)(b.a,{className:"collapse-title",children:l}),Object(f.jsx)(d.a,{size:14})]})),Object(f.jsx)(m.a,{isOpen:g?T===a:T.includes(a),children:Object(f.jsx)(p.a,{children:n})})]},a)}))})};a.a=g,g.defaultProps={active:[],toggle:"click"}},637:function(e,a,t){"use strict";var s=t(14),c=t(20),l=t(0),n=t.n(l),r=t(5),o=t.n(r),i=t(56),d=t.n(i),u=t(78),j={tag:u.tagPropType,flush:o.a.bool,className:o.a.string,cssModule:o.a.object,horizontal:o.a.oneOfType([o.a.bool,o.a.string])},b=function(e){var a=e.className,t=e.cssModule,l=e.tag,r=e.flush,o=e.horizontal,i=Object(c.a)(e,["className","cssModule","tag","flush","horizontal"]),j=Object(u.mapToCssModules)(d()(a,"list-group",r?"list-group-flush":function(e){return!1!==e&&(!0===e||"xs"===e?"list-group-horizontal":"list-group-horizontal-"+e)}(o)),t);return n.a.createElement(l,Object(s.a)({},i,{className:j}))};b.propTypes=j,b.defaultProps={tag:"ul",horizontal:!1},a.a=b},638:function(e,a,t){"use strict";var s=t(14),c=t(20),l=t(0),n=t.n(l),r=t(5),o=t.n(r),i=t(56),d=t.n(i),u=t(78),j={tag:u.tagPropType,active:o.a.bool,disabled:o.a.bool,color:o.a.string,action:o.a.bool,className:o.a.any,cssModule:o.a.object},b=function(e){e.preventDefault()},m=function(e){var a=e.className,t=e.cssModule,l=e.tag,r=e.active,o=e.disabled,i=e.action,j=e.color,m=Object(c.a)(e,["className","cssModule","tag","active","disabled","action","color"]),p=Object(u.mapToCssModules)(d()(a,!!r&&"active",!!o&&"disabled",!!i&&"list-group-item-action",!!j&&"list-group-item-"+j,"list-group-item"),t);return o&&(m.onClick=b),n.a.createElement(l,Object(s.a)({},m,{className:p}))};m.propTypes=j,m.defaultProps={tag:"li"},a.a=m}}]);
//# sourceMappingURL=113.eb3f2338.chunk.js.map