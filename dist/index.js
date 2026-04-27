"use strict";var l=function(e,i){return function(){return i||e((i={exports:{}}).exports,i),i.exports}};var f=l(function(w,h){
var y=require('@stdlib/assert-is-string/dist').isPrimitive,P=require('@stdlib/assert-is-integer/dist').isPrimitive,o=require('@stdlib/string-code-point-at/dist'),b=require('@stdlib/assert-has-utf16-surrogate-pair-at/dist'),v=require('@stdlib/string-tools-grapheme-cluster-break/dist'),p=require('@stdlib/error-tools-fmtprodmsg/dist'),c=v.breakType,m=v.breakProperty,g=v.emojiProperty;function q(e,i){var n,s,u,r,a,t;if(!y(e))throw new TypeError(p('1Ot3F',e));if(arguments.length>1){if(!P(i))throw new TypeError(p('1Ot7f',i));r=i}else r=0;if(u=e.length,r<0&&(r+=u,r<0&&(r=0)),u===0||r>=u)return-1;for(n=[],s=[],a=o(e,r),n.push(m(a)),s.push(g(a)),t=r+1;t<u;t++)if(!b(e,t-1)&&(a=o(e,t),n.push(m(a)),s.push(g(a)),c(n,s)>0))return t;return-1}h.exports=q
});var k=f();module.exports=k;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
