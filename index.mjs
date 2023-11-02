// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as s}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@v0.1.1-esm/index.mjs";import{isPrimitive as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-integer@v0.1.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/string-code-point-at@v0.1.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-utf16-surrogate-pair-at@v0.1.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/string-tools-grapheme-cluster-break@v0.1.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.1.1-esm/index.mjs";var o=i.breakType,m=i.breakProperty,d=i.emojiProperty;function p(i,p){var h,j,l,a,f,g;if(!s(i))throw new TypeError(n("1Ot3F,Ex",i));if(arguments.length>1){if(!t(p))throw new TypeError(n("1Ot7f,LW",p));a=p}else a=0;if(l=i.length,a<0&&(a+=l)<0&&(a=0),0===l||a>=l)return-1;for(h=[],j=[],f=r(i,a),h.push(m(f)),j.push(d(f)),g=a+1;g<l;g++)if(!e(i,g-1)&&(f=r(i,g),h.push(m(f)),j.push(d(f)),o(h,j)>0))return g;return-1}export{p as default};
//# sourceMappingURL=index.mjs.map
