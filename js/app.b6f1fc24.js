(function(t){function e(e){for(var r,i,o=e[0],c=e[1],l=e[2],m=0,d=[];m<o.length;m++)i=o[m],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&d.push(n[i][0]),n[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(e);while(d.length)d.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],r=!0,o=1;o<a.length;o++){var c=a[o];0!==n[c]&&(r=!1)}r&&(s.splice(e--,1),t=i(i.s=a[0]))}return t}var r={},n={app:0},s=[];function i(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=r,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(a,r,function(e){return t[e]}.bind(null,r));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/budcs/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"2e02":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("Navbar"),a("v-main",{staticClass:"ma-4"},[a("router-view")],1),a("Footer")],1)},s=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",[a("v-app-bar",{attrs:{color:"green",dark:"",app:""}},[a("v-toolbar-title",{staticClass:"text-uppercase"},[a("span",{staticClass:"font-weight-light"},[t._v("Bud")]),a("span",[t._v("cs")]),a("span",{staticClass:"font-weight-regular red--text"},[t._v(" - Versão demonstração - dados fictícios")])]),a("v-spacer"),a("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[a("v-btn",t._g({attrs:{text:""}},r),[a("v-icon",{attrs:{left:""}},[t._v("expand_more")]),a("span",[t._v("Menu")])],1)]}}])},[a("v-list",{attrs:{flat:""}},t._l(t.links,(function(e){return a("v-list-item",{key:e.text,attrs:{router:"",to:e.route,"active-class":"border"}},[a("v-list-item-title",[t._v(t._s(e.text))])],1)})),1)],1),a("v-btn",{attrs:{text:""}},[a("span",[t._v("Exit")]),a("v-icon",{attrs:{right:""}},[t._v("exit_to_app")])],1)],1)],1)},o=[],c={data:function(){return{links:[{icon:"dashboard",text:"Dashboard",route:"/"},{icon:"folder",text:"Comparativo",route:"/"},{icon:"person",text:"Sobre Nos",route:"/"}]}}},l=c,u=(a("a485"),a("2877")),m=a("6544"),d=a.n(m),f=a("40dc"),v=a("8336"),p=a("132d"),g=a("8860"),_=a("da13"),b=a("5d23"),h=a("e449"),y=a("2fa4"),x=a("2a7f"),w=Object(u["a"])(l,i,o,!1,null,"5555ac4e",null),C=w.exports;d()(w,{VAppBar:f["a"],VBtn:v["a"],VIcon:p["a"],VList:g["a"],VListItem:_["a"],VListItemTitle:b["b"],VMenu:h["a"],VSpacer:y["a"],VToolbarTitle:x["a"]});var V=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-footer",{attrs:{dark:"",padless:"",app:"",inset:""}},[a("v-card",{staticClass:"flex",attrs:{flat:"",tile:"",color:"green",elevation:10}},[a("v-card-text",{staticClass:"py-2 white--text text-center"},[t._v(" "+t._s((new Date).getFullYear())+" — "),a("strong",[t._v("BUDCS")]),t._v(" * VERSÃO DEMO - DADOS FICTÍCIOS ")])],1)],1)},k=[],O=a("b0af"),j=a("99d9"),S=a("553a"),q={},I=Object(u["a"])(q,V,k,!1,null,null,null),T=I.exports;d()(I,{VCard:O["a"],VCardText:j["a"],VFooter:S["a"]});var D={name:"App",components:{Navbar:C,Footer:T},data:function(){return{}}},E=D,M=a("7496"),P=a("f6c4"),F=Object(u["a"])(E,n,s,!1,null,null,null),N=F.exports;d()(F,{VApp:M["a"],VMain:P["a"]});var L=a("8c4f"),A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"team"},[a("v-container",[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:"",sm6:"",md4:"",lg3:""}},[t.instagram.profile_pic_url?a("CardInstagramUser",{attrs:{img:t.instagram.profile_pic_url,username:t.instagram.username,full_name:t.instagram.full_name,biography:t.instagram.biography,followers:t.instagram.followers,following:t.instagram.following,verified:t.instagram.verified,comments:t.instagram.comments,likes:t.instagram.likes,engagement:t.instagram.engagement,frequency:t.instagram.frequency}}):t._e()],1),a("v-flex",{attrs:{xs12:"",sm6:"",md8:"",lg9:""}},[a("v-card",[a("GridInstagramPosts")],1)],1)],1)],1)],1)},$=[],B=a("5530"),R=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-card",{staticClass:"text-center ma-3"},[r("v-list-item",{attrs:{"three-line":""}},[r("v-list-item-avatar",{staticClass:"mt-2 ml-n2",attrs:{tile:""}},[r("v-sheet",{attrs:{color:"#833AB4",width:"40",height:"40",elevation:"10"}},[r("v-icon",{attrs:{dark:""}},[t._v("mdi-instagram")])],1)],1),r("v-list-item-content",{staticClass:"mt-2 ml-n12",attrs:{tile:""}},[r("div",{staticClass:"subheading text-center red--text mb-2"},[t._v("Instagram")]),r("div",[r("v-divider")],1),r("v-responsive",{staticClass:"pt-4"},[r("v-avatar",{staticClass:"red lighten-2",attrs:{size:"100"}},[r("img",{attrs:{src:t.img,alt:""}})])],1),r("v-card-text",[r("div",{staticClass:"subheading"},[t._v(t._s(t.username)+" "),r("img",{directives:[{name:"show",rawName:"v-show",value:t.verified,expression:"verified"}],attrs:{src:a("cb3c"),height:"20",size:"20"}})]),r("div",{staticClass:"subheading"},[t._v(t._s(t.full_name))]),r("div",{staticClass:"grey--text"},[t._v(t._s(t.biography))])]),r("div",{staticClass:"overline text-center mt-1"},[t._v("Seguidores")]),r("v-list-item-title",{staticClass:"headline mb-1 text-center"},[t._v(t._s(t.followers))]),r("div",{staticClass:"overline text-center"},[t._v("Seguindo")]),r("v-list-item-title",{staticClass:"headline mb-1 text-center"},[t._v(t._s(t.following))]),r("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[r("thead",[r("tr",[r("th",{staticClass:"text-center"},[t._v("Comentarios")]),r("th",{staticClass:"text-center"},[t._v("Curtidas")])])]),r("tbody",[r("tr",[r("td",[t._v(t._s(t.comments))]),r("td",[t._v(t._s(t.likes))])])]),r("thead",[r("tr",[r("th",{staticClass:"text-center"},[t._v("Engajamento")]),r("th",{staticClass:"text-center"},[t._v("Frequencia")])])]),r("tbody",[r("tr",[r("td",[t._v(t._s(t.engagement)+"%")]),r("td",[t._v(t._s(t.frequency))])])])]},proxy:!0}])})],1)],1)],1)],1)},U=[],G=(a("a9e3"),{name:"CardIntagramUser",props:{img:{type:String,required:!0},username:{type:String,required:!0},full_name:{type:String,required:!0},biography:{type:String,required:!0},verified:{type:Boolean,required:!0},followers:{type:Number,required:!0},following:{type:Number,required:!0},comments:{type:Number,required:!0},likes:{type:Number,required:!0},engagement:{type:Number,required:!0},frequency:{type:String,required:!0}}}),z=G,J=a("8212"),Y=a("ce7e"),H=a("8270"),K=a("6b53"),Q=a("8dd9"),W=a("1f4f"),X=Object(u["a"])(z,R,U,!1,null,null,null),Z=X.exports;d()(X,{VAvatar:J["a"],VCard:O["a"],VCardText:j["a"],VDivider:Y["a"],VIcon:p["a"],VListItem:_["a"],VListItemAvatar:H["a"],VListItemContent:b["a"],VListItemTitle:b["b"],VResponsive:K["a"],VSheet:Q["a"],VSimpleTable:W["a"]});var tt=a("2f62"),et=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-simple-table",{staticClass:"text-left ma-3",scopedSlots:t._u([{key:"default",fn:function(){return[a("thead",[a("tr",[a("th",{staticClass:"text-center"},[t._v("imagem")]),a("th",{staticClass:"text-center"},[t._v("descricao")]),a("th",{staticClass:"text-center"},[t._v("data")]),a("th",{staticClass:"text-center"},[t._v("curtidas")]),a("th",{staticClass:"text-center"},[t._v("comentarios")])])]),t._l(t.instagram.posts,(function(e){return a("tbody",{key:e.timestamp},[a("tr",[a("td",[a("img",{staticClass:"instagram-image",attrs:{src:e.image,alt:""}})]),a("td",[t._v(t._s(e.caption)+" ")]),a("td",[t._v(t._s(e.date.getDate())+"/"+t._s(e.date.getMonth())+"/"+t._s(e.date.getFullYear()))]),a("td",[t._v(t._s(e.likes))]),a("td",[t._v(t._s(e.comments))])])])}))]},proxy:!0}])})],1)},at=[],rt={name:"GridPosts",computed:Object(tt["c"])(["instagram"])},nt=rt,st=(a("b6d0"),Object(u["a"])(nt,et,at,!1,null,null,null)),it=st.exports;d()(st,{VSimpleTable:W["a"]});var ot={name:"Dashboard",components:{CardInstagramUser:Z,GridInstagramPosts:it},computed:Object(tt["c"])(["instagram","twitter"]),created:function(){this.fetchInstagram("ricaperrone"),this.fetchTwitter()},methods:Object(B["a"])({},Object(tt["b"])(["fetchInstagram","fetchTwitter"]))},ct=ot,lt=a("a523"),ut=a("0e8f"),mt=a("a722"),dt=Object(u["a"])(ct,A,$,!1,null,null,null),ft=dt.exports;d()(dt,{VCard:O["a"],VContainer:lt["a"],VFlex:ut["a"],VLayout:mt["a"]}),r["a"].use(L["a"]);var vt=[{path:"/",name:"dashboard",component:ft}],pt=new L["a"]({mode:"history",base:"/budcs/",routes:vt}),gt=pt,_t=(a("d1e78"),a("f309"));r["a"].use(_t["a"]);var bt=new _t["a"]({icons:{iconfont:"md"}}),ht=(a("d81d"),a("fb6a"),a("b680"),a("d3b7"),a("ddb0"),a("b85c")),yt=(a("96cf"),a("1da1")),xt=a("bc3a"),wt=a.n(xt),Ct=a("ac3e"),Vt=a.n(Ct),kt=a("4cda"),Ot=a.n(kt),jt={user:{}},St={instagram:function(t){return t.user}},qt={fetchInstagram:function(t,e){return Object(yt["a"])(regeneratorRuntime.mark((function a(){var r,n,s,i,o,c,l,u,m;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return r=t.commit,a.prev=1,a.next=4,wt.a.get("https://www.instagram.com/".concat(e,"/?__a=1"));case 4:n=a.sent,s=n.data,i=s.graphql.user,i.username=e,i.posts=Dt(i.edge_owner_to_timeline_media.edges),o=Et(i.posts,i.edge_followed_by.count),c=o.comments,l=o.likes,u=o.engagement,m=o.frequency,i.comments=c,i.likes=l,i.engagement=u,i.frequency=m,r("setInstagram",i),a.next=19;break;case 17:a.prev=17,a.t0=a["catch"](1);case 19:case"end":return a.stop()}}),a,null,[[1,17]])})))()}},It={setInstagram:function(t,e){return t.user={biography:e.biography,email:Vt()(e.biography).values().next().value||"",followers:e.edge_followed_by.count,following:e.edge_follow.count,username:e.username,full_name:e.full_name,url:e.url,website:e.external_url,business_account:e.is_business_account,business_category_name:e.business_category_name,verified:e.is_verified,joined_recently:e.is_joined_recently,profile_pic_url:e.profile_pic_url,posts:e.posts,comments:e.comments,likes:e.likes,engagement:e.engagement,frequency:e.frequency}}},Tt={state:jt,getters:St,actions:qt,mutations:It},Dt=function(t){try{return t.map((function(t){return{image:t.node.display_url,caption:t.node.edge_media_to_caption.edges.length?t.node.edge_media_to_caption.edges[0].node.text:"",date:new Date(1e3*t.node.taken_at_timestamp),timestamp:t.node.taken_at_timestamp,likes:t.node.edge_media_preview_like.count,comments:t.node.edge_media_to_comment.count}}))}catch(e){}},Et=function(t,e){var a=0,r=0;try{var n,s=Object(ht["a"])(t);try{for(s.s();!(n=s.n()).done;){var i=n.value;a+=i.comments,r+=i.likes}}catch(d){s.e(d)}finally{s.f()}var o=[t[0],t.slice(-1)[0]],c=o[0],l=o[1],u=+((a+r)/t.length/e).toFixed(2),m=Ot()(Math.floor(1e3*c.timestamp-1e3*l.timestamp)/t.length);return m=m.days>2?"".concat(m.days," dia(s)"):"".concat(m.hours," hora(s)"),{comments:a,likes:r,engagement:u,frequency:m}}catch(f){}},Mt={user:{}},Pt={twitter:function(t){return t.user}},Ft={fetchTwitter:function(t){return Object(yt["a"])(regeneratorRuntime.mark((function e(){var a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:a=t.commit;try{r=[],a("setTwitter",r)}catch(n){}case 2:case"end":return e.stop()}}),e)})))()}},Nt={setTwitter:function(t,e){return t.user=Object(B["a"])({},e)}},Lt={state:Mt,getters:Pt,actions:Ft,mutations:Nt};r["a"].use(tt["a"]);var At=new tt["a"].Store({modules:{instagram:Tt,twitter:Lt}});r["a"].config.productionTip=!1,new r["a"]({router:gt,vuetify:bt,store:At,render:function(t){return t(N)}}).$mount("#app")},a485:function(t,e,a){"use strict";var r=a("2e02"),n=a.n(r);n.a},b6d0:function(t,e,a){"use strict";var r=a("bffb"),n=a.n(r);n.a},bffb:function(t,e,a){},cb3c:function(t,e,a){t.exports=a.p+"img/instagram-verified.f5ec432b.png"}});
//# sourceMappingURL=app.b6f1fc24.js.map