(this["webpackJsonprdlink-admin-dashboard"]=this["webpackJsonprdlink-admin-dashboard"]||[]).push([[140],{1861:function(e,a,s){"use strict";s.r(a);var t=s(21),c=s(1),n=s(15),r=s(0),l=s(56),i=s.n(l),o=s(457),d=s(539),j=s(1034),b=s(121),m=s(496),u=s(124),p=s(855),O=s(127),h=s(512),g=s(451),f=s(497),x=s(477),N=s(1114),v=s(1142),y=s(1131),w=s(1204),P=s(1156),T=s(1137),C=s(455),M=s(456),k=s(458),R=s(464),z=s(492),E=s(1221),D=s(483),S=s(1047),L=s(473),I=s(469),A=s(1044),F=s(447),q=(s(514),s(6)),J=function(e){var a=e.name,s=e.role;return Object(q.jsxs)(r.Fragment,{children:[Object(q.jsx)("div",{className:"toastify-header",children:Object(q.jsxs)("div",{className:"title-wrapper",children:[Object(q.jsx)(o.a,{size:"sm",color:"success",icon:Object(q.jsx)(N.a,{size:12})}),Object(q.jsxs)("h6",{className:"toast-title font-weight-bold",children:["Welcome, ",a]})]})}),Object(q.jsx)("div",{className:"toastify-body",children:Object(q.jsxs)("span",{children:["You have successfully logged in as an ",s," user to RD LINK. Now you can start to explore. Enjoy!"]})})]})};a.default=function(e){var a,l=Object(d.a)(),o=Object(n.a)(l,2),N=o[0],K=(o[1],Object(r.useContext)(O.a)),W=Object(b.b)(),B=Object(h.g)(),V=Object(r.useState)("admin@demo.com"),Y=Object(n.a)(V,2),G=Y[0],H=Y[1],Q=Object(r.useState)("admin"),U=Object(n.a)(Q,2),X=U[0],Z=U[1],$=Object(m.c)(),_=$.register,ee=$.errors,ae=$.handleSubmit,se="dark"===N?"login-v2-dark.svg":"login-v2.svg",te=s(646)("./".concat(se)).default;return Object(q.jsx)("div",{className:"auth-wrapper auth-v2",children:Object(q.jsxs)(C.a,{className:"auth-inner m-0",children:[Object(q.jsx)(g.b,{className:"brand-logo",to:"/",onClick:function(e){return e.preventDefault()},children:Object(q.jsx)("h2",{className:"brand-text text-primary ml-1",children:"RD LINK"})}),Object(q.jsx)(M.a,{className:"d-none d-lg-flex align-items-center p-5",lg:"8",sm:"12",children:Object(q.jsx)("div",{className:"w-100 d-lg-flex align-items-center justify-content-center px-5",children:Object(q.jsx)("img",{className:"img-fluid",src:te,alt:"Login V2"})})}),Object(q.jsx)(M.a,{className:"d-flex align-items-center auth-bg px-2 p-lg-5",lg:"4",sm:"12",children:Object(q.jsxs)(M.a,{className:"px-xl-2 mx-auto",sm:"8",md:"6",lg:"12",children:[Object(q.jsx)(k.a,{tag:"h2",className:"font-weight-bold mb-1",children:"Welcome to RD LINK! \ud83d\udc4b"}),Object(q.jsx)(R.a,{className:"mb-2",children:"Please sign-in to your account and start the adventure"}),Object(q.jsxs)(z.a,{color:"primary",children:[Object(q.jsxs)("div",{className:"alert-body font-small-2",children:[Object(q.jsx)("p",{children:Object(q.jsxs)("small",{className:"mr-50",children:[Object(q.jsx)("span",{className:"font-weight-bold",children:"Admin:"})," admin@demo.com | admin"]})}),Object(q.jsx)("p",{children:Object(q.jsxs)("small",{className:"mr-50",children:[Object(q.jsx)("span",{className:"font-weight-bold",children:"Client:"})," client@demo.com | client"]})})]}),Object(q.jsx)(v.a,{id:"login-tip",className:"position-absolute",size:18,style:{top:"10px",right:"10px"}}),Object(q.jsx)(E.a,{target:"login-tip",placement:"left",children:"This is just for ACL demo purpose."})]}),Object(q.jsxs)(D.a,{className:"auth-login-form mt-2",onSubmit:ae((function(e){Object(x.e)(ee)&&j.a.login({email:G,password:X}).then((function(e){var a=Object(c.a)(Object(c.a)({},e.data.userData),{},{accessToken:e.data.accessToken,refreshToken:e.data.refreshToken});W(Object(p.a)(a)),K.update(e.data.userData.ability),B.push(Object(x.c)(a.role)),u.f.success(Object(q.jsx)(J,{name:a.fullName||a.username||"John Doe",role:a.role||"admin"}),{transition:u.c,hideProgressBar:!0,autoClose:2e3})})).catch((function(e){return console.log(e)}))})),children:[Object(q.jsxs)(S.a,{children:[Object(q.jsx)(L.a,{className:"form-label",for:"login-email",children:"Email"}),Object(q.jsx)(I.a,{autoFocus:!0,type:"email",value:G,id:"login-email",name:"login-email",placeholder:"john@example.com",onChange:function(e){return H(e.target.value)},className:i()({"is-invalid":ee["login-email"]}),innerRef:_({required:!0,validate:function(e){return""!==e}})})]}),Object(q.jsxs)(S.a,{children:[Object(q.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(q.jsx)(L.a,{className:"form-label",for:"login-password",children:"Password"}),Object(q.jsx)(g.b,{to:"/forgot-password",children:Object(q.jsx)("small",{children:"Forgot Password?"})})]}),Object(q.jsx)(f.a,(a={value:X,id:"login-password",name:"login-password",className:"input-group-merge",onChange:function(e){return Z(e.target.value)}},Object(t.a)(a,"className",i()({"is-invalid":ee["login-password"]})),Object(t.a)(a,"innerRef",_({required:!0,validate:function(e){return""!==e}})),a))]}),Object(q.jsx)(S.a,{children:Object(q.jsx)(A.a,{type:"checkbox",className:"custom-control-Primary",id:"remember-me",label:"Remember Me"})}),Object(q.jsx)(F.a.Ripple,{type:"submit",color:"primary",block:!0,children:"Sign in"})]}),Object(q.jsxs)("p",{className:"text-center mt-2",children:[Object(q.jsx)("span",{className:"mr-25",children:"New on our platform?"}),Object(q.jsx)(g.b,{to:"/register",children:Object(q.jsx)("span",{children:"Create an account"})})]}),Object(q.jsx)("div",{className:"divider my-2",children:Object(q.jsx)("div",{className:"divider-text",children:"or"})}),Object(q.jsxs)("div",{className:"auth-footer-btn d-flex justify-content-center",children:[Object(q.jsx)(F.a.Ripple,{color:"facebook",children:Object(q.jsx)(y.a,{size:14})}),Object(q.jsx)(F.a.Ripple,{color:"twitter",children:Object(q.jsx)(w.a,{size:14})}),Object(q.jsx)(F.a.Ripple,{color:"google",children:Object(q.jsx)(P.a,{size:14})}),Object(q.jsx)(F.a.Ripple,{className:"mr-0",color:"github",children:Object(q.jsx)(T.a,{size:14})})]})]})})]})})}},465:function(e,a,s){"use strict";var t=s(14),c=s(20),n=s(0),r=s.n(n),l=s(5),i=s.n(l),o=s(56),d=s.n(o),j=s(78),b={tag:j.tagPropType,className:i.a.string,cssModule:i.a.object},m=function(e){var a=e.className,s=e.cssModule,n=e.tag,l=Object(c.a)(e,["className","cssModule","tag"]),i=Object(j.mapToCssModules)(d()(a,"input-group-text"),s);return r.a.createElement(n,Object(t.a)({},l,{className:i}))};m.propTypes=b,m.defaultProps={tag:"span"},a.a=m},485:function(e,a,s){"use strict";var t=s(14),c=s(20),n=s(0),r=s.n(n),l=s(5),i=s.n(l),o=s(56),d=s.n(o),j=s(78),b={tag:j.tagPropType,size:i.a.string,className:i.a.string,cssModule:i.a.object},m=function(e){var a=e.className,s=e.cssModule,n=e.tag,l=e.size,i=Object(c.a)(e,["className","cssModule","tag","size"]),o=Object(j.mapToCssModules)(d()(a,"input-group",l?"input-group-"+l:null),s);return r.a.createElement(n,Object(t.a)({},i,{className:o}))};m.propTypes=b,m.defaultProps={tag:"div"},a.a=m},486:function(e,a,s){"use strict";var t=s(14),c=s(20),n=s(0),r=s.n(n),l=s(5),i=s.n(l),o=s(56),d=s.n(o),j=s(78),b=s(465),m={tag:j.tagPropType,addonType:i.a.oneOf(["prepend","append"]).isRequired,children:i.a.node,className:i.a.string,cssModule:i.a.object},u=function(e){var a=e.className,s=e.cssModule,n=e.tag,l=e.addonType,i=e.children,o=Object(c.a)(e,["className","cssModule","tag","addonType","children"]),m=Object(j.mapToCssModules)(d()(a,"input-group-"+l),s);return"string"===typeof i?r.a.createElement(n,Object(t.a)({},o,{className:m}),r.a.createElement(b.a,{children:i})):r.a.createElement(n,Object(t.a)({},o,{className:m,children:i}))};u.propTypes=m,u.defaultProps={tag:"div"},a.a=u},492:function(e,a,s){"use strict";var t=s(14),c=s(20),n=s(452),r=s(0),l=s.n(r),i=s(5),o=s.n(i),d=s(56),j=s.n(d),b=s(78),m=s(480);function u(e,a){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),s.push.apply(s,t)}return s}function p(e){for(var a=1;a<arguments.length;a++){var s=null!=arguments[a]?arguments[a]:{};a%2?u(Object(s),!0).forEach((function(a){Object(n.a)(e,a,s[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):u(Object(s)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(s,a))}))}return e}var O={children:o.a.node,className:o.a.string,closeClassName:o.a.string,closeAriaLabel:o.a.string,cssModule:o.a.object,color:o.a.string,fade:o.a.bool,isOpen:o.a.bool,toggle:o.a.func,tag:b.tagPropType,transition:o.a.shape(m.a.propTypes),innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},h={color:"success",isOpen:!0,tag:"div",closeAriaLabel:"Close",fade:!0,transition:p(p({},m.a.defaultProps),{},{unmountOnExit:!0})};function g(e){var a=e.className,s=e.closeClassName,n=e.closeAriaLabel,r=e.cssModule,i=e.tag,o=e.color,d=e.isOpen,u=e.toggle,O=e.children,h=e.transition,g=e.fade,f=e.innerRef,x=Object(c.a)(e,["className","closeClassName","closeAriaLabel","cssModule","tag","color","isOpen","toggle","children","transition","fade","innerRef"]),N=Object(b.mapToCssModules)(j()(a,"alert","alert-"+o,{"alert-dismissible":u}),r),v=Object(b.mapToCssModules)(j()("close",s),r),y=p(p(p({},m.a.defaultProps),h),{},{baseClass:g?h.baseClass:"",timeout:g?h.timeout:0});return l.a.createElement(m.a,Object(t.a)({},x,y,{tag:i,className:N,in:d,role:"alert",innerRef:f}),u?l.a.createElement("button",{type:"button",className:v,"aria-label":n,onClick:u},l.a.createElement("span",{"aria-hidden":"true"},"\xd7")):null,O)}g.propTypes=O,g.defaultProps=h,a.a=g},497:function(e,a,s){"use strict";var t=s(1),c=s(21),n=s(15),r=s(117),l=s(0),i=s(56),o=s.n(i),d=s(1130),j=s(1129),b=s(473),m=s(485),u=s(469),p=s(486),O=s(465),h=s(6),g=function(e){var a=e.label,s=e.hideIcon,i=e.showIcon,g=e.visible,f=e.className,x=e.htmlFor,N=e.placeholder,v=e.iconSize,y=e.inputClassName,w=Object(r.a)(e,["label","hideIcon","showIcon","visible","className","htmlFor","placeholder","iconSize","inputClassName"]),P=Object(l.useState)(g),T=Object(n.a)(P,2),C=T[0],M=T[1];return Object(h.jsxs)(l.Fragment,{children:[a?Object(h.jsx)(b.a,{for:x,children:a}):null,Object(h.jsxs)(m.a,{className:o()(Object(c.a)({},f,f)),children:[Object(h.jsx)(u.a,Object(t.a)(Object(t.a)({type:!1===C?"password":"text",placeholder:N||"\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7",className:o()(Object(c.a)({},y,y))},a&&x?{id:x}:{}),w)),Object(h.jsx)(p.a,{addonType:"append",onClick:function(){return M(!C)},children:Object(h.jsx)(O.a,{className:"cursor-pointer",children:function(){var e=v||14;return!1===C?s||Object(h.jsx)(d.a,{size:e}):i||Object(h.jsx)(j.a,{size:e})}()})})]})]})};a.a=g,g.defaultProps={visible:!1}}}]);
//# sourceMappingURL=140.e9a53d47.chunk.js.map