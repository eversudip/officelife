(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{ADtQ:function(t,e,a){"use strict";a.r(e);var r=a("MkgX"),n={components:{Layout:a("+SZM").a,MyTeamWorklogs:r.default},props:{company:{type:Object,default:null},employee:{type:Object,default:null},teams:{type:Array,default:null},worklogDates:{type:Array,default:null},worklogEntries:{type:Array,default:null},currentDate:{type:String,default:null},currentTeam:{type:Number,default:null},notifications:{type:Array,default:null},ownerPermissionLevel:{type:Number,default:0}},methods:{}},s=(a("wzID"),a("KHd+")),o=Object(s.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("layout",{attrs:{title:"Home",notifications:t.notifications}},[a("div",{staticClass:"ph2 ph0-ns"},[a("div",{staticClass:"cf mt4 mw7 center"},[a("h2",{staticClass:"tc fw5"},[t._v("\n        "+t._s(t.company.name)+"\n      ")])]),t._v(" "),a("div",{staticClass:"cf mw7 center br3 mb5 tc"},[a("div",{staticClass:"cf dib btn-group"},[a("inertia-link",{staticClass:"f6 fl ph3 pv2 dib pointer",class:{selected:"me"==t.$page.auth.user.default_dashboard_view},attrs:{href:"/"+t.company.id+"/dashboard/me"}},[t._v("\n          Me\n        ")]),t._v(" "),a("inertia-link",{staticClass:"f6 fl ph3 pv2 dib pointer",class:{selected:"team"==t.$page.auth.user.default_dashboard_view},attrs:{href:"/"+t.company.id+"/dashboard/team","data-cy":"dashboard-team-tab"}},[t._v("\n          My team\n        ")]),t._v(" "),a("inertia-link",{staticClass:"f6 fl ph3 pv2 dib pointer",class:{selected:"company"==t.$page.auth.user.default_dashboard_view},attrs:{href:"/"+t.company.id+"/dashboard/company","data-cy":"dashboard-company-tab"}},[t._v("\n          My company\n        ")]),t._v(" "),a("inertia-link",{staticClass:"f6 fl ph3 pv2 dib pointer",class:{selected:"hr"==t.$page.auth.user.default_dashboard_view},attrs:{href:"/"+t.company.id+"/dashboard/hr","data-cy":"dashboard-hr-tab"}},[t._v("\n          HR area\n        ")])],1)]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.teams.length>1,expression:"teams.length > 1"}],staticClass:"cf mw7 center mb3"},[a("ul",{staticClass:"list mt0 mb3 pa0 center"},[a("li",{staticClass:"di mr2 black-30"},[t._v("\n          "+t._s(t.$t("dashboard.team_viewing"))+"\n        ")]),t._v(" "),t._l(t.teams,(function(e){return a("li",{key:e.id,staticClass:"di team-item pa2 br2 pointer",class:{selected:t.currentTeam==e.id},attrs:{"data-cy":"team-selector-"+e.id}},[a("inertia-link",{attrs:{href:"/"+t.$page.auth.company.id+"/dashboard/team/"+e.id}},[t._v("\n            "+t._s(e.name)+"\n          ")])],1)}))],2)]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:0==t.teams.length,expression:"teams.length == 0"}],staticClass:"cf mw7 center br3 mb3 bg-white box"},[a("div",{staticClass:"pa3 tc"},[t._v("\n        "+t._s(t.$t("dashboard.team_no_team_yet"))+"\n      ")])]),t._v(" "),a("my-team-worklogs",{attrs:{teams:t.teams,"worklog-dates":t.worklogDates,"worklog-entries":t.worklogEntries,"current-team":t.currentTeam,"current-date":t.currentDate,company:t.company}}),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:0!=t.teams.length,expression:"teams.length != 0"}],staticClass:"cf mt4 mw7 center br3 mb3 bg-white box"},[a("div",{staticClass:"pa3"},[a("h2",[t._v("Team")]),t._v(" "),a("ul",[a("li",[t._v("team agenda")]),t._v(" "),a("li",[t._v("anniversaires")]),t._v(" "),a("li",[t._v("latest news")]),t._v(" "),a("li",[t._v("view who is at work or from home")]),t._v(" "),a("li",[t._v("view team activities")]),t._v(" "),a("li",[t._v("managers: view direct reports")]),t._v(" "),a("li",[t._v("manager: view time off requests")]),t._v(" "),a("li",[t._v("manager: view morale")]),t._v(" "),a("li",[t._v("manager: expense approval")]),t._v(" "),a("li",[t._v("manager: one on one")]),t._v(" "),a("li",[t._v("revue 360 de son boss ou d'employées")]),t._v(" "),a("li",[t._v("gérer les renouvellements de contrats des équipes temporaires")]),t._v(" "),a("li",[t._v('page de "office"')])])])]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:0!=t.teams.length,expression:"teams.length != 0"}],staticClass:"cf mt4 mw7 center br3 mb3 bg-white box"},[a("div",{staticClass:"pa3"},[a("h2",[t._v("Me")]),t._v(" "),a("ul",[a("li",[t._v("View holidays")]),t._v(" "),a("li",[t._v("view activities")]),t._v(" "),a("li",[t._v("Book time off")]),t._v(" "),a("li",[t._v("Log morale")]),t._v(" "),a("li",[t._v("Log an expense")]),t._v(" "),a("li",[t._v("View one on ones")]),t._v(" "),a("li",[t._v("View all my tasks")])])])])],1)])}),[],!1,null,"3b4c69e2",null);e.default=o.exports},IrLC:function(t,e,a){(t.exports=a("I1BE")(!1)).push([t.i,".worklog-item[data-v-a37065a8] {\n  padding-left: 28px;\n  padding-top: 6px;\n  padding-right: 10px;\n  padding-bottom: 6px;\n  border: 1px solid transparent;\n}\n.worklog-item.selected[data-v-a37065a8] {\n  background-color: #fffaf5;\n  border: 1px solid #e6e6e6;\n}\n.worklog-item.future[data-v-a37065a8] {\n  color: #9e9e9e;\n}\n.worklog-item.future .dot[data-v-a37065a8] {\n  background-color: #9e9e9e;\n}\n.worklog-item.current[data-v-a37065a8] {\n  font-weight: 500;\n}\n.dot[data-v-a37065a8] {\n  background-color: #ff6d67;\n  height: 13px;\n  width: 13px;\n  left: 9px;\n  top: 18px;\n}\n@media (max-width: 480px) {\n.dot[data-v-a37065a8] {\n    left: -4px;\n    top: 1px;\n    position: relative;\n}\n}\n.dot.yellow[data-v-a37065a8] {\n  background-color: #ffa634;\n}\n.dot.green[data-v-a37065a8] {\n  background-color: #34c08f;\n}\n.content[data-v-a37065a8] {\n  background-color: #f3f9fc;\n  padding: 1px 10px;\n}\n.worklog-entry[data-v-a37065a8]:not(:first-child) {\n  margin-top: 25px;\n}",""])},MkgX:function(t,e,a){"use strict";a.r(e);var r={props:{company:{type:Object,default:null},teams:{type:Array,default:function(){return{}}},worklogDates:{type:Array,default:function(){return{}}},worklogEntries:{type:Array,default:function(){return{}}},currentDate:{type:String,default:null},currentTeam:{type:Number,default:null}},data:function(){return{updatedWorklogEntries:null,updatedCurrentDate:null,currentWorklogDate:{},form:{errors:[]}}},created:function(){this.updatedWorklogEntries=this.worklogEntries,this.currentWorklogDate=this.worklogDates.filter((function(t){return"current"==t.status}))[0],void 0===this.currentWorklogDate&&(this.currentWorklogDate=this.worklogDates[this.worklogDates.length-1]),this.load(this.currentWorklogDate)},methods:{load:function(t){var e=this;axios.get("/"+this.company.id+"/dashboard/team/"+this.currentTeam+"/"+t.friendlyDate).then((function(a){e.updatedWorklogEntries=a.data.worklogEntries,e.updatedCurrentDate=a.data.currentDate,e.currentWorklogDate=t})).catch((function(t){e.form.errors=_.flatten(_.toArray(t.response.data))}))}}},n=(a("kbyK"),a("KHd+")),s=Object(n.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"show",rawName:"v-show",value:0!=t.teams.length,expression:"teams.length != 0"}],staticClass:"cf mw7 center br3 mb3 bg-white box"},[a("div",{staticClass:"pa3"},[a("h2",{staticClass:"mt0 fw5 f4"},[t._v("\n      🔨 "+t._s(t.$t("dashboard.team_worklog_title"))+"\n    ")]),t._v(" "),a("div",{staticClass:"flex-ns justify-around pa0 tc mt4 mb3 bb bb-gray pb3"},t._l(t.worklogDates,(function(e){return a("div",{key:e.friendlyDate,staticClass:"dib-ns worklog-item relative pointer br2 db",class:[{selected:e==t.currentWorklogDate},e.status],on:{click:function(a){return a.preventDefault(),t.load(e)}}},[a("span",{staticClass:"dot br-100 dib absolute",class:e.completionRate}),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.friendlyDate==t.currentDate,expression:"worklogDate.friendlyDate == currentDate"}],staticClass:"db-ns dib mb1 f6"},[t._v("\n          "+t._s(t.$t("dashboard.team_worklog_today"))+"\n        ")]),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.friendlyDate!=t.currentDate,expression:"worklogDate.friendlyDate != currentDate"}],staticClass:"db-ns dib mb1 f6"},[t._v("\n          "+t._s(e.day)+"\n        ")]),t._v(" "),a("span",{staticClass:"db0-ns f7 mb1 dib"},[t._v("\n          "+t._s(e.date)+"\n        ")])])})),0),t._v(" "),a("p",{staticClass:"f6 mt0 mb3"},[t._v("\n      "+t._s(t.$t("dashboard.team_worklog_stat"))+" "),a("span",{class:t.currentWorklogDate.completionRate},[t._v("\n        "+t._s(t.currentWorklogDate.numberOfEmployeesWhoHaveLoggedWorklogs)+"/"+t._s(t.currentWorklogDate.numberOfEmployeesInTeam)+"\n      ")])]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:0==t.updatedWorklogEntries.length,expression:"updatedWorklogEntries.length == 0"}],staticClass:"tc mt2"},[t._v("\n      😢 "+t._s(t.$t("dashboard.team_worklog_blank"))+"\n    ")]),t._v(" "),t._l(t.updatedWorklogEntries,(function(e){return a("div",{key:e.id,staticClass:"worklog-entry bb-gray"},[a("small-name-and-avatar",{attrs:{name:e.name,avatar:e.avatar}}),t._v(" "),a("div",{staticClass:"lh-copy content mt2 br3",domProps:{innerHTML:t._s(e.content)}})],1)}))],2)])}),[],!1,null,"a37065a8",null);e.default=s.exports},"Z+XQ":function(t,e,a){(t.exports=a("I1BE")(!1)).push([t.i,".team-item[data-v-3b4c69e2] {\n  border-width: 1px;\n  border-color: transparent;\n}\n.team-item.selected[data-v-3b4c69e2] {\n  background-color: #e1effd;\n  color: #3682df;\n}\n.team-item[data-v-3b4c69e2]:not(:last-child) {\n  margin-right: 15px;\n}",""])},kbyK:function(t,e,a){"use strict";var r=a("mB3C");a.n(r).a},mB3C:function(t,e,a){var r=a("IrLC");"string"==typeof r&&(r=[[t.i,r,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(r,n);r.locals&&(t.exports=r.locals)},mOUi:function(t,e,a){var r=a("Z+XQ");"string"==typeof r&&(r=[[t.i,r,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(r,n);r.locals&&(t.exports=r.locals)},wzID:function(t,e,a){"use strict";var r=a("mOUi");a.n(r).a}}]);
//# sourceMappingURL=13.js.map?id=4fa549d3b172ec57218a