webpackJsonp([1],{DdvY:function(t,e,i){t.exports=i.p+"static/img/login.5756c56.jpg"},wUZA:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=i("mvHQ"),n=i.n(o),s=i("A+xO"),a={name:"App",data:function(){return{}},methods:{uuid:function(){for(var t=[],e=0;e<36;e++)t[e]="0123456789abcdef".substr(Math.floor(16*Math.random()),1);t[14]="4",t[19]="0123456789abcdef".substr(3&t[19]|8,1),t[8]=t[13]=t[18]=t[23]="-";var i=t.join("");return i},checkClientCookie:function(){var t=this.Cookie.getCookie("client_id");if(null!=t&&""!=t)return!1;this.Cookie.setCookie("client_id","web",14)},checkInstallCookie:function(){var t=this,e=this.Cookie.getCookie("installation_ID");if(null!=e&&""!=e);else if(null!=(e=this.uuid()+"-"+(new Date).getTime())&&""!=e){var i=s.a.toBase64(n()({deviceType:"PC",osType:"windows",agentType:"Browser",hardwareUid:{PC:{disk_id:"",mac_addresses:""}}}));this.$store.dispatch("postInstalltionId",{installationId:e,device_info:i,client_id:this.Cookie.getCookie("client_id")}).then(function(i){t.Cookie.setCookie("installation_ID",e,14)}).catch(function(t){alert("添加失败："+t.data.data)})}}},created:function(){this.checkClientCookie(),this.checkInstallCookie(),this.Cookie.getCookie("access_token")||this.$route.params.data&&(this.Cookie.setCookie("access_token","xxxx2"),this.$emit("viewIn"))},updated:function(){}},c={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("el-row",{staticClass:"container",attrs:{gutter:20}},[o("el-col",{attrs:{span:24}},[o("div",{staticClass:"login-icon"},[o("el-button",{on:{click:function(e){t.checkCookie()}}},[t._v("set cookie")]),t._v(" "),o("img",{attrs:{src:i("DdvY")}})],1)])],1)},staticRenderFns:[]},l=i("VU/8")(a,c,!1,null,null,null);e.default=l.exports}});
//# sourceMappingURL=1.96afa1db3d643400e901.js.map