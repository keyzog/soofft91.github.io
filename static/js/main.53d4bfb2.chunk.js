(this.webpackJsonpiot=this.webpackJsonpiot||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),l=a.n(c),o=a(2),s=a.n(o),u=a(3),m=a(8),i=a(1),p=(a(15),function(e){return r.a.createElement("div",{className:"app-menu text-center"},r.a.createElement("div",{className:"row"},[{n:"color",i:"fas fa-palette",t:"\u0423\u043f\u0440. \u0446\u0432\u0435\u0442\u0430\u043c\u0438"},{n:"effect",i:"fas fa-fire",t:"\u042d\u0444\u0444\u0435\u043a\u0442\u044b"},{n:"options",i:"fas fa-cog",t:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"}].map((function(t){return r.a.createElement("div",{className:"col-4 app-menu-btn ".concat(e.page===t.n&&"active"),onClick:function(){return e.setPage(t.n)}},r.a.createElement("i",{className:t.i}),r.a.createElement("div",null,t.t))}))))}),f=function(e){var t=e.url,a=e.setUrl,c=Object(n.useState)(50),l=Object(i.a)(c,2),o=l[0],m=l[1],p=Object(n.useState)(50),f=Object(i.a)(p,2),d=f[0],b=f[1],v=Object(n.useState)(1),g=Object(i.a)(v,2),E=g[0],h=g[1],y=Object(n.useState)(1),N=Object(i.a)(y,2),O=N[0],j=N[1],C=Object(n.useState)(1),S=Object(i.a)(C,2),k=S[0],w=S[1],x=function(){var e=Object(u.a)(s.a.mark((function e(){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("\u23eb sendOpts"),e.next=3,fetch("http://"+t+"/set-opts",{method:"POST",body:JSON.stringify({brightness:o,effectTimeout:d,param_1:E,param_2:O,param_3:k}),mode:"no-cors",headers:{"Content-Type":"application/json"}});case 3:a=e.sent,console.log(a);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"pt-3"},r.a.createElement("h3",{className:"mb-4"},"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Target Url"),r.a.createElement("input",{type:"text",className:"form-control",value:t,onChange:function(e){var t=e.target;return a(t.value)}})),r.a.createElement("hr",null),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"\u042f\u0440\u043a\u043e\u0441\u0442\u044c ",r.a.createElement("span",{class:"badge badge-primary"},o)),r.a.createElement("input",{type:"range",max:255,className:"form-control",value:o,onChange:function(e){var t=e.target;return m(t.value)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"\u0421\u043a\u043e\u0440\u043e\u0441\u0442\u044c ",r.a.createElement("span",{class:"badge badge-primary"},d)),r.a.createElement("input",{type:"range",max:1e3,className:"form-control",value:d,onChange:function(e){var t=e.target;return b(t.value)}})),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-6 form-group"},r.a.createElement("label",null,"\u041c\u043d\u043e\u0436\u0438\u0442\u0435\u043b\u044c \u0440\u0430\u0437\u043c\u0435\u0440\u0430"),r.a.createElement("input",{type:"number",className:"form-control",value:E,onChange:function(e){var t=e.target;return h(t.value)}})),r.a.createElement("div",{className:"form-group col-6"},r.a.createElement("label",null,"\u041c\u043d\u043e\u0436\u0438\u0442\u0435\u043b\u044c \u0437\u0430\u0434\u0435\u0440\u0436\u0435\u043a"),r.a.createElement("input",{type:"number",className:"form-control",value:O,onChange:function(e){var t=e.target;return j(t.value)}})),r.a.createElement("div",{className:"form-group col-6"},r.a.createElement("label",null,"\u041a\u043e\u043b-\u0432\u043e"),r.a.createElement("input",{type:"number",className:"form-control",value:k,onChange:function(e){var t=e.target;return w(t.value)}}))),r.a.createElement("button",{class:"btn btn-primary",onClick:x},"Send Opts"))};function d(e){var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]:null}var b=function(){var e=Object(n.useState)("options"),t=Object(i.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)("192.168.1.2"),o=Object(i.a)(l,2),b=o[0],v=o[1],g=Object(n.useState)("#00f900"),E=Object(i.a)(g,2),h=E[0],y=E[1],N=Object(n.useState)([]),O=Object(i.a)(N,2),j=O[0],C=O[1],S=function(){var e=Object(u.a)(s.a.mark((function e(t){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("\u23eb sendEffect",t),e.next=3,fetch("http://"+b+"/set-effect",{method:"POST",body:JSON.stringify(t),mode:"no-cors",headers:{"Content-Type":"application/json"}});case 3:a=e.sent,console.log(a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(u.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("\u23eb sendColor",d(h)),e.next=3,fetch("http://"+b+"/set-color",{method:"POST",body:JSON.stringify(d(h)),mode:"no-cors",headers:{"Content-Type":"application/json"}});case 3:t=e.sent,console.log(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"container"},r.a.createElement(p,{setPage:c,page:a}),"options"===a&&r.a.createElement(f,{url:b,setUrl:v}),r.a.createElement("div",{className:"card my-4"},r.a.createElement("div",{className:"card-header"},"Color Control"),r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"color",value:h,onChange:function(e){var t=e.target;return y(t.value)}}),r.a.createElement("button",{className:"btn btn-primary ml-2",onClick:k},"send on device")," ","or"," ",r.a.createElement("button",{className:"btn btn-primary",onClick:function(){C((function(e){return[].concat(Object(m.a)(e),[d(h)])}))}},"push in libary")),r.a.createElement("hr",null),r.a.createElement("h4",null,"Libary"),r.a.createElement("div",{className:"colors-gal-container"},j.map((function(e){return r.a.createElement("div",{className:"colors-gal",style:{backgroundColor:"rgb(".concat(e[0],", ").concat(e[1],",").concat(e[2],")")},key:"rgb(".concat(e[0],", ").concat(e[1],",").concat(e[2],")")})}))),r.a.createElement("button",{className:"btn btn-primary",onClick:function(){console.log("\u23eb sendCollection",j)}},"send libary on device"),r.a.createElement("button",{className:"btn btn-danger float-right",onClick:function(){return C([])}},"clear"))),r.a.createElement("div",{className:"card my-4"},r.a.createElement("div",{className:"card-header"},"Effect Control"),r.a.createElement("div",{className:"card-body"},[{n:"rainbow",l:"\u0440\u0430\u0434\u0443\u0433\u0430"},{n:"garland",l:"\u0433\u0438\u0440\u043b\u044f\u043d\u0434\u0430"},{n:"garland_white",l:"\u0433\u0438\u0440\u043b\u044f\u043d\u0434\u0430 (\u0431\u0435\u043b\u0430\u044f)"},{n:"garland_white2",l:"\u2728 \u0441\u0442\u0440\u0430\u0437\u044b"},{n:"police",l:"\ud83d\udea8"},{n:"gradient",l:"grad"},{n:"sin",l:"sin"}].map((function(e,t){return r.a.createElement("button",{className:"btn btn-outline-secondary mb-2 w-100",key:e.n,onClick:function(){return S(t)}},e.l)})))))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root"))},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.53d4bfb2.chunk.js.map