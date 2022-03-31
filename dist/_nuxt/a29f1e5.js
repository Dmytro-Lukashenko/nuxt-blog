(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{107:function(t,e,n){"use strict";n.r(e);var o={name:"AppButton",props:{btnStyle:{type:String,default:""}}},r=(n(299),n(8)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",t._g(t._b({staticClass:"button",class:t.btnStyle},"button",t.$attrs,!1),t.$listeners),[t._t("default")],2)}),[],!1,null,"61b8af77",null);e.default=component.exports},108:function(t,e,n){"use strict";n.r(e);var o={name:"AppInputControl",props:{controlType:{type:String,default:"input"},value:{type:String,default:""}}},r=(n(301),n(8)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"input-control"},[n("label",[t._t("default")],2),t._v(" "),"input"===t.controlType?n("input",t._b({domProps:{value:t.value},on:{input:function(e){return t.$emit("input",e.target.value)}}},"input",t.$attrs,!1)):t._e(),t._v(" "),"textarea"===t.controlType?n("textarea",{attrs:{rows:"10"},domProps:{value:t.value},on:{input:function(e){return t.$emit("input",e.target.value)}}}):t._e()])}),[],!1,null,"3ea4f12f",null);e.default=component.exports},139:function(t,e,n){"use strict";var o=n(2),r=n(207),c=n(107),l=n(108),d=n(142);o.a.component("PostList",r.default),o.a.component("AppButton",c.default),o.a.component("AppControlInput",l.default),o.a.component("AdminPostForm",d.default)},140:function(t,e,n){"use strict";n(29),n(11);var o=n(2),r=["January","February","March","April","May","June","July","August","September","October","November","December"];o.a.filter("date",(function(t){return e=new Date(t),n=e.getFullYear(),o=e.getMonth(),e.getDate()+". "+r[o]+" "+n;var e,n,o}))},142:function(t,e,n){"use strict";n.r(e);n(36),n(27),n(29),n(11),n(46),n(28),n(47);var o=n(19),r=n(108),c=n(107);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={components:{AppControlInput:r.default,AppButton:c.default},props:{post:{type:Object,required:!1}},data:function(){return{editedPost:this.post?d({},this.post):{author:"",title:"",thumbnail:"",content:"",previewText:""}}},methods:{onSave:function(){this.$emit("submit",this.editedPost)},onCancel:function(){this.$router.push("/admin")}}},v=(n(303),n(8)),component=Object(v.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{on:{submit:function(e){return e.preventDefault(),t.onSave.apply(null,arguments)}}},[n("app-control-input",{model:{value:t.editedPost.author,callback:function(e){t.$set(t.editedPost,"author",e)},expression:"editedPost.author"}},[t._v("Author Name")]),t._v(" "),n("app-control-input",{model:{value:t.editedPost.title,callback:function(e){t.$set(t.editedPost,"title",e)},expression:"editedPost.title"}},[t._v("Title")]),t._v(" "),n("app-control-input",{model:{value:t.editedPost.thumbnail,callback:function(e){t.$set(t.editedPost,"thumbnail",e)},expression:"editedPost.thumbnail"}},[t._v("Thumbnail Link")]),t._v(" "),n("app-control-input",{attrs:{"control-type":"textarea"},model:{value:t.editedPost.content,callback:function(e){t.$set(t.editedPost,"content",e)},expression:"editedPost.content"}},[t._v("\n      Content")]),t._v(" "),n("app-control-input",{attrs:{"control-type":"textarea"},model:{value:t.editedPost.previewText,callback:function(e){t.$set(t.editedPost,"previewText",e)},expression:"editedPost.previewText"}},[t._v("\n      Preview Text")]),t._v(" "),n("app-button",{attrs:{type:"submit"}},[t._v("Save")]),t._v(" "),n("app-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"button","btn-style":"cancel"},on:{click:t.onCancel}},[t._v("\n      Cancel")])],1)}),[],!1,null,null,null);e.default=component.exports},179:function(t,e,n){var content=n(261);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("bf94ca7e",content,!0,{sourceMap:!1})},180:function(t,e,n){var content=n(265);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("6491ec96",content,!0,{sourceMap:!1})},181:function(t,e,n){var content=n(267);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("42fb8fb2",content,!0,{sourceMap:!1})},182:function(t,e,n){var content=n(269);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("503c3de6",content,!0,{sourceMap:!1})},183:function(t,e,n){var content=n(271);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("657b9cde",content,!0,{sourceMap:!1})},194:function(t,e,n){var content=n(296);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("5cb54eb5",content,!0,{sourceMap:!1})},195:function(t,e,n){var content=n(298);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("05ae4ea1",content,!0,{sourceMap:!1})},196:function(t,e,n){var content=n(300);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("6fd942f4",content,!0,{sourceMap:!1})},197:function(t,e,n){var content=n(302);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("25d2a409",content,!0,{sourceMap:!1})},198:function(t,e,n){var content=n(304);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("53fc8d79",content,!0,{sourceMap:!1})},206:function(t,e,n){"use strict";var o=n(208),r=n(209),c={components:{TheHeader:o.default,TheSidenav:r.default},data:function(){return{displaySidenav:!1}}},l=n(8),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("the-header",{on:{sidenavToggle:function(e){t.displaySidenav=!t.displaySidenav}}}),t._v(" "),n("the-sidenav",{attrs:{show:t.displaySidenav},on:{close:function(e){t.displaySidenav=!1}}}),t._v(" "),n("nuxt")],1)}),[],!1,null,null,null);e.a=component.exports},207:function(t,e,n){"use strict";n.r(e);var o={components:{PostPreview:n(210).default},props:{isAdmin:{type:Boolean,default:!1},posts:{type:Array,required:!1}}},r=(n(297),n(8)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"post-list"},t._l(t.posts,(function(e){return n("post-preview",{key:e.id,attrs:{id:e.id,"is-admin":t.isAdmin,title:e.title,"preview-text":e.previewText,thumbnail:e.thumbnail}})})),1)}),[],!1,null,"92a026c8",null);e.default=component.exports},208:function(t,e,n){"use strict";n.r(e);var o={name:"TheHeader",components:{TheSideNavToggle:n(212).default}},r=(n(268),n(8)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header-container"},[n("header",{staticClass:"the-header"},[n("TheSideNavToggle",{on:{toggle:function(e){return t.$emit("sidenavToggle")}}}),t._v(" "),n("div",{staticClass:"logo"},[n("nuxt-link",{attrs:{to:"/"}},[t._v("WD BLOG")])],1),t._v(" "),n("div",{staticClass:"spacer"}),t._v(" "),n("div",{staticClass:"navigation-items"},[n("ul",{staticClass:"nav-list"},[n("li",{staticClass:"nav-item"},[n("nuxt-link",{attrs:{to:"/posts"}},[t._v("Blog")])],1),t._v(" "),n("li",{staticClass:"nav-item"},[n("nuxt-link",{attrs:{to:"/about"}},[t._v("About")])],1),t._v(" "),n("li",{staticClass:"nav-item"},[n("nuxt-link",{attrs:{to:"/admin"}},[t._v("Admin")])],1)])])],1)])}),[],!1,null,"7dcadaf5",null);e.default=component.exports},209:function(t,e,n){"use strict";n.r(e);var o={name:"TheSidenav",props:{show:{type:Boolean,default:!1}}},r=(n(270),n(8)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidenav-container"},[t.show?n("div",{staticClass:"sidenav-backdrop",on:{click:function(e){return t.$emit("close")}}}):t._e(),t._v(" "),n("transition",{attrs:{name:"slide-side"}},[t.show?n("div",{staticClass:"sidenav"},[n("ul",{staticClass:"nav-list",on:{click:function(e){return t.$emit("close")}}},[n("li",{staticClass:"nav-item"},[n("nuxt-link",{attrs:{to:"/posts"}},[t._v("Blog")])],1),t._v(" "),n("li",{staticClass:"nav-item"},[n("nuxt-link",{attrs:{to:"/about"}},[t._v("About")])],1),t._v(" "),n("li",{staticClass:"nav-item"},[n("nuxt-link",{attrs:{to:"/admin"}},[t._v("Admin")])],1)])]):t._e()])],1)}),[],!1,null,"3cdc3eb7",null);e.default=component.exports},210:function(t,e,n){"use strict";n.r(e);var o={name:"PostPreview",props:{id:{type:String,required:!0},isAdmin:{type:Boolean,required:!0,default:!1},title:{type:String,required:!0},previewText:{type:String,required:!0},thumbnail:{type:String,required:!0}},computed:{postLink:function(){return this.isAdmin?"/admin/"+this.id:"/posts/"+this.id}}},r=(n(295),n(8)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nuxt-link",{staticClass:"post-preview",attrs:{to:t.postLink}},[n("article",[n("div",{staticClass:"post-thumbnail",style:{backgroundImage:"url("+t.thumbnail+")"}}),t._v(" "),n("div",{staticClass:"post-content"},[n("h1",[t._v(t._s(t.title))]),t._v(" "),n("p",[t._v(t._s(t.previewText))])])])])}),[],!1,null,"0b2e8f24",null);e.default=component.exports},211:function(t,e,n){"use strict";n(264);var o=n(8),component=Object(o.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("nuxt")],1)}),[],!1,null,"2603f64b",null);e.a=component.exports},212:function(t,e,n){"use strict";n.r(e);n(266);var o=n(8),component=Object(o.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"drawer-toggle",attrs:{role:"button"},on:{click:function(e){return t.$emit("toggle")}}},[n("div",{staticClass:"bar"}),t._v(" "),n("div",{staticClass:"bar"}),t._v(" "),n("div",{staticClass:"bar"})])}),[],!1,null,"668b49df",null);e.default=component.exports},213:function(t,e,n){n(214),t.exports=n(215)},241:function(t,e,n){"use strict";n.r(e),e.default=function(t){console.log("[Middleware] Auth"),t.store.getters.isAuthenticated||t.redirect("/admin/auth")}},242:function(t,e,n){"use strict";n.r(e),e.default=function(t){console.log("[Middleware] Check Auth"),t.store.dispatch("initAuth",t.req)}},243:function(t,e,n){"use strict";n.r(e),e.default=function(t){console.log("[Middleware] The Log Middleware is running")}},260:function(t,e,n){"use strict";n(179)},261:function(t,e,n){var o=n(25)(!1);o.push([t.i,".error-page[data-v-a6313782]{text-align:center}.error-page a[data-v-a6313782]{text-decoration:none;color:red}",""]),t.exports=o},262:function(t,e,n){var content=n(263);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("470cbfe5",content,!0,{sourceMap:!1})},263:function(t,e,n){var o=n(25)(!1);o.push([t.i,'body,html{margin:0;font-family:"Open Sans",sans-serif}.fade-enter-active,.fade-leave-active{transition:opacity .5s}.fade-enter,.fade-leave-to{opacity:0}',""]),t.exports=o},264:function(t,e,n){"use strict";n(180)},265:function(t,e,n){var o=n(25)(!1);o.push([t.i,'html[data-v-2603f64b]{font-family:"Open Sans",sans-serif}body[data-v-2603f64b]{margin:0}',""]),t.exports=o},266:function(t,e,n){"use strict";n(181)},267:function(t,e,n){var o=n(25)(!1);o.push([t.i,".drawer-toggle[data-v-668b49df]{display:flex;flex-direction:column;justify-content:space-around;height:50%;width:35px;cursor:pointer}@media(min-width:768px){.drawer-toggle[data-v-668b49df]{display:none}}.drawer-toggle .bar[data-v-668b49df]{width:90%;height:2px;background-color:#fff}",""]),t.exports=o},268:function(t,e,n){"use strict";n(182)},269:function(t,e,n){var o=n(25)(!1);o.push([t.i,".header-container[data-v-7dcadaf5]{height:60px}.the-header[data-v-7dcadaf5]{width:100%;position:fixed;height:60px;display:flex;justify-content:space-around;align-items:center;background-color:#000;z-index:100;box-sizing:border-box;padding:0 20px}.logo[data-v-7dcadaf5]{margin:0 10px;font-size:1.3rem}.logo a[data-v-7dcadaf5]{text-decoration:none;color:#fff}.spacer[data-v-7dcadaf5]{flex:1}.navigation-items[data-v-7dcadaf5]{display:none}@media(min-width:768px){.navigation-items[data-v-7dcadaf5]{display:block}}.nav-list[data-v-7dcadaf5]{list-style:none;padding:0;margin:0;display:flex}.nav-item[data-v-7dcadaf5]{margin:0 10px}.nav-item a[data-v-7dcadaf5]{text-decoration:none;color:#fff}.nav-item a.nuxt-link-active[data-v-7dcadaf5],.nav-item a[data-v-7dcadaf5]:active,.nav-item a[data-v-7dcadaf5]:hover{color:red}",""]),t.exports=o},270:function(t,e,n){"use strict";n(183)},271:function(t,e,n){var o=n(25)(!1);o.push([t.i,".sidenav-container[data-v-3cdc3eb7]{height:100%;width:100%}.sidenav-backdrop[data-v-3cdc3eb7]{width:100%;background-color:rgba(0,0,0,.7);z-index:1000}.sidenav[data-v-3cdc3eb7],.sidenav-backdrop[data-v-3cdc3eb7]{height:100%;position:fixed;top:0;left:0}.sidenav[data-v-3cdc3eb7]{width:300px;background-color:#fff;z-index:10000;box-sizing:border-box;padding:30px}.slide-side-enter-active[data-v-3cdc3eb7],.slide-side-leave-active[data-v-3cdc3eb7]{transition:all .3s ease-out}.slide-side-enter[data-v-3cdc3eb7],.slide-side-leave-to[data-v-3cdc3eb7]{transform:translateX(-100%)}.nav-list[data-v-3cdc3eb7]{list-style:none;padding:0;margin:0}.nav-item[data-v-3cdc3eb7]{margin:20px 0}.nav-item a[data-v-3cdc3eb7]{text-decoration:none;color:#000;font-size:1.5rem}.nav-item a[data-v-3cdc3eb7]:active,.nav-item a[data-v-3cdc3eb7]:hover{color:red}",""]),t.exports=o},272:function(t,e,n){"use strict";n.r(e);n(36),n(27),n(29),n(46),n(28),n(47);var o=n(19),r=(n(273),n(33),n(274),n(11),n(34),n(178),n(134),n(275),n(51)),c=n(77),l=n.n(c);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.default=function(){return new r.a.Store({state:{loadedPosts:[],token:null},mutations:{setPosts:function(t,e){t.loadedPosts=e},addPost:function(t,e){t.loadedPosts.push(e)},editPost:function(t,e){var n=t.loadedPosts.findIndex((function(t){return t.id===e.id}));t.loadedPosts[n]=e},setToken:function(t,e){t.token=e},clearToken:function(t){t.token=null}},actions:{nuxtServerInit:function(t,e){return e.app.$axios.$get("posts.json").then((function(data){var e=[];for(var n in data)e.push(f(f({},data[n]),{},{id:n}));t.commit("setPosts",e)})).catch((function(t){return e.error(t)}))},addPost:function(t,e){var n=f(f({},e),{},{updatedDate:new Date});return this.$axios.$post("posts.json?auth="+t.state.token,n).then((function(data){t.commit("addPost",f(f({},n),{},{id:data.name}))})).catch((function(t){return console.log(t)}))},editPost:function(t,e){return this.$axios.$put("posts/"+e.id+".json?auth="+t.state.token,e).then((function(n){t.commit("editPost",e)})).catch((function(t){return console.log(t)}))},setPosts:function(t,e){t.commit("setPosts",e)},authenticateUser:function(t,e){var n=this,o="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCnX7V7hu19JbJCQskl5j_jeAcxZFCJpYs";return e.isLogin||(o="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCnX7V7hu19JbJCQskl5j_jeAcxZFCJpYs"),this.$axios.$post(o,{email:e.email,password:e.password,returnSecureToken:!0}).then((function(e){return t.commit("setToken",e.idToken),localStorage.setItem("token",e.idToken),localStorage.setItem("tokenExpiration",(new Date).getTime()+1e3*+e.expiresIn),l.a.set("jwt",e.idToken),l.a.set("expirationDate",(new Date).getTime()+1e3*+e.expiresIn),n.$axios.$post("http://localhost:3000/api/track-data",{data:"Authenticated!"})})).catch((function(t){return console.log(t)}))},initAuth:function(t,e){var n,o;if(e){if(!e.headers.cookie){var r=e.headers.cookie.split(";").find((function(t){return t.trim().startsWith("jwt=")}));if(!r)return;n=r.split("=")[1],o=e.headers.cookie.split(";").find((function(t){return t.trim().startsWith("expirationDate=")})).split("=")[1]}}else n=localStorage.getItem("token"),o=localStorage.getItem("tokenExpiration");if((new Date).getTime()>+o||!n)return console.log("No token or invalid token"),void t.dispatch("logout");t.commit("setToken",n)},logout:function(t){this.commit("clearToken"),l.a.remove("token"),l.a.remove("expirationDate"),localStorage.removeItem("token"),localStorage.removeItem("tokenExpiration")}},getters:{loadedPosts:function(t){return t.loadedPosts},isAuthenticated:function(t){return null!=t.token}}})}},295:function(t,e,n){"use strict";n(194)},296:function(t,e,n){var o=n(25)(!1);o.push([t.i,".post-preview[data-v-0b2e8f24]{border:1px solid #ccc;box-shadow:0 2px 2px #ccc;background-color:#fff;width:90%}a[data-v-0b2e8f24]{text-decoration:none;color:#000}@media(min-width:850px){.post-preview[data-v-0b2e8f24]{width:400px;margin:10px}}.post-thumbnail[data-v-0b2e8f24]{width:100%;height:200px;background-position:50%;background-size:cover}.post-content[data-v-0b2e8f24]{padding:10px;text-align:center}a:active .post-content[data-v-0b2e8f24],a:hover .post-content[data-v-0b2e8f24]{background-color:#ccc}",""]),t.exports=o},297:function(t,e,n){"use strict";n(195)},298:function(t,e,n){var o=n(25)(!1);o.push([t.i,".post-list[data-v-92a026c8]{display:flex;padding:20px;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center}",""]),t.exports=o},299:function(t,e,n){"use strict";n(196)},300:function(t,e,n){var o=n(25)(!1);o.push([t.i,".button[data-v-61b8af77]{font:inherit;background-color:#000;color:#fff;padding:5px;cursor:pointer;border:1px solid #000}.button[data-v-61b8af77]:active,.button[data-v-61b8af77]:hover{background-color:#333;border:1px solid #000}.inverted[data-v-61b8af77]{color:#000}.inverted[data-v-61b8af77],.inverted[data-v-61b8af77]:active,.inverted[data-v-61b8af77]:hover{background-color:#fff;border:1px solid transparent}.inverted[data-v-61b8af77]:active,.inverted[data-v-61b8af77]:hover{color:#ccc}.cancel[data-v-61b8af77]{background-color:red}.cancel[data-v-61b8af77],.cancel[data-v-61b8af77]:active,.cancel[data-v-61b8af77]:hover{color:#fff;border:1px solid transparent}.cancel[data-v-61b8af77]:active,.cancel[data-v-61b8af77]:hover{background-color:salmon}",""]),t.exports=o},301:function(t,e,n){"use strict";n(197)},302:function(t,e,n){var o=n(25)(!1);o.push([t.i,".input-control[data-v-3ea4f12f]{margin:10px 0}.input-control label[data-v-3ea4f12f]{display:block;font-weight:700}.input-control input[data-v-3ea4f12f],.input-control textarea[data-v-3ea4f12f]{display:block;width:100%;box-sizing:border-box;font:inherit;border:1px solid #ccc;padding:5px}.input-control input[data-v-3ea4f12f]:focus,.input-control textarea[data-v-3ea4f12f]:focus{background-color:#eee;outline:none}",""]),t.exports=o},303:function(t,e,n){"use strict";n(198)},304:function(t,e,n){var o=n(25)(!1);o.push([t.i,".admin-new-post-page{margin:0}.new-post-form{padding:20px}",""]),t.exports=o},45:function(t,e,n){"use strict";n(260);var o=n(8),component=Object(o.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"error-page"},[n("h1",[t._v("Oops, something went wrong!")]),t._v(" "),n("p",[t._v("Back to "),n("a",{attrs:{href:"/"}},[t._v("safety")])])])}],!1,null,"a6313782",null);e.a=component.exports}},[[213,10,1,11]]]);