webpackJsonp([14],{I2xi:function(e,t){},Na6N:function(e,t){},UUrl:function(e,t,r){"use strict";t.c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return Object(l.a)({url:"/role?where="+o()(e)+"&embedded="+o()(t)+"&sort="+r,method:"get"})},t.a=function(e){return Object(l.a)({url:"/role",method:"post",data:e})},t.d=function(e,t){return Object(l.a)({url:"/role/"+e,method:"patch",data:t})},t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(l.a)({url:"/role?where="+o()(e),method:"delete"})};var n=r("3cXf"),o=r.n(n),l=r("vLgD")},"ez+T":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("C/I2"),o=r("/Tkm"),l=r("cAgV"),i=r("0xDb"),a=r("UUrl"),s=r("lC5x"),c=r.n(s),u=r("3cXf"),d=r.n(u),f=r("J0Oq"),h=r.n(f),m=r("4YfN"),v=r.n(m),g=r("HzJ8"),p=r.n(g),b=r("ZLEe"),y=r.n(b),R=r("IHPB"),_=r.n(R),w=r("z0pV"),x=r.n(w),k=r("YaEn"),$=r("psq8"),L=r.n($),O=(r("IcnI"),{name:"RoleDialog",data:function(){return{dialog:{title:null,visible:!1},role_id:null,form:{key:null,name:null,desc:null,routes:[]},formRules:{name:[{required:!0,message:"请输入用户",trigger:"blur"}]},routes:[],checkStrictly:!1,defaultProps:{children:"children",label:"title"}}},computed:{routesData:function(){return this.routes}},methods:{showRoleDialog:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.dialog.visible=!0,this.dialog.title=t?"修改角色【"+t.name+"】":"创建角色",this.routes=this.generateRoutes(Object(i.b)([].concat(_()(k.a)))),this.$nextTick(function(){if(e.$refs.form.clearValidate(),!t)return e.role_id=null,void e.$refs.form.resetFields();e.form=L.a.pick(Object(i.b)(t),y()(e.form)),e.role_id=t.id;var r=e.generateRoutes(JSON.parse(e.form.routes||"[]"));e.$refs.tree.setCheckedNodes(e.generateArr(r)),e.checkStrictly=!1})},generateArr:function(e){var t=this,r=[];return e.forEach(function(e){if(r.push(e),e.children){var n=t.generateArr(e.children);n.length>0&&(r=[].concat(_()(r),_()(n)))}}),r},updateRoleInfo:function(){var e=this;this.$refs.form.validate(function(t){if(!t)return!1;e.confirmRole()})},generateRoutes:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/",r=[],n=!0,o=!1,l=void 0;try{for(var i,a=p()(e);!(n=(i=a.next()).done);n=!0){var s=i.value;if(!s.hidden){var c=this.onlyOneShowingChild(s.children,s);s.children&&c&&!s.alwaysShow&&(s=c);var u={path:x.a.resolve(t,s.path),title:s.meta&&s.meta.title};s.children&&(u.children=this.generateRoutes(s.children,u.path)),r.push(u)}}}catch(e){o=!0,l=e}finally{try{!n&&a.return&&a.return()}finally{if(o)throw l}}return r},onlyOneShowingChild:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments[1],r=null,n=e.filter(function(e){return!e.hidden});return 1===n.length?((r=n[0]).path=x.a.resolve(t.path,r.path),r):0===n.length&&(r=v()({},t,{path:"",noShowingChildren:!0}))},generateTree:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/",r=arguments[2],n=[],o=!0,l=!1,i=void 0;try{for(var a,s=p()(e);!(o=(a=s.next()).done);o=!0){var c=a.value,u=x.a.resolve(t,c.path);c.children&&(c.children=this.generateTree(c.children,u,r)),(r.includes(u)||c.children&&c.children.length>=1)&&n.push(c)}}catch(e){l=!0,i=e}finally{try{!o&&s.return&&s.return()}finally{if(l)throw i}}return n},getRoutesPath:function(e){if(!e||!e.length)return!1;var t=[],r=!0,n=!1,o=void 0;try{for(var l,i=p()(e);!(r=(l=i.next()).done);r=!0){var a=l.value;a.children&&a.children.forEach(function(e,r){t.push(e.path)}),a.path&&t.push(a.path),a.children&&this.getRoutesPath(a.children)}}catch(e){n=!0,o=e}finally{try{!r&&i.return&&i.return()}finally{if(n)throw o}}return t},confirmRole:function(){var e=this;return h()(c.a.mark(function t(){var r,n;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(r=e.$refs.tree.getCheckedKeys(),e.form.routes=e.generateTree(Object(i.b)(e.routes),"/",r),n=e.getRoutesPath(e.form.routes),console.log(3,n),!e.role_id){t.next=12;break}return e.form.routes=d()(e.form.routes),e.form.routes_map=d()(n),t.next=9,Object(a.d)(e.role_id,e.form);case 9:e.$message.success("更新成功"),t.next=18;break;case 12:return e.form.key=e.form.name,e.form.routes=d()(e.form.routes),e.form.routes_map=d()(n),t.next=17,Object(a.a)(e.form);case 17:e.$message.success("创建成功");case 18:e.dialog.visible=!1,e.$emit("getRoleList");case 20:case"end":return t.stop()}},t,e)}))()}}}),S={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-dialog",{attrs:{title:e.dialog.title,visible:e.dialog.visible,width:"40%","close-on-press-escape":!1,"close-on-click-modal":!1},on:{"update:visible":function(t){return e.$set(e.dialog,"visible",t)}}},[r("el-row",{staticStyle:{"margin-bottom":"20px","margin-top":"-8px"}},[r("div",{staticClass:"div_title"},[r("span",[e._v("角色信息")])])]),e._v(" "),r("el-row",[r("el-col",{attrs:{span:21}},[r("el-form",{ref:"form",attrs:{model:e.form,rules:e.formRules,"label-width":"120px"}},[r("el-form-item",{attrs:{label:"名称:",prop:"name"}},[r("el-input",{attrs:{placeholder:"请输入名称"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"描述:",prop:"desc"}},[r("el-input",{attrs:{type:"textarea",rows:2},model:{value:e.form.desc,callback:function(t){e.$set(e.form,"desc",t)},expression:"form.desc"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"菜单"}},[r("el-tree",{ref:"tree",staticClass:"permission-tree",attrs:{"check-strictly":e.checkStrictly,data:e.routesData,props:e.defaultProps,"show-checkbox":"","node-key":"path"}})],1)],1)],1)],1),e._v(" "),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.dialog.visible=!1}}},[e._v("取 消")]),e._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:e.updateRoleInfo}},[e._v("确 定")])],1)],1)},staticRenderFns:[]};var C=r("C7Lr")(O,S,!1,function(e){r("Na6N")},"data-v-78d72678",null).exports,j={name:"index",directives:{waves:l.a},components:{PanelTitle:n.a,TableFoot:o.a,RoleDialog:C},data:function(){return{roleList:[],listLoading:!0,listQuery:{},selectedRoles:[]}},created:function(){this.getRoleList()},methods:{getEnumName:i.c,setSelection:function(e){this.selectedRoles=Object(i.d)(e,"id")},selectionChange:function(e){this.$refs.tableFoot.selectionChange(e)},getRoleList:function(){var e=this;Object(a.c)(this.listQuery).then(function(t){e.roleList=t._items,e.listLoading=!1})},createRoleInfo:function(){this.$refs.roleDialog.showRoleDialog()},deleteRole:function(e){var t=this,r=L.a.isArray(e)?e:[e.id];this.$confirm("此操作将删用户, 是否继续?","提示",{type:"warning"}).then(function(){t.listLoading=!0,Object(a.b)({id:r}).then(function(){t.getRoleList(),t.listLoading=!1,t.$message.success("删除成功")})}).catch(function(){return console.log("no deleted")})},editRole:function(e){this.$refs.roleDialog.showRoleDialog(e)}}},D={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("panel-title",{attrs:{title:"角色管理","is-line":""}}),e._v(" "),r("el-row",[r("el-col",{attrs:{span:24}},[r("el-button",{directives:[{name:"waves",rawName:"v-waves"}],attrs:{type:"primary",icon:"el-icon-plus",size:"mini"},on:{click:e.createRoleInfo}},[e._v("创 建")])],1)],1),e._v(" "),r("el-row",[r("el-col",{attrs:{span:24}},[r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],ref:"table",attrs:{data:e.roleList,border:"",fit:""},on:{"selection-change":e.selectionChange}},[r("el-table-column",{attrs:{type:"selection",width:"55",fixed:"",align:"center"}}),e._v(" "),r("el-table-column",{attrs:{prop:"key",label:"key",sortable:"",fixed:"",width:"120"}}),e._v(" "),r("el-table-column",{attrs:{prop:"name",label:"名称",sortable:"",fixed:"",width:"120"}}),e._v(" "),r("el-table-column",{attrs:{prop:"desc",label:"描述"}}),e._v(" "),r("el-table-column",{attrs:{label:"操作",fixed:"right",align:"right",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"text",size:"small"},on:{click:function(r){return e.editRole(t.row)}}},[e._v("编辑")]),e._v(" "),r("el-button",{attrs:{type:"text",size:"small"},on:{click:function(r){return e.deleteRole(t.row)}}},[e._v("删除")])]}}])})],1),e._v(" "),r("table-foot",{ref:"tableFoot",attrs:{"data-length":e.roleList.length},on:{setSelection:e.setSelection,clearSelection:function(t){return e.$refs.table.clearSelection()},toggleAllSelection:function(t){return e.$refs.table.toggleAllSelection()}}},[r("template",{slot:"foot"},[r("span",[r("el-button",{attrs:{type:"danger",icon:"el-icon-delete",disabled:!e.selectedRoles.length},on:{click:function(t){return e.deleteRole(e.selectedRoles)}}},[e._v("删 除")])],1)])],2)],1)],1),e._v(" "),r("role-dialog",{ref:"roleDialog",on:{getRoleList:e.getRoleList}})],1)},staticRenderFns:[]};var I=r("C7Lr")(j,D,!1,function(e){r("I2xi")},"data-v-1049fb96",null);t.default=I.exports}});