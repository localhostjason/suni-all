webpackJsonp([14],{EkoZ:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("Q+Ik"),r=a.n(n),l=a("HzJ8"),o=a.n(l),s=a("4YfN"),i=a.n(s),u=a("KH7x"),c=a.n(u),d=a("C/I2"),p={name:"AmountFilter",directives:{waves:a("cAgV").a},data:function(){return{filter:{real_name:"",phone:""}}},methods:{handleFilter:function(){this.$emit("filterUser",this.filter)}}},f={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-row",[a("el-col",{attrs:{span:24}},[a("el-input",{staticStyle:{width:"150px"},attrs:{placeholder:"姓名",clearable:""},model:{value:e.filter.real_name,callback:function(t){e.$set(e.filter,"real_name",t)},expression:"filter.real_name"}}),e._v(" "),a("el-input",{staticStyle:{width:"150px"},attrs:{placeholder:"电话",clearable:""},model:{value:e.filter.phone,callback:function(t){e.$set(e.filter,"phone",t)},expression:"filter.phone"}}),e._v(" "),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.handleFilter}},[e._v("查 询")])],1)],1)},staticRenderFns:[]};var h=a("C7Lr")(p,f,!1,function(e){a("qPYZ")},"data-v-356191ff",null).exports,v=a("lC5x"),m=a.n(v),g=a("J0Oq"),_=a.n(g),w=a("0xDb"),b=a("ryJa"),y=a.n(b),x=a("Q0Ca"),O=a("R2Wb"),L=["ID","电话","姓名","会员级别","积分","本月新增用户"],A=["id","phone","real_name","type","total_profit","persons"],Q={name:"AmountTable",props:{data:{type:Array,required:!0},allUser:{type:Array},pageQuery:{type:Object,required:!0},total:{required:!0},listLoading:{required:!0,default:!0}},data:function(){return{downloadLoading:!1,downloadLoadingAll:!1,spanArr:[],loading:this.listLoading}},watch:{listLoading:function(e){this.loading=e}},methods:{getEnumName:w.c,changeSize:function(e){this.pageQuery.max_results=e,this.$emit("getUserList")},changePage:function(e){this.pageQuery.page=e,this.$emit("getUserList")},updateTable:function(e){this.spanArr=[],this.getSpanArr(e)},objectSpanMethod:function(e){e.row,e.column;var t=e.rowIndex;if(0===e.columnIndex){var a=this.spanArr[t];return{rowspan:a,colspan:a>0?1:0}}},getSpanArr:function(e){for(var t=0;t<e.length;t++)0===t?(this.spanArr.push(1),this.pos=0):e[t].owner_id===e[t-1].owner_id?(this.spanArr[this.pos]+=1,this.spanArr.push(0)):(this.spanArr.push(1),this.pos=t)},formatJson:function(e,t){return t.map(function(t){return e.map(function(e){return"type"===e?Object(w.c)(t[e]):"persons"===e?t.persons.length||"":t[e]})})},handleDownload:function(){var e=this;return _()(m.a.mark(function t(){return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.downloadLoading=!0,t.next=3,Object(O.a)(L,A,e.data,"用户积分",e.formatJson);case 3:e.downloadLoading=!1;case 4:case"end":return t.stop()}},t,e)}))()},handleDownloadAll:function(){var e=this;return _()(m.a.mark(function t(){return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.downloadLoadingAll=!0,t.next=3,Object(O.a)(L,A,e.allUser,"所有用户积分",e.formatJson);case 3:e.downloadLoadingAll=!1;case 4:case"end":return t.stop()}},t,e)}))()},showDetail:function(e){this.$router.push({name:"IntegralDetail",query:{id:e.id}})},showNowMonth:function(e){return e.filter(function(e){var t=Object(x.dateFormat)(y()().startOf("month")),a=Object(x.dateFormat)(y()().endOf("month"));return console.log(Object(x.dateFormat)(y()().startOf("month")),e.time),console.log(y()(e.time).valueOf()>=y()(t).valueOf()&&y()(e.time).valueOf()<=y()(a).valueOf()),y()(e.time).valueOf()>=y()(t).valueOf()&&y()(e.time).valueOf()<=y()(a).valueOf()}).length}}},k={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-row",[a("el-button",{attrs:{loading:e.downloadLoading,type:"primary",icon:"el-icon-download"},on:{click:e.handleDownload}},[e._v("\n      导出 Excel\n    ")]),e._v(" "),a("el-button",{attrs:{loading:e.downloadLoadingAll,type:"primary",icon:"el-icon-download"},on:{click:e.handleDownloadAll}},[e._v("\n      全部 Excel\n    ")])],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:24}},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"table",attrs:{data:e.data,border:"",fit:""}},[a("el-table-column",{attrs:{prop:"id",label:"iD",sortable:"",fixed:"",width:"80"}}),e._v(" "),a("el-table-column",{attrs:{prop:"phone",label:"电话",sortable:"",fixed:"",width:"120"}}),e._v(" "),a("el-table-column",{attrs:{prop:"real_name",label:"姓名",sortable:"",fixed:"",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.real_name))])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"type",label:"会员级别",sortable:"",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-tag",[e._v(e._s(e.getEnumName(t.row.type)))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"积分",sortable:"",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{staticClass:"span-color"},[e._v(e._s(t.row.total_profit))]),e._v(" "),a("div",{staticClass:"pull-right"},[a("span",{staticClass:"text-explode"},[e._v("|")]),e._v(" "),a("span",{staticClass:"span-color",on:{click:function(a){return e.showDetail(t.row)}}},[e._v("详情")])])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"vip人数",sortable:"",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.vip_number?a("span",[e._v(e._s(t.row.vip_number))]):e._e()]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"本月新增人数",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.person.length?a("span",{staticClass:"span-color"},[e._v(e._s(e.showNowMonth(t.row.person)))]):e._e()]}}])})],1)],1)],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:24}},[a("el-pagination",{attrs:{"current-page":e.pageQuery.page,"page-sizes":[10,20,30,40],"page-size":e.pageQuery.max_results,total:e.total,background:"",layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":e.changeSize,"current-change":e.changePage}})],1)],1)],1)},staticRenderFns:[]};var U=a("C7Lr")(Q,k,!1,function(e){a("vrNG")},"data-v-039ea494",null).exports,j=a("EOYE"),S={name:"index",components:{PanelTitle:d.a,AmountFilter:h,AmountTable:U},data:function(){return{listLoading:!0,userList:[],allUser:[],total:0,listQuery:{argsQuery:{},pageQuery:{page:1,max_results:10}}}},created:function(){this.getUserList(),this.getAllUser()},methods:{filterUser:function(e){this.listQuery.pageQuery.page=1;var t={},a=!0,n=!1,l=void 0;try{for(var s,u=o()(r()(e));!(a=(s=u.next()).done);a=!0){var d=s.value,p=c()(d,2),f=p[0],h=p[1];h&&(t[f]='like("%25'+h+'%25")')}}catch(e){n=!0,l=e}finally{try{!a&&u.return&&u.return()}finally{if(n)throw l}}this.listQuery.argsQuery=i()({},t),this.getUserList()},getAllUser:function(){var e=this;Object(j.d)({argsQuery:{is_tenant:!0}},{person:!0}).then(function(t){e.allUser=t._items})},getUserList:function(){var e=this,t=i()({},this.listQuery);t.argsQuery.is_tenant=!0;Object(j.d)(t,{person:!0}).then(function(t){e.userList=t._items.map(function(t){return e.$set(t,"owner_id",t.owner?t.owner.id:null),e.$set(t,"persons",t.person.filter(function(e){var t=Object(x.dateFormat)(y()().startOf("month")),a=Object(x.dateFormat)(y()().endOf("month"));return y()(t).valueOf()<=y()(e.time).valueOf()<=y()(a).valueOf()})),t}),e.total=t._meta.total,e.listLoading=!1,e.$refs.table.updateTable(e.userList)})}}},F={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("panel-title",{attrs:{title:"用户积分","is-line":""}}),e._v(" "),a("amount-filter",{on:{filterUser:e.filterUser}}),e._v(" "),a("amount-table",{ref:"table",attrs:{"page-query":e.listQuery.pageQuery,total:e.total,data:e.userList,"all-user":e.allUser,"list-loading":e.listLoading},on:{getUserList:e.getUserList}})],1)},staticRenderFns:[]};var $=a("C7Lr")(S,F,!1,function(e){a("Pw5S")},"data-v-bd807558",null);t.default=$.exports},Pw5S:function(e,t){},qPYZ:function(e,t){},vrNG:function(e,t){}});