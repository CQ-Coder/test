webpackJsonp([2],{C0bv:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var l={data:function(){return{status:0,flag:!0,options:[{value:"001",label:"教育"},{value:"002",label:"医疗"},{value:"003",label:"金融"},{value:"004",label:"IT"},{value:"005",label:"政府"}],value:"",orgOptions:[{value:"001",label:"中学"}],orgValue:"",addrOptions:[],props:{value:"label",children:"cities"},sizeForm2:{resource:"0"},ruleForm2:{industry:"",orgType:"",orgCode:"",orgName:"",address:"",province:[],phone:"",lxrName:""},rules2:{industry:[{required:!0,message:"请选择行业",trigger:"change"}],orgType:[{required:!0,message:"请选择组织类型",trigger:"change"}],orgCode:[{required:!0,message:"请选择组织机构代码",trigger:"blur"}],orgName:[{required:!0,message:"请选择组织机构名称",trigger:"blur"}],province:[{required:!0,message:"请选择省市区",trigger:"change"}],address:[{required:!0,message:"请填写地区",trigger:"change"}],phone:[{validator:function(e,r,t){return r.match(/\S/)?r.match(/^((\+86\-?)|(\(\+86\)))?1[34578][0-9]{9}$/)?t():t(new Error("请填写正确的手机号码")):t(new Error("手机号码不能为空"))},trigger:"blur"}],lxrName:[{validator:function(e,r,t){return r.match(/\S/)?r.match(/^[\u9fa5a-zA-Z0-9\-\_\\()]{4,20}$/)?t():t(new Error("4-20个字符，支持文字、英文（区分大小写），支持数字“_” “-”、()的组合")):t(new Error("联系人不能为空"))},trigger:"blur"}]}}},methods:{getVal:function(e){console.log(e)},changeHandler:function(e){this.status=parseInt(e),this.$refs.ruleForm2.resetFields(),this.flag=0!=e},register:function(e){this.$refs[e].validate(function(e){if(console.log("valid==> ",e),!e)return console.log("error submit!!"),!1;alert("submit!")})},handleItemChange:function(e){var r=this;setTimeout(function(t){e.indexOf("江苏")>-1&&!r.addrOptions[0].cities.length?r.addrOptions[0].cities=[{label:"南京"}]:e.indexOf("浙江")>-1&&!r.addrOptions[1].cities.length&&(r.addrOptions[1].cities=[{label:"杭州"}])},300)}},created:function(){this.addrOptions=this.CityInfo},mounted:function(){},beforeRouteEnter:function(e,r,t){t()},beforeRouteUpdate:function(e,r,t){t()},beforeRouteLeave:function(e,r,t){t()}},o={render:function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("el-row",{staticClass:" stepSec container",attrs:{gutter:20}},[t("el-col",{attrs:{span:12,offset:7}},[t("el-main",[t("div",[t("el-form",{ref:"sizeForm2",staticClass:"demo-ruleForm",attrs:{model:e.sizeForm2,"status-icon":"","label-width":"100px"}},[t("el-form-item",{attrs:{label:""}},[t("el-radio-group",{attrs:{size:"medium"},on:{change:e.changeHandler},model:{value:e.sizeForm2.resource,callback:function(r){e.$set(e.sizeForm2,"resource",r)},expression:"sizeForm2.resource"}},[t("el-radio",{attrs:{label:"0"}},[e._v("个人注册")]),e._v(" "),t("el-radio",{attrs:{label:"1"}},[e._v("组织机构注册")])],1)],1)],1)],1),e._v(" "),t("el-form",{ref:"ruleForm2",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm2,"status-icon":"",rules:e.rules2,"label-width":"100px"}},[t("el-form-item",{attrs:{label:"行业",prop:"industry"}},[t("el-select",{attrs:{placeholder:"请选择行业"},model:{value:e.ruleForm2.industry,callback:function(r){e.$set(e.ruleForm2,"industry",r)},expression:"ruleForm2.industry"}},e._l(e.options,function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1),e._v(" "),1==e.status?[t("el-form-item",{attrs:{label:"组织机构类型",prop:"orgType"}},[t("el-select",{attrs:{placeholder:"请选择组织机构类型"},model:{value:e.ruleForm2.orgType,callback:function(r){e.$set(e.ruleForm2,"orgType",r)},expression:"ruleForm2.orgType"}},e._l(e.orgOptions,function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1),e._v(" "),t("el-form-item",{attrs:{label:"机构名称",prop:"orgName"}},[t("el-input",{staticClass:"cl-input",attrs:{type:"text","auto-complete":"off"},model:{value:e.ruleForm2.orgName,callback:function(r){e.$set(e.ruleForm2,"orgName",r)},expression:"ruleForm2.orgName"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"机构代码",prop:"orgCode"}},[t("el-input",{staticClass:"cl-input",attrs:{type:"text","auto-complete":"off"},model:{value:e.ruleForm2.orgCode,callback:function(r){e.$set(e.ruleForm2,"orgCode",r)},expression:"ruleForm2.orgCode"}})],1)]:e._e(),e._v(" "),t("el-form-item",{attrs:{label:"地址",prop:"province"}},[t("el-cascader",{attrs:{options:e.addrOptions},on:{change:e.getVal},model:{value:e.ruleForm2.province,callback:function(r){e.$set(e.ruleForm2,"province",r)},expression:"ruleForm2.province"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"",prop:"address"}},[t("el-input",{staticClass:"fl cl-input ml30",attrs:{type:"text","auto-complete":"off",placeholder:"请填入街道地址"},model:{value:e.ruleForm2.address,callback:function(r){e.$set(e.ruleForm2,"address",r)},expression:"ruleForm2.address"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"联系电话",prop:"phone"}},[t("el-input",{staticClass:"cl-input",attrs:{type:"text","auto-complete":"off"},model:{value:e.ruleForm2.phone,callback:function(r){e.$set(e.ruleForm2,"phone",r)},expression:"ruleForm2.phone"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"联络人姓名",prop:"lxrName"}},[t("el-input",{staticClass:"cl-input",attrs:{type:"text","auto-complete":"off"},model:{value:e.ruleForm2.lxrName,callback:function(r){e.$set(e.ruleForm2,"lxrName",r)},expression:"ruleForm2.lxrName"}})],1),e._v(" "),t("el-form-item",[t("el-button",{staticClass:"btn0",attrs:{type:"primary"},on:{click:function(r){e.register("ruleForm2")}}},[e._v("注 册")])],1)],2)],1)],1)],1)},staticRenderFns:[]},a=t("VU/8")(l,o,!1,null,null,null);r.default=a.exports}});
//# sourceMappingURL=2.e6a8fc6bb2b02a90c8f8.js.map