(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var s,o=n(7),r=n.n(o),c=n(6),i=n(8),a=n(1),l=(n(13),n(14),n(4)),u=n.n(l),h=n(0),b=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t.sortByAlpha="alpha",t.sortByLength="length"}(s||(s={}));var d=function(){var t=Object(a.useState)(""),e=Object(c.a)(t,2),n=e[0],o=e[1],r=Object(a.useState)(!1),l=Object(c.a)(r,2),d=l[0],j=l[1],g=function(t,e){var n=e.sortField,o=e.reversed,r=Object(i.a)(t);return n&&r.sort((function(t,e){switch(n){case s.sortByAlpha:return t.localeCompare(e);case s.sortByLength:return t.length-e.length;default:return 0}})),o&&(r=r.reverse()),r}(b,{sortField:n,reversed:d});return Object(h.jsxs)("div",{className:"section content",children:[Object(h.jsxs)("div",{className:"buttons",children:[Object(h.jsx)("button",{onClick:function(){return o(s.sortByAlpha)},type:"button",className:u()("button is-info",{"is-light":n!==s.sortByAlpha}),children:"Sort alphabetically"}),Object(h.jsx)("button",{onClick:function(){return o(s.sortByLength)},type:"button",className:u()("button is-success",{"is-light":n!==s.sortByLength}),children:"Sort by length"}),Object(h.jsx)("button",{onClick:function(){return j(!d)},type:"button",className:u()("button is-warning",{"is-light":!d}),children:"Reverse"}),(n||d)&&Object(h.jsx)("button",{onClick:function(){o(""),j(!1)},type:"button",className:"button is-danger is-light",children:"Reset"})]}),Object(h.jsx)("ul",{children:g.map((function(t){return Object(h.jsx)("li",{"data-cy":"Good",children:t},t)}))})]})};r.a.render(Object(h.jsx)(d,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.5425538b.chunk.js.map