(self.webpackChunk_dxsixpc_utils=self.webpackChunk_dxsixpc_utils||[]).push([[30825],{30825:function(P,Q,N){var z=typeof window!="undefined"?window:typeof WorkerGlobalScope!="undefined"&&self instanceof WorkerGlobalScope?self:{},T=function(f){var W=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,B=0,k={},i={manual:f.Prism&&f.Prism.manual,disableWorkerMessageHandler:f.Prism&&f.Prism.disableWorkerMessageHandler,util:{encode:function t(e){return e instanceof p?new p(e.type,t(e.content),e.alias):Array.isArray(e)?e.map(t):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(t){return Object.prototype.toString.call(t).slice(8,-1)},objId:function(t){return t.__id||Object.defineProperty(t,"__id",{value:++B}),t.__id},clone:function t(e,a){var r,n;switch(a=a||{},i.util.type(e)){case"Object":if(n=i.util.objId(e),a[n])return a[n];for(var o in r={},a[n]=r,e)e.hasOwnProperty(o)&&(r[o]=t(e[o],a));return r;case"Array":return n=i.util.objId(e),a[n]?a[n]:(r=[],a[n]=r,e.forEach(function(l,u){r[u]=t(l,a)}),r);default:return e}},getLanguage:function(t){for(;t;){var e=W.exec(t.className);if(e)return e[1].toLowerCase();t=t.parentElement}return"none"},setLanguage:function(t,e){t.className=t.className.replace(RegExp(W,"gi"),""),t.classList.add("language-"+e)},currentScript:function(){if(typeof document=="undefined")return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(r){var t=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(r.stack)||[])[1];if(t){var e=document.getElementsByTagName("script");for(var a in e)if(e[a].src==t)return e[a]}return null}},isActive:function(t,e,a){for(var r="no-"+e;t;){var n=t.classList;if(n.contains(e))return!0;if(n.contains(r))return!1;t=t.parentElement}return!!a}},languages:{plain:k,plaintext:k,text:k,txt:k,extend:function(t,e){var a=i.util.clone(i.languages[t]);for(var r in e)a[r]=e[r];return a},insertBefore:function(t,e,a,r){var n=(r=r||i.languages)[t],o={};for(var l in n)if(n.hasOwnProperty(l)){if(l==e)for(var u in a)a.hasOwnProperty(u)&&(o[u]=a[u]);a.hasOwnProperty(l)||(o[l]=n[l])}var c=r[t];return r[t]=o,i.languages.DFS(i.languages,function(s,w){w===c&&s!=t&&(this[s]=o)}),o},DFS:function t(e,a,r,n){n=n||{};var o=i.util.objId;for(var l in e)if(e.hasOwnProperty(l)){a.call(e,l,e[l],r||l);var u=e[l],c=i.util.type(u);c!=="Object"||n[o(u)]?c!=="Array"||n[o(u)]||(n[o(u)]=!0,t(u,a,l,n)):(n[o(u)]=!0,t(u,a,null,n))}}},plugins:{},highlightAll:function(t,e){i.highlightAllUnder(document,t,e)},highlightAllUnder:function(t,e,a){var r={callback:a,container:t,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};i.hooks.run("before-highlightall",r),r.elements=Array.prototype.slice.apply(r.container.querySelectorAll(r.selector)),i.hooks.run("before-all-elements-highlight",r);for(var n,o=0;n=r.elements[o++];)i.highlightElement(n,e===!0,r.callback)},highlightElement:function(t,e,a){var r=i.util.getLanguage(t),n=i.languages[r];i.util.setLanguage(t,r);var o=t.parentElement;o&&o.nodeName.toLowerCase()==="pre"&&i.util.setLanguage(o,r);var l={element:t,language:r,grammar:n,code:t.textContent};function u(s){l.highlightedCode=s,i.hooks.run("before-insert",l),l.element.innerHTML=l.highlightedCode,i.hooks.run("after-highlight",l),i.hooks.run("complete",l),a&&a.call(l.element)}if(i.hooks.run("before-sanity-check",l),(o=l.element.parentElement)&&o.nodeName.toLowerCase()==="pre"&&!o.hasAttribute("tabindex")&&o.setAttribute("tabindex","0"),!l.code)return i.hooks.run("complete",l),void(a&&a.call(l.element));if(i.hooks.run("before-highlight",l),l.grammar)if(e&&f.Worker){var c=new Worker(i.filename);c.onmessage=function(s){u(s.data)},c.postMessage(JSON.stringify({language:l.language,code:l.code,immediateClose:!0}))}else u(i.highlight(l.code,l.grammar,l.language));else u(i.util.encode(l.code))},highlight:function(t,e,a){var r={code:t,grammar:e,language:a};if(i.hooks.run("before-tokenize",r),!r.grammar)throw new Error('The language "'+r.language+'" has no grammar.');return r.tokens=i.tokenize(r.code,r.grammar),i.hooks.run("after-tokenize",r),p.stringify(i.util.encode(r.tokens),r.language)},tokenize:function(t,e){var a=e.rest;if(a){for(var r in a)e[r]=a[r];delete e.rest}var n=new G;return b(n,n.head,t),H(t,n,e,n.head,0),function(o){for(var l=[],u=o.head.next;u!==o.tail;)l.push(u.value),u=u.next;return l}(n)},hooks:{all:{},add:function(t,e){var a=i.hooks.all;a[t]=a[t]||[],a[t].push(e)},run:function(t,e){var a=i.hooks.all[t];if(a&&a.length)for(var r,n=0;r=a[n++];)r(e)}},Token:p};function p(t,e,a,r){this.type=t,this.content=e,this.alias=a,this.length=0|(r||"").length}function F(t,e,a,r){t.lastIndex=e;var n=t.exec(a);if(n&&r&&n[1]){var o=n[1].length;n.index+=o,n[0]=n[0].slice(o)}return n}function H(t,e,a,r,n,o){for(var l in a)if(a.hasOwnProperty(l)&&a[l]){var u=a[l];u=Array.isArray(u)?u:[u];for(var c=0;c<u.length;++c){if(o&&o.cause==l+","+c)return;var s=u[c],w=s.inside,q=!!s.lookbehind,D=!!s.greedy,R=s.alias;if(D&&!s.pattern.global){var U=s.pattern.toString().match(/[imsuy]*$/)[0];s.pattern=RegExp(s.pattern.source,U+"g")}for(var I=s.pattern||s,g=r.next,h=n;g!==e.tail&&!(o&&h>=o.reach);h+=g.value.length,g=g.next){var m=g.value;if(e.length>t.length)return;if(!(m instanceof p)){var d,A=1;if(D){if(!(d=F(I,h,t,q))||d.index>=t.length)break;var O=d.index,K=d.index+d[0].length,v=h;for(v+=g.value.length;O>=v;)v+=(g=g.next).value.length;if(h=v-=g.value.length,g.value instanceof p)continue;for(var x=g;x!==e.tail&&(v<K||typeof x.value=="string");x=x.next)A++,v+=x.value.length;A--,m=t.slice(h,v),d.index-=h}else if(!(d=F(I,0,m,q)))continue;O=d.index;var L=d[0],_=m.slice(0,O),$=m.slice(O+L.length),C=h+m.length;o&&C>o.reach&&(o.reach=C);var E=g.prev;if(_&&(E=b(e,E,_),h+=_.length),J(e,E,A),g=b(e,E,new p(l,w?i.tokenize(L,w):L,R,L)),$&&b(e,g,$),A>1){var M={cause:l+","+c,reach:C};H(t,e,a,g.prev,h,M),o&&M.reach>o.reach&&(o.reach=M.reach)}}}}}}function G(){var t={value:null,prev:null,next:null},e={value:null,prev:t,next:null};t.next=e,this.head=t,this.tail=e,this.length=0}function b(t,e,a){var r=e.next,n={value:a,prev:e,next:r};return e.next=n,r.prev=n,t.length++,n}function J(t,e,a){for(var r=e.next,n=0;n<a&&r!==t.tail;n++)r=r.next;e.next=r,r.prev=e,t.length-=n}if(f.Prism=i,p.stringify=function t(e,a){if(typeof e=="string")return e;if(Array.isArray(e)){var r="";return e.forEach(function(c){r+=t(c,a)}),r}var n={type:e.type,content:t(e.content,a),tag:"span",classes:["token",e.type],attributes:{},language:a},o=e.alias;o&&(Array.isArray(o)?Array.prototype.push.apply(n.classes,o):n.classes.push(o)),i.hooks.run("wrap",n);var l="";for(var u in n.attributes)l+=" "+u+'="'+(n.attributes[u]||"").replace(/"/g,"&quot;")+'"';return"<"+n.tag+' class="'+n.classes.join(" ")+'"'+l+">"+n.content+"</"+n.tag+">"},!f.document)return f.addEventListener&&(i.disableWorkerMessageHandler||f.addEventListener("message",function(t){var e=JSON.parse(t.data),a=e.language,r=e.code,n=e.immediateClose;f.postMessage(i.highlight(r,i.languages[a],a)),n&&f.close()},!1)),i;var y=i.util.currentScript();function S(){i.manual||i.highlightAll()}if(y&&(i.filename=y.src,y.hasAttribute("data-manual")&&(i.manual=!0)),!i.manual){var j=document.readyState;j==="loading"||j==="interactive"&&y&&y.defer?document.addEventListener("DOMContentLoaded",S):window.requestAnimationFrame?window.requestAnimationFrame(S):window.setTimeout(S,16)}return i}(z);P.exports&&(P.exports=T),typeof N.g!="undefined"&&(N.g.Prism=T)}}]);
