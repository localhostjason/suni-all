webpackJsonp([4],{"+o/f":function(e,t){},G5SH:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=r("C/I2"),i=r("Q+Ik"),o=r.n(i),n=r("HzJ8"),a=r.n(n),s=r("KH7x"),f=r.n(s),u=r("ZLEe"),c=r.n(u),m=r("psq8"),d=r.n(m),p=r("3cXf"),_=r.n(p),v=r("vLgD");var g={data:function(){return{setting_id:null}},methods:{getInitForm:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.$nextTick(function(){if(e.$refs.form.clearValidate(),!t)return!1;e.form=d.a.pick(t,c()(e.form)),e.setting_id=t.id})},saveForm:function(){var e=this;this.$refs.form.validate(function(t){if(!t)return!1;var r,l,i={},n=!0,s=!1,u=void 0;try{for(var c,m=a()(o()(e.form));!(n=(c=m.next()).done);n=!0){var d=c.value,p=f()(d,2),_=p[0],g=p[1];try{i[_]=Number(g)}catch(e){i[_]=g}}}catch(e){s=!0,u=e}finally{try{!n&&m.return&&m.return()}finally{if(s)throw u}}(r=e.setting_id,l=i,Object(v.a)({url:"/user_profit/"+r,method:"patch",data:l})).then(function(){e.$message.success("更新成功")})})}}},b={name:"VipFrom",mixins:[g],data:function(){return{form:{discount:null,get_directly:null},rules:{discount:[{required:!0,message:"请输入耗材复购（折扣）",trigger:"blur"}],get_directly:[{required:!0,message:"请输入推广奖励",trigger:"blur"}]}}}},x={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"130px"}},[r("el-form-item",{attrs:{label:"耗材复购（折扣）:",prop:"discount"}},[r("el-input",{model:{value:e.form.discount,callback:function(t){e.$set(e.form,"discount",t)},expression:"form.discount"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"推广奖励:",prop:"get_directly"}},[r("el-input",{model:{value:e.form.get_directly,callback:function(t){e.$set(e.form,"get_directly",t)},expression:"form.get_directly"}})],1),e._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:e.saveForm}},[e._v("保 存")])],1)],1)},staticRenderFns:[]};var y=r("C7Lr")(b,x,!1,function(e){r("glF7")},"data-v-c6d72618",null).exports,h={name:"OfficialForm",mixins:[g],data:function(){return{form:{discount:null,get_directly:null,directly_profit:null,report_fee:null,office_num:null,team_num:null},rules:{discount:[{required:!0,message:"请输入耗材复购（折扣）",trigger:"blur"}],get_directly:[{required:!0,message:"请输入推广奖励",trigger:"blur"}],directly_profit:[{required:!0,message:"请输入直属复购提成",trigger:"blur"}],report_fee:[{required:!0,message:"请输入报单费",trigger:"blur"}],office_num:[{required:!0,message:"请输入官方人数",trigger:"blur"}],team_num:[{required:!0,message:"请输入团队人数",trigger:"blur"}]}}}},F={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"130px"}},[r("el-form-item",{attrs:{label:"耗材复购（折扣）:",prop:"discount"}},[r("el-input",{model:{value:e.form.discount,callback:function(t){e.$set(e.form,"discount",t)},expression:"form.discount"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"推广奖励:",prop:"get_directly"}},[r("el-input",{model:{value:e.form.get_directly,callback:function(t){e.$set(e.form,"get_directly",t)},expression:"form.get_directly"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"直属复购提成:",prop:"directly_profit"}},[r("el-input",{model:{value:e.form.directly_profit,callback:function(t){e.$set(e.form,"directly_profit",t)},expression:"form.directly_profit"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"报单费:",prop:"report_fee"}},[r("el-input",{model:{value:e.form.report_fee,callback:function(t){e.$set(e.form,"report_fee",t)},expression:"form.report_fee"}}),e._v(" "),r("span",{staticClass:"text-warning",staticStyle:{"font-size":"12px"}},[e._v("注: 当直属同级之后,不生效")])],1),e._v(" "),r("div",{staticClass:"top-line"}),e._v(" "),r("h4",[e._v("晋升条件 （官方升级董事）")]),e._v(" "),r("el-form-item",{attrs:{label:"下级官方人数:",prop:"office_num"}},[r("el-input",{model:{value:e.form.office_num,callback:function(t){e.$set(e.form,"office_num",t)},expression:"form.office_num"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"总团队人数:",prop:"team_num"}},[r("el-input",{model:{value:e.form.team_num,callback:function(t){e.$set(e.form,"team_num",t)},expression:"form.team_num"}})],1),e._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:e.saveForm}},[e._v("保 存")])],1)],1)},staticRenderFns:[]};var $=r("C7Lr")(h,F,!1,function(e){r("t6/K")},"data-v-95115c9e",null).exports,k={name:"DirectorForm",mixins:[g],data:function(){return{form:{discount:null,get_directly:null,gultivation_fee:null,extra_gultivation_fee:null,report_fee:null},rules:{discount:[{required:!0,message:"请输入耗材复购（折扣）",trigger:"blur"}],get_directly:[{required:!0,message:"请输入推广奖励",trigger:"blur"}],gultivation_fee:[{required:!0,message:"请输入培育奖励",trigger:"blur"}],extra_gultivation_fee:[{required:!0,message:"请输入直属董事培育奖",trigger:"blur"}],report_fee:[{required:!0,message:"请输入报单费",trigger:"blur"}]}}}},C={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"130px"}},[r("el-form-item",{attrs:{label:"耗材复购（折扣）:",prop:"discount"}},[r("el-input",{model:{value:e.form.discount,callback:function(t){e.$set(e.form,"discount",t)},expression:"form.discount"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"推广奖励:",prop:"get_directly"}},[r("el-input",{model:{value:e.form.get_directly,callback:function(t){e.$set(e.form,"get_directly",t)},expression:"form.get_directly"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"报单费:",prop:"report_fee"}},[r("el-input",{model:{value:e.form.report_fee,callback:function(t){e.$set(e.form,"report_fee",t)},expression:"form.report_fee"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"培育奖励:",prop:"gultivation_fee"}},[r("el-input",{model:{value:e.form.gultivation_fee,callback:function(t){e.$set(e.form,"gultivation_fee",t)},expression:"form.gultivation_fee"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"直属董事培育奖:",prop:"extra_gultivation_fee"}},[r("el-input",{model:{value:e.form.extra_gultivation_fee,callback:function(t){e.$set(e.form,"extra_gultivation_fee",t)},expression:"form.extra_gultivation_fee"}})],1),e._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:e.saveForm}},[e._v("保 存")])],1)],1)},staticRenderFns:[]};var q=r("C7Lr")(k,C,!1,function(e){r("hH7R")},"data-v-542e4836",null).exports,I={name:"ShareholderForm",mixins:[g],data:function(){return{form:{discount:null,get_directly:null,gultivation_fee:null,report_fee:null},rules:{discount:[{required:!0,message:"请输入耗材复购（折扣）",trigger:"blur"}],get_directly:[{required:!0,message:"请输入推广奖励",trigger:"blur"}],report_fee:[{required:!0,message:"请输入报单费",trigger:"blur"}],gultivation_fee:[{required:!0,message:"请输入培育奖励",trigger:"blur"}]}}}},w={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"130px"}},[r("el-form-item",{attrs:{label:"耗材复购（折扣）:",prop:"discount"}},[r("el-input",{model:{value:e.form.discount,callback:function(t){e.$set(e.form,"discount",t)},expression:"form.discount"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"推广奖励:",prop:"get_directly"}},[r("el-input",{model:{value:e.form.get_directly,callback:function(t){e.$set(e.form,"get_directly",t)},expression:"form.get_directly"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"报单费:",prop:"report_fee"}},[r("el-input",{model:{value:e.form.report_fee,callback:function(t){e.$set(e.form,"report_fee",t)},expression:"form.report_fee"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"培育奖励:",prop:"gultivation_fee"}},[r("el-input",{model:{value:e.form.gultivation_fee,callback:function(t){e.$set(e.form,"gultivation_fee",t)},expression:"form.gultivation_fee"}})],1),e._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:e.saveForm}},[e._v("保 存")])],1)],1)},staticRenderFns:[]};var S=r("C7Lr")(I,w,!1,function(e){r("aIxP")},"data-v-c44aa2c8",null).exports,L={name:"AreaForm",mixins:[g],data:function(){return{form:{discount:null,get_directly:null,report_fee:null,directly_profit:null},rules:{discount:[{required:!0,message:"请输入耗材复购（折扣）",trigger:"blur"}],get_directly:[{required:!0,message:"请输入推广奖励",trigger:"blur"}]}}}},R={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"130px"}},[r("el-form-item",{attrs:{label:"耗材复购（折扣）:",prop:"discount"}},[r("el-input",{model:{value:e.form.discount,callback:function(t){e.$set(e.form,"discount",t)},expression:"form.discount"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"推广奖励:",prop:"get_directly"}},[r("el-input",{model:{value:e.form.get_directly,callback:function(t){e.$set(e.form,"get_directly",t)},expression:"form.get_directly"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"直属复购提成:",prop:"directly_profit"}},[r("el-input",{model:{value:e.form.directly_profit,callback:function(t){e.$set(e.form,"directly_profit",t)},expression:"form.directly_profit"}}),e._v(" "),r("span",{staticClass:"text-warning",staticStyle:{"font-size":"12px"}},[e._v("注: 直属上级升为官方,才获利")])],1),e._v(" "),r("el-form-item",{attrs:{label:"新入代理奖励:",prop:"report_fee"}},[r("el-input",{model:{value:e.form.report_fee,callback:function(t){e.$set(e.form,"report_fee",t)},expression:"form.report_fee"}})],1),e._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:e.saveForm}},[e._v("保 存")])],1)],1)},staticRenderFns:[]};var E=r("C7Lr")(L,R,!1,function(e){r("+o/f")},"data-v-6d7180ee",null).exports,H={name:"index",components:{PanelTitle:l.a,VipFrom:y,OfficialForm:$,DirectorForm:q,ShareholderForm:S,AreaForm:E},data:function(){return{isLine:!1}},created:function(){this.getSettingInfo()},methods:{getSettingInfo:function(){var e=this;(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return Object(v.a)({url:"/user_profit?where="+_()(e)+"&embedded="+_()(t)+"&sort="+r,method:"get"})})().then(function(t){var r=t._items,l=r.filter(function(e){return"vip_user"===e.type}),i=r.filter(function(e){return"official_user"===e.type}),o=r.filter(function(e){return"director"===e.type}),n=r.filter(function(e){return"shareholder"===e.type}),a=r.filter(function(e){return"area_user"===e.type});e.$refs.vipForm.getInitForm(l.length?l[0]:null),e.$refs.officialFrom.getInitForm(i.length?i[0]:null),e.$refs.directorForm.getInitForm(o.length?o[0]:null),e.$refs.shareholderForm.getInitForm(n.length?n[0]:null),e.$refs.areaFrom.getInitForm(a.length?a[0]:null)})}}},O={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("panel-title",{attrs:{title:"获利设置","is-line":e.isLine}}),e._v(" "),r("el-row",{staticStyle:{"margin-top":"10px"},attrs:{gutter:20}},[r("el-col",{attrs:{span:16}},[r("el-col",{attrs:{span:12}},[r("el-card",{staticClass:"box-card"},[r("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[r("span",[e._v("VIP用户获利设置")])]),e._v(" "),r("div",{staticClass:"text item"},[r("vip-from",{ref:"vipForm"})],1)])],1),e._v(" "),r("el-col",{attrs:{span:12}},[r("el-card",{staticClass:"box-card"},[r("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[r("span",[e._v("董事获利设置")])]),e._v(" "),r("div",{staticClass:"text item"},[r("director-form",{ref:"directorForm"})],1)])],1),e._v(" "),r("el-col",{staticStyle:{"margin-top":"20px"},attrs:{span:12}},[r("el-card",{staticClass:"box-card"},[r("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[r("span",[e._v("股东获利设置")])]),e._v(" "),r("div",{staticClass:"text item"},[r("shareholder-form",{ref:"shareholderForm"})],1)])],1),e._v(" "),r("el-col",{staticStyle:{"margin-top":"20px"},attrs:{span:12}},[r("el-card",{staticClass:"box-card"},[r("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[r("span",[e._v("区代理获利设置")])]),e._v(" "),r("div",{staticClass:"text item"},[r("area-form",{ref:"areaFrom"})],1)])],1)],1),e._v(" "),r("el-col",{attrs:{span:8}},[r("el-card",{staticClass:"box-card",staticStyle:{height:"890px"}},[r("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[r("span",[e._v("官方获利设置")])]),e._v(" "),r("div",{staticClass:"text item"},[r("official-form",{ref:"officialFrom"})],1)])],1)],1)],1)},staticRenderFns:[]};var P=r("C7Lr")(H,O,!1,function(e){r("pWZ/")},null,null);t.default=P.exports},aIxP:function(e,t){},glF7:function(e,t){},hH7R:function(e,t){},"pWZ/":function(e,t){},"t6/K":function(e,t){}});