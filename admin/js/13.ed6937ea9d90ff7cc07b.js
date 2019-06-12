webpackJsonp([13],{UUrl:function(e,t,r){"use strict";t.c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return Object(a.a)({url:"/role?where="+l()(e)+"&embedded="+l()(t)+"&sort="+r,method:"get"})},t.a=function(e){return Object(a.a)({url:"/role",method:"post",data:e})},t.d=function(e,t){return Object(a.a)({url:"/role/"+e,method:"patch",data:t})},t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(a.a)({url:"/role?where="+l()(e),method:"delete"})};var s=r("3cXf"),l=r.n(s),a=r("vLgD")},YJNj:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=r("Q+Ik"),l=r.n(s),a=r("HzJ8"),n=r.n(a),i=r("KH7x"),o=r.n(i),c=r("4YfN"),u=r.n(c),d=r("C/I2"),f=r("cAgV"),m=r("iRfq"),p=r("ZLEe"),g=r.n(p),h=r("psq8"),v=r.n(h),b=r("EOYE"),_=r("UUrl"),w={name:"EditUserDialog",data:function(){var e=this;return{dialog:{title:null,visible:!1},roles:[],user_id:null,form:{username:null,nickname:null,is_tenant:!1,role:null,password:null,checkPassword:null},formRules:{username:[{required:!0,message:"请输入用户",trigger:"blur"}],role:[{required:!0,message:"请输入角色",trigger:"blur"}],password:[{validator:function(t,r,s){r||s(new Error("请输入密码")),""!==e.form.checkPassword&&e.$refs.form.validateField("checkPassword"),s()},trigger:"blur"}],checkPassword:[{validator:function(t,r,s){r||s(new Error("请再次输入密码")),r!==e.form.password&&s(new Error("两次输入密码不一致!")),s()},trigger:"blur"}]}}},methods:{showUserDialog:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.dialog.visible=!0,this.dialog.title=t?"修改账号【"+t.username+"】":"创建账号",this.getRolesList(),this.$nextTick(function(){if(e.$refs.form.clearValidate(),!t)return e.$refs.form.resetFields(),void(e.user_id=null);e.user_id=t.id,e.form=v.a.pick(t,g()(e.form)),e.form.role=t.role?t.role.id:null})},getRolesList:function(){var e=this;Object(_.c)().then(function(t){e.roles=t._items})},updateUserInfo:function(){var e=this;this.$refs.form.validate(function(t){if(!t)return!1;var r=u()({},e.form);e.user_id?(delete r.password,delete r.checkPassword):delete r.checkPassword,e.user_id?Object(b.f)(e.user_id,r).then(function(){e.$message.success("更新成功"),e.dialog.visible=!1,e.$emit("getUsersList")}):Object(b.a)(r).then(function(){e.$message.success("创建成功"),e.dialog.visible=!1,e.$emit("getUsersList")})})}}},U={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-dialog",{attrs:{title:e.dialog.title,visible:e.dialog.visible,width:"40%","close-on-press-escape":!1,"close-on-click-modal":!1},on:{"update:visible":function(t){return e.$set(e.dialog,"visible",t)}}},[r("el-row",{staticStyle:{"margin-bottom":"20px","margin-top":"-8px"}},[r("div",{staticClass:"div_title"},[r("span",[e._v("账号信息")])])]),e._v(" "),r("el-row",[r("el-col",{attrs:{span:21}},[r("el-form",{ref:"form",attrs:{model:e.form,rules:e.formRules,"label-width":"120px"}},[r("el-form-item",{attrs:{label:"账号:",prop:"username"}},[r("el-input",{attrs:{placeholder:"请输入账号"},model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"昵称:",prop:"nickname"}},[r("el-input",{attrs:{placeholder:"请输入联系人"},model:{value:e.form.nickname,callback:function(t){e.$set(e.form,"nickname",t)},expression:"form.nickname"}})],1),e._v(" "),"admin"!==e.form.username?r("el-form-item",{attrs:{label:"角色:",prop:"role"}},[r("el-select",{attrs:{placeholder:"请选择"},model:{value:e.form.role,callback:function(t){e.$set(e.form,"role",t)},expression:"form.role"}},e._l(e.roles,function(e){return r("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}),1)],1):e._e(),e._v(" "),e.user_id?e._e():r("el-form-item",{attrs:{label:"密码:",prop:"password"}},[r("el-input",{attrs:{type:"password",placeholder:"请输入密码"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),e._v(" "),e.user_id?e._e():r("el-form-item",{attrs:{label:"确认密码:",prop:"checkPassword"}},[r("el-input",{attrs:{type:"password",placeholder:"请输入确认密码"},model:{value:e.form.checkPassword,callback:function(t){e.$set(e.form,"checkPassword",t)},expression:"form.checkPassword"}})],1)],1)],1)],1),e._v(" "),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.dialog.visible=!1}}},[e._v("取 消")]),e._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:e.updateUserInfo}},[e._v("确 定")])],1)],1)},staticRenderFns:[]};var y=r("C7Lr")(w,U,!1,function(e){r("nGqz")},"data-v-62981847",null).exports,k={name:"UsersFilter",directives:{waves:f.a},components:{UploadFile:m.a,UserDialog:y},data:function(){return{filter:{username:null,nickname:null,role:null},roles:[]}},created:function(){this.getRoleList()},methods:{getRoleList:function(){var e=this;Object(_.c)().then(function(t){e.roles=t._items})},selectUsers:function(){this.$emit("filterUsers",this.filter)},toGetUsersList:function(){this.$emit("getUsersList")},createUserInfo:function(){this.$refs.userDialog.showUserDialog()}}},L={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-row",[r("el-col",{attrs:{span:24}},[r("el-input",{staticStyle:{width:"150px"},attrs:{placeholder:"账号",clearable:""},model:{value:e.filter.username,callback:function(t){e.$set(e.filter,"username",t)},expression:"filter.username"}}),e._v(" "),r("el-input",{staticStyle:{width:"150px"},attrs:{placeholder:"昵称",clearable:""},model:{value:e.filter.nickname,callback:function(t){e.$set(e.filter,"nickname",t)},expression:"filter.nickname"}}),e._v(" "),r("el-select",{attrs:{clearable:"",placeholder:"角色"},model:{value:e.filter.role,callback:function(t){e.$set(e.filter,"role",t)},expression:"filter.role"}},e._l(e.roles,function(e){return r("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}),1),e._v(" "),r("el-button",{directives:[{name:"waves",rawName:"v-waves"}],attrs:{type:"primary"},on:{click:e.selectUsers}},[r("i",{staticClass:"el-icon-search"}),e._v(" "),r("span",[e._v("查 询")])]),e._v(" "),r("el-button",{directives:[{name:"waves",rawName:"v-waves"}],attrs:{type:"success"},on:{click:e.createUserInfo}},[r("i",{staticClass:"el-icon-plus"}),e._v(" "),r("span",[e._v("创 建")])])],1),e._v(" "),r("user-dialog",{ref:"userDialog",on:{getUsersList:e.toGetUsersList}})],1)},staticRenderFns:[]},$=r("C7Lr")(k,L,!1,null,null,null).exports,x=r("/Tkm"),P=r("0xDb"),Q=r("Q0Ca"),D=r("scMp"),S={name:"UsersTable",components:{TableFoot:x.a,UserDialog:y,ChangePasswordDialog:D.a},filters:{dateFormat:Q.dateFormat},props:{userList:{type:Array,required:!0},pageQuery:{type:Object,required:!0},total:{required:!0}},watch:{userList:function(e){this.listLoading=!(!e||!e.length)&&!Boolean(e.length)}},computed:{admin_id:function(){var e=this.userList.filter(function(e){return"admin"===e.username});return e.length?e[0].id:null}},data:function(){return{listLoading:!1,selectedUsers:[]}},methods:{changeSize:function(e){this.pageQuery.max_results=e,this.$emit("getUsersList")},changePage:function(e){this.pageQuery.page=e,this.$emit("getUsersList")},setSelection:function(e){this.selectedUsers=Object(P.d)(e,"id")},selectionChange:function(e){this.$refs.tableFoot.selectionChange(e)},deleteUser:function(e){var t=this,r=v.a.isArray(e)?e:[e.id],s=r.findIndex(function(e){return e===t.admin_id});s>-1&&r.splice(s,1),this.$confirm("此操作将删用户, 是否继续?","提示",{type:"warning"}).then(function(){t.listLoading=!0,Object(b.c)({id:r}).then(function(){t.$emit("getUsersList"),t.listLoading=!1,t.$message.success("删除成功, admin用户将无法删除")})}).catch(function(){return console.log("no deleted")})},editUser:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.$refs.userDialog.showUserDialog(e)},toGetUsersList:function(){this.$emit("getUsersList")},changePassword:function(e){this.$refs.passwordDialog.showChangePasswordDialog(e)}}},j={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-row",[r("el-col",{attrs:{span:24}},[r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],ref:"table",attrs:{data:e.userList,border:"",fit:""},on:{"selection-change":e.selectionChange}},[r("el-table-column",{attrs:{type:"selection",width:"55",fixed:"",align:"center"}}),e._v(" "),r("el-table-column",{attrs:{prop:"username",label:"账号",sortable:"",fixed:"",width:"180"}}),e._v(" "),r("el-table-column",{attrs:{prop:"nickname",label:"昵称",sortable:"",width:"180"}}),e._v(" "),r("el-table-column",{attrs:{prop:"role",label:"角色",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.role&&"admin"!==t.row.username?r("el-tag",[e._v(e._s(t.row.role.name))]):e._e(),e._v(" "),"admin"===t.row.username?r("el-tag",[e._v("内置管理员")]):e._e()]}}])}),e._v(" "),r("el-table-column",{attrs:{prop:"login_ip",label:"登录IP",width:"120"}}),e._v(" "),r("el-table-column",{attrs:{prop:"login_time",label:"登录时间",width:"150"}}),e._v(" "),r("el-table-column",{attrs:{prop:"first_seen",label:"创建时间",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("span",[e._v(e._s(e._f("dateFormat")(t.row.first_seen,"YYYY-MM-DD")))])]}}])}),e._v(" "),r("el-table-column",{attrs:{prop:"desc",label:"描述"}}),e._v(" "),r("el-table-column",{attrs:{label:"操作",fixed:"right",align:"right",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("div",[r("el-button",{attrs:{type:"text",size:"small"},on:{click:function(r){return e.changePassword(t.row)}}},[e._v("修改密码")])],1),e._v(" "),r("div",[r("el-button",{attrs:{type:"text",size:"small"},on:{click:function(r){return e.editUser(t.row)}}},[e._v("编辑")]),e._v(" "),r("el-button",{attrs:{type:"text",size:"small",disabled:"admin"===t.row.username},on:{click:function(r){return e.deleteUser(t.row)}}},[e._v("删除\n            ")])],1)]}}])})],1),e._v(" "),r("table-foot",{ref:"tableFoot",attrs:{"data-length":e.userList.length},on:{setSelection:e.setSelection,clearSelection:function(t){return e.$refs.table.clearSelection()},toggleAllSelection:function(t){return e.$refs.table.toggleAllSelection()}}},[r("template",{slot:"foot"},[r("span",[r("el-button",{attrs:{type:"danger",icon:"el-icon-delete",disabled:!e.selectedUsers.length},on:{click:function(t){return e.deleteUser(e.selectedUsers)}}},[e._v("删 除")])],1)])],2)],1),e._v(" "),r("el-col",{staticStyle:{"margin-top":"10px"},attrs:{span:24}},[r("el-pagination",{attrs:{"current-page":e.pageQuery.page,"page-sizes":[10,20,30,40],"page-size":e.pageQuery.max_results,total:e.total,background:"",layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":e.changeSize,"current-change":e.changePage}})],1),e._v(" "),r("user-dialog",{ref:"userDialog",on:{getUsersList:e.toGetUsersList}}),e._v(" "),r("change-password-dialog",{ref:"passwordDialog"})],1)},staticRenderFns:[]};var C=r("C7Lr")(S,j,!1,function(e){r("gya4")},"data-v-adae3c6e",null).exports,F={name:"index",components:{PanelTitle:d.a,UsersFilter:$,UsersTable:C},data:function(){return{userList:[],total:0,listQuery:{argsQuery:{},pageQuery:{page:1,max_results:10}}}},created:function(){this.getUsersList()},methods:{getUsersList:function(){var e=this,t=u()({},this.listQuery);t.argsQuery.is_tenant=!1,"admin"!==this.$store.state.user.username&&(t.argsQuery.username="!=admin");Object(b.d)(t,{role:!0}).then(function(t){e.userList=t._items,e.total=t._meta.total})},filterUsers:function(e){this.listQuery.pageQuery.page=1;var t={},r=!0,s=!1,a=void 0;try{for(var i,c=n()(l()(e));!(r=(i=c.next()).done);r=!0){var d=i.value,f=o()(d,2),m=f[0],p=f[1];p&&(t[m]="role"===m?p:'like("%25'+p+'%25")')}}catch(e){s=!0,a=e}finally{try{!r&&c.return&&c.return()}finally{if(s)throw a}}this.listQuery.argsQuery=u()({},t),this.getUsersList()}}},O={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("panel-title",{attrs:{title:"账号管理","is-line":""}}),e._v(" "),r("users-filter",{on:{filterUsers:e.filterUsers,getUsersList:e.getUsersList}}),e._v(" "),r("users-table",{attrs:{"page-query":e.listQuery.pageQuery,total:e.total,"user-list":e.userList},on:{getUsersList:e.getUsersList}})],1)},staticRenderFns:[]},z=r("C7Lr")(F,O,!1,null,null,null);t.default=z.exports},gya4:function(e,t){},nGqz:function(e,t){}});