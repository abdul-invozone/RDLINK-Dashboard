(this["webpackJsonprdlink-admin-dashboard"]=this["webpackJsonprdlink-admin-dashboard"]||[]).push([[176],{1960:function(e,s,a){"use strict";a.r(s);var t=a(13),c=a(1),n=a(0),l=a(39),i=a.n(l),r=a(451),d=a(120),j=a(84),o=a.n(j),b=function(){return function(e){o.a.get("/apps/chatAdmin/chats-and-contacts").then((function(s){e({type:"GET_CHAT_CONTACTS",data:s.data})}))}},h=function(e){return function(s){o.a.get("/apps/chatAdmin/get-chat",{id:e}).then((function(e){s({type:"SELECT_CHAT",data:e.data}),s(b())}))}},m=a(61),u=a.n(m),O=a(483),x=a.n(O),N=a(1101),f=a(1188),g=a(1198),p=a(1237),v=a(1108),y=a(1194),w=a(1189),C=a(1173),S=a(1211),k=a(1080),z=a(1368),A=a(1084),T=a(1094),M=a(482),D=a(477),E=a(478),I=a(461),L=a(467),R=a(472),P=a(447),U=a(6),_=function(e){var s=e.handleUser,a=e.handleUserSidebarRight,l=e.handleSidebar,j=e.store,b=e.userSidebarLeft,m=j.userProfile,O=j.selectedUser,_=Object(c.useRef)(null),F=Object(d.b)(),H=Object(c.useState)(""),W=Object(t.a)(H,2),G=W[0],V=W[1];Object(c.useEffect)((function(){Object.keys(O).length&&(i.a.findDOMNode(_.current).scrollTop=Number.MAX_SAFE_INTEGER)}),[O]);var B=function(e){var s;e.preventDefault(),G.length&&(F((s=Object(n.a)(Object(n.a)({},O),{},{message:G}),function(e){o.a.post("/apps/chatAdmin/send-msg",{obj:s}).then((function(a){e({type:"SEND_MSG",data:a.data}),e(h(s.contact.id))}))})),V(""))},J=Object.keys(O).length&&O.chat?x.a:"div";return Object(U.jsxs)("div",{className:"chat-app-window",children:[Object(U.jsxs)("div",{className:u()("start-chat-area",{"d-none":Object.keys(O).length}),children:[Object(U.jsx)("div",{className:"start-chat-icon mb-1",children:Object(U.jsx)(N.a,{})}),Object(U.jsx)("h4",{className:"sidebar-toggle start-chat-text",onClick:function(){!Object.keys(O).length&&!b&&window.innerWidth<=1200&&l()},children:"Start Conversation"})]}),Object.keys(O).length?Object(U.jsxs)("div",{className:u()("active-chat",{"d-none":null===O}),children:[Object(U.jsx)("div",{className:"chat-navbar",children:Object(U.jsxs)("header",{className:"chat-header",children:[Object(U.jsxs)("div",{className:"d-flex align-items-center",children:[Object(U.jsx)("div",{className:"sidebar-toggle d-block d-lg-none mr-1",onClick:l,children:Object(U.jsx)(f.a,{size:21})}),Object(U.jsx)(r.a,{imgHeight:"36",imgWidth:"36",img:O.contact.avatar,status:O.contact.status,className:"avatar-border user-profile-toggle m-0 mr-1",onClick:function(){return e=O.contact,a(),void s(e);var e}}),Object(U.jsx)("h6",{className:"mb-0",children:O.contact.fullName})]}),Object(U.jsxs)("div",{className:"d-flex align-items-center",children:[Object(U.jsx)(g.a,{size:18,className:"cursor-pointer d-sm-block d-none mr-1"}),Object(U.jsx)(p.a,{size:18,className:"cursor-pointer d-sm-block d-none mr-1"}),Object(U.jsx)(v.a,{size:18,className:"cursor-pointer d-sm-block d-none"}),Object(U.jsxs)(k.a,{children:[Object(U.jsx)(z.a,{className:"btn-icon",color:"transparent",size:"sm",children:Object(U.jsx)(y.a,{size:"18"})}),Object(U.jsxs)(A.a,{right:!0,children:[Object(U.jsx)(T.a,{href:"/",onClick:function(e){return e.preventDefault()},children:"View Contact"}),Object(U.jsx)(T.a,{href:"/",onClick:function(e){return e.preventDefault()},children:"Mute Notifications"}),Object(U.jsx)(T.a,{href:"/",onClick:function(e){return e.preventDefault()},children:"Block Contact"}),Object(U.jsx)(T.a,{href:"/",onClick:function(e){return e.preventDefault()},children:"Clear Chat"}),Object(U.jsx)(T.a,{href:"/",onClick:function(e){return e.preventDefault()},children:"Report"})]})]})]})]})}),Object(U.jsx)(J,{ref:_,className:"user-chats",options:{wheelPropagation:!1},children:O.chat?Object(U.jsx)("div",{className:"chats",children:function(){var e=[];O.chat&&(e=O.chat.chat);var s=[],a=e[0]?e[0].senderId:void 0,t={senderId:a,messages:[]};return e.forEach((function(c,n){a===c.senderId?t.messages.push({msg:c.message,time:c.time}):(a=c.senderId,s.push(t),t={senderId:c.senderId,messages:[{msg:c.message,time:c.time}]}),n===e.length-1&&s.push(t)})),s}().map((function(e,s){return Object(U.jsxs)("div",{className:u()("chat",{"chat-left":11!==e.senderId}),children:[Object(U.jsx)("div",{className:"chat-avatar",children:Object(U.jsx)(r.a,{className:"box-shadow-1 cursor-pointer",img:11===e.senderId?m.avatar:O.contact.avatar})}),Object(U.jsx)("div",{className:"chat-body",children:e.messages.map((function(e){return Object(U.jsx)("div",{className:"chat-content",children:Object(U.jsx)("p",{children:e.msg})},e.msg)}))})]},s)}))}):null}),Object(U.jsxs)(M.a,{className:"chat-app-form",onSubmit:function(e){return B(e)},children:[Object(U.jsxs)(D.a,{className:"input-group-merge mr-1 form-send-message",children:[Object(U.jsx)(E.a,{addonType:"prepend",children:Object(U.jsx)(I.a,{children:Object(U.jsx)(w.a,{className:"cursor-pointer",size:14})})}),Object(U.jsx)(L.a,{value:G,onChange:function(e){return V(e.target.value)},placeholder:"Type your message or use speech to text"}),Object(U.jsx)(E.a,{addonType:"append",children:Object(U.jsx)(I.a,{children:Object(U.jsxs)(R.a,{className:"attachment-icon mb-0",for:"attach-doc",children:[Object(U.jsx)(C.a,{className:"cursor-pointer text-secondary",size:14}),Object(U.jsx)("input",{type:"file",id:"attach-doc",hidden:!0})]})})})]}),Object(U.jsxs)(P.a,{className:"send",color:"primary",children:[Object(U.jsx)(S.a,{size:14,className:"d-lg-none"}),Object(U.jsx)("span",{className:"d-none d-lg-block",children:"Send"})]})]})]}):null]})},F=a(121),H=a(470),W=a(1069),G=a(1100),V=a(1122),B=a(1098),J=a(1227),X=a(457),q=a(1095),K=a(1067),Q=function(e){var s=e.store,a=e.sidebar,n=e.handleSidebar,l=e.userSidebarLeft,i=e.handleUserSidebarLeft,j=s.chats,o=s.contacts,b=s.userProfile,m=Object(d.b)(),O=Object(c.useState)(""),N=Object(t.a)(O,2),f=N[0],g=N[1],p=Object(c.useState)(""),y=Object(t.a)(p,2),w=y[0],C=y[1],S=Object(c.useState)({}),k=Object(t.a)(S,2),z=k[0],A=k[1],T=Object(c.useState)("online"),M=Object(t.a)(T,2),R=M[0],_=M[1],Q=Object(c.useState)([]),Y=Object(t.a)(Q,2),Z=Y[0],$=Y[1],ee=Object(c.useState)([]),se=Object(t.a)(ee,2),ae=se[0],te=se[1],ce=function(e,s){m(h(s)),A({type:e,id:s}),!0===a&&n()};return s?Object(U.jsx)("div",{className:"sidebar-left",children:Object(U.jsxs)("div",{className:"sidebar",children:[Object(U.jsxs)("div",{className:u()("chat-profile-sidebar",{show:l}),children:[Object(U.jsxs)("header",{className:"chat-profile-header",children:[Object(U.jsx)("div",{className:"close-icon",onClick:i,children:Object(U.jsx)(W.a,{size:14})}),Object(U.jsxs)("div",{className:"header-profile-sidebar",children:[Object(U.jsx)(r.a,{className:"box-shadow-1 avatar-border",img:b.avatar,status:R,size:"xl"}),Object(U.jsx)("h4",{className:"chat-user-name",children:b.fullName}),Object(U.jsx)("span",{className:"user-post",children:b.role})]})]}),Object(U.jsxs)(x.a,{className:"profile-sidebar-area",options:{wheelPropagation:!1},children:[Object(U.jsx)("h6",{className:"section-label mb-1",children:"About"}),Object(U.jsxs)("div",{className:"about-user",children:[Object(U.jsx)(L.a,{rows:"5",defaultValue:b.about,type:"textarea",onChange:function(e){return g(e.target.value)},className:u()("char-textarea",{"text-danger":f&&f.length>120})}),Object(U.jsxs)("small",{className:"counter-value float-right",children:[Object(U.jsx)("span",{className:"char-count",children:b.about?b.about.length:0}),"/ 120"]})]}),Object(U.jsx)("h6",{className:"section-label mb-1 mt-3",children:"Status"}),Object(U.jsxs)("ul",{className:"list-unstyled user-status",children:[Object(U.jsx)("li",{className:"pb-1",children:Object(U.jsx)(K.a,{type:"radio",className:"custom-control-primary",id:"online",label:"Online",onChange:function(e){return _("online")},checked:"online"===R})}),Object(U.jsx)("li",{className:"pb-1",children:Object(U.jsx)(K.a,{type:"radio",className:"custom-control-danger",id:"busy",label:"Do Not Disturb",onChange:function(e){return _("busy")},checked:"busy"===R})}),Object(U.jsx)("li",{className:"pb-1",children:Object(U.jsx)(K.a,{type:"radio",className:"custom-control-warning",id:"away",label:"Away",onChange:function(e){return _("away")},checked:"away"===R})}),Object(U.jsx)("li",{className:"pb-1",children:Object(U.jsx)(K.a,{type:"radio",className:"custom-control-secondary",id:"offline",label:"Offline",onChange:function(e){return _("offline")},checked:"offline"===R})})]}),Object(U.jsx)("h6",{className:"section-label mb-1 mt-2",children:"Settings"}),Object(U.jsxs)("ul",{className:"list-unstyled",children:[Object(U.jsxs)("li",{className:"d-flex justify-content-between align-items-center mb-1",children:[Object(U.jsxs)("div",{className:"d-flex align-items-center",children:[Object(U.jsx)(G.a,{className:"mr-75",size:"18"}),Object(U.jsx)("span",{className:"align-middle",children:"Two-step Verification"})]}),Object(U.jsx)(K.a,{type:"switch",id:"verification",name:"verification",label:"",defaultChecked:!0})]}),Object(U.jsxs)("li",{className:"d-flex justify-content-between align-items-center mb-1",children:[Object(U.jsxs)("div",{className:"d-flex align-items-center",children:[Object(U.jsx)(V.a,{className:"mr-75",size:"18"}),Object(U.jsx)("span",{className:"align-middle",children:"Notification"})]}),Object(U.jsx)(K.a,{type:"switch",id:"notifications",name:"notifications",label:""})]}),Object(U.jsxs)("li",{className:"d-flex align-items-center cursor-pointer mb-1",children:[Object(U.jsx)(B.a,{className:"mr-75",size:"18"}),Object(U.jsx)("span",{className:"align-middle",children:"Invite Friends"})]}),Object(U.jsxs)("li",{className:"d-flex align-items-center cursor-pointer",children:[Object(U.jsx)(J.a,{className:"mr-75",size:"18"}),Object(U.jsx)("span",{className:"align-middle",children:"Delete Account"})]})]}),Object(U.jsx)("div",{className:"mt-3",children:Object(U.jsx)(P.a,{color:"primary",children:"Logout"})})]})]}),Object(U.jsxs)("div",{className:u()("sidebar-content",{show:!0===a}),children:[Object(U.jsx)("div",{className:"sidebar-close-icon",onClick:n,children:Object(U.jsx)(W.a,{size:14})}),Object(U.jsx)("div",{className:"chat-fixed-search",children:Object(U.jsxs)("div",{className:"d-flex align-items-center w-100",children:[Object(U.jsx)("div",{className:"sidebar-profile-toggle",onClick:i,children:Object.keys(b).length?Object(U.jsx)(r.a,{className:"avatar-border",img:b.avatar,status:R,imgHeight:"42",imgWidth:"42"}):null}),Object(U.jsxs)(D.a,{className:"input-group-merge ml-1 w-100",children:[Object(U.jsx)(E.a,{addonType:"prepend",children:Object(U.jsx)(I.a,{className:"round",children:Object(U.jsx)(v.a,{className:"text-muted",size:14})})}),Object(U.jsx)(L.a,{value:w,className:"round",placeholder:"Search or start a new chat",onChange:function(e){C(e.target.value);var s=function(s){return s.fullName.toLowerCase().includes(e.target.value.toLowerCase())},a=j.filter(s),t=o.filter(s);$(Object(F.a)(a)),te(Object(F.a)(t))}})]})]})}),Object(U.jsxs)(x.a,{className:"chat-user-list-wrapper list-group",options:{wheelPropagation:!1},children:[Object(U.jsx)("h4",{className:"chat-list-title",children:"Chats"}),Object(U.jsx)("ul",{className:"chat-users-list chat-list media-list",children:j&&j.length?w.length&&!Z.length?Object(U.jsx)("li",{className:"no-results show",children:Object(U.jsx)("h6",{className:"mb-0",children:"No Chats Found"})}):(w.length&&Z.length?Z:j).map((function(e){var s=Object(H.b)(e.chat.lastMessage?e.chat.lastMessage.time:new Date);return Object(U.jsxs)("li",{className:u()({active:"chat"===z.type&&z.id===e.id}),onClick:function(){return ce("chat",e.id)},children:[Object(U.jsx)(r.a,{img:e.avatar,imgHeight:"42",imgWidth:"42",status:e.status}),Object(U.jsxs)("div",{className:"chat-info flex-grow-1",children:[Object(U.jsx)("h5",{className:"mb-0",children:e.fullName}),Object(U.jsx)(X.a,{className:"text-truncate",children:e.chat.lastMessage?e.chat.lastMessage.message:j[j.length-1].message})]}),Object(U.jsxs)("div",{className:"chat-meta text-nowrap",children:[Object(U.jsx)("small",{className:"float-right mb-25 chat-time ml-25",children:s}),e.chat.unseenMsgs>=1?Object(U.jsx)(q.a,{className:"float-right",color:"danger",pill:!0,children:e.chat.unseenMsgs}):null]})]},e.id)})):null}),Object(U.jsx)("h4",{className:"chat-list-title",children:"Contacts"}),Object(U.jsx)("ul",{className:"chat-users-list contact-list media-list",children:o&&o.length?w.length&&!ae.length?Object(U.jsx)("li",{className:"no-results show",children:Object(U.jsx)("h6",{className:"mb-0",children:"No Chats Found"})}):(w.length&&ae.length?ae:o).map((function(e){return Object(U.jsxs)("li",{className:u()({active:"contact"===z.type&&z.id===e.id}),onClick:function(){return ce("contact",e.id)},children:[Object(U.jsx)(r.a,{img:e.avatar,imgHeight:"42",imgWidth:"42"}),Object(U.jsxs)("div",{className:"chat-info flex-grow-1",children:[Object(U.jsx)("h5",{className:"mb-0",children:e.fullName}),Object(U.jsx)(X.a,{className:"text-truncate",children:e.about})]})]},e.fullName)})):null})]})]})]})}):null},Y=a(1099),Z=a(1138),$=a(1223),ee=a(1221),se=a(1219),ae=function(e){var s=e.user,a=e.handleUserSidebarRight,t=e.userSidebarRight;return Object(U.jsxs)("div",{className:u()("user-profile-sidebar",{show:!0===t}),children:[Object(U.jsxs)("header",{className:"user-profile-header",children:[Object(U.jsx)("span",{className:"close-icon",onClick:a,children:Object(U.jsx)(W.a,{size:14})}),Object(U.jsxs)("div",{className:"header-profile-sidebar",children:[Object(U.jsx)(r.a,{className:"box-shadow-1 avatar-border",size:"xl",status:s.status,img:s.avatar,imgHeight:"70",imgWidth:"70"}),Object(U.jsx)("h4",{className:"chat-user-name",children:s.fullName}),Object(U.jsx)("span",{className:"user-post",children:s.role})]})]}),Object(U.jsxs)(x.a,{className:"user-profile-sidebar-area",options:{wheelPropagation:!1},children:[Object(U.jsx)("h6",{className:"section-label mb-1",children:"About"}),Object(U.jsx)("p",{children:s.about}),Object(U.jsxs)("div",{className:"personal-info",children:[Object(U.jsx)("h6",{className:"section-label mb-1 mt-3",children:"Personal Information"}),Object(U.jsxs)("ul",{className:"list-unstyled",children:[Object(U.jsxs)("li",{className:"mb-1",children:[Object(U.jsx)(Y.a,{className:"mr-50",size:17}),Object(U.jsx)("span",{className:"align-middle",children:"lucifer@email.com"})]}),Object(U.jsxs)("li",{className:"mb-1",children:[Object(U.jsx)(g.a,{className:"mr-50",size:17}),Object(U.jsx)("span",{className:"align-middle",children:" +1(123) 456 - 7890"})]}),Object(U.jsxs)("li",{children:[Object(U.jsx)(Z.a,{className:"mr-50",size:17}),Object(U.jsx)("span",{className:"align-middle",children:" Mon - Fri 10AM - 8PM"})]})]})]}),Object(U.jsxs)("div",{className:"more-options",children:[Object(U.jsx)("h6",{className:"section-label mb-1 mt-3",children:"Options"}),Object(U.jsxs)("ul",{className:"list-unstyled",children:[Object(U.jsxs)("li",{className:"cursor-pointer mb-1",children:[Object(U.jsx)($.a,{className:"mr-50",size:17}),Object(U.jsx)("span",{className:"align-middle",children:" Add Tag"})]}),Object(U.jsxs)("li",{className:"cursor-pointer mb-1",children:[Object(U.jsx)(ee.a,{className:"mr-50",size:17}),Object(U.jsx)("span",{className:"align-middle",children:" Important Contact"})]}),Object(U.jsxs)("li",{className:"cursor-pointer mb-1",children:[Object(U.jsx)(C.a,{className:"mr-50",size:17}),Object(U.jsx)("span",{className:"align-middle",children:" Shared Media"})]}),Object(U.jsxs)("li",{className:"cursor-pointer mb-1",children:[Object(U.jsx)(J.a,{className:"mr-50",size:17}),Object(U.jsx)("span",{className:"align-middle",children:" Delete Contact"})]}),Object(U.jsxs)("li",{className:"cursor-pointer",children:[Object(U.jsx)(se.a,{className:"mr-50",size:17}),Object(U.jsx)("span",{className:"align-middle",children:"Block Contact"})]})]})]})]})]})};a(915),a(732),s.default=function(){var e=Object(d.b)(),s=Object(d.c)((function(e){return e.chat})),a=Object(c.useState)({}),n=Object(t.a)(a,2),l=n[0],i=n[1],r=Object(c.useState)(!1),j=Object(t.a)(r,2),h=j[0],m=j[1],O=Object(c.useState)(!1),x=Object(t.a)(O,2),N=x[0],f=x[1],g=Object(c.useState)(!1),p=Object(t.a)(g,2),v=p[0],y=p[1],w=function(){return m(!h)},C=function(){return f(!N)};return Object(c.useEffect)((function(){e(b()),e((function(e){return o.a.get("/apps/chatAdmin/users/profile-user").then((function(s){return e({type:"GET_USER_PROFILE",userProfile:s.data})}))}))}),[e]),Object(U.jsxs)(c.Fragment,{children:[Object(U.jsx)(Q,{store:s,sidebar:h,handleSidebar:w,userSidebarLeft:v,handleUserSidebarLeft:function(){return y(!v)}}),Object(U.jsx)("div",{className:"content-right",children:Object(U.jsx)("div",{className:"content-wrapper",children:Object(U.jsxs)("div",{className:"content-body",children:[Object(U.jsx)("div",{className:u()("body-content-overlay",{show:!0===N||!0===h||!0===v}),onClick:function(){m(!1),f(!1),y(!1)}}),Object(U.jsx)(_,{store:s,handleUser:function(e){return i(e)},handleSidebar:w,userSidebarLeft:v,handleUserSidebarRight:C}),Object(U.jsx)(ae,{user:l,userSidebarRight:N,handleUserSidebarRight:C})]})})})]})}}}]);
//# sourceMappingURL=176.4f56ec50.chunk.js.map