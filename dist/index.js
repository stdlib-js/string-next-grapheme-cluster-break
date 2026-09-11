"use strict";var l=function(i,r){return function(){try{return r||i((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var f=l(function(w,h){
var y=require('@stdlib/assert-is-string/dist').isPrimitive,P=require('@stdlib/assert-is-integer/dist').isPrimitive,o=require('@stdlib/string-code-point-at/dist'),b=require('@stdlib/assert-has-utf16-surrogate-pair-at/dist'),v=require('@stdlib/string-tools-grapheme-cluster-break/dist'),p=require('@stdlib/error-tools-fmtprodmsg/dist'),c=v.breakType,m=v.breakProperty,g=v.emojiProperty;function q(i,r){var a,s,n,e,t,u;if(!y(i))throw new TypeError(p('1Ot3F',i));if(arguments.length>1){if(!P(r))throw new TypeError(p('1Ot7f',r));e=r}else e=0;if(n=i.length,e<0&&(e+=n,e<0&&(e=0)),n===0||e>=n)return-1;for(a=[],s=[],t=o(i,e),a.push(m(t)),s.push(g(t)),u=e+1;u<n;u++)if(!b(i,u-1)&&(t=o(i,u),a.push(m(t)),s.push(g(t)),c(a,s)>0))return u;return-1}h.exports=q
});var k=f();module.exports=k;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
