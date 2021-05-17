(this["webpackJsonprdlink-admin-dashboard"]=this["webpackJsonprdlink-admin-dashboard"]||[]).push([[136],{1858:function(e,a,s){"use strict";s.r(a);var t=s(21),c=s(1),n=s(15),r=s(0),l=s(56),o=s.n(l),i=s(455),d=s(541),j=s(1067),b=s(119),u=s(520),m=s(124),p=s(955),O=s(128),g=s(545),h=s(449),f=s(522),x=s(483),N=s(1149),v=s(1177),y=s(1166),w=s(1239),T=s(1191),P=s(1172),M=s(456),C=s(457),k=s(459),R=s(461),E=s(512),z=s(1256),D=s(491),S=s(1083),L=s(477),I=s(475),A=s(1080),F=s(447),q=(s(526),s(6)),J=function(e){var a=e.name,s=e.role;return Object(q.jsxs)(r.Fragment,{children:[Object(q.jsx)("div",{className:"toastify-header",children:Object(q.jsxs)("div",{className:"title-wrapper",children:[Object(q.jsx)(i.a,{size:"sm",color:"success",icon:Object(q.jsx)(N.a,{size:12})}),Object(q.jsxs)("h6",{className:"toast-title font-weight-bold",children:["Welcome, ",a]})]})}),Object(q.jsx)("div",{className:"toastify-body",children:Object(q.jsxs)("span",{children:["You have successfully logged in as an ",s," user to RD LINK. Now you can start to explore. Enjoy!"]})})]})};a.default=function(e){var a,l=Object(d.a)(),i=Object(n.a)(l,2),N=i[0],K=(i[1],Object(r.useContext)(O.a)),W=Object(b.b)(),B=Object(g.g)(),V=Object(r.useState)("admin@demo.com"),Y=Object(n.a)(V,2),G=Y[0],H=Y[1],Q=Object(r.useState)("admin"),U=Object(n.a)(Q,2),X=U[0],Z=U[1],$=Object(u.c)(),_=$.register,ee=$.errors,ae=$.handleSubmit,se="dark"===N?"login-v2-dark.svg":"login-v2.svg",te=s(613)("./".concat(se)).default;return Object(q.jsx)("div",{className:"auth-wrapper auth-v2",children:Object(q.jsxs)(M.a,{className:"auth-inner m-0",children:[Object(q.jsx)(h.b,{className:"brand-logo",to:"/",onClick:function(e){return e.preventDefault()},children:Object(q.jsx)("h2",{className:"brand-text text-primary ml-1",children:"RD LINK"})}),Object(q.jsx)(C.a,{className:"d-none d-lg-flex align-items-center p-5",lg:"8",sm:"12",children:Object(q.jsx)("div",{className:"w-100 d-lg-flex align-items-center justify-content-center px-5",children:Object(q.jsx)("img",{className:"img-fluid",src:te,alt:"Login V2"})})}),Object(q.jsx)(C.a,{className:"d-flex align-items-center auth-bg px-2 p-lg-5",lg:"4",sm:"12",children:Object(q.jsxs)(C.a,{className:"px-xl-2 mx-auto",sm:"8",md:"6",lg:"12",children:[Object(q.jsx)(k.a,{tag:"h2",className:"font-weight-bold mb-1",children:"Welcome to RD LINK! \ud83d\udc4b"}),Object(q.jsx)(R.a,{className:"mb-2",children:"Please sign-in to your account and start the adventure"}),Object(q.jsxs)(E.a,{color:"primary",children:[Object(q.jsxs)("div",{className:"alert-body font-small-2",children:[Object(q.jsx)("p",{children:Object(q.jsxs)("small",{className:"mr-50",children:[Object(q.jsx)("span",{className:"font-weight-bold",children:"Admin:"})," admin@demo.com | admin"]})}),Object(q.jsx)("p",{children:Object(q.jsxs)("small",{className:"mr-50",children:[Object(q.jsx)("span",{className:"font-weight-bold",children:"Client:"})," client@demo.com | client"]})})]}),Object(q.jsx)(v.a,{id:"login-tip",className:"position-absolute",size:18,style:{top:"10px",right:"10px"}}),Object(q.jsx)(z.a,{target:"login-tip",placement:"left",children:"This is just for ACL demo purpose."})]}),Object(q.jsxs)(D.a,{className:"auth-login-form mt-2",onSubmit:ae((function(e){Object(x.e)(ee)&&j.a.login({email:G,password:X}).then((function(e){var a=Object(c.a)(Object(c.a)({},e.data.userData),{},{accessToken:e.data.accessToken,refreshToken:e.data.refreshToken});W(Object(p.a)(a)),K.update(e.data.userData.ability),B.push(Object(x.c)(a.role)),m.f.success(Object(q.jsx)(J,{name:a.fullName||a.username||"John Doe",role:a.role||"admin"}),{transition:m.c,hideProgressBar:!0,autoClose:2e3})})).catch((function(e){return console.log(e)}))})),children:[Object(q.jsxs)(S.a,{children:[Object(q.jsx)(L.a,{className:"form-label",for:"login-email",children:"Email"}),Object(q.jsx)(I.a,{autoFocus:!0,type:"email",value:G,id:"login-email",name:"login-email",placeholder:"john@example.com",onChange:function(e){return H(e.target.value)},className:o()({"is-invalid":ee["login-email"]}),innerRef:_({required:!0,validate:function(e){return""!==e}})})]}),Object(q.jsxs)(S.a,{children:[Object(q.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(q.jsx)(L.a,{className:"form-label",for:"login-password",children:"Password"}),Object(q.jsx)(h.b,{to:"/forgot-password",children:Object(q.jsx)("small",{children:"Forgot Password?"})})]}),Object(q.jsx)(f.a,(a={value:X,id:"login-password",name:"login-password",className:"input-group-merge",onChange:function(e){return Z(e.target.value)}},Object(t.a)(a,"className",o()({"is-invalid":ee["login-password"]})),Object(t.a)(a,"innerRef",_({required:!0,validate:function(e){return""!==e}})),a))]}),Object(q.jsx)(S.a,{children:Object(q.jsx)(A.a,{type:"checkbox",className:"custom-control-Primary",id:"remember-me",label:"Remember Me"})}),Object(q.jsx)(F.a.Ripple,{type:"submit",color:"primary",block:!0,children:"Sign in"})]}),Object(q.jsxs)("p",{className:"text-center mt-2",children:[Object(q.jsx)("span",{className:"mr-25",children:"New on our platform?"}),Object(q.jsx)(h.b,{to:"/register",children:Object(q.jsx)("span",{children:"Create an account"})})]}),Object(q.jsx)("div",{className:"divider my-2",children:Object(q.jsx)("div",{className:"divider-text",children:"or"})}),Object(q.jsxs)("div",{className:"auth-footer-btn d-flex justify-content-center",children:[Object(q.jsx)(F.a.Ripple,{color:"facebook",children:Object(q.jsx)(y.a,{size:14})}),Object(q.jsx)(F.a.Ripple,{color:"twitter",children:Object(q.jsx)(w.a,{size:14})}),Object(q.jsx)(F.a.Ripple,{color:"google",children:Object(q.jsx)(T.a,{size:14})}),Object(q.jsx)(F.a.Ripple,{className:"mr-0",color:"github",children:Object(q.jsx)(P.a,{size:14})})]})]})})]})})}},459:function(e,a,s){"use strict";var t=s(14),c=s(20),n=s(0),r=s.n(n),l=s(5),o=s.n(l),i=s(56),d=s.n(i),j=s(78),b={tag:j.tagPropType,className:o.a.string,cssModule:o.a.object},u=function(e){var a=e.className,s=e.cssModule,n=e.tag,l=Object(c.a)(e,["className","cssModule","tag"]),o=Object(j.mapToCssModules)(d()(a,"card-title"),s);return r.a.createElement(n,Object(t.a)({},l,{className:o}))};u.propTypes=b,u.defaultProps={tag:"div"},a.a=u},461:function(e,a,s){"use strict";var t=s(14),c=s(20),n=s(0),r=s.n(n),l=s(5),o=s.n(l),i=s(56),d=s.n(i),j=s(78),b={tag:j.tagPropType,className:o.a.string,cssModule:o.a.object},u=function(e){var a=e.className,s=e.cssModule,n=e.tag,l=Object(c.a)(e,["className","cssModule","tag"]),o=Object(j.mapToCssModules)(d()(a,"card-text"),s);return r.a.createElement(n,Object(t.a)({},l,{className:o}))};u.propTypes=b,u.defaultProps={tag:"p"},a.a=u},470:function(e,a,s){"use strict";var t=s(14),c=s(20),n=s(0),r=s.n(n),l=s(5),o=s.n(l),i=s(56),d=s.n(i),j=s(78),b={tag:j.tagPropType,className:o.a.string,cssModule:o.a.object},u=function(e){var a=e.className,s=e.cssModule,n=e.tag,l=Object(c.a)(e,["className","cssModule","tag"]),o=Object(j.mapToCssModules)(d()(a,"input-group-text"),s);return r.a.createElement(n,Object(t.a)({},l,{className:o}))};u.propTypes=b,u.defaultProps={tag:"span"},a.a=u},495:function(e,a,s){"use strict";var t=s(14),c=s(20),n=s(0),r=s.n(n),l=s(5),o=s.n(l),i=s(56),d=s.n(i),j=s(78),b={tag:j.tagPropType,size:o.a.string,className:o.a.string,cssModule:o.a.object},u=function(e){var a=e.className,s=e.cssModule,n=e.tag,l=e.size,o=Object(c.a)(e,["className","cssModule","tag","size"]),i=Object(j.mapToCssModules)(d()(a,"input-group",l?"input-group-"+l:null),s);return r.a.createElement(n,Object(t.a)({},o,{className:i}))};u.propTypes=b,u.defaultProps={tag:"div"},a.a=u},496:function(e,a,s){"use strict";var t=s(14),c=s(20),n=s(0),r=s.n(n),l=s(5),o=s.n(l),i=s(56),d=s.n(i),j=s(78),b=s(470),u={tag:j.tagPropType,addonType:o.a.oneOf(["prepend","append"]).isRequired,children:o.a.node,className:o.a.string,cssModule:o.a.object},m=function(e){var a=e.className,s=e.cssModule,n=e.tag,l=e.addonType,o=e.children,i=Object(c.a)(e,["className","cssModule","tag","addonType","children"]),u=Object(j.mapToCssModules)(d()(a,"input-group-"+l),s);return"string"===typeof o?r.a.createElement(n,Object(t.a)({},i,{className:u}),r.a.createElement(b.a,{children:o})):r.a.createElement(n,Object(t.a)({},i,{className:u,children:o}))};m.propTypes=u,m.defaultProps={tag:"div"},a.a=m},512:function(e,a,s){"use strict";var t=s(14),c=s(20),n=s(452),r=s(0),l=s.n(r),o=s(5),i=s.n(o),d=s(56),j=s.n(d),b=s(78),u=s(493);function m(e,a){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),s.push.apply(s,t)}return s}function p(e){for(var a=1;a<arguments.length;a++){var s=null!=arguments[a]?arguments[a]:{};a%2?m(Object(s),!0).forEach((function(a){Object(n.a)(e,a,s[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):m(Object(s)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(s,a))}))}return e}var O={children:i.a.node,className:i.a.string,closeClassName:i.a.string,closeAriaLabel:i.a.string,cssModule:i.a.object,color:i.a.string,fade:i.a.bool,isOpen:i.a.bool,toggle:i.a.func,tag:b.tagPropType,transition:i.a.shape(u.a.propTypes),innerRef:i.a.oneOfType([i.a.object,i.a.string,i.a.func])},g={color:"success",isOpen:!0,tag:"div",closeAriaLabel:"Close",fade:!0,transition:p(p({},u.a.defaultProps),{},{unmountOnExit:!0})};function h(e){var a=e.className,s=e.closeClassName,n=e.closeAriaLabel,r=e.cssModule,o=e.tag,i=e.color,d=e.isOpen,m=e.toggle,O=e.children,g=e.transition,h=e.fade,f=e.innerRef,x=Object(c.a)(e,["className","closeClassName","closeAriaLabel","cssModule","tag","color","isOpen","toggle","children","transition","fade","innerRef"]),N=Object(b.mapToCssModules)(j()(a,"alert","alert-"+i,{"alert-dismissible":m}),r),v=Object(b.mapToCssModules)(j()("close",s),r),y=p(p(p({},u.a.defaultProps),g),{},{baseClass:h?g.baseClass:"",timeout:h?g.timeout:0});return l.a.createElement(u.a,Object(t.a)({},x,y,{tag:o,className:N,in:d,role:"alert",innerRef:f}),m?l.a.createElement("button",{type:"button",className:v,"aria-label":n,onClick:m},l.a.createElement("span",{"aria-hidden":"true"},"\xd7")):null,O)}h.propTypes=O,h.defaultProps=g,a.a=h},522:function(e,a,s){"use strict";var t=s(1),c=s(21),n=s(15),r=s(117),l=s(0),o=s(56),i=s.n(o),d=s(1165),j=s(1164),b=s(477),u=s(495),m=s(475),p=s(496),O=s(470),g=s(6),h=function(e){var a=e.label,s=e.hideIcon,o=e.showIcon,h=e.visible,f=e.className,x=e.htmlFor,N=e.placeholder,v=e.iconSize,y=e.inputClassName,w=Object(r.a)(e,["label","hideIcon","showIcon","visible","className","htmlFor","placeholder","iconSize","inputClassName"]),T=Object(l.useState)(h),P=Object(n.a)(T,2),M=P[0],C=P[1];return Object(g.jsxs)(l.Fragment,{children:[a?Object(g.jsx)(b.a,{for:x,children:a}):null,Object(g.jsxs)(u.a,{className:i()(Object(c.a)({},f,f)),children:[Object(g.jsx)(m.a,Object(t.a)(Object(t.a)({type:!1===M?"password":"text",placeholder:N||"\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7",className:i()(Object(c.a)({},y,y))},a&&x?{id:x}:{}),w)),Object(g.jsx)(p.a,{addonType:"append",onClick:function(){return C(!M)},children:Object(g.jsx)(O.a,{className:"cursor-pointer",children:function(){var e=v||14;return!1===M?s||Object(g.jsx)(d.a,{size:e}):o||Object(g.jsx)(j.a,{size:e})}()})})]})]})};a.a=h,h.defaultProps={visible:!1}}}]);
//# sourceMappingURL=136.737a0bbf.chunk.js.map