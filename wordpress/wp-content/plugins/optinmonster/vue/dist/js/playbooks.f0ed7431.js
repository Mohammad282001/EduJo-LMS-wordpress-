"use strict";(self["webpackChunkoptinmonster_wordpress_plugin_vue_app"]=self["webpackChunkoptinmonster_wordpress_plugin_vue_app"]||[]).push([[757],{30654:function(t,e,s){s.r(e),s.d(e,{default:function(){return h}});var a=function(){var t=this,e=t._self._c;return t.reachedCampaignLimit?e("templates-limit-exceeded",{attrs:{"is-playbooks":!0}}):e("core-page",[e("div",{staticClass:"playbooks-page-wrapper dashboard-wrapper",class:{previewing:!1}},[e("common-page-tabnav",{attrs:{current:"playbooks",tabs:t.tabs}}),t.alerts.length?e("div",{staticClass:"container",staticStyle:{margin:"46px auto 40px"}},[e("core-alerts",{attrs:{alerts:t.alerts}})],1):t._e(),e("div",{staticClass:"playbooks-content"},[e("playbooks-intro"),t.isLoading?e("core-loading",{staticClass:"playbooks-loading"}):e("div",[t.hasRecommendations?e("playbooks-recommendations"):t._e(),e("playbooks-table")],1)],1),e("playbooks-upgrade-modal",[e("core-upgrade-button",{staticClass:"button primary",staticStyle:{margin:"0 0 15px"},attrs:{slot:"button","utm-medium":"Playbooks",target:"_blank"},slot:"button"},[t._v(" Unlock Access Now ")])],1),e("campaigns-modal-create-campaign",{attrs:{"from-playbook":!0}}),e("templates-modal-not-connected")],1)])},o=[],i=(s(28743),s(95353)),n=s(34185),l=s(89116),r=s(89138),p=s(96709),c={mixins:[n.V,p.X,r.I,l.a],computed:{...(0,i.aH)(["alerts"]),...(0,i.aH)("playbooks",["playbooks","previewing","filterOptions","selectedPlaybook"]),...(0,i.L8)(["connected","reachedCampaignLimit"]),...(0,i.L8)("playbooks",["hasRecommendations"]),isLoading(){return this.$store.getters.isLoading(["playbooks","rules","filterOptions"])},unavailableRules(){return this.selectedPlaybook.rules.filter((t=>!this.ruleAvailable(t)))||[]}},watch:{selectedPlaybook(t){t&&this.handleUsePlaybook()}},created(){this.$store.dispatch("campaigns/fetchRulesetData").then((t=>{let e=t.rules;e.push(...t.bigCommerceRules),e.push(...t.eddRules),e.push(...t.shopifyRules),e.push(...t.wooCommerceRules),this.setRules(e)})).catch((()=>{})),this.filterOptions.length||this.$store.dispatch("templates/fetchFilterOptions").then((t=>{let{body:e}=t;this.setFilterOptions(e)})).catch((()=>{})),this.playbooks.length||this.$store.dispatch("playbooks/fetchPlaybooksData").then((()=>{this.$store.getters.connected&&this.$store.dispatch("playbooks/fetchRecommendationsData").catch((()=>{}))})).catch((()=>{})),this.setDismissedRecommendations(),this.loadApiScript("omwpapi-playbooks-apijs",this.$constants.PLAYBOOKS_PREVIEW_ACCOUNT,this.$constants.PLAYBOOKS_PREVIEW_USER)},methods:{...(0,i.PY)("playbooks",["setDismissedRecommendations","setRules","setFilterOptions","setUpgradeRule"]),handleUsePlaybook(){if(this.$store.commit("templates/setActiveTemplate",this.selectedPlaybook),!this.$store.getters.connected)return this.$modal.show("not-connected");if(this.unavailableRules.length){const t=["exit-intent","inactivity-time"].find((t=>this.unavailableRules.includes(t)));return t&&this.setUpgradeRule(t),this.$modal.show("upgrade-modal")}this.$modal.show("create-campaign-modal")}}},d=c,m=s(81656),u=(0,m.A)(d,a,o,!1,null,null,null),h=u.exports},89138:function(t,e,s){s.d(e,{I:function(){return a}});const a={data(){return{tabs:{templates:{name:"Templates",route:{path:"templates",params:{tab:"popup"}}},playbooks:{name:"Playbooks",route:{path:"playbooks",params:{}}}}}}}},96709:function(t,e,s){s.d(e,{X:function(){return l}});var a=s(79158),o=s(63191),i=s(22805);const n=(t,e,s,a)=>{let o=document.getElementById(e);if(o)return o;if(!t)return void console.error("apiJsUrl not provided to loadApiScript");const n=document.getElementsByTagName("head")[0]||document.documentElement;return o=document.createElement("script"),o.type="text/javascript",o.id=e,o.src=t,o.async=!0,o.dataset.account=s,o.dataset.user=a,(0,i.isProduction)()||(o.dataset.env=(0,i.isDevelopment)()?"dev":i.currentEnv),n.appendChild(o),o},l={created(){this.listenApiLoaded(),(0,a.rH)(),(0,a.b9)(),(0,a.XU)(),(0,a._f)(),(0,a.Jd)(),this.$store.subscribe((t=>{const e=["templates/setLoadingPreview","templates/setPreviewing","templates/filterOptions","templates/templates","templates/permittedTypes","templates/recentTemplates","templates/popular","templates/setApiLoaded"],s=["route/ROUTE_CHANGED"];let a=t.type.startsWith("templates/")&&!e.includes(t.type);a||(a=s.includes(t.type)),a&&this.closeAllPreviews()}))},beforeDestroy(){(0,a.rH)(!1),(0,a.b9)(!1),(0,a._f)(!1),(0,a.XU)(!1),(0,a.Jd)(!1)},methods:{listenApiLoaded(t="addEventListener"){["om.Api.init","om.Main.init","om.Campaigns.init","om.Campaign.init"].forEach((e=>document[t](e,this.setApiLoaded)))},setApiLoaded(){this.listenApiLoaded("removeEventListener"),this.$store.commit("templates/setApiLoaded")},closeAllPreviews(){(0,a._V)(),this.$store.commit("templates/setLoadingPreview",""),this.$store.commit("templates/setPreviewing","")},loadApiScript(t,e,s){return n(o.DS.apiJs(),t,e,s)}}}}}]);
//# sourceMappingURL=playbooks.f0ed7431.js.map