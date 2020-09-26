(this["webpackJsonpconstanta-test-app"]=this["webpackJsonpconstanta-test-app"]||[]).push([[3],{70:function(t,e,a){"use strict";var o=a(1),r=a(3),n=a(0),i=(a(9),a(20)),c=a(71),l=a(25),s=n.forwardRef((function(t,e){var a=t.classes,l=t.className,s=t.raised,p=void 0!==s&&s,d=Object(r.a)(t,["classes","className","raised"]);return n.createElement(c.a,Object(o.a)({className:Object(i.a)(a.root,l),elevation:p?8:1,ref:e},d))}));e.a=Object(l.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(s)},71:function(t,e,a){"use strict";var o=a(3),r=a(1),n=a(0),i=(a(9),a(20)),c=a(25),l=n.forwardRef((function(t,e){var a=t.classes,c=t.className,l=t.component,s=void 0===l?"div":l,p=t.square,d=void 0!==p&&p,u=t.elevation,h=void 0===u?1:u,m=t.variant,y=void 0===m?"elevation":m,v=Object(o.a)(t,["classes","className","component","square","elevation","variant"]);return n.createElement(s,Object(r.a)({className:Object(i.a)(a.root,c,"outlined"===y?a.outlined:a["elevation".concat(h)],!d&&a.rounded),ref:e},v))}));e.a=Object(c.a)((function(t){var e={};return t.shadows.forEach((function(t,a){e["elevation".concat(a)]={boxShadow:t}})),Object(r.a)({root:{backgroundColor:t.palette.background.paper,color:t.palette.text.primary,transition:t.transitions.create("box-shadow")},rounded:{borderRadius:t.shape.borderRadius},outlined:{border:"1px solid ".concat(t.palette.divider)}},e)}),{name:"MuiPaper"})(l)},72:function(t,e,a){"use strict";var o=a(1),r=a(3),n=a(0),i=(a(9),a(20)),c=a(25),l=n.forwardRef((function(t,e){var a=t.classes,c=t.className,l=t.component,s=void 0===l?"div":l,p=Object(r.a)(t,["classes","className","component"]);return n.createElement(s,Object(o.a)({className:Object(i.a)(a.root,c),ref:e},p))}));e.a=Object(c.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(l)},73:function(t,e,a){"use strict";var o=a(1),r=a(3),n=a(0),i=(a(9),a(20)),c=a(25),l=a(26),s={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p"},p=n.forwardRef((function(t,e){var a=t.align,c=void 0===a?"inherit":a,p=t.classes,d=t.className,u=t.color,h=void 0===u?"initial":u,m=t.component,y=t.display,v=void 0===y?"initial":y,b=t.gutterBottom,f=void 0!==b&&b,g=t.noWrap,j=void 0!==g&&g,O=t.paragraph,w=void 0!==O&&O,E=t.variant,x=void 0===E?"body1":E,N=t.variantMapping,C=void 0===N?s:N,_=Object(r.a)(t,["align","classes","className","color","component","display","gutterBottom","noWrap","paragraph","variant","variantMapping"]),M=m||(w?"p":C[x]||s[x])||"span";return n.createElement(M,Object(o.a)({className:Object(i.a)(p.root,d,"inherit"!==x&&p[x],"initial"!==h&&p["color".concat(Object(l.a)(h))],j&&p.noWrap,f&&p.gutterBottom,w&&p.paragraph,"inherit"!==c&&p["align".concat(Object(l.a)(c))],"initial"!==v&&p["display".concat(Object(l.a)(v))]),ref:e},_))}));e.a=Object(c.a)((function(t){return{root:{margin:0},body2:t.typography.body2,body1:t.typography.body1,caption:t.typography.caption,button:t.typography.button,h1:t.typography.h1,h2:t.typography.h2,h3:t.typography.h3,h4:t.typography.h4,h5:t.typography.h5,h6:t.typography.h6,subtitle1:t.typography.subtitle1,subtitle2:t.typography.subtitle2,overline:t.typography.overline,srOnly:{position:"absolute",height:1,width:1,overflow:"hidden"},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right"},alignJustify:{textAlign:"justify"},noWrap:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},gutterBottom:{marginBottom:"0.35em"},paragraph:{marginBottom:16},colorInherit:{color:"inherit"},colorPrimary:{color:t.palette.primary.main},colorSecondary:{color:t.palette.secondary.main},colorTextPrimary:{color:t.palette.text.primary},colorTextSecondary:{color:t.palette.text.secondary},colorError:{color:t.palette.error.main},displayInline:{display:"inline"},displayBlock:{display:"block"}}}),{name:"MuiTypography"})(p)},80:function(t,e,a){t.exports={wrapper:"EnterTime_wrapper__2CCjV",timerContent:"EnterTime_timerContent__2PfCh",timer:"EnterTime_timer__2yTxY",title:"EnterTime_title__12Hbv"}},99:function(t,e,a){"use strict";a.r(e);var o,r=a(34),n=a(0),i=a.n(n),c=a(29),l=a(70),s=a(72),p=a(73),d=a(80),u=a.n(d);e.default=function(){var t=Object(n.useState)(Date.now()),e=Object(r.a)(t,2),a=e[0],d=e[1],h=Object(n.useContext)(c.a).enterTime;Object(n.useEffect)((function(){return o=window.setInterval((function(){return d(Date.now())}),1e3),function(){return clearInterval(o)}}),[]);var m=Object(n.useMemo)((function(){return function(t,e){var a=e-t,o=Math.floor(a/1e3%60),r=Math.floor(a/6e4%60),n=Math.floor(a/36e5%24);return[n>9?n:"0".concat(n),r>9?r:"0".concat(r),o>9?o:"0".concat(o)]}(h,a)}),[h,a]),y=Object(r.a)(m,3),v=y[0],b=y[1],f=y[2];return i.a.createElement("div",{className:u.a.wrapper},i.a.createElement(l.a,null,i.a.createElement(s.a,null,i.a.createElement(p.a,{className:u.a.title,color:"textSecondary",gutterBottom:!0},"\u0422\u0430\u0439\u043c\u0435\u0440"),i.a.createElement("hr",null),i.a.createElement("div",{className:u.a.timerContent},i.a.createElement("h3",null,"\u0421\u043e \u0432\u0440\u0435\u043c\u0435\u043d\u0438 \u043e\u0442\u043a\u0440\u044b\u0442\u0438\u044f \u0441\u0430\u0439\u0442\u0430 \u043f\u0440\u043e\u0448\u043b\u043e"),i.a.createElement("div",{className:u.a.timer},"".concat(v," : ").concat(b," : ").concat(f))))))}}}]);
//# sourceMappingURL=3.30e02e5f.chunk.js.map