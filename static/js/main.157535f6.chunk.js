(this["webpackJsonpportfolio-react"]=this["webpackJsonpportfolio-react"]||[]).push([[0],{31:function(e,t,i){},41:function(e,t,i){},42:function(e,t,i){},52:function(e,t,i){},53:function(e,t,i){},54:function(e,t,i){"use strict";i.r(t);var a=i(2),n=i.n(a),o=i(34),c=i.n(o),l=(i(41),i(26)),s=i(5),r=(i(42),i(3)),d=function(e){var t=e.lang,i=e.handleChangeLang;return Object(r.jsx)("button",{className:"lang-button",onClick:i,children:t})},j=i(27),b=i(18),h=i(56),p=i.p+"static/media/aboutme.1452ad05.png",u=i.p+"static/media/phone.c057ef30.png",m=i.p+"static/media/works.6479bd69.png",g=function(e){var t=e.id,i=e.url,a=e.title,n=e.img,o=e.additionalClass,c=e.additionalTextClass,l=e.delay,s=n&&Object(r.jsx)("img",{src:"aboutme"===n?p:"phone"===n?u:m,className:"tile__image",alt:a}),d={hidden:{x:"-100vw"},visible:{x:0,transition:{type:"spring",delay:l}},exit:{opacity:0,transition:{ease:"easeInOut",duration:.5}}};return Object(r.jsx)(b.b,{to:"".concat(i),className:"tile-to-hover tile__link ".concat(3===t&&"tile--outstanding-parent"),children:Object(r.jsxs)(h.a.button,{id:t,className:"tile ".concat(o),variants:d,initial:"hidden",animate:"visible",exit:"exit",children:[s,Object(r.jsx)("h2",{className:"tile__text ".concat(c),children:a})]})})},_={en:[{id:1,url:"about-me",title:"S\u0142owo o mnie",img:"aboutme",delay:0,content:{header:"O mnie",par1:"Mi\u0142o\u015bniczka ps\xf3w, rower\xf3w miejskich, kuchni ro\u015blinnej i g\xf3rskich w\u0119dr\xf3wek.",par2:"Mimo, \u017ce wykszta\u0142cenie mam humanistyczne, coraz bardziej poch\u0142ania mnie programowanie. Potrafi\u0119 sp\u0119dza\u0107 godziny analizuj\u0105c i udoskonalaj\u0105c kod, co jak do tej pory sprawia mi olbrzymi\u0105 frajd\u0119 :)",subtitle:"Technologie i umiej\u0119tno\u015bci"}},{id:2,title:"Dzie\u0144 dobry! Fajnie, \u017ce jeste\u015b :)",additionalClass:"tile--withoutImg",additionalTextClass:"tile__text--withoutImg",delay:1},{id:3,url:"my-projects",title:"Moje prace",img:"works",additionalClass:"tile--outstanding",delay:.5,content:{moreCode:"Troch\u0119 wi\u0119cej",projects:[{title:"Przewodnik miejski - wizyt\xf3wka",linkToLive:"https://agapoli89.github.io/WroGuide-update/",linkToCode:"https://github.com/agapoli89/WroGuide-update",image:"guide"},{title:"Lista zakup\xf3w",linkToLive:"https://agapoli89.github.io/Shopping-list/",linkToCode:"https://github.com/agapoli89/Shopping-list",image:"shoppinglist"},{title:'Lista "to-do"',linkToLive:"https://agapoli89.github.io/toDoList/",linkToCode:"https://github.com/agapoli89/toDoList",image:"todolist"},{title:"Baza ras ps\xf3w",linkToLive:"https://agapoli89.github.io/The-breed-s-base/",linkToCode:"https://github.com/agapoli89/The-breed-s-base",image:"breeds"}]}},{id:4,url:"contact-me",title:"Kontakt",img:"phone",content:"Znajdziesz mnie te\u017c na mediach spo\u0142eczno\u015bciowych:",delay:0}],pl:[{id:1,url:"about-me",title:"About me",img:"aboutme",delay:0,content:{header:"About me",par1:"Dogs, city bikes, plant-based cousine and hiking lover.",par2:"Though I always thought I have a humanist's soul I feel great in programming. I could spend hours analysing or improving code and I really enjoy it :)",subtitle:"Technologies and skills"}},{id:2,title:"Hello! Nice to see You :)",additionalClass:"tile--withoutImg",additionalTextClass:"tile__text--withoutImg",delay:1},{id:3,url:"my-projects",title:"My projects",img:"works",additionalClass:"tile--outstanding",delay:.5,content:{moreCode:"A little more",projects:[{title:"City guide - business card website",linkToLive:"https://agapoli89.github.io/WroGuide-update/",linkToCode:"https://github.com/agapoli89/WroGuide-update",image:"guide"},{title:"Shopping List",linkToLive:"https://agapoli89.github.io/Shopping-list/",linkToCode:"https://github.com/agapoli89/Shopping-list",image:"shoppinglist"},{title:'"To-do" list',linkToLive:"https://agapoli89.github.io/toDoList/",linkToCode:"https://github.com/agapoli89/toDoList",image:"todolist"},{title:"The dog breed's base",linkToLive:"https://agapoli89.github.io/The-breed-s-base/",linkToCode:"https://github.com/agapoli89/The-breed-s-base",image:"breeds"}]}},{id:4,url:"contact-me",title:"Contact",img:"phone",content:"You can also find me on Social Media:",delay:0}]},x=(i(52),i(31),function(){var e=Object(a.useContext)(N).lang,t=_[e].map((function(e){var t={hidden:{opacity:0},visible:{opacity:1,transition:{ease:"easeInOut",delay:e.delay,duration:.5}},exit:{opacity:0,transition:{ease:"easeInOut",duration:.5}}};return 2!==e.id?Object(r.jsx)(g,Object(j.a)({},e),e.id):Object(r.jsx)(h.a.div,{id:e.id,className:"tile-to-hover tile ".concat(e.additionalClass),variants:t,initial:"hidden",animate:"visible",exit:"exit",children:Object(r.jsx)("h2",{className:"tile__text ".concat(e.additionalTextClass),children:e.title})},e.id)}));return Object(r.jsx)("main",{className:"home",children:t})}),O=i(8),k=i(25),f=i(36),v=i.p+"static/media/cross.3215dab9.png",y=function(){return Object(r.jsx)(b.b,{to:"/",children:Object(r.jsx)("img",{src:v,alt:"exit-button",className:"tile__link tile__content__exit-button"})})},w=function(e){var t=e.title,i=e.linkToLive,n=e.linkToCode,o=e.image,c=Object(a.useState)(!1),s=Object(l.a)(c,2),d=s[0],j=s[1];return Object(r.jsx)("div",{className:"tile__content__my-project tile__content__my-project--".concat(o),onMouseEnter:function(){return j(!0)},onMouseLeave:function(){return j(!1)},children:d&&Object(r.jsxs)("div",{className:"tile__content__my-project__text",children:[t,Object(r.jsxs)("div",{children:[Object(r.jsx)("a",{className:"tile__link--icon-project",href:i,rel:"noopener noreferrer",target:"_blank",children:Object(r.jsx)(O.o,{})}),Object(r.jsx)("a",{className:"tile__link--icon-project",href:n,rel:"noopener noreferrer",target:"_blank",children:Object(r.jsx)(O.b,{})})]})]})})},C=function(){var e=Object(a.useContext)(N).lang,t=_[e][0].content,i=t.header,n=t.par1,o=t.par2,c=t.subtitle,l=_[e][2].content,d=l.moreCode,b=l.projects,p=Object(s.f)().pathname,u="/about-me"===p?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h3",{children:i}),Object(r.jsx)("p",{children:n}),Object(r.jsx)("p",{children:o}),Object(r.jsx)("h4",{className:"tile__content__about-me__subtitle",children:c}),Object(r.jsxs)("div",{className:"tile__content__about-me__icons-box",children:[Object(r.jsx)(O.i,{title:"JavaScript"}),Object(r.jsx)(O.k,{title:"React"}),Object(r.jsx)(k.d,{title:"TypeScript"}),Object(r.jsx)(O.g,{title:"HTML5"}),Object(r.jsx)(O.c,{title:"CSS3"}),Object(r.jsx)(O.l,{title:"SASS"}),Object(r.jsx)(k.a,{title:"Bootstrap"}),Object(r.jsx)(k.c,{title:"JQuery"}),Object(r.jsx)(k.b,{title:"Git"}),Object(r.jsx)(O.f,{title:"GitHub"}),Object(r.jsx)(O.e,{title:"Firebase"}),Object(r.jsx)(O.m,{title:"Wordpress"})]})]}):"/my-projects"===p?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("p",{className:"tile__content__my-projects__subtitle",children:[Object(r.jsx)(O.f,{}),Object(r.jsx)(O.a,{}),Object(r.jsx)("a",{href:"https://github.com/agapoli89",className:"tile__link",target:"_blank",rel:"noopener noreferrer",children:d})]}),Object(r.jsx)("div",{className:"tile__content__my-projects__container",children:b.map((function(e){return Object(r.jsx)(w,Object(j.a)({},e),e.title)}))})]}):"/contact-me"===p?Object(r.jsxs)("div",{className:"tile__content__contact-data",children:[Object(r.jsxs)("div",{children:[Object(r.jsxs)("a",{href:"tel:+48508071833",rel:"noopener noreferrer",className:"tile__link tile__link--icon-contact",children:[Object(r.jsx)(f.a,{}),Object(r.jsx)("span",{className:"tile__link--text-contact",children:"+48 508071833"})]}),Object(r.jsxs)("a",{href:"mailto:agapoli@gmail.com",rel:"noopener noreferrer",className:"tile__link tile__link--icon-contact",children:[Object(r.jsx)(O.n,{}),Object(r.jsx)("span",{className:"tile__link--text-contact",children:"agapoli@gmail.com"})]})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h5",{className:"tile__content__contact-data__subtitle",children:_[e][3].content}),Object(r.jsx)("a",{href:"https://www.linkedin.com/in/agnieszka-poli%C5%84ska-a76401171/",rel:"noopener noreferrer",className:"tile__link tile__link--social-media",target:"_blank",children:Object(r.jsx)(O.j,{})}),Object(r.jsx)("a",{href:"https://www.instagram.com/agapoli89/",rel:"noopener noreferrer",className:"tile__link tile__link--social-media",target:"_blank",children:Object(r.jsx)(O.h,{})}),Object(r.jsx)("a",{href:"https://www.facebook.com/agnieszka.polinska.9/",rel:"noopener noreferrer",className:"tile__link tile__link--social-media",target:"_blank",children:Object(r.jsx)(O.d,{})})]})]}):Object(r.jsx)("p",{className:"tile__content__contact-data",children:"Co\u015b posz\u0142o nie tak..."});return Object(r.jsxs)(h.a.div,{className:"tile__content ".concat("/about-me"!==p&&"tile__content--center"),variants:{hidden:{opacity:0,scale:0},visible:{opacity:1,scale:1,transition:{duration:1}},exit:{x:"+100vw",transition:{ease:"easeInOut",duration:.5}}},initial:"hidden",animate:"visible",exit:"exit",children:[Object(r.jsx)(y,{}),u]})},T=i(57),N=(i(53),n.a.createContext("en"));var L=function(){var e=Object(s.f)(),t=Object(a.useState)("pl"),i=Object(l.a)(t,2),n=i[0],o=i[1];return Object(r.jsx)(N.Provider,{value:{lang:n},children:Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(d,{lang:n,handleChangeLang:function(){return o((function(e){return"pl"===e?"en":"pl"}))}}),Object(r.jsx)(T.a,{exitBeforeEnter:!0,children:Object(r.jsxs)(s.c,{location:e,children:[Object(r.jsx)(s.a,{exact:!0,path:"/",children:Object(r.jsx)(x,{})}),Object(r.jsx)(s.a,{path:"/:url",children:Object(r.jsx)(C,{})})]},e.key)})]})})},z=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,58)).then((function(t){var i=t.getCLS,a=t.getFID,n=t.getFCP,o=t.getLCP,c=t.getTTFB;i(e),a(e),n(e),o(e),c(e)}))};c.a.render(Object(r.jsx)(n.a.StrictMode,{children:Object(r.jsx)(b.a,{children:Object(r.jsx)(L,{})})}),document.getElementById("root")),z()}},[[54,1,2]]]);
//# sourceMappingURL=main.157535f6.chunk.js.map