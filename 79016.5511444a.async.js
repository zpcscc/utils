(self.webpackChunk_dxsixpc_utils=self.webpackChunk_dxsixpc_utils||[]).push([[79016],{79016:function(){(function(t){function r(n,u){return n.replace(/<<(\d+)>>/g,function(d,F){return"(?:"+u[+F]+")"})}function e(n,u,d){return RegExp(r(n,u),d||"")}function l(n,u){for(var d=0;d<u;d++)n=n.replace(/<<self>>/g,function(){return"(?:"+n+")"});return n.replace(/<<self>>/g,"[^\\s\\S]")}var s={type:"bool byte char decimal double dynamic float int long object sbyte short string uint ulong ushort var void",typeDeclaration:"class enum interface record struct",contextual:"add alias and ascending async await by descending from(?=\\s*(?:\\w|$)) get global group into init(?=\\s*;) join let nameof not notnull on or orderby partial remove select set unmanaged value when where with(?=\\s*{)",other:"abstract as base break case catch checked const continue default delegate do else event explicit extern finally fixed for foreach goto if implicit in internal is lock namespace new null operator out override params private protected public readonly ref return sealed sizeof stackalloc static switch this throw try typeof unchecked unsafe using virtual volatile while yield"};function p(n){return"\\b(?:"+n.trim().replace(/ /g,"|")+")\\b"}var k=p(s.typeDeclaration),g=RegExp(p(s.type+" "+s.typeDeclaration+" "+s.contextual+" "+s.other)),D=p(s.typeDeclaration+" "+s.contextual+" "+s.other),K=p(s.type+" "+s.typeDeclaration+" "+s.other),b=l(/<(?:[^<>;=+\-*/%&|^]|<<self>>)*>/.source,2),h=l(/\((?:[^()]|<<self>>)*\)/.source,2),o=/@?\b[A-Za-z_]\w*\b/.source,f=r(/<<0>>(?:\s*<<1>>)?/.source,[o,b]),i=r(/(?!<<0>>)<<1>>(?:\s*\.\s*<<1>>)*/.source,[D,f]),y=/\[\s*(?:,\s*)*\]/.source,T=r(/<<0>>(?:\s*(?:\?\s*)?<<1>>)*(?:\s*\?)?/.source,[i,y]),z=r(/[^,()<>[\];=+\-*/%&|^]|<<0>>|<<1>>|<<2>>/.source,[b,h,y]),j=r(/\(<<0>>+(?:,<<0>>+)+\)/.source,[z]),c=r(/(?:<<0>>|<<1>>)(?:\s*(?:\?\s*)?<<2>>)*(?:\s*\?)?/.source,[j,i,y]),a={keyword:g,punctuation:/[<>()?,.:[\]]/},m=/'(?:[^\r\n'\\]|\\.|\\[Uux][\da-fA-F]{1,8})'/.source,w=/"(?:\\.|[^\\"\r\n])*"/.source,A=/@"(?:""|\\[\s\S]|[^\\"])*"(?!")/.source;t.languages.csharp=t.languages.extend("clike",{string:[{pattern:e(/(^|[^$\\])<<0>>/.source,[A]),lookbehind:!0,greedy:!0},{pattern:e(/(^|[^@$\\])<<0>>/.source,[w]),lookbehind:!0,greedy:!0}],"class-name":[{pattern:e(/(\busing\s+static\s+)<<0>>(?=\s*;)/.source,[i]),lookbehind:!0,inside:a},{pattern:e(/(\busing\s+<<0>>\s*=\s*)<<1>>(?=\s*;)/.source,[o,c]),lookbehind:!0,inside:a},{pattern:e(/(\busing\s+)<<0>>(?=\s*=)/.source,[o]),lookbehind:!0},{pattern:e(/(\b<<0>>\s+)<<1>>/.source,[k,f]),lookbehind:!0,inside:a},{pattern:e(/(\bcatch\s*\(\s*)<<0>>/.source,[i]),lookbehind:!0,inside:a},{pattern:e(/(\bwhere\s+)<<0>>/.source,[o]),lookbehind:!0},{pattern:e(/(\b(?:is(?:\s+not)?|as)\s+)<<0>>/.source,[T]),lookbehind:!0,inside:a},{pattern:e(/\b<<0>>(?=\s+(?!<<1>>|with\s*\{)<<2>>(?:\s*[=,;:{)\]]|\s+(?:in|when)\b))/.source,[c,K,o]),inside:a}],keyword:g,number:/(?:\b0(?:x[\da-f_]*[\da-f]|b[01_]*[01])|(?:\B\.\d+(?:_+\d+)*|\b\d+(?:_+\d+)*(?:\.\d+(?:_+\d+)*)?)(?:e[-+]?\d+(?:_+\d+)*)?)(?:[dflmu]|lu|ul)?\b/i,operator:/>>=?|<<=?|[-=]>|([-+&|])\1|~|\?\?=?|[-+*/%&|^!=<>]=?/,punctuation:/\?\.?|::|[{}[\];(),.:]/}),t.languages.insertBefore("csharp","number",{range:{pattern:/\.\./,alias:"operator"}}),t.languages.insertBefore("csharp","punctuation",{"named-parameter":{pattern:e(/([(,]\s*)<<0>>(?=\s*:)/.source,[o]),lookbehind:!0,alias:"punctuation"}}),t.languages.insertBefore("csharp","class-name",{namespace:{pattern:e(/(\b(?:namespace|using)\s+)<<0>>(?:\s*\.\s*<<0>>)*(?=\s*[;{])/.source,[o]),lookbehind:!0,inside:{punctuation:/\./}},"type-expression":{pattern:e(/(\b(?:default|sizeof|typeof)\s*\(\s*(?!\s))(?:[^()\s]|\s(?!\s)|<<0>>)*(?=\s*\))/.source,[h]),lookbehind:!0,alias:"class-name",inside:a},"return-type":{pattern:e(/<<0>>(?=\s+(?:<<1>>\s*(?:=>|[({]|\.\s*this\s*\[)|this\s*\[))/.source,[c,i]),inside:a,alias:"class-name"},"constructor-invocation":{pattern:e(/(\bnew\s+)<<0>>(?=\s*[[({])/.source,[c]),lookbehind:!0,inside:a,alias:"class-name"},"generic-method":{pattern:e(/<<0>>\s*<<1>>(?=\s*\()/.source,[o,b]),inside:{function:e(/^<<0>>/.source,[o]),generic:{pattern:RegExp(b),alias:"class-name",inside:a}}},"type-list":{pattern:e(/\b((?:<<0>>\s+<<1>>|record\s+<<1>>\s*<<5>>|where\s+<<2>>)\s*:\s*)(?:<<3>>|<<4>>|<<1>>\s*<<5>>|<<6>>)(?:\s*,\s*(?:<<3>>|<<4>>|<<6>>))*(?=\s*(?:where|[{;]|=>|$))/.source,[k,f,o,c,g.source,h,/\bnew\s*\(\s*\)/.source]),lookbehind:!0,inside:{"record-arguments":{pattern:e(/(^(?!new\s*\()<<0>>\s*)<<1>>/.source,[f,h]),lookbehind:!0,greedy:!0,inside:t.languages.csharp},keyword:g,"class-name":{pattern:RegExp(c),greedy:!0,inside:a},punctuation:/[,()]/}},preprocessor:{pattern:/(^[\t ]*)#.*/m,lookbehind:!0,alias:"property",inside:{directive:{pattern:/(#)\b(?:define|elif|else|endif|endregion|error|if|line|nullable|pragma|region|undef|warning)\b/,lookbehind:!0,alias:"keyword"}}}});var x=w+"|"+m,_=r(/\/(?![*/])|\/\/[^\r\n]*[\r\n]|\/\*(?:[^*]|\*(?!\/))*\*\/|<<0>>/.source,[x]),E=l(r(/[^"'/()]|<<0>>|\(<<self>>*\)/.source,[_]),2),S=/\b(?:assembly|event|field|method|module|param|property|return|type)\b/.source,O=r(/<<0>>(?:\s*\(<<1>>*\))?/.source,[i,E]);t.languages.insertBefore("csharp","class-name",{attribute:{pattern:e(/((?:^|[^\s\w>)?])\s*\[\s*)(?:<<0>>\s*:\s*)?<<1>>(?:\s*,\s*<<1>>)*(?=\s*\])/.source,[S,O]),lookbehind:!0,greedy:!0,inside:{target:{pattern:e(/^<<0>>(?=\s*:)/.source,[S]),alias:"keyword"},"attribute-arguments":{pattern:e(/\(<<0>>*\)/.source,[E]),inside:t.languages.csharp},"class-name":{pattern:RegExp(i),inside:{punctuation:/\./}},punctuation:/[:,]/}}});var v=/:[^}\r\n]+/.source,R=l(r(/[^"'/()]|<<0>>|\(<<self>>*\)/.source,[_]),2),$=r(/\{(?!\{)(?:(?![}:])<<0>>)*<<1>>?\}/.source,[R,v]),I=l(r(/[^"'/()]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|<<0>>|\(<<self>>*\)/.source,[x]),2),B=r(/\{(?!\{)(?:(?![}:])<<0>>)*<<1>>?\}/.source,[I,v]);function C(n,u){return{interpolation:{pattern:e(/((?:^|[^{])(?:\{\{)*)<<0>>/.source,[n]),lookbehind:!0,inside:{"format-string":{pattern:e(/(^\{(?:(?![}:])<<0>>)*)<<1>>(?=\}$)/.source,[u,v]),lookbehind:!0,inside:{punctuation:/^:/}},punctuation:/^\{|\}$/,expression:{pattern:/[\s\S]+/,alias:"language-csharp",inside:t.languages.csharp}}},string:/[\s\S]+/}}t.languages.insertBefore("csharp","string",{"interpolation-string":[{pattern:e(/(^|[^\\])(?:\$@|@\$)"(?:""|\\[\s\S]|\{\{|<<0>>|[^\\{"])*"/.source,[$]),lookbehind:!0,greedy:!0,inside:C($,R)},{pattern:e(/(^|[^@\\])\$"(?:\\.|\{\{|<<0>>|[^\\"{])*"/.source,[B]),lookbehind:!0,greedy:!0,inside:C(B,I)}],char:{pattern:RegExp(m),greedy:!0}}),t.languages.dotnet=t.languages.cs=t.languages.csharp})(Prism)}}]);
