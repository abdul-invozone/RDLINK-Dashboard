(this["webpackJsonprdlink-admin-dashboard"]=this["webpackJsonprdlink-admin-dashboard"]||[]).push([[153],{1936:function(e,n,t){"use strict";t.r(n);var s=t(0),a=t(1184),i=t(474),r=t(450),c=t(15),l=t(723),d=t(864),o=t(866),m=t(867),x=t(686),j=t(224),u=t(128),p=t(6),g=[{src:j.default,id:1},{src:u.default,id:2},{src:x.a,id:3}],b=function(){var e=Object(s.useState)(0),n=Object(c.a)(e,2),t=n[0],a=n[1],i=Object(s.useState)(0),r=Object(c.a)(i,2),x=r[0],j=r[1],u=function(){j(!0)},b=function(){j(!1)},h=function(){if(!x){var e=t===g.length-1?0:t+1;a(e)}},f=function(){if(!x){var e=0===t?g.length-1:t-1;a(e)}},O=g.map((function(e){return Object(p.jsx)(l.a,{onExiting:u,onExited:b,children:Object(p.jsx)("img",{src:e.src,className:"img-fluid",alt:e.id})},e.id)}));return Object(p.jsxs)(d.a,{activeIndex:t,next:h,previous:f,keyboard:!1,children:[Object(p.jsx)(o.a,{items:g,activeIndex:t,onClickHandler:function(e){x||a(e)}}),O,Object(p.jsx)(m.a,{direction:"prev",directionText:"Previous",onClickHandler:f}),Object(p.jsx)(m.a,{direction:"next",directionText:"Next",onClickHandler:h})]})},h=t(865),f=t(235),O=t.p+"static/media/08.9fa51868.jpg",I=t(236),v=[{src:f.default,id:1,header:"Slide 1",caption:"Donut jujubes I love topping I love sweet. Jujubes I love brownie gummi bears I love donut sweet chocolate. Tart chocolate marshmallow.Tart carrot cake muffin."},{src:O,id:2,header:"Slide 2",caption:"Tart macaroon marzipan I love souffl\xe9 apple pie wafer. Chocolate bar jelly caramels jujubes chocolate cake gummies. Cupcake cake I love cake danish carrot cake."},{src:I.default,id:3,header:"Slide 3",caption:"Pudding sweet pie gummies. Chocolate bar sweet tiramisu cheesecake chocolate cotton candy pastry muffin Marshmallow cake powder icing."}],C=function(){var e=Object(s.useState)(0),n=Object(c.a)(e,2),t=n[0],a=n[1],i=Object(s.useState)(0),r=Object(c.a)(i,2),x=r[0],j=r[1],u=function(){j(!0)},g=function(){j(!1)},b=function(){if(!x){var e=t===v.length-1?0:t+1;a(e)}},f=function(){if(!x){var e=0===t?v.length-1:t-1;a(e)}},O=v.map((function(e){return Object(p.jsxs)(l.a,{onExiting:u,onExited:g,children:[Object(p.jsx)("img",{src:e.src,className:"img-fluid",alt:e.id}),Object(p.jsx)(h.a,{captionText:e.caption,captionHeader:Object(p.jsx)("span",{className:"text-white",children:e.header})})]},e.id)}));return Object(p.jsxs)(d.a,{activeIndex:t,next:b,previous:f,keyboard:!1,children:[Object(p.jsx)(o.a,{items:v,activeIndex:t,onClickHandler:function(e){x||a(e)}}),O,Object(p.jsx)(m.a,{direction:"prev",directionText:"Previous",onClickHandler:f}),Object(p.jsx)(m.a,{direction:"next",directionText:"Next",onClickHandler:b})]})},k=t(1007),N=[{key:1,src:j.default,caption:"",altText:"Slide 1"},{key:2,src:u.default,caption:"",altText:"Slide 2"},{key:3,src:x.a,caption:"",altText:"Slide 3"}],S=function(){return Object(p.jsx)(k.a,{items:N,keyboard:!1})},T=t(225),y=t(228),w=t(933),E=[{src:T.default,key:1,caption:"",altText:"Slide 1"},{src:y.default,key:2,caption:"",altText:"Slide 2"},{src:w.a,key:3,caption:"",altText:"Slide 3"}],H=function(){return Object(p.jsx)(k.a,{items:E,interval:"500",keyboard:!1})},A=[{src:u.default,key:1,caption:"",altText:"Slide 1"},{src:T.default,key:2,caption:"",altText:"Slide 2"},{src:x.a,key:3,caption:"",altText:"Slide 3"}],U=function(){return Object(p.jsx)(k.a,{items:A,keyboard:!0})},P=[{src:y.default,key:1,caption:"",altText:"Slide 1"},{src:u.default,key:2,caption:"",altText:"Slide 2"},{src:w.a,key:3,caption:"",altText:"Slide 3"}],z=function(){return Object(p.jsx)(k.a,{items:P,pause:"hover",keyboard:!1})},K=t(221),B=t.n(K),J=t(456),F=t(457),R=t(521),D=t(461),M=Object(p.jsx)("pre",{children:Object(p.jsx)("code",{className:"language-jsx",children:"\nimport React, { useState } from 'react'\nimport {\n  Carousel,\n  CarouselItem,\n  CarouselControl,\n  CarouselIndicators\n} from 'reactstrap'\nimport sliderImage1 from '@src/assets/images/slider/01.jpg'\nimport sliderImage2 from '@src/assets/images/slider/02.jpg'\nimport sliderImage3 from '@src/assets/images/slider/03.jpg'\n\nconst images = [\n  {\n    src: sliderImage1,\n    id: 1\n  },\n  {\n    src: sliderImage2,\n    id: 2\n  },\n  {\n    src: sliderImage3,\n    id: 3\n  }\n]\n\nconst CarouselBasic = () => {\n  const [activeIndex, setActiveIndex] = useState(0)\n  const [animating, setAnimating] = useState(0)\n\n  const onExiting = () => {\n    setAnimating(true)\n  }\n\n  const onExited = () => {\n    setAnimating(false)\n  }\n\n  const next = () => {\n    if (animating) return\n    const nextIndex = activeIndex === images.length - 1 ? 0 : activeIndex + 1\n    setActiveIndex(nextIndex)\n  }\n\n  const previous = () => {\n    if (animating) return\n    const nextIndex = activeIndex === 0 ? images.length - 1 : activeIndex - 1\n    setActiveIndex(nextIndex)\n  }\n\n  const goToIndex = newIndex => {\n    if (animating) return\n    setActiveIndex(newIndex)\n  }\n\n  const slides = images.map(item => {\n    return (\n      <CarouselItem onExiting={onExiting} onExited={onExited} key={item.id}>\n        <img src={item.src} className='img-fluid' alt={item.id} />\n      </CarouselItem>\n    )\n  })\n  return (\n    <Carousel activeIndex={activeIndex} next={next} previous={previous}>\n      <CarouselIndicators\n        items={images}\n        activeIndex={activeIndex}\n        onClickHandler={goToIndex}\n      />\n      {slides}\n      <CarouselControl\n        direction='prev'\n        directionText='Previous'\n        onClickHandler={previous}\n      />\n      <CarouselControl\n        direction='next'\n        directionText='Next'\n        onClickHandler={next}\n      />\n    </Carousel>\n  )\n}\n\nexport default CarouselBasic\n    "})}),Y=Object(p.jsx)("pre",{children:Object(p.jsx)("code",{className:"language-jsx",children:"\nimport React, { useState } from 'react'\nimport {\n  Carousel,\n  CarouselItem,\n  CarouselControl,\n  CarouselIndicators,\n  CarouselCaption\n} from 'reactstrap'\nimport sliderImage1 from '@src/assets/images/slider/03.jpg'\nimport sliderImage2 from '@src/assets/images/slider/04.jpg'\nimport sliderImage3 from '@src/assets/images/slider/05.jpg'\n\nconst images = [\n  {\n    src: sliderImage1,\n    id: 1,\n    header: <span className=\"text-white\">Slide 1 Header</span>\n    caption: 'Cupcake ipsum dolor sit amet toffee lemon drops bonbon.'\n  },\n  {\n    src: sliderImage2,\n    id: 2,\n    header: <span className=\"text-white\">Slide 2 Header</span>\n    caption: 'Cheesecake caramels wafer pie lollipop.'\n  },\n  {\n    src: sliderImage3,\n    id: 3,\n    header: <span className=\"text-white\">Slide 3 Header</span>\n    caption: 'Candy canes toffee gummies souffl\xe9 fruitcake drag\xe9e icing.'\n  }\n]\n\nconst CarouselCaptions = () => {\n  const [activeIndex, setActiveIndex] = useState(0)\n  const [animating, setAnimating] = useState(0)\n\n  const onExiting = () => {\n    setAnimating(true)\n  }\n\n  const onExited = () => {\n    setAnimating(false)\n  }\n\n  const next = () => {\n    if (animating) return\n    const nextIndex = activeIndex === images.length - 1 ? 0 : activeIndex + 1\n    setActiveIndex(nextIndex)\n  }\n\n  const previous = () => {\n    if (animating) return\n    const nextIndex = activeIndex === 0 ? images.length - 1 : activeIndex - 1\n    setActiveIndex(nextIndex)\n  }\n\n  const goToIndex = newIndex => {\n    if (animating) return\n    setActiveIndex(newIndex)\n  }\n\n  const slides = images.map(item => {\n    return (\n      <CarouselItem onExiting={onExiting} onExited={onExited} key={item.id}>\n        <img src={item.src} className='img-fluid' alt={item.id} />\n        <CarouselCaption\n          captionText={item.caption}\n          captionHeader={<span className=\"text-center\">item.header</span>}\n        />\n      </CarouselItem>\n    )\n  })\n  return (\n    <Carousel activeIndex={activeIndex} next={next} previous={previous}>\n      <CarouselIndicators\n        items={images}\n        activeIndex={activeIndex}\n        onClickHandler={goToIndex}\n      />\n      {slides}\n      <CarouselControl\n        direction='prev'\n        directionText='Previous'\n        onClickHandler={previous}\n      />\n      <CarouselControl\n        direction='next'\n        directionText='Next'\n        onClickHandler={next}\n      />\n    </Carousel>\n  )\n}\n\nexport default CarouselCaptions\n    "})}),q=Object(p.jsx)("pre",{children:Object(p.jsx)("code",{className:"language-jsx",children:"\n\nimport { UncontrolledCarousel } from 'reactstrap'\nimport sliderImage1 from '@src/assets/images/slider/06.jpg'\nimport sliderImage2 from '@src/assets/images/slider/02.jpg'\nimport sliderImage3 from '@src/assets/images/slider/05.jpg'\n\nconst items = [\n  {\n    src: sliderImage1,\n    altText: 'Slide 1',\n  },\n  {\n    src: sliderImage2,\n    altText: 'Slide 2',\n  },\n  {\n    src: sliderImage3,\n    altText: 'Slide 3',\n  }\n]\n\nconst CarouselUncontrolled = () => {\n  return <UncontrolledCarousel items={items} />\n}\nexport default CarouselUncontrolled\n        "})}),G=Object(p.jsx)("pre",{children:Object(p.jsx)("code",{className:"language-jsx",children:"\n\nimport { UncontrolledCarousel } from 'reactstrap'\nimport sliderImage1 from '@src/assets/images/slider/05.jpg'\nimport sliderImage2 from '@src/assets/images/slider/04.jpg'\nimport sliderImage3 from '@src/assets/images/slider/01.jpg'\n\nconst images = [\n  {\n    src: sliderImage1,\n    id: 1,\n    altText: 'Slide 1',\n  },\n  {\n    src: sliderImage2,\n    id: 2,\n    altText: 'Slide 2',\n  },\n  {\n    src: sliderImage3,\n    id: 3,\n    altText: 'Slide 3',\n  }\n]\n\nconst CarouselInterval = () => {\n  return <UncontrolledCarousel items={images} interval='500' />\n}\nexport default CarouselInterval"})}),L=Object(p.jsx)("pre",{children:Object(p.jsx)("code",{className:"language-jsx",children:"\n\nimport { UncontrolledCarousel } from 'reactstrap'\nimport { carouselKeyboard } from './CarouselSourceCode'\nimport sliderImage1 from '@src/assets/images/slider/04.jpg'\nimport sliderImage2 from '@src/assets/images/slider/01.jpg'\nimport sliderImage3 from '@src/assets/images/slider/05.jpg'\n\nconst images = [\n  {\n    src: sliderImage1,\n    id: 1,\n    altText: 'Slide 1',\n  },\n  {\n    src: sliderImage2,\n    id: 2,\n    altText: 'Slide 2',\n  },\n  {\n    src: sliderImage3,\n    id: 3,\n    altText: 'Slide 3',\n  }\n]\n\nconst CarouselKeyboard = () => {\n  return <UncontrolledCarousel items={images} keyboard={false} />\n}\nexport default CarouselKeyboard\n            "})}),Q=Object(p.jsx)("pre",{children:Object(p.jsx)("code",{className:"language-jsx",children:"\n\nimport { UncontrolledCarousel } from 'reactstrap'\nimport sliderImage1 from '@src/assets/images/slider/02.jpg'\nimport sliderImage2 from '@src/assets/images/slider/06.jpg'\nimport sliderImage3 from '@src/assets/images/slider/05.jpg'\n\nconst images = [\n  {\n    src: sliderImage1,\n    id: 1,\n    altText: 'Slide 1',\n    caption: 'Slide 1',\n    header: <span className=\"text-white\">Slide 1 Header</span>\n  },\n  {\n    src: sliderImage2,\n    id: 2,\n    altText: 'Slide 2',\n    caption: 'Slide 2',\n    header: <span className=\"text-white\">Slide 2 Header</span>\n  },\n  {\n    src: sliderImage3,\n    id: 3,\n    altText: 'Slide 3',\n    caption: 'Slide 3',\n    header: <span className=\"text-white\">Slide 3 Header</span>\n  }\n]\n\nconst CarouselPause = () => {\n  return <UncontrolledCarousel items={images} pause='hover' />\n}\nexport default CarouselPause\n"})});n.default=function(){return Object(s.useEffect)((function(){B.a.highlightAll()}),[]),Object(p.jsxs)(s.Fragment,{children:[Object(p.jsx)(r.a,{breadCrumbTitle:"Carousel",breadCrumbParent:"Components",breadCrumbActive:"Carousel"}),Object(p.jsxs)(J.a,{children:[Object(p.jsx)(F.a,{className:"mb-1",sm:"12",children:Object(p.jsx)(R.a,{color:"info",children:Object(p.jsx)("div",{className:"alert-body",children:Object(p.jsxs)("p",{children:[Object(p.jsx)(a.a,{className:"mr-1",size:14}),"Nested carousels are not supported."]})})})}),Object(p.jsx)(F.a,{md:"6",sm:"12",children:Object(p.jsx)(i.a,{title:"Basic Example",code:M,children:Object(p.jsx)(b,{})})}),Object(p.jsx)(F.a,{md:"6",sm:"12",children:Object(p.jsx)(i.a,{title:"Captions Example",code:Y,children:Object(p.jsx)(C,{})})}),Object(p.jsx)(F.a,{md:"6",sm:"12",children:Object(p.jsxs)(i.a,{title:"Uncontrolled Example",code:q,children:[Object(p.jsxs)(D.a,{children:["You don't have to manage state with ",Object(p.jsx)("code",{children:"UncontrolledCarousel"})," all you have to do is return it with your content."]}),Object(p.jsx)(S,{})]})}),Object(p.jsx)(F.a,{md:"6",sm:"12",children:Object(p.jsxs)(i.a,{title:"Interval Example",code:G,children:[Object(p.jsxs)(D.a,{children:["Use ",Object(p.jsx)("code",{children:"Interval"})," prop to set interval between slides. default interval is ",Object(p.jsx)("strong",{children:"5000"}),"."]}),Object(p.jsx)(H,{})]})}),Object(p.jsx)(F.a,{md:"6",sm:"12",children:Object(p.jsxs)(i.a,{title:"Keyboard Example",code:L,children:[Object(p.jsxs)(D.a,{children:["Use ",Object(p.jsx)("code",{children:"Keyboard"})," prop to control carousel with keyboard default is ",Object(p.jsx)("code",{children:"false"}),"."]}),Object(p.jsx)(U,{})]})}),Object(p.jsx)(F.a,{md:"6",sm:"12",children:Object(p.jsxs)(i.a,{title:"Pause Example",code:Q,children:[Object(p.jsxs)(D.a,{children:["Use ",Object(p.jsx)("code",{children:"pause"})," prop to pause carousel on hover."]}),Object(p.jsx)(z,{})]})})]})]})}},450:function(e,n,t){"use strict";var s=t(449),a=t(1177),i=t(1135),r=t(1199),c=t(1194),l=t(1132),d=t(467),o=t(468),m=t(466),x=t(1370),j=t(1100),u=t(1110),p=t(6);n.a=function(e){var n=e.breadCrumbTitle,t=e.breadCrumbParent,g=e.breadCrumbParent2,b=e.breadCrumbParent3,h=e.breadCrumbActive;return Object(p.jsxs)("div",{className:"content-header row",children:[Object(p.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2",children:Object(p.jsx)("div",{className:"row breadcrumbs-top",children:Object(p.jsxs)("div",{className:"col-12",children:[n?Object(p.jsx)("h2",{className:"content-header-title float-left mb-0",children:n}):"",Object(p.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(p.jsxs)(d.a,{children:[Object(p.jsx)(o.a,{tag:"li",children:Object(p.jsx)(s.b,{to:"/",children:"Home"})}),Object(p.jsx)(o.a,{tag:"li",className:"text-primary",children:t}),g?Object(p.jsx)(o.a,{tag:"li",className:"text-primary",children:g}):"",b?Object(p.jsx)(o.a,{tag:"li",className:"text-primary",children:b}):"",Object(p.jsx)(o.a,{tag:"li",active:!0,children:h})]})})]})})}),Object(p.jsx)("div",{className:"content-header-right text-md-right col-md-3 col-12 d-md-block d-none",children:Object(p.jsx)("div",{className:"form-group breadcrum-right dropdown",children:Object(p.jsxs)(m.a,{children:[Object(p.jsx)(x.a,{color:"primary",size:"sm",className:"btn-icon btn-round dropdown-toggle",children:Object(p.jsx)(a.a,{size:14})}),Object(p.jsxs)(j.a,{tag:"ul",right:!0,children:[Object(p.jsxs)(u.a,{tag:s.b,to:"/apps/chat",children:[Object(p.jsx)(i.a,{className:"mr-1",size:14}),Object(p.jsx)("span",{className:"align-middle",children:"Todo"})]}),Object(p.jsxs)(u.a,{tag:s.b,to:"/apps/chat",children:[Object(p.jsx)(r.a,{className:"mr-1",size:14}),Object(p.jsx)("span",{className:"align-middle",children:"Chat"})]}),Object(p.jsxs)(u.a,{tag:s.b,to:"/apps/email",children:[Object(p.jsx)(c.a,{className:"mr-1",size:14}),Object(p.jsx)("span",{className:"align-middle",children:"Email"})]}),Object(p.jsxs)(u.a,{tag:s.b,to:"/apps/calendar",children:[Object(p.jsx)(l.a,{className:"mr-1",size:14}),Object(p.jsx)("span",{className:"align-middle",children:"Calendar"})]})]})]})})})]})}},474:function(e,n,t){"use strict";var s=t(15),a=t(0),i=t(1150),r=t(460),c=t(458),l=t(463),d=t(459),o=t(897),m=t(6);n.a=function(e){var n=e.title,t=e.children,x=e.noBody,j=e.code,u=e.iconCode,p=Object(a.useState)(!1),g=Object(s.a)(p,2),b=g[0],h=g[1],f=u||Object(m.jsx)(i.a,{size:15}),O=x?a.Fragment:r.a;return Object(m.jsxs)(c.a,{className:"card-snippet",children:[Object(m.jsxs)(l.a,{children:[Object(m.jsx)(d.a,{tag:"h4",children:n}),Object(m.jsx)("div",{className:"views cursor-pointer",onClick:function(){return h(!b)},children:f})]}),Object(m.jsx)(O,{children:t}),Object(m.jsx)(o.a,{isOpen:b,children:Object(m.jsx)(r.a,{children:j})})]})}},686:function(e,n,t){"use strict";n.a=t.p+"static/media/01.ae763d9d.jpg"},933:function(e,n,t){"use strict";n.a=t.p+"static/media/05.3d963e35.jpg"}}]);
//# sourceMappingURL=153.cddac543.chunk.js.map