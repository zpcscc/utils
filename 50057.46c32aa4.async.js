(self.webpackChunk_dxsixpc_utils=self.webpackChunk_dxsixpc_utils||[]).push([[50057],{50057:function(){(function(t){function n(r){return RegExp("(^(?:"+r+"):[ 	]*(?![ 	]))[^]+","i")}t.languages.http={"request-line":{pattern:/^(?:CONNECT|DELETE|GET|HEAD|OPTIONS|PATCH|POST|PRI|PUT|SEARCH|TRACE)\s(?:https?:\/\/|\/)\S*\sHTTP\/[\d.]+/m,inside:{method:{pattern:/^[A-Z]+\b/,alias:"property"},"request-target":{pattern:/^(\s)(?:https?:\/\/|\/)\S*(?=\s)/,lookbehind:!0,alias:"url",inside:t.languages.uri},"http-version":{pattern:/^(\s)HTTP\/[\d.]+/,lookbehind:!0,alias:"property"}}},"response-status":{pattern:/^HTTP\/[\d.]+ \d+ .+/m,inside:{"http-version":{pattern:/^HTTP\/[\d.]+/,alias:"property"},"status-code":{pattern:/^(\s)\d+(?=\s)/,lookbehind:!0,alias:"number"},"reason-phrase":{pattern:/^(\s).+/,lookbehind:!0,alias:"string"}}},header:{pattern:/^[\w-]+:.+(?:(?:\r\n?|\n)[ \t].+)*/m,inside:{"header-value":[{pattern:n(/Content-Security-Policy/.source),lookbehind:!0,alias:["csp","languages-csp"],inside:t.languages.csp},{pattern:n(/Public-Key-Pins(?:-Report-Only)?/.source),lookbehind:!0,alias:["hpkp","languages-hpkp"],inside:t.languages.hpkp},{pattern:n(/Strict-Transport-Security/.source),lookbehind:!0,alias:["hsts","languages-hsts"],inside:t.languages.hsts},{pattern:n(/[^:]+/.source),lookbehind:!0}],"header-name":{pattern:/^[^:]+/,alias:"keyword"},punctuation:/^:/}}};var e=t.languages,i={"application/javascript":e.javascript,"application/json":e.json||e.javascript,"application/xml":e.xml,"text/xml":e.xml,"text/html":e.html,"text/css":e.css,"text/plain":e.plain},p={"application/json":!0,"application/xml":!0};function u(r){var o=r.replace(/^[a-z]+\//,""),h="\\w+/(?:[\\w.-]+\\+)+"+o+"(?![+\\w.-])";return"(?:"+r+"|"+h+")"}var s;for(var a in i)if(i[a]){s=s||{};var l=p[a]?u(a):a;s[a.replace(/\//g,"-")]={pattern:RegExp("("+/content-type:\s*/.source+l+/(?:(?:\r\n?|\n)[\w-].*)*(?:\r(?:\n|(?!\n))|\n)/.source+")"+/[^ \t\w-][\s\S]*/.source,"i"),lookbehind:!0,inside:i[a]}}s&&t.languages.insertBefore("http","header",s)})(Prism)}}]);
