import{s as ie,C as M,M as F,D as H,o as N,i as v,f as h,e as k,c as E,l as ue,I as _e,a as Y,b as D,g as z,m as b,Y as J,h as L,q as R,G as me,y as de,t as V,d as q,j as O,n as U}from"./scheduler.DJbgeZ86.js";import{S as ce,i as fe,c as C,a as T,m as w,t as p,b as g,d as y,g as I,e as A,j as K}from"./index.NvtDNA1J.js";import{C as he,B as G,g as pe,h as ge,D as Q,e as j,I as $e,E as be,m as ve,d as ke}from"./Button.B7o3zPwS.js";import{g as X}from"./entry.SFY_cZ30.js";import{D as Ee}from"./DeviceTypeToName.9Q5WcYV-.js";import{c as Z,e as De,D as Ce}from"./theme.BK28Fqn0.js";import{T as P}from"./Tooltip.LeEdhWkU.js";import{D as Te}from"./Duration.rWvrTW6q.js";function x(o){let e,l="Copied!",t,n;return{c(){e=k("span"),e.textContent=l},l(r){e=E(r,"SPAN",{"data-svelte-h":!0}),ue(e)!=="svelte-19dk3ih"&&(e.textContent=l)},m(r,a){v(r,e,a),n=!0},i(r){n||(r&&_e(()=>{n&&(t||(t=K(e,Q,{axis:"x",duration:200},!0)),t.run(1))}),n=!0)},o(r){r&&(t||(t=K(e,Q,{axis:"x",duration:200},!1)),t.run(0)),n=!1},d(r){r&&h(e),r&&t&&t.end()}}}function we(o){let e,l=o[1]&&x();return{c(){l&&l.c(),e=N()},l(t){l&&l.l(t),e=N()},m(t,n){l&&l.m(t,n),v(t,e,n)},p(t,n){t[1]?l?n&2&&p(l,1):(l=x(),l.c(),p(l,1),l.m(e.parentNode,e)):l&&(I(),g(l,1,1,()=>{l=null}),A())},d(t){t&&h(e),l&&l.d(t)}}}function ye(o){let e,l;const t=[{icon:he},o[2],{class:Z("CopyButton",o[3].root,o[4].class)}];let n={$$slots:{default:[we]},$$scope:{ctx:o}};for(let r=0;r<t.length;r+=1)n=M(n,t[r]);return e=new G({props:n}),e.$on("click",o[5]),{c(){C(e.$$.fragment)},l(r){T(e.$$.fragment,r)},m(r,a){w(e,r,a),l=!0},p(r,[a]){const i=a&28?pe(t,[t[0],a&4&&ge(r[2]),a&24&&{class:Z("CopyButton",r[3].root,r[4].class)}]):{};a&258&&(i.$$scope={dirty:a,ctx:r}),e.$set(i)},i(r){l||(p(e.$$.fragment,r),l=!0)},o(r){g(e.$$.fragment,r),l=!1},d(r){y(e,r)}}}function Le(o,e,l){let t;const n=["value"];let r=F(e,n);const{classes:a,defaults:i}=De("CopyButton");let{value:c}=e,u=!1;const s=()=>{navigator.clipboard.writeText(c),l(1,u=!0)};return o.$$set=f=>{l(4,e=M(M({},e),H(f))),l(7,r=F(e,n)),"value"in f&&l(0,c=f.value)},o.$$.update=()=>{o.$$.dirty&2&&u&&setTimeout(()=>l(1,u=!1),3e3),l(2,t={...i,...r})},e=H(e),[c,u,t,a,e,s]}class Be extends ce{constructor(e){super(),fe(this,e,Le,ye,ie,{value:0})}}function ee(o,e,l){const t=o.slice();return t[8]=e[l],t[10]=l,t}function te(o,e,l){const t=o.slice();return t[11]=e[l],t}function le(o,e,l){const t=o.slice();return t[11]=e[l],t}function ne(o){let e,l=o[11]+"",t;return{c(){e=k("th"),t=V(l),this.h()},l(n){e=E(n,"TH",{scope:!0,class:!0});var r=D(e);t=q(r,l),r.forEach(h),this.h()},h(){b(e,"scope","col"),b(e,"class","svelte-1l8trgr")},m(n,r){v(n,e,r),L(e,t)},p(n,r){r&2&&l!==(l=n[11]+"")&&O(t,l)},d(n){n&&h(e)}}}function re(o){let e,l=o[11]!="model"&&o[11]!="Location"&&ne(o);return{c(){l&&l.c(),e=N()},l(t){l&&l.l(t),e=N()},m(t,n){l&&l.m(t,n),v(t,e,n)},p(t,n){t[11]!="model"&&t[11]!="Location"?l?l.p(t,n):(l=ne(t),l.c(),l.m(e.parentNode,e)):l&&(l.d(1),l=null)},d(t){t&&h(e),l&&l.d(t)}}}function oe(o){let e,l,t,n;const r=[Ae,Ie,je,Se,Ne],a=[];function i(c,u){return c[11]=="lastSeen"?0:c[11]=="locationName"?1:c[11]=="devEui"?2:c[11]=="url"?3:4}return e=i(o),l=a[e]=r[e](o),{c(){l.c(),t=N()},l(c){l.l(c),t=N()},m(c,u){a[e].m(c,u),v(c,t,u),n=!0},p(c,u){let s=e;e=i(c),e===s?a[e].p(c,u):(I(),g(a[s],1,1,()=>{a[s]=null}),A(),l=a[e],l?l.p(c,u):(l=a[e]=r[e](c),l.c()),p(l,1),l.m(t.parentNode,t))},i(c){n||(p(l),n=!0)},o(c){g(l),n=!1},d(c){c&&h(t),a[e].d(c)}}}function Ne(o){let e,l,t=o[8][o[11]]+"",n,r;return{c(){e=k("td"),l=k("b"),n=V(t),this.h()},l(a){e=E(a,"TD",{"data-label":!0,class:!0});var i=D(e);l=E(i,"B",{class:!0});var c=D(l);n=q(c,t),c.forEach(h),i.forEach(h),this.h()},h(){b(l,"class","svelte-1l8trgr"),b(e,"data-label",r=o[11]),b(e,"class","svelte-1l8trgr")},m(a,i){v(a,e,i),L(e,l),L(l,n)},p(a,i){i&3&&t!==(t=a[8][a[11]]+"")&&O(n,t),i&2&&r!==(r=a[11])&&b(e,"data-label",r)},i:U,o:U,d(a){a&&h(e)}}}function Se(o){let e,l,t,n;const r=[Ue,Me],a=[];function i(c,u){var s,f;return(f=(s=c[8].Location)==null?void 0:s.cw_locations)!=null&&f.location_id?0:1}return l=i(o),t=a[l]=r[l](o),{c(){e=k("td"),t.c(),this.h()},l(c){e=E(c,"TD",{class:!0,"data-label":!0});var u=D(e);t.l(u),u.forEach(h),this.h()},h(){b(e,"class","flex flex-row gap-2 justify-center svelte-1l8trgr"),b(e,"data-label","Actions")},m(c,u){v(c,e,u),a[l].m(e,null),n=!0},p(c,u){let s=l;l=i(c),l===s?a[l].p(c,u):(I(),g(a[s],1,1,()=>{a[s]=null}),A(),t=a[l],t?t.p(c,u):(t=a[l]=r[l](c),t.c()),p(t,1),t.m(e,null))},i(c){n||(p(t),n=!0)},o(c){g(t),n=!1},d(c){c&&h(e),a[l].d()}}}function je(o){let e,l,t;return l=new P({props:{title:"Copy Dev EUI","}":!0,$$slots:{default:[qe]},$$scope:{ctx:o}}}),{c(){e=k("td"),C(l.$$.fragment),this.h()},l(n){e=E(n,"TD",{"data-label":!0,class:!0});var r=D(e);T(l.$$.fragment,r),r.forEach(h),this.h()},h(){b(e,"data-label","DEV Eui"),b(e,"class","svelte-1l8trgr")},m(n,r){v(n,e,r),w(l,e,null),t=!0},p(n,r){const a={};r&65539&&(a.$$scope={dirty:r,ctx:n}),l.$set(a)},i(n){t||(p(l.$$.fragment,n),t=!0)},o(n){g(l.$$.fragment,n),t=!1},d(n){n&&h(e),y(l)}}}function Ie(o){let e,l=o[8].locationName+"",t;return{c(){e=k("td"),t=V(l),this.h()},l(n){e=E(n,"TD",{"data-label":!0,class:!0});var r=D(e);t=q(r,l),r.forEach(h),this.h()},h(){b(e,"data-label","Location Name"),b(e,"class","svelte-1l8trgr")},m(n,r){v(n,e,r),L(e,t)},p(n,r){r&1&&l!==(l=n[8].locationName+"")&&O(t,l)},i:U,o:U,d(n){n&&h(e)}}}function Ae(o){let e,l,t;return l=new Te({props:{start:new Date(o[8].lastSeen),totalUnits:2,minUnits:Ce.Second}}),{c(){e=k("td"),C(l.$$.fragment),this.h()},l(n){e=E(n,"TD",{"data-label":!0,class:!0});var r=D(e);T(l.$$.fragment,r),r.forEach(h),this.h()},h(){b(e,"data-label","Last Seen"),b(e,"class","svelte-1l8trgr")},m(n,r){v(n,e,r),w(l,e,null),t=!0},p(n,r){const a={};r&1&&(a.start=new Date(n[8].lastSeen)),l.$set(a)},i(n){t||(p(l.$$.fragment,n),t=!0)},o(n){g(l.$$.fragment,n),t=!1},d(n){n&&h(e),y(l)}}}function Me(o){let e,l;return e=new P({props:{title:"Not available or no permission",$$slots:{default:[He]},$$scope:{ctx:o}}}),{c(){C(e.$$.fragment)},l(t){T(e.$$.fragment,t)},m(t,n){w(e,t,n),l=!0},p(t,n){const r={};n&65536&&(r.$$scope={dirty:n,ctx:t}),e.$set(r)},i(t){l||(p(e.$$.fragment,t),l=!0)},o(t){g(e.$$.fragment,t),l=!1},d(t){y(e,t)}}}function Ue(o){let e,l,t,n;return e=new P({props:{title:"View device details",$$slots:{default:[Pe]},$$scope:{ctx:o}}}),t=new P({props:{title:"View Location of device",$$slots:{default:[Ve]},$$scope:{ctx:o}}}),{c(){C(e.$$.fragment),l=Y(),C(t.$$.fragment)},l(r){T(e.$$.fragment,r),l=z(r),T(t.$$.fragment,r)},m(r,a){w(e,r,a),v(r,l,a),w(t,r,a),n=!0},p(r,a){const i={};a&65537&&(i.$$scope={dirty:a,ctx:r}),e.$set(i);const c={};a&65537&&(c.$$scope={dirty:a,ctx:r}),t.$set(c)},i(r){n||(p(e.$$.fragment,r),p(t.$$.fragment,r),n=!0)},o(r){g(e.$$.fragment,r),g(t.$$.fragment,r),n=!1},d(r){r&&h(l),y(e,r),y(t,r)}}}function He(o){let e,l;return e=new $e({props:{data:be}}),{c(){C(e.$$.fragment)},l(t){T(e.$$.fragment,t)},m(t,n){w(e,t,n),l=!0},p:U,i(t){l||(p(e.$$.fragment,t),l=!0)},o(t){g(e.$$.fragment,t),l=!1},d(t){y(e,t)}}}function Pe(o){let e,l;function t(){return o[4](o[8])}return e=new G({props:{variant:"outline",icon:ve}}),e.$on("click",t),{c(){C(e.$$.fragment)},l(n){T(e.$$.fragment,n)},m(n,r){w(e,n,r),l=!0},p(n,r){o=n},i(n){l||(p(e.$$.fragment,n),l=!0)},o(n){g(e.$$.fragment,n),l=!1},d(n){y(e,n)}}}function Ve(o){let e,l;function t(){return o[5](o[8])}return e=new G({props:{variant:"outline",icon:ke}}),e.$on("click",t),{c(){C(e.$$.fragment)},l(n){T(e.$$.fragment,n)},m(n,r){w(e,n,r),l=!0},p(n,r){o=n},i(n){l||(p(e.$$.fragment,n),l=!0)},o(n){g(e.$$.fragment,n),l=!1},d(n){y(e,n)}}}function qe(o){let e=o[8][o[11]]+"",l,t,n;return t=new Be({props:{value:o[8].devEui,size:"sm"}}),{c(){l=V(e),C(t.$$.fragment)},l(r){l=q(r,e),T(t.$$.fragment,r)},m(r,a){v(r,l,a),w(t,r,a),n=!0},p(r,a){(!n||a&3)&&e!==(e=r[8][r[11]]+"")&&O(l,e);const i={};a&1&&(i.value=r[8].devEui),t.$set(i)},i(r){n||(p(t.$$.fragment,r),n=!0)},o(r){g(t.$$.fragment,r),n=!1},d(r){r&&h(l),y(t,r)}}}function ae(o){let e,l,t=o[11]!="model"&&o[11]!="Location"&&oe(o);return{c(){t&&t.c(),e=N()},l(n){t&&t.l(n),e=N()},m(n,r){t&&t.m(n,r),v(n,e,r),l=!0},p(n,r){n[11]!="model"&&n[11]!="Location"?t?(t.p(n,r),r&2&&p(t,1)):(t=oe(n),t.c(),p(t,1),t.m(e.parentNode,e)):t&&(I(),g(t,1,1,()=>{t=null}),A())},i(n){l||(p(t),l=!0)},o(n){g(t),l=!1},d(n){n&&h(e),t&&t.d(n)}}}function se(o){let e,l,t,n,r,a=j(o[1]),i=[];for(let s=0;s<a.length;s+=1)i[s]=ae(te(o,a,s));const c=s=>g(i[s],1,1,()=>{i[s]=null});function u(){return o[6](o[8])}return{c(){e=k("tr");for(let s=0;s<i.length;s+=1)i[s].c();l=Y(),this.h()},l(s){e=E(s,"TR",{class:!0});var f=D(e);for(let d=0;d<i.length;d+=1)i[d].l(f);l=z(f),f.forEach(h),this.h()},h(){b(e,"class","svelte-1l8trgr")},m(s,f){v(s,e,f);for(let d=0;d<i.length;d+=1)i[d]&&i[d].m(e,null);L(e,l),t=!0,n||(r=de(e,"mousemove",u),n=!0)},p(s,f){if(o=s,f&3){a=j(o[1]);let d;for(d=0;d<a.length;d+=1){const m=te(o,a,d);i[d]?(i[d].p(m,f),p(i[d],1)):(i[d]=ae(m),i[d].c(),p(i[d],1),i[d].m(e,l))}for(I(),d=a.length;d<i.length;d+=1)c(d);A()}},i(s){if(!t){for(let f=0;f<a.length;f+=1)p(i[f]);t=!0}},o(s){i=i.filter(Boolean);for(let f=0;f<i.length;f+=1)g(i[f]);t=!1},d(s){s&&h(e),R(i,s),n=!1,r()}}}function Oe(o){let e,l,t,n,r,a,i,c=j(o[1]),u=[];for(let m=0;m<c.length;m+=1)u[m]=re(le(o,c,m));let s=j(o[0]),f=[];for(let m=0;m<s.length;m+=1)f[m]=se(ee(o,s,m));const d=m=>g(f[m],1,1,()=>{f[m]=null});return{c(){e=k("table"),l=k("thead"),t=k("tr");for(let m=0;m<u.length;m+=1)u[m].c();n=Y(),r=k("tbody");for(let m=0;m<f.length;m+=1)f[m].c();this.h()},l(m){e=E(m,"TABLE",{class:!0});var $=D(e);l=E($,"THEAD",{class:!0});var _=D(l);t=E(_,"TR",{class:!0});var B=D(t);for(let S=0;S<u.length;S+=1)u[S].l(B);B.forEach(h),_.forEach(h),n=z($),r=E($,"TBODY",{class:!0});var W=D(r);for(let S=0;S<f.length;S+=1)f[S].l(W);W.forEach(h),$.forEach(h),this.h()},h(){b(t,"class","svelte-1l8trgr"),b(l,"class","svelte-1l8trgr"),b(r,"class","svelte-1l8trgr"),b(e,"class",a=J(o[3].class)+" svelte-1l8trgr")},m(m,$){v(m,e,$),L(e,l),L(l,t);for(let _=0;_<u.length;_+=1)u[_]&&u[_].m(t,null);L(e,n),L(e,r);for(let _=0;_<f.length;_+=1)f[_]&&f[_].m(r,null);i=!0},p(m,[$]){if($&2){c=j(m[1]);let _;for(_=0;_<c.length;_+=1){const B=le(m,c,_);u[_]?u[_].p(B,$):(u[_]=re(B),u[_].c(),u[_].m(t,null))}for(;_<u.length;_+=1)u[_].d(1);u.length=c.length}if($&7){s=j(m[0]);let _;for(_=0;_<s.length;_+=1){const B=ee(m,s,_);f[_]?(f[_].p(B,$),p(f[_],1)):(f[_]=se(B),f[_].c(),p(f[_],1),f[_].m(r,null))}for(I(),_=s.length;_<f.length;_+=1)d(_);A()}(!i||$&8&&a!==(a=J(m[3].class)+" svelte-1l8trgr"))&&b(e,"class",a)},i(m){if(!i){for(let $=0;$<s.length;$+=1)p(f[$]);i=!0}},o(m){f=f.filter(Boolean);for(let $=0;$<f.length;$+=1)g(f[$]);i=!1},d(m){m&&h(e),R(u,m),R(f,m)}}}function Re(o,e,l){let t,{data:n=[]}=e;console.log(n);const r=me();function a(s){r("hover",{item:s})}const i=s=>{var f,d;return X(`/app/locations/${(d=(f=s.Location)==null?void 0:f.cw_locations)==null?void 0:d.location_id}/device-type/${Ee(s.model)}/${s.devEui}`)},c=s=>{var f,d;return X(`/app/locations/${(d=(f=s.Location)==null?void 0:f.cw_locations)==null?void 0:d.location_id}/`)},u=s=>a(s);return o.$$set=s=>{l(3,e=M(M({},e),H(s))),"data"in s&&l(0,n=s.data)},o.$$.update=()=>{o.$$.dirty&1&&l(1,t=n.length>0?Object.keys(n[0]).filter(s=>s!=="component"&&s!=="Location"):[])},e=H(e),[n,t,a,e,i,c,u]}class Xe extends ce{constructor(e){super(),fe(this,e,Re,Oe,ie,{data:0})}}export{Xe as C};
