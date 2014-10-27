(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"./client/scripts/main.js":[function(require,module,exports){
'use strict';

var namespace = 'main';

var angular = require('angular');

var app = angular.module(namespace, [
    // inject:modules start

    require('./common')(namespace).name

    // inject:modules end
]);

module.exports = app;
},{"./common":"/home/codio/workspace/client/scripts/common/index.js","angular":"/home/codio/workspace/bower_components/angular/angular.min.js"}],"/home/codio/workspace/bower_components/angular-animate/angular-animate.min.js":[function(require,module,exports){
/*
 AngularJS v1.2.26
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(F,e,O){'use strict';e.module("ngAnimate",["ng"]).directive("ngAnimateChildren",function(){return function(G,s,g){g=g.ngAnimateChildren;e.isString(g)&&0===g.length?s.data("$$ngAnimateChildren",!0):G.$watch(g,function(e){s.data("$$ngAnimateChildren",!!e)})}}).factory("$$animateReflow",["$$rAF","$document",function(e,s){return function(g){return e(function(){g()})}}]).config(["$provide","$animateProvider",function(G,s){function g(e){for(var g=0;g<e.length;g++){var l=e[g];if(l.nodeType==aa)return l}}
function B(l){return e.element(g(l))}var m=e.noop,u=e.forEach,P=s.$$selectors,aa=1,l="$$ngAnimateState",V="$$ngAnimateChildren",J="ng-animate",n={running:!0};G.decorator("$animate",["$delegate","$injector","$sniffer","$rootElement","$$asyncCallback","$rootScope","$document",function(z,F,$,R,E,H,O){function K(a){var b=a.data(l)||{};b.running=!0;a.data(l,b)}function L(a){if(a){var b=[],c={};a=a.substr(1).split(".");($.transitions||$.animations)&&b.push(F.get(P[""]));for(var d=0;d<a.length;d++){var f=
a[d],e=P[f];e&&!c[f]&&(b.push(F.get(e)),c[f]=!0)}return b}}function G(a,b,c){function d(a,b){var c=a[b],d=a["before"+b.charAt(0).toUpperCase()+b.substr(1)];if(c||d)return"leave"==b&&(d=c,c=null),n.push({event:b,fn:c}),h.push({event:b,fn:d}),!0}function f(b,d,e){var f=[];u(b,function(a){a.fn&&f.push(a)});var g=0;u(f,function(b,l){var C=function(){a:{if(d){(d[l]||m)();if(++g<f.length)break a;d=null}e()}};switch(b.event){case "setClass":d.push(b.fn(a,A,k,C));break;case "addClass":d.push(b.fn(a,A||c,
C));break;case "removeClass":d.push(b.fn(a,k||c,C));break;default:d.push(b.fn(a,C))}});d&&0===d.length&&e()}var g=a[0];if(g){var l="setClass"==b,p=l||"addClass"==b||"removeClass"==b,A,k;e.isArray(c)&&(A=c[0],k=c[1],c=A+" "+k);var x=a.attr("class")+" "+c;if(M(x)){var t=m,w=[],h=[],q=m,y=[],n=[],x=(" "+x).replace(/\s+/g,".");u(L(x),function(a){!d(a,b)&&l&&(d(a,"addClass"),d(a,"removeClass"))});return{node:g,event:b,className:c,isClassBased:p,isSetClassOperation:l,before:function(a){t=a;f(h,w,function(){t=
m;a()})},after:function(a){q=a;f(n,y,function(){q=m;a()})},cancel:function(){w&&(u(w,function(a){(a||m)(!0)}),t(!0));y&&(u(y,function(a){(a||m)(!0)}),q(!0))}}}}}function r(a,b,c,d,f,g,n){function p(d){var e="$animate:"+d;q&&(q[e]&&0<q[e].length)&&E(function(){c.triggerHandler(e,{event:a,className:b})})}function A(){p("before")}function m(){p("after")}function x(){p("close");n&&E(function(){n()})}function t(){t.hasBeenRun||(t.hasBeenRun=!0,g())}function w(){if(!w.hasBeenRun){w.hasBeenRun=!0;var d=
c.data(l);d&&(h&&h.isClassBased?k(c,b):(E(function(){var d=c.data(l)||{};r==d.index&&k(c,b,a)}),c.data(l,d)));x()}}var h=G(c,a,b);if(h){b=h.className;var q=e.element._data(h.node),q=q&&q.events;d||(d=f?f.parent():c.parent());var y=c.data(l)||{};f=y.active||{};var z=y.totalActive||0,C=y.last,D;h.isClassBased&&(D=y.running||y.disabled||C&&!C.isClassBased);if(D||N(c,d))t(),A(),m(),w();else{d=!1;if(0<z){D=[];if(h.isClassBased)"setClass"==C.event?(D.push(C),k(c,b)):f[b]&&(v=f[b],v.event==a?d=!0:(D.push(v),
k(c,b)));else if("leave"==a&&f["ng-leave"])d=!0;else{for(var v in f)D.push(f[v]),k(c,v);f={};z=0}0<D.length&&u(D,function(a){a.cancel()})}!h.isClassBased||(h.isSetClassOperation||d)||(d="addClass"==a==c.hasClass(b));if(d)t(),A(),m(),x();else{if("leave"==a)c.one("$destroy",function(a){a=e.element(this);var b=a.data(l);b&&(b=b.active["ng-leave"])&&(b.cancel(),k(a,"ng-leave"))});c.addClass(J);var r=Y++;z++;f[b]=h;c.data(l,{last:h,active:f,index:r,totalActive:z});A();h.before(function(d){var e=c.data(l);
d=d||!e||!e.active[b]||h.isClassBased&&e.active[b].event!=a;t();!0===d?w():(m(),h.after(w))})}}}else t(),A(),m(),w()}function T(a){if(a=g(a))a=e.isFunction(a.getElementsByClassName)?a.getElementsByClassName(J):a.querySelectorAll("."+J),u(a,function(a){a=e.element(a);(a=a.data(l))&&a.active&&u(a.active,function(a){a.cancel()})})}function k(a,b){if(g(a)==g(R))n.disabled||(n.running=!1,n.structural=!1);else if(b){var c=a.data(l)||{},d=!0===b;!d&&(c.active&&c.active[b])&&(c.totalActive--,delete c.active[b]);
if(d||!c.totalActive)a.removeClass(J),a.removeData(l)}}function N(a,b){if(n.disabled)return!0;if(g(a)==g(R))return n.running;var c,d,f;do{if(0===b.length)break;var m=g(b)==g(R),k=m?n:b.data(l)||{};if(k.disabled)return!0;m&&(f=!0);!1!==c&&(m=b.data(V),e.isDefined(m)&&(c=m));d=d||k.running||k.last&&!k.last.isClassBased}while(b=b.parent());return!f||!c&&d}var Y=0;R.data(l,n);H.$$postDigest(function(){H.$$postDigest(function(){n.running=!1})});var Q=s.classNameFilter(),M=Q?function(a){return Q.test(a)}:
function(){return!0};return{enter:function(a,b,c,d){a=e.element(a);b=b&&e.element(b);c=c&&e.element(c);K(a);z.enter(a,b,c);H.$$postDigest(function(){a=B(a);r("enter","ng-enter",a,b,c,m,d)})},leave:function(a,b){a=e.element(a);T(a);K(a);H.$$postDigest(function(){r("leave","ng-leave",B(a),null,null,function(){z.leave(a)},b)})},move:function(a,b,c,d){a=e.element(a);b=b&&e.element(b);c=c&&e.element(c);T(a);K(a);z.move(a,b,c);H.$$postDigest(function(){a=B(a);r("move","ng-move",a,b,c,m,d)})},addClass:function(a,
b,c){a=e.element(a);a=B(a);r("addClass",b,a,null,null,function(){z.addClass(a,b)},c)},removeClass:function(a,b,c){a=e.element(a);a=B(a);r("removeClass",b,a,null,null,function(){z.removeClass(a,b)},c)},setClass:function(a,b,c,d){a=e.element(a);a=B(a);r("setClass",[b,c],a,null,null,function(){z.setClass(a,b,c)},d)},enabled:function(a,b){switch(arguments.length){case 2:if(a)k(b);else{var c=b.data(l)||{};c.disabled=!0;b.data(l,c)}break;case 1:n.disabled=!a;break;default:a=!n.disabled}return!!a}}}]);s.register("",
["$window","$sniffer","$timeout","$$animateReflow",function(l,n,s,B){function E(a,U){S&&S();W.push(U);S=B(function(){u(W,function(a){a()});W=[];S=null;v={}})}function H(a,U){var b=g(a);a=e.element(b);Z.push(a);b=Date.now()+U;b<=da||(s.cancel(ca),da=b,ca=s(function(){G(Z);Z=[]},U,!1))}function G(a){u(a,function(a){(a=a.data(q))&&(a.closeAnimationFn||m)()})}function K(a,b){var c=b?v[b]:null;if(!c){var d=0,e=0,f=0,g=0,m,k,h,q;u(a,function(a){if(a.nodeType==aa){a=l.getComputedStyle(a)||{};h=a[I+P];d=
Math.max(L(h),d);q=a[I+x];m=a[I+t];e=Math.max(L(m),e);k=a[p+t];g=Math.max(L(k),g);var b=L(a[p+P]);0<b&&(b*=parseInt(a[p+w],10)||1);f=Math.max(b,f)}});c={total:0,transitionPropertyStyle:q,transitionDurationStyle:h,transitionDelayStyle:m,transitionDelay:e,transitionDuration:d,animationDelayStyle:k,animationDelay:g,animationDuration:f};b&&(v[b]=c)}return c}function L(a){var b=0;a=e.isString(a)?a.split(/\s*,\s*/):[];u(a,function(a){b=Math.max(parseFloat(a)||0,b)});return b}function J(a){var b=a.parent(),
c=b.data(h);c||(b.data(h,++ba),c=ba);return c+"-"+g(a).getAttribute("class")}function r(a,b,c,d){var e=J(b),f=e+" "+c,l=v[f]?++v[f].total:0,k={};if(0<l){var h=c+"-stagger",k=e+" "+h;(e=!v[k])&&b.addClass(h);k=K(b,k);e&&b.removeClass(h)}d=d||function(a){return a()};b.addClass(c);var h=b.data(q)||{},n=d(function(){return K(b,f)});d=n.transitionDuration;e=n.animationDuration;if(0===d&&0===e)return b.removeClass(c),!1;b.data(q,{running:h.running||0,itemIndex:l,stagger:k,timings:n,closeAnimationFn:m});
a=0<h.running||"setClass"==a;0<d&&T(b,c,a);0<e&&(0<k.animationDelay&&0===k.animationDuration)&&(g(b).style[p]="none 0s");return!0}function T(a,b,c){"ng-enter"!=b&&("ng-move"!=b&&"ng-leave"!=b)&&c?a.addClass(y):g(a).style[I+x]="none"}function k(a,b){var c=I+x,d=g(a);d.style[c]&&0<d.style[c].length&&(d.style[c]="");a.removeClass(y)}function N(a){var b=p;a=g(a);a.style[b]&&0<a.style[b].length&&(a.style[b]="")}function Y(a,b,d,e){function k(a){b.off(x,l);b.removeClass(m);c(b,d);a=g(b);for(var e in s)a.style.removeProperty(s[e])}
function l(a){a.stopPropagation();var b=a.originalEvent||a;a=b.$manualTimeStamp||b.timeStamp||Date.now();b=parseFloat(b.elapsedTime.toFixed(V));Math.max(a-z,0)>=y&&b>=v&&e()}var h=g(b);a=b.data(q);if(-1!=h.getAttribute("class").indexOf(d)&&a){var m="";u(d.split(" "),function(a,b){m+=(0<b?" ":"")+a+"-active"});var n=a.stagger,p=a.timings,t=a.itemIndex,v=Math.max(p.transitionDuration,p.animationDuration),w=Math.max(p.transitionDelay,p.animationDelay),y=w*D,z=Date.now(),x=A+" "+X,r="",s=[];if(0<p.transitionDuration){var B=
p.transitionPropertyStyle;-1==B.indexOf("all")&&(r+=f+"transition-property: "+B+";",r+=f+"transition-duration: "+p.transitionDurationStyle+";",s.push(f+"transition-property"),s.push(f+"transition-duration"))}0<t&&(0<n.transitionDelay&&0===n.transitionDuration&&(r+=f+"transition-delay: "+Q(p.transitionDelayStyle,n.transitionDelay,t)+"; ",s.push(f+"transition-delay")),0<n.animationDelay&&0===n.animationDuration&&(r+=f+"animation-delay: "+Q(p.animationDelayStyle,n.animationDelay,t)+"; ",s.push(f+"animation-delay")));
0<s.length&&(p=h.getAttribute("style")||"",h.setAttribute("style",p+"; "+r));b.on(x,l);b.addClass(m);a.closeAnimationFn=function(){k();e()};h=(t*(Math.max(n.animationDelay,n.transitionDelay)||0)+(w+v)*C)*D;a.running++;H(b,h);return k}e()}function Q(a,b,c){var d="";u(a.split(","),function(a,e){d+=(0<e?",":"")+(c*b+parseInt(a,10))+"s"});return d}function M(a,b,d,e){if(r(a,b,d,e))return function(a){a&&c(b,d)}}function a(a,b,d,e){if(b.data(q))return Y(a,b,d,e);c(b,d);e()}function b(b,c,d,e){var f=M(b,
c,d);if(f){var g=f;E(c,function(){k(c,d);N(c);g=a(b,c,d,e)});return function(a){(g||m)(a)}}e()}function c(a,b){a.removeClass(b);var c=a.data(q);c&&(c.running&&c.running--,c.running&&0!==c.running||a.removeData(q))}function d(a,b){var c="";a=e.isArray(a)?a:a.split(/\s+/);u(a,function(a,d){a&&0<a.length&&(c+=(0<d?" ":"")+a+b)});return c}var f="",I,X,p,A;F.ontransitionend===O&&F.onwebkittransitionend!==O?(f="-webkit-",I="WebkitTransition",X="webkitTransitionEnd transitionend"):(I="transition",X="transitionend");
F.onanimationend===O&&F.onwebkitanimationend!==O?(f="-webkit-",p="WebkitAnimation",A="webkitAnimationEnd animationend"):(p="animation",A="animationend");var P="Duration",x="Property",t="Delay",w="IterationCount",h="$$ngAnimateKey",q="$$ngAnimateCSS3Data",y="ng-animate-block-transitions",V=3,C=1.5,D=1E3,v={},ba=0,W=[],S,ca=null,da=0,Z=[];return{enter:function(a,c){return b("enter",a,"ng-enter",c)},leave:function(a,c){return b("leave",a,"ng-leave",c)},move:function(a,c){return b("move",a,"ng-move",
c)},beforeSetClass:function(a,b,c,e){var f=d(c,"-remove")+" "+d(b,"-add"),g=M("setClass",a,f,function(d){var e=a.attr("class");a.removeClass(c);a.addClass(b);d=d();a.attr("class",e);return d});if(g)return E(a,function(){k(a,f);N(a);e()}),g;e()},beforeAddClass:function(a,b,c){var e=M("addClass",a,d(b,"-add"),function(c){a.addClass(b);c=c();a.removeClass(b);return c});if(e)return E(a,function(){k(a,b);N(a);c()}),e;c()},setClass:function(b,c,e,f){e=d(e,"-remove");c=d(c,"-add");return a("setClass",b,
e+" "+c,f)},addClass:function(b,c,e){return a("addClass",b,d(c,"-add"),e)},beforeRemoveClass:function(a,b,c){var e=M("removeClass",a,d(b,"-remove"),function(c){var d=a.attr("class");a.removeClass(b);c=c();a.attr("class",d);return c});if(e)return E(a,function(){k(a,b);N(a);c()}),e;c()},removeClass:function(b,c,e){return a("removeClass",b,d(c,"-remove"),e)}}}])}])})(window,window.angular);
//# sourceMappingURL=angular-animate.min.js.map

},{}],"/home/codio/workspace/bower_components/angular-sanitize/angular-sanitize.min.js":[function(require,module,exports){
/*
 AngularJS v1.2.26
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(q,g,r){'use strict';function F(a){var d=[];t(d,g.noop).chars(a);return d.join("")}function m(a){var d={};a=a.split(",");var c;for(c=0;c<a.length;c++)d[a[c]]=!0;return d}function G(a,d){function c(a,b,c,h){b=g.lowercase(b);if(u[b])for(;f.last()&&v[f.last()];)e("",f.last());w[b]&&f.last()==b&&e("",b);(h=x[b]||!!h)||f.push(b);var n={};c.replace(H,function(a,b,d,c,e){n[b]=s(d||c||e||"")});d.start&&d.start(b,n,h)}function e(a,b){var c=0,e;if(b=g.lowercase(b))for(c=f.length-1;0<=c&&f[c]!=b;c--);
if(0<=c){for(e=f.length-1;e>=c;e--)d.end&&d.end(f[e]);f.length=c}}"string"!==typeof a&&(a=null===a||"undefined"===typeof a?"":""+a);var b,l,f=[],n=a,h;for(f.last=function(){return f[f.length-1]};a;){h="";l=!0;if(f.last()&&y[f.last()])a=a.replace(RegExp("(.*)<\\s*\\/\\s*"+f.last()+"[^>]*>","i"),function(a,b){b=b.replace(I,"$1").replace(J,"$1");d.chars&&d.chars(s(b));return""}),e("",f.last());else{if(0===a.indexOf("\x3c!--"))b=a.indexOf("--",4),0<=b&&a.lastIndexOf("--\x3e",b)===b&&(d.comment&&d.comment(a.substring(4,
b)),a=a.substring(b+3),l=!1);else if(z.test(a)){if(b=a.match(z))a=a.replace(b[0],""),l=!1}else if(K.test(a)){if(b=a.match(A))a=a.substring(b[0].length),b[0].replace(A,e),l=!1}else L.test(a)&&((b=a.match(B))?(b[4]&&(a=a.substring(b[0].length),b[0].replace(B,c)),l=!1):(h+="<",a=a.substring(1)));l&&(b=a.indexOf("<"),h+=0>b?a:a.substring(0,b),a=0>b?"":a.substring(b),d.chars&&d.chars(s(h)))}if(a==n)throw M("badparse",a);n=a}e()}function s(a){if(!a)return"";var d=N.exec(a);a=d[1];var c=d[3];if(d=d[2])p.innerHTML=
d.replace(/</g,"&lt;"),d="textContent"in p?p.textContent:p.innerText;return a+d+c}function C(a){return a.replace(/&/g,"&amp;").replace(O,function(a){var c=a.charCodeAt(0);a=a.charCodeAt(1);return"&#"+(1024*(c-55296)+(a-56320)+65536)+";"}).replace(P,function(a){return"&#"+a.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}function t(a,d){var c=!1,e=g.bind(a,a.push);return{start:function(a,l,f){a=g.lowercase(a);!c&&y[a]&&(c=a);c||!0!==D[a]||(e("<"),e(a),g.forEach(l,function(c,f){var k=
g.lowercase(f),l="img"===a&&"src"===k||"background"===k;!0!==Q[k]||!0===E[k]&&!d(c,l)||(e(" "),e(f),e('="'),e(C(c)),e('"'))}),e(f?"/>":">"))},end:function(a){a=g.lowercase(a);c||!0!==D[a]||(e("</"),e(a),e(">"));a==c&&(c=!1)},chars:function(a){c||e(C(a))}}}var M=g.$$minErr("$sanitize"),B=/^<((?:[a-zA-Z])[\w:-]*)((?:\s+[\w:-]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)\s*(>?)/,A=/^<\/\s*([\w:-]+)[^>]*>/,H=/([\w:-]+)(?:\s*=\s*(?:(?:"((?:[^"])*)")|(?:'((?:[^'])*)')|([^>\s]+)))?/g,L=/^</,
K=/^<\//,I=/\x3c!--(.*?)--\x3e/g,z=/<!DOCTYPE([^>]*?)>/i,J=/<!\[CDATA\[(.*?)]]\x3e/g,O=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,P=/([^\#-~| |!])/g,x=m("area,br,col,hr,img,wbr");q=m("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr");r=m("rp,rt");var w=g.extend({},r,q),u=g.extend({},q,m("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,script,section,table,ul")),v=g.extend({},r,m("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var")),
y=m("script,style"),D=g.extend({},x,u,v,w),E=m("background,cite,href,longdesc,src,usemap"),Q=g.extend({},E,m("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,target,title,type,valign,value,vspace,width")),p=document.createElement("pre"),N=/^(\s*)([\s\S]*?)(\s*)$/;g.module("ngSanitize",[]).provider("$sanitize",
function(){this.$get=["$$sanitizeUri",function(a){return function(d){var c=[];G(d,t(c,function(c,b){return!/^unsafe/.test(a(c,b))}));return c.join("")}}]});g.module("ngSanitize").filter("linky",["$sanitize",function(a){var d=/((ftp|https?):\/\/|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"]/,c=/^mailto:/;return function(e,b){function l(a){a&&k.push(F(a))}function f(a,c){k.push("<a ");g.isDefined(b)&&(k.push('target="'),k.push(b),k.push('" '));k.push('href="');k.push(a);k.push('">');l(c);k.push("</a>")}
if(!e)return e;for(var n,h=e,k=[],m,p;n=h.match(d);)m=n[0],n[2]==n[3]&&(m="mailto:"+m),p=n.index,l(h.substr(0,p)),f(m,n[0].replace(c,"")),h=h.substring(p+n[0].length);l(h);return a(k.join(""))}}])})(window,window.angular);
//# sourceMappingURL=angular-sanitize.min.js.map

},{}],"/home/codio/workspace/bower_components/angular-ui-router/release/angular-ui-router.min.js":[function(require,module,exports){
(function (global){

; require("/home/codio/workspace/bower_components/angular/angular.min.js");
;__browserify_shim_require__=require;(function browserifyShim(module, define, require) {
/**
 * State-based routing for AngularJS
 * @version v0.2.10
 * @link http://angular-ui.github.com/
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
"undefined"!=typeof module&&"undefined"!=typeof exports&&module.exports===exports&&(module.exports="ui.router"),function(a,b,c){"use strict";function d(a,b){return I(new(I(function(){},{prototype:a})),b)}function e(a){return H(arguments,function(b){b!==a&&H(b,function(b,c){a.hasOwnProperty(c)||(a[c]=b)})}),a}function f(a,b){var c=[];for(var d in a.path){if(a.path[d]!==b.path[d])break;c.push(a.path[d])}return c}function g(a,b){if(Array.prototype.indexOf)return a.indexOf(b,Number(arguments[2])||0);var c=a.length>>>0,d=Number(arguments[2])||0;for(d=0>d?Math.ceil(d):Math.floor(d),0>d&&(d+=c);c>d;d++)if(d in a&&a[d]===b)return d;return-1}function h(a,b,c,d){var e,h=f(c,d),i={},j=[];for(var k in h)if(h[k].params&&h[k].params.length){e=h[k].params;for(var l in e)g(j,e[l])>=0||(j.push(e[l]),i[e[l]]=a[e[l]])}return I({},i,b)}function i(a,b){var c={};return H(a,function(a){var d=b[a];c[a]=null!=d?String(d):null}),c}function j(a,b,c){if(!c){c=[];for(var d in a)c.push(d)}for(var e=0;e<c.length;e++){var f=c[e];if(a[f]!=b[f])return!1}return!0}function k(a,b){var c={};return H(a,function(a){c[a]=b[a]}),c}function l(a,b){var d=1,f=2,g={},h=[],i=g,j=I(a.when(g),{$$promises:g,$$values:g});this.study=function(g){function k(a,c){if(o[c]!==f){if(n.push(c),o[c]===d)throw n.splice(0,n.indexOf(c)),new Error("Cyclic dependency: "+n.join(" -> "));if(o[c]=d,E(a))m.push(c,[function(){return b.get(a)}],h);else{var e=b.annotate(a);H(e,function(a){a!==c&&g.hasOwnProperty(a)&&k(g[a],a)}),m.push(c,a,e)}n.pop(),o[c]=f}}function l(a){return F(a)&&a.then&&a.$$promises}if(!F(g))throw new Error("'invocables' must be an object");var m=[],n=[],o={};return H(g,k),g=n=o=null,function(d,f,g){function h(){--s||(t||e(r,f.$$values),p.$$values=r,p.$$promises=!0,o.resolve(r))}function k(a){p.$$failure=a,o.reject(a)}function n(c,e,f){function i(a){l.reject(a),k(a)}function j(){if(!C(p.$$failure))try{l.resolve(b.invoke(e,g,r)),l.promise.then(function(a){r[c]=a,h()},i)}catch(a){i(a)}}var l=a.defer(),m=0;H(f,function(a){q.hasOwnProperty(a)&&!d.hasOwnProperty(a)&&(m++,q[a].then(function(b){r[a]=b,--m||j()},i))}),m||j(),q[c]=l.promise}if(l(d)&&g===c&&(g=f,f=d,d=null),d){if(!F(d))throw new Error("'locals' must be an object")}else d=i;if(f){if(!l(f))throw new Error("'parent' must be a promise returned by $resolve.resolve()")}else f=j;var o=a.defer(),p=o.promise,q=p.$$promises={},r=I({},d),s=1+m.length/3,t=!1;if(C(f.$$failure))return k(f.$$failure),p;f.$$values?(t=e(r,f.$$values),h()):(I(q,f.$$promises),f.then(h,k));for(var u=0,v=m.length;v>u;u+=3)d.hasOwnProperty(m[u])?h():n(m[u],m[u+1],m[u+2]);return p}},this.resolve=function(a,b,c,d){return this.study(a)(b,c,d)}}function m(a,b,c){this.fromConfig=function(a,b,c){return C(a.template)?this.fromString(a.template,b):C(a.templateUrl)?this.fromUrl(a.templateUrl,b):C(a.templateProvider)?this.fromProvider(a.templateProvider,b,c):null},this.fromString=function(a,b){return D(a)?a(b):a},this.fromUrl=function(c,d){return D(c)&&(c=c(d)),null==c?null:a.get(c,{cache:b}).then(function(a){return a.data})},this.fromProvider=function(a,b,d){return c.invoke(a,null,d||{params:b})}}function n(a){function b(b){if(!/^\w+(-+\w+)*$/.test(b))throw new Error("Invalid parameter name '"+b+"' in pattern '"+a+"'");if(f[b])throw new Error("Duplicate parameter name '"+b+"' in pattern '"+a+"'");f[b]=!0,j.push(b)}function c(a){return a.replace(/[\\\[\]\^$*+?.()|{}]/g,"\\$&")}var d,e=/([:*])(\w+)|\{(\w+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,f={},g="^",h=0,i=this.segments=[],j=this.params=[];this.source=a;for(var k,l,m;(d=e.exec(a))&&(k=d[2]||d[3],l=d[4]||("*"==d[1]?".*":"[^/]*"),m=a.substring(h,d.index),!(m.indexOf("?")>=0));)g+=c(m)+"("+l+")",b(k),i.push(m),h=e.lastIndex;m=a.substring(h);var n=m.indexOf("?");if(n>=0){var o=this.sourceSearch=m.substring(n);m=m.substring(0,n),this.sourcePath=a.substring(0,h+n),H(o.substring(1).split(/[&?]/),b)}else this.sourcePath=a,this.sourceSearch="";g+=c(m)+"$",i.push(m),this.regexp=new RegExp(g),this.prefix=i[0]}function o(){this.compile=function(a){return new n(a)},this.isMatcher=function(a){return F(a)&&D(a.exec)&&D(a.format)&&D(a.concat)},this.$get=function(){return this}}function p(a){function b(a){var b=/^\^((?:\\[^a-zA-Z0-9]|[^\\\[\]\^$*+?.()|{}]+)*)/.exec(a.source);return null!=b?b[1].replace(/\\(.)/g,"$1"):""}function c(a,b){return a.replace(/\$(\$|\d{1,2})/,function(a,c){return b["$"===c?0:Number(c)]})}function d(a,b,c){if(!c)return!1;var d=a.invoke(b,b,{$match:c});return C(d)?d:!0}var e=[],f=null;this.rule=function(a){if(!D(a))throw new Error("'rule' must be a function");return e.push(a),this},this.otherwise=function(a){if(E(a)){var b=a;a=function(){return b}}else if(!D(a))throw new Error("'rule' must be a function");return f=a,this},this.when=function(e,f){var g,h=E(f);if(E(e)&&(e=a.compile(e)),!h&&!D(f)&&!G(f))throw new Error("invalid 'handler' in when()");var i={matcher:function(b,c){return h&&(g=a.compile(c),c=["$match",function(a){return g.format(a)}]),I(function(a,e){return d(a,c,b.exec(e.path(),e.search()))},{prefix:E(b.prefix)?b.prefix:""})},regex:function(a,e){if(a.global||a.sticky)throw new Error("when() RegExp must not be global or sticky");return h&&(g=e,e=["$match",function(a){return c(g,a)}]),I(function(b,c){return d(b,e,a.exec(c.path()))},{prefix:b(a)})}},j={matcher:a.isMatcher(e),regex:e instanceof RegExp};for(var k in j)if(j[k])return this.rule(i[k](e,f));throw new Error("invalid 'what' in when()")},this.$get=["$location","$rootScope","$injector",function(a,b,c){function d(b){function d(b){var d=b(c,a);return d?(E(d)&&a.replace().url(d),!0):!1}if(!b||!b.defaultPrevented){var g,h=e.length;for(g=0;h>g;g++)if(d(e[g]))return;f&&d(f)}}return b.$on("$locationChangeSuccess",d),{sync:function(){d()}}}]}function q(a,e,f){function g(a){return 0===a.indexOf(".")||0===a.indexOf("^")}function l(a,b){var d=E(a),e=d?a:a.name,f=g(e);if(f){if(!b)throw new Error("No reference point given for path '"+e+"'");for(var h=e.split("."),i=0,j=h.length,k=b;j>i;i++)if(""!==h[i]||0!==i){if("^"!==h[i])break;if(!k.parent)throw new Error("Path '"+e+"' not valid for state '"+b.name+"'");k=k.parent}else k=b;h=h.slice(i).join("."),e=k.name+(k.name&&h?".":"")+h}var l=w[e];return!l||!d&&(d||l!==a&&l.self!==a)?c:l}function m(a,b){x[a]||(x[a]=[]),x[a].push(b)}function n(b){b=d(b,{self:b,resolve:b.resolve||{},toString:function(){return this.name}});var c=b.name;if(!E(c)||c.indexOf("@")>=0)throw new Error("State must have a valid name");if(w.hasOwnProperty(c))throw new Error("State '"+c+"'' is already defined");var e=-1!==c.indexOf(".")?c.substring(0,c.lastIndexOf(".")):E(b.parent)?b.parent:"";if(e&&!w[e])return m(e,b.self);for(var f in z)D(z[f])&&(b[f]=z[f](b,z.$delegates[f]));if(w[c]=b,!b[y]&&b.url&&a.when(b.url,["$match","$stateParams",function(a,c){v.$current.navigable==b&&j(a,c)||v.transitionTo(b,a,{location:!1})}]),x[c])for(var g=0;g<x[c].length;g++)n(x[c][g]);return b}function o(a){return a.indexOf("*")>-1}function p(a){var b=a.split("."),c=v.$current.name.split(".");if("**"===b[0]&&(c=c.slice(c.indexOf(b[1])),c.unshift("**")),"**"===b[b.length-1]&&(c.splice(c.indexOf(b[b.length-2])+1,Number.MAX_VALUE),c.push("**")),b.length!=c.length)return!1;for(var d=0,e=b.length;e>d;d++)"*"===b[d]&&(c[d]="*");return c.join("")===b.join("")}function q(a,b){return E(a)&&!C(b)?z[a]:D(b)&&E(a)?(z[a]&&!z.$delegates[a]&&(z.$delegates[a]=z[a]),z[a]=b,this):this}function r(a,b){return F(a)?b=a:b.name=a,n(b),this}function s(a,e,g,m,n,q,r,s,x){function z(){r.url()!==M&&(r.url(M),r.replace())}function A(a,c,d,f,h){var i=d?c:k(a.params,c),j={$stateParams:i};h.resolve=n.resolve(a.resolve,j,h.resolve,a);var l=[h.resolve.then(function(a){h.globals=a})];return f&&l.push(f),H(a.views,function(c,d){var e=c.resolve&&c.resolve!==a.resolve?c.resolve:{};e.$template=[function(){return g.load(d,{view:c,locals:j,params:i,notify:!1})||""}],l.push(n.resolve(e,j,h.resolve,a).then(function(f){if(D(c.controllerProvider)||G(c.controllerProvider)){var g=b.extend({},e,j);f.$$controller=m.invoke(c.controllerProvider,null,g)}else f.$$controller=c.controller;f.$$state=a,f.$$controllerAs=c.controllerAs,h[d]=f}))}),e.all(l).then(function(){return h})}var B=e.reject(new Error("transition superseded")),F=e.reject(new Error("transition prevented")),K=e.reject(new Error("transition aborted")),L=e.reject(new Error("transition failed")),M=r.url(),N=x.baseHref();return u.locals={resolve:null,globals:{$stateParams:{}}},v={params:{},current:u.self,$current:u,transition:null},v.reload=function(){v.transitionTo(v.current,q,{reload:!0,inherit:!1,notify:!1})},v.go=function(a,b,c){return this.transitionTo(a,b,I({inherit:!0,relative:v.$current},c))},v.transitionTo=function(b,c,f){c=c||{},f=I({location:!0,inherit:!1,relative:null,notify:!0,reload:!1,$retry:!1},f||{});var g,k=v.$current,n=v.params,o=k.path,p=l(b,f.relative);if(!C(p)){var s={to:b,toParams:c,options:f};if(g=a.$broadcast("$stateNotFound",s,k.self,n),g.defaultPrevented)return z(),K;if(g.retry){if(f.$retry)return z(),L;var w=v.transition=e.when(g.retry);return w.then(function(){return w!==v.transition?B:(s.options.$retry=!0,v.transitionTo(s.to,s.toParams,s.options))},function(){return K}),z(),w}if(b=s.to,c=s.toParams,f=s.options,p=l(b,f.relative),!C(p)){if(f.relative)throw new Error("Could not resolve '"+b+"' from state '"+f.relative+"'");throw new Error("No such state '"+b+"'")}}if(p[y])throw new Error("Cannot transition to abstract state '"+b+"'");f.inherit&&(c=h(q,c||{},v.$current,p)),b=p;var x,D,E=b.path,G=u.locals,H=[];for(x=0,D=E[x];D&&D===o[x]&&j(c,n,D.ownParams)&&!f.reload;x++,D=E[x])G=H[x]=D.locals;if(t(b,k,G,f))return b.self.reloadOnSearch!==!1&&z(),v.transition=null,e.when(v.current);if(c=i(b.params,c||{}),f.notify&&(g=a.$broadcast("$stateChangeStart",b.self,c,k.self,n),g.defaultPrevented))return z(),F;for(var N=e.when(G),O=x;O<E.length;O++,D=E[O])G=H[O]=d(G),N=A(D,c,D===b,N,G);var P=v.transition=N.then(function(){var d,e,g;if(v.transition!==P)return B;for(d=o.length-1;d>=x;d--)g=o[d],g.self.onExit&&m.invoke(g.self.onExit,g.self,g.locals.globals),g.locals=null;for(d=x;d<E.length;d++)e=E[d],e.locals=H[d],e.self.onEnter&&m.invoke(e.self.onEnter,e.self,e.locals.globals);if(v.transition!==P)return B;v.$current=b,v.current=b.self,v.params=c,J(v.params,q),v.transition=null;var h=b.navigable;return f.location&&h&&(r.url(h.url.format(h.locals.globals.$stateParams)),"replace"===f.location&&r.replace()),f.notify&&a.$broadcast("$stateChangeSuccess",b.self,c,k.self,n),M=r.url(),v.current},function(d){return v.transition!==P?B:(v.transition=null,a.$broadcast("$stateChangeError",b.self,c,k.self,n,d),z(),e.reject(d))});return P},v.is=function(a,d){var e=l(a);return C(e)?v.$current!==e?!1:C(d)&&null!==d?b.equals(q,d):!0:c},v.includes=function(a,d){if(E(a)&&o(a)){if(!p(a))return!1;a=v.$current.name}var e=l(a);if(!C(e))return c;if(!C(v.$current.includes[e.name]))return!1;var f=!0;return b.forEach(d,function(a,b){C(q[b])&&q[b]===a||(f=!1)}),f},v.href=function(a,b,c){c=I({lossy:!0,inherit:!1,absolute:!1,relative:v.$current},c||{});var d=l(a,c.relative);if(!C(d))return null;b=h(q,b||{},v.$current,d);var e=d&&c.lossy?d.navigable:d,g=e&&e.url?e.url.format(i(d.params,b||{})):null;return!f.html5Mode()&&g&&(g="#"+f.hashPrefix()+g),"/"!==N&&(f.html5Mode()?g=N.slice(0,-1)+g:c.absolute&&(g=N.slice(1)+g)),c.absolute&&g&&(g=r.protocol()+"://"+r.host()+(80==r.port()||443==r.port()?"":":"+r.port())+(!f.html5Mode()&&g?"/":"")+g),g},v.get=function(a,b){if(!C(a)){var c=[];return H(w,function(a){c.push(a.self)}),c}var d=l(a,b);return d&&d.self?d.self:null},v}function t(a,b,c,d){return a!==b||(c!==b.locals||d.reload)&&a.self.reloadOnSearch!==!1?void 0:!0}var u,v,w={},x={},y="abstract",z={parent:function(a){if(C(a.parent)&&a.parent)return l(a.parent);var b=/^(.+)\.[^.]+$/.exec(a.name);return b?l(b[1]):u},data:function(a){return a.parent&&a.parent.data&&(a.data=a.self.data=I({},a.parent.data,a.data)),a.data},url:function(a){var b=a.url;if(E(b))return"^"==b.charAt(0)?e.compile(b.substring(1)):(a.parent.navigable||u).url.concat(b);if(e.isMatcher(b)||null==b)return b;throw new Error("Invalid url '"+b+"' in state '"+a+"'")},navigable:function(a){return a.url?a:a.parent?a.parent.navigable:null},params:function(a){if(!a.params)return a.url?a.url.parameters():a.parent.params;if(!G(a.params))throw new Error("Invalid params in state '"+a+"'");if(a.url)throw new Error("Both params and url specicified in state '"+a+"'");return a.params},views:function(a){var b={};return H(C(a.views)?a.views:{"":a},function(c,d){d.indexOf("@")<0&&(d+="@"+a.parent.name),b[d]=c}),b},ownParams:function(a){if(!a.parent)return a.params;var b={};H(a.params,function(a){b[a]=!0}),H(a.parent.params,function(c){if(!b[c])throw new Error("Missing required parameter '"+c+"' in state '"+a.name+"'");b[c]=!1});var c=[];return H(b,function(a,b){a&&c.push(b)}),c},path:function(a){return a.parent?a.parent.path.concat(a):[]},includes:function(a){var b=a.parent?I({},a.parent.includes):{};return b[a.name]=!0,b},$delegates:{}};u=n({name:"",url:"^",views:null,"abstract":!0}),u.navigable=null,this.decorator=q,this.state=r,this.$get=s,s.$inject=["$rootScope","$q","$view","$injector","$resolve","$stateParams","$location","$urlRouter","$browser"]}function r(){function a(a,b){return{load:function(c,d){var e,f={template:null,controller:null,view:null,locals:null,notify:!0,async:!0,params:{}};return d=I(f,d),d.view&&(e=b.fromConfig(d.view,d.params,d.locals)),e&&d.notify&&a.$broadcast("$viewContentLoading",d),e}}}this.$get=a,a.$inject=["$rootScope","$templateFactory"]}function s(){var a=!1;this.useAnchorScroll=function(){a=!0},this.$get=["$anchorScroll","$timeout",function(b,c){return a?b:function(a){c(function(){a[0].scrollIntoView()},0,!1)}}]}function t(a,c,d){function e(){return c.has?function(a){return c.has(a)?c.get(a):null}:function(a){try{return c.get(a)}catch(b){return null}}}function f(a,b){var c=function(){return{enter:function(a,b,c){b.after(a),c()},leave:function(a,b){a.remove(),b()}}};if(i)return{enter:function(a,b,c){i.enter(a,null,b,c)},leave:function(a,b){i.leave(a,b)}};if(h){var d=h&&h(b,a);return{enter:function(a,b,c){d.enter(a,null,b),c()},leave:function(a,b){d.leave(a),b()}}}return c()}var g=e(),h=g("$animator"),i=g("$animate"),j={restrict:"ECA",terminal:!0,priority:400,transclude:"element",compile:function(c,e,g){return function(c,e,h){function i(){k&&(k.remove(),k=null),m&&(m.$destroy(),m=null),l&&(q.leave(l,function(){k=null}),k=l,l=null)}function j(f){var h=c.$new(),j=l&&l.data("$uiViewName"),k=j&&a.$current&&a.$current.locals[j];if(f||k!==n){var r=g(h,function(a){q.enter(a,e,function(){(b.isDefined(p)&&!p||c.$eval(p))&&d(a)}),i()});n=a.$current.locals[r.data("$uiViewName")],l=r,m=h,m.$emit("$viewContentLoaded"),m.$eval(o)}}var k,l,m,n,o=h.onload||"",p=h.autoscroll,q=f(h,c);c.$on("$stateChangeSuccess",function(){j(!1)}),c.$on("$viewContentLoading",function(){j(!1)}),j(!0)}}};return j}function u(a,b,c){return{restrict:"ECA",priority:-400,compile:function(d){var e=d.html();return function(d,f,g){var h=g.uiView||g.name||"",i=f.inheritedData("$uiView");h.indexOf("@")<0&&(h=h+"@"+(i?i.state.name:"")),f.data("$uiViewName",h);var j=c.$current,k=j&&j.locals[h];if(k){f.data("$uiView",{name:h,state:k.$$state}),f.html(k.$template?k.$template:e);var l=a(f.contents());if(k.$$controller){k.$scope=d;var m=b(k.$$controller,k);k.$$controllerAs&&(d[k.$$controllerAs]=m),f.data("$ngControllerController",m),f.children().data("$ngControllerController",m)}l(d)}}}}}function v(a){var b=a.replace(/\n/g," ").match(/^([^(]+?)\s*(\((.*)\))?$/);if(!b||4!==b.length)throw new Error("Invalid state ref '"+a+"'");return{state:b[1],paramExpr:b[3]||null}}function w(a){var b=a.parent().inheritedData("$uiView");return b&&b.state&&b.state.name?b.state:void 0}function x(a,c){var d=["location","inherit","reload"];return{restrict:"A",require:"?^uiSrefActive",link:function(e,f,g,h){var i=v(g.uiSref),j=null,k=w(f)||a.$current,l="FORM"===f[0].nodeName,m=l?"action":"href",n=!0,o={relative:k},p=e.$eval(g.uiSrefOpts)||{};b.forEach(d,function(a){a in p&&(o[a]=p[a])});var q=function(b){if(b&&(j=b),n){var c=a.href(i.state,j,o);return h&&h.$$setStateInfo(i.state,j),c?void(f[0][m]=c):(n=!1,!1)}};i.paramExpr&&(e.$watch(i.paramExpr,function(a){a!==j&&q(a)},!0),j=e.$eval(i.paramExpr)),q(),l||f.bind("click",function(b){var d=b.which||b.button;d>1||b.ctrlKey||b.metaKey||b.shiftKey||f.attr("target")||(c(function(){a.go(i.state,j,o)}),b.preventDefault())})}}}function y(a,b,c){return{restrict:"A",controller:["$scope","$element","$attrs",function(d,e,f){function g(){a.$current.self===i&&h()?e.addClass(l):e.removeClass(l)}function h(){return!k||j(k,b)}var i,k,l;l=c(f.uiSrefActive||"",!1)(d),this.$$setStateInfo=function(b,c){i=a.get(b,w(e)),k=c,g()},d.$on("$stateChangeSuccess",g)}]}}function z(a){return function(b){return a.is(b)}}function A(a){return function(b){return a.includes(b)}}function B(a,b){function e(a){this.locals=a.locals.globals,this.params=this.locals.$stateParams}function f(){this.locals=null,this.params=null}function g(c,g){if(null!=g.redirectTo){var h,j=g.redirectTo;if(E(j))h=j;else{if(!D(j))throw new Error("Invalid 'redirectTo' in when()");h=function(a,b){return j(a,b.path(),b.search())}}b.when(c,h)}else a.state(d(g,{parent:null,name:"route:"+encodeURIComponent(c),url:c,onEnter:e,onExit:f}));return i.push(g),this}function h(a,b,d){function e(a){return""!==a.name?a:c}var f={routes:i,params:d,current:c};return b.$on("$stateChangeStart",function(a,c,d,f){b.$broadcast("$routeChangeStart",e(c),e(f))}),b.$on("$stateChangeSuccess",function(a,c,d,g){f.current=e(c),b.$broadcast("$routeChangeSuccess",e(c),e(g)),J(d,f.params)}),b.$on("$stateChangeError",function(a,c,d,f,g,h){b.$broadcast("$routeChangeError",e(c),e(f),h)}),f}var i=[];e.$inject=["$$state"],this.when=g,this.$get=h,h.$inject=["$state","$rootScope","$routeParams"]}var C=b.isDefined,D=b.isFunction,E=b.isString,F=b.isObject,G=b.isArray,H=b.forEach,I=b.extend,J=b.copy;b.module("ui.router.util",["ng"]),b.module("ui.router.router",["ui.router.util"]),b.module("ui.router.state",["ui.router.router","ui.router.util"]),b.module("ui.router",["ui.router.state"]),b.module("ui.router.compat",["ui.router"]),l.$inject=["$q","$injector"],b.module("ui.router.util").service("$resolve",l),m.$inject=["$http","$templateCache","$injector"],b.module("ui.router.util").service("$templateFactory",m),n.prototype.concat=function(a){return new n(this.sourcePath+a+this.sourceSearch)},n.prototype.toString=function(){return this.source},n.prototype.exec=function(a,b){var c=this.regexp.exec(a);if(!c)return null;var d,e=this.params,f=e.length,g=this.segments.length-1,h={};if(g!==c.length-1)throw new Error("Unbalanced capture group in route '"+this.source+"'");for(d=0;g>d;d++)h[e[d]]=c[d+1];for(;f>d;d++)h[e[d]]=b[e[d]];return h},n.prototype.parameters=function(){return this.params},n.prototype.format=function(a){var b=this.segments,c=this.params;if(!a)return b.join("");var d,e,f,g=b.length-1,h=c.length,i=b[0];for(d=0;g>d;d++)f=a[c[d]],null!=f&&(i+=encodeURIComponent(f)),i+=b[d+1];for(;h>d;d++)f=a[c[d]],null!=f&&(i+=(e?"&":"?")+c[d]+"="+encodeURIComponent(f),e=!0);return i},b.module("ui.router.util").provider("$urlMatcherFactory",o),p.$inject=["$urlMatcherFactoryProvider"],b.module("ui.router.router").provider("$urlRouter",p),q.$inject=["$urlRouterProvider","$urlMatcherFactoryProvider","$locationProvider"],b.module("ui.router.state").value("$stateParams",{}).provider("$state",q),r.$inject=[],b.module("ui.router.state").provider("$view",r),b.module("ui.router.state").provider("$uiViewScroll",s),t.$inject=["$state","$injector","$uiViewScroll"],u.$inject=["$compile","$controller","$state"],b.module("ui.router.state").directive("uiView",t),b.module("ui.router.state").directive("uiView",u),x.$inject=["$state","$timeout"],y.$inject=["$state","$stateParams","$interpolate"],b.module("ui.router.state").directive("uiSref",x).directive("uiSrefActive",y),z.$inject=["$state"],A.$inject=["$state"],b.module("ui.router.state").filter("isState",z).filter("includedByState",A),B.$inject=["$stateProvider","$urlRouterProvider"],b.module("ui.router.compat").provider("$route",B).directive("ngView",t)}(window,window.angular);
}).call(global, module, undefined, undefined);

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"/home/codio/workspace/bower_components/angular/angular.min.js":"/home/codio/workspace/bower_components/angular/angular.min.js"}],"/home/codio/workspace/bower_components/angular/angular.min.js":[function(require,module,exports){
(function (global){
;__browserify_shim_require__=require;(function browserifyShim(module, exports, require, define, browserify_shim__define__module__export__) {
/*
 AngularJS v1.2.26
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(W,X,t){'use strict';function C(b){return function(){var a=arguments[0],c,a="["+(b?b+":":"")+a+"] http://errors.angularjs.org/1.2.26/"+(b?b+"/":"")+a;for(c=1;c<arguments.length;c++)a=a+(1==c?"?":"&")+"p"+(c-1)+"="+encodeURIComponent("function"==typeof arguments[c]?arguments[c].toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof arguments[c]?"undefined":"string"!=typeof arguments[c]?JSON.stringify(arguments[c]):arguments[c]);return Error(a)}}function Pa(b){if(null==b||Ga(b))return!1;
var a=b.length;return 1===b.nodeType&&a?!0:v(b)||J(b)||0===a||"number"===typeof a&&0<a&&a-1 in b}function r(b,a,c){var d;if(b)if(P(b))for(d in b)"prototype"==d||("length"==d||"name"==d||b.hasOwnProperty&&!b.hasOwnProperty(d))||a.call(c,b[d],d);else if(J(b)||Pa(b))for(d=0;d<b.length;d++)a.call(c,b[d],d);else if(b.forEach&&b.forEach!==r)b.forEach(a,c);else for(d in b)b.hasOwnProperty(d)&&a.call(c,b[d],d);return b}function Zb(b){var a=[],c;for(c in b)b.hasOwnProperty(c)&&a.push(c);return a.sort()}function Tc(b,
a,c){for(var d=Zb(b),e=0;e<d.length;e++)a.call(c,b[d[e]],d[e]);return d}function $b(b){return function(a,c){b(c,a)}}function hb(){for(var b=ma.length,a;b;){b--;a=ma[b].charCodeAt(0);if(57==a)return ma[b]="A",ma.join("");if(90==a)ma[b]="0";else return ma[b]=String.fromCharCode(a+1),ma.join("")}ma.unshift("0");return ma.join("")}function ac(b,a){a?b.$$hashKey=a:delete b.$$hashKey}function D(b){var a=b.$$hashKey;r(arguments,function(a){a!==b&&r(a,function(a,c){b[c]=a})});ac(b,a);return b}function U(b){return parseInt(b,
10)}function bc(b,a){return D(new (D(function(){},{prototype:b})),a)}function E(){}function Qa(b){return b}function ba(b){return function(){return b}}function x(b){return"undefined"===typeof b}function y(b){return"undefined"!==typeof b}function T(b){return null!=b&&"object"===typeof b}function v(b){return"string"===typeof b}function ib(b){return"number"===typeof b}function ta(b){return"[object Date]"===za.call(b)}function P(b){return"function"===typeof b}function jb(b){return"[object RegExp]"===za.call(b)}
function Ga(b){return b&&b.document&&b.location&&b.alert&&b.setInterval}function Uc(b){return!(!b||!(b.nodeName||b.prop&&b.attr&&b.find))}function Vc(b,a,c){var d=[];r(b,function(b,f,g){d.push(a.call(c,b,f,g))});return d}function Ra(b,a){if(b.indexOf)return b.indexOf(a);for(var c=0;c<b.length;c++)if(a===b[c])return c;return-1}function Sa(b,a){var c=Ra(b,a);0<=c&&b.splice(c,1);return a}function Ha(b,a,c,d){if(Ga(b)||b&&b.$evalAsync&&b.$watch)throw Ta("cpws");if(a){if(b===a)throw Ta("cpi");c=c||[];
d=d||[];if(T(b)){var e=Ra(c,b);if(-1!==e)return d[e];c.push(b);d.push(a)}if(J(b))for(var f=a.length=0;f<b.length;f++)e=Ha(b[f],null,c,d),T(b[f])&&(c.push(b[f]),d.push(e)),a.push(e);else{var g=a.$$hashKey;J(a)?a.length=0:r(a,function(b,c){delete a[c]});for(f in b)e=Ha(b[f],null,c,d),T(b[f])&&(c.push(b[f]),d.push(e)),a[f]=e;ac(a,g)}}else if(a=b)J(b)?a=Ha(b,[],c,d):ta(b)?a=new Date(b.getTime()):jb(b)?(a=RegExp(b.source,b.toString().match(/[^\/]*$/)[0]),a.lastIndex=b.lastIndex):T(b)&&(a=Ha(b,{},c,d));
return a}function ha(b,a){if(J(b)){a=a||[];for(var c=0;c<b.length;c++)a[c]=b[c]}else if(T(b))for(c in a=a||{},b)!kb.call(b,c)||"$"===c.charAt(0)&&"$"===c.charAt(1)||(a[c]=b[c]);return a||b}function Aa(b,a){if(b===a)return!0;if(null===b||null===a)return!1;if(b!==b&&a!==a)return!0;var c=typeof b,d;if(c==typeof a&&"object"==c)if(J(b)){if(!J(a))return!1;if((c=b.length)==a.length){for(d=0;d<c;d++)if(!Aa(b[d],a[d]))return!1;return!0}}else{if(ta(b))return ta(a)?isNaN(b.getTime())&&isNaN(a.getTime())||b.getTime()===
a.getTime():!1;if(jb(b)&&jb(a))return b.toString()==a.toString();if(b&&b.$evalAsync&&b.$watch||a&&a.$evalAsync&&a.$watch||Ga(b)||Ga(a)||J(a))return!1;c={};for(d in b)if("$"!==d.charAt(0)&&!P(b[d])){if(!Aa(b[d],a[d]))return!1;c[d]=!0}for(d in a)if(!c.hasOwnProperty(d)&&"$"!==d.charAt(0)&&a[d]!==t&&!P(a[d]))return!1;return!0}return!1}function Bb(b,a){var c=2<arguments.length?Ba.call(arguments,2):[];return!P(a)||a instanceof RegExp?a:c.length?function(){return arguments.length?a.apply(b,c.concat(Ba.call(arguments,
0))):a.apply(b,c)}:function(){return arguments.length?a.apply(b,arguments):a.call(b)}}function Wc(b,a){var c=a;"string"===typeof b&&"$"===b.charAt(0)?c=t:Ga(a)?c="$WINDOW":a&&X===a?c="$DOCUMENT":a&&(a.$evalAsync&&a.$watch)&&(c="$SCOPE");return c}function na(b,a){return"undefined"===typeof b?t:JSON.stringify(b,Wc,a?"  ":null)}function cc(b){return v(b)?JSON.parse(b):b}function Ua(b){"function"===typeof b?b=!0:b&&0!==b.length?(b=K(""+b),b=!("f"==b||"0"==b||"false"==b||"no"==b||"n"==b||"[]"==b)):b=!1;
return b}function ia(b){b=w(b).clone();try{b.empty()}catch(a){}var c=w("<div>").append(b).html();try{return 3===b[0].nodeType?K(c):c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,function(a,b){return"<"+K(b)})}catch(d){return K(c)}}function dc(b){try{return decodeURIComponent(b)}catch(a){}}function ec(b){var a={},c,d;r((b||"").split("&"),function(b){b&&(c=b.replace(/\+/g,"%20").split("="),d=dc(c[0]),y(d)&&(b=y(c[1])?dc(c[1]):!0,kb.call(a,d)?J(a[d])?a[d].push(b):a[d]=[a[d],b]:a[d]=b))});return a}function Cb(b){var a=
[];r(b,function(b,d){J(b)?r(b,function(b){a.push(Ca(d,!0)+(!0===b?"":"="+Ca(b,!0)))}):a.push(Ca(d,!0)+(!0===b?"":"="+Ca(b,!0)))});return a.length?a.join("&"):""}function lb(b){return Ca(b,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function Ca(b,a){return encodeURIComponent(b).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,a?"%20":"+")}function Xc(b,a){function c(a){a&&d.push(a)}var d=[b],e,f,g=["ng:app","ng-app","x-ng-app",
"data-ng-app"],k=/\sng[:\-]app(:\s*([\w\d_]+);?)?\s/;r(g,function(a){g[a]=!0;c(X.getElementById(a));a=a.replace(":","\\:");b.querySelectorAll&&(r(b.querySelectorAll("."+a),c),r(b.querySelectorAll("."+a+"\\:"),c),r(b.querySelectorAll("["+a+"]"),c))});r(d,function(a){if(!e){var b=k.exec(" "+a.className+" ");b?(e=a,f=(b[2]||"").replace(/\s+/g,",")):r(a.attributes,function(b){!e&&g[b.name]&&(e=a,f=b.value)})}});e&&a(e,f?[f]:[])}function fc(b,a){var c=function(){b=w(b);if(b.injector()){var c=b[0]===X?
"document":ia(b);throw Ta("btstrpd",c.replace(/</,"&lt;").replace(/>/,"&gt;"));}a=a||[];a.unshift(["$provide",function(a){a.value("$rootElement",b)}]);a.unshift("ng");c=gc(a);c.invoke(["$rootScope","$rootElement","$compile","$injector","$animate",function(a,b,c,d,e){a.$apply(function(){b.data("$injector",d);c(b)(a)})}]);return c},d=/^NG_DEFER_BOOTSTRAP!/;if(W&&!d.test(W.name))return c();W.name=W.name.replace(d,"");Va.resumeBootstrap=function(b){r(b,function(b){a.push(b)});c()}}function mb(b,a){a=
a||"_";return b.replace(Yc,function(b,d){return(d?a:"")+b.toLowerCase()})}function Db(b,a,c){if(!b)throw Ta("areq",a||"?",c||"required");return b}function Wa(b,a,c){c&&J(b)&&(b=b[b.length-1]);Db(P(b),a,"not a function, got "+(b&&"object"===typeof b?b.constructor.name||"Object":typeof b));return b}function Da(b,a){if("hasOwnProperty"===b)throw Ta("badname",a);}function hc(b,a,c){if(!a)return b;a=a.split(".");for(var d,e=b,f=a.length,g=0;g<f;g++)d=a[g],b&&(b=(e=b)[d]);return!c&&P(b)?Bb(e,b):b}function Eb(b){var a=
b[0];b=b[b.length-1];if(a===b)return w(a);var c=[a];do{a=a.nextSibling;if(!a)break;c.push(a)}while(a!==b);return w(c)}function Zc(b){var a=C("$injector"),c=C("ng");b=b.angular||(b.angular={});b.$$minErr=b.$$minErr||C;return b.module||(b.module=function(){var b={};return function(e,f,g){if("hasOwnProperty"===e)throw c("badname","module");f&&b.hasOwnProperty(e)&&(b[e]=null);return b[e]||(b[e]=function(){function b(a,d,e){return function(){c[e||"push"]([a,d,arguments]);return n}}if(!f)throw a("nomod",
e);var c=[],d=[],l=b("$injector","invoke"),n={_invokeQueue:c,_runBlocks:d,requires:f,name:e,provider:b("$provide","provider"),factory:b("$provide","factory"),service:b("$provide","service"),value:b("$provide","value"),constant:b("$provide","constant","unshift"),animation:b("$animateProvider","register"),filter:b("$filterProvider","register"),controller:b("$controllerProvider","register"),directive:b("$compileProvider","directive"),config:l,run:function(a){d.push(a);return this}};g&&l(g);return n}())}}())}
function $c(b){D(b,{bootstrap:fc,copy:Ha,extend:D,equals:Aa,element:w,forEach:r,injector:gc,noop:E,bind:Bb,toJson:na,fromJson:cc,identity:Qa,isUndefined:x,isDefined:y,isString:v,isFunction:P,isObject:T,isNumber:ib,isElement:Uc,isArray:J,version:ad,isDate:ta,lowercase:K,uppercase:Ia,callbacks:{counter:0},$$minErr:C,$$csp:Xa});Ya=Zc(W);try{Ya("ngLocale")}catch(a){Ya("ngLocale",[]).provider("$locale",bd)}Ya("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:cd});a.provider("$compile",
ic).directive({a:dd,input:jc,textarea:jc,form:ed,script:fd,select:gd,style:hd,option:id,ngBind:jd,ngBindHtml:kd,ngBindTemplate:ld,ngClass:md,ngClassEven:nd,ngClassOdd:od,ngCloak:pd,ngController:qd,ngForm:rd,ngHide:sd,ngIf:td,ngInclude:ud,ngInit:vd,ngNonBindable:wd,ngPluralize:xd,ngRepeat:yd,ngShow:zd,ngStyle:Ad,ngSwitch:Bd,ngSwitchWhen:Cd,ngSwitchDefault:Dd,ngOptions:Ed,ngTransclude:Fd,ngModel:Gd,ngList:Hd,ngChange:Id,required:kc,ngRequired:kc,ngValue:Jd}).directive({ngInclude:Kd}).directive(Fb).directive(lc);
a.provider({$anchorScroll:Ld,$animate:Md,$browser:Nd,$cacheFactory:Od,$controller:Pd,$document:Qd,$exceptionHandler:Rd,$filter:mc,$interpolate:Sd,$interval:Td,$http:Ud,$httpBackend:Vd,$location:Wd,$log:Xd,$parse:Yd,$rootScope:Zd,$q:$d,$sce:ae,$sceDelegate:be,$sniffer:ce,$templateCache:de,$timeout:ee,$window:fe,$$rAF:ge,$$asyncCallback:he})}])}function Za(b){return b.replace(ie,function(a,b,d,e){return e?d.toUpperCase():d}).replace(je,"Moz$1")}function Gb(b,a,c,d){function e(b){var e=c&&b?[this.filter(b)]:
[this],m=a,h,l,n,p,q,s;if(!d||null!=b)for(;e.length;)for(h=e.shift(),l=0,n=h.length;l<n;l++)for(p=w(h[l]),m?p.triggerHandler("$destroy"):m=!m,q=0,p=(s=p.children()).length;q<p;q++)e.push(Ea(s[q]));return f.apply(this,arguments)}var f=Ea.fn[b],f=f.$original||f;e.$original=f;Ea.fn[b]=e}function S(b){if(b instanceof S)return b;v(b)&&(b=aa(b));if(!(this instanceof S)){if(v(b)&&"<"!=b.charAt(0))throw Hb("nosel");return new S(b)}if(v(b)){var a=b;b=X;var c;if(c=ke.exec(a))b=[b.createElement(c[1])];else{var d=
b,e;b=d.createDocumentFragment();c=[];if(Ib.test(a)){d=b.appendChild(d.createElement("div"));e=(le.exec(a)||["",""])[1].toLowerCase();e=ea[e]||ea._default;d.innerHTML="<div>&#160;</div>"+e[1]+a.replace(me,"<$1></$2>")+e[2];d.removeChild(d.firstChild);for(a=e[0];a--;)d=d.lastChild;a=0;for(e=d.childNodes.length;a<e;++a)c.push(d.childNodes[a]);d=b.firstChild;d.textContent=""}else c.push(d.createTextNode(a));b.textContent="";b.innerHTML="";b=c}Jb(this,b);w(X.createDocumentFragment()).append(this)}else Jb(this,
b)}function Kb(b){return b.cloneNode(!0)}function Ja(b){Lb(b);var a=0;for(b=b.childNodes||[];a<b.length;a++)Ja(b[a])}function nc(b,a,c,d){if(y(d))throw Hb("offargs");var e=oa(b,"events");oa(b,"handle")&&(x(a)?r(e,function(a,c){$a(b,c,a);delete e[c]}):r(a.split(" "),function(a){x(c)?($a(b,a,e[a]),delete e[a]):Sa(e[a]||[],c)}))}function Lb(b,a){var c=b.ng339,d=ab[c];d&&(a?delete ab[c].data[a]:(d.handle&&(d.events.$destroy&&d.handle({},"$destroy"),nc(b)),delete ab[c],b.ng339=t))}function oa(b,a,c){var d=
b.ng339,d=ab[d||-1];if(y(c))d||(b.ng339=d=++ne,d=ab[d]={}),d[a]=c;else return d&&d[a]}function Mb(b,a,c){var d=oa(b,"data"),e=y(c),f=!e&&y(a),g=f&&!T(a);d||g||oa(b,"data",d={});if(e)d[a]=c;else if(f){if(g)return d&&d[a];D(d,a)}else return d}function Nb(b,a){return b.getAttribute?-1<(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+a+" "):!1}function nb(b,a){a&&b.setAttribute&&r(a.split(" "),function(a){b.setAttribute("class",aa((" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g,
" ").replace(" "+aa(a)+" "," ")))})}function ob(b,a){if(a&&b.setAttribute){var c=(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");r(a.split(" "),function(a){a=aa(a);-1===c.indexOf(" "+a+" ")&&(c+=a+" ")});b.setAttribute("class",aa(c))}}function Jb(b,a){if(a){a=a.nodeName||!y(a.length)||Ga(a)?[a]:a;for(var c=0;c<a.length;c++)b.push(a[c])}}function oc(b,a){return pb(b,"$"+(a||"ngController")+"Controller")}function pb(b,a,c){9==b.nodeType&&(b=b.documentElement);for(a=J(a)?a:[a];b;){for(var d=
0,e=a.length;d<e;d++)if((c=w.data(b,a[d]))!==t)return c;b=b.parentNode||11===b.nodeType&&b.host}}function pc(b){for(var a=0,c=b.childNodes;a<c.length;a++)Ja(c[a]);for(;b.firstChild;)b.removeChild(b.firstChild)}function qc(b,a){var c=qb[a.toLowerCase()];return c&&rc[b.nodeName]&&c}function oe(b,a){var c=function(c,e){c.preventDefault||(c.preventDefault=function(){c.returnValue=!1});c.stopPropagation||(c.stopPropagation=function(){c.cancelBubble=!0});c.target||(c.target=c.srcElement||X);if(x(c.defaultPrevented)){var f=
c.preventDefault;c.preventDefault=function(){c.defaultPrevented=!0;f.call(c)};c.defaultPrevented=!1}c.isDefaultPrevented=function(){return c.defaultPrevented||!1===c.returnValue};var g=ha(a[e||c.type]||[]);r(g,function(a){a.call(b,c)});8>=Q?(c.preventDefault=null,c.stopPropagation=null,c.isDefaultPrevented=null):(delete c.preventDefault,delete c.stopPropagation,delete c.isDefaultPrevented)};c.elem=b;return c}function Ka(b,a){var c=typeof b,d;"function"==c||"object"==c&&null!==b?"function"==typeof(d=
b.$$hashKey)?d=b.$$hashKey():d===t&&(d=b.$$hashKey=(a||hb)()):d=b;return c+":"+d}function bb(b,a){if(a){var c=0;this.nextUid=function(){return++c}}r(b,this.put,this)}function sc(b){var a,c;"function"===typeof b?(a=b.$inject)||(a=[],b.length&&(c=b.toString().replace(pe,""),c=c.match(qe),r(c[1].split(re),function(b){b.replace(se,function(b,c,d){a.push(d)})})),b.$inject=a):J(b)?(c=b.length-1,Wa(b[c],"fn"),a=b.slice(0,c)):Wa(b,"fn",!0);return a}function gc(b){function a(a){return function(b,c){if(T(b))r(b,
$b(a));else return a(b,c)}}function c(a,b){Da(a,"service");if(P(b)||J(b))b=n.instantiate(b);if(!b.$get)throw cb("pget",a);return l[a+k]=b}function d(a,b){return c(a,{$get:b})}function e(a){var b=[],c,d,f,k;r(a,function(a){if(!h.get(a)){h.put(a,!0);try{if(v(a))for(c=Ya(a),b=b.concat(e(c.requires)).concat(c._runBlocks),d=c._invokeQueue,f=0,k=d.length;f<k;f++){var g=d[f],m=n.get(g[0]);m[g[1]].apply(m,g[2])}else P(a)?b.push(n.invoke(a)):J(a)?b.push(n.invoke(a)):Wa(a,"module")}catch(l){throw J(a)&&(a=
a[a.length-1]),l.message&&(l.stack&&-1==l.stack.indexOf(l.message))&&(l=l.message+"\n"+l.stack),cb("modulerr",a,l.stack||l.message||l);}}});return b}function f(a,b){function c(d){if(a.hasOwnProperty(d)){if(a[d]===g)throw cb("cdep",d+" <- "+m.join(" <- "));return a[d]}try{return m.unshift(d),a[d]=g,a[d]=b(d)}catch(e){throw a[d]===g&&delete a[d],e;}finally{m.shift()}}function d(a,b,e){var f=[],k=sc(a),g,m,h;m=0;for(g=k.length;m<g;m++){h=k[m];if("string"!==typeof h)throw cb("itkn",h);f.push(e&&e.hasOwnProperty(h)?
e[h]:c(h))}J(a)&&(a=a[g]);return a.apply(b,f)}return{invoke:d,instantiate:function(a,b){var c=function(){},e;c.prototype=(J(a)?a[a.length-1]:a).prototype;c=new c;e=d(a,c,b);return T(e)||P(e)?e:c},get:c,annotate:sc,has:function(b){return l.hasOwnProperty(b+k)||a.hasOwnProperty(b)}}}var g={},k="Provider",m=[],h=new bb([],!0),l={$provide:{provider:a(c),factory:a(d),service:a(function(a,b){return d(a,["$injector",function(a){return a.instantiate(b)}])}),value:a(function(a,b){return d(a,ba(b))}),constant:a(function(a,
b){Da(a,"constant");l[a]=b;p[a]=b}),decorator:function(a,b){var c=n.get(a+k),d=c.$get;c.$get=function(){var a=q.invoke(d,c);return q.invoke(b,null,{$delegate:a})}}}},n=l.$injector=f(l,function(){throw cb("unpr",m.join(" <- "));}),p={},q=p.$injector=f(p,function(a){a=n.get(a+k);return q.invoke(a.$get,a)});r(e(b),function(a){q.invoke(a||E)});return q}function Ld(){var b=!0;this.disableAutoScrolling=function(){b=!1};this.$get=["$window","$location","$rootScope",function(a,c,d){function e(a){var b=null;
r(a,function(a){b||"a"!==K(a.nodeName)||(b=a)});return b}function f(){var b=c.hash(),d;b?(d=g.getElementById(b))?d.scrollIntoView():(d=e(g.getElementsByName(b)))?d.scrollIntoView():"top"===b&&a.scrollTo(0,0):a.scrollTo(0,0)}var g=a.document;b&&d.$watch(function(){return c.hash()},function(){d.$evalAsync(f)});return f}]}function he(){this.$get=["$$rAF","$timeout",function(b,a){return b.supported?function(a){return b(a)}:function(b){return a(b,0,!1)}}]}function te(b,a,c,d){function e(a){try{a.apply(null,
Ba.call(arguments,1))}finally{if(s--,0===s)for(;F.length;)try{F.pop()()}catch(b){c.error(b)}}}function f(a,b){(function fa(){r(u,function(a){a()});A=b(fa,a)})()}function g(){z=null;N!=k.url()&&(N=k.url(),r(ca,function(a){a(k.url())}))}var k=this,m=a[0],h=b.location,l=b.history,n=b.setTimeout,p=b.clearTimeout,q={};k.isMock=!1;var s=0,F=[];k.$$completeOutstandingRequest=e;k.$$incOutstandingRequestCount=function(){s++};k.notifyWhenNoOutstandingRequests=function(a){r(u,function(a){a()});0===s?a():F.push(a)};
var u=[],A;k.addPollFn=function(a){x(A)&&f(100,n);u.push(a);return a};var N=h.href,R=a.find("base"),z=null;k.url=function(a,c){h!==b.location&&(h=b.location);l!==b.history&&(l=b.history);if(a){if(N!=a)return N=a,d.history?c?l.replaceState(null,"",a):(l.pushState(null,"",a),R.attr("href",R.attr("href"))):(z=a,c?h.replace(a):h.href=a),k}else return z||h.href.replace(/%27/g,"'")};var ca=[],L=!1;k.onUrlChange=function(a){if(!L){if(d.history)w(b).on("popstate",g);if(d.hashchange)w(b).on("hashchange",g);
else k.addPollFn(g);L=!0}ca.push(a);return a};k.$$checkUrlChange=g;k.baseHref=function(){var a=R.attr("href");return a?a.replace(/^(https?\:)?\/\/[^\/]*/,""):""};var O={},da="",B=k.baseHref();k.cookies=function(a,b){var d,e,f,k;if(a)b===t?m.cookie=escape(a)+"=;path="+B+";expires=Thu, 01 Jan 1970 00:00:00 GMT":v(b)&&(d=(m.cookie=escape(a)+"="+escape(b)+";path="+B).length+1,4096<d&&c.warn("Cookie '"+a+"' possibly not set or overflowed because it was too large ("+d+" > 4096 bytes)!"));else{if(m.cookie!==
da)for(da=m.cookie,d=da.split("; "),O={},f=0;f<d.length;f++)e=d[f],k=e.indexOf("="),0<k&&(a=unescape(e.substring(0,k)),O[a]===t&&(O[a]=unescape(e.substring(k+1))));return O}};k.defer=function(a,b){var c;s++;c=n(function(){delete q[c];e(a)},b||0);q[c]=!0;return c};k.defer.cancel=function(a){return q[a]?(delete q[a],p(a),e(E),!0):!1}}function Nd(){this.$get=["$window","$log","$sniffer","$document",function(b,a,c,d){return new te(b,d,a,c)}]}function Od(){this.$get=function(){function b(b,d){function e(a){a!=
n&&(p?p==a&&(p=a.n):p=a,f(a.n,a.p),f(a,n),n=a,n.n=null)}function f(a,b){a!=b&&(a&&(a.p=b),b&&(b.n=a))}if(b in a)throw C("$cacheFactory")("iid",b);var g=0,k=D({},d,{id:b}),m={},h=d&&d.capacity||Number.MAX_VALUE,l={},n=null,p=null;return a[b]={put:function(a,b){if(h<Number.MAX_VALUE){var c=l[a]||(l[a]={key:a});e(c)}if(!x(b))return a in m||g++,m[a]=b,g>h&&this.remove(p.key),b},get:function(a){if(h<Number.MAX_VALUE){var b=l[a];if(!b)return;e(b)}return m[a]},remove:function(a){if(h<Number.MAX_VALUE){var b=
l[a];if(!b)return;b==n&&(n=b.p);b==p&&(p=b.n);f(b.n,b.p);delete l[a]}delete m[a];g--},removeAll:function(){m={};g=0;l={};n=p=null},destroy:function(){l=k=m=null;delete a[b]},info:function(){return D({},k,{size:g})}}}var a={};b.info=function(){var b={};r(a,function(a,e){b[e]=a.info()});return b};b.get=function(b){return a[b]};return b}}function de(){this.$get=["$cacheFactory",function(b){return b("templates")}]}function ic(b,a){var c={},d="Directive",e=/^\s*directive\:\s*([\d\w_\-]+)\s+(.*)$/,f=/(([\d\w_\-]+)(?:\:([^;]+))?;?)/,
g=/^(on[a-z]+|formaction)$/;this.directive=function m(a,e){Da(a,"directive");v(a)?(Db(e,"directiveFactory"),c.hasOwnProperty(a)||(c[a]=[],b.factory(a+d,["$injector","$exceptionHandler",function(b,d){var e=[];r(c[a],function(c,f){try{var g=b.invoke(c);P(g)?g={compile:ba(g)}:!g.compile&&g.link&&(g.compile=ba(g.link));g.priority=g.priority||0;g.index=f;g.name=g.name||a;g.require=g.require||g.controller&&g.name;g.restrict=g.restrict||"A";e.push(g)}catch(m){d(m)}});return e}])),c[a].push(e)):r(a,$b(m));
return this};this.aHrefSanitizationWhitelist=function(b){return y(b)?(a.aHrefSanitizationWhitelist(b),this):a.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=function(b){return y(b)?(a.imgSrcSanitizationWhitelist(b),this):a.imgSrcSanitizationWhitelist()};this.$get=["$injector","$interpolate","$exceptionHandler","$http","$templateCache","$parse","$controller","$rootScope","$document","$sce","$animate","$$sanitizeUri",function(a,b,l,n,p,q,s,F,u,A,N,R){function z(a,b,c,d,e){a instanceof
w||(a=w(a));r(a,function(b,c){3==b.nodeType&&b.nodeValue.match(/\S+/)&&(a[c]=w(b).wrap("<span></span>").parent()[0])});var f=L(a,b,a,c,d,e);ca(a,"ng-scope");return function(b,c,d,e){Db(b,"scope");var g=c?La.clone.call(a):a;r(d,function(a,b){g.data("$"+b+"Controller",a)});d=0;for(var m=g.length;d<m;d++){var h=g[d].nodeType;1!==h&&9!==h||g.eq(d).data("$scope",b)}c&&c(g,b);f&&f(b,g,g,e);return g}}function ca(a,b){try{a.addClass(b)}catch(c){}}function L(a,b,c,d,e,f){function g(a,c,d,e){var f,h,l,q,n,
p,s;f=c.length;var M=Array(f);for(q=0;q<f;q++)M[q]=c[q];p=q=0;for(n=m.length;q<n;p++)h=M[p],c=m[q++],f=m[q++],c?(c.scope?(l=a.$new(),w.data(h,"$scope",l)):l=a,s=c.transcludeOnThisElement?O(a,c.transclude,e):!c.templateOnThisElement&&e?e:!e&&b?O(a,b):null,c(f,l,h,d,s)):f&&f(a,h.childNodes,t,e)}for(var m=[],h,l,q,n,p=0;p<a.length;p++)h=new Ob,l=da(a[p],[],h,0===p?d:t,e),(f=l.length?H(l,a[p],h,b,c,null,[],[],f):null)&&f.scope&&ca(h.$$element,"ng-scope"),h=f&&f.terminal||!(q=a[p].childNodes)||!q.length?
null:L(q,f?(f.transcludeOnThisElement||!f.templateOnThisElement)&&f.transclude:b),m.push(f,h),n=n||f||h,f=null;return n?g:null}function O(a,b,c){return function(d,e,f){var g=!1;d||(d=a.$new(),g=d.$$transcluded=!0);e=b(d,e,f,c);if(g)e.on("$destroy",function(){d.$destroy()});return e}}function da(a,b,c,d,g){var m=c.$attr,h;switch(a.nodeType){case 1:fa(b,pa(Ma(a).toLowerCase()),"E",d,g);for(var l,q,n,p=a.attributes,s=0,F=p&&p.length;s<F;s++){var A=!1,N=!1;l=p[s];if(!Q||8<=Q||l.specified){h=l.name;q=
aa(l.value);l=pa(h);if(n=U.test(l))h=mb(l.substr(6),"-");var u=l.replace(/(Start|End)$/,"");l===u+"Start"&&(A=h,N=h.substr(0,h.length-5)+"end",h=h.substr(0,h.length-6));l=pa(h.toLowerCase());m[l]=h;if(n||!c.hasOwnProperty(l))c[l]=q,qc(a,l)&&(c[l]=!0);S(a,b,q,l);fa(b,l,"A",d,g,A,N)}}a=a.className;if(v(a)&&""!==a)for(;h=f.exec(a);)l=pa(h[2]),fa(b,l,"C",d,g)&&(c[l]=aa(h[3])),a=a.substr(h.index+h[0].length);break;case 3:K(b,a.nodeValue);break;case 8:try{if(h=e.exec(a.nodeValue))l=pa(h[1]),fa(b,l,"M",
d,g)&&(c[l]=aa(h[2]))}catch(z){}}b.sort(x);return b}function B(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw ja("uterdir",b,c);1==a.nodeType&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return w(d)}function I(a,b,c){return function(d,e,f,g,h){e=B(e[0],b,c);return a(d,e,f,g,h)}}function H(a,c,d,e,f,g,m,n,p){function F(a,b,c,d){if(a){c&&(a=I(a,c,d));a.require=G.require;a.directiveName=C;if(L===G||G.$$isolateScope)a=
tc(a,{isolateScope:!0});m.push(a)}if(b){c&&(b=I(b,c,d));b.require=G.require;b.directiveName=C;if(L===G||G.$$isolateScope)b=tc(b,{isolateScope:!0});n.push(b)}}function A(a,b,c,d){var e,f="data",g=!1;if(v(b)){for(;"^"==(e=b.charAt(0))||"?"==e;)b=b.substr(1),"^"==e&&(f="inheritedData"),g=g||"?"==e;e=null;d&&"data"===f&&(e=d[b]);e=e||c[f]("$"+b+"Controller");if(!e&&!g)throw ja("ctreq",b,a);}else J(b)&&(e=[],r(b,function(b){e.push(A(a,b,c,d))}));return e}function N(a,e,f,g,p){function F(a,b){var c;2>arguments.length&&
(b=a,a=t);K&&(c=da);return p(a,b,c)}var u,M,z,O,I,B,da={},rb;u=c===f?d:ha(d,new Ob(w(f),d.$attr));M=u.$$element;if(L){var Na=/^\s*([@=&])(\??)\s*(\w*)\s*$/;B=e.$new(!0);!H||H!==L&&H!==L.$$originalDirective?M.data("$isolateScopeNoTemplate",B):M.data("$isolateScope",B);ca(M,"ng-isolate-scope");r(L.scope,function(a,c){var d=a.match(Na)||[],f=d[3]||c,g="?"==d[2],d=d[1],m,l,n,p;B.$$isolateBindings[c]=d+f;switch(d){case "@":u.$observe(f,function(a){B[c]=a});u.$$observers[f].$$scope=e;u[f]&&(B[c]=b(u[f])(e));
break;case "=":if(g&&!u[f])break;l=q(u[f]);p=l.literal?Aa:function(a,b){return a===b||a!==a&&b!==b};n=l.assign||function(){m=B[c]=l(e);throw ja("nonassign",u[f],L.name);};m=B[c]=l(e);B.$watch(function(){var a=l(e);p(a,B[c])||(p(a,m)?n(e,a=B[c]):B[c]=a);return m=a},null,l.literal);break;case "&":l=q(u[f]);B[c]=function(a){return l(e,a)};break;default:throw ja("iscp",L.name,c,a);}})}rb=p&&F;R&&r(R,function(a){var b={$scope:a===L||a.$$isolateScope?B:e,$element:M,$attrs:u,$transclude:rb},c;I=a.controller;
"@"==I&&(I=u[a.name]);c=s(I,b);da[a.name]=c;K||M.data("$"+a.name+"Controller",c);a.controllerAs&&(b.$scope[a.controllerAs]=c)});g=0;for(z=m.length;g<z;g++)try{O=m[g],O(O.isolateScope?B:e,M,u,O.require&&A(O.directiveName,O.require,M,da),rb)}catch(G){l(G,ia(M))}g=e;L&&(L.template||null===L.templateUrl)&&(g=B);a&&a(g,f.childNodes,t,p);for(g=n.length-1;0<=g;g--)try{O=n[g],O(O.isolateScope?B:e,M,u,O.require&&A(O.directiveName,O.require,M,da),rb)}catch(y){l(y,ia(M))}}p=p||{};for(var u=-Number.MAX_VALUE,
O,R=p.controllerDirectives,L=p.newIsolateScopeDirective,H=p.templateDirective,fa=p.nonTlbTranscludeDirective,x=!1,D=!1,K=p.hasElementTranscludeDirective,Z=d.$$element=w(c),G,C,V,S=e,Q,Fa=0,qa=a.length;Fa<qa;Fa++){G=a[Fa];var U=G.$$start,Y=G.$$end;U&&(Z=B(c,U,Y));V=t;if(u>G.priority)break;if(V=G.scope)O=O||G,G.templateUrl||(db("new/isolated scope",L,G,Z),T(V)&&(L=G));C=G.name;!G.templateUrl&&G.controller&&(V=G.controller,R=R||{},db("'"+C+"' controller",R[C],G,Z),R[C]=G);if(V=G.transclude)x=!0,G.$$tlb||
(db("transclusion",fa,G,Z),fa=G),"element"==V?(K=!0,u=G.priority,V=Z,Z=d.$$element=w(X.createComment(" "+C+": "+d[C]+" ")),c=Z[0],Na(f,Ba.call(V,0),c),S=z(V,e,u,g&&g.name,{nonTlbTranscludeDirective:fa})):(V=w(Kb(c)).contents(),Z.empty(),S=z(V,e));if(G.template)if(D=!0,db("template",H,G,Z),H=G,V=P(G.template)?G.template(Z,d):G.template,V=W(V),G.replace){g=G;V=Ib.test(V)?w(aa(V)):[];c=V[0];if(1!=V.length||1!==c.nodeType)throw ja("tplrt",C,"");Na(f,Z,c);qa={$attr:{}};V=da(c,[],qa);var $=a.splice(Fa+
1,a.length-(Fa+1));L&&y(V);a=a.concat(V).concat($);E(d,qa);qa=a.length}else Z.html(V);if(G.templateUrl)D=!0,db("template",H,G,Z),H=G,G.replace&&(g=G),N=ue(a.splice(Fa,a.length-Fa),Z,d,f,x&&S,m,n,{controllerDirectives:R,newIsolateScopeDirective:L,templateDirective:H,nonTlbTranscludeDirective:fa}),qa=a.length;else if(G.compile)try{Q=G.compile(Z,d,S),P(Q)?F(null,Q,U,Y):Q&&F(Q.pre,Q.post,U,Y)}catch(ve){l(ve,ia(Z))}G.terminal&&(N.terminal=!0,u=Math.max(u,G.priority))}N.scope=O&&!0===O.scope;N.transcludeOnThisElement=
x;N.templateOnThisElement=D;N.transclude=S;p.hasElementTranscludeDirective=K;return N}function y(a){for(var b=0,c=a.length;b<c;b++)a[b]=bc(a[b],{$$isolateScope:!0})}function fa(b,e,f,g,h,q,n){if(e===h)return null;h=null;if(c.hasOwnProperty(e)){var p;e=a.get(e+d);for(var s=0,u=e.length;s<u;s++)try{p=e[s],(g===t||g>p.priority)&&-1!=p.restrict.indexOf(f)&&(q&&(p=bc(p,{$$start:q,$$end:n})),b.push(p),h=p)}catch(F){l(F)}}return h}function E(a,b){var c=b.$attr,d=a.$attr,e=a.$$element;r(a,function(d,e){"$"!=
e.charAt(0)&&(b[e]&&b[e]!==d&&(d+=("style"===e?";":" ")+b[e]),a.$set(e,d,!0,c[e]))});r(b,function(b,f){"class"==f?(ca(e,b),a["class"]=(a["class"]?a["class"]+" ":"")+b):"style"==f?(e.attr("style",e.attr("style")+";"+b),a.style=(a.style?a.style+";":"")+b):"$"==f.charAt(0)||a.hasOwnProperty(f)||(a[f]=b,d[f]=c[f])})}function ue(a,b,c,d,e,f,g,h){var m=[],l,q,s=b[0],u=a.shift(),F=D({},u,{templateUrl:null,transclude:null,replace:null,$$originalDirective:u}),N=P(u.templateUrl)?u.templateUrl(b,c):u.templateUrl;
b.empty();n.get(A.getTrustedResourceUrl(N),{cache:p}).success(function(n){var p,A;n=W(n);if(u.replace){n=Ib.test(n)?w(aa(n)):[];p=n[0];if(1!=n.length||1!==p.nodeType)throw ja("tplrt",u.name,N);n={$attr:{}};Na(d,b,p);var z=da(p,[],n);T(u.scope)&&y(z);a=z.concat(a);E(c,n)}else p=s,b.html(n);a.unshift(F);l=H(a,p,c,e,b,u,f,g,h);r(d,function(a,c){a==p&&(d[c]=b[0])});for(q=L(b[0].childNodes,e);m.length;){n=m.shift();A=m.shift();var R=m.shift(),I=m.shift(),z=b[0];if(A!==s){var B=A.className;h.hasElementTranscludeDirective&&
u.replace||(z=Kb(p));Na(R,w(A),z);ca(w(z),B)}A=l.transcludeOnThisElement?O(n,l.transclude,I):I;l(q,n,z,d,A)}m=null}).error(function(a,b,c,d){throw ja("tpload",d.url);});return function(a,b,c,d,e){a=e;m?(m.push(b),m.push(c),m.push(d),m.push(a)):(l.transcludeOnThisElement&&(a=O(b,l.transclude,e)),l(q,b,c,d,a))}}function x(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function db(a,b,c,d){if(b)throw ja("multidir",b.name,c.name,a,ia(d));}function K(a,
c){var d=b(c,!0);d&&a.push({priority:0,compile:function(a){var b=a.parent().length;b&&ca(a.parent(),"ng-binding");return function(a,c){var e=c.parent(),f=e.data("$binding")||[];f.push(d);e.data("$binding",f);b||ca(e,"ng-binding");a.$watch(d,function(a){c[0].nodeValue=a})}}})}function C(a,b){if("srcdoc"==b)return A.HTML;var c=Ma(a);if("xlinkHref"==b||"FORM"==c&&"action"==b||"IMG"!=c&&("src"==b||"ngSrc"==b))return A.RESOURCE_URL}function S(a,c,d,e){var f=b(d,!0);if(f){if("multiple"===e&&"SELECT"===
Ma(a))throw ja("selmulti",ia(a));c.push({priority:100,compile:function(){return{pre:function(c,d,m){d=m.$$observers||(m.$$observers={});if(g.test(e))throw ja("nodomevents");if(f=b(m[e],!0,C(a,e)))m[e]=f(c),(d[e]||(d[e]=[])).$$inter=!0,(m.$$observers&&m.$$observers[e].$$scope||c).$watch(f,function(a,b){"class"===e&&a!=b?m.$updateClass(a,b):m.$set(e,a)})}}}})}}function Na(a,b,c){var d=b[0],e=b.length,f=d.parentNode,g,m;if(a)for(g=0,m=a.length;g<m;g++)if(a[g]==d){a[g++]=c;m=g+e-1;for(var h=a.length;g<
h;g++,m++)m<h?a[g]=a[m]:delete a[g];a.length-=e-1;break}f&&f.replaceChild(c,d);a=X.createDocumentFragment();a.appendChild(d);c[w.expando]=d[w.expando];d=1;for(e=b.length;d<e;d++)f=b[d],w(f).remove(),a.appendChild(f),delete b[d];b[0]=c;b.length=1}function tc(a,b){return D(function(){return a.apply(null,arguments)},a,b)}var Ob=function(a,b){this.$$element=a;this.$attr=b||{}};Ob.prototype={$normalize:pa,$addClass:function(a){a&&0<a.length&&N.addClass(this.$$element,a)},$removeClass:function(a){a&&0<
a.length&&N.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=uc(a,b),d=uc(b,a);0===c.length?N.removeClass(this.$$element,d):0===d.length?N.addClass(this.$$element,c):N.setClass(this.$$element,c,d)},$set:function(a,b,c,d){var e=qc(this.$$element[0],a);e&&(this.$$element.prop(a,b),d=e);this[a]=b;d?this.$attr[a]=d:(d=this.$attr[a])||(this.$attr[a]=d=mb(a,"-"));e=Ma(this.$$element);if("A"===e&&"href"===a||"IMG"===e&&"src"===a)this[a]=b=R(b,"src"===a);!1!==c&&(null===b||b===t?this.$$element.removeAttr(d):
this.$$element.attr(d,b));(c=this.$$observers)&&r(c[a],function(a){try{a(b)}catch(c){l(c)}})},$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers={}),e=d[a]||(d[a]=[]);e.push(b);F.$evalAsync(function(){e.$$inter||b(c[a])});return b}};var qa=b.startSymbol(),Z=b.endSymbol(),W="{{"==qa||"}}"==Z?Qa:function(a){return a.replace(/\{\{/g,qa).replace(/}}/g,Z)},U=/^ngAttr[A-Z]/;return z}]}function pa(b){return Za(b.replace(we,""))}function uc(b,a){var c="",d=b.split(/\s+/),e=a.split(/\s+/),f=
0;a:for(;f<d.length;f++){for(var g=d[f],k=0;k<e.length;k++)if(g==e[k])continue a;c+=(0<c.length?" ":"")+g}return c}function Pd(){var b={},a=/^(\S+)(\s+as\s+(\w+))?$/;this.register=function(a,d){Da(a,"controller");T(a)?D(b,a):b[a]=d};this.$get=["$injector","$window",function(c,d){return function(e,f){var g,k,m;v(e)&&(g=e.match(a),k=g[1],m=g[3],e=b.hasOwnProperty(k)?b[k]:hc(f.$scope,k,!0)||hc(d,k,!0),Wa(e,k,!0));g=c.instantiate(e,f);if(m){if(!f||"object"!==typeof f.$scope)throw C("$controller")("noscp",
k||e.name,m);f.$scope[m]=g}return g}}]}function Qd(){this.$get=["$window",function(b){return w(b.document)}]}function Rd(){this.$get=["$log",function(b){return function(a,c){b.error.apply(b,arguments)}}]}function vc(b){var a={},c,d,e;if(!b)return a;r(b.split("\n"),function(b){e=b.indexOf(":");c=K(aa(b.substr(0,e)));d=aa(b.substr(e+1));c&&(a[c]=a[c]?a[c]+", "+d:d)});return a}function wc(b){var a=T(b)?b:t;return function(c){a||(a=vc(b));return c?a[K(c)]||null:a}}function xc(b,a,c){if(P(c))return c(b,
a);r(c,function(c){b=c(b,a)});return b}function Ud(){var b=/^\s*(\[|\{[^\{])/,a=/[\}\]]\s*$/,c=/^\)\]\}',?\n/,d={"Content-Type":"application/json;charset=utf-8"},e=this.defaults={transformResponse:[function(d){v(d)&&(d=d.replace(c,""),b.test(d)&&a.test(d)&&(d=cc(d)));return d}],transformRequest:[function(a){return T(a)&&"[object File]"!==za.call(a)&&"[object Blob]"!==za.call(a)?na(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},post:ha(d),put:ha(d),patch:ha(d)},xsrfCookieName:"XSRF-TOKEN",
xsrfHeaderName:"X-XSRF-TOKEN"},f=this.interceptors=[],g=this.responseInterceptors=[];this.$get=["$httpBackend","$browser","$cacheFactory","$rootScope","$q","$injector",function(a,b,c,d,n,p){function q(a){function b(a){var d=D({},a,{data:xc(a.data,a.headers,c.transformResponse)});return 200<=a.status&&300>a.status?d:n.reject(d)}var c={method:"get",transformRequest:e.transformRequest,transformResponse:e.transformResponse},d=function(a){var b=e.headers,c=D({},a.headers),d,f,b=D({},b.common,b[K(a.method)]);
a:for(d in b){a=K(d);for(f in c)if(K(f)===a)continue a;c[d]=b[d]}(function(a){var b;r(a,function(c,d){P(c)&&(b=c(),null!=b?a[d]=b:delete a[d])})})(c);return c}(a);D(c,a);c.headers=d;c.method=Ia(c.method);var f=[function(a){d=a.headers;var c=xc(a.data,wc(d),a.transformRequest);x(c)&&r(d,function(a,b){"content-type"===K(b)&&delete d[b]});x(a.withCredentials)&&!x(e.withCredentials)&&(a.withCredentials=e.withCredentials);return s(a,c,d).then(b,b)},t],g=n.when(c);for(r(A,function(a){(a.request||a.requestError)&&
f.unshift(a.request,a.requestError);(a.response||a.responseError)&&f.push(a.response,a.responseError)});f.length;){a=f.shift();var m=f.shift(),g=g.then(a,m)}g.success=function(a){g.then(function(b){a(b.data,b.status,b.headers,c)});return g};g.error=function(a){g.then(null,function(b){a(b.data,b.status,b.headers,c)});return g};return g}function s(c,f,g){function h(a,b,c,e){I&&(200<=a&&300>a?I.put(w,[a,b,vc(c),e]):I.remove(w));p(b,a,c,e);d.$$phase||d.$apply()}function p(a,b,d,e){b=Math.max(b,0);(200<=
b&&300>b?A.resolve:A.reject)({data:a,status:b,headers:wc(d),config:c,statusText:e})}function s(){var a=Ra(q.pendingRequests,c);-1!==a&&q.pendingRequests.splice(a,1)}var A=n.defer(),r=A.promise,I,H,w=F(c.url,c.params);q.pendingRequests.push(c);r.then(s,s);!c.cache&&!e.cache||(!1===c.cache||"GET"!==c.method&&"JSONP"!==c.method)||(I=T(c.cache)?c.cache:T(e.cache)?e.cache:u);if(I)if(H=I.get(w),y(H)){if(H&&P(H.then))return H.then(s,s),H;J(H)?p(H[1],H[0],ha(H[2]),H[3]):p(H,200,{},"OK")}else I.put(w,r);x(H)&&
((H=Pb(c.url)?b.cookies()[c.xsrfCookieName||e.xsrfCookieName]:t)&&(g[c.xsrfHeaderName||e.xsrfHeaderName]=H),a(c.method,w,f,h,g,c.timeout,c.withCredentials,c.responseType));return r}function F(a,b){if(!b)return a;var c=[];Tc(b,function(a,b){null===a||x(a)||(J(a)||(a=[a]),r(a,function(a){T(a)&&(a=ta(a)?a.toISOString():na(a));c.push(Ca(b)+"="+Ca(a))}))});0<c.length&&(a+=(-1==a.indexOf("?")?"?":"&")+c.join("&"));return a}var u=c("$http"),A=[];r(f,function(a){A.unshift(v(a)?p.get(a):p.invoke(a))});r(g,
function(a,b){var c=v(a)?p.get(a):p.invoke(a);A.splice(b,0,{response:function(a){return c(n.when(a))},responseError:function(a){return c(n.reject(a))}})});q.pendingRequests=[];(function(a){r(arguments,function(a){q[a]=function(b,c){return q(D(c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){r(arguments,function(a){q[a]=function(b,c,d){return q(D(d||{},{method:a,url:b,data:c}))}})})("post","put");q.defaults=e;return q}]}function xe(b){if(8>=Q&&(!b.match(/^(get|post|head|put|delete|options)$/i)||
!W.XMLHttpRequest))return new W.ActiveXObject("Microsoft.XMLHTTP");if(W.XMLHttpRequest)return new W.XMLHttpRequest;throw C("$httpBackend")("noxhr");}function Vd(){this.$get=["$browser","$window","$document",function(b,a,c){return ye(b,xe,b.defer,a.angular.callbacks,c[0])}]}function ye(b,a,c,d,e){function f(a,b,c){var f=e.createElement("script"),g=null;f.type="text/javascript";f.src=a;f.async=!0;g=function(a){$a(f,"load",g);$a(f,"error",g);e.body.removeChild(f);f=null;var k=-1,s="unknown";a&&("load"!==
a.type||d[b].called||(a={type:"error"}),s=a.type,k="error"===a.type?404:200);c&&c(k,s)};sb(f,"load",g);sb(f,"error",g);8>=Q&&(f.onreadystatechange=function(){v(f.readyState)&&/loaded|complete/.test(f.readyState)&&(f.onreadystatechange=null,g({type:"load"}))});e.body.appendChild(f);return g}var g=-1;return function(e,m,h,l,n,p,q,s){function F(){A=g;R&&R();z&&z.abort()}function u(a,d,e,f,g){L&&c.cancel(L);R=z=null;0===d&&(d=e?200:"file"==ua(m).protocol?404:0);a(1223===d?204:d,e,f,g||"");b.$$completeOutstandingRequest(E)}
var A;b.$$incOutstandingRequestCount();m=m||b.url();if("jsonp"==K(e)){var N="_"+(d.counter++).toString(36);d[N]=function(a){d[N].data=a;d[N].called=!0};var R=f(m.replace("JSON_CALLBACK","angular.callbacks."+N),N,function(a,b){u(l,a,d[N].data,"",b);d[N]=E})}else{var z=a(e);z.open(e,m,!0);r(n,function(a,b){y(a)&&z.setRequestHeader(b,a)});z.onreadystatechange=function(){if(z&&4==z.readyState){var a=null,b=null,c="";A!==g&&(a=z.getAllResponseHeaders(),b="response"in z?z.response:z.responseText);A===g&&
10>Q||(c=z.statusText);u(l,A||z.status,b,a,c)}};q&&(z.withCredentials=!0);if(s)try{z.responseType=s}catch(ca){if("json"!==s)throw ca;}z.send(h||null)}if(0<p)var L=c(F,p);else p&&P(p.then)&&p.then(F)}}function Sd(){var b="{{",a="}}";this.startSymbol=function(a){return a?(b=a,this):b};this.endSymbol=function(b){return b?(a=b,this):a};this.$get=["$parse","$exceptionHandler","$sce",function(c,d,e){function f(f,h,l){for(var n,p,q=0,s=[],F=f.length,u=!1,A=[];q<F;)-1!=(n=f.indexOf(b,q))&&-1!=(p=f.indexOf(a,
n+g))?(q!=n&&s.push(f.substring(q,n)),s.push(q=c(u=f.substring(n+g,p))),q.exp=u,q=p+k,u=!0):(q!=F&&s.push(f.substring(q)),q=F);(F=s.length)||(s.push(""),F=1);if(l&&1<s.length)throw yc("noconcat",f);if(!h||u)return A.length=F,q=function(a){try{for(var b=0,c=F,g;b<c;b++){if("function"==typeof(g=s[b]))if(g=g(a),g=l?e.getTrusted(l,g):e.valueOf(g),null==g)g="";else switch(typeof g){case "string":break;case "number":g=""+g;break;default:g=na(g)}A[b]=g}return A.join("")}catch(k){a=yc("interr",f,k.toString()),
d(a)}},q.exp=f,q.parts=s,q}var g=b.length,k=a.length;f.startSymbol=function(){return b};f.endSymbol=function(){return a};return f}]}function Td(){this.$get=["$rootScope","$window","$q",function(b,a,c){function d(d,g,k,m){var h=a.setInterval,l=a.clearInterval,n=c.defer(),p=n.promise,q=0,s=y(m)&&!m;k=y(k)?k:0;p.then(null,null,d);p.$$intervalId=h(function(){n.notify(q++);0<k&&q>=k&&(n.resolve(q),l(p.$$intervalId),delete e[p.$$intervalId]);s||b.$apply()},g);e[p.$$intervalId]=n;return p}var e={};d.cancel=
function(b){return b&&b.$$intervalId in e?(e[b.$$intervalId].reject("canceled"),a.clearInterval(b.$$intervalId),delete e[b.$$intervalId],!0):!1};return d}]}function bd(){this.$get=function(){return{id:"en-us",NUMBER_FORMATS:{DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{minInt:1,minFrac:0,maxFrac:3,posPre:"",posSuf:"",negPre:"-",negSuf:"",gSize:3,lgSize:3},{minInt:1,minFrac:2,maxFrac:2,posPre:"\u00a4",posSuf:"",negPre:"(\u00a4",negSuf:")",gSize:3,lgSize:3}],CURRENCY_SYM:"$"},DATETIME_FORMATS:{MONTH:"January February March April May June July August September October November December".split(" "),
SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),AMPMS:["AM","PM"],medium:"MMM d, y h:mm:ss a","short":"M/d/yy h:mm a",fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",mediumDate:"MMM d, y",shortDate:"M/d/yy",mediumTime:"h:mm:ss a",shortTime:"h:mm a"},pluralCat:function(b){return 1===b?"one":"other"}}}}function Qb(b){b=b.split("/");for(var a=b.length;a--;)b[a]=
lb(b[a]);return b.join("/")}function zc(b,a,c){b=ua(b,c);a.$$protocol=b.protocol;a.$$host=b.hostname;a.$$port=U(b.port)||ze[b.protocol]||null}function Ac(b,a,c){var d="/"!==b.charAt(0);d&&(b="/"+b);b=ua(b,c);a.$$path=decodeURIComponent(d&&"/"===b.pathname.charAt(0)?b.pathname.substring(1):b.pathname);a.$$search=ec(b.search);a.$$hash=decodeURIComponent(b.hash);a.$$path&&"/"!=a.$$path.charAt(0)&&(a.$$path="/"+a.$$path)}function ra(b,a){if(0===a.indexOf(b))return a.substr(b.length)}function eb(b){var a=
b.indexOf("#");return-1==a?b:b.substr(0,a)}function Rb(b){return b.substr(0,eb(b).lastIndexOf("/")+1)}function Bc(b,a){this.$$html5=!0;a=a||"";var c=Rb(b);zc(b,this,b);this.$$parse=function(a){var e=ra(c,a);if(!v(e))throw Sb("ipthprfx",a,c);Ac(e,this,b);this.$$path||(this.$$path="/");this.$$compose()};this.$$compose=function(){var a=Cb(this.$$search),b=this.$$hash?"#"+lb(this.$$hash):"";this.$$url=Qb(this.$$path)+(a?"?"+a:"")+b;this.$$absUrl=c+this.$$url.substr(1)};this.$$rewrite=function(d){var e;
if((e=ra(b,d))!==t)return d=e,(e=ra(a,e))!==t?c+(ra("/",e)||e):b+d;if((e=ra(c,d))!==t)return c+e;if(c==d+"/")return c}}function Tb(b,a){var c=Rb(b);zc(b,this,b);this.$$parse=function(d){var e=ra(b,d)||ra(c,d),e="#"==e.charAt(0)?ra(a,e):this.$$html5?e:"";if(!v(e))throw Sb("ihshprfx",d,a);Ac(e,this,b);d=this.$$path;var f=/^\/[A-Z]:(\/.*)/;0===e.indexOf(b)&&(e=e.replace(b,""));f.exec(e)||(d=(e=f.exec(d))?e[1]:d);this.$$path=d;this.$$compose()};this.$$compose=function(){var c=Cb(this.$$search),e=this.$$hash?
"#"+lb(this.$$hash):"";this.$$url=Qb(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=b+(this.$$url?a+this.$$url:"")};this.$$rewrite=function(a){if(eb(b)==eb(a))return a}}function Ub(b,a){this.$$html5=!0;Tb.apply(this,arguments);var c=Rb(b);this.$$rewrite=function(d){var e;if(b==eb(d))return d;if(e=ra(c,d))return b+a+e;if(c===d+"/")return c};this.$$compose=function(){var c=Cb(this.$$search),e=this.$$hash?"#"+lb(this.$$hash):"";this.$$url=Qb(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=b+a+this.$$url}}function tb(b){return function(){return this[b]}}
function Cc(b,a){return function(c){if(x(c))return this[b];this[b]=a(c);this.$$compose();return this}}function Wd(){var b="",a=!1;this.hashPrefix=function(a){return y(a)?(b=a,this):b};this.html5Mode=function(b){return y(b)?(a=b,this):a};this.$get=["$rootScope","$browser","$sniffer","$rootElement",function(c,d,e,f){function g(a){c.$broadcast("$locationChangeSuccess",k.absUrl(),a)}var k,m,h=d.baseHref(),l=d.url(),n;a?(n=l.substring(0,l.indexOf("/",l.indexOf("//")+2))+(h||"/"),m=e.history?Bc:Ub):(n=
eb(l),m=Tb);k=new m(n,"#"+b);k.$$parse(k.$$rewrite(l));var p=/^\s*(javascript|mailto):/i;f.on("click",function(a){if(!a.ctrlKey&&!a.metaKey&&2!=a.which){for(var e=w(a.target);"a"!==K(e[0].nodeName);)if(e[0]===f[0]||!(e=e.parent())[0])return;var g=e.prop("href");T(g)&&"[object SVGAnimatedString]"===g.toString()&&(g=ua(g.animVal).href);if(!p.test(g)){if(m===Ub){var h=e.attr("href")||e.attr("xlink:href");if(h&&0>h.indexOf("://"))if(g="#"+b,"/"==h[0])g=n+g+h;else if("#"==h[0])g=n+g+(k.path()||"/")+h;
else{var l=k.path().split("/"),h=h.split("/");2!==l.length||l[1]||(l.length=1);for(var q=0;q<h.length;q++)"."!=h[q]&&(".."==h[q]?l.pop():h[q].length&&l.push(h[q]));g=n+g+l.join("/")}}l=k.$$rewrite(g);g&&(!e.attr("target")&&l&&!a.isDefaultPrevented())&&(a.preventDefault(),l!=d.url()&&(k.$$parse(l),c.$apply(),W.angular["ff-684208-preventDefault"]=!0))}}});k.absUrl()!=l&&d.url(k.absUrl(),!0);d.onUrlChange(function(a){k.absUrl()!=a&&(c.$evalAsync(function(){var b=k.absUrl();k.$$parse(a);c.$broadcast("$locationChangeStart",
a,b).defaultPrevented?(k.$$parse(b),d.url(b)):g(b)}),c.$$phase||c.$digest())});var q=0;c.$watch(function(){var a=d.url(),b=k.$$replace;q&&a==k.absUrl()||(q++,c.$evalAsync(function(){c.$broadcast("$locationChangeStart",k.absUrl(),a).defaultPrevented?k.$$parse(a):(d.url(k.absUrl(),b),g(a))}));k.$$replace=!1;return q});return k}]}function Xd(){var b=!0,a=this;this.debugEnabled=function(a){return y(a)?(b=a,this):b};this.$get=["$window",function(c){function d(a){a instanceof Error&&(a.stack?a=a.message&&
-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=c.console||{},e=b[a]||b.log||E;a=!1;try{a=!!e.apply}catch(m){}return a?function(){var a=[];r(arguments,function(b){a.push(d(b))});return e.apply(b,a)}:function(a,b){e(a,null==b?"":b)}}return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");return function(){b&&c.apply(a,arguments)}}()}}]}function ka(b,
a){if("__defineGetter__"===b||"__defineSetter__"===b||"__lookupGetter__"===b||"__lookupSetter__"===b||"__proto__"===b)throw la("isecfld",a);return b}function va(b,a){if(b){if(b.constructor===b)throw la("isecfn",a);if(b.document&&b.location&&b.alert&&b.setInterval)throw la("isecwindow",a);if(b.children&&(b.nodeName||b.prop&&b.attr&&b.find))throw la("isecdom",a);if(b===Object)throw la("isecobj",a);}return b}function ub(b,a,c,d,e){va(b,d);e=e||{};a=a.split(".");for(var f,g=0;1<a.length;g++){f=ka(a.shift(),
d);var k=va(b[f],d);k||(k={},b[f]=k);b=k;b.then&&e.unwrapPromises&&(wa(d),"$$v"in b||function(a){a.then(function(b){a.$$v=b})}(b),b.$$v===t&&(b.$$v={}),b=b.$$v)}f=ka(a.shift(),d);va(b[f],d);return b[f]=c}function Dc(b,a,c,d,e,f,g){ka(b,f);ka(a,f);ka(c,f);ka(d,f);ka(e,f);return g.unwrapPromises?function(g,m){var h=m&&m.hasOwnProperty(b)?m:g,l;if(null==h)return h;(h=h[b])&&h.then&&(wa(f),"$$v"in h||(l=h,l.$$v=t,l.then(function(a){l.$$v=a})),h=h.$$v);if(!a)return h;if(null==h)return t;(h=h[a])&&h.then&&
(wa(f),"$$v"in h||(l=h,l.$$v=t,l.then(function(a){l.$$v=a})),h=h.$$v);if(!c)return h;if(null==h)return t;(h=h[c])&&h.then&&(wa(f),"$$v"in h||(l=h,l.$$v=t,l.then(function(a){l.$$v=a})),h=h.$$v);if(!d)return h;if(null==h)return t;(h=h[d])&&h.then&&(wa(f),"$$v"in h||(l=h,l.$$v=t,l.then(function(a){l.$$v=a})),h=h.$$v);if(!e)return h;if(null==h)return t;(h=h[e])&&h.then&&(wa(f),"$$v"in h||(l=h,l.$$v=t,l.then(function(a){l.$$v=a})),h=h.$$v);return h}:function(f,g){var h=g&&g.hasOwnProperty(b)?g:f;if(null==
h)return h;h=h[b];if(!a)return h;if(null==h)return t;h=h[a];if(!c)return h;if(null==h)return t;h=h[c];if(!d)return h;if(null==h)return t;h=h[d];return e?null==h?t:h=h[e]:h}}function Ec(b,a,c){if(Vb.hasOwnProperty(b))return Vb[b];var d=b.split("."),e=d.length,f;if(a.csp)f=6>e?Dc(d[0],d[1],d[2],d[3],d[4],c,a):function(b,f){var g=0,k;do k=Dc(d[g++],d[g++],d[g++],d[g++],d[g++],c,a)(b,f),f=t,b=k;while(g<e);return k};else{var g="var p;\n";r(d,function(b,d){ka(b,c);g+="if(s == null) return undefined;\ns="+
(d?"s":'((k&&k.hasOwnProperty("'+b+'"))?k:s)')+'["'+b+'"];\n'+(a.unwrapPromises?'if (s && s.then) {\n pw("'+c.replace(/(["\r\n])/g,"\\$1")+'");\n if (!("$$v" in s)) {\n p=s;\n p.$$v = undefined;\n p.then(function(v) {p.$$v=v;});\n}\n s=s.$$v\n}\n':"")});var g=g+"return s;",k=new Function("s","k","pw",g);k.toString=ba(g);f=a.unwrapPromises?function(a,b){return k(a,b,wa)}:k}"hasOwnProperty"!==b&&(Vb[b]=f);return f}function Yd(){var b={},a={csp:!1,unwrapPromises:!1,logPromiseWarnings:!0};this.unwrapPromises=
function(b){return y(b)?(a.unwrapPromises=!!b,this):a.unwrapPromises};this.logPromiseWarnings=function(b){return y(b)?(a.logPromiseWarnings=b,this):a.logPromiseWarnings};this.$get=["$filter","$sniffer","$log",function(c,d,e){a.csp=d.csp;wa=function(b){a.logPromiseWarnings&&!Fc.hasOwnProperty(b)&&(Fc[b]=!0,e.warn("[$parse] Promise found in the expression `"+b+"`. Automatic unwrapping of promises in Angular expressions is deprecated."))};return function(d){var e;switch(typeof d){case "string":if(b.hasOwnProperty(d))return b[d];
e=new Wb(a);e=(new fb(e,c,a)).parse(d);"hasOwnProperty"!==d&&(b[d]=e);return e;case "function":return d;default:return E}}}]}function $d(){this.$get=["$rootScope","$exceptionHandler",function(b,a){return Ae(function(a){b.$evalAsync(a)},a)}]}function Ae(b,a){function c(a){return a}function d(a){return g(a)}var e=function(){var g=[],h,l;return l={resolve:function(a){if(g){var c=g;g=t;h=f(a);c.length&&b(function(){for(var a,b=0,d=c.length;b<d;b++)a=c[b],h.then(a[0],a[1],a[2])})}},reject:function(a){l.resolve(k(a))},
notify:function(a){if(g){var c=g;g.length&&b(function(){for(var b,d=0,e=c.length;d<e;d++)b=c[d],b[2](a)})}},promise:{then:function(b,f,k){var l=e(),F=function(d){try{l.resolve((P(b)?b:c)(d))}catch(e){l.reject(e),a(e)}},u=function(b){try{l.resolve((P(f)?f:d)(b))}catch(c){l.reject(c),a(c)}},A=function(b){try{l.notify((P(k)?k:c)(b))}catch(d){a(d)}};g?g.push([F,u,A]):h.then(F,u,A);return l.promise},"catch":function(a){return this.then(null,a)},"finally":function(a){function b(a,c){var d=e();c?d.resolve(a):
d.reject(a);return d.promise}function d(e,f){var g=null;try{g=(a||c)()}catch(k){return b(k,!1)}return g&&P(g.then)?g.then(function(){return b(e,f)},function(a){return b(a,!1)}):b(e,f)}return this.then(function(a){return d(a,!0)},function(a){return d(a,!1)})}}}},f=function(a){return a&&P(a.then)?a:{then:function(c){var d=e();b(function(){d.resolve(c(a))});return d.promise}}},g=function(a){var b=e();b.reject(a);return b.promise},k=function(c){return{then:function(f,g){var k=e();b(function(){try{k.resolve((P(g)?
g:d)(c))}catch(b){k.reject(b),a(b)}});return k.promise}}};return{defer:e,reject:g,when:function(k,h,l,n){var p=e(),q,s=function(b){try{return(P(h)?h:c)(b)}catch(d){return a(d),g(d)}},F=function(b){try{return(P(l)?l:d)(b)}catch(c){return a(c),g(c)}},u=function(b){try{return(P(n)?n:c)(b)}catch(d){a(d)}};b(function(){f(k).then(function(a){q||(q=!0,p.resolve(f(a).then(s,F,u)))},function(a){q||(q=!0,p.resolve(F(a)))},function(a){q||p.notify(u(a))})});return p.promise},all:function(a){var b=e(),c=0,d=J(a)?
[]:{};r(a,function(a,e){c++;f(a).then(function(a){d.hasOwnProperty(e)||(d[e]=a,--c||b.resolve(d))},function(a){d.hasOwnProperty(e)||b.reject(a)})});0===c&&b.resolve(d);return b.promise}}}function ge(){this.$get=["$window","$timeout",function(b,a){var c=b.requestAnimationFrame||b.webkitRequestAnimationFrame||b.mozRequestAnimationFrame,d=b.cancelAnimationFrame||b.webkitCancelAnimationFrame||b.mozCancelAnimationFrame||b.webkitCancelRequestAnimationFrame,e=!!c,f=e?function(a){var b=c(a);return function(){d(b)}}:
function(b){var c=a(b,16.66,!1);return function(){a.cancel(c)}};f.supported=e;return f}]}function Zd(){var b=10,a=C("$rootScope"),c=null;this.digestTtl=function(a){arguments.length&&(b=a);return b};this.$get=["$injector","$exceptionHandler","$parse","$browser",function(d,e,f,g){function k(){this.$id=hb();this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this["this"]=this.$root=this;this.$$destroyed=!1;this.$$asyncQueue=[];this.$$postDigestQueue=
[];this.$$listeners={};this.$$listenerCount={};this.$$isolateBindings={}}function m(b){if(p.$$phase)throw a("inprog",p.$$phase);p.$$phase=b}function h(a,b){var c=f(a);Wa(c,b);return c}function l(a,b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function n(){}k.prototype={constructor:k,$new:function(a){a?(a=new k,a.$root=this.$root,a.$$asyncQueue=this.$$asyncQueue,a.$$postDigestQueue=this.$$postDigestQueue):(this.$$childScopeClass||(this.$$childScopeClass=
function(){this.$$watchers=this.$$nextSibling=this.$$childHead=this.$$childTail=null;this.$$listeners={};this.$$listenerCount={};this.$id=hb();this.$$childScopeClass=null},this.$$childScopeClass.prototype=this),a=new this.$$childScopeClass);a["this"]=a;a.$parent=this;a.$$prevSibling=this.$$childTail;this.$$childHead?this.$$childTail=this.$$childTail.$$nextSibling=a:this.$$childHead=this.$$childTail=a;return a},$watch:function(a,b,d){var e=h(a,"watch"),f=this.$$watchers,g={fn:b,last:n,get:e,exp:a,
eq:!!d};c=null;if(!P(b)){var k=h(b||E,"listener");g.fn=function(a,b,c){k(c)}}if("string"==typeof a&&e.constant){var l=g.fn;g.fn=function(a,b,c){l.call(this,a,b,c);Sa(f,g)}}f||(f=this.$$watchers=[]);f.unshift(g);return function(){Sa(f,g);c=null}},$watchCollection:function(a,b){var c=this,d,e,g,k=1<b.length,h=0,l=f(a),m=[],p={},n=!0,r=0;return this.$watch(function(){d=l(c);var a,b,f;if(T(d))if(Pa(d))for(e!==m&&(e=m,r=e.length=0,h++),a=d.length,r!==a&&(h++,e.length=r=a),b=0;b<a;b++)f=e[b]!==e[b]&&d[b]!==
d[b],f||e[b]===d[b]||(h++,e[b]=d[b]);else{e!==p&&(e=p={},r=0,h++);a=0;for(b in d)d.hasOwnProperty(b)&&(a++,e.hasOwnProperty(b)?(f=e[b]!==e[b]&&d[b]!==d[b],f||e[b]===d[b]||(h++,e[b]=d[b])):(r++,e[b]=d[b],h++));if(r>a)for(b in h++,e)e.hasOwnProperty(b)&&!d.hasOwnProperty(b)&&(r--,delete e[b])}else e!==d&&(e=d,h++);return h},function(){n?(n=!1,b(d,d,c)):b(d,g,c);if(k)if(T(d))if(Pa(d)){g=Array(d.length);for(var a=0;a<d.length;a++)g[a]=d[a]}else for(a in g={},d)kb.call(d,a)&&(g[a]=d[a]);else g=d})},$digest:function(){var d,
f,k,h,l=this.$$asyncQueue,r=this.$$postDigestQueue,R,z,t=b,L,O=[],w,B,I;m("$digest");g.$$checkUrlChange();c=null;do{z=!1;for(L=this;l.length;){try{I=l.shift(),I.scope.$eval(I.expression)}catch(H){p.$$phase=null,e(H)}c=null}a:do{if(h=L.$$watchers)for(R=h.length;R--;)try{if(d=h[R])if((f=d.get(L))!==(k=d.last)&&!(d.eq?Aa(f,k):"number"===typeof f&&"number"===typeof k&&isNaN(f)&&isNaN(k)))z=!0,c=d,d.last=d.eq?Ha(f,null):f,d.fn(f,k===n?f:k,L),5>t&&(w=4-t,O[w]||(O[w]=[]),B=P(d.exp)?"fn: "+(d.exp.name||d.exp.toString()):
d.exp,B+="; newVal: "+na(f)+"; oldVal: "+na(k),O[w].push(B));else if(d===c){z=!1;break a}}catch(y){p.$$phase=null,e(y)}if(!(h=L.$$childHead||L!==this&&L.$$nextSibling))for(;L!==this&&!(h=L.$$nextSibling);)L=L.$parent}while(L=h);if((z||l.length)&&!t--)throw p.$$phase=null,a("infdig",b,na(O));}while(z||l.length);for(p.$$phase=null;r.length;)try{r.shift()()}catch(v){e(v)}},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;this!==p&&(r(this.$$listenerCount,
Bb(null,l,this)),a.$$childHead==this&&(a.$$childHead=this.$$nextSibling),a.$$childTail==this&&(a.$$childTail=this.$$prevSibling),this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling),this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling),this.$parent=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=this.$root=null,this.$$listeners={},this.$$watchers=this.$$asyncQueue=this.$$postDigestQueue=[],this.$destroy=this.$digest=this.$apply=E,this.$on=
this.$watch=function(){return E})}},$eval:function(a,b){return f(a)(this,b)},$evalAsync:function(a){p.$$phase||p.$$asyncQueue.length||g.defer(function(){p.$$asyncQueue.length&&p.$digest()});this.$$asyncQueue.push({scope:this,expression:a})},$$postDigest:function(a){this.$$postDigestQueue.push(a)},$apply:function(a){try{return m("$apply"),this.$eval(a)}catch(b){e(b)}finally{p.$$phase=null;try{p.$digest()}catch(c){throw e(c),c;}}},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=
c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){c[Ra(c,b)]=null;l(e,1,a)}},$emit:function(a,b){var c=[],d,f=this,g=!1,k={name:a,targetScope:f,stopPropagation:function(){g=!0},preventDefault:function(){k.defaultPrevented=!0},defaultPrevented:!1},h=[k].concat(Ba.call(arguments,1)),l,m;do{d=f.$$listeners[a]||c;k.currentScope=f;l=0;for(m=d.length;l<m;l++)if(d[l])try{d[l].apply(null,h)}catch(p){e(p)}else d.splice(l,
1),l--,m--;if(g)break;f=f.$parent}while(f);return k},$broadcast:function(a,b){for(var c=this,d=this,f={name:a,targetScope:this,preventDefault:function(){f.defaultPrevented=!0},defaultPrevented:!1},g=[f].concat(Ba.call(arguments,1)),k,h;c=d;){f.currentScope=c;d=c.$$listeners[a]||[];k=0;for(h=d.length;k<h;k++)if(d[k])try{d[k].apply(null,g)}catch(l){e(l)}else d.splice(k,1),k--,h--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=c.$$nextSibling);)c=c.$parent}return f}};
var p=new k;return p}]}function cd(){var b=/^\s*(https?|ftp|mailto|tel|file):/,a=/^\s*((https?|ftp|file):|data:image\/)/;this.aHrefSanitizationWhitelist=function(a){return y(a)?(b=a,this):b};this.imgSrcSanitizationWhitelist=function(b){return y(b)?(a=b,this):a};this.$get=function(){return function(c,d){var e=d?a:b,f;if(!Q||8<=Q)if(f=ua(c).href,""!==f&&!f.match(e))return"unsafe:"+f;return c}}}function Be(b){if("self"===b)return b;if(v(b)){if(-1<b.indexOf("***"))throw xa("iwcard",b);b=b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,
"\\$1").replace(/\x08/g,"\\x08").replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*");return RegExp("^"+b+"$")}if(jb(b))return RegExp("^"+b.source+"$");throw xa("imatcher");}function Gc(b){var a=[];y(b)&&r(b,function(b){a.push(Be(b))});return a}function be(){this.SCE_CONTEXTS=ga;var b=["self"],a=[];this.resourceUrlWhitelist=function(a){arguments.length&&(b=Gc(a));return b};this.resourceUrlBlacklist=function(b){arguments.length&&(a=Gc(b));return a};this.$get=["$injector",function(c){function d(a){var b=
function(a){this.$$unwrapTrustedValue=function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};return b}var e=function(a){throw xa("unsafe");};c.has("$sanitize")&&(e=c.get("$sanitize"));var f=d(),g={};g[ga.HTML]=d(f);g[ga.CSS]=d(f);g[ga.URL]=d(f);g[ga.JS]=d(f);g[ga.RESOURCE_URL]=d(g[ga.URL]);return{trustAs:function(a,b){var c=g.hasOwnProperty(a)?g[a]:null;if(!c)throw xa("icontext",
a,b);if(null===b||b===t||""===b)return b;if("string"!==typeof b)throw xa("itype",a);return new c(b)},getTrusted:function(c,d){if(null===d||d===t||""===d)return d;var f=g.hasOwnProperty(c)?g[c]:null;if(f&&d instanceof f)return d.$$unwrapTrustedValue();if(c===ga.RESOURCE_URL){var f=ua(d.toString()),l,n,p=!1;l=0;for(n=b.length;l<n;l++)if("self"===b[l]?Pb(f):b[l].exec(f.href)){p=!0;break}if(p)for(l=0,n=a.length;l<n;l++)if("self"===a[l]?Pb(f):a[l].exec(f.href)){p=!1;break}if(p)return d;throw xa("insecurl",
d.toString());}if(c===ga.HTML)return e(d);throw xa("unsafe");},valueOf:function(a){return a instanceof f?a.$$unwrapTrustedValue():a}}}]}function ae(){var b=!0;this.enabled=function(a){arguments.length&&(b=!!a);return b};this.$get=["$parse","$sniffer","$sceDelegate",function(a,c,d){if(b&&c.msie&&8>c.msieDocumentMode)throw xa("iequirks");var e=ha(ga);e.isEnabled=function(){return b};e.trustAs=d.trustAs;e.getTrusted=d.getTrusted;e.valueOf=d.valueOf;b||(e.trustAs=e.getTrusted=function(a,b){return b},
e.valueOf=Qa);e.parseAs=function(b,c){var d=a(c);return d.literal&&d.constant?d:function(a,c){return e.getTrusted(b,d(a,c))}};var f=e.parseAs,g=e.getTrusted,k=e.trustAs;r(ga,function(a,b){var c=K(b);e[Za("parse_as_"+c)]=function(b){return f(a,b)};e[Za("get_trusted_"+c)]=function(b){return g(a,b)};e[Za("trust_as_"+c)]=function(b){return k(a,b)}});return e}]}function ce(){this.$get=["$window","$document",function(b,a){var c={},d=U((/android (\d+)/.exec(K((b.navigator||{}).userAgent))||[])[1]),e=/Boxee/i.test((b.navigator||
{}).userAgent),f=a[0]||{},g=f.documentMode,k,m=/^(Moz|webkit|O|ms)(?=[A-Z])/,h=f.body&&f.body.style,l=!1,n=!1;if(h){for(var p in h)if(l=m.exec(p)){k=l[0];k=k.substr(0,1).toUpperCase()+k.substr(1);break}k||(k="WebkitOpacity"in h&&"webkit");l=!!("transition"in h||k+"Transition"in h);n=!!("animation"in h||k+"Animation"in h);!d||l&&n||(l=v(f.body.style.webkitTransition),n=v(f.body.style.webkitAnimation))}return{history:!(!b.history||!b.history.pushState||4>d||e),hashchange:"onhashchange"in b&&(!g||7<
g),hasEvent:function(a){if("input"==a&&9==Q)return!1;if(x(c[a])){var b=f.createElement("div");c[a]="on"+a in b}return c[a]},csp:Xa(),vendorPrefix:k,transitions:l,animations:n,android:d,msie:Q,msieDocumentMode:g}}]}function ee(){this.$get=["$rootScope","$browser","$q","$exceptionHandler",function(b,a,c,d){function e(e,k,m){var h=c.defer(),l=h.promise,n=y(m)&&!m;k=a.defer(function(){try{h.resolve(e())}catch(a){h.reject(a),d(a)}finally{delete f[l.$$timeoutId]}n||b.$apply()},k);l.$$timeoutId=k;f[k]=h;
return l}var f={};e.cancel=function(b){return b&&b.$$timeoutId in f?(f[b.$$timeoutId].reject("canceled"),delete f[b.$$timeoutId],a.defer.cancel(b.$$timeoutId)):!1};return e}]}function ua(b,a){var c=b;Q&&(Y.setAttribute("href",c),c=Y.href);Y.setAttribute("href",c);return{href:Y.href,protocol:Y.protocol?Y.protocol.replace(/:$/,""):"",host:Y.host,search:Y.search?Y.search.replace(/^\?/,""):"",hash:Y.hash?Y.hash.replace(/^#/,""):"",hostname:Y.hostname,port:Y.port,pathname:"/"===Y.pathname.charAt(0)?Y.pathname:
"/"+Y.pathname}}function Pb(b){b=v(b)?ua(b):b;return b.protocol===Hc.protocol&&b.host===Hc.host}function fe(){this.$get=ba(W)}function mc(b){function a(d,e){if(T(d)){var f={};r(d,function(b,c){f[c]=a(c,b)});return f}return b.factory(d+c,e)}var c="Filter";this.register=a;this.$get=["$injector",function(a){return function(b){return a.get(b+c)}}];a("currency",Ic);a("date",Jc);a("filter",Ce);a("json",De);a("limitTo",Ee);a("lowercase",Fe);a("number",Kc);a("orderBy",Lc);a("uppercase",Ge)}function Ce(){return function(b,
a,c){if(!J(b))return b;var d=typeof c,e=[];e.check=function(a){for(var b=0;b<e.length;b++)if(!e[b](a))return!1;return!0};"function"!==d&&(c="boolean"===d&&c?function(a,b){return Va.equals(a,b)}:function(a,b){if(a&&b&&"object"===typeof a&&"object"===typeof b){for(var d in a)if("$"!==d.charAt(0)&&kb.call(a,d)&&c(a[d],b[d]))return!0;return!1}b=(""+b).toLowerCase();return-1<(""+a).toLowerCase().indexOf(b)});var f=function(a,b){if("string"==typeof b&&"!"===b.charAt(0))return!f(a,b.substr(1));switch(typeof a){case "boolean":case "number":case "string":return c(a,
b);case "object":switch(typeof b){case "object":return c(a,b);default:for(var d in a)if("$"!==d.charAt(0)&&f(a[d],b))return!0}return!1;case "array":for(d=0;d<a.length;d++)if(f(a[d],b))return!0;return!1;default:return!1}};switch(typeof a){case "boolean":case "number":case "string":a={$:a};case "object":for(var g in a)(function(b){"undefined"!==typeof a[b]&&e.push(function(c){return f("$"==b?c:c&&c[b],a[b])})})(g);break;case "function":e.push(a);break;default:return b}d=[];for(g=0;g<b.length;g++){var k=
b[g];e.check(k)&&d.push(k)}return d}}function Ic(b){var a=b.NUMBER_FORMATS;return function(b,d){x(d)&&(d=a.CURRENCY_SYM);return Mc(b,a.PATTERNS[1],a.GROUP_SEP,a.DECIMAL_SEP,2).replace(/\u00A4/g,d)}}function Kc(b){var a=b.NUMBER_FORMATS;return function(b,d){return Mc(b,a.PATTERNS[0],a.GROUP_SEP,a.DECIMAL_SEP,d)}}function Mc(b,a,c,d,e){if(null==b||!isFinite(b)||T(b))return"";var f=0>b;b=Math.abs(b);var g=b+"",k="",m=[],h=!1;if(-1!==g.indexOf("e")){var l=g.match(/([\d\.]+)e(-?)(\d+)/);l&&"-"==l[2]&&
l[3]>e+1?(g="0",b=0):(k=g,h=!0)}if(h)0<e&&(-1<b&&1>b)&&(k=b.toFixed(e));else{g=(g.split(Nc)[1]||"").length;x(e)&&(e=Math.min(Math.max(a.minFrac,g),a.maxFrac));b=+(Math.round(+(b.toString()+"e"+e)).toString()+"e"+-e);0===b&&(f=!1);b=(""+b).split(Nc);g=b[0];b=b[1]||"";var l=0,n=a.lgSize,p=a.gSize;if(g.length>=n+p)for(l=g.length-n,h=0;h<l;h++)0===(l-h)%p&&0!==h&&(k+=c),k+=g.charAt(h);for(h=l;h<g.length;h++)0===(g.length-h)%n&&0!==h&&(k+=c),k+=g.charAt(h);for(;b.length<e;)b+="0";e&&"0"!==e&&(k+=d+b.substr(0,
e))}m.push(f?a.negPre:a.posPre);m.push(k);m.push(f?a.negSuf:a.posSuf);return m.join("")}function Xb(b,a,c){var d="";0>b&&(d="-",b=-b);for(b=""+b;b.length<a;)b="0"+b;c&&(b=b.substr(b.length-a));return d+b}function $(b,a,c,d){c=c||0;return function(e){e=e["get"+b]();if(0<c||e>-c)e+=c;0===e&&-12==c&&(e=12);return Xb(e,a,d)}}function vb(b,a){return function(c,d){var e=c["get"+b](),f=Ia(a?"SHORT"+b:b);return d[f][e]}}function Jc(b){function a(a){var b;if(b=a.match(c)){a=new Date(0);var f=0,g=0,k=b[8]?
a.setUTCFullYear:a.setFullYear,m=b[8]?a.setUTCHours:a.setHours;b[9]&&(f=U(b[9]+b[10]),g=U(b[9]+b[11]));k.call(a,U(b[1]),U(b[2])-1,U(b[3]));f=U(b[4]||0)-f;g=U(b[5]||0)-g;k=U(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));m.call(a,f,g,k,b)}return a}var c=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(c,e){var f="",g=[],k,m;e=e||"mediumDate";e=b.DATETIME_FORMATS[e]||e;v(c)&&(c=He.test(c)?U(c):a(c));ib(c)&&(c=new Date(c));
if(!ta(c))return c;for(;e;)(m=Ie.exec(e))?(g=g.concat(Ba.call(m,1)),e=g.pop()):(g.push(e),e=null);r(g,function(a){k=Je[a];f+=k?k(c,b.DATETIME_FORMATS):a.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return f}}function De(){return function(b){return na(b,!0)}}function Ee(){return function(b,a){if(!J(b)&&!v(b))return b;a=Infinity===Math.abs(Number(a))?Number(a):U(a);if(v(b))return a?0<=a?b.slice(0,a):b.slice(a,b.length):"";var c=[],d,e;a>b.length?a=b.length:a<-b.length&&(a=-b.length);0<a?(d=0,e=a):(d=
b.length+a,e=b.length);for(;d<e;d++)c.push(b[d]);return c}}function Lc(b){return function(a,c,d){function e(a,b){return Ua(b)?function(b,c){return a(c,b)}:a}function f(a,b){var c=typeof a,d=typeof b;return c==d?(ta(a)&&ta(b)&&(a=a.valueOf(),b=b.valueOf()),"string"==c&&(a=a.toLowerCase(),b=b.toLowerCase()),a===b?0:a<b?-1:1):c<d?-1:1}if(!Pa(a)||!c)return a;c=J(c)?c:[c];c=Vc(c,function(a){var c=!1,d=a||Qa;if(v(a)){if("+"==a.charAt(0)||"-"==a.charAt(0))c="-"==a.charAt(0),a=a.substring(1);d=b(a);if(d.constant){var g=
d();return e(function(a,b){return f(a[g],b[g])},c)}}return e(function(a,b){return f(d(a),d(b))},c)});for(var g=[],k=0;k<a.length;k++)g.push(a[k]);return g.sort(e(function(a,b){for(var d=0;d<c.length;d++){var e=c[d](a,b);if(0!==e)return e}return 0},d))}}function ya(b){P(b)&&(b={link:b});b.restrict=b.restrict||"AC";return ba(b)}function Oc(b,a,c,d){function e(a,c){c=c?"-"+mb(c,"-"):"";d.setClass(b,(a?wb:xb)+c,(a?xb:wb)+c)}var f=this,g=b.parent().controller("form")||yb,k=0,m=f.$error={},h=[];f.$name=
a.name||a.ngForm;f.$dirty=!1;f.$pristine=!0;f.$valid=!0;f.$invalid=!1;g.$addControl(f);b.addClass(Oa);e(!0);f.$addControl=function(a){Da(a.$name,"input");h.push(a);a.$name&&(f[a.$name]=a)};f.$removeControl=function(a){a.$name&&f[a.$name]===a&&delete f[a.$name];r(m,function(b,c){f.$setValidity(c,!0,a)});Sa(h,a)};f.$setValidity=function(a,b,c){var d=m[a];if(b)d&&(Sa(d,c),d.length||(k--,k||(e(b),f.$valid=!0,f.$invalid=!1),m[a]=!1,e(!0,a),g.$setValidity(a,!0,f)));else{k||e(b);if(d){if(-1!=Ra(d,c))return}else m[a]=
d=[],k++,e(!1,a),g.$setValidity(a,!1,f);d.push(c);f.$valid=!1;f.$invalid=!0}};f.$setDirty=function(){d.removeClass(b,Oa);d.addClass(b,zb);f.$dirty=!0;f.$pristine=!1;g.$setDirty()};f.$setPristine=function(){d.removeClass(b,zb);d.addClass(b,Oa);f.$dirty=!1;f.$pristine=!0;r(h,function(a){a.$setPristine()})}}function sa(b,a,c,d){b.$setValidity(a,c);return c?d:t}function Pc(b,a){var c,d;if(a)for(c=0;c<a.length;++c)if(d=a[c],b[d])return!0;return!1}function Ke(b,a,c,d,e){T(e)&&(b.$$hasNativeValidators=!0,
b.$parsers.push(function(f){if(b.$error[a]||Pc(e,d)||!Pc(e,c))return f;b.$setValidity(a,!1)}))}function Ab(b,a,c,d,e,f){var g=a.prop(Le),k=a[0].placeholder,m={},h=K(a[0].type);d.$$validityState=g;if(!e.android){var l=!1;a.on("compositionstart",function(a){l=!0});a.on("compositionend",function(){l=!1;n()})}var n=function(e){if(!l){var f=a.val();if(Q&&"input"===(e||m).type&&a[0].placeholder!==k)k=a[0].placeholder;else if("password"!==h&&Ua(c.ngTrim||"T")&&(f=aa(f)),e=g&&d.$$hasNativeValidators,d.$viewValue!==
f||""===f&&e)b.$root.$$phase?d.$setViewValue(f):b.$apply(function(){d.$setViewValue(f)})}};if(e.hasEvent("input"))a.on("input",n);else{var p,q=function(){p||(p=f.defer(function(){n();p=null}))};a.on("keydown",function(a){a=a.keyCode;91===a||(15<a&&19>a||37<=a&&40>=a)||q()});if(e.hasEvent("paste"))a.on("paste cut",q)}a.on("change",n);d.$render=function(){a.val(d.$isEmpty(d.$viewValue)?"":d.$viewValue)};var s=c.ngPattern;s&&((e=s.match(/^\/(.*)\/([gim]*)$/))?(s=RegExp(e[1],e[2]),e=function(a){return sa(d,
"pattern",d.$isEmpty(a)||s.test(a),a)}):e=function(c){var e=b.$eval(s);if(!e||!e.test)throw C("ngPattern")("noregexp",s,e,ia(a));return sa(d,"pattern",d.$isEmpty(c)||e.test(c),c)},d.$formatters.push(e),d.$parsers.push(e));if(c.ngMinlength){var r=U(c.ngMinlength);e=function(a){return sa(d,"minlength",d.$isEmpty(a)||a.length>=r,a)};d.$parsers.push(e);d.$formatters.push(e)}if(c.ngMaxlength){var u=U(c.ngMaxlength);e=function(a){return sa(d,"maxlength",d.$isEmpty(a)||a.length<=u,a)};d.$parsers.push(e);
d.$formatters.push(e)}}function Yb(b,a){b="ngClass"+b;return["$animate",function(c){function d(a,b){var c=[],d=0;a:for(;d<a.length;d++){for(var e=a[d],l=0;l<b.length;l++)if(e==b[l])continue a;c.push(e)}return c}function e(a){if(!J(a)){if(v(a))return a.split(" ");if(T(a)){var b=[];r(a,function(a,c){a&&(b=b.concat(c.split(" ")))});return b}}return a}return{restrict:"AC",link:function(f,g,k){function m(a,b){var c=g.data("$classCounts")||{},d=[];r(a,function(a){if(0<b||c[a])c[a]=(c[a]||0)+b,c[a]===+(0<
b)&&d.push(a)});g.data("$classCounts",c);return d.join(" ")}function h(b){if(!0===a||f.$index%2===a){var h=e(b||[]);if(!l){var q=m(h,1);k.$addClass(q)}else if(!Aa(b,l)){var s=e(l),q=d(h,s),h=d(s,h),h=m(h,-1),q=m(q,1);0===q.length?c.removeClass(g,h):0===h.length?c.addClass(g,q):c.setClass(g,q,h)}}l=ha(b)}var l;f.$watch(k[b],h,!0);k.$observe("class",function(a){h(f.$eval(k[b]))});"ngClass"!==b&&f.$watch("$index",function(c,d){var g=c&1;if(g!==(d&1)){var h=e(f.$eval(k[b]));g===a?(g=m(h,1),k.$addClass(g)):
(g=m(h,-1),k.$removeClass(g))}})}}}]}var Le="validity",K=function(b){return v(b)?b.toLowerCase():b},kb=Object.prototype.hasOwnProperty,Ia=function(b){return v(b)?b.toUpperCase():b},Q,w,Ea,Ba=[].slice,Me=[].push,za=Object.prototype.toString,Ta=C("ng"),Va=W.angular||(W.angular={}),Ya,Ma,ma=["0","0","0"];Q=U((/msie (\d+)/.exec(K(navigator.userAgent))||[])[1]);isNaN(Q)&&(Q=U((/trident\/.*; rv:(\d+)/.exec(K(navigator.userAgent))||[])[1]));E.$inject=[];Qa.$inject=[];var J=function(){return P(Array.isArray)?
Array.isArray:function(b){return"[object Array]"===za.call(b)}}(),aa=function(){return String.prototype.trim?function(b){return v(b)?b.trim():b}:function(b){return v(b)?b.replace(/^\s\s*/,"").replace(/\s\s*$/,""):b}}();Ma=9>Q?function(b){b=b.nodeName?b:b[0];return b.scopeName&&"HTML"!=b.scopeName?Ia(b.scopeName+":"+b.nodeName):b.nodeName}:function(b){return b.nodeName?b.nodeName:b[0].nodeName};var Xa=function(){if(y(Xa.isActive_))return Xa.isActive_;var b=!(!X.querySelector("[ng-csp]")&&!X.querySelector("[data-ng-csp]"));
if(!b)try{new Function("")}catch(a){b=!0}return Xa.isActive_=b},Yc=/[A-Z]/g,ad={full:"1.2.26",major:1,minor:2,dot:26,codeName:"captivating-disinterest"};S.expando="ng339";var ab=S.cache={},ne=1,sb=W.document.addEventListener?function(b,a,c){b.addEventListener(a,c,!1)}:function(b,a,c){b.attachEvent("on"+a,c)},$a=W.document.removeEventListener?function(b,a,c){b.removeEventListener(a,c,!1)}:function(b,a,c){b.detachEvent("on"+a,c)};S._data=function(b){return this.cache[b[this.expando]]||{}};var ie=/([\:\-\_]+(.))/g,
je=/^moz([A-Z])/,Hb=C("jqLite"),ke=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,Ib=/<|&#?\w+;/,le=/<([\w:]+)/,me=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ea={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ea.optgroup=ea.option;ea.tbody=ea.tfoot=ea.colgroup=ea.caption=ea.thead;ea.th=
ea.td;var La=S.prototype={ready:function(b){function a(){c||(c=!0,b())}var c=!1;"complete"===X.readyState?setTimeout(a):(this.on("DOMContentLoaded",a),S(W).on("load",a))},toString:function(){var b=[];r(this,function(a){b.push(""+a)});return"["+b.join(", ")+"]"},eq:function(b){return 0<=b?w(this[b]):w(this[this.length+b])},length:0,push:Me,sort:[].sort,splice:[].splice},qb={};r("multiple selected checked disabled readOnly required open".split(" "),function(b){qb[K(b)]=b});var rc={};r("input select option textarea button form details".split(" "),
function(b){rc[Ia(b)]=!0});r({data:Mb,removeData:Lb},function(b,a){S[a]=b});r({data:Mb,inheritedData:pb,scope:function(b){return w.data(b,"$scope")||pb(b.parentNode||b,["$isolateScope","$scope"])},isolateScope:function(b){return w.data(b,"$isolateScope")||w.data(b,"$isolateScopeNoTemplate")},controller:oc,injector:function(b){return pb(b,"$injector")},removeAttr:function(b,a){b.removeAttribute(a)},hasClass:Nb,css:function(b,a,c){a=Za(a);if(y(c))b.style[a]=c;else{var d;8>=Q&&(d=b.currentStyle&&b.currentStyle[a],
""===d&&(d="auto"));d=d||b.style[a];8>=Q&&(d=""===d?t:d);return d}},attr:function(b,a,c){var d=K(a);if(qb[d])if(y(c))c?(b[a]=!0,b.setAttribute(a,d)):(b[a]=!1,b.removeAttribute(d));else return b[a]||(b.attributes.getNamedItem(a)||E).specified?d:t;else if(y(c))b.setAttribute(a,c);else if(b.getAttribute)return b=b.getAttribute(a,2),null===b?t:b},prop:function(b,a,c){if(y(c))b[a]=c;else return b[a]},text:function(){function b(b,d){var e=a[b.nodeType];if(x(d))return e?b[e]:"";b[e]=d}var a=[];9>Q?(a[1]=
"innerText",a[3]="nodeValue"):a[1]=a[3]="textContent";b.$dv="";return b}(),val:function(b,a){if(x(a)){if("SELECT"===Ma(b)&&b.multiple){var c=[];r(b.options,function(a){a.selected&&c.push(a.value||a.text)});return 0===c.length?null:c}return b.value}b.value=a},html:function(b,a){if(x(a))return b.innerHTML;for(var c=0,d=b.childNodes;c<d.length;c++)Ja(d[c]);b.innerHTML=a},empty:pc},function(b,a){S.prototype[a]=function(a,d){var e,f,g=this.length;if(b!==pc&&(2==b.length&&b!==Nb&&b!==oc?a:d)===t){if(T(a)){for(e=
0;e<g;e++)if(b===Mb)b(this[e],a);else for(f in a)b(this[e],f,a[f]);return this}e=b.$dv;g=e===t?Math.min(g,1):g;for(f=0;f<g;f++){var k=b(this[f],a,d);e=e?e+k:k}return e}for(e=0;e<g;e++)b(this[e],a,d);return this}});r({removeData:Lb,dealoc:Ja,on:function a(c,d,e,f){if(y(f))throw Hb("onargs");var g=oa(c,"events"),k=oa(c,"handle");g||oa(c,"events",g={});k||oa(c,"handle",k=oe(c,g));r(d.split(" "),function(d){var f=g[d];if(!f){if("mouseenter"==d||"mouseleave"==d){var l=X.body.contains||X.body.compareDocumentPosition?
function(a,c){var d=9===a.nodeType?a.documentElement:a,e=c&&c.parentNode;return a===e||!!(e&&1===e.nodeType&&(d.contains?d.contains(e):a.compareDocumentPosition&&a.compareDocumentPosition(e)&16))}:function(a,c){if(c)for(;c=c.parentNode;)if(c===a)return!0;return!1};g[d]=[];a(c,{mouseleave:"mouseout",mouseenter:"mouseover"}[d],function(a){var c=a.relatedTarget;c&&(c===this||l(this,c))||k(a,d)})}else sb(c,d,k),g[d]=[];f=g[d]}f.push(e)})},off:nc,one:function(a,c,d){a=w(a);a.on(c,function f(){a.off(c,
d);a.off(c,f)});a.on(c,d)},replaceWith:function(a,c){var d,e=a.parentNode;Ja(a);r(new S(c),function(c){d?e.insertBefore(c,d.nextSibling):e.replaceChild(c,a);d=c})},children:function(a){var c=[];r(a.childNodes,function(a){1===a.nodeType&&c.push(a)});return c},contents:function(a){return a.contentDocument||a.childNodes||[]},append:function(a,c){r(new S(c),function(c){1!==a.nodeType&&11!==a.nodeType||a.appendChild(c)})},prepend:function(a,c){if(1===a.nodeType){var d=a.firstChild;r(new S(c),function(c){a.insertBefore(c,
d)})}},wrap:function(a,c){c=w(c)[0];var d=a.parentNode;d&&d.replaceChild(c,a);c.appendChild(a)},remove:function(a){Ja(a);var c=a.parentNode;c&&c.removeChild(a)},after:function(a,c){var d=a,e=a.parentNode;r(new S(c),function(a){e.insertBefore(a,d.nextSibling);d=a})},addClass:ob,removeClass:nb,toggleClass:function(a,c,d){c&&r(c.split(" "),function(c){var f=d;x(f)&&(f=!Nb(a,c));(f?ob:nb)(a,c)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){if(a.nextElementSibling)return a.nextElementSibling;
for(a=a.nextSibling;null!=a&&1!==a.nodeType;)a=a.nextSibling;return a},find:function(a,c){return a.getElementsByTagName?a.getElementsByTagName(c):[]},clone:Kb,triggerHandler:function(a,c,d){var e,f;e=c.type||c;var g=(oa(a,"events")||{})[e];g&&(e={preventDefault:function(){this.defaultPrevented=!0},isDefaultPrevented:function(){return!0===this.defaultPrevented},stopPropagation:E,type:e,target:a},c.type&&(e=D(e,c)),c=ha(g),f=d?[e].concat(d):[e],r(c,function(c){c.apply(a,f)}))}},function(a,c){S.prototype[c]=
function(c,e,f){for(var g,k=0;k<this.length;k++)x(g)?(g=a(this[k],c,e,f),y(g)&&(g=w(g))):Jb(g,a(this[k],c,e,f));return y(g)?g:this};S.prototype.bind=S.prototype.on;S.prototype.unbind=S.prototype.off});bb.prototype={put:function(a,c){this[Ka(a,this.nextUid)]=c},get:function(a){return this[Ka(a,this.nextUid)]},remove:function(a){var c=this[a=Ka(a,this.nextUid)];delete this[a];return c}};var qe=/^function\s*[^\(]*\(\s*([^\)]*)\)/m,re=/,/,se=/^\s*(_?)(\S+?)\1\s*$/,pe=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,
cb=C("$injector"),Ne=C("$animate"),Md=["$provide",function(a){this.$$selectors={};this.register=function(c,d){var e=c+"-animation";if(c&&"."!=c.charAt(0))throw Ne("notcsel",c);this.$$selectors[c.substr(1)]=e;a.factory(e,d)};this.classNameFilter=function(a){1===arguments.length&&(this.$$classNameFilter=a instanceof RegExp?a:null);return this.$$classNameFilter};this.$get=["$timeout","$$asyncCallback",function(a,d){return{enter:function(a,c,g,k){g?g.after(a):(c&&c[0]||(c=g.parent()),c.append(a));k&&
d(k)},leave:function(a,c){a.remove();c&&d(c)},move:function(a,c,d,k){this.enter(a,c,d,k)},addClass:function(a,c,g){c=v(c)?c:J(c)?c.join(" "):"";r(a,function(a){ob(a,c)});g&&d(g)},removeClass:function(a,c,g){c=v(c)?c:J(c)?c.join(" "):"";r(a,function(a){nb(a,c)});g&&d(g)},setClass:function(a,c,g,k){r(a,function(a){ob(a,c);nb(a,g)});k&&d(k)},enabled:E}}]}],ja=C("$compile");ic.$inject=["$provide","$$sanitizeUriProvider"];var we=/^(x[\:\-_]|data[\:\-_])/i,yc=C("$interpolate"),Oe=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,
ze={http:80,https:443,ftp:21},Sb=C("$location");Ub.prototype=Tb.prototype=Bc.prototype={$$html5:!1,$$replace:!1,absUrl:tb("$$absUrl"),url:function(a){if(x(a))return this.$$url;a=Oe.exec(a);a[1]&&this.path(decodeURIComponent(a[1]));(a[2]||a[1])&&this.search(a[3]||"");this.hash(a[5]||"");return this},protocol:tb("$$protocol"),host:tb("$$host"),port:tb("$$port"),path:Cc("$$path",function(a){a=a?a.toString():"";return"/"==a.charAt(0)?a:"/"+a}),search:function(a,c){switch(arguments.length){case 0:return this.$$search;
case 1:if(v(a)||ib(a))a=a.toString(),this.$$search=ec(a);else if(T(a))r(a,function(c,e){null==c&&delete a[e]}),this.$$search=a;else throw Sb("isrcharg");break;default:x(c)||null===c?delete this.$$search[a]:this.$$search[a]=c}this.$$compose();return this},hash:Cc("$$hash",function(a){return a?a.toString():""}),replace:function(){this.$$replace=!0;return this}};var la=C("$parse"),Fc={},wa,Pe=Function.prototype.call,Qe=Function.prototype.apply,Qc=Function.prototype.bind,gb={"null":function(){return null},
"true":function(){return!0},"false":function(){return!1},undefined:E,"+":function(a,c,d,e){d=d(a,c);e=e(a,c);return y(d)?y(e)?d+e:d:y(e)?e:t},"-":function(a,c,d,e){d=d(a,c);e=e(a,c);return(y(d)?d:0)-(y(e)?e:0)},"*":function(a,c,d,e){return d(a,c)*e(a,c)},"/":function(a,c,d,e){return d(a,c)/e(a,c)},"%":function(a,c,d,e){return d(a,c)%e(a,c)},"^":function(a,c,d,e){return d(a,c)^e(a,c)},"=":E,"===":function(a,c,d,e){return d(a,c)===e(a,c)},"!==":function(a,c,d,e){return d(a,c)!==e(a,c)},"==":function(a,
c,d,e){return d(a,c)==e(a,c)},"!=":function(a,c,d,e){return d(a,c)!=e(a,c)},"<":function(a,c,d,e){return d(a,c)<e(a,c)},">":function(a,c,d,e){return d(a,c)>e(a,c)},"<=":function(a,c,d,e){return d(a,c)<=e(a,c)},">=":function(a,c,d,e){return d(a,c)>=e(a,c)},"&&":function(a,c,d,e){return d(a,c)&&e(a,c)},"||":function(a,c,d,e){return d(a,c)||e(a,c)},"&":function(a,c,d,e){return d(a,c)&e(a,c)},"|":function(a,c,d,e){return e(a,c)(a,c,d(a,c))},"!":function(a,c,d){return!d(a,c)}},Re={n:"\n",f:"\f",r:"\r",
t:"\t",v:"\v","'":"'",'"':'"'},Wb=function(a){this.options=a};Wb.prototype={constructor:Wb,lex:function(a){this.text=a;this.index=0;this.ch=t;this.lastCh=":";for(this.tokens=[];this.index<this.text.length;){this.ch=this.text.charAt(this.index);if(this.is("\"'"))this.readString(this.ch);else if(this.isNumber(this.ch)||this.is(".")&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdent(this.ch))this.readIdent();else if(this.is("(){}[].,;:?"))this.tokens.push({index:this.index,text:this.ch}),
this.index++;else if(this.isWhitespace(this.ch)){this.index++;continue}else{a=this.ch+this.peek();var c=a+this.peek(2),d=gb[this.ch],e=gb[a],f=gb[c];f?(this.tokens.push({index:this.index,text:c,fn:f}),this.index+=3):e?(this.tokens.push({index:this.index,text:a,fn:e}),this.index+=2):d?(this.tokens.push({index:this.index,text:this.ch,fn:d}),this.index+=1):this.throwError("Unexpected next character ",this.index,this.index+1)}this.lastCh=this.ch}return this.tokens},is:function(a){return-1!==a.indexOf(this.ch)},
was:function(a){return-1!==a.indexOf(this.lastCh)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=a&&"9">=a},isWhitespace:function(a){return" "===a||"\r"===a||"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdent:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isExpOperator:function(a){return"-"===a||"+"===a||this.isNumber(a)},throwError:function(a,c,d){d=d||this.index;c=y(c)?"s "+c+"-"+this.index+" ["+
this.text.substring(c,d)+"]":" "+d;throw la("lexerr",a,c,this.text);},readNumber:function(){for(var a="",c=this.index;this.index<this.text.length;){var d=K(this.text.charAt(this.index));if("."==d||this.isNumber(d))a+=d;else{var e=this.peek();if("e"==d&&this.isExpOperator(e))a+=d;else if(this.isExpOperator(d)&&e&&this.isNumber(e)&&"e"==a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||e&&this.isNumber(e)||"e"!=a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}a*=
1;this.tokens.push({index:c,text:a,literal:!0,constant:!0,fn:function(){return a}})},readIdent:function(){for(var a=this,c="",d=this.index,e,f,g,k;this.index<this.text.length;){k=this.text.charAt(this.index);if("."===k||this.isIdent(k)||this.isNumber(k))"."===k&&(e=this.index),c+=k;else break;this.index++}if(e)for(f=this.index;f<this.text.length;){k=this.text.charAt(f);if("("===k){g=c.substr(e-d+1);c=c.substr(0,e-d);this.index=f;break}if(this.isWhitespace(k))f++;else break}d={index:d,text:c};if(gb.hasOwnProperty(c))d.fn=
gb[c],d.literal=!0,d.constant=!0;else{var m=Ec(c,this.options,this.text);d.fn=D(function(a,c){return m(a,c)},{assign:function(d,e){return ub(d,c,e,a.text,a.options)}})}this.tokens.push(d);g&&(this.tokens.push({index:e,text:"."}),this.tokens.push({index:e+1,text:g}))},readString:function(a){var c=this.index;this.index++;for(var d="",e=a,f=!1;this.index<this.text.length;){var g=this.text.charAt(this.index),e=e+g;if(f)"u"===g?(f=this.text.substring(this.index+1,this.index+5),f.match(/[\da-f]{4}/i)||
this.throwError("Invalid unicode escape [\\u"+f+"]"),this.index+=4,d+=String.fromCharCode(parseInt(f,16))):d+=Re[g]||g,f=!1;else if("\\"===g)f=!0;else{if(g===a){this.index++;this.tokens.push({index:c,text:e,string:d,literal:!0,constant:!0,fn:function(){return d}});return}d+=g}this.index++}this.throwError("Unterminated quote",c)}};var fb=function(a,c,d){this.lexer=a;this.$filter=c;this.options=d};fb.ZERO=D(function(){return 0},{constant:!0});fb.prototype={constructor:fb,parse:function(a){this.text=
a;this.tokens=this.lexer.lex(a);a=this.statements();0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);a.literal=!!a.literal;a.constant=!!a.constant;return a},primary:function(){var a;if(this.expect("("))a=this.filterChain(),this.consume(")");else if(this.expect("["))a=this.arrayDeclaration();else if(this.expect("{"))a=this.object();else{var c=this.expect();(a=c.fn)||this.throwError("not a primary expression",c);a.literal=!!c.literal;a.constant=!!c.constant}for(var d;c=
this.expect("(","[",".");)"("===c.text?(a=this.functionCall(a,d),d=null):"["===c.text?(d=a,a=this.objectIndex(a)):"."===c.text?(d=a,a=this.fieldAccess(a)):this.throwError("IMPOSSIBLE");return a},throwError:function(a,c){throw la("syntax",c.text,a,c.index+1,this.text,this.text.substring(c.index));},peekToken:function(){if(0===this.tokens.length)throw la("ueoe",this.text);return this.tokens[0]},peek:function(a,c,d,e){if(0<this.tokens.length){var f=this.tokens[0],g=f.text;if(g===a||g===c||g===d||g===
e||!(a||c||d||e))return f}return!1},expect:function(a,c,d,e){return(a=this.peek(a,c,d,e))?(this.tokens.shift(),a):!1},consume:function(a){this.expect(a)||this.throwError("is unexpected, expecting ["+a+"]",this.peek())},unaryFn:function(a,c){return D(function(d,e){return a(d,e,c)},{constant:c.constant})},ternaryFn:function(a,c,d){return D(function(e,f){return a(e,f)?c(e,f):d(e,f)},{constant:a.constant&&c.constant&&d.constant})},binaryFn:function(a,c,d){return D(function(e,f){return c(e,f,a,d)},{constant:a.constant&&
d.constant})},statements:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.filterChain()),!this.expect(";"))return 1===a.length?a[0]:function(c,d){for(var e,f=0;f<a.length;f++){var g=a[f];g&&(e=g(c,d))}return e}},filterChain:function(){for(var a=this.expression(),c;;)if(c=this.expect("|"))a=this.binaryFn(a,c.fn,this.filter());else return a},filter:function(){for(var a=this.expect(),c=this.$filter(a.text),d=[];;)if(a=this.expect(":"))d.push(this.expression());
else{var e=function(a,e,k){k=[k];for(var m=0;m<d.length;m++)k.push(d[m](a,e));return c.apply(a,k)};return function(){return e}}},expression:function(){return this.assignment()},assignment:function(){var a=this.ternary(),c,d;return(d=this.expect("="))?(a.assign||this.throwError("implies assignment but ["+this.text.substring(0,d.index)+"] can not be assigned to",d),c=this.ternary(),function(d,f){return a.assign(d,c(d,f),f)}):a},ternary:function(){var a=this.logicalOR(),c,d;if(this.expect("?")){c=this.assignment();
if(d=this.expect(":"))return this.ternaryFn(a,c,this.assignment());this.throwError("expected :",d)}else return a},logicalOR:function(){for(var a=this.logicalAND(),c;;)if(c=this.expect("||"))a=this.binaryFn(a,c.fn,this.logicalAND());else return a},logicalAND:function(){var a=this.equality(),c;if(c=this.expect("&&"))a=this.binaryFn(a,c.fn,this.logicalAND());return a},equality:function(){var a=this.relational(),c;if(c=this.expect("==","!=","===","!=="))a=this.binaryFn(a,c.fn,this.equality());return a},
relational:function(){var a=this.additive(),c;if(c=this.expect("<",">","<=",">="))a=this.binaryFn(a,c.fn,this.relational());return a},additive:function(){for(var a=this.multiplicative(),c;c=this.expect("+","-");)a=this.binaryFn(a,c.fn,this.multiplicative());return a},multiplicative:function(){for(var a=this.unary(),c;c=this.expect("*","/","%");)a=this.binaryFn(a,c.fn,this.unary());return a},unary:function(){var a;return this.expect("+")?this.primary():(a=this.expect("-"))?this.binaryFn(fb.ZERO,a.fn,
this.unary()):(a=this.expect("!"))?this.unaryFn(a.fn,this.unary()):this.primary()},fieldAccess:function(a){var c=this,d=this.expect().text,e=Ec(d,this.options,this.text);return D(function(c,d,k){return e(k||a(c,d))},{assign:function(e,g,k){(k=a(e,k))||a.assign(e,k={});return ub(k,d,g,c.text,c.options)}})},objectIndex:function(a){var c=this,d=this.expression();this.consume("]");return D(function(e,f){var g=a(e,f),k=d(e,f),m;ka(k,c.text);if(!g)return t;(g=va(g[k],c.text))&&(g.then&&c.options.unwrapPromises)&&
(m=g,"$$v"in g||(m.$$v=t,m.then(function(a){m.$$v=a})),g=g.$$v);return g},{assign:function(e,f,g){var k=ka(d(e,g),c.text);(g=va(a(e,g),c.text))||a.assign(e,g={});return g[k]=f}})},functionCall:function(a,c){var d=[];if(")"!==this.peekToken().text){do d.push(this.expression());while(this.expect(","))}this.consume(")");var e=this;return function(f,g){for(var k=[],m=c?c(f,g):f,h=0;h<d.length;h++)k.push(va(d[h](f,g),e.text));h=a(f,g,m)||E;va(m,e.text);var l=e.text;if(h){if(h.constructor===h)throw la("isecfn",
l);if(h===Pe||h===Qe||Qc&&h===Qc)throw la("isecff",l);}k=h.apply?h.apply(m,k):h(k[0],k[1],k[2],k[3],k[4]);return va(k,e.text)}},arrayDeclaration:function(){var a=[],c=!0;if("]"!==this.peekToken().text){do{if(this.peek("]"))break;var d=this.expression();a.push(d);d.constant||(c=!1)}while(this.expect(","))}this.consume("]");return D(function(c,d){for(var g=[],k=0;k<a.length;k++)g.push(a[k](c,d));return g},{literal:!0,constant:c})},object:function(){var a=[],c=!0;if("}"!==this.peekToken().text){do{if(this.peek("}"))break;
var d=this.expect(),d=d.string||d.text;this.consume(":");var e=this.expression();a.push({key:d,value:e});e.constant||(c=!1)}while(this.expect(","))}this.consume("}");return D(function(c,d){for(var e={},m=0;m<a.length;m++){var h=a[m];e[h.key]=h.value(c,d)}return e},{literal:!0,constant:c})}};var Vb={},xa=C("$sce"),ga={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},Y=X.createElement("a"),Hc=ua(W.location.href,!0);mc.$inject=["$provide"];Ic.$inject=["$locale"];Kc.$inject=["$locale"];
var Nc=".",Je={yyyy:$("FullYear",4),yy:$("FullYear",2,0,!0),y:$("FullYear",1),MMMM:vb("Month"),MMM:vb("Month",!0),MM:$("Month",2,1),M:$("Month",1,1),dd:$("Date",2),d:$("Date",1),HH:$("Hours",2),H:$("Hours",1),hh:$("Hours",2,-12),h:$("Hours",1,-12),mm:$("Minutes",2),m:$("Minutes",1),ss:$("Seconds",2),s:$("Seconds",1),sss:$("Milliseconds",3),EEEE:vb("Day"),EEE:vb("Day",!0),a:function(a,c){return 12>a.getHours()?c.AMPMS[0]:c.AMPMS[1]},Z:function(a){a=-1*a.getTimezoneOffset();return a=(0<=a?"+":"")+(Xb(Math[0<
a?"floor":"ceil"](a/60),2)+Xb(Math.abs(a%60),2))}},Ie=/((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/,He=/^\-?\d+$/;Jc.$inject=["$locale"];var Fe=ba(K),Ge=ba(Ia);Lc.$inject=["$parse"];var dd=ba({restrict:"E",compile:function(a,c){8>=Q&&(c.href||c.name||c.$set("href",""),a.append(X.createComment("IE fix")));if(!c.href&&!c.xlinkHref&&!c.name)return function(a,c){var f="[object SVGAnimatedString]"===za.call(c.prop("href"))?"xlink:href":"href";c.on("click",function(a){c.attr(f)||
a.preventDefault()})}}}),Fb={};r(qb,function(a,c){if("multiple"!=a){var d=pa("ng-"+c);Fb[d]=function(){return{priority:100,link:function(a,f,g){a.$watch(g[d],function(a){g.$set(c,!!a)})}}}}});r(["src","srcset","href"],function(a){var c=pa("ng-"+a);Fb[c]=function(){return{priority:99,link:function(d,e,f){var g=a,k=a;"href"===a&&"[object SVGAnimatedString]"===za.call(e.prop("href"))&&(k="xlinkHref",f.$attr[k]="xlink:href",g=null);f.$observe(c,function(c){c?(f.$set(k,c),Q&&g&&e.prop(g,f[k])):"href"===
a&&f.$set(k,null)})}}}});var yb={$addControl:E,$removeControl:E,$setValidity:E,$setDirty:E,$setPristine:E};Oc.$inject=["$element","$attrs","$scope","$animate"];var Rc=function(a){return["$timeout",function(c){return{name:"form",restrict:a?"EAC":"E",controller:Oc,compile:function(){return{pre:function(a,e,f,g){if(!f.action){var k=function(a){a.preventDefault?a.preventDefault():a.returnValue=!1};sb(e[0],"submit",k);e.on("$destroy",function(){c(function(){$a(e[0],"submit",k)},0,!1)})}var m=e.parent().controller("form"),
h=f.name||f.ngForm;h&&ub(a,h,g,h);if(m)e.on("$destroy",function(){m.$removeControl(g);h&&ub(a,h,t,h);D(g,yb)})}}}}}]},ed=Rc(),rd=Rc(!0),Se=/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,Te=/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,Ue=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,Sc={text:Ab,number:function(a,c,d,e,f,g){Ab(a,c,d,e,f,g);e.$parsers.push(function(a){var c=e.$isEmpty(a);if(c||Ue.test(a))return e.$setValidity("number",
!0),""===a?null:c?a:parseFloat(a);e.$setValidity("number",!1);return t});Ke(e,"number",Ve,null,e.$$validityState);e.$formatters.push(function(a){return e.$isEmpty(a)?"":""+a});d.min&&(a=function(a){var c=parseFloat(d.min);return sa(e,"min",e.$isEmpty(a)||a>=c,a)},e.$parsers.push(a),e.$formatters.push(a));d.max&&(a=function(a){var c=parseFloat(d.max);return sa(e,"max",e.$isEmpty(a)||a<=c,a)},e.$parsers.push(a),e.$formatters.push(a));e.$formatters.push(function(a){return sa(e,"number",e.$isEmpty(a)||
ib(a),a)})},url:function(a,c,d,e,f,g){Ab(a,c,d,e,f,g);a=function(a){return sa(e,"url",e.$isEmpty(a)||Se.test(a),a)};e.$formatters.push(a);e.$parsers.push(a)},email:function(a,c,d,e,f,g){Ab(a,c,d,e,f,g);a=function(a){return sa(e,"email",e.$isEmpty(a)||Te.test(a),a)};e.$formatters.push(a);e.$parsers.push(a)},radio:function(a,c,d,e){x(d.name)&&c.attr("name",hb());c.on("click",function(){c[0].checked&&a.$apply(function(){e.$setViewValue(d.value)})});e.$render=function(){c[0].checked=d.value==e.$viewValue};
d.$observe("value",e.$render)},checkbox:function(a,c,d,e){var f=d.ngTrueValue,g=d.ngFalseValue;v(f)||(f=!0);v(g)||(g=!1);c.on("click",function(){a.$apply(function(){e.$setViewValue(c[0].checked)})});e.$render=function(){c[0].checked=e.$viewValue};e.$isEmpty=function(a){return a!==f};e.$formatters.push(function(a){return a===f});e.$parsers.push(function(a){return a?f:g})},hidden:E,button:E,submit:E,reset:E,file:E},Ve=["badInput"],jc=["$browser","$sniffer",function(a,c){return{restrict:"E",require:"?ngModel",
link:function(d,e,f,g){g&&(Sc[K(f.type)]||Sc.text)(d,e,f,g,c,a)}}}],wb="ng-valid",xb="ng-invalid",Oa="ng-pristine",zb="ng-dirty",We=["$scope","$exceptionHandler","$attrs","$element","$parse","$animate",function(a,c,d,e,f,g){function k(a,c){c=c?"-"+mb(c,"-"):"";g.removeClass(e,(a?xb:wb)+c);g.addClass(e,(a?wb:xb)+c)}this.$modelValue=this.$viewValue=Number.NaN;this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$name=
d.name;var m=f(d.ngModel),h=m.assign;if(!h)throw C("ngModel")("nonassign",d.ngModel,ia(e));this.$render=E;this.$isEmpty=function(a){return x(a)||""===a||null===a||a!==a};var l=e.inheritedData("$formController")||yb,n=0,p=this.$error={};e.addClass(Oa);k(!0);this.$setValidity=function(a,c){p[a]!==!c&&(c?(p[a]&&n--,n||(k(!0),this.$valid=!0,this.$invalid=!1)):(k(!1),this.$invalid=!0,this.$valid=!1,n++),p[a]=!c,k(c,a),l.$setValidity(a,c,this))};this.$setPristine=function(){this.$dirty=!1;this.$pristine=
!0;g.removeClass(e,zb);g.addClass(e,Oa)};this.$setViewValue=function(d){this.$viewValue=d;this.$pristine&&(this.$dirty=!0,this.$pristine=!1,g.removeClass(e,Oa),g.addClass(e,zb),l.$setDirty());r(this.$parsers,function(a){d=a(d)});this.$modelValue!==d&&(this.$modelValue=d,h(a,d),r(this.$viewChangeListeners,function(a){try{a()}catch(d){c(d)}}))};var q=this;a.$watch(function(){var c=m(a);if(q.$modelValue!==c){var d=q.$formatters,e=d.length;for(q.$modelValue=c;e--;)c=d[e](c);q.$viewValue!==c&&(q.$viewValue=
c,q.$render())}return c})}],Gd=function(){return{require:["ngModel","^?form"],controller:We,link:function(a,c,d,e){var f=e[0],g=e[1]||yb;g.$addControl(f);a.$on("$destroy",function(){g.$removeControl(f)})}}},Id=ba({require:"ngModel",link:function(a,c,d,e){e.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),kc=function(){return{require:"?ngModel",link:function(a,c,d,e){if(e){d.required=!0;var f=function(a){if(d.required&&e.$isEmpty(a))e.$setValidity("required",!1);else return e.$setValidity("required",
!0),a};e.$formatters.push(f);e.$parsers.unshift(f);d.$observe("required",function(){f(e.$viewValue)})}}}},Hd=function(){return{require:"ngModel",link:function(a,c,d,e){var f=(a=/\/(.*)\//.exec(d.ngList))&&RegExp(a[1])||d.ngList||",";e.$parsers.push(function(a){if(!x(a)){var c=[];a&&r(a.split(f),function(a){a&&c.push(aa(a))});return c}});e.$formatters.push(function(a){return J(a)?a.join(", "):t});e.$isEmpty=function(a){return!a||!a.length}}}},Xe=/^(true|false|\d+)$/,Jd=function(){return{priority:100,
compile:function(a,c){return Xe.test(c.ngValue)?function(a,c,f){f.$set("value",a.$eval(f.ngValue))}:function(a,c,f){a.$watch(f.ngValue,function(a){f.$set("value",a)})}}}},jd=ya({compile:function(a){a.addClass("ng-binding");return function(a,d,e){d.data("$binding",e.ngBind);a.$watch(e.ngBind,function(a){d.text(a==t?"":a)})}}}),ld=["$interpolate",function(a){return function(c,d,e){c=a(d.attr(e.$attr.ngBindTemplate));d.addClass("ng-binding").data("$binding",c);e.$observe("ngBindTemplate",function(a){d.text(a)})}}],
kd=["$sce","$parse",function(a,c){return{compile:function(d){d.addClass("ng-binding");return function(d,f,g){f.data("$binding",g.ngBindHtml);var k=c(g.ngBindHtml);d.$watch(function(){return(k(d)||"").toString()},function(c){f.html(a.getTrustedHtml(k(d))||"")})}}}}],md=Yb("",!0),od=Yb("Odd",0),nd=Yb("Even",1),pd=ya({compile:function(a,c){c.$set("ngCloak",t);a.removeClass("ng-cloak")}}),qd=[function(){return{scope:!0,controller:"@",priority:500}}],lc={},Ye={blur:!0,focus:!0};r("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),
function(a){var c=pa("ng-"+a);lc[c]=["$parse","$rootScope",function(d,e){return{compile:function(f,g){var k=d(g[c]);return function(c,d){d.on(a,function(d){var f=function(){k(c,{$event:d})};Ye[a]&&e.$$phase?c.$evalAsync(f):c.$apply(f)})}}}}]});var td=["$animate",function(a){return{transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(c,d,e,f,g){var k,m,h;c.$watch(e.ngIf,function(f){Ua(f)?m||(m=c.$new(),g(m,function(c){c[c.length++]=X.createComment(" end ngIf: "+e.ngIf+
" ");k={clone:c};a.enter(c,d.parent(),d)})):(h&&(h.remove(),h=null),m&&(m.$destroy(),m=null),k&&(h=Eb(k.clone),a.leave(h,function(){h=null}),k=null))})}}}],ud=["$http","$templateCache","$anchorScroll","$animate","$sce",function(a,c,d,e,f){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:Va.noop,compile:function(g,k){var m=k.ngInclude||k.src,h=k.onload||"",l=k.autoscroll;return function(g,k,q,r,F){var u=0,t,w,R,z=function(){w&&(w.remove(),w=null);t&&(t.$destroy(),t=null);
R&&(e.leave(R,function(){w=null}),w=R,R=null)};g.$watch(f.parseAsResourceUrl(m),function(f){var m=function(){!y(l)||l&&!g.$eval(l)||d()},q=++u;f?(a.get(f,{cache:c}).success(function(a){if(q===u){var c=g.$new();r.template=a;a=F(c,function(a){z();e.enter(a,null,k,m)});t=c;R=a;t.$emit("$includeContentLoaded");g.$eval(h)}}).error(function(){q===u&&z()}),g.$emit("$includeContentRequested")):(z(),r.template=null)})}}}}],Kd=["$compile",function(a){return{restrict:"ECA",priority:-400,require:"ngInclude",
link:function(c,d,e,f){d.html(f.template);a(d.contents())(c)}}}],vd=ya({priority:450,compile:function(){return{pre:function(a,c,d){a.$eval(d.ngInit)}}}}),wd=ya({terminal:!0,priority:1E3}),xd=["$locale","$interpolate",function(a,c){var d=/{}/g;return{restrict:"EA",link:function(e,f,g){var k=g.count,m=g.$attr.when&&f.attr(g.$attr.when),h=g.offset||0,l=e.$eval(m)||{},n={},p=c.startSymbol(),q=c.endSymbol(),s=/^when(Minus)?(.+)$/;r(g,function(a,c){s.test(c)&&(l[K(c.replace("when","").replace("Minus","-"))]=
f.attr(g.$attr[c]))});r(l,function(a,e){n[e]=c(a.replace(d,p+k+"-"+h+q))});e.$watch(function(){var c=parseFloat(e.$eval(k));if(isNaN(c))return"";c in l||(c=a.pluralCat(c-h));return n[c](e,f,!0)},function(a){f.text(a)})}}}],yd=["$parse","$animate",function(a,c){var d=C("ngRepeat");return{transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,link:function(e,f,g,k,m){var h=g.ngRepeat,l=h.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?\s*$/),n,p,q,s,t,u,A={$id:Ka};if(!l)throw d("iexp",
h);g=l[1];k=l[2];(l=l[3])?(n=a(l),p=function(a,c,d){u&&(A[u]=a);A[t]=c;A.$index=d;return n(e,A)}):(q=function(a,c){return Ka(c)},s=function(a){return a});l=g.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/);if(!l)throw d("iidexp",g);t=l[3]||l[1];u=l[2];var y={};e.$watchCollection(k,function(a){var g,k,l=f[0],n,A={},B,I,H,v,E,C,x,J=[];if(Pa(a))C=a,E=p||q;else{E=p||s;C=[];for(H in a)a.hasOwnProperty(H)&&"$"!=H.charAt(0)&&C.push(H);C.sort()}B=C.length;k=J.length=C.length;for(g=0;g<k;g++)if(H=a===
C?g:C[g],v=a[H],n=E(H,v,g),Da(n,"`track by` id"),y.hasOwnProperty(n))x=y[n],delete y[n],A[n]=x,J[g]=x;else{if(A.hasOwnProperty(n))throw r(J,function(a){a&&a.scope&&(y[a.id]=a)}),d("dupes",h,n,na(v));J[g]={id:n};A[n]=!1}for(H in y)y.hasOwnProperty(H)&&(x=y[H],g=Eb(x.clone),c.leave(g),r(g,function(a){a.$$NG_REMOVED=!0}),x.scope.$destroy());g=0;for(k=C.length;g<k;g++){H=a===C?g:C[g];v=a[H];x=J[g];J[g-1]&&(l=J[g-1].clone[J[g-1].clone.length-1]);if(x.scope){I=x.scope;n=l;do n=n.nextSibling;while(n&&n.$$NG_REMOVED);
x.clone[0]!=n&&c.move(Eb(x.clone),null,w(l));l=x.clone[x.clone.length-1]}else I=e.$new();I[t]=v;u&&(I[u]=H);I.$index=g;I.$first=0===g;I.$last=g===B-1;I.$middle=!(I.$first||I.$last);I.$odd=!(I.$even=0===(g&1));x.scope||m(I,function(a){a[a.length++]=X.createComment(" end ngRepeat: "+h+" ");c.enter(a,null,w(l));l=a;x.scope=I;x.clone=a;A[x.id]=x})}y=A})}}}],zd=["$animate",function(a){return function(c,d,e){c.$watch(e.ngShow,function(c){a[Ua(c)?"removeClass":"addClass"](d,"ng-hide")})}}],sd=["$animate",
function(a){return function(c,d,e){c.$watch(e.ngHide,function(c){a[Ua(c)?"addClass":"removeClass"](d,"ng-hide")})}}],Ad=ya(function(a,c,d){a.$watch(d.ngStyle,function(a,d){d&&a!==d&&r(d,function(a,d){c.css(d,"")});a&&c.css(a)},!0)}),Bd=["$animate",function(a){return{restrict:"EA",require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(c,d,e,f){var g=[],k=[],m=[],h=[];c.$watch(e.ngSwitch||e.on,function(d){var n,p;n=0;for(p=m.length;n<p;++n)m[n].remove();n=m.length=0;for(p=
h.length;n<p;++n){var q=k[n];h[n].$destroy();m[n]=q;a.leave(q,function(){m.splice(n,1)})}k.length=0;h.length=0;if(g=f.cases["!"+d]||f.cases["?"])c.$eval(e.change),r(g,function(d){var e=c.$new();h.push(e);d.transclude(e,function(c){var e=d.element;k.push(c);a.enter(c,e.parent(),e)})})})}}}],Cd=ya({transclude:"element",priority:800,require:"^ngSwitch",link:function(a,c,d,e,f){e.cases["!"+d.ngSwitchWhen]=e.cases["!"+d.ngSwitchWhen]||[];e.cases["!"+d.ngSwitchWhen].push({transclude:f,element:c})}}),Dd=
ya({transclude:"element",priority:800,require:"^ngSwitch",link:function(a,c,d,e,f){e.cases["?"]=e.cases["?"]||[];e.cases["?"].push({transclude:f,element:c})}}),Fd=ya({link:function(a,c,d,e,f){if(!f)throw C("ngTransclude")("orphan",ia(c));f(function(a){c.empty();c.append(a)})}}),fd=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(c,d){"text/ng-template"==d.type&&a.put(d.id,c[0].text)}}}],Ze=C("ngOptions"),Ed=ba({terminal:!0}),gd=["$compile","$parse",function(a,c){var d=
/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,e={$setViewValue:E};return{restrict:"E",require:["select","?ngModel"],controller:["$element","$scope","$attrs",function(a,c,d){var m=this,h={},l=e,n;m.databound=d.ngModel;m.init=function(a,c,d){l=a;n=d};m.addOption=function(c){Da(c,'"option value"');h[c]=!0;l.$viewValue==c&&(a.val(c),n.parent()&&n.remove())};
m.removeOption=function(a){this.hasOption(a)&&(delete h[a],l.$viewValue==a&&this.renderUnknownOption(a))};m.renderUnknownOption=function(c){c="? "+Ka(c)+" ?";n.val(c);a.prepend(n);a.val(c);n.prop("selected",!0)};m.hasOption=function(a){return h.hasOwnProperty(a)};c.$on("$destroy",function(){m.renderUnknownOption=E})}],link:function(e,g,k,m){function h(a,c,d,e){d.$render=function(){var a=d.$viewValue;e.hasOption(a)?(v.parent()&&v.remove(),c.val(a),""===a&&u.prop("selected",!0)):x(a)&&u?c.val(""):e.renderUnknownOption(a)};
c.on("change",function(){a.$apply(function(){v.parent()&&v.remove();d.$setViewValue(c.val())})})}function l(a,c,d){var e;d.$render=function(){var a=new bb(d.$viewValue);r(c.find("option"),function(c){c.selected=y(a.get(c.value))})};a.$watch(function(){Aa(e,d.$viewValue)||(e=ha(d.$viewValue),d.$render())});c.on("change",function(){a.$apply(function(){var a=[];r(c.find("option"),function(c){c.selected&&a.push(c.value)});d.$setViewValue(a)})})}function n(e,f,g){function k(){var a={"":[]},c=[""],d,h,
s,t,v;s=g.$modelValue;t=w(e)||[];var E=n?Zb(t):t,I,M,B;M={};B=!1;if(q)if(h=g.$modelValue,x&&J(h))for(B=new bb([]),d={},v=0;v<h.length;v++)d[m]=h[v],B.put(x(e,d),h[v]);else B=new bb(h);v=B;var D,K;for(B=0;I=E.length,B<I;B++){h=B;if(n){h=E[B];if("$"===h.charAt(0))continue;M[n]=h}M[m]=t[h];d=r(e,M)||"";(h=a[d])||(h=a[d]=[],c.push(d));q?d=y(v.remove(x?x(e,M):u(e,M))):(x?(d={},d[m]=s,d=x(e,d)===x(e,M)):d=s===u(e,M),v=v||d);D=l(e,M);D=y(D)?D:"";h.push({id:x?x(e,M):n?E[B]:B,label:D,selected:d})}q||(F||null===
s?a[""].unshift({id:"",label:"",selected:!v}):v||a[""].unshift({id:"?",label:"",selected:!0}));M=0;for(E=c.length;M<E;M++){d=c[M];h=a[d];z.length<=M?(s={element:C.clone().attr("label",d),label:h.label},t=[s],z.push(t),f.append(s.element)):(t=z[M],s=t[0],s.label!=d&&s.element.attr("label",s.label=d));D=null;B=0;for(I=h.length;B<I;B++)d=h[B],(v=t[B+1])?(D=v.element,v.label!==d.label&&D.text(v.label=d.label),v.id!==d.id&&D.val(v.id=d.id),D[0].selected!==d.selected&&(D.prop("selected",v.selected=d.selected),
Q&&D.prop("selected",v.selected))):(""===d.id&&F?K=F:(K=A.clone()).val(d.id).prop("selected",d.selected).attr("selected",d.selected).text(d.label),t.push({element:K,label:d.label,id:d.id,selected:d.selected}),p.addOption(d.label,K),D?D.after(K):s.element.append(K),D=K);for(B++;t.length>B;)d=t.pop(),p.removeOption(d.label),d.element.remove()}for(;z.length>M;)z.pop()[0].element.remove()}var h;if(!(h=s.match(d)))throw Ze("iexp",s,ia(f));var l=c(h[2]||h[1]),m=h[4]||h[6],n=h[5],r=c(h[3]||""),u=c(h[2]?
h[1]:m),w=c(h[7]),x=h[8]?c(h[8]):null,z=[[{element:f,label:""}]];F&&(a(F)(e),F.removeClass("ng-scope"),F.remove());f.empty();f.on("change",function(){e.$apply(function(){var a,c=w(e)||[],d={},h,l,p,r,s,v,y;if(q)for(l=[],r=0,v=z.length;r<v;r++)for(a=z[r],p=1,s=a.length;p<s;p++){if((h=a[p].element)[0].selected){h=h.val();n&&(d[n]=h);if(x)for(y=0;y<c.length&&(d[m]=c[y],x(e,d)!=h);y++);else d[m]=c[h];l.push(u(e,d))}}else if(h=f.val(),"?"==h)l=t;else if(""===h)l=null;else if(x)for(y=0;y<c.length;y++){if(d[m]=
c[y],x(e,d)==h){l=u(e,d);break}}else d[m]=c[h],n&&(d[n]=h),l=u(e,d);g.$setViewValue(l);k()})});g.$render=k;e.$watchCollection(w,k);e.$watchCollection(function(){var a={},c=w(e);if(c){for(var d=Array(c.length),f=0,g=c.length;f<g;f++)a[m]=c[f],d[f]=l(e,a);return d}},k);q&&e.$watchCollection(function(){return g.$modelValue},k)}if(m[1]){var p=m[0];m=m[1];var q=k.multiple,s=k.ngOptions,F=!1,u,A=w(X.createElement("option")),C=w(X.createElement("optgroup")),v=A.clone();k=0;for(var z=g.children(),E=z.length;k<
E;k++)if(""===z[k].value){u=F=z.eq(k);break}p.init(m,F,v);q&&(m.$isEmpty=function(a){return!a||0===a.length});s?n(e,g,m):q?l(e,g,m):h(e,g,m,p)}}}}],id=["$interpolate",function(a){var c={addOption:E,removeOption:E};return{restrict:"E",priority:100,compile:function(d,e){if(x(e.value)){var f=a(d.text(),!0);f||e.$set("value",d.text())}return function(a,d,e){var h=d.parent(),l=h.data("$selectController")||h.parent().data("$selectController");l&&l.databound?d.prop("selected",!1):l=c;f?a.$watch(f,function(a,
c){e.$set("value",a);a!==c&&l.removeOption(c);l.addOption(a)}):l.addOption(e.value);d.on("$destroy",function(){l.removeOption(e.value)})}}}}],hd=ba({restrict:"E",terminal:!0});W.angular.bootstrap?console.log("WARNING: Tried to load angular more than once."):((Ea=W.jQuery)&&Ea.fn.on?(w=Ea,D(Ea.fn,{scope:La.scope,isolateScope:La.isolateScope,controller:La.controller,injector:La.injector,inheritedData:La.inheritedData}),Gb("remove",!0,!0,!1),Gb("empty",!1,!1,!1),Gb("html",!1,!1,!0)):w=S,Va.element=w,
$c(Va),w(X).ready(function(){Xc(X,fc)}))})(window,document);!window.angular.$$csp()&&window.angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide{display:none !important;}ng\\:form{display:block;}.ng-animate-block-transitions{transition:0s all!important;-webkit-transition:0s all!important;}.ng-hide-add-active,.ng-hide-remove{display:block!important;}</style>');
//# sourceMappingURL=angular.min.js.map

; browserify_shim__define__module__export__(typeof angular != "undefined" ? angular : window.angular);

}).call(global, undefined, undefined, undefined, undefined, function defineExport(ex) { module.exports = ex; });

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],"/home/codio/workspace/bower_components/famous-angular/dist/famous-angular.min.js":[function(require,module,exports){
(function (global){

; require("famous-polyfills");
require("/home/codio/workspace/bower_components/famous/dist/famous-global.min.js");
require("/home/codio/workspace/bower_components/angular/angular.min.js");
require("/home/codio/workspace/bower_components/angular-animate/angular-animate.min.js");
require("/home/codio/workspace/bower_components/angular-sanitize/angular-sanitize.min.js");
require("/home/codio/workspace/bower_components/angular-ui-router/release/angular-ui-router.min.js");
;__browserify_shim_require__=require;(function browserifyShim(module, define, require) {
/**
 * famous-angular - Bring structure to your Famo.us apps with the power of AngularJS. Famo.us/Angular integrates seamlessly with existing Angular and Famo.us apps.
 * @version v0.5.0
 * @link https://github.com/Famous/famous-angular
 * @license MPL v2.0
 */
"use strict";var ngFameApp=angular.module("famous.angular",[]);ngFameApp.provider("$famous",function(){var e={"famous/core/Context":famous.core.Context,"famous/core/ElementAllocator":famous.core.ElementAllocator,"famous/core/Engine":famous.core.Engine,"famous/core/Entity":famous.core.Entity,"famous/core/EventEmitter":famous.core.EventEmitter,"famous/core/EventHandler":famous.core.EventHandler,"famous/core/Group":famous.core.Group,"famous/core/Modifier":famous.core.Modifier,"famous/core/OptionsManager":famous.core.OptionsManager,"famous/core/RenderNode":famous.core.RenderNode,"famous/core/Scene":famous.core.Scene,"famous/core/SpecParser":famous.core.SpecParser,"famous/core/Surface":famous.core.Surface,"famous/core/Transform":famous.core.Transform,"famous/core/View":famous.core.View,"famous/core/ViewSequence":famous.core.ViewSequence,"famous/events/EventArbiter":famous.events.EventArbiter,"famous/events/EventFilter":famous.events.EventFilter,"famous/events/EventMapper":famous.events.EventMapper,"famous/inputs/FastClick":famous.inputs.FastClick,"famous/inputs/GenericSync":famous.inputs.GenericSync,"famous/inputs/MouseSync":famous.inputs.MouseSync,"famous/inputs/PinchSync":famous.inputs.PinchSync,"famous/inputs/RotateSync":famous.inputs.RotateSync,"famous/inputs/ScaleSync":famous.inputs.ScaleSync,"famous/inputs/ScrollSync":famous.inputs.ScrollSync,"famous/inputs/TouchSync":famous.inputs.TouchSync,"famous/inputs/TouchTracker":famous.inputs.TouchTracker,"famous/inputs/TwoFingerSync":famous.inputs.TwoFingerSync,"famous/math/Matrix":famous.math.Matrix,"famous/math/Quaternion":famous.math.Quaternion,"famous/math/Random":famous.math.Random,"famous/math/Utilities":famous.math.Utilities,"famous/math/Vector":famous.math.Vector,"famous/modifiers/Draggable":famous.modifiers.Draggable,"famous/modifiers/Fader":famous.modifiers.Fader,"famous/modifiers/ModifierChain":famous.modifiers.ModifierChain,"famous/modifiers/StateModifier":famous.modifiers.StateModifier,"famous/surfaces/CanvasSurface":famous.surfaces.CanvasSurface,"famous/surfaces/ContainerSurface":famous.surfaces.ContainerSurface,"famous/surfaces/FormContainerSurface":famous.surfaces.FormContainerSurface,"famous/surfaces/ImageSurface":famous.surfaces.ImageSurface,"famous/surfaces/InputSurface":famous.surfaces.InputSurface,"famous/surfaces/SubmitInputSurface":famous.surfaces.SubmitInputSurface,"famous/surfaces/TextareaSurface":famous.surfaces.TextareaSurface,"famous/surfaces/VideoSurface":famous.surfaces.VideoSurface,"famous/transitions/CachedMap":famous.transitions.CachedMap,"famous/transitions/Easing":famous.transitions.Easing,"famous/transitions/MultipleTransition":famous.transitions.MultipleTransition,"famous/transitions/SnapTransition":famous.transitions.SnapTransition,"famous/transitions/SpringTransition":famous.transitions.SpringTransition,"famous/transitions/Transitionable":famous.transitions.Transitionable,"famous/transitions/TransitionableTransform":famous.transitions.TransitionableTransform,"famous/transitions/TweenTransition":famous.transitions.TweenTransition,"famous/transitions/WallTransition":famous.transitions.WallTransition,"famous/utilities/KeyCodes":famous.utilities.KeyCodes,"famous/utilities/Timer":famous.utilities.Timer,"famous/utilities/Utility":famous.utilities.Utility,"famous/views/Deck":famous.views.Deck,"famous/views/EdgeSwapper":famous.views.EdgeSwapper,"famous/views/FlexibleLayout":famous.views.FlexibleLayout,"famous/views/Flipper":famous.views.Flipper,"famous/views/GridLayout":famous.views.GridLayout,"famous/views/HeaderFooterLayout":famous.views.HeaderFooterLayout,"famous/views/Lightbox":famous.views.Lightbox,"famous/views/RenderController":famous.views.RenderController,"famous/views/ScrollContainer":famous.views.ScrollContainer,"famous/views/Scroller":famous.views.Scroller,"famous/views/Scrollview":famous.views.Scrollview,"famous/views/SequentialLayout":famous.views.SequentialLayout,"famous/widgets/NavigationBar":famous.widgets.NavigationBar,"famous/widgets/Slider":famous.widgets.Slider,"famous/widgets/TabBar":famous.widgets.TabBar,"famous/widgets/ToggleButton":famous.widgets.ToggleButton,"famous/physics/PhysicsEngine":famous.physics.PhysicsEngine,"famous/physics/bodies/Body":famous.physics.bodies.Body,"famous/physics/bodies/Circle":famous.physics.bodies.Circle,"famous/physics/bodies/Particle":famous.physics.bodies.Particle,"famous/physics/bodies/Rectangle":famous.physics.bodies.Rectangle,"famous/physics/constraints/Collision":famous.physics.constraints.Collision,"famous/physics/constraints/Constraint":famous.physics.constraints.Constraint,"famous/physics/constraints/Curve":famous.physics.constraints.Curve,"famous/physics/constraints/Distance":famous.physics.constraints.Distance,"famous/physics/constraints/Snap":famous.physics.constraints.Snap,"famous/physics/constraints/Surface":famous.physics.constraints.Surface,"famous/physics/constraints/Wall":famous.physics.constraints.Wall,"famous/physics/constraints/Walls":famous.physics.constraints.Walls,"famous/physics/forces/Drag":famous.physics.forces.Drag,"famous/physics/forces/Force":famous.physics.forces.Force,"famous/physics/forces/Repulsion":famous.physics.forces.Repulsion,"famous/physics/forces/RotationalDrag":famous.physics.forces.RotationalDrag,"famous/physics/forces/RotationalSpring":famous.physics.forces.RotationalSpring,"famous/physics/forces/Spring":famous.physics.forces.Spring,"famous/physics/forces/VectorField":famous.physics.forces.VectorField,"famous/physics/integrators/SymplecticEuler":famous.physics.integrators.SymplecticEuler};this.registerModule=function(n,r){e[n]=r},e.getIsolate=function(e){return e&&"isolate"in e?e.isolate[e.$id]:{}},e.find=function(n){var r=angular.element(window.document.querySelectorAll(n)),a=function(e){var n=[];return angular.forEach(e,function(e,r){n[r]=angular.element(e).scope()}),n}(r),o=function(n){var r=[];return angular.forEach(n,function(n,a){r[a]=e.getIsolate(n)}),r}(a);return o};var n=/([\:\-\_]+(.))/g,r=/^moz([A-Z])/,a=/^(x[\:\-_]|data[\:\-_])/i,o=/^FA\-.*SURFACE/,t=/^FA\-.*/;window.$famousUtil=e.util={isASurface:function(e){return o.test(e[0].tagName)},isFaElement:function(e){if(t.test(e[0].tagName))return!0;var n=!1;return angular.forEach(e[0].attributes,function(e){n=n||t.test(e)}),n},camelCase:function(e){return e.replace(n,function(e,n,r,a){return a?r.toUpperCase():r}).replace(r,"Moz$1")},directiveNormalize:function(n){return e.util.camelCase(n.replace(a,""))}},this.$get=function(){return e}}),angular.module("famous.angular").config(["$provide",function(e){e.decorator("$animate",["$delegate","$rootScope","$famous","$parse","$famousDecorator",function(e,n,r,a,o){var t=r["famous/utilities/Timer"],i="$$faAnimationActive",s={},u=function(e){var n=r.getIsolate(e);return!n&&e&&(n=o.$$getIsolateById(s[e.$id])),n},c={enabled:e.enabled};return angular.forEach(["addClass","removeClass"],function(n){var a=angular.element.prototype[n];angular.element.prototype[n]=function(e){return a.apply(this,arguments),r.util.isASurface(this)&&"string"==typeof e&&""!==e.trim()&&u(this.scope()).renderNode[n](e),this},c[n]=function(a,o,t){if(e[n](a,o,t),r.util.isFaElement(a)){var i=u(a.scope());if(r.util.isASurface(a)){var s=i.renderNode;angular.forEach(o.split(" "),function(e){"ng-hide"===e?"addClass"===n?i.hide():"removeClass"===n&&i.show():s[n](e)})}else angular.forEach(o.split(" "),function(e){"ng-hide"===e&&("addClass"===n?i.hide():"removeClass"===n&&i.show())})}}}),c.setClass=function(n,a,o,t){if(e.setClass(n,a,o,t),r.util.isASurface(n)){var i=u(n.scope()).renderNode;angular.forEach(a.split(" "),function(e){i.addClass(e)}),angular.forEach(o.split(" "),function(e){i.removeClass(e)})}},angular.forEach(["enter","leave","move"],function(a){var o=a[0].toUpperCase()+a.slice(1);c[a]=function(c){var f=this,l=arguments,d="enter"===a,m=c.scope();m&&m.$parent&&(s[m.$id]=m.$parent.$id);var p=u(m);d===!0&&e[a].apply(this,arguments),c.data(i)===!0&&p&&p.$$animateHaltHandler&&p.$$animateHaltHandler(c.scope()),c.data(i,!0);var v=function(){m&&m.$id;if("leave"===a&&r.util.isFaElement(c)){var n=u(m);n&&n.id&&n.hide()}c.data(i)!==!1&&(c.data(i,!1),d===!1&&e[a].apply(f,l))};n.$$postDigest(function(){var e,n=c.scope(),r=u(n);if(r&&(e=r["$$animate"+o+"Handler"]),void 0===e)return void v();var a=e(n,{$done:v});"number"==typeof a&&t.setTimeout(v,a)})}}),c}])}]),angular.module("famous.angular").factory("$famousDecorator",["$famous",function(e){var n={child:{},parent:{},renderable:function(n){var r=e["famous/core/RenderNode"];n.renderGate=new r,n.emptyNode=new r,n.show=function(){n.renderGate&&n.renderGate.set(n.renderNode)},n.hide=function(){n.renderGate.set(n.emptyNode)}}},r={};return{addRole:function(e,r){n[e](r)},ensureIsolate:function(e,n){if(n){var a=["fa-edge-swapper","fa-render-controller","fa-deck","fa-light-box"],o=!1;angular.forEach(a,function(e){return e.toUpperCase()===n[0].tagName?void(o=!0):void 0!==n[0].attributes[e]?void(o=!0):void 0}),o&&(e=e.$parent)}e.isolate=e.isolate||{},e.isolate[e.$id]=e.isolate[e.$id]||{};var t=e.isolate[e.$id];t.id=e.$id;var i=e.$eval("$index");return i&&"$index"!==i&&!t.index&&(t.index=i),r[t.id]=t,t},$$getIsolateById:function(e){return r[e]},registerChild:function(e,n,r,a){e.$emit("registerChild",r),n.one("$destroy",function(){"removeMethod"in r&&r.removeMethod(r.id),r&&r.hide&&r.hide(),a&&a()})},sequenceWith:function(n,r,a,o){n.$on("registerChild",function(t,i){if(t.targetScope.$id!==n.$id){var s=e.getIsolate(n);i.$parent=s,s.$children=s.$children||[],s.$children.push(i),r(i),t.stopPropagation(),a&&(i.removeMethod=a),o&&(i.updateMethod=o)}})}}}]),angular.module("famous.angular").service("$famousPipe",function(){function e(e,n,r){e instanceof Array||(e=[e]),n instanceof Array||(n=[n]);for(var a=0;a<e.length;a++)for(var o=0;o<n.length;o++)void 0!==n[o]&&void 0!==e[a]&&n[o][r](e[a])}this.unpipesFromTargets=function(n,r){e(n,r,"unpipe")},this.pipesToTargets=function(n,r){e(n,r,"pipe")}}),angular.module("famous.angular").factory("$timeline",function(){var e=function(e,n){return"number"==typeof e?e+n:e.map(function(e,r){return e+n[r]})},n=function(e,n){return"number"==typeof e?e-n:e.map(function(e,r){return e-n[r]})},r=function(e,n){return"number"==typeof e?e*n:e.map(function(e){return e*n})},a=function(a,o,t,i,s){return function(u){var c=i,f=-o,l=1/(t-o),d=n(s,i);return e(r(d,a(l*(u+f))),c)}};return function(e){var n=function(e){return e};return function(r){if(r<e[0][0])return e[0][1];for(var o=0;o<e.length-1;o++)if(e[o][0]<=r&&r<e[o+1][0]){var t=a(e[o][2]||n,e[o][0],e[o+1][0],e[o][1],e[o+1][1]);return t(r)}return e[e.length-1][1]}}}),angular.module("famous.angular").directive("faAnimateEnter",["$parse","$famousDecorator",function(e,n){return{restrict:"A",scope:!1,priority:16,compile:function(){return{post:function(r,a,o){var t=n.ensureIsolate(r);t.$$animateEnterHandler=e(o.faAnimateEnter),o.$observe("faAnimateEnter",function(){t.$$animateEnterHandler=e(o.faAnimateEnter)})}}}}}]),angular.module("famous.angular").directive("faAnimateHalt",["$parse","$famousDecorator",function(e,n){return{restrict:"A",scope:!1,priority:16,compile:function(){return{post:function(r,a,o){var t=n.ensureIsolate(r);t.$$animateHaltHandler=e(o.faAnimateHalt),o.$observe("faAnimateHalt",function(){t.$$animateHaltHandler=e(o.faAnimateHalt)})}}}}}]),angular.module("famous.angular").directive("faAnimateLeave",["$parse","$famousDecorator",function(e,n){return{restrict:"A",scope:!1,priority:16,compile:function(){return{post:function(r,a,o){var t=n.ensureIsolate(r);t.$$animateLeaveHandler=e(o.faAnimateLeave),o.$observe("faAnimateLeave",function(){t.$$animateLeaveHandler=e(o.faAnimateLeave)})}}}}}]),angular.module("famous.angular").directive("faAnimateMove",["$parse","$famousDecorator",function(e,n){return{restrict:"A",scope:!1,priority:16,compile:function(){return{post:function(r,a,o){var t=n.ensureIsolate(r);t.$$animateMoveHandler=e(o.faAnimateMove),o.$observe("faAnimateMove",function(){t.$$animateMoveHandler=e(o.faAnimateMove)})}}}}}]),angular.module("famous.angular").directive("faAnimation",["$famous","$famousDecorator",function(e,n){return{restrict:"EA",scope:!0,compile:function(){var r=e["famous/core/Transform"],a=e["famous/transitions/Transitionable"],o=e["famous/transitions/Easing"];return{pre:function(e){n.ensureIsolate(e)},post:function(e,t,i){var s=n.ensureIsolate(e);setTimeout(function(){s.timeline=e.$eval(i.timeline),s._trans=new a(0),s.play=function(n){var r={duration:e.$eval(i.duration),curve:e.$eval(i.curve)||"linear"};s._trans.set(1,r,function(){n&&n(),i.loop&&setTimeout(function(){s.replay(n)},0)})},s.reset=function(){s._trans.set(0)},s.replay=function(e){s.reset(),s.play(e)};var n=null;i.event&&(n&&n(),n=e.$on(i.event,function(e,n){var r=n&&n.callback?n.callback:void 0;s.replay(r)}));i.id;if(void 0===s.timeline&&(s.timeline=s._trans.get.bind(s._trans),i.autoplay&&s.play()),!s.timeline instanceof Function)throw new Error("timeline must be a reference to a function or duration must be provided");for(var u=t[0].querySelectorAll("animate"),c={},f=0;f<u.length;f++)!function(){var n=u[f];if(n.attributes.targetmodselector){var a=angular.element(t[0].parentNode)[0].querySelectorAll(n.attributes.targetmodselector.value);angular.forEach(a,function(a){var t=angular.element(a).scope(),i=t.isolate[t.$id].modifier,u=t.isolate[t.$id].getTransform,f=n.attributes.curve&&"linear"!==n.attributes.curve.value?o[n.attributes.curve.value]:function(e){return e};if(n.attributes.field){var l=n.attributes.field.value,d=n.attributes.timelinelowerbound?parseFloat(n.attributes.timelinelowerbound.value):0,m=n.attributes.timelineupperbound?parseFloat(n.attributes.timelineupperbound.value):1;if(!n.attributes.startvalue)throw new Error("you must provide a start value for the animation");var p=e.$eval(n.attributes.startvalue.value);if(!n.attributes.endvalue)throw new Error("you must provide an end value for the animation");var v=e.$eval(n.attributes.endValue.value),g=c[t.$id]=c[t.$id]||{},h=g[l]=g[l]||[];h.push({field:l,lowerBound:d,upperBound:m,startValue:p,endValue:v,curve:f}),h.sort(function(e,n){return e.lowerBound-n.lowerBound});for(var $=1;$<h.length;$++)for(var y=h[$].lowerBound,w=0;$>w;w++)if(y<h[w].upperBound)throw new Error("Animate segments have overlappingdomains for the same field ("+l+").At any point in the timeline, only one <animate>can affect a given field on the same modifier.");var S=function(){for(var e=s.timeline()||0,n=0,r=h[n],a=0;a<h.length;a++){if(e>=h[a].lowerBound&&e<=h[a].upperBound){r=h[a];break}if(a===h.length-1){r=h[a];break}if(e>=h[a].upperBound&&e<h[a+1].lowerBound){r=h[a];break}}if(e<=r.lowerBound)return r.startValue;if(e>=r.upperBound)return r.endValue;var o=r.upperBound-r.lowerBound,t=(e-r.lowerBound)/o;if(Array.isArray(r.startValue)){for(var i=[],u=0;u<r.startValue.length;u++)i.push(r.startValue[u]+r.curve(t)*(r.endValue[u]-r.startValue[u]));return i}return r.startValue+r.curve(t)*(r.endValue-r.startValue)},b=g.transformComponents=g.transformComponents||[];"opacity"===l?i.opacityFrom(function(){return S()}):"origin"===l?i.originFrom(function(){return S()}):"size"===l?i.sizeFrom(function(){return S()}):(b.push({field:l,fn:S}),i.transformFrom(function(){for(var e={},n=u&&u()?[u()]:[],a=0;a<b.length;a++)!function(){var o=b[a].field;if(!e[o]){var t=b[a].fn();n.push(Array.isArray(t)?r[o].apply(this,t):r[o](t)),e[o]=!0}}();return 1===n.length?n[0]:r.multiply.apply(this,n)}))}})}}()},1)}}}}}]),angular.module("famous.angular").directive("faApp",["$famous","$famousDecorator",function(e,n){return{template:'<div style="display: none;"><div></div></div>',transclude:!0,scope:!0,restrict:"EA",compile:function(r,a,o){return{pre:function(r,a,o){function t(){s.apply(this,arguments)}{var i=n.ensureIsolate(r),s=e["famous/core/View"],u=e["famous/core/Engine"];e["famous/core/Transform"]}a.append('<div class="famous-angular-clipping-container"><div class="famous-angular-container"></div></div>'),i.context=u.createContext(a[0].querySelector(".famous-angular-container")),window.context=i.context;var c=function(){var e=parseInt(o.faPerspective);e&&i.context.setPerspective(e)};o.$observe("faPerspective",c),c(),t.prototype=Object.create(s.prototype),t.prototype.constructor=t;i.view=new t,i.context.add(i.view),r.$on("$destroy",function(){i.context.update=angular.noop}),r.$on("registerChild",function(e,n){i.view.add(n.renderNode),e.stopPropagation()})},post:function(e,r){var a=n.ensureIsolate(e);o(e,function(e){angular.element(r[0].querySelectorAll("div div")[0]).append(e)}),a.readyToRender=!0}}}}}]),angular.module("famous.angular").directive("faCanvasSurface",["$famous","$famousDecorator","$interpolate","$controller","$compile",function(e,n){return{scope:!0,transclude:!0,template:'<canvas class="fa-canvas-surface"></canvas>',restrict:"EA",compile:function(r,a,o){return{pre:function(r,a,o){{var t=n.ensureIsolate(r),i=e["famous/surfaces/CanvasSurface"];e["famous/core/Transform"],e["famous/core/EventHandler"]}t.renderNode=new i({size:r.$eval(o.faSize)}),n.addRole("renderable",t),t.show(),o.class&&t.renderNode.setClasses(o["class"].split(" ")),n.sequenceWith(r,function(){throw new Error("Surfaces are leaf nodes of the Famo.us render tree and cannot accept rendernode children.  To include additional Famo.us content inside of a fa-surface, that content must be enclosed in an additional fa-app.")})},post:function(e,r){var a=n.ensureIsolate(e),t=function(){a.renderNode.setContent(r[0].querySelector("canvas.fa-canvas-surface"))};t(),o(e,function(e){angular.element(r[0].querySelectorAll("canvas.fa-canvas-surface")).append(e)}),n.registerChild(e,r,a,function(){})}}}}}]),angular.module("famous.angular").directive("faClick",["$parse","$famousDecorator",function(e,n){return{restrict:"A",compile:function(){return{post:function(r,a,o){var t=n.ensureIsolate(r);if(o.faClick){var i=t.renderNode._eventInput||t.renderNode;i.on("click",function(n){var a=e(o.faClick);a(r,{$event:n}),r.$$phase||r.$apply()})}}}}}}]),angular.module("famous.angular").directive("faContainerSurface",["$famous","$famousDecorator",function(e,n){return{template:"<div></div>",restrict:"E",transclude:!0,scope:!0,compile:function(r,a,o){return{pre:function(r,a,o){var t=n.ensureIsolate(r),i=e["famous/surfaces/ContainerSurface"],s=r.$eval(o.faOptions)||{};t.renderNode=new i(s),n.addRole("renderable",t),t.show(),n.sequenceWith(r,function(e){t.renderNode.add(e.renderGate)})},post:function(e,r){var a=n.ensureIsolate(e);o(e,function(e){r.find("div").append(e)}),n.registerChild(e,r,a)}}}}}]),angular.module("famous.angular").directive("faDraggable",["$famous","$famousDecorator","$parse","$rootScope",function(e,n,r,a){return{template:"<div></div>",transclude:!0,restrict:"EA",priority:2,scope:!0,compile:function(r,o,t){return{post:function(r,o,i){var s=n.ensureIsolate(r),u=e["famous/core/RenderNode"],c=e["famous/modifiers/Draggable"],f=r.$eval(i.faOptions)||{};r.$watch(function(){return r.$eval(i.faOptions)},function(e){e=e||{},s.modifier.setOptions(e)},!0),s.modifier=new c(f),s.renderNode=(new u).add(s.modifier),n.addRole("renderable",s),s.show(),n.sequenceWith(r,function(e){s.renderNode.add(e.renderGate)}),t(r,function(e){o.find("div").append(e)}),n.registerChild(r,o,s,function(){s.modifier.deactivate()}),r.$$phase||a.$$phase||r.$apply()}}}}}]),angular.module("famous.angular").directive("faEdgeSwapper",["$famous","$famousDecorator",function(e,n){return{scope:!0,restrict:"A",priority:512,compile:function(){var r=e["famous/views/EdgeSwapper"];return{pre:function(e,a,o){var t,i=n.ensureIsolate(e);i.$$animateEnterHandler=function(e,n){i.renderNode.show(t,function(){i.$$leaveDoneCallback&&i.$$leaveDoneCallback(),n.$done()})},i.$$animateLeaveHandler=function(e,n){i.$$leaveDoneCallback=n.$done};var s=e.$eval(o.faOptions);i.renderNode=new r(s),n.addRole("renderable",i),i.show(),n.sequenceWith(e,function(e){t=e.renderGate})},post:function(e,r){var a=n.ensureIsolate(e);n.registerChild(e,r,a)}}}}}]),angular.module("famous.angular").directive("faFlexibleLayout",["$famous","$famousDecorator",function(e,n){return{template:"<div></div>",restrict:"E",transclude:!0,scope:!0,compile:function(r,a,o){return{pre:function(r,a,o){var t=n.ensureIsolate(r),i=e["famous/views/FlexibleLayout"],s=(e["famous/core/ViewSequence"],e["famous/core/RenderNode"],[]),u=r.$eval(o.faOptions)||{};t.renderNode=new i(u),n.addRole("renderable",t),t.show();var c=function(){s.sort(function(e,n){return e.index-n.index}),t.renderNode.sequenceFrom(function(e){var n=[];return angular.forEach(e,function(e,r){n[r]=e.renderGate}),n}(s))};n.sequenceWith(r,function(e){s.push(e),c()},function(e){s=function(n){var r=[];return angular.forEach(n,function(n){n.id!==e&&r.push(n)}),r}(s),c()})},post:function(e,r){var a=n.ensureIsolate(e);o(e,function(e){r.find("div").append(e)}),e.$emit("registerChild",a)}}}}}]),angular.module("famous.angular").directive("faFlipper",["$famous","$famousDecorator",function(e,n){return{template:"<div></div>",restrict:"E",transclude:!0,scope:!0,compile:function(r,a,o){return{pre:function(r,a,o){var t=n.ensureIsolate(r),i=e["famous/views/Flipper"],s=r.$eval(o.faOptions)||{};t.renderNode=new i(s),n.addRole("renderable",t),t.show(),t.children=[],t.flip=function(e){t.renderNode.flip(e||r.$eval(o.faOptions))},n.sequenceWith(r,function(e){var n=t.children.length;if(0===n)t.renderNode.setFront(e.renderGate);else{if(1!==n)throw new Error("fa-flipper accepts only two child elements; more than two have been provided");t.renderNode.setBack(e.renderGate)}t.children.push(e.renderGate)},function(){t.children.splice(t.children.length-1,1)})},post:function(e,r){var a=n.ensureIsolate(e);o(e,function(e){r.find("div").append(e)}),n.registerChild(e,r,a)}}}}}]),angular.module("famous.angular").directive("faGridLayout",["$famous","$famousDecorator",function(e,n){return{template:"<div></div>",restrict:"E",transclude:!0,scope:!0,compile:function(r,a,o){return{pre:function(r,a,o){var t=n.ensureIsolate(r),i=e["famous/views/GridLayout"],s=(e["famous/core/ViewSequence"],[]),u=r.$eval(o.faOptions)||{};t.renderNode=new i(u),n.addRole("renderable",t),t.show();var c=function(){r.$$postDigest(function(){s.sort(function(e,n){return e.index-n.index}),t.renderNode.sequenceFrom(function(e){var n=[];return angular.forEach(e,function(e,r){n[r]=e.renderGate}),n}(s))})};n.sequenceWith(r,function(e){s.push(e),c()},function(e){s=function(n){var r=[];return angular.forEach(n,function(n){n.id!==e&&r.push(n)}),r}(s),c()},c)},post:function(e,r){var a=n.ensureIsolate(e);o(e,function(e){r.find("div").append(e)}),n.registerChild(e,r,a)}}}}}]),angular.module("famous.angular").directive("faHeaderFooterLayout",["$famous","$famousDecorator",function(e,n){return{template:"<div></div>",restrict:"E",transclude:!0,scope:!0,compile:function(r,a,o){var t=e["famous/views/HeaderFooterLayout"],i=e["famous/core/RenderNode"];return{pre:function(e,r,a){var o=n.ensureIsolate(e),s=(new i,new i,new i,e.$eval(a.faOptions)||{});o.renderNode=new t(s),n.addRole("renderable",o),o.show();var u=0;n.sequenceWith(e,function(e){if(u++,1===u)o.renderNode.header.add(e.renderGate);else if(2===u)o.renderNode.content.add(e.renderGate);else{if(3!==u)throw new Error("fa-header-footer-layout can accept no more than 3 children");o.renderNode.footer.add(e.renderGate)}},function(){1===u?o.renderNode.header.set({}):2===u?o.renderNode.content.set({}):3===u&&o.renderNode.footer.set({}),u--})},post:function(e,r){var a=n.ensureIsolate(e);o(e,function(e){r.find("div").append(e)}),n.registerChild(e,r,a)}}}}}]),angular.module("famous.angular").directive("faImageSurface",["$famous","$famousDecorator",function(e,n){return{scope:!0,template:'<div class="fa-image-surface"></div>',restrict:"EA",compile:function(){return{pre:function(r,a,o){{var t=n.ensureIsolate(r),i=e["famous/surfaces/ImageSurface"];e["famous/core/Transform"],e["famous/core/EventHandler"]}r.$watch(function(){return t.getProperties()},function(){t.renderNode&&t.renderNode.setProperties(t.getProperties())},!0);var s=function(e){return"fa"+e.charAt(0).toUpperCase()+e.slice(1)};t.getProperties=function(){for(var e=r.$eval(o.faProperties)||{},n=["backgroundColor","color"],a=0;a<n.length;a++){var t=n[a],i=s(t);o[i]&&(e[t]=r.$eval(o[i]))}return e},t.renderNode=new i({size:r.$eval(o.faSize),"class":r.$eval(o.class),properties:t.getProperties()}),n.addRole("renderable",t),t.show(),o.class&&t.renderNode.setClasses(o["class"].split(" "))},post:function(e,r,a){var o=n.ensureIsolate(e),t=function(){o.renderNode.setContent(a.faImageUrl)};t(),a.$observe("faImageUrl",t),n.registerChild(e,r,o)}}}}}]),angular.module("famous.angular").directive("faIndex",["$parse","$famousDecorator",function(e,n){return{restrict:"A",scope:!1,priority:16,compile:function(){return{post:function(e,r,a){var o=n.ensureIsolate(e,r);o.index=e.$eval(a.faIndex),e.$watch(function(){return e.$eval(a.faIndex)},function(){o.index=e.$eval(a.faIndex),o.updateMethod&&o.updateMethod()})}}}}}]),angular.module("famous.angular").config(["$provide",function(e){e.decorator("ngClickDirective",["$delegate","$famousDecorator","$parse","$rootElement","$famous","$timeout",function(e,n,r,a,o,t){function i(e,n,r,a){return Math.abs(e-r)<$&&Math.abs(n-a)<$}function s(e,n,r){for(var a=0;a<e.length;a+=2)if(i(e[a],e[a+1],n,r))return e.splice(a,a+2),!0;return!1}function u(e){if(!(Date.now()-l>h)){var n=e.touches&&e.touches.length?e.touches:[e],r=n[0].clientX,a=n[0].clientY;s(d,r,a)||(e.stopPropagation(),e.preventDefault(),e.target&&e.target.blur())}}function c(e){var n=e.touches&&e.touches.length?e.touches:[e],r=n[0].clientX,a=n[0].clientY;d.push(r,a),t(function(){for(var e=0;e<d.length;e+=2)if(d[e]===r&&d[e+1]===a)return void d.splice(e,e+2)},h,!1)}function f(e,n){d||(a[0].addEventListener("click",u,!0),a[0].addEventListener("touchstart",c,!0),d=[]),l=Date.now(),s(d,e,n)}{var l,d,m=e[0],p=m.compile,v=750,g=12,h=2500,$=25,y="ng-click-active";o["famous/core/Engine"]}return m.compile=function(e,n,a){return o.util.isFaElement(e)?o.util.isASurface(e)?{post:function(e,n,a){function t(){d=!1,p.removeClass(y)}var i,s,u,c,l=r(a.ngClick),d=!1,m=o.getIsolate(e),p=m.renderNode;p.on("touchstart",function(e){d=!0,i=e.target?e.target:e.srcElement,3===i.nodeType&&(i=i.parentNode),p.addClass(y),s=Date.now();var n=e.touches&&e.touches.length?e.touches:[e],r=n[0].originalEvent||n[0];u=r.clientX,c=r.clientY}),p.on("touchmove",function(){t()}),p.on("touchcancel",function(){t()}),p.on("touchend",function(e){var n=Date.now()-s,r=e.changedTouches&&e.changedTouches.length?e.changedTouches:e.touches&&e.touches.length?e.touches:[e],o=r[0].originalEvent||r[0],i=o.clientX,l=o.clientY,m=Math.sqrt(Math.pow(i-u,2)+Math.pow(l-c,2));d&&v>n&&g>m&&(f(i,l),angular.isDefined(a.disabled)&&"false"!==a.disabled||p.emit("click",[e])),t()}),p.on("click",function(n,r){e.$apply(function(){l(e,{$event:r||n})})}),p.on("mousedown",function(){p.addClass(y)}),p.on("mousemove mouseup",function(){p.removeClass(y)})}}:void 0:p(e,n,a)},e}]),angular.forEach("dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),function(n){var r=window.$famousUtil.directiveNormalize("ng-"+n);e.decorator(r+"Directive",["$delegate","$famousDecorator","$parse","$famous",function(e,a,o,t){var i=e[0],s=i.compile;return i.compile=function(e,i,u){return t.util.isFaElement(e)?{post:function(e,t,i){var s=a.ensureIsolate(e);if(i[r]){var u=s.renderNode._eventInput||s.renderNode;u.on(n,function(n){var a=o(i[r]);a(e,{$event:n}),e.$$phase||e.$apply()})}}}:s(e,i,u)},e}])})}]),angular.module("famous.angular").directive("faModifier",["$famous","$famousDecorator","$parse","$rootScope",function(e,n,r,a){return{template:"<div></div>",transclude:!0,restrict:"EA",priority:2,scope:!0,compile:function(o,t,i){return{post:function(o,t,s){var u=n.ensureIsolate(o),c=e["famous/core/RenderNode"],f=e["famous/core/Modifier"],l=e["famous/core/Transform"],d=e["famous/physics/bodies/Particle"],m=function(e){return e.getPosition()},p=["aboutOrigin","perspective","rotate","rotateAxis","rotateX","rotateY","rotateZ","scale","skew","translate"];s.$observe("faTransformOrder",function(){var e=o.$eval(s.faTransformOrder);void 0!==e&&(p=e)});var v={};angular.forEach(p,function(n){var a=e.util.directiveNormalize("fa-"+n);s.$observe(a,function(){v[n]=r(s[a])})});var g=angular.noop;s.$observe("faTransform",function(){g=r(s.faTransform)}),u.getTransform=function(){var e=g(o);if(void 0!==e)return e instanceof Function?e():e instanceof Object&&void 0!==e.get?e.get():e;var n=[];return angular.forEach(p,function(e){var r=v[e]?v[e](o):void 0;void 0!==r&&(r instanceof Function&&(r=r()),n.push(r instanceof Array?l[e].apply(this,r):r instanceof d?l[e].apply(this,m(r)):l[e].call(this,r)))}),n.length?1===n.length?n[0]:l.multiply.apply(this,n):void 0};var h=angular.noop;s.$observe("faAlign",function(){h=r(s.faAlign)}),u.getAlign=function(){var e=h(o);return e instanceof Function?e():e instanceof Object&&void 0!==e.get?e.get():e instanceof d?m(e):e};var $=angular.noop;s.$observe("faOpacity",function(){$=r(s.faOpacity)}),u.getOpacity=function(){var e=$(o);return void 0===e?1:e instanceof Function?e():e instanceof Object&&void 0!==e.get?e.get():e instanceof d?m(e):e};var y=angular.noop;s.$observe("faSize",function(){y=r(s.faSize)}),u.getSize=function(){var e=y(o);return e instanceof Function?e():e instanceof Object&&void 0!==e.get?e.get():e instanceof d?m(e):e};var w=angular.noop;s.$observe("faOrigin",function(){w=r(s.faOrigin)}),u.getOrigin=function(){var e=w(o);return e instanceof Function?e():e instanceof Object&&void 0!==e.get?e.get():e instanceof d?m(e):e},u.modifier=new f({transform:u.getTransform,size:u.getSize,opacity:u.getOpacity,origin:u.getOrigin,align:u.getAlign}),u.renderNode=(new c).add(u.modifier),n.addRole("renderable",u),u.show(),n.sequenceWith(o,function(e){u.renderNode.add(e.renderGate)}),i(o,function(e){t.find("div").append(e)}),n.registerChild(o,t,u,function(){u.modifier.setOpacity(0)}),o.$$phase||a.$$phase||o.$apply()}}}}}]),angular.module("famous.angular").directive("faMouseover",["$parse","$famousDecorator",function(e,n){return{restrict:"A",scope:!1,compile:function(){return{post:function(r,a,o){var t=n.ensureIsolate(r);if(o.faMouseover){var i=t.renderNode._eventInput||t.renderNode;i.on("mouseover",function(n){var a=e(o.faMouseover);a(r,{$event:n}),r.$$phase||r.$apply()})}}}}}}]),angular.module("famous.angular").directive("faOptions",["$parse","$famousDecorator",function(e,n){return{restrict:"A",scope:!1,priority:-16,compile:function(){return{post:function(e,r,a){var o=n.ensureIsolate(e,r);e.$watch(function(){return e.$eval(a.faOptions)},function(){o.renderNode.setOptions(e.$eval(a.faOptions))},!0)}}}}}]),angular.module("famous.angular").directive("faPipeFrom",["$famous","$famousDecorator","$famousPipe",function(e,n,r){return{restrict:"A",scope:!1,priority:16,compile:function(){var a=e["famous/core/Engine"];return{post:function(e,o,t){var i=n.ensureIsolate(e);e.$watch(function(){return e.$eval(t.faPipeFrom)},function(e,n){var o;o=i.renderNode&&i.renderNode._isModifier?i.renderNode._object:i.renderNode?i.renderNode._eventInput||i.renderNode:a,r.unpipesFromTargets(o,n),r.pipesToTargets(o,e)}),e.$on("$destroy",function(){r.unpipesFromTargets(i.renderNode||a,e.$eval(t.faPipeFrom))})}}}}}]),angular.module("famous.angular").directive("faPipeTo",["$famous","$famousDecorator","$famousPipe",function(e,n,r){return{restrict:"A",scope:!1,priority:16,compile:function(){var a=e["famous/core/Engine"];return{post:function(e,o,t){var i=n.ensureIsolate(e);e.$watch(function(){return e.$eval(t.faPipeTo)},function(e,n){var o;o=i.renderNode&&i.renderNode._isModifier?i.renderNode._object:i.renderNode?i.renderNode._eventOutput||i.renderNode:a,r.unpipesFromTargets(n,o),r.pipesToTargets(e,o)}),e.$on("$destroy",function(){r.unpipesFromTargets(e.$eval(t.faPipeTo),i.renderNode||a)})}}}}}]),angular.module("famous.angular").directive("faRenderNode",["$famous","$famousDecorator",function(e,n){return{template:"<div></div>",transclude:!0,scope:!0,restrict:"EA",compile:function(r,a,o){return{pre:function(r,a,o){{var t=n.ensureIsolate(r),i=e["famous/core/Engine"];
e["famous/core/RenderNode"]}t.children=[],o.$observe("faPipeTo",function(e){var n=r.$eval(e);n&&i.pipe(n)}),t.renderNode=r.$eval(o.faNode),n.addRole("renderable",t),t.show(),n.sequenceWith(r,function(e){t.renderNode.add(e.renderGate),t.children.push(e)})},post:function(e,r){var a=n.ensureIsolate(e);o(e,function(e){r.find("div").append(e)}),n.registerChild(e,r,a)}}}}}]),angular.module("famous.angular").directive("faScrollView",["$famous","$famousDecorator",function(e,n){return{template:"<div></div>",restrict:"E",transclude:!0,scope:!0,compile:function(r,a,o){return{pre:function(r,a,o){var t=n.ensureIsolate(r),i=e["famous/views/Scrollview"],s=e["famous/core/ViewSequence"],u=(e["famous/core/Surface"],[]),c=r.$eval(o.faOptions)||{};t.renderNode=new i(c),n.addRole("renderable",t),t.show();var f=function(e){r.$$postDigest(function(){u.sort(function(e,n){return e.index-n.index});var n={array:function(e){var n=[];return angular.forEach(e,function(e,r){n[r]=e.renderGate}),n}(u)};e&&(n.index=r.$eval(o.faStartIndex));var a=new s(n);t.renderNode.sequenceFrom(a)})};n.sequenceWith(r,function(e){u.push(e),f(!0)},function(e){u=function(n){var r=[];return angular.forEach(n,function(n){n.id!==e&&r.push(n)}),r}(u),f()},f)},post:function(e,r){var a=n.ensureIsolate(e);o(e,function(e){r.find("div").append(e)}),n.registerChild(e,r,a)}}}}}]),angular.module("famous.angular").directive("faSequentialLayout",["$famous","$famousDecorator",function(e,n){return{template:"<div></div>",restrict:"E",transclude:!0,scope:!0,compile:function(r,a,o){return window.$f=e,{pre:function(r,a,o){var t=n.ensureIsolate(r),i=e["famous/views/SequentialLayout"],s=[],u=r.$eval(o.faOptions)||{};t.renderNode=new i(u),n.addRole("renderable",t),t.show();var c=function(){s.sort(function(e,n){return e.index-n.index}),t.renderNode.sequenceFrom(function(e){var n=[];return angular.forEach(e,function(e,r){n[r]=e.renderGate}),n}(s))};n.sequenceWith(r,function(e){s.push(e),c()},function(e){s=function(n){var r=[];return angular.forEach(n,function(n){n.id!==e&&r.push(n)}),r}(s),c()})},post:function(e,r){var a=n.ensureIsolate(e);o(e,function(e){r.find("div").append(e)}),n.registerChild(e,r,a)}}}}}]),angular.module("famous.angular").directive("faSurface",["$famous","$famousDecorator","$interpolate","$controller","$compile",function(e,n){return{scope:!0,transclude:!0,template:'<div class="fa-surface"></div>',restrict:"EA",compile:function(r,a,o){return{pre:function(r,a,o){{var t=n.ensureIsolate(r),i=e["famous/core/Surface"];e["famous/core/Transform"],e["famous/core/EventHandler"]}r.$watch(function(){return t.getProperties()},function(){t.renderNode&&t.renderNode.setProperties(t.getProperties())},!0);var s=function(e){return"fa"+e.charAt(0).toUpperCase()+e.slice(1)};t.getProperties=function(){for(var e=r.$eval(o.faProperties)||{},n=["backgroundColor","margin","padding","color","pointerEvents","zIndex"],a=0;a<n.length;a++){var t=n[a],i=s(t);o[i]&&(e[t]=r.$eval(o[i]))}return e};var u=[];o.$observe("faSize",function(){t.renderNode.setSize(r.$eval(o.faSize)),u.push(new Date),u.length>5&&(u[4]-u[0]<=1e3&&console.warn("Using fa-size on fa-surface to animate is significantly non-performant, prefer to use fa-size on an fa-modifier surrounding a fa-surface"),u.shift())}),t.renderNode=new i({size:r.$eval(o.faSize),properties:t.getProperties()}),n.addRole("renderable",t),t.show(),o.class&&t.renderNode.setClasses(o["class"].split(" ")),n.sequenceWith(r,function(){throw new Error("Surfaces are leaf nodes of the Famo.us render tree and cannot accept rendernode children.  To include additional Famo.us content inside of a fa-surface, that content must be enclosed in an additional fa-app.")})},post:function(e,r){var a=n.ensureIsolate(e),t=function(){a.renderNode.setContent(r[0].querySelector("div.fa-surface"))};t(),o(e,function(e){angular.element(r[0].querySelectorAll("div.fa-surface")).append(e)}),n.registerChild(e,r,a,function(){})}}}}}]),angular.module("famous.angular").directive("faTap",["$parse","$famousDecorator",function(e,n){return{restrict:"A",compile:function(){return{post:function(r,a,o){var t=n.ensureIsolate(r);if(o.faTap){var i=t.renderNode._eventInput||t.renderNode,s=!1;i.on("touchmove",function(e){return s=!0,e}),i.on("tap",function(n){if(!s){var a=e(o.faTap);a(r,{$event:n}),r.$$phase||r.$apply()}s=!1})}}}}}}]),angular.module("famous.angular").directive("faTouchend",["$parse","$famousDecorator",function(e,n){return{restrict:"A",scope:!1,compile:function(){return{post:function(r,a,o){var t=n.ensureIsolate(r);if(o.faTouchend){var i=t.renderNode._eventInput||t.renderNode;i.on("touchend",function(n){var a=e(o.faTouchend);a(r,{$event:n}),r.$$phase||r.$apply()})}}}}}}]),angular.module("famous.angular").directive("faTouchmove",["$parse","$famousDecorator",function(e,n){return{restrict:"A",scope:!1,compile:function(){return{post:function(r,a,o){var t=n.ensureIsolate(r);if(o.faTouchmove){var i=t.renderNode._eventInput||t.renderNode;i.on("touchmove",function(n){var a=e(o.faTouchmove);a(r,{$event:n}),r.$$phase||r.$apply()})}}}}}}]),angular.module("famous.angular").directive("faTouchstart",["$parse","$famousDecorator",function(e,n){return{restrict:"A",scope:!1,compile:function(){return{post:function(r,a,o){var t=n.ensureIsolate(r);if(o.faTouchstart){var i=t.renderNode._eventInput||t.renderNode;i.on("touchstart",function(n){var a=e(o.faTouchstart);a(r,{$event:n}),r.$$phase||r.$apply()})}}}}}}]),angular.module("famous.angular").directive("faVideoSurface",["$famous","$famousDecorator",function(e,n){return{scope:!0,transclude:!0,template:'<div class="fa-video-surface"></div>',restrict:"EA",compile:function(){return{pre:function(r,a,o){var t=n.ensureIsolate(r),i=e["famous/surfaces/VideoSurface"];r.$watch(function(){return r.$eval(o.faOptions)},function(e,n){t.renderNode.setOptions(n)},!0),t.renderNode=new i({"class":r.$eval(o.class)}),n.addRole("renderable",t),t.show(),o.class&&t.renderNode.setClasses(o["class"].split(" ")),n.sequenceWith(r,function(){throw new Error("Surfaces are leaf nodes of the Famo.us render tree and cannot accept rendernode children.  To include additional Famo.us content inside of a fa-surface, that content must be enclosed in an additional fa-app.")})},post:function(e,r,a){var o=n.ensureIsolate(e),t=function(){o.renderNode.setContent(a.faVideoUrl)};t(),a.$observe("faVideoUrl",t),n.registerChild(e,r,o)}}}}}]),angular.module("famous.angular").directive("faView",["$famous","$famousDecorator",function(e,n){return{template:"<div></div>",transclude:!0,scope:!0,restrict:"EA",compile:function(r,a,o){var t=e["famous/core/View"];return{pre:function(e,r,a){var o=n.ensureIsolate(e);o.children=[],o.renderNode=new t({size:e.$eval(a.faSize)||[void 0,void 0]}),n.addRole("renderable",o),o.show(),n.sequenceWith(e,function(e){o.renderNode.add(e.renderGate),o.children.push(e)})},post:function(e,r){var a=n.ensureIsolate(e);o(e,function(e){r.find("div").append(e)}),n.registerChild(e,r,a)}}}}}]);
}).call(global, module, undefined, undefined);

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"/home/codio/workspace/bower_components/angular-animate/angular-animate.min.js":"/home/codio/workspace/bower_components/angular-animate/angular-animate.min.js","/home/codio/workspace/bower_components/angular-sanitize/angular-sanitize.min.js":"/home/codio/workspace/bower_components/angular-sanitize/angular-sanitize.min.js","/home/codio/workspace/bower_components/angular-ui-router/release/angular-ui-router.min.js":"/home/codio/workspace/bower_components/angular-ui-router/release/angular-ui-router.min.js","/home/codio/workspace/bower_components/angular/angular.min.js":"/home/codio/workspace/bower_components/angular/angular.min.js","/home/codio/workspace/bower_components/famous/dist/famous-global.min.js":"/home/codio/workspace/bower_components/famous/dist/famous-global.min.js","famous-polyfills":"/home/codio/workspace/node_modules/famous-polyfills/index.js"}],"/home/codio/workspace/bower_components/famous/dist/famous-global.min.js":[function(require,module,exports){
(function (global){
;__browserify_shim_require__=require;(function browserifyShim(module, exports, require, define, browserify_shim__define__module__export__) {
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * @copyright Famous Industries, Inc. 2014
 */
!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var i;"undefined"!=typeof window?i=window:"undefined"!=typeof global?i=global:"undefined"!=typeof self&&(i=self),i.famous=t()}}(function(){return function t(i,e,n){function o(r,a){if(!e[r]){if(!i[r]){var h="function"==typeof require&&require;if(!a&&h)return h(r,!0);if(s)return s(r,!0);var c=new Error("Cannot find module '"+r+"'");throw c.code="MODULE_NOT_FOUND",c}var p=e[r]={exports:{}};i[r][0].call(p.exports,function(t){var e=i[r][1][t];return o(e?e:t)},p,p.exports,t,i,e,n)}return e[r].exports}for(var s="function"==typeof require&&require,r=0;r<n.length;r++)o(n[r]);return o}({1:[function(t,i){function e(t){return[t.clientWidth,t.clientHeight]}function n(t){this.container=t,this._allocator=new r(t),this._node=new o,this._eventOutput=new s,this._size=e(this.container),this._perspectiveState=new h(0),this._perspective=void 0,this._nodeContext={allocator:this._allocator,transform:a.identity,opacity:1,origin:c,align:c,size:this._size},this._eventOutput.on("resize",function(){this.setSize(e(this.container))}.bind(this))}var o=t("./RenderNode"),s=t("./EventHandler"),r=t("./ElementAllocator"),a=t("./Transform"),h=t("../transitions/Transitionable"),c=[0,0],p=!("perspective"in document.documentElement.style),u=p?function(t,i){t.style.webkitPerspective=i?i.toFixed()+"px":""}:function(t,i){t.style.perspective=i?i.toFixed()+"px":""};n.prototype.getAllocator=function(){return this._allocator},n.prototype.add=function(t){return this._node.add(t)},n.prototype.migrate=function(t){t!==this.container&&(this.container=t,this._allocator.migrate(t))},n.prototype.getSize=function(){return this._size},n.prototype.setSize=function(t){t||(t=e(this.container)),this._size[0]=t[0],this._size[1]=t[1]},n.prototype.update=function(t){t&&(t.transform&&(this._nodeContext.transform=t.transform),t.opacity&&(this._nodeContext.opacity=t.opacity),t.origin&&(this._nodeContext.origin=t.origin),t.align&&(this._nodeContext.align=t.align),t.size&&(this._nodeContext.size=t.size));var i=this._perspectiveState.get();i!==this._perspective&&(u(this.container,i),this._perspective=i),this._node.commit(this._nodeContext)},n.prototype.getPerspective=function(){return this._perspectiveState.get()},n.prototype.setPerspective=function(t,i,e){return this._perspectiveState.set(t,i,e)},n.prototype.emit=function(t,i){return this._eventOutput.emit(t,i)},n.prototype.on=function(t,i){return this._eventOutput.on(t,i)},n.prototype.removeListener=function(t,i){return this._eventOutput.removeListener(t,i)},n.prototype.pipe=function(t){return this._eventOutput.pipe(t)},n.prototype.unpipe=function(t){return this._eventOutput.unpipe(t)},i.exports=n},{"../transitions/Transitionable":88,"./ElementAllocator":2,"./EventHandler":7,"./RenderNode":11,"./Transform":15}],2:[function(t,i){function e(t){t||(t=document.createDocumentFragment()),this.container=t,this.detachedNodes={},this.nodeCount=0}e.prototype.migrate=function(t){var i=this.container;if(t!==i){if(i instanceof DocumentFragment)t.appendChild(i);else for(;i.hasChildNodes();)t.appendChild(i.removeChild(i.firstChild));this.container=t}},e.prototype.allocate=function(t){t=t.toLowerCase(),t in this.detachedNodes||(this.detachedNodes[t]=[]);var i,e=this.detachedNodes[t];return e.length>0?i=e.pop():(i=document.createElement(t),this.container.appendChild(i)),this.nodeCount++,i},e.prototype.deallocate=function(t){var i=t.nodeName.toLowerCase(),e=this.detachedNodes[i];e.push(t),this.nodeCount--},e.prototype.getNodeCount=function(){return this.nodeCount},i.exports=e},{}],3:[function(t,i){function e(t){this._matrix=null,this._opacity=1,this._origin=null,this._size=null,this._eventOutput=new c,this._eventOutput.bindThis(this),this.eventForwarder=function(t){this._eventOutput.emit(t.type,t)}.bind(this),this.id=h.register(this),this._element=null,this._sizeDirty=!1,this._originDirty=!1,this._transformDirty=!1,this._invisible=!1,t&&this.attach(t)}function n(t){for(var i in this._eventOutput.listeners)t.addEventListener(i,this.eventForwarder)}function o(t){for(var i in this._eventOutput.listeners)t.removeEventListener(i,this.eventForwarder)}function s(t){t[12]=Math.round(t[12]*l)/l,t[13]=Math.round(t[13]*l)/l;for(var i="matrix3d(",e=0;15>e;e++)i+=t[e]<1e-6&&t[e]>-1e-6?"0,":t[e]+",";return i+=t[15]+")"}function r(t){return 100*t[0]+"% "+100*t[1]+"%"}function a(t,i){return t&&i?t[0]!==i[0]||t[1]!==i[1]:t!==i}var h=t("./Entity"),c=t("./EventHandler"),p=t("./Transform"),u=!("transform"in document.documentElement.style),l=window.devicePixelRatio||1;e.prototype.on=function(t,i){this._element&&this._element.addEventListener(t,this.eventForwarder),this._eventOutput.on(t,i)},e.prototype.removeListener=function(t,i){this._eventOutput.removeListener(t,i)},e.prototype.emit=function(t,i){i&&!i.origin&&(i.origin=this);var e=this._eventOutput.emit(t,i);return e&&i&&i.stopPropagation&&i.stopPropagation(),e},e.prototype.pipe=function(t){return this._eventOutput.pipe(t)},e.prototype.unpipe=function(t){return this._eventOutput.unpipe(t)},e.prototype.render=function(){return this.id};var f;f=navigator.userAgent.toLowerCase().indexOf("firefox")>-1?function(t,i){t.style.zIndex=1e6*i[14]|0,t.style.transform=s(i)}:u?function(t,i){t.style.webkitTransform=s(i)}:function(t,i){t.style.transform=s(i)};var d=u?function(t,i){t.style.webkitTransformOrigin=r(i)}:function(t,i){t.style.transformOrigin=r(i)},_=u?function(t){t.style.webkitTransform="scale3d(0.0001,0.0001,0.0001)",t.style.opacity=0}:function(t){t.style.transform="scale3d(0.0001,0.0001,0.0001)",t.style.opacity=0};e.prototype.commit=function(t){var i=this._element;if(i){{var e=t.transform,n=t.opacity,o=t.origin;t.size}if(!e&&this._matrix)return this._matrix=null,this._opacity=0,void _(i);if(a(this._origin,o)&&(this._originDirty=!0),p.notEquals(this._matrix,e)&&(this._transformDirty=!0),this._invisible&&(this._invisible=!1,this._element.style.display=""),this._opacity!==n&&(this._opacity=n,i.style.opacity=n>=1?"0.999999":n),this._transformDirty||this._originDirty||this._sizeDirty){this._sizeDirty&&(this._sizeDirty=!1),this._originDirty&&(o?(this._origin||(this._origin=[0,0]),this._origin[0]=o[0],this._origin[1]=o[1]):this._origin=null,d(i,this._origin),this._originDirty=!1),e||(e=p.identity),this._matrix=e;var s=this._size?p.thenMove(e,[-this._size[0]*o[0],-this._size[1]*o[1],0]):e;f(i,s),this._transformDirty=!1}}},e.prototype.cleanup=function(){this._element&&(this._invisible=!0,this._element.style.display="none")},e.prototype.attach=function(t){this._element=t,n.call(this,t)},e.prototype.detach=function(){var t=this._element;return t&&(o.call(this,t),this._invisible&&(this._invisible=!1,this._element.style.display="")),this._element=null,t},i.exports=e},{"./Entity":5,"./EventHandler":7,"./Transform":15}],4:[function(t,i){function e(){v.runLoop?(p.step(),window.requestAnimationFrame(e)):_=!1}function n(){for(var t=0;t<u.length;t++)u[t].emit("resize");g.emit("resize")}function o(){window.addEventListener("touchmove",function(t){t.preventDefault()},!0),document.body.classList.add("famous-root"),document.documentElement.classList.add("famous-root")}var s,r,a=t("./Context"),h=t("./EventHandler"),c=t("./OptionsManager"),p={},u=[],l=[],f=[],d=Date.now(),_=!0,y={},g=new h,v={containerType:"div",containerClass:"famous-container",fpsCap:void 0,runLoop:!0,appMode:!0},m=new c(v),O=10;p.step=function(){var t=Date.now();if(!(r&&r>t-d)){var i=0;for(s=t-d,d=t,g.emit("prerender"),i=0;i<l.length;i++)l[i].call(this);for(l.splice(0);f.length&&Date.now()-t<O;)f.shift().call(this);for(i=0;i<u.length;i++)u[i].update();g.emit("postrender")}},window.requestAnimationFrame(e),window.addEventListener("resize",n,!1),n();var S=!1;p.pipe=function(t){return t.subscribe instanceof Function?t.subscribe(p):g.pipe(t)},p.unpipe=function(t){return t.unsubscribe instanceof Function?t.unsubscribe(p):g.unpipe(t)},p.on=function(t,i){return t in y||(y[t]=g.emit.bind(g,t),document.body?document.body.addEventListener(t,y[t]):p.nextTick(function(t,i){document.body.addEventListener(t,i)}.bind(this,t,y[t]))),g.on(t,i)},p.emit=function(t,i){return g.emit(t,i)},p.removeListener=function(t,i){return g.removeListener(t,i)},p.getFPS=function(){return 1e3/s},p.setFPSCap=function(t){r=Math.floor(1e3/t)},p.getOptions=function(t){return m.getOptions(t)},p.setOptions=function(){return m.setOptions.apply(m,arguments)},p.createContext=function(t){!S&&v.appMode&&p.nextTick(o);var i=!1;t||(t=document.createElement(v.containerType),t.classList.add(v.containerClass),i=!0);var e=new a(t);return p.registerContext(e),i&&p.nextTick(function(t,i){document.body.appendChild(i),t.emit("resize")}.bind(this,e,t)),e},p.registerContext=function(t){return u.push(t),t},p.getContexts=function(){return u},p.deregisterContext=function(t){var i=u.indexOf(t);i>=0&&u.splice(i,1)},p.nextTick=function(t){l.push(t)},p.defer=function(t){f.push(t)},m.on("change",function(t){"fpsCap"===t.id?p.setFPSCap(t.value):"runLoop"===t.id&&!_&&t.value&&(_=!0,window.requestAnimationFrame(e))}),i.exports=p},{"./Context":1,"./EventHandler":7,"./OptionsManager":10}],5:[function(t,i){function e(t){return r[t]}function n(t,i){r[t]=i}function o(t){var i=r.length;return n(i,t),i}function s(t){n(t,null)}var r=[];i.exports={register:o,unregister:s,get:e,set:n}},{}],6:[function(t,i){function e(){this.listeners={},this._owner=this}e.prototype.emit=function(t,i){var e=this.listeners[t];if(e)for(var n=0;n<e.length;n++)e[n].call(this._owner,i);return this},e.prototype.on=function(t,i){t in this.listeners||(this.listeners[t]=[]);var e=this.listeners[t].indexOf(i);return 0>e&&this.listeners[t].push(i),this},e.prototype.addListener=e.prototype.on,e.prototype.removeListener=function(t,i){var e=this.listeners[t];if(void 0!==e){var n=e.indexOf(i);n>=0&&e.splice(n,1)}return this},e.prototype.bindThis=function(t){this._owner=t},i.exports=e},{}],7:[function(t,i){function e(){n.apply(this,arguments),this.downstream=[],this.downstreamFn=[],this.upstream=[],this.upstreamListeners={}}var n=t("./EventEmitter");e.prototype=Object.create(n.prototype),e.prototype.constructor=e,e.setInputHandler=function(t,i){t.trigger=i.trigger.bind(i),i.subscribe&&i.unsubscribe&&(t.subscribe=i.subscribe.bind(i),t.unsubscribe=i.unsubscribe.bind(i))},e.setOutputHandler=function(t,i){i instanceof e&&i.bindThis(t),t.pipe=i.pipe.bind(i),t.unpipe=i.unpipe.bind(i),t.on=i.on.bind(i),t.addListener=t.on,t.removeListener=i.removeListener.bind(i)},e.prototype.emit=function(t,i){n.prototype.emit.apply(this,arguments);var e=0;for(e=0;e<this.downstream.length;e++)this.downstream[e].trigger&&this.downstream[e].trigger(t,i);for(e=0;e<this.downstreamFn.length;e++)this.downstreamFn[e](t,i);return this},e.prototype.trigger=e.prototype.emit,e.prototype.pipe=function(t){if(t.subscribe instanceof Function)return t.subscribe(this);var i=t instanceof Function?this.downstreamFn:this.downstream,e=i.indexOf(t);return 0>e&&i.push(t),t instanceof Function?t("pipe",null):t.trigger&&t.trigger("pipe",null),t},e.prototype.unpipe=function(t){if(t.unsubscribe instanceof Function)return t.unsubscribe(this);var i=t instanceof Function?this.downstreamFn:this.downstream,e=i.indexOf(t);return e>=0?(i.splice(e,1),t instanceof Function?t("unpipe",null):t.trigger&&t.trigger("unpipe",null),t):!1},e.prototype.on=function(t){if(n.prototype.on.apply(this,arguments),!(t in this.upstreamListeners)){var i=this.trigger.bind(this,t);this.upstreamListeners[t]=i;for(var e=0;e<this.upstream.length;e++)this.upstream[e].on(t,i)}return this},e.prototype.addListener=e.prototype.on,e.prototype.subscribe=function(t){var i=this.upstream.indexOf(t);if(0>i){this.upstream.push(t);for(var e in this.upstreamListeners)t.on(e,this.upstreamListeners[e])}return this},e.prototype.unsubscribe=function(t){var i=this.upstream.indexOf(t);if(i>=0){this.upstream.splice(i,1);for(var e in this.upstreamListeners)t.removeListener(e,this.upstreamListeners[e])}return this},i.exports=e},{"./EventEmitter":6}],8:[function(t,i){function e(t){s.call(this,t),this._shouldRecalculateSize=!1,this._container=document.createDocumentFragment(),this.context=new n(this._container),this.setContent(this._container),this._groupSize=[void 0,void 0]}var n=t("./Context"),o=t("./Transform"),s=t("./Surface");e.SIZE_ZERO=[0,0],e.prototype=Object.create(s.prototype),e.prototype.elementType="div",e.prototype.elementClass="famous-group",e.prototype.add=function(){return this.context.add.apply(this.context,arguments)},e.prototype.render=function(){return s.prototype.render.call(this)},e.prototype.deploy=function(t){this.context.migrate(t)},e.prototype.recall=function(){this._container=document.createDocumentFragment(),this.context.migrate(this._container)},e.prototype.commit=function(t){var i=t.transform,n=t.origin,r=t.opacity,a=t.size,h=s.prototype.commit.call(this,{allocator:t.allocator,transform:o.thenMove(i,[-n[0]*a[0],-n[1]*a[1],0]),opacity:r,origin:n,size:e.SIZE_ZERO});return(a[0]!==this._groupSize[0]||a[1]!==this._groupSize[1])&&(this._groupSize[0]=a[0],this._groupSize[1]=a[1],this.context.setSize(a)),this.context.update({transform:o.translate(-n[0]*a[0],-n[1]*a[1],0),origin:n,size:a}),h},i.exports=e},{"./Context":1,"./Surface":14,"./Transform":15}],9:[function(t,i){function e(t){this._transformGetter=null,this._opacityGetter=null,this._originGetter=null,this._alignGetter=null,this._sizeGetter=null,this._proportionGetter=null,this._legacyStates={},this._output={transform:o.identity,opacity:1,origin:null,align:null,size:null,proportions:null,target:null},t&&(t.transform&&this.transformFrom(t.transform),void 0!==t.opacity&&this.opacityFrom(t.opacity),t.origin&&this.originFrom(t.origin),t.align&&this.alignFrom(t.align),t.size&&this.sizeFrom(t.size),t.proportions&&this.proportionsFrom(t.proportions))}function n(){this._transformGetter&&(this._output.transform=this._transformGetter()),this._opacityGetter&&(this._output.opacity=this._opacityGetter()),this._originGetter&&(this._output.origin=this._originGetter()),this._alignGetter&&(this._output.align=this._alignGetter()),this._sizeGetter&&(this._output.size=this._sizeGetter()),this._proportionGetter&&(this._output.proportions=this._proportionGetter())}var o=t("./Transform"),s=t("../transitions/Transitionable"),r=t("../transitions/TransitionableTransform");e.prototype.transformFrom=function(t){return t instanceof Function?this._transformGetter=t:t instanceof Object&&t.get?this._transformGetter=t.get.bind(t):(this._transformGetter=null,this._output.transform=t),this},e.prototype.opacityFrom=function(t){return t instanceof Function?this._opacityGetter=t:t instanceof Object&&t.get?this._opacityGetter=t.get.bind(t):(this._opacityGetter=null,this._output.opacity=t),this},e.prototype.originFrom=function(t){return t instanceof Function?this._originGetter=t:t instanceof Object&&t.get?this._originGetter=t.get.bind(t):(this._originGetter=null,this._output.origin=t),this},e.prototype.alignFrom=function(t){return t instanceof Function?this._alignGetter=t:t instanceof Object&&t.get?this._alignGetter=t.get.bind(t):(this._alignGetter=null,this._output.align=t),this},e.prototype.sizeFrom=function(t){return t instanceof Function?this._sizeGetter=t:t instanceof Object&&t.get?this._sizeGetter=t.get.bind(t):(this._sizeGetter=null,this._output.size=t),this},e.prototype.proportionsFrom=function(t){return t instanceof Function?this._proportionGetter=t:t instanceof Object&&t.get?this._proportionGetter=t.get.bind(t):(this._proportionGetter=null,this._output.proportions=t),this},e.prototype.setTransform=function(t,i,e){return i||this._legacyStates.transform?(this._legacyStates.transform||(this._legacyStates.transform=new r(this._output.transform)),this._transformGetter||this.transformFrom(this._legacyStates.transform),this._legacyStates.transform.set(t,i,e),this):this.transformFrom(t)},e.prototype.setOpacity=function(t,i,e){return i||this._legacyStates.opacity?(this._legacyStates.opacity||(this._legacyStates.opacity=new s(this._output.opacity)),this._opacityGetter||this.opacityFrom(this._legacyStates.opacity),this._legacyStates.opacity.set(t,i,e)):this.opacityFrom(t)},e.prototype.setOrigin=function(t,i,e){return i||this._legacyStates.origin?(this._legacyStates.origin||(this._legacyStates.origin=new s(this._output.origin||[0,0])),this._originGetter||this.originFrom(this._legacyStates.origin),this._legacyStates.origin.set(t,i,e),this):this.originFrom(t)},e.prototype.setAlign=function(t,i,e){return i||this._legacyStates.align?(this._legacyStates.align||(this._legacyStates.align=new s(this._output.align||[0,0])),this._alignGetter||this.alignFrom(this._legacyStates.align),this._legacyStates.align.set(t,i,e),this):this.alignFrom(t)},e.prototype.setSize=function(t,i,e){return t&&(i||this._legacyStates.size)?(this._legacyStates.size||(this._legacyStates.size=new s(this._output.size||[0,0])),this._sizeGetter||this.sizeFrom(this._legacyStates.size),this._legacyStates.size.set(t,i,e),this):this.sizeFrom(t)},e.prototype.setProportions=function(t,i,e){return t&&(i||this._legacyStates.proportions)?(this._legacyStates.proportions||(this._legacyStates.proportions=new s(this._output.proportions||[0,0])),this._proportionGetter||this.proportionsFrom(this._legacyStates.proportions),this._legacyStates.proportions.set(t,i,e),this):this.proportionsFrom(t)},e.prototype.halt=function(){this._legacyStates.transform&&this._legacyStates.transform.halt(),this._legacyStates.opacity&&this._legacyStates.opacity.halt(),this._legacyStates.origin&&this._legacyStates.origin.halt(),this._legacyStates.align&&this._legacyStates.align.halt(),this._legacyStates.size&&this._legacyStates.size.halt(),this._legacyStates.proportions&&this._legacyStates.proportions.halt(),this._transformGetter=null,this._opacityGetter=null,this._originGetter=null,this._alignGetter=null,this._sizeGetter=null,this._proportionGetter=null},e.prototype.getTransform=function(){return this._transformGetter()},e.prototype.getFinalTransform=function(){return this._legacyStates.transform?this._legacyStates.transform.getFinal():this._output.transform},e.prototype.getOpacity=function(){return this._opacityGetter()},e.prototype.getOrigin=function(){return this._originGetter()},e.prototype.getAlign=function(){return this._alignGetter()},e.prototype.getSize=function(){return this._sizeGetter?this._sizeGetter():this._output.size},e.prototype.getProportions=function(){return this._proportionGetter?this._proportionGetter():this._output.proportions},e.prototype.modify=function(t){return n.call(this),this._output.target=t,this._output},i.exports=e},{"../transitions/Transitionable":88,"../transitions/TransitionableTransform":89,"./Transform":15}],10:[function(t,i){function e(t){this._value=t,this.eventOutput=null}function n(){this.eventOutput=new o,this.eventOutput.bindThis(this),o.setOutputHandler(this,this.eventOutput)}var o=t("./EventHandler");e.patch=function(t){for(var i=new e(t),n=1;n<arguments.length;n++)i.patch(arguments[n]);return t},e.prototype.patch=function(){for(var t=this._value,i=0;i<arguments.length;i++){var e=arguments[i];for(var n in e)n in t&&e[n]&&e[n].constructor===Object&&t[n]&&t[n].constructor===Object?(t.hasOwnProperty(n)||(t[n]=Object.create(t[n])),this.key(n).patch(e[n]),this.eventOutput&&this.eventOutput.emit("change",{id:n,value:this.key(n).value()})):this.set(n,e[n])}return this},e.prototype.setOptions=e.prototype.patch,e.prototype.key=function(t){var i=new e(this._value[t]);return(!(i._value instanceof Object)||i._value instanceof Array)&&(i._value={}),i},e.prototype.get=function(t){return t?this._value[t]:this._value},e.prototype.getOptions=e.prototype.get,e.prototype.set=function(t,i){var e=this.get(t);return this._value[t]=i,this.eventOutput&&i!==e&&this.eventOutput.emit("change",{id:t,value:i}),this},e.prototype.on=function(){return n.call(this),this.on.apply(this,arguments)},e.prototype.removeListener=function(){return n.call(this),this.removeListener.apply(this,arguments)},e.prototype.pipe=function(){return n.call(this),this.pipe.apply(this,arguments)},e.prototype.unpipe=function(){return n.call(this),this.unpipe.apply(this,arguments)},i.exports=e},{"./EventHandler":7}],11:[function(t,i){function e(t){this._object=null,this._child=null,this._hasMultipleChildren=!1,this._isRenderable=!1,this._isModifier=!1,this._resultCache={},this._prevResults={},this._childResult=null,t&&this.set(t)}function n(t,i,e){for(var r=s.parse(t,i),a=Object.keys(r),h=0;h<a.length;h++){var c=a[h],p=o.get(c),u=r[c];u.allocator=i.allocator;var l=p.commit(u);l?n(l,i,e):e[c]=u}}var o=t("./Entity"),s=t("./SpecParser");e.prototype.add=function(t){var i=t instanceof e?t:new e(t);return this._child instanceof Array?this._child.push(i):this._child?(this._child=[this._child,i],this._hasMultipleChildren=!0,this._childResult=[]):this._child=i,i},e.prototype.get=function(){return this._object||(this._hasMultipleChildren?null:this._child?this._child.get():null)},e.prototype.set=function(t){return this._childResult=null,this._hasMultipleChildren=!1,this._isRenderable=t.render?!0:!1,this._isModifier=t.modify?!0:!1,this._object=t,this._child=null,t instanceof e?t:this},e.prototype.getSize=function(){var t=null,i=this.get();return i&&i.getSize&&(t=i.getSize()),!t&&this._child&&this._child.getSize&&(t=this._child.getSize()),t},e.prototype.commit=function(t){for(var i=Object.keys(this._prevResults),e=0;e<i.length;e++){var s=i[e];if(void 0===this._resultCache[s]){var r=o.get(s);r.cleanup&&r.cleanup(t.allocator)}}this._prevResults=this._resultCache,this._resultCache={},n(this.render(),t,this._resultCache)},e.prototype.render=function(){if(this._isRenderable)return this._object.render();var t=null;if(this._hasMultipleChildren){t=this._childResult;for(var i=this._child,e=0;e<i.length;e++)t[e]=i[e].render()}else this._child&&(t=this._child.render());return this._isModifier?this._object.modify(t):t},i.exports=e},{"./Entity":5,"./SpecParser":13}],12:[function(t,i){function e(t){this.id=null,this._objects=null,this.node=new c,this._definition=null,t&&this.load(t)}function n(t){for(var i in p)if(i in t){var e=t[i];return e instanceof Array||(e=[e]),p[i].apply(this,e)}}function o(t){var i=t.transform,e=t.opacity,o=t.origin,s=t.align,r=t.size,c=a.identity;if(i instanceof Array)if(16===i.length&&"number"==typeof i[0])c=i;else for(var p=0;p<i.length;p++)c=a.multiply(c,n(i[p]));else i instanceof Function?c=i:i instanceof Object&&(c=n(i));var u=new h({transform:c,opacity:e,origin:o,align:s,size:r});return u}function s(t){for(var i=new c,e=0;e<t.length;e++){var n=r.call(this,t[e]);n&&i.add(n)}return i}function r(t){var i,e;if(t instanceof Array)i=s.call(this,t);else if(e=this._objects.length,t.render&&t.render instanceof Function)i=t;else if(t.target){var n=r.call(this,t.target),a=o.call(this,t);i=new c(a),i.add(n),t.id&&(this.id[t.id]=a)}else t.id&&(i=new c,this.id[t.id]=i);return this._objects[e]=i,i}var a=t("./Transform"),h=t("./Modifier"),c=t("./RenderNode"),p={translate:a.translate,rotate:a.rotate,rotateX:a.rotateX,rotateY:a.rotateY,rotateZ:a.rotateZ,rotateAxis:a.rotateAxis,scale:a.scale,skew:a.skew,matrix3d:function(){return arguments}};e.prototype.create=function(){return new e(this._definition)},e.prototype.load=function(t){this._definition=t,this.id={},this._objects=[],this.node.set(r.call(this,t))},e.prototype.add=function(){return this.node.add.apply(this.node,arguments)},e.prototype.render=function(){return this.node.render.apply(this.node,arguments)},i.exports=e},{"./Modifier":9,"./RenderNode":11,"./Transform":15}],13:[function(t,i){function e(){this.result={}}function n(t,i){return[t[0]*i[0]+t[1]*i[4]+t[2]*i[8],t[0]*i[1]+t[1]*i[5]+t[2]*i[9],t[0]*i[2]+t[1]*i[6]+t[2]*i[10]]}var o=t("./Transform");e._instance=new e,e.parse=function(t,i){return e._instance.parse(t,i)},e.prototype.parse=function(t,i){return this.reset(),this._parseSpec(t,i,o.identity),this.result},e.prototype.reset=function(){this.result={}};var s=[0,0];e.prototype._parseSpec=function(t,i,e){var r,a,h,c,p,u,l;if("number"==typeof t){if(r=t,h=i.transform,u=i.align||s,i.size&&u&&(u[0]||u[1])){var f=[u[0]*i.size[0],u[1]*i.size[1],0];h=o.thenMove(h,n(f,e))}this.result[r]={transform:h,opacity:i.opacity,origin:i.origin||s,align:i.align||s,size:i.size}}else{if(!t)return;if(t instanceof Array)for(var d=0;d<t.length;d++)this._parseSpec(t[d],i,e);else{a=t.target,h=i.transform,c=i.opacity,p=i.origin,u=i.align,l=i.size;var _=e;if(void 0!==t.opacity&&(c=i.opacity*t.opacity),t.transform&&(h=o.multiply(i.transform,t.transform)),t.origin&&(p=t.origin,_=i.transform),t.align&&(u=t.align),t.size||t.proportions){var y=l;l=[l[0],l[1]],t.size&&(void 0!==t.size[0]&&(l[0]=t.size[0]),void 0!==t.size[1]&&(l[1]=t.size[1])),t.proportions&&(void 0!==t.proportions[0]&&(l[0]=l[0]*t.proportions[0]),void 0!==t.proportions[1]&&(l[1]=l[1]*t.proportions[1])),y&&(u&&(u[0]||u[1])&&(h=o.thenMove(h,n([u[0]*y[0],u[1]*y[1],0],e))),p&&(p[0]||p[1])&&(h=o.moveThen([-p[0]*l[0],-p[1]*l[1],0],h))),_=i.transform,p=null,u=null}this._parseSpec(a,{transform:h,opacity:c,origin:p,align:u,size:l},_)}}},i.exports=e},{"./Transform":15}],14:[function(t,i){function e(t){c.call(this),this.options={},this.properties={},this.attributes={},this.content="",this.classList=[],this.size=null,this._classesDirty=!0,this._stylesDirty=!0,this._attributesDirty=!0,this._sizeDirty=!0,this._contentDirty=!0,this._trueSizeCheck=!0,this._dirtyClasses=[],t&&this.setOptions(t),this._currentTarget=null}function n(t){for(var i=0;i<this._dirtyClasses.length;i++)t.classList.remove(this._dirtyClasses[i]);this._dirtyClasses=[]}function o(t){for(var i in this.properties)t.style[i]=this.properties[i]}function s(t){for(var i in this.properties)t.style[i]=""}function r(t){for(var i in this.attributes)t.setAttribute(i,this.attributes[i])}function a(t){for(var i in this.attributes)t.removeAttribute(i)}function h(t,i){return t&&i?t[0]!==i[0]||t[1]!==i[1]:t!==i}var c=t("./ElementOutput");e.prototype=Object.create(c.prototype),e.prototype.constructor=e,e.prototype.elementType="div",e.prototype.elementClass="famous-surface",e.prototype.setAttributes=function(t){for(var i in t){if("style"===i)throw new Error('Cannot set styles via "setAttributes" as it will break Famo.us.  Use "setProperties" instead.');this.attributes[i]=t[i]}this._attributesDirty=!0},e.prototype.getAttributes=function(){return this.attributes},e.prototype.setProperties=function(t){for(var i in t)this.properties[i]=t[i];return this._stylesDirty=!0,this},e.prototype.getProperties=function(){return this.properties},e.prototype.addClass=function(t){return this.classList.indexOf(t)<0&&(this.classList.push(t),this._classesDirty=!0),this},e.prototype.removeClass=function(t){var i=this.classList.indexOf(t);return i>=0&&(this._dirtyClasses.push(this.classList.splice(i,1)[0]),this._classesDirty=!0),this},e.prototype.toggleClass=function(t){var i=this.classList.indexOf(t);return i>=0?this.removeClass(t):this.addClass(t),this},e.prototype.setClasses=function(t){var i=0,e=[];for(i=0;i<this.classList.length;i++)t.indexOf(this.classList[i])<0&&e.push(this.classList[i]);for(i=0;i<e.length;i++)this.removeClass(e[i]);for(i=0;i<t.length;i++)this.addClass(t[i]);return this},e.prototype.getClassList=function(){return this.classList},e.prototype.setContent=function(t){return this.content!==t&&(this.content=t,this._contentDirty=!0),this},e.prototype.getContent=function(){return this.content},e.prototype.setOptions=function(t){return t.size&&this.setSize(t.size),t.classes&&this.setClasses(t.classes),t.properties&&this.setProperties(t.properties),t.attributes&&this.setAttributes(t.attributes),t.content&&this.setContent(t.content),this},e.prototype.setup=function(t){var i=t.allocate(this.elementType);if(this.elementClass)if(this.elementClass instanceof Array)for(var e=0;e<this.elementClass.length;e++)i.classList.add(this.elementClass[e]);else i.classList.add(this.elementClass);i.style.display="",this.attach(i),this._opacity=null,this._currentTarget=i,this._stylesDirty=!0,this._classesDirty=!0,this._attributesDirty=!0,this._sizeDirty=!0,this._contentDirty=!0,this._originDirty=!0,this._transformDirty=!0},e.prototype.commit=function(t){this._currentTarget||this.setup(t.allocator);var i=this._currentTarget,e=t.size;if(this._classesDirty){n.call(this,i);for(var s=this.getClassList(),a=0;a<s.length;a++)i.classList.add(s[a]);this._classesDirty=!1,this._trueSizeCheck=!0}if(this._stylesDirty&&(o.call(this,i),this._stylesDirty=!1,this._trueSizeCheck=!0),this._attributesDirty&&(r.call(this,i),this._attributesDirty=!1,this._trueSizeCheck=!0),this.size){var p=t.size;if(e=[this.size[0],this.size[1]],void 0===e[0]&&(e[0]=p[0]),void 0===e[1]&&(e[1]=p[1]),e[0]===!0||e[1]===!0){if(e[0]!==!0||!this._trueSizeCheck&&0!==this._size[0])this._size&&(e[0]=this._size[0]);else{var u=i.offsetWidth;this._size&&this._size[0]!==u&&(this._size[0]=u,this._sizeDirty=!0),e[0]=u}if(e[1]!==!0||!this._trueSizeCheck&&0!==this._size[1])this._size&&(e[1]=this._size[1]);else{var l=i.offsetHeight;this._size&&this._size[1]!==l&&(this._size[1]=l,this._sizeDirty=!0),e[1]=l}this._trueSizeCheck=!1}}h(this._size,e)&&(this._size||(this._size=[0,0]),this._size[0]=e[0],this._size[1]=e[1],this._sizeDirty=!0),this._sizeDirty&&(this._size&&(i.style.width=this.size&&this.size[0]===!0?"":this._size[0]+"px",i.style.height=this.size&&this.size[1]===!0?"":this._size[1]+"px"),this._eventOutput.emit("resize")),this._contentDirty&&(this.deploy(i),this._eventOutput.emit("deploy"),this._contentDirty=!1,this._trueSizeCheck=!0),c.prototype.commit.call(this,t)},e.prototype.cleanup=function(t){var i=0,e=this._currentTarget;this._eventOutput.emit("recall"),this.recall(e),e.style.display="none",e.style.opacity="",e.style.width="",e.style.height="",s.call(this,e),a.call(this,e);var o=this.getClassList();for(n.call(this,e),i=0;i<o.length;i++)e.classList.remove(o[i]);if(this.elementClass)if(this.elementClass instanceof Array)for(i=0;i<this.elementClass.length;i++)e.classList.remove(this.elementClass[i]);else e.classList.remove(this.elementClass);this.detach(e),this._currentTarget=null,t.deallocate(e)},e.prototype.deploy=function(t){var i=this.getContent();if(i instanceof Node){for(;t.hasChildNodes();)t.removeChild(t.firstChild);t.appendChild(i)}else t.innerHTML=i},e.prototype.recall=function(t){for(var i=document.createDocumentFragment();t.hasChildNodes();)i.appendChild(t.firstChild);this.setContent(i)},e.prototype.getSize=function(){return this._size?this._size:this.size},e.prototype.setSize=function(t){return this.size=t?[t[0],t[1]]:null,this._sizeDirty=!0,this},i.exports=e},{"./ElementOutput":3}],15:[function(t,i){function e(t){return 2===t.length?t[0]*t[0]+t[1]*t[1]:t[0]*t[0]+t[1]*t[1]+t[2]*t[2]}function n(t){return Math.sqrt(e(t))}function o(t){return 0>t?-1:1}var s={};s.precision=1e-6,s.identity=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],s.multiply4x4=function(t,i){return[t[0]*i[0]+t[4]*i[1]+t[8]*i[2]+t[12]*i[3],t[1]*i[0]+t[5]*i[1]+t[9]*i[2]+t[13]*i[3],t[2]*i[0]+t[6]*i[1]+t[10]*i[2]+t[14]*i[3],t[3]*i[0]+t[7]*i[1]+t[11]*i[2]+t[15]*i[3],t[0]*i[4]+t[4]*i[5]+t[8]*i[6]+t[12]*i[7],t[1]*i[4]+t[5]*i[5]+t[9]*i[6]+t[13]*i[7],t[2]*i[4]+t[6]*i[5]+t[10]*i[6]+t[14]*i[7],t[3]*i[4]+t[7]*i[5]+t[11]*i[6]+t[15]*i[7],t[0]*i[8]+t[4]*i[9]+t[8]*i[10]+t[12]*i[11],t[1]*i[8]+t[5]*i[9]+t[9]*i[10]+t[13]*i[11],t[2]*i[8]+t[6]*i[9]+t[10]*i[10]+t[14]*i[11],t[3]*i[8]+t[7]*i[9]+t[11]*i[10]+t[15]*i[11],t[0]*i[12]+t[4]*i[13]+t[8]*i[14]+t[12]*i[15],t[1]*i[12]+t[5]*i[13]+t[9]*i[14]+t[13]*i[15],t[2]*i[12]+t[6]*i[13]+t[10]*i[14]+t[14]*i[15],t[3]*i[12]+t[7]*i[13]+t[11]*i[14]+t[15]*i[15]]},s.multiply=function(t,i){return[t[0]*i[0]+t[4]*i[1]+t[8]*i[2],t[1]*i[0]+t[5]*i[1]+t[9]*i[2],t[2]*i[0]+t[6]*i[1]+t[10]*i[2],0,t[0]*i[4]+t[4]*i[5]+t[8]*i[6],t[1]*i[4]+t[5]*i[5]+t[9]*i[6],t[2]*i[4]+t[6]*i[5]+t[10]*i[6],0,t[0]*i[8]+t[4]*i[9]+t[8]*i[10],t[1]*i[8]+t[5]*i[9]+t[9]*i[10],t[2]*i[8]+t[6]*i[9]+t[10]*i[10],0,t[0]*i[12]+t[4]*i[13]+t[8]*i[14]+t[12],t[1]*i[12]+t[5]*i[13]+t[9]*i[14]+t[13],t[2]*i[12]+t[6]*i[13]+t[10]*i[14]+t[14],1]
},s.thenMove=function(t,i){return i[2]||(i[2]=0),[t[0],t[1],t[2],0,t[4],t[5],t[6],0,t[8],t[9],t[10],0,t[12]+i[0],t[13]+i[1],t[14]+i[2],1]},s.moveThen=function(t,i){t[2]||(t[2]=0);var e=t[0]*i[0]+t[1]*i[4]+t[2]*i[8],n=t[0]*i[1]+t[1]*i[5]+t[2]*i[9],o=t[0]*i[2]+t[1]*i[6]+t[2]*i[10];return s.thenMove(i,[e,n,o])},s.translate=function(t,i,e){return void 0===e&&(e=0),[1,0,0,0,0,1,0,0,0,0,1,0,t,i,e,1]},s.thenScale=function(t,i){return[i[0]*t[0],i[1]*t[1],i[2]*t[2],0,i[0]*t[4],i[1]*t[5],i[2]*t[6],0,i[0]*t[8],i[1]*t[9],i[2]*t[10],0,i[0]*t[12],i[1]*t[13],i[2]*t[14],1]},s.scale=function(t,i,e){return void 0===e&&(e=1),void 0===i&&(i=t),[t,0,0,0,0,i,0,0,0,0,e,0,0,0,0,1]},s.rotateX=function(t){var i=Math.cos(t),e=Math.sin(t);return[1,0,0,0,0,i,e,0,0,-e,i,0,0,0,0,1]},s.rotateY=function(t){var i=Math.cos(t),e=Math.sin(t);return[i,0,-e,0,0,1,0,0,e,0,i,0,0,0,0,1]},s.rotateZ=function(t){var i=Math.cos(t),e=Math.sin(t);return[i,e,0,0,-e,i,0,0,0,0,1,0,0,0,0,1]},s.rotate=function(t,i,e){var n=Math.cos(t),o=Math.sin(t),s=Math.cos(i),r=Math.sin(i),a=Math.cos(e),h=Math.sin(e),c=[s*a,n*h+o*r*a,o*h-n*r*a,0,-s*h,n*a-o*r*h,o*a+n*r*h,0,r,-o*s,n*s,0,0,0,0,1];return c},s.rotateAxis=function(t,i){var e=Math.sin(i),n=Math.cos(i),o=1-n,s=t[0]*t[0]*o,r=t[0]*t[1]*o,a=t[0]*t[2]*o,h=t[1]*t[1]*o,c=t[1]*t[2]*o,p=t[2]*t[2]*o,u=t[0]*e,l=t[1]*e,f=t[2]*e,d=[s+n,r+f,a-l,0,r-f,h+n,c+u,0,a+l,c-u,p+n,0,0,0,0,1];return d},s.aboutOrigin=function(t,i){var e=t[0]-(t[0]*i[0]+t[1]*i[4]+t[2]*i[8]),n=t[1]-(t[0]*i[1]+t[1]*i[5]+t[2]*i[9]),o=t[2]-(t[0]*i[2]+t[1]*i[6]+t[2]*i[10]);return s.thenMove(i,[e,n,o])},s.skew=function(t,i,e){return[1,Math.tan(i),0,0,Math.tan(e),1,0,0,0,Math.tan(t),1,0,0,0,0,1]},s.skewX=function(t){return[1,0,0,0,Math.tan(t),1,0,0,0,0,1,0,0,0,0,1]},s.skewY=function(t){return[1,Math.tan(t),0,0,0,1,0,0,0,0,1,0,0,0,0,1]},s.perspective=function(t){return[1,0,0,0,0,1,0,0,0,0,1,-1/t,0,0,0,1]},s.getTranslate=function(t){return[t[12],t[13],t[14]]},s.inverse=function(t){var i=t[5]*t[10]-t[6]*t[9],e=t[4]*t[10]-t[6]*t[8],n=t[4]*t[9]-t[5]*t[8],o=t[1]*t[10]-t[2]*t[9],s=t[0]*t[10]-t[2]*t[8],r=t[0]*t[9]-t[1]*t[8],a=t[1]*t[6]-t[2]*t[5],h=t[0]*t[6]-t[2]*t[4],c=t[0]*t[5]-t[1]*t[4],p=t[0]*i-t[1]*e+t[2]*n,u=1/p,l=[u*i,-u*o,u*a,0,-u*e,u*s,-u*h,0,u*n,-u*r,u*c,0,0,0,0,1];return l[12]=-t[12]*l[0]-t[13]*l[4]-t[14]*l[8],l[13]=-t[12]*l[1]-t[13]*l[5]-t[14]*l[9],l[14]=-t[12]*l[2]-t[13]*l[6]-t[14]*l[10],l},s.transpose=function(t){return[t[0],t[4],t[8],t[12],t[1],t[5],t[9],t[13],t[2],t[6],t[10],t[14],t[3],t[7],t[11],t[15]]},s.interpret=function(t){var i=[t[0],t[1],t[2]],r=o(i[0]),a=n(i),h=[i[0]+r*a,i[1],i[2]],c=2/e(h);if(c>=1/0)return{translate:s.getTranslate(t),rotate:[0,0,0],scale:[0,0,0],skew:[0,0,0]};var p=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1];p[0]=1-c*h[0]*h[0],p[5]=1-c*h[1]*h[1],p[10]=1-c*h[2]*h[2],p[1]=-c*h[0]*h[1],p[2]=-c*h[0]*h[2],p[6]=-c*h[1]*h[2],p[4]=p[1],p[8]=p[2],p[9]=p[6];var u=s.multiply(p,t),l=[u[5],u[6]],f=o(l[0]),d=n(l),_=[l[0]+f*d,l[1]],y=2/e(_),g=[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1];g[5]=1-y*_[0]*_[0],g[10]=1-y*_[1]*_[1],g[6]=-y*_[0]*_[1],g[9]=g[6];var v=s.multiply(g,p),m=s.multiply(v,t),O=s.scale(m[0]<0?-1:1,m[5]<0?-1:1,m[10]<0?-1:1);m=s.multiply(m,O),v=s.multiply(O,v);var S={};return S.translate=s.getTranslate(t),S.rotate=[Math.atan2(-v[6],v[10]),Math.asin(v[2]),Math.atan2(-v[1],v[0])],S.rotate[0]||(S.rotate[0]=0,S.rotate[2]=Math.atan2(v[4],v[5])),S.scale=[m[0],m[5],m[10]],S.skew=[Math.atan2(m[9],S.scale[2]),Math.atan2(m[8],S.scale[2]),Math.atan2(m[4],S.scale[0])],Math.abs(S.rotate[0])+Math.abs(S.rotate[2])>1.5*Math.PI&&(S.rotate[1]=Math.PI-S.rotate[1],S.rotate[1]>Math.PI&&(S.rotate[1]-=2*Math.PI),S.rotate[1]<-Math.PI&&(S.rotate[1]+=2*Math.PI),S.rotate[0]<0?S.rotate[0]+=Math.PI:S.rotate[0]-=Math.PI,S.rotate[2]<0?S.rotate[2]+=Math.PI:S.rotate[2]-=Math.PI),S},s.average=function(t,i,e){e=void 0===e?.5:e;for(var n=s.interpret(t),o=s.interpret(i),r={translate:[0,0,0],rotate:[0,0,0],scale:[0,0,0],skew:[0,0,0]},a=0;3>a;a++)r.translate[a]=(1-e)*n.translate[a]+e*o.translate[a],r.rotate[a]=(1-e)*n.rotate[a]+e*o.rotate[a],r.scale[a]=(1-e)*n.scale[a]+e*o.scale[a],r.skew[a]=(1-e)*n.skew[a]+e*o.skew[a];return s.build(r)},s.build=function(t){var i=s.scale(t.scale[0],t.scale[1],t.scale[2]),e=s.skew(t.skew[0],t.skew[1],t.skew[2]),n=s.rotate(t.rotate[0],t.rotate[1],t.rotate[2]);return s.thenMove(s.multiply(s.multiply(n,e),i),t.translate)},s.equals=function(t,i){return!s.notEquals(t,i)},s.notEquals=function(t,i){return t===i?!1:!(t&&i)||t[12]!==i[12]||t[13]!==i[13]||t[14]!==i[14]||t[0]!==i[0]||t[1]!==i[1]||t[2]!==i[2]||t[4]!==i[4]||t[5]!==i[5]||t[6]!==i[6]||t[8]!==i[8]||t[9]!==i[9]||t[10]!==i[10]},s.normalizeRotation=function(t){var i=t.slice(0);for((i[0]===.5*Math.PI||i[0]===.5*-Math.PI)&&(i[0]=-i[0],i[1]=Math.PI-i[1],i[2]-=Math.PI),i[0]>.5*Math.PI&&(i[0]=i[0]-Math.PI,i[1]=Math.PI-i[1],i[2]-=Math.PI),i[0]<.5*-Math.PI&&(i[0]=i[0]+Math.PI,i[1]=-Math.PI-i[1],i[2]-=Math.PI);i[1]<-Math.PI;)i[1]+=2*Math.PI;for(;i[1]>=Math.PI;)i[1]-=2*Math.PI;for(;i[2]<-Math.PI;)i[2]+=2*Math.PI;for(;i[2]>=Math.PI;)i[2]-=2*Math.PI;return i},s.inFront=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,.001,1],s.behind=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,-.001,1],i.exports=s},{}],16:[function(t,i){function e(t){this._node=new s,this._eventInput=new n,this._eventOutput=new n,n.setInputHandler(this,this._eventInput),n.setOutputHandler(this,this._eventOutput),this.options=r.clone(this.constructor.DEFAULT_OPTIONS||e.DEFAULT_OPTIONS),this._optionsManager=new o(this.options),t&&this.setOptions(t)}var n=t("./EventHandler"),o=t("./OptionsManager"),s=t("./RenderNode"),r=t("../utilities/Utility");e.DEFAULT_OPTIONS={},e.prototype.getOptions=function(t){return this._optionsManager.getOptions(t)},e.prototype.setOptions=function(t){this._optionsManager.patch(t)},e.prototype.add=function(){return this._node.add.apply(this._node,arguments)},e.prototype._add=e.prototype.add,e.prototype.render=function(){return this._node.render()},e.prototype.getSize=function(){return this._node&&this._node.getSize?this._node.getSize.apply(this._node,arguments)||this.options.size:this.options.size},i.exports=e},{"../utilities/Utility":95,"./EventHandler":7,"./OptionsManager":10,"./RenderNode":11}],17:[function(t,i){function e(t){t||(t=[]),t instanceof Array&&(t={array:t}),this._=null,this.index=t.index||0,t.array?this._=new this.constructor.Backing(t.array):t._&&(this._=t._),this.index===this._.firstIndex&&(this._.firstNode=this),this.index===this._.firstIndex+this._.array.length-1&&(this._.lastNode=this),void 0!==t.loop&&(this._.loop=t.loop),void 0!==t.trackSize&&(this._.trackSize=t.trackSize),this._previousNode=null,this._nextNode=null}e.Backing=function(t){this.array=t,this.firstIndex=0,this.loop=!1,this.firstNode=null,this.lastNode=null,this.cumulativeSizes=[[0,0]],this.sizeDirty=!0,this.trackSize=!1},e.Backing.prototype.getValue=function(t){var i=t-this.firstIndex;return 0>i||i>=this.array.length?null:this.array[i]},e.Backing.prototype.setValue=function(t,i){this.array[t-this.firstIndex]=i},e.Backing.prototype.getSize=function(t){return this.cumulativeSizes[t]},e.Backing.prototype.calculateSize=function(t){t=t||this.array.length;for(var i=[0,0],e=0;t>e;e++){var n=this.array[e].getSize();if(!n)return void 0;void 0!==i[0]&&(void 0===n[0]?i[0]=void 0:i[0]+=n[0]),void 0!==i[1]&&(void 0===n[1]?i[1]=void 0:i[1]+=n[1]),this.cumulativeSizes[e+1]=i.slice()}return this.sizeDirty=!1,i},e.Backing.prototype.reindex=function(t,i,e){if(this.array[0]){for(var n=0,o=this.firstIndex,s=e-i,r=this.firstNode;t-1>o;)r=r.getNext(),o++;var a=r;for(n=0;i>n;n++)r=r.getNext(),r&&(r._previousNode=a);var h=r?r.getNext():null;for(a._nextNode=null,r=a,n=0;e>n;n++)r=r.getNext();if(o+=e,r!==h&&(r._nextNode=h,h&&(h._previousNode=r)),h)for(r=h,o++;r&&o<this.array.length+this.firstIndex;)r._nextNode?r.index+=s:r.index=o,r=r.getNext(),o++;this.trackSize&&(this.sizeDirty=!0)}},e.prototype.getPrevious=function(){var t=this._.array.length;return t?this.index===this._.firstIndex?this._.loop?(this._previousNode=this._.lastNode||new this.constructor({_:this._,index:this._.firstIndex+t-1}),this._previousNode._nextNode=this):this._previousNode=null:this._previousNode||(this._previousNode=new this.constructor({_:this._,index:this.index-1}),this._previousNode._nextNode=this):this._previousNode=null,this._previousNode},e.prototype.getNext=function(){var t=this._.array.length;return t?this.index===this._.firstIndex+t-1?this._.loop?(this._nextNode=this._.firstNode||new this.constructor({_:this._,index:this._.firstIndex}),this._nextNode._previousNode=this):this._nextNode=null:this._nextNode||(this._nextNode=new this.constructor({_:this._,index:this.index+1}),this._nextNode._previousNode=this):this._nextNode=null,this._nextNode},e.prototype.indexOf=function(t){return this._.array.indexOf(t)},e.prototype.getIndex=function(){return this.index},e.prototype.toString=function(){return""+this.index},e.prototype.unshift=function(){this._.array.unshift.apply(this._.array,arguments),this._.firstIndex-=arguments.length,this._.trackSize&&(this._.sizeDirty=!0)},e.prototype.push=function(){this._.array.push.apply(this._.array,arguments),this._.trackSize&&(this._.sizeDirty=!0)},e.prototype.splice=function(t,i){var e=Array.prototype.slice.call(arguments,2);this._.array.splice.apply(this._.array,[t-this._.firstIndex,i].concat(e)),this._.reindex(t,i,e.length)},e.prototype.swap=function(t){var i=t.get(),e=this.get();this._.setValue(this.index,i),this._.setValue(t.index,e);var n=this._previousNode,o=this._nextNode,s=this.index,r=t._previousNode,a=t._nextNode,h=t.index;this.index=h,this._previousNode=r===this?t:r,this._previousNode&&(this._previousNode._nextNode=this),this._nextNode=a===this?t:a,this._nextNode&&(this._nextNode._previousNode=this),t.index=s,t._previousNode=n===t?this:n,t._previousNode&&(t._previousNode._nextNode=t),t._nextNode=o===t?this:o,t._nextNode&&(t._nextNode._previousNode=t),this.index===this._.firstIndex?this._.firstNode=this:this.index===this._.firstIndex+this._.array.length-1&&(this._.lastNode=this),t.index===this._.firstIndex?this._.firstNode=t:t.index===this._.firstIndex+this._.array.length-1&&(this._.lastNode=t),this._.trackSize&&(this._.sizeDirty=!0)},e.prototype.get=function(){return this._.getValue(this.index)},e.prototype.getSize=function(){var t=this.get();return t?t.getSize():null},e.prototype.render=function(){this._.trackSize&&this._.sizeDirty&&this._.calculateSize();var t=this.get();return t?t.render.apply(t,arguments):null},i.exports=e},{}],18:[function(t,i){i.exports={Context:t("./Context"),ElementAllocator:t("./ElementAllocator"),ElementOutput:t("./ElementOutput"),Engine:t("./Engine"),Entity:t("./Entity"),EventEmitter:t("./EventEmitter"),EventHandler:t("./EventHandler"),Group:t("./Group"),Modifier:t("./Modifier"),OptionsManager:t("./OptionsManager"),RenderNode:t("./RenderNode"),Scene:t("./Scene"),SpecParser:t("./SpecParser"),Surface:t("./Surface"),Transform:t("./Transform"),View:t("./View"),ViewSequence:t("./ViewSequence")}},{"./Context":1,"./ElementAllocator":2,"./ElementOutput":3,"./Engine":4,"./Entity":5,"./EventEmitter":6,"./EventHandler":7,"./Group":8,"./Modifier":9,"./OptionsManager":10,"./RenderNode":11,"./Scene":12,"./SpecParser":13,"./Surface":14,"./Transform":15,"./View":16,"./ViewSequence":17}],19:[function(t,i){function e(t){this.dispatchers={},this.currMode=void 0,this.setMode(t)}var n=t("../core/EventHandler");e.prototype.setMode=function(t){if(t!==this.currMode){var i=this.currMode;this.dispatchers[this.currMode]&&this.dispatchers[this.currMode].trigger("unpipe"),this.currMode=t,this.dispatchers[t]&&this.dispatchers[t].emit("pipe"),this.emit("change",{from:i,to:t})}},e.prototype.forMode=function(t){return this.dispatchers[t]||(this.dispatchers[t]=new n),this.dispatchers[t]},e.prototype.emit=function(t,i){if(void 0===this.currMode)return!1;i||(i={});var e=this.dispatchers[this.currMode];return e?e.trigger(t,i):void 0},i.exports=e},{"../core/EventHandler":7}],20:[function(t,i){function e(t){n.call(this),this._condition=t}var n=t("../core/EventHandler");e.prototype=Object.create(n.prototype),e.prototype.constructor=e,e.prototype.emit=function(t,i){return this._condition(t,i)?n.prototype.emit.apply(this,arguments):void 0},e.prototype.trigger=e.prototype.emit,i.exports=e},{"../core/EventHandler":7}],21:[function(t,i){function e(t){n.call(this),this._mappingFunction=t}var n=t("../core/EventHandler");e.prototype=Object.create(n.prototype),e.prototype.constructor=e,e.prototype.subscribe=null,e.prototype.unsubscribe=null,e.prototype.emit=function(t,i){var e=this._mappingFunction.apply(this,arguments);e&&e.emit instanceof Function&&e.emit(t,i)},e.prototype.trigger=e.prototype.emit,i.exports=e},{"../core/EventHandler":7}],22:[function(t,i){i.exports={EventArbiter:t("./EventArbiter"),EventFilter:t("./EventFilter"),EventMapper:t("./EventMapper")}},{"./EventArbiter":19,"./EventFilter":20,"./EventMapper":21}],23:[function(t,i){i.exports={events:t("./events"),core:t("./core"),math:t("./math"),inputs:t("./inputs"),physics:t("./physics"),modifiers:t("./modifiers"),surfaces:t("./surfaces"),transitions:t("./transitions"),utilities:t("./utilities"),views:t("./views"),widgets:t("./widgets")}},{"./core":18,"./events":22,"./inputs":36,"./math":42,"./modifiers":47,"./physics":71,"./surfaces":82,"./transitions":92,"./utilities":96,"./views":111,"./widgets":116}],24:[function(t,i){function e(t,i){void 0===i&&(i="update"),this._state=t&&t.get&&t.set?t:new s(t||0),this._eventInput=new o,o.setInputHandler(this,this._eventInput),this._eventInput.on(i,n.bind(this))}function n(t){var i=t.delta,e=this.get();if(i.constructor===e.constructor){var n=i instanceof Array?[e[0]+i[0],e[1]+i[1]]:e+i;this.set(n)}}var o=t("../core/EventHandler"),s=t("../transitions/Transitionable");e.prototype.get=function(){return this._state.get()},e.prototype.set=function(t){this._state.set(t)},i.exports=e},{"../core/EventHandler":7,"../transitions/Transitionable":88}],25:[function(){function t(t){window.addEventListener(t,function(t){return t.stopPropagation(),!1},!0)}var i="ontouchstart"in window;i&&(t("mousedown"),t("mousemove"),t("mouseup"),t("mouseleave"))},{}],26:[function(){!function(){if(window.CustomEvent){var t=300,i=500,e={},n={},o=Date.now;window.addEventListener("touchstart",function(t){for(var i=o(),n=0;n<t.changedTouches.length;n++){var s=t.changedTouches[n];e[s.identifier]=i}}),window.addEventListener("touchmove",function(t){for(var i=0;i<t.changedTouches.length;i++){var n=t.changedTouches[i];delete e[n.identifier]}}),window.addEventListener("touchend",function(i){for(var s=o(),r=0;r<i.changedTouches.length;r++){var a=i.changedTouches[r],h=e[a.identifier];if(h&&t>s-h){var c=new window.CustomEvent("click",{bubbles:!0,detail:a});n[s]=i,i.target.dispatchEvent(c)}delete e[a.identifier]}}),window.addEventListener("click",function(t){var e=o();for(var s in n){var r=n[s];i>e-s?t instanceof window.MouseEvent&&t.target===r.target&&t.stopPropagation():delete n[s]}},!0)}}()},{}],27:[function(t,i){function e(t,i){this._eventInput=new o,this._eventOutput=new o,o.setInputHandler(this,this._eventInput),o.setOutputHandler(this,this._eventOutput),this._syncs={},t&&this.addSync(t),i&&this.setOptions(i)}function n(t,i){s[t]&&(this._syncs[t]=new s[t](i),this.pipeSync(t))}var o=t("../core/EventHandler");e.DIRECTION_X=0,e.DIRECTION_Y=1,e.DIRECTION_Z=2;var s={};e.register=function(t){for(var i in t){if(s[i]){if(s[i]===t[i])return;throw new Error("this key is registered to a different sync class")}s[i]=t[i]}},e.prototype.setOptions=function(t){for(var i in this._syncs)this._syncs[i].setOptions(t)},e.prototype.pipeSync=function(t){var i=this._syncs[t];this._eventInput.pipe(i),i.pipe(this._eventOutput)},e.prototype.unpipeSync=function(t){var i=this._syncs[t];this._eventInput.unpipe(i),i.unpipe(this._eventOutput)},e.prototype.addSync=function(t){if(t instanceof Array)for(var i=0;i<t.length;i++)n.call(this,t[i]);else if(t instanceof Object)for(var e in t)n.call(this,e,t[e])},i.exports=e},{"../core/EventHandler":7}],28:[function(t,i){function e(t){this.options=Object.create(e.DEFAULT_OPTIONS),this._optionsManager=new h(this.options),t&&this.setOptions(t),this._eventInput=new a,this._eventOutput=new a,a.setInputHandler(this,this._eventInput),a.setOutputHandler(this,this._eventOutput),this._eventInput.on("mousedown",n.bind(this)),this._eventInput.on("mousemove",o.bind(this)),this._eventInput.on("mouseup",s.bind(this)),this.options.propogate?this._eventInput.on("mouseleave",r.bind(this)):this._eventInput.on("mouseleave",s.bind(this)),this._payload={delta:null,position:null,velocity:null,clientX:0,clientY:0,offsetX:0,offsetY:0},this._positionHistory=[],this._position=null,this._prevCoord=void 0,this._prevTime=void 0,this._down=!1,this._moved=!1,this._documentActive=!1}function n(t){var i,e;this.options.preventDefault&&t.preventDefault();var n=t.clientX,o=t.clientY;this._prevCoord=[n,o],this._prevTime=Date.now(),this._down=!0,this._move=!1,void 0!==this.options.direction?(this._position=0,i=0,e=0):(this._position=[0,0],i=[0,0],e=[0,0]);var s=this._payload;s.delta=i,s.position=this._position,s.velocity=e,s.clientX=n,s.clientY=o,s.offsetX=t.offsetX,s.offsetY=t.offsetY,this._positionHistory.push({position:s.position.slice?s.position.slice(0):s.position,time:this._prevTime}),this._eventOutput.emit("start",s),this._documentActive=!1}function o(t){if(this._prevCoord){var i=this._prevCoord,n=(this._prevTime,t.clientX),o=t.clientY,s=Date.now(),r=n-i[0],a=o-i[1];this.options.rails&&(Math.abs(r)>Math.abs(a)?a=0:r=0);var h,p,u=Math.max(s-this._positionHistory[0].time,c),l=this.options.scale;this.options.direction===e.DIRECTION_X?(p=l*r,this._position+=p,h=l*(this._position-this._positionHistory[0].position)/u):this.options.direction===e.DIRECTION_Y?(p=l*a,this._position+=p,h=l*(this._position-this._positionHistory[0].position)/u):(p=[l*r,l*a],h=[l*(this._position[0]-this._positionHistory[0].position[0])/u,l*(this._position[1]-this._positionHistory[0].position[1])/u],this._position[0]+=p[0],this._position[1]+=p[1]);var f=this._payload;f.delta=p,f.position=this._position,f.velocity=h,f.clientX=n,f.clientY=o,f.offsetX=t.offsetX,f.offsetY=t.offsetY,this._positionHistory.length===this.options.velocitySampleLength&&this._positionHistory.shift(),this._positionHistory.push({position:f.position.slice?f.position.slice(0):f.position,time:s}),this._eventOutput.emit("update",f),this._prevCoord=[n,o],this._prevTime=s,this._move=!0}}function s(){this._down&&(this._eventOutput.emit("end",this._payload),this._prevCoord=void 0,this._prevTime=void 0,this._down=!1,this._move=!1,this._positionHistory=[])}function r(t){if(this._down&&this._move&&!this._documentActive){var i=o.bind(this),e=function(t){s.call(this,t),document.removeEventListener("mousemove",i),document.removeEventListener("mouseup",e)}.bind(this,t);document.addEventListener("mousemove",i),document.addEventListener("mouseup",e),this._documentActive=!0}}var a=t("../core/EventHandler"),h=t("../core/OptionsManager");e.DEFAULT_OPTIONS={direction:void 0,rails:!1,scale:1,propogate:!0,velocitySampleLength:10,preventDefault:!0},e.DIRECTION_X=0,e.DIRECTION_Y=1;var c=8;e.prototype.getOptions=function(){return this.options},e.prototype.setOptions=function(t){return this._optionsManager.setOptions(t)},i.exports=e},{"../core/EventHandler":7,"../core/OptionsManager":10}],29:[function(t,i){function e(t){n.call(this),this.options=Object.create(e.DEFAULT_OPTIONS),this._optionsManager=new o(this.options),t&&this.setOptions(t),this._displacement=0,this._previousDistance=0}var n=t("./TwoFingerSync"),o=t("../core/OptionsManager");e.prototype=Object.create(n.prototype),e.prototype.constructor=e,e.DEFAULT_OPTIONS={scale:1},e.prototype._startUpdate=function(t){this._previousDistance=n.calculateDistance(this.posA,this.posB),this._displacement=0,this._eventOutput.emit("start",{count:t.touches.length,touches:[this.touchAId,this.touchBId],distance:this._dist,center:n.calculateCenter(this.posA,this.posB)})},e.prototype._moveUpdate=function(t){var i=n.calculateDistance(this.posA,this.posB),e=n.calculateCenter(this.posA,this.posB),o=this.options.scale,s=o*(i-this._previousDistance),r=s/t;this._previousDistance=i,this._displacement+=s,this._eventOutput.emit("update",{delta:s,velocity:r,distance:i,displacement:this._displacement,center:e,touches:[this.touchAId,this.touchBId]})},e.prototype.getOptions=function(){return this.options},e.prototype.setOptions=function(t){return this._optionsManager.setOptions(t)},i.exports=e},{"../core/OptionsManager":10,"./TwoFingerSync":35}],30:[function(t,i){function e(t){n.call(this),this.options=Object.create(e.DEFAULT_OPTIONS),this._optionsManager=new o(this.options),t&&this.setOptions(t),this._angle=0,this._previousAngle=0}var n=t("./TwoFingerSync"),o=t("../core/OptionsManager");e.prototype=Object.create(n.prototype),e.prototype.constructor=e,e.DEFAULT_OPTIONS={scale:1},e.prototype._startUpdate=function(t){this._angle=0,this._previousAngle=n.calculateAngle(this.posA,this.posB);var i=n.calculateCenter(this.posA,this.posB);this._eventOutput.emit("start",{count:t.touches.length,angle:this._angle,center:i,touches:[this.touchAId,this.touchBId]})},e.prototype._moveUpdate=function(t){var i=this.options.scale,e=n.calculateAngle(this.posA,this.posB),o=n.calculateCenter(this.posA,this.posB),s=i*(e-this._previousAngle),r=s/t;this._angle+=s,this._eventOutput.emit("update",{delta:s,velocity:r,angle:this._angle,center:o,touches:[this.touchAId,this.touchBId]}),this._previousAngle=e},e.prototype.getOptions=function(){return this.options},e.prototype.setOptions=function(t){return this._optionsManager.setOptions(t)},i.exports=e},{"../core/OptionsManager":10,"./TwoFingerSync":35}],31:[function(t,i){function e(t){o.call(this),this.options=Object.create(e.DEFAULT_OPTIONS),this._optionsManager=new s(this.options),t&&this.setOptions(t),this._scaleFactor=1,this._startDist=0,this._eventInput.on("pipe",n.bind(this))}function n(){this.touchAId=void 0,this.touchBId=void 0}var o=t("./TwoFingerSync"),s=t("../core/OptionsManager");e.prototype=Object.create(o.prototype),e.prototype.constructor=e,e.DEFAULT_OPTIONS={scale:1},e.prototype._startUpdate=function(t){this._scaleFactor=1,this._startDist=o.calculateDistance(this.posA,this.posB),this._eventOutput.emit("start",{count:t.touches.length,touches:[this.touchAId,this.touchBId],distance:this._startDist,center:o.calculateCenter(this.posA,this.posB)})},e.prototype._moveUpdate=function(t){var i=this.options.scale,e=o.calculateDistance(this.posA,this.posB),n=o.calculateCenter(this.posA,this.posB),s=(e-this._startDist)/this._startDist,r=Math.max(1+i*s,0),a=(r-this._scaleFactor)/t;this._eventOutput.emit("update",{delta:s,scale:r,velocity:a,distance:e,center:n,touches:[this.touchAId,this.touchBId]}),this._scaleFactor=r},e.prototype.getOptions=function(){return this.options},e.prototype.setOptions=function(t){return this._optionsManager.setOptions(t)},i.exports=e},{"../core/OptionsManager":10,"./TwoFingerSync":35}],32:[function(t,i){function e(t){this.options=Object.create(e.DEFAULT_OPTIONS),this._optionsManager=new a(this.options),t&&this.setOptions(t),this._payload={delta:null,position:null,velocity:null,slip:!0},this._eventInput=new s,this._eventOutput=new s,s.setInputHandler(this,this._eventInput),s.setOutputHandler(this,this._eventOutput),this._position=void 0===this.options.direction?[0,0]:0,this._prevTime=void 0,this._prevVel=void 0,this._eventInput.on("mousewheel",o.bind(this)),this._eventInput.on("wheel",o.bind(this)),this._inProgress=!1,this._loopBound=!1}function n(){if(this._inProgress&&c()-this._prevTime>this.options.stallTime){this._inProgress=!1;var t=Math.abs(this._prevVel)>=this.options.minimumEndSpeed?this._prevVel:0,i=this._payload;i.position=this._position,i.velocity=t,i.slip=!0,this._eventOutput.emit("end",i)}}function o(t){this.options.preventDefault&&t.preventDefault(),this._inProgress||(this._inProgress=!0,this._position=void 0===this.options.direction?[0,0]:0,y=this._payload,y.slip=!0,y.position=this._position,y.clientX=t.clientX,y.clientY=t.clientY,y.offsetX=t.offsetX,y.offsetY=t.offsetY,this._eventOutput.emit("start",y),this._loopBound||(r.on("prerender",n.bind(this)),this._loopBound=!0));var i=c(),o=this._prevTime||i,s=void 0!==t.wheelDeltaX?t.wheelDeltaX:-t.deltaX,a=void 0!==t.wheelDeltaY?t.wheelDeltaY:-t.deltaY;1===t.deltaMode&&(s*=this.options.lineHeight,a*=this.options.lineHeight),this.options.rails&&(Math.abs(s)>Math.abs(a)?a=0:s=0);var p,u,l=Math.max(i-o,h),f=s/l,d=a/l,_=this.options.scale;this.options.direction===e.DIRECTION_X?(u=_*s,p=_*f,this._position+=u):this.options.direction===e.DIRECTION_Y?(u=_*a,p=_*d,this._position+=u):(u=[_*s,_*a],p=[_*f,_*d],this._position[0]+=u[0],this._position[1]+=u[1]);var y=this._payload;y.delta=u,y.velocity=p,y.position=this._position,y.slip=!0,this._eventOutput.emit("update",y),this._prevTime=i,this._prevVel=p}var s=t("../core/EventHandler"),r=t("../core/Engine"),a=t("../core/OptionsManager");e.DEFAULT_OPTIONS={direction:void 0,minimumEndSpeed:1/0,rails:!1,scale:1,stallTime:50,lineHeight:40,preventDefault:!0},e.DIRECTION_X=0,e.DIRECTION_Y=1;var h=8,c=Date.now;e.prototype.getOptions=function(){return this.options},e.prototype.setOptions=function(t){return this._optionsManager.setOptions(t)},i.exports=e},{"../core/Engine":4,"../core/EventHandler":7,"../core/OptionsManager":10}],33:[function(t,i){function e(t){this.options=Object.create(e.DEFAULT_OPTIONS),this._optionsManager=new h(this.options),t&&this.setOptions(t),this._eventOutput=new a,this._touchTracker=new r({touchLimit:this.options.touchLimit}),a.setOutputHandler(this,this._eventOutput),a.setInputHandler(this,this._touchTracker),this._touchTracker.on("trackstart",n.bind(this)),this._touchTracker.on("trackmove",o.bind(this)),this._touchTracker.on("trackend",s.bind(this)),this._payload={delta:null,position:null,velocity:null,clientX:void 0,clientY:void 0,count:0,touch:void 0},this._position=null}function n(t){var i,e;void 0!==this.options.direction?(this._position=0,i=0,e=0):(this._position=[0,0],i=[0,0],e=[0,0]);var n=this._payload;n.delta=e,n.position=this._position,n.velocity=i,n.clientX=t.x,n.clientY=t.y,n.count=t.count,n.touch=t.identifier,this._eventOutput.emit("start",n)}function o(t){var i=t.history,n=i[i.length-1],o=i[i.length-2],s=i[i.length-this.options.velocitySampleLength]?i[i.length-this.options.velocitySampleLength]:i[i.length-2],r=s.timestamp,a=n.timestamp,h=n.x-o.x,p=n.y-o.y,u=n.x-s.x,l=n.y-s.y;this.options.rails&&(Math.abs(h)>Math.abs(p)?p=0:h=0,Math.abs(u)>Math.abs(l)?l=0:u=0);var f,d,_=Math.max(a-r,c),y=u/_,g=l/_,v=this.options.scale;this.options.direction===e.DIRECTION_X?(d=v*h,f=v*y,this._position+=d):this.options.direction===e.DIRECTION_Y?(d=v*p,f=v*g,this._position+=d):(d=[v*h,v*p],f=[v*y,v*g],this._position[0]+=d[0],this._position[1]+=d[1]);var m=this._payload;m.delta=d,m.velocity=f,m.position=this._position,m.clientX=t.x,m.clientY=t.y,m.count=t.count,m.touch=t.identifier,this._eventOutput.emit("update",m)}function s(t){this._payload.count=t.count,this._eventOutput.emit("end",this._payload)}var r=t("./TouchTracker"),a=t("../core/EventHandler"),h=t("../core/OptionsManager");e.DEFAULT_OPTIONS={direction:void 0,rails:!1,touchLimit:1,velocitySampleLength:10,scale:1},e.DIRECTION_X=0,e.DIRECTION_Y=1;var c=8;e.prototype.setOptions=function(t){return this._optionsManager.setOptions(t)},e.prototype.getOptions=function(){return this.options},i.exports=e},{"../core/EventHandler":7,"../core/OptionsManager":10,"./TouchTracker":34}],34:[function(t,i){function e(t,i,e){return{x:t.clientX,y:t.clientY,identifier:t.identifier,origin:i.origin,timestamp:c(),count:i.touches.length,history:e}}function n(t){if(!(t.touches.length>this.touchLimit)){this.isTouched=!0;for(var i=0;i<t.changedTouches.length;i++){var n=t.changedTouches[i],o=e(n,t,null);this.eventOutput.emit("trackstart",o),this.selective||this.touchHistory[n.identifier]||this.track(o)}}}function o(t){if(!(t.touches.length>this.touchLimit))for(var i=0;i<t.changedTouches.length;i++){var n=t.changedTouches[i],o=this.touchHistory[n.identifier];if(o){var s=e(n,t,o);this.touchHistory[n.identifier].push(s),this.eventOutput.emit("trackmove",s)}}}function s(t){if(this.isTouched){for(var i=0;i<t.changedTouches.length;i++){var n=t.changedTouches[i],o=this.touchHistory[n.identifier];if(o){var s=e(n,t,o);this.eventOutput.emit("trackend",s),delete this.touchHistory[n.identifier]}}this.isTouched=!1}}function r(){for(var t in this.touchHistory){var i=this.touchHistory[t];this.eventOutput.emit("trackend",{touch:i[i.length-1].touch,timestamp:Date.now(),count:0,history:i}),delete this.touchHistory[t]}}function a(t){this.selective=t.selective,this.touchLimit=t.touchLimit||1,this.touchHistory={},this.eventInput=new h,this.eventOutput=new h,h.setInputHandler(this,this.eventInput),h.setOutputHandler(this,this.eventOutput),this.eventInput.on("touchstart",n.bind(this)),this.eventInput.on("touchmove",o.bind(this)),this.eventInput.on("touchend",s.bind(this)),this.eventInput.on("touchcancel",s.bind(this)),this.eventInput.on("unpipe",r.bind(this)),this.isTouched=!1}var h=t("../core/EventHandler"),c=Date.now;a.prototype.track=function(t){this.touchHistory[t.identifier]=[t]},i.exports=a},{"../core/EventHandler":7}],35:[function(t,i){function e(){this._eventInput=new n,this._eventOutput=new n,n.setInputHandler(this,this._eventInput),n.setOutputHandler(this,this._eventOutput),this.touchAEnabled=!1,this.touchAId=0,this.posA=null,this.timestampA=0,this.touchBEnabled=!1,this.touchBId=0,this.posB=null,this.timestampB=0,this._eventInput.on("touchstart",this.handleStart.bind(this)),this._eventInput.on("touchmove",this.handleMove.bind(this)),this._eventInput.on("touchend",this.handleEnd.bind(this)),this._eventInput.on("touchcancel",this.handleEnd.bind(this))}var n=t("../core/EventHandler");e.calculateAngle=function(t,i){var e=i[0]-t[0],n=i[1]-t[1];return Math.atan2(n,e)},e.calculateDistance=function(t,i){var e=i[0]-t[0],n=i[1]-t[1];return Math.sqrt(e*e+n*n)},e.calculateCenter=function(t,i){return[(t[0]+i[0])/2,(t[1]+i[1])/2]};var o=Date.now;e.prototype.handleStart=function(t){for(var i=0;i<t.changedTouches.length;i++){var e=t.changedTouches[i];this.touchAEnabled?this.touchBEnabled||(this.touchBId=e.identifier,this.touchBEnabled=!0,this.posB=[e.pageX,e.pageY],this.timestampB=o(),this._startUpdate(t)):(this.touchAId=e.identifier,this.touchAEnabled=!0,this.posA=[e.pageX,e.pageY],this.timestampA=o())}},e.prototype.handleMove=function(t){if(this.touchAEnabled&&this.touchBEnabled){for(var i,e=this.timestampA,n=this.timestampB,s=0;s<t.changedTouches.length;s++){var r=t.changedTouches[s];r.identifier===this.touchAId?(this.posA=[r.pageX,r.pageY],this.timestampA=o(),i=this.timestampA-e):r.identifier===this.touchBId&&(this.posB=[r.pageX,r.pageY],this.timestampB=o(),i=this.timestampB-n)}i&&this._moveUpdate(i)}},e.prototype.handleEnd=function(t){for(var i=0;i<t.changedTouches.length;i++){var e=t.changedTouches[i];(e.identifier===this.touchAId||e.identifier===this.touchBId)&&(this.touchAEnabled&&this.touchBEnabled&&this._eventOutput.emit("end",{touches:[this.touchAId,this.touchBId],angle:this._angle}),this.touchAEnabled=!1,this.touchAId=0,this.touchBEnabled=!1,this.touchBId=0)}},i.exports=e},{"../core/EventHandler":7}],36:[function(t,i){i.exports={Accumulator:t("./Accumulator"),DesktopEmulationMode:t("./DesktopEmulationMode"),FastClick:t("./FastClick"),GenericSync:t("./GenericSync"),MouseSync:t("./MouseSync"),PinchSync:t("./PinchSync"),RotateSync:t("./RotateSync"),ScaleSync:t("./ScaleSync"),ScrollSync:t("./ScrollSync"),TouchSync:t("./TouchSync"),TouchTracker:t("./TouchTracker"),TwoFingerSync:t("./TwoFingerSync")}},{"./Accumulator":24,"./DesktopEmulationMode":25,"./FastClick":26,"./GenericSync":27,"./MouseSync":28,"./PinchSync":29,"./RotateSync":30,"./ScaleSync":31,"./ScrollSync":32,"./TouchSync":33,"./TouchTracker":34,"./TwoFingerSync":35}],37:[function(t,i){function e(t){return this.values=t||[[1,0,0],[0,1,0],[0,0,1]],this}var n=t("./Vector"),o=new e,s=new n;
e.prototype.get=function(){return this.values},e.prototype.set=function(t){this.values=t},e.prototype.vectorMultiply=function(t){var i=this.get(),e=t.x,n=t.y,o=t.z,r=i[0],a=i[1],h=i[2],c=r[0],p=r[1],u=r[2],l=a[0],f=a[1],d=a[2],_=h[0],y=h[1],g=h[2];return s.setXYZ(c*e+p*n+u*o,l*e+f*n+d*o,_*e+y*n+g*o)},e.prototype.multiply=function(t){for(var i=this.get(),e=[[]],n=0;3>n;n++){e[n]=[];for(var s=0;3>s;s++){for(var r=0,a=0;3>a;a++)r+=i[n][a]*t[a][s];e[n][s]=r}}return o.set(e)},e.prototype.transpose=function(){for(var t=[],i=this.get(),e=0;3>e;e++)for(var n=0;3>n;n++)t[e][n]=i[n][e];return o.set(t)},e.prototype.clone=function(){for(var t=this.get(),i=[],n=0;3>n;n++)i[n]=t[n].slice();return new e(i)},i.exports=e},{"./Vector":41}],38:[function(t,i){function e(t,i,e,n){return 1===arguments.length?this.set(t):(this.w=void 0!==t?t:1,this.x=void 0!==i?i:0,this.y=void 0!==e?e:0,this.z=void 0!==n?n:0),this}var n=t("./Matrix"),o=new e(1,0,0,0);e.prototype.add=function(t){return o.setWXYZ(this.w+t.w,this.x+t.x,this.y+t.y,this.z+t.z)},e.prototype.sub=function(t){return o.setWXYZ(this.w-t.w,this.x-t.x,this.y-t.y,this.z-t.z)},e.prototype.scalarDivide=function(t){return this.scalarMultiply(1/t)},e.prototype.scalarMultiply=function(t){return o.setWXYZ(this.w*t,this.x*t,this.y*t,this.z*t)},e.prototype.multiply=function(t){var i=this.x,e=this.y,n=this.z,s=this.w,r=t.x,a=t.y,h=t.z,c=t.w||0;return o.setWXYZ(s*c-i*r-e*a-n*h,i*c+r*s+a*n-e*h,e*c+a*s+i*h-r*n,n*c+h*s+r*e-i*a)};var s=new e(1,0,0,0);e.prototype.rotateVector=function(t){return s.set(this.conj()),o.set(this.multiply(t).multiply(s))},e.prototype.inverse=function(){return o.set(this.conj().scalarDivide(this.normSquared()))},e.prototype.negate=function(){return this.scalarMultiply(-1)},e.prototype.conj=function(){return o.setWXYZ(this.w,-this.x,-this.y,-this.z)},e.prototype.normalize=function(t){return t=void 0===t?1:t,this.scalarDivide(t*this.norm())},e.prototype.makeFromAngleAndAxis=function(t,i){var e=i.normalize(),n=.5*t,o=-Math.sin(n);return this.x=o*e.x,this.y=o*e.y,this.z=o*e.z,this.w=Math.cos(n),this},e.prototype.setWXYZ=function(t,i,e,n){return o.clear(),this.w=t,this.x=i,this.y=e,this.z=n,this},e.prototype.set=function(t){return t instanceof Array?(this.w=0,this.x=t[0],this.y=t[1],this.z=t[2]):(this.w=t.w,this.x=t.x,this.y=t.y,this.z=t.z),this!==o&&o.clear(),this},e.prototype.put=function(t){t.set(o)},e.prototype.clone=function(){return new e(this)},e.prototype.clear=function(){return this.w=1,this.x=0,this.y=0,this.z=0,this},e.prototype.isEqual=function(t){return t.w===this.w&&t.x===this.x&&t.y===this.y&&t.z===this.z},e.prototype.dot=function(t){return this.w*t.w+this.x*t.x+this.y*t.y+this.z*t.z},e.prototype.normSquared=function(){return this.dot(this)},e.prototype.norm=function(){return Math.sqrt(this.normSquared())},e.prototype.isZero=function(){return!(this.x||this.y||this.z)},e.prototype.getTransform=function(){var t=this.normalize(1),i=t.x,e=t.y,n=t.z,o=t.w;return[1-2*e*e-2*n*n,2*i*e-2*n*o,2*i*n+2*e*o,0,2*i*e+2*n*o,1-2*i*i-2*n*n,2*e*n-2*i*o,0,2*i*n-2*e*o,2*e*n+2*i*o,1-2*i*i-2*e*e,0,0,0,0,1]};var r=new n;e.prototype.getMatrix=function(){var t=this.normalize(1),i=t.x,e=t.y,n=t.z,o=t.w;return r.set([[1-2*e*e-2*n*n,2*i*e+2*n*o,2*i*n-2*e*o],[2*i*e-2*n*o,1-2*i*i-2*n*n,2*e*n+2*i*o],[2*i*n+2*e*o,2*e*n-2*i*o,1-2*i*i-2*e*e]])};var a=1e-5;e.prototype.slerp=function(t,i){var e,n,s,r,h;return n=this.dot(t),1-n>a?(e=Math.acos(n),s=Math.sin(e),r=Math.sin((1-i)*e)/s,h=Math.sin(i*e)/s):(r=1-i,h=i),o.set(this.scalarMultiply(r/h).add(t).multiply(h))},i.exports=e},{"./Matrix":37}],39:[function(t,i){function e(t,i){return t+o()*(i-t)}function n(t,i){return t+o()*(i-t+1)>>0}var o=Math.random,s={};s.integer=function(t,i,e){if(t=void 0!==t?t:0,i=void 0!==i?i:1,void 0!==e){for(var o=[],s=0;e>s;s++)o.push(n(t,i));return o}return n(t,i)},s.range=function(t,i,n){if(t=void 0!==t?t:0,i=void 0!==i?i:1,void 0!==n){for(var o=[],s=0;n>s;s++)o.push(e(t,i));return o}return e(t,i)},s.sign=function(t){return t=void 0!==t?t:.5,o()<t?1:-1},s.bool=function(t){return t=void 0!==t?t:.5,o()<t},i.exports=s},{}],40:[function(t,i){var e={};e.clamp=function(t,i){return Math.max(Math.min(t,i[1]),i[0])},e.length=function(t){for(var i=0,e=0;e<t.length;e++)i+=t[e]*t[e];return Math.sqrt(i)},i.exports=e},{}],41:[function(t,i){function e(t,i,e){return 1===arguments.length&&void 0!==t?this.set(t):(this.x=t||0,this.y=i||0,this.z=e||0),this}function n(t,i,e){return this.x=t,this.y=i,this.z=e,this}function o(t){return n.call(this,t[0],t[1],t[2]||0)}function s(t){return n.call(this,t.x,t.y,t.z)}function r(t){return n.call(this,t,0,0)}var a=new e(0,0,0);e.prototype.add=function(t){return n.call(a,this.x+t.x,this.y+t.y,this.z+t.z)},e.prototype.sub=function(t){return n.call(a,this.x-t.x,this.y-t.y,this.z-t.z)},e.prototype.mult=function(t){return n.call(a,t*this.x,t*this.y,t*this.z)},e.prototype.div=function(t){return this.mult(1/t)},e.prototype.cross=function(t){var i=this.x,e=this.y,o=this.z,s=t.x,r=t.y,h=t.z;return n.call(a,o*r-e*h,i*h-o*s,e*s-i*r)},e.prototype.equals=function(t){return t.x===this.x&&t.y===this.y&&t.z===this.z},e.prototype.rotateX=function(t){var i=this.x,e=this.y,o=this.z,s=Math.cos(t),r=Math.sin(t);return n.call(a,i,e*s-o*r,e*r+o*s)},e.prototype.rotateY=function(t){var i=this.x,e=this.y,o=this.z,s=Math.cos(t),r=Math.sin(t);return n.call(a,o*r+i*s,e,o*s-i*r)},e.prototype.rotateZ=function(t){var i=this.x,e=this.y,o=this.z,s=Math.cos(t),r=Math.sin(t);return n.call(a,i*s-e*r,i*r+e*s,o)},e.prototype.dot=function(t){return this.x*t.x+this.y*t.y+this.z*t.z},e.prototype.normSquared=function(){return this.dot(this)},e.prototype.norm=function(){return Math.sqrt(this.normSquared())},e.prototype.normalize=function(t){0===arguments.length&&(t=1);var i=this.norm();return i>1e-7?s.call(a,this.mult(t/i)):n.call(a,t,0,0)},e.prototype.clone=function(){return new e(this)},e.prototype.isZero=function(){return!(this.x||this.y||this.z)},e.prototype.set=function(t){return t instanceof Array?o.call(this,t):"number"==typeof t?r.call(this,t):s.call(this,t)},e.prototype.setXYZ=function(){return n.apply(this,arguments)},e.prototype.set1D=function(t){return r.call(this,t)},e.prototype.put=function(t){this===a?s.call(t,a):s.call(t,this)},e.prototype.clear=function(){return n.call(this,0,0,0)},e.prototype.cap=function h(h){if(1/0===h)return s.call(a,this);var t=this.norm();return t>h?s.call(a,this.mult(h/t)):s.call(a,this)},e.prototype.project=function(t){return t.mult(this.dot(t))},e.prototype.reflectAcross=function(t){return t.normalize().put(t),s(a,this.sub(this.project(t).mult(2)))},e.prototype.get=function(){return[this.x,this.y,this.z]},e.prototype.get1D=function(){return this.x},i.exports=e},{}],42:[function(t,i){i.exports={Matrix:t("./Matrix"),Quaternion:t("./Quaternion"),Random:t("./Random"),Utilities:t("./Utilities"),Vector:t("./Vector")}},{"./Matrix":37,"./Quaternion":38,"./Random":39,"./Utilities":40,"./Vector":41}],43:[function(t,i){function e(t){this.options=Object.create(e.DEFAULT_OPTIONS),t&&this.setOptions(t),this._positionState=new c([0,0]),this._differential=[0,0],this._active=!0,this.sync=new l(["mouse","touch"],{scale:this.options.scale}),this.eventOutput=new p,p.setInputHandler(this,this.sync),p.setOutputHandler(this,this.eventOutput),a.call(this)}function n(t){var i=this.options,e=i.projection,n=i.snapX,o=i.snapY,s=e&_.x?t[0]:0,r=e&_.y?t[1]:0;return n>0&&(s-=s%n),o>0&&(r-=r%o),[s,r]}function o(){this._active&&(this._positionState.isActive()&&this._positionState.halt(),this.eventOutput.emit("start",{position:this.getPosition()}))}function s(t){if(this._active){var i=this.options;this._differential=t.position;var e=n.call(this,this._differential);this._differential[0]-=e[0],this._differential[1]-=e[1];var o=this.getPosition();if(o[0]+=e[0],o[1]+=e[1],i.xRange){var s=[i.xRange[0]+.5*i.snapX,i.xRange[1]-.5*i.snapX];o[0]=y(o[0],s)}if(i.yRange){var r=[i.yRange[0]+.5*i.snapY,i.yRange[1]-.5*i.snapY];o[1]=y(o[1],r)}this.eventOutput.emit("update",{position:o})}}function r(){this._active&&this.eventOutput.emit("end",{position:this.getPosition()})}function a(){this.sync.on("start",o.bind(this)),this.sync.on("update",s.bind(this)),this.sync.on("end",r.bind(this))}var h=t("../core/Transform"),c=t("../transitions/Transitionable"),p=t("../core/EventHandler"),u=t("../math/Utilities"),l=t("../inputs/GenericSync"),f=t("../inputs/MouseSync"),d=t("../inputs/TouchSync");l.register({mouse:f,touch:d});var _={x:1,y:2};e.DIRECTION_X=_.x,e.DIRECTION_Y=_.y;var y=u.clamp;e.DEFAULT_OPTIONS={projection:_.x|_.y,scale:1,xRange:null,yRange:null,snapX:0,snapY:0,transition:{duration:0}},e.prototype.setOptions=function(t){var i=this.options;if(void 0!==t.projection){var e=t.projection;this.options.projection=0,["x","y"].forEach(function(t){-1!==e.indexOf(t)&&(i.projection|=_[t])})}void 0!==t.scale&&(i.scale=t.scale,this.sync.setOptions({scale:t.scale})),void 0!==t.xRange&&(i.xRange=t.xRange),void 0!==t.yRange&&(i.yRange=t.yRange),void 0!==t.snapX&&(i.snapX=t.snapX),void 0!==t.snapY&&(i.snapY=t.snapY)},e.prototype.getPosition=function(){return this._positionState.get()},e.prototype.setRelativePosition=function(t,i,e){var n=this.getPosition(),o=[n[0]+t[0],n[1]+t[1]];this.setPosition(o,i,e)},e.prototype.setPosition=function(t,i,e){this._positionState.isActive()&&this._positionState.halt(),this._positionState.set(t,i,e)},e.prototype.activate=function(){this._active=!0},e.prototype.deactivate=function(){this._active=!1},e.prototype.toggle=function(){this._active=!this._active},e.prototype.modify=function(t){var i=this.getPosition();return{transform:h.translate(i[0],i[1]),target:t}},i.exports=e},{"../core/EventHandler":7,"../core/Transform":15,"../inputs/GenericSync":27,"../inputs/MouseSync":28,"../inputs/TouchSync":33,"../math/Utilities":40,"../transitions/Transitionable":88}],44:[function(t,i){function e(t,i){this.options=Object.create(e.DEFAULT_OPTIONS),this._optionsManager=new o(this.options),t&&this.setOptions(t),i||(i=0),this.transitionHelper=new n(i)}var n=t("../transitions/Transitionable"),o=t("../core/OptionsManager");e.DEFAULT_OPTIONS={cull:!1,transition:!0,pulseInTransition:!0,pulseOutTransition:!0},e.prototype.setOptions=function(t){return this._optionsManager.setOptions(t)},e.prototype.show=function(t,i){t=t||this.options.transition,this.set(1,t,i)},e.prototype.hide=function(t,i){t=t||this.options.transition,this.set(0,t,i)},e.prototype.set=function(t,i,e){this.halt(),this.transitionHelper.set(t,i,e)},e.prototype.halt=function(){this.transitionHelper.halt()},e.prototype.isVisible=function(){return this.transitionHelper.get()>0},e.prototype.modify=function(t){var i=this.transitionHelper.get();return this.options.cull&&!i?void 0:{opacity:i,target:t}},i.exports=e},{"../core/OptionsManager":10,"../transitions/Transitionable":88}],45:[function(t,i){function e(){this._chain=[],arguments.length&&this.addModifier.apply(this,arguments)}e.prototype.addModifier=function(){Array.prototype.push.apply(this._chain,arguments)},e.prototype.removeModifier=function(t){var i=this._chain.indexOf(t);0>i||this._chain.splice(i,1)},e.prototype.modify=function(t){for(var i=this._chain,e=t,n=0;n<i.length;n++)e=i[n].modify(e);return e},i.exports=e},{}],46:[function(t,i){function e(t){this._transformState=new r(o.identity),this._opacityState=new s(1),this._originState=new s([0,0]),this._alignState=new s([0,0]),this._sizeState=new s([0,0]),this._proportionsState=new s([0,0]),this._modifier=new n({transform:this._transformState,opacity:this._opacityState,origin:null,align:null,size:null,proportions:null}),this._hasOrigin=!1,this._hasAlign=!1,this._hasSize=!1,this._hasProportions=!1,t&&(t.transform&&this.setTransform(t.transform),void 0!==t.opacity&&this.setOpacity(t.opacity),t.origin&&this.setOrigin(t.origin),t.align&&this.setAlign(t.align),t.size&&this.setSize(t.size),t.proportions&&this.setProportions(t.proportions))}var n=t("../core/Modifier"),o=t("../core/Transform"),s=t("../transitions/Transitionable"),r=t("../transitions/TransitionableTransform");e.prototype.setTransform=function(t,i,e){return this._transformState.set(t,i,e),this},e.prototype.setOpacity=function(t,i,e){return this._opacityState.set(t,i,e),this},e.prototype.setOrigin=function(t,i,e){return null===t?(this._hasOrigin&&(this._modifier.originFrom(null),this._hasOrigin=!1),this):(this._hasOrigin||(this._hasOrigin=!0,this._modifier.originFrom(this._originState)),this._originState.set(t,i,e),this)},e.prototype.setAlign=function(t,i,e){return null===t?(this._hasAlign&&(this._modifier.alignFrom(null),this._hasAlign=!1),this):(this._hasAlign||(this._hasAlign=!0,this._modifier.alignFrom(this._alignState)),this._alignState.set(t,i,e),this)},e.prototype.setSize=function(t,i,e){return null===t?(this._hasSize&&(this._modifier.sizeFrom(null),this._hasSize=!1),this):(this._hasSize||(this._hasSize=!0,this._modifier.sizeFrom(this._sizeState)),this._sizeState.set(t,i,e),this)},e.prototype.setProportions=function(t,i,e){return null===t?(this._hasProportions&&(this._modifier.proportionsFrom(null),this._hasProportions=!1),this):(this._hasProportions||(this._hasProportions=!0,this._modifier.proportionsFrom(this._proportionsState)),this._proportionsState.set(t,i,e),this)},e.prototype.halt=function(){this._transformState.halt(),this._opacityState.halt(),this._originState.halt(),this._alignState.halt(),this._sizeState.halt(),this._proportionsState.halt()},e.prototype.getTransform=function(){return this._transformState.get()},e.prototype.getFinalTransform=function(){return this._transformState.getFinal()},e.prototype.getOpacity=function(){return this._opacityState.get()},e.prototype.getOrigin=function(){return this._hasOrigin?this._originState.get():null},e.prototype.getAlign=function(){return this._hasAlign?this._alignState.get():null},e.prototype.getSize=function(){return this._hasSize?this._sizeState.get():null},e.prototype.getProportions=function(){return this._hasProportions?this._proportionsState.get():null},e.prototype.modify=function(t){return this._modifier.modify(t)},i.exports=e},{"../core/Modifier":9,"../core/Transform":15,"../transitions/Transitionable":88,"../transitions/TransitionableTransform":89}],47:[function(t,i){i.exports={Draggable:t("./Draggable"),Fader:t("./Fader"),ModifierChain:t("./ModifierChain"),StateModifier:t("./StateModifier")}},{"./Draggable":43,"./Fader":44,"./ModifierChain":45,"./StateModifier":46}],48:[function(t,i){function e(t){this.options=Object.create(e.DEFAULT_OPTIONS),t&&this.setOptions(t),this._particles=[],this._bodies=[],this._agentData={},this._forces=[],this._constraints=[],this._buffer=0,this._prevTime=S(),this._isSleeping=!1,this._eventHandler=null,this._currAgentId=0,this._hasBodies=!1,this._eventHandler=null}function n(t){return t.applyForce?this._forces:t.applyConstraint?this._constraints:void 0}function o(t,i,e){return void 0===i&&(i=this.getParticlesAndBodies()),i instanceof Array||(i=[i]),t.on("change",this.wake.bind(this)),this._agentData[this._currAgentId]={agent:t,id:this._currAgentId,targets:i,source:e},n.call(this,t).push(this._currAgentId),this._currAgentId++}function s(t){return this._agentData[t]}function r(t){var i=s.call(this,this._forces[t]);i.agent.applyForce(i.targets,i.source)}function a(){for(var t=this._forces.length-1;t>-1;t--)r.call(this,t)}function h(t,i){var e=this._agentData[this._constraints[t]];return e.agent.applyConstraint(e.targets,e.source,i)}function c(t){for(var i=0;i<this.options.constraintSteps;){for(var e=this._constraints.length-1;e>-1;e--)h.call(this,e,t);i++}}function p(t,i){t.integrateVelocity(i),this.options.velocityCap&&t.velocity.cap(this.options.velocityCap).put(t.velocity)}function u(t,i){t.integrateAngularMomentum(i),t.updateAngularVelocity(),this.options.angularVelocityCap&&t.angularVelocity.cap(this.options.angularVelocityCap).put(t.angularVelocity)}function l(t,i){t.integrateOrientation(i)}function f(t,i){t.integratePosition(i),t.emit(T.update,t)}function d(t){a.call(this,t),this.forEach(p,t),this.forEachBody(u,t),c.call(this,t),this.forEachBody(l,t),this.forEach(f,t)}function _(){var t=0,i=0;return this.forEach(function(e){i=e.getEnergy(),t+=i}),t}function y(){var t=0;for(var i in this._agentData)t+=this.getAgentEnergy(i);return t}var g=t("../core/EventHandler"),v=17,m=1e3/120,O=17,S=Date.now,T={start:"start",update:"update",end:"end"};e.DEFAULT_OPTIONS={constraintSteps:1,sleepTolerance:1e-7,velocityCap:void 0,angularVelocityCap:void 0},e.prototype.setOptions=function(t){for(var i in t)this.options[i]&&(this.options[i]=t[i])},e.prototype.addBody=function(t){return t._engine=this,t.isBody?(this._bodies.push(t),this._hasBodies=!0):this._particles.push(t),t.on("start",this.wake.bind(this)),t},e.prototype.removeBody=function(t){var i=t.isBody?this._bodies:this._particles,e=i.indexOf(t);if(e>-1){for(var n in this._agentData)this.detachFrom(n.id,t);i.splice(e,1)}0===this.getBodies().length&&(this._hasBodies=!1)},e.prototype.attach=function(t,i,e){if(this.wake(),t instanceof Array){for(var n=[],s=0;s<t.length;s++)n[s]=o.call(this,t[s],i,e);return n}return o.call(this,t,i,e)},e.prototype.attachTo=function(t,i){s.call(this,t).targets.push(i)},e.prototype.detach=function(t){var i=this.getAgent(t),e=n.call(this,i),o=e.indexOf(t);e.splice(o,1),delete this._agentData[t]},e.prototype.detachFrom=function(t,i){var e=s.call(this,t);if(e.source===i)this.detach(t);else{var n=e.targets,o=n.indexOf(i);o>-1&&n.splice(o,1)}},e.prototype.detachAll=function(){this._agentData={},this._forces=[],this._constraints=[],this._currAgentId=0},e.prototype.getAgent=function(t){return s.call(this,t).agent},e.prototype.getParticles=function(){return this._particles},e.prototype.getBodies=function(){return this._bodies},e.prototype.getParticlesAndBodies=function(){return this.getParticles().concat(this.getBodies())},e.prototype.forEachParticle=function(t,i){for(var e=this.getParticles(),n=0,o=e.length;o>n;n++)t.call(this,e[n],i)},e.prototype.forEachBody=function(t,i){if(this._hasBodies)for(var e=this.getBodies(),n=0,o=e.length;o>n;n++)t.call(this,e[n],i)},e.prototype.forEach=function(t,i){this.forEachParticle(t,i),this.forEachBody(t,i)},e.prototype.getAgentEnergy=function(t){var i=s.call(this,t);return i.agent.getEnergy(i.targets,i.source)},e.prototype.getEnergy=function(){return _.call(this)+y.call(this)},e.prototype.step=function(){if(!this.isSleeping()){var t=S(),i=t-this._prevTime;this._prevTime=t,m>i||(i>O&&(i=O),d.call(this,v),this.emit(T.update,this),this.getEnergy()<this.options.sleepTolerance&&this.sleep())}},e.prototype.isSleeping=function(){return this._isSleeping},e.prototype.isActive=function(){return!this._isSleeping},e.prototype.sleep=function(){this._isSleeping||(this.forEach(function(t){t.sleep()}),this.emit(T.end,this),this._isSleeping=!0)},e.prototype.wake=function(){this._isSleeping&&(this._prevTime=S(),this.emit(T.start,this),this._isSleeping=!1)},e.prototype.emit=function(t,i){null!==this._eventHandler&&this._eventHandler.emit(t,i)},e.prototype.on=function(t,i){null===this._eventHandler&&(this._eventHandler=new g),this._eventHandler.on(t,i)},i.exports=e},{"../core/EventHandler":7}],49:[function(t,i){function e(t){n.call(this,t),t=t||{},this.orientation=new r,this.angularVelocity=new s,this.angularMomentum=new s,this.torque=new s,t.orientation&&this.orientation.set(t.orientation),t.angularVelocity&&this.angularVelocity.set(t.angularVelocity),t.angularMomentum&&this.angularMomentum.set(t.angularMomentum),t.torque&&this.torque.set(t.torque),this.angularVelocity.w=0,this.setMomentsOfInertia(),this.pWorld=new s}var n=t("./Particle"),o=t("../../core/Transform"),s=t("../../math/Vector"),r=t("../../math/Quaternion"),a=t("../../math/Matrix"),h=t("../integrators/SymplecticEuler");e.DEFAULT_OPTIONS=n.DEFAULT_OPTIONS,e.DEFAULT_OPTIONS.orientation=[0,0,0,1],e.DEFAULT_OPTIONS.angularVelocity=[0,0,0],e.prototype=Object.create(n.prototype),e.prototype.constructor=e,e.prototype.isBody=!0,e.prototype.setMass=function(){n.prototype.setMass.apply(this,arguments),this.setMomentsOfInertia()},e.prototype.setMomentsOfInertia=function(){this.inertia=new a,this.inverseInertia=new a},e.prototype.updateAngularVelocity=function(){this.angularVelocity.set(this.inverseInertia.vectorMultiply(this.angularMomentum))},e.prototype.toWorldCoordinates=function(t){return this.pWorld.set(this.orientation.rotateVector(t))},e.prototype.getEnergy=function(){return n.prototype.getEnergy.call(this)+.5*this.inertia.vectorMultiply(this.angularVelocity).dot(this.angularVelocity)},e.prototype.reset=function(t,i,e,o){n.prototype.reset.call(this,t,i),this.angularVelocity.clear(),this.setOrientation(e||[1,0,0,0]),this.setAngularMomentum(o||[0,0,0])},e.prototype.setOrientation=function(t){this.orientation.set(t)},e.prototype.setAngularVelocity=function(t){this.wake(),this.angularVelocity.set(t)},e.prototype.setAngularMomentum=function(t){this.wake(),this.angularMomentum.set(t)},e.prototype.applyForce=function(t,i){n.prototype.applyForce.call(this,t),void 0!==i&&this.applyTorque(i.cross(t))},e.prototype.applyTorque=function(t){this.wake(),this.torque.set(this.torque.add(t))},e.prototype.getTransform=function(){return o.thenMove(this.orientation.getTransform(),o.getTranslate(n.prototype.getTransform.call(this)))},e.prototype._integrate=function(t){n.prototype._integrate.call(this,t),this.integrateAngularMomentum(t),this.updateAngularVelocity(t),this.integrateOrientation(t)},e.prototype.integrateAngularMomentum=function(t){h.integrateAngularMomentum(this,t)},e.prototype.integrateOrientation=function(t){h.integrateOrientation(this,t)},i.exports=e},{"../../core/Transform":15,"../../math/Matrix":37,"../../math/Quaternion":38,"../../math/Vector":41,"../integrators/SymplecticEuler":72,"./Particle":51}],50:[function(t,i){function e(t){t=t||{},this.setRadius(t.radius||0),n.call(this,t)}var n=t("./Body"),o=t("../../math/Matrix");e.prototype=Object.create(n.prototype),e.prototype.constructor=e,e.prototype.setRadius=function(t){this.radius=t,this.size=[2*this.radius,2*this.radius],this.setMomentsOfInertia()},e.prototype.setMomentsOfInertia=function(){var t=this.mass,i=this.radius;this.inertia=new o([[.25*t*i*i,0,0],[0,.25*t*i*i,0],[0,0,.5*t*i*i]]),this.inverseInertia=new o([[4/(t*i*i),0,0],[0,4/(t*i*i),0],[0,0,2/(t*i*i)]])},i.exports=e},{"../../math/Matrix":37,"./Body":49}],51:[function(t,i){function e(t){t=t||{};var i=e.DEFAULT_OPTIONS;this.position=new o,this.velocity=new o,this.force=new o,this._engine=null,this._isSleeping=!0,this._eventOutput=null,this.mass=void 0!==t.mass?t.mass:i.mass,this.inverseMass=1/this.mass,this.setPosition(t.position||i.position),this.setVelocity(t.velocity||i.velocity),this.force.set(t.force||[0,0,0]),this.transform=s.identity.slice(),this._spec={size:[!0,!0],target:{transform:this.transform,origin:[.5,.5],target:null}}}function n(){this._eventOutput=new r,this._eventOutput.bindThis(this),r.setOutputHandler(this,this._eventOutput)}var o=t("../../math/Vector"),s=t("../../core/Transform"),r=t("../../core/EventHandler"),a=t("../integrators/SymplecticEuler");e.DEFAULT_OPTIONS={position:[0,0,0],velocity:[0,0,0],mass:1};var h={start:"start",update:"update",end:"end"},c=Date.now;e.prototype.isBody=!1,e.prototype.isActive=function(){return!this._isSleeping},e.prototype.sleep=function(){this._isSleeping||(this.emit(h.end,this),this._isSleeping=!0)},e.prototype.wake=function(){this._isSleeping&&(this.emit(h.start,this),this._isSleeping=!1,this._prevTime=c(),this._engine&&this._engine.wake())},e.prototype.setPosition=function(t){this.position.set(t)},e.prototype.setPosition1D=function(t){this.position.x=t},e.prototype.getPosition=function(){return this._engine.step(),this.position.get()},e.prototype.getPosition1D=function(){return this._engine.step(),this.position.x},e.prototype.setVelocity=function(t){this.velocity.set(t),(0!==t[0]||0!==t[1]||0!==t[2])&&this.wake()},e.prototype.setVelocity1D=function(t){this.velocity.x=t,0!==t&&this.wake()},e.prototype.getVelocity=function(){return this.velocity.get()},e.prototype.setForce=function(t){this.force.set(t),this.wake()},e.prototype.getVelocity1D=function(){return this.velocity.x},e.prototype.setMass=function(t){this.mass=t,this.inverseMass=1/t},e.prototype.getMass=function(){return this.mass},e.prototype.reset=function(t,i){this.setPosition(t||[0,0,0]),this.setVelocity(i||[0,0,0])},e.prototype.applyForce=function(t){t.isZero()||(this.force.add(t).put(this.force),this.wake())},e.prototype.applyImpulse=function(t){if(!t.isZero()){var i=this.velocity;i.add(t.mult(this.inverseMass)).put(i)}},e.prototype.integrateVelocity=function(t){a.integrateVelocity(this,t)},e.prototype.integratePosition=function(t){a.integratePosition(this,t)},e.prototype._integrate=function(t){this.integrateVelocity(t),this.integratePosition(t)},e.prototype.getEnergy=function(){return.5*this.mass*this.velocity.normSquared()},e.prototype.getTransform=function(){this._engine.step();var t=this.position,i=this.transform;return i[12]=t.x,i[13]=t.y,i[14]=t.z,i},e.prototype.modify=function(t){var i=this._spec.target;return i.transform=this.getTransform(),i.target=t,this._spec},e.prototype.emit=function(t,i){this._eventOutput&&this._eventOutput.emit(t,i)},e.prototype.on=function(){return n.call(this),this.on.apply(this,arguments)},e.prototype.removeListener=function(){return n.call(this),this.removeListener.apply(this,arguments)},e.prototype.pipe=function(){return n.call(this),this.pipe.apply(this,arguments)},e.prototype.unpipe=function(){return n.call(this),this.unpipe.apply(this,arguments)},i.exports=e},{"../../core/EventHandler":7,"../../core/Transform":15,"../../math/Vector":41,"../integrators/SymplecticEuler":72}],52:[function(t,i){function e(t){t=t||{},this.size=t.size||[0,0],n.call(this,t)}var n=t("./Body"),o=t("../../math/Matrix");e.prototype=Object.create(n.prototype),e.prototype.constructor=e,e.prototype.setSize=function(t){this.size=t,this.setMomentsOfInertia()},e.prototype.setMomentsOfInertia=function(){var t=this.mass,i=this.size[0],e=this.size[1];this.inertia=new o([[t*e*e/12,0,0],[0,t*i*i/12,0],[0,0,t*(i*i+e*e)/12]]),this.inverseInertia=new o([[12/(t*e*e),0,0],[0,12/(t*i*i),0],[0,0,12/(t*(i*i+e*e))]])},i.exports=e},{"../../math/Matrix":37,"./Body":49}],53:[function(t,i){i.exports={Body:t("./Body"),Circle:t("./Circle"),Particle:t("./Particle"),Rectangle:t("./Rectangle")}},{"./Body":49,"./Circle":50,"./Particle":51,"./Rectangle":52}],54:[function(t,i){function e(t){this.options=Object.create(e.DEFAULT_OPTIONS),t&&this.setOptions(t),this.normal=new o,this.pDiff=new o,this.vDiff=new o,this.impulse1=new o,this.impulse2=new o,n.call(this)}var n=t("./Constraint"),o=t("../../math/Vector");e.prototype=Object.create(n.prototype),e.prototype.constructor=e,e.DEFAULT_OPTIONS={restitution:.5,drift:.5,slop:0},e.prototype.setOptions=function(t){for(var i in t)this.options[i]=t[i]},e.prototype.applyConstraint=function(t,i,e){if(void 0!==i)for(var n=i.velocity,o=i.position,s=i.inverseMass,r=i.radius,a=this.options,h=a.drift,c=-a.slop,p=a.restitution,u=this.normal,l=this.pDiff,f=this.vDiff,d=this.impulse1,_=this.impulse2,y=0;y<t.length;y++){var g=t[y];if(g!==i){var v=g.velocity,m=g.position,O=g.inverseMass,S=g.radius;l.set(m.sub(o)),f.set(v.sub(n));var T=l.norm(),w=T-(r+S),b=1/(s+O),E=0;if(0>w){if(u.set(l.normalize()),this._eventOutput){var I={target:g,source:i,overlap:w,normal:u};this._eventOutput.emit("preCollision",I),this._eventOutput.emit("collision",I)}var x=c>=w?((1+p)*u.dot(f)+h/e*(w-c))/(E+e/b):(1+p)*u.dot(f)/(E+e/b);u.mult(e*x).put(d),d.mult(-1).put(_),i.applyImpulse(d),g.applyImpulse(_),this._eventOutput&&this._eventOutput.emit("postCollision",I)}}}},i.exports=e},{"../../math/Vector":41,"./Constraint":55}],55:[function(t,i){function e(){this.options=this.options||{},this._eventOutput=new n,n.setOutputHandler(this,this._eventOutput)}var n=t("../../core/EventHandler");e.prototype.setOptions=function(t){this._eventOutput.emit("change",t)},e.prototype.applyConstraint=function(){},e.prototype.getEnergy=function(){return 0},i.exports=e},{"../../core/EventHandler":7}],56:[function(t,i){function e(t){this.options=Object.create(e.DEFAULT_OPTIONS),t&&this.setOptions(t),this.J=new o,this.impulse=new o,n.call(this)}var n=t("./Constraint"),o=t("../../math/Vector");e.prototype=Object.create(n.prototype),e.prototype.constructor=e;var s=1e-7,r=Math.PI;e.DEFAULT_OPTIONS={equation:function(){return 0},plane:function(t,i,e){return e},period:0,dampingRatio:0},e.prototype.setOptions=function(t){for(var i in t)this.options[i]=t[i]},e.prototype.applyConstraint=function(t,i,e){for(var n=this.options,o=this.impulse,a=this.J,h=n.equation,c=n.plane,p=n.dampingRatio,u=n.period,l=0;l<t.length;l++){var f,d,_=t[l],y=_.velocity,g=_.position,v=_.mass;if(0===u)f=0,d=1;else{var m=4*v*r*p/u,O=4*v*r*r/(u*u);f=1/(m+e*O),d=e*O/(m+e*O)}var S=g.x,T=g.y,w=g.z,b=h(S,T,w),E=(h(S+s,g,g)-b)/s,I=(h(S,T+s,g)-b)/s,x=(h(S,T,g+s)-b)/s,M=c(S,T,w),z=(c(S+s,T,w)-M)/s,C=(c(S,T+s,w)-M)/s,P=(c(S,T,w+s)-M)/s;a.setXYZ(E+z,I+C,x+P);var F=d/e*(b+M),D=-(a.dot(y)+F)/(f+e*a.normSquared()/v);o.set(a.mult(e*D)),_.applyImpulse(o)}},i.exports=e},{"../../math/Vector":41,"./Constraint":55}],57:[function(t,i){function e(t){this.options=Object.create(this.constructor.DEFAULT_OPTIONS),t&&this.setOptions(t),this.impulse=new o,this.normal=new o,this.diffP=new o,this.diffV=new o,n.call(this)}var n=t("./Constraint"),o=t("../../math/Vector");e.prototype=Object.create(n.prototype),e.prototype.constructor=e,e.DEFAULT_OPTIONS={anchor:null,length:0,minLength:0,period:0,dampingRatio:0};var s=Math.PI;e.prototype.setOptions=function(t){t.anchor&&(t.anchor.position instanceof o&&(this.options.anchor=t.anchor.position),t.anchor instanceof o&&(this.options.anchor=t.anchor),t.anchor instanceof Array&&(this.options.anchor=new o(t.anchor))),void 0!==t.length&&(this.options.length=t.length),void 0!==t.dampingRatio&&(this.options.dampingRatio=t.dampingRatio),void 0!==t.period&&(this.options.period=t.period),void 0!==t.minLength&&(this.options.minLength=t.minLength)},e.prototype.setAnchor=function(t){this.options.anchor||(this.options.anchor=new o),this.options.anchor.set(t)},e.prototype.applyConstraint=function(t,i,e){var n,o,r=this.normal,a=this.diffP,h=this.diffV,c=this.impulse,p=this.options,u=p.dampingRatio,l=p.period,f=p.minLength;if(i){var d=i.velocity;n=i.position,o=i.inverseMass}else n=this.options.anchor,o=0;for(var _=this.options.length,y=0;y<t.length;y++){var g=t[y],v=g.velocity,m=g.position,O=g.inverseMass;a.set(m.sub(n)),r.set(a.normalize());var S=a.norm()-_;if(Math.abs(S)<f)return;h.set(i?v.sub(d):v);var T,w,b=1/(O+o);if(0===l)T=0,w=1;else{var E=4*b*s*u/l,I=4*b*s*s/(l*l);T=1/(E+e*I),w=e*I/(E+e*I)}var x=w/e*S,M=-(r.dot(h)+x)/(T+e/b);c.set(r.mult(e*M)),g.applyImpulse(c),i&&i.applyImpulse(c.mult(-1))}},i.exports=e},{"../../math/Vector":41,"./Constraint":55}],58:[function(t,i){function e(t){n.call(this),this.options=Object.create(this.constructor.DEFAULT_OPTIONS),t&&this.setOptions(t),this.pDiff=new o,this.vDiff=new o,this.impulse1=new o,this.impulse2=new o}var n=t("./Constraint"),o=t("../../math/Vector");e.prototype=Object.create(n.prototype),e.prototype.constructor=e,e.DEFAULT_OPTIONS={period:300,dampingRatio:.1,length:0,anchor:void 0};var s=Math.PI;e.prototype.setOptions=function(t){void 0!==t.anchor&&(t.anchor instanceof o&&(this.options.anchor=t.anchor),t.anchor.position instanceof o&&(this.options.anchor=t.anchor.position),t.anchor instanceof Array&&(this.options.anchor=new o(t.anchor))),void 0!==t.length&&(this.options.length=t.length),void 0!==t.dampingRatio&&(this.options.dampingRatio=t.dampingRatio),void 0!==t.period&&(this.options.period=t.period),n.prototype.setOptions.call(this,t)},e.prototype.getEnergy=function(t,i){for(var e=this.options,n=e.length,o=e.anchor||i.position,r=Math.pow(2*s/e.period,2),a=0,h=0;h<t.length;h++){var c=t[h],p=o.sub(c.position).norm()-n;a+=.5*r*p*p}return a},e.prototype.applyConstraint=function(t,i,e){for(var n=this.options,o=this.pDiff,r=this.vDiff,a=this.impulse1,h=this.impulse2,c=n.length,p=n.anchor||i.position,u=n.period,l=n.dampingRatio,f=0;f<t.length;f++){var d=t[f],_=d.position,y=d.velocity,g=d.mass,v=d.inverseMass;
o.set(_.sub(p));var m,O=o.norm()-c;if(i){var S=i.inverseMass,T=i.velocity;r.set(y.sub(T)),m=1/(v+S)}else r.set(y),m=g;var w,b;if(0===this.options.period)w=0,b=1;else{var E=4*m*s*s/(u*u),I=4*m*s*l/u;b=e*E/(I+e*E),w=1/(I+e*E)}var x=b/e*O;o.normalize(-x).sub(r).mult(e/(w+e/m)).put(a),d.applyImpulse(a),i&&(a.mult(-1).put(h),i.applyImpulse(h))}},i.exports=e},{"../../math/Vector":41,"./Constraint":55}],59:[function(t,i){function e(t){this.options=Object.create(e.DEFAULT_OPTIONS),t&&this.setOptions(t),this.J=new o,this.impulse=new o,n.call(this)}var n=t("./Constraint"),o=t("../../math/Vector");e.prototype=Object.create(n.prototype),e.prototype.constructor=e,e.DEFAULT_OPTIONS={equation:void 0,period:0,dampingRatio:0};var s=1e-7,r=Math.PI;e.prototype.setOptions=function(t){for(var i in t)this.options[i]=t[i]},e.prototype.applyConstraint=function(t,i,e){for(var n=this.impulse,o=this.J,a=this.options,h=a.equation,c=a.dampingRatio,p=a.period,u=0;u<t.length;u++){var l,f,d=t[u],_=d.velocity,y=d.position,g=d.mass;if(0===p)l=0,f=1;else{var v=4*g*r*c/p,m=4*g*r*r/(p*p);l=1/(v+e*m),f=e*m/(v+e*m)}var O=y.x,S=y.y,T=y.z,w=h(O,S,T),b=(h(O+s,y,y)-w)/s,E=(h(O,S+s,y)-w)/s,I=(h(O,S,y+s)-w)/s;o.setXYZ(b,E,I);var x=f/e*w,M=-(o.dot(_)+x)/(l+e*o.normSquared()/g);n.set(o.mult(e*M)),d.applyImpulse(n)}},i.exports=e},{"../../math/Vector":41,"./Constraint":55}],60:[function(t,i){function e(t){this.options=Object.create(e.DEFAULT_OPTIONS),t&&this.setOptions(t),this.diff=new h,this.impulse=new h,a.call(this)}function n(t,i){return i.dot(t)}function o(t){var i=this.options.normal,e=this.options.distance;return t.dot(i)+e}function s(t,i,n){var o=t.position,s=t.velocity,r=t.mass,a=this.options.normal,h=this.options.onContact,c=this.options.restitution,p=this.impulse,u=this.options.drift,l=-this.options.slop,f=0;if(this._eventOutput){var d={particle:t,wall:this,overlap:i,normal:a};this._eventOutput.emit("preCollision",d),this._eventOutput.emit("collision",d)}switch(h){case e.ON_CONTACT.REFLECT:var _=l>i?-((1+c)*a.dot(s)+u/n*(i-l))/(r*n+f):-((1+c)*a.dot(s))/(r*n+f);p.set(a.mult(n*_)),t.applyImpulse(p),t.setPosition(o.add(a.mult(-i)))}this._eventOutput&&this._eventOutput.emit("postCollision",d)}function r(t,i){var n=this.options.onContact,o=t.position,s=this.options.normal;n===e.ON_CONTACT.REFLECT&&t.setPosition(o.add(s.mult(-i)))}var a=t("./Constraint"),h=t("../../math/Vector");e.prototype=Object.create(a.prototype),e.prototype.constructor=e,e.ON_CONTACT={REFLECT:0,SILENT:1},e.DEFAULT_OPTIONS={restitution:.5,drift:.5,slop:0,normal:[1,0,0],distance:0,onContact:e.ON_CONTACT.REFLECT},e.prototype.setOptions=function(t){void 0!==t.normal&&(t.normal instanceof h&&(this.options.normal=t.normal.clone()),t.normal instanceof Array&&(this.options.normal=new h(t.normal))),void 0!==t.restitution&&(this.options.restitution=t.restitution),void 0!==t.drift&&(this.options.drift=t.drift),void 0!==t.slop&&(this.options.slop=t.slop),void 0!==t.distance&&(this.options.distance=t.distance),void 0!==t.onContact&&(this.options.onContact=t.onContact)},e.prototype.applyConstraint=function(t,i,e){for(var a=this.options.normal,h=0;h<t.length;h++){var c=t[h],p=c.position,u=c.velocity,l=c.radius||0,f=o.call(this,p.add(a.mult(-l))),d=n.call(this,a,u);0>=f&&(0>d?s.call(this,c,f,e):r.call(this,c,f,e))}},i.exports=e},{"../../math/Vector":41,"./Constraint":55}],61:[function(t,i){function e(t){this.options=Object.create(e.DEFAULT_OPTIONS),t&&this.setOptions(t),o.call(this,t.sides||this.options.sides),r.call(this)}function n(t,i,n){var o,s=e.SIDES;switch(parseInt(t)){case s.LEFT:o=i[0]*n[0];break;case s.TOP:o=i[1]*n[1];break;case s.FRONT:o=i[2]*n[2];break;case s.RIGHT:o=i[0]*(1-n[0]);break;case s.BOTTOM:o=i[1]*(1-n[1]);break;case s.BACK:o=i[2]*(1-n[2])}return o}function o(t){this.components={};for(var i=this.components,e=0;e<t.length;e++){var o=t[e];i[e]=new a({normal:c[o].clone(),distance:n(o,this.options.size,this.options.origin)})}}function s(t){this.forEach(function(i){i.setOptions(t)});for(var i in t)this.options[i]=t[i]}var r=t("./Constraint"),a=t("./Wall"),h=t("../../math/Vector");e.prototype=Object.create(r.prototype),e.prototype.constructor=e,e.ON_CONTACT=a.ON_CONTACT,e.SIDES={LEFT:0,RIGHT:1,TOP:2,BOTTOM:3,FRONT:4,BACK:5,TWO_DIMENSIONAL:[0,1,2,3],THREE_DIMENSIONAL:[0,1,2,3,4,5]},e.DEFAULT_OPTIONS={sides:e.SIDES.TWO_DIMENSIONAL,size:[window.innerWidth,window.innerHeight,0],origin:[.5,.5,.5],drift:.5,slop:0,restitution:.5,onContact:e.ON_CONTACT.REFLECT};var c={0:new h(1,0,0),1:new h(-1,0,0),2:new h(0,1,0),3:new h(0,-1,0),4:new h(0,0,1),5:new h(0,0,-1)};e.prototype.setOptions=function(t){var i=!1;void 0!==t.restitution&&s.call(this,{restitution:t.restitution}),void 0!==t.drift&&s.call(this,{drift:t.drift}),void 0!==t.slop&&s.call(this,{slop:t.slop}),void 0!==t.onContact&&s.call(this,{onContact:t.onContact}),void 0!==t.size&&(i=!0),void 0!==t.sides&&(this.options.sides=t.sides),void 0!==t.origin&&(i=!0),i&&this.setSize(t.size,t.origin)},e.prototype.setSize=function(t,i){i=i||this.options.origin,i.length<3&&(i[2]=.5),this.forEach(function(e,o){var s=n(o,t,i);e.setOptions({distance:s})}),this.options.size=t,this.options.origin=i},e.prototype.applyConstraint=function(t,i,e){this.forEach(function(n){n.applyConstraint(t,i,e)})},e.prototype.forEach=function(t){var i=this.options.sides;for(var e in this.sides)t(i[e],e)},e.prototype.rotateZ=function(t){this.forEach(function(i){var e=i.options.normal;e.rotateZ(t).put(e)})},e.prototype.rotateX=function(t){this.forEach(function(i){var e=i.options.normal;e.rotateX(t).put(e)})},e.prototype.rotateY=function(t){this.forEach(function(i){var e=i.options.normal;e.rotateY(t).put(e)})},i.exports=e},{"../../math/Vector":41,"./Constraint":55,"./Wall":60}],62:[function(t,i){i.exports={Collision:t("./Collision"),Constraint:t("./Constraint"),Curve:t("./Curve"),Distance:t("./Distance"),Snap:t("./Snap"),Surface:t("./Surface"),Wall:t("./Wall"),Walls:t("./Walls")}},{"./Collision":54,"./Constraint":55,"./Curve":56,"./Distance":57,"./Snap":58,"./Surface":59,"./Wall":60,"./Walls":61}],63:[function(t,i){function e(t){this.options=Object.create(this.constructor.DEFAULT_OPTIONS),t&&this.setOptions(t),n.call(this)}var n=t("./Force");e.prototype=Object.create(n.prototype),e.prototype.constructor=e,e.FORCE_FUNCTIONS={LINEAR:function(t){return t},QUADRATIC:function(t){return t.mult(t.norm())}},e.DEFAULT_OPTIONS={strength:.01,forceFunction:e.FORCE_FUNCTIONS.LINEAR},e.prototype.applyForce=function(t){var i,e,n=this.options.strength,o=this.options.forceFunction,s=this.force;for(i=0;i<t.length;i++)e=t[i],o(e.velocity).mult(-n).put(s),e.applyForce(s)},e.prototype.setOptions=function(t){for(var i in t)this.options[i]=t[i]},i.exports=e},{"./Force":64}],64:[function(t,i){function e(t){this.force=new n(t),this._eventOutput=new o,o.setOutputHandler(this,this._eventOutput)}var n=t("../../math/Vector"),o=t("../../core/EventHandler");e.prototype.setOptions=function(t){this._eventOutput.emit("change",t)},e.prototype.applyForce=function(t){for(var i=t.length;i--;)t[i].applyForce(this.force)},e.prototype.getEnergy=function(){return 0},i.exports=e},{"../../core/EventHandler":7,"../../math/Vector":41}],65:[function(t,i){function e(t){this.options=Object.create(e.DEFAULT_OPTIONS),t&&this.setOptions(t),this.disp=new o,n.call(this)}var n=t("./Force"),o=t("../../math/Vector");e.prototype=Object.create(n.prototype),e.prototype.constructor=e,e.DECAY_FUNCTIONS={LINEAR:function(t,i){return Math.max(1-1/i*t,0)},MORSE:function(t,i){var e=0===i?100:i,n=t+e*(1-Math.log(2));return Math.max(1-Math.pow(1-Math.exp(n/e-1),2),0)},INVERSE:function(t,i){return 1/(1-i+t)},GRAVITY:function(t,i){return 1/(1-i+t*t)}},e.DEFAULT_OPTIONS={strength:1,anchor:void 0,range:[0,1/0],cutoff:0,cap:1/0,decayFunction:e.DECAY_FUNCTIONS.GRAVITY},e.prototype.setOptions=function(t){void 0!==t.anchor&&(t.anchor.position instanceof o&&(this.options.anchor=t.anchor.position),t.anchor instanceof Array&&(this.options.anchor=new o(t.anchor)),delete t.anchor);for(var i in t)this.options[i]=t[i]},e.prototype.applyForce=function(t,i){var e=this.options,n=this.force,o=this.disp,s=e.strength,r=e.anchor||i.position,a=e.cap,h=e.cutoff,c=e.range[0],p=e.range[1],u=e.decayFunction;if(0!==s)for(var l,f,d,_,y=t.length;y--;)l=t[y],l!==i&&(f=l.mass,d=l.position,o.set(d.sub(r)),_=o.norm(),p>_&&_>c&&(n.set(o.normalize(s*f*u(_,h)).cap(a)),l.applyForce(n)))},i.exports=e},{"../../math/Vector":41,"./Force":64}],66:[function(t,i){function e(t){n.call(this,t)}var n=t("./Drag");e.prototype=Object.create(n.prototype),e.prototype.constructor=e,e.DEFAULT_OPTIONS=n.DEFAULT_OPTIONS,e.FORCE_FUNCTIONS=n.FORCE_FUNCTIONS,e.FORCE_FUNCTIONS={LINEAR:function(t){return t},QUADRATIC:function(t){return t.mult(t.norm())}},e.prototype.applyForce=function(t){var i,e,n=this.options.strength,o=this.options.forceFunction,s=this.force;for(i=0;i<t.length;i++)e=t[i],o(e.angularVelocity).mult(-100*n).put(s),e.applyTorque(s)},e.prototype.setOptions=function(t){for(var i in t)this.options[i]=t[i]},i.exports=e},{"./Drag":63}],67:[function(t,i){function e(t){a.call(this,t)}function n(){var t=this.options;t.stiffness=Math.pow(2*c/t.period,2)}function o(){var t=this.options;t.damping=4*c*t.dampingRatio/t.period}function s(){n.call(this),o.call(this)}var r=t("./Force"),a=t("./Spring"),h=t("../../math/Quaternion");e.prototype=Object.create(a.prototype),e.prototype.constructor=e,e.DEFAULT_OPTIONS=a.DEFAULT_OPTIONS,e.FORCE_FUNCTIONS=a.FORCE_FUNCTIONS;var c=Math.PI;e.prototype.setOptions=function(t){void 0!==t.anchor&&(t.anchor instanceof h&&(this.options.anchor=t.anchor),t.anchor instanceof Array&&(this.options.anchor=new h(t.anchor))),void 0!==t.period&&(this.options.period=t.period),void 0!==t.dampingRatio&&(this.options.dampingRatio=t.dampingRatio),void 0!==t.length&&(this.options.length=t.length),void 0!==t.forceFunction&&(this.options.forceFunction=t.forceFunction),void 0!==t.maxLength&&(this.options.maxLength=t.maxLength),s.call(this),r.prototype.setOptions.call(this,t)},e.prototype.applyForce=function(t){var i,e,n,o,s=this.force,r=this.options,a=this.disp,h=r.stiffness,c=r.damping,p=r.length,u=r.anchor,l=r.forceFunction,f=r.maxLength;for(i=0;i<t.length;i++){if(e=t[i],a.set(u.sub(e.orientation)),n=a.norm()-p,0===n)return;o=e.mass,h*=o,c*=o,s.set(a.normalize(h*l(n,f))),c&&s.add(e.angularVelocity.mult(-c)).put(s),e.applyTorque(s)}},e.prototype.getEnergy=function(t){for(var i=this.options,e=i.length,n=i.anchor,o=i.stiffness,s=0,r=0;r<t.length;r++){var a=t[r],h=n.sub(a.orientation).norm()-e;s+=.5*o*h*h}return s},i.exports=e},{"../../math/Quaternion":38,"./Force":64,"./Spring":68}],68:[function(t,i){function e(t){r.call(this),this.options=Object.create(this.constructor.DEFAULT_OPTIONS),t&&this.setOptions(t),this.disp=new a(0,0,0),s.call(this)}function n(){var t=this.options;t.stiffness=Math.pow(2*h/t.period,2)}function o(){var t=this.options;t.damping=4*h*t.dampingRatio/t.period}function s(){n.call(this),o.call(this)}var r=t("./Force"),a=t("../../math/Vector");e.prototype=Object.create(r.prototype),e.prototype.constructor=e;var h=Math.PI,c=150;e.FORCE_FUNCTIONS={FENE:function(t,i){var e=.99*i,n=Math.max(Math.min(t,e),-e);return n/(1-n*n/(i*i))},HOOK:function(t){return t}},e.DEFAULT_OPTIONS={period:300,dampingRatio:.1,length:0,maxLength:1/0,anchor:void 0,forceFunction:e.FORCE_FUNCTIONS.HOOK},e.prototype.setOptions=function(t){void 0!==t.anchor&&(t.anchor.position instanceof a&&(this.options.anchor=t.anchor.position),t.anchor instanceof a&&(this.options.anchor=t.anchor),t.anchor instanceof Array&&(this.options.anchor=new a(t.anchor))),void 0!==t.period&&(t.period<c&&(t.period=c,console.warn("The period of a SpringTransition is capped at "+c+" ms. Use a SnapTransition for faster transitions")),this.options.period=t.period),void 0!==t.dampingRatio&&(this.options.dampingRatio=t.dampingRatio),void 0!==t.length&&(this.options.length=t.length),void 0!==t.forceFunction&&(this.options.forceFunction=t.forceFunction),void 0!==t.maxLength&&(this.options.maxLength=t.maxLength),s.call(this),r.prototype.setOptions.call(this,t)},e.prototype.applyForce=function(t,i){var e,n,o,s,r,a,h=this.force,c=this.disp,p=this.options,u=p.stiffness,l=p.damping,f=p.length,d=p.maxLength,_=p.anchor||i.position,y=p.forceFunction;for(e=0;e<t.length;e++){if(n=t[e],o=n.position,s=n.velocity,_.sub(o).put(c),r=c.norm()-f,0===r)return;a=n.mass,u*=a,l*=a,c.normalize(u*y(r,d)).put(h),l&&(i?h.add(s.sub(i.velocity).mult(-l)).put(h):h.add(s.mult(-l)).put(h)),n.applyForce(h),i&&i.applyForce(h.mult(-1))}},e.prototype.getEnergy=function(t,i){for(var e=this.options,n=e.length,o=i?i.position:e.anchor,s=e.stiffness,r=0,a=0;a<t.length;a++){var h=t[a],c=o.sub(h.position).norm()-n;r+=.5*s*c*c}return r},i.exports=e},{"../../math/Vector":41,"./Force":64}],69:[function(t,i){function e(t){o.call(this),this.options=Object.create(e.DEFAULT_OPTIONS),t&&this.setOptions(t),this.evaluation=new s}function n(t){var i=e.FIELDS;switch(t){case i.CONSTANT:this.options.direction?this.options.direction instanceof Array&&(this.options.direction=new s(this.options.direction)):this.options.direction=new s(0,1,0);break;case i.POINT_ATTRACTOR:this.options.position?this.options.position instanceof Array&&(this.options.position=new s(this.options.position)):this.options.position=new s(0,0,0)}}var o=t("./Force"),s=t("../../math/Vector");e.prototype=Object.create(o.prototype),e.prototype.constructor=e,e.FIELDS={CONSTANT:function(t,i){i.direction.put(this.evaluation)},LINEAR:function(t){t.put(this.evaluation)},RADIAL:function(t){t.mult(-1).put(this.evaluation)},POINT_ATTRACTOR:function(t,i){i.position.sub(t).put(this.evaluation)}},e.DEFAULT_OPTIONS={strength:.01,field:e.FIELDS.CONSTANT},e.prototype.setOptions=function(t){void 0!==t.strength&&(this.options.strength=t.strength),void 0!==t.field&&(this.options.field=t.field,n.call(this,this.options.field))},e.prototype.applyForce=function(t){var i,e,n=this.force,o=this.options.strength,s=this.options.field;for(i=0;i<t.length;i++)e=t[i],s.call(this,e.position,this.options),this.evaluation.mult(e.mass*o).put(n),e.applyForce(n)},e.prototype.getEnergy=function(t){var i,n,o=this.options.field,s=e.FIELDS,r=0;switch(o){case s.CONSTANT:r=t.length*this.options.direction.norm();break;case s.RADIAL:for(i=0;i<t.length;i++)n=t[i],r+=n.position.norm();break;case s.POINT_ATTRACTOR:for(i=0;i<t.length;i++)n=t[i],r+=n.position.sub(this.options.position).norm()}return r*=this.options.strength},i.exports=e},{"../../math/Vector":41,"./Force":64}],70:[function(t,i){i.exports={Drag:t("./Drag"),Force:t("./Force"),Repulsion:t("./Repulsion"),RotationalDrag:t("./RotationalDrag"),RotationalSpring:t("./RotationalSpring"),Spring:t("./Spring"),VectorField:t("./VectorField")}},{"./Drag":63,"./Force":64,"./Repulsion":65,"./RotationalDrag":66,"./RotationalSpring":67,"./Spring":68,"./VectorField":69}],71:[function(t,i){i.exports={PhysicsEngine:t("./PhysicsEngine"),bodies:t("./bodies"),constraints:t("./constraints"),forces:t("./forces"),integrators:t("./integrators")}},{"./PhysicsEngine":48,"./bodies":53,"./constraints":62,"./forces":70,"./integrators":73}],72:[function(t,i){var e={};e.integrateVelocity=function(t,i){var e=t.velocity,n=t.inverseMass,o=t.force;o.isZero()||(e.add(o.mult(i*n)).put(e),o.clear())},e.integratePosition=function(t,i){var e=t.position,n=t.velocity;e.add(n.mult(i)).put(e)},e.integrateAngularMomentum=function(t,i){var e=t.angularMomentum,n=t.torque;n.isZero()||(e.add(n.mult(i)).put(e),n.clear())},e.integrateOrientation=function(t,i){var e=t.orientation,n=t.angularVelocity;n.isZero()||e.add(e.multiply(n).scalarMultiply(.5*i)).put(e)},i.exports=e},{}],73:[function(t,i){i.exports={SymplecticEuler:t("./SymplecticEuler")}},{"./SymplecticEuler":72}],74:[function(t,i){function e(t){t&&t.canvasSize&&(this._canvasSize=t.canvasSize),n.apply(this,arguments),this._canvasSize||(this._canvasSize=this.getSize()),this._backBuffer=document.createElement("canvas"),this._canvasSize&&(this._backBuffer.width=this._canvasSize[0],this._backBuffer.height=this._canvasSize[1]),this._contextId=void 0}var n=t("../core/Surface");e.prototype=Object.create(n.prototype),e.prototype.constructor=e,e.prototype.elementType="canvas",e.prototype.elementClass="famous-surface",e.prototype.setContent=function(){},e.prototype.deploy=function(t){this._canvasSize&&(t.width=this._canvasSize[0],t.height=this._canvasSize[1]),"2d"===this._contextId&&(t.getContext(this._contextId).drawImage(this._backBuffer,0,0),this._backBuffer.width=0,this._backBuffer.height=0)},e.prototype.recall=function(t){this.getSize();this._backBuffer.width=t.width,this._backBuffer.height=t.height,"2d"===this._contextId&&(this._backBuffer.getContext(this._contextId).drawImage(t,0,0),t.width=0,t.height=0)},e.prototype.getContext=function(t){return this._contextId=t,this._currentTarget?this._currentTarget.getContext(t):this._backBuffer.getContext(t)},e.prototype.setSize=function(t,i){n.prototype.setSize.apply(this,arguments),i&&(this._canvasSize=[i[0],i[1]]),this._currentTarget&&(this._currentTarget.width=this._canvasSize[0],this._currentTarget.height=this._canvasSize[1])},i.exports=e},{"../core/Surface":14}],75:[function(t,i){function e(t){n.call(this,t),this._container=document.createElement("div"),this._container.classList.add("famous-group"),this._container.classList.add("famous-container-group"),this._shouldRecalculateSize=!1,this.context=new o(this._container),this.setContent(this._container)}var n=t("../core/Surface"),o=t("../core/Context");e.prototype=Object.create(n.prototype),e.prototype.constructor=e,e.prototype.elementType="div",e.prototype.elementClass="famous-surface",e.prototype.add=function(){return this.context.add.apply(this.context,arguments)},e.prototype.render=function(){return this._sizeDirty&&(this._shouldRecalculateSize=!0),n.prototype.render.apply(this,arguments)},e.prototype.deploy=function(){return this._shouldRecalculateSize=!0,n.prototype.deploy.apply(this,arguments)},e.prototype.commit=function(){var t=this._size?[this._size[0],this._size[1]]:null,i=n.prototype.commit.apply(this,arguments);return(this._shouldRecalculateSize||t&&(this._size[0]!==t[0]||this._size[1]!==t[1]))&&(this.context.setSize(),this._shouldRecalculateSize=!1),this.context.update(),i},i.exports=e},{"../core/Context":1,"../core/Surface":14}],76:[function(t,i){function e(t){t&&(this._method=t.method||""),n.apply(this,arguments)}var n=t("./ContainerSurface");e.prototype=Object.create(n.prototype),e.prototype.constructor=e,e.prototype.elementType="form",e.prototype.deploy=function(t){return this._method&&(t.method=this._method),n.prototype.deploy.apply(this,arguments)},i.exports=e},{"./ContainerSurface":75}],77:[function(t,i){function e(){this._imageUrl=void 0,n.apply(this,arguments)}var n=t("../core/Surface"),o=[],s=[],r=[],a=!0;e.enableCache=function(){a=!0},e.disableCache=function(){a=!1},e.clearCache=function(){o=[],s=[],r=[]},e.getCache=function(){return{urlCache:o,countCache:s,nodeCache:s}},e.prototype=Object.create(n.prototype),e.prototype.constructor=e,e.prototype.elementType="img",e.prototype.elementClass="famous-surface",e.prototype.setContent=function(t){var i=o.indexOf(this._imageUrl);-1!==i&&(1===s[i]?(o.splice(i,1),s.splice(i,1),r.splice(i,1)):s[i]--),i=o.indexOf(t),-1===i?(o.push(t),s.push(1)):s[i]++,this._imageUrl=t,this._contentDirty=!0},e.prototype.deploy=function(t){var i=o.indexOf(this._imageUrl);if(void 0===r[i]&&a){var e=new Image;e.src=this._imageUrl||"",r[i]=e}t.src=this._imageUrl||""},e.prototype.recall=function(t){t.src=""},i.exports=e},{"../core/Surface":14}],78:[function(t,i){function e(t){this._placeholder=t.placeholder||"",this._value=t.value||"",this._type=t.type||"text",this._name=t.name||"",n.apply(this,arguments),this.on("click",this.focus.bind(this)),window.addEventListener("click",function(t){t.target!==this._currentTarget&&this.blur()}.bind(this))}var n=t("../core/Surface");e.prototype=Object.create(n.prototype),e.prototype.constructor=e,e.prototype.elementType="input",e.prototype.elementClass="famous-surface",e.prototype.setPlaceholder=function(t){return this._placeholder=t,this._contentDirty=!0,this},e.prototype.focus=function(){return this._currentTarget&&this._currentTarget.focus(),this},e.prototype.blur=function(){return this._currentTarget&&this._currentTarget.blur(),this},e.prototype.setValue=function(t){return this._value=t,this._contentDirty=!0,this},e.prototype.setType=function(t){return this._type=t,this._contentDirty=!0,this},e.prototype.getValue=function(){return this._currentTarget?this._currentTarget.value:this._value},e.prototype.setName=function(t){return this._name=t,this._contentDirty=!0,this},e.prototype.getName=function(){return this._name},e.prototype.deploy=function(t){""!==this._placeholder&&(t.placeholder=this._placeholder),t.value=this._value,t.type=this._type,t.name=this._name},i.exports=e},{"../core/Surface":14}],79:[function(t,i){function e(t){n.apply(this,arguments),this._type="submit",t&&t.onClick&&this.setOnClick(t.onClick)}var n=t("./InputSurface");e.prototype=Object.create(n.prototype),e.prototype.constructor=e,e.prototype.setOnClick=function(t){this.onClick=t},e.prototype.deploy=function(t){this.onclick&&(t.onClick=this.onClick),n.prototype.deploy.apply(this,arguments)},i.exports=e},{"./InputSurface":78}],80:[function(t,i){function e(t){this._placeholder=t.placeholder||"",this._value=t.value||"",this._name=t.name||"",this._wrap=t.wrap||"",this._cols=t.cols||"",this._rows=t.rows||"",n.apply(this,arguments),this.on("click",this.focus.bind(this))}var n=t("../core/Surface");e.prototype=Object.create(n.prototype),e.prototype.constructor=e,e.prototype.elementType="textarea",e.prototype.elementClass="famous-surface",e.prototype.setPlaceholder=function(t){return this._placeholder=t,this._contentDirty=!0,this},e.prototype.focus=function(){return this._currentTarget&&this._currentTarget.focus(),this},e.prototype.blur=function(){return this._currentTarget&&this._currentTarget.blur(),this},e.prototype.setValue=function(t){return this._value=t,this._contentDirty=!0,this},e.prototype.getValue=function(){return this._currentTarget?this._currentTarget.value:this._value},e.prototype.setName=function(t){return this._name=t,this._contentDirty=!0,this},e.prototype.getName=function(){return this._name},e.prototype.setWrap=function(t){return this._wrap=t,this._contentDirty=!0,this},e.prototype.setColumns=function(t){return this._cols=t,this._contentDirty=!0,this},e.prototype.setRows=function(t){return this._rows=t,this._contentDirty=!0,this},e.prototype.deploy=function(t){""!==this._placeholder&&(t.placeholder=this._placeholder),""!==this._value&&(t.value=this._value),""!==this._name&&(t.name=this._name),""!==this._wrap&&(t.wrap=this._wrap),""!==this._cols&&(t.cols=this._cols),""!==this._rows&&(t.rows=this._rows)},i.exports=e},{"../core/Surface":14}],81:[function(t,i){function e(t){n.apply(this,arguments),this._videoUrl=void 0,this.options=Object.create(e.DEFAULT_OPTIONS),t&&this.setOptions(t)}var n=t("../core/Surface");e.prototype=Object.create(n.prototype),e.prototype.constructor=e,e.DEFAULT_OPTIONS={autoplay:!1},e.prototype.elementType="video",e.prototype.elementClass="famous-surface",e.prototype.setOptions=function(t){t.size&&this.setSize(t.size),t.classes&&this.setClasses(t.classes),t.properties&&this.setProperties(t.properties),t.autoplay&&(this.options.autoplay=t.autoplay),t.src&&(this._videoUrl=t.src,this._contentDirty=!0)},e.prototype.setContent=function(t){this._videoUrl=t,this._contentDirty=!0},e.prototype.deploy=function(t){t.src=this._videoUrl,t.autoplay=this.options.autoplay},e.prototype.recall=function(t){t.src=""},i.exports=e},{"../core/Surface":14}],82:[function(t,i){i.exports={CanvasSurface:t("./CanvasSurface"),ContainerSurface:t("./ContainerSurface"),FormContainerSurface:t("./FormContainerSurface"),ImageSurface:t("./ImageSurface"),InputSurface:t("./InputSurface"),SubmitInputSurface:t("./SubmitInputSurface"),TextareaSurface:t("./TextareaSurface"),VideoSurface:t("./VideoSurface")}},{"./CanvasSurface":74,"./ContainerSurface":75,"./FormContainerSurface":76,"./ImageSurface":77,"./InputSurface":78,"./SubmitInputSurface":79,"./TextareaSurface":80,"./VideoSurface":81}],83:[function(t,i){function e(t){this._map=t||null,this._cachedOutput=null,this._cachedInput=Number.NaN}e.create=function(t){var i=new e(t);return i.get.bind(i)},e.prototype.get=function(t){return t!==this._cachedInput&&(this._cachedInput=t,this._cachedOutput=this._map(t)),this._cachedOutput},i.exports=e},{}],84:[function(t,i){var e={inQuad:function(t){return t*t},outQuad:function(t){return-(t-=1)*t+1},inOutQuad:function(t){return(t/=.5)<1?.5*t*t:-.5*(--t*(t-2)-1)},inCubic:function(t){return t*t*t},outCubic:function(t){return--t*t*t+1},inOutCubic:function(t){return(t/=.5)<1?.5*t*t*t:.5*((t-=2)*t*t+2)},inQuart:function(t){return t*t*t*t},outQuart:function(t){return-(--t*t*t*t-1)},inOutQuart:function(t){return(t/=.5)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)},inQuint:function(t){return t*t*t*t*t},outQuint:function(t){return--t*t*t*t*t+1},inOutQuint:function(t){return(t/=.5)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)},inSine:function(t){return-1*Math.cos(t*(Math.PI/2))+1},outSine:function(t){return Math.sin(t*(Math.PI/2))},inOutSine:function(t){return-.5*(Math.cos(Math.PI*t)-1)},inExpo:function(t){return 0===t?0:Math.pow(2,10*(t-1))},outExpo:function(t){return 1===t?1:-Math.pow(2,-10*t)+1},inOutExpo:function(t){return 0===t?0:1===t?1:(t/=.5)<1?.5*Math.pow(2,10*(t-1)):.5*(-Math.pow(2,-10*--t)+2)},inCirc:function(t){return-(Math.sqrt(1-t*t)-1)},outCirc:function(t){return Math.sqrt(1- --t*t)},inOutCirc:function(t){return(t/=.5)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},inElastic:function(t){var i=1.70158,e=0,n=1;return 0===t?0:1===t?1:(e||(e=.3),i=e/(2*Math.PI)*Math.asin(1/n),-(n*Math.pow(2,10*(t-=1))*Math.sin(2*(t-i)*Math.PI/e)))},outElastic:function(t){var i=1.70158,e=0,n=1;return 0===t?0:1===t?1:(e||(e=.3),i=e/(2*Math.PI)*Math.asin(1/n),n*Math.pow(2,-10*t)*Math.sin(2*(t-i)*Math.PI/e)+1)},inOutElastic:function(t){var i=1.70158,e=0,n=1;return 0===t?0:2===(t/=.5)?1:(e||(e=.3*1.5),i=e/(2*Math.PI)*Math.asin(1/n),1>t?-.5*n*Math.pow(2,10*(t-=1))*Math.sin(2*(t-i)*Math.PI/e):n*Math.pow(2,-10*(t-=1))*Math.sin(2*(t-i)*Math.PI/e)*.5+1)},inBack:function(t,i){return void 0===i&&(i=1.70158),t*t*((i+1)*t-i)},outBack:function(t,i){return void 0===i&&(i=1.70158),--t*t*((i+1)*t+i)+1},inOutBack:function(t,i){return void 0===i&&(i=1.70158),(t/=.5)<1?.5*t*t*(((i*=1.525)+1)*t-i):.5*((t-=2)*t*(((i*=1.525)+1)*t+i)+2)},inBounce:function(t){return 1-e.outBounce(1-t)},outBounce:function(t){return 1/2.75>t?7.5625*t*t:2/2.75>t?7.5625*(t-=1.5/2.75)*t+.75:2.5/2.75>t?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},inOutBounce:function(t){return.5>t?.5*e.inBounce(2*t):.5*e.outBounce(2*t-1)+.5}};i.exports=e},{}],85:[function(t,i){function e(t){this.method=t,this._instances=[],this.state=[]}var n=t("../utilities/Utility");e.SUPPORTS_MULTIPLE=!0,e.prototype.get=function(){for(var t=0;t<this._instances.length;t++)this.state[t]=this._instances[t].get();return this.state},e.prototype.set=function(t,i,e){for(var o=n.after(t.length,e),s=0;s<t.length;s++)this._instances[s]||(this._instances[s]=new this.method),this._instances[s].set(t[s],i,o)},e.prototype.reset=function(t){for(var i=0;i<t.length;i++)this._instances[i]||(this._instances[i]=new this.method),this._instances[i].reset(t[i])},i.exports=e},{"../utilities/Utility":95}],86:[function(t,i){function e(t){t=t||0,this.endState=new v(t),this.initState=new v,this._dimensions=1,this._restTolerance=1e-10,this._absRestTolerance=this._restTolerance,this._callback=void 0,this.PE=new _,this.particle=new y,this.spring=new g({anchor:this.endState}),this.PE.addBody(this.particle),this.PE.attach(this.spring,this.particle)}function n(){return this.particle.getEnergy()+this.spring.getEnergy([this.particle])}function o(){var t=this.endState.sub(this.initState).normSquared();this._absRestTolerance=0===t?this._restTolerance:this._restTolerance*t}function s(t){this.endState.set(t),o.call(this)}function r(){this.PE.wake()}function a(){this.PE.sleep()}function h(t){this.particle.position.set(t)}function c(t){this.particle.velocity.set(t)}function p(){return 0===this._dimensions?this.particle.getPosition1D():this.particle.getPosition()}function u(){return 0===this._dimensions?this.particle.getVelocity1D():this.particle.getVelocity()}function l(t){this._callback=t}function f(t){var i=e.DEFAULT_OPTIONS;void 0===t.period&&(t.period=i.period),void 0===t.dampingRatio&&(t.dampingRatio=i.dampingRatio),void 0===t.velocity&&(t.velocity=i.velocity),this.spring.setOptions({period:t.period,dampingRatio:t.dampingRatio}),c.call(this,t.velocity)}function d(){if(this.PE.isSleeping()){if(this._callback){var t=this._callback;this._callback=void 0,t()}}else n.call(this)<this._absRestTolerance&&(h.call(this,this.endState),c.call(this,[0,0,0]),a.call(this))}var _=t("../physics/PhysicsEngine"),y=t("../physics/bodies/Particle"),g=t("../physics/constraints/Snap"),v=t("../math/Vector");e.SUPPORTS_MULTIPLE=3,e.DEFAULT_OPTIONS={period:100,dampingRatio:.2,velocity:0},e.prototype.reset=function(t,i){this._dimensions=t instanceof Array?t.length:0,this.initState.set(t),h.call(this,t),s.call(this,t),i&&c.call(this,i),l.call(this,void 0)},e.prototype.getVelocity=function(){return u.call(this)},e.prototype.setVelocity=function(t){this.call(this,c(t))},e.prototype.isActive=function(){return!this.PE.isSleeping()},e.prototype.halt=function(){this.set(this.get())},e.prototype.get=function(){return d.call(this),p.call(this)},e.prototype.set=function(t,i,e){return i?(this._dimensions=t instanceof Array?t.length:0,r.call(this),f.call(this,i),s.call(this,t),void l.call(this,e)):(this.reset(t),void(e&&e()))},i.exports=e},{"../math/Vector":41,"../physics/PhysicsEngine":48,"../physics/bodies/Particle":51,"../physics/constraints/Snap":58}],87:[function(t,i){function e(t){t=t||0,this.endState=new v(t),this.initState=new v,this._dimensions=void 0,this._restTolerance=1e-10,this._absRestTolerance=this._restTolerance,this._callback=void 0,this.PE=new _,this.spring=new g({anchor:this.endState}),this.particle=new y,this.PE.addBody(this.particle),this.PE.attach(this.spring,this.particle)}function n(){return this.particle.getEnergy()+this.spring.getEnergy([this.particle])}function o(t){this.particle.setPosition(t)}function s(t){this.particle.setVelocity(t)}function r(){return 0===this._dimensions?this.particle.getPosition1D():this.particle.getPosition()}function a(){return 0===this._dimensions?this.particle.getVelocity1D():this.particle.getVelocity()}function h(t){this._callback=t}function c(){this.PE.wake()}function p(){this.PE.sleep()}function u(){if(this.PE.isSleeping()){if(this._callback){var t=this._callback;this._callback=void 0,t()}}else n.call(this)<this._absRestTolerance&&(o.call(this,this.endState),s.call(this,[0,0,0]),p.call(this))}function l(t){var i=e.DEFAULT_OPTIONS;void 0===t.period&&(t.period=i.period),void 0===t.dampingRatio&&(t.dampingRatio=i.dampingRatio),void 0===t.velocity&&(t.velocity=i.velocity),t.period<150&&(t.period=150,console.warn("The period of a SpringTransition is capped at 150 ms. Use a SnapTransition for faster transitions")),this.spring.setOptions({period:t.period,dampingRatio:t.dampingRatio}),s.call(this,t.velocity)}function f(){var t=this.endState.sub(this.initState).normSquared();this._absRestTolerance=0===t?this._restTolerance:this._restTolerance*t}function d(t){this.endState.set(t),f.call(this)}var _=t("../physics/PhysicsEngine"),y=t("../physics/bodies/Particle"),g=t("../physics/forces/Spring"),v=t("../math/Vector");e.SUPPORTS_MULTIPLE=3,e.DEFAULT_OPTIONS={period:300,dampingRatio:.5,velocity:0},e.prototype.reset=function(t,i){this._dimensions=t instanceof Array?t.length:0,this.initState.set(t),o.call(this,t),d.call(this,t),i&&s.call(this,i),h.call(this,void 0)},e.prototype.getVelocity=function(){return a.call(this)},e.prototype.setVelocity=function(t){this.call(this,s(t))},e.prototype.isActive=function(){return!this.PE.isSleeping()
},e.prototype.halt=function(){this.set(this.get())},e.prototype.get=function(){return u.call(this),r.call(this)},e.prototype.set=function(t,i,e){return i?(this._dimensions=t instanceof Array?t.length:0,c.call(this),l.call(this,i),d.call(this,t),void h.call(this,e)):(this.reset(t),void(e&&e()))},i.exports=e},{"../math/Vector":41,"../physics/PhysicsEngine":48,"../physics/bodies/Particle":51,"../physics/forces/Spring":68}],88:[function(t,i){function e(t){this.currentAction=null,this.actionQueue=[],this.callbackQueue=[],this.state=0,this.velocity=void 0,this._callback=void 0,this._engineInstance=null,this._currentMethod=null,this.set(t)}function n(){if(this._callback){var t=this._callback;this._callback=void 0,t()}if(this.actionQueue.length<=0)return void this.set(this.get());this.currentAction=this.actionQueue.shift(),this._callback=this.callbackQueue.shift();var i=null,e=this.currentAction[0],a=this.currentAction[1];a instanceof Object&&a.method?(i=a.method,"string"==typeof i&&(i=r[i])):i=s,this._currentMethod!==i&&(this._engineInstance=!(e instanceof Object)||i.SUPPORTS_MULTIPLE===!0||e.length<=i.SUPPORTS_MULTIPLE?new i:new o(i),this._currentMethod=i),this._engineInstance.reset(this.state,this.velocity),void 0!==this.velocity&&(a.velocity=this.velocity),this._engineInstance.set(e,a,n.bind(this))}var o=t("./MultipleTransition"),s=t("./TweenTransition"),r={};e.register=function(t){var i=!0;for(var n in t)e.registerMethod(n,t[n])||(i=!1);return i},e.registerMethod=function(t,i){return t in r?!1:(r[t]=i,!0)},e.unregisterMethod=function(t){return t in r?(delete r[t],!0):!1},e.prototype.set=function(t,i,e){if(!i)return this.reset(t),e&&e(),this;var o=[t,i];return this.actionQueue.push(o),this.callbackQueue.push(e),this.currentAction||n.call(this),this},e.prototype.reset=function(t,i){this._currentMethod=null,this._engineInstance=null,this._callback=void 0,this.state=t,this.velocity=i,this.currentAction=null,this.actionQueue=[],this.callbackQueue=[]},e.prototype.delay=function(t,i){this.set(this.get(),{duration:t,curve:function(){return 0}},i)},e.prototype.get=function(t){return this._engineInstance&&(this._engineInstance.getVelocity&&(this.velocity=this._engineInstance.getVelocity()),this.state=this._engineInstance.get(t)),this.state},e.prototype.isActive=function(){return!!this.currentAction},e.prototype.halt=function(){return this.set(this.get())},i.exports=e},{"./MultipleTransition":85,"./TweenTransition":90}],89:[function(t,i){function e(t){this._final=r.identity.slice(),this._finalTranslate=[0,0,0],this._finalRotate=[0,0,0],this._finalSkew=[0,0,0],this._finalScale=[1,1,1],this.translate=new s(this._finalTranslate),this.rotate=new s(this._finalRotate),this.skew=new s(this._finalSkew),this.scale=new s(this._finalScale),t&&this.set(t)}function n(){return r.build({translate:this.translate.get(),rotate:this.rotate.get(),skew:this.skew.get(),scale:this.scale.get()})}function o(){return r.build({translate:this._finalTranslate,rotate:this._finalRotate,skew:this._finalSkew,scale:this._finalScale})}var s=t("./Transitionable"),r=t("../core/Transform"),a=t("../utilities/Utility");e.prototype.setTranslate=function(t,i,e){return this._finalTranslate=t,this._final=o.call(this),this.translate.set(t,i,e),this},e.prototype.setScale=function(t,i,e){return this._finalScale=t,this._final=o.call(this),this.scale.set(t,i,e),this},e.prototype.setRotate=function(t,i,e){return this._finalRotate=t,this._final=o.call(this),this.rotate.set(t,i,e),this},e.prototype.setSkew=function(t,i,e){return this._finalSkew=t,this._final=o.call(this),this.skew.set(t,i,e),this},e.prototype.set=function(t,i,e){var n=r.interpret(t);this._finalTranslate=n.translate,this._finalRotate=n.rotate,this._finalSkew=n.skew,this._finalScale=n.scale,this._final=t;var o=e?a.after(4,e):null;return this.translate.set(n.translate,i,o),this.rotate.set(n.rotate,i,o),this.skew.set(n.skew,i,o),this.scale.set(n.scale,i,o),this},e.prototype.setDefaultTransition=function(t){this.translate.setDefault(t),this.rotate.setDefault(t),this.skew.setDefault(t),this.scale.setDefault(t)},e.prototype.get=function(){return this.isActive()?n.call(this):this._final},e.prototype.getFinal=function(){return this._final},e.prototype.isActive=function(){return this.translate.isActive()||this.rotate.isActive()||this.scale.isActive()||this.skew.isActive()},e.prototype.halt=function(){return this.translate.halt(),this.rotate.halt(),this.skew.halt(),this.scale.halt(),this._final=this.get(),this._finalTranslate=this.translate.get(),this._finalRotate=this.rotate.get(),this._finalSkew=this.skew.get(),this._finalScale=this.scale.get(),this},i.exports=e},{"../core/Transform":15,"../utilities/Utility":95,"./Transitionable":88}],90:[function(t,i){function e(t){this.options=Object.create(e.DEFAULT_OPTIONS),t&&this.setOptions(t),this._startTime=0,this._startValue=0,this._updateTime=0,this._endValue=0,this._curve=void 0,this._duration=0,this._active=!1,this._callback=void 0,this.state=0,this.velocity=void 0}function n(t,i,e){return(1-e)*t+e*i}function o(t){return t instanceof Object?t instanceof Array?t.slice(0):Object.create(t):t}function s(t,i){var n={curve:i.curve};return i.duration&&(n.duration=i.duration),i.speed&&(n.speed=i.speed),t instanceof Object&&(void 0!==t.duration&&(n.duration=t.duration),t.curve&&(n.curve=t.curve),t.speed&&(n.speed=t.speed)),"string"==typeof n.curve&&(n.curve=e.getCurve(n.curve)),n}function r(t,i,e,n,o){var s,r=1e-7,a=(e(o)-e(o-r))/r;if(t instanceof Array){s=[];for(var h=0;h<t.length;h++)s[h]="number"==typeof t[h]?a*(t[h]-i[h])/n:0}else s=a*(t-i)/n;return s}function a(t,i,e){var o;if(t instanceof Array){o=[];for(var s=0;s<t.length;s++)o[s]="number"==typeof t[s]?n(t[s],i[s],e):t[s]}else o=n(t,i,e);return o}e.Curves={linear:function(t){return t},easeIn:function(t){return t*t},easeOut:function(t){return t*(2-t)},easeInOut:function(t){return.5>=t?2*t*t:-2*t*t+4*t-1},easeOutBounce:function(t){return t*(3-2*t)},spring:function(t){return(1-t)*Math.sin(6*Math.PI*t)+t}},e.SUPPORTS_MULTIPLE=!0,e.DEFAULT_OPTIONS={curve:e.Curves.linear,duration:500,speed:0};var h={};e.registerCurve=function(t,i){return h[t]?!1:(h[t]=i,!0)},e.unregisterCurve=function(t){return h[t]?(delete h[t],!0):!1},e.getCurve=function(t){var i=h[t];if(void 0!==i)return i;throw new Error("curve not registered")},e.getCurves=function(){return h},e.prototype.setOptions=function(t){void 0!==t.curve&&(this.options.curve=t.curve),void 0!==t.duration&&(this.options.duration=t.duration),void 0!==t.speed&&(this.options.speed=t.speed)},e.prototype.set=function(t,i,e){if(!i)return this.reset(t),void(e&&e());if(this._startValue=o(this.get()),i=s(i,this.options),i.speed){var n=this._startValue;if(n instanceof Object){var r=0;for(var a in n)r+=(t[a]-n[a])*(t[a]-n[a]);i.duration=Math.sqrt(r)/i.speed}else i.duration=Math.abs(t-n)/i.speed}this._startTime=Date.now(),this._endValue=o(t),this._startVelocity=o(i.velocity),this._duration=i.duration,this._curve=i.curve,this._active=!0,this._callback=e},e.prototype.reset=function(t,i){if(this._callback){var e=this._callback;this._callback=void 0,e()}this.state=o(t),this.velocity=o(i),this._startTime=0,this._duration=0,this._updateTime=0,this._startValue=this.state,this._startVelocity=this.velocity,this._endValue=this.state,this._active=!1},e.prototype.getVelocity=function(){return this.velocity},e.prototype.get=function(t){return this.update(t),this.state},e.prototype.update=function(t){if(this._active){if(t||(t=Date.now()),!(this._updateTime>=t)){this._updateTime=t;var i=t-this._startTime;if(i>=this._duration)this.state=this._endValue,this.velocity=r(this.state,this._startValue,this._curve,this._duration,1),this._active=!1;else if(0>i)this.state=this._startValue,this.velocity=this._startVelocity;else{var e=i/this._duration;this.state=a(this._startValue,this._endValue,this._curve(e)),this.velocity=r(this.state,this._startValue,this._curve,this._duration,e)}}}else if(this._callback){var n=this._callback;this._callback=void 0,n()}},e.prototype.isActive=function(){return this._active},e.prototype.halt=function(){this.reset(this.get())},e.registerCurve("linear",e.Curves.linear),e.registerCurve("easeIn",e.Curves.easeIn),e.registerCurve("easeOut",e.Curves.easeOut),e.registerCurve("easeInOut",e.Curves.easeInOut),e.registerCurve("easeOutBounce",e.Curves.easeOutBounce),e.registerCurve("spring",e.Curves.spring),e.customCurve=function(t,i){return t=t||0,i=i||0,function(e){return t*e+(-2*t-i+3)*e*e+(t+i-2)*e*e*e}},i.exports=e},{}],91:[function(t,i){function e(t){t=t||0,this.endState=new m(t),this.initState=new m,this.spring=new g({anchor:this.endState}),this.wall=new v,this._restTolerance=1e-10,this._dimensions=1,this._absRestTolerance=this._restTolerance,this._callback=void 0,this.PE=new _,this.particle=new y,this.PE.addBody(this.particle),this.PE.attach([this.wall,this.spring],this.particle)}function n(){return this.particle.getEnergy()+this.spring.getEnergy([this.particle])}function o(){var t=this.endState.sub(this.initState).normSquared();this._absRestTolerance=0===t?this._restTolerance:this._restTolerance*t}function s(){this.PE.wake()}function r(){this.PE.sleep()}function a(t){this.endState.set(t);var i=this.endState.sub(this.initState).norm();this.wall.setOptions({distance:this.endState.norm(),normal:0===i?this.particle.velocity.normalize(-1):this.endState.sub(this.initState).normalize(-1)}),o.call(this)}function h(t){this.particle.position.set(t)}function c(t){this.particle.velocity.set(t)}function p(){return 0===this._dimensions?this.particle.getPosition1D():this.particle.getPosition()}function u(){return 0===this._dimensions?this.particle.getVelocity1D():this.particle.getVelocity()}function l(t){this._callback=t}function f(){if(this.PE.isSleeping()){if(this._callback){var t=this._callback;this._callback=void 0,t()}}else{var i=n.call(this);i<this._absRestTolerance&&(r.call(this),h.call(this,this.endState),c.call(this,[0,0,0]))}}function d(t){var i=e.DEFAULT_OPTIONS;void 0===t.period&&(t.period=i.period),void 0===t.dampingRatio&&(t.dampingRatio=i.dampingRatio),void 0===t.velocity&&(t.velocity=i.velocity),void 0===t.restitution&&(t.restitution=i.restitution),this.spring.setOptions({period:t.period,dampingRatio:t.dampingRatio}),this.wall.setOptions({restitution:t.restitution}),c.call(this,t.velocity)}var _=t("../physics/PhysicsEngine"),y=t("../physics/bodies/Particle"),g=t("../physics/forces/Spring"),v=t("../physics/constraints/Wall"),m=t("../math/Vector");e.SUPPORTS_MULTIPLE=3,e.DEFAULT_OPTIONS={period:300,dampingRatio:.5,velocity:0,restitution:.5},e.prototype.reset=function(t,i){this._dimensions=t instanceof Array?t.length:0,this.initState.set(t),h.call(this,t),i&&c.call(this,i),a.call(this,t),l.call(this,void 0)},e.prototype.getVelocity=function(){return u.call(this)},e.prototype.setVelocity=function(t){this.call(this,c(t))},e.prototype.isActive=function(){return!this.PE.isSleeping()},e.prototype.halt=function(){this.set(this.get())},e.prototype.get=function(){return f.call(this),p.call(this)},e.prototype.set=function(t,i,e){return i?(this._dimensions=t instanceof Array?t.length:0,s.call(this),d.call(this,i),a.call(this,t),void l.call(this,e)):(this.reset(t),void(e&&e()))},i.exports=e},{"../math/Vector":41,"../physics/PhysicsEngine":48,"../physics/bodies/Particle":51,"../physics/constraints/Wall":60,"../physics/forces/Spring":68}],92:[function(t,i){i.exports={CachedMap:t("./CachedMap"),Easing:t("./Easing"),MultipleTransition:t("./MultipleTransition"),SnapTransition:t("./SnapTransition"),SpringTransition:t("./SpringTransition"),Transitionable:t("./Transitionable"),TransitionableTransform:t("./TransitionableTransform"),TweenTransition:t("./TweenTransition"),WallTransition:t("./WallTransition")}},{"./CachedMap":83,"./Easing":84,"./MultipleTransition":85,"./SnapTransition":86,"./SpringTransition":87,"./Transitionable":88,"./TransitionableTransform":89,"./TweenTransition":90,"./WallTransition":91}],93:[function(t,i){var e={0:48,1:49,2:50,3:51,4:52,5:53,6:54,7:55,8:56,9:57,a:97,b:98,c:99,d:100,e:101,f:102,g:103,h:104,i:105,j:106,k:107,l:108,m:109,n:110,o:111,p:112,q:113,r:114,s:115,t:116,u:117,v:118,w:119,x:120,y:121,z:122,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,ENTER:13,LEFT_ARROW:37,RIGHT_ARROW:39,UP_ARROW:38,DOWN_ARROW:40,SPACE:32,SHIFT:16,TAB:9};i.exports=e},{}],94:[function(t,i){function e(t){return c.on(p,t),t}function n(t,i){var n=u(),o=function(){var e=u();e-n>=i&&(t.apply(this,arguments),c.removeListener(p,o))};return e(o)}function o(t,i){var n=u(),o=function(){var e=u();e-n>=i&&(t.apply(this,arguments),n=u())};return e(o)}function s(t,i){if(void 0===i)return void 0;var n=function(){i--,0>=i&&(t.apply(this,arguments),a(n))};return e(n)}function r(t,i){i=i||1;var n=i,o=function(){i--,0>=i&&(t.apply(this,arguments),i=n)};return e(o)}function a(t){c.removeListener(p,t)}function h(t,i){var e,o,s,r,h;return function(){o=this,h=arguments,s=u();var c=function(){var a=u-s;i>a?e=n(c,i-a):(e=null,r=t.apply(o,h))};return a(e),e=n(c,i),r}}var c=t("../core/Engine"),p="prerender",u=window.performance&&window.performance.now?function(){return window.performance.now()}:function(){return Date.now()};i.exports={setTimeout:n,setInterval:o,debounce:h,after:s,every:r,clear:a}},{"../core/Engine":4}],95:[function(t,i){var e={};e.Direction={X:0,Y:1,Z:2},e.after=function(t,i){var e=t;return function(){e--,0===e&&i.apply(this,arguments)}},e.loadURL=function(t,i){var e=new XMLHttpRequest;e.onreadystatechange=function(){4===this.readyState&&i&&i(this.responseText)},e.open("GET",t),e.send()},e.createDocumentFragmentFromHTML=function(t){var i=document.createElement("div");i.innerHTML=t;for(var e=document.createDocumentFragment();i.hasChildNodes();)e.appendChild(i.firstChild);return e},e.clone=function(t){var i;if("object"==typeof t){i=t instanceof Array?[]:{};for(var n in t)if("object"==typeof t[n]&&null!==t[n])if(t[n]instanceof Array){i[n]=new Array(t[n].length);for(var o=0;o<t[n].length;o++)i[n][o]=e.clone(t[n][o])}else i[n]=e.clone(t[n]);else i[n]=t[n]}else i=t;return i},i.exports=e},{}],96:[function(t,i){i.exports={KeyCodes:t("./KeyCodes"),Timer:t("./Timer"),Utility:t("./Utility")}},{"./KeyCodes":93,"./Timer":94,"./Utility":95}],97:[function(t,i){function e(t){this.options=Object.create(this.constructor.DEFAULT_OPTIONS||e.DEFAULT_OPTIONS),this._optionsManager=new s(this.options),t&&this.setOptions(t),this._eventInput=new o,this._eventOutput=new o,o.setInputHandler(this,this._eventInput),o.setOutputHandler(this,this._eventOutput),this._id=n.register(this)}var n=t("../core/Entity"),o=(t("../core/Transform"),t("../core/EventHandler")),s=t("../core/OptionsManager");e.DEFAULT_OPTIONS={},e.prototype.setOptions=function(t){return this._optionsManager.setOptions(t)},e.prototype.getOptions=function(t){return this._optionsManager.getOptions(t)},e.prototype.render=function(){return this._id},e.prototype.commit=function(){},i.exports=e},{"../core/Entity":5,"../core/EventHandler":7,"../core/OptionsManager":10,"../core/Transform":15}],98:[function(t,i){function e(){c.apply(this,arguments),this.state=new a(0),this._isOpen=!1,this.setOutputFunction(function(t,i,e){var o=n.call(this),r=this.options.direction===h.Direction.X?s.translate(o*i,0,.001*(o-1)*i):s.translate(0,o*i,.001*(o-1)*i),a=t.render();if(this.options.stackRotation){var c=this.options.stackRotation*e*(1-o);a={transform:s.rotateZ(c),origin:[.5,.5],target:a}}return{transform:r,size:t.getSize(),target:a}})}function n(t){return t?this._isOpen?1:0:this.state.get()}function o(t,i,e){this.state.halt(),this.state.set(t,i,e)}var s=t("../core/Transform"),r=t("../core/OptionsManager"),a=t("../transitions/Transitionable"),h=t("../utilities/Utility"),c=t("./SequentialLayout");e.prototype=Object.create(c.prototype),e.prototype.constructor=e,e.DEFAULT_OPTIONS=r.patch(c.DEFAULT_OPTIONS,{transition:{curve:"easeOutBounce",duration:500},stackRotation:0}),e.prototype.getSize=function(){var t=c.prototype.getSize.apply(this,arguments),i=this._items?this._items.get().getSize():[0,0];i||(i=[0,0]);var e=n.call(this),o=1-e;return[i[0]*o+t[0]*e,i[1]*o+t[1]*e]},e.prototype.isOpen=function(){return this._isOpen},e.prototype.open=function(t){this._isOpen=!0,o.call(this,1,this.options.transition,t)},e.prototype.close=function(t){this._isOpen=!1,o.call(this,0,this.options.transition,t)},e.prototype.toggle=function(t){this._isOpen?this.close(t):this.open(t)},i.exports=e},{"../core/OptionsManager":10,"../core/Transform":15,"../transitions/Transitionable":88,"../utilities/Utility":95,"./SequentialLayout":110}],99:[function(t,i){function e(t){this.options=Object.create(e.DEFAULT_OPTIONS),this._optionsManager=new p(this.options),t&&this.setOptions(t),this._position=new u(0),this._direction=n(this.options.side),this._orientation=o(this.options.side),this._isOpen=!1,this._cachedLength=0,this.drawer=new h,this.content=new h,this._eventInput=new l,this._eventOutput=new l,l.setInputHandler(this,this._eventInput),l.setOutputHandler(this,this._eventOutput),this._eventInput.on("update",r.bind(this)),this._eventInput.on("end",a.bind(this))}function n(t){var i=e.SIDES;return t===i.LEFT||t===i.RIGHT?f:d}function o(t){var i=e.SIDES;return t===i.LEFT||t===i.TOP?1:-1}function s(t){var i,e=this.options;if(e.drawerLength)i=e.drawerLength;else{var n=t.getSize();i=n?n[this._direction]:e.drawerLength}return this._orientation*i}function r(t){var i,e,n=this.getPosition()+t.delta;this._cachedLength=s.call(this,this.drawer),1===this._orientation?(i=0,e=this._cachedLength):(i=this._cachedLength,e=0),n>e?n=e:i>n&&(n=i),this.setPosition(n)}function a(t){var i=t.velocity,e=this._orientation*this.getPosition(),n=this.options,o=this._orientation*this._cachedLength,s=n.positionThreshold||o/2,r=n.velocityThreshold;if(n.transition instanceof Object&&(n.transition.velocity=t.velocity),0===e)return void(this._isOpen=!1);if(e===o)return void(this._isOpen=!0);var a=Math.abs(i)>r||!this._isOpen&&e>s||this._isOpen&&s>e;a?this.toggle():this.reset()}var h=t("../core/RenderNode"),c=t("../core/Transform"),p=t("../core/OptionsManager"),u=t("../transitions/Transitionable"),l=t("../core/EventHandler"),f=0,d=1;e.SIDES={LEFT:0,TOP:1,RIGHT:2,BOTTOM:3},e.DEFAULT_OPTIONS={side:e.SIDES.LEFT,drawerLength:0,velocityThreshold:0,positionThreshold:0,transition:!0},e.prototype.setOptions=function(t){this._optionsManager.setOptions(t),void 0!==t.side&&(this._direction=n(t.side),this._orientation=o(t.side))},e.prototype.open=function(t,i){t instanceof Function&&(i=t),void 0===t&&(t=this.options.transition),this._cachedLength=s.call(this,this.drawer),this.setPosition(this._cachedLength,t,i),this._isOpen||(this._isOpen=!0,this._eventOutput.emit("open"))},e.prototype.close=function(t,i){t instanceof Function&&(i=t),void 0===t&&(t=this.options.transition),this.setPosition(0,t,i),this._isOpen&&(this._isOpen=!1,this._eventOutput.emit("close"))},e.prototype.setPosition=function(t,i,e){this._position.isActive()&&this._position.halt(),this._position.set(t,i,e)},e.prototype.getPosition=function(){return this._position.get()},e.prototype.setProgress=function(t,i,e){return this._position.set(t*this._cachedLength,i,e)},e.prototype.getProgress=function(){return this._position.get()/this._cachedLength},e.prototype.toggle=function(t){this._isOpen?this.close(t):this.open(t)},e.prototype.reset=function(t){this._isOpen?this.open(t):this.close(t)},e.prototype.isOpen=function(){return this._isOpen},e.prototype.render=function(){var t=this.getPosition();(!this._isOpen&&0>t&&1===this._orientation||t>0&&-1===this._orientation)&&(t=0,this.setPosition(t));var i=this._direction===f?c.translate(t,0,0):c.translate(0,t,0);return[{transform:c.behind,target:this.drawer.render()},{transform:i,target:this.content.render()}]},i.exports=e},{"../core/EventHandler":7,"../core/OptionsManager":10,"../core/RenderNode":11,"../core/Transform":15,"../transitions/Transitionable":88}],100:[function(t,i){function e(t){this._currentTarget=null,this._size=[void 0,void 0],this._controller=new h(t),this._controller.inTransformFrom(o.create(n.bind(this,1e-4))),this._controller.outTransformFrom(o.create(n.bind(this,-1e-4))),this._eventInput=new r,r.setInputHandler(this,this._eventInput),this._entityId=s.register(this),t&&this.setOptions(t)}function n(t,i){return a.translate(this._size[0]*(1-i),0,t*(1-i))}var o=t("../transitions/CachedMap"),s=t("../core/Entity"),r=t("../core/EventHandler"),a=t("../core/Transform"),h=t("./RenderController");e.prototype.show=function(t){this._currentTarget&&this._eventInput.unpipe(this._currentTarget),this._currentTarget=t,this._currentTarget&&this._currentTarget.trigger&&this._eventInput.pipe(this._currentTarget),this._controller.show.apply(this._controller,arguments)},e.prototype.setOptions=function(t){this._controller.setOptions(t)},e.prototype.render=function(){return this._entityId},e.prototype.commit=function(t){return this._size[0]=t.size[0],this._size[1]=t.size[1],{transform:t.transform,opacity:t.opacity,origin:t.origin,size:t.size,target:this._controller.render()}},i.exports=e},{"../core/Entity":5,"../core/EventHandler":7,"../core/Transform":15,"../transitions/CachedMap":83,"./RenderController":106}],101:[function(t,i){function e(t){this.options=Object.create(e.DEFAULT_OPTIONS),this.optionsManager=new a(this.options),t&&this.setOptions(t),this.id=s.register(this),this._ratios=new c(this.options.ratios),this._nodes=[],this._size=[0,0],this._cachedDirection=null,this._cachedLengths=[],this._cachedTransforms=null,this._ratiosDirty=!1,this._eventOutput=new h,h.setOutputHandler(this,this._eventOutput)}function n(t,i,n){var o,s,a,h,c=0,p=i,u=0;for(this._cachedLengths=[],this._cachedTransforms=[],h=0;h<t.length;h++)s=t[h],a=this._nodes[h],"number"!=typeof s?p-=a.getSize()[n]||0:u+=s;for(h=0;h<t.length;h++)a=this._nodes[h],s=t[h],i="number"==typeof s?p*s/u:a.getSize()[n],o=n===e.DIRECTION_X?r.translate(c,0,0):r.translate(0,c,0),this._cachedTransforms.push(o),this._cachedLengths.push(i),c+=i}function o(t,i){for(var e=0;e<t.length;e++)if("number"!=typeof t[e]&&this._nodes[e].getSize()[i]!==this._cachedLengths[e])return!0;return!1}var s=t("../core/Entity"),r=t("../core/Transform"),a=t("../core/OptionsManager"),h=t("../core/EventHandler"),c=t("../transitions/Transitionable");e.DIRECTION_X=0,e.DIRECTION_Y=1,e.DEFAULT_OPTIONS={direction:e.DIRECTION_X,transition:!1,ratios:[]},e.prototype.render=function(){return this.id},e.prototype.setOptions=function(t){this.optionsManager.setOptions(t)},e.prototype.sequenceFrom=function(t){if(this._nodes=t,0===this._ratios.get().length){for(var i=[],e=0;e<this._nodes.length;e++)i.push(1);this.setRatios(i)}},e.prototype.setRatios=function(t,i,e){void 0===i&&(i=this.options.transition);var n=this._ratios;0===n.get().length&&(i=void 0),n.isActive()&&n.halt(),n.set(t,i,e),this._ratiosDirty=!0},e.prototype.getSize=function(){return this._size},e.prototype.commit=function(t){var i,e=t.size,s=t.transform,a=t.origin,h=t.opacity,c=this._ratios.get(),p=this.options.direction,u=e[p];(u!==this._size[p]||this._ratiosDirty||this._ratios.isActive()||p!==this._cachedDirection||o.call(this,c,p))&&(n.call(this,c,u,p),u!==this._size[p]&&(this._size[0]=e[0],this._size[1]=e[1]),p!==this._cachedDirection&&(this._cachedDirection=p),this._ratiosDirty&&(this._ratiosDirty=!1));for(var l=[],f=0;f<c.length;f++)i=[void 0,void 0],u=this._cachedLengths[f],i[p]=u,l.push({transform:this._cachedTransforms[f],size:i,target:this._nodes[f].render()});return e&&0!==a[0]&&0!==a[1]&&(s=r.moveThen([-e[0]*a[0],-e[1]*a[1],0],s)),{transform:s,size:e,opacity:h,target:l}},i.exports=e},{"../core/Entity":5,"../core/EventHandler":7,"../core/OptionsManager":10,"../core/Transform":15,"../transitions/Transitionable":88}],102:[function(t,i){function e(t){this.options=Object.create(e.DEFAULT_OPTIONS),this._optionsManager=new s(this.options),t&&this.setOptions(t),this.angle=new o(0),this.frontNode=void 0,this.backNode=void 0,this.flipped=!1}var n=t("../core/Transform"),o=t("../transitions/Transitionable"),s=(t("../core/RenderNode"),t("../core/OptionsManager"));e.DIRECTION_X=0,e.DIRECTION_Y=1;var r=1;e.DEFAULT_OPTIONS={transition:!0,direction:e.DIRECTION_X},e.prototype.flip=function(t,i){var e=this.flipped?0:Math.PI;this.setAngle(e,t,i),this.flipped=!this.flipped},e.prototype.setAngle=function(t,i,e){void 0===i&&(i=this.options.transition),this.angle.isActive()&&this.angle.halt(),this.angle.set(t,i,e)},e.prototype.setOptions=function(t){return this._optionsManager.setOptions(t)},e.prototype.setFront=function(t){this.frontNode=t},e.prototype.setBack=function(t){this.backNode=t},e.prototype.render=function(){var t,i,o=this.angle.get();this.options.direction===e.DIRECTION_X?(t=n.rotateY(o),i=n.rotateY(o+Math.PI)):(t=n.rotateX(o),i=n.rotateX(o+Math.PI));var s=[];return this.frontNode&&s.push({transform:t,target:this.frontNode.render()}),this.backNode&&s.push({transform:n.moveThen([0,0,r],i),target:this.backNode.render()}),s},i.exports=e},{"../core/OptionsManager":10,"../core/RenderNode":11,"../core/Transform":15,"../transitions/Transitionable":88}],103:[function(t,i){function e(t){this.options=Object.create(e.DEFAULT_OPTIONS),this.optionsManager=new u(this.options),t&&this.setOptions(t),this.id=r.register(this),this._modifiers=[],this._states=[],this._contextSizeCache=[0,0],this._dimensionsCache=[0,0],this._activeCount=0,this._eventOutput=new c,c.setOutputHandler(this,this._eventOutput)}function n(t,i,e){var n=[t[0],t[1]];n[0]-=this.options.gutterSize[0]*(i-1),n[1]-=this.options.gutterSize[1]*(e-1);for(var r,a=Math.round(n[1]/e),h=Math.round(n[0]/i),c=0,p=0,u=0;e>u;u++){r=0;for(var l=0;i>l;l++)void 0===this._modifiers[p]?o.call(this,p,[h,a],[r,c,0],1):s.call(this,p,[h,a],[r,c,0],1),p++,r+=h+this.options.gutterSize[0];c+=a+this.options.gutterSize[1]}for(this._dimensionsCache=[this.options.dimensions[0],this.options.dimensions[1]],this._contextSizeCache=[t[0],t[1]],this._activeCount=e*i,u=this._activeCount;u<this._modifiers.length;u++)s.call(this,u,[Math.round(h),Math.round(a)],[0,0],0);this._eventOutput.emit("reflow")}function o(t,i,e,n){var o={transform:new f(a.translate.apply(null,e)),opacity:new l(n),size:new l(i)},s=new p({transform:o.transform,opacity:o.opacity,size:o.size});this._states[t]=o,this._modifiers[t]=s}function s(t,i,e,n){var o=this._states[t],s=o.size,r=o.opacity,a=o.transform,h=this.options.transition;a.halt(),r.halt(),s.halt(),a.setTranslate(e,h),s.set(i,h),r.set(n,h)}var r=t("../core/Entity"),a=(t("../core/RenderNode"),t("../core/Transform")),h=t("../core/ViewSequence"),c=t("../core/EventHandler"),p=t("../core/Modifier"),u=t("../core/OptionsManager"),l=t("../transitions/Transitionable"),f=t("../transitions/TransitionableTransform");e.DEFAULT_OPTIONS={dimensions:[1,1],transition:!1,gutterSize:[0,0]},e.prototype.render=function(){return this.id},e.prototype.setOptions=function(t){return this.optionsManager.setOptions(t)},e.prototype.sequenceFrom=function(t){t instanceof Array&&(t=new h(t)),this.sequence=t},e.prototype.commit=function(t){var i=t.transform,e=t.opacity,o=t.origin,s=t.size,r=this.options.dimensions[0],h=this.options.dimensions[1];(s[0]!==this._contextSizeCache[0]||s[1]!==this._contextSizeCache[1]||r!==this._dimensionsCache[0]||h!==this._dimensionsCache[1])&&n.call(this,s,r,h);for(var c=this.sequence,p=[],u=0;c&&u<this._modifiers.length;){var l=c.get(),f=this._modifiers[u];u>=this._activeCount&&this._states[u].opacity.isActive()&&(this._modifiers.splice(u,1),this._states.splice(u,1)),l&&p.push(f.modify({origin:o,target:l.render()})),c=c.getNext(),u++}return s&&(i=a.moveThen([-s[0]*o[0],-s[1]*o[1],0],i)),{transform:i,opacity:e,size:s,target:p}},i.exports=e},{"../core/Entity":5,"../core/EventHandler":7,"../core/Modifier":9,"../core/OptionsManager":10,"../core/RenderNode":11,"../core/Transform":15,"../core/ViewSequence":17,"../transitions/Transitionable":88,"../transitions/TransitionableTransform":89}],104:[function(t,i){function e(t){this.options=Object.create(e.DEFAULT_OPTIONS),this._optionsManager=new c(this.options),t&&this.setOptions(t),this._entityId=r.register(this),this.header=new a,this.footer=new a,this.content=new a}function n(t,i){var e=t.getSize();return e?e[this.options.direction]:i}function o(t){return this.options.direction===e.DIRECTION_X?h.translate(t,0,0):h.translate(0,t,0)}function s(t,i){return this.options.direction===e.DIRECTION_X?[t,i[1]]:[i[0],t]}var r=t("../core/Entity"),a=t("../core/RenderNode"),h=t("../core/Transform"),c=t("../core/OptionsManager");e.DIRECTION_X=0,e.DIRECTION_Y=1,e.DEFAULT_OPTIONS={direction:e.DIRECTION_Y,headerSize:void 0,footerSize:void 0,defaultHeaderSize:0,defaultFooterSize:0},e.prototype.render=function(){return this._entityId},e.prototype.setOptions=function(t){return this._optionsManager.setOptions(t)},e.prototype.commit=function(t){var i=t.transform,e=t.origin,r=t.size,a=t.opacity,c=void 0!==this.options.headerSize?this.options.headerSize:n.call(this,this.header,this.options.defaultHeaderSize),p=void 0!==this.options.footerSize?this.options.footerSize:n.call(this,this.footer,this.options.defaultFooterSize),u=r[this.options.direction]-c-p;r&&(i=h.moveThen([-r[0]*e[0],-r[1]*e[1],0],i));var l=[{size:s.call(this,c,r),target:this.header.render()},{transform:o.call(this,c),size:s.call(this,u,r),target:this.content.render()},{transform:o.call(this,c+u),size:s.call(this,p,r),target:this.footer.render()}];return{transform:i,opacity:a,size:r,target:l}},i.exports=e},{"../core/Entity":5,"../core/OptionsManager":10,"../core/RenderNode":11,"../core/Transform":15}],105:[function(t,i){function e(t){this.options=Object.create(e.DEFAULT_OPTIONS),this._optionsManager=new a(this.options),t&&this.setOptions(t),this._showing=!1,this.nodes=[],this.transforms=[],this.states=[]}var n=t("../core/Transform"),o=t("../core/Modifier"),s=t("../core/RenderNode"),r=t("../utilities/Utility"),a=t("../core/OptionsManager"),h=t("../transitions/Transitionable"),c=t("../transitions/TransitionableTransform");e.DEFAULT_OPTIONS={inTransform:n.scale(.001,.001,.001),inOpacity:0,inOrigin:[.5,.5],inAlign:[.5,.5],outTransform:n.scale(.001,.001,.001),outOpacity:0,outOrigin:[.5,.5],outAlign:[.5,.5],showTransform:n.identity,showOpacity:1,showOrigin:[.5,.5],showAlign:[.5,.5],inTransition:!0,outTransition:!0,overlap:!1},e.prototype.setOptions=function(t){return this._optionsManager.setOptions(t)},e.prototype.show=function(t,i,e){if(!t)return this.hide(e);if(i instanceof Function&&(e=i,i=void 0),this._showing){if(!this.options.overlap)return this.hide(this.show.bind(this,t,i,e));this.hide()}this._showing=!0;var n={transform:new c(this.options.inTransform),origin:new h(this.options.inOrigin),align:new h(this.options.inAlign),opacity:new h(this.options.inOpacity)},a=new o({transform:n.transform,opacity:n.opacity,origin:n.origin,align:n.align}),p=new s;p.add(a).add(t),this.nodes.push(p),this.states.push(n),this.transforms.push(a);var u=e?r.after(3,e):void 0;i||(i=this.options.inTransition),n.transform.set(this.options.showTransform,i,u),n.opacity.set(this.options.showOpacity,i,u),n.origin.set(this.options.showOrigin,i,u),n.align.set(this.options.showAlign,i,u)},e.prototype.hide=function(t,i){if(this._showing){this._showing=!1,t instanceof Function&&(i=t,t=void 0);var e=this.nodes[this.nodes.length-1],n=this.transforms[this.transforms.length-1],o=this.states[this.states.length-1],s=r.after(3,function(){this.nodes.splice(this.nodes.indexOf(e),1),this.states.splice(this.states.indexOf(o),1),this.transforms.splice(this.transforms.indexOf(n),1),i&&i.call(this)}.bind(this));t||(t=this.options.outTransition),o.transform.set(this.options.outTransform,t,s),o.opacity.set(this.options.outOpacity,t,s),o.origin.set(this.options.outOrigin,t,s),o.align.set(this.options.outAlign,t,s)}},e.prototype.render=function(){for(var t=[],i=0;i<this.nodes.length;i++)t.push(this.nodes[i].render());return t},i.exports=e},{"../core/Modifier":9,"../core/OptionsManager":10,"../core/RenderNode":11,"../core/Transform":15,"../transitions/Transitionable":88,"../transitions/TransitionableTransform":89,"../utilities/Utility":95}],106:[function(t,i){function e(){h.apply(this,arguments),this._showing=-1,this._outgoingRenderables=[],this._nextRenderable=null,this._renderables=[],this._nodes=[],this._modifiers=[],this._states=[],this.inTransformMap=e.DefaultMap.transform,this.inOpacityMap=e.DefaultMap.opacity,this.inOriginMap=e.DefaultMap.origin,this.outTransformMap=e.DefaultMap.transform,this.outOpacityMap=e.DefaultMap.opacity,this.outOriginMap=e.DefaultMap.origin,this._output=[]
}function n(t,i){return t(i.get())}var o=t("../core/Modifier"),s=t("../core/RenderNode"),r=t("../core/Transform"),a=t("../transitions/Transitionable"),h=t("../core/View");e.prototype=Object.create(h.prototype),e.prototype.constructor=e,e.DEFAULT_OPTIONS={inTransition:!0,outTransition:!0,overlap:!0},e.DefaultMap={transform:function(){return r.identity},opacity:function(t){return t},origin:null},e.prototype.inTransformFrom=function(t){if(t instanceof Function)this.inTransformMap=t;else{if(!t||!t.get)throw new Error("inTransformFrom takes only function or getter object");this.inTransformMap=t.get.bind(t)}return this},e.prototype.inOpacityFrom=function(t){if(t instanceof Function)this.inOpacityMap=t;else{if(!t||!t.get)throw new Error("inOpacityFrom takes only function or getter object");this.inOpacityMap=t.get.bind(t)}return this},e.prototype.inOriginFrom=function(t){if(t instanceof Function)this.inOriginMap=t;else{if(!t||!t.get)throw new Error("inOriginFrom takes only function or getter object");this.inOriginMap=t.get.bind(t)}return this},e.prototype.outTransformFrom=function(t){if(t instanceof Function)this.outTransformMap=t;else{if(!t||!t.get)throw new Error("outTransformFrom takes only function or getter object");this.outTransformMap=t.get.bind(t)}return this},e.prototype.outOpacityFrom=function(t){if(t instanceof Function)this.outOpacityMap=t;else{if(!t||!t.get)throw new Error("outOpacityFrom takes only function or getter object");this.outOpacityMap=t.get.bind(t)}return this},e.prototype.outOriginFrom=function(t){if(t instanceof Function)this.outOriginMap=t;else{if(!t||!t.get)throw new Error("outOriginFrom takes only function or getter object");this.outOriginMap=t.get.bind(t)}return this},e.prototype.show=function(t,i,e){if(!t)return this.hide(e);if(i instanceof Function&&(e=i,i=null),this._showing>=0){if(!this.options.overlap)return void(this._nextRenderable?this._nextRenderable=t:(this._nextRenderable=t,this.hide(function(){this._nextRenderable===t&&this.show(this._nextRenderable,e),this._nextRenderable=null})));this.hide()}var r=null,h=this._renderables.indexOf(t);if(h>=0){this._showing=h,r=this._states[h],r.halt();var c=this._outgoingRenderables.indexOf(t);c>=0&&this._outgoingRenderables.splice(c,1)}else{r=new a(0);var p=new o({transform:this.inTransformMap?n.bind(this,this.inTransformMap,r):null,opacity:this.inOpacityMap?n.bind(this,this.inOpacityMap,r):null,origin:this.inOriginMap?n.bind(this,this.inOriginMap,r):null}),u=new s;u.add(p).add(t),this._showing=this._nodes.length,this._nodes.push(u),this._modifiers.push(p),this._states.push(r),this._renderables.push(t)}i||(i=this.options.inTransition),r.set(1,i,e)},e.prototype.hide=function(t,i){if(!(this._showing<0)){var e=this._showing;this._showing=-1,t instanceof Function&&(i=t,t=void 0);var o=this._nodes[e],s=this._modifiers[e],r=this._states[e],a=this._renderables[e];s.transformFrom(this.outTransformMap?n.bind(this,this.outTransformMap,r):null),s.opacityFrom(this.outOpacityMap?n.bind(this,this.outOpacityMap,r):null),s.originFrom(this.outOriginMap?n.bind(this,this.outOriginMap,r):null),this._outgoingRenderables.indexOf(a)<0&&this._outgoingRenderables.push(a),t||(t=this.options.outTransition),r.halt(),r.set(0,t,function(t,e,n,o){if(this._outgoingRenderables.indexOf(o)>=0){var s=this._nodes.indexOf(t);this._nodes.splice(s,1),this._modifiers.splice(s,1),this._states.splice(s,1),this._renderables.splice(s,1),this._outgoingRenderables.splice(this._outgoingRenderables.indexOf(o),1),this._showing>=s&&this._showing--}i&&i.call(this)}.bind(this,o,s,r,a))}},e.prototype.render=function(){var t=this._output;t.length>this._nodes.length&&t.splice(this._nodes.length);for(var i=0;i<this._nodes.length;i++)t[i]=this._nodes[i].render();return t},i.exports=e},{"../core/Modifier":9,"../core/RenderNode":11,"../core/Transform":15,"../core/View":16,"../transitions/Transitionable":88}],107:[function(t,i){function e(t){this.options=Object.create(e.DEFAULT_OPTIONS),this._optionsManager=new r(this.options),t&&this.setOptions(t),this.container=new n(this.options.container),this.scrollview=new s(this.options.scrollview),this.container.add(this.scrollview),this._eventInput=new o,o.setInputHandler(this,this._eventInput),this._eventInput.pipe(this.scrollview),this._eventOutput=new o,o.setOutputHandler(this,this._eventOutput),this.container.pipe(this._eventOutput),this.scrollview.pipe(this._eventOutput)}var n=t("../surfaces/ContainerSurface"),o=t("../core/EventHandler"),s=t("./Scrollview"),r=(t("../utilities/Utility"),t("../core/OptionsManager"));e.DEFAULT_OPTIONS={container:{properties:{overflow:"hidden"}},scrollview:{}},e.prototype.setOptions=function(t){return this._optionsManager.setOptions(t)},e.prototype.sequenceFrom=function(){return this.scrollview.sequenceFrom.apply(this.scrollview,arguments)},e.prototype.getSize=function(){return this.container.getSize.apply(this.container,arguments)},e.prototype.render=function(){return this.container.render()},i.exports=e},{"../core/EventHandler":7,"../core/OptionsManager":10,"../surfaces/ContainerSurface":75,"../utilities/Utility":95,"./Scrollview":109}],108:[function(t,i){function e(t){this.options=Object.create(this.constructor.DEFAULT_OPTIONS),this._optionsManager=new c(this.options),t&&this._optionsManager.setOptions(t),this._node=null,this._position=0,this._positionOffset=0,this._positionGetter=null,this._outputFunction=null,this._masterOutputFunction=null,this.outputFrom(),this._onEdge=0,this.group=new h,this.group.add({render:r.bind(this)}),this._entityId=a.register(this),this._size=[void 0,void 0],this._contextSize=[void 0,void 0],this._eventInput=new f,this._eventOutput=new f,f.setInputHandler(this,this._eventInput),f.setOutputHandler(this,this._eventOutput)}function n(t){t||(t=this._contextSize);var i=this.options.direction;return void 0===t[i]?this._contextSize[i]:t[i]}function o(t,i,e){var o=t.getSize?t.getSize():this._contextSize,s=this._outputFunction(i);return e.push({transform:s,target:t.render()}),n.call(this,o)}function s(){return void 0!==this.options.clipSize?this.options.clipSize:this._contextSize[this.options.direction]>this.getCumulativeSize()[this.options.direction]?n.call(this,this.getCumulativeSize()):n.call(this,this._contextSize)}function r(){for(var t=null,i=this._position,e=[],r=-this._positionOffset,a=s.call(this),h=this._node;h&&r-i<a+this.options.margin;)r+=o.call(this,h,r,e),h=h.getNext?h.getNext():null;var c=this._node,p=n.call(this,c.getSize());if(a>r){for(;c&&a>p;)c=c.getPrevious(),c&&(p+=n.call(this,c.getSize()));for(c=this._node;c&&a>p;)c=c.getNext(),c&&(p+=n.call(this,c.getSize()))}for(!h&&a-d>r-i?1!==this._onEdge&&(this._onEdge=1,this._eventOutput.emit("onEdge",{position:r-a})):!this._node.getPrevious()&&-d>i?-1!==this._onEdge&&(this._onEdge=-1,this._eventOutput.emit("onEdge",{position:0})):0!==this._onEdge&&(this._onEdge=0,this._eventOutput.emit("offEdge")),h=this._node&&this._node.getPrevious?this._node.getPrevious():null,r=-this._positionOffset,h&&(t=h.getSize?h.getSize():this._contextSize,r-=n.call(this,t));h&&r-i>-(a+this.options.margin);)o.call(this,h,r,e),h=h.getPrevious?h.getPrevious():null,h&&(t=h.getSize?h.getSize():this._contextSize,r-=n.call(this,t));return e}var a=t("../core/Entity"),h=t("../core/Group"),c=t("../core/OptionsManager"),p=t("../core/Transform"),u=t("../utilities/Utility"),l=t("../core/ViewSequence"),f=t("../core/EventHandler");e.DEFAULT_OPTIONS={direction:u.Direction.Y,margin:0,clipSize:void 0,groupScroll:!1};var d=0;e.prototype.getCumulativeSize=function(t){return void 0===t&&(t=this._node._.cumulativeSizes.length-1),this._node._.getSize(t)},e.prototype.setOptions=function(t){t.groupScroll!==this.options.groupScroll&&(t.groupScroll?this.group.pipe(this._eventOutput):this.group.unpipe(this._eventOutput)),this._optionsManager.setOptions(t)},e.prototype.onEdge=function(){return this._onEdge},e.prototype.outputFrom=function(t,i){t||(t=function(t){return this.options.direction===u.Direction.X?p.translate(t,0):p.translate(0,t)}.bind(this),i||(i=t)),this._outputFunction=t,this._masterOutputFunction=i?i:function(i){return p.inverse(t(-i))}},e.prototype.positionFrom=function(t){t instanceof Function?this._positionGetter=t:t&&t.get?this._positionGetter=t.get.bind(t):(this._positionGetter=null,this._position=t),this._positionGetter&&(this._position=this._positionGetter.call(this))},e.prototype.sequenceFrom=function(t){t instanceof Array&&(t=new l({array:t})),this._node=t,this._positionOffset=0},e.prototype.getSize=function(t){return t?this._contextSize:this._size},e.prototype.render=function(){return this._node?(this._positionGetter&&(this._position=this._positionGetter.call(this)),this._entityId):null},e.prototype.commit=function(t){var i=t.transform,e=t.opacity,n=t.origin,o=t.size;this.options.clipSize||o[0]===this._contextSize[0]&&o[1]===this._contextSize[1]||(this._onEdge=0,this._contextSize[0]=o[0],this._contextSize[1]=o[1],this.options.direction===u.Direction.X?(this._size[0]=s.call(this),this._size[1]=void 0):(this._size[0]=void 0,this._size[1]=s.call(this)));var r=this._masterOutputFunction(-this._position);return{transform:p.multiply(i,r),size:o,opacity:e,origin:n,target:this.group.render()}},i.exports=e},{"../core/Entity":5,"../core/EventHandler":7,"../core/Group":8,"../core/OptionsManager":10,"../core/Transform":15,"../core/ViewSequence":17,"../utilities/Utility":95}],109:[function(t,i){function e(t){this.options=Object.create(e.DEFAULT_OPTIONS),this._optionsManager=new O(this.options),this._scroller=new T(this.options),this.sync=new b(["scroll","touch"],{direction:this.options.direction,scale:this.options.syncScale,rails:this.options.rails,preventDefault:void 0!==this.options.preventDefault?this.options.preventDefault:this.options.direction!==w.Direction.Y}),this._physicsEngine=new _,this._particle=new y,this._physicsEngine.addBody(this._particle),this.spring=new v({anchor:[0,0,0],period:this.options.edgePeriod,dampingRatio:this.options.edgeDamp}),this.drag=new g({forceFunction:g.FORCE_FUNCTIONS.QUADRATIC,strength:this.options.drag}),this.friction=new g({forceFunction:g.FORCE_FUNCTIONS.LINEAR,strength:this.options.friction}),this._node=null,this._touchCount=0,this._springState=x.NONE,this._onEdge=M.NONE,this._pageSpringPosition=0,this._edgeSpringPosition=0,this._touchVelocity=0,this._earlyEnd=!1,this._needsPaginationCheck=!1,this._displacement=0,this._totalShift=0,this._cachedIndex=0,this._scroller.positionFrom(this.getPosition.bind(this)),this._eventInput=new m,this._eventOutput=new m,this._eventInput.pipe(this.sync),this.sync.pipe(this._eventInput),m.setInputHandler(this,this._eventInput),m.setOutputHandler(this,this._eventOutput),r.call(this),t&&this.setOptions(t)}function n(t){this._touchCount=t.count,void 0===t.count&&(this._touchCount=1),h.call(this),this.setVelocity(0),this._touchVelocity=0,this._earlyEnd=!1}function o(t){var i=-t.velocity,e=-t.delta;if(this._onEdge!==M.NONE&&t.slip&&(0>i&&this._onEdge===M.TOP||i>0&&this._onEdge===M.BOTTOM?this._earlyEnd||(s.call(this,t),this._earlyEnd=!0):this._earlyEnd&&Math.abs(i)>Math.abs(this.getVelocity())&&n.call(this,t)),!this._earlyEnd){if(this._touchVelocity=i,t.slip){var o=this.options.speedLimit;-o>i?i=-o:i>o&&(i=o),this.setVelocity(i);var r=16*o;e>r?e=r:-r>e&&(e=-r)}this.setPosition(this.getPosition()+e),this._displacement+=e,this._springState===x.NONE&&f.call(this)}}function s(t){if(this._touchCount=t.count||0,!this._touchCount){h.call(this),this._onEdge!==M.NONE&&l.call(this,this._edgeSpringPosition,x.EDGE),a.call(this);var i=-t.velocity,e=this.options.speedLimit;t.slip&&(e*=this.options.edgeGrip),-e>i?i=-e:i>e&&(i=e),this.setVelocity(i),this._touchVelocity=0,this._needsPaginationCheck=!0}}function r(){this._eventInput.bindThis(this),this._eventInput.on("start",n),this._eventInput.on("update",o),this._eventInput.on("end",s),this._eventInput.on("resize",function(){this._node._.calculateSize()}.bind(this)),this._scroller.on("onEdge",function(t){this._edgeSpringPosition=t.position,p.call(this,this._scroller.onEdge()),this._eventOutput.emit("onEdge")}.bind(this)),this._scroller.on("offEdge",function(){this.sync.setOptions({scale:this.options.syncScale}),this._onEdge=this._scroller.onEdge(),this._eventOutput.emit("offEdge")}.bind(this)),this._particle.on("update",function(t){this._springState===x.NONE&&f.call(this),this._displacement=t.position.x-this._totalShift}.bind(this)),this._particle.on("end",function(){(!this.options.paginated||this.options.paginated&&this._springState!==x.NONE)&&this._eventOutput.emit("settle")}.bind(this))}function a(){this._springState?this._physicsEngine.attach([this.spring],this._particle):this._physicsEngine.attach([this.drag,this.friction],this._particle)}function h(){this._springState=x.NONE,this._physicsEngine.detachAll()}function c(t){var i=this.options.direction,e=t.getSize();return e?e[i]:this._scroller.getSize()[i]}function p(t){this.sync.setOptions({scale:this.options.edgeGrip}),this._onEdge=t,this._touchCount||this._springState===x.EDGE||l.call(this,this._edgeSpringPosition,x.EDGE),this._springState&&Math.abs(this.getVelocity())<.001&&(h.call(this),a.call(this))}function u(){if(!this._touchCount&&this._springState!==x.EDGE){var t=this.getVelocity();if(!(Math.abs(t)>=this.options.pageStopSpeed)){var i=this.getPosition(),e=Math.abs(t)>this.options.pageSwitchSpeed,n=c.call(this,this._node),o=i>.5*n,s=t>0,r=0>t;this._needsPaginationCheck=!1,o&&!e||e&&s?this.goToNextPage():e&&r?this.goToPreviousPage():l.call(this,0,x.PAGE)}}}function l(t,i){var e;i===x.EDGE?(this._edgeSpringPosition=t,e={anchor:[this._edgeSpringPosition,0,0],period:this.options.edgePeriod,dampingRatio:this.options.edgeDamp}):i===x.PAGE&&(this._pageSpringPosition=t,e={anchor:[this._pageSpringPosition,0,0],period:this.options.pagePeriod,dampingRatio:this.options.pageDamp}),this.spring.setOptions(e),i&&!this._springState&&(h.call(this),this._springState=i,a.call(this)),this._springState=i}function f(){var t=0,i=this.getPosition();i+=(0>i?-.5:.5)>>0;for(var e=c.call(this,this._node),n=this._node.getNext();t+i>=e&&n;)t-=e,this._scroller.sequenceFrom(n),this._node=n,n=this._node.getNext(),e=c.call(this,this._node);for(var o,s=this._node.getPrevious();0>=t+i&&s;)o=c.call(this,s),this._scroller.sequenceFrom(s),this._node=s,t+=o,s=this._node.getPrevious();t&&d.call(this,t),this._node&&(this._node.index!==this._cachedIndex?this.getPosition()<.5*e&&(this._cachedIndex=this._node.index,this._eventOutput.emit("pageChange",{direction:-1,index:this._cachedIndex})):this.getPosition()>.5*e&&(this._cachedIndex=this._node.index+1,this._eventOutput.emit("pageChange",{direction:1,index:this._cachedIndex})))}function d(t){this._edgeSpringPosition+=t,this._pageSpringPosition+=t,this.setPosition(this.getPosition()+t),this._totalShift+=t,this._springState===x.EDGE?this.spring.setOptions({anchor:[this._edgeSpringPosition,0,0]}):this._springState===x.PAGE&&this.spring.setOptions({anchor:[this._pageSpringPosition,0,0]})}var _=t("../physics/PhysicsEngine"),y=t("../physics/bodies/Particle"),g=t("../physics/forces/Drag"),v=t("../physics/forces/Spring"),m=t("../core/EventHandler"),O=t("../core/OptionsManager"),S=t("../core/ViewSequence"),T=t("../views/Scroller"),w=t("../utilities/Utility"),b=t("../inputs/GenericSync"),E=t("../inputs/ScrollSync"),I=t("../inputs/TouchSync");b.register({scroll:E,touch:I});var x={NONE:0,EDGE:1,PAGE:2},M={TOP:-1,NONE:0,BOTTOM:1};e.DEFAULT_OPTIONS={direction:w.Direction.Y,rails:!0,friction:.005,drag:1e-4,edgeGrip:.2,edgePeriod:300,edgeDamp:1,margin:1e3,paginated:!1,pagePeriod:500,pageDamp:.8,pageStopSpeed:10,pageSwitchSpeed:.5,speedLimit:5,groupScroll:!1,syncScale:1},e.prototype.getCurrentIndex=function(){return this._node.index},e.prototype.goToPreviousPage=function(){if(!this._node||this._onEdge===M.TOP)return null;if(this.getPosition()>1&&this._springState===x.NONE)return l.call(this,0,x.PAGE),this._node;var t=this._node.getPrevious();if(t){var i=c.call(this,t);this._scroller.sequenceFrom(t),this._node=t,d.call(this,i),l.call(this,0,x.PAGE)}return t},e.prototype.goToNextPage=function(){if(!this._node||this._onEdge===M.BOTTOM)return null;var t=this._node.getNext();if(t){var i=c.call(this,this._node);this._scroller.sequenceFrom(t),this._node=t,d.call(this,-i),l.call(this,0,x.PAGE)}return t},e.prototype.goToPage=function(t){var i,e=this.getCurrentIndex();if(e>t)for(i=0;e-t>i;i++)this.goToPreviousPage();if(t>e)for(i=0;t-e>i;i++)this.goToNextPage()},e.prototype.outputFrom=function(){return this._scroller.outputFrom.apply(this._scroller,arguments)},e.prototype.getPosition=function(){return this._particle.getPosition1D()},e.prototype.getAbsolutePosition=function(){return this._scroller.getCumulativeSize(this.getCurrentIndex())[this.options.direction]+this.getPosition()},e.prototype.getOffset=e.prototype.getPosition,e.prototype.setPosition=function(t){this._particle.setPosition1D(t)},e.prototype.setOffset=e.prototype.setPosition,e.prototype.getVelocity=function(){return this._touchCount?this._touchVelocity:this._particle.getVelocity1D()},e.prototype.setVelocity=function(t){this._particle.setVelocity1D(t)},e.prototype.setOptions=function(t){void 0!==t.direction&&("x"===t.direction?t.direction=w.Direction.X:"y"===t.direction&&(t.direction=w.Direction.Y)),t.groupScroll!==this.options.groupScroll&&(t.groupScroll?this.subscribe(this._scroller):this.unsubscribe(this._scroller)),this._optionsManager.setOptions(t),this._scroller.setOptions(t),void 0!==t.drag&&this.drag.setOptions({strength:this.options.drag}),void 0!==t.friction&&this.friction.setOptions({strength:this.options.friction}),(void 0!==t.edgePeriod||void 0!==t.edgeDamp)&&this.spring.setOptions({period:this.options.edgePeriod,dampingRatio:this.options.edgeDamp}),(t.rails||void 0!==t.direction||void 0!==t.syncScale||t.preventDefault)&&this.sync.setOptions({rails:this.options.rails,direction:this.options.direction===w.Direction.X?b.DIRECTION_X:b.DIRECTION_Y,scale:this.options.syncScale,preventDefault:this.options.preventDefault})},e.prototype.sequenceFrom=function(t){return t instanceof Array&&(t=new S({array:t,trackSize:!0})),this._node=t,this._scroller.sequenceFrom(t)},e.prototype.getSize=function(){return this._scroller.getSize.apply(this._scroller,arguments)},e.prototype.render=function(){return this.options.paginated&&this._needsPaginationCheck&&u.call(this),this._scroller.render()},i.exports=e},{"../core/EventHandler":7,"../core/OptionsManager":10,"../core/ViewSequence":17,"../inputs/GenericSync":27,"../inputs/ScrollSync":32,"../inputs/TouchSync":33,"../physics/PhysicsEngine":48,"../physics/bodies/Particle":51,"../physics/forces/Drag":63,"../physics/forces/Spring":68,"../utilities/Utility":95,"../views/Scroller":108}],110:[function(t,i){function e(t){this._items=null,this._size=null,this._outputFunction=e.DEFAULT_OUTPUT_FUNCTION,this.options=r.clone(this.constructor.DEFAULT_OPTIONS||e.DEFAULT_OPTIONS),this.optionsManager=new n(this.options),t&&this.setOptions(t)}var n=t("../core/OptionsManager"),o=t("../core/Transform"),s=t("../core/ViewSequence"),r=t("../utilities/Utility");e.DEFAULT_OPTIONS={direction:r.Direction.Y,itemSpacing:0},e.DEFAULT_OUTPUT_FUNCTION=function(t,i){var e=this.options.direction===r.Direction.X?o.translate(i,0):o.translate(0,i);return{transform:e,target:t.render()}},e.prototype.getSize=function(){return this._size||this.render(),this._size},e.prototype.sequenceFrom=function(t){return t instanceof Array&&(t=new s(t)),this._items=t,this},e.prototype.setOptions=function(){return this.optionsManager.setOptions.apply(this.optionsManager,arguments),this},e.prototype.setOutputFunction=function(t){return this._outputFunction=t,this},e.prototype.render=function(){var t=0,i=1^this.options.direction,e=this._items,n=null,o=[],s={},r=[],a=0;for(this._size=[0,0];e&&(n=e.get());)n.getSize&&(o=n.getSize()),s=this._outputFunction.call(this,n,t,a++),r.push(s),o&&(o[this.options.direction]&&(t+=o[this.options.direction]),o[i]>this._size[i]&&(this._size[i]=o[i])),e=e.getNext(),this.options.itemSpacing&&e&&(t+=this.options.itemSpacing);return this._size[this.options.direction]=t,r},i.exports=e},{"../core/OptionsManager":10,"../core/Transform":15,"../core/ViewSequence":17,"../utilities/Utility":95}],111:[function(t,i){i.exports={ContextualView:t("./ContextualView"),Deck:t("./Deck"),EdgeSwapper:t("./EdgeSwapper"),DrawerLayout:t("./DrawerLayout"),FlexibleLayout:t("./FlexibleLayout"),Flipper:t("./Flipper"),GridLayout:t("./GridLayout"),HeaderFooterLayout:t("./HeaderFooterLayout"),Lightbox:t("./Lightbox"),RenderController:t("./RenderController"),ScrollContainer:t("./ScrollContainer"),Scroller:t("./Scroller"),Scrollview:t("./Scrollview"),SequentialLayout:t("./SequentialLayout")}},{"./ContextualView":97,"./Deck":98,"./DrawerLayout":99,"./EdgeSwapper":100,"./FlexibleLayout":101,"./Flipper":102,"./GridLayout":103,"./HeaderFooterLayout":104,"./Lightbox":105,"./RenderController":106,"./ScrollContainer":107,"./Scroller":108,"./Scrollview":109,"./SequentialLayout":110}],112:[function(t,i){function e(){r.apply(this,arguments),this.title=new o({classes:this.options.classes,content:this.options.content}),this.back=new o({size:[this.options.size[1],this.options.size[1]],classes:this.options.classes,content:this.options.backContent}),this.back.on("click",function(){this._eventOutput.emit("back",{})}.bind(this)),this.more=new o({size:[this.options.size[1],this.options.size[1]],classes:this.options.classes,content:this.options.moreContent}),this.more.on("click",function(){this._eventOutput.emit("more",{})}.bind(this)),this.layout=new n({id:"master",size:this.options.size,target:[{transform:s.inFront,origin:[0,.5],target:this.back},{origin:[.5,.5],target:this.title},{transform:s.inFront,origin:[1,.5],target:this.more}]}),this._add(this.layout),this._optionsManager.on("change",function(t){var i=t.id,e=t.value;"size"===i?(this.layout.id.master.setSize(e),this.title.setSize(e),this.back.setSize([e[1],e[1]]),this.more.setSize([e[1],e[1]])):"backClasses"===i?this.back.setOptions({classes:this.options.classes.concat(this.options.backClasses)}):"backContent"===i?this.back.setContent(this.options.backContent):"classes"===i?(this.title.setOptions({classes:this.options.classes}),this.back.setOptions({classes:this.options.classes.concat(this.options.backClasses)}),this.more.setOptions({classes:this.options.classes.concat(this.options.moreClasses)})):"content"===i?this.setContent(this.options.content):"moreClasses"===i?this.more.setOptions({classes:this.options.classes.concat(this.options.moreClasses)}):"moreContent"===i&&this.more.setContent(this.options.content)}.bind(this))}var n=t("../core/Scene"),o=t("../core/Surface"),s=t("../core/Transform"),r=t("../core/View");e.prototype=Object.create(r.prototype),e.prototype.constructor=e,e.DEFAULT_OPTIONS={size:[void 0,50],backClasses:["back"],backContent:"&#x25c0;",classes:["navigation"],content:"",moreClasses:["more"],moreContent:"&#x271a;"},e.prototype.setContent=function(t){return this.title.setContent(t)},i.exports=e},{"../core/Scene":12,"../core/Surface":14,"../core/Transform":15,"../core/View":16}],113:[function(t,i){function e(t){this.options=Object.create(e.DEFAULT_OPTIONS),this.optionsManager=new c(this.options),t&&this.setOptions(t),this.indicator=new s({size:this.options.indicatorSize,classes:["slider-back"]}),this.label=new o({size:this.options.labelSize,content:this.options.label,properties:{pointerEvents:"none"},classes:["slider-label"]}),this.eventOutput=new a,this.eventInput=new a,a.setInputHandler(this,this.eventInput),a.setOutputHandler(this,this.eventOutput);var i=(this.options.range[1]-this.options.range[0])/this.options.indicatorSize[0];this.sync=new l(["mouse","touch"],{scale:i,direction:l.DIRECTION_X}),this.indicator.pipe(this.sync),this.sync.pipe(this),this.eventInput.on("update",function(t){this.set(t.position)}.bind(this)),this._drawPos=0,n.call(this)}function n(){this.label.setContent(this.options.label+'<span style="float: right">'+this.get().toFixed(this.options.precision)+"</span>")}var o=t("../core/Surface"),s=t("../surfaces/CanvasSurface"),r=t("../core/Transform"),a=t("../core/EventHandler"),h=t("../math/Utilities"),c=t("../core/OptionsManager"),p=t("../inputs/MouseSync"),u=t("../inputs/TouchSync"),l=t("../inputs/GenericSync");l.register({mouse:p,touch:u}),e.DEFAULT_OPTIONS={size:[200,60],indicatorSize:[200,30],labelSize:[200,30],range:[0,1],precision:2,value:0,label:"",fillColor:"rgba(170, 170, 170, 1)"},e.prototype.setOptions=function(t){return this.optionsManager.setOptions(t)},e.prototype.get=function(){return this.options.value},e.prototype.set=function(t){t!==this.options.value&&(this.options.value=h.clamp(t,this.options.range),n.call(this),this.eventOutput.emit("change",{value:t}))},e.prototype.getSize=function(){return this.options.size},e.prototype.render=function(){var t=this.options.range,i=Math.floor((this.get()-t[0])/(t[1]-t[0])*this.options.indicatorSize[0]);if(i<this._drawPos)this.indicator.getContext("2d").clearRect(i,0,this._drawPos-i+1,this.options.indicatorSize[1]);else if(i>this._drawPos){var e=this.indicator.getContext("2d");e.fillStyle=this.options.fillColor,e.fillRect(this._drawPos-1,0,i-this._drawPos+1,this.options.indicatorSize[1])}return this._drawPos=i,{size:this.options.size,target:[{origin:[0,0],target:this.indicator.render()},{transform:r.translate(0,0,1),origin:[0,0],target:this.label.render()}]}},i.exports=e},{"../core/EventHandler":7,"../core/OptionsManager":10,"../core/Surface":14,"../core/Transform":15,"../inputs/GenericSync":27,"../inputs/MouseSync":28,"../inputs/TouchSync":33,"../math/Utilities":40,"../surfaces/CanvasSurface":74}],114:[function(t,i){function e(){r.apply(this,arguments),this.layout=new a,this.buttons=[],this._buttonIds={},this._buttonCallbacks={},this.layout.sequenceFrom(this.buttons),this._add(this.layout),this._optionsManager.on("change",n.bind(this))}function n(t){var i=t.id,e=t.value;if("direction"===i)this.layout.setOptions({dimensions:o.call(this.buttons.length,this.options.direction)});else if("buttons"===i)for(var n in this.buttons)this.buttons[n].setOptions(e);else if("sections"===i)for(var s in this.options.sections)this.defineSection(s,this.options.sections[s])}function o(t,i){return i===s.Direction.X?[t,1]:[1,t]}var s=t("../utilities/Utility"),r=t("../core/View"),a=t("../views/GridLayout"),h=t("./ToggleButton");e.prototype=Object.create(r.prototype),e.prototype.constructor=e,e.DEFAULT_OPTIONS={sections:[],widget:h,size:[void 0,50],direction:s.Direction.X,buttons:{toggleMode:h.ON}},e.prototype.defineSection=function(t,i){var e,n=this._buttonIds[t];if(void 0===n){n=this.buttons.length,this._buttonIds[t]=n;var s=this.options.widget;e=new s,this.buttons[n]=e,this.layout.setOptions({dimensions:o(this.buttons.length,this.options.direction)})}else e=this.buttons[n],e.unbind("select",this._buttonCallbacks[t]);this.options.buttons&&e.setOptions(this.options.buttons),e.setOptions(i),this._buttonCallbacks[t]=this.select.bind(this,t),e.on("select",this._buttonCallbacks[t])},e.prototype.select=function(t){var i=this._buttonIds[t];this.buttons[i]&&this.buttons[i].isSelected()?this._eventOutput.emit("select",{id:t}):this.buttons[i]&&this.buttons[i].select();for(var e=0;e<this.buttons.length;e++)e!==i&&this.buttons[e].deselect()},i.exports=e},{"../core/View":16,"../utilities/Utility":95,"../views/GridLayout":103,"./ToggleButton":115}],115:[function(t,i){function e(t){this.options={content:"",offClasses:["off"],onClasses:["on"],size:void 0,outTransition:{curve:"easeInOut",duration:300},inTransition:{curve:"easeInOut",duration:300},toggleMode:e.TOGGLE,crossfade:!0},this._eventOutput=new o,o.setOutputHandler(this,this._eventOutput),this.offSurface=new n,this.offSurface.on("click",function(){this.options.toggleMode!==e.OFF&&this.select()}.bind(this)),this.offSurface.pipe(this._eventOutput),this.onSurface=new n,this.onSurface.on("click",function(){this.options.toggleMode!==e.ON&&this.deselect()}.bind(this)),this.onSurface.pipe(this._eventOutput),this.arbiter=new s({overlap:this.options.crossfade}),this.deselect(),t&&this.setOptions(t)}var n=t("../core/Surface"),o=t("../core/EventHandler"),s=t("../views/RenderController");e.OFF=0,e.ON=1,e.TOGGLE=2,e.prototype.select=function(){this.selected=!0,this.arbiter.show(this.onSurface,this.options.inTransition),this._eventOutput.emit("select")},e.prototype.deselect=function(){this.selected=!1,this.arbiter.show(this.offSurface,this.options.outTransition),this._eventOutput.emit("deselect")},e.prototype.isSelected=function(){return this.selected},e.prototype.setOptions=function(t){void 0!==t.content&&(this.options.content=t.content,this.offSurface.setContent(this.options.content),this.onSurface.setContent(this.options.content)),t.offClasses&&(this.options.offClasses=t.offClasses,this.offSurface.setClasses(this.options.offClasses)),t.onClasses&&(this.options.onClasses=t.onClasses,this.onSurface.setClasses(this.options.onClasses)),void 0!==t.size&&(this.options.size=t.size,this.onSurface.setSize(this.options.size),this.offSurface.setSize(this.options.size)),void 0!==t.toggleMode&&(this.options.toggleMode=t.toggleMode),void 0!==t.outTransition&&(this.options.outTransition=t.outTransition),void 0!==t.inTransition&&(this.options.inTransition=t.inTransition),void 0!==t.crossfade&&(this.options.crossfade=t.crossfade,this.arbiter.setOptions({overlap:this.options.crossfade}))},e.prototype.getSize=function(){return this.options.size},e.prototype.render=function(){return this.arbiter.render()},i.exports=e},{"../core/EventHandler":7,"../core/Surface":14,"../views/RenderController":106}],116:[function(t,i){i.exports={NavigationBar:t("./NavigationBar"),Slider:t("./Slider"),TabBar:t("./TabBar"),ToggleButton:t("./ToggleButton")}},{"./NavigationBar":112,"./Slider":113,"./TabBar":114,"./ToggleButton":115}]},{},[23])(23)});
; browserify_shim__define__module__export__(typeof famous != "undefined" ? famous : window.famous);

}).call(global, undefined, undefined, undefined, undefined, function defineExport(ex) { module.exports = ex; });

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],"/home/codio/workspace/client/scripts/common/controllers/home.js":[function(require,module,exports){
'use strict';
var controllername = 'home';
var ProgressBar = require('progressbar.js');

module.exports = function(app) {
    /*jshint validthis: true */

    var deps = ['$window', '$famous', app.name + '.photos', app.name + '.famousHelper'];

    function controller($window, $famous, photos, famousHelper) {
        var vm = this;
        vm.viewSize = {
            width: $window.innerWidth,
            height: $window.innerHeight
        };
        vm.headerHeight = 200;
        vm.userName = 'John Doe';

        vm.photos = photos.generate(2 * vm.viewSize.width / 3, 2 * vm.viewSize.width / 3, 30, 3);
        vm.photoMain = photos.generate(vm.viewSize.width * 2, vm.headerHeight * 2)[0][0];
        vm.photoProfile = photos.generate(100, 100)[0][0];

        vm.getPhotoStyle = photos.getStyle;

        var EventHandler = $famous['famous/core/EventHandler'];
        vm.eventHandler = new EventHandler();

        var getScrollView = function() {
            vm.scrollview = famousHelper.getRenderNode(vm.scrollview, '#scrollView');
            return vm.scrollview;
        };

        var getMainPhoto = function() {
            vm.mainPhoto = famousHelper.getRenderNode(vm.mainPhoto, '#mainPhoto');
            return vm.mainPhoto;
        };

        vm.getOverpull = function() {
            return -Math.min(0, getScrollView().getAbsolutePosition());
        };

        vm.getToolbarTranslate = function() {
            var pos = getScrollView().getAbsolutePosition();
            return pos > (vm.headerHeight - 60) ? pos - (vm.headerHeight - 60) : 0;
        };

        var Timer = $famous['famous/utilities/Timer'];
        Timer.every(function() {
            var pos = vm.getOverpull();
            if(getMainPhoto()) {
                vm.mainPhoto.setProperties({
                    webkitFilter: getBlur(pos)
                });
                fillCircle(Math.min(1, pos / 250));
            }

        }, 1);

        function getBlur(pos) {
            var blur = pos > 100 ? Math.min(Math.round((pos - 100) / 15), 10) : 0;
            return 'blur(' + blur + 'px)';
        }

        var fillCircle = function(value) {
            if(vm.circle) {
                vm.circle.set(value);
                return;
            }
            vm.circle = new ProgressBar.Circle($window.document.getElementById('circleSvgContainer'), {
                color: '#3498DB',
                strokeWidth: 4,
                fill: '#FFFFFF'
            });
        };
    }

    controller.$inject = deps;
    app.controller(app.name + '.' + controllername, controller);
};
},{"progressbar.js":"/home/codio/workspace/node_modules/progressbar.js/progressbar.js"}],"/home/codio/workspace/client/scripts/common/controllers/index.js":[function(require,module,exports){
'use strict';

module.exports = function(app) {
    // inject:start
    require('./home')(app);
    // inject:end
};
},{"./home":"/home/codio/workspace/client/scripts/common/controllers/home.js"}],"/home/codio/workspace/client/scripts/common/index.js":[function(require,module,exports){
'use strict';
require('angular-ui-router');

require('famous-angular');

var modulename = 'common';

module.exports = function(namespace) {

    var fullname = namespace + '.' + modulename;

    var angular = require('angular');
    var app = angular.module(fullname, ['ui.router', 'famous.angular']);
    // inject:folders start
    require('./controllers')(app);
    require('./services')(app);

    // inject:folders end
    app.config(['$stateProvider', '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/');
            $stateProvider.state('home', {
                url: '/',
                template: require('./views/home.html'),
                controller: fullname + '.home',
                controllerAs: 'vm'
            });
        }
    ]);
    return app;
};
},{"./controllers":"/home/codio/workspace/client/scripts/common/controllers/index.js","./services":"/home/codio/workspace/client/scripts/common/services/index.js","./views/home.html":"/home/codio/workspace/client/scripts/common/views/home.html","angular":"/home/codio/workspace/bower_components/angular/angular.min.js","angular-ui-router":"/home/codio/workspace/bower_components/angular-ui-router/release/angular-ui-router.min.js","famous-angular":"/home/codio/workspace/bower_components/famous-angular/dist/famous-angular.min.js"}],"/home/codio/workspace/client/scripts/common/services/famousHelper.js":[function(require,module,exports){
'use strict';
var servicename = 'famousHelper';

module.exports = function(app) {

    var dependencies = ['$famous'];

    function service($famous) {
        var getRenderNode = function(cacheEl, findSelector) {
            if(!cacheEl) {
                var el = $famous.find(findSelector)[0];
                if(el) {
                    cacheEl = el.renderNode;
                }
            }
            return cacheEl;
        };

        return {
            getRenderNode: getRenderNode
        };

    }
    service.$inject = dependencies;
    app.factory(app.name + '.' + servicename, service);
};
},{}],"/home/codio/workspace/client/scripts/common/services/index.js":[function(require,module,exports){
'use strict';

module.exports = function(app) {
    // inject:start
    require('./famousHelper')(app);
    require('./photos')(app);
    // inject:end
};
},{"./famousHelper":"/home/codio/workspace/client/scripts/common/services/famousHelper.js","./photos":"/home/codio/workspace/client/scripts/common/services/photos.js"}],"/home/codio/workspace/client/scripts/common/services/photos.js":[function(require,module,exports){
'use strict';
var servicename = 'photos';
var _ = require('lodash');
var randomstring = require('randomstring');
module.exports = function(app) {

    var dependencies = [];

    function service() {
        var generate = function(width, height, number, groupOf) {
            number = number || 1;
            groupOf = groupOf || 1;
            var photos = _.chain(_.range(number))
                .map(function(index) {
                    return 'http://lorempixel.com/' + Math.round(width) + '/' + Math.round(height) + '/?i=' + randomstring.generate(7);
                })
                .groupBy(function(value, i) {
                    return Math.floor(i / groupOf);
                })
                .value();

            return photos;
        };

        var getStyle = function(photoUrl) {
            return {
                'background-image': 'url(\'' + photoUrl + '\')',
                'background-size': 'cover',
                'background-repeat': 'no-repeat',
                'background-position': 'center',
                'width': '100%',
                'height': '100%'
            };
        };

        return {
            generate: generate,
            getStyle: getStyle
        };
    }
    service.$inject = dependencies;
    app.factory(app.name + '.' + servicename, service);
};
},{"lodash":"/home/codio/workspace/node_modules/lodash/dist/lodash.js","randomstring":"/home/codio/workspace/node_modules/randomstring/index.js"}],"/home/codio/workspace/client/scripts/common/views/home.html":[function(require,module,exports){
module.exports = '<fa-view>\n' +
    '    <!-- SCROLL VIEW-->\n' +
    '    <fa-scroll-view id="scrollView" fa-options="{direction: 1, edgeGrip:1}" fa-pipe-from="vm.eventHandler">\n' +
    '        <!-- HEADER -->\n' +
    '        <fa-view>\n' +
    '            <fa-modifier fa-size="[undefined, vm.headerHeight]" fa-translate="[0, vm.getToolbarTranslate()]">\n' +
    '                <fa-surface></fa-surface>\n' +
    '                <!-- MAIN PHOTO -->\n' +
    '                <fa-modifier fa-align="[0.5,0]" fa-origin="[0.5,0]" fa-size="[vm.viewSize.width+vm.getOverpull(), vm.headerHeight+15+vm.getOverpull()]" fa-translate="[0, -15-vm.getOverpull()]" fa-opacity="1">\n' +
    '                    <fa-surface class="full-height" fa-z-index="2" fa-pipe-to="vm.eventHandler">\n' +
    '                        <div id="mainPhoto" class="full-height" ng-style="vm.getPhotoStyle(vm.photoMain)"></div>\n' +
    '                    </fa-surface>\n' +
    '                </fa-modifier>\n' +
    '                <!-- PROFILE PICTURE AND TEXT  -->\n' +
    '                <fa-modifier fa-align="[0.5,0.5]" fa-origin="[0.5,0.5]" fa-size="[200,110]" fa-translate="[0,-20-vm.getOverpull()/2]">\n' +
    '                    <!-- PROFILE CIRCLE -->\n' +
    '                    <fa-modifier fa-size="[88,88]" fa-align="[0.5,0]" fa-origin="[0.5,0]" fa-translate="[0, -4]">\n' +
    '                        <fa-surface class="circle full-height" fa-z-index="4" fa-pipe-to="vm.eventHandler">\n' +
    '                            <div id="circleSvgContainer"></div>\n' +
    '                        </fa-surface>\n' +
    '                    </fa-modifier>\n' +
    '                    <fa-modifier fa-size="[80,80]" fa-align="[0.5,0]" fa-origin="[0.5,0]">\n' +
    '                        <fa-surface class="full-height" fa-z-index="4" fa-pipe-to="vm.eventHandler">\n' +
    '                            <div class="circle full-height" ng-style="vm.getPhotoStyle(vm.photoProfile)">\n' +
    '                            </div>\n' +
    '                        </fa-surface>\n' +
    '                    </fa-modifier>\n' +
    '                    <fa-modifier fa-size="[undefined,20]" fa-align="[0.5,1]" fa-origin="[0.5,1]">\n' +
    '                        <fa-surface class="white text-center text-small full-height" fa-z-index="4" fa-pipe-to="vm.eventHandler">\n' +
    '                            <div>{{vm.userName}}</div>\n' +
    '                        </fa-surface>\n' +
    '                    </fa-modifier>\n' +
    '                </fa-modifier>\n' +
    '                <!-- HEADER TOOLBAR -->\n' +
    '                <fa-modifier fa-size="[undefined, 40]" fa-align="[0,1]" fa-origin="[0,1]" fa-translate=[0,0,10]>\n' +
    '                    <fa-modifier fa-opacity="0.6">\n' +
    '                        <fa-surface fa-background-color="\'black\'"></fa-surface>\n' +
    '                    </fa-modifier>\n' +
    '                    <fa-grid-layout fa-options="{dimensions: [3,1]}">\n' +
    '                        <fa-surface>\n' +
    '                            <div class="text-center-40">Photo</div>\n' +
    '                        </fa-surface>\n' +
    '                        <fa-surface>\n' +
    '                            <div class="text-center-40 border-bottom">Albums</div>\n' +
    '                        </fa-surface>\n' +
    '                        <fa-surface>\n' +
    '                            <div class="text-center-40">Groups</div>\n' +
    '                        </fa-surface>\n' +
    '                    </fa-grid-layout>\n' +
    '                </fa-modifier>\n' +
    '            </fa-modifier>\n' +
    '        </fa-view>\n' +
    '        <!-- IMAGES GRID-->\n' +
    '        <fa-view ng-repeat="row in vm.photos track by $index" fa-size="[undefined, vm.viewSize.width/3]" fa-index="$index">\n' +
    '            <fa-modifier>\n' +
    '                <fa-grid-layout fa-options="{dimensions :[3,1]}">\n' +
    '                    <fa-modifier ng-repeat="photo in row" fa-size="[vm.viewSize.width/3, vm.viewSize.width/3]">\n' +
    '                        <fa-surface fa-pipe-to="vm.eventHandler" fa-background-color="\'black\'" class="full-height">\n' +
    '                            <div class="full-height photo{{$index}}">\n' +
    '                                <div class="full-height" ng-style="vm.getPhotoStyle(photo)"></div>\n' +
    '                            </div>\n' +
    '                        </fa-surface>\n' +
    '                    </fa-modifier>\n' +
    '                </fa-grid-layout>\n' +
    '            </fa-modifier>\n' +
    '        </fa-view>\n' +
    '    </fa-scroll-view>\n' +
    '    <!-- FOOTER BAR-->\n' +
    '    <fa-modifier fa-size="[undefined, 40]" fa-align="[0,1]" fa-origin="[0,1]">\n' +
    '        <fa-modifier fa-opacity="0.6">\n' +
    '            <fa-surface fa-background-color="\'black\'"></fa-surface>\n' +
    '        </fa-modifier>\n' +
    '        <!-- FOOTER BAR BUTTONS -->\n' +
    '        <fa-grid-layout fa-options="{dimensions: [3,1]}">\n' +
    '            <fa-surface>\n' +
    '                <div class="text-center-40">\n' +
    '                    <i class="fa fa-photo"></i>\n' +
    '                </div>\n' +
    '            </fa-surface>\n' +
    '            <fa-surface>\n' +
    '                <div class="text-center-50">\n' +
    '                    <i class="fa fa-camera fa-2x"></i>\n' +
    '                </div>\n' +
    '            </fa-surface>\n' +
    '            <fa-surface>\n' +
    '                <div class="text-center-40">\n' +
    '                    <i class="fa fa-user"></i>\n' +
    '                </div>\n' +
    '            </fa-surface>\n' +
    '        </fa-grid-layout>\n' +
    '\n' +
    '    </fa-modifier>\n' +
    '</fa-view>';
},{}],"/home/codio/workspace/node_modules/famous-polyfills/classList.js":[function(require,module,exports){

/*
 * classList.js: Cross-browser full element.classList implementation.
 * 2011-06-15
 *
 * By Eli Grey, http://eligrey.com
 * Public Domain.
 * NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.
 */

/*global self, document, DOMException */

/*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js*/

if (typeof document !== "undefined" && !("classList" in document.createElement("a"))) {

(function (view) {

"use strict";

var
      classListProp = "classList"
    , protoProp = "prototype"
    , elemCtrProto = (view.HTMLElement || view.Element)[protoProp]
    , objCtr = Object
    , strTrim = String[protoProp].trim || function () {
        return this.replace(/^\s+|\s+$/g, "");
    }
    , arrIndexOf = Array[protoProp].indexOf || function (item) {
        var
              i = 0
            , len = this.length
        ;
        for (; i < len; i++) {
            if (i in this && this[i] === item) {
                return i;
            }
        }
        return -1;
    }
    // Vendors: please allow content code to instantiate DOMExceptions
    , DOMEx = function (type, message) {
        this.name = type;
        this.code = DOMException[type];
        this.message = message;
    }
    , checkTokenAndGetIndex = function (classList, token) {
        if (token === "") {
            throw new DOMEx(
                  "SYNTAX_ERR"
                , "An invalid or illegal string was specified"
            );
        }
        if (/\s/.test(token)) {
            throw new DOMEx(
                  "INVALID_CHARACTER_ERR"
                , "String contains an invalid character"
            );
        }
        return arrIndexOf.call(classList, token);
    }
    , ClassList = function (elem) {
        var
              trimmedClasses = strTrim.call(elem.className)
            , classes = trimmedClasses ? trimmedClasses.split(/\s+/) : []
            , i = 0
            , len = classes.length
        ;
        for (; i < len; i++) {
            this.push(classes[i]);
        }
        this._updateClassName = function () {
            elem.className = this.toString();
        };
    }
    , classListProto = ClassList[protoProp] = []
    , classListGetter = function () {
        return new ClassList(this);
    }
;
// Most DOMException implementations don't allow calling DOMException's toString()
// on non-DOMExceptions. Error's toString() is sufficient here.
DOMEx[protoProp] = Error[protoProp];
classListProto.item = function (i) {
    return this[i] || null;
};
classListProto.contains = function (token) {
    token += "";
    return checkTokenAndGetIndex(this, token) !== -1;
};
classListProto.add = function (token) {
    token += "";
    if (checkTokenAndGetIndex(this, token) === -1) {
        this.push(token);
        this._updateClassName();
    }
};
classListProto.remove = function (token) {
    token += "";
    var index = checkTokenAndGetIndex(this, token);
    if (index !== -1) {
        this.splice(index, 1);
        this._updateClassName();
    }
};
classListProto.toggle = function (token) {
    token += "";
    if (checkTokenAndGetIndex(this, token) === -1) {
        this.add(token);
    } else {
        this.remove(token);
    }
};
classListProto.toString = function () {
    return this.join(" ");
};

if (objCtr.defineProperty) {
    var classListPropDesc = {
          get: classListGetter
        , enumerable: true
        , configurable: true
    };
    try {
        objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
    } catch (ex) { // IE 8 doesn't support enumerable:true
        if (ex.number === -0x7FF5EC54) {
            classListPropDesc.enumerable = false;
            objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
        }
    }
} else if (objCtr[protoProp].__defineGetter__) {
    elemCtrProto.__defineGetter__(classListProp, classListGetter);
}

}(self));

}

},{}],"/home/codio/workspace/node_modules/famous-polyfills/functionPrototypeBind.js":[function(require,module,exports){
if (!Function.prototype.bind) {
    Function.prototype.bind = function (oThis) {
        if (typeof this !== "function") {
            // closest thing possible to the ECMAScript 5 internal IsCallable function
            throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
        }

        var aArgs = Array.prototype.slice.call(arguments, 1),
        fToBind = this,
        fNOP = function () {},
        fBound = function () {
            return fToBind.apply(this instanceof fNOP && oThis
                ? this
                : oThis,
                aArgs.concat(Array.prototype.slice.call(arguments)));
        };

        fNOP.prototype = this.prototype;
        fBound.prototype = new fNOP();

        return fBound;
    };
}

},{}],"/home/codio/workspace/node_modules/famous-polyfills/index.js":[function(require,module,exports){
require('./classList.js');
require('./functionPrototypeBind.js');
require('./requestAnimationFrame.js');
},{"./classList.js":"/home/codio/workspace/node_modules/famous-polyfills/classList.js","./functionPrototypeBind.js":"/home/codio/workspace/node_modules/famous-polyfills/functionPrototypeBind.js","./requestAnimationFrame.js":"/home/codio/workspace/node_modules/famous-polyfills/requestAnimationFrame.js"}],"/home/codio/workspace/node_modules/famous-polyfills/requestAnimationFrame.js":[function(require,module,exports){
// adds requestAnimationFrame functionality
// Source: http://strd6.com/2011/05/better-window-requestanimationframe-shim/

window.requestAnimationFrame || (window.requestAnimationFrame =
  window.webkitRequestAnimationFrame ||
  window.mozRequestAnimationFrame    ||
  window.oRequestAnimationFrame      ||
  window.msRequestAnimationFrame     ||
  function(callback, element) {
    return window.setTimeout(function() {
      callback(+new Date());
  }, 1000 / 60);
});

},{}],"/home/codio/workspace/node_modules/lodash/dist/lodash.js":[function(require,module,exports){
(function (global){
/**
 * @license
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modern -o ./dist/lodash.js`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
;(function() {

  /** Used as a safe reference for `undefined` in pre ES5 environments */
  var undefined;

  /** Used to pool arrays and objects used internally */
  var arrayPool = [],
      objectPool = [];

  /** Used to generate unique IDs */
  var idCounter = 0;

  /** Used to prefix keys to avoid issues with `__proto__` and properties on `Object.prototype` */
  var keyPrefix = +new Date + '';

  /** Used as the size when optimizations are enabled for large arrays */
  var largeArraySize = 75;

  /** Used as the max size of the `arrayPool` and `objectPool` */
  var maxPoolSize = 40;

  /** Used to detect and test whitespace */
  var whitespace = (
    // whitespace
    ' \t\x0B\f\xA0\ufeff' +

    // line terminators
    '\n\r\u2028\u2029' +

    // unicode category "Zs" space separators
    '\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000'
  );

  /** Used to match empty string literals in compiled template source */
  var reEmptyStringLeading = /\b__p \+= '';/g,
      reEmptyStringMiddle = /\b(__p \+=) '' \+/g,
      reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;

  /**
   * Used to match ES6 template delimiters
   * http://people.mozilla.org/~jorendorff/es6-draft.html#sec-literals-string-literals
   */
  var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;

  /** Used to match regexp flags from their coerced string values */
  var reFlags = /\w*$/;

  /** Used to detected named functions */
  var reFuncName = /^\s*function[ \n\r\t]+\w/;

  /** Used to match "interpolate" template delimiters */
  var reInterpolate = /<%=([\s\S]+?)%>/g;

  /** Used to match leading whitespace and zeros to be removed */
  var reLeadingSpacesAndZeros = RegExp('^[' + whitespace + ']*0+(?=.$)');

  /** Used to ensure capturing order of template delimiters */
  var reNoMatch = /($^)/;

  /** Used to detect functions containing a `this` reference */
  var reThis = /\bthis\b/;

  /** Used to match unescaped characters in compiled string literals */
  var reUnescapedString = /['\n\r\t\u2028\u2029\\]/g;

  /** Used to assign default `context` object properties */
  var contextProps = [
    'Array', 'Boolean', 'Date', 'Function', 'Math', 'Number', 'Object',
    'RegExp', 'String', '_', 'attachEvent', 'clearTimeout', 'isFinite', 'isNaN',
    'parseInt', 'setTimeout'
  ];

  /** Used to make template sourceURLs easier to identify */
  var templateCounter = 0;

  /** `Object#toString` result shortcuts */
  var argsClass = '[object Arguments]',
      arrayClass = '[object Array]',
      boolClass = '[object Boolean]',
      dateClass = '[object Date]',
      funcClass = '[object Function]',
      numberClass = '[object Number]',
      objectClass = '[object Object]',
      regexpClass = '[object RegExp]',
      stringClass = '[object String]';

  /** Used to identify object classifications that `_.clone` supports */
  var cloneableClasses = {};
  cloneableClasses[funcClass] = false;
  cloneableClasses[argsClass] = cloneableClasses[arrayClass] =
  cloneableClasses[boolClass] = cloneableClasses[dateClass] =
  cloneableClasses[numberClass] = cloneableClasses[objectClass] =
  cloneableClasses[regexpClass] = cloneableClasses[stringClass] = true;

  /** Used as an internal `_.debounce` options object */
  var debounceOptions = {
    'leading': false,
    'maxWait': 0,
    'trailing': false
  };

  /** Used as the property descriptor for `__bindData__` */
  var descriptor = {
    'configurable': false,
    'enumerable': false,
    'value': null,
    'writable': false
  };

  /** Used to determine if values are of the language type Object */
  var objectTypes = {
    'boolean': false,
    'function': true,
    'object': true,
    'number': false,
    'string': false,
    'undefined': false
  };

  /** Used to escape characters for inclusion in compiled string literals */
  var stringEscapes = {
    '\\': '\\',
    "'": "'",
    '\n': 'n',
    '\r': 'r',
    '\t': 't',
    '\u2028': 'u2028',
    '\u2029': 'u2029'
  };

  /** Used as a reference to the global object */
  var root = (objectTypes[typeof window] && window) || this;

  /** Detect free variable `exports` */
  var freeExports = objectTypes[typeof exports] && exports && !exports.nodeType && exports;

  /** Detect free variable `module` */
  var freeModule = objectTypes[typeof module] && module && !module.nodeType && module;

  /** Detect the popular CommonJS extension `module.exports` */
  var moduleExports = freeModule && freeModule.exports === freeExports && freeExports;

  /** Detect free variable `global` from Node.js or Browserified code and use it as `root` */
  var freeGlobal = objectTypes[typeof global] && global;
  if (freeGlobal && (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal)) {
    root = freeGlobal;
  }

  /*--------------------------------------------------------------------------*/

  /**
   * The base implementation of `_.indexOf` without support for binary searches
   * or `fromIndex` constraints.
   *
   * @private
   * @param {Array} array The array to search.
   * @param {*} value The value to search for.
   * @param {number} [fromIndex=0] The index to search from.
   * @returns {number} Returns the index of the matched value or `-1`.
   */
  function baseIndexOf(array, value, fromIndex) {
    var index = (fromIndex || 0) - 1,
        length = array ? array.length : 0;

    while (++index < length) {
      if (array[index] === value) {
        return index;
      }
    }
    return -1;
  }

  /**
   * An implementation of `_.contains` for cache objects that mimics the return
   * signature of `_.indexOf` by returning `0` if the value is found, else `-1`.
   *
   * @private
   * @param {Object} cache The cache object to inspect.
   * @param {*} value The value to search for.
   * @returns {number} Returns `0` if `value` is found, else `-1`.
   */
  function cacheIndexOf(cache, value) {
    var type = typeof value;
    cache = cache.cache;

    if (type == 'boolean' || value == null) {
      return cache[value] ? 0 : -1;
    }
    if (type != 'number' && type != 'string') {
      type = 'object';
    }
    var key = type == 'number' ? value : keyPrefix + value;
    cache = (cache = cache[type]) && cache[key];

    return type == 'object'
      ? (cache && baseIndexOf(cache, value) > -1 ? 0 : -1)
      : (cache ? 0 : -1);
  }

  /**
   * Adds a given value to the corresponding cache object.
   *
   * @private
   * @param {*} value The value to add to the cache.
   */
  function cachePush(value) {
    var cache = this.cache,
        type = typeof value;

    if (type == 'boolean' || value == null) {
      cache[value] = true;
    } else {
      if (type != 'number' && type != 'string') {
        type = 'object';
      }
      var key = type == 'number' ? value : keyPrefix + value,
          typeCache = cache[type] || (cache[type] = {});

      if (type == 'object') {
        (typeCache[key] || (typeCache[key] = [])).push(value);
      } else {
        typeCache[key] = true;
      }
    }
  }

  /**
   * Used by `_.max` and `_.min` as the default callback when a given
   * collection is a string value.
   *
   * @private
   * @param {string} value The character to inspect.
   * @returns {number} Returns the code unit of given character.
   */
  function charAtCallback(value) {
    return value.charCodeAt(0);
  }

  /**
   * Used by `sortBy` to compare transformed `collection` elements, stable sorting
   * them in ascending order.
   *
   * @private
   * @param {Object} a The object to compare to `b`.
   * @param {Object} b The object to compare to `a`.
   * @returns {number} Returns the sort order indicator of `1` or `-1`.
   */
  function compareAscending(a, b) {
    var ac = a.criteria,
        bc = b.criteria,
        index = -1,
        length = ac.length;

    while (++index < length) {
      var value = ac[index],
          other = bc[index];

      if (value !== other) {
        if (value > other || typeof value == 'undefined') {
          return 1;
        }
        if (value < other || typeof other == 'undefined') {
          return -1;
        }
      }
    }
    // Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
    // that causes it, under certain circumstances, to return the same value for
    // `a` and `b`. See https://github.com/jashkenas/underscore/pull/1247
    //
    // This also ensures a stable sort in V8 and other engines.
    // See http://code.google.com/p/v8/issues/detail?id=90
    return a.index - b.index;
  }

  /**
   * Creates a cache object to optimize linear searches of large arrays.
   *
   * @private
   * @param {Array} [array=[]] The array to search.
   * @returns {null|Object} Returns the cache object or `null` if caching should not be used.
   */
  function createCache(array) {
    var index = -1,
        length = array.length,
        first = array[0],
        mid = array[(length / 2) | 0],
        last = array[length - 1];

    if (first && typeof first == 'object' &&
        mid && typeof mid == 'object' && last && typeof last == 'object') {
      return false;
    }
    var cache = getObject();
    cache['false'] = cache['null'] = cache['true'] = cache['undefined'] = false;

    var result = getObject();
    result.array = array;
    result.cache = cache;
    result.push = cachePush;

    while (++index < length) {
      result.push(array[index]);
    }
    return result;
  }

  /**
   * Used by `template` to escape characters for inclusion in compiled
   * string literals.
   *
   * @private
   * @param {string} match The matched character to escape.
   * @returns {string} Returns the escaped character.
   */
  function escapeStringChar(match) {
    return '\\' + stringEscapes[match];
  }

  /**
   * Gets an array from the array pool or creates a new one if the pool is empty.
   *
   * @private
   * @returns {Array} The array from the pool.
   */
  function getArray() {
    return arrayPool.pop() || [];
  }

  /**
   * Gets an object from the object pool or creates a new one if the pool is empty.
   *
   * @private
   * @returns {Object} The object from the pool.
   */
  function getObject() {
    return objectPool.pop() || {
      'array': null,
      'cache': null,
      'criteria': null,
      'false': false,
      'index': 0,
      'null': false,
      'number': null,
      'object': null,
      'push': null,
      'string': null,
      'true': false,
      'undefined': false,
      'value': null
    };
  }

  /**
   * Releases the given array back to the array pool.
   *
   * @private
   * @param {Array} [array] The array to release.
   */
  function releaseArray(array) {
    array.length = 0;
    if (arrayPool.length < maxPoolSize) {
      arrayPool.push(array);
    }
  }

  /**
   * Releases the given object back to the object pool.
   *
   * @private
   * @param {Object} [object] The object to release.
   */
  function releaseObject(object) {
    var cache = object.cache;
    if (cache) {
      releaseObject(cache);
    }
    object.array = object.cache = object.criteria = object.object = object.number = object.string = object.value = null;
    if (objectPool.length < maxPoolSize) {
      objectPool.push(object);
    }
  }

  /**
   * Slices the `collection` from the `start` index up to, but not including,
   * the `end` index.
   *
   * Note: This function is used instead of `Array#slice` to support node lists
   * in IE < 9 and to ensure dense arrays are returned.
   *
   * @private
   * @param {Array|Object|string} collection The collection to slice.
   * @param {number} start The start index.
   * @param {number} end The end index.
   * @returns {Array} Returns the new array.
   */
  function slice(array, start, end) {
    start || (start = 0);
    if (typeof end == 'undefined') {
      end = array ? array.length : 0;
    }
    var index = -1,
        length = end - start || 0,
        result = Array(length < 0 ? 0 : length);

    while (++index < length) {
      result[index] = array[start + index];
    }
    return result;
  }

  /*--------------------------------------------------------------------------*/

  /**
   * Create a new `lodash` function using the given context object.
   *
   * @static
   * @memberOf _
   * @category Utilities
   * @param {Object} [context=root] The context object.
   * @returns {Function} Returns the `lodash` function.
   */
  function runInContext(context) {
    // Avoid issues with some ES3 environments that attempt to use values, named
    // after built-in constructors like `Object`, for the creation of literals.
    // ES5 clears this up by stating that literals must use built-in constructors.
    // See http://es5.github.io/#x11.1.5.
    context = context ? _.defaults(root.Object(), context, _.pick(root, contextProps)) : root;

    /** Native constructor references */
    var Array = context.Array,
        Boolean = context.Boolean,
        Date = context.Date,
        Function = context.Function,
        Math = context.Math,
        Number = context.Number,
        Object = context.Object,
        RegExp = context.RegExp,
        String = context.String,
        TypeError = context.TypeError;

    /**
     * Used for `Array` method references.
     *
     * Normally `Array.prototype` would suffice, however, using an array literal
     * avoids issues in Narwhal.
     */
    var arrayRef = [];

    /** Used for native method references */
    var objectProto = Object.prototype;

    /** Used to restore the original `_` reference in `noConflict` */
    var oldDash = context._;

    /** Used to resolve the internal [[Class]] of values */
    var toString = objectProto.toString;

    /** Used to detect if a method is native */
    var reNative = RegExp('^' +
      String(toString)
        .replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
        .replace(/toString| for [^\]]+/g, '.*?') + '$'
    );

    /** Native method shortcuts */
    var ceil = Math.ceil,
        clearTimeout = context.clearTimeout,
        floor = Math.floor,
        fnToString = Function.prototype.toString,
        getPrototypeOf = isNative(getPrototypeOf = Object.getPrototypeOf) && getPrototypeOf,
        hasOwnProperty = objectProto.hasOwnProperty,
        push = arrayRef.push,
        setTimeout = context.setTimeout,
        splice = arrayRef.splice,
        unshift = arrayRef.unshift;

    /** Used to set meta data on functions */
    var defineProperty = (function() {
      // IE 8 only accepts DOM elements
      try {
        var o = {},
            func = isNative(func = Object.defineProperty) && func,
            result = func(o, o, o) && func;
      } catch(e) { }
      return result;
    }());

    /* Native method shortcuts for methods with the same name as other `lodash` methods */
    var nativeCreate = isNative(nativeCreate = Object.create) && nativeCreate,
        nativeIsArray = isNative(nativeIsArray = Array.isArray) && nativeIsArray,
        nativeIsFinite = context.isFinite,
        nativeIsNaN = context.isNaN,
        nativeKeys = isNative(nativeKeys = Object.keys) && nativeKeys,
        nativeMax = Math.max,
        nativeMin = Math.min,
        nativeParseInt = context.parseInt,
        nativeRandom = Math.random;

    /** Used to lookup a built-in constructor by [[Class]] */
    var ctorByClass = {};
    ctorByClass[arrayClass] = Array;
    ctorByClass[boolClass] = Boolean;
    ctorByClass[dateClass] = Date;
    ctorByClass[funcClass] = Function;
    ctorByClass[objectClass] = Object;
    ctorByClass[numberClass] = Number;
    ctorByClass[regexpClass] = RegExp;
    ctorByClass[stringClass] = String;

    /*--------------------------------------------------------------------------*/

    /**
     * Creates a `lodash` object which wraps the given value to enable intuitive
     * method chaining.
     *
     * In addition to Lo-Dash methods, wrappers also have the following `Array` methods:
     * `concat`, `join`, `pop`, `push`, `reverse`, `shift`, `slice`, `sort`, `splice`,
     * and `unshift`
     *
     * Chaining is supported in custom builds as long as the `value` method is
     * implicitly or explicitly included in the build.
     *
     * The chainable wrapper functions are:
     * `after`, `assign`, `bind`, `bindAll`, `bindKey`, `chain`, `compact`,
     * `compose`, `concat`, `countBy`, `create`, `createCallback`, `curry`,
     * `debounce`, `defaults`, `defer`, `delay`, `difference`, `filter`, `flatten`,
     * `forEach`, `forEachRight`, `forIn`, `forInRight`, `forOwn`, `forOwnRight`,
     * `functions`, `groupBy`, `indexBy`, `initial`, `intersection`, `invert`,
     * `invoke`, `keys`, `map`, `max`, `memoize`, `merge`, `min`, `object`, `omit`,
     * `once`, `pairs`, `partial`, `partialRight`, `pick`, `pluck`, `pull`, `push`,
     * `range`, `reject`, `remove`, `rest`, `reverse`, `shuffle`, `slice`, `sort`,
     * `sortBy`, `splice`, `tap`, `throttle`, `times`, `toArray`, `transform`,
     * `union`, `uniq`, `unshift`, `unzip`, `values`, `where`, `without`, `wrap`,
     * and `zip`
     *
     * The non-chainable wrapper functions are:
     * `clone`, `cloneDeep`, `contains`, `escape`, `every`, `find`, `findIndex`,
     * `findKey`, `findLast`, `findLastIndex`, `findLastKey`, `has`, `identity`,
     * `indexOf`, `isArguments`, `isArray`, `isBoolean`, `isDate`, `isElement`,
     * `isEmpty`, `isEqual`, `isFinite`, `isFunction`, `isNaN`, `isNull`, `isNumber`,
     * `isObject`, `isPlainObject`, `isRegExp`, `isString`, `isUndefined`, `join`,
     * `lastIndexOf`, `mixin`, `noConflict`, `parseInt`, `pop`, `random`, `reduce`,
     * `reduceRight`, `result`, `shift`, `size`, `some`, `sortedIndex`, `runInContext`,
     * `template`, `unescape`, `uniqueId`, and `value`
     *
     * The wrapper functions `first` and `last` return wrapped values when `n` is
     * provided, otherwise they return unwrapped values.
     *
     * Explicit chaining can be enabled by using the `_.chain` method.
     *
     * @name _
     * @constructor
     * @category Chaining
     * @param {*} value The value to wrap in a `lodash` instance.
     * @returns {Object} Returns a `lodash` instance.
     * @example
     *
     * var wrapped = _([1, 2, 3]);
     *
     * // returns an unwrapped value
     * wrapped.reduce(function(sum, num) {
     *   return sum + num;
     * });
     * // => 6
     *
     * // returns a wrapped value
     * var squares = wrapped.map(function(num) {
     *   return num * num;
     * });
     *
     * _.isArray(squares);
     * // => false
     *
     * _.isArray(squares.value());
     * // => true
     */
    function lodash(value) {
      // don't wrap if already wrapped, even if wrapped by a different `lodash` constructor
      return (value && typeof value == 'object' && !isArray(value) && hasOwnProperty.call(value, '__wrapped__'))
       ? value
       : new lodashWrapper(value);
    }

    /**
     * A fast path for creating `lodash` wrapper objects.
     *
     * @private
     * @param {*} value The value to wrap in a `lodash` instance.
     * @param {boolean} chainAll A flag to enable chaining for all methods
     * @returns {Object} Returns a `lodash` instance.
     */
    function lodashWrapper(value, chainAll) {
      this.__chain__ = !!chainAll;
      this.__wrapped__ = value;
    }
    // ensure `new lodashWrapper` is an instance of `lodash`
    lodashWrapper.prototype = lodash.prototype;

    /**
     * An object used to flag environments features.
     *
     * @static
     * @memberOf _
     * @type Object
     */
    var support = lodash.support = {};

    /**
     * Detect if functions can be decompiled by `Function#toString`
     * (all but PS3 and older Opera mobile browsers & avoided in Windows 8 apps).
     *
     * @memberOf _.support
     * @type boolean
     */
    support.funcDecomp = !isNative(context.WinRTError) && reThis.test(runInContext);

    /**
     * Detect if `Function#name` is supported (all but IE).
     *
     * @memberOf _.support
     * @type boolean
     */
    support.funcNames = typeof Function.name == 'string';

    /**
     * By default, the template delimiters used by Lo-Dash are similar to those in
     * embedded Ruby (ERB). Change the following template settings to use alternative
     * delimiters.
     *
     * @static
     * @memberOf _
     * @type Object
     */
    lodash.templateSettings = {

      /**
       * Used to detect `data` property values to be HTML-escaped.
       *
       * @memberOf _.templateSettings
       * @type RegExp
       */
      'escape': /<%-([\s\S]+?)%>/g,

      /**
       * Used to detect code to be evaluated.
       *
       * @memberOf _.templateSettings
       * @type RegExp
       */
      'evaluate': /<%([\s\S]+?)%>/g,

      /**
       * Used to detect `data` property values to inject.
       *
       * @memberOf _.templateSettings
       * @type RegExp
       */
      'interpolate': reInterpolate,

      /**
       * Used to reference the data object in the template text.
       *
       * @memberOf _.templateSettings
       * @type string
       */
      'variable': '',

      /**
       * Used to import variables into the compiled template.
       *
       * @memberOf _.templateSettings
       * @type Object
       */
      'imports': {

        /**
         * A reference to the `lodash` function.
         *
         * @memberOf _.templateSettings.imports
         * @type Function
         */
        '_': lodash
      }
    };

    /*--------------------------------------------------------------------------*/

    /**
     * The base implementation of `_.bind` that creates the bound function and
     * sets its meta data.
     *
     * @private
     * @param {Array} bindData The bind data array.
     * @returns {Function} Returns the new bound function.
     */
    function baseBind(bindData) {
      var func = bindData[0],
          partialArgs = bindData[2],
          thisArg = bindData[4];

      function bound() {
        // `Function#bind` spec
        // http://es5.github.io/#x15.3.4.5
        if (partialArgs) {
          // avoid `arguments` object deoptimizations by using `slice` instead
          // of `Array.prototype.slice.call` and not assigning `arguments` to a
          // variable as a ternary expression
          var args = slice(partialArgs);
          push.apply(args, arguments);
        }
        // mimic the constructor's `return` behavior
        // http://es5.github.io/#x13.2.2
        if (this instanceof bound) {
          // ensure `new bound` is an instance of `func`
          var thisBinding = baseCreate(func.prototype),
              result = func.apply(thisBinding, args || arguments);
          return isObject(result) ? result : thisBinding;
        }
        return func.apply(thisArg, args || arguments);
      }
      setBindData(bound, bindData);
      return bound;
    }

    /**
     * The base implementation of `_.clone` without argument juggling or support
     * for `thisArg` binding.
     *
     * @private
     * @param {*} value The value to clone.
     * @param {boolean} [isDeep=false] Specify a deep clone.
     * @param {Function} [callback] The function to customize cloning values.
     * @param {Array} [stackA=[]] Tracks traversed source objects.
     * @param {Array} [stackB=[]] Associates clones with source counterparts.
     * @returns {*} Returns the cloned value.
     */
    function baseClone(value, isDeep, callback, stackA, stackB) {
      if (callback) {
        var result = callback(value);
        if (typeof result != 'undefined') {
          return result;
        }
      }
      // inspect [[Class]]
      var isObj = isObject(value);
      if (isObj) {
        var className = toString.call(value);
        if (!cloneableClasses[className]) {
          return value;
        }
        var ctor = ctorByClass[className];
        switch (className) {
          case boolClass:
          case dateClass:
            return new ctor(+value);

          case numberClass:
          case stringClass:
            return new ctor(value);

          case regexpClass:
            result = ctor(value.source, reFlags.exec(value));
            result.lastIndex = value.lastIndex;
            return result;
        }
      } else {
        return value;
      }
      var isArr = isArray(value);
      if (isDeep) {
        // check for circular references and return corresponding clone
        var initedStack = !stackA;
        stackA || (stackA = getArray());
        stackB || (stackB = getArray());

        var length = stackA.length;
        while (length--) {
          if (stackA[length] == value) {
            return stackB[length];
          }
        }
        result = isArr ? ctor(value.length) : {};
      }
      else {
        result = isArr ? slice(value) : assign({}, value);
      }
      // add array properties assigned by `RegExp#exec`
      if (isArr) {
        if (hasOwnProperty.call(value, 'index')) {
          result.index = value.index;
        }
        if (hasOwnProperty.call(value, 'input')) {
          result.input = value.input;
        }
      }
      // exit for shallow clone
      if (!isDeep) {
        return result;
      }
      // add the source value to the stack of traversed objects
      // and associate it with its clone
      stackA.push(value);
      stackB.push(result);

      // recursively populate clone (susceptible to call stack limits)
      (isArr ? forEach : forOwn)(value, function(objValue, key) {
        result[key] = baseClone(objValue, isDeep, callback, stackA, stackB);
      });

      if (initedStack) {
        releaseArray(stackA);
        releaseArray(stackB);
      }
      return result;
    }

    /**
     * The base implementation of `_.create` without support for assigning
     * properties to the created object.
     *
     * @private
     * @param {Object} prototype The object to inherit from.
     * @returns {Object} Returns the new object.
     */
    function baseCreate(prototype, properties) {
      return isObject(prototype) ? nativeCreate(prototype) : {};
    }
    // fallback for browsers without `Object.create`
    if (!nativeCreate) {
      baseCreate = (function() {
        function Object() {}
        return function(prototype) {
          if (isObject(prototype)) {
            Object.prototype = prototype;
            var result = new Object;
            Object.prototype = null;
          }
          return result || context.Object();
        };
      }());
    }

    /**
     * The base implementation of `_.createCallback` without support for creating
     * "_.pluck" or "_.where" style callbacks.
     *
     * @private
     * @param {*} [func=identity] The value to convert to a callback.
     * @param {*} [thisArg] The `this` binding of the created callback.
     * @param {number} [argCount] The number of arguments the callback accepts.
     * @returns {Function} Returns a callback function.
     */
    function baseCreateCallback(func, thisArg, argCount) {
      if (typeof func != 'function') {
        return identity;
      }
      // exit early for no `thisArg` or already bound by `Function#bind`
      if (typeof thisArg == 'undefined' || !('prototype' in func)) {
        return func;
      }
      var bindData = func.__bindData__;
      if (typeof bindData == 'undefined') {
        if (support.funcNames) {
          bindData = !func.name;
        }
        bindData = bindData || !support.funcDecomp;
        if (!bindData) {
          var source = fnToString.call(func);
          if (!support.funcNames) {
            bindData = !reFuncName.test(source);
          }
          if (!bindData) {
            // checks if `func` references the `this` keyword and stores the result
            bindData = reThis.test(source);
            setBindData(func, bindData);
          }
        }
      }
      // exit early if there are no `this` references or `func` is bound
      if (bindData === false || (bindData !== true && bindData[1] & 1)) {
        return func;
      }
      switch (argCount) {
        case 1: return function(value) {
          return func.call(thisArg, value);
        };
        case 2: return function(a, b) {
          return func.call(thisArg, a, b);
        };
        case 3: return function(value, index, collection) {
          return func.call(thisArg, value, index, collection);
        };
        case 4: return function(accumulator, value, index, collection) {
          return func.call(thisArg, accumulator, value, index, collection);
        };
      }
      return bind(func, thisArg);
    }

    /**
     * The base implementation of `createWrapper` that creates the wrapper and
     * sets its meta data.
     *
     * @private
     * @param {Array} bindData The bind data array.
     * @returns {Function} Returns the new function.
     */
    function baseCreateWrapper(bindData) {
      var func = bindData[0],
          bitmask = bindData[1],
          partialArgs = bindData[2],
          partialRightArgs = bindData[3],
          thisArg = bindData[4],
          arity = bindData[5];

      var isBind = bitmask & 1,
          isBindKey = bitmask & 2,
          isCurry = bitmask & 4,
          isCurryBound = bitmask & 8,
          key = func;

      function bound() {
        var thisBinding = isBind ? thisArg : this;
        if (partialArgs) {
          var args = slice(partialArgs);
          push.apply(args, arguments);
        }
        if (partialRightArgs || isCurry) {
          args || (args = slice(arguments));
          if (partialRightArgs) {
            push.apply(args, partialRightArgs);
          }
          if (isCurry && args.length < arity) {
            bitmask |= 16 & ~32;
            return baseCreateWrapper([func, (isCurryBound ? bitmask : bitmask & ~3), args, null, thisArg, arity]);
          }
        }
        args || (args = arguments);
        if (isBindKey) {
          func = thisBinding[key];
        }
        if (this instanceof bound) {
          thisBinding = baseCreate(func.prototype);
          var result = func.apply(thisBinding, args);
          return isObject(result) ? result : thisBinding;
        }
        return func.apply(thisBinding, args);
      }
      setBindData(bound, bindData);
      return bound;
    }

    /**
     * The base implementation of `_.difference` that accepts a single array
     * of values to exclude.
     *
     * @private
     * @param {Array} array The array to process.
     * @param {Array} [values] The array of values to exclude.
     * @returns {Array} Returns a new array of filtered values.
     */
    function baseDifference(array, values) {
      var index = -1,
          indexOf = getIndexOf(),
          length = array ? array.length : 0,
          isLarge = length >= largeArraySize && indexOf === baseIndexOf,
          result = [];

      if (isLarge) {
        var cache = createCache(values);
        if (cache) {
          indexOf = cacheIndexOf;
          values = cache;
        } else {
          isLarge = false;
        }
      }
      while (++index < length) {
        var value = array[index];
        if (indexOf(values, value) < 0) {
          result.push(value);
        }
      }
      if (isLarge) {
        releaseObject(values);
      }
      return result;
    }

    /**
     * The base implementation of `_.flatten` without support for callback
     * shorthands or `thisArg` binding.
     *
     * @private
     * @param {Array} array The array to flatten.
     * @param {boolean} [isShallow=false] A flag to restrict flattening to a single level.
     * @param {boolean} [isStrict=false] A flag to restrict flattening to arrays and `arguments` objects.
     * @param {number} [fromIndex=0] The index to start from.
     * @returns {Array} Returns a new flattened array.
     */
    function baseFlatten(array, isShallow, isStrict, fromIndex) {
      var index = (fromIndex || 0) - 1,
          length = array ? array.length : 0,
          result = [];

      while (++index < length) {
        var value = array[index];

        if (value && typeof value == 'object' && typeof value.length == 'number'
            && (isArray(value) || isArguments(value))) {
          // recursively flatten arrays (susceptible to call stack limits)
          if (!isShallow) {
            value = baseFlatten(value, isShallow, isStrict);
          }
          var valIndex = -1,
              valLength = value.length,
              resIndex = result.length;

          result.length += valLength;
          while (++valIndex < valLength) {
            result[resIndex++] = value[valIndex];
          }
        } else if (!isStrict) {
          result.push(value);
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.isEqual`, without support for `thisArg` binding,
     * that allows partial "_.where" style comparisons.
     *
     * @private
     * @param {*} a The value to compare.
     * @param {*} b The other value to compare.
     * @param {Function} [callback] The function to customize comparing values.
     * @param {Function} [isWhere=false] A flag to indicate performing partial comparisons.
     * @param {Array} [stackA=[]] Tracks traversed `a` objects.
     * @param {Array} [stackB=[]] Tracks traversed `b` objects.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     */
    function baseIsEqual(a, b, callback, isWhere, stackA, stackB) {
      // used to indicate that when comparing objects, `a` has at least the properties of `b`
      if (callback) {
        var result = callback(a, b);
        if (typeof result != 'undefined') {
          return !!result;
        }
      }
      // exit early for identical values
      if (a === b) {
        // treat `+0` vs. `-0` as not equal
        return a !== 0 || (1 / a == 1 / b);
      }
      var type = typeof a,
          otherType = typeof b;

      // exit early for unlike primitive values
      if (a === a &&
          !(a && objectTypes[type]) &&
          !(b && objectTypes[otherType])) {
        return false;
      }
      // exit early for `null` and `undefined` avoiding ES3's Function#call behavior
      // http://es5.github.io/#x15.3.4.4
      if (a == null || b == null) {
        return a === b;
      }
      // compare [[Class]] names
      var className = toString.call(a),
          otherClass = toString.call(b);

      if (className == argsClass) {
        className = objectClass;
      }
      if (otherClass == argsClass) {
        otherClass = objectClass;
      }
      if (className != otherClass) {
        return false;
      }
      switch (className) {
        case boolClass:
        case dateClass:
          // coerce dates and booleans to numbers, dates to milliseconds and booleans
          // to `1` or `0` treating invalid dates coerced to `NaN` as not equal
          return +a == +b;

        case numberClass:
          // treat `NaN` vs. `NaN` as equal
          return (a != +a)
            ? b != +b
            // but treat `+0` vs. `-0` as not equal
            : (a == 0 ? (1 / a == 1 / b) : a == +b);

        case regexpClass:
        case stringClass:
          // coerce regexes to strings (http://es5.github.io/#x15.10.6.4)
          // treat string primitives and their corresponding object instances as equal
          return a == String(b);
      }
      var isArr = className == arrayClass;
      if (!isArr) {
        // unwrap any `lodash` wrapped values
        var aWrapped = hasOwnProperty.call(a, '__wrapped__'),
            bWrapped = hasOwnProperty.call(b, '__wrapped__');

        if (aWrapped || bWrapped) {
          return baseIsEqual(aWrapped ? a.__wrapped__ : a, bWrapped ? b.__wrapped__ : b, callback, isWhere, stackA, stackB);
        }
        // exit for functions and DOM nodes
        if (className != objectClass) {
          return false;
        }
        // in older versions of Opera, `arguments` objects have `Array` constructors
        var ctorA = a.constructor,
            ctorB = b.constructor;

        // non `Object` object instances with different constructors are not equal
        if (ctorA != ctorB &&
              !(isFunction(ctorA) && ctorA instanceof ctorA && isFunction(ctorB) && ctorB instanceof ctorB) &&
              ('constructor' in a && 'constructor' in b)
            ) {
          return false;
        }
      }
      // assume cyclic structures are equal
      // the algorithm for detecting cyclic structures is adapted from ES 5.1
      // section 15.12.3, abstract operation `JO` (http://es5.github.io/#x15.12.3)
      var initedStack = !stackA;
      stackA || (stackA = getArray());
      stackB || (stackB = getArray());

      var length = stackA.length;
      while (length--) {
        if (stackA[length] == a) {
          return stackB[length] == b;
        }
      }
      var size = 0;
      result = true;

      // add `a` and `b` to the stack of traversed objects
      stackA.push(a);
      stackB.push(b);

      // recursively compare objects and arrays (susceptible to call stack limits)
      if (isArr) {
        // compare lengths to determine if a deep comparison is necessary
        length = a.length;
        size = b.length;
        result = size == length;

        if (result || isWhere) {
          // deep compare the contents, ignoring non-numeric properties
          while (size--) {
            var index = length,
                value = b[size];

            if (isWhere) {
              while (index--) {
                if ((result = baseIsEqual(a[index], value, callback, isWhere, stackA, stackB))) {
                  break;
                }
              }
            } else if (!(result = baseIsEqual(a[size], value, callback, isWhere, stackA, stackB))) {
              break;
            }
          }
        }
      }
      else {
        // deep compare objects using `forIn`, instead of `forOwn`, to avoid `Object.keys`
        // which, in this case, is more costly
        forIn(b, function(value, key, b) {
          if (hasOwnProperty.call(b, key)) {
            // count the number of properties.
            size++;
            // deep compare each property value.
            return (result = hasOwnProperty.call(a, key) && baseIsEqual(a[key], value, callback, isWhere, stackA, stackB));
          }
        });

        if (result && !isWhere) {
          // ensure both objects have the same number of properties
          forIn(a, function(value, key, a) {
            if (hasOwnProperty.call(a, key)) {
              // `size` will be `-1` if `a` has more properties than `b`
              return (result = --size > -1);
            }
          });
        }
      }
      stackA.pop();
      stackB.pop();

      if (initedStack) {
        releaseArray(stackA);
        releaseArray(stackB);
      }
      return result;
    }

    /**
     * The base implementation of `_.merge` without argument juggling or support
     * for `thisArg` binding.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @param {Function} [callback] The function to customize merging properties.
     * @param {Array} [stackA=[]] Tracks traversed source objects.
     * @param {Array} [stackB=[]] Associates values with source counterparts.
     */
    function baseMerge(object, source, callback, stackA, stackB) {
      (isArray(source) ? forEach : forOwn)(source, function(source, key) {
        var found,
            isArr,
            result = source,
            value = object[key];

        if (source && ((isArr = isArray(source)) || isPlainObject(source))) {
          // avoid merging previously merged cyclic sources
          var stackLength = stackA.length;
          while (stackLength--) {
            if ((found = stackA[stackLength] == source)) {
              value = stackB[stackLength];
              break;
            }
          }
          if (!found) {
            var isShallow;
            if (callback) {
              result = callback(value, source);
              if ((isShallow = typeof result != 'undefined')) {
                value = result;
              }
            }
            if (!isShallow) {
              value = isArr
                ? (isArray(value) ? value : [])
                : (isPlainObject(value) ? value : {});
            }
            // add `source` and associated `value` to the stack of traversed objects
            stackA.push(source);
            stackB.push(value);

            // recursively merge objects and arrays (susceptible to call stack limits)
            if (!isShallow) {
              baseMerge(value, source, callback, stackA, stackB);
            }
          }
        }
        else {
          if (callback) {
            result = callback(value, source);
            if (typeof result == 'undefined') {
              result = source;
            }
          }
          if (typeof result != 'undefined') {
            value = result;
          }
        }
        object[key] = value;
      });
    }

    /**
     * The base implementation of `_.random` without argument juggling or support
     * for returning floating-point numbers.
     *
     * @private
     * @param {number} min The minimum possible value.
     * @param {number} max The maximum possible value.
     * @returns {number} Returns a random number.
     */
    function baseRandom(min, max) {
      return min + floor(nativeRandom() * (max - min + 1));
    }

    /**
     * The base implementation of `_.uniq` without support for callback shorthands
     * or `thisArg` binding.
     *
     * @private
     * @param {Array} array The array to process.
     * @param {boolean} [isSorted=false] A flag to indicate that `array` is sorted.
     * @param {Function} [callback] The function called per iteration.
     * @returns {Array} Returns a duplicate-value-free array.
     */
    function baseUniq(array, isSorted, callback) {
      var index = -1,
          indexOf = getIndexOf(),
          length = array ? array.length : 0,
          result = [];

      var isLarge = !isSorted && length >= largeArraySize && indexOf === baseIndexOf,
          seen = (callback || isLarge) ? getArray() : result;

      if (isLarge) {
        var cache = createCache(seen);
        indexOf = cacheIndexOf;
        seen = cache;
      }
      while (++index < length) {
        var value = array[index],
            computed = callback ? callback(value, index, array) : value;

        if (isSorted
              ? !index || seen[seen.length - 1] !== computed
              : indexOf(seen, computed) < 0
            ) {
          if (callback || isLarge) {
            seen.push(computed);
          }
          result.push(value);
        }
      }
      if (isLarge) {
        releaseArray(seen.array);
        releaseObject(seen);
      } else if (callback) {
        releaseArray(seen);
      }
      return result;
    }

    /**
     * Creates a function that aggregates a collection, creating an object composed
     * of keys generated from the results of running each element of the collection
     * through a callback. The given `setter` function sets the keys and values
     * of the composed object.
     *
     * @private
     * @param {Function} setter The setter function.
     * @returns {Function} Returns the new aggregator function.
     */
    function createAggregator(setter) {
      return function(collection, callback, thisArg) {
        var result = {};
        callback = lodash.createCallback(callback, thisArg, 3);

        var index = -1,
            length = collection ? collection.length : 0;

        if (typeof length == 'number') {
          while (++index < length) {
            var value = collection[index];
            setter(result, value, callback(value, index, collection), collection);
          }
        } else {
          forOwn(collection, function(value, key, collection) {
            setter(result, value, callback(value, key, collection), collection);
          });
        }
        return result;
      };
    }

    /**
     * Creates a function that, when called, either curries or invokes `func`
     * with an optional `this` binding and partially applied arguments.
     *
     * @private
     * @param {Function|string} func The function or method name to reference.
     * @param {number} bitmask The bitmask of method flags to compose.
     *  The bitmask may be composed of the following flags:
     *  1 - `_.bind`
     *  2 - `_.bindKey`
     *  4 - `_.curry`
     *  8 - `_.curry` (bound)
     *  16 - `_.partial`
     *  32 - `_.partialRight`
     * @param {Array} [partialArgs] An array of arguments to prepend to those
     *  provided to the new function.
     * @param {Array} [partialRightArgs] An array of arguments to append to those
     *  provided to the new function.
     * @param {*} [thisArg] The `this` binding of `func`.
     * @param {number} [arity] The arity of `func`.
     * @returns {Function} Returns the new function.
     */
    function createWrapper(func, bitmask, partialArgs, partialRightArgs, thisArg, arity) {
      var isBind = bitmask & 1,
          isBindKey = bitmask & 2,
          isCurry = bitmask & 4,
          isCurryBound = bitmask & 8,
          isPartial = bitmask & 16,
          isPartialRight = bitmask & 32;

      if (!isBindKey && !isFunction(func)) {
        throw new TypeError;
      }
      if (isPartial && !partialArgs.length) {
        bitmask &= ~16;
        isPartial = partialArgs = false;
      }
      if (isPartialRight && !partialRightArgs.length) {
        bitmask &= ~32;
        isPartialRight = partialRightArgs = false;
      }
      var bindData = func && func.__bindData__;
      if (bindData && bindData !== true) {
        // clone `bindData`
        bindData = slice(bindData);
        if (bindData[2]) {
          bindData[2] = slice(bindData[2]);
        }
        if (bindData[3]) {
          bindData[3] = slice(bindData[3]);
        }
        // set `thisBinding` is not previously bound
        if (isBind && !(bindData[1] & 1)) {
          bindData[4] = thisArg;
        }
        // set if previously bound but not currently (subsequent curried functions)
        if (!isBind && bindData[1] & 1) {
          bitmask |= 8;
        }
        // set curried arity if not yet set
        if (isCurry && !(bindData[1] & 4)) {
          bindData[5] = arity;
        }
        // append partial left arguments
        if (isPartial) {
          push.apply(bindData[2] || (bindData[2] = []), partialArgs);
        }
        // append partial right arguments
        if (isPartialRight) {
          unshift.apply(bindData[3] || (bindData[3] = []), partialRightArgs);
        }
        // merge flags
        bindData[1] |= bitmask;
        return createWrapper.apply(null, bindData);
      }
      // fast path for `_.bind`
      var creater = (bitmask == 1 || bitmask === 17) ? baseBind : baseCreateWrapper;
      return creater([func, bitmask, partialArgs, partialRightArgs, thisArg, arity]);
    }

    /**
     * Used by `escape` to convert characters to HTML entities.
     *
     * @private
     * @param {string} match The matched character to escape.
     * @returns {string} Returns the escaped character.
     */
    function escapeHtmlChar(match) {
      return htmlEscapes[match];
    }

    /**
     * Gets the appropriate "indexOf" function. If the `_.indexOf` method is
     * customized, this method returns the custom method, otherwise it returns
     * the `baseIndexOf` function.
     *
     * @private
     * @returns {Function} Returns the "indexOf" function.
     */
    function getIndexOf() {
      var result = (result = lodash.indexOf) === indexOf ? baseIndexOf : result;
      return result;
    }

    /**
     * Checks if `value` is a native function.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if the `value` is a native function, else `false`.
     */
    function isNative(value) {
      return typeof value == 'function' && reNative.test(value);
    }

    /**
     * Sets `this` binding data on a given function.
     *
     * @private
     * @param {Function} func The function to set data on.
     * @param {Array} value The data array to set.
     */
    var setBindData = !defineProperty ? noop : function(func, value) {
      descriptor.value = value;
      defineProperty(func, '__bindData__', descriptor);
    };

    /**
     * A fallback implementation of `isPlainObject` which checks if a given value
     * is an object created by the `Object` constructor, assuming objects created
     * by the `Object` constructor have no inherited enumerable properties and that
     * there are no `Object.prototype` extensions.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
     */
    function shimIsPlainObject(value) {
      var ctor,
          result;

      // avoid non Object objects, `arguments` objects, and DOM elements
      if (!(value && toString.call(value) == objectClass) ||
          (ctor = value.constructor, isFunction(ctor) && !(ctor instanceof ctor))) {
        return false;
      }
      // In most environments an object's own properties are iterated before
      // its inherited properties. If the last iterated property is an object's
      // own property then there are no inherited enumerable properties.
      forIn(value, function(value, key) {
        result = key;
      });
      return typeof result == 'undefined' || hasOwnProperty.call(value, result);
    }

    /**
     * Used by `unescape` to convert HTML entities to characters.
     *
     * @private
     * @param {string} match The matched character to unescape.
     * @returns {string} Returns the unescaped character.
     */
    function unescapeHtmlChar(match) {
      return htmlUnescapes[match];
    }

    /*--------------------------------------------------------------------------*/

    /**
     * Checks if `value` is an `arguments` object.
     *
     * @static
     * @memberOf _
     * @category Objects
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if the `value` is an `arguments` object, else `false`.
     * @example
     *
     * (function() { return _.isArguments(arguments); })(1, 2, 3);
     * // => true
     *
     * _.isArguments([1, 2, 3]);
     * // => false
     */
    function isArguments(value) {
      return value && typeof value == 'object' && typeof value.length == 'number' &&
        toString.call(value) == argsClass || false;
    }

    /**
     * Checks if `value` is an array.
     *
     * @static
     * @memberOf _
     * @type Function
     * @category Objects
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if the `value` is an array, else `false`.
     * @example
     *
     * (function() { return _.isArray(arguments); })();
     * // => false
     *
     * _.isArray([1, 2, 3]);
     * // => true
     */
    var isArray = nativeIsArray || function(value) {
      return value && typeof value == 'object' && typeof value.length == 'number' &&
        toString.call(value) == arrayClass || false;
    };

    /**
     * A fallback implementation of `Object.keys` which produces an array of the
     * given object's own enumerable property names.
     *
     * @private
     * @type Function
     * @param {Object} object The object to inspect.
     * @returns {Array} Returns an array of property names.
     */
    var shimKeys = function(object) {
      var index, iterable = object, result = [];
      if (!iterable) return result;
      if (!(objectTypes[typeof object])) return result;
        for (index in iterable) {
          if (hasOwnProperty.call(iterable, index)) {
            result.push(index);
          }
        }
      return result
    };

    /**
     * Creates an array composed of the own enumerable property names of an object.
     *
     * @static
     * @memberOf _
     * @category Objects
     * @param {Object} object The object to inspect.
     * @returns {Array} Returns an array of property names.
     * @example
     *
     * _.keys({ 'one': 1, 'two': 2, 'three': 3 });
     * // => ['one', 'two', 'three'] (property order is not guaranteed across environments)
     */
    var keys = !nativeKeys ? shimKeys : function(object) {
      if (!isObject(object)) {
        return [];
      }
      return nativeKeys(object);
    };

    /**
     * Used to convert characters to HTML entities:
     *
     * Though the `>` character is escaped for symmetry, characters like `>` and `/`
     * don't require escaping in HTML and have no special meaning unless they're part
     * of a tag or an unquoted attribute value.
     * http://mathiasbynens.be/notes/ambiguous-ampersands (under "semi-related fun fact")
     */
    var htmlEscapes = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    };

    /** Used to convert HTML entities to characters */
    var htmlUnescapes = invert(htmlEscapes);

    /** Used to match HTML entities and HTML characters */
    var reEscapedHtml = RegExp('(' + keys(htmlUnescapes).join('|') + ')', 'g'),
        reUnescapedHtml = RegExp('[' + keys(htmlEscapes).join('') + ']', 'g');

    /*--------------------------------------------------------------------------*/

    /**
     * Assigns own enumerable properties of source object(s) to the destination
     * object. Subsequent sources will overwrite property assignments of previous
     * sources. If a callback is provided it will be executed to produce the
     * assigned values. The callback is bound to `thisArg` and invoked with two
     * arguments; (objectValue, sourceValue).
     *
     * @static
     * @memberOf _
     * @type Function
     * @alias extend
     * @category Objects
     * @param {Object} object The destination object.
     * @param {...Object} [source] The source objects.
     * @param {Function} [callback] The function to customize assigning values.
     * @param {*} [thisArg] The `this` binding of `callback`.
     * @returns {Object} Returns the destination object.
     * @example
     *
     * _.assign({ 'name': 'fred' }, { 'employer': 'slate' });
     * // => { 'name': 'fred', 'employer': 'slate' }
     *
     * var defaults = _.partialRight(_.assign, function(a, b) {
     *   return typeof a == 'undefined' ? b : a;
     * });
     *
     * var object = { 'name': 'barney' };
     * defaults(object, { 'name': 'fred', 'employer': 'slate' });
     * // => { 'name': 'barney', 'employer': 'slate' }
     */
    var assign = function(object, source, guard) {
      var index, iterable = object, result = iterable;
      if (!iterable) return result;
      var args = arguments,
          argsIndex = 0,
          argsLength = typeof guard == 'number' ? 2 : args.length;
      if (argsLength > 3 && typeof args[argsLength - 2] == 'function') {
        var callback = baseCreateCallback(args[--argsLength - 1], args[argsLength--], 2);
      } else if (argsLength > 2 && typeof args[argsLength - 1] == 'function') {
        callback = args[--argsLength];
      }
      while (++argsIndex < argsLength) {
        iterable = args[argsIndex];
        if (iterable && objectTypes[typeof iterable]) {
        var ownIndex = -1,
            ownProps = objectTypes[typeof iterable] && keys(iterable),
            length = ownProps ? ownProps.length : 0;

        while (++ownIndex < length) {
          index = ownProps[ownIndex];
          result[index] = callback ? callback(result[index], iterable[index]) : iterable[index];
        }
        }
      }
      return result
    };

    /**
     * Creates a clone of `value`. If `isDeep` is `true` nested objects will also
     * be cloned, otherwise they will be assigned by reference. If a callback
     * is provided it will be executed to produce the cloned values. If the
     * callback returns `undefined` cloning will be handled by the method instead.
     * The callback is bound to `thisArg` and invoked with one argument; (value).
     *
     * @static
     * @memberOf _
     * @category Objects
     * @param {*} value The value to clone.
     * @param {boolean} [isDeep=false] Specify a deep clone.
     * @param {Function} [callback] The function to customize cloning values.
     * @param {*} [thisArg] The `this` binding of `callback`.
     * @returns {*} Returns the cloned value.
     * @example
     *
     * var characters = [
     *   { 'name': 'barney', 'age': 36 },
     *   { 'name': 'fred',   'age': 40 }
     * ];
     *
     * var shallow = _.clone(characters);
     * shallow[0] === characters[0];
     * // => true
     *
     * var deep = _.clone(characters, true);
     * deep[0] === characters[0];
     * // => false
     *
     * _.mixin({
     *   'clone': _.partialRight(_.clone, function(value) {
     *     return _.isElement(value) ? value.cloneNode(false) : undefined;
     *   })
     * });
     *
     * var clone = _.clone(document.body);
     * clone.childNodes.length;
     * // => 0
     */
    function clone(value, isDeep, callback, thisArg) {
      // allows working with "Collections" methods without using their `index`
      // and `collection` arguments for `isDeep` and `callback`
      if (typeof isDeep != 'boolean' && isDeep != null) {
        thisArg = callback;
        callback = isDeep;
        isDeep = false;
      }
      return baseClone(value, isDeep, typeof callback == 'function' && baseCreateCallback(callback, thisArg, 1));
    }

    /**
     * Creates a deep clone of `value`. If a callback is provided it will be
     * executed to produce the cloned values. If the callback returns `undefined`
     * cloning will be handled by the method instead. The callback is bound to
     * `thisArg` and invoked with one argument; (value).
     *
     * Note: This method is loosely based on the structured clone algorithm. Functions
     * and DOM nodes are **not** cloned. The enumerable properties of `arguments` objects and
     * objects created by constructors other than `Object` are cloned to plain `Object` objects.
     * See http://www.w3.org/TR/html5/infrastructure.html#internal-structured-cloning-algorithm.
     *
     * @static
     * @memberOf _
     * @category Objects
     * @param {*} value The value to deep clone.
     * @param {Function} [callback] The function to customize cloning values.
     * @param {*} [thisArg] The `this` binding of `callback`.
     * @returns {*} Returns the deep cloned value.
     * @example
     *
     * var characters = [
     *   { 'name': 'barney', 'age': 36 },
     *   { 'name': 'fred',   'age': 40 }
     * ];
     *
     * var deep = _.cloneDeep(characters);
     * deep[0] === characters[0];
     * // => false
     *
     * var view = {
     *   'label': 'docs',
     *   'node': element
     * };
     *
     * var clone = _.cloneDeep(view, function(value) {
     *   return _.isElement(value) ? value.cloneNode(true) : undefined;
     * });
     *
     * clone.node == view.node;
     * // => false
     */
    function cloneDeep(value, callback, thisArg) {
      return baseClone(value, true, typeof callback == 'function' && baseCreateCallback(callback, thisArg, 1));
    }

    /**
     * Creates an object that inherits from the given `prototype` object. If a
     * `properties` object is provided its own enumerable properties are assigned
     * to the created object.
     *
     * @static
     * @memberOf _
     * @category Objects
     * @param {Object} prototype The object to inherit from.
     * @param {Object} [properties] The properties to assign to the object.
     * @returns {Object} Returns the new object.
     * @example
     *
     * function Shape() {
     *   this.x = 0;
     *   this.y = 0;
     * }
     *
     * function Circle() {
     *   Shape.call(this);
     * }
     *
     * Circle.prototype = _.create(Shape.prototype, { 'constructor': Circle });
     *
     * var circle = new Circle;
     * circle instanceof Circle;
     * // => true
     *
     * circle instanceof Shape;
     * // => true
     */
    function create(prototype, properties) {
      var result = baseCreate(prototype);
      return properties ? assign(result, properties) : result;
    }

    /**
     * Assigns own enumerable properties of source object(s) to the destination
     * object for all destination properties that resolve to `undefined`. Once a
     * property is set, additional defaults of the same property will be ignored.
     *
     * @static
     * @memberOf _
     * @type Function
     * @category Objects
     * @param {Object} object The destination object.
     * @param {...Object} [source] The source objects.
     * @param- {Object} [guard] Allows working with `_.reduce` without using its
     *  `key` and `object` arguments as sources.
     * @returns {Object} Returns the destination object.
     * @example
     *
     * var object = { 'name': 'barney' };
     * _.defaults(object, { 'name': 'fred', 'employer': 'slate' });
     * // => { 'name': 'barney', 'employer': 'slate' }
     */
    var defaults = function(object, source, guard) {
      var index, iterable = object, result = iterable;
      if (!iterable) return result;
      var args = arguments,
          argsIndex = 0,
          argsLength = typeof guard == 'number' ? 2 : args.length;
      while (++argsIndex < argsLength) {
        iterable = args[argsIndex];
        if (iterable && objectTypes[typeof iterable]) {
        var ownIndex = -1,
            ownProps = objectTypes[typeof iterable] && keys(iterable),
            length = ownProps ? ownProps.length : 0;

        while (++ownIndex < length) {
          index = ownProps[ownIndex];
          if (typeof result[index] == 'undefined') result[index] = iterable[index];
        }
        }
      }
      return result
    };

    /**
     * This method is like `_.findIndex` except that it returns the key of the
     * first element that passes the callback check, instead of the element itself.
     *
     * If a property name is provided for `callback` the created "_.pluck" style
     * callback will return the property value of the given element.
     *
     * If an object is provided for `callback` the created "_.where" style callback
     * will return `true` for elements that have the properties of the given object,
     * else `false`.
     *
     * @static
     * @memberOf _
     * @category Objects
     * @param {Object} object The object to search.
     * @param {Function|Object|string} [callback=identity] The function called per
     *  iteration. If a property name or object is provided it will be used to
     *  create a "_.pluck" or "_.where" style callback, respectively.
     * @param {*} [thisArg] The `this` binding of `callback`.
     * @returns {string|undefined} Returns the key of the found element, else `undefined`.
     * @example
     *
     * var characters = {
     *   'barney': {  'age': 36, 'blocked': false },
     *   'fred': {    'age': 40, 'blocked': true },
     *   'pebbles': { 'age': 1,  'blocked': false }
     * };
     *
     * _.findKey(characters, function(chr) {
     *   return chr.age < 40;
     * });
     * // => 'barney' (property order is not guaranteed across environments)
     *
     * // using "_.where" callback shorthand
     * _.findKey(characters, { 'age': 1 });
     * // => 'pebbles'
     *
     * // using "_.pluck" callback shorthand
     * _.findKey(characters, 'blocked');
     * // => 'fred'
     */
    function findKey(object, callback, thisArg) {
      var result;
      callback = lodash.createCallback(callback, thisArg, 3);
      forOwn(object, function(value, key, object) {
        if (callback(value, key, object)) {
          result = key;
          return false;
        }
      });
      return result;
    }

    /**
     * This method is like `_.findKey` except that it iterates over elements
     * of a `collection` in the opposite order.
     *
     * If a property name is provided for `callback` the created "_.pluck" style
     * callback will return the property value of the given element.
     *
     * If an object is provided for `callback` the created "_.where" style callback
     * will return `true` for elements that have the properties of the given object,
     * else `false`.
     *
     * @static
     * @memberOf _
     * @category Objects
     * @param {Object} object The object to search.
     * @param {Function|Object|string} [callback=identity] The function called per
     *  iteration. If a property name or object is provided it will be used to
     *  create a "_.pluck" or "_.where" style callback, respectively.
     * @param {*} [thisArg] The `this` binding of `callback`.
     * @returns {string|undefined} Returns the key of the found element, else `undefined`.
     * @example
     *
     * var characters = {
     *   'barney': {  'age': 36, 'blocked': true },
     *   'fred': {    'age': 40, 'blocked': false },
     *   'pebbles': { 'age': 1,  'blocked': true }
     * };
     *
     * _.findLastKey(characters, function(chr) {
     *   return chr.age < 40;
     * });
     * // => returns `pebbles`, assuming `_.findKey` returns `barney`
     *
     * // using "_.where" callback shorthand
     * _.findLastKey(characters, { 'age': 40 });
     * // => 'fred'
     *
     * // using "_.pluck" callback shorthand
     * _.findLastKey(characters, 'blocked');
     * // => 'pebbles'
     */
    function findLastKey(object, callback, thisArg) {
      var result;
      callback = lodash.createCallback(callback, thisArg, 3);
      forOwnRight(object, function(value, key, object) {
        if (callback(value, key, object)) {
          result = key;
          return false;
        }
      });
      return result;
    }

    /**
     * Iterates over own and inherited enumerable properties of an object,
     * executing the callback for each property. The callback is bound to `thisArg`
     * and invoked with three arguments; (value, key, object). Callbacks may exit
     * iteration early by explicitly returning `false`.
     *
     * @static
     * @memberOf _
     * @type Function
     * @category Objects
     * @param {Object} object The object to iterate over.
     * @param {Function} [callback=identity] The function called per iteration.
     * @param {*} [thisArg] The `this` binding of `callback`.
     * @returns {Object} Returns `object`.
     * @example
     *
     * function Shape() {
     *   this.x = 0;
     *   this.y = 0;
     * }
     *
     * Shape.prototype.move = function(x, y) {
     *   this.x += x;
     *   this.y += y;
     * };
     *
     * _.forIn(new Shape, function(value, key) {
     *   console.log(key);
     * });
     * // => logs 'x', 'y', and 'move' (property order is not guaranteed across environments)
     */
    var forIn = function(collection, callback, thisArg) {
      var index, iterable = collection, result = iterable;
      if (!iterable) return result;
      if (!objectTypes[typeof iterable]) return result;
      callback = callback && typeof thisArg == 'undefined' ? callback : baseCreateCallback(callback, thisArg, 3);
        for (index in iterable) {
          if (callback(iterable[index], index, collection) === false) return result;
        }
      return result
    };

    /**
     * This method is like `_.forIn` except that it iterates over elements
     * of a `collection` in the opposite order.
     *
     * @static
     * @memberOf _
     * @category Objects
     * @param {Object} object The object to iterate over.
     * @param {Function} [callback=identity] The function called per iteration.
     * @param {*} [thisArg] The `this` binding of `callback`.
     * @returns {Object} Returns `object`.
     * @example
     *
     * function Shape() {
     *   this.x = 0;
     *   this.y = 0;
     * }
     *
     * Shape.prototype.move = function(x, y) {
     *   this.x += x;
     *   this.y += y;
     * };
     *
     * _.forInRight(new Shape, function(value, key) {
     *   console.log(key);
     * });
     * // => logs 'move', 'y', and 'x' assuming `_.forIn ` logs 'x', 'y', and 'move'
     */
    function forInRight(object, callback, thisArg) {
      var pairs = [];

      forIn(object, function(value, key) {
        pairs.push(key, value);
      });

      var length = pairs.length;
      callback = baseCreateCallback(callback, thisArg, 3);
      while (length--) {
        if (callback(pairs[length--], pairs[length], object) === false) {
          break;
        }
      }
      return object;
    }

    /**
     * Iterates over own enumerable properties of an object, executing the callback
     * for each property. The callback is bound to `thisArg` and invoked with three
     * arguments; (value, key, object). Callbacks may exit iteration early by
     * explicitly returning `false`.
     *
     * @static
     * @memberOf _
     * @type Function
     * @category Objects
     * @param {Object} object The object to iterate over.
     * @param {Function} [callback=identity] The function called per iteration.
     * @param {*} [thisArg] The `this` binding of `callback`.
     * @returns {Object} Returns `object`.
     * @example
     *
     * _.forOwn({ '0': 'zero', '1': 'one', 'length': 2 }, function(num, key) {
     *   console.log(key);
     * });
     * // => logs '0', '1', and 'length' (property order is not guaranteed across environments)
     */
    var forOwn = function(collection, callback, thisArg) {
      var index, iterable = collection, result = iterable;
      if (!iterable) return result;
      if (!objectTypes[typeof iterable]) return result;
      callback = callback && typeof thisArg == 'undefined' ? callback : baseCreateCallback(callback, thisArg, 3);
        var ownIndex = -1,
            ownProps = objectTypes[typeof iterable] && keys(iterable),
            length = ownProps ? ownProps.length : 0;

        while (++ownIndex < length) {
          index = ownProps[ownIndex];
          if (callback(iterable[index], index, collection) === false) return result;
        }
      return result
    };

    /**
     * This method is like `_.forOwn` except that it iterates over elements
     * of a `collection` in the opposite order.
     *
     * @static
     * @memberOf _
     * @category Objects
     * @param {Object} object The object to iterate over.
     * @param {Function} [callback=identity] The function called per iteration.
     * @param {*} [thisArg] The `this` binding of `callback`.
     * @returns {Object} Returns `object`.
     * @example
     *
     * _.forOwnRight({ '0': 'zero', '1': 'one', 'length': 2 }, function(num, key) {
     *   console.log(key);
     * });
     * // => logs 'length', '1', and '0' assuming `_.forOwn` logs '0', '1', and 'length'
     */
    function forOwnRight(object, callback, thisArg) {
      var props = keys(object),
          length = props.length;

      callback = baseCreateCallback(callback, thisArg, 3);
      while (length--) {
        var key = props[length];
        if (callback(object[key], key, object) === false) {
          break;
        }
      }
      return object;
    }

    /**
     * Creates a sorted array of property names of all enumerable properties,
     * own and inherited, of `object` that have function values.
     *
     * @static
     * @memberOf _
     * @alias methods
     * @category Objects
     * @param {Object} object The object to inspect.
     * @returns {Array} Returns an array of property names that have function values.
     * @example
     *
     * _.functions(_);
     * // => ['all', 'any', 'bind', 'bindAll', 'clone', 'compact', 'compose', ...]
     */
    function functions(object) {
      var result = [];
      forIn(object, function(value, key) {
        if (isFunction(value)) {
          result.push(key);
        }
      });
      return result.sort();
    }

    /**
     * Checks if the specified property name exists as a direct property of `object`,
     * instead of an inherited property.
     *
     * @static
     * @memberOf _
     * @category Objects
     * @param {Object} object The object to inspect.
     * @param {string} key The name of the property to check.
     * @returns {boolean} Returns `true` if key is a direct property, else `false`.
     * @example
     *
     * _.has({ 'a': 1, 'b': 2, 'c': 3 }, 'b');
     * // => true
     */
    function has(object, key) {
      return object ? hasOwnProperty.call(object, key) : false;
    }

    /**
     * Creates an object composed of the inverted keys and values of the given object.
     *
     * @static
     * @memberOf _
     * @category Objects
     * @param {Object} object The object to invert.
     * @returns {Object} Returns the created inverted object.
     * @example
     *
     * _.invert({ 'first': 'fred', 'second': 'barney' });
     * // => { 'fred': 'first', 'barney': 'second' }
     */
    function invert(object) {
      var index = -1,
          props = keys(object),
          length = props.length,
          result = {};

      while (++index < length) {
        var key = props[index];
        result[object[key]] = key;
      }
      return result;
    }

    /**
     * Checks if `value` is a boolean value.
     *
     * @static
     * @memberOf _
     * @category Objects
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if the `value` is a boolean value, else `false`.
     * @example
     *
     * _.isBoolean(null);
     * // => false
     */
    function isBoolean(value) {
      return value === true || value === false ||
        value && typeof value == 'object' && toString.call(value) == boolClass || false;
    }

    /**
     * Checks if `value` is a date.
     *
     * @static
     * @memberOf _
     * @category Objects
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if the `value` is a date, else `false`.
     * @example
     *
     * _.isDate(new Date);
     * // => true
     */
    function isDate(value) {
      return value && typeof value == 'object' && toString.call(value) == dateClass || false;
    }

    /**
     * Checks if `value` is a DOM element.
     *
     * @static
     * @memberOf _
     * @category Objects
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if the `value` is a DOM element, else `false`.
     * @example
     *
     * _.isElement(document.body);
     * // => true
     */
    function isElement(value) {
      return value && value.nodeType === 1 || false;
    }

    /**
     * Checks if `value` is empty. Arrays, strings, or `arguments` objects with a
     * length of `0` and objects with no own enumerable properties are considered
     * "empty".
     *
     * @static
     * @memberOf _
     * @category Objects
     * @param {Array|Object|string} value The value to inspect.
     * @returns {boolean} Returns `true` if the `value` is empty, else `false`.
     * @example
     *
     * _.isEmpty([1, 2, 3]);
     * // => false
     *
     * _.isEmpty({});
     * // => true
     *
     * _.isEmpty('');
     * // => true
     */
    function isEmpty(value) {
      var result = true;
      if (!value) {
        return result;
      }
      var className = toString.call(value),
          length = value.length;

      if ((className == arrayClass || className == stringClass || className == argsClass ) ||
          (className == objectClass && typeof length == 'number' && isFunction(value.splice))) {
        return !length;
      }
      forOwn(value, function() {
        return (result = false);
      });
      return result;
    }

    /**
     * Performs a deep comparison between two values to determine if they are
     * equivalent to each other. If a callback is provided it will be executed
     * to compare values. If the callback returns `undefined` comparisons will
     * be handled by the method instead. The callback is bound to `thisArg` and
     * invoked with two arguments; (a, b).
     *
     * @static
     * @memberOf _
     * @category Objects
     * @param {*} a The value to compare.
     * @param {*} b The other value to compare.
     * @param {Function} [callback] The function to customize comparing values.
     * @param {*} [thisArg] The `this` binding of `callback`.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     * @example
     *
     * var object = { 'name': 'fred' };
     * var copy = { 'name': 'fred' };
     *
     * object == copy;
     * // => false
     *
     * _.isEqual(object, copy);
     * // => true
     *
     * var words = ['hello', 'goodbye'];
     * var otherWords = ['hi', 'goodbye'];
     *
     * _.isEqual(words, otherWords, function(a, b) {
     *   var reGreet = /^(?:hello|hi)$/i,
     *       aGreet = _.isString(a) && reGreet.test(a),
     *       bGreet = _.isString(b) && reGreet.test(b);
     *
     *   return (aGreet || bGreet) ? (aGreet == bGreet) : undefined;
     * });
     * // => true
     */
    function isEqual(a, b, callback, thisArg) {
      return baseIsEqual(a, b, typeof callback == 'function' && baseCreateCallback(callback, thisArg, 2));
    }

    /**
     * Checks if `value` is, or can be coerced to, a finite number.
     *
     * Note: This is not the same as native `isFinite` which will return true for
     * booleans and empty strings. See http://es5.github.io/#x15.1.2.5.
     *
     * @static
     * @memberOf _
     * @category Objects
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if the `value` is finite, else `false`.
     * @example
     *
     * _.isFinite(-101);
     * // => true
     *
     * _.isFinite('10');
     * // => true
     *
     * _.isFinite(true);
     * // => false
     *
     * _.isFinite('');
     * // => false
     *
     * _.isFinite(Infinity);
     * // => false
     */
    function isFinite(value) {
      return nativeIsFinite(value) && !nativeIsNaN(parseFloat(value));
    }

    /**
     * Checks if `value` is a function.
     *
     * @static
     * @memberOf _
     * @category Objects
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if the `value` is a function, else `false`.
     * @example
     *
     * _.isFunction(_);
     * // => true
     */
    function isFunction(value) {
      return typeof value == 'function';
    }

    /**
     * Checks if `value` is the language type of Object.
     * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
     *
     * @static
     * @memberOf _
     * @category Objects
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if the `value` is an object, else `false`.
     * @example
     *
     * _.isObject({});
     * // => true
     *
     * _.isObject([1, 2, 3]);
     * // => true
     *
     * _.isObject(1);
     * // => false
     */
    function isObject(value) {
      // check if the value is the ECMAScript language type of Object
      // http://es5.github.io/#x8
      // and avoid a V8 bug
      // http://code.google.com/p/v8/issues/detail?id=2291
      return !!(value && objectTypes[typeof value]);
    }

    /**
     * Checks if `value` is `NaN`.
     *
     * Note: This is not the same as native `isNaN` which will return `true` for
     * `undefined` and other non-numeric values. See http://es5.github.io/#x15.1.2.4.
     *
     * @static
     * @memberOf _
     * @category Objects
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if the `value` is `NaN`, else `false`.
     * @example
     *
     * _.isNaN(NaN);
     * // => true
     *
     * _.isNaN(new Number(NaN));
     * // => true
     *
     * isNaN(undefined);
     * // => true
     *
     * _.isNaN(undefined);
     * // => false
     */
    function isNaN(value) {
      // `NaN` as a primitive is the only value that is not equal to itself
      // (perform the [[Class]] check first to avoid errors with some host objects in IE)
      return isNumber(value) && value != +value;
    }

    /**
     * Checks if `value` is `null`.
     *
     * @static
     * @memberOf _
     * @category Objects
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if the `value` is `null`, else `false`.
     * @example
     *
     * _.isNull(null);
     * // => true
     *
     * _.isNull(undefined);
     * // => false
     */
    function isNull(value) {
      return value === null;
    }

    /**
     * Checks if `value` is a number.
     *
     * Note: `NaN` is considered a number. See http://es5.github.io/#x8.5.
     *
     * @static
     * @memberOf _
     * @category Objects
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if the `value` is a number, else `false`.
     * @example
     *
     * _.isNumber(8.4 * 5);
     * // => true
     */
    function isNumber(value) {
      return typeof value == 'number' ||
        value && typeof value == 'object' && toString.call(value) == numberClass || false;
    }

    /**
     * Checks if `value` is an object created by the `Object` constructor.
     *
     * @static
     * @memberOf _
     * @category Objects
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
     * @example
     *
     * function Shape() {
     *   this.x = 0;
     *   this.y = 0;
     * }
     *
     * _.isPlainObject(new Shape);
     * // => false
     *
     * _.isPlainObject([1, 2, 3]);
     * // => false
     *
     * _.isPlainObject({ 'x': 0, 'y': 0 });
     * // => true
     */
    var isPlainObject = !getPrototypeOf ? shimIsPlainObject : function(value) {
      if (!(value && toString.call(value) == objectClass)) {
        return false;
      }
      var valueOf = value.valueOf,
          objProto = isNative(valueOf) && (objProto = getPrototypeOf(valueOf)) && getPrototypeOf(objProto);

      return objProto
        ? (value == objProto || getPrototypeOf(value) == objProto)
        : shimIsPlainObject(value);
    };

    /**
     * Checks if `value` is a regular expression.
     *
     * @static
     * @memberOf _
     * @category Objects
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if the `value` is a regular expression, else `false`.
     * @example
     *
     * _.isRegExp(/fred/);
     * // => true
     */
    function isRegExp(value) {
      return value && typeof value == 'object' && toString.call(value) == regexpClass || false;
    }

    /**
     * Checks if `value` is a string.
     *
     * @static
     * @memberOf _
     * @category Objects
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if the `value` is a string, else `false`.
     * @example
     *
     * _.isString('fred');
     * // => true
     */
    function isString(value) {
      return typeof value == 'string' ||
        value && typeof value == 'object' && toString.call(value) == stringClass || false;
    }

    /**
     * Checks if `value` is `undefined`.
     *
     * @static
     * @memberOf _
     * @category Objects
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if the `value` is `undefined`, else `false`.
     * @example
     *
     * _.isUndefined(void 0);
     * // => true
     */
    function isUndefined(value) {
      return typeof value == 'undefined';
    }

    /**
     * Creates an object with the same keys as `object` and values generated by
     * running each own enumerable property of `object` through the callback.
     * The callback is bound to `thisArg` and invoked with three arguments;
     * (value, key, object).
     *
     * If a property name is provided for `callback` the created "_.pluck" style
     * callback will return the property value of the given element.
     *
     * If an object is provided for `callback` the created "_.where" style callback
     * will return `true` for elements that have the properties of the given object,
     * else `false`.
     *
     * @static
     * @memberOf _
     * @category Objects
     * @param {Object} object The object to iterate over.
     * @param {Function|Object|string} [callback=identity] The function called
     *  per iteration. If a property name or object is provided it will be used
     *  to create a "_.pluck" or "_.where" style callback, respectively.
     * @param {*} [thisArg] The `this` binding of `callback`.
     * @returns {Array} Returns a new object with values of the results of each `callback` execution.
     * @example
     *
     * _.mapValues({ 'a': 1, 'b': 2, 'c': 3} , function(num) { return num * 3; });
     * // => { 'a': 3, 'b': 6, 'c': 9 }
     *
     * var characters = {
     *   'fred': { 'name': 'fred', 'age': 40 },
     *   'pebbles': { 'name': 'pebbles', 'age': 1 }
     * };
     *
     * // using "_.pluck" callback shorthand
     * _.mapValues(characters, 'age');
     * // => { 'fred': 40, 'pebbles': 1 }
     */
    function mapValues(object, callback, thisArg) {
      var result = {};
      callback = lodash.createCallback(callback, thisArg, 3);

      forOwn(object, function(value, key, object) {
        result[key] = callback(value, key, object);
      });
      return result;
    }

    /**
     * Recursively merges own enumerable properties of the source object(s), that
     * don't resolve to `undefined` into the destination object. Subsequent sources
     * will overwrite property assignments of previous sources. If a callback is
     * provided it will be executed to produce the merged values of the destination
     * and source properties. If the callback returns `undefined` merging will
     * be handled by the method instead. The callback is bound to `thisArg` and
     * invoked with two arguments; (objectValue, sourceValue).
     *
     * @static
     * @memberOf _
     * @category Objects
     * @param {Object} object The destination object.
     * @param {...Object} [source] The source objects.
     * @param {Function} [callback] The function to customize merging properties.
     * @param {*} [thisArg] The `this` binding of `callback`.
     * @returns {Object} Returns the destination object.
     * @example
     *
     * var names = {
     *   'characters': [
     *     { 'name': 'barney' },
     *     { 'name': 'fred' }
     *   ]
     * };
     *
     * var ages = {
     *   'characters': [
     *     { 'age': 36 },
     *     { 'age': 40 }
     *   ]
     * };
     *
     * _.merge(names, ages);
     * // => { 'characters': [{ 'name': 'barney', 'age': 36 }, { 'name': 'fred', 'age': 40 }] }
     *
     * var food = {
     *   'fruits': ['apple'],
     *   'vegetables': ['beet']
     * };
     *
     * var otherFood = {
     *   'fruits': ['banana'],
     *   'vegetables': ['carrot']
     * };
     *
     * _.merge(food, otherFood, function(a, b) {
     *   return _.isArray(a) ? a.concat(b) : undefined;
     * });
     * // => { 'fruits': ['apple', 'banana'], 'vegetables': ['beet', 'carrot] }
     */
    function merge(object) {
      var args = arguments,
          length = 2;

      if (!isObject(object)) {
        return object;
      }
      // allows working with `_.reduce` and `_.reduceRight` without using
      // their `index` and `collection` arguments
      if (typeof args[2] != 'number') {
        length = args.length;
      }
      if (length > 3 && typeof args[length - 2] == 'function') {
        var callback = baseCreateCallback(args[--length - 1], args[length--], 2);
      } else if (length > 2 && typeof args[length - 1] == 'function') {
        callback = args[--length];
      }
      var sources = slice(arguments, 1, length),
          index = -1,
          stackA = getArray(),
          stackB = getArray();

      while (++index < length) {
        baseMerge(object, sources[index], callback, stackA, stackB);
      }
      releaseArray(stackA);
      releaseArray(stackB);
      return object;
    }

    /**
     * Creates a shallow clone of `object` excluding the specified properties.
     * Property names may be specified as individual arguments or as arrays of
     * property names. If a callback is provided it will be executed for each
     * property of `object` omitting the properties the callback returns truey
     * for. The callback is bound to `thisArg` and invoked with three arguments;
     * (value, key, object).
     *
     * @static
     * @memberOf _
     * @category Objects
     * @param {Object} object The source object.
     * @param {Function|...string|string[]} [callback] The properties to omit or the
     *  function called per iteration.
     * @param {*} [thisArg] The `this` binding of `callback`.
     * @returns {Object} Returns an object without the omitted properties.
     * @example
     *
     * _.omit({ 'name': 'fred', 'age': 40 }, 'age');
     * // => { 'name': 'fred' }
     *
     * _.omit({ 'name': 'fred', 'age': 40 }, function(value) {
     *   return typeof value == 'number';
     * });
     * // => { 'name': 'fred' }
     */
    function omit(object, callback, thisArg) {
      var result = {};
      if (typeof callback != 'function') {
        var props = [];
        forIn(object, function(value, key) {
          props.push(key);
        });
        props = baseDifference(props, baseFlatten(arguments, true, false, 1));

        var index = -1,
            length = props.length;

        while (++index < length) {
          var key = props[index];
          result[key] = object[key];
        }
      } else {
        callback = lodash.createCallback(callback, thisArg, 3);
        forIn(object, function(value, key, object) {
          if (!callback(value, key, object)) {
            result[key] = value;
          }
        });
      }
      return result;
    }

    /**
     * Creates a two dimensional array of an object's key-value pairs,
     * i.e. `[[key1, value1], [key2, value2]]`.
     *
     * @static
     * @memberOf _
     * @category Objects
     * @param {Object} object The object to inspect.
     * @returns {Array} Returns new array of key-value pairs.
     * @example
     *
     * _.pairs({ 'barney': 36, 'fred': 40 });
     * // => [['barney', 36], ['fred', 40]] (property order is not guaranteed across environments)
     */
    function pairs(object) {
      var index = -1,
          props = keys(object),
          length = props.length,
          result = Array(length);

      while (++index < length) {
        var key = props[index];
        result[index] = [key, object[key]];
      }
      return result;
    }

    /**
     * Creates a shallow clone of `object` composed of the specified properties.
     * Property names may be specified as individual arguments or as arrays of
     * property names. If a callback is provided it will be executed for each
     * property of `object` picking the properties the callback returns truey
     * for. The callback is bound to `thisArg` and invoked with three arguments;
     * (value, key, object).
     *
     * @static
     * @memberOf _
     * @category Objects
     * @param {Object} object The source object.
     * @param {Function|...string|string[]} [callback] The function called per
     *  iteration or property names to pick, specified as individual property
     *  names or arrays of property names.
     * @param {*} [thisArg] The `this` binding of `callback`.
     * @returns {Object} Returns an object composed of the picked properties.
     * @example
     *
     * _.pick({ 'name': 'fred', '_userid': 'fred1' }, 'name');
     * // => { 'name': 'fred' }
     *
     * _.pick({ 'name': 'fred', '_userid': 'fred1' }, function(value, key) {
     *   return key.charAt(0) != '_';
     * });
     * // => { 'name': 'fred' }
     */
    function pick(object, callback, thisArg) {
      var result = {};
      if (typeof callback != 'function') {
        var index = -1,
            props = baseFlatten(arguments, true, false, 1),
            length = isObject(object) ? props.length : 0;

        while (++index < length) {
          var key = props[index];
          if (key in object) {
            result[key] = object[key];
          }
        }
      } else {
        callback = lodash.createCallback(callback, thisArg, 3);
        forIn(object, function(value, key, object) {
          if (callback(value, key, object)) {
            result[key] = value;
          }
        });
      }
      return result;
    }

    /**
     * An alternative to `_.reduce` this method transforms `object` to a new
     * `accumulator` object which is the result of running each of its own
     * enumerable properties through a callback, with each callback execution
     * potentially mutating the `accumulator` object. The callback is bound to
     * `thisArg` and invoked with four arguments; (accumulator, value, key, object).
     * Callbacks may exit iteration early by explicitly returning `false`.
     *
     * @static
     * @memberOf _
     * @category Objects
     * @param {Array|Object} object The object to iterate over.
     * @param {Function} [callback=identity] The function called per iteration.
     * @param {*} [accumulator] The custom accumulator value.
     * @param {*} [thisArg] The `this` binding of `callback`.
     * @returns {*} Returns the accumulated value.
     * @example
     *
     * var squares = _.transform([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], function(result, num) {
     *   num *= num;
     *   if (num % 2) {
     *     return result.push(num) < 3;
     *   }
     * });
     * // => [1, 9, 25]
     *
     * var mapped = _.transform({ 'a': 1, 'b': 2, 'c': 3 }, function(result, num, key) {
     *   result[key] = num * 3;
     * });
     * // => { 'a': 3, 'b': 6, 'c': 9 }
     */
    function transform(object, callback, accumulator, thisArg) {
      var isArr = isArray(object);
      if (accumulator == null) {
        if (isArr) {
          accumulator = [];
        } else {
          var ctor = object && object.constructor,
              proto = ctor && ctor.prototype;

          accumulator = baseCreate(proto);
        }
      }
      if (callback) {
        callback = lodash.createCallback(callback, thisArg, 4);
        (isArr ? forEach : forOwn)(object, function(value, index, object) {
          return callback(accumulator, value, index, object);
        });
      }
      return accumulator;
    }

    /**
     * Creates an array composed of the own enumerable property values of `object`.
     *
     * @static
     * @memberOf _
     * @category Objects
     * @param {Object} object The object to inspect.
     * @returns {Array} Returns an array of property values.
     * @example
     *
     * _.values({ 'one': 1, 'two': 2, 'three': 3 });
     * // => [1, 2, 3] (property order is not guaranteed across environments)
     */
    function values(object) {
      var index = -1,
          props = keys(object),
          length = props.length,
          result = Array(length);

      while (++index < length) {
        result[index] = object[props[index]];
      }
      return result;
    }

    /*--------------------------------------------------------------------------*/

    /**
     * Creates an array of elements from the specified indexes, or keys, of the
     * `collection`. Indexes may be specified as individual arguments or as arrays
     * of indexes.
     *
     * @static
     * @memberOf _
     * @category Collections
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {...(number|number[]|string|string[])} [index] The indexes of `collection`
     *   to retrieve, specified as individual indexes or arrays of indexes.
     * @returns {Array} Returns a new array of elements corresponding to the
     *  provided indexes.
     * @example
     *
     * _.at(['a', 'b', 'c', 'd', 'e'], [0, 2, 4]);
     * // => ['a', 'c', 'e']
     *
     * _.at(['fred', 'barney', 'pebbles'], 0, 2);
     * // => ['fred', 'pebbles']
     */
    function at(collection) {
      var args = arguments,
          index = -1,
          props = baseFlatten(args, true, false, 1),
          length = (args[2] && args[2][args[1]] === collection) ? 1 : props.length,
          result = Array(length);

      while(++index < length) {
        result[index] = collection[props[index]];
      }
      return result;
    }

    /**
     * Checks if a given value is present in a collection using strict equality
     * for comparisons, i.e. `===`. If `fromIndex` is negative, it is used as the
     * offset from the end of the collection.
     *
     * @static
     * @memberOf _
     * @alias include
     * @category Collections
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {*} target The value to check for.
     * @param {number} [fromIndex=0] The index to search from.
     * @returns {boolean} Returns `true` if the `target` element is found, else `false`.
     * @example
     *
     * _.contains([1, 2, 3], 1);
     * // => true
     *
     * _.contains([1, 2, 3], 1, 2);
     * // => false
     *
     * _.contains({ 'name': 'fred', 'age': 40 }, 'fred');
     * // => true
     *
     * _.contains('pebbles', 'eb');
     * // => true
     */
    function contains(collection, target, fromIndex) {
      var index = -1,
          indexOf = getIndexOf(),
          length = collection ? collection.length : 0,
          result = false;

      fromIndex = (fromIndex < 0 ? nativeMax(0, length + fromIndex) : fromIndex) || 0;
      if (isArray(collection)) {
        result = indexOf(collection, target, fromIndex) > -1;
      } else if (typeof length == 'number') {
        result = (isString(collection) ? collection.indexOf(target, fromIndex) : indexOf(collection, target, fromIndex)) > -1;
      } else {
        forOwn(collection, function(value) {
          if (++index >= fromIndex) {
            return !(result = value === target);
          }
        });
      }
      return result;
    }

    /**
     * Creates an object composed of keys generated from the results of running
     * each element of `collection` through the callback. The corresponding value
     * of each key is the number of times the key was returned by the callback.
     * The callback is bound to `thisArg` and invoked with three arguments;
     * (value, index|key, collection).
     *
     * If a property name is provided for `callback` the created "_.pluck" style
     * callback will return the property value of the given element.
     *
     * If an object is provided for `callback` the created "_.where" style callback
     * will return `true` for elements that have the properties of the given object,
     * else `false`.
     *
     * @static
     * @memberOf _
     * @category Collections
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Function|Object|string} [callback=identity] The function called
     *  per iteration. If a property name or object is provided it will be used
     *  to create a "_.pluck" or "_.where" style callback, respectively.
     * @param {*} [thisArg] The `this` binding of `callback`.
     * @returns {Object} Returns the composed aggregate object.
     * @example
     *
     * _.countBy([4.3, 6.1, 6.4], function(num) { return Math.floor(num); });
     * // => { '4': 1, '6': 2 }
     *
     * _.countBy([4.3, 6.1, 6.4], function(num) { return this.floor(num); }, Math);
     * // => { '4': 1, '6': 2 }
     *
     * _.countBy(['one', 'two', 'three'], 'length');
     * // => { '3': 2, '5': 1 }
     */
    var countBy = createAggregator(function(result, value, key) {
      (hasOwnProperty.call(result, key) ? result[key]++ : result[key] = 1);
    });

    /**
     * Checks if the given callback returns truey value for **all** elements of
     * a collection. The callback is bound to `thisArg` and invoked with three
     * arguments; (value, index|key, collection).
     *
     * If a property name is provided for `callback` the created "_.pluck" style
     * callback will return the property value of the given element.
     *
     * If an object is provided for `callback` the created "_.where" style callback
     * will return `true` for elements that have the properties of the given object,
     * else `false`.
     *
     * @static
     * @memberOf _
     * @alias all
     * @category Collections
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Function|Object|string} [callback=identity] The function called
     *  per iteration. If a property name or object is provided it will be used
     *  to create a "_.pluck" or "_.where" style callback, respectively.
     * @param {*} [thisArg] The `this` binding of `callback`.
     * @returns {boolean} Returns `true` if all elements passed the callback check,
     *  else `false`.
     * @example
     *
     * _.every([true, 1, null, 'yes']);
     * // => false
     *
     * var characters = [
     *   { 'name': 'barney', 'age': 36 },
     *   { 'name': 'fred',   'age': 40 }
     * ];
     *
     * // using "_.pluck" callback shorthand
     * _.every(characters, 'age');
     * // => true
     *
     * // using "_.where" callback shorthand
     * _.every(characters, { 'age': 36 });
     * // => false
     */
    function every(collection, callback, thisArg) {
      var result = true;
      callback = lodash.createCallback(callback, thisArg, 3);

      var index = -1,
          length = collection ? collection.length : 0;

      if (typeof length == 'number') {
        while (++index < length) {
          if (!(result = !!callback(collection[index], index, collection))) {
            break;
          }
        }
      } else {
        forOwn(collection, function(value, index, collection) {
          return (result = !!callback(value, index, collection));
        });
      }
      return result;
    }

    /**
     * Iterates over elements of a collection, returning an array of all elements
     * the callback returns truey for. The callback is bound to `thisArg` and
     * invoked with three arguments; (value, index|key, collection).
     *
     * If a property name is provided for `callback` the created "_.pluck" style
     * callback will return the property value of the given element.
     *
     * If an object is provided for `callback` the created "_.where" style callback
     * will return `true` for elements that have the properties of the given object,
     * else `false`.
     *
     * @static
     * @memberOf _
     * @alias select
     * @category Collections
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Function|Object|string} [callback=identity] The function called
     *  per iteration. If a property name or object is provided it will be used
     *  to create a "_.pluck" or "_.where" style callback, respectively.
     * @param {*} [thisArg] The `this` binding of `callback`.
     * @returns {Array} Returns a new array of elements that passed the callback check.
     * @example
     *
     * var evens = _.filter([1, 2, 3, 4, 5, 6], function(num) { return num % 2 == 0; });
     * // => [2, 4, 6]
     *
     * var characters = [
     *   { 'name': 'barney', 'age': 36, 'blocked': false },
     *   { 'name': 'fred',   'age': 40, 'blocked': true }
     * ];
     *
     * // using "_.pluck" callback shorthand
     * _.filter(characters, 'blocked');
     * // => [{ 'name': 'fred', 'age': 40, 'blocked': true }]
     *
     * // using "_.where" callback shorthand
     * _.filter(characters, { 'age': 36 });
     * // => [{ 'name': 'barney', 'age': 36, 'blocked': false }]
     */
    function filter(collection, callback, thisArg) {
      var result = [];
      callback = lodash.createCallback(callback, thisArg, 3);

      var index = -1,
          length = collection ? collection.length : 0;

      if (typeof length == 'number') {
        while (++index < length) {
          var value = collection[index];
          if (callback(value, index, collection)) {
            result.push(value);
          }
        }
      } else {
        forOwn(collection, function(value, index, collection) {
          if (callback(value, index, collection)) {
            result.push(value);
          }
        });
      }
      return result;
    }

    /**
     * Iterates over elements of a collection, returning the first element that
     * the callback returns truey for. The callback is bound to `thisArg` and
     * invoked with three arguments; (value, index|key, collection).
     *
     * If a property name is provided for `callback` the created "_.pluck" style
     * callback will return the property value of the given element.
     *
     * If an object is provided for `callback` the created "_.where" style callback
     * will return `true` for elements that have the properties of the given object,
     * else `false`.
     *
     * @static
     * @memberOf _
     * @alias detect, findWhere
     * @category Collections
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Function|Object|string} [callback=identity] The function called
     *  per iteration. If a property name or object is provided it will be used
     *  to create a "_.pluck" or "_.where" style callback, respectively.
     * @param {*} [thisArg] The `this` binding of `callback`.
     * @returns {*} Returns the found element, else `undefined`.
     * @example
     *
     * var characters = [
     *   { 'name': 'barney',  'age': 36, 'blocked': false },
     *   { 'name': 'fred',    'age': 40, 'blocked': true },
     *   { 'name': 'pebbles', 'age': 1,  'blocked': false }
     * ];
     *
     * _.find(characters, function(chr) {
     *   return chr.age < 40;
     * });
     * // => { 'name': 'barney', 'age': 36, 'blocked': false }
     *
     * // using "_.where" callback shorthand
     * _.find(characters, { 'age': 1 });
     * // =>  { 'name': 'pebbles', 'age': 1, 'blocked': false }
     *
     * // using "_.pluck" callback shorthand
     * _.find(characters, 'blocked');
     * // => { 'name': 'fred', 'age': 40, 'blocked': true }
     */
    function find(collection, callback, thisArg) {
      callback = lodash.createCallback(callback, thisArg, 3);

      var index = -1,
          length = collection ? collection.length : 0;

      if (typeof length == 'number') {
        while (++index < length) {
          var value = collection[index];
          if (callback(value, index, collection)) {
            return value;
          }
        }
      } else {
        var result;
        forOwn(collection, function(value, index, collection) {
          if (callback(value, index, collection)) {
            result = value;
            return false;
          }
        });
        return result;
      }
    }

    /**
     * This method is like `_.find` except that it iterates over elements
     * of a `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @category Collections
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Function|Object|string} [callback=identity] The function called
     *  per iteration. If a property name or object is provided it will be used
     *  to create a "_.pluck" or "_.where" style callback, respectively.
     * @param {*} [thisArg] The `this` binding of `callback`.
     * @returns {*} Returns the found element, else `undefined`.
     * @example
     *
     * _.findLast([1, 2, 3, 4], function(num) {
     *   return num % 2 == 1;
     * });
     * // => 3
     */
    function findLast(collection, callback, thisArg) {
      var result;
      callback = lodash.createCallback(callback, thisArg, 3);
      forEachRight(collection, function(value, index, collection) {
        if (callback(value, index, collection)) {
          result = value;
          return false;
        }
      });
      return result;
    }

    /**
     * Iterates over elements of a collection, executing the callback for each
     * element. The callback is bound to `thisArg` and invoked with three arguments;
     * (value, index|key, collection). Callbacks may exit iteration early by
     * explicitly returning `false`.
     *
     * Note: As with other "Collections" methods, objects with a `length` property
     * are iterated like arrays. To avoid this behavior `_.forIn` or `_.forOwn`
     * may be used for object iteration.
     *
     * @static
     * @memberOf _
     * @alias each
     * @category Collections
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Function} [callback=identity] The function called per iteration.
     * @param {*} [thisArg] The `this` binding of `callback`.
     * @returns {Array|Object|string} Returns `collection`.
     * @example
     *
     * _([1, 2, 3]).forEach(function(num) { console.log(num); }).join(',');
     * // => logs each number and returns '1,2,3'
     *
     * _.forEach({ 'one': 1, 'two': 2, 'three': 3 }, function(num) { console.log(num); });
     * // => logs each number and returns the object (property order is not guaranteed across environments)
     */
    function forEach(collection, callback, thisArg) {
      var index = -1,
          length = collection ? collection.length : 0;

      callback = callback && typeof thisArg == 'undefined' ? callback : baseCreateCallback(callback, thisArg, 3);
      if (typeof length == 'number') {
        while (++index < length) {
          if (callback(collection[index], index, collection) === false) {
            break;
          }
        }
      } else {
        forOwn(collection, callback);
      }
      return collection;
    }

    /**
     * This method is like `_.forEach` except that it iterates over elements
     * of a `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @alias eachRight
     * @category Collections
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Function} [callback=identity] The function called per iteration.
     * @param {*} [thisArg] The `this` binding of `callback`.
     * @returns {Array|Object|string} Returns `collection`.
     * @example
     *
     * _([1, 2, 3]).forEachRight(function(num) { console.log(num); }).join(',');
     * // => logs each number from right to left and returns '3,2,1'
     */
    function forEachRight(collection, callback, thisArg) {
      var length = collection ? collection.length : 0;
      callback = callback && typeof thisArg == 'undefined' ? callback : baseCreateCallback(callback, thisArg, 3);
      if (typeof length == 'number') {
        while (length--) {
          if (callback(collection[length], length, collection) === false) {
            break;
          }
        }
      } else {
        var props = keys(collection);
        length = props.length;
        forOwn(collection, function(value, key, collection) {
          key = props ? props[--length] : --length;
          return callback(collection[key], key, collection);
        });
      }
      return collection;
    }

    /**
     * Creates an object composed of keys generated from the results of running
     * each element of a collection through the callback. The corresponding value
     * of each key is an array of the elements responsible for generating the key.
     * The callback is bound to `thisArg` and invoked with three arguments;
     * (value, index|key, collection).
     *
     * If a property name is provided for `callback` the created "_.pluck" style
     * callback will return the property value of the given element.
     *
     * If an object is provided for `callback` the created "_.where" style callback
     * will return `true` for elements that have the properties of the given object,
     * else `false`
     *
     * @static
     * @memberOf _
     * @category Collections
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Function|Object|string} [callback=identity] The function called
     *  per iteration. If a property name or object is provided it will be used
     *  to create a "_.pluck" or "_.where" style callback, respectively.
     * @param {*} [thisArg] The `this` binding of `callback`.
     * @returns {Object} Returns the composed aggregate object.
     * @example
     *
     * _.groupBy([4.2, 6.1, 6.4], function(num) { return Math.floor(num); });
     * // => { '4': [4.2], '6': [6.1, 6.4] }
     *
     * _.groupBy([4.2, 6.1, 6.4], function(num) { return this.floor(num); }, Math);
     * // => { '4': [4.2], '6': [6.1, 6.4] }
     *
     * // using "_.pluck" callback shorthand
     * _.groupBy(['one', 'two', 'three'], 'length');
     * // => { '3': ['one', 'two'], '5': ['three'] }
     */
    var groupBy = createAggregator(function(result, value, key) {
      (hasOwnProperty.call(result, key) ? result[key] : result[key] = []).push(value);
    });

    /**
     * Creates an object composed of keys generated from the results of running
     * each element of the collection through the given callback. The corresponding
     * value of each key is the last element responsible for generating the key.
     * The callback is bound to `thisArg` and invoked with three arguments;
     * (value, index|key, collection).
     *
     * If a property name is provided for `callback` the created "_.pluck" style
     * callback will return the property value of the given element.
     *
     * If an object is provided for `callback` the created "_.where" style callback
     * will return `true` for elements that have the properties of the given object,
     * else `false`.
     *
     * @static
     * @memberOf _
     * @category Collections
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Function|Object|string} [callback=identity] The function called
     *  per iteration. If a property name or object is provided it will be used
     *  to create a "_.pluck" or "_.where" style callback, respectively.
     * @param {*} [thisArg] The `this` binding of `callback`.
     * @returns {Object} Returns the composed aggregate object.
     * @example
     *
     * var keys = [
     *   { 'dir': 'left', 'code': 97 },
     *   { 'dir': 'right', 'code': 100 }
     * ];
     *
     * _.indexBy(keys, 'dir');
     * // => { 'left': { 'dir': 'left', 'code': 97 }, 'right': { 'dir': 'right', 'code': 100 } }
     *
     * _.indexBy(keys, function(key) { return String.fromCharCode(key.code); });
     * // => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }
     *
     * _.indexBy(characters, function(key) { this.fromCharCode(key.code); }, String);
     * // => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }
     */
    var indexBy = createAggregator(function(result, value, key) {
      result[key] = value;
    });

    /**
     * Invokes the method named by `methodName` on each element in the `collection`
     * returning an array of the results of each invoked method. Additional arguments
     * will be provided to each invoked method. If `methodName` is a function it
     * will be invoked for, and `this` bound to, each element in the `collection`.
     *
     * @static
     * @memberOf _
     * @category Collections
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Function|string} methodName The name of the method to invoke or
     *  the function invoked per iteration.
     * @param {...*} [arg] Arguments to invoke the method with.
     * @returns {Array} Returns a new array of the results of each invoked method.
     * @example
     *
     * _.invoke([[5, 1, 7], [3, 2, 1]], 'sort');
     * // => [[1, 5, 7], [1, 2, 3]]
     *
     * _.invoke([123, 456], String.prototype.split, '');
     * // => [['1', '2', '3'], ['4', '5', '6']]
     */
    function invoke(collection, methodName) {
      var args = slice(arguments, 2),
          index = -1,
          isFunc = typeof methodName == 'function',
          length = collection ? collection.length : 0,
          result = Array(typeof length == 'number' ? length : 0);

      forEach(collection, function(value) {
        result[++index] = (isFunc ? methodName : value[methodName]).apply(value, args);
      });
      return result;
    }

    /**
     * Creates an array of values by running each element in the collection
     * through the callback. The callback is bound to `thisArg` and invoked with
     * three arguments; (value, index|key, collection).
     *
     * If a property name is provided for `callback` the created "_.pluck" style
     * callback will return the property value of the given element.
     *
     * If an object is provided for `callback` the created "_.where" style callback
     * will return `true` for elements that have the properties of the given object,
     * else `false`.
     *
     * @static
     * @memberOf _
     * @alias collect
     * @category Collections
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Function|Object|string} [callback=identity] The function called
     *  per iteration. If a property name or object is provided it will be used
     *  to create a "_.pluck" or "_.where" style callback, respectively.
     * @param {*} [thisArg] The `this` binding of `callback`.
     * @returns {Array} Returns a new array of the results of each `callback` execution.
     * @example
     *
     * _.map([1, 2, 3], function(num) { return num * 3; });
     * // => [3, 6, 9]
     *
     * _.map({ 'one': 1, 'two': 2, 'three': 3 }, function(num) { return num * 3; });
     * // => [3, 6, 9] (property order is not guaranteed across environments)
     *
     * var characters = [
     *   { 'name': 'barney', 'age': 36 },
     *   { 'name': 'fred',   'age': 40 }
     * ];
     *
     * // using "_.pluck" callback shorthand
     * _.map(characters, 'name');
     * // => ['barney', 'fred']
     */
    function map(collection, callback, thisArg) {
      var index = -1,
          length = collection ? collection.length : 0;

      callback = lodash.createCallback(callback, thisArg, 3);
      if (typeof length == 'number') {
        var result = Array(length);
        while (++index < length) {
          result[index] = callback(collection[index], index, collection);
        }
      } else {
        result = [];
        forOwn(collection, function(value, key, collection) {
          result[++index] = callback(value, key, collection);
        });
      }
      return result;
    }

    /**
     * Retrieves the maximum value of a collection. If the collection is empty or
     * falsey `-Infinity` is returned. If a callback is provided it will be executed
     * for each value in the collection to generate the criterion by which the value
     * is ranked. The callback is bound to `thisArg` and invoked with three
     * arguments; (value, index, collection).
     *
     * If a property name is provided for `callback` the created "_.pluck" style
     * callback will return the property value of the given element.
     *
     * If an object is provided for `callback` the created "_.where" style callback
     * will return `true` for elements that have the properties of the given object,
     * else `false`.
     *
     * @static
     * @memberOf _
     * @category Collections
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Function|Object|string} [callback=identity] The function called
     *  per iteration. If a property name or object is provided it will be used
     *  to create a "_.pluck" or "_.where" style callback, respectively.
     * @param {*} [thisArg] The `this` binding of `callback`.
     * @returns {*} Returns the maximum value.
     * @example
     *
     * _.max([4, 2, 8, 6]);
     * // => 8
     *
     * var characters = [
     *   { 'name': 'barney', 'age': 36 },
     *   { 'name': 'fred',   'age': 40 }
     * ];
     *
     * _.max(characters, function(chr) { return chr.age; });
     * // => { 'name': 'fred', 'age': 40 };
     *
     * // using "_.pluck" callback shorthand
     * _.max(characters, 'age');
     * // => { 'name': 'fred', 'age': 40 };
     */
    function max(collection, callback, thisArg) {
      var computed = -Infinity,
          result = computed;

      // allows working with functions like `_.map` without using
      // their `index` argument as a callback
      if (typeof callback != 'function' && thisArg && thisArg[callback] === collection) {
        callback = null;
      }
      if (callback == null && isArray(collection)) {
        var index = -1,
            length = collection.length;

        while (++index < length) {
          var value = collection[index];
          if (value > result) {
            result = value;
          }
        }
      } else {
        callback = (callback == null && isString(collection))
          ? charAtCallback
          : lodash.createCallback(callback, thisArg, 3);

        forEach(collection, function(value, index, collection) {
          var current = callback(value, index, collection);
          if (current > computed) {
            computed = current;
            result = value;
          }
        });
      }
      return result;
    }

    /**
     * Retrieves the minimum value of a collection. If the collection is empty or
     * falsey `Infinity` is returned. If a callback is provided it will be executed
     * for each value in the collection to generate the criterion by which the value
     * is ranked. The callback is bound to `thisArg` and invoked with three
     * arguments; (value, index, collection).
     *
     * If a property name is provided for `callback` the created "_.pluck" style
     * callback will return the property value of the given element.
     *
     * If an object is provided for `callback` the created "_.where" style callback
     * will return `true` for elements that have the properties of the given object,
     * else `false`.
     *
     * @static
     * @memberOf _
     * @category Collections
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Function|Object|string} [callback=identity] The function called
     *  per iteration. If a property name or object is provided it will be used
     *  to create a "_.pluck" or "_.where" style callback, respectively.
     * @param {*} [thisArg] The `this` binding of `callback`.
     * @returns {*} Returns the minimum value.
     * @example
     *
     * _.min([4, 2, 8, 6]);
     * // => 2
     *
     * var characters = [
     *   { 'name': 'barney', 'age': 36 },
     *   { 'name': 'fred',   'age': 40 }
     * ];
     *
     * _.min(characters, function(chr) { return chr.age; });
     * // => { 'name': 'barney', 'age': 36 };
     *
     * // using "_.pluck" callback shorthand
     * _.min(characters, 'age');
     * // => { 'name': 'barney', 'age': 36 };
     */
    function min(collection, callback, thisArg) {
      var computed = Infinity,
          result = computed;

      // allows working with functions like `_.map` without using
      // their `index` argument as a callback
      if (typeof callback != 'function' && thisArg && thisArg[callback] === collection) {
        callback = null;
      }
      if (callback == null && isArray(collection)) {
        var index = -1,
            length = collection.length;

        while (++index < length) {
          var value = collection[index];
          if (value < result) {
            result = value;
          }
        }
      } else {
        callback = (callback == null && isString(collection))
          ? charAtCallback
          : lodash.createCallback(callback, thisArg, 3);

        forEach(collection, function(value, index, collection) {
          var current = callback(value, index, collection);
          if (current < computed) {
            computed = current;
            result = value;
          }
        });
      }
      return result;
    }

    /**
     * Retrieves the value of a specified property from all elements in the collection.
     *
     * @static
     * @memberOf _
     * @type Function
     * @category Collections
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {string} property The name of the property to pluck.
     * @returns {Array} Returns a new array of property values.
     * @example
     *
     * var characters = [
     *   { 'name': 'barney', 'age': 36 },
     *   { 'name': 'fred',   'age': 40 }
     * ];
     *
     * _.pluck(characters, 'name');
     * // => ['barney', 'fred']
     */
    var pluck = map;

    /**
     * Reduces a collection to a value which is the accumulated result of running
     * each element in the collection through the callback, where each successive
     * callback execution consumes the return value of the previous execution. If
     * `accumulator` is not provided the first element of the collection will be
     * used as the initial `accumulator` value. The callback is bound to `thisArg`
     * and invoked with four arguments; (accumulator, value, index|key, collection).
     *
     * @static
     * @memberOf _
     * @alias foldl, inject
     * @category Collections
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Function} [callback=identity] The function called per iteration.
     * @param {*} [accumulator] Initial value of the accumulator.
     * @param {*} [thisArg] The `this` binding of `callback`.
     * @returns {*} Returns the accumulated value.
     * @example
     *
     * var sum = _.reduce([1, 2, 3], function(sum, num) {
     *   return sum + num;
     * });
     * // => 6
     *
     * var mapped = _.reduce({ 'a': 1, 'b': 2, 'c': 3 }, function(result, num, key) {
     *   result[key] = num * 3;
     *   return result;
     * }, {});
     * // => { 'a': 3, 'b': 6, 'c': 9 }
     */
    function reduce(collection, callback, accumulator, thisArg) {
      if (!collection) return accumulator;
      var noaccum = arguments.length < 3;
      callback = lodash.createCallback(callback, thisArg, 4);

      var index = -1,
          length = collection.length;

      if (typeof length == 'number') {
        if (noaccum) {
          accumulator = collection[++index];
        }
        while (++index < length) {
          accumulator = callback(accumulator, collection[index], index, collection);
        }
      } else {
        forOwn(collection, function(value, index, collection) {
          accumulator = noaccum
            ? (noaccum = false, value)
            : callback(accumulator, value, index, collection)
        });
      }
      return accumulator;
    }

    /**
     * This method is like `_.reduce` except that it iterates over elements
     * of a `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @alias foldr
     * @category Collections
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Function} [callback=identity] The function called per iteration.
     * @param {*} [accumulator] Initial value of the accumulator.
     * @param {*} [thisArg] The `this` binding of `callback`.
     * @returns {*} Returns the accumulated value.
     * @example
     *
     * var list = [[0, 1], [2, 3], [4, 5]];
     * var flat = _.reduceRight(list, function(a, b) { return a.concat(b); }, []);
     * // => [4, 5, 2, 3, 0, 1]
     */
    function reduceRight(collection, callback, accumulator, thisArg) {
      var noaccum = arguments.length < 3;
      callback = lodash.createCallback(callback, thisArg, 4);
      forEachRight(collection, function(value, index, collection) {
        accumulator = noaccum
          ? (noaccum = false, value)
          : callback(accumulator, value, index, collection);
      });
      return accumulator;
    }

    /**
     * The opposite of `_.filter` this method returns the elements of a
     * collection that the callback does **not** return truey for.
     *
     * If a property name is provided for `callback` the created "_.pluck" style
     * callback will return the property value of the given element.
     *
     * If an object is provided for `callback` the created "_.where" style callback
     * will return `true` for elements that have the properties of the given object,
     * else `false`.
     *
     * @static
     * @memberOf _
     * @category Collections
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Function|Object|string} [callback=identity] The function called
     *  per iteration. If a property name or object is provided it will be used
     *  to create a "_.pluck" or "_.where" style callback, respectively.
     * @param {*} [thisArg] The `this` binding of `callback`.
     * @returns {Array} Returns a new array of elements that failed the callback check.
     * @example
     *
     * var odds = _.reject([1, 2, 3, 4, 5, 6], function(num) { return num % 2 == 0; });
     * // => [1, 3, 5]
     *
     * var characters = [
     *   { 'name': 'barney', 'age': 36, 'blocked': false },
     *   { 'name': 'fred',   'age': 40, 'blocked': true }
     * ];
     *
     * // using "_.pluck" callback shorthand
     * _.reject(characters, 'blocked');
     * // => [{ 'name': 'barney', 'age': 36, 'blocked': false }]
     *
     * // using "_.where" callback shorthand
     * _.reject(characters, { 'age': 36 });
     * // => [{ 'name': 'fred', 'age': 40, 'blocked': true }]
     */
    function reject(collection, callback, thisArg) {
      callback = lodash.createCallback(callback, thisArg, 3);
      return filter(collection, function(value, index, collection) {
        return !callback(value, index, collection);
      });
    }

    /**
     * Retrieves a random element or `n` random elements from a collection.
     *
     * @static
     * @memberOf _
     * @category Collections
     * @param {Array|Object|string} collection The collection to sample.
     * @param {number} [n] The number of elements to sample.
     * @param- {Object} [guard] Allows working with functions like `_.map`
     *  without using their `index` arguments as `n`.
     * @returns {Array} Returns the random sample(s) of `collection`.
     * @example
     *
     * _.sample([1, 2, 3, 4]);
     * // => 2
     *
     * _.sample([1, 2, 3, 4], 2);
     * // => [3, 1]
     */
    function sample(collection, n, guard) {
      if (collection && typeof collection.length != 'number') {
        collection = values(collection);
      }
      if (n == null || guard) {
        return collection ? collection[baseRandom(0, collection.length - 1)] : undefined;
      }
      var result = shuffle(collection);
      result.length = nativeMin(nativeMax(0, n), result.length);
      return result;
    }

    /**
     * Creates an array of shuffled values, using a version of the Fisher-Yates
     * shuffle. See http://en.wikipedia.org/wiki/Fisher-Yates_shuffle.
     *
     * @static
     * @memberOf _
     * @category Collections
     * @param {Array|Object|string} collection The collection to shuffle.
     * @returns {Array} Returns a new shuffled collection.
     * @example
     *
     * _.shuffle([1, 2, 3, 4, 5, 6]);
     * // => [4, 1, 6, 3, 5, 2]
     */
    function shuffle(collection) {
      var index = -1,
          length = collection ? collection.length : 0,
          result = Array(typeof length == 'number' ? length : 0);

      forEach(collection, function(value) {
        var rand = baseRandom(0, ++index);
        result[index] = result[rand];
        result[rand] = value;
      });
      return result;
    }

    /**
     * Gets the size of the `collection` by returning `collection.length` for arrays
     * and array-like objects or the number of own enumerable properties for objects.
     *
     * @static
     * @memberOf _
     * @category Collections
     * @param {Array|Object|string} collection The collection to inspect.
     * @returns {number} Returns `collection.length` or number of own enumerable properties.
     * @example
     *
     * _.size([1, 2]);
     * // => 2
     *
     * _.size({ 'one': 1, 'two': 2, 'three': 3 });
     * // => 3
     *
     * _.size('pebbles');
     * // => 7
     */
    function size(collection) {
      var length = collection ? collection.length : 0;
      return typeof length == 'number' ? length : keys(collection).length;
    }

    /**
     * Checks if the callback returns a truey value for **any** element of a
     * collection. The function returns as soon as it finds a passing value and
     * does not iterate over the entire collection. The callback is bound to
     * `thisArg` and invoked with three arguments; (value, index|key, collection).
     *
     * If a property name is provided for `callback` the created "_.pluck" style
     * callback will return the property value of the given element.
     *
     * If an object is provided for `callback` the created "_.where" style callback
     * will return `true` for elements that have the properties of the given object,
     * else `false`.
     *
     * @static
     * @memberOf _
     * @alias any
     * @category Collections
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Function|Object|string} [callback=identity] The function called
     *  per iteration. If a property name or object is provided it will be used
     *  to create a "_.pluck" or "_.where" style callback, respectively.
     * @param {*} [thisArg] The `this` binding of `callback`.
     * @returns {boolean} Returns `true` if any element passed the callback check,
     *  else `false`.
     * @example
     *
     * _.some([null, 0, 'yes', false], Boolean);
     * // => true
     *
     * var characters = [
     *   { 'name': 'barney', 'age': 36, 'blocked': false },
     *   { 'name': 'fred',   'age': 40, 'blocked': true }
     * ];
     *
     * // using "_.pluck" callback shorthand
     * _.some(characters, 'blocked');
     * // => true
     *
     * // using "_.where" callback shorthand
     * _.some(characters, { 'age': 1 });
     * // => false
     */
    function some(collection, callback, thisArg) {
      var result;
      callback = lodash.createCallback(callback, thisArg, 3);

      var index = -1,
          length = collection ? collection.length : 0;

      if (typeof length == 'number') {
        while (++index < length) {
          if ((result = callback(collection[index], index, collection))) {
            break;
          }
        }
      } else {
        forOwn(collection, function(value, index, collection) {
          return !(result = callback(value, index, collection));
        });
      }
      return !!result;
    }

    /**
     * Creates an array of elements, sorted in ascending order by the results of
     * running each element in a collection through the callback. This method
     * performs a stable sort, that is, it will preserve the original sort order
     * of equal elements. The callback is bound to `thisArg` and invoked with
     * three arguments; (value, index|key, collection).
     *
     * If a property name is provided for `callback` the created "_.pluck" style
     * callback will return the property value of the given element.
     *
     * If an array of property names is provided for `callback` the collection
     * will be sorted by each property value.
     *
     * If an object is provided for `callback` the created "_.where" style callback
     * will return `true` for elements that have the properties of the given object,
     * else `false`.
     *
     * @static
     * @memberOf _
     * @category Collections
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Array|Function|Object|string} [callback=identity] The function called
     *  per iteration. If a property name or object is provided it will be used
     *  to create a "_.pluck" or "_.where" style callback, respectively.
     * @param {*} [thisArg] The `this` binding of `callback`.
     * @returns {Array} Returns a new array of sorted elements.
     * @example
     *
     * _.sortBy([1, 2, 3], function(num) { return Math.sin(num); });
     * // => [3, 1, 2]
     *
     * _.sortBy([1, 2, 3], function(num) { return this.sin(num); }, Math);
     * // => [3, 1, 2]
     *
     * var characters = [
     *   { 'name': 'barney',  'age': 36 },
     *   { 'name': 'fred',    'age': 40 },
     *   { 'name': 'barney',  'age': 26 },
     *   { 'name': 'fred',    'age': 30 }
     * ];
     *
     * // using "_.pluck" callback shorthand
     * _.map(_.sortBy(characters, 'age'), _.values);
     * // => [['barney', 26], ['fred', 30], ['barney', 36], ['fred', 40]]
     *
     * // sorting by multiple properties
     * _.map(_.sortBy(characters, ['name', 'age']), _.values);
     * // = > [['barney', 26], ['barney', 36], ['fred', 30], ['fred', 40]]
     */
    function sortBy(collection, callback, thisArg) {
      var index = -1,
          isArr = isArray(callback),
          length = collection ? collection.length : 0,
          result = Array(typeof length == 'number' ? length : 0);

      if (!isArr) {
        callback = lodash.createCallback(callback, thisArg, 3);
      }
      forEach(collection, function(value, key, collection) {
        var object = result[++index] = getObject();
        if (isArr) {
          object.criteria = map(callback, function(key) { return value[key]; });
        } else {
          (object.criteria = getArray())[0] = callback(value, key, collection);
        }
        object.index = index;
        object.value = value;
      });

      length = result.length;
      result.sort(compareAscending);
      while (length--) {
        var object = result[length];
        result[length] = object.value;
        if (!isArr) {
          releaseArray(object.criteria);
        }
        releaseObject(object);
      }
      return result;
    }

    /**
     * Converts the `collection` to an array.
     *
     * @static
     * @memberOf _
     * @category Collections
     * @param {Array|Object|string} collection The collection to convert.
     * @returns {Array} Returns the new converted array.
     * @example
     *
     * (function() { return _.toArray(arguments).slice(1); })(1, 2, 3, 4);
     * // => [2, 3, 4]
     */
    function toArray(collection) {
      if (collection && typeof collection.length == 'number') {
        return slice(collection);
      }
      return values(collection);
    }

    /**
     * Performs a deep comparison of each element in a `collection` to the given
     * `properties` object, returning an array of all elements that have equivalent
     * property values.
     *
     * @static
     * @memberOf _
     * @type Function
     * @category Collections
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Object} props The object of property values to filter by.
     * @returns {Array} Returns a new array of elements that have the given properties.
     * @example
     *
     * var characters = [
     *   { 'name': 'barney', 'age': 36, 'pets': ['hoppy'] },
     *   { 'name': 'fred',   'age': 40, 'pets': ['baby puss', 'dino'] }
     * ];
     *
     * _.where(characters, { 'age': 36 });
     * // => [{ 'name': 'barney', 'age': 36, 'pets': ['hoppy'] }]
     *
     * _.where(characters, { 'pets': ['dino'] });
     * // => [{ 'name': 'fred', 'age': 40, 'pets': ['baby puss', 'dino'] }]
     */
    var where = filter;

    /*--------------------------------------------------------------------------*/

    /**
     * Creates an array with all falsey values removed. The values `false`, `null`,
     * `0`, `""`, `undefined`, and `NaN` are all falsey.
     *
     * @static
     * @memberOf _
     * @category Arrays
     * @param {Array} array The array to compact.
     * @returns {Array} Returns a new array of filtered values.
     * @example
     *
     * _.compact([0, 1, false, 2, '', 3]);
     * // => [1, 2, 3]
     */
    function compact(array) {
      var index = -1,
          length = array ? array.length : 0,
          result = [];

      while (++index < length) {
        var value = array[index];
        if (value) {
          result.push(value);
        }
      }
      return result;
    }

    /**
     * Creates an array excluding all values of the provided arrays using strict
     * equality for comparisons, i.e. `===`.
     *
     * @static
     * @memberOf _
     * @category Arrays
     * @param {Array} array The array to process.
     * @param {...Array} [values] The arrays of values to exclude.
     * @returns {Array} Returns a new array of filtered values.
     * @example
     *
     * _.difference([1, 2, 3, 4, 5], [5, 2, 10]);
     * // => [1, 3, 4]
     */
    function difference(array) {
      return baseDifference(array, baseFlatten(arguments, true, true, 1));
    }

    /**
     * This method is like `_.find` except that it returns the index of the first
     * element that passes the callback check, instead of the element itself.
     *
     * If a property name is provided for `callback` the created "_.pluck" style
     * callback will return the property value of the given element.
     *
     * If an object is provided for `callback` the created "_.where" style callback
     * will return `true` for elements that have the properties of the given object,
     * else `false`.
     *
     * @static
     * @memberOf _
     * @category Arrays
     * @param {Array} array The array to search.
     * @param {Function|Object|string} [callback=identity] The function called
     *  per iteration. If a property name or object is provided it will be used
     *  to create a "_.pluck" or "_.where" style callback, respectively.
     * @param {*} [thisArg] The `this` binding of `callback`.
     * @returns {number} Returns the index of the found element, else `-1`.
     * @example
     *
     * var characters = [
     *   { 'name': 'barney',  'age': 36, 'blocked': false },
     *   { 'name': 'fred',    'age': 40, 'blocked': true },
     *   { 'name': 'pebbles', 'age': 1,  'blocked': false }
     * ];
     *
     * _.findIndex(characters, function(chr) {
     *   return chr.age < 20;
     * });
     * // => 2
     *
     * // using "_.where" callback shorthand
     * _.findIndex(characters, { 'age': 36 });
     * // => 0
     *
     * // using "_.pluck" callback shorthand
     * _.findIndex(characters, 'blocked');
     * // => 1
     */
    function findIndex(array, callback, thisArg) {
      var index = -1,
          length = array ? array.length : 0;

      callback = lodash.createCallback(callback, thisArg, 3);
      while (++index < length) {
        if (callback(array[index], index, array)) {
          return index;
        }
      }
      return -1;
    }

    /**
     * This method is like `_.findIndex` except that it iterates over elements
     * of a `collection` from right to left.
     *
     * If a property name is provided for `callback` the created "_.pluck" style
     * callback will return the property value of the given element.
     *
     * If an object is provided for `callback` the created "_.where" style callback
     * will return `true` for elements that have the properties of the given object,
     * else `false`.
     *
     * @static
     * @memberOf _
     * @category Arrays
     * @param {Array} array The array to search.
     * @param {Function|Object|string} [callback=identity] The function called
     *  per iteration. If a property name or object is provided it will be used
     *  to create a "_.pluck" or "_.where" style callback, respectively.
     * @param {*} [thisArg] The `this` binding of `callback`.
     * @returns {number} Returns the index of the found element, else `-1`.
     * @example
     *
     * var characters = [
     *   { 'name': 'barney',  'age': 36, 'blocked': true },
     *   { 'name': 'fred',    'age': 40, 'blocked': false },
     *   { 'name': 'pebbles', 'age': 1,  'blocked': true }
     * ];
     *
     * _.findLastIndex(characters, function(chr) {
     *   return chr.age > 30;
     * });
     * // => 1
     *
     * // using "_.where" callback shorthand
     * _.findLastIndex(characters, { 'age': 36 });
     * // => 0
     *
     * // using "_.pluck" callback shorthand
     * _.findLastIndex(characters, 'blocked');
     * // => 2
     */
    function findLastIndex(array, callback, thisArg) {
      var length = array ? array.length : 0;
      callback = lodash.createCallback(callback, thisArg, 3);
      while (length--) {
        if (callback(array[length], length, array)) {
          return length;
        }
      }
      return -1;
    }

    /**
     * Gets the first element or first `n` elements of an array. If a callback
     * is provided elements at the beginning of the array are returned as long
     * as the callback returns truey. The callback is bound to `thisArg` and
     * invoked with three arguments; (value, index, array).
     *
     * If a property name is provided for `callback` the created "_.pluck" style
     * callback will return the property value of the given element.
     *
     * If an object is provided for `callback` the created "_.where" style callback
     * will return `true` for elements that have the properties of the given object,
     * else `false`.
     *
     * @static
     * @memberOf _
     * @alias head, take
     * @category Arrays
     * @param {Array} array The array to query.
     * @param {Function|Object|number|string} [callback] The function called
     *  per element or the number of elements to return. If a property name or
     *  object is provided it will be used to create a "_.pluck" or "_.where"
     *  style callback, respectively.
     * @param {*} [thisArg] The `this` binding of `callback`.
     * @returns {*} Returns the first element(s) of `array`.
     * @example
     *
     * _.first([1, 2, 3]);
     * // => 1
     *
     * _.first([1, 2, 3], 2);
     * // => [1, 2]
     *
     * _.first([1, 2, 3], function(num) {
     *   return num < 3;
     * });
     * // => [1, 2]
     *
     * var characters = [
     *   { 'name': 'barney',  'blocked': true,  'employer': 'slate' },
     *   { 'name': 'fred',    'blocked': false, 'employer': 'slate' },
     *   { 'name': 'pebbles', 'blocked': true,  'employer': 'na' }
     * ];
     *
     * // using "_.pluck" callback shorthand
     * _.first(characters, 'blocked');
     * // => [{ 'name': 'barney', 'blocked': true, 'employer': 'slate' }]
     *
     * // using "_.where" callback shorthand
     * _.pluck(_.first(characters, { 'employer': 'slate' }), 'name');
     * // => ['barney', 'fred']
     */
    function first(array, callback, thisArg) {
      var n = 0,
          length = array ? array.length : 0;

      if (typeof callback != 'number' && callback != null) {
        var index = -1;
        callback = lodash.createCallback(callback, thisArg, 3);
        while (++index < length && callback(array[index], index, array)) {
          n++;
        }
      } else {
        n = callback;
        if (n == null || thisArg) {
          return array ? array[0] : undefined;
        }
      }
      return slice(array, 0, nativeMin(nativeMax(0, n), length));
    }

    /**
     * Flattens a nested array (the nesting can be to any depth). If `isShallow`
     * is truey, the array will only be flattened a single level. If a callback
     * is provided each element of the array is passed through the callback before
     * flattening. The callback is bound to `thisArg` and invoked with three
     * arguments; (value, index, array).
     *
     * If a property name is provided for `callback` the created "_.pluck" style
     * callback will return the property value of the given element.
     *
     * If an object is provided for `callback` the created "_.where" style callback
     * will return `true` for elements that have the properties of the given object,
     * else `false`.
     *
     * @static
     * @memberOf _
     * @category Arrays
     * @param {Array} array The array to flatten.
     * @param {boolean} [isShallow=false] A flag to restrict flattening to a single level.
     * @param {Function|Object|string} [callback=identity] The function called
     *  per iteration. If a property name or object is provided it will be used
     *  to create a "_.pluck" or "_.where" style callback, respectively.
     * @param {*} [thisArg] The `this` binding of `callback`.
     * @returns {Array} Returns a new flattened array.
     * @example
     *
     * _.flatten([1, [2], [3, [[4]]]]);
     * // => [1, 2, 3, 4];
     *
     * _.flatten([1, [2], [3, [[4]]]], true);
     * // => [1, 2, 3, [[4]]];
     *
     * var characters = [
     *   { 'name': 'barney', 'age': 30, 'pets': ['hoppy'] },
     *   { 'name': 'fred',   'age': 40, 'pets': ['baby puss', 'dino'] }
     * ];
     *
     * // using "_.pluck" callback shorthand
     * _.flatten(characters, 'pets');
     * // => ['hoppy', 'baby puss', 'dino']
     */
    function flatten(array, isShallow, callback, thisArg) {
      // juggle arguments
      if (typeof isShallow != 'boolean' && isShallow != null) {
        thisArg = callback;
        callback = (typeof isShallow != 'function' && thisArg && thisArg[isShallow] === array) ? null : isShallow;
        isShallow = false;
      }
      if (callback != null) {
        array = map(array, callback, thisArg);
      }
      return baseFlatten(array, isShallow);
    }

    /**
     * Gets the index at which the first occurrence of `value` is found using
     * strict equality for comparisons, i.e. `===`. If the array is already sorted
     * providing `true` for `fromIndex` will run a faster binary search.
     *
     * @static
     * @memberOf _
     * @category Arrays
     * @param {Array} array The array to search.
     * @param {*} value The value to search for.
     * @param {boolean|number} [fromIndex=0] The index to search from or `true`
     *  to perform a binary search on a sorted array.
     * @returns {number} Returns the index of the matched value or `-1`.
     * @example
     *
     * _.indexOf([1, 2, 3, 1, 2, 3], 2);
     * // => 1
     *
     * _.indexOf([1, 2, 3, 1, 2, 3], 2, 3);
     * // => 4
     *
     * _.indexOf([1, 1, 2, 2, 3, 3], 2, true);
     * // => 2
     */
    function indexOf(array, value, fromIndex) {
      if (typeof fromIndex == 'number') {
        var length = array ? array.length : 0;
        fromIndex = (fromIndex < 0 ? nativeMax(0, length + fromIndex) : fromIndex || 0);
      } else if (fromIndex) {
        var index = sortedIndex(array, value);
        return array[index] === value ? index : -1;
      }
      return baseIndexOf(array, value, fromIndex);
    }

    /**
     * Gets all but the last element or last `n` elements of an array. If a
     * callback is provided elements at the end of the array are excluded from
     * the result as long as the callback returns truey. The callback is bound
     * to `thisArg` and invoked with three arguments; (value, index, array).
     *
     * If a property name is provided for `callback` the created "_.pluck" style
     * callback will return the property value of the given element.
     *
     * If an object is provided for `callback` the created "_.where" style callback
     * will return `true` for elements that have the properties of the given object,
     * else `false`.
     *
     * @static
     * @memberOf _
     * @category Arrays
     * @param {Array} array The array to query.
     * @param {Function|Object|number|string} [callback=1] The function called
     *  per element or the number of elements to exclude. If a property name or
     *  object is provided it will be used to create a "_.pluck" or "_.where"
     *  style callback, respectively.
     * @param {*} [thisArg] The `this` binding of `callback`.
     * @returns {Array} Returns a slice of `array`.
     * @example
     *
     * _.initial([1, 2, 3]);
     * // => [1, 2]
     *
     * _.initial([1, 2, 3], 2);
     * // => [1]
     *
     * _.initial([1, 2, 3], function(num) {
     *   return num > 1;
     * });
     * // => [1]
     *
     * var characters = [
     *   { 'name': 'barney',  'blocked': false, 'employer': 'slate' },
     *   { 'name': 'fred',    'blocked': true,  'employer': 'slate' },
     *   { 'name': 'pebbles', 'blocked': true,  'employer': 'na' }
     * ];
     *
     * // using "_.pluck" callback shorthand
     * _.initial(characters, 'blocked');
     * // => [{ 'name': 'barney',  'blocked': false, 'employer': 'slate' }]
     *
     * // using "_.where" callback shorthand
     * _.pluck(_.initial(characters, { 'employer': 'na' }), 'name');
     * // => ['barney', 'fred']
     */
    function initial(array, callback, thisArg) {
      var n = 0,
          length = array ? array.length : 0;

      if (typeof callback != 'number' && callback != null) {
        var index = length;
        callback = lodash.createCallback(callback, thisArg, 3);
        while (index-- && callback(array[index], index, array)) {
          n++;
        }
      } else {
        n = (callback == null || thisArg) ? 1 : callback || n;
      }
      return slice(array, 0, nativeMin(nativeMax(0, length - n), length));
    }

    /**
     * Creates an array of unique values present in all provided arrays using
     * strict equality for comparisons, i.e. `===`.
     *
     * @static
     * @memberOf _
     * @category Arrays
     * @param {...Array} [array] The arrays to inspect.
     * @returns {Array} Returns an array of shared values.
     * @example
     *
     * _.intersection([1, 2, 3], [5, 2, 1, 4], [2, 1]);
     * // => [1, 2]
     */
    function intersection() {
      var args = [],
          argsIndex = -1,
          argsLength = arguments.length,
          caches = getArray(),
          indexOf = getIndexOf(),
          trustIndexOf = indexOf === baseIndexOf,
          seen = getArray();

      while (++argsIndex < argsLength) {
        var value = arguments[argsIndex];
        if (isArray(value) || isArguments(value)) {
          args.push(value);
          caches.push(trustIndexOf && value.length >= largeArraySize &&
            createCache(argsIndex ? args[argsIndex] : seen));
        }
      }
      var array = args[0],
          index = -1,
          length = array ? array.length : 0,
          result = [];

      outer:
      while (++index < length) {
        var cache = caches[0];
        value = array[index];

        if ((cache ? cacheIndexOf(cache, value) : indexOf(seen, value)) < 0) {
          argsIndex = argsLength;
          (cache || seen).push(value);
          while (--argsIndex) {
            cache = caches[argsIndex];
            if ((cache ? cacheIndexOf(cache, value) : indexOf(args[argsIndex], value)) < 0) {
              continue outer;
            }
          }
          result.push(value);
        }
      }
      while (argsLength--) {
        cache = caches[argsLength];
        if (cache) {
          releaseObject(cache);
        }
      }
      releaseArray(caches);
      releaseArray(seen);
      return result;
    }

    /**
     * Gets the last element or last `n` elements of an array. If a callback is
     * provided elements at the end of the array are returned as long as the
     * callback returns truey. The callback is bound to `thisArg` and invoked
     * with three arguments; (value, index, array).
     *
     * If a property name is provided for `callback` the created "_.pluck" style
     * callback will return the property value of the given element.
     *
     * If an object is provided for `callback` the created "_.where" style callback
     * will return `true` for elements that have the properties of the given object,
     * else `false`.
     *
     * @static
     * @memberOf _
     * @category Arrays
     * @param {Array} array The array to query.
     * @param {Function|Object|number|string} [callback] The function called
     *  per element or the number of elements to return. If a property name or
     *  object is provided it will be used to create a "_.pluck" or "_.where"
     *  style callback, respectively.
     * @param {*} [thisArg] The `this` binding of `callback`.
     * @returns {*} Returns the last element(s) of `array`.
     * @example
     *
     * _.last([1, 2, 3]);
     * // => 3
     *
     * _.last([1, 2, 3], 2);
     * // => [2, 3]
     *
     * _.last([1, 2, 3], function(num) {
     *   return num > 1;
     * });
     * // => [2, 3]
     *
     * var characters = [
     *   { 'name': 'barney',  'blocked': false, 'employer': 'slate' },
     *   { 'name': 'fred',    'blocked': true,  'employer': 'slate' },
     *   { 'name': 'pebbles', 'blocked': true,  'employer': 'na' }
     * ];
     *
     * // using "_.pluck" callback shorthand
     * _.pluck(_.last(characters, 'blocked'), 'name');
     * // => ['fred', 'pebbles']
     *
     * // using "_.where" callback shorthand
     * _.last(characters, { 'employer': 'na' });
     * // => [{ 'name': 'pebbles', 'blocked': true, 'employer': 'na' }]
     */
    function last(array, callback, thisArg) {
      var n = 0,
          length = array ? array.length : 0;

      if (typeof callback != 'number' && callback != null) {
        var index = length;
        callback = lodash.createCallback(callback, thisArg, 3);
        while (index-- && callback(array[index], index, array)) {
          n++;
        }
      } else {
        n = callback;
        if (n == null || thisArg) {
          return array ? array[length - 1] : undefined;
        }
      }
      return slice(array, nativeMax(0, length - n));
    }

    /**
     * Gets the index at which the last occurrence of `value` is found using strict
     * equality for comparisons, i.e. `===`. If `fromIndex` is negative, it is used
     * as the offset from the end of the collection.
     *
     * If a property name is provided for `callback` the created "_.pluck" style
     * callback will return the property value of the given element.
     *
     * If an object is provided for `callback` the created "_.where" style callback
     * will return `true` for elements that have the properties of the given object,
     * else `false`.
     *
     * @static
     * @memberOf _
     * @category Arrays
     * @param {Array} array The array to search.
     * @param {*} value The value to search for.
     * @param {number} [fromIndex=array.length-1] The index to search from.
     * @returns {number} Returns the index of the matched value or `-1`.
     * @example
     *
     * _.lastIndexOf([1, 2, 3, 1, 2, 3], 2);
     * // => 4
     *
     * _.lastIndexOf([1, 2, 3, 1, 2, 3], 2, 3);
     * // => 1
     */
    function lastIndexOf(array, value, fromIndex) {
      var index = array ? array.length : 0;
      if (typeof fromIndex == 'number') {
        index = (fromIndex < 0 ? nativeMax(0, index + fromIndex) : nativeMin(fromIndex, index - 1)) + 1;
      }
      while (index--) {
        if (array[index] === value) {
          return index;
        }
      }
      return -1;
    }

    /**
     * Removes all provided values from the given array using strict equality for
     * comparisons, i.e. `===`.
     *
     * @static
     * @memberOf _
     * @category Arrays
     * @param {Array} array The array to modify.
     * @param {...*} [value] The values to remove.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [1, 2, 3, 1, 2, 3];
     * _.pull(array, 2, 3);
     * console.log(array);
     * // => [1, 1]
     */
    function pull(array) {
      var args = arguments,
          argsIndex = 0,
          argsLength = args.length,
          length = array ? array.length : 0;

      while (++argsIndex < argsLength) {
        var index = -1,
            value = args[argsIndex];
        while (++index < length) {
          if (array[index] === value) {
            splice.call(array, index--, 1);
            length--;
          }
        }
      }
      return array;
    }

    /**
     * Creates an array of numbers (positive and/or negative) progressing from
     * `start` up to but not including `end`. If `start` is less than `stop` a
     * zero-length range is created unless a negative `step` is specified.
     *
     * @static
     * @memberOf _
     * @category Arrays
     * @param {number} [start=0] The start of the range.
     * @param {number} end The end of the range.
     * @param {number} [step=1] The value to increment or decrement by.
     * @returns {Array} Returns a new range array.
     * @example
     *
     * _.range(4);
     * // => [0, 1, 2, 3]
     *
     * _.range(1, 5);
     * // => [1, 2, 3, 4]
     *
     * _.range(0, 20, 5);
     * // => [0, 5, 10, 15]
     *
     * _.range(0, -4, -1);
     * // => [0, -1, -2, -3]
     *
     * _.range(1, 4, 0);
     * // => [1, 1, 1]
     *
     * _.range(0);
     * // => []
     */
    function range(start, end, step) {
      start = +start || 0;
      step = typeof step == 'number' ? step : (+step || 1);

      if (end == null) {
        end = start;
        start = 0;
      }
      // use `Array(length)` so engines like Chakra and V8 avoid slower modes
      // http://youtu.be/XAqIpGU8ZZk#t=17m25s
      var index = -1,
          length = nativeMax(0, ceil((end - start) / (step || 1))),
          result = Array(length);

      while (++index < length) {
        result[index] = start;
        start += step;
      }
      return result;
    }

    /**
     * Removes all elements from an array that the callback returns truey for
     * and returns an array of removed elements. The callback is bound to `thisArg`
     * and invoked with three arguments; (value, index, array).
     *
     * If a property name is provided for `callback` the created "_.pluck" style
     * callback will return the property value of the given element.
     *
     * If an object is provided for `callback` the created "_.where" style callback
     * will return `true` for elements that have the properties of the given object,
     * else `false`.
     *
     * @static
     * @memberOf _
     * @category Arrays
     * @param {Array} array The array to modify.
     * @param {Function|Object|string} [callback=identity] The function called
     *  per iteration. If a property name or object is provided it will be used
     *  to create a "_.pluck" or "_.where" style callback, respectively.
     * @param {*} [thisArg] The `this` binding of `callback`.
     * @returns {Array} Returns a new array of removed elements.
     * @example
     *
     * var array = [1, 2, 3, 4, 5, 6];
     * var evens = _.remove(array, function(num) { return num % 2 == 0; });
     *
     * console.log(array);
     * // => [1, 3, 5]
     *
     * console.log(evens);
     * // => [2, 4, 6]
     */
    function remove(array, callback, thisArg) {
      var index = -1,
          length = array ? array.length : 0,
          result = [];

      callback = lodash.createCallback(callback, thisArg, 3);
      while (++index < length) {
        var value = array[index];
        if (callback(value, index, array)) {
          result.push(value);
          splice.call(array, index--, 1);
          length--;
        }
      }
      return result;
    }

    /**
     * The opposite of `_.initial` this method gets all but the first element or
     * first `n` elements of an array. If a callback function is provided elements
     * at the beginning of the array are excluded from the result as long as the
     * callback returns truey. The callback is bound to `thisArg` and invoked
     * with three arguments; (value, index, array).
     *
     * If a property name is provided for `callback` the created "_.pluck" style
     * callback will return the property value of the given element.
     *
     * If an object is provided for `callback` the created "_.where" style callback
     * will return `true` for elements that have the properties of the given object,
     * else `false`.
     *
     * @static
     * @memberOf _
     * @alias drop, tail
     * @category Arrays
     * @param {Array} array The array to query.
     * @param {Function|Object|number|string} [callback=1] The function called
     *  per element or the number of elements to exclude. If a property name or
     *  object is provided it will be used to create a "_.pluck" or "_.where"
     *  style callback, respectively.
     * @param {*} [thisArg] The `this` binding of `callback`.
     * @returns {Array} Returns a slice of `array`.
     * @example
     *
     * _.rest([1, 2, 3]);
     * // => [2, 3]
     *
     * _.rest([1, 2, 3], 2);
     * // => [3]
     *
     * _.rest([1, 2, 3], function(num) {
     *   return num < 3;
     * });
     * // => [3]
     *
     * var characters = [
     *   { 'name': 'barney',  'blocked': true,  'employer': 'slate' },
     *   { 'name': 'fred',    'blocked': false,  'employer': 'slate' },
     *   { 'name': 'pebbles', 'blocked': true, 'employer': 'na' }
     * ];
     *
     * // using "_.pluck" callback shorthand
     * _.pluck(_.rest(characters, 'blocked'), 'name');
     * // => ['fred', 'pebbles']
     *
     * // using "_.where" callback shorthand
     * _.rest(characters, { 'employer': 'slate' });
     * // => [{ 'name': 'pebbles', 'blocked': true, 'employer': 'na' }]
     */
    function rest(array, callback, thisArg) {
      if (typeof callback != 'number' && callback != null) {
        var n = 0,
            index = -1,
            length = array ? array.length : 0;

        callback = lodash.createCallback(callback, thisArg, 3);
        while (++index < length && callback(array[index], index, array)) {
          n++;
        }
      } else {
        n = (callback == null || thisArg) ? 1 : nativeMax(0, callback);
      }
      return slice(array, n);
    }

    /**
     * Uses a binary search to determine the smallest index at which a value
     * should be inserted into a given sorted array in order to maintain the sort
     * order of the array. If a callback is provided it will be executed for
     * `value` and each element of `array` to compute their sort ranking. The
     * callback is bound to `thisArg` and invoked with one argument; (value).
     *
     * If a property name is provided for `callback` the created "_.pluck" style
     * callback will return the property value of the given element.
     *
     * If an object is provided for `callback` the created "_.where" style callback
     * will return `true` for elements that have the properties of the given object,
     * else `false`.
     *
     * @static
     * @memberOf _
     * @category Arrays
     * @param {Array} array The array to inspect.
     * @param {*} value The value to evaluate.
     * @param {Function|Object|string} [callback=identity] The function called
     *  per iteration. If a property name or object is provided it will be used
     *  to create a "_.pluck" or "_.where" style callback, respectively.
     * @param {*} [thisArg] The `this` binding of `callback`.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * _.sortedIndex([20, 30, 50], 40);
     * // => 2
     *
     * // using "_.pluck" callback shorthand
     * _.sortedIndex([{ 'x': 20 }, { 'x': 30 }, { 'x': 50 }], { 'x': 40 }, 'x');
     * // => 2
     *
     * var dict = {
     *   'wordToNumber': { 'twenty': 20, 'thirty': 30, 'fourty': 40, 'fifty': 50 }
     * };
     *
     * _.sortedIndex(['twenty', 'thirty', 'fifty'], 'fourty', function(word) {
     *   return dict.wordToNumber[word];
     * });
     * // => 2
     *
     * _.sortedIndex(['twenty', 'thirty', 'fifty'], 'fourty', function(word) {
     *   return this.wordToNumber[word];
     * }, dict);
     * // => 2
     */
    function sortedIndex(array, value, callback, thisArg) {
      var low = 0,
          high = array ? array.length : low;

      // explicitly reference `identity` for better inlining in Firefox
      callback = callback ? lodash.createCallback(callback, thisArg, 1) : identity;
      value = callback(value);

      while (low < high) {
        var mid = (low + high) >>> 1;
        (callback(array[mid]) < value)
          ? low = mid + 1
          : high = mid;
      }
      return low;
    }

    /**
     * Creates an array of unique values, in order, of the provided arrays using
     * strict equality for comparisons, i.e. `===`.
     *
     * @static
     * @memberOf _
     * @category Arrays
     * @param {...Array} [array] The arrays to inspect.
     * @returns {Array} Returns an array of combined values.
     * @example
     *
     * _.union([1, 2, 3], [5, 2, 1, 4], [2, 1]);
     * // => [1, 2, 3, 5, 4]
     */
    function union() {
      return baseUniq(baseFlatten(arguments, true, true));
    }

    /**
     * Creates a duplicate-value-free version of an array using strict equality
     * for comparisons, i.e. `===`. If the array is sorted, providing
     * `true` for `isSorted` will use a faster algorithm. If a callback is provided
     * each element of `array` is passed through the callback before uniqueness
     * is computed. The callback is bound to `thisArg` and invoked with three
     * arguments; (value, index, array).
     *
     * If a property name is provided for `callback` the created "_.pluck" style
     * callback will return the property value of the given element.
     *
     * If an object is provided for `callback` the created "_.where" style callback
     * will return `true` for elements that have the properties of the given object,
     * else `false`.
     *
     * @static
     * @memberOf _
     * @alias unique
     * @category Arrays
     * @param {Array} array The array to process.
     * @param {boolean} [isSorted=false] A flag to indicate that `array` is sorted.
     * @param {Function|Object|string} [callback=identity] The function called
     *  per iteration. If a property name or object is provided it will be used
     *  to create a "_.pluck" or "_.where" style callback, respectively.
     * @param {*} [thisArg] The `this` binding of `callback`.
     * @returns {Array} Returns a duplicate-value-free array.
     * @example
     *
     * _.uniq([1, 2, 1, 3, 1]);
     * // => [1, 2, 3]
     *
     * _.uniq([1, 1, 2, 2, 3], true);
     * // => [1, 2, 3]
     *
     * _.uniq(['A', 'b', 'C', 'a', 'B', 'c'], function(letter) { return letter.toLowerCase(); });
     * // => ['A', 'b', 'C']
     *
     * _.uniq([1, 2.5, 3, 1.5, 2, 3.5], function(num) { return this.floor(num); }, Math);
     * // => [1, 2.5, 3]
     *
     * // using "_.pluck" callback shorthand
     * _.uniq([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 1 }, { 'x': 2 }]
     */
    function uniq(array, isSorted, callback, thisArg) {
      // juggle arguments
      if (typeof isSorted != 'boolean' && isSorted != null) {
        thisArg = callback;
        callback = (typeof isSorted != 'function' && thisArg && thisArg[isSorted] === array) ? null : isSorted;
        isSorted = false;
      }
      if (callback != null) {
        callback = lodash.createCallback(callback, thisArg, 3);
      }
      return baseUniq(array, isSorted, callback);
    }

    /**
     * Creates an array excluding all provided values using strict equality for
     * comparisons, i.e. `===`.
     *
     * @static
     * @memberOf _
     * @category Arrays
     * @param {Array} array The array to filter.
     * @param {...*} [value] The values to exclude.
     * @returns {Array} Returns a new array of filtered values.
     * @example
     *
     * _.without([1, 2, 1, 0, 3, 1, 4], 0, 1);
     * // => [2, 3, 4]
     */
    function without(array) {
      return baseDifference(array, slice(arguments, 1));
    }

    /**
     * Creates an array that is the symmetric difference of the provided arrays.
     * See http://en.wikipedia.org/wiki/Symmetric_difference.
     *
     * @static
     * @memberOf _
     * @category Arrays
     * @param {...Array} [array] The arrays to inspect.
     * @returns {Array} Returns an array of values.
     * @example
     *
     * _.xor([1, 2, 3], [5, 2, 1, 4]);
     * // => [3, 5, 4]
     *
     * _.xor([1, 2, 5], [2, 3, 5], [3, 4, 5]);
     * // => [1, 4, 5]
     */
    function xor() {
      var index = -1,
          length = arguments.length;

      while (++index < length) {
        var array = arguments[index];
        if (isArray(array) || isArguments(array)) {
          var result = result
            ? baseUniq(baseDifference(result, array).concat(baseDifference(array, result)))
            : array;
        }
      }
      return result || [];
    }

    /**
     * Creates an array of grouped elements, the first of which contains the first
     * elements of the given arrays, the second of which contains the second
     * elements of the given arrays, and so on.
     *
     * @static
     * @memberOf _
     * @alias unzip
     * @category Arrays
     * @param {...Array} [array] Arrays to process.
     * @returns {Array} Returns a new array of grouped elements.
     * @example
     *
     * _.zip(['fred', 'barney'], [30, 40], [true, false]);
     * // => [['fred', 30, true], ['barney', 40, false]]
     */
    function zip() {
      var array = arguments.length > 1 ? arguments : arguments[0],
          index = -1,
          length = array ? max(pluck(array, 'length')) : 0,
          result = Array(length < 0 ? 0 : length);

      while (++index < length) {
        result[index] = pluck(array, index);
      }
      return result;
    }

    /**
     * Creates an object composed from arrays of `keys` and `values`. Provide
     * either a single two dimensional array, i.e. `[[key1, value1], [key2, value2]]`
     * or two arrays, one of `keys` and one of corresponding `values`.
     *
     * @static
     * @memberOf _
     * @alias object
     * @category Arrays
     * @param {Array} keys The array of keys.
     * @param {Array} [values=[]] The array of values.
     * @returns {Object} Returns an object composed of the given keys and
     *  corresponding values.
     * @example
     *
     * _.zipObject(['fred', 'barney'], [30, 40]);
     * // => { 'fred': 30, 'barney': 40 }
     */
    function zipObject(keys, values) {
      var index = -1,
          length = keys ? keys.length : 0,
          result = {};

      if (!values && length && !isArray(keys[0])) {
        values = [];
      }
      while (++index < length) {
        var key = keys[index];
        if (values) {
          result[key] = values[index];
        } else if (key) {
          result[key[0]] = key[1];
        }
      }
      return result;
    }

    /*--------------------------------------------------------------------------*/

    /**
     * Creates a function that executes `func`, with  the `this` binding and
     * arguments of the created function, only after being called `n` times.
     *
     * @static
     * @memberOf _
     * @category Functions
     * @param {number} n The number of times the function must be called before
     *  `func` is executed.
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new restricted function.
     * @example
     *
     * var saves = ['profile', 'settings'];
     *
     * var done = _.after(saves.length, function() {
     *   console.log('Done saving!');
     * });
     *
     * _.forEach(saves, function(type) {
     *   asyncSave({ 'type': type, 'complete': done });
     * });
     * // => logs 'Done saving!', after all saves have completed
     */
    function after(n, func) {
      if (!isFunction(func)) {
        throw new TypeError;
      }
      return function() {
        if (--n < 1) {
          return func.apply(this, arguments);
        }
      };
    }

    /**
     * Creates a function that, when called, invokes `func` with the `this`
     * binding of `thisArg` and prepends any additional `bind` arguments to those
     * provided to the bound function.
     *
     * @static
     * @memberOf _
     * @category Functions
     * @param {Function} func The function to bind.
     * @param {*} [thisArg] The `this` binding of `func`.
     * @param {...*} [arg] Arguments to be partially applied.
     * @returns {Function} Returns the new bound function.
     * @example
     *
     * var func = function(greeting) {
     *   return greeting + ' ' + this.name;
     * };
     *
     * func = _.bind(func, { 'name': 'fred' }, 'hi');
     * func();
     * // => 'hi fred'
     */
    function bind(func, thisArg) {
      return arguments.length > 2
        ? createWrapper(func, 17, slice(arguments, 2), null, thisArg)
        : createWrapper(func, 1, null, null, thisArg);
    }

    /**
     * Binds methods of an object to the object itself, overwriting the existing
     * method. Method names may be specified as individual arguments or as arrays
     * of method names. If no method names are provided all the function properties
     * of `object` will be bound.
     *
     * @static
     * @memberOf _
     * @category Functions
     * @param {Object} object The object to bind and assign the bound methods to.
     * @param {...string} [methodName] The object method names to
     *  bind, specified as individual method names or arrays of method names.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var view = {
     *   'label': 'docs',
     *   'onClick': function() { console.log('clicked ' + this.label); }
     * };
     *
     * _.bindAll(view);
     * jQuery('#docs').on('click', view.onClick);
     * // => logs 'clicked docs', when the button is clicked
     */
    function bindAll(object) {
      var funcs = arguments.length > 1 ? baseFlatten(arguments, true, false, 1) : functions(object),
          index = -1,
          length = funcs.length;

      while (++index < length) {
        var key = funcs[index];
        object[key] = createWrapper(object[key], 1, null, null, object);
      }
      return object;
    }

    /**
     * Creates a function that, when called, invokes the method at `object[key]`
     * and prepends any additional `bindKey` arguments to those provided to the bound
     * function. This method differs from `_.bind` by allowing bound functions to
     * reference methods that will be redefined or don't yet exist.
     * See http://michaux.ca/articles/lazy-function-definition-pattern.
     *
     * @static
     * @memberOf _
     * @category Functions
     * @param {Object} object The object the method belongs to.
     * @param {string} key The key of the method.
     * @param {...*} [arg] Arguments to be partially applied.
     * @returns {Function} Returns the new bound function.
     * @example
     *
     * var object = {
     *   'name': 'fred',
     *   'greet': function(greeting) {
     *     return greeting + ' ' + this.name;
     *   }
     * };
     *
     * var func = _.bindKey(object, 'greet', 'hi');
     * func();
     * // => 'hi fred'
     *
     * object.greet = function(greeting) {
     *   return greeting + 'ya ' + this.name + '!';
     * };
     *
     * func();
     * // => 'hiya fred!'
     */
    function bindKey(object, key) {
      return arguments.length > 2
        ? createWrapper(key, 19, slice(arguments, 2), null, object)
        : createWrapper(key, 3, null, null, object);
    }

    /**
     * Creates a function that is the composition of the provided functions,
     * where each function consumes the return value of the function that follows.
     * For example, composing the functions `f()`, `g()`, and `h()` produces `f(g(h()))`.
     * Each function is executed with the `this` binding of the composed function.
     *
     * @static
     * @memberOf _
     * @category Functions
     * @param {...Function} [func] Functions to compose.
     * @returns {Function} Returns the new composed function.
     * @example
     *
     * var realNameMap = {
     *   'pebbles': 'penelope'
     * };
     *
     * var format = function(name) {
     *   name = realNameMap[name.toLowerCase()] || name;
     *   return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
     * };
     *
     * var greet = function(formatted) {
     *   return 'Hiya ' + formatted + '!';
     * };
     *
     * var welcome = _.compose(greet, format);
     * welcome('pebbles');
     * // => 'Hiya Penelope!'
     */
    function compose() {
      var funcs = arguments,
          length = funcs.length;

      while (length--) {
        if (!isFunction(funcs[length])) {
          throw new TypeError;
        }
      }
      return function() {
        var args = arguments,
            length = funcs.length;

        while (length--) {
          args = [funcs[length].apply(this, args)];
        }
        return args[0];
      };
    }

    /**
     * Creates a function which accepts one or more arguments of `func` that when
     * invoked either executes `func` returning its result, if all `func` arguments
     * have been provided, or returns a function that accepts one or more of the
     * remaining `func` arguments, and so on. The arity of `func` can be specified
     * if `func.length` is not sufficient.
     *
     * @static
     * @memberOf _
     * @category Functions
     * @param {Function} func The function to curry.
     * @param {number} [arity=func.length] The arity of `func`.
     * @returns {Function} Returns the new curried function.
     * @example
     *
     * var curried = _.curry(function(a, b, c) {
     *   console.log(a + b + c);
     * });
     *
     * curried(1)(2)(3);
     * // => 6
     *
     * curried(1, 2)(3);
     * // => 6
     *
     * curried(1, 2, 3);
     * // => 6
     */
    function curry(func, arity) {
      arity = typeof arity == 'number' ? arity : (+arity || func.length);
      return createWrapper(func, 4, null, null, null, arity);
    }

    /**
     * Creates a function that will delay the execution of `func` until after
     * `wait` milliseconds have elapsed since the last time it was invoked.
     * Provide an options object to indicate that `func` should be invoked on
     * the leading and/or trailing edge of the `wait` timeout. Subsequent calls
     * to the debounced function will return the result of the last `func` call.
     *
     * Note: If `leading` and `trailing` options are `true` `func` will be called
     * on the trailing edge of the timeout only if the the debounced function is
     * invoked more than once during the `wait` timeout.
     *
     * @static
     * @memberOf _
     * @category Functions
     * @param {Function} func The function to debounce.
     * @param {number} wait The number of milliseconds to delay.
     * @param {Object} [options] The options object.
     * @param {boolean} [options.leading=false] Specify execution on the leading edge of the timeout.
     * @param {number} [options.maxWait] The maximum time `func` is allowed to be delayed before it's called.
     * @param {boolean} [options.trailing=true] Specify execution on the trailing edge of the timeout.
     * @returns {Function} Returns the new debounced function.
     * @example
     *
     * // avoid costly calculations while the window size is in flux
     * var lazyLayout = _.debounce(calculateLayout, 150);
     * jQuery(window).on('resize', lazyLayout);
     *
     * // execute `sendMail` when the click event is fired, debouncing subsequent calls
     * jQuery('#postbox').on('click', _.debounce(sendMail, 300, {
     *   'leading': true,
     *   'trailing': false
     * });
     *
     * // ensure `batchLog` is executed once after 1 second of debounced calls
     * var source = new EventSource('/stream');
     * source.addEventListener('message', _.debounce(batchLog, 250, {
     *   'maxWait': 1000
     * }, false);
     */
    function debounce(func, wait, options) {
      var args,
          maxTimeoutId,
          result,
          stamp,
          thisArg,
          timeoutId,
          trailingCall,
          lastCalled = 0,
          maxWait = false,
          trailing = true;

      if (!isFunction(func)) {
        throw new TypeError;
      }
      wait = nativeMax(0, wait) || 0;
      if (options === true) {
        var leading = true;
        trailing = false;
      } else if (isObject(options)) {
        leading = options.leading;
        maxWait = 'maxWait' in options && (nativeMax(wait, options.maxWait) || 0);
        trailing = 'trailing' in options ? options.trailing : trailing;
      }
      var delayed = function() {
        var remaining = wait - (now() - stamp);
        if (remaining <= 0) {
          if (maxTimeoutId) {
            clearTimeout(maxTimeoutId);
          }
          var isCalled = trailingCall;
          maxTimeoutId = timeoutId = trailingCall = undefined;
          if (isCalled) {
            lastCalled = now();
            result = func.apply(thisArg, args);
            if (!timeoutId && !maxTimeoutId) {
              args = thisArg = null;
            }
          }
        } else {
          timeoutId = setTimeout(delayed, remaining);
        }
      };

      var maxDelayed = function() {
        if (timeoutId) {
          clearTimeout(timeoutId);
        }
        maxTimeoutId = timeoutId = trailingCall = undefined;
        if (trailing || (maxWait !== wait)) {
          lastCalled = now();
          result = func.apply(thisArg, args);
          if (!timeoutId && !maxTimeoutId) {
            args = thisArg = null;
          }
        }
      };

      return function() {
        args = arguments;
        stamp = now();
        thisArg = this;
        trailingCall = trailing && (timeoutId || !leading);

        if (maxWait === false) {
          var leadingCall = leading && !timeoutId;
        } else {
          if (!maxTimeoutId && !leading) {
            lastCalled = stamp;
          }
          var remaining = maxWait - (stamp - lastCalled),
              isCalled = remaining <= 0;

          if (isCalled) {
            if (maxTimeoutId) {
              maxTimeoutId = clearTimeout(maxTimeoutId);
            }
            lastCalled = stamp;
            result = func.apply(thisArg, args);
          }
          else if (!maxTimeoutId) {
            maxTimeoutId = setTimeout(maxDelayed, remaining);
          }
        }
        if (isCalled && timeoutId) {
          timeoutId = clearTimeout(timeoutId);
        }
        else if (!timeoutId && wait !== maxWait) {
          timeoutId = setTimeout(delayed, wait);
        }
        if (leadingCall) {
          isCalled = true;
          result = func.apply(thisArg, args);
        }
        if (isCalled && !timeoutId && !maxTimeoutId) {
          args = thisArg = null;
        }
        return result;
      };
    }

    /**
     * Defers executing the `func` function until the current call stack has cleared.
     * Additional arguments will be provided to `func` when it is invoked.
     *
     * @static
     * @memberOf _
     * @category Functions
     * @param {Function} func The function to defer.
     * @param {...*} [arg] Arguments to invoke the function with.
     * @returns {number} Returns the timer id.
     * @example
     *
     * _.defer(function(text) { console.log(text); }, 'deferred');
     * // logs 'deferred' after one or more milliseconds
     */
    function defer(func) {
      if (!isFunction(func)) {
        throw new TypeError;
      }
      var args = slice(arguments, 1);
      return setTimeout(function() { func.apply(undefined, args); }, 1);
    }

    /**
     * Executes the `func` function after `wait` milliseconds. Additional arguments
     * will be provided to `func` when it is invoked.
     *
     * @static
     * @memberOf _
     * @category Functions
     * @param {Function} func The function to delay.
     * @param {number} wait The number of milliseconds to delay execution.
     * @param {...*} [arg] Arguments to invoke the function with.
     * @returns {number} Returns the timer id.
     * @example
     *
     * _.delay(function(text) { console.log(text); }, 1000, 'later');
     * // => logs 'later' after one second
     */
    function delay(func, wait) {
      if (!isFunction(func)) {
        throw new TypeError;
      }
      var args = slice(arguments, 2);
      return setTimeout(function() { func.apply(undefined, args); }, wait);
    }

    /**
     * Creates a function that memoizes the result of `func`. If `resolver` is
     * provided it will be used to determine the cache key for storing the result
     * based on the arguments provided to the memoized function. By default, the
     * first argument provided to the memoized function is used as the cache key.
     * The `func` is executed with the `this` binding of the memoized function.
     * The result cache is exposed as the `cache` property on the memoized function.
     *
     * @static
     * @memberOf _
     * @category Functions
     * @param {Function} func The function to have its output memoized.
     * @param {Function} [resolver] A function used to resolve the cache key.
     * @returns {Function} Returns the new memoizing function.
     * @example
     *
     * var fibonacci = _.memoize(function(n) {
     *   return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
     * });
     *
     * fibonacci(9)
     * // => 34
     *
     * var data = {
     *   'fred': { 'name': 'fred', 'age': 40 },
     *   'pebbles': { 'name': 'pebbles', 'age': 1 }
     * };
     *
     * // modifying the result cache
     * var get = _.memoize(function(name) { return data[name]; }, _.identity);
     * get('pebbles');
     * // => { 'name': 'pebbles', 'age': 1 }
     *
     * get.cache.pebbles.name = 'penelope';
     * get('pebbles');
     * // => { 'name': 'penelope', 'age': 1 }
     */
    function memoize(func, resolver) {
      if (!isFunction(func)) {
        throw new TypeError;
      }
      var memoized = function() {
        var cache = memoized.cache,
            key = resolver ? resolver.apply(this, arguments) : keyPrefix + arguments[0];

        return hasOwnProperty.call(cache, key)
          ? cache[key]
          : (cache[key] = func.apply(this, arguments));
      }
      memoized.cache = {};
      return memoized;
    }

    /**
     * Creates a function that is restricted to execute `func` once. Repeat calls to
     * the function will return the value of the first call. The `func` is executed
     * with the `this` binding of the created function.
     *
     * @static
     * @memberOf _
     * @category Functions
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new restricted function.
     * @example
     *
     * var initialize = _.once(createApplication);
     * initialize();
     * initialize();
     * // `initialize` executes `createApplication` once
     */
    function once(func) {
      var ran,
          result;

      if (!isFunction(func)) {
        throw new TypeError;
      }
      return function() {
        if (ran) {
          return result;
        }
        ran = true;
        result = func.apply(this, arguments);

        // clear the `func` variable so the function may be garbage collected
        func = null;
        return result;
      };
    }

    /**
     * Creates a function that, when called, invokes `func` with any additional
     * `partial` arguments prepended to those provided to the new function. This
     * method is similar to `_.bind` except it does **not** alter the `this` binding.
     *
     * @static
     * @memberOf _
     * @category Functions
     * @param {Function} func The function to partially apply arguments to.
     * @param {...*} [arg] Arguments to be partially applied.
     * @returns {Function} Returns the new partially applied function.
     * @example
     *
     * var greet = function(greeting, name) { return greeting + ' ' + name; };
     * var hi = _.partial(greet, 'hi');
     * hi('fred');
     * // => 'hi fred'
     */
    function partial(func) {
      return createWrapper(func, 16, slice(arguments, 1));
    }

    /**
     * This method is like `_.partial` except that `partial` arguments are
     * appended to those provided to the new function.
     *
     * @static
     * @memberOf _
     * @category Functions
     * @param {Function} func The function to partially apply arguments to.
     * @param {...*} [arg] Arguments to be partially applied.
     * @returns {Function} Returns the new partially applied function.
     * @example
     *
     * var defaultsDeep = _.partialRight(_.merge, _.defaults);
     *
     * var options = {
     *   'variable': 'data',
     *   'imports': { 'jq': $ }
     * };
     *
     * defaultsDeep(options, _.templateSettings);
     *
     * options.variable
     * // => 'data'
     *
     * options.imports
     * // => { '_': _, 'jq': $ }
     */
    function partialRight(func) {
      return createWrapper(func, 32, null, slice(arguments, 1));
    }

    /**
     * Creates a function that, when executed, will only call the `func` function
     * at most once per every `wait` milliseconds. Provide an options object to
     * indicate that `func` should be invoked on the leading and/or trailing edge
     * of the `wait` timeout. Subsequent calls to the throttled function will
     * return the result of the last `func` call.
     *
     * Note: If `leading` and `trailing` options are `true` `func` will be called
     * on the trailing edge of the timeout only if the the throttled function is
     * invoked more than once during the `wait` timeout.
     *
     * @static
     * @memberOf _
     * @category Functions
     * @param {Function} func The function to throttle.
     * @param {number} wait The number of milliseconds to throttle executions to.
     * @param {Object} [options] The options object.
     * @param {boolean} [options.leading=true] Specify execution on the leading edge of the timeout.
     * @param {boolean} [options.trailing=true] Specify execution on the trailing edge of the timeout.
     * @returns {Function} Returns the new throttled function.
     * @example
     *
     * // avoid excessively updating the position while scrolling
     * var throttled = _.throttle(updatePosition, 100);
     * jQuery(window).on('scroll', throttled);
     *
     * // execute `renewToken` when the click event is fired, but not more than once every 5 minutes
     * jQuery('.interactive').on('click', _.throttle(renewToken, 300000, {
     *   'trailing': false
     * }));
     */
    function throttle(func, wait, options) {
      var leading = true,
          trailing = true;

      if (!isFunction(func)) {
        throw new TypeError;
      }
      if (options === false) {
        leading = false;
      } else if (isObject(options)) {
        leading = 'leading' in options ? options.leading : leading;
        trailing = 'trailing' in options ? options.trailing : trailing;
      }
      debounceOptions.leading = leading;
      debounceOptions.maxWait = wait;
      debounceOptions.trailing = trailing;

      return debounce(func, wait, debounceOptions);
    }

    /**
     * Creates a function that provides `value` to the wrapper function as its
     * first argument. Additional arguments provided to the function are appended
     * to those provided to the wrapper function. The wrapper is executed with
     * the `this` binding of the created function.
     *
     * @static
     * @memberOf _
     * @category Functions
     * @param {*} value The value to wrap.
     * @param {Function} wrapper The wrapper function.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var p = _.wrap(_.escape, function(func, text) {
     *   return '<p>' + func(text) + '</p>';
     * });
     *
     * p('Fred, Wilma, & Pebbles');
     * // => '<p>Fred, Wilma, &amp; Pebbles</p>'
     */
    function wrap(value, wrapper) {
      return createWrapper(wrapper, 16, [value]);
    }

    /*--------------------------------------------------------------------------*/

    /**
     * Creates a function that returns `value`.
     *
     * @static
     * @memberOf _
     * @category Utilities
     * @param {*} value The value to return from the new function.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var object = { 'name': 'fred' };
     * var getter = _.constant(object);
     * getter() === object;
     * // => true
     */
    function constant(value) {
      return function() {
        return value;
      };
    }

    /**
     * Produces a callback bound to an optional `thisArg`. If `func` is a property
     * name the created callback will return the property value for a given element.
     * If `func` is an object the created callback will return `true` for elements
     * that contain the equivalent object properties, otherwise it will return `false`.
     *
     * @static
     * @memberOf _
     * @category Utilities
     * @param {*} [func=identity] The value to convert to a callback.
     * @param {*} [thisArg] The `this` binding of the created callback.
     * @param {number} [argCount] The number of arguments the callback accepts.
     * @returns {Function} Returns a callback function.
     * @example
     *
     * var characters = [
     *   { 'name': 'barney', 'age': 36 },
     *   { 'name': 'fred',   'age': 40 }
     * ];
     *
     * // wrap to create custom callback shorthands
     * _.createCallback = _.wrap(_.createCallback, function(func, callback, thisArg) {
     *   var match = /^(.+?)__([gl]t)(.+)$/.exec(callback);
     *   return !match ? func(callback, thisArg) : function(object) {
     *     return match[2] == 'gt' ? object[match[1]] > match[3] : object[match[1]] < match[3];
     *   };
     * });
     *
     * _.filter(characters, 'age__gt38');
     * // => [{ 'name': 'fred', 'age': 40 }]
     */
    function createCallback(func, thisArg, argCount) {
      var type = typeof func;
      if (func == null || type == 'function') {
        return baseCreateCallback(func, thisArg, argCount);
      }
      // handle "_.pluck" style callback shorthands
      if (type != 'object') {
        return property(func);
      }
      var props = keys(func),
          key = props[0],
          a = func[key];

      // handle "_.where" style callback shorthands
      if (props.length == 1 && a === a && !isObject(a)) {
        // fast path the common case of providing an object with a single
        // property containing a primitive value
        return function(object) {
          var b = object[key];
          return a === b && (a !== 0 || (1 / a == 1 / b));
        };
      }
      return function(object) {
        var length = props.length,
            result = false;

        while (length--) {
          if (!(result = baseIsEqual(object[props[length]], func[props[length]], null, true))) {
            break;
          }
        }
        return result;
      };
    }

    /**
     * Converts the characters `&`, `<`, `>`, `"`, and `'` in `string` to their
     * corresponding HTML entities.
     *
     * @static
     * @memberOf _
     * @category Utilities
     * @param {string} string The string to escape.
     * @returns {string} Returns the escaped string.
     * @example
     *
     * _.escape('Fred, Wilma, & Pebbles');
     * // => 'Fred, Wilma, &amp; Pebbles'
     */
    function escape(string) {
      return string == null ? '' : String(string).replace(reUnescapedHtml, escapeHtmlChar);
    }

    /**
     * This method returns the first argument provided to it.
     *
     * @static
     * @memberOf _
     * @category Utilities
     * @param {*} value Any value.
     * @returns {*} Returns `value`.
     * @example
     *
     * var object = { 'name': 'fred' };
     * _.identity(object) === object;
     * // => true
     */
    function identity(value) {
      return value;
    }

    /**
     * Adds function properties of a source object to the destination object.
     * If `object` is a function methods will be added to its prototype as well.
     *
     * @static
     * @memberOf _
     * @category Utilities
     * @param {Function|Object} [object=lodash] object The destination object.
     * @param {Object} source The object of functions to add.
     * @param {Object} [options] The options object.
     * @param {boolean} [options.chain=true] Specify whether the functions added are chainable.
     * @example
     *
     * function capitalize(string) {
     *   return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
     * }
     *
     * _.mixin({ 'capitalize': capitalize });
     * _.capitalize('fred');
     * // => 'Fred'
     *
     * _('fred').capitalize().value();
     * // => 'Fred'
     *
     * _.mixin({ 'capitalize': capitalize }, { 'chain': false });
     * _('fred').capitalize();
     * // => 'Fred'
     */
    function mixin(object, source, options) {
      var chain = true,
          methodNames = source && functions(source);

      if (!source || (!options && !methodNames.length)) {
        if (options == null) {
          options = source;
        }
        ctor = lodashWrapper;
        source = object;
        object = lodash;
        methodNames = functions(source);
      }
      if (options === false) {
        chain = false;
      } else if (isObject(options) && 'chain' in options) {
        chain = options.chain;
      }
      var ctor = object,
          isFunc = isFunction(ctor);

      forEach(methodNames, function(methodName) {
        var func = object[methodName] = source[methodName];
        if (isFunc) {
          ctor.prototype[methodName] = function() {
            var chainAll = this.__chain__,
                value = this.__wrapped__,
                args = [value];

            push.apply(args, arguments);
            var result = func.apply(object, args);
            if (chain || chainAll) {
              if (value === result && isObject(result)) {
                return this;
              }
              result = new ctor(result);
              result.__chain__ = chainAll;
            }
            return result;
          };
        }
      });
    }

    /**
     * Reverts the '_' variable to its previous value and returns a reference to
     * the `lodash` function.
     *
     * @static
     * @memberOf _
     * @category Utilities
     * @returns {Function} Returns the `lodash` function.
     * @example
     *
     * var lodash = _.noConflict();
     */
    function noConflict() {
      context._ = oldDash;
      return this;
    }

    /**
     * A no-operation function.
     *
     * @static
     * @memberOf _
     * @category Utilities
     * @example
     *
     * var object = { 'name': 'fred' };
     * _.noop(object) === undefined;
     * // => true
     */
    function noop() {
      // no operation performed
    }

    /**
     * Gets the number of milliseconds that have elapsed since the Unix epoch
     * (1 January 1970 00:00:00 UTC).
     *
     * @static
     * @memberOf _
     * @category Utilities
     * @example
     *
     * var stamp = _.now();
     * _.defer(function() { console.log(_.now() - stamp); });
     * // => logs the number of milliseconds it took for the deferred function to be called
     */
    var now = isNative(now = Date.now) && now || function() {
      return new Date().getTime();
    };

    /**
     * Converts the given value into an integer of the specified radix.
     * If `radix` is `undefined` or `0` a `radix` of `10` is used unless the
     * `value` is a hexadecimal, in which case a `radix` of `16` is used.
     *
     * Note: This method avoids differences in native ES3 and ES5 `parseInt`
     * implementations. See http://es5.github.io/#E.
     *
     * @static
     * @memberOf _
     * @category Utilities
     * @param {string} value The value to parse.
     * @param {number} [radix] The radix used to interpret the value to parse.
     * @returns {number} Returns the new integer value.
     * @example
     *
     * _.parseInt('08');
     * // => 8
     */
    var parseInt = nativeParseInt(whitespace + '08') == 8 ? nativeParseInt : function(value, radix) {
      // Firefox < 21 and Opera < 15 follow the ES3 specified implementation of `parseInt`
      return nativeParseInt(isString(value) ? value.replace(reLeadingSpacesAndZeros, '') : value, radix || 0);
    };

    /**
     * Creates a "_.pluck" style function, which returns the `key` value of a
     * given object.
     *
     * @static
     * @memberOf _
     * @category Utilities
     * @param {string} key The name of the property to retrieve.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var characters = [
     *   { 'name': 'fred',   'age': 40 },
     *   { 'name': 'barney', 'age': 36 }
     * ];
     *
     * var getName = _.property('name');
     *
     * _.map(characters, getName);
     * // => ['barney', 'fred']
     *
     * _.sortBy(characters, getName);
     * // => [{ 'name': 'barney', 'age': 36 }, { 'name': 'fred',   'age': 40 }]
     */
    function property(key) {
      return function(object) {
        return object[key];
      };
    }

    /**
     * Produces a random number between `min` and `max` (inclusive). If only one
     * argument is provided a number between `0` and the given number will be
     * returned. If `floating` is truey or either `min` or `max` are floats a
     * floating-point number will be returned instead of an integer.
     *
     * @static
     * @memberOf _
     * @category Utilities
     * @param {number} [min=0] The minimum possible value.
     * @param {number} [max=1] The maximum possible value.
     * @param {boolean} [floating=false] Specify returning a floating-point number.
     * @returns {number} Returns a random number.
     * @example
     *
     * _.random(0, 5);
     * // => an integer between 0 and 5
     *
     * _.random(5);
     * // => also an integer between 0 and 5
     *
     * _.random(5, true);
     * // => a floating-point number between 0 and 5
     *
     * _.random(1.2, 5.2);
     * // => a floating-point number between 1.2 and 5.2
     */
    function random(min, max, floating) {
      var noMin = min == null,
          noMax = max == null;

      if (floating == null) {
        if (typeof min == 'boolean' && noMax) {
          floating = min;
          min = 1;
        }
        else if (!noMax && typeof max == 'boolean') {
          floating = max;
          noMax = true;
        }
      }
      if (noMin && noMax) {
        max = 1;
      }
      min = +min || 0;
      if (noMax) {
        max = min;
        min = 0;
      } else {
        max = +max || 0;
      }
      if (floating || min % 1 || max % 1) {
        var rand = nativeRandom();
        return nativeMin(min + (rand * (max - min + parseFloat('1e-' + ((rand +'').length - 1)))), max);
      }
      return baseRandom(min, max);
    }

    /**
     * Resolves the value of property `key` on `object`. If `key` is a function
     * it will be invoked with the `this` binding of `object` and its result returned,
     * else the property value is returned. If `object` is falsey then `undefined`
     * is returned.
     *
     * @static
     * @memberOf _
     * @category Utilities
     * @param {Object} object The object to inspect.
     * @param {string} key The name of the property to resolve.
     * @returns {*} Returns the resolved value.
     * @example
     *
     * var object = {
     *   'cheese': 'crumpets',
     *   'stuff': function() {
     *     return 'nonsense';
     *   }
     * };
     *
     * _.result(object, 'cheese');
     * // => 'crumpets'
     *
     * _.result(object, 'stuff');
     * // => 'nonsense'
     */
    function result(object, key) {
      if (object) {
        var value = object[key];
        return isFunction(value) ? object[key]() : value;
      }
    }

    /**
     * A micro-templating method that handles arbitrary delimiters, preserves
     * whitespace, and correctly escapes quotes within interpolated code.
     *
     * Note: In the development build, `_.template` utilizes sourceURLs for easier
     * debugging. See http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/#toc-sourceurl
     *
     * For more information on precompiling templates see:
     * http://lodash.com/custom-builds
     *
     * For more information on Chrome extension sandboxes see:
     * http://developer.chrome.com/stable/extensions/sandboxingEval.html
     *
     * @static
     * @memberOf _
     * @category Utilities
     * @param {string} text The template text.
     * @param {Object} data The data object used to populate the text.
     * @param {Object} [options] The options object.
     * @param {RegExp} [options.escape] The "escape" delimiter.
     * @param {RegExp} [options.evaluate] The "evaluate" delimiter.
     * @param {Object} [options.imports] An object to import into the template as local variables.
     * @param {RegExp} [options.interpolate] The "interpolate" delimiter.
     * @param {string} [sourceURL] The sourceURL of the template's compiled source.
     * @param {string} [variable] The data object variable name.
     * @returns {Function|string} Returns a compiled function when no `data` object
     *  is given, else it returns the interpolated text.
     * @example
     *
     * // using the "interpolate" delimiter to create a compiled template
     * var compiled = _.template('hello <%= name %>');
     * compiled({ 'name': 'fred' });
     * // => 'hello fred'
     *
     * // using the "escape" delimiter to escape HTML in data property values
     * _.template('<b><%- value %></b>', { 'value': '<script>' });
     * // => '<b>&lt;script&gt;</b>'
     *
     * // using the "evaluate" delimiter to generate HTML
     * var list = '<% _.forEach(people, function(name) { %><li><%- name %></li><% }); %>';
     * _.template(list, { 'people': ['fred', 'barney'] });
     * // => '<li>fred</li><li>barney</li>'
     *
     * // using the ES6 delimiter as an alternative to the default "interpolate" delimiter
     * _.template('hello ${ name }', { 'name': 'pebbles' });
     * // => 'hello pebbles'
     *
     * // using the internal `print` function in "evaluate" delimiters
     * _.template('<% print("hello " + name); %>!', { 'name': 'barney' });
     * // => 'hello barney!'
     *
     * // using a custom template delimiters
     * _.templateSettings = {
     *   'interpolate': /{{([\s\S]+?)}}/g
     * };
     *
     * _.template('hello {{ name }}!', { 'name': 'mustache' });
     * // => 'hello mustache!'
     *
     * // using the `imports` option to import jQuery
     * var list = '<% jq.each(people, function(name) { %><li><%- name %></li><% }); %>';
     * _.template(list, { 'people': ['fred', 'barney'] }, { 'imports': { 'jq': jQuery } });
     * // => '<li>fred</li><li>barney</li>'
     *
     * // using the `sourceURL` option to specify a custom sourceURL for the template
     * var compiled = _.template('hello <%= name %>', null, { 'sourceURL': '/basic/greeting.jst' });
     * compiled(data);
     * // => find the source of "greeting.jst" under the Sources tab or Resources panel of the web inspector
     *
     * // using the `variable` option to ensure a with-statement isn't used in the compiled template
     * var compiled = _.template('hi <%= data.name %>!', null, { 'variable': 'data' });
     * compiled.source;
     * // => function(data) {
     *   var __t, __p = '', __e = _.escape;
     *   __p += 'hi ' + ((__t = ( data.name )) == null ? '' : __t) + '!';
     *   return __p;
     * }
     *
     * // using the `source` property to inline compiled templates for meaningful
     * // line numbers in error messages and a stack trace
     * fs.writeFileSync(path.join(cwd, 'jst.js'), '\
     *   var JST = {\
     *     "main": ' + _.template(mainText).source + '\
     *   };\
     * ');
     */
    function template(text, data, options) {
      // based on John Resig's `tmpl` implementation
      // http://ejohn.org/blog/javascript-micro-templating/
      // and Laura Doktorova's doT.js
      // https://github.com/olado/doT
      var settings = lodash.templateSettings;
      text = String(text || '');

      // avoid missing dependencies when `iteratorTemplate` is not defined
      options = defaults({}, options, settings);

      var imports = defaults({}, options.imports, settings.imports),
          importsKeys = keys(imports),
          importsValues = values(imports);

      var isEvaluating,
          index = 0,
          interpolate = options.interpolate || reNoMatch,
          source = "__p += '";

      // compile the regexp to match each delimiter
      var reDelimiters = RegExp(
        (options.escape || reNoMatch).source + '|' +
        interpolate.source + '|' +
        (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + '|' +
        (options.evaluate || reNoMatch).source + '|$'
      , 'g');

      text.replace(reDelimiters, function(match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
        interpolateValue || (interpolateValue = esTemplateValue);

        // escape characters that cannot be included in string literals
        source += text.slice(index, offset).replace(reUnescapedString, escapeStringChar);

        // replace delimiters with snippets
        if (escapeValue) {
          source += "' +\n__e(" + escapeValue + ") +\n'";
        }
        if (evaluateValue) {
          isEvaluating = true;
          source += "';\n" + evaluateValue + ";\n__p += '";
        }
        if (interpolateValue) {
          source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
        }
        index = offset + match.length;

        // the JS engine embedded in Adobe products requires returning the `match`
        // string in order to produce the correct `offset` value
        return match;
      });

      source += "';\n";

      // if `variable` is not specified, wrap a with-statement around the generated
      // code to add the data object to the top of the scope chain
      var variable = options.variable,
          hasVariable = variable;

      if (!hasVariable) {
        variable = 'obj';
        source = 'with (' + variable + ') {\n' + source + '\n}\n';
      }
      // cleanup code by stripping empty strings
      source = (isEvaluating ? source.replace(reEmptyStringLeading, '') : source)
        .replace(reEmptyStringMiddle, '$1')
        .replace(reEmptyStringTrailing, '$1;');

      // frame code as the function body
      source = 'function(' + variable + ') {\n' +
        (hasVariable ? '' : variable + ' || (' + variable + ' = {});\n') +
        "var __t, __p = '', __e = _.escape" +
        (isEvaluating
          ? ', __j = Array.prototype.join;\n' +
            "function print() { __p += __j.call(arguments, '') }\n"
          : ';\n'
        ) +
        source +
        'return __p\n}';

      // Use a sourceURL for easier debugging.
      // http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/#toc-sourceurl
      var sourceURL = '\n/*\n//# sourceURL=' + (options.sourceURL || '/lodash/template/source[' + (templateCounter++) + ']') + '\n*/';

      try {
        var result = Function(importsKeys, 'return ' + source + sourceURL).apply(undefined, importsValues);
      } catch(e) {
        e.source = source;
        throw e;
      }
      if (data) {
        return result(data);
      }
      // provide the compiled function's source by its `toString` method, in
      // supported environments, or the `source` property as a convenience for
      // inlining compiled templates during the build process
      result.source = source;
      return result;
    }

    /**
     * Executes the callback `n` times, returning an array of the results
     * of each callback execution. The callback is bound to `thisArg` and invoked
     * with one argument; (index).
     *
     * @static
     * @memberOf _
     * @category Utilities
     * @param {number} n The number of times to execute the callback.
     * @param {Function} callback The function called per iteration.
     * @param {*} [thisArg] The `this` binding of `callback`.
     * @returns {Array} Returns an array of the results of each `callback` execution.
     * @example
     *
     * var diceRolls = _.times(3, _.partial(_.random, 1, 6));
     * // => [3, 6, 4]
     *
     * _.times(3, function(n) { mage.castSpell(n); });
     * // => calls `mage.castSpell(n)` three times, passing `n` of `0`, `1`, and `2` respectively
     *
     * _.times(3, function(n) { this.cast(n); }, mage);
     * // => also calls `mage.castSpell(n)` three times
     */
    function times(n, callback, thisArg) {
      n = (n = +n) > -1 ? n : 0;
      var index = -1,
          result = Array(n);

      callback = baseCreateCallback(callback, thisArg, 1);
      while (++index < n) {
        result[index] = callback(index);
      }
      return result;
    }

    /**
     * The inverse of `_.escape` this method converts the HTML entities
     * `&amp;`, `&lt;`, `&gt;`, `&quot;`, and `&#39;` in `string` to their
     * corresponding characters.
     *
     * @static
     * @memberOf _
     * @category Utilities
     * @param {string} string The string to unescape.
     * @returns {string} Returns the unescaped string.
     * @example
     *
     * _.unescape('Fred, Barney &amp; Pebbles');
     * // => 'Fred, Barney & Pebbles'
     */
    function unescape(string) {
      return string == null ? '' : String(string).replace(reEscapedHtml, unescapeHtmlChar);
    }

    /**
     * Generates a unique ID. If `prefix` is provided the ID will be appended to it.
     *
     * @static
     * @memberOf _
     * @category Utilities
     * @param {string} [prefix] The value to prefix the ID with.
     * @returns {string} Returns the unique ID.
     * @example
     *
     * _.uniqueId('contact_');
     * // => 'contact_104'
     *
     * _.uniqueId();
     * // => '105'
     */
    function uniqueId(prefix) {
      var id = ++idCounter;
      return String(prefix == null ? '' : prefix) + id;
    }

    /*--------------------------------------------------------------------------*/

    /**
     * Creates a `lodash` object that wraps the given value with explicit
     * method chaining enabled.
     *
     * @static
     * @memberOf _
     * @category Chaining
     * @param {*} value The value to wrap.
     * @returns {Object} Returns the wrapper object.
     * @example
     *
     * var characters = [
     *   { 'name': 'barney',  'age': 36 },
     *   { 'name': 'fred',    'age': 40 },
     *   { 'name': 'pebbles', 'age': 1 }
     * ];
     *
     * var youngest = _.chain(characters)
     *     .sortBy('age')
     *     .map(function(chr) { return chr.name + ' is ' + chr.age; })
     *     .first()
     *     .value();
     * // => 'pebbles is 1'
     */
    function chain(value) {
      value = new lodashWrapper(value);
      value.__chain__ = true;
      return value;
    }

    /**
     * Invokes `interceptor` with the `value` as the first argument and then
     * returns `value`. The purpose of this method is to "tap into" a method
     * chain in order to perform operations on intermediate results within
     * the chain.
     *
     * @static
     * @memberOf _
     * @category Chaining
     * @param {*} value The value to provide to `interceptor`.
     * @param {Function} interceptor The function to invoke.
     * @returns {*} Returns `value`.
     * @example
     *
     * _([1, 2, 3, 4])
     *  .tap(function(array) { array.pop(); })
     *  .reverse()
     *  .value();
     * // => [3, 2, 1]
     */
    function tap(value, interceptor) {
      interceptor(value);
      return value;
    }

    /**
     * Enables explicit method chaining on the wrapper object.
     *
     * @name chain
     * @memberOf _
     * @category Chaining
     * @returns {*} Returns the wrapper object.
     * @example
     *
     * var characters = [
     *   { 'name': 'barney', 'age': 36 },
     *   { 'name': 'fred',   'age': 40 }
     * ];
     *
     * // without explicit chaining
     * _(characters).first();
     * // => { 'name': 'barney', 'age': 36 }
     *
     * // with explicit chaining
     * _(characters).chain()
     *   .first()
     *   .pick('age')
     *   .value();
     * // => { 'age': 36 }
     */
    function wrapperChain() {
      this.__chain__ = true;
      return this;
    }

    /**
     * Produces the `toString` result of the wrapped value.
     *
     * @name toString
     * @memberOf _
     * @category Chaining
     * @returns {string} Returns the string result.
     * @example
     *
     * _([1, 2, 3]).toString();
     * // => '1,2,3'
     */
    function wrapperToString() {
      return String(this.__wrapped__);
    }

    /**
     * Extracts the wrapped value.
     *
     * @name valueOf
     * @memberOf _
     * @alias value
     * @category Chaining
     * @returns {*} Returns the wrapped value.
     * @example
     *
     * _([1, 2, 3]).valueOf();
     * // => [1, 2, 3]
     */
    function wrapperValueOf() {
      return this.__wrapped__;
    }

    /*--------------------------------------------------------------------------*/

    // add functions that return wrapped values when chaining
    lodash.after = after;
    lodash.assign = assign;
    lodash.at = at;
    lodash.bind = bind;
    lodash.bindAll = bindAll;
    lodash.bindKey = bindKey;
    lodash.chain = chain;
    lodash.compact = compact;
    lodash.compose = compose;
    lodash.constant = constant;
    lodash.countBy = countBy;
    lodash.create = create;
    lodash.createCallback = createCallback;
    lodash.curry = curry;
    lodash.debounce = debounce;
    lodash.defaults = defaults;
    lodash.defer = defer;
    lodash.delay = delay;
    lodash.difference = difference;
    lodash.filter = filter;
    lodash.flatten = flatten;
    lodash.forEach = forEach;
    lodash.forEachRight = forEachRight;
    lodash.forIn = forIn;
    lodash.forInRight = forInRight;
    lodash.forOwn = forOwn;
    lodash.forOwnRight = forOwnRight;
    lodash.functions = functions;
    lodash.groupBy = groupBy;
    lodash.indexBy = indexBy;
    lodash.initial = initial;
    lodash.intersection = intersection;
    lodash.invert = invert;
    lodash.invoke = invoke;
    lodash.keys = keys;
    lodash.map = map;
    lodash.mapValues = mapValues;
    lodash.max = max;
    lodash.memoize = memoize;
    lodash.merge = merge;
    lodash.min = min;
    lodash.omit = omit;
    lodash.once = once;
    lodash.pairs = pairs;
    lodash.partial = partial;
    lodash.partialRight = partialRight;
    lodash.pick = pick;
    lodash.pluck = pluck;
    lodash.property = property;
    lodash.pull = pull;
    lodash.range = range;
    lodash.reject = reject;
    lodash.remove = remove;
    lodash.rest = rest;
    lodash.shuffle = shuffle;
    lodash.sortBy = sortBy;
    lodash.tap = tap;
    lodash.throttle = throttle;
    lodash.times = times;
    lodash.toArray = toArray;
    lodash.transform = transform;
    lodash.union = union;
    lodash.uniq = uniq;
    lodash.values = values;
    lodash.where = where;
    lodash.without = without;
    lodash.wrap = wrap;
    lodash.xor = xor;
    lodash.zip = zip;
    lodash.zipObject = zipObject;

    // add aliases
    lodash.collect = map;
    lodash.drop = rest;
    lodash.each = forEach;
    lodash.eachRight = forEachRight;
    lodash.extend = assign;
    lodash.methods = functions;
    lodash.object = zipObject;
    lodash.select = filter;
    lodash.tail = rest;
    lodash.unique = uniq;
    lodash.unzip = zip;

    // add functions to `lodash.prototype`
    mixin(lodash);

    /*--------------------------------------------------------------------------*/

    // add functions that return unwrapped values when chaining
    lodash.clone = clone;
    lodash.cloneDeep = cloneDeep;
    lodash.contains = contains;
    lodash.escape = escape;
    lodash.every = every;
    lodash.find = find;
    lodash.findIndex = findIndex;
    lodash.findKey = findKey;
    lodash.findLast = findLast;
    lodash.findLastIndex = findLastIndex;
    lodash.findLastKey = findLastKey;
    lodash.has = has;
    lodash.identity = identity;
    lodash.indexOf = indexOf;
    lodash.isArguments = isArguments;
    lodash.isArray = isArray;
    lodash.isBoolean = isBoolean;
    lodash.isDate = isDate;
    lodash.isElement = isElement;
    lodash.isEmpty = isEmpty;
    lodash.isEqual = isEqual;
    lodash.isFinite = isFinite;
    lodash.isFunction = isFunction;
    lodash.isNaN = isNaN;
    lodash.isNull = isNull;
    lodash.isNumber = isNumber;
    lodash.isObject = isObject;
    lodash.isPlainObject = isPlainObject;
    lodash.isRegExp = isRegExp;
    lodash.isString = isString;
    lodash.isUndefined = isUndefined;
    lodash.lastIndexOf = lastIndexOf;
    lodash.mixin = mixin;
    lodash.noConflict = noConflict;
    lodash.noop = noop;
    lodash.now = now;
    lodash.parseInt = parseInt;
    lodash.random = random;
    lodash.reduce = reduce;
    lodash.reduceRight = reduceRight;
    lodash.result = result;
    lodash.runInContext = runInContext;
    lodash.size = size;
    lodash.some = some;
    lodash.sortedIndex = sortedIndex;
    lodash.template = template;
    lodash.unescape = unescape;
    lodash.uniqueId = uniqueId;

    // add aliases
    lodash.all = every;
    lodash.any = some;
    lodash.detect = find;
    lodash.findWhere = find;
    lodash.foldl = reduce;
    lodash.foldr = reduceRight;
    lodash.include = contains;
    lodash.inject = reduce;

    mixin(function() {
      var source = {}
      forOwn(lodash, function(func, methodName) {
        if (!lodash.prototype[methodName]) {
          source[methodName] = func;
        }
      });
      return source;
    }(), false);

    /*--------------------------------------------------------------------------*/

    // add functions capable of returning wrapped and unwrapped values when chaining
    lodash.first = first;
    lodash.last = last;
    lodash.sample = sample;

    // add aliases
    lodash.take = first;
    lodash.head = first;

    forOwn(lodash, function(func, methodName) {
      var callbackable = methodName !== 'sample';
      if (!lodash.prototype[methodName]) {
        lodash.prototype[methodName]= function(n, guard) {
          var chainAll = this.__chain__,
              result = func(this.__wrapped__, n, guard);

          return !chainAll && (n == null || (guard && !(callbackable && typeof n == 'function')))
            ? result
            : new lodashWrapper(result, chainAll);
        };
      }
    });

    /*--------------------------------------------------------------------------*/

    /**
     * The semantic version number.
     *
     * @static
     * @memberOf _
     * @type string
     */
    lodash.VERSION = '2.4.1';

    // add "Chaining" functions to the wrapper
    lodash.prototype.chain = wrapperChain;
    lodash.prototype.toString = wrapperToString;
    lodash.prototype.value = wrapperValueOf;
    lodash.prototype.valueOf = wrapperValueOf;

    // add `Array` functions that return unwrapped values
    forEach(['join', 'pop', 'shift'], function(methodName) {
      var func = arrayRef[methodName];
      lodash.prototype[methodName] = function() {
        var chainAll = this.__chain__,
            result = func.apply(this.__wrapped__, arguments);

        return chainAll
          ? new lodashWrapper(result, chainAll)
          : result;
      };
    });

    // add `Array` functions that return the existing wrapped value
    forEach(['push', 'reverse', 'sort', 'unshift'], function(methodName) {
      var func = arrayRef[methodName];
      lodash.prototype[methodName] = function() {
        func.apply(this.__wrapped__, arguments);
        return this;
      };
    });

    // add `Array` functions that return new wrapped values
    forEach(['concat', 'slice', 'splice'], function(methodName) {
      var func = arrayRef[methodName];
      lodash.prototype[methodName] = function() {
        return new lodashWrapper(func.apply(this.__wrapped__, arguments), this.__chain__);
      };
    });

    return lodash;
  }

  /*--------------------------------------------------------------------------*/

  // expose Lo-Dash
  var _ = runInContext();

  // some AMD build optimizers like r.js check for condition patterns like the following:
  if (typeof define == 'function' && typeof define.amd == 'object' && define.amd) {
    // Expose Lo-Dash to the global object even when an AMD loader is present in
    // case Lo-Dash is loaded with a RequireJS shim config.
    // See http://requirejs.org/docs/api.html#config-shim
    root._ = _;

    // define as an anonymous module so, through path mapping, it can be
    // referenced as the "underscore" module
    define(function() {
      return _;
    });
  }
  // check for `exports` after `define` in case a build optimizer adds an `exports` object
  else if (freeExports && freeModule) {
    // in Node.js or RingoJS
    if (moduleExports) {
      (freeModule.exports = _)._ = _;
    }
    // in Narwhal or Rhino -require
    else {
      freeExports._ = _;
    }
  }
  else {
    // in a browser or Rhino
    root._ = _;
  }
}.call(this));

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],"/home/codio/workspace/node_modules/progressbar.js/node_modules/shifty/dist/shifty.js":[function(require,module,exports){
/*! shifty - v1.2.2 - 2014-10-09 - http://jeremyckahn.github.io/shifty */
;(function (root) {

/*!
 * Shifty Core
 * By Jeremy Kahn - jeremyckahn@gmail.com
 */

// UglifyJS define hack.  Used for unit testing.  Contents of this if are
// compiled away.
if (typeof SHIFTY_DEBUG_NOW === 'undefined') {
  SHIFTY_DEBUG_NOW = function () {
    return +new Date();
  };
}

var Tweenable = (function () {

  'use strict';

  // Aliases that get defined later in this function
  var formula;

  // CONSTANTS
  var DEFAULT_SCHEDULE_FUNCTION;
  var DEFAULT_EASING = 'linear';
  var DEFAULT_DURATION = 500;
  var UPDATE_TIME = 1000 / 60;

  var _now = Date.now
       ? Date.now
       : function () {return +new Date();};

  var now = SHIFTY_DEBUG_NOW
       ? SHIFTY_DEBUG_NOW
       : _now;

  if (typeof window !== 'undefined') {
    // requestAnimationFrame() shim by Paul Irish (modified for Shifty)
    // http://paulirish.com/2011/requestanimationframe-for-smart-animating/
    DEFAULT_SCHEDULE_FUNCTION = window.requestAnimationFrame
       || window.webkitRequestAnimationFrame
       || window.oRequestAnimationFrame
       || window.msRequestAnimationFrame
       || (window.mozCancelRequestAnimationFrame
       && window.mozRequestAnimationFrame)
       || setTimeout;
  } else {
    DEFAULT_SCHEDULE_FUNCTION = setTimeout;
  }

  function noop () {
    // NOOP!
  }

  /*!
   * Handy shortcut for doing a for-in loop. This is not a "normal" each
   * function, it is optimized for Shifty.  The iterator function only receives
   * the property name, not the value.
   * @param {Object} obj
   * @param {Function(string)} fn
   */
  function each (obj, fn) {
    var key;
    for (key in obj) {
      if (Object.hasOwnProperty.call(obj, key)) {
        fn(key);
      }
    }
  }

  /*!
   * Perform a shallow copy of Object properties.
   * @param {Object} targetObject The object to copy into
   * @param {Object} srcObject The object to copy from
   * @return {Object} A reference to the augmented `targetObj` Object
   */
  function shallowCopy (targetObj, srcObj) {
    each(srcObj, function (prop) {
      targetObj[prop] = srcObj[prop];
    });

    return targetObj;
  }

  /*!
   * Copies each property from src onto target, but only if the property to
   * copy to target is undefined.
   * @param {Object} target Missing properties in this Object are filled in
   * @param {Object} src
   */
  function defaults (target, src) {
    each(src, function (prop) {
      if (typeof target[prop] === 'undefined') {
        target[prop] = src[prop];
      }
    });
  }

  /*!
   * Calculates the interpolated tween values of an Object for a given
   * timestamp.
   * @param {Number} forPosition The position to compute the state for.
   * @param {Object} currentState Current state properties.
   * @param {Object} originalState: The original state properties the Object is
   * tweening from.
   * @param {Object} targetState: The destination state properties the Object
   * is tweening to.
   * @param {number} duration: The length of the tween in milliseconds.
   * @param {number} timestamp: The UNIX epoch time at which the tween began.
   * @param {Object} easing: This Object's keys must correspond to the keys in
   * targetState.
   */
  function tweenProps (forPosition, currentState, originalState, targetState,
    duration, timestamp, easing) {
    var normalizedPosition = (forPosition - timestamp) / duration;

    var prop;
    for (prop in currentState) {
      if (currentState.hasOwnProperty(prop)) {
        currentState[prop] = tweenProp(originalState[prop],
          targetState[prop], formula[easing[prop]], normalizedPosition);
      }
    }

    return currentState;
  }

  /*!
   * Tweens a single property.
   * @param {number} start The value that the tween started from.
   * @param {number} end The value that the tween should end at.
   * @param {Function} easingFunc The easing curve to apply to the tween.
   * @param {number} position The normalized position (between 0.0 and 1.0) to
   * calculate the midpoint of 'start' and 'end' against.
   * @return {number} The tweened value.
   */
  function tweenProp (start, end, easingFunc, position) {
    return start + (end - start) * easingFunc(position);
  }

  /*!
   * Applies a filter to Tweenable instance.
   * @param {Tweenable} tweenable The `Tweenable` instance to call the filter
   * upon.
   * @param {String} filterName The name of the filter to apply.
   */
  function applyFilter (tweenable, filterName) {
    var filters = Tweenable.prototype.filter;
    var args = tweenable._filterArgs;

    each(filters, function (name) {
      if (typeof filters[name][filterName] !== 'undefined') {
        filters[name][filterName].apply(tweenable, args);
      }
    });
  }

  var timeoutHandler_endTime;
  var timeoutHandler_currentTime;
  var timeoutHandler_isEnded;
  /*!
   * Handles the update logic for one step of a tween.
   * @param {Tweenable} tweenable
   * @param {number} timestamp
   * @param {number} duration
   * @param {Object} currentState
   * @param {Object} originalState
   * @param {Object} targetState
   * @param {Object} easing
   * @param {Function} step
   * @param {Function(Function,number)}} schedule
   */
  function timeoutHandler (tweenable, timestamp, duration, currentState,
    originalState, targetState, easing, step, schedule) {
    timeoutHandler_endTime = timestamp + duration;
    timeoutHandler_currentTime = Math.min(now(), timeoutHandler_endTime);
    timeoutHandler_isEnded = timeoutHandler_currentTime >= timeoutHandler_endTime;

    if (tweenable.isPlaying() && !timeoutHandler_isEnded) {
      schedule(tweenable._timeoutHandler, UPDATE_TIME);

      applyFilter(tweenable, 'beforeTween');
      tweenProps(timeoutHandler_currentTime, currentState, originalState,
        targetState, duration, timestamp, easing);
      applyFilter(tweenable, 'afterTween');

      step(currentState);
    } else if (timeoutHandler_isEnded) {
      step(targetState);
      tweenable.stop(true);
    }
  }


  /*!
   * Creates a usable easing Object from either a string or another easing
   * Object.  If `easing` is an Object, then this function clones it and fills
   * in the missing properties with "linear".
   * @param {Object} fromTweenParams
   * @param {Object|string} easing
   */
  function composeEasingObject (fromTweenParams, easing) {
    var composedEasing = {};

    if (typeof easing === 'string') {
      each(fromTweenParams, function (prop) {
        composedEasing[prop] = easing;
      });
    } else {
      each(fromTweenParams, function (prop) {
        if (!composedEasing[prop]) {
          composedEasing[prop] = easing[prop] || DEFAULT_EASING;
        }
      });
    }

    return composedEasing;
  }

  /**
   * Tweenable constructor.
   * @param {Object=} opt_initialState The values that the initial tween should start at if a "from" object is not provided to Tweenable#tween.
   * @param {Object=} opt_config See Tweenable.prototype.setConfig()
   * @constructor
   */
  function Tweenable (opt_initialState, opt_config) {
    this._currentState = opt_initialState || {};
    this._configured = false;
    this._scheduleFunction = DEFAULT_SCHEDULE_FUNCTION;

    // To prevent unnecessary calls to setConfig do not set default configuration here.
    // Only set default configuration immediately before tweening if none has been set.
    if (typeof opt_config !== 'undefined') {
      this.setConfig(opt_config);
    }
  }

  /**
   * Configure and start a tween.
   * @param {Object=} opt_config See Tweenable.prototype.setConfig()
   * @return {Tweenable}
   */
  Tweenable.prototype.tween = function (opt_config) {
    if (this._isTweening) {
      return this;
    }

    // Only set default config if no configuration has been set previously and none is provided now.
    if (opt_config !== undefined || !this._configured) {
      this.setConfig(opt_config);
    }

    this._start(this.get());
    return this.resume();
  };

  /**
   * Sets the tween configuration. `config` may have the following options:
   *
   * - __from__ (_Object=_): Starting position.  If omitted, the current state is used.
   * - __to__ (_Object=_): Ending position.
   * - __duration__ (_number=_): How many milliseconds to animate for.
   * - __start__ (_Function(Object)=_): Function to execute when the tween begins.  Receives the state of the tween as the only parameter.
   * - __step__ (_Function(Object)=_): Function to execute on every tick.  Receives the state of the tween as the only parameter.  This function is not called on the final step of the animation, but `finish` is.
   * - __finish__ (_Function(Object)=_): Function to execute upon tween completion.  Receives the state of the tween as the only parameter.
   * - __easing__ (_Object|string=_): Easing curve name(s) to use for the tween.
   * @param {Object} config
   * @return {Tweenable}
   */
  Tweenable.prototype.setConfig = function (config) {
    config = config || {};
    this._configured = true;

    // Init the internal state
    this._pausedAtTime = null;
    this._start = config.start || noop;
    this._step = config.step || noop;
    this._finish = config.finish || noop;
    this._duration = config.duration || DEFAULT_DURATION;
    this._currentState = config.from || this.get();
    this._originalState = this.get();
    this._targetState = config.to || this.get();
    this._timestamp = now();

    // Aliases used below
    var currentState = this._currentState;
    var targetState = this._targetState;

    // Ensure that there is always something to tween to.
    defaults(targetState, currentState);

    this._easing = composeEasingObject(
      currentState, config.easing || DEFAULT_EASING);

    this._filterArgs =
      [currentState, this._originalState, targetState, this._easing];

    applyFilter(this, 'tweenCreated');
    return this;
  };

  /**
   * Gets the current state.
   * @return {Object}
   */
  Tweenable.prototype.get = function () {
    return shallowCopy({}, this._currentState);
  };

  /**
   * Sets the current state.
   * @param {Object} state
   */
  Tweenable.prototype.set = function (state) {
    this._currentState = state;
  };

  /**
   * Pauses a tween.  Paused tweens can be resumed from the point at which they were paused.  This is different than [`stop()`](#stop), as that method causes a tween to start over when it is resumed.
   * @return {Tweenable}
   */
  Tweenable.prototype.pause = function () {
    this._pausedAtTime = now();
    this._isPaused = true;
    return this;
  };

  /**
   * Resumes a paused tween.
   * @return {Tweenable}
   */
  Tweenable.prototype.resume = function () {
    if (this._isPaused) {
      this._timestamp += now() - this._pausedAtTime;
    }

    this._isPaused = false;
    this._isTweening = true;

    var self = this;
    this._timeoutHandler = function () {
      timeoutHandler(self, self._timestamp, self._duration, self._currentState,
        self._originalState, self._targetState, self._easing, self._step,
        self._scheduleFunction);
    };

    this._timeoutHandler();

    return this;
  };

  /**
   * Stops and cancels a tween.
   * @param {boolean=} gotoEnd If false or omitted, the tween just stops at its current state, and the "finish" handler is not invoked.  If true, the tweened object's values are instantly set to the target values, and "finish" is invoked.
   * @return {Tweenable}
   */
  Tweenable.prototype.stop = function (gotoEnd) {
    this._isTweening = false;
    this._isPaused = false;
    this._timeoutHandler = noop;

    if (gotoEnd) {
      shallowCopy(this._currentState, this._targetState);
      applyFilter(this, 'afterTweenEnd');
      this._finish.call(this, this._currentState);
    }

    return this;
  };

  /**
   * Returns whether or not a tween is running.
   * @return {boolean}
   */
  Tweenable.prototype.isPlaying = function () {
    return this._isTweening && !this._isPaused;
  };

  /**
   * Sets a custom schedule function.
   *
   * If a custom function is not set the default one is used [`requestAnimationFrame`](https://developer.mozilla.org/en-US/docs/Web/API/window.requestAnimationFrame) if available, otherwise [`setTimeout`](https://developer.mozilla.org/en-US/docs/Web/API/Window.setTimeout)).
   *
   * @param {Function(Function,number)} scheduleFunction The function to be called to schedule the next frame to be rendered
   */
  Tweenable.prototype.setScheduleFunction = function (scheduleFunction) {
    this._scheduleFunction = scheduleFunction;
  };

  /**
   * `delete`s all "own" properties.  Call this when the `Tweenable` instance is no longer needed to free memory.
   */
  Tweenable.prototype.dispose = function () {
    var prop;
    for (prop in this) {
      if (this.hasOwnProperty(prop)) {
        delete this[prop];
      }
    }
  };

  /*!
   * Filters are used for transforming the properties of a tween at various
   * points in a Tweenable's life cycle.  See the README for more info on this.
   */
  Tweenable.prototype.filter = {};

  /*!
   * This object contains all of the tweens available to Shifty.  It is extendible - simply attach properties to the Tweenable.prototype.formula Object following the same format at linear.
   *
   * `pos` should be a normalized `number` (between 0 and 1).
   */
  Tweenable.prototype.formula = {
    linear: function (pos) {
      return pos;
    }
  };

  formula = Tweenable.prototype.formula;

  shallowCopy(Tweenable, {
    'now': now
    ,'each': each
    ,'tweenProps': tweenProps
    ,'tweenProp': tweenProp
    ,'applyFilter': applyFilter
    ,'shallowCopy': shallowCopy
    ,'defaults': defaults
    ,'composeEasingObject': composeEasingObject
  });

  // `root` is provided in the intro/outro files.

  // A hook used for unit testing.
  if (typeof SHIFTY_DEBUG_NOW === 'function') {
    root.timeoutHandler = timeoutHandler;
  }

  // Bootstrap Tweenable appropriately for the environment.
  if (typeof exports === 'object') {
    // CommonJS
    module.exports = Tweenable;
  } else if (typeof define === 'function' && define.amd) {
    // AMD
    define(function () {return Tweenable;});
  } else if (typeof root.Tweenable === 'undefined') {
    // Browser: Make `Tweenable` globally accessible.
    root.Tweenable = Tweenable;
  }

  return Tweenable;

} ());

/*!
 * All equations are adapted from Thomas Fuchs' [Scripty2](https://github.com/madrobby/scripty2/blob/master/src/effects/transitions/penner.js).
 *
 * Based on Easing Equations (c) 2003 [Robert Penner](http://www.robertpenner.com/), all rights reserved. This work is [subject to terms](http://www.robertpenner.com/easing_terms_of_use.html).
 */

/*!
 *  TERMS OF USE - EASING EQUATIONS
 *  Open source under the BSD License.
 *  Easing Equations (c) 2003 Robert Penner, all rights reserved.
 */

;(function () {

  Tweenable.shallowCopy(Tweenable.prototype.formula, {
    easeInQuad: function (pos) {
      return Math.pow(pos, 2);
    },

    easeOutQuad: function (pos) {
      return -(Math.pow((pos - 1), 2) - 1);
    },

    easeInOutQuad: function (pos) {
      if ((pos /= 0.5) < 1) {return 0.5 * Math.pow(pos,2);}
      return -0.5 * ((pos -= 2) * pos - 2);
    },

    easeInCubic: function (pos) {
      return Math.pow(pos, 3);
    },

    easeOutCubic: function (pos) {
      return (Math.pow((pos - 1), 3) + 1);
    },

    easeInOutCubic: function (pos) {
      if ((pos /= 0.5) < 1) {return 0.5 * Math.pow(pos,3);}
      return 0.5 * (Math.pow((pos - 2),3) + 2);
    },

    easeInQuart: function (pos) {
      return Math.pow(pos, 4);
    },

    easeOutQuart: function (pos) {
      return -(Math.pow((pos - 1), 4) - 1);
    },

    easeInOutQuart: function (pos) {
      if ((pos /= 0.5) < 1) {return 0.5 * Math.pow(pos,4);}
      return -0.5 * ((pos -= 2) * Math.pow(pos,3) - 2);
    },

    easeInQuint: function (pos) {
      return Math.pow(pos, 5);
    },

    easeOutQuint: function (pos) {
      return (Math.pow((pos - 1), 5) + 1);
    },

    easeInOutQuint: function (pos) {
      if ((pos /= 0.5) < 1) {return 0.5 * Math.pow(pos,5);}
      return 0.5 * (Math.pow((pos - 2),5) + 2);
    },

    easeInSine: function (pos) {
      return -Math.cos(pos * (Math.PI / 2)) + 1;
    },

    easeOutSine: function (pos) {
      return Math.sin(pos * (Math.PI / 2));
    },

    easeInOutSine: function (pos) {
      return (-0.5 * (Math.cos(Math.PI * pos) - 1));
    },

    easeInExpo: function (pos) {
      return (pos === 0) ? 0 : Math.pow(2, 10 * (pos - 1));
    },

    easeOutExpo: function (pos) {
      return (pos === 1) ? 1 : -Math.pow(2, -10 * pos) + 1;
    },

    easeInOutExpo: function (pos) {
      if (pos === 0) {return 0;}
      if (pos === 1) {return 1;}
      if ((pos /= 0.5) < 1) {return 0.5 * Math.pow(2,10 * (pos - 1));}
      return 0.5 * (-Math.pow(2, -10 * --pos) + 2);
    },

    easeInCirc: function (pos) {
      return -(Math.sqrt(1 - (pos * pos)) - 1);
    },

    easeOutCirc: function (pos) {
      return Math.sqrt(1 - Math.pow((pos - 1), 2));
    },

    easeInOutCirc: function (pos) {
      if ((pos /= 0.5) < 1) {return -0.5 * (Math.sqrt(1 - pos * pos) - 1);}
      return 0.5 * (Math.sqrt(1 - (pos -= 2) * pos) + 1);
    },

    easeOutBounce: function (pos) {
      if ((pos) < (1 / 2.75)) {
        return (7.5625 * pos * pos);
      } else if (pos < (2 / 2.75)) {
        return (7.5625 * (pos -= (1.5 / 2.75)) * pos + 0.75);
      } else if (pos < (2.5 / 2.75)) {
        return (7.5625 * (pos -= (2.25 / 2.75)) * pos + 0.9375);
      } else {
        return (7.5625 * (pos -= (2.625 / 2.75)) * pos + 0.984375);
      }
    },

    easeInBack: function (pos) {
      var s = 1.70158;
      return (pos) * pos * ((s + 1) * pos - s);
    },

    easeOutBack: function (pos) {
      var s = 1.70158;
      return (pos = pos - 1) * pos * ((s + 1) * pos + s) + 1;
    },

    easeInOutBack: function (pos) {
      var s = 1.70158;
      if ((pos /= 0.5) < 1) {return 0.5 * (pos * pos * (((s *= (1.525)) + 1) * pos - s));}
      return 0.5 * ((pos -= 2) * pos * (((s *= (1.525)) + 1) * pos + s) + 2);
    },

    elastic: function (pos) {
      return -1 * Math.pow(4,-8 * pos) * Math.sin((pos * 6 - 1) * (2 * Math.PI) / 2) + 1;
    },

    swingFromTo: function (pos) {
      var s = 1.70158;
      return ((pos /= 0.5) < 1) ? 0.5 * (pos * pos * (((s *= (1.525)) + 1) * pos - s)) :
          0.5 * ((pos -= 2) * pos * (((s *= (1.525)) + 1) * pos + s) + 2);
    },

    swingFrom: function (pos) {
      var s = 1.70158;
      return pos * pos * ((s + 1) * pos - s);
    },

    swingTo: function (pos) {
      var s = 1.70158;
      return (pos -= 1) * pos * ((s + 1) * pos + s) + 1;
    },

    bounce: function (pos) {
      if (pos < (1 / 2.75)) {
        return (7.5625 * pos * pos);
      } else if (pos < (2 / 2.75)) {
        return (7.5625 * (pos -= (1.5 / 2.75)) * pos + 0.75);
      } else if (pos < (2.5 / 2.75)) {
        return (7.5625 * (pos -= (2.25 / 2.75)) * pos + 0.9375);
      } else {
        return (7.5625 * (pos -= (2.625 / 2.75)) * pos + 0.984375);
      }
    },

    bouncePast: function (pos) {
      if (pos < (1 / 2.75)) {
        return (7.5625 * pos * pos);
      } else if (pos < (2 / 2.75)) {
        return 2 - (7.5625 * (pos -= (1.5 / 2.75)) * pos + 0.75);
      } else if (pos < (2.5 / 2.75)) {
        return 2 - (7.5625 * (pos -= (2.25 / 2.75)) * pos + 0.9375);
      } else {
        return 2 - (7.5625 * (pos -= (2.625 / 2.75)) * pos + 0.984375);
      }
    },

    easeFromTo: function (pos) {
      if ((pos /= 0.5) < 1) {return 0.5 * Math.pow(pos,4);}
      return -0.5 * ((pos -= 2) * Math.pow(pos,3) - 2);
    },

    easeFrom: function (pos) {
      return Math.pow(pos,4);
    },

    easeTo: function (pos) {
      return Math.pow(pos,0.25);
    }
  });

}());

/*!
 * The Bezier magic in this file is adapted/copied almost wholesale from
 * [Scripty2](https://github.com/madrobby/scripty2/blob/master/src/effects/transitions/cubic-bezier.js),
 * which was adapted from Apple code (which probably came from
 * [here](http://opensource.apple.com/source/WebCore/WebCore-955.66/platform/graphics/UnitBezier.h)).
 * Special thanks to Apple and Thomas Fuchs for much of this code.
 */

/*!
 *  Copyright (c) 2006 Apple Computer, Inc. All rights reserved.
 *
 *  Redistribution and use in source and binary forms, with or without
 *  modification, are permitted provided that the following conditions are met:
 *
 *  1. Redistributions of source code must retain the above copyright notice,
 *  this list of conditions and the following disclaimer.
 *
 *  2. Redistributions in binary form must reproduce the above copyright notice,
 *  this list of conditions and the following disclaimer in the documentation
 *  and/or other materials provided with the distribution.
 *
 *  3. Neither the name of the copyright holder(s) nor the names of any
 *  contributors may be used to endorse or promote products derived from
 *  this software without specific prior written permission.
 *
 *  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 *  "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO,
 *  THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 *  ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE
 *  FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 *  (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 *  LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
 *  ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 *  (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 *  SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
;(function () {
  // port of webkit cubic bezier handling by http://www.netzgesta.de/dev/
  function cubicBezierAtTime(t,p1x,p1y,p2x,p2y,duration) {
    var ax = 0,bx = 0,cx = 0,ay = 0,by = 0,cy = 0;
    function sampleCurveX(t) {return ((ax * t + bx) * t + cx) * t;}
    function sampleCurveY(t) {return ((ay * t + by) * t + cy) * t;}
    function sampleCurveDerivativeX(t) {return (3.0 * ax * t + 2.0 * bx) * t + cx;}
    function solveEpsilon(duration) {return 1.0 / (200.0 * duration);}
    function solve(x,epsilon) {return sampleCurveY(solveCurveX(x,epsilon));}
    function fabs(n) {if (n >= 0) {return n;}else {return 0 - n;}}
    function solveCurveX(x,epsilon) {
      var t0,t1,t2,x2,d2,i;
      for (t2 = x, i = 0; i < 8; i++) {x2 = sampleCurveX(t2) - x; if (fabs(x2) < epsilon) {return t2;} d2 = sampleCurveDerivativeX(t2); if (fabs(d2) < 1e-6) {break;} t2 = t2 - x2 / d2;}
      t0 = 0.0; t1 = 1.0; t2 = x; if (t2 < t0) {return t0;} if (t2 > t1) {return t1;}
      while (t0 < t1) {x2 = sampleCurveX(t2); if (fabs(x2 - x) < epsilon) {return t2;} if (x > x2) {t0 = t2;}else {t1 = t2;} t2 = (t1 - t0) * 0.5 + t0;}
      return t2; // Failure.
    }
    cx = 3.0 * p1x; bx = 3.0 * (p2x - p1x) - cx; ax = 1.0 - cx - bx; cy = 3.0 * p1y; by = 3.0 * (p2y - p1y) - cy; ay = 1.0 - cy - by;
    return solve(t, solveEpsilon(duration));
  }
  /*!
   *  getCubicBezierTransition(x1, y1, x2, y2) -> Function
   *
   *  Generates a transition easing function that is compatible
   *  with WebKit's CSS transitions `-webkit-transition-timing-function`
   *  CSS property.
   *
   *  The W3C has more information about
   *  <a href="http://www.w3.org/TR/css3-transitions/#transition-timing-function_tag">
   *  CSS3 transition timing functions</a>.
   *
   *  @param {number} x1
   *  @param {number} y1
   *  @param {number} x2
   *  @param {number} y2
   *  @return {function}
   */
  function getCubicBezierTransition (x1, y1, x2, y2) {
    return function (pos) {
      return cubicBezierAtTime(pos,x1,y1,x2,y2,1);
    };
  }
  // End ported code

  /**
   * Creates a Bezier easing function and attaches it to `Tweenable.prototype.formula`.  This function gives you total control over the easing curve.  Matthew Lein's [Ceaser](http://matthewlein.com/ceaser/) is a useful tool for visualizing the curves you can make with this function.
   *
   * @param {string} name The name of the easing curve.  Overwrites the old easing function on Tweenable.prototype.formula if it exists.
   * @param {number} x1
   * @param {number} y1
   * @param {number} x2
   * @param {number} y2
   * @return {function} The easing function that was attached to Tweenable.prototype.formula.
   */
  Tweenable.setBezierFunction = function (name, x1, y1, x2, y2) {
    var cubicBezierTransition = getCubicBezierTransition(x1, y1, x2, y2);
    cubicBezierTransition.x1 = x1;
    cubicBezierTransition.y1 = y1;
    cubicBezierTransition.x2 = x2;
    cubicBezierTransition.y2 = y2;

    return Tweenable.prototype.formula[name] = cubicBezierTransition;
  };


  /**
   * `delete`s an easing function from `Tweenable.prototype.formula`.  Be careful with this method, as it `delete`s whatever easing formula matches `name` (which means you can delete default Shifty easing functions).
   *
   * @param {string} name The name of the easing function to delete.
   * @return {function}
   */
  Tweenable.unsetBezierFunction = function (name) {
    delete Tweenable.prototype.formula[name];
  };

})();

;(function () {

  function getInterpolatedValues (
    from, current, targetState, position, easing) {
    return Tweenable.tweenProps(
      position, current, from, targetState, 1, 0, easing);
  }

  // Fake a Tweenable and patch some internals.  This approach allows us to
  // skip uneccessary processing and object recreation, cutting down on garbage
  // collection pauses.
  var mockTweenable = new Tweenable();
  mockTweenable._filterArgs = [];

  /**
   * Compute the midpoint of two Objects.  This method effectively calculates a specific frame of animation that [Tweenable#tween](shifty.core.js.html#tween) does many times over the course of a tween.
   *
   * Example:
   *
   * ```
   *  var interpolatedValues = Tweenable.interpolate({
   *    width: '100px',
   *    opacity: 0,
   *    color: '#fff'
   *  }, {
   *    width: '200px',
   *    opacity: 1,
   *    color: '#000'
   *  }, 0.5);
   *
   *  console.log(interpolatedValues);
   *  // {opacity: 0.5, width: "150px", color: "rgb(127,127,127)"}
   * ```
   *
   * @param {Object} from The starting values to tween from.
   * @param {Object} targetState The ending values to tween to.
   * @param {number} position The normalized position value (between 0.0 and 1.0) to interpolate the values between `from` and `to` for.  `from` represents 0 and `to` represents `1`.
   * @param {string|Object} easing The easing curve(s) to calculate the midpoint against.  You can reference any easing function attached to `Tweenable.prototype.formula`.  If omitted, this defaults to "linear".
   * @return {Object}
   */
  Tweenable.interpolate = function (from, targetState, position, easing) {
    var current = Tweenable.shallowCopy({}, from);
    var easingObject = Tweenable.composeEasingObject(
      from, easing || 'linear');

    mockTweenable.set({});

    // Alias and reuse the _filterArgs array instead of recreating it.
    var filterArgs = mockTweenable._filterArgs;
    filterArgs.length = 0;
    filterArgs[0] = current;
    filterArgs[1] = from;
    filterArgs[2] = targetState;
    filterArgs[3] = easingObject;

    // Any defined value transformation must be applied
    Tweenable.applyFilter(mockTweenable, 'tweenCreated');
    Tweenable.applyFilter(mockTweenable, 'beforeTween');

    var interpolatedValues = getInterpolatedValues(
      from, current, targetState, position, easingObject);

    // Transform values back into their original format
    Tweenable.applyFilter(mockTweenable, 'afterTween');

    return interpolatedValues;
  };

}());

/**
 * Adds string interpolation support to Shifty.
 *
 * The Token extension allows Shifty to tween numbers inside of strings.  Among other things, this allows you to animate CSS properties.  For example, you can do this:
 *
 * ```
 * var tweenable = new Tweenable();
 * tweenable.tween({
 *   from: { transform: 'translateX(45px)'},
 *   to: { transform: 'translateX(90xp)'}
 * });
 * ```
 *
 * `translateX(45)` will be tweened to `translateX(90)`.  To demonstrate:
 *
 * ```
 * var tweenable = new Tweenable();
 * tweenable.tween({
 *   from: { transform: 'translateX(45px)'},
 *   to: { transform: 'translateX(90px)'},
 *   step: function (state) {
 *     console.log(state.transform);
 *   }
 * });
 * ```
 *
 * The above snippet will log something like this in the console:
 *
 * ```
 * translateX(60.3px)
 * ...
 * translateX(76.05px)
 * ...
 * translateX(90px)
 * ```
 *
 * Another use for this is animating colors:
 *
 * ```
 * var tweenable = new Tweenable();
 * tweenable.tween({
 *   from: { color: 'rgb(0,255,0)'},
 *   to: { color: 'rgb(255,0,255)'},
 *   step: function (state) {
 *     console.log(state.color);
 *   }
 * });
 * ```
 *
 * The above snippet will log something like this:
 *
 * ```
 * rgb(84,170,84)
 * ...
 * rgb(170,84,170)
 * ...
 * rgb(255,0,255)
 * ```
 *
 * This extension also supports hexadecimal colors, in both long (`#ff00ff`) and short (`#f0f`) forms.  Be aware that hexadecimal input values will be converted into the equivalent RGB output values.  This is done to optimize for performance.
 *
 * ```
 * var tweenable = new Tweenable();
 * tweenable.tween({
 *   from: { color: '#0f0'},
 *   to: { color: '#f0f'},
 *   step: function (state) {
 *     console.log(state.color);
 *   }
 * });
 * ```
 *
 * This snippet will generate the same output as the one before it because equivalent values were supplied (just in hexadecimal form rather than RGB):
 *
 * ```
 * rgb(84,170,84)
 * ...
 * rgb(170,84,170)
 * ...
 * rgb(255,0,255)
 * ```
 *
 * ## Easing support
 *
 * Easing works somewhat differently in the Token extension.  This is because some CSS properties have multiple values in them, and you might need to tween each value along its own easing curve.  A basic example:
 *
 * ```
 * var tweenable = new Tweenable();
 * tweenable.tween({
 *   from: { transform: 'translateX(0px) translateY(0px)'},
 *   to: { transform:   'translateX(100px) translateY(100px)'},
 *   easing: { transform: 'easeInQuad' },
 *   step: function (state) {
 *     console.log(state.transform);
 *   }
 * });
 * ```
 *
 * The above snippet create values like this:
 *
 * ```
 * translateX(11.560000000000002px) translateY(11.560000000000002px)
 * ...
 * translateX(46.24000000000001px) translateY(46.24000000000001px)
 * ...
 * translateX(100px) translateY(100px)
 * ```
 *
 * In this case, the values for `translateX` and `translateY` are always the same for each step of the tween, because they have the same start and end points and both use the same easing curve.  We can also tween `translateX` and `translateY` along independent curves:
 *
 * ```
 * var tweenable = new Tweenable();
 * tweenable.tween({
 *   from: { transform: 'translateX(0px) translateY(0px)'},
 *   to: { transform:   'translateX(100px) translateY(100px)'},
 *   easing: { transform: 'easeInQuad bounce' },
 *   step: function (state) {
 *     console.log(state.transform);
 *   }
 * });
 * ```
 *
 * The above snippet create values like this:
 *
 * ```
 * translateX(10.89px) translateY(82.355625px)
 * ...
 * translateX(44.89000000000001px) translateY(86.73062500000002px)
 * ...
 * translateX(100px) translateY(100px)
 * ```
 *
 * `translateX` and `translateY` are not in sync anymore, because `easeInQuad` was specified for `translateX` and `bounce` for `translateY`.  Mixing and matching easing curves can make for some interesting motion in your animations.
 *
 * The order of the space-separated easing curves correspond the token values they apply to.  If there are more token values than easing curves listed, the last easing curve listed is used.
 */
function token () {
  // Functionality for this extension runs implicitly if it is loaded.
} /*!*/

// token function is defined above only so that dox-foundation sees it as
// documentation and renders it.  It is never used, and is optimized away at
// build time.

;(function (Tweenable) {

  /*!
   * @typedef {{
   *   formatString: string
   *   chunkNames: Array.<string>
   * }}
   */
  var formatManifest;

  // CONSTANTS

  var R_NUMBER_COMPONENT = /(\d|\-|\.)/;
  var R_FORMAT_CHUNKS = /([^\-0-9\.]+)/g;
  var R_UNFORMATTED_VALUES = /[0-9.\-]+/g;
  var R_RGB = new RegExp(
    'rgb\\(' + R_UNFORMATTED_VALUES.source +
    (/,\s*/.source) + R_UNFORMATTED_VALUES.source +
    (/,\s*/.source) + R_UNFORMATTED_VALUES.source + '\\)', 'g');
  var R_RGB_PREFIX = /^.*\(/;
  var R_HEX = /#([0-9]|[a-f]){3,6}/gi;
  var VALUE_PLACEHOLDER = 'VAL';

  // HELPERS

  var getFormatChunksFrom_accumulator = [];
  /*!
   * @param {Array.number} rawValues
   * @param {string} prefix
   *
   * @return {Array.<string>}
   */
  function getFormatChunksFrom (rawValues, prefix) {
    getFormatChunksFrom_accumulator.length = 0;

    var rawValuesLength = rawValues.length;
    var i;

    for (i = 0; i < rawValuesLength; i++) {
      getFormatChunksFrom_accumulator.push('_' + prefix + '_' + i);
    }

    return getFormatChunksFrom_accumulator;
  }

  /*!
   * @param {string} formattedString
   *
   * @return {string}
   */
  function getFormatStringFrom (formattedString) {
    var chunks = formattedString.match(R_FORMAT_CHUNKS);

    if (!chunks) {
      // chunks will be null if there were no tokens to parse in
      // formattedString (for example, if formattedString is '2').  Coerce
      // chunks to be useful here.
      chunks = ['', ''];

      // If there is only one chunk, assume that the string is a number
      // followed by a token...
      // NOTE: This may be an unwise assumption.
    } else if (chunks.length === 1 ||
        // ...or if the string starts with a number component (".", "-", or a
        // digit)...
        formattedString[0].match(R_NUMBER_COMPONENT)) {
      // ...prepend an empty string here to make sure that the formatted number
      // is properly replaced by VALUE_PLACEHOLDER
      chunks.unshift('');
    }

    return chunks.join(VALUE_PLACEHOLDER);
  }

  /*!
   * Convert all hex color values within a string to an rgb string.
   *
   * @param {Object} stateObject
   *
   * @return {Object} The modified obj
   */
  function sanitizeObjectForHexProps (stateObject) {
    Tweenable.each(stateObject, function (prop) {
      var currentProp = stateObject[prop];

      if (typeof currentProp === 'string' && currentProp.match(R_HEX)) {
        stateObject[prop] = sanitizeHexChunksToRGB(currentProp);
      }
    });
  }

  /*!
   * @param {string} str
   *
   * @return {string}
   */
  function  sanitizeHexChunksToRGB (str) {
    return filterStringChunks(R_HEX, str, convertHexToRGB);
  }

  /*!
   * @param {string} hexString
   *
   * @return {string}
   */
  function convertHexToRGB (hexString) {
    var rgbArr = hexToRGBArray(hexString);
    return 'rgb(' + rgbArr[0] + ',' + rgbArr[1] + ',' + rgbArr[2] + ')';
  }

  var hexToRGBArray_returnArray = [];
  /*!
   * Convert a hexadecimal string to an array with three items, one each for
   * the red, blue, and green decimal values.
   *
   * @param {string} hex A hexadecimal string.
   *
   * @returns {Array.<number>} The converted Array of RGB values if `hex` is a
   * valid string, or an Array of three 0's.
   */
  function hexToRGBArray (hex) {

    hex = hex.replace(/#/, '');

    // If the string is a shorthand three digit hex notation, normalize it to
    // the standard six digit notation
    if (hex.length === 3) {
      hex = hex.split('');
      hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }

    hexToRGBArray_returnArray[0] = hexToDec(hex.substr(0, 2));
    hexToRGBArray_returnArray[1] = hexToDec(hex.substr(2, 2));
    hexToRGBArray_returnArray[2] = hexToDec(hex.substr(4, 2));

    return hexToRGBArray_returnArray;
  }

  /*!
   * Convert a base-16 number to base-10.
   *
   * @param {Number|String} hex The value to convert
   *
   * @returns {Number} The base-10 equivalent of `hex`.
   */
  function hexToDec (hex) {
    return parseInt(hex, 16);
  }

  /*!
   * Runs a filter operation on all chunks of a string that match a RegExp
   *
   * @param {RegExp} pattern
   * @param {string} unfilteredString
   * @param {function(string)} filter
   *
   * @return {string}
   */
  function filterStringChunks (pattern, unfilteredString, filter) {
    var pattenMatches = unfilteredString.match(pattern);
    var filteredString = unfilteredString.replace(pattern, VALUE_PLACEHOLDER);

    if (pattenMatches) {
      var pattenMatchesLength = pattenMatches.length;
      var currentChunk;

      for (var i = 0; i < pattenMatchesLength; i++) {
        currentChunk = pattenMatches.shift();
        filteredString = filteredString.replace(
          VALUE_PLACEHOLDER, filter(currentChunk));
      }
    }

    return filteredString;
  }

  /*!
   * Check for floating point values within rgb strings and rounds them.
   *
   * @param {string} formattedString
   *
   * @return {string}
   */
  function sanitizeRGBChunks (formattedString) {
    return filterStringChunks(R_RGB, formattedString, sanitizeRGBChunk);
  }

  /*!
   * @param {string} rgbChunk
   *
   * @return {string}
   */
  function sanitizeRGBChunk (rgbChunk) {
    var numbers = rgbChunk.match(R_UNFORMATTED_VALUES);
    var numbersLength = numbers.length;
    var sanitizedString = rgbChunk.match(R_RGB_PREFIX)[0];

    for (var i = 0; i < numbersLength; i++) {
      sanitizedString += parseInt(numbers[i], 10) + ',';
    }

    sanitizedString = sanitizedString.slice(0, -1) + ')';

    return sanitizedString;
  }

  /*!
   * @param {Object} stateObject
   *
   * @return {Object} An Object of formatManifests that correspond to
   * the string properties of stateObject
   */
  function getFormatManifests (stateObject) {
    var manifestAccumulator = {};

    Tweenable.each(stateObject, function (prop) {
      var currentProp = stateObject[prop];

      if (typeof currentProp === 'string') {
        var rawValues = getValuesFrom(currentProp);

        manifestAccumulator[prop] = {
          'formatString': getFormatStringFrom(currentProp)
          ,'chunkNames': getFormatChunksFrom(rawValues, prop)
        };
      }
    });

    return manifestAccumulator;
  }

  /*!
   * @param {Object} stateObject
   * @param {Object} formatManifests
   */
  function expandFormattedProperties (stateObject, formatManifests) {
    Tweenable.each(formatManifests, function (prop) {
      var currentProp = stateObject[prop];
      var rawValues = getValuesFrom(currentProp);
      var rawValuesLength = rawValues.length;

      for (var i = 0; i < rawValuesLength; i++) {
        stateObject[formatManifests[prop].chunkNames[i]] = +rawValues[i];
      }

      delete stateObject[prop];
    });
  }

  /*!
   * @param {Object} stateObject
   * @param {Object} formatManifests
   */
  function collapseFormattedProperties (stateObject, formatManifests) {
    Tweenable.each(formatManifests, function (prop) {
      var currentProp = stateObject[prop];
      var formatChunks = extractPropertyChunks(
        stateObject, formatManifests[prop].chunkNames);
      var valuesList = getValuesList(
        formatChunks, formatManifests[prop].chunkNames);
      currentProp = getFormattedValues(
        formatManifests[prop].formatString, valuesList);
      stateObject[prop] = sanitizeRGBChunks(currentProp);
    });
  }

  /*!
   * @param {Object} stateObject
   * @param {Array.<string>} chunkNames
   *
   * @return {Object} The extracted value chunks.
   */
  function extractPropertyChunks (stateObject, chunkNames) {
    var extractedValues = {};
    var currentChunkName, chunkNamesLength = chunkNames.length;

    for (var i = 0; i < chunkNamesLength; i++) {
      currentChunkName = chunkNames[i];
      extractedValues[currentChunkName] = stateObject[currentChunkName];
      delete stateObject[currentChunkName];
    }

    return extractedValues;
  }

  var getValuesList_accumulator = [];
  /*!
   * @param {Object} stateObject
   * @param {Array.<string>} chunkNames
   *
   * @return {Array.<number>}
   */
  function getValuesList (stateObject, chunkNames) {
    getValuesList_accumulator.length = 0;
    var chunkNamesLength = chunkNames.length;

    for (var i = 0; i < chunkNamesLength; i++) {
      getValuesList_accumulator.push(stateObject[chunkNames[i]]);
    }

    return getValuesList_accumulator;
  }

  /*!
   * @param {string} formatString
   * @param {Array.<number>} rawValues
   *
   * @return {string}
   */
  function getFormattedValues (formatString, rawValues) {
    var formattedValueString = formatString;
    var rawValuesLength = rawValues.length;

    for (var i = 0; i < rawValuesLength; i++) {
      formattedValueString = formattedValueString.replace(
        VALUE_PLACEHOLDER, +rawValues[i].toFixed(4));
    }

    return formattedValueString;
  }

  /*!
   * Note: It's the duty of the caller to convert the Array elements of the
   * return value into numbers.  This is a performance optimization.
   *
   * @param {string} formattedString
   *
   * @return {Array.<string>|null}
   */
  function getValuesFrom (formattedString) {
    return formattedString.match(R_UNFORMATTED_VALUES);
  }

  /*!
   * @param {Object} easingObject
   * @param {Object} tokenData
   */
  function expandEasingObject (easingObject, tokenData) {
    Tweenable.each(tokenData, function (prop) {
      var currentProp = tokenData[prop];
      var chunkNames = currentProp.chunkNames;
      var chunkLength = chunkNames.length;
      var easingChunks = easingObject[prop].split(' ');
      var lastEasingChunk = easingChunks[easingChunks.length - 1];

      for (var i = 0; i < chunkLength; i++) {
        easingObject[chunkNames[i]] = easingChunks[i] || lastEasingChunk;
      }

      delete easingObject[prop];
    });
  }

  /*!
   * @param {Object} easingObject
   * @param {Object} tokenData
   */
  function collapseEasingObject (easingObject, tokenData) {
    Tweenable.each(tokenData, function (prop) {
      var currentProp = tokenData[prop];
      var chunkNames = currentProp.chunkNames;
      var chunkLength = chunkNames.length;
      var composedEasingString = '';

      for (var i = 0; i < chunkLength; i++) {
        composedEasingString += ' ' + easingObject[chunkNames[i]];
        delete easingObject[chunkNames[i]];
      }

      easingObject[prop] = composedEasingString.substr(1);
    });
  }

  Tweenable.prototype.filter.token = {
    'tweenCreated': function (currentState, fromState, toState, easingObject) {
      sanitizeObjectForHexProps(currentState);
      sanitizeObjectForHexProps(fromState);
      sanitizeObjectForHexProps(toState);
      this._tokenData = getFormatManifests(currentState);
    },

    'beforeTween': function (currentState, fromState, toState, easingObject) {
      expandEasingObject(easingObject, this._tokenData);
      expandFormattedProperties(currentState, this._tokenData);
      expandFormattedProperties(fromState, this._tokenData);
      expandFormattedProperties(toState, this._tokenData);
    },

    'afterTween': function (currentState, fromState, toState, easingObject) {
      collapseFormattedProperties(currentState, this._tokenData);
      collapseFormattedProperties(fromState, this._tokenData);
      collapseFormattedProperties(toState, this._tokenData);
      collapseEasingObject(easingObject, this._tokenData);
    }
  };

} (Tweenable));

}(this));

},{}],"/home/codio/workspace/node_modules/progressbar.js/progressbar.js":[function(require,module,exports){
// Browserify will transform the module compatible for browser
var Tweenable = require('shifty');

var EASING_ALIASES = {
    easeIn: 'easeInCubic',
    easeOut: 'easeOutCubic',
    easeInOut: 'easeInOutCubic'
};

// Base object for different progress bar shapes
var Progress = function(container, opts) {
    // Prevent calling constructor without parameters so inheritance
    // works correctly
    if (arguments.length === 0) return;

    var svgView = this._createSvgView(opts);

    var element;
    if (isString(container)) {
        element = document.querySelector(container);
    } else {
        element = container;
    }
    element.appendChild(svgView.svg);

    var newOpts = extend({
        attachment: this
    }, opts);
    this._path = new Path(svgView.path, newOpts);

    // Expose public attributes
    this.path = svgView.path;
    this.trail = svgView.trail;
};

Progress.prototype.animate = function animate(progress, opts, cb) {
    this._path.animate(progress, opts, cb);
};

Progress.prototype.stop = function stop() {
    this._path.stop();
};

Progress.prototype.set = function set(progress) {
    this._path.set(progress);
};

Progress.prototype._createSvgView = function _createSvgView(opts) {
    opts = extend({
        color: "#555",
        strokeWidth: 1.0,
        trailColor: null,
        fill: null
    }, opts);

    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    this._initializeSvg(svg, opts);

    var trailPath = null;
    if (opts.trailColor) {
        var trailOpts = extend({}, opts);
        trailOpts.color = opts.trailColor;

        // When trail path is set, fill must be set for it instead of the
        // actual path to prevent trail stroke from clipping
        opts.fill = null;
        trailPath = this._createPath(trailOpts);
        svg.appendChild(trailPath);
    }

    var path = this._createPath(opts);
    svg.appendChild(path);

    return {
        svg: svg,
        path: path,
        trail: trailPath
    };
};

Progress.prototype._initializeSvg = function _initializeSvg(svg, opts) {
    svg.setAttribute("viewBox", "0 0 100 100");
};

Progress.prototype._createPath = function _createPath(opts) {
    var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", this._pathString(opts));
    path.setAttribute("stroke", opts.color);
    path.setAttribute("stroke-width", opts.strokeWidth);

    if (opts.fill) {
        path.setAttribute("fill", opts.fill);
    } else {
        path.setAttribute("fill-opacity", "0");
    }

    return path;
};

Progress.prototype._pathString = function _pathString(opts) {
    throw new Error("Override this function for each progress bar");
};

// Progress bar shapes

var Line = function(container, options) {
    Progress.apply(this, arguments);
};

Line.prototype = new Progress();
Line.prototype.constructor = Line;

Line.prototype._initializeSvg = function _initializeSvg(svg, opts) {
    svg.setAttribute("viewBox", "0 0 100 " + opts.strokeWidth);
    svg.setAttribute("preserveAspectRatio", "none");
};

Line.prototype._pathString = function _pathString(opts) {
    var pathString = "M 0,{c} L 100,{c}";
    var center = opts.strokeWidth / 2;
    pathString = pathString.replace(/\{c\}/g, center);
    return pathString;
};

var Circle = function(container, options) {
    Progress.apply(this, arguments);
};

Circle.prototype = new Progress();
Circle.prototype.constructor = Circle;

Circle.prototype._pathString = function _pathString(opts) {
    // Use two arcs to form a circle
    // See this answer http://stackoverflow.com/a/10477334/1446092
    var pathString = "M 50,50 m 0,-{r} a {r},{r} 0 1 1 0,{r*2} a {r},{r} 0 1 1 0,-{r*2}";
    var r = 50 - opts.strokeWidth / 2;
    pathString = pathString.replace(/\{r\}/g, r);
    pathString = pathString.replace(/\{r\*2\}/g, r * 2);
    return pathString;
};

var Square = function(container, options) {
    Progress.apply(this, arguments);
};

Square.prototype = new Progress();
Square.prototype.constructor = Square;

Square.prototype._pathString = function _pathString(opts) {
    var pathString = "M 0,{s/2} L {w},{s/2} L {w},{w} L {s/2},{w} L {s/2},{s}";
    var w = 100 - opts.strokeWidth / 2;
    pathString = pathString.replace(/\{w\}/g, w);
    pathString = pathString.replace(/\{s\}/g, opts.strokeWidth);
    pathString = pathString.replace(/\{s\/2\}/g, opts.strokeWidth / 2);
    return pathString;
};

// Lower level API to animate any kind of svg path

var Path = function(path, opts) {
    opts = extend({
        duration: 800,
        easing: "linear",
        from: {},
        to: {},
        step: noop
    }, opts);

    this._path = path;
    this._opts = opts;
    this._tweenable = null;

    // Set up the starting positions
    var length = this._path.getTotalLength();
    this._path.style.strokeDasharray = length + ' ' + length;
    this._path.style.strokeDashoffset = length;
};

Path.prototype.set = function set(progress) {
    this.stop();

    var length = this._path.getTotalLength();
    this._path.style.strokeDashoffset = length - progress * length;
};

Path.prototype.stop = function stop() {
    this._stopTween();

    var computedStyle = window.getComputedStyle(this._path, null);
    var offset = computedStyle.getPropertyValue('stroke-dashoffset');
    this._path.style.strokeDashoffset = offset;
};

// Method introduced here:
// http://jakearchibald.com/2013/animated-line-drawing-svg/
Path.prototype.animate = function animate(progress, opts, cb) {
    if (isFunction(opts)) {
        cb = opts;
        opts = {};
    }

    // Copy default opts to new object so defaults are not modified
    var defaultOpts = extend({}, this._opts);
    opts = extend(defaultOpts, opts);

    this.stop();

    // Trigger a layout so styles are calculated & the browser
    // picks up the starting position before animating
    this._path.getBoundingClientRect();

    var computedStyle = window.getComputedStyle(this._path, null);
    var offset = computedStyle.getPropertyValue('stroke-dashoffset');
    // Remove 'px' suffix
    offset = parseFloat(offset, 10);

    var length = this._path.getTotalLength();
    var newOffset = length - progress * length;

    var self = this;

    this._tweenable = new Tweenable();
    this._tweenable.tween({
        from: extend({ offset: offset }, opts.from),
        to: extend({ offset: newOffset }, opts.to),
        duration: opts.duration,
        easing: this._easing(opts.easing),
        step: function(state) {
            self._path.style.strokeDashoffset = state.offset;
            opts.step(state, opts.attachment);
        },
        finish: function(state) {
            // step function is not called on the last step of animation
            self._path.style.strokeDashoffset = state.offset;
            opts.step(state, opts.attachment);

            if (isFunction(cb)) {
                cb();
            }
        }
    });
};

Path.prototype._stopTween = function _stopTween() {
    if (this._tweenable !== null) {
        this._tweenable.stop();
        this._tweenable.dispose();
        this._tweenable = null;
    }
};

Path.prototype._easing = function _easing(easing) {
    if (EASING_ALIASES.hasOwnProperty(easing)) {
        return EASING_ALIASES[easing];
    }

    return easing;
};

// Utility functions

function noop() {}

// Copy all attributes from source object to destination object.
// destination object is mutated.
function extend(destination, source) {
    destination = destination || {};
    source = source || {};

    for (var attrName in source) {
        if (source.hasOwnProperty(attrName)) {
            destination[attrName] = source[attrName];
        }
    }

    return destination;
}

function isString(obj) {
    return typeof obj === 'string' || obj instanceof String;
}

function isFunction(obj) {
    return typeof obj === "function";
}

module.exports = {
    Line: Line,
    Circle: Circle,
    Square: Square,
    Path: Path
};

},{"shifty":"/home/codio/workspace/node_modules/progressbar.js/node_modules/shifty/dist/shifty.js"}],"/home/codio/workspace/node_modules/randomstring/index.js":[function(require,module,exports){
module.exports = require("./lib/randomstring");
},{"./lib/randomstring":"/home/codio/workspace/node_modules/randomstring/lib/randomstring.js"}],"/home/codio/workspace/node_modules/randomstring/lib/randomstring.js":[function(require,module,exports){
var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghiklmnopqrstuvwxyz';

exports.generate = function(length) {
  length = length ? length : 32;
  
  var string = '';
  
  for (var i = 0; i < length; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    string += chars.substring(randomNumber, randomNumber + 1);
  }
  
  return string;
}
},{}]},{},["./client/scripts/main.js"])