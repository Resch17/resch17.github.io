(function(e){function t(t){for(var c,o,i=t[0],s=t[1],u=t[2],h=0,m=[];h<i.length;h++)o=i[h],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&m.push(r[o][0]),r[o]=0;for(c in s)Object.prototype.hasOwnProperty.call(s,c)&&(e[c]=s[c]);l&&l(t);while(m.length)m.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],c=!0,i=1;i<n.length;i++){var s=n[i];0!==r[s]&&(c=!1)}c&&(a.splice(t--,1),e=o(o.s=n[0]))}return e}var c={},r={app:0},a=[];function o(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=c,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)o.d(n,c,function(t){return e[t]}.bind(null,c));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var l=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"59f5":function(e,t,n){"use strict";n("9d93")},"5cb8":function(e,t,n){"use strict";n("fbf0")},"5d92":function(e,t,n){},6880:function(e,t,n){"use strict";n("5d92")},"9d93":function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23");function r(e,t){var n=Object(c["y"])("router-view");return Object(c["r"])(),Object(c["d"])(n)}n("5cb8");var a=n("6b0d"),o=n.n(a);const i={},s=o()(i,[["render",r]]);var u=s,l=n("6c02"),h=(n("99af"),n("b0c0"),function(e){return Object(c["u"])("data-v-2d888d8c"),e=e(),Object(c["s"])(),e}),m={key:0,class:"print"},b=h((function(){return Object(c["g"])("label",{for:"showPrint"},"Show printable",-1)})),f=h((function(){return Object(c["g"])("label",{for:"showSheet"},"Show sheet",-1)})),d={class:"hello"},p=h((function(){return Object(c["g"])("label",{for:"logosCheck"},"Logos on/off",-1)})),g={key:0,class:"sheet-container"},O=h((function(){return Object(c["g"])("iframe",{src:"https://docs.google.com/spreadsheets/d/e/2PACX-1vR7LSYcoIEbdNk4pi1wKO-ZZKx8Jk67VL_p1vaWCblrZigVjnxVilUiCKF18_pkglXxV9X59B5UokIV/pubhtml?widget=true&headers=false"},null,-1)})),j=[O],w={class:"week-container"},v={class:"date"},k={class:"teams"},y={class:"mid",style:{margin:"0 3px"}},S=h((function(){return Object(c["g"])("div",{class:"at",style:{margin:"5px 0"}},Object(c["A"])(" @ "),-1)})),T={class:"period"},x={class:"clock"};function C(e,t,n,r,a,o){var i=Object(c["y"])("team-card");return Object(c["r"])(),Object(c["f"])("div",{class:"swipe-container",onTouchstart:t[5]||(t[5]=function(){return e.setTouchStart&&e.setTouchStart.apply(e,arguments)}),onTouchend:t[6]||(t[6]=function(){return e.touchEnd&&e.touchEnd.apply(e,arguments)})},[e.showPrint?(Object(c["r"])(),Object(c["f"])("div",m,[(Object(c["r"])(!0),Object(c["f"])(c["a"],null,Object(c["x"])(e.games,(function(e){return Object(c["r"])(),Object(c["f"])("div",{key:e.id},Object(c["A"])("".concat(e.awayTeam.name||e.awayTeam.location," @ ").concat(e.homeTeam.name||e.homeTeam.location)),1)})),128))])):Object(c["e"])("",!0),b,Object(c["E"])(Object(c["g"])("input",{type:"checkbox",name:"showPrint",id:"showPrint","onUpdate:modelValue":t[0]||(t[0]=function(t){return e.showPrint=t})},null,512),[[c["C"],e.showPrint]]),f,Object(c["E"])(Object(c["g"])("input",{type:"checkbox",name:"showSheet",id:"showSheet","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.showSheet=t})},null,512),[[c["C"],e.showSheet]]),Object(c["g"])("div",d,[p,Object(c["E"])(Object(c["g"])("input",{type:"checkbox",name:"logosCheck",id:"logosCheck","onUpdate:modelValue":t[2]||(t[2]=function(t){return e.logosCheck=t})},null,512),[[c["C"],e.logosCheck]]),e.showSheet?(Object(c["r"])(),Object(c["f"])("div",g,j)):Object(c["e"])("",!0),Object(c["g"])("div",w,[Object(c["g"])("i",{class:"fas fa-arrow-alt-circle-left fa-2x",onClick:t[3]||(t[3]=function(t){return e.changeWeek("down")})}),Object(c["g"])("h1",null,"Week "+Object(c["A"])(e.week),1),Object(c["g"])("i",{class:"fas fa-arrow-alt-circle-right fa-2x",onClick:t[4]||(t[4]=function(t){return e.changeWeek("up")})})]),Object(c["g"])("main",null,[(Object(c["r"])(!0),Object(c["f"])(c["a"],null,Object(c["x"])(e.games,(function(t){return Object(c["r"])(),Object(c["f"])("div",{key:t.id,class:"game"},[Object(c["g"])("div",v,Object(c["A"])(t.date),1),Object(c["g"])("div",k,[Object(c["g"])("div",{class:Object(c["n"])(["away team",e.teamStyle(t,"away")])},[Object(c["h"])(i,{game:t,homeAway:"away",logosCheck:e.logosCheck},null,8,["game","logosCheck"])],2),Object(c["g"])("div",y,[S,Object(c["g"])("div",T,Object(c["A"])(t.quarter>0&&"Final"!==t.clock?"Q".concat(t.quarter):""),1),Object(c["g"])("div",x,Object(c["A"])(t.clock),1)]),Object(c["g"])("div",{class:Object(c["n"])(["home team",e.teamStyle(t,"home")])},[Object(c["h"])(i,{game:t,homeAway:"home",logosCheck:e.logosCheck},null,8,["game","logosCheck"])],2)])])})),128))])])],32)}var A=n("b85c"),P=n("1da1"),L=(n("96cf"),n("d81d"),n("7db0"),n("159b"),n("4e82"),n("d3b7"),n("ddb0"),n("d4ec")),R=n("bee2"),_=n("bc3a"),E=n.n(_),U="https://site.api.espn.com/apis/site/v2/sports/football/nfl",V=E.a.create({baseURL:U}),W=function(){function e(){Object(L["a"])(this,e)}return Object(R["a"])(e,[{key:"getAllGames",value:function(){var e=Object(P["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,V.get("/scoreboard?week=".concat(t));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"getAllTeams",value:function(){var e=Object(P["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,V.get("/teams");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()}]),e}(),D=new W,q={key:0,class:"team"},X=["src"],Z={class:"teamscore"},I={key:0},M={key:1,class:"team"},F={class:"teamscore"},G={key:0},J=["src"];function K(e,t,n,r,a,o){return"away"===e.homeAway?(Object(c["r"])(),Object(c["f"])("div",q,[e.logosCheck?(Object(c["r"])(),Object(c["f"])("img",{key:0,src:e.game.awayTeam.logo,alt:"team logo"},null,8,X)):Object(c["e"])("",!0),Object(c["g"])("div",Z,[Object(c["g"])("h4",null,Object(c["A"])("".concat(e.game.awayTeam.name||e.game.awayTeam.location," ")),1),e.game.quarter>0?(Object(c["r"])(),Object(c["f"])("h4",I,Object(c["A"])(e.game.awayScore),1)):Object(c["e"])("",!0)])])):(Object(c["r"])(),Object(c["f"])("div",M,[Object(c["g"])("div",F,[Object(c["g"])("h4",null,Object(c["A"])(" ".concat(e.game.homeTeam.name||e.game.homeTeam.location)),1),e.game.quarter>0?(Object(c["r"])(),Object(c["f"])("h4",G,Object(c["A"])(e.game.homeScore),1)):Object(c["e"])("",!0)]),e.logosCheck?(Object(c["r"])(),Object(c["f"])("img",{key:0,src:e.game.homeTeam.logo,alt:"team logo"},null,8,J)):Object(c["e"])("",!0)]))}var N=Object(c["i"])({props:["homeAway","game","logosCheck"]});n("59f5");const H=o()(N,[["render",K],["__scopeId","data-v-155870d0"]]);var B=H,Q=Object(c["i"])({components:{TeamCard:B},name:"HelloWorld",props:{msg:String},data:function(){return{games:new Array,teams:new Array,week:0,weekSelect:4,logosCheck:!0,showPrint:!1,showSheet:!0,touchStart:0}},methods:{setTouchStart:function(e){this.touchStart=0,this.touchStart=e.changedTouches[0].clientX},touchEnd:function(e){var t=e.changedTouches[0].clientX;t>this.touchStart&&t-this.touchStart>200&&this.changeWeek("down"),t<this.touchStart&&this.touchStart-t>200&&this.changeWeek("up")},changeWeek:function(e){switch(e){case"up":this.weekSelect<=17&&(this.weekSelect++,this.refreshList(this.weekSelect));break;case"down":this.weekSelect>=2&&(this.weekSelect--,this.refreshList(this.weekSelect));break;default:break}},teamStyle:function(e,t){if(e.completed){var n="completed ";return"home"===t?e.homeTeam.winner?n+="winner":n+="loser":e.awayTeam.winner?n+="winner":n+="loser",n}return""},getList:function(e){var t=this;return Object(P["a"])(regeneratorRuntime.mark((function n(){var c,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,D.getAllGames(e);case 2:c=n.sent,console.log(c),r=c.events.map((function(e){var t,n=new Date(e.date),c=e.competitions[0].competitors.find((function(e){return"home"===e.homeAway})),r=e.competitions[0].competitors.find((function(e){return"away"===e.homeAway})),a=0,o=0;t=e.competitions[0].status.type.completed?"Final":"1"===e.competitions[0].status.type.id?"":e.competitions[0].status.displayClock,c.linescores&&c.linescores.forEach((function(e){a+=e.value})),r.linescores&&r.linescores.forEach((function(e){o+=e.value}));var i={id:e.id,clock:t,quarter:"1"!==e.competitions[0].status.type.id?e.competitions[0].status.period:"",dateObj:n,date:"".concat(n.toLocaleString("en-US",{weekday:"long",month:"long",day:"numeric",year:"numeric"})," | ").concat(n.toLocaleTimeString("en-US",{timeZone:"America/Chicago",timeZoneName:"short"})),venue:e.competitions[0].venue.fullName,homeTeam:c.team,homeScore:a,awayScore:o,awayTeam:r.team,completed:!1};return e.status.type.completed&&(i.completed=!0,!0===e.competitions[0].competitors.find((function(e){return"home"===e.homeAway})).winner?(i.homeTeam.winner=!0,i.awayTeam.winner=!1):(i.homeTeam.winner=!1,i.awayTeam.winner=!0)),i})),t.games=r.sort((function(e,t){var n=e.dateObj.getTime(),c=t.dateObj.getTime();return n>c?1:-1})),t.week=c.week.number;case 7:case"end":return n.stop()}}),n)})))()},refreshList:function(e){var t=this;return Object(P["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:e>=1&&e<19&&e!==t.week&&t.getList(e);case 1:case"end":return n.stop()}}),n)})))()}},created:function(){var e=this;return Object(P["a"])(regeneratorRuntime.mark((function t(){var n,c,r,a,o,i,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,D.getAllGames(1);case 2:n=t.sent,c=n.leagues[0].calendar[1].entries,r=new Date,a=c.map((function(e){return{endDate:new Date(e.endDate),week:e.value}})),o=Object(A["a"])(a),t.prev=7,o.s();case 9:if((i=o.n()).done){t.next=17;break}if(s=i.value,!(r<s.endDate)){t.next=15;break}return e.weekSelect=s.week,e.getList(s.week),t.abrupt("return");case 15:t.next=9;break;case 17:t.next=22;break;case 19:t.prev=19,t.t0=t["catch"](7),o.e(t.t0);case 22:return t.prev=22,o.f(),t.finish(22);case 25:e.getList(1);case 26:case"end":return t.stop()}}),t,null,[[7,19,22,25]])})))()}});n("6880");const Y=o()(Q,[["render",C],["__scopeId","data-v-2d888d8c"]]);var z=Y,$=[{path:"/",name:"Home",component:z}],ee=Object(l["a"])({history:Object(l["b"])(),routes:$}),te=ee,ne=n("5502"),ce=Object(ne["a"])({state:{},mutations:{},actions:{},modules:{}});Object(c["c"])(u).use(ce).use(te).mount("#app")},fbf0:function(e,t,n){}});
//# sourceMappingURL=app.743dbc39.js.map