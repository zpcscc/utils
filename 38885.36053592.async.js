(self.webpackChunk_dxsixpc_utils=self.webpackChunk_dxsixpc_utils||[]).push([[38885],{38885:function(){(function(a){var d=a.languages.javascript["template-string"],C=d.pattern.source,h=d.inside.interpolation,T=h.inside["interpolation-punctuation"],q=h.pattern.source;function v(t,n){if(a.languages[t])return{pattern:RegExp("((?:"+n+")\\s*)"+C),lookbehind:!0,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},"embedded-code":{pattern:/[\s\S]+/,alias:t}}}}a.languages.javascript["template-string"]=[v("css",/\b(?:styled(?:\([^)]*\))?(?:\s*\.\s*\w+(?:\([^)]*\))*)*|css(?:\s*\.\s*(?:global|resolve))?|createGlobalStyle|keyframes)/.source),v("html",/\bhtml|\.\s*(?:inner|outer)HTML\s*\+?=/.source),v("svg",/\bsvg/.source),v("markdown",/\b(?:markdown|md)/.source),v("graphql",/\b(?:gql|graphql(?:\s*\.\s*experimental)?)/.source),v("sql",/\bsql/.source),d].filter(Boolean);function O(t,n){return"___"+n.toUpperCase()+"_"+t+"___"}function x(t,n,r){var e={code:t,grammar:n,language:r};return a.hooks.run("before-tokenize",e),e.tokens=a.tokenize(e.code,e.grammar),a.hooks.run("after-tokenize",e),e.tokens}function E(t){var n={};n["interpolation-punctuation"]=T;var r=a.tokenize(t,n);if(r.length===3){var e=[1,1];e.push.apply(e,x(r[1],a.languages.javascript,"javascript")),r.splice.apply(r,e)}return new a.Token("interpolation",r,h.alias,t)}function S(t,n,r){var e=a.tokenize(t,{interpolation:{pattern:RegExp(q),lookbehind:!0}}),l=0,f={},u=e.map(function(s){if(typeof s=="string")return s;for(var o=s.content,i;t.indexOf(i=O(l++,r))!==-1;);return f[i]=o,i}).join(""),c=x(u,n,r),y=Object.keys(f);l=0;function p(s){for(var o=0;o<s.length;o++){if(l>=y.length)return;var i=s[o];if(typeof i=="string"||typeof i.content=="string"){var k=y[l],j=typeof i=="string"?i:i.content,_=j.indexOf(k);if(_!==-1){++l;var z=j.substring(0,_),G=E(f[k]),A=j.substring(_+k.length),g=[];if(z&&g.push(z),g.push(G),A){var m=[A];p(m),g.push.apply(g,m)}typeof i=="string"?(s.splice.apply(s,[o,1].concat(g)),o+=g.length-1):i.content=g}}else{var w=i.content;Array.isArray(w)?p(w):p([w])}}}return p(c),new a.Token(r,c,"language-"+r,t)}var L={javascript:!0,js:!0,typescript:!0,ts:!0,jsx:!0,tsx:!0};a.hooks.add("after-tokenize",function(t){if(!(t.language in L))return;function n(r){for(var e=0,l=r.length;e<l;e++){var f=r[e];if(typeof f!="string"){var u=f.content;if(!Array.isArray(u)){typeof u!="string"&&n([u]);continue}if(f.type==="template-string"){var c=u[1];if(u.length===3&&typeof c!="string"&&c.type==="embedded-code"){var y=b(c),p=c.alias,s=Array.isArray(p)?p[0]:p,o=a.languages[s];if(!o)continue;u[1]=S(y,o,s)}}else n(u)}}}n(t.tokens)});function b(t){return typeof t=="string"?t:Array.isArray(t)?t.map(b).join(""):b(t.content)}})(Prism)}}]);
