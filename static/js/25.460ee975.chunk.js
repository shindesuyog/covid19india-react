(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[25],{113:function(e,t,i){"use strict";i.d(t,"a",(function(){return c}));var r=i(89);function c(e,t){var i;if(void 0===t){var c,n=Object(r.a)(e);try{for(n.s();!(c=n.n()).done;){var a=c.value;null!=a&&(i>a||void 0===i&&a>=a)&&(i=a)}}catch(u){n.e(u)}finally{n.f()}}else{var s,o=-1,l=Object(r.a)(e);try{for(l.s();!(s=l.n()).done;){var d=s.value;null!=(d=t(d,++o,e))&&(i>d||void 0===i&&d>=d)&&(i=d)}}catch(u){l.e(u)}finally{l.f()}}return i}},209:function(e,t,i){"use strict";i.r(t);var r=i(33),c=i(20),n=i(116),a=i(82),s=i(97),o=function(){var e=window.innerWidth,t=e>769?480:e,i=800;return Object(c.jsxs)(s.a,{viewBox:"0 0 ".concat(t," ").concat(i),height:i,width:t,speed:2,children:[Object(c.jsx)("circle",{cx:.4*t,cy:400,r:"5"}),Object(c.jsx)("circle",{cx:.5*t,cy:400,r:"5"}),Object(c.jsx)("circle",{cx:.6*t,cy:400,r:"5"})]})},l=i(6),d=i(104),u=i(32),b=i(91),j=i(85),m=i.n(j),O=i(113),f=i(59),h=i(76),g=i(83),v=i.n(g),p=i(1),y=i(269),x=i(173),C=Object(p.lazy)((function(){return Promise.all([i.e(1),i.e(2),i.e(21)]).then(i.bind(null,249))})),N=Object(p.lazy)((function(){return Promise.all([i.e(1),i.e(2),i.e(20),i.e(39)]).then(i.bind(null,250))}));function k(e){var t,i=this,s=e.stateCode,j=e.timeseries,g=e.date,v=e.regionHighlighted,k=e.setRegionHighlighted,E=e.anchor,w=e.setAnchor,S=e.expandTable,M=Object(y.a)().t,P=Object(x.a)("timeseriesLookbackDays",90),T=Object(a.a)(P,2),H=T[0],A=T[1],R=Object(x.a)("chartType","total"),U=Object(a.a)(R,2),L=U[0],J=U[1],B=Object(x.a)("isUniform",!1),D=Object(a.a)(B,2),z=D[0],F=D[1],q=Object(x.a)("isLog",!1),I=Object(a.a)(q,2),K=I[0],G=I[1],W=Object(x.a)("isMovingAverage",!1),X=Object(a.a)(W,2),Q=X[0],V=X[1],Y=Object.keys((null===j||void 0===j||null===(t=j[s])||void 0===t?void 0:t.dates)||{}),Z=Y[0]||g||Object(u.g)(),$=Object(O.a)([Y[Y.length-1],g||Object(u.g)()]),_=Object(p.useState)($),ee=Object(a.a)(_,2),te=ee[0],ie=ee[1];Object(p.useEffect)((function(){ie($)}),[$]);var re=null!==H?Object(f.a)(Object(h.a)(Object(u.k)(te),H),{representation:"date"}):Z,ce=Object(p.useRef)(),ne=Object(d.a)(ce,{once:!0}),ae=Object(p.useMemo)((function(){var e;return(null===j||void 0===j||null===(e=j[v.stateCode])||void 0===e?void 0:e.districts)?{stateCode:v.stateCode,districtName:v.districtName}:{stateCode:v.stateCode,districtName:null}}),[j,v.stateCode,v.districtName]),se=Object(p.useMemo)((function(){var e,t,i,r;return ae.districtName?null===j||void 0===j||null===(e=j[ae.stateCode])||void 0===e||null===(t=e.districts)||void 0===t||null===(i=t[ae.districtName])||void 0===i?void 0:i.dates:null===j||void 0===j||null===(r=j[ae.stateCode])||void 0===r?void 0:r.dates}),[j,ae.stateCode,ae.districtName]),oe=Object(p.useMemo)((function(){var e=Object.keys(j||{}).filter((function(e){return e!==s})).sort((function(e,t){return l.t[e].localeCompare(l.t[t])})).map((function(e){return{stateCode:e,districtName:null}})),t=Object.keys(j||{}).reduce((function(e,t){var i;return[].concat(Object(n.a)(e),Object(n.a)(Object.keys((null===j||void 0===j||null===(i=j[t])||void 0===i?void 0:i.districts)||{}).reduce((function(e,i){return[].concat(Object(n.a)(e),[{stateCode:t,districtName:i}])}),[])))}),[]);return[{stateCode:s,districtName:null}].concat(Object(n.a)(e),Object(n.a)(t))}),[j,s]),le=Object(p.useMemo)((function(){return oe.find((function(e){return e.stateCode===v.stateCode&&e.districtName===v.districtName}))?oe:[].concat(Object(n.a)(oe),[{stateCode:v.stateCode,districtName:v.districtName}])}),[v.stateCode,v.districtName,oe]),de=Object(p.useMemo)((function(){return Object.keys(se||{}).filter((function(e){return e<=$}))}),[se,$]),ue=Object(p.useMemo)((function(){return de.filter((function(e){return re<=e&&e<=te}))}),[de,re,te]),be=Object(p.useCallback)((function(e){var t=e.target;k(JSON.parse(t.value))}),[k]),je=Object(p.useCallback)((function(){k({stateCode:s,districtName:null})}),[s,k]);return Object(c.jsxs)("div",{className:m()("TimeseriesExplorer fadeInUp",{stickied:"timeseries"===E},{expanded:S}),style:{display:"mapexplorer"===E?"none":""},ref:ce,children:[Object(c.jsxs)("div",{className:"timeseries-header",children:[Object(c.jsx)("div",{className:m()("anchor",{stickied:"timeseries"===E}),onClick:w&&w.bind(this,"timeseries"===E?null:"timeseries"),children:Object(c.jsx)(b.l,{})}),Object(c.jsx)("h1",{children:M("Spread Trends")}),Object(c.jsx)("div",{className:"tabs",children:Object.entries(l.z).map((function(e,t){var r=Object(a.a)(e,2),n=r[0],s=r[1];return Object(c.jsx)("div",{className:"tab ".concat(L===n?"focused":""),onClick:J.bind(i,n),children:Object(c.jsx)("h4",{children:M(s)})},n)}))}),Object(c.jsxs)("div",{className:"timeseries-options",children:[Object(c.jsxs)("div",{className:"scale-modes",children:[Object(c.jsx)("label",{className:"main",children:"".concat(M("Scale Modes"),":")}),Object(c.jsxs)("div",{className:"timeseries-mode",children:[Object(c.jsx)("label",{htmlFor:"timeseries-mode",children:M("Uniform")}),Object(c.jsx)("input",{id:"timeseries-mode",type:"checkbox",className:"switch",checked:z,"aria-label":M("Checked by default to scale uniformly."),onChange:F.bind(this,!z)})]}),Object(c.jsxs)("div",{className:"timeseries-mode ".concat("total"!==L?"disabled":""),children:[Object(c.jsx)("label",{htmlFor:"timeseries-logmode",children:M("Logarithmic")}),Object(c.jsx)("input",{id:"timeseries-logmode",type:"checkbox",checked:"total"===L&&K,className:"switch",disabled:"total"!==L,onChange:G.bind(this,!K)})]})]}),Object(c.jsxs)("div",{className:"timeseries-mode ".concat("total"===L?"disabled":""," moving-average"),children:[Object(c.jsx)("label",{htmlFor:"timeseries-moving-average",children:M("7 day Moving Average")}),Object(c.jsx)("input",{id:"timeseries-moving-average",type:"checkbox",checked:"delta"===L&&Q,className:"switch",disabled:"delta"!==L,onChange:V.bind(this,!Q)})]})]})]}),le&&Object(c.jsxs)("div",{className:"state-selection",children:[Object(c.jsx)("div",{className:"dropdown",children:Object(c.jsx)("select",{value:JSON.stringify(ae),onChange:be,children:le.filter((function(e){return l.t[e.stateCode]!==e.districtName})).map((function(e){return Object(c.jsx)("option",{value:JSON.stringify(e),children:e.districtName?M(e.districtName):M(l.t[e.stateCode])},"".concat(e.stateCode,"-").concat(e.districtName))}))})}),Object(c.jsx)("div",{className:"reset-icon",onClick:je,children:Object(c.jsx)(b.n,{})})]}),ne&&Object(c.jsxs)(p.Suspense,{fallback:Object(c.jsx)(o,{}),children:[Object(c.jsx)(C,Object(r.a)({timeseries:se,regionHighlighted:ae,dates:ue},{endDate:$,chartType:L,isUniform:z,isLog:K,isMovingAverage:Q})),Object(c.jsx)(N,Object(r.a)({timeseries:se,regionHighlighted:ae,brushDomain:[re,te]},{dates:de,endDate:$,setBrushEnd:ie,setLookback:A}))]}),!ne&&Object(c.jsx)("div",{style:{height:"50rem"}}),Object(c.jsx)("div",{className:"pills",children:l.A.map((function(e){return Object(c.jsx)("button",{type:"button",className:m()({selected:e===H}),onClick:A.bind(i,e),children:M(null!==e?"".concat(e," days"):"Beginning")},e)}))})]})}var E=function(e,t){return!t.forceRender&&(!(t.timeseries||!e.timeseries)||!(t.timeseries&&!e.timeseries)&&(!!v()(t.regionHighlighted.stateCode,e.regionHighlighted.stateCode)&&(!!v()(t.regionHighlighted.districtName,e.regionHighlighted.districtName)&&(!!v()(t.date,e.date)&&(!!v()(t.anchor,e.anchor)&&!!v()(t.expandTable,e.expandTable))))))};t.default=Object(p.memo)(k,E)},83:function(e,t,i){"use strict";e.exports=function e(t,i){if(t===i)return!0;if(t&&i&&"object"==typeof t&&"object"==typeof i){if(t.constructor!==i.constructor)return!1;var r,c,n;if(Array.isArray(t)){if((r=t.length)!=i.length)return!1;for(c=r;0!==c--;)if(!e(t[c],i[c]))return!1;return!0}if(t.constructor===RegExp)return t.source===i.source&&t.flags===i.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===i.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===i.toString();if((r=(n=Object.keys(t)).length)!==Object.keys(i).length)return!1;for(c=r;0!==c--;)if(!Object.prototype.hasOwnProperty.call(i,n[c]))return!1;for(c=r;0!==c--;){var a=n[c];if(!e(t[a],i[a]))return!1}return!0}return t!==t&&i!==i}},97:function(e,t,i){"use strict";var r=i(1),c=function(){return(c=Object.assign||function(e){for(var t,i=1,r=arguments.length;i<r;i++)for(var c in t=arguments[i])Object.prototype.hasOwnProperty.call(t,c)&&(e[c]=t[c]);return e}).apply(this,arguments)};var n=function(e){var t=e.animate,i=e.backgroundColor,n=e.backgroundOpacity,a=e.baseUrl,s=e.children,o=e.foregroundColor,l=e.foregroundOpacity,d=e.gradientRatio,u=e.uniqueKey,b=e.interval,j=e.rtl,m=e.speed,O=e.style,f=e.title,h=function(e,t){var i={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(i[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(r=Object.getOwnPropertySymbols(e);c<r.length;c++)t.indexOf(r[c])<0&&Object.prototype.propertyIsEnumerable.call(e,r[c])&&(i[r[c]]=e[r[c]])}return i}(e,["animate","backgroundColor","backgroundOpacity","baseUrl","children","foregroundColor","foregroundOpacity","gradientRatio","uniqueKey","interval","rtl","speed","style","title"]),g=u||Math.random().toString(36).substring(6),v=g+"-diff",p=g+"-animated-diff",y=g+"-aria",x=j?{transform:"scaleX(-1)"}:null,C="0; "+b+"; 1",N=m+"s";return Object(r.createElement)("svg",c({"aria-labelledby":y,role:"img",style:c(c({},O),x)},h),f?Object(r.createElement)("title",{id:y},f):null,Object(r.createElement)("rect",{role:"presentation",x:"0",y:"0",width:"100%",height:"100%",clipPath:"url("+a+"#"+v+")",style:{fill:"url("+a+"#"+p+")"}}),Object(r.createElement)("defs",{role:"presentation"},Object(r.createElement)("clipPath",{id:v},s),Object(r.createElement)("linearGradient",{id:p},Object(r.createElement)("stop",{offset:"0%",stopColor:i,stopOpacity:n},t&&Object(r.createElement)("animate",{attributeName:"offset",values:-d+"; "+-d+"; 1",keyTimes:C,dur:N,repeatCount:"indefinite"})),Object(r.createElement)("stop",{offset:"50%",stopColor:o,stopOpacity:l},t&&Object(r.createElement)("animate",{attributeName:"offset",values:-d/2+"; "+-d/2+"; "+(1+d/2),keyTimes:C,dur:N,repeatCount:"indefinite"})),Object(r.createElement)("stop",{offset:"100%",stopColor:i,stopOpacity:n},t&&Object(r.createElement)("animate",{attributeName:"offset",values:"0; 0; "+(1+d),keyTimes:C,dur:N,repeatCount:"indefinite"})))))};n.defaultProps={animate:!0,backgroundColor:"#f5f6f7",backgroundOpacity:1,baseUrl:"",foregroundColor:"#eee",foregroundOpacity:1,gradientRatio:2,id:null,interval:.25,rtl:!1,speed:1.2,style:{},title:"Loading..."};var a=function(e){return e.children?Object(r.createElement)(n,c({},e)):Object(r.createElement)(s,c({},e))},s=function(e){return Object(r.createElement)(a,c({viewBox:"0 0 476 124"},e),Object(r.createElement)("rect",{x:"48",y:"8",width:"88",height:"6",rx:"3"}),Object(r.createElement)("rect",{x:"48",y:"26",width:"52",height:"6",rx:"3"}),Object(r.createElement)("rect",{x:"0",y:"56",width:"410",height:"6",rx:"3"}),Object(r.createElement)("rect",{x:"0",y:"72",width:"380",height:"6",rx:"3"}),Object(r.createElement)("rect",{x:"0",y:"88",width:"178",height:"6",rx:"3"}),Object(r.createElement)("circle",{cx:"20",cy:"20",r:"20"}))};t.a=a}}]);
//# sourceMappingURL=25.460ee975.chunk.js.map