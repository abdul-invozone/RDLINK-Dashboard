(this["webpackJsonprdlink-admin-dashboard"]=this["webpackJsonprdlink-admin-dashboard"]||[]).push([[166],{1876:function(e,s,t){"use strict";t.r(s);var a=t(15),c=t(0),l=t(79),n=t.n(l),i=t(56),r=t.n(i),j=t(1324),b=t(457),d=t(80),m=t(477),o=t(1117),h=t(1161),x=t(1091),O=t(1186),u=t(1137),p=t(1138),f=t(1131),g=t(1204),N=t(1152),y=t(449),v=t(1219),C=t(453),k=t(454),w=t(1220),D=t(464),R=t(455),z=t(456),T=t(641),F=t(458),P=t(1058),M=t(1341),W=t(1062),H=t(1072),S=t(483),B=t(1047),E=t(469),L=t(1044),A=t(447),I=(t(829),t(6));s.default=function(){var e=Object(c.useState)(null),s=Object(a.a)(e,2),t=s[0],l=s[1];Object(c.useEffect)((function(){n.a.get("/blog/list/data/detail").then((function(e){return l(e.data)}))}),[]);var i={Quote:"light-info",Fashion:"light-primary",Gaming:"light-danger",Video:"light-warning",Food:"light-success"};return Object(I.jsxs)(c.Fragment,{children:[Object(I.jsx)(y.a,{breadCrumbTitle:"Blog Details",breadCrumbParent:"Pages",breadCrumbParent2:"Blog",breadCrumbActive:"Details"}),Object(I.jsxs)("div",{className:"blog-wrapper",children:[Object(I.jsx)("div",{className:"content-detached content-left",children:Object(I.jsx)("div",{className:"content-body",children:null!==t?Object(I.jsxs)(R.a,{children:[Object(I.jsx)(z.a,{sm:"12",children:Object(I.jsxs)(C.a,{className:"mb-3",children:[Object(I.jsx)(T.a,{src:t.blog.img,className:"img-fluid",top:!0}),Object(I.jsxs)(k.a,{children:[Object(I.jsx)(F.a,{tag:"h4",children:t.blog.title}),Object(I.jsxs)(w.a,{children:[Object(I.jsx)(b.a,{className:"mr-50",img:t.blog.avatar,imgHeight:"24",imgWidth:"24"}),Object(I.jsxs)(w.a,{body:!0,children:[Object(I.jsx)("small",{className:"text-muted mr-25",children:"by"}),Object(I.jsx)("small",{children:Object(I.jsx)("a",{className:"text-body",href:"/",onClick:function(e){return e.preventDefault()},children:t.blog.userFullName})}),Object(I.jsx)("span",{className:"text-muted ml-50 mr-25",children:"|"}),Object(I.jsx)("small",{className:"text-muted",children:t.blog.createdTime})]})]}),Object(I.jsx)("div",{className:"my-1 py-25",children:t.blog.tags.map((function(e,s){return Object(I.jsx)("a",{href:"/",onClick:function(e){return e.preventDefault()},children:Object(I.jsx)(v.a,{className:r()({"mr-50":s!==t.blog.tags.length-1}),color:i[e],pill:!0,children:e})},s)}))}),Object(I.jsx)("div",{dangerouslySetInnerHTML:{__html:t.blog.content}}),Object(I.jsxs)(w.a,{children:[Object(I.jsx)(b.a,{img:d.default,className:"mr-2",imgHeight:60,imgWidth:60}),Object(I.jsxs)(w.a,{body:!0,children:[Object(I.jsx)("h6",{className:"font-weight-bolder",children:"Willie Clark"}),Object(I.jsx)(D.a,{className:"mb-0",children:"Based in London, Uncode is a blog by Willie Clark. His posts explore modern design trends through photos and quotes by influential creatives and web designer around the world."})]})]}),Object(I.jsx)("hr",{className:"my-2"}),Object(I.jsxs)("div",{className:"d-flex align-items-center justify-content-between",children:[Object(I.jsxs)("div",{className:"d-flex align-items-center",children:[Object(I.jsxs)("div",{className:"d-flex align-items-center mr-1",children:[Object(I.jsx)("a",{className:"mr-50",href:"/",onClick:function(e){return e.preventDefault()},children:Object(I.jsx)(h.a,{size:21,className:"text-body align-middle"})}),Object(I.jsx)("a",{href:"/",onClick:function(e){return e.preventDefault()},children:Object(I.jsx)("div",{className:"text-body align-middle",children:Object(m.g)(t.blog.comments)})})]}),Object(I.jsxs)("div",{className:"d-flex align-items-cente",children:[Object(I.jsx)("a",{className:"mr-50",href:"/",onClick:function(e){return e.preventDefault()},children:Object(I.jsx)(x.a,{size:21,className:"text-body align-middle"})}),Object(I.jsx)("a",{href:"/",onClick:function(e){return e.preventDefault()},children:Object(I.jsx)("div",{className:"text-body align-middle",children:t.blog.bookmarked})})]})]}),Object(I.jsxs)(P.a,{className:"dropdown-icon-wrapper",children:[Object(I.jsx)(M.a,{tag:"span",children:Object(I.jsx)(O.a,{size:21,className:"text-body cursor-pointer"})}),Object(I.jsxs)(W.a,{right:!0,children:[Object(I.jsx)(H.a,{className:"py-50 px-1",children:Object(I.jsx)(u.a,{size:18})}),Object(I.jsx)(H.a,{className:"py-50 px-1",children:Object(I.jsx)(p.a,{size:18})}),Object(I.jsx)(H.a,{className:"py-50 px-1",children:Object(I.jsx)(f.a,{size:18})}),Object(I.jsx)(H.a,{className:"py-50 px-1",children:Object(I.jsx)(g.a,{size:18})}),Object(I.jsx)(H.a,{className:"py-50 px-1",children:Object(I.jsx)(N.a,{size:18})})]})]})]})]})]})}),Object(I.jsxs)(z.a,{sm:"12",children:[Object(I.jsx)("h6",{className:"section-label",children:"Comment"}),t.comments.map((function(e){return Object(I.jsx)(C.a,{className:"mb-3",children:Object(I.jsx)(k.a,{children:Object(I.jsxs)(w.a,{children:[Object(I.jsx)(b.a,{className:"mr-75",img:e.avatar,width:"38",height:"38"}),Object(I.jsxs)(w.a,{body:!0,children:[Object(I.jsx)("h6",{className:"font-weight-bolder mb-25",children:e.userFullName}),Object(I.jsx)(D.a,{children:e.commentedAt}),Object(I.jsx)(D.a,{children:e.commentText}),Object(I.jsx)("a",{href:"/",onClick:function(e){return e.preventDefault()},children:Object(I.jsxs)("div",{className:"d-inline-flex align-items-center",children:[Object(I.jsx)(o.a,{size:18,className:"mr-50"}),Object(I.jsx)("span",{children:"Reply"})]})})]})]})})},e.userFullName)}))]}),Object(I.jsxs)(z.a,{sm:"12",children:[Object(I.jsx)("h6",{className:"section-label",children:"Leave a Comment"}),Object(I.jsx)(C.a,{children:Object(I.jsx)(k.a,{children:Object(I.jsx)(S.a,{className:"form",onSubmit:function(e){return e.preventDefault()},children:Object(I.jsxs)(R.a,{children:[Object(I.jsx)(z.a,{sm:"6",children:Object(I.jsx)(B.a,{className:"mb-2",children:Object(I.jsx)(E.a,{placeholder:"Name"})})}),Object(I.jsx)(z.a,{sm:"6",children:Object(I.jsx)(B.a,{className:"mb-2",children:Object(I.jsx)(E.a,{type:"email",placeholder:"Email"})})}),Object(I.jsx)(z.a,{sm:"6",children:Object(I.jsx)(B.a,{className:"mb-2",children:Object(I.jsx)(E.a,{type:"url",placeholder:"Website"})})}),Object(I.jsx)(z.a,{sm:"12",children:Object(I.jsx)(B.a,{className:"mb-2",children:Object(I.jsx)(E.a,{className:"mb-2",type:"textarea",rows:"4",placeholder:"Comment"})})}),Object(I.jsx)(z.a,{sm:"12",children:Object(I.jsx)(L.a,{className:"mb-2",type:"checkbox",id:"exampleCustomCheckbox4",label:"Save my name, email, and website in this browser for the next time I comment.",htmlFor:"exampleCustomCheckbox4"})}),Object(I.jsx)(z.a,{sm:"12",children:Object(I.jsx)(A.a.Ripple,{color:"primary",children:"Post Comment"})})]})})})})]})]}):null})}),Object(I.jsx)(j.a,{})]})]})}},483:function(e,s,t){"use strict";var a=t(14),c=t(20),l=t(116),n=t(115),i=t(0),r=t.n(i),j=t(5),b=t.n(j),d=t(56),m=t.n(d),o=t(78),h={children:b.a.node,inline:b.a.bool,tag:o.tagPropType,innerRef:b.a.oneOfType([b.a.object,b.a.func,b.a.string]),className:b.a.string,cssModule:b.a.object},x=function(e){function s(s){var t;return(t=e.call(this,s)||this).getRef=t.getRef.bind(Object(l.a)(t)),t.submit=t.submit.bind(Object(l.a)(t)),t}Object(n.a)(s,e);var t=s.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,s=e.className,t=e.cssModule,l=e.inline,n=e.tag,i=e.innerRef,j=Object(c.a)(e,["className","cssModule","inline","tag","innerRef"]),b=Object(o.mapToCssModules)(m()(s,!!l&&"form-inline"),t);return r.a.createElement(n,Object(a.a)({},j,{ref:i,className:b}))},s}(i.Component);x.propTypes=h,x.defaultProps={tag:"form"},s.a=x}}]);
//# sourceMappingURL=166.93e243ca.chunk.js.map