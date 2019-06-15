webpackJsonp([16],{"+f+R":function(e,s){},"T+/8":function(e,s,o){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n=function(e,s,o){var n=new Error("请输入用户名");s?o():o(n)},t=function(e,s,o){s||o(new Error("请输入密码")),o()},a={name:"Login",data:function(){return{loginForm:{username:"",password:""},loginRules:{username:[{required:!0,trigger:["blur","change"],validator:n}],password:[{required:!0,trigger:["blur","change"],validator:t}]},passwordType:"password",loading:!1,showDialog:!1,disabled:!0,isAutoFocus:!0}},watch:{loginForm:{handler:function(e){this.disabled=!(e.username&&e.password)},deep:!0}},methods:{showPwd:function(){"password"===this.passwordType?this.passwordType="":this.passwordType="password"},handleLogin:function(){var e=this;this.$refs.loginForm.validate(function(s){s&&(e.loading=!0,e.$store.dispatch("LoginByUsername",e.loginForm).then(function(){e.loading=!1,e.$router.push({name:"Dashboard"}),setTimeout(function(){e.$notify.success({title:"登录成功",message:"欢迎进入塑妮商城管理系统"})},1500)}).catch(function(){e.loading=!1}))})}}},i={render:function(){var e=this,s=e.$createElement,o=e._self._c||s;return o("div",{staticClass:"login-container"},[o("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:e.loginForm,rules:e.loginRules,"auto-complete":"on","label-position":"left",size:"medium"}},[o("div",{staticClass:"title-container"},[o("h3",{staticClass:"title"},[o("span",[e._v("塑妮商城管理系统")]),e._v(" "),o("span",{staticClass:"text-explode"},[e._v("|")]),e._v(" "),o("span",[e._v("登录")])])]),e._v(" "),o("el-form-item",{attrs:{prop:"username"}},[o("span",{staticClass:"svg-container"},[o("svg-icon",{attrs:{"icon-class":"user"}})],1),e._v(" "),o("el-input",{attrs:{autofocus:e.isAutoFocus,placeholder:"请输入用户名",name:"username",type:"text","auto-complete":"on",size:"medium"},model:{value:e.loginForm.username,callback:function(s){e.$set(e.loginForm,"username",s)},expression:"loginForm.username"}})],1),e._v(" "),o("el-form-item",{attrs:{prop:"password"}},[o("span",{staticClass:"svg-container"},[o("svg-icon",{attrs:{"icon-class":"password"}})],1),e._v(" "),o("el-input",{attrs:{type:e.passwordType,placeholder:"请输入密码",name:"password","auto-complete":"on",size:"medium"},nativeOn:{keyup:function(s){return!s.type.indexOf("key")&&e._k(s.keyCode,"enter",13,s.key,"Enter")?null:e.handleLogin(s)}},model:{value:e.loginForm.password,callback:function(s){e.$set(e.loginForm,"password",s)},expression:"loginForm.password"}}),e._v(" "),o("span",{staticClass:"show-pwd",on:{click:e.showPwd}},[o("svg-icon",{attrs:{"icon-class":"eye"}})],1)],1),e._v(" "),o("el-button",{staticStyle:{width:"100%","margin-bottom":"30px"},attrs:{loading:e.loading,type:"primary",size:"medium",disabled:e.loginForm.disabled},nativeOn:{click:function(s){return s.preventDefault(),e.handleLogin(s)}}},[e._v("登录\n    ")])],1)],1)},staticRenderFns:[]};var r=o("C7Lr")(a,i,!1,function(e){o("+f+R"),o("WYdc")},"data-v-0679b05e",null);s.default=r.exports},WYdc:function(e,s){}});