(self.webpackChunk_dxsixpc_utils=self.webpackChunk_dxsixpc_utils||[]).push([[94413],{94413:function(){(function(i){function a(t,e,n){return{pattern:RegExp("<#"+t+"[\\s\\S]*?#>"),alias:"block",inside:{delimiter:{pattern:RegExp("^<#"+t+"|#>$"),alias:"important"},content:{pattern:/[\s\S]+/,inside:e,alias:n}}}}i.languages["t4-templating"]=Object.defineProperty({},"createT4",{value:function(t){var e=i.languages[t],n="language-"+t;return{block:{pattern:/<#[\s\S]+?#>/,inside:{directive:a("@",{"attr-value":{pattern:/=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/,inside:{punctuation:/^=|^["']|["']$/}},keyword:/\b\w+(?=\s)/,"attr-name":/\b\w+/}),expression:a("=",e,n),"class-feature":a("\\+",e,n),standard:a("",e,n)}}}}})})(Prism)}}]);
