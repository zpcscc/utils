(self.webpackChunk_dxsixpc_utils=self.webpackChunk_dxsixpc_utils||[]).push([[25867],{25867:function(){(function(a){var t=/(?:(?!\s)[\d$+<=a-zA-Z\x80-\uFFFF])+/.source,e=/[^{}@#]+/.source,n=/\{[^}#@]*\}/.source,r=e+n,i=/(?:h|hours|hrs|m|min|minutes)/.source,o={pattern:/\{[^{}]*\}/,inside:{amount:{pattern:/([\{|])[^{}|*%]+/,lookbehind:!0,alias:"number"},unit:{pattern:/(%)[^}]+/,lookbehind:!0,alias:"symbol"},"servings-scaler":{pattern:/\*/,alias:"operator"},"servings-alternative-separator":{pattern:/\|/,alias:"operator"},"unit-separator":{pattern:/(?:%|(\*)%)/,lookbehind:!0,alias:"operator"},punctuation:/[{}]/}};a.languages.cooklang={comment:{pattern:/\[-[\s\S]*?-\]|--.*/,greedy:!0},meta:{pattern:/>>.*:.*/,inside:{property:{pattern:/(>>\s*)[^\s:](?:[^:]*[^\s:])?/,lookbehind:!0}}},"cookware-group":{pattern:new RegExp("#(?:"+r+"|"+t+")"),inside:{cookware:{pattern:new RegExp("(^#)(?:"+e+")"),lookbehind:!0,alias:"variable"},"cookware-keyword":{pattern:/^#/,alias:"keyword"},"quantity-group":{pattern:new RegExp(/\{[^{}@#]*\}/),inside:{quantity:{pattern:new RegExp(/(^\{)/.source+e),lookbehind:!0,alias:"number"},punctuation:/[{}]/}}}},"ingredient-group":{pattern:new RegExp("@(?:"+r+"|"+t+")"),inside:{ingredient:{pattern:new RegExp("(^@)(?:"+e+")"),lookbehind:!0,alias:"variable"},"ingredient-keyword":{pattern:/^@/,alias:"keyword"},"amount-group":o}},"timer-group":{pattern:/~(?!\s)[^@#~{}]*\{[^{}]*\}/,inside:{timer:{pattern:/(^~)[^{]+/,lookbehind:!0,alias:"variable"},"duration-group":{pattern:/\{[^{}]*\}/,inside:{punctuation:/[{}]/,unit:{pattern:new RegExp(/(%\s*)/.source+i+/\b/.source),lookbehind:!0,alias:"symbol"},operator:/%/,duration:{pattern:/\d+/,alias:"number"}}},"timer-keyword":{pattern:/^~/,alias:"keyword"}}}}})(Prism)}}]);
