"use strict";(self.webpackChunk_zpcscc_utils=self.webpackChunk_zpcscc_utils||[]).push([[66],{23066:function(Yr,D,h){h.r(D),h.d(D,{DesensitizeList:function(){return vr},copyStrByNum:function(){return f},desensitize:function(){return dr},getRandomColor:function(){return B},getType:function(){return b},getUniqueId:function(){return j},isIncludeChinese:function(){return H},parseColor:function(){return C},parseQuery:function(){return Y},removeTag:function(){return zr},sortVersions:function(){return Mr},splitStrByLen:function(){return x},toAbsolutePath:function(){return gr},toData:function(){return pr},toHex:function(){return m},toString:function(){return g},transformColor:function(){return xr},validate:function(){return Qr},validateTypeList:function(){return $r},walkSplit:function(){return y}});var k=function(r){var e=Math.floor(Math.random()*101);if(r==="rgb"){var n=Math.floor(Math.random()*256),a=Math.floor(Math.random()*256),t=Math.floor(Math.random()*256);return"rgb(".concat(n,",").concat(a,",").concat(t,",0.").concat(e,")")}else if(r==="hsl"){var c=Math.floor(Math.random()*361),o=Math.floor(Math.random()*101),l=Math.floor(Math.random()*101);return"hsl(".concat(c,",").concat(o,"%,").concat(l,"%,").concat(e,"%)")}return"#".concat(Math.random().toString(16).padEnd(6,"0").slice(2,8))},B=k,P=function(r){return Object.prototype.toString.call(r).slice(8,-1)},b=P,w=function(){return Math.floor((1+Math.random())*65536).toString(16).slice(1)},R=function(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",n=r||4;b(r)!=="Number"&&(n=4);var a=Math.ceil(n/4);if(!r)return w();for(var t="";a--;)t=t+w();return"".concat(e).concat(t.slice(0,n))},j=R,F=function(r){if(r===null||r===void 0)return"";if(typeof r=="string")return r;var e="";if(typeof r=="number"||typeof r=="boolean")e="".concat(r);else if(b(r)==="Symbol")e=r.toString();else if(Array.isArray(r)||b(r)==="Object"){for(var n=arguments.length,a=new Array(n>1?n-1:0),t=1;t<n;t++)a[t-1]=arguments[t];e=JSON.stringify.apply(JSON,[r].concat(a))}else e=String(r);return"".concat(e)==="0"&&1/r===Number.NEGATIVE_INFINITY&&(e="-0"),e},g=F,E=function(r){return/[\u4E00-\u9FFF]+/g.test(g(r))},H=E,U=function(r){var e=r==null?void 0:r.slice(1),n=1;switch(e.length){case 6:break;case 3:{e="".concat(e[0]).concat(e[0]).concat(e[1]).concat(e[1]).concat(e[2]).concat(e[2]);break}case 4:e="".concat(e[0]).concat(e[0]).concat(e[1]).concat(e[1]).concat(e[2]).concat(e[2]).concat(e[3]).concat(e[3]);case 8:{n=Number.parseInt(e.slice(6),16)/255,e=e.slice(0,6);break}default:return console.error("hex\u683C\u5F0F\u9519\u8BEF"),{r:0,g:0,b:0,a:0}}var a=Number.parseInt(e,16);return{r:a>>16&255,g:a>>8&255,b:a&255,a:n}},A=U,$=function(r){var e=(r==null?void 0:r.match(/(\d(\.\d+)?)+/g))||[],n=e.map(function(S){return Number.parseInt(S,10)}).filter(function(S){return S!=null}),a=n[0]/360,t=n[1]/100,c=n[2]/100,o=0,l=0,u=0,d=Number.parseFloat(Number(e[3])>0?Number(e[3])>1?"0.".concat(e[3]):e[3]:"1");if(n.length===3||n.length===4){var s,v;t===0&&(v=c*255,o=l=u=v);for(var z=c<.5?c*(1+t):c+t-c*t,p=2*c-z,N=[0,0,0],I=0;I<3;I++)s=a+1/3*-(I-1),s<0&&s++,s>1&&s--,6*s<1?v=p+(z-p)*6*s:2*s<1?v=z:3*s<2?v=p+(z-p)*(2/3-s)*6:v=p,N[I]=v*255;return o=Math.round(N[0]),l=Math.round(N[1]),u=Math.round(N[2]),{r:o,g:l,b:u,a:d}}return console.error("hsl\u683C\u5F0F\u9519\u8BEF"),{r:0,g:0,b:0,a:0}},J=$,Q=function(r){var e=(r==null?void 0:r.match(/(\d(\.\d+)?)+/g))||[],n=e.map(function(a){return Number.parseInt(a,10)}).filter(function(a){return a!=null});return n.length===3||n.length===4?{r:n[0],g:n[1],b:n[2],a:Number.parseFloat(Number(e[3])>0?Number(e[3])>1?"0.".concat(e[3]):e[3]:"1")}:(console.error("rgb\u683C\u5F0F\u9519\u8BEF"),{r:0,g:0,b:0,a:0})},_=Q,W=function(r){return r!=null&&r.startsWith("#")?A(r):r!=null&&r.startsWith("rgb")?_(r):r!=null&&r.startsWith("hsl")?J(r):r==="transparent"?A("#00000000"):(console.error("\u989C\u8272\u683C\u5F0F\u9519\u8BEF"),{r:0,g:0,b:0,a:0})},C=W,G=function(r){return/^(http|https|ftp|file):\/\/([\w.]+\/?)\S*/.test(r)},T=G,X=function(r){if(!T(r))return{};var e={};return r==null||r.replace(/([^&=?]+)=([^&]+)/g,function(n,a,t){return e[a]=t}),e},Y=X,K=function(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"";return new Array(e).fill(g(r)).join(g(n))},f=K,Z=h(67855),q=h.n(Z),V=function(r){var e=r.length,n=q()(r),a=r.replaceAll(/[ -]/g,"").length;return n.map(function(t,c){if(t===" "||t==="-")return" ";var o=a<16?1:3;return c<=o||c>=e-o-1?t:"*"}).join("")},rr=V,er=function(r){var e=r.length;return e>2&&e<5?"".concat(r.slice(0,1)).concat(f("*",e-2)).concat(r.slice(-1)):"".concat(r.slice(0,2)).concat(f("*",e-4)).concat(r.slice(-2))},M=er,nr=function(r){var e=r.length;return e===15?"".concat(r.slice(0,6)).concat(f("*",6)).concat(r.slice(12,14),"*"):e===18?"".concat(r.slice(0,6)).concat(f("*",8)).concat(r.slice(14,16),"**"):M(r)},tr=nr,ar=function(r){for(var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1,n=g(r),a=[],t=n.length,c=0;c<t;c+=e)a.push(n.slice(c,c+e));return a},x=ar,or=function(r){var e=r.length;if(H(r)){if(e<4)return"".concat(r.slice(0,1)).concat(f("*",e-1));var n=x(r,4),a=n.map(function(u){return"".concat(u.slice(0,1)).concat(f("*",u.length-1))});return a.join("")}var t=r.split(/\s+/);if(t.length===1){var c=Math.round(e*.6666666666666666),o=e-c;return"".concat(r.slice(0,o)).concat(f("*",c))}var l=t.map(function(u,d){return d===0?u:f("*",u.length)});return l.join(" ")},ir=or,cr=function(r){return"".concat(r.slice(0,3)).concat(f("*",5)).concat(r.slice(-3))},sr=cr,ur=function(r){var e=r.split("-");switch(e.length){case 1:return"".concat(r.slice(0,-4)).concat(f("*",4));case 2:return"".concat(e[0],"-").concat(e[1].slice(0,-4)).concat(f("*",4));case 3:return"".concat(e[0],"-").concat(e[1].slice(0,-4)).concat(f("*",4),"-").concat(e[2].slice(0,-2)).concat(f("*",2));default:return M(r)}},lr=ur,vr=["name","phone","IDCard","telephone","bankCard"],fr=function(r,e){var n=g(r).trim();if(!n)return"";var a=n.length;if(a===1)return n;if(a===2)return"".concat(n[0],"*");switch(e){case"name":return ir(n);case"IDCard":return tr(n);case"phone":return sr(n);case"telephone":return lr(n);case"bankCard":return rr(n);default:return M(n)}},dr=fr,hr=function(r){var e=document.createElement("a");return e.href=r,e.href},gr=hr,mr=function(r){if(typeof r!="string")return r;if(r==="")return"";if(r==="true")return!0;if(r==="false")return!1;var e=Number(r);if(!Number.isNaN(e))return e;try{for(var n=arguments.length,a=new Array(n>1?n-1:0),t=1;t<n;t++)a[t-1]=arguments[t];return JSON.parse.apply(JSON,[r].concat(a))}catch(c){return r}},pr=mr,br=function(r){return"".concat(r>15?"":0).concat(r.toString(16))},m=br,Cr=function(r){var e;return r&&((e=new DOMParser)===null||e===void 0||(e=e.parseFromString(r,"text/html"))===null||e===void 0||(e=e.body)===null||e===void 0?void 0:e.textContent)||""},zr=Cr,Nr={experimental:1,alpha:2,beta:3,rc:4,release:5},Ir=function(r){return r.sort(function(e,n){var a=e.trim(),t=n.trim();if(a===t)return 0;var c=y(a,[".","-"]),o=y(t,[".","-"]),l=function(s){return Number.isNaN(Number(s))?Nr[s]||6:Number(s)},u=function d(s,v){return s===v?d(l(c.next().value),l(o.next().value)):s>v?1:-1};return u(l(c.next().value),l(o.next().value))})},Mr=Ir,yr=function(r){var e=C(r),n=e.r,a=e.g,t=e.b,c=e.a;return"#".concat(m(n)).concat(m(a)).concat(m(t)).concat(c===1?"":m(Math.floor(c*255)))},Sr=yr,Dr=function(r){var e=C(r),n=e.r/255,a=e.g/255,t=e.b/255,c=Math.floor(e.a*1e4)/1e4,o=Math.max(n,a,t),l=Math.min(n,a,t),u=0,d=0,s=(o+l)/2;if(o===l)u=d=0;else{var v=o-l;switch(d=s>.5?v/(2-o-l):v/(o+l),o){case n:{u=(a-t)/v+(a<t?6:0);break}case a:{u=(t-n)/v+2;break}case t:{u=(n-a)/v+4;break}}u/=6}return u=Math.round(u*360),d=Math.round(d*100),s=Math.round(s*100),"hsl(".concat(u,",").concat(d,"%,").concat(s,"%").concat(c===1?"":",".concat(c),")")},wr=Dr,Hr=function(r){var e=C(r),n=e.r,a=e.g,t=e.b,c=Math.floor(e.a*1e4)/1e4;return"rgb(".concat(n,",").concat(a,",").concat(t).concat(c===1?"":",".concat(c),")")},Ar=Hr,Tr=function(r,e){var n=g(r);switch(e){case"rgb":return Ar(n);case"hsl":return wr(n);case"hex":return Sr(n);default:return n}},xr=Tr,Lr=function(r){return!Number.isNaN(new Date(r).valueOf())},Or=Lr,kr=function(r){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(r)},Br=kr,Pr=function(r){return/^[1-9]\d{7}((0\d)|(1[0-2]))(([0-2|]\d)|3[01])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0-2|]\d)|3[01])\d{3}(\d|X)$/.test(r)},Rr=Pr,jr=function(r){return/(^-?[1-9](\d*)$|^-?\d$)/.test(g(r))},Fr=jr,Er=function(r){return/^1(3\d|4[014-9]|5[0-35-9]|6[25-7]|7[0-8]|8\d|9[0-35-9])\d{8}$/.test(r)},Ur=Er,$r={date:"\u65E5\u671F",email:"\u90AE\u7BB1",IDCard:"\u8EAB\u4EFD\u8BC1",integer:"\u6574\u6570",phone:"\u7535\u8BDD",url:"\u94FE\u63A5"},Jr=function(r,e){switch(e){case"date":return Or(r);case"email":return Br(r);case"IDCard":return Rr(r);case"integer":return Fr(r);case"phone":return Ur(r);case"url":return T(r);default:return!1}},Qr=Jr,_r=h(13448),L=h.n(_r),Wr=h(38887),Gr=h.n(Wr),Xr=L()().mark(O);function O(i,r){var e,n,a,t;return L()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:e="",n=Gr()(i),o.prev=2,n.s();case 4:if((a=n.n()).done){o.next=15;break}if(t=a.value,!r.includes(t)){o.next=12;break}return o.next=9,e;case 9:e="",o.next=13;break;case 12:e+=t;case 13:o.next=4;break;case 15:o.next=20;break;case 17:o.prev=17,o.t0=o.catch(2),n.e(o.t0);case 20:return o.prev=20,n.f(),o.finish(20);case 23:return o.next=25,e;case 25:case"end":return o.stop()}},Xr,null,[[2,17,20,23]])}var y=O}}]);
