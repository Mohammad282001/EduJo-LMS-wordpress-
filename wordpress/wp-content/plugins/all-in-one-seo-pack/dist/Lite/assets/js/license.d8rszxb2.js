import{a as u,u as a}from"./index.jlplx4ex.js";import{u as p}from"./upperFirst.c4ega9c0.js";const f=(e,n=null)=>{try{e=JSON.parse(e)}catch{e=n}return e},l={individual:0,business:1,agency:2,basic:3,plus:4,pro:5,elite:6},c=(e="")=>{var s,i;const n=u(),o=a().aioseo.data.isNetworkLicensed&&!n.options.general.licenseKey?((s=n.internalNetworkOptions.internal.license)==null?void 0:s.features)||[]:((i=n.internalOptions.internal.license)==null?void 0:i.features)||[];let r=f(o,[]);return e&&(r=r[e]||[]),r},d=(e,n)=>{const t=c("core");for(const o in t)if(e===o&&!n||e===o&&t[o].find(r=>r===n||-1<r.indexOf(n)))return!0;return!1},_=(e,n)=>{const t=c("addons");for(const o in t)if(e===o&&t[o].includes(n))return!0;return!1},m=e=>{var r,s;const n=u(),o=a().aioseo.data.isNetworkLicensed&&!n.options.general.licenseKey?(r=n.internalNetworkOptions.internal.license)==null?void 0:r.level:(s=n.internalOptions.internal.license)==null?void 0:s.level;return o?l[o]>=l[e]:!1},S=(e,n="")=>{const t=[];a().aioseo.features.forEach(s=>{s.section===e&&(n&&s.feature!==n||t.push(p(s.license_level)))});const r=["Basic","Plus","Pro","Elite"];return t.sort((s,i)=>r.indexOf(s)-r.indexOf(i)),[...new Set(t)]},y={getFeatures:c,getPlansForFeature:S,hasAddonFeature:_,hasCoreFeature:d,hasMinimumLevel:m};export{y as l};