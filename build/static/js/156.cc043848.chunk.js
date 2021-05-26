(this["webpackJsonprdlink-admin-dashboard"]=this["webpackJsonprdlink-admin-dashboard"]||[]).push([[156],{1968:function(e,t,a){"use strict";a.r(t);var n=a(13),l=a(1),c=a(61),s=a.n(c),r=a(452),i=a(453),o=a(0),d=a(1064),u=a(972),b=a(916),j=a(973),h=a(974),O=a(451),p=a(127),m=a(454),v=a(455),f=a(1188),x=a(1129),g=a(6),y=function(e){var t=e.title,a=e.icon,n=e.color;return Object(g.jsx)(l.Fragment,{children:Object(g.jsx)("div",{className:"toastify-header pb-0",children:Object(g.jsxs)("div",{className:"title-wrapper",children:[Object(g.jsx)(O.a,{size:"sm",color:n,icon:a}),Object(g.jsx)("h6",{className:"toast-title",children:t})]})})})},E=function(e){var t=Object(l.useRef)(null),a=e.store,n=e.isRtl,c=e.dispatch,s=e.calendarsColor,r=e.calendarApi,i=e.setCalendarApi,O=e.handleAddEventSidebar,E=e.blankEvent,N=e.toggleSidebar,C=e.selectEvent,D=e.updateEvent;Object(l.useEffect)((function(){null===r&&i(t.current.getApi())}),[r]);var S={events:a.events.length?a.events:[],plugins:[h.a,b.b,j.a,u.a],initialView:"dayGridMonth",headerToolbar:{start:"sidebarToggle, prev,next, title",end:"dayGridMonth,timeGridWeek,timeGridDay,listMonth"},editable:!0,eventResizableFromStart:!0,dragScroll:!0,dayMaxEvents:2,navLinks:!0,eventClassNames:function(e){var t=e.event,a=s[t._def.extendedProps.calendar];return["bg-light-".concat(a)]},eventClick:function(e){var t=e.event;c(C(t)),O()},customButtons:{sidebarToggle:{text:Object(g.jsx)(f.a,{className:"d-xl-none d-block"}),click:function(){N(!0)}}},dateClick:function(e){var t=E;t.start=e.date,t.end=e.date,c(C(t)),O()},eventDrop:function(e){var t=e.event;c(D(t)),p.f.success(Object(g.jsx)(y,{title:"Event Updated",color:"success",icon:Object(g.jsx)(x.a,{})}),{autoClose:2e3,hideProgressBar:!0,closeButton:!1})},eventResize:function(e){var t=e.event;c(D(t)),p.f.success(Object(g.jsx)(y,{title:"Event Updated",color:"success",icon:Object(g.jsx)(x.a,{})}),{autoClose:2e3,hideProgressBar:!0,closeButton:!1})},ref:t,direction:n?"rtl":"ltr"};return Object(g.jsx)(m.a,{className:"shadow-none border-0 mb-0 rounded-0",children:Object(g.jsxs)(v.a,{className:"pb-0",children:[Object(g.jsx)(d.a,Object(o.a)({},S))," "]})})},N=Object(l.memo)(E),C=a(24),D=a(447),S=a(1067),w=a(695),k=[{label:"Personal",color:"danger",className:"custom-control-danger mb-1"},{label:"Business",color:"primary",className:"custom-control-primary mb-1"},{label:"Family",color:"warning",className:"custom-control-warning mb-1"},{label:"Holiday",color:"success",className:"custom-control-success mb-1"},{label:"ETC",color:"info",className:"custom-control-info"}],B=function(e){var t=e.handleAddEventSidebar,a=e.toggleSidebar,n=e.updateFilter,c=e.updateAllFilters,r=e.store,i=e.dispatch;return Object(g.jsxs)(l.Fragment,{children:[Object(g.jsxs)("div",{className:"sidebar-wrapper",children:[Object(g.jsx)(v.a,{className:"card-body d-flex justify-content-center my-sm-0 mb-3",children:Object(g.jsx)(D.a.Ripple,{color:"primary",block:!0,onClick:function(){a(!1),t()},children:Object(g.jsx)("span",{className:"align-middle",children:"Add Opportunity"})})}),Object(g.jsxs)(v.a,{children:[Object(g.jsx)("h5",{className:"section-label mb-1",children:Object(g.jsx)("span",{className:"align-middle",children:"Filter"})}),Object(g.jsx)(S.a,{type:"checkbox",className:"mb-1",label:"View All",id:"view-all",checked:r.selectedCalendars.length===k.length,onChange:function(e){return i(c(e.target.checked))}}),Object(g.jsx)("div",{className:"calendar-events-filter",children:k.length&&k.map((function(e){return Object(g.jsx)(S.a,{type:"checkbox",id:e.label,label:e.label,checked:r.selectedCalendars.includes(e.label),className:s()(Object(C.a)({},e.className,e.className)),onChange:function(t){return i(n(e.label))}},e.label)}))})]})]}),Object(g.jsx)("div",{className:"mt-auto",children:Object(g.jsx)("img",{className:"img-fluid",src:w.default,alt:"illustration"})})]})},A=a(121),F=a(122),P=a(474),T=a.n(P),R=a(1227),L=a(1069),U=a(755),V=a(504),_=a(505),G=a(679),M=a(734),H=a(642),z=a(482),I=a(1070),J=a(472),q=a(467),Y=a(470),W=a(29),K=a(66),Q=a(65),X=a(88),Z=a(42),$=a(238),ee=(a(514),a(469),function(e){var t=e.title,a=e.icon,n=e.color;return Object(g.jsx)(l.Fragment,{children:Object(g.jsx)("div",{className:"toastify-header pb-0",children:Object(g.jsxs)("div",{className:"title-wrapper",children:[Object(g.jsx)(O.a,{size:"sm",color:n,icon:a}),Object(g.jsx)("h6",{className:"toast-title",children:t})]})})})}),te=function(e){var t=e.store,a=e.dispatch,c=e.open,r=e.handleAddEventSidebar,i=e.calendarsColor,d=e.calendarApi,u=e.refetchEvents,b=e.addEvent,j=e.selectEvent,h=e.updateEvent,m=e.removeEvent,v=t.selectedEvent,f=Object(_.c)(),y=f.register,E=f.errors,N=f.handleSubmit,C=Object(l.useState)(""),w=Object(n.a)(C,2),k=w[0],B=w[1],P=Object(l.useState)(""),te=Object(n.a)(P,2),ae=te[0],ne=te[1],le=Object(l.useState)(""),ce=Object(n.a)(le,2),se=ce[0],re=ce[1],ie=Object(l.useState)({}),oe=Object(n.a)(ie,2),de=oe[0],ue=oe[1],be=Object(l.useState)(!1),je=Object(n.a)(be,2),he=je[0],Oe=je[1],pe=Object(l.useState)(""),me=Object(n.a)(pe,2),ve=me[0],fe=me[1],xe=Object(l.useState)(new Date),ge=Object(n.a)(xe,2),ye=ge[0],Ee=ge[1],Ne=Object(l.useState)(new Date),Ce=Object(n.a)(Ne,2),De=Ce[0],Se=Ce[1],we=Object(l.useState)([{value:"Business",label:"Business",color:"primary"}]),ke=Object(n.a)(we,2),Be=ke[0],Ae=ke[1],Fe=[{value:"Donna Frank",label:"Donna Frank",avatar:W.default},{value:"Jane Foster",label:"Jane Foster",avatar:K.default},{value:"Gabrielle Robertson",label:"Gabrielle Robertson",avatar:Q.default},{value:"Lori Spears",label:"Lori Spears",avatar:X.default},{value:"Sandy Vega",label:"Sandy Vega",avatar:Z.default},{value:"Cheryl May",label:"Cheryl May",avatar:$.default}],Pe=function(){var e={id:v.id,title:se,allDay:he,start:De,end:ye,url:k,extendedProps:{location:ve,description:ae,guests:de,calendar:Be[0].label}};a(h(e)),function(e,t,a){for(var n=d.getEventById(e.id),l=0;l<t.length;l++){var c=t[l];n.setProp(c,e[c])}n.setDates(e.start,e.end,{allDay:e.allDay});for(var s=0;s<a.length;s++){var r=a[s];n.setExtendedProp(r,e.extendedProps[r])}}(e,["id","title","url"],["calendar","guests","location","description"]),r(),p.f.success(Object(g.jsx)(ee,{title:"Event Updated",color:"success",icon:Object(g.jsx)(x.a,{})}),{autoClose:2e3,hideProgressBar:!0,closeButton:!1})},Te=function(){var e;a(m(v.id)),e=v.id,d.getEventById(e).remove(),r(),p.f.error(Object(g.jsx)(ee,{title:"Event Removed",color:"danger",icon:Object(g.jsx)(R.a,{})}),{autoClose:2e3,hideProgressBar:!0,closeButton:!1})},Re=function(){return Object(Y.e)(v)||!Object(Y.e)(v)&&!v.title.length?Object(g.jsxs)(l.Fragment,{children:[Object(g.jsx)(D.a.Ripple,{className:"mr-1",type:"submit",color:"primary",children:"Add"}),Object(g.jsx)(D.a.Ripple,{color:"secondary",type:"reset",onClick:r,outline:!0,children:"Cancel"})]}):Object(g.jsxs)(l.Fragment,{children:[Object(g.jsx)(D.a.Ripple,{className:"mr-1",color:"primary",children:"Update"}),Object(g.jsx)(D.a.Ripple,{color:"danger",onClick:Te,outline:!0,children:"Delete"})]})},Le=Object(g.jsx)(L.a,{className:"cursor-pointer",size:15,onClick:r});return Object(g.jsxs)(G.a,{isOpen:c,toggle:r,className:"sidebar-lg",contentClassName:"p-0",onOpened:function(){if(!Object(Y.e)(v)){var e=v.extendedProps.calendar;re(v.title||se),Oe(v.allDay||he),B(v.url||k),fe(v.extendedProps.location||ve),ne(v.extendedProps.description||ae),ue(v.extendedProps.guests||de),Se(new Date(v.start)),Ee(v.allDay?new Date(v.start):new Date(v.end)),Ae([e.length?{label:e,value:e,color:i[e]}:{value:"Business",label:"Business",color:"primary"}])}},onClosed:function(){a(j({})),re(""),Oe(!1),B(""),fe(""),ne(""),ue({}),Ae([{value:"Business",label:"Business",color:"primary"}]),Se(new Date),Ee(new Date)},modalClassName:"modal-slide-in event-sidebar",children:[Object(g.jsx)(M.a,{className:"mb-1",toggle:r,close:Le,tag:"div",children:Object(g.jsxs)("h5",{className:"modal-title",children:[v&&v.title&&v.title.length?"Update":"Add"," Event"]})}),Object(g.jsx)(H.a,{className:"flex-grow-1 pb-sm-0 pb-3",children:Object(g.jsxs)(z.a,{onSubmit:N((function(e){Object(Y.e)(E)&&(Object(Y.e)(v)||!Object(Y.e)(v)&&!v.title.length?function(){var e={title:se,start:De,end:ye,allDay:he,display:"block",extendedProps:{calendar:Be[0].label,url:k.length?k:void 0,guests:de.length?de:void 0,location:ve.length?ve:void 0,desc:ae.length?ae:void 0}};a(b(e)),u(),r(),p.f.success(Object(g.jsx)(ee,{title:"Event Added",color:"success",icon:Object(g.jsx)(x.a,{})}),{autoClose:2e3,hideProgressBar:!0,closeButton:!1})}():Pe(),r())})),children:[Object(g.jsxs)(I.a,{children:[Object(g.jsxs)(J.a,{for:"title",children:["Title ",Object(g.jsx)("span",{className:"text-danger",children:"*"})]}),Object(g.jsx)(q.a,{id:"title",name:"title",placeholder:"Title",value:se,onChange:function(e){return re(e.target.value)},innerRef:y({register:!0,validate:function(e){return""!==e}}),className:s()({"is-invalid":E.title})})]}),Object(g.jsxs)(I.a,{children:[Object(g.jsx)(J.a,{for:"label",children:"Label"}),Object(g.jsx)(V.a,{id:"label",value:Be,options:[{value:"Business",label:"Business",color:"primary"},{value:"Personal",label:"Personal",color:"danger"},{value:"Family",label:"Family",color:"warning"},{value:"Holiday",label:"Holiday",color:"success"},{value:"ETC",label:"ETC",color:"info"}],theme:Y.h,className:"react-select",classNamePrefix:"select",isClearable:!1,onChange:function(e){return Ae([e])},components:{Option:function(e){var t=e.data,a=Object(F.a)(e,["data"]);return Object(g.jsxs)(U.e.Option,Object(o.a)(Object(o.a)({},a),{},{children:[Object(g.jsx)("span",{className:"bullet bullet-".concat(t.color," bullet-sm mr-50")}),t.label]}))}}})]}),Object(g.jsxs)(I.a,{children:[Object(g.jsx)(J.a,{for:"startDate",children:"Start Date"}),Object(g.jsx)(T.a,{required:!0,id:"startDate",name:"startDate",className:"form-control",onChange:function(e){return Se(e[0])},value:De,options:{enableTime:!1===he,dateFormat:"Y-m-d H:i"}})]}),Object(g.jsxs)(I.a,{children:[Object(g.jsx)(J.a,{for:"endDate",children:"End Date"}),Object(g.jsx)(T.a,{required:!0,id:"endDate",name:"endDate",className:"form-control",onChange:function(e){return Ee(e[0])},value:ye,options:{enableTime:!1===he,dateFormat:"Y-m-d H:i"}})]}),Object(g.jsx)(I.a,{children:Object(g.jsx)(S.a,{type:"switch",id:"allDay",name:"customSwitch",label:"All Day",checked:he,onChange:function(e){return Oe(e.target.checked)},inline:!0})}),Object(g.jsxs)(I.a,{children:[Object(g.jsx)(J.a,{for:"eventURL",children:"Event URL"}),Object(g.jsx)(q.a,{type:"url",id:"eventURL",value:k,onChange:function(e){return B(e.target.value)},placeholder:"https://www.google.com"})]}),Object(g.jsxs)(I.a,{children:[Object(g.jsx)(J.a,{for:"guests",children:"Guests"}),Object(g.jsx)(V.a,{isMulti:!0,id:"guests",className:"react-select",classNamePrefix:"select",isClearable:!1,options:Fe,theme:Y.h,value:de.length?Object(A.a)(de):null,onChange:function(e){return ue(Object(A.a)(e))},components:{Option:function(e){var t=e.data,a=Object(F.a)(e,["data"]);return Object(g.jsx)(U.e.Option,Object(o.a)(Object(o.a)({},a),{},{children:Object(g.jsxs)("div",{className:"d-flex flex-wrap align-items-center",children:[Object(g.jsx)(O.a,{className:"my-0 mr-1",size:"sm",img:t.avatar}),Object(g.jsx)("div",{children:t.label})]})}))}}})]}),Object(g.jsxs)(I.a,{children:[Object(g.jsx)(J.a,{for:"location",children:"Location"}),Object(g.jsx)(q.a,{id:"location",value:ve,onChange:function(e){return fe(e.target.value)},placeholder:"Office"})]}),Object(g.jsxs)(I.a,{children:[Object(g.jsx)(J.a,{for:"description",children:"Description"}),Object(g.jsx)(q.a,{type:"textarea",name:"text",id:"description",rows:"3",value:ae,onChange:function(e){return ne(e.target.value)},placeholder:"Description"})]}),Object(g.jsx)(I.a,{className:"d-flex",children:Object(g.jsx)(Re,{})})]})})]})},ae=a(572),ne=a(120),le=a(84),ce=a.n(le),se=function(e){return function(t){ce.a.get("/apps/calendarBrands/events",{calendars:e}).then((function(e){t({type:"FETCH_EVENTS",events:e.data})}))}},re=function(e){return function(t,a){ce.a.post("/apps/calendarBrands/add-event",{event:e}).then((function(){t({type:"ADD_EVENT"}),t(se(a().calendar.selectedCalendars))}))}},ie=function(e){return function(t){ce.a.post("/apps/calendarBrands/update-event",{event:e}).then((function(){t({type:"UPDATE_EVENT"})}))}},oe=function(e){return function(t,a){t({type:"UPDATE_FILTERS",filter:e}),t(se(a().calendar.selectedCalendars))}},de=function(e){return function(t,a){t({type:"UPDATE_ALL_FILTERS",value:e}),t(se(a().calendar.selectedCalendars))}},ue=function(e){return function(t){ce.a.delete("/apps/calendarBrands/remove-event",{id:e}).then((function(){t({type:"REMOVE_EVENT"})}))}},be=function(e){return function(t){t({type:"SELECT_EVENT",event:e})}},je=(a(780),{Business:"primary",Holiday:"success",Personal:"danger",Family:"warning",ETC:"info"});t.default=function(){var e=Object(ne.b)(),t=Object(ne.c)((function(e){return e.calendar})),a=Object(l.useState)(!1),c=Object(n.a)(a,2),o=c[0],d=c[1],u=Object(l.useState)(!1),b=Object(n.a)(u,2),j=b[0],h=b[1],O=Object(l.useState)(null),p=Object(n.a)(O,2),m=p[0],v=p[1],f=Object(ae.a)(),x=Object(n.a)(f,2),y=x[0],E=(x[1],function(){return d(!o)}),C=function(e){return h(e)};return Object(l.useEffect)((function(){e(se(t.selectedCalendars))}),[]),Object(g.jsxs)(l.Fragment,{children:[Object(g.jsx)("div",{className:"app-calendar overflow-hidden border",children:Object(g.jsxs)(r.a,{noGutters:!0,children:[Object(g.jsx)(i.a,{id:"app-calendar-sidebar",className:s()("col app-calendar-sidebar flex-grow-0 overflow-hidden d-flex flex-column",{show:j}),children:Object(g.jsx)(B,{store:t,dispatch:e,updateFilter:oe,toggleSidebar:C,updateAllFilters:de,handleAddEventSidebar:E})}),Object(g.jsx)(i.a,{className:"position-relative",children:Object(g.jsx)(N,{isRtl:y,store:t,dispatch:e,blankEvent:{title:"",start:"",end:"",allDay:!1,url:"",extendedProps:{calendar:"",guests:[],location:"",description:""}},calendarApi:m,selectEvent:be,updateEvent:ie,toggleSidebar:C,calendarsColor:je,setCalendarApi:v,handleAddEventSidebar:E})}),Object(g.jsx)("div",{className:s()("body-content-overlay",{show:!0===j}),onClick:function(){return C(!1)}})]})}),Object(g.jsx)(te,{store:t,dispatch:e,addEvent:re,open:o,selectEvent:be,updateEvent:ie,removeEvent:ue,calendarApi:m,refetchEvents:function(){null!==m&&m.refetchEvents()},calendarsColor:je,handleAddEventSidebar:E})]})}},469:function(e,t,a){},695:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/calendar-illustration.42be42ce.png"},780:function(e,t,a){}}]);
//# sourceMappingURL=156.cc043848.chunk.js.map