(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[20],{114:function(t,e,n){"use strict";e.a=function(t){for(var e;e=t.sourceEvent;)t=e;return t}},129:function(t,e,n){"use strict";n.d(e,"b",(function(){return h})),n.d(e,"a",(function(){return d}));var r=Array.prototype.slice,i=function(t){return t},a=1e-6;function u(t){return"translate("+(t+.5)+",0)"}function o(t){return"translate(0,"+(t+.5)+")"}function c(t){return function(e){return+t(e)}}function l(t){var e=Math.max(0,t.bandwidth()-1)/2;return t.round()&&(e=Math.round(e)),function(n){return+t(n)+e}}function s(){return!this.__axis}function f(t,e){var n=[],f=null,h=null,d=6,p=6,y=3,v=1===t||4===t?-1:1,b=4===t||2===t?"x":"y",m=1===t||3===t?u:o;function g(r){var u=null==f?e.ticks?e.ticks.apply(e,n):e.domain():f,o=null==h?e.tickFormat?e.tickFormat.apply(e,n):i:h,g=Math.max(d,0)+y,w=e.range(),O=+w[0]+.5,j=+w[w.length-1]+.5,k=(e.bandwidth?l:c)(e.copy()),x=r.selection?r.selection():r,_=x.selectAll(".domain").data([null]),A=x.selectAll(".tick").data(u,e).order(),z=A.exit(),M=A.enter().append("g").attr("class","tick"),S=A.select("line"),E=A.select("text");_=_.merge(_.enter().insert("path",".tick").attr("class","domain").attr("stroke","currentColor")),A=A.merge(M),S=S.merge(M.append("line").attr("stroke","currentColor").attr(b+"2",v*d)),E=E.merge(M.append("text").attr("fill","currentColor").attr(b,v*g).attr("dy",1===t?"0em":3===t?"0.71em":"0.32em")),r!==x&&(_=_.transition(r),A=A.transition(r),S=S.transition(r),E=E.transition(r),z=z.transition(r).attr("opacity",a).attr("transform",(function(t){return isFinite(t=k(t))?m(t):this.getAttribute("transform")})),M.attr("opacity",a).attr("transform",(function(t){var e=this.parentNode.__axis;return m(e&&isFinite(e=e(t))?e:k(t))}))),z.remove(),_.attr("d",4===t||2==t?p?"M"+v*p+","+O+"H0.5V"+j+"H"+v*p:"M0.5,"+O+"V"+j:p?"M"+O+","+v*p+"V0.5H"+j+"V"+v*p:"M"+O+",0.5H"+j),A.attr("opacity",1).attr("transform",(function(t){return m(k(t))})),S.attr(b+"2",v*d),E.attr(b,v*g).text(o),x.filter(s).attr("fill","none").attr("font-size",10).attr("font-family","sans-serif").attr("text-anchor",2===t?"start":4===t?"end":"middle"),x.each((function(){this.__axis=k}))}return g.scale=function(t){return arguments.length?(e=t,g):e},g.ticks=function(){return n=r.call(arguments),g},g.tickArguments=function(t){return arguments.length?(n=null==t?[]:r.call(t),g):n.slice()},g.tickValues=function(t){return arguments.length?(f=null==t?null:r.call(t),g):f&&f.slice()},g.tickFormat=function(t){return arguments.length?(h=t,g):h},g.tickSize=function(t){return arguments.length?(d=p=+t,g):d},g.tickSizeInner=function(t){return arguments.length?(d=+t,g):d},g.tickSizeOuter=function(t){return arguments.length?(p=+t,g):p},g.tickPadding=function(t){return arguments.length?(y=+t,g):y},g}function h(t){return f(2,t)}function d(t){return f(3,t)}},152:function(t,e,n){"use strict";var r=n(114);e.a=function(t,e){if(t=Object(r.a)(t),void 0===e&&(e=t.currentTarget),e){var n=e.ownerSVGElement||e;if(n.createSVGPoint){var i=n.createSVGPoint();return i.x=t.clientX,i.y=t.clientY,[(i=i.matrixTransform(e.getScreenCTM().inverse())).x,i.y]}if(e.getBoundingClientRect){var a=e.getBoundingClientRect();return[t.clientX-a.left-e.clientLeft,t.clientY-a.top-e.clientTop]}}return[t.pageX,t.pageY]}},204:function(t,e,n){"use strict";var r=n(235),i=n(112),a=n(111),u=n(125),o=n(145),c=n(126);e.a=function(t,e,n){var l=null,s=Object(a.a)(!0),f=null,h=u.a,d=null;function p(a){var u,o,c,p,y,v=(a=Object(i.a)(a)).length,b=!1,m=new Array(v),g=new Array(v);for(null==f&&(d=h(y=Object(r.a)())),u=0;u<=v;++u){if(!(u<v&&s(p=a[u],u,a))===b)if(b=!b)o=u,d.areaStart(),d.lineStart();else{for(d.lineEnd(),d.lineStart(),c=u-1;c>=o;--c)d.point(m[c],g[c]);d.lineEnd(),d.areaEnd()}b&&(m[u]=+t(p,u,a),g[u]=+e(p,u,a),d.point(l?+l(p,u,a):m[u],n?+n(p,u,a):g[u]))}if(y)return d=null,y+""||null}function y(){return Object(o.a)().defined(s).curve(h).context(f)}return t="function"===typeof t?t:void 0===t?c.a:Object(a.a)(+t),e="function"===typeof e?e:void 0===e?Object(a.a)(0):Object(a.a)(+e),n="function"===typeof n?n:void 0===n?c.b:Object(a.a)(+n),p.x=function(e){return arguments.length?(t="function"===typeof e?e:Object(a.a)(+e),l=null,p):t},p.x0=function(e){return arguments.length?(t="function"===typeof e?e:Object(a.a)(+e),p):t},p.x1=function(t){return arguments.length?(l=null==t?null:"function"===typeof t?t:Object(a.a)(+t),p):l},p.y=function(t){return arguments.length?(e="function"===typeof t?t:Object(a.a)(+t),n=null,p):e},p.y0=function(t){return arguments.length?(e="function"===typeof t?t:Object(a.a)(+t),p):e},p.y1=function(t){return arguments.length?(n=null==t?null:"function"===typeof t?t:Object(a.a)(+t),p):n},p.lineX0=p.lineY0=function(){return y().x(t).y(e)},p.lineY1=function(){return y().x(t).y(n)},p.lineX1=function(){return y().x(l).y(e)},p.defined=function(t){return arguments.length?(s="function"===typeof t?t:Object(a.a)(!!t),p):s},p.curve=function(t){return arguments.length?(h=t,null!=f&&(d=h(f)),p):h},p.context=function(t){return arguments.length?(null==t?f=d=null:d=h(f=t),p):f},p}},207:function(t,e,n){"use strict";n.d(e,"b",(function(){return B})),n.d(e,"a",(function(){return Y}));var r=n(89),i=n(231),a=n(234);var u=function(t){t.preventDefault(),t.stopImmediatePropagation()},o=function(t){var e=t.document.documentElement,n=Object(a.a)(t).on("dragstart.drag",u,!0);"onselectstart"in e?n.on("selectstart.drag",u,!0):(e.__noselect=e.style.MozUserSelect,e.style.MozUserSelect="none")};function c(t,e){var n=t.document.documentElement,r=Object(a.a)(t).on("dragstart.drag",null);e&&(r.on("click.drag",u,!0),setTimeout((function(){r.on("click.drag",null)}),0)),"onselectstart"in n?r.on("selectstart.drag",null):(n.style.MozUserSelect=n.__noselect,delete n.__noselect)}var l=n(258),s=n(152),f=n(101),h=function(t){return function(){return t}};function d(t,e){var n=e.sourceEvent,r=e.target,i=e.selection,a=e.mode,u=e.dispatch;Object.defineProperties(this,{type:{value:t,enumerable:!0,configurable:!0},sourceEvent:{value:n,enumerable:!0,configurable:!0},target:{value:r,enumerable:!0,configurable:!0},selection:{value:i,enumerable:!0,configurable:!0},mode:{value:a,enumerable:!0,configurable:!0},_:{value:u}})}function p(t){t.stopImmediatePropagation()}var y=function(t){t.preventDefault(),t.stopImmediatePropagation()},v={name:"drag"},b={name:"space"},m={name:"handle"},g={name:"center"},w=Math.abs,O=Math.max,j=Math.min;function k(t){return[+t[0],+t[1]]}function x(t){return[k(t[0]),k(t[1])]}var _={name:"x",handles:["w","e"].map(T),input:function(t,e){return null==t?null:[[+t[0],e[0][1]],[+t[1],e[1][1]]]},output:function(t){return t&&[t[0][0],t[1][0]]}},A={name:"y",handles:["n","s"].map(T),input:function(t,e){return null==t?null:[[e[0][0],+t[0]],[e[1][0],+t[1]]]},output:function(t){return t&&[t[0][1],t[1][1]]}},z=(["n","w","e","s","nw","ne","sw","se"].map(T),{overlay:"crosshair",selection:"move",n:"ns-resize",e:"ew-resize",s:"ns-resize",w:"ew-resize",nw:"nwse-resize",ne:"nesw-resize",se:"nwse-resize",sw:"nesw-resize"}),M={e:"w",w:"e",nw:"ne",ne:"nw",se:"sw",sw:"se"},S={n:"s",s:"n",nw:"sw",ne:"se",se:"ne",sw:"nw"},E={overlay:1,selection:1,n:null,e:1,s:null,w:-1,nw:-1,ne:1,se:1,sw:-1},V={overlay:1,selection:1,n:-1,e:null,s:1,w:null,nw:-1,ne:-1,se:1,sw:1};function T(t){return{type:t}}function C(t){return!t.ctrlKey&&!t.button}function P(){var t=this.ownerSVGElement||this;return t.hasAttribute("viewBox")?[[(t=t.viewBox.baseVal).x,t.y],[t.x+t.width,t.y+t.height]]:[[0,0],[t.width.baseVal.value,t.height.baseVal.value]]}function F(){return navigator.maxTouchPoints||"ontouchstart"in this}function K(t){for(;!t.__brush;)if(!(t=t.parentNode))return;return t.__brush}function X(t){return t[0][0]===t[1][0]||t[0][1]===t[1][1]}function Y(t){var e=t.__brush;return e?e.dim.output(e.selection):null}function B(){return G(_)}function G(t){var e,n=P,u=C,k=F,Y=!0,B=Object(i.a)("start","brush","end"),G=6;function H(e){var n=e.property("__brush",L).selectAll(".overlay").data([T("overlay")]);n.enter().append("rect").attr("class","overlay").attr("pointer-events","all").attr("cursor",z.overlay).merge(n).each((function(){var t=K(this).extent;Object(a.a)(this).attr("x",t[0][0]).attr("y",t[0][1]).attr("width",t[1][0]-t[0][0]).attr("height",t[1][1]-t[0][1])})),e.selectAll(".selection").data([T("selection")]).enter().append("rect").attr("class","selection").attr("cursor",z.selection).attr("fill","#777").attr("fill-opacity",.3).attr("stroke","#fff").attr("shape-rendering","crispEdges");var r=e.selectAll(".handle").data(t.handles,(function(t){return t.type}));r.exit().remove(),r.enter().append("rect").attr("class",(function(t){return"handle handle--"+t.type})).attr("cursor",(function(t){return z[t.type]})),e.each(I).attr("fill","none").attr("pointer-events","all").on("mousedown.brush",D).filter(k).on("touchstart.brush",D).on("touchmove.brush",J).on("touchend.brush touchcancel.brush",R).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function I(){var t=Object(a.a)(this),e=K(this).selection;e?(t.selectAll(".selection").style("display",null).attr("x",e[0][0]).attr("y",e[0][1]).attr("width",e[1][0]-e[0][0]).attr("height",e[1][1]-e[0][1]),t.selectAll(".handle").style("display",null).attr("x",(function(t){return"e"===t.type[t.type.length-1]?e[1][0]-G/2:e[0][0]-G/2})).attr("y",(function(t){return"s"===t.type[0]?e[1][1]-G/2:e[0][1]-G/2})).attr("width",(function(t){return"n"===t.type||"s"===t.type?e[1][0]-e[0][0]+G:G})).attr("height",(function(t){return"e"===t.type||"w"===t.type?e[1][1]-e[0][1]+G:G}))):t.selectAll(".selection,.handle").style("display","none").attr("x",null).attr("y",null).attr("width",null).attr("height",null)}function N(t,e,n){var r=t.__brush.emitter;return!r||n&&r.clean?new U(t,e,n):r}function U(t,e,n){this.that=t,this.args=e,this.state=t.__brush,this.active=0,this.clean=n}function D(n){if((!e||n.touches)&&u.apply(this,arguments)){var i,l,h,d,k,x,T,C,P,F,B,G=this,H=n.target.__data__.type,U="selection"===(Y&&n.metaKey?H="overlay":H)?v:Y&&n.altKey?g:m,D=t===A?null:E[H],J=t===_?null:V[H],R=K(G),L=R.extent,q=R.selection,Q=L[0][0],W=L[0][1],Z=L[1][0],$=L[1][1],tt=0,et=0,nt=D&&J&&Y&&n.shiftKey,rt=Array.from(n.touches||[n],(function(t){var e=t.identifier;return(t=Object(s.a)(t,G)).point0=t.slice(),t.identifier=e,t}));if("overlay"===H){q&&(P=!0);var it=[rt[0],rt[1]||rt[0]];R.selection=q=[[i=t===A?Q:j(it[0][0],it[1][0]),h=t===_?W:j(it[0][1],it[1][1])],[k=t===A?Z:O(it[0][0],it[1][0]),T=t===_?$:O(it[0][1],it[1][1])]],rt.length>1&&st()}else i=q[0][0],h=q[0][1],k=q[1][0],T=q[1][1];l=i,d=h,x=k,C=T;var at=Object(a.a)(G).attr("pointer-events","none"),ut=at.selectAll(".overlay").attr("cursor",z[H]);Object(f.a)(G);var ot=N(G,arguments,!0).beforestart();if(n.touches)ot.moved=lt,ot.ended=ft;else{var ct=Object(a.a)(n.view).on("mousemove.brush",lt,!0).on("mouseup.brush",ft,!0);Y&&ct.on("keydown.brush",ht,!0).on("keyup.brush",dt,!0),o(n.view)}I.call(G),ot.start(n,U.name)}function lt(t){var e,n=Object(r.a)(t.changedTouches||[t]);try{for(n.s();!(e=n.n()).done;){var i,a=e.value,u=Object(r.a)(rt);try{for(u.s();!(i=u.n()).done;){var o=i.value;o.identifier===a.identifier&&(o.cur=Object(s.a)(a,G))}}catch(d){u.e(d)}finally{u.f()}}}catch(d){n.e(d)}finally{n.f()}if(nt&&!F&&!B&&1===rt.length){var c=rt[0];w(c.cur[0]-c[0])>w(c.cur[1]-c[1])?B=!0:F=!0}var l,f=Object(r.a)(rt);try{for(f.s();!(l=f.n()).done;){var h=l.value;h.cur&&(h[0]=h.cur[0],h[1]=h.cur[1])}}catch(d){f.e(d)}finally{f.f()}P=!0,y(t),st(t)}function st(t){var e,n=rt[0],r=n.point0;switch(tt=n[0]-r[0],et=n[1]-r[1],U){case b:case v:D&&(tt=O(Q-i,j(Z-k,tt)),l=i+tt,x=k+tt),J&&(et=O(W-h,j($-T,et)),d=h+et,C=T+et);break;case m:rt[1]?(D&&(l=O(Q,j(Z,rt[0][0])),x=O(Q,j(Z,rt[1][0])),D=1),J&&(d=O(W,j($,rt[0][1])),C=O(W,j($,rt[1][1])),J=1)):(D<0?(tt=O(Q-i,j(Z-i,tt)),l=i+tt,x=k):D>0&&(tt=O(Q-k,j(Z-k,tt)),l=i,x=k+tt),J<0?(et=O(W-h,j($-h,et)),d=h+et,C=T):J>0&&(et=O(W-T,j($-T,et)),d=h,C=T+et));break;case g:D&&(l=O(Q,j(Z,i-tt*D)),x=O(Q,j(Z,k+tt*D))),J&&(d=O(W,j($,h-et*J)),C=O(W,j($,T+et*J)))}x<l&&(D*=-1,e=i,i=k,k=e,e=l,l=x,x=e,H in M&&ut.attr("cursor",z[H=M[H]])),C<d&&(J*=-1,e=h,h=T,T=e,e=d,d=C,C=e,H in S&&ut.attr("cursor",z[H=S[H]])),R.selection&&(q=R.selection),F&&(l=q[0][0],x=q[1][0]),B&&(d=q[0][1],C=q[1][1]),q[0][0]===l&&q[0][1]===d&&q[1][0]===x&&q[1][1]===C||(R.selection=[[l,d],[x,C]],I.call(G),ot.brush(t,U.name))}function ft(t){if(p(t),t.touches){if(t.touches.length)return;e&&clearTimeout(e),e=setTimeout((function(){e=null}),500)}else c(t.view,P),ct.on("keydown.brush keyup.brush mousemove.brush mouseup.brush",null);at.attr("pointer-events","all"),ut.attr("cursor",z.overlay),R.selection&&(q=R.selection),X(q)&&(R.selection=null,I.call(G)),ot.end(t,U.name)}function ht(t){switch(t.keyCode){case 16:nt=D&&J;break;case 18:U===m&&(D&&(k=x-tt*D,i=l+tt*D),J&&(T=C-et*J,h=d+et*J),U=g,st());break;case 32:U!==m&&U!==g||(D<0?k=x-tt:D>0&&(i=l-tt),J<0?T=C-et:J>0&&(h=d-et),U=b,ut.attr("cursor",z.selection),st());break;default:return}y(t)}function dt(t){switch(t.keyCode){case 16:nt&&(F=B=nt=!1,st());break;case 18:U===g&&(D<0?k=x:D>0&&(i=l),J<0?T=C:J>0&&(h=d),U=m,st());break;case 32:U===b&&(t.altKey?(D&&(k=x-tt*D,i=l+tt*D),J&&(T=C-et*J,h=d+et*J),U=g):(D<0?k=x:D>0&&(i=l),J<0?T=C:J>0&&(h=d),U=m),ut.attr("cursor",z[H]),st());break;default:return}y(t)}}function J(t){N(this,arguments).moved(t)}function R(t){N(this,arguments).ended(t)}function L(){var e=this.__brush||{selection:null};return e.extent=x(n.apply(this,arguments)),e.dim=t,e}return H.move=function(e,n){e.tween?e.on("start.brush",(function(t){N(this,arguments).beforestart().start(t)})).on("interrupt.brush end.brush",(function(t){N(this,arguments).end(t)})).tween("brush",(function(){var e=this,r=e.__brush,i=N(e,arguments),a=r.selection,u=t.input("function"===typeof n?n.apply(this,arguments):n,r.extent),o=Object(l.a)(a,u);function c(t){r.selection=1===t&&null===u?null:o(t),I.call(e),i.brush()}return null!==a&&null!==u?c:c(1)})):e.each((function(){var e=this,r=arguments,i=e.__brush,a=t.input("function"===typeof n?n.apply(e,r):n,i.extent),u=N(e,r).beforestart();Object(f.a)(e),i.selection=null===a?null:a,I.call(e),u.start().brush().end()}))},H.clear=function(t){H.move(t,null)},U.prototype={beforestart:function(){return 1===++this.active&&(this.state.emitter=this,this.starting=!0),this},start:function(t,e){return this.starting?(this.starting=!1,this.emit("start",t,e)):this.emit("brush",t),this},brush:function(t,e){return this.emit("brush",t,e),this},end:function(t,e){return 0===--this.active&&(delete this.state.emitter,this.emit("end",t,e)),this},emit:function(e,n,r){var i=Object(a.a)(this.that).datum();B.call(e,this.that,new d(e,{sourceEvent:n,target:H,selection:t.output(this.state.selection),mode:r,dispatch:B}),i)}},H.extent=function(t){return arguments.length?(n="function"===typeof t?t:h(x(t)),H):n},H.filter=function(t){return arguments.length?(u="function"===typeof t?t:h(!!t),H):u},H.touchable=function(t){return arguments.length?(k="function"===typeof t?t:h(!!t),H):k},H.handleSize=function(t){return arguments.length?(G=+t,H):G},H.keyModifiers=function(t){return arguments.length?(Y=!!t,H):Y},H.on=function(){var t=B.on.apply(B,arguments);return t===B?H:t},H}},251:function(t,e,n){"use strict";var r=n(152),i=n(114);e.a=function(t,e){return t.target&&(t=Object(i.a)(t),void 0===e&&(e=t.currentTarget),t=t.touches||[t]),Array.from(t,(function(t){return Object(r.a)(t,e)}))}},265:function(t,e,n){"use strict";var r=n(89),i=n(112),a=n(111),u=function(t,e){if((i=t.length)>1)for(var n,r,i,a=1,u=t[e[0]],o=u.length;a<i;++a)for(r=u,u=t[e[a]],n=0;n<o;++n)u[n][1]+=u[n][0]=isNaN(r[n][1])?r[n][0]:r[n][1]},o=function(t){for(var e=t.length,n=new Array(e);--e>=0;)n[e]=e;return n};function c(t,e){return t[e]}function l(t){var e=[];return e.key=t,e}e.a=function(){var t=Object(a.a)([]),e=o,n=u,s=c;function f(a){var u,o,c,f=Array.from(t.apply(this,arguments),l),h=f.length,d=-1,p=Object(r.a)(a);try{for(p.s();!(c=p.n()).done;){var y=c.value;for(u=0,++d;u<h;++u)(f[u][d]=[0,+s(y,f[u].key,d,a)]).data=y}}catch(v){p.e(v)}finally{p.f()}for(u=0,o=Object(i.a)(e(f));u<h;++u)f[o[u]].index=u;return n(f,o),f}return f.keys=function(e){return arguments.length?(t="function"===typeof e?e:Object(a.a)(Array.from(e)),f):t},f.value=function(t){return arguments.length?(s="function"===typeof t?t:Object(a.a)(+t),f):s},f.order=function(t){return arguments.length?(e=null==t?o:"function"===typeof t?t:Object(a.a)(Array.from(t)),f):e},f.offset=function(t){return arguments.length?(n=null==t?u:t,f):n},f}}}]);
//# sourceMappingURL=20.1a305ce7.chunk.js.map