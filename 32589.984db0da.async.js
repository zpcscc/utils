(self.webpackChunk_dxsixpc_utils=self.webpackChunk_dxsixpc_utils||[]).push([[32589],{32589:function(){(function(s){var i=s.languages.javadoclike={parameter:{pattern:/(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*@(?:arg|arguments|param)\s+)\w+/m,lookbehind:!0},keyword:{pattern:/(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*|\{)@[a-z][a-zA-Z-]+\b/m,lookbehind:!0},punctuation:/[{}]/};Object.defineProperty(i,"addSupport",{value:function(a,u){typeof a=="string"&&(a=[a]),a.forEach(function(o){(function(e,c){var p="doc-comment",r=s.languages[e];if(r){var n=r[p];if(n||(n=(r=s.languages.insertBefore(e,"comment",{"doc-comment":{pattern:/(^|[^\\])\/\*\*[^/][\s\S]*?(?:\*\/|$)/,lookbehind:!0,alias:"comment"}}))[p]),n instanceof RegExp&&(n=r[p]={pattern:n}),Array.isArray(n))for(var t=0,d=n.length;t<d;t++)n[t]instanceof RegExp&&(n[t]={pattern:n[t]}),c(n[t]);else c(n)}})(o,function(e){e.inside||(e.inside={}),e.inside.rest=u})})}}),i.addSupport(["java","javascript","php"],i)})(Prism)}}]);