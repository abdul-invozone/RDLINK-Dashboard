(this["webpackJsonprdlink-admin-dashboard"]=this["webpackJsonprdlink-admin-dashboard"]||[]).push([[162],{1877:function(e,s,t){"use strict";t.r(s);var a=t(15),n=t(449),r=t(541),c=t(456),o=t(457),l=t(459),i=t(461),d=t(447),u=(t(526),t(6));s.default=function(){var e=Object(r.a)(),s=Object(a.a)(e,2),m=s[0],p=(s[1],"dark"===m?"forgot-password-v2-dark.svg":"forgot-password-v2.svg"),g=t(613)("./".concat(p)).default;return Object(u.jsx)("div",{className:"auth-wrapper auth-v2",children:Object(u.jsxs)(c.a,{className:"auth-inner m-0",children:[Object(u.jsx)(n.b,{className:"brand-logo",to:"/",onClick:function(e){return e.preventDefault()},children:Object(u.jsx)("h2",{className:"brand-text text-primary ml-1",children:"Link RD"})}),Object(u.jsx)(o.a,{className:"d-flex align-items-center auth-bg px-2 p-lg-5",lg:"5",sm:"12",children:Object(u.jsxs)(o.a,{className:"px-xl-2 mx-auto",sm:"8",md:"6",lg:"12",children:[Object(u.jsx)(l.a,{tag:"h2",className:"font-weight-bold mb-1 display-4",children:"The Easiest way to connect with nutrition experts"}),Object(u.jsx)(i.a,{className:"mb-2",style:{fontSize:"18px",lineHeight:"1.6"},children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}),Object(u.jsx)(d.a.Ripple,{color:"secondary",children:"Get Started"})]})}),Object(u.jsxs)(o.a,{className:"d-none d-lg-flex align-items-center p-5 auth-bg",lg:"7",sm:"12",children:[Object(u.jsxs)("ul",{class:"list-unstyled",style:{position:"absolute",top:"0",right:"0",margin:"2rem"},children:[Object(u.jsx)("li",{class:"d-inline-block",children:Object(u.jsx)(n.b,{to:"/pages/login-v2",children:"Login"})}),Object(u.jsx)("li",{class:"d-inline-block",style:{padding:"0 2px"},children:"|"}),Object(u.jsx)("li",{class:"d-inline-block",children:Object(u.jsx)(n.b,{to:"/createloginrd",children:"Create Account"})})]}),Object(u.jsx)("div",{className:"w-100 d-lg-flex align-items-center justify-content-center px-5",children:Object(u.jsx)("img",{className:"img-fluid",src:g,alt:"Login V2"})})]})]})})}},456:function(e,s,t){"use strict";var a=t(14),n=t(20),r=t(0),c=t.n(r),o=t(5),l=t.n(o),i=t(56),d=t.n(i),u=t(78),m=l.a.oneOfType([l.a.number,l.a.string]),p={tag:u.tagPropType,noGutters:l.a.bool,className:l.a.string,cssModule:l.a.object,form:l.a.bool,xs:m,sm:m,md:m,lg:m,xl:m},g={tag:"div",widths:["xs","sm","md","lg","xl"]},b=function(e){var s=e.className,t=e.cssModule,r=e.noGutters,o=e.tag,l=e.form,i=e.widths,m=Object(n.a)(e,["className","cssModule","noGutters","tag","form","widths"]),p=[];i.forEach((function(s,t){var a=e[s];if(delete m[s],a){var n=!t;p.push(n?"row-cols-"+a:"row-cols-"+s+"-"+a)}}));var g=Object(u.mapToCssModules)(d()(s,r?"no-gutters":null,l?"form-row":"row",p),t);return c.a.createElement(o,Object(a.a)({},m,{className:g}))};b.propTypes=p,b.defaultProps=g,s.a=b},457:function(e,s,t){"use strict";var a=t(14),n=t(20),r=t(0),c=t.n(r),o=t(5),l=t.n(o),i=t(56),d=t.n(i),u=t(78),m=l.a.oneOfType([l.a.number,l.a.string]),p=l.a.oneOfType([l.a.bool,l.a.number,l.a.string,l.a.shape({size:l.a.oneOfType([l.a.bool,l.a.number,l.a.string]),order:m,offset:m})]),g={tag:u.tagPropType,xs:p,sm:p,md:p,lg:p,xl:p,className:l.a.string,cssModule:l.a.object,widths:l.a.array},b={tag:"div",widths:["xs","sm","md","lg","xl"]},h=function(e,s,t){return!0===t||""===t?e?"col":"col-"+s:"auto"===t?e?"col-auto":"col-"+s+"-auto":e?"col-"+t:"col-"+s+"-"+t},f=function(e){var s=e.className,t=e.cssModule,r=e.widths,o=e.tag,l=Object(n.a)(e,["className","cssModule","widths","tag"]),i=[];r.forEach((function(s,a){var n=e[s];if(delete l[s],n||""===n){var r=!a;if(Object(u.isObject)(n)){var c,o=r?"-":"-"+s+"-",m=h(r,s,n.size);i.push(Object(u.mapToCssModules)(d()(((c={})[m]=n.size||""===n.size,c["order"+o+n.order]=n.order||0===n.order,c["offset"+o+n.offset]=n.offset||0===n.offset,c)),t))}else{var p=h(r,s,n);i.push(p)}}})),i.length||i.push("col");var m=Object(u.mapToCssModules)(d()(s,i),t);return c.a.createElement(o,Object(a.a)({},l,{className:m}))};f.propTypes=g,f.defaultProps=b,s.a=f},459:function(e,s,t){"use strict";var a=t(14),n=t(20),r=t(0),c=t.n(r),o=t(5),l=t.n(o),i=t(56),d=t.n(i),u=t(78),m={tag:u.tagPropType,className:l.a.string,cssModule:l.a.object},p=function(e){var s=e.className,t=e.cssModule,r=e.tag,o=Object(n.a)(e,["className","cssModule","tag"]),l=Object(u.mapToCssModules)(d()(s,"card-title"),t);return c.a.createElement(r,Object(a.a)({},o,{className:l}))};p.propTypes=m,p.defaultProps={tag:"div"},s.a=p},461:function(e,s,t){"use strict";var a=t(14),n=t(20),r=t(0),c=t.n(r),o=t(5),l=t.n(o),i=t(56),d=t.n(i),u=t(78),m={tag:u.tagPropType,className:l.a.string,cssModule:l.a.object},p=function(e){var s=e.className,t=e.cssModule,r=e.tag,o=Object(n.a)(e,["className","cssModule","tag"]),l=Object(u.mapToCssModules)(d()(s,"card-text"),t);return c.a.createElement(r,Object(a.a)({},o,{className:l}))};p.propTypes=m,p.defaultProps={tag:"p"},s.a=p}}]);
//# sourceMappingURL=162.c626307a.chunk.js.map