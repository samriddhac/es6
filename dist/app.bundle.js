!function(o){function n(t){if(e[t])return e[t].exports;var l=e[t]={i:t,l:!1,exports:{}};return o[t].call(l.exports,l,l.exports,n),l.l=!0,l.exports}var e={};return n.m=o,n.c=e,n.i=function(o){return o},n.d=function(o,e,t){n.o(o,e)||Object.defineProperty(o,e,{configurable:!1,enumerable:!0,get:t})},n.n=function(o){var e=o&&o.__esModule?function(){return o.default}:function(){return o};return n.d(e,"a",e),e},n.o=function(o,n){return Object.prototype.hasOwnProperty.call(o,n)},n.p="",n(n.s=1)}([function(o,n,e){"use strict";function t(){var o=22;console.log("d="+o)}var l=99;console.log("z= "+l),console.log("z= "+l);var c=10;console.log(c),t();var r={name:"Sam"};r.name="Harry";for(var s=[],i=0;i<=10;i++)s.push(function(){console.log(i)});s.forEach(function(o){o()});for(var s=[],u=function(o){s.push(function(){console.log(o)})},a=0;a<=10;a++)u(a);s.forEach(function(o){o()});var f=[],g={a:!0,b:!1,c:!0},d=function(o){f.push(function(){console.log(o)})};for(var h in g)d(h);f.forEach(function(o){o()});var p="𠮷a";console.log(p.length),console.log(/^.$/.test(p)),console.log(p.charAt(0)),console.log(p.charAt(1)),console.log(p.charCodeAt(0)),console.log(p.charCodeAt(1)),console.log(p.codePointAt(0)),console.log(p.codePointAt(1)),console.log(p.codePointAt(2)),console.log(String.fromCodePoint(134071));var v="Hello  World!";console.log(v.indexOf("H")),console.log(v.includes("e")),console.log(v.startsWith("H")),console.log(v.endsWith("!")),console.log(v.includes("e",1)),console.log(v.startsWith("H",0)),console.log(v.endsWith("!",10)),console.log("x".repeat(10))},function(o,n,e){o.exports=e(0)}]);