(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[7],{157:function(t,e,n){"use strict";var a=n(2),c=n(83),s=["mousedown","touchstart"];e.a=function(t,e,n){void 0===n&&(n=s);var r=Object(a.useRef)(e);Object(a.useEffect)((function(){r.current=e}),[e]),Object(a.useEffect)((function(){for(var e=function(e){var n=t.current;n&&!n.contains(e.target)&&r.current(e)},a=0,s=n;a<s.length;a++){var o=s[a];Object(c.d)(document,o,e)}return function(){for(var t=0,a=n;t<a.length;t++){var s=a[t];Object(c.c)(document,s,e)}}}),[n,t])}},295:function(t,e,n){"use strict";n.r(e);var a=n(82),c=n(7),s=n(2),r=n(293),o=n(5),i=n(91),d=n(157),l=n(18),u=void 0,j=function(t){var e=t.stateCode,n=t.trail,j=Object(s.useState)(!1),b=Object(a.a)(j,2),f=b[0],m=b[1],v=Object(s.useRef)(),O=Object(o.g)(),h=Object(r.a)().t;Object(d.a)(v,(function(){m(!1)}));var p=Object(i.useTransition)(f,{from:{opacity:0,transform:"translate3d(0, 2px, 0)",zIndex:999},enter:{opacity:1,transform:"translate3d(0, 0px, 0)",zIndex:999},leave:{opacity:0,transform:"translate3d(0, 2px, 0)",zIndex:999},config:{mass:1,tension:210,friction:20}}),x=Object(s.useCallback)((function(t){m(!1),O.push("/state/".concat(t))}),[O]);return Object(l.jsxs)("div",{className:"StateDropdown",ref:v,children:[Object(l.jsx)(i.animated.h1,{className:"state-name fadeInUp",style:n,onClick:m.bind(u,!f),children:h(c.v[e])}),p((function(t,n){return n&&Object(l.jsx)(i.animated.div,{className:"dropdown",style:t,children:Object.keys(c.l).filter((function(t){return"TT"!==t&&t!==e})).sort((function(t,e){return c.v[t].localeCompare(c.v[e])})).map((function(t){return Object(l.jsx)("h1",{className:"item",onClick:x.bind(u,t),children:h(c.v[t])},t)}))})})),f&&Object(l.jsx)("div",{className:"backdrop"})]})},b=n(22);function f(t){var e,n,a,o,d,u=t.data,f=t.stateCode,m=Object(r.a)().t,v=Object(s.useMemo)((function(){var t=[];return[0,0,0].map((function(e,n){return t.push({animationDelay:"".concat(250*n,"ms")}),null})),t}),[]),O=Object(i.useSpring)({total:Object(b.h)(u,"total","tested"),config:c.s});return Object(l.jsxs)("div",{className:"StateHeader",children:[Object(l.jsxs)("div",{className:"header-left",children:[Object(l.jsx)(j,{stateCode:f,hyperlink:!1,trail:v[0]}),(null===u||void 0===u||null===(e=u.meta)||void 0===e?void 0:e.last_updated)&&Object(l.jsx)("h5",{className:"fadeInUp",style:v[1],children:"".concat(m("Last Updated on")," ").concat(Object(b.c)(u.meta.last_updated,"dd MMM, p")," ").concat(m("IST"))})]}),Object(l.jsxs)("div",{className:"header-right fadeInUp",style:v[2],children:[Object(l.jsx)("h5",{children:m("Tested")}),Object(l.jsx)(i.animated.h2,{children:O.total.to((function(t){return Object(b.e)(t,"long")}))}),(null===u||void 0===u||null===(n=u.meta)||void 0===n||null===(a=n.tested)||void 0===a?void 0:a.last_updated)&&Object(l.jsx)("h5",{className:"timestamp",children:"".concat(m("As of")," ").concat(Object(b.c)(u.meta.tested.last_updated,"dd MMMM"))}),(null===u||void 0===u||null===(o=u.meta)||void 0===o||null===(d=o.tested)||void 0===d?void 0:d.source)&&Object(l.jsxs)("h5",{children:["".concat(m("per")," "),Object(l.jsx)("a",{href:u.meta.tested.source,target:"_noblank",children:m("source")})]})]})]})}e.default=Object(s.memo)(f)}}]);
//# sourceMappingURL=7.c1d39d41.chunk.js.map