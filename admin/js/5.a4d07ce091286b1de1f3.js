webpackJsonp([5],{"5GBj":function(t,e){},"9fsD":function(t,e){},ENHR:function(t,e){},R6A3:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=i("Q+Ik"),n=i.n(o),r=i("HzJ8"),a=i.n(r),l=i("KH7x"),s=i.n(l),c=i("4YfN"),m=i.n(c),d=i("3cXf"),u=i.n(d),f=i("C/I2"),p=i("cAgV"),v=i("ifD2"),_=i("ZLEe"),y=i.n(_),g=i("psq8"),h=i.n(g),b=i("JO8y"),w=i("++TJ"),x={name:"InfoDialog",data:function(){return{commodityType:w.a,dialog:{title:null,visible:!1},commodity_id:null,form:{name:null,commodity_type:null,commodity_second:null,type:null,stock:0,desc_detail:null},formRules:{name:[{required:!0,message:"请输入名称",trigger:"blur"}],commodity_type:[{required:!0,message:"请输入一级分类",trigger:"blur"}],commodity_second:[{required:!0,message:"请输入二级分类",trigger:"blur"}],stock:[{required:!0,message:"请输入库存",trigger:"blur"},{validator:function(t,e,i){if(!e)return i(new Error("库存不能为空"));e<0?i(new Error("库存不能小于0")):i()},trigger:"blur"}]},typeList:[],secondTypeList:[]}},methods:{showInfoDialog:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.dialog.visible=!0,this.dialog.title=e?"修改商品【"+e.name+"】":"创建商品",this.getCommodityTypeList(),this.$nextTick(function(){if(t.$refs.form.clearValidate(),!e)return t.$refs.form.resetFields(),void(t.commodity_id=null);t.commodity_id=e.id,t.form=h.a.pick(e,y()(t.form)),t.form.commodity_second=e.commodity_second.id,t.form.commodity_type=e.commodity_type.id})},getCommodityTypeList:function(){var t=this;Object(v.f)({},{commodity_second_type:!0}).then(function(e){if(e._items.length||t.$message.warning("没有分类信息，请配置商品种类"),t.typeList=e._items,t.commodity_id){var i=t.typeList.filter(function(e){return e.id===t.commodity_id});t.secondTypeList=i.length?i[0].commodity_second_type:[]}t.listLoading=!1})},changeType:function(t){var e=this.typeList.filter(function(e){return e.id===t});this.form.commodity_second=null,this.secondTypeList=e.length?e[0].commodity_second_type:[]},updateCommodityInfo:function(){var t=this;this.$refs.form.validate(function(e){if(!e)return!1;var i=m()({},t.form);i.stock&&(i.stock=Number(i.stock)),t.commodity_id?Object(b.e)(t.commodity_id,i).then(function(){t.$message.success("更新成功"),t.dialog.visible=!1,t.$emit("getCommodityList")}):Object(b.a)(i).then(function(){t.$message.success("创建成功"),t.dialog.visible=!1,t.$emit("getCommodityList")})})}}},L={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-dialog",{attrs:{title:t.dialog.title,visible:t.dialog.visible,width:"40%","close-on-press-escape":!1,"close-on-click-modal":!1},on:{"update:visible":function(e){return t.$set(t.dialog,"visible",e)}}},[i("el-row",{staticStyle:{"margin-bottom":"20px","margin-top":"-8px"}},[i("div",{staticClass:"div_title"},[i("span",[t._v("商品信息")])])]),t._v(" "),i("el-row",[i("el-col",{attrs:{span:21}},[i("el-form",{ref:"form",attrs:{model:t.form,rules:t.formRules,"label-width":"120px"}},[i("el-form-item",{attrs:{label:"名称:",prop:"name"}},[i("el-input",{attrs:{placeholder:"请输入名称"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"一级分类:",prop:"commodity_type"}},[i("el-select",{attrs:{placeholder:"请选择"},on:{change:t.changeType},model:{value:t.form.commodity_type,callback:function(e){t.$set(t.form,"commodity_type",e)},expression:"form.commodity_type"}},t._l(t.typeList,function(t){return i("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}),1)],1),t._v(" "),i("el-form-item",{attrs:{label:"二级分类:",prop:"commodity_second"}},[i("el-select",{attrs:{placeholder:"请选择"},model:{value:t.form.commodity_second,callback:function(e){t.$set(t.form,"commodity_second",e)},expression:"form.commodity_second"}},t._l(t.secondTypeList,function(t){return i("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}),1)],1),t._v(" "),i("el-form-item",{attrs:{label:"板块:",prop:"type"}},[i("el-select",{attrs:{placeholder:"请选择"},model:{value:t.form.type,callback:function(e){t.$set(t.form,"type",e)},expression:"form.type"}},t._l(t.commodityType,function(t){return i("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1)],1),t._v(" "),i("el-form-item",{attrs:{label:"库存:",prop:"stock"}},[i("el-input",{attrs:{type:"number"},model:{value:t.form.stock,callback:function(e){t.$set(t.form,"stock",e)},expression:"form.stock"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"描述:",prop:"desc_detail"}},[i("el-input",{attrs:{type:"textarea",autosize:{minRows:5}},model:{value:t.form.desc_detail,callback:function(e){t.$set(t.form,"desc_detail",e)},expression:"form.desc_detail"}})],1)],1)],1)],1),t._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(e){t.dialog.visible=!1}}},[t._v("取 消")]),t._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:t.updateCommodityInfo}},[t._v("确 定")])],1)],1)},staticRenderFns:[]};var k=i("C7Lr")(x,L,!1,function(t){i("WxIY")},"data-v-5e674aa6",null).exports,C={name:"InfoFilter",directives:{waves:p.a},components:{InfoDialog:k},data:function(){return{filter:{name:null,commodity_type:null,commodity_second:null,online:!0},price_info:null,price_type:null,typeList:[],typeSecondList:[]}},created:function(){this.getTypeList(),this.getSecondTypeList()},methods:{selectCommodity:function(){var t=m()({},this.filter);this.price_type&&(t[this.price_type]=this.price_info),t.offline=!t.online,delete t.online,console.log(t),this.$emit("filterCommodity",t)},toCommodityList:function(){this.$emit("getCommodityList")},createCommodityInfo:function(){this.$refs.infoDialog.showInfoDialog()},changeType:function(t){var e=this.typeList.filter(function(e){return e.id===t});this.filter.commodity_second=null,this.typeSecondList=e.length?e[0].commodity_second_type:[]},getTypeList:function(){var t=this;Object(v.f)({},{commodity_second_type:!0}).then(function(e){t.typeList=e._items})},getSecondTypeList:function(){var t=this;Object(v.e)({}).then(function(e){t.typeSecondList=e._items})}}},$={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-row",[i("el-col",{attrs:{span:24}},[i("el-input",{staticClass:"input-with-select",staticStyle:{width:"250px"},attrs:{placeholder:"请输入价格",clearable:""},model:{value:t.price_info,callback:function(e){t.price_info=e},expression:"price_info"}},[i("el-select",{attrs:{slot:"prepend",clearable:"",placeholder:"请选择会员"},slot:"prepend",model:{value:t.price_type,callback:function(e){t.price_type=e},expression:"price_type"}},[i("el-option",{attrs:{label:"普通会员价",value:"ordinary_price"}}),t._v(" "),i("el-option",{attrs:{label:"区代理价",value:"area_price"}}),t._v(" "),i("el-option",{attrs:{label:"总代理价",value:"general_price"}})],1)],1),t._v(" "),i("el-input",{staticStyle:{width:"150px"},attrs:{placeholder:"名称",clearable:""},model:{value:t.filter.name,callback:function(e){t.$set(t.filter,"name",e)},expression:"filter.name"}}),t._v(" "),i("el-select",{attrs:{clearable:"",placeholder:"一级分类"},on:{change:t.changeType},model:{value:t.filter.commodity_type,callback:function(e){t.$set(t.filter,"commodity_type",e)},expression:"filter.commodity_type"}},t._l(t.typeList,function(t){return i("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}),1),t._v(" "),i("el-select",{attrs:{clearable:"",placeholder:"二级分类"},model:{value:t.filter.commodity_second,callback:function(e){t.$set(t.filter,"commodity_second",e)},expression:"filter.commodity_second"}},t._l(t.typeSecondList,function(t){return i("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}),1),t._v(" "),i("el-checkbox",{staticStyle:{"margin-left":"10px"},model:{value:t.filter.online,callback:function(e){t.$set(t.filter,"online",e)},expression:"filter.online"}},[t._v("上线商品")]),t._v(" "),i("el-button",{directives:[{name:"waves",rawName:"v-waves"}],attrs:{type:"primary"},on:{click:t.selectCommodity}},[i("i",{staticClass:"el-icon-search"}),t._v(" "),i("span",[t._v("查 询")])]),t._v(" "),i("el-button",{directives:[{name:"waves",rawName:"v-waves"}],attrs:{type:"success"},on:{click:t.createCommodityInfo}},[i("i",{staticClass:"el-icon-plus"}),t._v(" "),i("span",[t._v("创 建")])])],1),t._v(" "),i("info-dialog",{ref:"infoDialog",on:{getCommodityList:t.toCommodityList}})],1)},staticRenderFns:[]},S=i("C7Lr")(C,$,!1,null,null,null).exports,D=i("lC5x"),A=i.n(D),j=i("J0Oq"),O=i.n(j),I=i("/Tkm"),T=i("0xDb"),z=i("Q0Ca"),F=i("vLgD");var R={name:"PriceDialog",directives:{waves:p.a},data:function(){return{dialog:{title:null,visible:!1},innerVisible:!1,commodity_id:null,specs:[],spec_id:null,listLoading:!0,form:{param:null,price:null},formRules:{param:[{required:!0,message:"请输入规格",trigger:"blur"}],price:[{validator:function(t,e,i){if(!e)return i(new Error("价格不能为空"));e<0?i(new Error("不能小于0")):i()},trigger:"blur"}]}}},methods:{showSpecDialog:function(t){var e=this;this.dialog.visible=!0,this.dialog.title="设置【"+(t.name||t.phone)+"】价格",this.$nextTick(function(){e.commodity_id=t.id,e.getSpecList()})},getSpecList:function(){var t=this,e={};this.commodity_id&&(e.commodity=this.commodity_id),function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return Object(F.a)({url:"/spec_info?where="+u()(t)+"&embedded="+u()(e)+"&sort="+i,method:"get"})}(e).then(function(e){t.specs=e._items.map(function(e){return t.$set(e,"visible",!1),e}),t.listLoading=!1})},deleteSpecInfo:function(t){var e=this;return O()(A.a.mark(function i(){return A.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,o=t.id,Object(F.a)({url:"/spec_info/"+o,method:"delete"});case 2:e.$message.success("删除成功"),e.$emit("getCommodityList"),e.getSpecList();case 5:case"end":return i.stop()}var o},i,e)}))()},editSpecDialog:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.innerVisible=!0,this.$nextTick(function(){t.$refs.form.clearValidate(),e?(t.form=h.a.pick(e,y()(t.form)),t.spec_id=e.id):(t.$refs.form.resetFields(),t.spec_id=null)})},updateSpecInfo:function(){var t=this;this.$refs.form.validate(function(e){if(!e)return!1;var i,o;t.spec_id?(i=t.spec_id,o=t.form,Object(F.a)({url:"/spec_info/"+i,method:"patch",data:o})).then(function(e){t.$message.success("更新成功"),t.$emit("getCommodityList"),t.getSpecList(),t.innerVisible=!1}):function(t){return Object(F.a)({url:"/spec_info",method:"post",data:t})}(m()({},t.form,{commodity:t.commodity_id})).then(function(e){t.$message.success("更新成功"),t.$emit("getCommodityList"),t.getSpecList(),t.innerVisible=!1})})}}},V={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-dialog",{attrs:{title:t.dialog.title,visible:t.dialog.visible,width:"50%"},on:{"update:visible":function(e){return t.$set(t.dialog,"visible",e)}}},[i("el-dialog",{attrs:{title:"创建规格金额",visible:t.innerVisible,"append-to-body":""},on:{"update:visible":function(e){t.innerVisible=e}}},[i("el-row",[i("el-col",{attrs:{span:21}},[i("el-form",{ref:"form",attrs:{model:t.form,rules:t.formRules,"label-width":"120px"}},[i("el-form-item",{staticStyle:{width:"400px"},attrs:{label:"规格:",prop:"param"}},[i("el-input",{model:{value:t.form.param,callback:function(e){t.$set(t.form,"param",e)},expression:"form.param"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"价格:",prop:"price"}},[i("el-input-number",{attrs:{precision:2,step:100},model:{value:t.form.price,callback:function(e){t.$set(t.form,"price",e)},expression:"form.price"}})],1),t._v(" "),i("el-form-item",[i("el-button",{on:{click:function(e){t.innerVisible=!1}}},[t._v("取 消")]),t._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:t.updateSpecInfo}},[t._v("确 定")])],1)],1)],1)],1)],1),t._v(" "),i("el-row",{staticStyle:{"margin-bottom":"20px","margin-top":"-8px"}},[i("div",{staticClass:"div_title"},[i("span",[t._v("规则信息")])])]),t._v(" "),i("el-row",[i("el-button",{directives:[{name:"waves",rawName:"v-waves"}],attrs:{type:"success"},on:{click:function(e){return t.editSpecDialog("")}}},[i("i",{staticClass:"el-icon-plus"}),t._v(" "),i("span",[t._v("创 建")])])],1),t._v(" "),i("el-row",[i("el-col",{attrs:{span:24}},[i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],ref:"table",attrs:{data:t.specs,border:"",fit:""}},[i("el-table-column",{attrs:{prop:"param",label:"规格",width:"150",align:"center"}}),t._v(" "),i("el-table-column",{attrs:{prop:"price",label:"价格",width:"150",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("div",{staticClass:"span-color"},[t._v(t._s("￥"+e.row.price))])]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"操作",align:"right"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-button",{attrs:{type:"text"},on:{click:function(i){return t.editSpecDialog(e.row)}}},[t._v("编辑")]),t._v(" "),i("el-popover",{attrs:{placement:"top",width:"160"},model:{value:e.row.visible,callback:function(i){t.$set(e.row,"visible",i)},expression:"scope.row.visible"}},[i("p",[t._v("确认删除规则？")]),t._v(" "),i("div",{staticStyle:{"text-align":"right",margin:"0"}},[i("el-button",{attrs:{size:"mini",plain:"",type:"info"},on:{click:function(t){e.row.visible=!1}}},[t._v("取消")]),t._v(" "),i("el-button",{attrs:{type:"primary",plain:"",size:"mini"},on:{click:function(i){return t.deleteSpecInfo(e.row)}}},[t._v("确定")])],1),t._v(" "),i("el-button",{attrs:{slot:"reference",type:"text"},slot:"reference"},[t._v("删除")])],1)]}}])})],1)],1)],1),t._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(e){t.dialog.visible=!1}}},[t._v("取 消")])],1)],1)},staticRenderFns:[]};var Q=i("C7Lr")(R,V,!1,function(t){i("5GBj")},"data-v-a190c8dc",null).exports;var q={name:"AttrDialog",directives:{waves:p.a},data:function(){return{dialog:{title:null,visible:!1},innerVisible:!1,commodity_id:null,attrs:[],attr_id:null,listLoading:!0,form:{attr_name:null,attr_value:null},formRules:{attr_name:[{required:!0,message:"请输入主属性名称",trigger:"blur"}],attr_value:[{required:!0,message:"请输入次属性名次",trigger:"blur"}]},spanArr:[]}},methods:{objectSpanMethod:function(t){t.row,t.column;var e=t.rowIndex;if(0===t.columnIndex){var i=this.spanArr[e];return{rowspan:i,colspan:i>0?1:0}}},getSpanArr:function(t){for(var e=0;e<t.length;e++)0===e?(this.spanArr.push(1),this.pos=0):t[e].attr_name===t[e-1].attr_name?(this.spanArr[this.pos]+=1,this.spanArr.push(0)):(this.spanArr.push(1),this.pos=e)},showAttrDialog:function(t){var e=this;this.dialog.visible=!0,this.dialog.title="设置【"+(t.name||t.phone)+"】属性",this.$nextTick(function(){e.commodity_id=t.id,e.getAttrList()})},getAttrList:function(){var t=this,e={};this.commodity_id&&(e.commodity=this.commodity_id);(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return Object(F.a)({url:"/commodity_attr?where="+u()(t)+"&embedded="+u()(e)+"&sort="+i,method:"get"})})(e,{},"attr_name").then(function(e){t.attrs=e._items.map(function(e){return t.$set(e,"visible",!1),e}),t.listLoading=!1,t.spanArr=[],t.getSpanArr(t.attrs)})},deleteAttrInfo:function(t){var e=this;return O()(A.a.mark(function i(){return A.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,o=t.id,Object(F.a)({url:"/commodity_attr/"+o,method:"delete"});case 2:e.$message.success("删除成功"),e.$emit("getCommodityList"),e.getAttrList();case 5:case"end":return i.stop()}var o},i,e)}))()},editAttrDialog:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.innerVisible=!0,this.$nextTick(function(){t.$refs.form.clearValidate(),e?(t.form=h.a.pick(e,y()(t.form)),t.attr_id=e.id):(t.$refs.form.resetFields(),t.attr_id=null)})},updateSpecInfo:function(){var t=this;this.$refs.form.validate(function(e){if(!e)return!1;var i=[],o=t.form.attr_value.split("\n"),n=!0,r=!1,l=void 0;try{for(var s,c=a()(o);!(n=(s=c.next()).done);n=!0){var m=s.value;i.push({attr_name:t.form.attr_name,attr_value:m})}}catch(t){r=!0,l=t}finally{try{!n&&c.return&&c.return()}finally{if(r)throw l}}t.attr_id?t.updateAttrList():t.createAttrList(i)})},updateAttrList:function(){var t=this;return O()(A.a.mark(function e(){return A.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i=t.attr_id,o=t.form,Object(F.a)({url:"/commodity_attr/"+i,method:"patch",data:o});case 2:t.$message.success("更新成功"),t.$emit("getCommodityList"),t.getAttrList(),t.innerVisible=!1;case 6:case"end":return e.stop()}var i,o},e,t)}))()},createAttrList:function(t){var e=this;return O()(A.a.mark(function i(){var o,n,r,l,s,c;return A.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:if(t.length){i.next=2;break}return i.abrupt("return",!1);case 2:o=!0,n=!1,r=void 0,i.prev=5,l=a()(t);case 7:if(o=(s=l.next()).done){i.next=14;break}return c=s.value,i.next=11,d=m()({},c,{commodity:e.commodity_id}),Object(F.a)({url:"/commodity_attr",method:"post",data:d});case 11:o=!0,i.next=7;break;case 14:i.next=20;break;case 16:i.prev=16,i.t0=i.catch(5),n=!0,r=i.t0;case 20:i.prev=20,i.prev=21,!o&&l.return&&l.return();case 23:if(i.prev=23,!n){i.next=26;break}throw r;case 26:return i.finish(23);case 27:return i.finish(20);case 28:e.$message.success("更新成功"),e.$emit("getCommodityList"),e.getAttrList(),e.innerVisible=!1;case 32:case"end":return i.stop()}var d},i,e,[[5,16,20,28],[21,,23,27]])}))()}}},E={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-dialog",{attrs:{title:t.dialog.title,visible:t.dialog.visible,width:"50%"},on:{"update:visible":function(e){return t.$set(t.dialog,"visible",e)}}},[i("el-dialog",{attrs:{title:"创建属性",visible:t.innerVisible,"append-to-body":""},on:{"update:visible":function(e){t.innerVisible=e}}},[i("el-row",[i("el-col",{attrs:{span:18}},[i("el-form",{ref:"form",attrs:{model:t.form,rules:t.formRules,"label-width":"120px"}},[i("el-form-item",{attrs:{label:"主属性:",prop:"attr_name"}},[i("el-input",{model:{value:t.form.attr_name,callback:function(e){t.$set(t.form,"attr_name",e)},expression:"form.attr_name"}})],1),t._v(" "),t.attr_id?i("el-form-item",{attrs:{label:"次属性:",prop:"attr_value"}},[i("el-input",{model:{value:t.form.attr_value,callback:function(e){t.$set(t.form,"attr_value",e)},expression:"form.attr_value"}})],1):i("el-form-item",{attrs:{label:"次属性:",prop:"attr_value"}},[i("el-input",{attrs:{type:"textarea",autosize:{minRows:5}},model:{value:t.form.attr_value,callback:function(e){t.$set(t.form,"attr_value",e)},expression:"form.attr_value"}})],1),t._v(" "),i("el-form-item",[i("el-button",{on:{click:function(e){t.innerVisible=!1}}},[t._v("取 消")]),t._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:t.updateSpecInfo}},[t._v("确 定")])],1)],1)],1)],1)],1),t._v(" "),i("el-row",{staticStyle:{"margin-bottom":"20px","margin-top":"-8px"}},[i("div",{staticClass:"div_title"},[i("span",[t._v("属性信息")])])]),t._v(" "),i("el-row",[i("el-button",{directives:[{name:"waves",rawName:"v-waves"}],attrs:{type:"success"},on:{click:function(e){return t.editAttrDialog("")}}},[i("i",{staticClass:"el-icon-plus"}),t._v(" "),i("span",[t._v("创 建")])])],1),t._v(" "),i("el-row",[i("el-col",{attrs:{span:24}},[i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],ref:"table",attrs:{data:t.attrs,border:"",fit:"","span-method":t.objectSpanMethod}},[i("el-table-column",{attrs:{prop:"attr_name",label:"主属性名称",width:"150",align:"center"}}),t._v(" "),i("el-table-column",{attrs:{prop:"attr_value",label:"次属性名称"}}),t._v(" "),i("el-table-column",{attrs:{label:"操作",align:"right"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-button",{attrs:{type:"text"},on:{click:function(i){return t.editAttrDialog(e.row)}}},[t._v("编辑")]),t._v(" "),i("el-popover",{attrs:{placement:"top",width:"160"},model:{value:e.row.visible,callback:function(i){t.$set(e.row,"visible",i)},expression:"scope.row.visible"}},[i("p",[t._v("确认删除规则？")]),t._v(" "),i("div",{staticStyle:{"text-align":"right",margin:"0"}},[i("el-button",{attrs:{size:"mini",plain:"",type:"info"},on:{click:function(t){e.row.visible=!1}}},[t._v("取消")]),t._v(" "),i("el-button",{attrs:{type:"primary",plain:"",size:"mini"},on:{click:function(i){return t.deleteAttrInfo(e.row)}}},[t._v("确定")])],1),t._v(" "),i("el-button",{attrs:{slot:"reference",type:"text"},slot:"reference"},[t._v("删除")])],1)]}}])})],1)],1)],1),t._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(e){t.dialog.visible=!1}}},[t._v("取 消")])],1)],1)},staticRenderFns:[]};var N=i("C7Lr")(q,E,!1,function(t){i("ENHR")},"data-v-c1fdb7b2",null).exports,P=i("iRfq"),G={name:"InfoTable",components:{TableFoot:I.a,InfoDialog:k,UploadFile:P.a,PriceDialog:Q,AttrDialog:N},filters:{dateFormat:z.dateFormat},props:{commodityList:{type:Array,required:!0},pageQuery:{type:Object,required:!0},total:{required:!0},listLoading:{required:!0,default:!0}},data:function(){return{selectedUsers:[],loading:this.listLoading}},watch:{listLoading:function(t){this.loading=t}},methods:{getEnumName:T.c,changeSize:function(t){this.pageQuery.max_results=t,this.$emit("getCommodityList")},changePage:function(t){this.pageQuery.page=t,this.$emit("getCommodityList")},setSelection:function(t){this.selectedUsers=Object(T.d)(t,"id")},selectionChange:function(t){this.$refs.tableFoot.selectionChange(t)},deleteCommodity:function(t){var e=this,i=h.a.isArray(t)?t:[t.id];this.$confirm("此操作将删商品, 是否继续?","提示",{type:"warning"}).then(function(){e.loading=!0,e.deleteCommodityList(i).then(function(){e.$emit("getCommodityList"),e.loading=!1,e.$message.success("删除成功")}).catch(function(){return e.loading=!1})}).catch(function(){return console.log("no deleted")})},deleteCommodityList:function(t){var e=this;return O()(A.a.mark(function i(){var o,n,r,l,s,c;return A.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:o=!0,n=!1,r=void 0,e.prev=3,l=a()(t);case 5:if(o=(s=l.next()).done){e.next=12;break}return c=s.value,e.next=9,Object(b.c)(c);case 9:o=!0,e.next=5;break;case 12:e.next=18;break;case 14:e.prev=14,e.t0=e.catch(3),n=!0,r=e.t0;case 18:e.prev=18,e.prev=19,!o&&l.return&&l.return();case 21:if(e.prev=21,!n){e.next=24;break}throw r;case 24:return e.finish(21);case 25:return e.finish(18);case 26:return e.abrupt("return",!0);case 27:case"end":return e.stop()}},i,e,[[3,14,18,26],[19,,21,25]])}))()},editCommodity:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.$refs.infoDialog.showInfoDialog(t)},editOff:function(t,e){var i=this;Object(b.e)(t,{offline:e}).then(function(t){i.$emit("getCommodityList"),i.$message.success("更新成功")})},toGetCommodityList:function(){this.$emit("getCommodityList")},showCommodityImg:function(t,e){var i="desc"===e;this.$refs.uploadFile.showUploadFileDialog(t,i)},showPrice:function(t){this.$refs.priceDialog.showSpecDialog(t)},showAttr:function(t){this.$refs.attrDialog.showAttrDialog(t)}}},J={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-row",[i("el-col",{attrs:{span:24}},[i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"table",attrs:{data:t.commodityList,border:"",fit:""},on:{"selection-change":t.selectionChange}},[i("el-table-column",{attrs:{type:"selection",width:"55",fixed:"",align:"center"}}),t._v(" "),i("el-table-column",{attrs:{prop:"name",label:"名称",sortable:"",width:"150"}}),t._v(" "),i("el-table-column",{attrs:{label:"状态",sortable:"",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.offline?i("el-tag",{attrs:{type:"warning"}},[t._v("已下线")]):i("el-tag",{attrs:{type:"success"}},[t._v("上线中")])]}}])}),t._v(" "),i("el-table-column",{attrs:{prop:"commodity_type",label:"一级分类",width:"100",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-tag",[t._v(t._s(e.row.commodity_type.name))])]}}])}),t._v(" "),i("el-table-column",{attrs:{prop:"commodity_second",label:"二级分类",width:"100",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-tag",[t._v(t._s(e.row.commodity_second.name))])]}}])}),t._v(" "),i("el-table-column",{attrs:{prop:"type",label:"版快",width:"100",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.type?i("span",[t._v(t._s(t.getEnumName(e.row.type)))]):t._e()]}}])}),t._v(" "),i("el-table-column",{attrs:{prop:"stock",label:"库存",width:"80"}}),t._v(" "),i("el-table-column",{attrs:{prop:"monthly_sales",label:"月销售额",width:"80"}}),t._v(" "),i("el-table-column",{attrs:{prop:"spec",label:"规则数"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",{staticClass:"span-color"},[t._v(t._s(e.row.spec.length))])]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"属性",width:"100",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-button",{attrs:{type:"text",size:"small"},on:{click:function(i){return t.showAttr(e.row)}}},[t._v("设置额外属性")])]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"操作",fixed:"right",align:"right",width:"190"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("div",[i("el-button",{attrs:{type:"text",size:"small"},on:{click:function(i){return t.showPrice(e.row)}}},[t._v("价格")]),t._v(" "),i("span",{staticClass:"text-explode"},[t._v("|")]),t._v(" "),i("el-button",{attrs:{type:"text",size:"small"},on:{click:function(i){return t.showCommodityImg(e.row,"")}}},[t._v("图片")]),t._v(" "),i("span",{staticClass:"text-explode"},[t._v("|")]),t._v(" "),i("el-button",{attrs:{type:"text",size:"small"},on:{click:function(i){return t.showCommodityImg(e.row,"desc")}}},[t._v("介绍")])],1),t._v(" "),i("div",[i("el-button",{attrs:{type:"text",size:"small"},on:{click:function(i){return t.editCommodity(e.row)}}},[t._v("编辑")]),t._v(" "),i("span",{staticClass:"text-explode"},[t._v("|")]),t._v(" "),e.row.offline?i("el-button",{attrs:{type:"text",size:"small"},on:{click:function(i){return t.editOff(e.row.id,!e.row.offline)}}},[t._v("上线\n            ")]):i("el-button",{attrs:{type:"text",size:"small"},on:{click:function(i){return t.editOff(e.row.id,!e.row.offline)}}},[t._v("下线\n            ")]),t._v(" "),i("span",{staticClass:"text-explode"},[t._v("|")]),t._v(" "),i("el-button",{attrs:{type:"text",size:"small"},on:{click:function(i){return t.deleteCommodity(e.row)}}},[t._v("删除")])],1)]}}])})],1),t._v(" "),i("table-foot",{ref:"tableFoot",attrs:{"data-length":t.commodityList.length},on:{setSelection:t.setSelection,clearSelection:function(e){return t.$refs.table.clearSelection()},toggleAllSelection:function(e){return t.$refs.table.toggleAllSelection()}}},[i("template",{slot:"foot"},[i("span",[i("el-button",{attrs:{type:"danger",icon:"el-icon-delete",disabled:!t.selectedUsers.length},on:{click:function(e){return t.deleteCommodity(t.selectedUsers)}}},[t._v("删 除")])],1)])],2)],1),t._v(" "),i("el-col",{staticStyle:{"margin-top":"10px"},attrs:{span:24}},[i("el-pagination",{attrs:{"current-page":t.pageQuery.page,"page-sizes":[10,20,30,40],"page-size":t.pageQuery.max_results,total:t.total,background:"",layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":t.changeSize,"current-change":t.changePage}})],1),t._v(" "),i("info-dialog",{ref:"infoDialog",on:{getCommodityList:t.toGetCommodityList}}),t._v(" "),i("upload-file",{ref:"uploadFile",on:{getCommodityList:t.toGetCommodityList}}),t._v(" "),i("price-dialog",{ref:"priceDialog",on:{getCommodityList:t.toGetCommodityList}}),t._v(" "),i("attr-dialog",{ref:"attrDialog",on:{getCommodityList:t.toGetCommodityList}})],1)},staticRenderFns:[]};var U=i("C7Lr")(G,J,!1,function(t){i("fJBf")},"data-v-4a6398ee",null).exports,B=i("Dvzh"),H={name:"index",components:{PanelTitle:f.a,InfoFilter:S,InfoTable:U},data:function(){return{listLoading:!0,commodityList:[],total:0,listQuery:{argsQuery:{offline:!1},pageQuery:{page:1,max_results:10}}}},created:function(){this.getCommodityList()},methods:{test:function(){var t={1:2},e={user:2,amount:500,number:30,commodity_info:u()(t),commodity:[1],spec:1};Object(B.a)(e)},getCommodityList:function(){var t=this,e=m()({},this.listQuery);Object(b.d)(e,{commodity_type:!0,commodity_second:!0,imgs:!0,spec:!0}).then(function(e){t.commodityList=e._items,t.total=e._meta.total,t.listLoading=!1})},filterCommodity:function(t){this.listQuery.pageQuery.page=1;var e={},i=!0,o=!1,r=void 0;try{for(var l,c=a()(n()(t));!(i=(l=c.next()).done);i=!0){var d=l.value,u=s()(d,2),f=u[0],p=u[1];(h.a.isBoolean(p)||p)&&(["name","ordinary_price","area_price","general_price"].includes(f)?e[f]='like("%25'+p+'%25")':e[f]=p)}}catch(t){o=!0,r=t}finally{try{!i&&c.return&&c.return()}finally{if(o)throw r}}this.listQuery.argsQuery=m()({},e),this.getCommodityList()}}},M={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("panel-title",{attrs:{title:"商品信息","is-line":""}}),t._v(" "),i("info-filter",{on:{filterCommodity:t.filterCommodity,getCommodityList:t.getCommodityList}}),t._v(" "),i("info-table",{attrs:{"page-query":t.listQuery.pageQuery,total:t.total,"commodity-list":t.commodityList,"list-loading":t.listLoading},on:{getCommodityList:t.getCommodityList}})],1)},staticRenderFns:[]};var Y=i("C7Lr")(H,M,!1,function(t){i("9fsD")},"data-v-6ed52c16",null);e.default=Y.exports},WxIY:function(t,e){},fJBf:function(t,e){},ifD2:function(t,e,i){"use strict";e.f=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return Object(r.a)({url:"/commodity_type?where="+n()(t)+"&embedded="+n()(e)+"&sort="+i,method:"get"})},e.b=function(t){return Object(r.a)({url:"/commodity_type",method:"post",data:t})},e.h=function(t,e){return Object(r.a)({url:"/commodity_type/"+t,method:"patch",data:e})},e.d=function(t){return Object(r.a)({url:"/commodity_type/"+t,method:"delete"})},e.e=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return Object(r.a)({url:"/commodity_second_type?where="+n()(t)+"&embedded="+n()(e)+"&sort="+i,method:"get"})},e.a=function(t){return Object(r.a)({url:"/commodity_second_type",method:"post",data:t})},e.g=function(t,e){return Object(r.a)({url:"/commodity_second_type/"+t,method:"patch",data:e})},e.c=function(t){return Object(r.a)({url:"/commodity_second_type/"+t,method:"delete"})};var o=i("3cXf"),n=i.n(o),r=i("vLgD")}});