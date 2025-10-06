(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();const $c=!1;var Js=Array.isArray,gh=Array.prototype.indexOf,Yo=Array.from,Gs=Object.defineProperty,or=Object.getOwnPropertyDescriptor,Kc=Object.getOwnPropertyDescriptors,vh=Object.prototype,xh=Array.prototype,jo=Object.getPrototypeOf,wl=Object.isExtensible;const Ai=()=>{};function Mh(n){return n()}function $a(n){for(var t=0;t<n.length;t++)n[t]()}function Zc(){var n,t,e=new Promise((i,r)=>{n=i,t=r});return{promise:e,resolve:n,reject:t}}const We=2,$o=4,Qs=8,Ni=16,Xn=32,Fi=64,Ko=128,an=256,Ws=512,Pe=1024,Je=2048,qn=4096,_n=8192,Oi=16384,Zo=32768,ta=65536,Rl=1<<17,Sh=1<<18,br=1<<19,Jc=1<<20,Ka=1<<21,ea=1<<22,wi=1<<23,Ri=Symbol("$state"),Eh=Symbol("legacy props"),zr=new class extends Error{name="StaleReactionError";message="The reaction that called `getAbortSignal()` was re-run or destroyed"};function Jo(n){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function yh(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function bh(n){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Th(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function Ah(n){throw new Error("https://svelte.dev/e/effect_orphan")}function wh(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Rh(n){throw new Error("https://svelte.dev/e/props_invalid_value")}function Ch(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Ph(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function Dh(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function Lh(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}const Uh=1,Ih=2,Nh=16,Fh=1,Oh=2,Bh=4,zh=8,Hh=16,kh=1,Vh=2,Ce=Symbol(),Gh="http://www.w3.org/1999/xhtml";function Wh(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}let Xh=!1;function Qc(n){return n===this.v}function tu(n,t){return n!=n?t==t:n!==t||n!==null&&typeof n=="object"||typeof n=="function"}function eu(n){return!tu(n,this.v)}let Tr=!1,qh=!1;function Yh(){Tr=!0}let pe=null;function _r(n){pe=n}function li(n,t=!1,e){pe={p:pe,c:null,e:null,s:n,x:null,l:Tr&&!t?{s:null,u:null,$:[]}:null}}function ci(n){var t=pe,e=t.e;if(e!==null){t.e=null;for(var i of e)_u(i)}return pe=t.p,{}}function Kr(){return!Tr||pe!==null&&pe.l===null}let yi=[];function nu(){var n=yi;yi=[],$a(n)}function Zr(n){if(yi.length===0&&!Hr){var t=yi;queueMicrotask(()=>{t===yi&&nu()})}yi.push(n)}function jh(){for(;yi.length>0;)nu()}const $h=new WeakMap;function iu(n){var t=$t;if(t===null)return jt.f|=wi,n;if((t.f&Zo)===0){if((t.f&Ko)===0)throw!t.parent&&n instanceof Error&&ru(n),n;t.b.error(n)}else gr(n,t)}function gr(n,t){for(;t!==null;){if((t.f&Ko)!==0)try{t.b.error(n);return}catch(e){n=e}t=t.parent}throw n instanceof Error&&ru(n),n}function ru(n){const t=$h.get(n);t&&(Gs(n,"message",{value:t.message}),Gs(n,"stack",{value:t.stack}))}const ls=new Set;let me=null,Fs=null,Za=new Set,En=[],na=null,Ja=!1,Hr=!1;class pn{current=new Map;#i=new Map;#n=new Set;#f=0;#s=null;#l=[];#r=[];#e=[];#t=[];#a=[];#c=[];skipped_effects=new Set;process(t){En=[],Fs=null;var e=pn.apply(this);for(const s of t)this.#u(s);if(this.#f===0){this.#h();var i=this.#r,r=this.#e;this.#r=[],this.#e=[],this.#t=[],Fs=this,me=null,Cl(i),Cl(r),this.#s?.resolve()}else this.#o(this.#r),this.#o(this.#e),this.#o(this.#t);e();for(const s of this.#l)vr(s);this.#l=[]}#u(t){t.f^=Pe;for(var e=t.first;e!==null;){var i=e.f,r=(i&(Xn|Fi))!==0,s=r&&(i&Pe)!==0,a=s||(i&_n)!==0||this.skipped_effects.has(e);if(!a&&e.fn!==null){r?e.f^=Pe:(i&$o)!==0?this.#e.push(e):(i&Pe)===0&&((i&ea)!==0&&e.b?.is_pending()?this.#l.push(e):es(e)&&((e.f&Ni)!==0&&this.#t.push(e),vr(e)));var o=e.first;if(o!==null){e=o;continue}}var c=e.parent;for(e=e.next;e===null&&c!==null;)e=c.next,c=c.parent}}#o(t){for(const e of t)((e.f&Je)!==0?this.#a:this.#c).push(e),Ue(e,Pe);t.length=0}capture(t,e){this.#i.has(t)||this.#i.set(t,e),this.current.set(t,t.v)}activate(){me=this}deactivate(){me=null,Fs=null;for(const t of Za)if(Za.delete(t),t(),me!==null)break}flush(){if(En.length>0){if(this.activate(),su(),me!==null&&me!==this)return}else this.#f===0&&this.#h();this.deactivate()}#h(){for(const t of this.#n)t();if(this.#n.clear(),ls.size>1){this.#i.clear();let t=!0;for(const e of ls){if(e===this){t=!1;continue}for(const[i,r]of this.current){if(e.current.has(i))if(t)e.current.set(i,r);else continue;au(i)}if(En.length>0){me=e;const i=pn.apply(e);for(const r of En)e.#u(r);En=[],i()}}me=null}ls.delete(this)}increment(){this.#f+=1}decrement(){if(this.#f-=1,this.#f===0){for(const t of this.#a)Ue(t,Je),Pi(t);for(const t of this.#c)Ue(t,qn),Pi(t);this.flush()}else this.deactivate()}add_callback(t){this.#n.add(t)}settled(){return(this.#s??=Zc()).promise}static ensure(){if(me===null){const t=me=new pn;ls.add(me),Hr||pn.enqueue(()=>{me===t&&t.flush()})}return me}static enqueue(t){Zr(t)}static apply(t){return Ai}}function Kh(n){var t=Hr;Hr=!0;try{for(var e;;){if(jh(),En.length===0&&(me?.flush(),En.length===0))return na=null,e;su()}}finally{Hr=t}}function su(){var n=cr;Ja=!0;try{var t=0;for(Ul(!0);En.length>0;){var e=pn.ensure();if(t++>1e3){var i,r;Zh()}e.process(En),ii.clear()}}finally{Ja=!1,Ul(n),na=null}}function Zh(){try{wh()}catch(n){gr(n,na)}}let Mi=null;function Cl(n){var t=n.length;if(t!==0){for(var e=0;e<t;){var i=n[e++];if((i.f&(Oi|_n))===0&&es(i)&&(Mi=[],vr(i),i.deps===null&&i.first===null&&i.nodes_start===null&&(i.teardown===null&&i.ac===null?xu(i):i.fn=null),Mi?.length>0)){ii.clear();for(const r of Mi)vr(r);Mi=[]}}Mi=null}}function au(n){if(n.reactions!==null)for(const t of n.reactions){const e=t.f;(e&We)!==0?au(t):(e&(ea|Ni))!==0&&(Ue(t,Je),Pi(t))}}function Pi(n){for(var t=na=n;t.parent!==null;){t=t.parent;var e=t.f;if(Ja&&t===$t&&(e&Ni)!==0)return;if((e&(Fi|Xn))!==0){if((e&Pe)===0)return;t.f^=Pe}}En.push(t)}function Jh(n){let t=0,e=Di(0),i;return()=>{df()&&(dt(e),ts(()=>(t===0&&(i=Xt(()=>n(()=>kr(e)))),t+=1,()=>{Zr(()=>{t-=1,t===0&&(i?.(),i=void 0,kr(e))})})))}}var Qh=ta|br|Ko;function tf(n,t,e){new ef(n,t,e)}class ef{parent;#i=!1;#n;#f=null;#s;#l;#r;#e=null;#t=null;#a=null;#c=null;#u=0;#o=0;#h=!1;#d=null;#g=()=>{this.#d&&Gr(this.#d,this.#u)};#v=Jh(()=>(this.#d=Di(this.#u),()=>{this.#d=null}));constructor(t,e,i){this.#n=t,this.#s=e,this.#l=i,this.parent=$t.b,this.#i=!!this.#s.pending,this.#r=nl(()=>{$t.b=this;{try{this.#e=hn(()=>i(this.#n))}catch(r){this.error(r)}this.#o>0?this.#m():this.#i=!1}},Qh)}#x(){try{this.#e=hn(()=>this.#l(this.#n))}catch(t){this.error(t)}this.#i=!1}#M(){const t=this.#s.pending;t&&(this.#t=hn(()=>t(this.#n)),pn.enqueue(()=>{this.#e=this.#p(()=>(pn.ensure(),hn(()=>this.#l(this.#n)))),this.#o>0?this.#m():(lr(this.#t,()=>{this.#t=null}),this.#i=!1)}))}is_pending(){return this.#i||!!this.parent&&this.parent.is_pending()}has_pending_snippet(){return!!this.#s.pending}#p(t){var e=$t,i=jt,r=pe;wn(this.#r),ke(this.#r),_r(this.#r.ctx);try{return t()}catch(s){return iu(s),null}finally{wn(e),ke(i),_r(r)}}#m(){const t=this.#s.pending;this.#e!==null&&(this.#c=document.createDocumentFragment(),nf(this.#e,this.#c)),this.#t===null&&(this.#t=hn(()=>t(this.#n)))}#_(t){if(!this.has_pending_snippet()){this.parent&&this.parent.#_(t);return}this.#o+=t,this.#o===0&&(this.#i=!1,this.#t&&lr(this.#t,()=>{this.#t=null}),this.#c&&(this.#n.before(this.#c),this.#c=null))}update_pending_count(t){this.#_(t),this.#u+=t,Za.add(this.#g)}get_effect_pending(){return this.#v(),dt(this.#d)}error(t){var e=this.#s.onerror;let i=this.#s.failed;if(this.#h||!e&&!i)throw t;this.#e&&(on(this.#e),this.#e=null),this.#t&&(on(this.#t),this.#t=null),this.#a&&(on(this.#a),this.#a=null);var r=!1,s=!1;const a=()=>{if(r){Wh();return}r=!0,s&&Lh(),pn.ensure(),this.#u=0,this.#a!==null&&lr(this.#a,()=>{this.#a=null}),this.#i=this.has_pending_snippet(),this.#e=this.#p(()=>(this.#h=!1,hn(()=>this.#l(this.#n)))),this.#o>0?this.#m():this.#i=!1};var o=jt;try{ke(null),s=!0,e?.(t,a),s=!1}catch(c){gr(c,this.#r&&this.#r.parent)}finally{ke(o)}i&&Zr(()=>{this.#a=this.#p(()=>{this.#h=!0;try{return hn(()=>{i(this.#n,()=>t,()=>a)})}catch(c){return gr(c,this.#r.parent),null}finally{this.#h=!1}})})}}function nf(n,t){for(var e=n.nodes_start,i=n.nodes_end;e!==null;){var r=e===i?null:Qr(e);t.append(e),e=r}}function rf(n,t,e){const i=Kr()?ia:Qo;if(t.length===0){e(n.map(i));return}var r=me,s=$t,a=sf();Promise.all(t.map(o=>af(o))).then(o=>{r?.activate(),a();try{e([...n.map(i),...o])}catch(c){(s.f&Oi)===0&&gr(c,s)}r?.deactivate(),ou()}).catch(o=>{gr(o,s)})}function sf(){var n=$t,t=jt,e=pe,i=me;return function(){wn(n),ke(t),_r(e),i?.activate()}}function ou(){wn(null),ke(null),_r(null)}function ia(n){var t=We|Je,e=jt!==null&&(jt.f&We)!==0?jt:null;return $t===null||e!==null&&(e.f&an)!==0?t|=an:$t.f|=br,{ctx:pe,deps:null,effects:null,equals:Qc,f:t,fn:n,reactions:null,rv:0,v:Ce,wv:0,parent:e??$t,ac:null}}function af(n,t){let e=$t;e===null&&yh();var i=e.b,r=void 0,s=Di(Ce),a=!jt,o=new Map;return xf(()=>{var c=Zc();r=c.promise;try{Promise.resolve(n()).then(c.resolve,c.reject)}catch(f){c.reject(f)}var l=me,u=i.is_pending();a&&(i.update_pending_count(1),u||(l.increment(),o.get(l)?.reject(zr),o.set(l,c)));const d=(f,p=void 0)=>{u||l.activate(),p?p!==zr&&(s.f|=wi,Gr(s,p)):((s.f&wi)!==0&&(s.f^=wi),Gr(s,f)),a&&(i.update_pending_count(-1),u||l.decrement()),ou()};c.promise.then(d,f=>d(null,f||"unknown"))}),el(()=>{for(const c of o.values())c.reject(zr)}),new Promise(c=>{function l(u){function d(){u===r?c(s):l(r)}u.then(d,d)}l(r)})}function Qo(n){const t=ia(n);return t.equals=eu,t}function lu(n){var t=n.effects;if(t!==null){n.effects=null;for(var e=0;e<t.length;e+=1)on(t[e])}}function of(n){for(var t=n.parent;t!==null;){if((t.f&We)===0)return t;t=t.parent}return null}function tl(n){var t,e=$t;wn(of(n));try{lu(n),t=Tu(n)}finally{wn(e)}return t}function cu(n){var t=tl(n);if(n.equals(t)||(n.v=t,n.wv=yu()),!Bi){var e=(ni||(n.f&an)!==0)&&n.deps!==null?qn:Pe;Ue(n,e)}}const ii=new Map;function Di(n,t){var e={f:0,v:n,reactions:null,equals:Qc,rv:0,wv:0};return e}function Yn(n,t){const e=Di(n);return Ef(e),e}function yn(n,t=!1,e=!0){const i=Di(n);return t||(i.equals=eu),Tr&&e&&pe!==null&&pe.l!==null&&(pe.l.s??=[]).push(i),i}function ye(n,t,e=!1){jt!==null&&(!fn||(jt.f&Rl)!==0)&&Kr()&&(jt.f&(We|Ni|ea|Rl))!==0&&!Gn?.includes(n)&&Dh();let i=e?rr(t):t;return Gr(n,i)}function Gr(n,t){if(!n.equals(t)){var e=n.v;Bi?ii.set(n,t):ii.set(n,e),n.v=t;var i=pn.ensure();i.capture(n,e),(n.f&We)!==0&&((n.f&Je)!==0&&tl(n),Ue(n,(n.f&an)===0?Pe:qn)),n.wv=yu(),uu(n,Je),Kr()&&$t!==null&&($t.f&Pe)!==0&&($t.f&(Xn|Fi))===0&&(nn===null?yf([n]):nn.push(n))}return t}function Pl(n,t=1){var e=dt(n),i=t===1?e++:e--;return ye(n,e),i}function kr(n){ye(n,n.v+1)}function uu(n,t){var e=n.reactions;if(e!==null)for(var i=Kr(),r=e.length,s=0;s<r;s++){var a=e[s],o=a.f;if(!(!i&&a===$t)){var c=(o&Je)===0;c&&Ue(a,t),(o&We)!==0?uu(a,qn):c&&((o&Ni)!==0&&Mi!==null&&Mi.push(a),Pi(a))}}}function rr(n){if(typeof n!="object"||n===null||Ri in n)return n;const t=jo(n);if(t!==vh&&t!==xh)return n;var e=new Map,i=Js(n),r=Yn(0),s=Ci,a=o=>{if(Ci===s)return o();var c=jt,l=Ci;ke(null),Nl(s);var u=o();return ke(c),Nl(l),u};return i&&e.set("length",Yn(n.length)),new Proxy(n,{defineProperty(o,c,l){(!("value"in l)||l.configurable===!1||l.enumerable===!1||l.writable===!1)&&Ch();var u=e.get(c);return u===void 0?u=a(()=>{var d=Yn(l.value);return e.set(c,d),d}):ye(u,l.value,!0),!0},deleteProperty(o,c){var l=e.get(c);if(l===void 0){if(c in o){const u=a(()=>Yn(Ce));e.set(c,u),kr(r)}}else ye(l,Ce),kr(r);return!0},get(o,c,l){if(c===Ri)return n;var u=e.get(c),d=c in o;if(u===void 0&&(!d||or(o,c)?.writable)&&(u=a(()=>{var p=rr(d?o[c]:Ce),_=Yn(p);return _}),e.set(c,u)),u!==void 0){var f=dt(u);return f===Ce?void 0:f}return Reflect.get(o,c,l)},getOwnPropertyDescriptor(o,c){var l=Reflect.getOwnPropertyDescriptor(o,c);if(l&&"value"in l){var u=e.get(c);u&&(l.value=dt(u))}else if(l===void 0){var d=e.get(c),f=d?.v;if(d!==void 0&&f!==Ce)return{enumerable:!0,configurable:!0,value:f,writable:!0}}return l},has(o,c){if(c===Ri)return!0;var l=e.get(c),u=l!==void 0&&l.v!==Ce||Reflect.has(o,c);if(l!==void 0||$t!==null&&(!u||or(o,c)?.writable)){l===void 0&&(l=a(()=>{var f=u?rr(o[c]):Ce,p=Yn(f);return p}),e.set(c,l));var d=dt(l);if(d===Ce)return!1}return u},set(o,c,l,u){var d=e.get(c),f=c in o;if(i&&c==="length")for(var p=l;p<d.v;p+=1){var _=e.get(p+"");_!==void 0?ye(_,Ce):p in o&&(_=a(()=>Yn(Ce)),e.set(p+"",_))}if(d===void 0)(!f||or(o,c)?.writable)&&(d=a(()=>Yn(void 0)),ye(d,rr(l)),e.set(c,d));else{f=d.v!==Ce;var v=a(()=>rr(l));ye(d,v)}var m=Reflect.getOwnPropertyDescriptor(o,c);if(m?.set&&m.set.call(u,l),!f){if(i&&typeof c=="string"){var h=e.get("length"),T=Number(c);Number.isInteger(T)&&T>=h.v&&ye(h,T+1)}kr(r)}return!0},ownKeys(o){dt(r);var c=Reflect.ownKeys(o).filter(d=>{var f=e.get(d);return f===void 0||f.v!==Ce});for(var[l,u]of e)u.v!==Ce&&!(l in o)&&c.push(l);return c},setPrototypeOf(){Ph()}})}var Dl,hu,fu,du;function lf(){if(Dl===void 0){Dl=window,hu=/Firefox/.test(navigator.userAgent);var n=Element.prototype,t=Node.prototype,e=Text.prototype;fu=or(t,"firstChild").get,du=or(t,"nextSibling").get,wl(n)&&(n.__click=void 0,n.__className=void 0,n.__attributes=null,n.__style=void 0,n.__e=void 0),wl(e)&&(e.__t=void 0)}}function Jr(n=""){return document.createTextNode(n)}function Xs(n){return fu.call(n)}function Qr(n){return du.call(n)}function ft(n,t){return Xs(n)}function Vn(n,t=!1){{var e=Xs(n);return e instanceof Comment&&e.data===""?Qr(e):e}}function wt(n,t=1,e=!1){let i=n;for(;t--;)i=Qr(i);return i}function cf(n){n.textContent=""}function pu(){return!1}let Ll=!1;function uf(){Ll||(Ll=!0,document.addEventListener("reset",n=>{Promise.resolve().then(()=>{if(!n.defaultPrevented)for(const t of n.target.elements)t.__on_r?.()})},{capture:!0}))}function ra(n){var t=jt,e=$t;ke(null),wn(null);try{return n()}finally{ke(t),wn(e)}}function hf(n,t,e,i=e){n.addEventListener(t,()=>ra(e));const r=n.__on_r;r?n.__on_r=()=>{r(),i(!0)}:n.__on_r=()=>i(!0),uf()}function mu(n){$t===null&&jt===null&&Ah(),jt!==null&&(jt.f&an)!==0&&$t===null&&Th(),Bi&&bh()}function ff(n,t){var e=t.last;e===null?t.last=t.first=n:(e.next=n,n.prev=e,t.last=n)}function Pn(n,t,e,i=!0){var r=$t;r!==null&&(r.f&_n)!==0&&(n|=_n);var s={ctx:pe,deps:null,nodes_start:null,nodes_end:null,f:n|Je,first:null,fn:t,last:null,next:null,parent:r,b:r&&r.b,prev:null,teardown:null,transitions:null,wv:0,ac:null};if(e)try{vr(s),s.f|=Zo}catch(c){throw on(s),c}else t!==null&&Pi(s);if(i){var a=s;if(e&&a.deps===null&&a.teardown===null&&a.nodes_start===null&&a.first===a.last&&(a.f&br)===0&&(a=a.first),a!==null&&(a.parent=r,r!==null&&ff(a,r),jt!==null&&(jt.f&We)!==0&&(n&Fi)===0)){var o=jt;(o.effects??=[]).push(a)}}return s}function df(){return jt!==null&&!fn}function el(n){const t=Pn(Qs,null,!1);return Ue(t,Pe),t.teardown=n,t}function Qa(n){mu();var t=$t.f,e=!jt&&(t&Xn)!==0&&(t&Zo)===0;if(e){var i=pe;(i.e??=[]).push(n)}else return _u(n)}function _u(n){return Pn($o|Jc,n,!1)}function pf(n){return mu(),Pn(Qs|Jc,n,!0)}function mf(n){pn.ensure();const t=Pn(Fi|br,n,!0);return(e={})=>new Promise(i=>{e.outro?lr(t,()=>{on(t),i(void 0)}):(on(t),i(void 0))})}function _f(n){return Pn($o,n,!1)}function gf(n,t){var e=pe,i={effect:null,ran:!1,deps:n};e.l.$.push(i),i.effect=ts(()=>{n(),!i.ran&&(i.ran=!0,Xt(t))})}function vf(){var n=pe;ts(()=>{for(var t of n.l.$){t.deps();var e=t.effect;(e.f&Pe)!==0&&Ue(e,qn),es(e)&&vr(e),t.ran=!1}})}function xf(n){return Pn(ea|br,n,!0)}function ts(n,t=0){return Pn(Qs|t,n,!0)}function Ze(n,t=[],e=[]){rf(t,e,i=>{Pn(Qs,()=>n(...i.map(dt)),!0)})}function nl(n,t=0){var e=Pn(Ni|t,n,!0);return e}function hn(n,t=!0){return Pn(Xn|br,n,!0,t)}function gu(n){var t=n.teardown;if(t!==null){const e=Bi,i=jt;Il(!0),ke(null);try{t.call(null)}finally{Il(e),ke(i)}}}function vu(n,t=!1){var e=n.first;for(n.first=n.last=null;e!==null;){const r=e.ac;r!==null&&ra(()=>{r.abort(zr)});var i=e.next;(e.f&Fi)!==0?e.parent=null:on(e,t),e=i}}function Mf(n){for(var t=n.first;t!==null;){var e=t.next;(t.f&Xn)===0&&on(t),t=e}}function on(n,t=!0){var e=!1;(t||(n.f&Sh)!==0)&&n.nodes_start!==null&&n.nodes_end!==null&&(Sf(n.nodes_start,n.nodes_end),e=!0),vu(n,t&&!e),qs(n,0),Ue(n,Oi);var i=n.transitions;if(i!==null)for(const s of i)s.stop();gu(n);var r=n.parent;r!==null&&r.first!==null&&xu(n),n.next=n.prev=n.teardown=n.ctx=n.deps=n.fn=n.nodes_start=n.nodes_end=n.ac=null}function Sf(n,t){for(;n!==null;){var e=n===t?null:Qr(n);n.remove(),n=e}}function xu(n){var t=n.parent,e=n.prev,i=n.next;e!==null&&(e.next=i),i!==null&&(i.prev=e),t!==null&&(t.first===n&&(t.first=i),t.last===n&&(t.last=e))}function lr(n,t){var e=[];il(n,e,!0),Mu(e,()=>{on(n),t&&t()})}function Mu(n,t){var e=n.length;if(e>0){var i=()=>--e||t();for(var r of n)r.out(i)}else t()}function il(n,t,e){if((n.f&_n)===0){if(n.f^=_n,n.transitions!==null)for(const a of n.transitions)(a.is_global||e)&&t.push(a);for(var i=n.first;i!==null;){var r=i.next,s=(i.f&ta)!==0||(i.f&Xn)!==0;il(i,t,s?e:!1),i=r}}}function rl(n){Su(n,!0)}function Su(n,t){if((n.f&_n)!==0){n.f^=_n,(n.f&Pe)===0&&(Ue(n,Je),Pi(n));for(var e=n.first;e!==null;){var i=e.next,r=(e.f&ta)!==0||(e.f&Xn)!==0;Su(e,r?t:!1),e=i}if(n.transitions!==null)for(const s of n.transitions)(s.is_global||t)&&s.in()}}let cr=!1;function Ul(n){cr=n}let Bi=!1;function Il(n){Bi=n}let jt=null,fn=!1;function ke(n){jt=n}let $t=null;function wn(n){$t=n}let Gn=null;function Ef(n){jt!==null&&(Gn===null?Gn=[n]:Gn.push(n))}let Fe=null,$e=0,nn=null;function yf(n){nn=n}let Eu=1,Wr=0,Ci=Wr;function Nl(n){Ci=n}let ni=!1;function yu(){return++Eu}function es(n){var t=n.f;if((t&Je)!==0)return!0;if((t&qn)!==0){var e=n.deps,i=(t&an)!==0;if(e!==null){var r,s,a=(t&Ws)!==0,o=i&&$t!==null&&!ni,c=e.length;if((a||o)&&($t===null||($t.f&Oi)===0)){var l=n,u=l.parent;for(r=0;r<c;r++)s=e[r],(a||!s?.reactions?.includes(l))&&(s.reactions??=[]).push(l);a&&(l.f^=Ws),o&&u!==null&&(u.f&an)===0&&(l.f^=an)}for(r=0;r<c;r++)if(s=e[r],es(s)&&cu(s),s.wv>n.wv)return!0}(!i||$t!==null&&!ni)&&Ue(n,Pe)}return!1}function bu(n,t,e=!0){var i=n.reactions;if(i!==null&&!Gn?.includes(n))for(var r=0;r<i.length;r++){var s=i[r];(s.f&We)!==0?bu(s,t,!1):t===s&&(e?Ue(s,Je):(s.f&Pe)!==0&&Ue(s,qn),Pi(s))}}function Tu(n){var t=Fe,e=$e,i=nn,r=jt,s=ni,a=Gn,o=pe,c=fn,l=Ci,u=n.f;Fe=null,$e=0,nn=null,ni=(u&an)!==0&&(fn||!cr||jt===null),jt=(u&(Xn|Fi))===0?n:null,Gn=null,_r(n.ctx),fn=!1,Ci=++Wr,n.ac!==null&&(ra(()=>{n.ac.abort(zr)}),n.ac=null);try{n.f|=Ka;var d=n.fn,f=d(),p=n.deps;if(Fe!==null){var _;if(qs(n,$e),p!==null&&$e>0)for(p.length=$e+Fe.length,_=0;_<Fe.length;_++)p[$e+_]=Fe[_];else n.deps=p=Fe;if(!ni||(u&We)!==0&&n.reactions!==null)for(_=$e;_<p.length;_++)(p[_].reactions??=[]).push(n)}else p!==null&&$e<p.length&&(qs(n,$e),p.length=$e);if(Kr()&&nn!==null&&!fn&&p!==null&&(n.f&(We|qn|Je))===0)for(_=0;_<nn.length;_++)bu(nn[_],n);return r!==null&&r!==n&&(Wr++,nn!==null&&(i===null?i=nn:i.push(...nn))),(n.f&wi)!==0&&(n.f^=wi),f}catch(v){return iu(v)}finally{n.f^=Ka,Fe=t,$e=e,nn=i,jt=r,ni=s,Gn=a,_r(o),fn=c,Ci=l}}function bf(n,t){let e=t.reactions;if(e!==null){var i=gh.call(e,n);if(i!==-1){var r=e.length-1;r===0?e=t.reactions=null:(e[i]=e[r],e.pop())}}e===null&&(t.f&We)!==0&&(Fe===null||!Fe.includes(t))&&(Ue(t,qn),(t.f&(an|Ws))===0&&(t.f^=Ws),lu(t),qs(t,0))}function qs(n,t){var e=n.deps;if(e!==null)for(var i=t;i<e.length;i++)bf(n,e[i])}function vr(n){var t=n.f;if((t&Oi)===0){Ue(n,Pe);var e=$t,i=cr;$t=n,cr=!0;try{(t&Ni)!==0?Mf(n):vu(n),gu(n);var r=Tu(n);n.teardown=typeof r=="function"?r:null,n.wv=Eu;var s;$c&&qh&&(n.f&Je)!==0&&n.deps}finally{cr=i,$t=e}}}async function Tf(){await Promise.resolve(),Kh()}function dt(n){var t=n.f,e=(t&We)!==0;if(jt!==null&&!fn){var i=$t!==null&&($t.f&Oi)!==0;if(!i&&!Gn?.includes(n)){var r=jt.deps;if((jt.f&Ka)!==0)n.rv<Wr&&(n.rv=Wr,Fe===null&&r!==null&&r[$e]===n?$e++:Fe===null?Fe=[n]:(!ni||!Fe.includes(n))&&Fe.push(n));else{(jt.deps??=[]).push(n);var s=n.reactions;s===null?n.reactions=[jt]:s.includes(jt)||s.push(jt)}}}else if(e&&n.deps===null&&n.effects===null){var a=n,o=a.parent;o!==null&&(o.f&an)===0&&(a.f^=an)}if(Bi){if(ii.has(n))return ii.get(n);if(e){a=n;var c=a.v;return((a.f&Pe)===0&&a.reactions!==null||Au(a))&&(c=tl(a)),ii.set(a,c),c}}else e&&(a=n,es(a)&&cu(a));if((n.f&wi)!==0)throw n.v;return n.v}function Au(n){if(n.v===Ce)return!0;if(n.deps===null)return!1;for(const t of n.deps)if(ii.has(t)||(t.f&We)!==0&&Au(t))return!0;return!1}function Xt(n){var t=fn;try{return fn=!0,n()}finally{fn=t}}const Af=-7169;function Ue(n,t){n.f=n.f&Af|t}function ne(n){if(!(typeof n!="object"||!n||n instanceof EventTarget)){if(Ri in n)to(n);else if(!Array.isArray(n))for(let t in n){const e=n[t];typeof e=="object"&&e&&Ri in e&&to(e)}}}function to(n,t=new Set){if(typeof n=="object"&&n!==null&&!(n instanceof EventTarget)&&!t.has(n)){t.add(n),n instanceof Date&&n.getTime();for(let i in n)try{to(n[i],t)}catch{}const e=jo(n);if(e!==Object.prototype&&e!==Array.prototype&&e!==Map.prototype&&e!==Set.prototype&&e!==Date.prototype){const i=Kc(e);for(let r in i){const s=i[r].get;if(s)try{s.call(n)}catch{}}}}}const wf=["touchstart","touchmove"];function Rf(n){return wf.includes(n)}const Cf=new Set,Fl=new Set;function Pf(n,t,e,i={}){function r(s){if(i.capture||Fr.call(t,s),!s.cancelBubble)return ra(()=>e?.call(this,s))}return n.startsWith("pointer")||n.startsWith("touch")||n==="wheel"?Zr(()=>{t.addEventListener(n,r,i)}):t.addEventListener(n,r,i),r}function ur(n,t,e,i,r){var s={capture:i,passive:r},a=Pf(n,t,e,s);(t===document.body||t===window||t===document||t instanceof HTMLMediaElement)&&el(()=>{t.removeEventListener(n,a,s)})}let Ol=null;function Fr(n){var t=this,e=t.ownerDocument,i=n.type,r=n.composedPath?.()||[],s=r[0]||n.target;Ol=n;var a=0,o=Ol===n&&n.__root;if(o){var c=r.indexOf(o);if(c!==-1&&(t===document||t===window)){n.__root=t;return}var l=r.indexOf(t);if(l===-1)return;c<=l&&(a=c)}if(s=r[a]||n.target,s!==t){Gs(n,"currentTarget",{configurable:!0,get(){return s||e}});var u=jt,d=$t;ke(null),wn(null);try{for(var f,p=[];s!==null;){var _=s.assignedSlot||s.parentNode||s.host||null;try{var v=s["__"+i];if(v!=null&&(!s.disabled||n.target===s))if(Js(v)){var[m,...h]=v;m.apply(s,[n,...h])}else v.call(s,n)}catch(T){f?p.push(T):f=T}if(n.cancelBubble||_===t||_===null)break;s=_}if(f){for(let T of p)queueMicrotask(()=>{throw T});throw f}}finally{n.__root=t,delete n.currentTarget,ke(u),wn(d)}}}function Df(n){var t=document.createElement("template");return t.innerHTML=n.replaceAll("<!>","<!---->"),t.content}function eo(n,t){var e=$t;e.nodes_start===null&&(e.nodes_start=n,e.nodes_end=t)}function ue(n,t){var e=(t&kh)!==0,i=(t&Vh)!==0,r,s=!n.startsWith("<!>");return()=>{r===void 0&&(r=Df(s?n:"<!>"+n),e||(r=Xs(r)));var a=i||hu?document.importNode(r,!0):r.cloneNode(!0);if(e){var o=Xs(a),c=a.lastChild;eo(o,c)}else eo(a,a);return a}}function hr(){var n=document.createDocumentFragment(),t=document.createComment(""),e=Jr();return n.append(t,e),eo(t,e),n}function Kt(n,t){n!==null&&n.before(t)}function de(n,t){var e=t==null?"":typeof t=="object"?t+"":t;e!==(n.__t??=n.nodeValue)&&(n.__t=e,n.nodeValue=e+"")}function Lf(n,t){return Uf(n,t)}const Vi=new Map;function Uf(n,{target:t,anchor:e,props:i={},events:r,context:s,intro:a=!0}){lf();var o=new Set,c=d=>{for(var f=0;f<d.length;f++){var p=d[f];if(!o.has(p)){o.add(p);var _=Rf(p);t.addEventListener(p,Fr,{passive:_});var v=Vi.get(p);v===void 0?(document.addEventListener(p,Fr,{passive:_}),Vi.set(p,1)):Vi.set(p,v+1)}}};c(Yo(Cf)),Fl.add(c);var l=void 0,u=mf(()=>{var d=e??t.appendChild(Jr());return tf(d,{pending:()=>{}},f=>{if(s){li({});var p=pe;p.c=s}r&&(i.$$events=r),l=n(f,i)||{},s&&ci()}),()=>{for(var f of o){t.removeEventListener(f,Fr);var p=Vi.get(f);--p===0?(document.removeEventListener(f,Fr),Vi.delete(f)):Vi.set(f,p)}Fl.delete(c),d!==e&&d.parentNode?.removeChild(d)}});return If.set(l,u),l}let If=new WeakMap;function Se(n,t,e=!1){var i=n,r=null,s=null,a=Ce,o=e?ta:0,c=!1;const l=(p,_=!0)=>{c=!0,f(_,p)};var u=null;function d(){u!==null&&(u.lastChild.remove(),i.before(u),u=null);var p=a?r:s,_=a?s:r;p&&rl(p),_&&lr(_,()=>{a?s=null:r=null})}const f=(p,_)=>{if(a!==(a=p)){var v=pu(),m=i;if(v&&(u=document.createDocumentFragment(),u.append(m=Jr())),a?r??=_&&hn(()=>_(m)):s??=_&&hn(()=>_(m)),v){var h=me,T=a?r:s,y=a?s:r;T&&h.skipped_effects.delete(T),y&&h.skipped_effects.add(y),h.add_callback(d)}else d()}};nl(()=>{c=!1,t(l),c||f(null,null)},o)}function Nf(n,t){return t}function Ff(n,t,e){for(var i=n.items,r=[],s=t.length,a=0;a<s;a++)il(t[a].e,r,!0);var o=s>0&&r.length===0&&e!==null;if(o){var c=e.parentNode;cf(c),c.append(e),i.clear(),Mn(n,t[0].prev,t[s-1].next)}Mu(r,()=>{for(var l=0;l<s;l++){var u=t[l];o||(i.delete(u.k),Mn(n,u.prev,u.next)),on(u.e,!o)}})}function Of(n,t,e,i,r,s=null){var a=n,o={flags:t,items:new Map,first:null};{var c=n;a=c.appendChild(Jr())}var l=null,u=!1,d=new Map,f=Qo(()=>{var m=e();return Js(m)?m:m==null?[]:Yo(m)}),p,_;function v(){Bf(_,p,o,d,a,r,t,i,e),s!==null&&(p.length===0?l?rl(l):l=hn(()=>s(a)):l!==null&&lr(l,()=>{l=null}))}nl(()=>{_??=$t,p=dt(f);var m=p.length;if(!(u&&m===0)){u=m===0;var h,T,y,E;if(pu()){var C=new Set,A=me;for(T=0;T<m;T+=1){y=p[T],E=i(y,T);var R=o.items.get(E)??d.get(E);R?wu(R,y,T):(h=Ru(null,o,null,null,y,E,T,r,t,e,!0),d.set(E,h)),C.add(E)}for(const[N,M]of o.items)C.has(N)||A.skipped_effects.add(M.e);A.add_callback(v)}else v();dt(f)}})}function Bf(n,t,e,i,r,s,a,o,c){var l=t.length,u=e.items,d=e.first,f=d,p,_=null,v=[],m=[],h,T,y,E;for(E=0;E<l;E+=1){if(h=t[E],T=o(h,E),y=u.get(T),y===void 0){var C=i.get(T);if(C!==void 0){i.delete(T),u.set(T,C);var A=_?_.next:f;Mn(e,_,C),Mn(e,C,A),ha(C,A,r),_=C}else{var R=f?f.e.nodes_start:r;_=Ru(R,e,_,_===null?e.first:_.next,h,T,E,s,a,c)}u.set(T,_),v=[],m=[],f=_.next;continue}if(wu(y,h,E),(y.e.f&_n)!==0&&rl(y.e),y!==f){if(p!==void 0&&p.has(y)){if(v.length<m.length){var N=m[0],M;_=N.prev;var S=v[0],P=v[v.length-1];for(M=0;M<v.length;M+=1)ha(v[M],N,r);for(M=0;M<m.length;M+=1)p.delete(m[M]);Mn(e,S.prev,P.next),Mn(e,_,S),Mn(e,P,N),f=N,_=P,E-=1,v=[],m=[]}else p.delete(y),ha(y,f,r),Mn(e,y.prev,y.next),Mn(e,y,_===null?e.first:_.next),Mn(e,_,y),_=y;continue}for(v=[],m=[];f!==null&&f.k!==T;)(f.e.f&_n)===0&&(p??=new Set).add(f),m.push(f),f=f.next;if(f===null)continue;y=f}v.push(y),_=y,f=y.next}if(f!==null||p!==void 0){for(var L=p===void 0?[]:Yo(p);f!==null;)(f.e.f&_n)===0&&L.push(f),f=f.next;var B=L.length;if(B>0){var V=l===0?r:null;Ff(e,L,V)}}n.first=e.first&&e.first.e,n.last=_&&_.e;for(var z of i.values())on(z.e);i.clear()}function wu(n,t,e,i){Gr(n.v,t),n.i=e}function Ru(n,t,e,i,r,s,a,o,c,l,u){var d=(c&Uh)!==0,f=(c&Nh)===0,p=d?f?yn(r,!1,!1):Di(r):r,_=(c&Ih)===0?a:Di(a),v={i:_,v:p,k:s,a:null,e:null,prev:e,next:i};try{if(n===null){var m=document.createDocumentFragment();m.append(n=Jr())}return v.e=hn(()=>o(n,p,_,l),Xh),v.e.prev=e&&e.e,v.e.next=i&&i.e,e===null?u||(t.first=v):(e.next=v,e.e.next=v.e),i!==null&&(i.prev=v,i.e.prev=v.e),v}finally{}}function ha(n,t,e){for(var i=n.next?n.next.e.nodes_start:e,r=t?t.e.nodes_start:e,s=n.e.nodes_start;s!==null&&s!==i;){var a=Qr(s);r.before(s),s=a}}function Mn(n,t,e){t===null?n.first=e:(t.next=e,t.e.next=e&&e.e),e!==null&&(e.prev=t,e.e.prev=t&&t.e)}function zf(n,t,e){var i=n==null?"":""+n;return t&&(i=i?i+" "+t:t),i===""?null:i}function Hf(n,t){return n==null?null:String(n)}function Cu(n,t,e,i,r,s){var a=n.__className;if(a!==e||a===void 0){var o=zf(e,i);o==null?n.removeAttribute("class"):n.className=o,n.__className=e}return s}function Bl(n,t,e,i){var r=n.__style;if(r!==t){var s=Hf(t);s==null?n.removeAttribute("style"):n.style.cssText=s,n.__style=t}return i}const kf=Symbol("is custom element"),Vf=Symbol("is html");function Gf(n,t,e,i){var r=Wf(n);r[t]!==(r[t]=e)&&(e==null?n.removeAttribute(t):typeof e!="string"&&Xf(n).includes(t)?n[t]=e:n.setAttribute(t,e))}function Wf(n){return n.__attributes??={[kf]:n.nodeName.includes("-"),[Vf]:n.namespaceURI===Gh}}var zl=new Map;function Xf(n){var t=n.getAttribute("is")||n.nodeName,e=zl.get(t);if(e)return e;zl.set(t,e=[]);for(var i,r=n,s=Element.prototype;s!==r;){i=Kc(r);for(var a in i)i[a].set&&e.push(a);r=jo(r)}return e}function qf(n,t,e=t){var i=new WeakSet;hf(n,"input",async r=>{var s=r?n.defaultValue:n.value;if(s=fa(n)?da(s):s,e(s),me!==null&&i.add(me),await Tf(),s!==(s=t())){var a=n.selectionStart,o=n.selectionEnd;n.value=s??"",o!==null&&(n.selectionStart=a,n.selectionEnd=Math.min(o,n.value.length))}}),Xt(t)==null&&n.value&&(e(fa(n)?da(n.value):n.value),me!==null&&i.add(me)),ts(()=>{var r=t();if(n===document.activeElement){var s=Fs??me;if(i.has(s))return}fa(n)&&r===da(n.value)||n.type==="date"&&!r&&!n.value||r!==n.value&&(n.value=r??"")})}function fa(n){var t=n.type;return t==="number"||t==="range"}function da(n){return n===""?null:+n}function Hl(n,t){return n===t||n?.[Ri]===t}function Yf(n={},t,e,i){return _f(()=>{var r,s;return ts(()=>{r=s,s=[],Xt(()=>{n!==e(...s)&&(t(n,...s),r&&Hl(e(...r),n)&&t(null,...r))})}),()=>{Zr(()=>{s&&Hl(e(...s),n)&&t(null,...s)})}}),n}function zi(n=!1){const t=pe,e=t.l.u;if(!e)return;let i=()=>ne(t.s);if(n){let r=0,s={};const a=ia(()=>{let o=!1;const c=t.s;for(const l in c)c[l]!==s[l]&&(s[l]=c[l],o=!0);return o&&r++,r});i=()=>dt(a)}e.b.length&&pf(()=>{kl(t,i),$a(e.b)}),Qa(()=>{const r=Xt(()=>e.m.map(Mh));return()=>{for(const s of r)typeof s=="function"&&s()}}),e.a.length&&Qa(()=>{kl(t,i),$a(e.a)})}function kl(n,t){if(n.l.s)for(const e of n.l.s)dt(e);t()}function Pu(n,t,e){if(n==null)return t(void 0),Ai;const i=Xt(()=>n.subscribe(t,e));return i.unsubscribe?()=>i.unsubscribe():i}const Gi=[];function Du(n,t=Ai){let e=null;const i=new Set;function r(o){if(tu(n,o)&&(n=o,e)){const c=!Gi.length;for(const l of i)l[1](),Gi.push(l,n);if(c){for(let l=0;l<Gi.length;l+=2)Gi[l][0](Gi[l+1]);Gi.length=0}}}function s(o){r(o(n))}function a(o,c=Ai){const l=[o,c];return i.add(l),i.size===1&&(e=t(r,s)||Ai),o(n),()=>{i.delete(l),i.size===0&&e&&(e(),e=null)}}return{set:r,update:s,subscribe:a}}function jf(n){let t;return Pu(n,e=>t=e)(),t}let cs=!1,no=Symbol();function Lu(n,t,e){const i=e[t]??={store:null,source:yn(void 0),unsubscribe:Ai};if(i.store!==n&&!(no in e))if(i.unsubscribe(),i.store=n??null,n==null)i.source.v=void 0,i.unsubscribe=Ai;else{var r=!0;i.unsubscribe=Pu(n,s=>{r?i.source.v=s:ye(i.source,s)}),r=!1}return n&&no in e?jf(n):dt(i.source)}function Uu(){const n={};function t(){el(()=>{for(var e in n)n[e].unsubscribe();Gs(n,no,{enumerable:!1,value:!0})})}return[n,t]}function $f(n){var t=cs;try{return cs=!1,[n(),cs]}finally{cs=t}}function vi(n,t,e,i){var r=!Tr||(e&Oh)!==0,s=(e&zh)!==0,a=(e&Hh)!==0,o=i,c=!0,l=()=>(c&&(c=!1,o=a?Xt(i):i),o),u;if(s){var d=Ri in n||Eh in n;u=or(n,t)?.set??(d&&t in n?y=>n[t]=y:void 0)}var f,p=!1;s?[f,p]=$f(()=>n[t]):f=n[t],f===void 0&&i!==void 0&&(f=l(),u&&(r&&Rh(),u(f)));var _;if(r?_=()=>{var y=n[t];return y===void 0?l():(c=!0,y)}:_=()=>{var y=n[t];return y!==void 0&&(o=void 0),y===void 0?o:y},r&&(e&Bh)===0)return _;if(u){var v=n.$$legacy;return(function(y,E){return arguments.length>0?((!r||!E||v||p)&&u(E?_():y),y):_()})}var m=!1,h=((e&Fh)!==0?ia:Qo)(()=>(m=!1,_()));s&&dt(h);var T=$t;return(function(y,E){if(arguments.length>0){const C=E?dt(h):r&&s?rr(y):y;return ye(h,C),m=!0,o!==void 0&&(o=C),y}return Bi&&m||(T.f&Oi)!==0?h.v:dt(h)})}function sl(n){pe===null&&Jo(),Tr&&pe.l!==null?Qf(pe).m.push(n):Qa(()=>{const t=Xt(n);if(typeof t=="function")return t})}function Kf(n){pe===null&&Jo(),sl(()=>()=>Xt(n))}function Zf(n,t,{bubbles:e=!1,cancelable:i=!1}={}){return new CustomEvent(n,{detail:t,bubbles:e,cancelable:i})}function Jf(){const n=pe;return n===null&&Jo(),(t,e,i)=>{const r=n.s.$$events?.[t];if(r){const s=Js(r)?r.slice():[r],a=Zf(t,e,i);for(const o of s)o.call(n.x,a);return!a.defaultPrevented}return!0}}function Qf(n){var t=n.l;return t.u??={a:[],b:[],m:[]}}const td="5";typeof window<"u"&&((window.__svelte??={}).v??=new Set).add(td);Yh();const fr={INTRO:"intro",SIMULATOR:"simulator",MISSION:"mission"},al=Du(fr.INTRO),ol=Du("");function ed(n){al.set(n)}function pa(n){ol.set(n)}function nd(){ol.set(""),al.set(fr.INTRO)}var id=ue(`<img src="logotype.png" alt="Astra Sentinel Logo" class="logo svelte-14bqd7u"/> <p class="mb-4 text-center text-2xl svelte-14bqd7u">Before we begin, tell us what you'd like our command system to call you:</p> <div class="flex justify-center svelte-14bqd7u"><input type="text" placeholder="Your name" class="p-3 text-center text-lg mx-auto border-2 border-white/30 rounded-xl bg-white/10 text-white my-4 min-w-[250px] backdrop-blur-md transition-all duration-300 placeholder-white/70 focus:outline-none focus:border-orange-500 focus:bg-white/15 focus:shadow-lg focus:shadow-orange-500/30"/></div>`,1),rd=ue('<p class="mb-4 max-w-4xl svelte-14bqd7u">Welcome <strong class="text-orange-300 svelte-14bqd7u"> </strong>! You have been assigned to the AstraSentinel Orbital Operations Center, the leading corporation in planetary defense and space resource exploration.</p> <p class="mb-4 max-w-4xl svelte-14bqd7u">For decades, humanity looked to the sky with wonder. Today, we do so with determination. Our mission is clear: protect Earth from cosmic threats and turn what were once risks into opportunities.</p>',1),sd=ue('<p class="mb-4 max-w-4xl svelte-14bqd7u">Space is no longer a distant territory. It is the new global security front.</p> <p class="mb-4 max-w-4xl svelte-14bqd7u">Every year, thousands of objects cross the vicinity of our planet. Most are harmless... others could wipe out humanity in a matter of days.</p> <p class="mb-4 max-w-4xl svelte-14bqd7u">AstraSentinel was born to anticipate these events and respond with surgical precision, combining science, strategy, and cutting-edge orbital technology.</p>',1),ad=ue('<p class="mb-4 max-w-4xl svelte-14bqd7u">You have been selected to begin your trial period, due to your analytical capacity and strategic vision.</p> <p class="mb-4 max-w-4xl svelte-14bqd7u">Starting today, you will be part of the Space Risk Monitoring, Mitigation and Economic Development Division.</p> <p class="mb-4 max-w-4xl svelte-14bqd7u">Your job: identify objects near Earth, evaluate their trajectory, and determine if they represent a threat... or a mining opportunity.</p>',1),od=ue('<p class="mb-4 max-w-4xl svelte-14bqd7u">To accomplish this task, you will have limited access to our orbital defense network:</p> <p class="mb-4 max-w-4xl svelte-14bqd7u"><strong class="text-orange-300 svelte-14bqd7u">Sentinel Constellation:</strong> more than 160 surveillance satellites armed with deflection lasers strategically orbiting the planet.</p> <p class="mb-4 max-w-4xl svelte-14bqd7u"><strong class="text-orange-300 svelte-14bqd7u">Ground Stations:</strong> high-power projectors capable of modifying trajectories from the surface.</p> <p class="mb-4 max-w-4xl svelte-14bqd7u"><strong class="text-orange-300 svelte-14bqd7u">Strategic Intelligence Center:</strong> a multidisciplinary team including analysts, diplomats, engineers, strategists, and planetary scientists.</p>',1),ld=ue('<p class="mb-4 max-w-4xl svelte-14bqd7u">In a few moments you will enter the orbital monitoring room.</p> <p class="mb-4 max-w-4xl svelte-14bqd7u">There you will have access to the dynamic map of the nearby solar system, where each detected object is a possible threat... or a valuable source of minerals.</p> <p class="mb-4 max-w-4xl svelte-14bqd7u">Choose your target wisely. Your decision will mark the course of our operation and the fate of our planet.</p>',1),cd=ue(`<h2 class="text-3xl md:text-2xl font-bold mb-6 text-orange-500 svelte-14bqd7u">Ready to Begin?</h2> <p class="mb-4 leading-relaxed svelte-14bqd7u">The future of Earth is in your hands, <strong class="text-orange-300 svelte-14bqd7u"> </strong>.</p> <p class="mb-4 leading-relaxed svelte-14bqd7u">When you're ready… enter the Monitoring Center.</p>`,1),ud=ue('<section class="intro w-full svelte-14bqd7u"><div class="container svelte-14bqd7u"><!> <!> <!> <!> <!> <!> <!></div> <footer class="svelte-14bqd7u"><div class="navigation-container svelte-14bqd7u"><button class="nav-btn back-btn svelte-14bqd7u" aria-label="Back"><span class="mr-2"><svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"></path></svg></span> <span class="hidden md:inline">Back</span></button> <button class="enter-btn svelte-14bqd7u">Enter Monitoring Center</button> <button class="nav-btn continue-btn svelte-14bqd7u" aria-label="Continue"><span class="hidden md:inline">Continue</span> <span class="ml-2"><svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"></path></svg></span></button></div> <div class="mt-2 md:mt-6 text-center"><span class="text-md text-white/70 mb-2 block progress-text svelte-14bqd7u"> </span> <div class="w-full h-1 bg-white/20 rounded-sm overflow-hidden"><div class="h-full bg-gradient-to-r from-green-500 to-orange-500 rounded-sm transition-all duration-500 ease-out"></div></div></div></footer></section>');function hd(n,t){li(t,!1);let e=yn(""),i=yn(1);const r=7;function s(X){const J={2:"section2-Image_fx.jpg",3:"section3-Image_fx.jpg",4:"section4-image_fx.jpg",5:"section5-Image_fx.jpg",6:"section6-Image_fx.jpg"};return J[X]?`url('${J[X]}')`:"none"}function a(){if(dt(i)===1&&!dt(e).trim()){alert("Please enter your name before continuing");return}dt(i)<r&&Pl(i)}function o(){dt(i)>1&&Pl(i,-1)}function c(){dt(e).trim()?(pa(dt(e).trim()),ed(fr.SIMULATOR)):alert("Please enter your name before continuing")}gf(()=>(dt(e),pa),()=>{dt(e).trim()&&pa(dt(e).trim())}),vf(),zi();var l=ud(),u=ft(l),d=ft(u);{var f=X=>{var J=id(),rt=wt(Vn(J),4),_t=ft(rt);qf(_t,()=>dt(e),It=>ye(e,It)),Kt(X,J)};Se(d,X=>{dt(i)===1&&X(f)})}var p=wt(d,2);{var _=X=>{var J=rd(),rt=Vn(J),_t=wt(ft(rt)),It=ft(_t);Ze(()=>de(It,dt(e))),Kt(X,J)};Se(p,X=>{dt(i)===2&&X(_)})}var v=wt(p,2);{var m=X=>{var J=sd();Kt(X,J)};Se(v,X=>{dt(i)===3&&X(m)})}var h=wt(v,2);{var T=X=>{var J=ad();Kt(X,J)};Se(h,X=>{dt(i)===4&&X(T)})}var y=wt(h,2);{var E=X=>{var J=od();Kt(X,J)};Se(y,X=>{dt(i)===5&&X(E)})}var C=wt(y,2);{var A=X=>{var J=ld();Kt(X,J)};Se(C,X=>{dt(i)===6&&X(A)})}var R=wt(C,2);{var N=X=>{var J=cd(),rt=wt(Vn(J),2),_t=wt(ft(rt)),It=ft(_t);Ze(()=>de(It,dt(e))),Kt(X,J)};Se(R,X=>{dt(i)===7&&X(N)})}var M=wt(u,2),S=ft(M),P=ft(S),L=wt(P,2),B=wt(L,2),V=wt(S,2),z=ft(V),G=ft(z),Y=wt(z,2),k=ft(Y);Ze(X=>{Bl(u,`background-image: ${X??""}`),P.disabled=dt(i)===1||dt(i)===r,Gf(L,"hidden",dt(i)!==7),B.disabled=dt(i)===r,de(G,`Section ${dt(i)??""} of 7`),Bl(k,`width: ${dt(i)/r*100}%`)},[()=>(dt(i),Xt(()=>s(dt(i))))]),ur("click",P,o),ur("click",L,c),ur("click",B,a),Kt(n,l),ci()}function fd(n){return`/meteor-madness/${n}`}function dd(n){if(!n||typeof n!="string")throw new Error("CSV text must be a valid string");const t=n.trim().split(`
`);if(t.length<2)throw new Error("CSV file must have at least one header row and one data row");const e=Vl(t[0]);return t.slice(1).map((i,r)=>{try{const s=Vl(i),a={};return e.forEach((o,c)=>{const l=s[c]||"";a[o]=l}),a}catch(s){return console.warn(`Error parsing row ${r+2}: ${s.message}`),null}}).filter(i=>i!==null)}function Vl(n){const t=[];let e="",i=!1,r=0;for(;r<n.length;){const s=n[r];s==='"'?i&&n[r+1]==='"'?(e+='"',r+=2):(i=!i,r++):s===","&&!i?(t.push(e.trim()),e="",r++):(e+=s,r++)}return t.push(e.trim()),t.map(s=>{const a=s.trim();return a.startsWith('"')&&a.endsWith('"')&&a.length>=2?a.slice(1,-1):a})}async function Gl(n){try{console.log(`Loading CSV from: ${n}`);const t=await fetch(n);if(!t.ok)throw new Error(`HTTP error! status: ${t.status} - URL: ${n}`);const e=await t.text();return dd(e)}catch(t){throw console.error(`Error loading CSV from ${n}:`,t),t}}async function pd(n,t=[]){try{const e=fd(n);return await Gl(e)}catch(e){console.warn("Falló carga principal:",e.message);const i=[`./${n}`,`../../../public/${n}`,`/public/${n}`],r=[...t,...i];for(const s of r)try{return console.log(`Trying alternative URL: ${s}`),await Gl(s)}catch(a){console.log(`Failed alternative URL ${s}:`,a.message)}throw new Error(`Could not load ${n}. Main error: ${e.message}`)}}async function md(n,t={}){const{alternativeUrls:e=[],logProgress:i=!0}=t;try{i&&console.log(`Iniciando carga de ${n}...`);const r=await pd(n,e),s=r.length>0?Object.keys(r[0]):[];return i&&(console.log("✅ CSV cargado exitosamente:"),console.log(`   - Archivo: ${n}`),console.log(`   - Filas: ${r.length}`),console.log(`   - Columnas: ${s.length}`),console.log(`   - Headers: ${s.slice(0,5).join(", ")}${s.length>5?"...":""}`)),{data:r,headers:s,count:r.length}}catch(r){throw i&&console.error(`❌ Error loading ${n}:`,r.message),r}}function _d(n){if(!Array.isArray(n))throw new Error("Data must be an array");return n.map((t,e)=>{try{return gd(t,e)}catch(i){return console.warn(`Error processing asteroid at position ${e}:`,i.message),null}}).filter(t=>t!==null)}function gd(n,t=0){if(!n||typeof n!="object")throw new Error("Asteroid data must be a valid object");const e=vd(n.full_name),i={a:Un(n.a),e:Un(n.e),i:Un(n.i),om:Un(n.om),w:Un(n.w),q:Un(n.q),ad:Un(n.ad),per_y:Un(n.per_y),H:Un(n.H)},r=Md(i,n),s=Sd(i),a=Ed(i.H),o=yd(i),c=bd(i);return{id:xd(n,t),name:e,orbitalVelocity:s,approximateDiameter:a,approachDate:o,composition:c,orbitalData:i,simulationData:{orbitalRadius:r.orbitalRadius,orbitalSpeed:r.orbitalSpeed,asteroidSize:r.asteroidSize,orbitInclination:r.orbitInclination,eccentricity:r.eccentricity,isHazardous:r.isHazardous,colorHue:r.colorHue,brightness:r.brightness,semiMajorAxis:i.a,eccentricityValue:i.e,inclination:i.i,longitudeAscendingNode:i.om,argumentPerihelion:i.w,orbitalPeriod:i.per_y,hasValidOrbit:r.hasValidOrbit,dataReliability:r.dataReliability},dataQuality:Wl(n).quality,dataQualityDetails:Wl(n),rawData:n}}function vd(n){if(!n||typeof n!="string")return"Asteroide Desconocido";let t=n.replace(/"/g,"").trim();const e=t.indexOf("(");return e>0&&(t=t.substring(0,e).trim()),t=t.replace(/^\s*\d+\s+/,"").trim(),t||"Asteroide Sin Nombre"}function xd(n,t){const e=n.full_name||"";let i=0;for(let r=0;r<e.length;r++){const s=e.charCodeAt(r);i=(i<<5)-i+s,i=i&i}return`ast_${Math.abs(i).toString(16)}_${t}`}function Un(n){if(n==null||n==="")return null;const t=parseFloat(n);return isNaN(t)?null:t}function Wl(n){const t=parseInt(n.condition_code)||9,e=parseInt(n.n_obs_used)||0,i=parseInt(n.data_arc)||0,r=parseInt(n.n_dop_obs_used)||0,s=parseInt(n.n_del_obs_used)||0;let a=0,o=[];t<=1?(a+=30,o.push("Excellent orbital accuracy")):t<=3?(a+=25,o.push("Very good orbital accuracy")):t<=5?(a+=15,o.push("Good orbital accuracy")):t<=7?(a+=5,o.push("Fair orbital accuracy")):o.push("Limited orbital accuracy"),e>=500?(a+=25,o.push("Extensive observation history")):e>=100?(a+=20,o.push("Good observation coverage")):e>=50?(a+=15,o.push("Adequate observations")):e>=20?(a+=10,o.push("Limited observations")):o.push("Minimal observation data"),i>=3650?(a+=20,o.push("Long-term tracking")):i>=1825?(a+=15,o.push("Multi-year observations")):i>=365?(a+=10,o.push("Annual observation span")):i>=30&&(a+=5,o.push("Short-term tracking")),(r>0||s>0)&&(a+=15,o.push("Radar observations available")),n.a&&n.e&&n.i&&(a+=10,o.push("Complete orbital elements"));let l;return a>=80?l="excellent":a>=60?l="good":a>=40?l="fair":l="poor",{quality:l,score:a,factors:o,metrics:{conditionCode:t,observations:e,dataArcDays:i,radarObservations:r+s}}}function Md(n,t){let s=2.5;n.a!==null&&n.a>0?s=Math.max(1,Math.min(8,n.a)):n.q!==null&&n.q>0&&(s=Math.max(1,Math.min(8,n.q*1.5)));let a=.01;n.per_y!==null&&n.per_y>0&&(a=Math.max(.002,Math.min(.05,1/n.per_y)));let o=.05;if(n.H!==null){const m=Math.max(10,Math.min(30,n.H));o=Math.max(.02,Math.min(.3,.5*Math.pow(10,-(m-15)/5)))}let c=0;n.i!==null&&(c=n.i*Math.PI/180);let l=!1;n.q!==null&&n.H!==null&&(l=n.q<1.3&&n.H<22);let u=.1;l?u=0:n.H!==null&&n.H<18&&(u=.15);let d=.8;n.H!==null&&(d=Math.max(.3,Math.min(1,1-(n.H-10)/20)));const f=n.a!==null&&n.e!==null&&n.a>0&&n.e>=0&&n.e<1;let p=.5;const _=parseInt(t.condition_code)||9,v=parseInt(t.n_obs_used)||0;return _<=2&&v>=100?p=.95:_<=4&&v>=50?p=.8:_<=6&&v>=10?p=.6:p=.3,{orbitalRadius:s,orbitalSpeed:a,asteroidSize:o,orbitInclination:c,eccentricity:n.e||.1,isHazardous:l,colorHue:u,brightness:d,hasValidOrbit:f,dataReliability:p}}function Sd(n){if(!n.a||n.a<=0)return null;const t=1327e17,i=n.a*1496e8,s=Math.sqrt(t/i)/1e3;return Math.round(s*100)/100}function Ed(n){if(n==null)return null;const e=1329/Math.sqrt(.14)*Math.pow(10,-.2*n);return Math.round(e*100)/100}function yd(n){if(!n.per_y||n.per_y<=0)return"Undetermined";const t=new Date().getFullYear(),e=n.per_y;let i=t;if(e>2){const o=e-(t-2e3)%e;i=t+Math.ceil(o)}else i=t+Math.ceil(e);const s=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][Math.floor(Math.random()*12)],a=Math.floor(Math.random()*28)+1;return`~${s} ${a}, ${i}`}function bd(n,t){if(!n.a)return"Unknown";const e=n.a,i=n.H;return e<2?"S-type (Silicate)":e<2.8?i&&i<15?"M-type (Metallic)":"S-type (Silicate)":e<3.3?"C-type (Carbonaceous)":"P-type (Primitive)"}var Td=ue('<div class="loading-indicator svelte-1ywivwj"><div class="spinner svelte-1ywivwj"></div> <p class="svelte-1ywivwj">Loading asteroid data...</p></div>'),Ad=ue('<div class="error-indicator svelte-1ywivwj"><p class="svelte-1ywivwj"> </p> <p class="svelte-1ywivwj">Retry loading</p></div>'),wd=ue('<div class="loading svelte-1ywivwj"><div class="spinner svelte-1ywivwj"></div> <p class="svelte-1ywivwj">Scanning space...</p></div>'),Rd=ue('<button><span class="danger-indicator svelte-1ywivwj"> </span> <div class="asteroid-basic-info svelte-1ywivwj"><div class="name svelte-1ywivwj"> </div> <div class="distance svelte-1ywivwj"> </div></div> <div class="select-arrow svelte-1ywivwj">▶</div></button>'),Cd=ue('<div class="asteroids-list svelte-1ywivwj"></div>'),Pd=ue('<div class="data-info svelte-1ywivwj"><small class="svelte-1ywivwj"> </small></div>'),Dd=ue('<div class="debug-controls svelte-1ywivwj"><button class="debug-btn svelte-1ywivwj">🔍 Debug: Recargar CSV</button></div>'),Ld=ue('<div class="neo-list svelte-1ywivwj"><h3 class="svelte-1ywivwj"> </h3> <!> <div class="list-footer svelte-1ywivwj"><!></div></div>');function Ud(n,t){li(t,!1);let e=vi(t,"asteroids",24,()=>[]),i=vi(t,"selectedAsteroid",8,null),r=vi(t,"isLoading",8,!1),s=vi(t,"loadError",8,null),a=vi(t,"csvAsteroids",24,()=>[]),o=vi(t,"onDebugReload",8,null);const c=Jf();function l(A){return A.simulationData?.isHazardous?"🔴":A.simulationData?.asteroidSize>.1?"🟡":"🟢"}function u(A){return A?`${A.toFixed(2)} AU`:"Unknown"}function d(A){c("asteroidSelected",A)}zi();var f=Ld(),p=ft(f),_=ft(p),v=wt(p,2);{var m=A=>{var R=Td();Kt(A,R)},h=A=>{var R=hr(),N=Vn(R);{var M=P=>{var L=Ad(),B=ft(L),V=ft(B);Ze(()=>de(V,`⚠️ Error: ${s()??""}`)),Kt(P,L)},S=P=>{var L=hr(),B=Vn(L);{var V=G=>{var Y=wd();Kt(G,Y)},z=G=>{var Y=Cd();Of(Y,5,e,Nf,(k,X)=>{var J=Rd(),rt=ft(J),_t=ft(rt),It=wt(rt,2),Ht=ft(It),Ot=ft(Ht),q=wt(Ht,2),K=ft(q);Ze((ot,xt)=>{Cu(J,1,`asteroid-item ${ne(i()),dt(X),Xt(()=>i()?.name===dt(X).name?"selected":"")??""}`,"svelte-1ywivwj"),de(_t,ot),de(Ot,(dt(X),Xt(()=>dt(X).name))),de(K,xt)},[()=>(dt(X),Xt(()=>l(dt(X)))),()=>(dt(X),Xt(()=>u(dt(X).simulationData?.orbitalRadius)))]),ur("click",J,()=>d(dt(X))),Kt(k,J)}),Kt(G,Y)};Se(B,G=>{ne(e()),Xt(()=>e().length===0)?G(V):G(z,!1)},!0)}Kt(P,L)};Se(N,P=>{s()?P(M):P(S,!1)},!0)}Kt(A,R)};Se(v,A=>{r()?A(m):A(h,!1)})}var T=wt(v,2),y=ft(T);{var E=A=>{var R=Pd(),N=ft(R),M=ft(N);Ze(()=>de(M,`📊 CSV Data: ${ne(a()),Xt(()=>a().length)??""} asteroids loaded`)),Kt(A,R)},C=A=>{var R=hr(),N=Vn(R);{var M=S=>{var P=Dd(),L=ft(P);ur("click",L,function(...B){o()?.apply(this,B)}),Kt(S,P)};Se(N,S=>{ne(r()),ne(e()),ne(o()),Xt(()=>!r()&&e().length===0&&o())&&S(M)},!0)}Kt(A,R)};Se(y,A=>{ne(a()),Xt(()=>a().length>0)?A(E):A(C,!1)})}Ze(()=>de(_,`Detected Asteroids (${ne(e()),Xt(()=>e().length)??""})`)),Kt(n,f),ci()}var Id=ue('<div class="hazard-alert svelte-1y5r34g">⚠️ Potentially Hazardous Object (PHO)</div>'),Nd=ue('<span class="quality-score svelte-1y5r34g"> </span>'),Fd=ue('<div class="metric-item svelte-1y5r34g"><span class="metric-label svelte-1y5r34g">Radar Obs:</span> <span class="metric-value svelte-1y5r34g"> </span></div>'),Od=ue('<div class="detail-section svelte-1y5r34g"><h6 class="svelte-1y5r34g">📊 Data Metrics</h6> <div class="metrics-grid svelte-1y5r34g"><div class="metric-item svelte-1y5r34g"><span class="metric-label svelte-1y5r34g">Observations:</span> <span class="metric-value svelte-1y5r34g"> </span></div> <div class="metric-item svelte-1y5r34g"><span class="metric-label svelte-1y5r34g">Data Arc:</span> <span class="metric-value svelte-1y5r34g"> </span></div> <div class="metric-item svelte-1y5r34g"><span class="metric-label svelte-1y5r34g">Condition Code:</span> <span class="metric-value svelte-1y5r34g"> </span></div> <!></div></div>'),Bd=ue('<div class="detail-section svelte-1y5r34g"><h6 class="svelte-1y5r34g">🛰️ Orbital Parameters</h6> <div class="orbital-grid svelte-1y5r34g"><div class="orbital-item svelte-1y5r34g"><span class="metric-label svelte-1y5r34g">Semi-major Axis:</span> <span class="metric-value svelte-1y5r34g"> </span></div> <div class="orbital-item svelte-1y5r34g"><span class="metric-label svelte-1y5r34g">Eccentricity:</span> <span class="metric-value svelte-1y5r34g"> </span></div> <div class="orbital-item svelte-1y5r34g"><span class="metric-label svelte-1y5r34g">Inclination:</span> <span class="metric-value svelte-1y5r34g"> </span></div> <div class="orbital-item svelte-1y5r34g"><span class="metric-label svelte-1y5r34g">Orbital Period:</span> <span class="metric-value svelte-1y5r34g"> </span></div></div></div>'),zd=ue('<div class="asteroid-details svelte-1y5r34g"><h4 class="svelte-1y5r34g">📋 Asteroid Details</h4> <div class="detail-card svelte-1y5r34g"><h5 class="svelte-1y5r34g"> </h5> <!> <div class="detail-grid svelte-1y5r34g"><div class="detail-item svelte-1y5r34g"><span class="label svelte-1y5r34g">Orbital Velocity:</span> <span class="value svelte-1y5r34g"> </span></div> <div class="detail-item svelte-1y5r34g"><span class="label svelte-1y5r34g">Approximate Diameter:</span> <span class="value svelte-1y5r34g"> </span></div> <div class="detail-item svelte-1y5r34g"><span class="label svelte-1y5r34g">Approach Date:</span> <span class="value svelte-1y5r34g"> </span></div> <div class="detail-item svelte-1y5r34g"><span class="label svelte-1y5r34g">Composition:</span> <span class="value svelte-1y5r34g"> </span></div> <div class="detail-item svelte-1y5r34g"><span class="label svelte-1y5r34g">Data Quality:</span> <span> <!></span></div> <!> <!></div></div></div>'),Hd=ue('<div class="no-selection svelte-1y5r34g"><p>Select an asteroid from the list to view its details</p></div>');function kd(n,t){li(t,!1);let e=vi(t,"selectedAsteroid",8,null);function i(c){return{excellent:"Excellent",good:"Good",fair:"Fair",poor:"Limited"}[c]||"Unknown"}zi();var r=hr(),s=Vn(r);{var a=c=>{var l=zd(),u=wt(ft(l),2),d=ft(u),f=ft(d),p=wt(d,2);{var _=rt=>{var _t=Id();Kt(rt,_t)};Se(p,rt=>{ne(e()),Xt(()=>e().simulationData?.isHazardous)&&rt(_)})}var v=wt(p,2),m=ft(v),h=wt(ft(m),2),T=ft(h),y=wt(m,2),E=wt(ft(y),2),C=ft(E),A=wt(y,2),R=wt(ft(A),2),N=ft(R),M=wt(A,2),S=wt(ft(M),2),P=ft(S),L=wt(M,2),B=wt(ft(L),2),V=ft(B),z=wt(V);{var G=rt=>{var _t=Nd(),It=ft(_t);Ze(()=>de(It,`(${ne(e()),Xt(()=>e().dataQualityDetails.score)??""}/100)`)),Kt(rt,_t)};Se(z,rt=>{ne(e()),Xt(()=>e().dataQualityDetails)&&rt(G)})}var Y=wt(L,2);{var k=rt=>{var _t=Od(),It=wt(ft(_t),2),Ht=ft(It),Ot=wt(ft(Ht),2),q=ft(Ot),K=wt(Ht,2),ot=wt(ft(K),2),xt=ft(ot),pt=wt(K,2),Ft=wt(ft(pt),2),ie=ft(Ft),w=wt(pt,2);{var te=Ct=>{var Pt=Fd(),gt=wt(ft(Pt),2),re=ft(gt);Ze(()=>de(re,(ne(e()),Xt(()=>e().dataQualityDetails.metrics.radarObservations)))),Kt(Ct,Pt)};Se(w,Ct=>{ne(e()),Xt(()=>e().dataQualityDetails.metrics.radarObservations>0)&&Ct(te)})}Ze(Ct=>{de(q,(ne(e()),Xt(()=>e().dataQualityDetails.metrics.observations))),de(xt,`${Ct??""} years`),de(ie,(ne(e()),Xt(()=>e().dataQualityDetails.metrics.conditionCode)))},[()=>(ne(e()),Xt(()=>Math.round(e().dataQualityDetails.metrics.dataArcDays/365*10)/10))]),Kt(rt,_t)};Se(Y,rt=>{ne(e()),Xt(()=>e().dataQualityDetails&&e().dataQualityDetails.metrics)&&rt(k)})}var X=wt(Y,2);{var J=rt=>{var _t=Bd(),It=wt(ft(_t),2),Ht=ft(It),Ot=wt(ft(Ht),2),q=ft(Ot),K=wt(Ht,2),ot=wt(ft(K),2),xt=ft(ot),pt=wt(K,2),Ft=wt(ft(pt),2),ie=ft(Ft),w=wt(pt,2),te=wt(ft(w),2),Ct=ft(te);Ze((Pt,gt,re,Mt)=>{de(q,Pt),de(xt,gt),de(ie,re),de(Ct,Mt)},[()=>(ne(e()),Xt(()=>e().orbitalData.a?e().orbitalData.a.toFixed(3)+" AU":"N/A")),()=>(ne(e()),Xt(()=>e().orbitalData.e?e().orbitalData.e.toFixed(4):"N/A")),()=>(ne(e()),Xt(()=>e().orbitalData.i?e().orbitalData.i.toFixed(2)+"°":"N/A")),()=>(ne(e()),Xt(()=>e().orbitalData.per_y?e().orbitalData.per_y.toFixed(2)+" years":"N/A"))]),Kt(rt,_t)};Se(X,rt=>{ne(e()),Xt(()=>e().orbitalData)&&rt(J)})}Ze(rt=>{de(f,(ne(e()),Xt(()=>e().name))),de(T,(ne(e()),Xt(()=>e().orbitalVelocity?`${e().orbitalVelocity} km/s`:"Calculating..."))),de(C,(ne(e()),Xt(()=>e().approximateDiameter?`${e().approximateDiameter} km`:"Calculating..."))),de(N,(ne(e()),Xt(()=>e().approachDate||"To be determined"))),de(P,(ne(e()),Xt(()=>e().composition||"Analyzing..."))),Cu(B,1,`value quality-${ne(e()),Xt(()=>e().dataQuality)??""}`,"svelte-1y5r34g"),de(V,`${rt??""} `)},[()=>(ne(e()),Xt(()=>i(e().dataQuality)))]),Kt(c,l)},o=c=>{var l=Hd();Kt(c,l)};Se(s,c=>{e()?c(a):c(o,!1)})}Kt(n,r),ci()}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ll="180",dr={ROTATE:0,DOLLY:1,PAN:2},sr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Vd=0,Xl=1,Gd=2,Iu=1,Wd=2,zn=3,ai=0,Ve=1,Hn=2,ri=0,pr=1,ql=2,Yl=3,jl=4,Xd=5,Si=100,qd=101,Yd=102,jd=103,$d=104,Kd=200,Zd=201,Jd=202,Qd=203,io=204,ro=205,tp=206,ep=207,np=208,ip=209,rp=210,sp=211,ap=212,op=213,lp=214,so=0,ao=1,oo=2,xr=3,lo=4,co=5,uo=6,ho=7,Nu=0,cp=1,up=2,si=0,hp=1,fp=2,dp=3,pp=4,mp=5,_p=6,gp=7,Fu=300,Mr=301,Sr=302,fo=303,po=304,sa=306,mo=1e3,bi=1001,_o=1002,gn=1003,vp=1004,us=1005,bn=1006,ma=1007,Ti=1008,Rn=1009,Ou=1010,Bu=1011,Xr=1012,cl=1013,Li=1014,kn=1015,ns=1016,ul=1017,hl=1018,qr=1020,zu=35902,Hu=35899,ku=1021,Vu=1022,mn=1023,Yr=1026,jr=1027,Gu=1028,fl=1029,Wu=1030,dl=1031,pl=1033,Os=33776,Bs=33777,zs=33778,Hs=33779,go=35840,vo=35841,xo=35842,Mo=35843,So=36196,Eo=37492,yo=37496,bo=37808,To=37809,Ao=37810,wo=37811,Ro=37812,Co=37813,Po=37814,Do=37815,Lo=37816,Uo=37817,Io=37818,No=37819,Fo=37820,Oo=37821,Bo=36492,zo=36494,Ho=36495,ko=36283,Vo=36284,Go=36285,Wo=36286,xp=3200,Mp=3201,Xu=0,Sp=1,ei="",rn="srgb",Er="srgb-linear",Ys="linear",ae="srgb",Wi=7680,$l=519,Ep=512,yp=513,bp=514,qu=515,Tp=516,Ap=517,wp=518,Rp=519,Kl=35044,Zl="300 es",Tn=2e3,js=2001;class Hi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const r=i[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}}const De=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ks=Math.PI/180,Xo=180/Math.PI;function is(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(De[n&255]+De[n>>8&255]+De[n>>16&255]+De[n>>24&255]+"-"+De[t&255]+De[t>>8&255]+"-"+De[t>>16&15|64]+De[t>>24&255]+"-"+De[e&63|128]+De[e>>8&255]+"-"+De[e>>16&255]+De[e>>24&255]+De[i&255]+De[i>>8&255]+De[i>>16&255]+De[i>>24&255]).toLowerCase()}function qt(n,t,e){return Math.max(t,Math.min(e,n))}function Cp(n,t){return(n%t+t)%t}function _a(n,t,e){return(1-e)*n+e*t}function Cr(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ze(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Pp={DEG2RAD:ks};class zt{constructor(t=0,e=0){zt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=qt(this.x,t.x,e.x),this.y=qt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=qt(this.x,t,e),this.y=qt(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(qt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*i-a*r+t.x,this.y=s*r+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ui{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,s,a,o){let c=i[r+0],l=i[r+1],u=i[r+2],d=i[r+3];const f=s[a+0],p=s[a+1],_=s[a+2],v=s[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=d;return}if(o===1){t[e+0]=f,t[e+1]=p,t[e+2]=_,t[e+3]=v;return}if(d!==v||c!==f||l!==p||u!==_){let m=1-o;const h=c*f+l*p+u*_+d*v,T=h>=0?1:-1,y=1-h*h;if(y>Number.EPSILON){const C=Math.sqrt(y),A=Math.atan2(C,h*T);m=Math.sin(m*A)/C,o=Math.sin(o*A)/C}const E=o*T;if(c=c*m+f*E,l=l*m+p*E,u=u*m+_*E,d=d*m+v*E,m===1-o){const C=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=C,l*=C,u*=C,d*=C}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,r,s,a){const o=i[r],c=i[r+1],l=i[r+2],u=i[r+3],d=s[a],f=s[a+1],p=s[a+2],_=s[a+3];return t[e]=o*_+u*d+c*p-l*f,t[e+1]=c*_+u*f+l*d-o*p,t[e+2]=l*_+u*p+o*f-c*d,t[e+3]=u*_-o*d-c*f-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(i/2),u=o(r/2),d=o(s/2),f=c(i/2),p=c(r/2),_=c(s/2);switch(a){case"XYZ":this._x=f*u*d+l*p*_,this._y=l*p*d-f*u*_,this._z=l*u*_+f*p*d,this._w=l*u*d-f*p*_;break;case"YXZ":this._x=f*u*d+l*p*_,this._y=l*p*d-f*u*_,this._z=l*u*_-f*p*d,this._w=l*u*d+f*p*_;break;case"ZXY":this._x=f*u*d-l*p*_,this._y=l*p*d+f*u*_,this._z=l*u*_+f*p*d,this._w=l*u*d-f*p*_;break;case"ZYX":this._x=f*u*d-l*p*_,this._y=l*p*d+f*u*_,this._z=l*u*_-f*p*d,this._w=l*u*d+f*p*_;break;case"YZX":this._x=f*u*d+l*p*_,this._y=l*p*d+f*u*_,this._z=l*u*_-f*p*d,this._w=l*u*d-f*p*_;break;case"XZY":this._x=f*u*d-l*p*_,this._y=l*p*d-f*u*_,this._z=l*u*_+f*p*d,this._w=l*u*d+f*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],r=e[4],s=e[8],a=e[1],o=e[5],c=e[9],l=e[2],u=e[6],d=e[10],f=i+o+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-c)*p,this._y=(s-l)*p,this._z=(a-r)*p}else if(i>o&&i>d){const p=2*Math.sqrt(1+i-o-d);this._w=(u-c)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+l)/p}else if(o>d){const p=2*Math.sqrt(1+o-i-d);this._w=(s-l)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+d-i-o);this._w=(a-r)/p,this._x=(s+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(qt(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,r=t._y,s=t._z,a=t._w,o=e._x,c=e._y,l=e._z,u=e._w;return this._x=i*u+a*o+r*l-s*c,this._y=r*u+a*c+s*o-i*l,this._z=s*u+a*l+i*c-r*o,this._w=a*u-i*o-r*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*t._w+i*t._x+r*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*i+e*this._x,this._y=p*r+e*this._y,this._z=p*s+e*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,o),d=Math.sin((1-e)*u)/l,f=Math.sin(e*u)/l;return this._w=a*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(t=0,e=0,i=0){I.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Jl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Jl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*r,this.y=s[1]*e+s[4]*i+s[7]*r,this.z=s[2]*e+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,r=this.z,s=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*r-o*i),u=2*(o*e-s*r),d=2*(s*i-a*e);return this.x=e+c*l+a*d-o*u,this.y=i+c*u+o*l-s*d,this.z=r+c*d+s*u-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r,this.y=s[1]*e+s[5]*i+s[9]*r,this.z=s[2]*e+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=qt(this.x,t.x,e.x),this.y=qt(this.y,t.y,e.y),this.z=qt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=qt(this.x,t,e),this.y=qt(this.y,t,e),this.z=qt(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,r=t.y,s=t.z,a=e.x,o=e.y,c=e.z;return this.x=r*c-s*o,this.y=s*a-i*c,this.z=i*o-r*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return ga.copy(this).projectOnVector(t),this.sub(ga)}reflect(t){return this.sub(ga.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(qt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ga=new I,Jl=new Ui;class Vt{constructor(t,e,i,r,s,a,o,c,l){Vt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,a,o,c,l)}set(t,e,i,r,s,a,o,c,l){const u=this.elements;return u[0]=t,u[1]=r,u[2]=o,u[3]=e,u[4]=s,u[5]=c,u[6]=i,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],u=i[4],d=i[7],f=i[2],p=i[5],_=i[8],v=r[0],m=r[3],h=r[6],T=r[1],y=r[4],E=r[7],C=r[2],A=r[5],R=r[8];return s[0]=a*v+o*T+c*C,s[3]=a*m+o*y+c*A,s[6]=a*h+o*E+c*R,s[1]=l*v+u*T+d*C,s[4]=l*m+u*y+d*A,s[7]=l*h+u*E+d*R,s[2]=f*v+p*T+_*C,s[5]=f*m+p*y+_*A,s[8]=f*h+p*E+_*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8];return e*a*u-e*o*l-i*s*u+i*o*c+r*s*l-r*a*c}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],d=u*a-o*l,f=o*c-u*s,p=l*s-a*c,_=e*d+i*f+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return t[0]=d*v,t[1]=(r*l-u*i)*v,t[2]=(o*i-r*a)*v,t[3]=f*v,t[4]=(u*e-r*c)*v,t[5]=(r*s-o*e)*v,t[6]=p*v,t[7]=(i*c-l*e)*v,t[8]=(a*e-i*s)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*a+l*o)+a+t,-r*l,r*c,-r*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(va.makeScale(t,e)),this}rotate(t){return this.premultiply(va.makeRotation(-t)),this}translate(t,e){return this.premultiply(va.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const va=new Vt;function Yu(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function $s(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Dp(){const n=$s("canvas");return n.style.display="block",n}const Ql={};function $r(n){n in Ql||(Ql[n]=!0,console.warn(n))}function Lp(n,t,e){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}const tc=new Vt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ec=new Vt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Up(){const n={enabled:!0,workingColorSpace:Er,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===ae&&(r.r=Wn(r.r),r.g=Wn(r.g),r.b=Wn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ae&&(r.r=mr(r.r),r.g=mr(r.g),r.b=mr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ei?Ys:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return $r("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return $r("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Er]:{primaries:t,whitePoint:i,transfer:Ys,toXYZ:tc,fromXYZ:ec,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:rn},outputColorSpaceConfig:{drawingBufferColorSpace:rn}},[rn]:{primaries:t,whitePoint:i,transfer:ae,toXYZ:tc,fromXYZ:ec,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:rn}}}),n}const Qt=Up();function Wn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function mr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Xi;class Ip{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Xi===void 0&&(Xi=$s("canvas")),Xi.width=t.width,Xi.height=t.height;const r=Xi.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),i=Xi}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=$s("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Wn(s[a]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Wn(e[i]/255)*255):e[i]=Wn(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Np=0;class ml{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Np++}),this.uuid=is(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(xa(r[a].image)):s.push(xa(r[a]))}else s=xa(r);i.url=s}return e||(t.images[this.uuid]=i),i}}function xa(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ip.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Fp=0;const Ma=new I;class Ge extends Hi{constructor(t=Ge.DEFAULT_IMAGE,e=Ge.DEFAULT_MAPPING,i=bi,r=bi,s=bn,a=Ti,o=mn,c=Rn,l=Ge.DEFAULT_ANISOTROPY,u=ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Fp++}),this.uuid=is(),this.name="",this.source=new ml(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new zt(0,0),this.repeat=new zt(1,1),this.center=new zt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ma).x}get height(){return this.source.getSize(Ma).y}get depth(){return this.source.getSize(Ma).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Fu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case mo:t.x=t.x-Math.floor(t.x);break;case bi:t.x=t.x<0?0:1;break;case _o:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case mo:t.y=t.y-Math.floor(t.y);break;case bi:t.y=t.y<0?0:1;break;case _o:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ge.DEFAULT_IMAGE=null;Ge.DEFAULT_MAPPING=Fu;Ge.DEFAULT_ANISOTROPY=1;class le{constructor(t=0,e=0,i=0,r=1){le.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*i+a[11]*r+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,s;const c=t.elements,l=c[0],u=c[4],d=c[8],f=c[1],p=c[5],_=c[9],v=c[2],m=c[6],h=c[10];if(Math.abs(u-f)<.01&&Math.abs(d-v)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+v)<.1&&Math.abs(_+m)<.1&&Math.abs(l+p+h-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(l+1)/2,E=(p+1)/2,C=(h+1)/2,A=(u+f)/4,R=(d+v)/4,N=(_+m)/4;return y>E&&y>C?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=A/i,s=R/i):E>C?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=A/r,s=N/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=R/s,r=N/s),this.set(i,r,s,e),this}let T=Math.sqrt((m-_)*(m-_)+(d-v)*(d-v)+(f-u)*(f-u));return Math.abs(T)<.001&&(T=1),this.x=(m-_)/T,this.y=(d-v)/T,this.z=(f-u)/T,this.w=Math.acos((l+p+h-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=qt(this.x,t.x,e.x),this.y=qt(this.y,t.y,e.y),this.z=qt(this.z,t.z,e.z),this.w=qt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=qt(this.x,t,e),this.y=qt(this.y,t,e),this.z=qt(this.z,t,e),this.w=qt(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Op extends Hi{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new le(0,0,t,e),this.scissorTest=!1,this.viewport=new le(0,0,t,e);const r={width:t,height:e,depth:i.depth},s=new Ge(r);this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){const e={minFilter:bn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const r=Object.assign({},t.textures[e].image);this.textures[e].source=new ml(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ii extends Op{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class ju extends Ge{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=gn,this.minFilter=gn,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Bp extends Ge{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=gn,this.minFilter=gn,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class rs{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(ln.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(ln.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=ln.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,ln):ln.fromBufferAttribute(s,a),ln.applyMatrix4(t.matrixWorld),this.expandByPoint(ln);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),hs.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),hs.copy(i.boundingBox)),hs.applyMatrix4(t.matrixWorld),this.union(hs)}const r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ln),ln.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Pr),fs.subVectors(this.max,Pr),qi.subVectors(t.a,Pr),Yi.subVectors(t.b,Pr),ji.subVectors(t.c,Pr),jn.subVectors(Yi,qi),$n.subVectors(ji,Yi),fi.subVectors(qi,ji);let e=[0,-jn.z,jn.y,0,-$n.z,$n.y,0,-fi.z,fi.y,jn.z,0,-jn.x,$n.z,0,-$n.x,fi.z,0,-fi.x,-jn.y,jn.x,0,-$n.y,$n.x,0,-fi.y,fi.x,0];return!Sa(e,qi,Yi,ji,fs)||(e=[1,0,0,0,1,0,0,0,1],!Sa(e,qi,Yi,ji,fs))?!1:(ds.crossVectors(jn,$n),e=[ds.x,ds.y,ds.z],Sa(e,qi,Yi,ji,fs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ln).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ln).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(In[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),In[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),In[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),In[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),In[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),In[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),In[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),In[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(In),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const In=[new I,new I,new I,new I,new I,new I,new I,new I],ln=new I,hs=new rs,qi=new I,Yi=new I,ji=new I,jn=new I,$n=new I,fi=new I,Pr=new I,fs=new I,ds=new I,di=new I;function Sa(n,t,e,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){di.fromArray(n,s);const o=r.x*Math.abs(di.x)+r.y*Math.abs(di.y)+r.z*Math.abs(di.z),c=t.dot(di),l=e.dot(di),u=i.dot(di);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const zp=new rs,Dr=new I,Ea=new I;class aa{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):zp.setFromPoints(t).getCenter(i);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Dr.subVectors(t,this.center);const e=Dr.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(Dr,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ea.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Dr.copy(t.center).add(Ea)),this.expandByPoint(Dr.copy(t.center).sub(Ea))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Nn=new I,ya=new I,ps=new I,Kn=new I,ba=new I,ms=new I,Ta=new I;class _l{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Nn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Nn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Nn.copy(this.origin).addScaledVector(this.direction,e),Nn.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){ya.copy(t).add(e).multiplyScalar(.5),ps.copy(e).sub(t).normalize(),Kn.copy(this.origin).sub(ya);const s=t.distanceTo(e)*.5,a=-this.direction.dot(ps),o=Kn.dot(this.direction),c=-Kn.dot(ps),l=Kn.lengthSq(),u=Math.abs(1-a*a);let d,f,p,_;if(u>0)if(d=a*c-o,f=a*o-c,_=s*u,d>=0)if(f>=-_)if(f<=_){const v=1/u;d*=v,f*=v,p=d*(d+a*f+2*o)+f*(a*d+f+2*c)+l}else f=s,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*c)+l;else f=-s,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*c)+l;else f<=-_?(d=Math.max(0,-(-a*s+o)),f=d>0?-s:Math.min(Math.max(-s,-c),s),p=-d*d+f*(f+2*c)+l):f<=_?(d=0,f=Math.min(Math.max(-s,-c),s),p=f*(f+2*c)+l):(d=Math.max(0,-(a*s+o)),f=d>0?s:Math.min(Math.max(-s,-c),s),p=-d*d+f*(f+2*c)+l);else f=a>0?-s:s,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(ya).addScaledVector(ps,f),p}intersectSphere(t,e){Nn.subVectors(t.center,this.origin);const i=Nn.dot(this.direction),r=Nn.dot(Nn)-i*i,s=t.radius*t.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,s,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(i=(t.min.x-f.x)*l,r=(t.max.x-f.x)*l):(i=(t.max.x-f.x)*l,r=(t.min.x-f.x)*l),u>=0?(s=(t.min.y-f.y)*u,a=(t.max.y-f.y)*u):(s=(t.max.y-f.y)*u,a=(t.min.y-f.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(t.min.z-f.z)*d,c=(t.max.z-f.z)*d):(o=(t.max.z-f.z)*d,c=(t.min.z-f.z)*d),i>c||o>r)||((o>i||i!==i)&&(i=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,Nn)!==null}intersectTriangle(t,e,i,r,s){ba.subVectors(e,t),ms.subVectors(i,t),Ta.crossVectors(ba,ms);let a=this.direction.dot(Ta),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Kn.subVectors(this.origin,t);const c=o*this.direction.dot(ms.crossVectors(Kn,ms));if(c<0)return null;const l=o*this.direction.dot(ba.cross(Kn));if(l<0||c+l>a)return null;const u=-o*Kn.dot(Ta);return u<0?null:this.at(u/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ve{constructor(t,e,i,r,s,a,o,c,l,u,d,f,p,_,v,m){ve.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,a,o,c,l,u,d,f,p,_,v,m)}set(t,e,i,r,s,a,o,c,l,u,d,f,p,_,v,m){const h=this.elements;return h[0]=t,h[4]=e,h[8]=i,h[12]=r,h[1]=s,h[5]=a,h[9]=o,h[13]=c,h[2]=l,h[6]=u,h[10]=d,h[14]=f,h[3]=p,h[7]=_,h[11]=v,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ve().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,r=1/$i.setFromMatrixColumn(t,0).length(),s=1/$i.setFromMatrixColumn(t,1).length(),a=1/$i.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,r=t.y,s=t.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){const f=a*u,p=a*d,_=o*u,v=o*d;e[0]=c*u,e[4]=-c*d,e[8]=l,e[1]=p+_*l,e[5]=f-v*l,e[9]=-o*c,e[2]=v-f*l,e[6]=_+p*l,e[10]=a*c}else if(t.order==="YXZ"){const f=c*u,p=c*d,_=l*u,v=l*d;e[0]=f+v*o,e[4]=_*o-p,e[8]=a*l,e[1]=a*d,e[5]=a*u,e[9]=-o,e[2]=p*o-_,e[6]=v+f*o,e[10]=a*c}else if(t.order==="ZXY"){const f=c*u,p=c*d,_=l*u,v=l*d;e[0]=f-v*o,e[4]=-a*d,e[8]=_+p*o,e[1]=p+_*o,e[5]=a*u,e[9]=v-f*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const f=a*u,p=a*d,_=o*u,v=o*d;e[0]=c*u,e[4]=_*l-p,e[8]=f*l+v,e[1]=c*d,e[5]=v*l+f,e[9]=p*l-_,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const f=a*c,p=a*l,_=o*c,v=o*l;e[0]=c*u,e[4]=v-f*d,e[8]=_*d+p,e[1]=d,e[5]=a*u,e[9]=-o*u,e[2]=-l*u,e[6]=p*d+_,e[10]=f-v*d}else if(t.order==="XZY"){const f=a*c,p=a*l,_=o*c,v=o*l;e[0]=c*u,e[4]=-d,e[8]=l*u,e[1]=f*d+v,e[5]=a*u,e[9]=p*d-_,e[2]=_*d-p,e[6]=o*u,e[10]=v*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Hp,t,kp)}lookAt(t,e,i){const r=this.elements;return Ye.subVectors(t,e),Ye.lengthSq()===0&&(Ye.z=1),Ye.normalize(),Zn.crossVectors(i,Ye),Zn.lengthSq()===0&&(Math.abs(i.z)===1?Ye.x+=1e-4:Ye.z+=1e-4,Ye.normalize(),Zn.crossVectors(i,Ye)),Zn.normalize(),_s.crossVectors(Ye,Zn),r[0]=Zn.x,r[4]=_s.x,r[8]=Ye.x,r[1]=Zn.y,r[5]=_s.y,r[9]=Ye.y,r[2]=Zn.z,r[6]=_s.z,r[10]=Ye.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],u=i[1],d=i[5],f=i[9],p=i[13],_=i[2],v=i[6],m=i[10],h=i[14],T=i[3],y=i[7],E=i[11],C=i[15],A=r[0],R=r[4],N=r[8],M=r[12],S=r[1],P=r[5],L=r[9],B=r[13],V=r[2],z=r[6],G=r[10],Y=r[14],k=r[3],X=r[7],J=r[11],rt=r[15];return s[0]=a*A+o*S+c*V+l*k,s[4]=a*R+o*P+c*z+l*X,s[8]=a*N+o*L+c*G+l*J,s[12]=a*M+o*B+c*Y+l*rt,s[1]=u*A+d*S+f*V+p*k,s[5]=u*R+d*P+f*z+p*X,s[9]=u*N+d*L+f*G+p*J,s[13]=u*M+d*B+f*Y+p*rt,s[2]=_*A+v*S+m*V+h*k,s[6]=_*R+v*P+m*z+h*X,s[10]=_*N+v*L+m*G+h*J,s[14]=_*M+v*B+m*Y+h*rt,s[3]=T*A+y*S+E*V+C*k,s[7]=T*R+y*P+E*z+C*X,s[11]=T*N+y*L+E*G+C*J,s[15]=T*M+y*B+E*Y+C*rt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],r=t[8],s=t[12],a=t[1],o=t[5],c=t[9],l=t[13],u=t[2],d=t[6],f=t[10],p=t[14],_=t[3],v=t[7],m=t[11],h=t[15];return _*(+s*c*d-r*l*d-s*o*f+i*l*f+r*o*p-i*c*p)+v*(+e*c*p-e*l*f+s*a*f-r*a*p+r*l*u-s*c*u)+m*(+e*l*d-e*o*p-s*a*d+i*a*p+s*o*u-i*l*u)+h*(-r*o*u-e*c*d+e*o*f+r*a*d-i*a*f+i*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],d=t[9],f=t[10],p=t[11],_=t[12],v=t[13],m=t[14],h=t[15],T=d*m*l-v*f*l+v*c*p-o*m*p-d*c*h+o*f*h,y=_*f*l-u*m*l-_*c*p+a*m*p+u*c*h-a*f*h,E=u*v*l-_*d*l+_*o*p-a*v*p-u*o*h+a*d*h,C=_*d*c-u*v*c-_*o*f+a*v*f+u*o*m-a*d*m,A=e*T+i*y+r*E+s*C;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/A;return t[0]=T*R,t[1]=(v*f*s-d*m*s-v*r*p+i*m*p+d*r*h-i*f*h)*R,t[2]=(o*m*s-v*c*s+v*r*l-i*m*l-o*r*h+i*c*h)*R,t[3]=(d*c*s-o*f*s-d*r*l+i*f*l+o*r*p-i*c*p)*R,t[4]=y*R,t[5]=(u*m*s-_*f*s+_*r*p-e*m*p-u*r*h+e*f*h)*R,t[6]=(_*c*s-a*m*s-_*r*l+e*m*l+a*r*h-e*c*h)*R,t[7]=(a*f*s-u*c*s+u*r*l-e*f*l-a*r*p+e*c*p)*R,t[8]=E*R,t[9]=(_*d*s-u*v*s-_*i*p+e*v*p+u*i*h-e*d*h)*R,t[10]=(a*v*s-_*o*s+_*i*l-e*v*l-a*i*h+e*o*h)*R,t[11]=(u*o*s-a*d*s-u*i*l+e*d*l+a*i*p-e*o*p)*R,t[12]=C*R,t[13]=(u*v*r-_*d*r+_*i*f-e*v*f-u*i*m+e*d*m)*R,t[14]=(_*o*r-a*v*r-_*i*c+e*v*c+a*i*m-e*o*m)*R,t[15]=(a*d*r-u*o*r+u*i*c-e*d*c-a*i*f+e*o*f)*R,this}scale(t){const e=this.elements,i=t.x,r=t.y,s=t.z;return e[0]*=i,e[4]*=r,e[8]*=s,e[1]*=i,e[5]*=r,e[9]*=s,e[2]*=i,e[6]*=r,e[10]*=s,e[3]*=i,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),r=Math.sin(e),s=1-i,a=t.x,o=t.y,c=t.z,l=s*a,u=s*o;return this.set(l*a+i,l*o-r*c,l*c+r*o,0,l*o+r*c,u*o+i,u*c-r*a,0,l*c-r*o,u*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,s,a){return this.set(1,i,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){const r=this.elements,s=e._x,a=e._y,o=e._z,c=e._w,l=s+s,u=a+a,d=o+o,f=s*l,p=s*u,_=s*d,v=a*u,m=a*d,h=o*d,T=c*l,y=c*u,E=c*d,C=i.x,A=i.y,R=i.z;return r[0]=(1-(v+h))*C,r[1]=(p+E)*C,r[2]=(_-y)*C,r[3]=0,r[4]=(p-E)*A,r[5]=(1-(f+h))*A,r[6]=(m+T)*A,r[7]=0,r[8]=(_+y)*R,r[9]=(m-T)*R,r[10]=(1-(f+v))*R,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){const r=this.elements;let s=$i.set(r[0],r[1],r[2]).length();const a=$i.set(r[4],r[5],r[6]).length(),o=$i.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],cn.copy(this);const l=1/s,u=1/a,d=1/o;return cn.elements[0]*=l,cn.elements[1]*=l,cn.elements[2]*=l,cn.elements[4]*=u,cn.elements[5]*=u,cn.elements[6]*=u,cn.elements[8]*=d,cn.elements[9]*=d,cn.elements[10]*=d,e.setFromRotationMatrix(cn),i.x=s,i.y=a,i.z=o,this}makePerspective(t,e,i,r,s,a,o=Tn,c=!1){const l=this.elements,u=2*s/(e-t),d=2*s/(i-r),f=(e+t)/(e-t),p=(i+r)/(i-r);let _,v;if(c)_=s/(a-s),v=a*s/(a-s);else if(o===Tn)_=-(a+s)/(a-s),v=-2*a*s/(a-s);else if(o===js)_=-a/(a-s),v=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,r,s,a,o=Tn,c=!1){const l=this.elements,u=2/(e-t),d=2/(i-r),f=-(e+t)/(e-t),p=-(i+r)/(i-r);let _,v;if(c)_=1/(a-s),v=a/(a-s);else if(o===Tn)_=-2/(a-s),v=-(a+s)/(a-s);else if(o===js)_=-1/(a-s),v=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=d,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=_,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const $i=new I,cn=new ve,Hp=new I(0,0,0),kp=new I(1,1,1),Zn=new I,_s=new I,Ye=new I,nc=new ve,ic=new Ui;class Cn{constructor(t=0,e=0,i=0,r=Cn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],u=r[9],d=r[2],f=r[6],p=r[10];switch(e){case"XYZ":this._y=Math.asin(qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-qt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(qt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-qt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(qt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return nc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(nc,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ic.setFromEuler(this),this.setFromQuaternion(ic,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Cn.DEFAULT_ORDER="XYZ";class $u{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Vp=0;const rc=new I,Ki=new Ui,Fn=new ve,gs=new I,Lr=new I,Gp=new I,Wp=new Ui,sc=new I(1,0,0),ac=new I(0,1,0),oc=new I(0,0,1),lc={type:"added"},Xp={type:"removed"},Zi={type:"childadded",child:null},Aa={type:"childremoved",child:null};class Oe extends Hi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vp++}),this.uuid=is(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Oe.DEFAULT_UP.clone();const t=new I,e=new Cn,i=new Ui,r=new I(1,1,1);function s(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ve},normalMatrix:{value:new Vt}}),this.matrix=new ve,this.matrixWorld=new ve,this.matrixAutoUpdate=Oe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Oe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $u,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ki.setFromAxisAngle(t,e),this.quaternion.multiply(Ki),this}rotateOnWorldAxis(t,e){return Ki.setFromAxisAngle(t,e),this.quaternion.premultiply(Ki),this}rotateX(t){return this.rotateOnAxis(sc,t)}rotateY(t){return this.rotateOnAxis(ac,t)}rotateZ(t){return this.rotateOnAxis(oc,t)}translateOnAxis(t,e){return rc.copy(t).applyQuaternion(this.quaternion),this.position.add(rc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(sc,t)}translateY(t){return this.translateOnAxis(ac,t)}translateZ(t){return this.translateOnAxis(oc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Fn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?gs.copy(t):gs.set(t,e,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Lr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fn.lookAt(Lr,gs,this.up):Fn.lookAt(gs,Lr,this.up),this.quaternion.setFromRotationMatrix(Fn),r&&(Fn.extractRotation(r.matrixWorld),Ki.setFromRotationMatrix(Fn),this.quaternion.premultiply(Ki.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(lc),Zi.child=t,this.dispatchEvent(Zi),Zi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Xp),Aa.child=t,this.dispatchEvent(Aa),Aa.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Fn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Fn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Fn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(lc),Zi.child=t,this.dispatchEvent(Zi),Zi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lr,t,Gp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lr,Wp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const d=c[l];s(t.shapes,d)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(t.materials,this.material[c]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),u=a(t.images),d=a(t.shapes),f=a(t.skeletons),p=a(t.animations),_=a(t.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}}Oe.DEFAULT_UP=new I(0,1,0);Oe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Oe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const un=new I,On=new I,wa=new I,Bn=new I,Ji=new I,Qi=new I,cc=new I,Ra=new I,Ca=new I,Pa=new I,Da=new le,La=new le,Ua=new le;class dn{constructor(t=new I,e=new I,i=new I){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),un.subVectors(t,e),r.cross(un);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,i,r,s){un.subVectors(r,e),On.subVectors(i,e),wa.subVectors(t,e);const a=un.dot(un),o=un.dot(On),c=un.dot(wa),l=On.dot(On),u=On.dot(wa),d=a*l-o*o;if(d===0)return s.set(0,0,0),null;const f=1/d,p=(l*c-o*u)*f,_=(a*u-o*c)*f;return s.set(1-p-_,_,p)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,Bn)===null?!1:Bn.x>=0&&Bn.y>=0&&Bn.x+Bn.y<=1}static getInterpolation(t,e,i,r,s,a,o,c){return this.getBarycoord(t,e,i,r,Bn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Bn.x),c.addScaledVector(a,Bn.y),c.addScaledVector(o,Bn.z),c)}static getInterpolatedAttribute(t,e,i,r,s,a){return Da.setScalar(0),La.setScalar(0),Ua.setScalar(0),Da.fromBufferAttribute(t,e),La.fromBufferAttribute(t,i),Ua.fromBufferAttribute(t,r),a.setScalar(0),a.addScaledVector(Da,s.x),a.addScaledVector(La,s.y),a.addScaledVector(Ua,s.z),a}static isFrontFacing(t,e,i,r){return un.subVectors(i,e),On.subVectors(t,e),un.cross(On).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return un.subVectors(this.c,this.b),On.subVectors(this.a,this.b),un.cross(On).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return dn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return dn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,r,s){return dn.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}containsPoint(t){return dn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return dn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,r=this.b,s=this.c;let a,o;Ji.subVectors(r,i),Qi.subVectors(s,i),Ra.subVectors(t,i);const c=Ji.dot(Ra),l=Qi.dot(Ra);if(c<=0&&l<=0)return e.copy(i);Ca.subVectors(t,r);const u=Ji.dot(Ca),d=Qi.dot(Ca);if(u>=0&&d<=u)return e.copy(r);const f=c*d-u*l;if(f<=0&&c>=0&&u<=0)return a=c/(c-u),e.copy(i).addScaledVector(Ji,a);Pa.subVectors(t,s);const p=Ji.dot(Pa),_=Qi.dot(Pa);if(_>=0&&p<=_)return e.copy(s);const v=p*l-c*_;if(v<=0&&l>=0&&_<=0)return o=l/(l-_),e.copy(i).addScaledVector(Qi,o);const m=u*_-p*d;if(m<=0&&d-u>=0&&p-_>=0)return cc.subVectors(s,r),o=(d-u)/(d-u+(p-_)),e.copy(r).addScaledVector(cc,o);const h=1/(m+v+f);return a=v*h,o=f*h,e.copy(i).addScaledVector(Ji,a).addScaledVector(Qi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Ku={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Jn={h:0,s:0,l:0},vs={h:0,s:0,l:0};function Ia(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Zt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=rn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.colorSpaceToWorking(this,e),this}setRGB(t,e,i,r=Qt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Qt.colorSpaceToWorking(this,r),this}setHSL(t,e,i,r=Qt.workingColorSpace){if(t=Cp(t,1),e=qt(e,0,1),i=qt(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,a=2*i-s;this.r=Ia(a,s,t+1/3),this.g=Ia(a,s,t),this.b=Ia(a,s,t-1/3)}return Qt.colorSpaceToWorking(this,r),this}setStyle(t,e=rn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=rn){const i=Ku[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Wn(t.r),this.g=Wn(t.g),this.b=Wn(t.b),this}copyLinearToSRGB(t){return this.r=mr(t.r),this.g=mr(t.g),this.b=mr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=rn){return Qt.workingToColorSpace(Le.copy(this),t),Math.round(qt(Le.r*255,0,255))*65536+Math.round(qt(Le.g*255,0,255))*256+Math.round(qt(Le.b*255,0,255))}getHexString(t=rn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qt.workingColorSpace){Qt.workingToColorSpace(Le.copy(this),e);const i=Le.r,r=Le.g,s=Le.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const d=a-o;switch(l=u<=.5?d/(a+o):d/(2-a-o),a){case i:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-i)/d+2;break;case s:c=(i-r)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=Qt.workingColorSpace){return Qt.workingToColorSpace(Le.copy(this),e),t.r=Le.r,t.g=Le.g,t.b=Le.b,t}getStyle(t=rn){Qt.workingToColorSpace(Le.copy(this),t);const e=Le.r,i=Le.g,r=Le.b;return t!==rn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(Jn),this.setHSL(Jn.h+t,Jn.s+e,Jn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Jn),t.getHSL(vs);const i=_a(Jn.h,vs.h,e),r=_a(Jn.s,vs.s,e),s=_a(Jn.l,vs.l,e);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*r,this.g=s[1]*e+s[4]*i+s[7]*r,this.b=s[2]*e+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Le=new Zt;Zt.NAMES=Ku;let qp=0;class Ar extends Hi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qp++}),this.uuid=is(),this.name="",this.type="Material",this.blending=pr,this.side=ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=io,this.blendDst=ro,this.blendEquation=Si,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Zt(0,0,0),this.blendAlpha=0,this.depthFunc=xr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$l,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wi,this.stencilZFail=Wi,this.stencilZPass=Wi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==pr&&(i.blending=this.blending),this.side!==ai&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==io&&(i.blendSrc=this.blendSrc),this.blendDst!==ro&&(i.blendDst=this.blendDst),this.blendEquation!==Si&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==xr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$l&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Wi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Wi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Wi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(e){const s=r(t.textures),a=r(t.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const r=e.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class gl extends Ar{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.combine=Nu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ee=new I,xs=new zt;let Yp=0;class An{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Yp++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Kl,this.updateRanges=[],this.gpuType=kn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)xs.fromBufferAttribute(this,e),xs.applyMatrix3(t),this.setXY(e,xs.x,xs.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ee.fromBufferAttribute(this,e),Ee.applyMatrix3(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ee.fromBufferAttribute(this,e),Ee.applyMatrix4(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ee.fromBufferAttribute(this,e),Ee.applyNormalMatrix(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ee.fromBufferAttribute(this,e),Ee.transformDirection(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Cr(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ze(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Cr(e,this.array)),e}setX(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Cr(e,this.array)),e}setY(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Cr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Cr(e,this.array)),e}setW(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=ze(e,this.array),i=ze(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=ze(e,this.array),i=ze(i,this.array),r=ze(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t*=this.itemSize,this.normalized&&(e=ze(e,this.array),i=ze(i,this.array),r=ze(r,this.array),s=ze(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Kl&&(t.usage=this.usage),t}}class Zu extends An{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Ju extends An{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class vn extends An{constructor(t,e,i){super(new Float32Array(t),e,i)}}let jp=0;const en=new ve,Na=new Oe,tr=new I,je=new rs,Ur=new rs,Re=new I;class Dn extends Hi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jp++}),this.uuid=is(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Yu(t)?Ju:Zu)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Vt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return en.makeRotationFromQuaternion(t),this.applyMatrix4(en),this}rotateX(t){return en.makeRotationX(t),this.applyMatrix4(en),this}rotateY(t){return en.makeRotationY(t),this.applyMatrix4(en),this}rotateZ(t){return en.makeRotationZ(t),this.applyMatrix4(en),this}translate(t,e,i){return en.makeTranslation(t,e,i),this.applyMatrix4(en),this}scale(t,e,i){return en.makeScale(t,e,i),this.applyMatrix4(en),this}lookAt(t){return Na.lookAt(t),Na.updateMatrix(),this.applyMatrix4(Na.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(tr).negate(),this.translate(tr.x,tr.y,tr.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let r=0,s=t.length;r<s;r++){const a=t[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new vn(i,3))}else{const i=Math.min(t.length,e.count);for(let r=0;r<i;r++){const s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new rs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){const s=e[i];je.setFromBufferAttribute(s),this.morphTargetsRelative?(Re.addVectors(this.boundingBox.min,je.min),this.boundingBox.expandByPoint(Re),Re.addVectors(this.boundingBox.max,je.max),this.boundingBox.expandByPoint(Re)):(this.boundingBox.expandByPoint(je.min),this.boundingBox.expandByPoint(je.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new aa);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){const i=this.boundingSphere.center;if(je.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];Ur.setFromBufferAttribute(o),this.morphTargetsRelative?(Re.addVectors(je.min,Ur.min),je.expandByPoint(Re),Re.addVectors(je.max,Ur.max),je.expandByPoint(Re)):(je.expandByPoint(Ur.min),je.expandByPoint(Ur.max))}je.getCenter(i);let r=0;for(let s=0,a=t.count;s<a;s++)Re.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(Re));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Re.fromBufferAttribute(o,l),c&&(tr.fromBufferAttribute(t,l),Re.add(tr)),r=Math.max(r,i.distanceToSquared(Re))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new An(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let N=0;N<i.count;N++)o[N]=new I,c[N]=new I;const l=new I,u=new I,d=new I,f=new zt,p=new zt,_=new zt,v=new I,m=new I;function h(N,M,S){l.fromBufferAttribute(i,N),u.fromBufferAttribute(i,M),d.fromBufferAttribute(i,S),f.fromBufferAttribute(s,N),p.fromBufferAttribute(s,M),_.fromBufferAttribute(s,S),u.sub(l),d.sub(l),p.sub(f),_.sub(f);const P=1/(p.x*_.y-_.x*p.y);isFinite(P)&&(v.copy(u).multiplyScalar(_.y).addScaledVector(d,-p.y).multiplyScalar(P),m.copy(d).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(P),o[N].add(v),o[M].add(v),o[S].add(v),c[N].add(m),c[M].add(m),c[S].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let N=0,M=T.length;N<M;++N){const S=T[N],P=S.start,L=S.count;for(let B=P,V=P+L;B<V;B+=3)h(t.getX(B+0),t.getX(B+1),t.getX(B+2))}const y=new I,E=new I,C=new I,A=new I;function R(N){C.fromBufferAttribute(r,N),A.copy(C);const M=o[N];y.copy(M),y.sub(C.multiplyScalar(C.dot(M))).normalize(),E.crossVectors(A,M);const P=E.dot(c[N])<0?-1:1;a.setXYZW(N,y.x,y.y,y.z,P)}for(let N=0,M=T.length;N<M;++N){const S=T[N],P=S.start,L=S.count;for(let B=P,V=P+L;B<V;B+=3)R(t.getX(B+0)),R(t.getX(B+1)),R(t.getX(B+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new An(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new I,s=new I,a=new I,o=new I,c=new I,l=new I,u=new I,d=new I;if(t)for(let f=0,p=t.count;f<p;f+=3){const _=t.getX(f+0),v=t.getX(f+1),m=t.getX(f+2);r.fromBufferAttribute(e,_),s.fromBufferAttribute(e,v),a.fromBufferAttribute(e,m),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),o.fromBufferAttribute(i,_),c.fromBufferAttribute(i,v),l.fromBufferAttribute(i,m),o.add(u),c.add(u),l.add(u),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,p=e.count;f<p;f+=3)r.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Re.fromBufferAttribute(t,e),Re.normalize(),t.setXYZ(e,Re.x,Re.y,Re.z)}toNonIndexed(){function t(o,c){const l=o.array,u=o.itemSize,d=o.normalized,f=new l.constructor(c.length*u);let p=0,_=0;for(let v=0,m=c.length;v<m;v++){o.isInterleavedBufferAttribute?p=c[v]*o.data.stride+o.offset:p=c[v]*u;for(let h=0;h<u;h++)f[_++]=l[p++]}return new An(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Dn,i=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=t(c,i);e.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let u=0,d=l.length;u<d;u++){const f=l[u],p=t(f,i);c.push(p)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const c in i){const l=i[c];t.data.attributes[c]=l.toJSON(t.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let d=0,f=l.length;d<f;d++){const p=l[d];u.push(p.toJSON(t.data))}u.length>0&&(r[c]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const r=t.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(e))}const s=t.morphAttributes;for(const l in s){const u=[],d=s[l];for(let f=0,p=d.length;f<p;f++)u.push(d[f].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,u=a.length;l<u;l++){const d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const uc=new ve,pi=new _l,Ms=new aa,hc=new I,Ss=new I,Es=new I,ys=new I,Fa=new I,bs=new I,fc=new I,Ts=new I;class sn extends Oe{constructor(t=new Dn,e=new gl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(r,t);const o=this.morphTargetInfluences;if(s&&o){bs.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=o[c],d=s[c];u!==0&&(Fa.fromBufferAttribute(d,t),a?bs.addScaledVector(Fa,u):bs.addScaledVector(Fa.sub(e),u))}e.add(bs)}return e}raycast(t,e){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ms.copy(i.boundingSphere),Ms.applyMatrix4(s),pi.copy(t.ray).recast(t.near),!(Ms.containsPoint(pi.origin)===!1&&(pi.intersectSphere(Ms,hc)===null||pi.origin.distanceToSquared(hc)>(t.far-t.near)**2))&&(uc.copy(s).invert(),pi.copy(t.ray).applyMatrix4(uc),!(i.boundingBox!==null&&pi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,pi)))}_computeIntersections(t,e,i){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,v=f.length;_<v;_++){const m=f[_],h=a[m.materialIndex],T=Math.max(m.start,p.start),y=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let E=T,C=y;E<C;E+=3){const A=o.getX(E),R=o.getX(E+1),N=o.getX(E+2);r=As(this,h,t,i,l,u,d,A,R,N),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const _=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let m=_,h=v;m<h;m+=3){const T=o.getX(m),y=o.getX(m+1),E=o.getX(m+2);r=As(this,a,t,i,l,u,d,T,y,E),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let _=0,v=f.length;_<v;_++){const m=f[_],h=a[m.materialIndex],T=Math.max(m.start,p.start),y=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let E=T,C=y;E<C;E+=3){const A=E,R=E+1,N=E+2;r=As(this,h,t,i,l,u,d,A,R,N),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const _=Math.max(0,p.start),v=Math.min(c.count,p.start+p.count);for(let m=_,h=v;m<h;m+=3){const T=m,y=m+1,E=m+2;r=As(this,a,t,i,l,u,d,T,y,E),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}}function $p(n,t,e,i,r,s,a,o){let c;if(t.side===Ve?c=i.intersectTriangle(a,s,r,!0,o):c=i.intersectTriangle(r,s,a,t.side===ai,o),c===null)return null;Ts.copy(o),Ts.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Ts);return l<e.near||l>e.far?null:{distance:l,point:Ts.clone(),object:n}}function As(n,t,e,i,r,s,a,o,c,l){n.getVertexPosition(o,Ss),n.getVertexPosition(c,Es),n.getVertexPosition(l,ys);const u=$p(n,t,e,i,Ss,Es,ys,fc);if(u){const d=new I;dn.getBarycoord(fc,Ss,Es,ys,d),r&&(u.uv=dn.getInterpolatedAttribute(r,o,c,l,d,new zt)),s&&(u.uv1=dn.getInterpolatedAttribute(s,o,c,l,d,new zt)),a&&(u.normal=dn.getInterpolatedAttribute(a,o,c,l,d,new I),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:c,c:l,normal:new I,materialIndex:0};dn.getNormal(Ss,Es,ys,f.normal),u.face=f,u.barycoord=d}return u}class ss extends Dn{constructor(t=1,e=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],u=[],d=[];let f=0,p=0;_("z","y","x",-1,-1,i,e,t,a,s,0),_("z","y","x",1,-1,i,e,-t,a,s,1),_("x","z","y",1,1,t,i,e,r,a,2),_("x","z","y",1,-1,t,i,-e,r,a,3),_("x","y","z",1,-1,t,e,i,r,s,4),_("x","y","z",-1,-1,t,e,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new vn(l,3)),this.setAttribute("normal",new vn(u,3)),this.setAttribute("uv",new vn(d,2));function _(v,m,h,T,y,E,C,A,R,N,M){const S=E/R,P=C/N,L=E/2,B=C/2,V=A/2,z=R+1,G=N+1;let Y=0,k=0;const X=new I;for(let J=0;J<G;J++){const rt=J*P-B;for(let _t=0;_t<z;_t++){const It=_t*S-L;X[v]=It*T,X[m]=rt*y,X[h]=V,l.push(X.x,X.y,X.z),X[v]=0,X[m]=0,X[h]=A>0?1:-1,u.push(X.x,X.y,X.z),d.push(_t/R),d.push(1-J/N),Y+=1}}for(let J=0;J<N;J++)for(let rt=0;rt<R;rt++){const _t=f+rt+z*J,It=f+rt+z*(J+1),Ht=f+(rt+1)+z*(J+1),Ot=f+(rt+1)+z*J;c.push(_t,It,Ot),c.push(It,Ht,Ot),k+=6}o.addGroup(p,k,M),p+=k,f+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ss(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function yr(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const r=n[e][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone():Array.isArray(r)?t[e][i]=r.slice():t[e][i]=r}}return t}function Ne(n){const t={};for(let e=0;e<n.length;e++){const i=yr(n[e]);for(const r in i)t[r]=i[r]}return t}function Kp(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Qu(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Qt.workingColorSpace}const Zp={clone:yr,merge:Ne};var Jp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Qp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class oi extends Ar{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Jp,this.fragmentShader=Qp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=yr(t.uniforms),this.uniformsGroups=Kp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class th extends Oe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ve,this.projectionMatrix=new ve,this.projectionMatrixInverse=new ve,this.coordinateSystem=Tn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Qn=new I,dc=new zt,pc=new zt;class Ke extends th{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Xo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ks*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Xo*2*Math.atan(Math.tan(ks*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Qn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Qn.x,Qn.y).multiplyScalar(-t/Qn.z),Qn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Qn.x,Qn.y).multiplyScalar(-t/Qn.z)}getViewSize(t,e){return this.getViewBounds(t,dc,pc),e.subVectors(pc,dc)}setViewOffset(t,e,i,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ks*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,e-=a.offsetY*i/l,r*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const er=-90,nr=1;class tm extends Oe{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ke(er,nr,t,e);r.layers=this.layers,this.add(r);const s=new Ke(er,nr,t,e);s.layers=this.layers,this.add(s);const a=new Ke(er,nr,t,e);a.layers=this.layers,this.add(a);const o=new Ke(er,nr,t,e);o.layers=this.layers,this.add(o);const c=new Ke(er,nr,t,e);c.layers=this.layers,this.add(c);const l=new Ke(er,nr,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,r,s,a,o,c]=e;for(const l of e)this.remove(l);if(t===Tn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===js)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,u]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,r),t.render(e,s),t.setRenderTarget(i,1,r),t.render(e,a),t.setRenderTarget(i,2,r),t.render(e,o),t.setRenderTarget(i,3,r),t.render(e,c),t.setRenderTarget(i,4,r),t.render(e,l),i.texture.generateMipmaps=v,t.setRenderTarget(i,5,r),t.render(e,u),t.setRenderTarget(d,f,p),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class eh extends Ge{constructor(t=[],e=Mr,i,r,s,a,o,c,l,u){super(t,e,i,r,s,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class em extends Ii{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new eh(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ss(5,5,5),s=new oi({name:"CubemapFromEquirect",uniforms:yr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ve,blending:ri});s.uniforms.tEquirect.value=e;const a=new sn(r,s),o=e.minFilter;return e.minFilter===Ti&&(e.minFilter=bn),new tm(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,r=!0){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,r);t.setRenderTarget(s)}}class ws extends Oe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const nm={type:"move"};class Oa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ws,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ws,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ws,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,i),h=this._getHandJoint(l,v);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=u.position.distanceTo(d.position),p=.02,_=.005;l.inputState.pinching&&f>p+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=p-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(nm)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new ws;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class im extends Oe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Cn,this.environmentIntensity=1,this.environmentRotation=new Cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Ba=new I,rm=new I,sm=new Vt;class ti{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const r=Ba.subVectors(i,e).cross(rm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Ba),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||sm.getNormalMatrix(t),r=this.coplanarPoint(Ba).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const mi=new aa,am=new zt(.5,.5),Rs=new I;class vl{constructor(t=new ti,e=new ti,i=new ti,r=new ti,s=new ti,a=new ti){this.planes=[t,e,i,r,s,a]}set(t,e,i,r,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Tn,i=!1){const r=this.planes,s=t.elements,a=s[0],o=s[1],c=s[2],l=s[3],u=s[4],d=s[5],f=s[6],p=s[7],_=s[8],v=s[9],m=s[10],h=s[11],T=s[12],y=s[13],E=s[14],C=s[15];if(r[0].setComponents(l-a,p-u,h-_,C-T).normalize(),r[1].setComponents(l+a,p+u,h+_,C+T).normalize(),r[2].setComponents(l+o,p+d,h+v,C+y).normalize(),r[3].setComponents(l-o,p-d,h-v,C-y).normalize(),i)r[4].setComponents(c,f,m,E).normalize(),r[5].setComponents(l-c,p-f,h-m,C-E).normalize();else if(r[4].setComponents(l-c,p-f,h-m,C-E).normalize(),e===Tn)r[5].setComponents(l+c,p+f,h+m,C+E).normalize();else if(e===js)r[5].setComponents(c,f,m,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),mi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),mi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(mi)}intersectsSprite(t){mi.center.set(0,0,0);const e=am.distanceTo(t.center);return mi.radius=.7071067811865476+e,mi.applyMatrix4(t.matrixWorld),this.intersectsSphere(mi)}intersectsSphere(t){const e=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const r=e[i];if(Rs.x=r.normal.x>0?t.max.x:t.min.x,Rs.y=r.normal.y>0?t.max.y:t.min.y,Rs.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Rs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Or extends Ar{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Zt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ks=new I,Zs=new I,mc=new ve,Ir=new _l,Cs=new aa,za=new I,_c=new I;class om extends Oe{constructor(t=new Dn,e=new Or){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let r=1,s=e.count;r<s;r++)Ks.fromBufferAttribute(e,r-1),Zs.fromBufferAttribute(e,r),i[r]=i[r-1],i[r]+=Ks.distanceTo(Zs);t.setAttribute("lineDistance",new vn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Cs.copy(i.boundingSphere),Cs.applyMatrix4(r),Cs.radius+=s,t.ray.intersectsSphere(Cs)===!1)return;mc.copy(r).invert(),Ir.copy(t.ray).applyMatrix4(mc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){const p=Math.max(0,a.start),_=Math.min(u.count,a.start+a.count);for(let v=p,m=_-1;v<m;v+=l){const h=u.getX(v),T=u.getX(v+1),y=Ps(this,t,Ir,c,h,T,v);y&&e.push(y)}if(this.isLineLoop){const v=u.getX(_-1),m=u.getX(p),h=Ps(this,t,Ir,c,v,m,_-1);h&&e.push(h)}}else{const p=Math.max(0,a.start),_=Math.min(f.count,a.start+a.count);for(let v=p,m=_-1;v<m;v+=l){const h=Ps(this,t,Ir,c,v,v+1,v);h&&e.push(h)}if(this.isLineLoop){const v=Ps(this,t,Ir,c,_-1,p,_-1);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Ps(n,t,e,i,r,s,a){const o=n.geometry.attributes.position;if(Ks.fromBufferAttribute(o,r),Zs.fromBufferAttribute(o,s),e.distanceSqToSegment(Ks,Zs,za,_c)>i)return;za.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(za);if(!(l<t.near||l>t.far))return{distance:l,point:_c.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}class Ds extends om{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class nh extends Ge{constructor(t,e,i=Li,r,s,a,o=gn,c=gn,l,u=Yr,d=1){if(u!==Yr&&u!==jr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:t,height:e,depth:d};super(f,r,s,a,o,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ml(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class ih extends Ge{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class oa extends Dn{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};const s=t/2,a=e/2,o=Math.floor(i),c=Math.floor(r),l=o+1,u=c+1,d=t/o,f=e/c,p=[],_=[],v=[],m=[];for(let h=0;h<u;h++){const T=h*f-a;for(let y=0;y<l;y++){const E=y*d-s;_.push(E,-T,0),v.push(0,0,1),m.push(y/o),m.push(1-h/c)}}for(let h=0;h<c;h++)for(let T=0;T<o;T++){const y=T+l*h,E=T+l*(h+1),C=T+1+l*(h+1),A=T+1+l*h;p.push(y,E,A),p.push(E,C,A)}this.setIndex(p),this.setAttribute("position",new vn(_,3)),this.setAttribute("normal",new vn(v,3)),this.setAttribute("uv",new vn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new oa(t.width,t.height,t.widthSegments,t.heightSegments)}}class Vr extends Dn{constructor(t=1,e=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const c=Math.min(a+o,Math.PI);let l=0;const u=[],d=new I,f=new I,p=[],_=[],v=[],m=[];for(let h=0;h<=i;h++){const T=[],y=h/i;let E=0;h===0&&a===0?E=.5/e:h===i&&c===Math.PI&&(E=-.5/e);for(let C=0;C<=e;C++){const A=C/e;d.x=-t*Math.cos(r+A*s)*Math.sin(a+y*o),d.y=t*Math.cos(a+y*o),d.z=t*Math.sin(r+A*s)*Math.sin(a+y*o),_.push(d.x,d.y,d.z),f.copy(d).normalize(),v.push(f.x,f.y,f.z),m.push(A+E,1-y),T.push(l++)}u.push(T)}for(let h=0;h<i;h++)for(let T=0;T<e;T++){const y=u[h][T+1],E=u[h][T],C=u[h+1][T],A=u[h+1][T+1];(h!==0||a>0)&&p.push(y,E,A),(h!==i-1||c<Math.PI)&&p.push(E,C,A)}this.setIndex(p),this.setAttribute("position",new vn(_,3)),this.setAttribute("normal",new vn(v,3)),this.setAttribute("uv",new vn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vr(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class gc extends Ar{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Zt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xu,this.normalScale=new zt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class lm extends Ar{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class cm extends Ar{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class rh extends Oe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Zt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const Ha=new ve,vc=new I,xc=new I;class um{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new zt(512,512),this.mapType=Rn,this.map=null,this.mapPass=null,this.matrix=new ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vl,this._frameExtents=new zt(1,1),this._viewportCount=1,this._viewports=[new le(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;vc.setFromMatrixPosition(t.matrixWorld),e.position.copy(vc),xc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(xc),e.updateMatrixWorld(),Ha.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ha,e.coordinateSystem,e.reversedDepth),e.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ha)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Mc=new ve,Nr=new I,ka=new I;class hm extends um{constructor(){super(new Ke(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new zt(4,2),this._viewportCount=6,this._viewports=[new le(2,1,1,1),new le(0,1,1,1),new le(3,1,1,1),new le(1,1,1,1),new le(3,0,1,1),new le(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,r=this.matrix,s=t.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Nr.setFromMatrixPosition(t.matrixWorld),i.position.copy(Nr),ka.copy(i.position),ka.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(ka),i.updateMatrixWorld(),r.makeTranslation(-Nr.x,-Nr.y,-Nr.z),Mc.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Mc,i.coordinateSystem,i.reversedDepth)}}class fm extends rh{constructor(t,e,i=0,r=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new hm}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class dm extends th{constructor(t=-1,e=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-t,a=i+t,o=r+e,c=r-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class pm extends rh{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class mm extends Ke{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Sc{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=qt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(qt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class _m extends Hi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Ec(n,t,e,i){const r=gm(i);switch(e){case ku:return n*t;case Gu:return n*t/r.components*r.byteLength;case fl:return n*t/r.components*r.byteLength;case Wu:return n*t*2/r.components*r.byteLength;case dl:return n*t*2/r.components*r.byteLength;case Vu:return n*t*3/r.components*r.byteLength;case mn:return n*t*4/r.components*r.byteLength;case pl:return n*t*4/r.components*r.byteLength;case Os:case Bs:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case zs:case Hs:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case vo:case Mo:return Math.max(n,16)*Math.max(t,8)/4;case go:case xo:return Math.max(n,8)*Math.max(t,8)/2;case So:case Eo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case yo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case bo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case To:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Ao:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case wo:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Ro:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Co:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Po:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Do:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Lo:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Uo:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Io:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case No:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Fo:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Oo:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Bo:case zo:case Ho:return Math.ceil(n/4)*Math.ceil(t/4)*16;case ko:case Vo:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Go:case Wo:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function gm(n){switch(n){case Rn:case Ou:return{byteLength:1,components:1};case Xr:case Bu:case ns:return{byteLength:2,components:1};case ul:case hl:return{byteLength:2,components:4};case Li:case cl:case kn:return{byteLength:4,components:1};case zu:case Hu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ll}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ll);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function sh(){let n=null,t=!1,e=null,i=null;function r(s,a){e(s,a),i=n.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function vm(n){const t=new WeakMap;function e(o,c){const l=o.array,u=o.usage,d=l.byteLength,f=n.createBuffer();n.bindBuffer(c,f),n.bufferData(c,l,u),o.onUploadCallback();let p;if(l instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=n.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=n.SHORT;else if(l instanceof Uint32Array)p=n.UNSIGNED_INT;else if(l instanceof Int32Array)p=n.INT;else if(l instanceof Int8Array)p=n.BYTE;else if(l instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,c,l){const u=c.array,d=c.updateRanges;if(n.bindBuffer(l,o),d.length===0)n.bufferSubData(l,0,u);else{d.sort((p,_)=>p.start-_.start);let f=0;for(let p=1;p<d.length;p++){const _=d[f],v=d[p];v.start<=_.start+_.count+1?_.count=Math.max(_.count,v.start+v.count-_.start):(++f,d[f]=v)}d.length=f+1;for(let p=0,_=d.length;p<_;p++){const v=d[p];n.bufferSubData(l,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(n.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}var xm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Mm=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Sm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Em=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ym=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,bm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Tm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Am=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wm=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Rm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Cm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Pm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Dm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Lm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Um=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Im=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Nm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Fm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Om=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Bm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,zm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Hm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,km=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Vm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Gm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Wm=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Xm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ym=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$m="gl_FragColor = linearToOutputTexel( gl_FragColor );",Km=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Zm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Jm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Qm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,t_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,e_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,n_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,i_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,r_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,s_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,a_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,o_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,l_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,c_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,u_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,h_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,f_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,d_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,p_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,m_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,__=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,g_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,v_=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,x_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,M_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,S_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,E_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,y_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,b_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,T_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,A_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,w_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,R_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,C_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,P_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,D_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,L_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,U_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,I_=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,N_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,F_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,O_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,B_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,z_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,H_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,k_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,V_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,G_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,W_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,X_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,q_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Y_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,j_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,K_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Z_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,J_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Q_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,tg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,eg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ng=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ig=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,rg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ag=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,og=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,lg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ug=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,fg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,dg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,pg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,mg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,_g=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,gg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const vg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Eg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Tg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Ag=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,wg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Rg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Cg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Dg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Lg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ug=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ig=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ng=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Og=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,zg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Hg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Gg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Yg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,jg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$g=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Kg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Zg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Wt={alphahash_fragment:xm,alphahash_pars_fragment:Mm,alphamap_fragment:Sm,alphamap_pars_fragment:Em,alphatest_fragment:ym,alphatest_pars_fragment:bm,aomap_fragment:Tm,aomap_pars_fragment:Am,batching_pars_vertex:wm,batching_vertex:Rm,begin_vertex:Cm,beginnormal_vertex:Pm,bsdfs:Dm,iridescence_fragment:Lm,bumpmap_pars_fragment:Um,clipping_planes_fragment:Im,clipping_planes_pars_fragment:Nm,clipping_planes_pars_vertex:Fm,clipping_planes_vertex:Om,color_fragment:Bm,color_pars_fragment:zm,color_pars_vertex:Hm,color_vertex:km,common:Vm,cube_uv_reflection_fragment:Gm,defaultnormal_vertex:Wm,displacementmap_pars_vertex:Xm,displacementmap_vertex:qm,emissivemap_fragment:Ym,emissivemap_pars_fragment:jm,colorspace_fragment:$m,colorspace_pars_fragment:Km,envmap_fragment:Zm,envmap_common_pars_fragment:Jm,envmap_pars_fragment:Qm,envmap_pars_vertex:t_,envmap_physical_pars_fragment:h_,envmap_vertex:e_,fog_vertex:n_,fog_pars_vertex:i_,fog_fragment:r_,fog_pars_fragment:s_,gradientmap_pars_fragment:a_,lightmap_pars_fragment:o_,lights_lambert_fragment:l_,lights_lambert_pars_fragment:c_,lights_pars_begin:u_,lights_toon_fragment:f_,lights_toon_pars_fragment:d_,lights_phong_fragment:p_,lights_phong_pars_fragment:m_,lights_physical_fragment:__,lights_physical_pars_fragment:g_,lights_fragment_begin:v_,lights_fragment_maps:x_,lights_fragment_end:M_,logdepthbuf_fragment:S_,logdepthbuf_pars_fragment:E_,logdepthbuf_pars_vertex:y_,logdepthbuf_vertex:b_,map_fragment:T_,map_pars_fragment:A_,map_particle_fragment:w_,map_particle_pars_fragment:R_,metalnessmap_fragment:C_,metalnessmap_pars_fragment:P_,morphinstance_vertex:D_,morphcolor_vertex:L_,morphnormal_vertex:U_,morphtarget_pars_vertex:I_,morphtarget_vertex:N_,normal_fragment_begin:F_,normal_fragment_maps:O_,normal_pars_fragment:B_,normal_pars_vertex:z_,normal_vertex:H_,normalmap_pars_fragment:k_,clearcoat_normal_fragment_begin:V_,clearcoat_normal_fragment_maps:G_,clearcoat_pars_fragment:W_,iridescence_pars_fragment:X_,opaque_fragment:q_,packing:Y_,premultiplied_alpha_fragment:j_,project_vertex:$_,dithering_fragment:K_,dithering_pars_fragment:Z_,roughnessmap_fragment:J_,roughnessmap_pars_fragment:Q_,shadowmap_pars_fragment:tg,shadowmap_pars_vertex:eg,shadowmap_vertex:ng,shadowmask_pars_fragment:ig,skinbase_vertex:rg,skinning_pars_vertex:sg,skinning_vertex:ag,skinnormal_vertex:og,specularmap_fragment:lg,specularmap_pars_fragment:cg,tonemapping_fragment:ug,tonemapping_pars_fragment:hg,transmission_fragment:fg,transmission_pars_fragment:dg,uv_pars_fragment:pg,uv_pars_vertex:mg,uv_vertex:_g,worldpos_vertex:gg,background_vert:vg,background_frag:xg,backgroundCube_vert:Mg,backgroundCube_frag:Sg,cube_vert:Eg,cube_frag:yg,depth_vert:bg,depth_frag:Tg,distanceRGBA_vert:Ag,distanceRGBA_frag:wg,equirect_vert:Rg,equirect_frag:Cg,linedashed_vert:Pg,linedashed_frag:Dg,meshbasic_vert:Lg,meshbasic_frag:Ug,meshlambert_vert:Ig,meshlambert_frag:Ng,meshmatcap_vert:Fg,meshmatcap_frag:Og,meshnormal_vert:Bg,meshnormal_frag:zg,meshphong_vert:Hg,meshphong_frag:kg,meshphysical_vert:Vg,meshphysical_frag:Gg,meshtoon_vert:Wg,meshtoon_frag:Xg,points_vert:qg,points_frag:Yg,shadow_vert:jg,shadow_frag:$g,sprite_vert:Kg,sprite_frag:Zg},lt={common:{diffuse:{value:new Zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Vt}},envmap:{envMap:{value:null},envMapRotation:{value:new Vt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Vt},normalScale:{value:new zt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0},uvTransform:{value:new Vt}},sprite:{diffuse:{value:new Zt(16777215)},opacity:{value:1},center:{value:new zt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}}},Sn={basic:{uniforms:Ne([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.fog]),vertexShader:Wt.meshbasic_vert,fragmentShader:Wt.meshbasic_frag},lambert:{uniforms:Ne([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new Zt(0)}}]),vertexShader:Wt.meshlambert_vert,fragmentShader:Wt.meshlambert_frag},phong:{uniforms:Ne([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new Zt(0)},specular:{value:new Zt(1118481)},shininess:{value:30}}]),vertexShader:Wt.meshphong_vert,fragmentShader:Wt.meshphong_frag},standard:{uniforms:Ne([lt.common,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.roughnessmap,lt.metalnessmap,lt.fog,lt.lights,{emissive:{value:new Zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag},toon:{uniforms:Ne([lt.common,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.gradientmap,lt.fog,lt.lights,{emissive:{value:new Zt(0)}}]),vertexShader:Wt.meshtoon_vert,fragmentShader:Wt.meshtoon_frag},matcap:{uniforms:Ne([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,{matcap:{value:null}}]),vertexShader:Wt.meshmatcap_vert,fragmentShader:Wt.meshmatcap_frag},points:{uniforms:Ne([lt.points,lt.fog]),vertexShader:Wt.points_vert,fragmentShader:Wt.points_frag},dashed:{uniforms:Ne([lt.common,lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Wt.linedashed_vert,fragmentShader:Wt.linedashed_frag},depth:{uniforms:Ne([lt.common,lt.displacementmap]),vertexShader:Wt.depth_vert,fragmentShader:Wt.depth_frag},normal:{uniforms:Ne([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,{opacity:{value:1}}]),vertexShader:Wt.meshnormal_vert,fragmentShader:Wt.meshnormal_frag},sprite:{uniforms:Ne([lt.sprite,lt.fog]),vertexShader:Wt.sprite_vert,fragmentShader:Wt.sprite_frag},background:{uniforms:{uvTransform:{value:new Vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Wt.background_vert,fragmentShader:Wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Vt}},vertexShader:Wt.backgroundCube_vert,fragmentShader:Wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Wt.cube_vert,fragmentShader:Wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Wt.equirect_vert,fragmentShader:Wt.equirect_frag},distanceRGBA:{uniforms:Ne([lt.common,lt.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Wt.distanceRGBA_vert,fragmentShader:Wt.distanceRGBA_frag},shadow:{uniforms:Ne([lt.lights,lt.fog,{color:{value:new Zt(0)},opacity:{value:1}}]),vertexShader:Wt.shadow_vert,fragmentShader:Wt.shadow_frag}};Sn.physical={uniforms:Ne([Sn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Vt},clearcoatNormalScale:{value:new zt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Vt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Vt},sheen:{value:0},sheenColor:{value:new Zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Vt},transmissionSamplerSize:{value:new zt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Vt},attenuationDistance:{value:0},attenuationColor:{value:new Zt(0)},specularColor:{value:new Zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Vt},anisotropyVector:{value:new zt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Vt}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag};const Ls={r:0,b:0,g:0},_i=new Cn,Jg=new ve;function Qg(n,t,e,i,r,s,a){const o=new Zt(0);let c=s===!0?0:1,l,u,d=null,f=0,p=null;function _(y){let E=y.isScene===!0?y.background:null;return E&&E.isTexture&&(E=(y.backgroundBlurriness>0?e:t).get(E)),E}function v(y){let E=!1;const C=_(y);C===null?h(o,c):C&&C.isColor&&(h(C,1),E=!0);const A=n.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||E)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(y,E){const C=_(E);C&&(C.isCubeTexture||C.mapping===sa)?(u===void 0&&(u=new sn(new ss(1,1,1),new oi({name:"BackgroundCubeMaterial",uniforms:yr(Sn.backgroundCube.uniforms),vertexShader:Sn.backgroundCube.vertexShader,fragmentShader:Sn.backgroundCube.fragmentShader,side:Ve,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,R,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),_i.copy(E.backgroundRotation),_i.x*=-1,_i.y*=-1,_i.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(_i.y*=-1,_i.z*=-1),u.material.uniforms.envMap.value=C,u.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Jg.makeRotationFromEuler(_i)),u.material.toneMapped=Qt.getTransfer(C.colorSpace)!==ae,(d!==C||f!==C.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,d=C,f=C.version,p=n.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):C&&C.isTexture&&(l===void 0&&(l=new sn(new oa(2,2),new oi({name:"BackgroundMaterial",uniforms:yr(Sn.background.uniforms),vertexShader:Sn.background.vertexShader,fragmentShader:Sn.background.fragmentShader,side:ai,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=C,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=Qt.getTransfer(C.colorSpace)!==ae,C.matrixAutoUpdate===!0&&C.updateMatrix(),l.material.uniforms.uvTransform.value.copy(C.matrix),(d!==C||f!==C.version||p!==n.toneMapping)&&(l.material.needsUpdate=!0,d=C,f=C.version,p=n.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function h(y,E){y.getRGB(Ls,Qu(n)),i.buffers.color.setClear(Ls.r,Ls.g,Ls.b,E,a)}function T(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,E=1){o.set(y),c=E,h(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,h(o,c)},render:v,addToRenderList:m,dispose:T}}function tv(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,a=!1;function o(S,P,L,B,V){let z=!1;const G=d(B,L,P);s!==G&&(s=G,l(s.object)),z=p(S,B,L,V),z&&_(S,B,L,V),V!==null&&t.update(V,n.ELEMENT_ARRAY_BUFFER),(z||a)&&(a=!1,E(S,P,L,B),V!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function c(){return n.createVertexArray()}function l(S){return n.bindVertexArray(S)}function u(S){return n.deleteVertexArray(S)}function d(S,P,L){const B=L.wireframe===!0;let V=i[S.id];V===void 0&&(V={},i[S.id]=V);let z=V[P.id];z===void 0&&(z={},V[P.id]=z);let G=z[B];return G===void 0&&(G=f(c()),z[B]=G),G}function f(S){const P=[],L=[],B=[];for(let V=0;V<e;V++)P[V]=0,L[V]=0,B[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:L,attributeDivisors:B,object:S,attributes:{},index:null}}function p(S,P,L,B){const V=s.attributes,z=P.attributes;let G=0;const Y=L.getAttributes();for(const k in Y)if(Y[k].location>=0){const J=V[k];let rt=z[k];if(rt===void 0&&(k==="instanceMatrix"&&S.instanceMatrix&&(rt=S.instanceMatrix),k==="instanceColor"&&S.instanceColor&&(rt=S.instanceColor)),J===void 0||J.attribute!==rt||rt&&J.data!==rt.data)return!0;G++}return s.attributesNum!==G||s.index!==B}function _(S,P,L,B){const V={},z=P.attributes;let G=0;const Y=L.getAttributes();for(const k in Y)if(Y[k].location>=0){let J=z[k];J===void 0&&(k==="instanceMatrix"&&S.instanceMatrix&&(J=S.instanceMatrix),k==="instanceColor"&&S.instanceColor&&(J=S.instanceColor));const rt={};rt.attribute=J,J&&J.data&&(rt.data=J.data),V[k]=rt,G++}s.attributes=V,s.attributesNum=G,s.index=B}function v(){const S=s.newAttributes;for(let P=0,L=S.length;P<L;P++)S[P]=0}function m(S){h(S,0)}function h(S,P){const L=s.newAttributes,B=s.enabledAttributes,V=s.attributeDivisors;L[S]=1,B[S]===0&&(n.enableVertexAttribArray(S),B[S]=1),V[S]!==P&&(n.vertexAttribDivisor(S,P),V[S]=P)}function T(){const S=s.newAttributes,P=s.enabledAttributes;for(let L=0,B=P.length;L<B;L++)P[L]!==S[L]&&(n.disableVertexAttribArray(L),P[L]=0)}function y(S,P,L,B,V,z,G){G===!0?n.vertexAttribIPointer(S,P,L,V,z):n.vertexAttribPointer(S,P,L,B,V,z)}function E(S,P,L,B){v();const V=B.attributes,z=L.getAttributes(),G=P.defaultAttributeValues;for(const Y in z){const k=z[Y];if(k.location>=0){let X=V[Y];if(X===void 0&&(Y==="instanceMatrix"&&S.instanceMatrix&&(X=S.instanceMatrix),Y==="instanceColor"&&S.instanceColor&&(X=S.instanceColor)),X!==void 0){const J=X.normalized,rt=X.itemSize,_t=t.get(X);if(_t===void 0)continue;const It=_t.buffer,Ht=_t.type,Ot=_t.bytesPerElement,q=Ht===n.INT||Ht===n.UNSIGNED_INT||X.gpuType===cl;if(X.isInterleavedBufferAttribute){const K=X.data,ot=K.stride,xt=X.offset;if(K.isInstancedInterleavedBuffer){for(let pt=0;pt<k.locationSize;pt++)h(k.location+pt,K.meshPerAttribute);S.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let pt=0;pt<k.locationSize;pt++)m(k.location+pt);n.bindBuffer(n.ARRAY_BUFFER,It);for(let pt=0;pt<k.locationSize;pt++)y(k.location+pt,rt/k.locationSize,Ht,J,ot*Ot,(xt+rt/k.locationSize*pt)*Ot,q)}else{if(X.isInstancedBufferAttribute){for(let K=0;K<k.locationSize;K++)h(k.location+K,X.meshPerAttribute);S.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let K=0;K<k.locationSize;K++)m(k.location+K);n.bindBuffer(n.ARRAY_BUFFER,It);for(let K=0;K<k.locationSize;K++)y(k.location+K,rt/k.locationSize,Ht,J,rt*Ot,rt/k.locationSize*K*Ot,q)}}else if(G!==void 0){const J=G[Y];if(J!==void 0)switch(J.length){case 2:n.vertexAttrib2fv(k.location,J);break;case 3:n.vertexAttrib3fv(k.location,J);break;case 4:n.vertexAttrib4fv(k.location,J);break;default:n.vertexAttrib1fv(k.location,J)}}}}T()}function C(){N();for(const S in i){const P=i[S];for(const L in P){const B=P[L];for(const V in B)u(B[V].object),delete B[V];delete P[L]}delete i[S]}}function A(S){if(i[S.id]===void 0)return;const P=i[S.id];for(const L in P){const B=P[L];for(const V in B)u(B[V].object),delete B[V];delete P[L]}delete i[S.id]}function R(S){for(const P in i){const L=i[P];if(L[S.id]===void 0)continue;const B=L[S.id];for(const V in B)u(B[V].object),delete B[V];delete L[S.id]}}function N(){M(),a=!0,s!==r&&(s=r,l(s.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:N,resetDefaultState:M,dispose:C,releaseStatesOfGeometry:A,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:m,disableUnusedAttributes:T}}function ev(n,t,e){let i;function r(l){i=l}function s(l,u){n.drawArrays(i,l,u),e.update(u,i,1)}function a(l,u,d){d!==0&&(n.drawArraysInstanced(i,l,u,d),e.update(u,i,d))}function o(l,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,d);let p=0;for(let _=0;_<d;_++)p+=u[_];e.update(p,i,1)}function c(l,u,d,f){if(d===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<l.length;_++)a(l[_],u[_],f[_]);else{p.multiDrawArraysInstancedWEBGL(i,l,0,u,0,f,0,d);let _=0;for(let v=0;v<d;v++)_+=u[v]*f[v];e.update(_,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function nv(n,t,e,i){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");r=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(R){return!(R!==mn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const N=R===ns&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==Rn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==kn&&!N)}function c(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const d=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),h=n.getParameter(n.MAX_VERTEX_ATTRIBS),T=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=_>0,A=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:T,maxVaryings:y,maxFragmentUniforms:E,vertexTextures:C,maxSamples:A}}function iv(n){const t=this;let e=null,i=0,r=!1,s=!1;const a=new ti,o=new Vt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||i!==0||r;return r=f,i=d.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){e=u(d,f,0)},this.setState=function(d,f,p){const _=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,h=n.get(d);if(!r||_===null||_.length===0||s&&!m)s?u(null):l();else{const T=s?0:i,y=T*4;let E=h.clippingState||null;c.value=E,E=u(_,f,y,p);for(let C=0;C!==y;++C)E[C]=e[C];h.clippingState=E,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=T}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(d,f,p,_){const v=d!==null?d.length:0;let m=null;if(v!==0){if(m=c.value,_!==!0||m===null){const h=p+v*4,T=f.matrixWorldInverse;o.getNormalMatrix(T),(m===null||m.length<h)&&(m=new Float32Array(h));for(let y=0,E=p;y!==v;++y,E+=4)a.copy(d[y]).applyMatrix4(T,o),a.normal.toArray(m,E),m[E+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function rv(n){let t=new WeakMap;function e(a,o){return o===fo?a.mapping=Mr:o===po&&(a.mapping=Sr),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===fo||o===po)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new em(c.height);return l.fromEquirectangularTexture(n,a),t.set(a,l),a.addEventListener("dispose",r),e(l.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}const ar=4,yc=[.125,.215,.35,.446,.526,.582],Ei=20,Va=new dm,bc=new Zt;let Ga=null,Wa=0,Xa=0,qa=!1;const xi=(1+Math.sqrt(5))/2,ir=1/xi,Tc=[new I(-xi,ir,0),new I(xi,ir,0),new I(-ir,0,xi),new I(ir,0,xi),new I(0,xi,-ir),new I(0,xi,ir),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],sv=new I;class Ac{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,r=100,s={}){const{size:a=256,position:o=sv}=s;Ga=this._renderer.getRenderTarget(),Wa=this._renderer.getActiveCubeFace(),Xa=this._renderer.getActiveMipmapLevel(),qa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,i,r,c,o),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ga,Wa,Xa),this._renderer.xr.enabled=qa,t.scissorTest=!1,Us(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Mr||t.mapping===Sr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ga=this._renderer.getRenderTarget(),Wa=this._renderer.getActiveCubeFace(),Xa=this._renderer.getActiveMipmapLevel(),qa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:bn,minFilter:bn,generateMipmaps:!1,type:ns,format:mn,colorSpace:Er,depthBuffer:!1},r=wc(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wc(t,e,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=av(s)),this._blurMaterial=ov(s,t,e)}return r}_compileMaterial(t){const e=new sn(this._lodPlanes[0],t);this._renderer.compile(e,Va)}_sceneToCubeUV(t,e,i,r,s){const c=new Ke(90,1,e,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,p=d.toneMapping;d.getClearColor(bc),d.toneMapping=si,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null));const v=new gl({name:"PMREM.Background",side:Ve,depthWrite:!1,depthTest:!1}),m=new sn(new ss,v);let h=!1;const T=t.background;T?T.isColor&&(v.color.copy(T),t.background=null,h=!0):(v.color.copy(bc),h=!0);for(let y=0;y<6;y++){const E=y%3;E===0?(c.up.set(0,l[y],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[y],s.y,s.z)):E===1?(c.up.set(0,0,l[y]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[y],s.z)):(c.up.set(0,l[y],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[y]));const C=this._cubeSize;Us(r,E*C,y>2?C:0,C,C),d.setRenderTarget(r),h&&d.render(m,c),d.render(t,c)}m.geometry.dispose(),m.material.dispose(),d.toneMapping=p,d.autoClear=f,t.background=T}_textureToCubeUV(t,e){const i=this._renderer,r=t.mapping===Mr||t.mapping===Sr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rc());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new sn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const c=this._cubeSize;Us(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(a,Va)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Tc[(r-s-1)%Tc.length];this._blur(t,s-1,s,a,o)}e.autoClear=i}_blur(t,e,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,r,"latitudinal",s),this._halfBlur(a,t,i,i,r,"longitudinal",s)}_halfBlur(t,e,i,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new sn(this._lodPlanes[r],l),f=l.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Ei-1),v=s/_,m=isFinite(s)?1+Math.floor(u*v):Ei;m>Ei&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ei}`);const h=[];let T=0;for(let R=0;R<Ei;++R){const N=R/v,M=Math.exp(-N*N/2);h.push(M),R===0?T+=M:R<m&&(T+=2*M)}for(let R=0;R<h.length;R++)h[R]=h[R]/T;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=h,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:y}=this;f.dTheta.value=_,f.mipInt.value=y-i;const E=this._sizeLods[r],C=3*E*(r>y-ar?r-y+ar:0),A=4*(this._cubeSize-E);Us(e,C,A,3*E,2*E),c.setRenderTarget(e),c.render(d,Va)}}function av(n){const t=[],e=[],i=[];let r=n;const s=n-ar+1+yc.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let c=1/o;a>n-ar?c=yc[a-n+ar-1]:a===0&&(c=0),i.push(c);const l=1/(o-2),u=-l,d=1+l,f=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,_=6,v=3,m=2,h=1,T=new Float32Array(v*_*p),y=new Float32Array(m*_*p),E=new Float32Array(h*_*p);for(let A=0;A<p;A++){const R=A%3*2/3-1,N=A>2?0:-1,M=[R,N,0,R+2/3,N,0,R+2/3,N+1,0,R,N,0,R+2/3,N+1,0,R,N+1,0];T.set(M,v*_*A),y.set(f,m*_*A);const S=[A,A,A,A,A,A];E.set(S,h*_*A)}const C=new Dn;C.setAttribute("position",new An(T,v)),C.setAttribute("uv",new An(y,m)),C.setAttribute("faceIndex",new An(E,h)),t.push(C),r>ar&&r--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function wc(n,t,e){const i=new Ii(n,t,e);return i.texture.mapping=sa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Us(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function ov(n,t,e){const i=new Float32Array(Ei),r=new I(0,1,0);return new oi({name:"SphericalGaussianBlur",defines:{n:Ei,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:xl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function Rc(){return new oi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function Cc(){return new oi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function xl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function lv(n){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){const c=o.mapping,l=c===fo||c===po,u=c===Mr||c===Sr;if(l||u){let d=t.get(o);const f=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new Ac(n)),d=l?e.fromEquirectangular(o,d):e.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{const p=o.image;return l&&p&&p.height>0||u&&p&&r(p)?(e===null&&(e=new Ac(n)),d=l?e.fromEquirectangular(o):e.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",s),d.texture):null}}}return o}function r(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function cv(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const r=e(i);return r===null&&$r("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function uv(n,t,e,i){const r={},s=new WeakMap;function a(d){const f=d.target;f.index!==null&&t.remove(f.index);for(const _ in f.attributes)t.remove(f.attributes[_]);f.removeEventListener("dispose",a),delete r[f.id];const p=s.get(f);p&&(t.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(d,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,e.memory.geometries++),f}function c(d){const f=d.attributes;for(const p in f)t.update(f[p],n.ARRAY_BUFFER)}function l(d){const f=[],p=d.index,_=d.attributes.position;let v=0;if(p!==null){const T=p.array;v=p.version;for(let y=0,E=T.length;y<E;y+=3){const C=T[y+0],A=T[y+1],R=T[y+2];f.push(C,A,A,R,R,C)}}else if(_!==void 0){const T=_.array;v=_.version;for(let y=0,E=T.length/3-1;y<E;y+=3){const C=y+0,A=y+1,R=y+2;f.push(C,A,A,R,R,C)}}else return;const m=new(Yu(f)?Ju:Zu)(f,1);m.version=v;const h=s.get(d);h&&t.remove(h),s.set(d,m)}function u(d){const f=s.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&l(d)}else l(d);return s.get(d)}return{get:o,update:c,getWireframeAttribute:u}}function hv(n,t,e){let i;function r(f){i=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function c(f,p){n.drawElements(i,p,s,f*a),e.update(p,i,1)}function l(f,p,_){_!==0&&(n.drawElementsInstanced(i,p,s,f*a,_),e.update(p,i,_))}function u(f,p,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,f,0,_);let m=0;for(let h=0;h<_;h++)m+=p[h];e.update(m,i,1)}function d(f,p,_,v){if(_===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<f.length;h++)l(f[h]/a,p[h],v[h]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,f,0,v,0,_);let h=0;for(let T=0;T<_;T++)h+=p[T]*v[T];e.update(h,i,1)}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function fv(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(s/3);break;case n.LINES:e.lines+=o*(s/2);break;case n.LINE_STRIP:e.lines+=o*(s-1);break;case n.LINE_LOOP:e.lines+=o*s;break;case n.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function dv(n,t,e){const i=new WeakMap,r=new le;function s(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let f=i.get(o);if(f===void 0||f.count!==d){let S=function(){N.dispose(),i.delete(o),o.removeEventListener("dispose",S)};var p=S;f!==void 0&&f.texture.dispose();const _=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,h=o.morphAttributes.position||[],T=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let E=0;_===!0&&(E=1),v===!0&&(E=2),m===!0&&(E=3);let C=o.attributes.position.count*E,A=1;C>t.maxTextureSize&&(A=Math.ceil(C/t.maxTextureSize),C=t.maxTextureSize);const R=new Float32Array(C*A*4*d),N=new ju(R,C,A,d);N.type=kn,N.needsUpdate=!0;const M=E*4;for(let P=0;P<d;P++){const L=h[P],B=T[P],V=y[P],z=C*A*4*P;for(let G=0;G<L.count;G++){const Y=G*M;_===!0&&(r.fromBufferAttribute(L,G),R[z+Y+0]=r.x,R[z+Y+1]=r.y,R[z+Y+2]=r.z,R[z+Y+3]=0),v===!0&&(r.fromBufferAttribute(B,G),R[z+Y+4]=r.x,R[z+Y+5]=r.y,R[z+Y+6]=r.z,R[z+Y+7]=0),m===!0&&(r.fromBufferAttribute(V,G),R[z+Y+8]=r.x,R[z+Y+9]=r.y,R[z+Y+10]=r.z,R[z+Y+11]=V.itemSize===4?r.w:1)}}f={count:d,texture:N,size:new zt(C,A)},i.set(o,f),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let _=0;for(let m=0;m<l.length;m++)_+=l[m];const v=o.morphTargetsRelative?1:1-_;c.getUniforms().setValue(n,"morphTargetBaseInfluence",v),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function pv(n,t,e,i){let r=new WeakMap;function s(c){const l=i.render.frame,u=c.geometry,d=t.get(c,u);if(r.get(d)!==l&&(t.update(d),r.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==l&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==l&&(f.update(),r.set(f,l))}return d}function a(){r=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:a}}const ah=new Ge,Pc=new nh(1,1),oh=new ju,lh=new Bp,ch=new eh,Dc=[],Lc=[],Uc=new Float32Array(16),Ic=new Float32Array(9),Nc=new Float32Array(4);function wr(n,t,e){const i=n[0];if(i<=0||i>0)return n;const r=t*e;let s=Dc[r];if(s===void 0&&(s=new Float32Array(r),Dc[r]=s),t!==0){i.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(s,o)}return s}function Te(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Ae(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function la(n,t){let e=Lc[t];e===void 0&&(e=new Int32Array(t),Lc[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function mv(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function _v(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;n.uniform2fv(this.addr,t),Ae(e,t)}}function gv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Te(e,t))return;n.uniform3fv(this.addr,t),Ae(e,t)}}function vv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;n.uniform4fv(this.addr,t),Ae(e,t)}}function xv(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Te(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Ae(e,t)}else{if(Te(e,i))return;Nc.set(i),n.uniformMatrix2fv(this.addr,!1,Nc),Ae(e,i)}}function Mv(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Te(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Ae(e,t)}else{if(Te(e,i))return;Ic.set(i),n.uniformMatrix3fv(this.addr,!1,Ic),Ae(e,i)}}function Sv(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Te(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Ae(e,t)}else{if(Te(e,i))return;Uc.set(i),n.uniformMatrix4fv(this.addr,!1,Uc),Ae(e,i)}}function Ev(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function yv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;n.uniform2iv(this.addr,t),Ae(e,t)}}function bv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Te(e,t))return;n.uniform3iv(this.addr,t),Ae(e,t)}}function Tv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;n.uniform4iv(this.addr,t),Ae(e,t)}}function Av(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function wv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;n.uniform2uiv(this.addr,t),Ae(e,t)}}function Rv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Te(e,t))return;n.uniform3uiv(this.addr,t),Ae(e,t)}}function Cv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;n.uniform4uiv(this.addr,t),Ae(e,t)}}function Pv(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Pc.compareFunction=qu,s=Pc):s=ah,e.setTexture2D(t||s,r)}function Dv(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||lh,r)}function Lv(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||ch,r)}function Uv(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||oh,r)}function Iv(n){switch(n){case 5126:return mv;case 35664:return _v;case 35665:return gv;case 35666:return vv;case 35674:return xv;case 35675:return Mv;case 35676:return Sv;case 5124:case 35670:return Ev;case 35667:case 35671:return yv;case 35668:case 35672:return bv;case 35669:case 35673:return Tv;case 5125:return Av;case 36294:return wv;case 36295:return Rv;case 36296:return Cv;case 35678:case 36198:case 36298:case 36306:case 35682:return Pv;case 35679:case 36299:case 36307:return Dv;case 35680:case 36300:case 36308:case 36293:return Lv;case 36289:case 36303:case 36311:case 36292:return Uv}}function Nv(n,t){n.uniform1fv(this.addr,t)}function Fv(n,t){const e=wr(t,this.size,2);n.uniform2fv(this.addr,e)}function Ov(n,t){const e=wr(t,this.size,3);n.uniform3fv(this.addr,e)}function Bv(n,t){const e=wr(t,this.size,4);n.uniform4fv(this.addr,e)}function zv(n,t){const e=wr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Hv(n,t){const e=wr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function kv(n,t){const e=wr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Vv(n,t){n.uniform1iv(this.addr,t)}function Gv(n,t){n.uniform2iv(this.addr,t)}function Wv(n,t){n.uniform3iv(this.addr,t)}function Xv(n,t){n.uniform4iv(this.addr,t)}function qv(n,t){n.uniform1uiv(this.addr,t)}function Yv(n,t){n.uniform2uiv(this.addr,t)}function jv(n,t){n.uniform3uiv(this.addr,t)}function $v(n,t){n.uniform4uiv(this.addr,t)}function Kv(n,t,e){const i=this.cache,r=t.length,s=la(e,r);Te(i,s)||(n.uniform1iv(this.addr,s),Ae(i,s));for(let a=0;a!==r;++a)e.setTexture2D(t[a]||ah,s[a])}function Zv(n,t,e){const i=this.cache,r=t.length,s=la(e,r);Te(i,s)||(n.uniform1iv(this.addr,s),Ae(i,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||lh,s[a])}function Jv(n,t,e){const i=this.cache,r=t.length,s=la(e,r);Te(i,s)||(n.uniform1iv(this.addr,s),Ae(i,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||ch,s[a])}function Qv(n,t,e){const i=this.cache,r=t.length,s=la(e,r);Te(i,s)||(n.uniform1iv(this.addr,s),Ae(i,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||oh,s[a])}function t0(n){switch(n){case 5126:return Nv;case 35664:return Fv;case 35665:return Ov;case 35666:return Bv;case 35674:return zv;case 35675:return Hv;case 35676:return kv;case 5124:case 35670:return Vv;case 35667:case 35671:return Gv;case 35668:case 35672:return Wv;case 35669:case 35673:return Xv;case 5125:return qv;case 36294:return Yv;case 36295:return jv;case 36296:return $v;case 35678:case 36198:case 36298:case 36306:case 35682:return Kv;case 35679:case 36299:case 36307:return Zv;case 35680:case 36300:case 36308:case 36293:return Jv;case 36289:case 36303:case 36311:case 36292:return Qv}}class e0{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Iv(e.type)}}class n0{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=t0(e.type)}}class i0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(t,e[o.id],i)}}}const Ya=/(\w+)(\])?(\[|\.)?/g;function Fc(n,t){n.seq.push(t),n.map[t.id]=t}function r0(n,t,e){const i=n.name,r=i.length;for(Ya.lastIndex=0;;){const s=Ya.exec(i),a=Ya.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){Fc(e,l===void 0?new e0(o,n,t):new n0(o,n,t));break}else{let d=e.map[o];d===void 0&&(d=new i0(o),Fc(e,d)),e=d}}}class Vs{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=t.getActiveUniform(e,r),a=t.getUniformLocation(e,s.name);r0(s,a,this)}}setValue(t,e,i,r){const s=this.map[e];s!==void 0&&s.setValue(t,i,r)}setOptional(t,e,i){const r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let s=0,a=e.length;s!==a;++s){const o=e[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,r)}}static seqWithValue(t,e){const i=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in e&&i.push(a)}return i}}function Oc(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const s0=37297;let a0=0;function o0(n,t){const e=n.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}const Bc=new Vt;function l0(n){Qt._getMatrix(Bc,Qt.workingColorSpace,n);const t=`mat3( ${Bc.elements.map(e=>e.toFixed(4))} )`;switch(Qt.getTransfer(n)){case Ys:return[t,"LinearTransferOETF"];case ae:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function zc(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=(n.getShaderInfoLog(t)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+s+`

`+o0(n.getShaderSource(t),o)}else return s}function c0(n,t){const e=l0(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function u0(n,t){let e;switch(t){case hp:e="Linear";break;case fp:e="Reinhard";break;case dp:e="Cineon";break;case pp:e="ACESFilmic";break;case _p:e="AgX";break;case gp:e="Neutral";break;case mp:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Is=new I;function h0(){Qt.getLuminanceCoefficients(Is);const n=Is.x.toFixed(4),t=Is.y.toFixed(4),e=Is.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function f0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Br).join(`
`)}function d0(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function p0(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(t,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function Br(n){return n!==""}function Hc(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function kc(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const m0=/^[ \t]*#include +<([\w\d./]+)>/gm;function qo(n){return n.replace(m0,g0)}const _0=new Map;function g0(n,t){let e=Wt[t];if(e===void 0){const i=_0.get(t);if(i!==void 0)e=Wt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return qo(e)}const v0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vc(n){return n.replace(v0,x0)}function x0(n,t,e,i){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Gc(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function M0(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Iu?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Wd?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===zn&&(t="SHADOWMAP_TYPE_VSM"),t}function S0(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Mr:case Sr:t="ENVMAP_TYPE_CUBE";break;case sa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function E0(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Sr:t="ENVMAP_MODE_REFRACTION";break}return t}function y0(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Nu:t="ENVMAP_BLENDING_MULTIPLY";break;case cp:t="ENVMAP_BLENDING_MIX";break;case up:t="ENVMAP_BLENDING_ADD";break}return t}function b0(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function T0(n,t,e,i){const r=n.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=M0(e),l=S0(e),u=E0(e),d=y0(e),f=b0(e),p=f0(e),_=d0(s),v=r.createProgram();let m,h,T=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Br).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Br).join(`
`),h.length>0&&(h+=`
`)):(m=[Gc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Br).join(`
`),h=[Gc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==si?"#define TONE_MAPPING":"",e.toneMapping!==si?Wt.tonemapping_pars_fragment:"",e.toneMapping!==si?u0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Wt.colorspace_pars_fragment,c0("linearToOutputTexel",e.outputColorSpace),h0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Br).join(`
`)),a=qo(a),a=Hc(a,e),a=kc(a,e),o=qo(o),o=Hc(o,e),o=kc(o,e),a=Vc(a),o=Vc(o),e.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",e.glslVersion===Zl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Zl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const y=T+m+a,E=T+h+o,C=Oc(r,r.VERTEX_SHADER,y),A=Oc(r,r.FRAGMENT_SHADER,E);r.attachShader(v,C),r.attachShader(v,A),e.index0AttributeName!==void 0?r.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function R(P){if(n.debug.checkShaderErrors){const L=r.getProgramInfoLog(v)||"",B=r.getShaderInfoLog(C)||"",V=r.getShaderInfoLog(A)||"",z=L.trim(),G=B.trim(),Y=V.trim();let k=!0,X=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(k=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,C,A);else{const J=zc(r,C,"vertex"),rt=zc(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+z+`
`+J+`
`+rt)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(G===""||Y==="")&&(X=!1);X&&(P.diagnostics={runnable:k,programLog:z,vertexShader:{log:G,prefix:m},fragmentShader:{log:Y,prefix:h}})}r.deleteShader(C),r.deleteShader(A),N=new Vs(r,v),M=p0(r,v)}let N;this.getUniforms=function(){return N===void 0&&R(this),N};let M;this.getAttributes=function(){return M===void 0&&R(this),M};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(v,s0)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=a0++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=C,this.fragmentShader=A,this}let A0=0;class w0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new R0(t),e.set(t,i)),i}}class R0{constructor(t){this.id=A0++,this.code=t,this.usedTimes=0}}function C0(n,t,e,i,r,s,a){const o=new $u,c=new w0,l=new Set,u=[],d=r.logarithmicDepthBuffer,f=r.vertexTextures;let p=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(M){return l.add(M),M===0?"uv":`uv${M}`}function m(M,S,P,L,B){const V=L.fog,z=B.geometry,G=M.isMeshStandardMaterial?L.environment:null,Y=(M.isMeshStandardMaterial?e:t).get(M.envMap||G),k=Y&&Y.mapping===sa?Y.image.height:null,X=_[M.type];M.precision!==null&&(p=r.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const J=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,rt=J!==void 0?J.length:0;let _t=0;z.morphAttributes.position!==void 0&&(_t=1),z.morphAttributes.normal!==void 0&&(_t=2),z.morphAttributes.color!==void 0&&(_t=3);let It,Ht,Ot,q;if(X){const ee=Sn[X];It=ee.vertexShader,Ht=ee.fragmentShader}else It=M.vertexShader,Ht=M.fragmentShader,c.update(M),Ot=c.getVertexShaderID(M),q=c.getFragmentShaderID(M);const K=n.getRenderTarget(),ot=n.state.buffers.depth.getReversed(),xt=B.isInstancedMesh===!0,pt=B.isBatchedMesh===!0,Ft=!!M.map,ie=!!M.matcap,w=!!Y,te=!!M.aoMap,Ct=!!M.lightMap,Pt=!!M.bumpMap,gt=!!M.normalMap,re=!!M.displacementMap,Mt=!!M.emissiveMap,Gt=!!M.metalnessMap,we=!!M.roughnessMap,Me=M.anisotropy>0,b=M.clearcoat>0,g=M.dispersion>0,O=M.iridescence>0,$=M.sheen>0,Q=M.transmission>0,j=Me&&!!M.anisotropyMap,At=b&&!!M.clearcoatMap,st=b&&!!M.clearcoatNormalMap,yt=b&&!!M.clearcoatRoughnessMap,bt=O&&!!M.iridescenceMap,nt=O&&!!M.iridescenceThicknessMap,ht=$&&!!M.sheenColorMap,Ut=$&&!!M.sheenRoughnessMap,Tt=!!M.specularMap,ct=!!M.specularColorMap,kt=!!M.specularIntensityMap,D=Q&&!!M.transmissionMap,it=Q&&!!M.thicknessMap,at=!!M.gradientMap,vt=!!M.alphaMap,tt=M.alphaTest>0,Z=!!M.alphaHash,Et=!!M.extensions;let Bt=si;M.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Bt=n.toneMapping);const he={shaderID:X,shaderType:M.type,shaderName:M.name,vertexShader:It,fragmentShader:Ht,defines:M.defines,customVertexShaderID:Ot,customFragmentShaderID:q,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:pt,batchingColor:pt&&B._colorsTexture!==null,instancing:xt,instancingColor:xt&&B.instanceColor!==null,instancingMorph:xt&&B.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:K===null?n.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:Er,alphaToCoverage:!!M.alphaToCoverage,map:Ft,matcap:ie,envMap:w,envMapMode:w&&Y.mapping,envMapCubeUVHeight:k,aoMap:te,lightMap:Ct,bumpMap:Pt,normalMap:gt,displacementMap:f&&re,emissiveMap:Mt,normalMapObjectSpace:gt&&M.normalMapType===Sp,normalMapTangentSpace:gt&&M.normalMapType===Xu,metalnessMap:Gt,roughnessMap:we,anisotropy:Me,anisotropyMap:j,clearcoat:b,clearcoatMap:At,clearcoatNormalMap:st,clearcoatRoughnessMap:yt,dispersion:g,iridescence:O,iridescenceMap:bt,iridescenceThicknessMap:nt,sheen:$,sheenColorMap:ht,sheenRoughnessMap:Ut,specularMap:Tt,specularColorMap:ct,specularIntensityMap:kt,transmission:Q,transmissionMap:D,thicknessMap:it,gradientMap:at,opaque:M.transparent===!1&&M.blending===pr&&M.alphaToCoverage===!1,alphaMap:vt,alphaTest:tt,alphaHash:Z,combine:M.combine,mapUv:Ft&&v(M.map.channel),aoMapUv:te&&v(M.aoMap.channel),lightMapUv:Ct&&v(M.lightMap.channel),bumpMapUv:Pt&&v(M.bumpMap.channel),normalMapUv:gt&&v(M.normalMap.channel),displacementMapUv:re&&v(M.displacementMap.channel),emissiveMapUv:Mt&&v(M.emissiveMap.channel),metalnessMapUv:Gt&&v(M.metalnessMap.channel),roughnessMapUv:we&&v(M.roughnessMap.channel),anisotropyMapUv:j&&v(M.anisotropyMap.channel),clearcoatMapUv:At&&v(M.clearcoatMap.channel),clearcoatNormalMapUv:st&&v(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:yt&&v(M.clearcoatRoughnessMap.channel),iridescenceMapUv:bt&&v(M.iridescenceMap.channel),iridescenceThicknessMapUv:nt&&v(M.iridescenceThicknessMap.channel),sheenColorMapUv:ht&&v(M.sheenColorMap.channel),sheenRoughnessMapUv:Ut&&v(M.sheenRoughnessMap.channel),specularMapUv:Tt&&v(M.specularMap.channel),specularColorMapUv:ct&&v(M.specularColorMap.channel),specularIntensityMapUv:kt&&v(M.specularIntensityMap.channel),transmissionMapUv:D&&v(M.transmissionMap.channel),thicknessMapUv:it&&v(M.thicknessMap.channel),alphaMapUv:vt&&v(M.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(gt||Me),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!z.attributes.uv&&(Ft||vt),fog:!!V,useFog:M.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ot,skinning:B.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:rt,morphTextureStride:_t,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:Bt,decodeVideoTexture:Ft&&M.map.isVideoTexture===!0&&Qt.getTransfer(M.map.colorSpace)===ae,decodeVideoTextureEmissive:Mt&&M.emissiveMap.isVideoTexture===!0&&Qt.getTransfer(M.emissiveMap.colorSpace)===ae,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Hn,flipSided:M.side===Ve,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Et&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Et&&M.extensions.multiDraw===!0||pt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return he.vertexUv1s=l.has(1),he.vertexUv2s=l.has(2),he.vertexUv3s=l.has(3),l.clear(),he}function h(M){const S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(const P in M.defines)S.push(P),S.push(M.defines[P]);return M.isRawShaderMaterial===!1&&(T(S,M),y(S,M),S.push(n.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function T(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function y(M,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),S.gradientMap&&o.enable(22),M.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),M.push(o.mask)}function E(M){const S=_[M.type];let P;if(S){const L=Sn[S];P=Zp.clone(L.uniforms)}else P=M.uniforms;return P}function C(M,S){let P;for(let L=0,B=u.length;L<B;L++){const V=u[L];if(V.cacheKey===S){P=V,++P.usedTimes;break}}return P===void 0&&(P=new T0(n,S,M,s),u.push(P)),P}function A(M){if(--M.usedTimes===0){const S=u.indexOf(M);u[S]=u[u.length-1],u.pop(),M.destroy()}}function R(M){c.remove(M)}function N(){c.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:E,acquireProgram:C,releaseProgram:A,releaseShaderCache:R,programs:u,dispose:N}}function P0(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,c){n.get(a)[o]=c}function s(){n=new WeakMap}return{has:t,get:e,remove:i,update:r,dispose:s}}function D0(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Wc(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Xc(){const n=[];let t=0;const e=[],i=[],r=[];function s(){t=0,e.length=0,i.length=0,r.length=0}function a(d,f,p,_,v,m){let h=n[t];return h===void 0?(h={id:d.id,object:d,geometry:f,material:p,groupOrder:_,renderOrder:d.renderOrder,z:v,group:m},n[t]=h):(h.id=d.id,h.object=d,h.geometry=f,h.material=p,h.groupOrder=_,h.renderOrder=d.renderOrder,h.z=v,h.group=m),t++,h}function o(d,f,p,_,v,m){const h=a(d,f,p,_,v,m);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):e.push(h)}function c(d,f,p,_,v,m){const h=a(d,f,p,_,v,m);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):e.unshift(h)}function l(d,f){e.length>1&&e.sort(d||D0),i.length>1&&i.sort(f||Wc),r.length>1&&r.sort(f||Wc)}function u(){for(let d=t,f=n.length;d<f;d++){const p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:r,init:s,push:o,unshift:c,finish:u,sort:l}}function L0(){let n=new WeakMap;function t(i,r){const s=n.get(i);let a;return s===void 0?(a=new Xc,n.set(i,[a])):r>=s.length?(a=new Xc,s.push(a)):a=s[r],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function U0(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new Zt};break;case"SpotLight":e={position:new I,direction:new I,color:new Zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new Zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new Zt,groundColor:new Zt};break;case"RectAreaLight":e={color:new Zt,position:new I,halfWidth:new I,halfHeight:new I};break}return n[t.id]=e,e}}}function I0(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let N0=0;function F0(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function O0(n){const t=new U0,e=I0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new I);const r=new I,s=new ve,a=new ve;function o(l){let u=0,d=0,f=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let p=0,_=0,v=0,m=0,h=0,T=0,y=0,E=0,C=0,A=0,R=0;l.sort(F0);for(let M=0,S=l.length;M<S;M++){const P=l[M],L=P.color,B=P.intensity,V=P.distance,z=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=L.r*B,d+=L.g*B,f+=L.b*B;else if(P.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(P.sh.coefficients[G],B);R++}else if(P.isDirectionalLight){const G=t.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const Y=P.shadow,k=e.get(P);k.shadowIntensity=Y.intensity,k.shadowBias=Y.bias,k.shadowNormalBias=Y.normalBias,k.shadowRadius=Y.radius,k.shadowMapSize=Y.mapSize,i.directionalShadow[p]=k,i.directionalShadowMap[p]=z,i.directionalShadowMatrix[p]=P.shadow.matrix,T++}i.directional[p]=G,p++}else if(P.isSpotLight){const G=t.get(P);G.position.setFromMatrixPosition(P.matrixWorld),G.color.copy(L).multiplyScalar(B),G.distance=V,G.coneCos=Math.cos(P.angle),G.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),G.decay=P.decay,i.spot[v]=G;const Y=P.shadow;if(P.map&&(i.spotLightMap[C]=P.map,C++,Y.updateMatrices(P),P.castShadow&&A++),i.spotLightMatrix[v]=Y.matrix,P.castShadow){const k=e.get(P);k.shadowIntensity=Y.intensity,k.shadowBias=Y.bias,k.shadowNormalBias=Y.normalBias,k.shadowRadius=Y.radius,k.shadowMapSize=Y.mapSize,i.spotShadow[v]=k,i.spotShadowMap[v]=z,E++}v++}else if(P.isRectAreaLight){const G=t.get(P);G.color.copy(L).multiplyScalar(B),G.halfWidth.set(P.width*.5,0,0),G.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=G,m++}else if(P.isPointLight){const G=t.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),G.distance=P.distance,G.decay=P.decay,P.castShadow){const Y=P.shadow,k=e.get(P);k.shadowIntensity=Y.intensity,k.shadowBias=Y.bias,k.shadowNormalBias=Y.normalBias,k.shadowRadius=Y.radius,k.shadowMapSize=Y.mapSize,k.shadowCameraNear=Y.camera.near,k.shadowCameraFar=Y.camera.far,i.pointShadow[_]=k,i.pointShadowMap[_]=z,i.pointShadowMatrix[_]=P.shadow.matrix,y++}i.point[_]=G,_++}else if(P.isHemisphereLight){const G=t.get(P);G.skyColor.copy(P.color).multiplyScalar(B),G.groundColor.copy(P.groundColor).multiplyScalar(B),i.hemi[h]=G,h++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=lt.LTC_FLOAT_1,i.rectAreaLTC2=lt.LTC_FLOAT_2):(i.rectAreaLTC1=lt.LTC_HALF_1,i.rectAreaLTC2=lt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;const N=i.hash;(N.directionalLength!==p||N.pointLength!==_||N.spotLength!==v||N.rectAreaLength!==m||N.hemiLength!==h||N.numDirectionalShadows!==T||N.numPointShadows!==y||N.numSpotShadows!==E||N.numSpotMaps!==C||N.numLightProbes!==R)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=m,i.point.length=_,i.hemi.length=h,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=E+C-A,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=R,N.directionalLength=p,N.pointLength=_,N.spotLength=v,N.rectAreaLength=m,N.hemiLength=h,N.numDirectionalShadows=T,N.numPointShadows=y,N.numSpotShadows=E,N.numSpotMaps=C,N.numLightProbes=R,i.version=N0++)}function c(l,u){let d=0,f=0,p=0,_=0,v=0;const m=u.matrixWorldInverse;for(let h=0,T=l.length;h<T;h++){const y=l[h];if(y.isDirectionalLight){const E=i.directional[d];E.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),d++}else if(y.isSpotLight){const E=i.spot[p];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),p++}else if(y.isRectAreaLight){const E=i.rectArea[_];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(m),a.identity(),s.copy(y.matrixWorld),s.premultiply(m),a.extractRotation(s),E.halfWidth.set(y.width*.5,0,0),E.halfHeight.set(0,y.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),_++}else if(y.isPointLight){const E=i.point[f];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){const E=i.hemi[v];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(m),v++}}}return{setup:o,setupView:c,state:i}}function qc(n){const t=new O0(n),e=[],i=[];function r(u){l.camera=u,e.length=0,i.length=0}function s(u){e.push(u)}function a(u){i.push(u)}function o(){t.setup(e)}function c(u){t.setupView(e,u)}const l={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function B0(n){let t=new WeakMap;function e(r,s=0){const a=t.get(r);let o;return a===void 0?(o=new qc(n),t.set(r,[o])):s>=a.length?(o=new qc(n),a.push(o)):o=a[s],o}function i(){t=new WeakMap}return{get:e,dispose:i}}const z0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,H0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function k0(n,t,e){let i=new vl;const r=new zt,s=new zt,a=new le,o=new lm({depthPacking:Mp}),c=new cm,l={},u=e.maxTextureSize,d={[ai]:Ve,[Ve]:ai,[Hn]:Hn},f=new oi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new zt},radius:{value:4}},vertexShader:z0,fragmentShader:H0}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const _=new Dn;_.setAttribute("position",new An(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new sn(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Iu;let h=this.type;this.render=function(A,R,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const M=n.getRenderTarget(),S=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),L=n.state;L.setBlending(ri),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const B=h!==zn&&this.type===zn,V=h===zn&&this.type!==zn;for(let z=0,G=A.length;z<G;z++){const Y=A[z],k=Y.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);const X=k.getFrameExtents();if(r.multiply(X),s.copy(k.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/X.x),r.x=s.x*X.x,k.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/X.y),r.y=s.y*X.y,k.mapSize.y=s.y)),k.map===null||B===!0||V===!0){const rt=this.type!==zn?{minFilter:gn,magFilter:gn}:{};k.map!==null&&k.map.dispose(),k.map=new Ii(r.x,r.y,rt),k.map.texture.name=Y.name+".shadowMap",k.camera.updateProjectionMatrix()}n.setRenderTarget(k.map),n.clear();const J=k.getViewportCount();for(let rt=0;rt<J;rt++){const _t=k.getViewport(rt);a.set(s.x*_t.x,s.y*_t.y,s.x*_t.z,s.y*_t.w),L.viewport(a),k.updateMatrices(Y,rt),i=k.getFrustum(),E(R,N,k.camera,Y,this.type)}k.isPointLightShadow!==!0&&this.type===zn&&T(k,N),k.needsUpdate=!1}h=this.type,m.needsUpdate=!1,n.setRenderTarget(M,S,P)};function T(A,R){const N=t.update(v);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Ii(r.x,r.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(R,null,N,f,v,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(R,null,N,p,v,null)}function y(A,R,N,M){let S=null;const P=N.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(P!==void 0)S=P;else if(S=N.isPointLight===!0?c:o,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const L=S.uuid,B=R.uuid;let V=l[L];V===void 0&&(V={},l[L]=V);let z=V[B];z===void 0&&(z=S.clone(),V[B]=z,R.addEventListener("dispose",C)),S=z}if(S.visible=R.visible,S.wireframe=R.wireframe,M===zn?S.side=R.shadowSide!==null?R.shadowSide:R.side:S.side=R.shadowSide!==null?R.shadowSide:d[R.side],S.alphaMap=R.alphaMap,S.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,S.map=R.map,S.clipShadows=R.clipShadows,S.clippingPlanes=R.clippingPlanes,S.clipIntersection=R.clipIntersection,S.displacementMap=R.displacementMap,S.displacementScale=R.displacementScale,S.displacementBias=R.displacementBias,S.wireframeLinewidth=R.wireframeLinewidth,S.linewidth=R.linewidth,N.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const L=n.properties.get(S);L.light=N}return S}function E(A,R,N,M,S){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&S===zn)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,A.matrixWorld);const B=t.update(A),V=A.material;if(Array.isArray(V)){const z=B.groups;for(let G=0,Y=z.length;G<Y;G++){const k=z[G],X=V[k.materialIndex];if(X&&X.visible){const J=y(A,X,M,S);A.onBeforeShadow(n,A,R,N,B,J,k),n.renderBufferDirect(N,null,B,J,A,k),A.onAfterShadow(n,A,R,N,B,J,k)}}}else if(V.visible){const z=y(A,V,M,S);A.onBeforeShadow(n,A,R,N,B,z,null),n.renderBufferDirect(N,null,B,z,A,null),A.onAfterShadow(n,A,R,N,B,z,null)}}const L=A.children;for(let B=0,V=L.length;B<V;B++)E(L[B],R,N,M,S)}function C(A){A.target.removeEventListener("dispose",C);for(const N in l){const M=l[N],S=A.target.uuid;S in M&&(M[S].dispose(),delete M[S])}}}const V0={[so]:ao,[oo]:uo,[lo]:ho,[xr]:co,[ao]:so,[uo]:oo,[ho]:lo,[co]:xr};function G0(n,t){function e(){let D=!1;const it=new le;let at=null;const vt=new le(0,0,0,0);return{setMask:function(tt){at!==tt&&!D&&(n.colorMask(tt,tt,tt,tt),at=tt)},setLocked:function(tt){D=tt},setClear:function(tt,Z,Et,Bt,he){he===!0&&(tt*=Bt,Z*=Bt,Et*=Bt),it.set(tt,Z,Et,Bt),vt.equals(it)===!1&&(n.clearColor(tt,Z,Et,Bt),vt.copy(it))},reset:function(){D=!1,at=null,vt.set(-1,0,0,0)}}}function i(){let D=!1,it=!1,at=null,vt=null,tt=null;return{setReversed:function(Z){if(it!==Z){const Et=t.get("EXT_clip_control");Z?Et.clipControlEXT(Et.LOWER_LEFT_EXT,Et.ZERO_TO_ONE_EXT):Et.clipControlEXT(Et.LOWER_LEFT_EXT,Et.NEGATIVE_ONE_TO_ONE_EXT),it=Z;const Bt=tt;tt=null,this.setClear(Bt)}},getReversed:function(){return it},setTest:function(Z){Z?K(n.DEPTH_TEST):ot(n.DEPTH_TEST)},setMask:function(Z){at!==Z&&!D&&(n.depthMask(Z),at=Z)},setFunc:function(Z){if(it&&(Z=V0[Z]),vt!==Z){switch(Z){case so:n.depthFunc(n.NEVER);break;case ao:n.depthFunc(n.ALWAYS);break;case oo:n.depthFunc(n.LESS);break;case xr:n.depthFunc(n.LEQUAL);break;case lo:n.depthFunc(n.EQUAL);break;case co:n.depthFunc(n.GEQUAL);break;case uo:n.depthFunc(n.GREATER);break;case ho:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}vt=Z}},setLocked:function(Z){D=Z},setClear:function(Z){tt!==Z&&(it&&(Z=1-Z),n.clearDepth(Z),tt=Z)},reset:function(){D=!1,at=null,vt=null,tt=null,it=!1}}}function r(){let D=!1,it=null,at=null,vt=null,tt=null,Z=null,Et=null,Bt=null,he=null;return{setTest:function(ee){D||(ee?K(n.STENCIL_TEST):ot(n.STENCIL_TEST))},setMask:function(ee){it!==ee&&!D&&(n.stencilMask(ee),it=ee)},setFunc:function(ee,Ln,xn){(at!==ee||vt!==Ln||tt!==xn)&&(n.stencilFunc(ee,Ln,xn),at=ee,vt=Ln,tt=xn)},setOp:function(ee,Ln,xn){(Z!==ee||Et!==Ln||Bt!==xn)&&(n.stencilOp(ee,Ln,xn),Z=ee,Et=Ln,Bt=xn)},setLocked:function(ee){D=ee},setClear:function(ee){he!==ee&&(n.clearStencil(ee),he=ee)},reset:function(){D=!1,it=null,at=null,vt=null,tt=null,Z=null,Et=null,Bt=null,he=null}}}const s=new e,a=new i,o=new r,c=new WeakMap,l=new WeakMap;let u={},d={},f=new WeakMap,p=[],_=null,v=!1,m=null,h=null,T=null,y=null,E=null,C=null,A=null,R=new Zt(0,0,0),N=0,M=!1,S=null,P=null,L=null,B=null,V=null;const z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,Y=0;const k=n.getParameter(n.VERSION);k.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(k)[1]),G=Y>=1):k.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),G=Y>=2);let X=null,J={};const rt=n.getParameter(n.SCISSOR_BOX),_t=n.getParameter(n.VIEWPORT),It=new le().fromArray(rt),Ht=new le().fromArray(_t);function Ot(D,it,at,vt){const tt=new Uint8Array(4),Z=n.createTexture();n.bindTexture(D,Z),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Et=0;Et<at;Et++)D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY?n.texImage3D(it,0,n.RGBA,1,1,vt,0,n.RGBA,n.UNSIGNED_BYTE,tt):n.texImage2D(it+Et,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,tt);return Z}const q={};q[n.TEXTURE_2D]=Ot(n.TEXTURE_2D,n.TEXTURE_2D,1),q[n.TEXTURE_CUBE_MAP]=Ot(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[n.TEXTURE_2D_ARRAY]=Ot(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),q[n.TEXTURE_3D]=Ot(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),K(n.DEPTH_TEST),a.setFunc(xr),Pt(!1),gt(Xl),K(n.CULL_FACE),te(ri);function K(D){u[D]!==!0&&(n.enable(D),u[D]=!0)}function ot(D){u[D]!==!1&&(n.disable(D),u[D]=!1)}function xt(D,it){return d[D]!==it?(n.bindFramebuffer(D,it),d[D]=it,D===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=it),D===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=it),!0):!1}function pt(D,it){let at=p,vt=!1;if(D){at=f.get(it),at===void 0&&(at=[],f.set(it,at));const tt=D.textures;if(at.length!==tt.length||at[0]!==n.COLOR_ATTACHMENT0){for(let Z=0,Et=tt.length;Z<Et;Z++)at[Z]=n.COLOR_ATTACHMENT0+Z;at.length=tt.length,vt=!0}}else at[0]!==n.BACK&&(at[0]=n.BACK,vt=!0);vt&&n.drawBuffers(at)}function Ft(D){return _!==D?(n.useProgram(D),_=D,!0):!1}const ie={[Si]:n.FUNC_ADD,[qd]:n.FUNC_SUBTRACT,[Yd]:n.FUNC_REVERSE_SUBTRACT};ie[jd]=n.MIN,ie[$d]=n.MAX;const w={[Kd]:n.ZERO,[Zd]:n.ONE,[Jd]:n.SRC_COLOR,[io]:n.SRC_ALPHA,[rp]:n.SRC_ALPHA_SATURATE,[np]:n.DST_COLOR,[tp]:n.DST_ALPHA,[Qd]:n.ONE_MINUS_SRC_COLOR,[ro]:n.ONE_MINUS_SRC_ALPHA,[ip]:n.ONE_MINUS_DST_COLOR,[ep]:n.ONE_MINUS_DST_ALPHA,[sp]:n.CONSTANT_COLOR,[ap]:n.ONE_MINUS_CONSTANT_COLOR,[op]:n.CONSTANT_ALPHA,[lp]:n.ONE_MINUS_CONSTANT_ALPHA};function te(D,it,at,vt,tt,Z,Et,Bt,he,ee){if(D===ri){v===!0&&(ot(n.BLEND),v=!1);return}if(v===!1&&(K(n.BLEND),v=!0),D!==Xd){if(D!==m||ee!==M){if((h!==Si||E!==Si)&&(n.blendEquation(n.FUNC_ADD),h=Si,E=Si),ee)switch(D){case pr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ql:n.blendFunc(n.ONE,n.ONE);break;case Yl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case jl:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case pr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ql:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Yl:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case jl:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}T=null,y=null,C=null,A=null,R.set(0,0,0),N=0,m=D,M=ee}return}tt=tt||it,Z=Z||at,Et=Et||vt,(it!==h||tt!==E)&&(n.blendEquationSeparate(ie[it],ie[tt]),h=it,E=tt),(at!==T||vt!==y||Z!==C||Et!==A)&&(n.blendFuncSeparate(w[at],w[vt],w[Z],w[Et]),T=at,y=vt,C=Z,A=Et),(Bt.equals(R)===!1||he!==N)&&(n.blendColor(Bt.r,Bt.g,Bt.b,he),R.copy(Bt),N=he),m=D,M=!1}function Ct(D,it){D.side===Hn?ot(n.CULL_FACE):K(n.CULL_FACE);let at=D.side===Ve;it&&(at=!at),Pt(at),D.blending===pr&&D.transparent===!1?te(ri):te(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),s.setMask(D.colorWrite);const vt=D.stencilWrite;o.setTest(vt),vt&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Mt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?K(n.SAMPLE_ALPHA_TO_COVERAGE):ot(n.SAMPLE_ALPHA_TO_COVERAGE)}function Pt(D){S!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),S=D)}function gt(D){D!==Vd?(K(n.CULL_FACE),D!==P&&(D===Xl?n.cullFace(n.BACK):D===Gd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ot(n.CULL_FACE),P=D}function re(D){D!==L&&(G&&n.lineWidth(D),L=D)}function Mt(D,it,at){D?(K(n.POLYGON_OFFSET_FILL),(B!==it||V!==at)&&(n.polygonOffset(it,at),B=it,V=at)):ot(n.POLYGON_OFFSET_FILL)}function Gt(D){D?K(n.SCISSOR_TEST):ot(n.SCISSOR_TEST)}function we(D){D===void 0&&(D=n.TEXTURE0+z-1),X!==D&&(n.activeTexture(D),X=D)}function Me(D,it,at){at===void 0&&(X===null?at=n.TEXTURE0+z-1:at=X);let vt=J[at];vt===void 0&&(vt={type:void 0,texture:void 0},J[at]=vt),(vt.type!==D||vt.texture!==it)&&(X!==at&&(n.activeTexture(at),X=at),n.bindTexture(D,it||q[D]),vt.type=D,vt.texture=it)}function b(){const D=J[X];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function g(){try{n.compressedTexImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function O(){try{n.compressedTexImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function $(){try{n.texSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Q(){try{n.texSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function j(){try{n.compressedTexSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function At(){try{n.compressedTexSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function st(){try{n.texStorage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function yt(){try{n.texStorage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function bt(){try{n.texImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function nt(){try{n.texImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ht(D){It.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),It.copy(D))}function Ut(D){Ht.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),Ht.copy(D))}function Tt(D,it){let at=l.get(it);at===void 0&&(at=new WeakMap,l.set(it,at));let vt=at.get(D);vt===void 0&&(vt=n.getUniformBlockIndex(it,D.name),at.set(D,vt))}function ct(D,it){const vt=l.get(it).get(D);c.get(it)!==vt&&(n.uniformBlockBinding(it,vt,D.__bindingPointIndex),c.set(it,vt))}function kt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},X=null,J={},d={},f=new WeakMap,p=[],_=null,v=!1,m=null,h=null,T=null,y=null,E=null,C=null,A=null,R=new Zt(0,0,0),N=0,M=!1,S=null,P=null,L=null,B=null,V=null,It.set(0,0,n.canvas.width,n.canvas.height),Ht.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:K,disable:ot,bindFramebuffer:xt,drawBuffers:pt,useProgram:Ft,setBlending:te,setMaterial:Ct,setFlipSided:Pt,setCullFace:gt,setLineWidth:re,setPolygonOffset:Mt,setScissorTest:Gt,activeTexture:we,bindTexture:Me,unbindTexture:b,compressedTexImage2D:g,compressedTexImage3D:O,texImage2D:bt,texImage3D:nt,updateUBOMapping:Tt,uniformBlockBinding:ct,texStorage2D:st,texStorage3D:yt,texSubImage2D:$,texSubImage3D:Q,compressedTexSubImage2D:j,compressedTexSubImage3D:At,scissor:ht,viewport:Ut,reset:kt}}function W0(n,t,e,i,r,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new zt,u=new WeakMap;let d;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(b,g){return p?new OffscreenCanvas(b,g):$s("canvas")}function v(b,g,O){let $=1;const Q=Me(b);if((Q.width>O||Q.height>O)&&($=O/Math.max(Q.width,Q.height)),$<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const j=Math.floor($*Q.width),At=Math.floor($*Q.height);d===void 0&&(d=_(j,At));const st=g?_(j,At):d;return st.width=j,st.height=At,st.getContext("2d").drawImage(b,0,0,j,At),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+j+"x"+At+")."),st}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),b;return b}function m(b){return b.generateMipmaps}function h(b){n.generateMipmap(b)}function T(b){return b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?n.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(b,g,O,$,Q=!1){if(b!==null){if(n[b]!==void 0)return n[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let j=g;if(g===n.RED&&(O===n.FLOAT&&(j=n.R32F),O===n.HALF_FLOAT&&(j=n.R16F),O===n.UNSIGNED_BYTE&&(j=n.R8)),g===n.RED_INTEGER&&(O===n.UNSIGNED_BYTE&&(j=n.R8UI),O===n.UNSIGNED_SHORT&&(j=n.R16UI),O===n.UNSIGNED_INT&&(j=n.R32UI),O===n.BYTE&&(j=n.R8I),O===n.SHORT&&(j=n.R16I),O===n.INT&&(j=n.R32I)),g===n.RG&&(O===n.FLOAT&&(j=n.RG32F),O===n.HALF_FLOAT&&(j=n.RG16F),O===n.UNSIGNED_BYTE&&(j=n.RG8)),g===n.RG_INTEGER&&(O===n.UNSIGNED_BYTE&&(j=n.RG8UI),O===n.UNSIGNED_SHORT&&(j=n.RG16UI),O===n.UNSIGNED_INT&&(j=n.RG32UI),O===n.BYTE&&(j=n.RG8I),O===n.SHORT&&(j=n.RG16I),O===n.INT&&(j=n.RG32I)),g===n.RGB_INTEGER&&(O===n.UNSIGNED_BYTE&&(j=n.RGB8UI),O===n.UNSIGNED_SHORT&&(j=n.RGB16UI),O===n.UNSIGNED_INT&&(j=n.RGB32UI),O===n.BYTE&&(j=n.RGB8I),O===n.SHORT&&(j=n.RGB16I),O===n.INT&&(j=n.RGB32I)),g===n.RGBA_INTEGER&&(O===n.UNSIGNED_BYTE&&(j=n.RGBA8UI),O===n.UNSIGNED_SHORT&&(j=n.RGBA16UI),O===n.UNSIGNED_INT&&(j=n.RGBA32UI),O===n.BYTE&&(j=n.RGBA8I),O===n.SHORT&&(j=n.RGBA16I),O===n.INT&&(j=n.RGBA32I)),g===n.RGB&&(O===n.UNSIGNED_INT_5_9_9_9_REV&&(j=n.RGB9_E5),O===n.UNSIGNED_INT_10F_11F_11F_REV&&(j=n.R11F_G11F_B10F)),g===n.RGBA){const At=Q?Ys:Qt.getTransfer($);O===n.FLOAT&&(j=n.RGBA32F),O===n.HALF_FLOAT&&(j=n.RGBA16F),O===n.UNSIGNED_BYTE&&(j=At===ae?n.SRGB8_ALPHA8:n.RGBA8),O===n.UNSIGNED_SHORT_4_4_4_4&&(j=n.RGBA4),O===n.UNSIGNED_SHORT_5_5_5_1&&(j=n.RGB5_A1)}return(j===n.R16F||j===n.R32F||j===n.RG16F||j===n.RG32F||j===n.RGBA16F||j===n.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function E(b,g){let O;return b?g===null||g===Li||g===qr?O=n.DEPTH24_STENCIL8:g===kn?O=n.DEPTH32F_STENCIL8:g===Xr&&(O=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Li||g===qr?O=n.DEPTH_COMPONENT24:g===kn?O=n.DEPTH_COMPONENT32F:g===Xr&&(O=n.DEPTH_COMPONENT16),O}function C(b,g){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==gn&&b.minFilter!==bn?Math.log2(Math.max(g.width,g.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?g.mipmaps.length:1}function A(b){const g=b.target;g.removeEventListener("dispose",A),N(g),g.isVideoTexture&&u.delete(g)}function R(b){const g=b.target;g.removeEventListener("dispose",R),S(g)}function N(b){const g=i.get(b);if(g.__webglInit===void 0)return;const O=b.source,$=f.get(O);if($){const Q=$[g.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&M(b),Object.keys($).length===0&&f.delete(O)}i.remove(b)}function M(b){const g=i.get(b);n.deleteTexture(g.__webglTexture);const O=b.source,$=f.get(O);delete $[g.__cacheKey],a.memory.textures--}function S(b){const g=i.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),i.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(g.__webglFramebuffer[$]))for(let Q=0;Q<g.__webglFramebuffer[$].length;Q++)n.deleteFramebuffer(g.__webglFramebuffer[$][Q]);else n.deleteFramebuffer(g.__webglFramebuffer[$]);g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer[$])}else{if(Array.isArray(g.__webglFramebuffer))for(let $=0;$<g.__webglFramebuffer.length;$++)n.deleteFramebuffer(g.__webglFramebuffer[$]);else n.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&n.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let $=0;$<g.__webglColorRenderbuffer.length;$++)g.__webglColorRenderbuffer[$]&&n.deleteRenderbuffer(g.__webglColorRenderbuffer[$]);g.__webglDepthRenderbuffer&&n.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const O=b.textures;for(let $=0,Q=O.length;$<Q;$++){const j=i.get(O[$]);j.__webglTexture&&(n.deleteTexture(j.__webglTexture),a.memory.textures--),i.remove(O[$])}i.remove(b)}let P=0;function L(){P=0}function B(){const b=P;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),P+=1,b}function V(b){const g=[];return g.push(b.wrapS),g.push(b.wrapT),g.push(b.wrapR||0),g.push(b.magFilter),g.push(b.minFilter),g.push(b.anisotropy),g.push(b.internalFormat),g.push(b.format),g.push(b.type),g.push(b.generateMipmaps),g.push(b.premultiplyAlpha),g.push(b.flipY),g.push(b.unpackAlignment),g.push(b.colorSpace),g.join()}function z(b,g){const O=i.get(b);if(b.isVideoTexture&&Gt(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&O.__version!==b.version){const $=b.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(O,b,g);return}}else b.isExternalTexture&&(O.__webglTexture=b.sourceTexture?b.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,O.__webglTexture,n.TEXTURE0+g)}function G(b,g){const O=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&O.__version!==b.version){q(O,b,g);return}e.bindTexture(n.TEXTURE_2D_ARRAY,O.__webglTexture,n.TEXTURE0+g)}function Y(b,g){const O=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&O.__version!==b.version){q(O,b,g);return}e.bindTexture(n.TEXTURE_3D,O.__webglTexture,n.TEXTURE0+g)}function k(b,g){const O=i.get(b);if(b.version>0&&O.__version!==b.version){K(O,b,g);return}e.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+g)}const X={[mo]:n.REPEAT,[bi]:n.CLAMP_TO_EDGE,[_o]:n.MIRRORED_REPEAT},J={[gn]:n.NEAREST,[vp]:n.NEAREST_MIPMAP_NEAREST,[us]:n.NEAREST_MIPMAP_LINEAR,[bn]:n.LINEAR,[ma]:n.LINEAR_MIPMAP_NEAREST,[Ti]:n.LINEAR_MIPMAP_LINEAR},rt={[Ep]:n.NEVER,[Rp]:n.ALWAYS,[yp]:n.LESS,[qu]:n.LEQUAL,[bp]:n.EQUAL,[wp]:n.GEQUAL,[Tp]:n.GREATER,[Ap]:n.NOTEQUAL};function _t(b,g){if(g.type===kn&&t.has("OES_texture_float_linear")===!1&&(g.magFilter===bn||g.magFilter===ma||g.magFilter===us||g.magFilter===Ti||g.minFilter===bn||g.minFilter===ma||g.minFilter===us||g.minFilter===Ti)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(b,n.TEXTURE_WRAP_S,X[g.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,X[g.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,X[g.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,J[g.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,J[g.minFilter]),g.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,rt[g.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===gn||g.minFilter!==us&&g.minFilter!==Ti||g.type===kn&&t.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const O=t.get("EXT_texture_filter_anisotropic");n.texParameterf(b,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function It(b,g){let O=!1;b.__webglInit===void 0&&(b.__webglInit=!0,g.addEventListener("dispose",A));const $=g.source;let Q=f.get($);Q===void 0&&(Q={},f.set($,Q));const j=V(g);if(j!==b.__cacheKey){Q[j]===void 0&&(Q[j]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,O=!0),Q[j].usedTimes++;const At=Q[b.__cacheKey];At!==void 0&&(Q[b.__cacheKey].usedTimes--,At.usedTimes===0&&M(g)),b.__cacheKey=j,b.__webglTexture=Q[j].texture}return O}function Ht(b,g,O){return Math.floor(Math.floor(b/O)/g)}function Ot(b,g,O,$){const j=b.updateRanges;if(j.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,g.width,g.height,O,$,g.data);else{j.sort((nt,ht)=>nt.start-ht.start);let At=0;for(let nt=1;nt<j.length;nt++){const ht=j[At],Ut=j[nt],Tt=ht.start+ht.count,ct=Ht(Ut.start,g.width,4),kt=Ht(ht.start,g.width,4);Ut.start<=Tt+1&&ct===kt&&Ht(Ut.start+Ut.count-1,g.width,4)===ct?ht.count=Math.max(ht.count,Ut.start+Ut.count-ht.start):(++At,j[At]=Ut)}j.length=At+1;const st=n.getParameter(n.UNPACK_ROW_LENGTH),yt=n.getParameter(n.UNPACK_SKIP_PIXELS),bt=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,g.width);for(let nt=0,ht=j.length;nt<ht;nt++){const Ut=j[nt],Tt=Math.floor(Ut.start/4),ct=Math.ceil(Ut.count/4),kt=Tt%g.width,D=Math.floor(Tt/g.width),it=ct,at=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,kt),n.pixelStorei(n.UNPACK_SKIP_ROWS,D),e.texSubImage2D(n.TEXTURE_2D,0,kt,D,it,at,O,$,g.data)}b.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,st),n.pixelStorei(n.UNPACK_SKIP_PIXELS,yt),n.pixelStorei(n.UNPACK_SKIP_ROWS,bt)}}function q(b,g,O){let $=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&($=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&($=n.TEXTURE_3D);const Q=It(b,g),j=g.source;e.bindTexture($,b.__webglTexture,n.TEXTURE0+O);const At=i.get(j);if(j.version!==At.__version||Q===!0){e.activeTexture(n.TEXTURE0+O);const st=Qt.getPrimaries(Qt.workingColorSpace),yt=g.colorSpace===ei?null:Qt.getPrimaries(g.colorSpace),bt=g.colorSpace===ei||st===yt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt);let nt=v(g.image,!1,r.maxTextureSize);nt=we(g,nt);const ht=s.convert(g.format,g.colorSpace),Ut=s.convert(g.type);let Tt=y(g.internalFormat,ht,Ut,g.colorSpace,g.isVideoTexture);_t($,g);let ct;const kt=g.mipmaps,D=g.isVideoTexture!==!0,it=At.__version===void 0||Q===!0,at=j.dataReady,vt=C(g,nt);if(g.isDepthTexture)Tt=E(g.format===jr,g.type),it&&(D?e.texStorage2D(n.TEXTURE_2D,1,Tt,nt.width,nt.height):e.texImage2D(n.TEXTURE_2D,0,Tt,nt.width,nt.height,0,ht,Ut,null));else if(g.isDataTexture)if(kt.length>0){D&&it&&e.texStorage2D(n.TEXTURE_2D,vt,Tt,kt[0].width,kt[0].height);for(let tt=0,Z=kt.length;tt<Z;tt++)ct=kt[tt],D?at&&e.texSubImage2D(n.TEXTURE_2D,tt,0,0,ct.width,ct.height,ht,Ut,ct.data):e.texImage2D(n.TEXTURE_2D,tt,Tt,ct.width,ct.height,0,ht,Ut,ct.data);g.generateMipmaps=!1}else D?(it&&e.texStorage2D(n.TEXTURE_2D,vt,Tt,nt.width,nt.height),at&&Ot(g,nt,ht,Ut)):e.texImage2D(n.TEXTURE_2D,0,Tt,nt.width,nt.height,0,ht,Ut,nt.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){D&&it&&e.texStorage3D(n.TEXTURE_2D_ARRAY,vt,Tt,kt[0].width,kt[0].height,nt.depth);for(let tt=0,Z=kt.length;tt<Z;tt++)if(ct=kt[tt],g.format!==mn)if(ht!==null)if(D){if(at)if(g.layerUpdates.size>0){const Et=Ec(ct.width,ct.height,g.format,g.type);for(const Bt of g.layerUpdates){const he=ct.data.subarray(Bt*Et/ct.data.BYTES_PER_ELEMENT,(Bt+1)*Et/ct.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,tt,0,0,Bt,ct.width,ct.height,1,ht,he)}g.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,tt,0,0,0,ct.width,ct.height,nt.depth,ht,ct.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,tt,Tt,ct.width,ct.height,nt.depth,0,ct.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?at&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,tt,0,0,0,ct.width,ct.height,nt.depth,ht,Ut,ct.data):e.texImage3D(n.TEXTURE_2D_ARRAY,tt,Tt,ct.width,ct.height,nt.depth,0,ht,Ut,ct.data)}else{D&&it&&e.texStorage2D(n.TEXTURE_2D,vt,Tt,kt[0].width,kt[0].height);for(let tt=0,Z=kt.length;tt<Z;tt++)ct=kt[tt],g.format!==mn?ht!==null?D?at&&e.compressedTexSubImage2D(n.TEXTURE_2D,tt,0,0,ct.width,ct.height,ht,ct.data):e.compressedTexImage2D(n.TEXTURE_2D,tt,Tt,ct.width,ct.height,0,ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?at&&e.texSubImage2D(n.TEXTURE_2D,tt,0,0,ct.width,ct.height,ht,Ut,ct.data):e.texImage2D(n.TEXTURE_2D,tt,Tt,ct.width,ct.height,0,ht,Ut,ct.data)}else if(g.isDataArrayTexture)if(D){if(it&&e.texStorage3D(n.TEXTURE_2D_ARRAY,vt,Tt,nt.width,nt.height,nt.depth),at)if(g.layerUpdates.size>0){const tt=Ec(nt.width,nt.height,g.format,g.type);for(const Z of g.layerUpdates){const Et=nt.data.subarray(Z*tt/nt.data.BYTES_PER_ELEMENT,(Z+1)*tt/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Z,nt.width,nt.height,1,ht,Ut,Et)}g.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,ht,Ut,nt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Tt,nt.width,nt.height,nt.depth,0,ht,Ut,nt.data);else if(g.isData3DTexture)D?(it&&e.texStorage3D(n.TEXTURE_3D,vt,Tt,nt.width,nt.height,nt.depth),at&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,ht,Ut,nt.data)):e.texImage3D(n.TEXTURE_3D,0,Tt,nt.width,nt.height,nt.depth,0,ht,Ut,nt.data);else if(g.isFramebufferTexture){if(it)if(D)e.texStorage2D(n.TEXTURE_2D,vt,Tt,nt.width,nt.height);else{let tt=nt.width,Z=nt.height;for(let Et=0;Et<vt;Et++)e.texImage2D(n.TEXTURE_2D,Et,Tt,tt,Z,0,ht,Ut,null),tt>>=1,Z>>=1}}else if(kt.length>0){if(D&&it){const tt=Me(kt[0]);e.texStorage2D(n.TEXTURE_2D,vt,Tt,tt.width,tt.height)}for(let tt=0,Z=kt.length;tt<Z;tt++)ct=kt[tt],D?at&&e.texSubImage2D(n.TEXTURE_2D,tt,0,0,ht,Ut,ct):e.texImage2D(n.TEXTURE_2D,tt,Tt,ht,Ut,ct);g.generateMipmaps=!1}else if(D){if(it){const tt=Me(nt);e.texStorage2D(n.TEXTURE_2D,vt,Tt,tt.width,tt.height)}at&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ht,Ut,nt)}else e.texImage2D(n.TEXTURE_2D,0,Tt,ht,Ut,nt);m(g)&&h($),At.__version=j.version,g.onUpdate&&g.onUpdate(g)}b.__version=g.version}function K(b,g,O){if(g.image.length!==6)return;const $=It(b,g),Q=g.source;e.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+O);const j=i.get(Q);if(Q.version!==j.__version||$===!0){e.activeTexture(n.TEXTURE0+O);const At=Qt.getPrimaries(Qt.workingColorSpace),st=g.colorSpace===ei?null:Qt.getPrimaries(g.colorSpace),yt=g.colorSpace===ei||At===st?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);const bt=g.isCompressedTexture||g.image[0].isCompressedTexture,nt=g.image[0]&&g.image[0].isDataTexture,ht=[];for(let Z=0;Z<6;Z++)!bt&&!nt?ht[Z]=v(g.image[Z],!0,r.maxCubemapSize):ht[Z]=nt?g.image[Z].image:g.image[Z],ht[Z]=we(g,ht[Z]);const Ut=ht[0],Tt=s.convert(g.format,g.colorSpace),ct=s.convert(g.type),kt=y(g.internalFormat,Tt,ct,g.colorSpace),D=g.isVideoTexture!==!0,it=j.__version===void 0||$===!0,at=Q.dataReady;let vt=C(g,Ut);_t(n.TEXTURE_CUBE_MAP,g);let tt;if(bt){D&&it&&e.texStorage2D(n.TEXTURE_CUBE_MAP,vt,kt,Ut.width,Ut.height);for(let Z=0;Z<6;Z++){tt=ht[Z].mipmaps;for(let Et=0;Et<tt.length;Et++){const Bt=tt[Et];g.format!==mn?Tt!==null?D?at&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Et,0,0,Bt.width,Bt.height,Tt,Bt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Et,kt,Bt.width,Bt.height,0,Bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?at&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Et,0,0,Bt.width,Bt.height,Tt,ct,Bt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Et,kt,Bt.width,Bt.height,0,Tt,ct,Bt.data)}}}else{if(tt=g.mipmaps,D&&it){tt.length>0&&vt++;const Z=Me(ht[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,vt,kt,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(nt){D?at&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,ht[Z].width,ht[Z].height,Tt,ct,ht[Z].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,kt,ht[Z].width,ht[Z].height,0,Tt,ct,ht[Z].data);for(let Et=0;Et<tt.length;Et++){const he=tt[Et].image[Z].image;D?at&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Et+1,0,0,he.width,he.height,Tt,ct,he.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Et+1,kt,he.width,he.height,0,Tt,ct,he.data)}}else{D?at&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Tt,ct,ht[Z]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,kt,Tt,ct,ht[Z]);for(let Et=0;Et<tt.length;Et++){const Bt=tt[Et];D?at&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Et+1,0,0,Tt,ct,Bt.image[Z]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Et+1,kt,Tt,ct,Bt.image[Z])}}}m(g)&&h(n.TEXTURE_CUBE_MAP),j.__version=Q.version,g.onUpdate&&g.onUpdate(g)}b.__version=g.version}function ot(b,g,O,$,Q,j){const At=s.convert(O.format,O.colorSpace),st=s.convert(O.type),yt=y(O.internalFormat,At,st,O.colorSpace),bt=i.get(g),nt=i.get(O);if(nt.__renderTarget=g,!bt.__hasExternalTextures){const ht=Math.max(1,g.width>>j),Ut=Math.max(1,g.height>>j);Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?e.texImage3D(Q,j,yt,ht,Ut,g.depth,0,At,st,null):e.texImage2D(Q,j,yt,ht,Ut,0,At,st,null)}e.bindFramebuffer(n.FRAMEBUFFER,b),Mt(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,$,Q,nt.__webglTexture,0,re(g)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,$,Q,nt.__webglTexture,j),e.bindFramebuffer(n.FRAMEBUFFER,null)}function xt(b,g,O){if(n.bindRenderbuffer(n.RENDERBUFFER,b),g.depthBuffer){const $=g.depthTexture,Q=$&&$.isDepthTexture?$.type:null,j=E(g.stencilBuffer,Q),At=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,st=re(g);Mt(g)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,st,j,g.width,g.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,st,j,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,j,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,At,n.RENDERBUFFER,b)}else{const $=g.textures;for(let Q=0;Q<$.length;Q++){const j=$[Q],At=s.convert(j.format,j.colorSpace),st=s.convert(j.type),yt=y(j.internalFormat,At,st,j.colorSpace),bt=re(g);O&&Mt(g)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,bt,yt,g.width,g.height):Mt(g)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,bt,yt,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,yt,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function pt(b,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,b),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=i.get(g.depthTexture);$.__renderTarget=g,(!$.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),z(g.depthTexture,0);const Q=$.__webglTexture,j=re(g);if(g.depthTexture.format===Yr)Mt(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0);else if(g.depthTexture.format===jr)Mt(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Ft(b){const g=i.get(b),O=b.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==b.depthTexture){const $=b.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),$){const Q=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,$.removeEventListener("dispose",Q)};$.addEventListener("dispose",Q),g.__depthDisposeCallback=Q}g.__boundDepthTexture=$}if(b.depthTexture&&!g.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");const $=b.texture.mipmaps;$&&$.length>0?pt(g.__webglFramebuffer[0],b):pt(g.__webglFramebuffer,b)}else if(O){g.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[$]),g.__webglDepthbuffer[$]===void 0)g.__webglDepthbuffer[$]=n.createRenderbuffer(),xt(g.__webglDepthbuffer[$],b,!1);else{const Q=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,j=g.__webglDepthbuffer[$];n.bindRenderbuffer(n.RENDERBUFFER,j),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,j)}}else{const $=b.texture.mipmaps;if($&&$.length>0?e.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=n.createRenderbuffer(),xt(g.__webglDepthbuffer,b,!1);else{const Q=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,j=g.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,j),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,j)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function ie(b,g,O){const $=i.get(b);g!==void 0&&ot($.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),O!==void 0&&Ft(b)}function w(b){const g=b.texture,O=i.get(b),$=i.get(g);b.addEventListener("dispose",R);const Q=b.textures,j=b.isWebGLCubeRenderTarget===!0,At=Q.length>1;if(At||($.__webglTexture===void 0&&($.__webglTexture=n.createTexture()),$.__version=g.version,a.memory.textures++),j){O.__webglFramebuffer=[];for(let st=0;st<6;st++)if(g.mipmaps&&g.mipmaps.length>0){O.__webglFramebuffer[st]=[];for(let yt=0;yt<g.mipmaps.length;yt++)O.__webglFramebuffer[st][yt]=n.createFramebuffer()}else O.__webglFramebuffer[st]=n.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){O.__webglFramebuffer=[];for(let st=0;st<g.mipmaps.length;st++)O.__webglFramebuffer[st]=n.createFramebuffer()}else O.__webglFramebuffer=n.createFramebuffer();if(At)for(let st=0,yt=Q.length;st<yt;st++){const bt=i.get(Q[st]);bt.__webglTexture===void 0&&(bt.__webglTexture=n.createTexture(),a.memory.textures++)}if(b.samples>0&&Mt(b)===!1){O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let st=0;st<Q.length;st++){const yt=Q[st];O.__webglColorRenderbuffer[st]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,O.__webglColorRenderbuffer[st]);const bt=s.convert(yt.format,yt.colorSpace),nt=s.convert(yt.type),ht=y(yt.internalFormat,bt,nt,yt.colorSpace,b.isXRRenderTarget===!0),Ut=re(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ut,ht,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+st,n.RENDERBUFFER,O.__webglColorRenderbuffer[st])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),xt(O.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(j){e.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture),_t(n.TEXTURE_CUBE_MAP,g);for(let st=0;st<6;st++)if(g.mipmaps&&g.mipmaps.length>0)for(let yt=0;yt<g.mipmaps.length;yt++)ot(O.__webglFramebuffer[st][yt],b,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+st,yt);else ot(O.__webglFramebuffer[st],b,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+st,0);m(g)&&h(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(At){for(let st=0,yt=Q.length;st<yt;st++){const bt=Q[st],nt=i.get(bt);let ht=n.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ht=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ht,nt.__webglTexture),_t(ht,bt),ot(O.__webglFramebuffer,b,bt,n.COLOR_ATTACHMENT0+st,ht,0),m(bt)&&h(ht)}e.unbindTexture()}else{let st=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(st=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(st,$.__webglTexture),_t(st,g),g.mipmaps&&g.mipmaps.length>0)for(let yt=0;yt<g.mipmaps.length;yt++)ot(O.__webglFramebuffer[yt],b,g,n.COLOR_ATTACHMENT0,st,yt);else ot(O.__webglFramebuffer,b,g,n.COLOR_ATTACHMENT0,st,0);m(g)&&h(st),e.unbindTexture()}b.depthBuffer&&Ft(b)}function te(b){const g=b.textures;for(let O=0,$=g.length;O<$;O++){const Q=g[O];if(m(Q)){const j=T(b),At=i.get(Q).__webglTexture;e.bindTexture(j,At),h(j),e.unbindTexture()}}}const Ct=[],Pt=[];function gt(b){if(b.samples>0){if(Mt(b)===!1){const g=b.textures,O=b.width,$=b.height;let Q=n.COLOR_BUFFER_BIT;const j=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,At=i.get(b),st=g.length>1;if(st)for(let bt=0;bt<g.length;bt++)e.bindFramebuffer(n.FRAMEBUFFER,At.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+bt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,At.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+bt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,At.__webglMultisampledFramebuffer);const yt=b.texture.mipmaps;yt&&yt.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,At.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,At.__webglFramebuffer);for(let bt=0;bt<g.length;bt++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),st){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,At.__webglColorRenderbuffer[bt]);const nt=i.get(g[bt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,nt,0)}n.blitFramebuffer(0,0,O,$,0,0,O,$,Q,n.NEAREST),c===!0&&(Ct.length=0,Pt.length=0,Ct.push(n.COLOR_ATTACHMENT0+bt),b.depthBuffer&&b.resolveDepthBuffer===!1&&(Ct.push(j),Pt.push(j),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Pt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ct))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),st)for(let bt=0;bt<g.length;bt++){e.bindFramebuffer(n.FRAMEBUFFER,At.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+bt,n.RENDERBUFFER,At.__webglColorRenderbuffer[bt]);const nt=i.get(g[bt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,At.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+bt,n.TEXTURE_2D,nt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,At.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&c){const g=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[g])}}}function re(b){return Math.min(r.maxSamples,b.samples)}function Mt(b){const g=i.get(b);return b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function Gt(b){const g=a.render.frame;u.get(b)!==g&&(u.set(b,g),b.update())}function we(b,g){const O=b.colorSpace,$=b.format,Q=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||O!==Er&&O!==ei&&(Qt.getTransfer(O)===ae?($!==mn||Q!==Rn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),g}function Me(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(l.width=b.naturalWidth||b.width,l.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(l.width=b.displayWidth,l.height=b.displayHeight):(l.width=b.width,l.height=b.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=L,this.setTexture2D=z,this.setTexture2DArray=G,this.setTexture3D=Y,this.setTextureCube=k,this.rebindTextures=ie,this.setupRenderTarget=w,this.updateRenderTargetMipmap=te,this.updateMultisampleRenderTarget=gt,this.setupDepthRenderbuffer=Ft,this.setupFrameBufferTexture=ot,this.useMultisampledRTT=Mt}function X0(n,t){function e(i,r=ei){let s;const a=Qt.getTransfer(r);if(i===Rn)return n.UNSIGNED_BYTE;if(i===ul)return n.UNSIGNED_SHORT_4_4_4_4;if(i===hl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===zu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Hu)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Ou)return n.BYTE;if(i===Bu)return n.SHORT;if(i===Xr)return n.UNSIGNED_SHORT;if(i===cl)return n.INT;if(i===Li)return n.UNSIGNED_INT;if(i===kn)return n.FLOAT;if(i===ns)return n.HALF_FLOAT;if(i===ku)return n.ALPHA;if(i===Vu)return n.RGB;if(i===mn)return n.RGBA;if(i===Yr)return n.DEPTH_COMPONENT;if(i===jr)return n.DEPTH_STENCIL;if(i===Gu)return n.RED;if(i===fl)return n.RED_INTEGER;if(i===Wu)return n.RG;if(i===dl)return n.RG_INTEGER;if(i===pl)return n.RGBA_INTEGER;if(i===Os||i===Bs||i===zs||i===Hs)if(a===ae)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Os)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Bs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===zs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Hs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Os)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Bs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===zs)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Hs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===go||i===vo||i===xo||i===Mo)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===go)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===vo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===xo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Mo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===So||i===Eo||i===yo)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===So||i===Eo)return a===ae?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===yo)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===bo||i===To||i===Ao||i===wo||i===Ro||i===Co||i===Po||i===Do||i===Lo||i===Uo||i===Io||i===No||i===Fo||i===Oo)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===bo)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===To)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ao)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===wo)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ro)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Co)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Po)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Do)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Lo)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Uo)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Io)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===No)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Fo)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Oo)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Bo||i===zo||i===Ho)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===Bo)return a===ae?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===zo)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ho)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ko||i===Vo||i===Go||i===Wo)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===ko)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Vo)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Go)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Wo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===qr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const q0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Y0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class j0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new ih(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new oi({vertexShader:q0,fragmentShader:Y0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new sn(new oa(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class $0 extends Hi{constructor(t,e){super();const i=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,u=null,d=null,f=null,p=null,_=null;const v=typeof XRWebGLBinding<"u",m=new j0,h={},T=e.getContextAttributes();let y=null,E=null;const C=[],A=[],R=new zt;let N=null;const M=new Ke;M.viewport=new le;const S=new Ke;S.viewport=new le;const P=[M,S],L=new mm;let B=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let K=C[q];return K===void 0&&(K=new Oa,C[q]=K),K.getTargetRaySpace()},this.getControllerGrip=function(q){let K=C[q];return K===void 0&&(K=new Oa,C[q]=K),K.getGripSpace()},this.getHand=function(q){let K=C[q];return K===void 0&&(K=new Oa,C[q]=K),K.getHandSpace()};function z(q){const K=A.indexOf(q.inputSource);if(K===-1)return;const ot=C[K];ot!==void 0&&(ot.update(q.inputSource,q.frame,l||a),ot.dispatchEvent({type:q.type,data:q.inputSource}))}function G(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",G),r.removeEventListener("inputsourceschange",Y);for(let q=0;q<C.length;q++){const K=A[q];K!==null&&(A[q]=null,C[q].disconnect(K))}B=null,V=null,m.reset();for(const q in h)delete h[q];t.setRenderTarget(y),p=null,f=null,d=null,r=null,E=null,Ot.stop(),i.isPresenting=!1,t.setPixelRatio(N),t.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(r,e)),d},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(y=t.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",G),r.addEventListener("inputsourceschange",Y),T.xrCompatible!==!0&&await e.makeXRCompatible(),N=t.getPixelRatio(),t.getSize(R),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let ot=null,xt=null,pt=null;T.depth&&(pt=T.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ot=T.stencil?jr:Yr,xt=T.stencil?qr:Li);const Ft={colorFormat:e.RGBA8,depthFormat:pt,scaleFactor:s};d=this.getBinding(),f=d.createProjectionLayer(Ft),r.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),E=new Ii(f.textureWidth,f.textureHeight,{format:mn,type:Rn,depthTexture:new nh(f.textureWidth,f.textureHeight,xt,void 0,void 0,void 0,void 0,void 0,void 0,ot),stencilBuffer:T.stencil,colorSpace:t.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const ot={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,e,ot),r.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),E=new Ii(p.framebufferWidth,p.framebufferHeight,{format:mn,type:Rn,colorSpace:t.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),Ot.setContext(r),Ot.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Y(q){for(let K=0;K<q.removed.length;K++){const ot=q.removed[K],xt=A.indexOf(ot);xt>=0&&(A[xt]=null,C[xt].disconnect(ot))}for(let K=0;K<q.added.length;K++){const ot=q.added[K];let xt=A.indexOf(ot);if(xt===-1){for(let Ft=0;Ft<C.length;Ft++)if(Ft>=A.length){A.push(ot),xt=Ft;break}else if(A[Ft]===null){A[Ft]=ot,xt=Ft;break}if(xt===-1)break}const pt=C[xt];pt&&pt.connect(ot)}}const k=new I,X=new I;function J(q,K,ot){k.setFromMatrixPosition(K.matrixWorld),X.setFromMatrixPosition(ot.matrixWorld);const xt=k.distanceTo(X),pt=K.projectionMatrix.elements,Ft=ot.projectionMatrix.elements,ie=pt[14]/(pt[10]-1),w=pt[14]/(pt[10]+1),te=(pt[9]+1)/pt[5],Ct=(pt[9]-1)/pt[5],Pt=(pt[8]-1)/pt[0],gt=(Ft[8]+1)/Ft[0],re=ie*Pt,Mt=ie*gt,Gt=xt/(-Pt+gt),we=Gt*-Pt;if(K.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(we),q.translateZ(Gt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),pt[10]===-1)q.projectionMatrix.copy(K.projectionMatrix),q.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{const Me=ie+Gt,b=w+Gt,g=re-we,O=Mt+(xt-we),$=te*w/b*Me,Q=Ct*w/b*Me;q.projectionMatrix.makePerspective(g,O,$,Q,Me,b),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function rt(q,K){K===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(K.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;let K=q.near,ot=q.far;m.texture!==null&&(m.depthNear>0&&(K=m.depthNear),m.depthFar>0&&(ot=m.depthFar)),L.near=S.near=M.near=K,L.far=S.far=M.far=ot,(B!==L.near||V!==L.far)&&(r.updateRenderState({depthNear:L.near,depthFar:L.far}),B=L.near,V=L.far),L.layers.mask=q.layers.mask|6,M.layers.mask=L.layers.mask&3,S.layers.mask=L.layers.mask&5;const xt=q.parent,pt=L.cameras;rt(L,xt);for(let Ft=0;Ft<pt.length;Ft++)rt(pt[Ft],xt);pt.length===2?J(L,M,S):L.projectionMatrix.copy(M.projectionMatrix),_t(q,L,xt)};function _t(q,K,ot){ot===null?q.matrix.copy(K.matrixWorld):(q.matrix.copy(ot.matrixWorld),q.matrix.invert(),q.matrix.multiply(K.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(K.projectionMatrix),q.projectionMatrixInverse.copy(K.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Xo*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(q){c=q,f!==null&&(f.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(L)},this.getCameraTexture=function(q){return h[q]};let It=null;function Ht(q,K){if(u=K.getViewerPose(l||a),_=K,u!==null){const ot=u.views;p!==null&&(t.setRenderTargetFramebuffer(E,p.framebuffer),t.setRenderTarget(E));let xt=!1;ot.length!==L.cameras.length&&(L.cameras.length=0,xt=!0);for(let w=0;w<ot.length;w++){const te=ot[w];let Ct=null;if(p!==null)Ct=p.getViewport(te);else{const gt=d.getViewSubImage(f,te);Ct=gt.viewport,w===0&&(t.setRenderTargetTextures(E,gt.colorTexture,gt.depthStencilTexture),t.setRenderTarget(E))}let Pt=P[w];Pt===void 0&&(Pt=new Ke,Pt.layers.enable(w),Pt.viewport=new le,P[w]=Pt),Pt.matrix.fromArray(te.transform.matrix),Pt.matrix.decompose(Pt.position,Pt.quaternion,Pt.scale),Pt.projectionMatrix.fromArray(te.projectionMatrix),Pt.projectionMatrixInverse.copy(Pt.projectionMatrix).invert(),Pt.viewport.set(Ct.x,Ct.y,Ct.width,Ct.height),w===0&&(L.matrix.copy(Pt.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),xt===!0&&L.cameras.push(Pt)}const pt=r.enabledFeatures;if(pt&&pt.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){d=i.getBinding();const w=d.getDepthInformation(ot[0]);w&&w.isValid&&w.texture&&m.init(w,r.renderState)}if(pt&&pt.includes("camera-access")&&v){t.state.unbindTexture(),d=i.getBinding();for(let w=0;w<ot.length;w++){const te=ot[w].camera;if(te){let Ct=h[te];Ct||(Ct=new ih,h[te]=Ct);const Pt=d.getCameraImage(te);Ct.sourceTexture=Pt}}}}for(let ot=0;ot<C.length;ot++){const xt=A[ot],pt=C[ot];xt!==null&&pt!==void 0&&pt.update(xt,K,l||a)}It&&It(q,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),_=null}const Ot=new sh;Ot.setAnimationLoop(Ht),this.setAnimationLoop=function(q){It=q},this.dispose=function(){}}}const gi=new Cn,K0=new ve;function Z0(n,t){function e(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,Qu(n)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,T,y,E){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),d(m,h)):h.isMeshPhongMaterial?(s(m,h),u(m,h)):h.isMeshStandardMaterial?(s(m,h),f(m,h),h.isMeshPhysicalMaterial&&p(m,h,E)):h.isMeshMatcapMaterial?(s(m,h),_(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),v(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(a(m,h),h.isLineDashedMaterial&&o(m,h)):h.isPointsMaterial?c(m,h,T,y):h.isSpriteMaterial?l(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,e(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,e(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,e(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===Ve&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,e(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===Ve&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,e(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,e(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,e(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const T=t.get(h),y=T.envMap,E=T.envMapRotation;y&&(m.envMap.value=y,gi.copy(E),gi.x*=-1,gi.y*=-1,gi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(gi.y*=-1,gi.z*=-1),m.envMapRotation.value.setFromMatrix4(K0.makeRotationFromEuler(gi)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,e(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,e(h.aoMap,m.aoMapTransform))}function a(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,e(h.map,m.mapTransform))}function o(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function c(m,h,T,y){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*T,m.scale.value=y*.5,h.map&&(m.map.value=h.map,e(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,e(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function l(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,e(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,e(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function d(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function f(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,e(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,e(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,T){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,e(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,e(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,e(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,e(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,e(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Ve&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,e(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,e(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,e(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,e(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,e(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,e(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,e(h.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,h){h.matcap&&(m.matcap.value=h.matcap)}function v(m,h){const T=t.get(h).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function J0(n,t,e,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(T,y){const E=y.program;i.uniformBlockBinding(T,E)}function l(T,y){let E=r[T.id];E===void 0&&(_(T),E=u(T),r[T.id]=E,T.addEventListener("dispose",m));const C=y.program;i.updateUBOMapping(T,C);const A=t.render.frame;s[T.id]!==A&&(f(T),s[T.id]=A)}function u(T){const y=d();T.__bindingPointIndex=y;const E=n.createBuffer(),C=T.__size,A=T.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,C,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,E),E}function d(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(T){const y=r[T.id],E=T.uniforms,C=T.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let A=0,R=E.length;A<R;A++){const N=Array.isArray(E[A])?E[A]:[E[A]];for(let M=0,S=N.length;M<S;M++){const P=N[M];if(p(P,A,M,C)===!0){const L=P.__offset,B=Array.isArray(P.value)?P.value:[P.value];let V=0;for(let z=0;z<B.length;z++){const G=B[z],Y=v(G);typeof G=="number"||typeof G=="boolean"?(P.__data[0]=G,n.bufferSubData(n.UNIFORM_BUFFER,L+V,P.__data)):G.isMatrix3?(P.__data[0]=G.elements[0],P.__data[1]=G.elements[1],P.__data[2]=G.elements[2],P.__data[3]=0,P.__data[4]=G.elements[3],P.__data[5]=G.elements[4],P.__data[6]=G.elements[5],P.__data[7]=0,P.__data[8]=G.elements[6],P.__data[9]=G.elements[7],P.__data[10]=G.elements[8],P.__data[11]=0):(G.toArray(P.__data,V),V+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,L,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(T,y,E,C){const A=T.value,R=y+"_"+E;if(C[R]===void 0)return typeof A=="number"||typeof A=="boolean"?C[R]=A:C[R]=A.clone(),!0;{const N=C[R];if(typeof A=="number"||typeof A=="boolean"){if(N!==A)return C[R]=A,!0}else if(N.equals(A)===!1)return N.copy(A),!0}return!1}function _(T){const y=T.uniforms;let E=0;const C=16;for(let R=0,N=y.length;R<N;R++){const M=Array.isArray(y[R])?y[R]:[y[R]];for(let S=0,P=M.length;S<P;S++){const L=M[S],B=Array.isArray(L.value)?L.value:[L.value];for(let V=0,z=B.length;V<z;V++){const G=B[V],Y=v(G),k=E%C,X=k%Y.boundary,J=k+X;E+=X,J!==0&&C-J<Y.storage&&(E+=C-J),L.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=E,E+=Y.storage}}}const A=E%C;return A>0&&(E+=C-A),T.__size=E,T.__cache={},this}function v(T){const y={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(y.boundary=4,y.storage=4):T.isVector2?(y.boundary=8,y.storage=8):T.isVector3||T.isColor?(y.boundary=16,y.storage=12):T.isVector4?(y.boundary=16,y.storage=16):T.isMatrix3?(y.boundary=48,y.storage=48):T.isMatrix4?(y.boundary=64,y.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),y}function m(T){const y=T.target;y.removeEventListener("dispose",m);const E=a.indexOf(y.__bindingPointIndex);a.splice(E,1),n.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function h(){for(const T in r)n.deleteBuffer(r[T]);a=[],r={},s={}}return{bind:c,update:l,dispose:h}}class Q0{constructor(t={}){const{canvas:e=Dp(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;const _=new Uint32Array(4),v=new Int32Array(4);let m=null,h=null;const T=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=si,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const E=this;let C=!1;this._outputColorSpace=rn;let A=0,R=0,N=null,M=-1,S=null;const P=new le,L=new le;let B=null;const V=new Zt(0);let z=0,G=e.width,Y=e.height,k=1,X=null,J=null;const rt=new le(0,0,G,Y),_t=new le(0,0,G,Y);let It=!1;const Ht=new vl;let Ot=!1,q=!1;const K=new ve,ot=new I,xt=new le,pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ft=!1;function ie(){return N===null?k:1}let w=i;function te(x,U){return e.getContext(x,U)}try{const x={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ll}`),e.addEventListener("webglcontextlost",at,!1),e.addEventListener("webglcontextrestored",vt,!1),e.addEventListener("webglcontextcreationerror",tt,!1),w===null){const U="webgl2";if(w=te(U,x),w===null)throw te(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let Ct,Pt,gt,re,Mt,Gt,we,Me,b,g,O,$,Q,j,At,st,yt,bt,nt,ht,Ut,Tt,ct,kt;function D(){Ct=new cv(w),Ct.init(),Tt=new X0(w,Ct),Pt=new nv(w,Ct,t,Tt),gt=new G0(w,Ct),Pt.reversedDepthBuffer&&f&&gt.buffers.depth.setReversed(!0),re=new fv(w),Mt=new P0,Gt=new W0(w,Ct,gt,Mt,Pt,Tt,re),we=new rv(E),Me=new lv(E),b=new vm(w),ct=new tv(w,b),g=new uv(w,b,re,ct),O=new pv(w,g,b,re),nt=new dv(w,Pt,Gt),st=new iv(Mt),$=new C0(E,we,Me,Ct,Pt,ct,st),Q=new Z0(E,Mt),j=new L0,At=new B0(Ct),bt=new Qg(E,we,Me,gt,O,p,c),yt=new k0(E,O,Pt),kt=new J0(w,re,Pt,gt),ht=new ev(w,Ct,re),Ut=new hv(w,Ct,re),re.programs=$.programs,E.capabilities=Pt,E.extensions=Ct,E.properties=Mt,E.renderLists=j,E.shadowMap=yt,E.state=gt,E.info=re}D();const it=new $0(E,w);this.xr=it,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){const x=Ct.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=Ct.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(x){x!==void 0&&(k=x,this.setSize(G,Y,!1))},this.getSize=function(x){return x.set(G,Y)},this.setSize=function(x,U,H=!0){if(it.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=x,Y=U,e.width=Math.floor(x*k),e.height=Math.floor(U*k),H===!0&&(e.style.width=x+"px",e.style.height=U+"px"),this.setViewport(0,0,x,U)},this.getDrawingBufferSize=function(x){return x.set(G*k,Y*k).floor()},this.setDrawingBufferSize=function(x,U,H){G=x,Y=U,k=H,e.width=Math.floor(x*H),e.height=Math.floor(U*H),this.setViewport(0,0,x,U)},this.getCurrentViewport=function(x){return x.copy(P)},this.getViewport=function(x){return x.copy(rt)},this.setViewport=function(x,U,H,W){x.isVector4?rt.set(x.x,x.y,x.z,x.w):rt.set(x,U,H,W),gt.viewport(P.copy(rt).multiplyScalar(k).round())},this.getScissor=function(x){return x.copy(_t)},this.setScissor=function(x,U,H,W){x.isVector4?_t.set(x.x,x.y,x.z,x.w):_t.set(x,U,H,W),gt.scissor(L.copy(_t).multiplyScalar(k).round())},this.getScissorTest=function(){return It},this.setScissorTest=function(x){gt.setScissorTest(It=x)},this.setOpaqueSort=function(x){X=x},this.setTransparentSort=function(x){J=x},this.getClearColor=function(x){return x.copy(bt.getClearColor())},this.setClearColor=function(){bt.setClearColor(...arguments)},this.getClearAlpha=function(){return bt.getClearAlpha()},this.setClearAlpha=function(){bt.setClearAlpha(...arguments)},this.clear=function(x=!0,U=!0,H=!0){let W=0;if(x){let F=!1;if(N!==null){const et=N.texture.format;F=et===pl||et===dl||et===fl}if(F){const et=N.texture.type,ut=et===Rn||et===Li||et===Xr||et===qr||et===ul||et===hl,St=bt.getClearColor(),mt=bt.getClearAlpha(),Lt=St.r,Nt=St.g,Rt=St.b;ut?(_[0]=Lt,_[1]=Nt,_[2]=Rt,_[3]=mt,w.clearBufferuiv(w.COLOR,0,_)):(v[0]=Lt,v[1]=Nt,v[2]=Rt,v[3]=mt,w.clearBufferiv(w.COLOR,0,v))}else W|=w.COLOR_BUFFER_BIT}U&&(W|=w.DEPTH_BUFFER_BIT),H&&(W|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",at,!1),e.removeEventListener("webglcontextrestored",vt,!1),e.removeEventListener("webglcontextcreationerror",tt,!1),bt.dispose(),j.dispose(),At.dispose(),Mt.dispose(),we.dispose(),Me.dispose(),O.dispose(),ct.dispose(),kt.dispose(),$.dispose(),it.dispose(),it.removeEventListener("sessionstart",xn),it.removeEventListener("sessionend",Sl),ui.stop()};function at(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function vt(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const x=re.autoReset,U=yt.enabled,H=yt.autoUpdate,W=yt.needsUpdate,F=yt.type;D(),re.autoReset=x,yt.enabled=U,yt.autoUpdate=H,yt.needsUpdate=W,yt.type=F}function tt(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function Z(x){const U=x.target;U.removeEventListener("dispose",Z),Et(U)}function Et(x){Bt(x),Mt.remove(x)}function Bt(x){const U=Mt.get(x).programs;U!==void 0&&(U.forEach(function(H){$.releaseProgram(H)}),x.isShaderMaterial&&$.releaseShaderCache(x))}this.renderBufferDirect=function(x,U,H,W,F,et){U===null&&(U=pt);const ut=F.isMesh&&F.matrixWorld.determinant()<0,St=hh(x,U,H,W,F);gt.setMaterial(W,ut);let mt=H.index,Lt=1;if(W.wireframe===!0){if(mt=g.getWireframeAttribute(H),mt===void 0)return;Lt=2}const Nt=H.drawRange,Rt=H.attributes.position;let Yt=Nt.start*Lt,se=(Nt.start+Nt.count)*Lt;et!==null&&(Yt=Math.max(Yt,et.start*Lt),se=Math.min(se,(et.start+et.count)*Lt)),mt!==null?(Yt=Math.max(Yt,0),se=Math.min(se,mt.count)):Rt!=null&&(Yt=Math.max(Yt,0),se=Math.min(se,Rt.count));const xe=se-Yt;if(xe<0||xe===1/0)return;ct.setup(F,W,St,H,mt);let fe,ce=ht;if(mt!==null&&(fe=b.get(mt),ce=Ut,ce.setIndex(fe)),F.isMesh)W.wireframe===!0?(gt.setLineWidth(W.wireframeLinewidth*ie()),ce.setMode(w.LINES)):ce.setMode(w.TRIANGLES);else if(F.isLine){let Dt=W.linewidth;Dt===void 0&&(Dt=1),gt.setLineWidth(Dt*ie()),F.isLineSegments?ce.setMode(w.LINES):F.isLineLoop?ce.setMode(w.LINE_LOOP):ce.setMode(w.LINE_STRIP)}else F.isPoints?ce.setMode(w.POINTS):F.isSprite&&ce.setMode(w.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)$r("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ce.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Ct.get("WEBGL_multi_draw"))ce.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Dt=F._multiDrawStarts,_e=F._multiDrawCounts,Jt=F._multiDrawCount,Xe=mt?b.get(mt).bytesPerElement:1,ki=Mt.get(W).currentProgram.getUniforms();for(let qe=0;qe<Jt;qe++)ki.setValue(w,"_gl_DrawID",qe),ce.render(Dt[qe]/Xe,_e[qe])}else if(F.isInstancedMesh)ce.renderInstances(Yt,xe,F.count);else if(H.isInstancedBufferGeometry){const Dt=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,_e=Math.min(H.instanceCount,Dt);ce.renderInstances(Yt,xe,_e)}else ce.render(Yt,xe)};function he(x,U,H){x.transparent===!0&&x.side===Hn&&x.forceSinglePass===!1?(x.side=Ve,x.needsUpdate=!0,os(x,U,H),x.side=ai,x.needsUpdate=!0,os(x,U,H),x.side=Hn):os(x,U,H)}this.compile=function(x,U,H=null){H===null&&(H=x),h=At.get(H),h.init(U),y.push(h),H.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(h.pushLight(F),F.castShadow&&h.pushShadow(F))}),x!==H&&x.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(h.pushLight(F),F.castShadow&&h.pushShadow(F))}),h.setupLights();const W=new Set;return x.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const et=F.material;if(et)if(Array.isArray(et))for(let ut=0;ut<et.length;ut++){const St=et[ut];he(St,H,F),W.add(St)}else he(et,H,F),W.add(et)}),h=y.pop(),W},this.compileAsync=function(x,U,H=null){const W=this.compile(x,U,H);return new Promise(F=>{function et(){if(W.forEach(function(ut){Mt.get(ut).currentProgram.isReady()&&W.delete(ut)}),W.size===0){F(x);return}setTimeout(et,10)}Ct.get("KHR_parallel_shader_compile")!==null?et():setTimeout(et,10)})};let ee=null;function Ln(x){ee&&ee(x)}function xn(){ui.stop()}function Sl(){ui.start()}const ui=new sh;ui.setAnimationLoop(Ln),typeof self<"u"&&ui.setContext(self),this.setAnimationLoop=function(x){ee=x,it.setAnimationLoop(x),x===null?ui.stop():ui.start()},it.addEventListener("sessionstart",xn),it.addEventListener("sessionend",Sl),this.render=function(x,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),it.enabled===!0&&it.isPresenting===!0&&(it.cameraAutoUpdate===!0&&it.updateCamera(U),U=it.getCamera()),x.isScene===!0&&x.onBeforeRender(E,x,U,N),h=At.get(x,y.length),h.init(U),y.push(h),K.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Ht.setFromProjectionMatrix(K,Tn,U.reversedDepth),q=this.localClippingEnabled,Ot=st.init(this.clippingPlanes,q),m=j.get(x,T.length),m.init(),T.push(m),it.enabled===!0&&it.isPresenting===!0){const et=E.xr.getDepthSensingMesh();et!==null&&ca(et,U,-1/0,E.sortObjects)}ca(x,U,0,E.sortObjects),m.finish(),E.sortObjects===!0&&m.sort(X,J),Ft=it.enabled===!1||it.isPresenting===!1||it.hasDepthSensing()===!1,Ft&&bt.addToRenderList(m,x),this.info.render.frame++,Ot===!0&&st.beginShadows();const H=h.state.shadowsArray;yt.render(H,x,U),Ot===!0&&st.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=m.opaque,F=m.transmissive;if(h.setupLights(),U.isArrayCamera){const et=U.cameras;if(F.length>0)for(let ut=0,St=et.length;ut<St;ut++){const mt=et[ut];yl(W,F,x,mt)}Ft&&bt.render(x);for(let ut=0,St=et.length;ut<St;ut++){const mt=et[ut];El(m,x,mt,mt.viewport)}}else F.length>0&&yl(W,F,x,U),Ft&&bt.render(x),El(m,x,U);N!==null&&R===0&&(Gt.updateMultisampleRenderTarget(N),Gt.updateRenderTargetMipmap(N)),x.isScene===!0&&x.onAfterRender(E,x,U),ct.resetDefaultState(),M=-1,S=null,y.pop(),y.length>0?(h=y[y.length-1],Ot===!0&&st.setGlobalState(E.clippingPlanes,h.state.camera)):h=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function ca(x,U,H,W){if(x.visible===!1)return;if(x.layers.test(U.layers)){if(x.isGroup)H=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(U);else if(x.isLight)h.pushLight(x),x.castShadow&&h.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||Ht.intersectsSprite(x)){W&&xt.setFromMatrixPosition(x.matrixWorld).applyMatrix4(K);const ut=O.update(x),St=x.material;St.visible&&m.push(x,ut,St,H,xt.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||Ht.intersectsObject(x))){const ut=O.update(x),St=x.material;if(W&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),xt.copy(x.boundingSphere.center)):(ut.boundingSphere===null&&ut.computeBoundingSphere(),xt.copy(ut.boundingSphere.center)),xt.applyMatrix4(x.matrixWorld).applyMatrix4(K)),Array.isArray(St)){const mt=ut.groups;for(let Lt=0,Nt=mt.length;Lt<Nt;Lt++){const Rt=mt[Lt],Yt=St[Rt.materialIndex];Yt&&Yt.visible&&m.push(x,ut,Yt,H,xt.z,Rt)}}else St.visible&&m.push(x,ut,St,H,xt.z,null)}}const et=x.children;for(let ut=0,St=et.length;ut<St;ut++)ca(et[ut],U,H,W)}function El(x,U,H,W){const F=x.opaque,et=x.transmissive,ut=x.transparent;h.setupLightsView(H),Ot===!0&&st.setGlobalState(E.clippingPlanes,H),W&&gt.viewport(P.copy(W)),F.length>0&&as(F,U,H),et.length>0&&as(et,U,H),ut.length>0&&as(ut,U,H),gt.buffers.depth.setTest(!0),gt.buffers.depth.setMask(!0),gt.buffers.color.setMask(!0),gt.setPolygonOffset(!1)}function yl(x,U,H,W){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[W.id]===void 0&&(h.state.transmissionRenderTarget[W.id]=new Ii(1,1,{generateMipmaps:!0,type:Ct.has("EXT_color_buffer_half_float")||Ct.has("EXT_color_buffer_float")?ns:Rn,minFilter:Ti,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qt.workingColorSpace}));const et=h.state.transmissionRenderTarget[W.id],ut=W.viewport||P;et.setSize(ut.z*E.transmissionResolutionScale,ut.w*E.transmissionResolutionScale);const St=E.getRenderTarget(),mt=E.getActiveCubeFace(),Lt=E.getActiveMipmapLevel();E.setRenderTarget(et),E.getClearColor(V),z=E.getClearAlpha(),z<1&&E.setClearColor(16777215,.5),E.clear(),Ft&&bt.render(H);const Nt=E.toneMapping;E.toneMapping=si;const Rt=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),h.setupLightsView(W),Ot===!0&&st.setGlobalState(E.clippingPlanes,W),as(x,H,W),Gt.updateMultisampleRenderTarget(et),Gt.updateRenderTargetMipmap(et),Ct.has("WEBGL_multisampled_render_to_texture")===!1){let Yt=!1;for(let se=0,xe=U.length;se<xe;se++){const fe=U[se],ce=fe.object,Dt=fe.geometry,_e=fe.material,Jt=fe.group;if(_e.side===Hn&&ce.layers.test(W.layers)){const Xe=_e.side;_e.side=Ve,_e.needsUpdate=!0,bl(ce,H,W,Dt,_e,Jt),_e.side=Xe,_e.needsUpdate=!0,Yt=!0}}Yt===!0&&(Gt.updateMultisampleRenderTarget(et),Gt.updateRenderTargetMipmap(et))}E.setRenderTarget(St,mt,Lt),E.setClearColor(V,z),Rt!==void 0&&(W.viewport=Rt),E.toneMapping=Nt}function as(x,U,H){const W=U.isScene===!0?U.overrideMaterial:null;for(let F=0,et=x.length;F<et;F++){const ut=x[F],St=ut.object,mt=ut.geometry,Lt=ut.group;let Nt=ut.material;Nt.allowOverride===!0&&W!==null&&(Nt=W),St.layers.test(H.layers)&&bl(St,U,H,mt,Nt,Lt)}}function bl(x,U,H,W,F,et){x.onBeforeRender(E,U,H,W,F,et),x.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),F.onBeforeRender(E,U,H,W,x,et),F.transparent===!0&&F.side===Hn&&F.forceSinglePass===!1?(F.side=Ve,F.needsUpdate=!0,E.renderBufferDirect(H,U,W,F,x,et),F.side=ai,F.needsUpdate=!0,E.renderBufferDirect(H,U,W,F,x,et),F.side=Hn):E.renderBufferDirect(H,U,W,F,x,et),x.onAfterRender(E,U,H,W,F,et)}function os(x,U,H){U.isScene!==!0&&(U=pt);const W=Mt.get(x),F=h.state.lights,et=h.state.shadowsArray,ut=F.state.version,St=$.getParameters(x,F.state,et,U,H),mt=$.getProgramCacheKey(St);let Lt=W.programs;W.environment=x.isMeshStandardMaterial?U.environment:null,W.fog=U.fog,W.envMap=(x.isMeshStandardMaterial?Me:we).get(x.envMap||W.environment),W.envMapRotation=W.environment!==null&&x.envMap===null?U.environmentRotation:x.envMapRotation,Lt===void 0&&(x.addEventListener("dispose",Z),Lt=new Map,W.programs=Lt);let Nt=Lt.get(mt);if(Nt!==void 0){if(W.currentProgram===Nt&&W.lightsStateVersion===ut)return Al(x,St),Nt}else St.uniforms=$.getUniforms(x),x.onBeforeCompile(St,E),Nt=$.acquireProgram(St,mt),Lt.set(mt,Nt),W.uniforms=St.uniforms;const Rt=W.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Rt.clippingPlanes=st.uniform),Al(x,St),W.needsLights=dh(x),W.lightsStateVersion=ut,W.needsLights&&(Rt.ambientLightColor.value=F.state.ambient,Rt.lightProbe.value=F.state.probe,Rt.directionalLights.value=F.state.directional,Rt.directionalLightShadows.value=F.state.directionalShadow,Rt.spotLights.value=F.state.spot,Rt.spotLightShadows.value=F.state.spotShadow,Rt.rectAreaLights.value=F.state.rectArea,Rt.ltc_1.value=F.state.rectAreaLTC1,Rt.ltc_2.value=F.state.rectAreaLTC2,Rt.pointLights.value=F.state.point,Rt.pointLightShadows.value=F.state.pointShadow,Rt.hemisphereLights.value=F.state.hemi,Rt.directionalShadowMap.value=F.state.directionalShadowMap,Rt.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Rt.spotShadowMap.value=F.state.spotShadowMap,Rt.spotLightMatrix.value=F.state.spotLightMatrix,Rt.spotLightMap.value=F.state.spotLightMap,Rt.pointShadowMap.value=F.state.pointShadowMap,Rt.pointShadowMatrix.value=F.state.pointShadowMatrix),W.currentProgram=Nt,W.uniformsList=null,Nt}function Tl(x){if(x.uniformsList===null){const U=x.currentProgram.getUniforms();x.uniformsList=Vs.seqWithValue(U.seq,x.uniforms)}return x.uniformsList}function Al(x,U){const H=Mt.get(x);H.outputColorSpace=U.outputColorSpace,H.batching=U.batching,H.batchingColor=U.batchingColor,H.instancing=U.instancing,H.instancingColor=U.instancingColor,H.instancingMorph=U.instancingMorph,H.skinning=U.skinning,H.morphTargets=U.morphTargets,H.morphNormals=U.morphNormals,H.morphColors=U.morphColors,H.morphTargetsCount=U.morphTargetsCount,H.numClippingPlanes=U.numClippingPlanes,H.numIntersection=U.numClipIntersection,H.vertexAlphas=U.vertexAlphas,H.vertexTangents=U.vertexTangents,H.toneMapping=U.toneMapping}function hh(x,U,H,W,F){U.isScene!==!0&&(U=pt),Gt.resetTextureUnits();const et=U.fog,ut=W.isMeshStandardMaterial?U.environment:null,St=N===null?E.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Er,mt=(W.isMeshStandardMaterial?Me:we).get(W.envMap||ut),Lt=W.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Nt=!!H.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Rt=!!H.morphAttributes.position,Yt=!!H.morphAttributes.normal,se=!!H.morphAttributes.color;let xe=si;W.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(xe=E.toneMapping);const fe=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ce=fe!==void 0?fe.length:0,Dt=Mt.get(W),_e=h.state.lights;if(Ot===!0&&(q===!0||x!==S)){const Ie=x===S&&W.id===M;st.setState(W,x,Ie)}let Jt=!1;W.version===Dt.__version?(Dt.needsLights&&Dt.lightsStateVersion!==_e.state.version||Dt.outputColorSpace!==St||F.isBatchedMesh&&Dt.batching===!1||!F.isBatchedMesh&&Dt.batching===!0||F.isBatchedMesh&&Dt.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Dt.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Dt.instancing===!1||!F.isInstancedMesh&&Dt.instancing===!0||F.isSkinnedMesh&&Dt.skinning===!1||!F.isSkinnedMesh&&Dt.skinning===!0||F.isInstancedMesh&&Dt.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Dt.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Dt.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Dt.instancingMorph===!1&&F.morphTexture!==null||Dt.envMap!==mt||W.fog===!0&&Dt.fog!==et||Dt.numClippingPlanes!==void 0&&(Dt.numClippingPlanes!==st.numPlanes||Dt.numIntersection!==st.numIntersection)||Dt.vertexAlphas!==Lt||Dt.vertexTangents!==Nt||Dt.morphTargets!==Rt||Dt.morphNormals!==Yt||Dt.morphColors!==se||Dt.toneMapping!==xe||Dt.morphTargetsCount!==ce)&&(Jt=!0):(Jt=!0,Dt.__version=W.version);let Xe=Dt.currentProgram;Jt===!0&&(Xe=os(W,U,F));let ki=!1,qe=!1,Rr=!1;const ge=Xe.getUniforms(),Qe=Dt.uniforms;if(gt.useProgram(Xe.program)&&(ki=!0,qe=!0,Rr=!0),W.id!==M&&(M=W.id,qe=!0),ki||S!==x){gt.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),ge.setValue(w,"projectionMatrix",x.projectionMatrix),ge.setValue(w,"viewMatrix",x.matrixWorldInverse);const Be=ge.map.cameraPosition;Be!==void 0&&Be.setValue(w,ot.setFromMatrixPosition(x.matrixWorld)),Pt.logarithmicDepthBuffer&&ge.setValue(w,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&ge.setValue(w,"isOrthographic",x.isOrthographicCamera===!0),S!==x&&(S=x,qe=!0,Rr=!0)}if(F.isSkinnedMesh){ge.setOptional(w,F,"bindMatrix"),ge.setOptional(w,F,"bindMatrixInverse");const Ie=F.skeleton;Ie&&(Ie.boneTexture===null&&Ie.computeBoneTexture(),ge.setValue(w,"boneTexture",Ie.boneTexture,Gt))}F.isBatchedMesh&&(ge.setOptional(w,F,"batchingTexture"),ge.setValue(w,"batchingTexture",F._matricesTexture,Gt),ge.setOptional(w,F,"batchingIdTexture"),ge.setValue(w,"batchingIdTexture",F._indirectTexture,Gt),ge.setOptional(w,F,"batchingColorTexture"),F._colorsTexture!==null&&ge.setValue(w,"batchingColorTexture",F._colorsTexture,Gt));const tn=H.morphAttributes;if((tn.position!==void 0||tn.normal!==void 0||tn.color!==void 0)&&nt.update(F,H,Xe),(qe||Dt.receiveShadow!==F.receiveShadow)&&(Dt.receiveShadow=F.receiveShadow,ge.setValue(w,"receiveShadow",F.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Qe.envMap.value=mt,Qe.flipEnvMap.value=mt.isCubeTexture&&mt.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&U.environment!==null&&(Qe.envMapIntensity.value=U.environmentIntensity),qe&&(ge.setValue(w,"toneMappingExposure",E.toneMappingExposure),Dt.needsLights&&fh(Qe,Rr),et&&W.fog===!0&&Q.refreshFogUniforms(Qe,et),Q.refreshMaterialUniforms(Qe,W,k,Y,h.state.transmissionRenderTarget[x.id]),Vs.upload(w,Tl(Dt),Qe,Gt)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Vs.upload(w,Tl(Dt),Qe,Gt),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&ge.setValue(w,"center",F.center),ge.setValue(w,"modelViewMatrix",F.modelViewMatrix),ge.setValue(w,"normalMatrix",F.normalMatrix),ge.setValue(w,"modelMatrix",F.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Ie=W.uniformsGroups;for(let Be=0,ua=Ie.length;Be<ua;Be++){const hi=Ie[Be];kt.update(hi,Xe),kt.bind(hi,Xe)}}return Xe}function fh(x,U){x.ambientLightColor.needsUpdate=U,x.lightProbe.needsUpdate=U,x.directionalLights.needsUpdate=U,x.directionalLightShadows.needsUpdate=U,x.pointLights.needsUpdate=U,x.pointLightShadows.needsUpdate=U,x.spotLights.needsUpdate=U,x.spotLightShadows.needsUpdate=U,x.rectAreaLights.needsUpdate=U,x.hemisphereLights.needsUpdate=U}function dh(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(x,U,H){const W=Mt.get(x);W.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),Mt.get(x.texture).__webglTexture=U,Mt.get(x.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:H,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,U){const H=Mt.get(x);H.__webglFramebuffer=U,H.__useDefaultFramebuffer=U===void 0};const ph=w.createFramebuffer();this.setRenderTarget=function(x,U=0,H=0){N=x,A=U,R=H;let W=!0,F=null,et=!1,ut=!1;if(x){const mt=Mt.get(x);if(mt.__useDefaultFramebuffer!==void 0)gt.bindFramebuffer(w.FRAMEBUFFER,null),W=!1;else if(mt.__webglFramebuffer===void 0)Gt.setupRenderTarget(x);else if(mt.__hasExternalTextures)Gt.rebindTextures(x,Mt.get(x.texture).__webglTexture,Mt.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const Rt=x.depthTexture;if(mt.__boundDepthTexture!==Rt){if(Rt!==null&&Mt.has(Rt)&&(x.width!==Rt.image.width||x.height!==Rt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Gt.setupDepthRenderbuffer(x)}}const Lt=x.texture;(Lt.isData3DTexture||Lt.isDataArrayTexture||Lt.isCompressedArrayTexture)&&(ut=!0);const Nt=Mt.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Nt[U])?F=Nt[U][H]:F=Nt[U],et=!0):x.samples>0&&Gt.useMultisampledRTT(x)===!1?F=Mt.get(x).__webglMultisampledFramebuffer:Array.isArray(Nt)?F=Nt[H]:F=Nt,P.copy(x.viewport),L.copy(x.scissor),B=x.scissorTest}else P.copy(rt).multiplyScalar(k).floor(),L.copy(_t).multiplyScalar(k).floor(),B=It;if(H!==0&&(F=ph),gt.bindFramebuffer(w.FRAMEBUFFER,F)&&W&&gt.drawBuffers(x,F),gt.viewport(P),gt.scissor(L),gt.setScissorTest(B),et){const mt=Mt.get(x.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+U,mt.__webglTexture,H)}else if(ut){const mt=U;for(let Lt=0;Lt<x.textures.length;Lt++){const Nt=Mt.get(x.textures[Lt]);w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0+Lt,Nt.__webglTexture,H,mt)}}else if(x!==null&&H!==0){const mt=Mt.get(x.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,mt.__webglTexture,H)}M=-1},this.readRenderTargetPixels=function(x,U,H,W,F,et,ut,St=0){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let mt=Mt.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&ut!==void 0&&(mt=mt[ut]),mt){gt.bindFramebuffer(w.FRAMEBUFFER,mt);try{const Lt=x.textures[St],Nt=Lt.format,Rt=Lt.type;if(!Pt.textureFormatReadable(Nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Pt.textureTypeReadable(Rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=x.width-W&&H>=0&&H<=x.height-F&&(x.textures.length>1&&w.readBuffer(w.COLOR_ATTACHMENT0+St),w.readPixels(U,H,W,F,Tt.convert(Nt),Tt.convert(Rt),et))}finally{const Lt=N!==null?Mt.get(N).__webglFramebuffer:null;gt.bindFramebuffer(w.FRAMEBUFFER,Lt)}}},this.readRenderTargetPixelsAsync=async function(x,U,H,W,F,et,ut,St=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let mt=Mt.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&ut!==void 0&&(mt=mt[ut]),mt)if(U>=0&&U<=x.width-W&&H>=0&&H<=x.height-F){gt.bindFramebuffer(w.FRAMEBUFFER,mt);const Lt=x.textures[St],Nt=Lt.format,Rt=Lt.type;if(!Pt.textureFormatReadable(Nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Pt.textureTypeReadable(Rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Yt=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,Yt),w.bufferData(w.PIXEL_PACK_BUFFER,et.byteLength,w.STREAM_READ),x.textures.length>1&&w.readBuffer(w.COLOR_ATTACHMENT0+St),w.readPixels(U,H,W,F,Tt.convert(Nt),Tt.convert(Rt),0);const se=N!==null?Mt.get(N).__webglFramebuffer:null;gt.bindFramebuffer(w.FRAMEBUFFER,se);const xe=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);return w.flush(),await Lp(w,xe,4),w.bindBuffer(w.PIXEL_PACK_BUFFER,Yt),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,et),w.deleteBuffer(Yt),w.deleteSync(xe),et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,U=null,H=0){const W=Math.pow(2,-H),F=Math.floor(x.image.width*W),et=Math.floor(x.image.height*W),ut=U!==null?U.x:0,St=U!==null?U.y:0;Gt.setTexture2D(x,0),w.copyTexSubImage2D(w.TEXTURE_2D,H,0,0,ut,St,F,et),gt.unbindTexture()};const mh=w.createFramebuffer(),_h=w.createFramebuffer();this.copyTextureToTexture=function(x,U,H=null,W=null,F=0,et=null){et===null&&(F!==0?($r("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),et=F,F=0):et=0);let ut,St,mt,Lt,Nt,Rt,Yt,se,xe;const fe=x.isCompressedTexture?x.mipmaps[et]:x.image;if(H!==null)ut=H.max.x-H.min.x,St=H.max.y-H.min.y,mt=H.isBox3?H.max.z-H.min.z:1,Lt=H.min.x,Nt=H.min.y,Rt=H.isBox3?H.min.z:0;else{const tn=Math.pow(2,-F);ut=Math.floor(fe.width*tn),St=Math.floor(fe.height*tn),x.isDataArrayTexture?mt=fe.depth:x.isData3DTexture?mt=Math.floor(fe.depth*tn):mt=1,Lt=0,Nt=0,Rt=0}W!==null?(Yt=W.x,se=W.y,xe=W.z):(Yt=0,se=0,xe=0);const ce=Tt.convert(U.format),Dt=Tt.convert(U.type);let _e;U.isData3DTexture?(Gt.setTexture3D(U,0),_e=w.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Gt.setTexture2DArray(U,0),_e=w.TEXTURE_2D_ARRAY):(Gt.setTexture2D(U,0),_e=w.TEXTURE_2D),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,U.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,U.unpackAlignment);const Jt=w.getParameter(w.UNPACK_ROW_LENGTH),Xe=w.getParameter(w.UNPACK_IMAGE_HEIGHT),ki=w.getParameter(w.UNPACK_SKIP_PIXELS),qe=w.getParameter(w.UNPACK_SKIP_ROWS),Rr=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,fe.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,fe.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Lt),w.pixelStorei(w.UNPACK_SKIP_ROWS,Nt),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Rt);const ge=x.isDataArrayTexture||x.isData3DTexture,Qe=U.isDataArrayTexture||U.isData3DTexture;if(x.isDepthTexture){const tn=Mt.get(x),Ie=Mt.get(U),Be=Mt.get(tn.__renderTarget),ua=Mt.get(Ie.__renderTarget);gt.bindFramebuffer(w.READ_FRAMEBUFFER,Be.__webglFramebuffer),gt.bindFramebuffer(w.DRAW_FRAMEBUFFER,ua.__webglFramebuffer);for(let hi=0;hi<mt;hi++)ge&&(w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,Mt.get(x).__webglTexture,F,Rt+hi),w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,Mt.get(U).__webglTexture,et,xe+hi)),w.blitFramebuffer(Lt,Nt,ut,St,Yt,se,ut,St,w.DEPTH_BUFFER_BIT,w.NEAREST);gt.bindFramebuffer(w.READ_FRAMEBUFFER,null),gt.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else if(F!==0||x.isRenderTargetTexture||Mt.has(x)){const tn=Mt.get(x),Ie=Mt.get(U);gt.bindFramebuffer(w.READ_FRAMEBUFFER,mh),gt.bindFramebuffer(w.DRAW_FRAMEBUFFER,_h);for(let Be=0;Be<mt;Be++)ge?w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,tn.__webglTexture,F,Rt+Be):w.framebufferTexture2D(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,tn.__webglTexture,F),Qe?w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,Ie.__webglTexture,et,xe+Be):w.framebufferTexture2D(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,Ie.__webglTexture,et),F!==0?w.blitFramebuffer(Lt,Nt,ut,St,Yt,se,ut,St,w.COLOR_BUFFER_BIT,w.NEAREST):Qe?w.copyTexSubImage3D(_e,et,Yt,se,xe+Be,Lt,Nt,ut,St):w.copyTexSubImage2D(_e,et,Yt,se,Lt,Nt,ut,St);gt.bindFramebuffer(w.READ_FRAMEBUFFER,null),gt.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else Qe?x.isDataTexture||x.isData3DTexture?w.texSubImage3D(_e,et,Yt,se,xe,ut,St,mt,ce,Dt,fe.data):U.isCompressedArrayTexture?w.compressedTexSubImage3D(_e,et,Yt,se,xe,ut,St,mt,ce,fe.data):w.texSubImage3D(_e,et,Yt,se,xe,ut,St,mt,ce,Dt,fe):x.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,et,Yt,se,ut,St,ce,Dt,fe.data):x.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,et,Yt,se,fe.width,fe.height,ce,fe.data):w.texSubImage2D(w.TEXTURE_2D,et,Yt,se,ut,St,ce,Dt,fe);w.pixelStorei(w.UNPACK_ROW_LENGTH,Jt),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Xe),w.pixelStorei(w.UNPACK_SKIP_PIXELS,ki),w.pixelStorei(w.UNPACK_SKIP_ROWS,qe),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Rr),et===0&&U.generateMipmaps&&w.generateMipmap(_e),gt.unbindTexture()},this.initRenderTarget=function(x){Mt.get(x).__webglFramebuffer===void 0&&Gt.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?Gt.setTextureCube(x,0):x.isData3DTexture?Gt.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?Gt.setTexture2DArray(x,0):Gt.setTexture2D(x,0),gt.unbindTexture()},this.resetState=function(){A=0,R=0,N=null,gt.reset(),ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Tn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Qt._getUnpackColorSpace()}}const Yc={type:"change"},Ml={type:"start"},uh={type:"end"},Ns=new _l,jc=new ti,tx=Math.cos(70*Pp.DEG2RAD),be=new I,He=2*Math.PI,oe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ja=1e-6;class ex extends _m{constructor(t,e=null){super(t,e),this.state=oe.NONE,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:dr.ROTATE,MIDDLE:dr.DOLLY,RIGHT:dr.PAN},this.touches={ONE:sr.ROTATE,TWO:sr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new I,this._lastQuaternion=new Ui,this._lastTargetPosition=new I,this._quat=new Ui().setFromUnitVectors(t.up,new I(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Sc,this._sphericalDelta=new Sc,this._scale=1,this._panOffset=new I,this._rotateStart=new zt,this._rotateEnd=new zt,this._rotateDelta=new zt,this._panStart=new zt,this._panEnd=new zt,this._panDelta=new zt,this._dollyStart=new zt,this._dollyEnd=new zt,this._dollyDelta=new zt,this._dollyDirection=new I,this._mouse=new zt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=ix.bind(this),this._onPointerDown=nx.bind(this),this._onPointerUp=rx.bind(this),this._onContextMenu=hx.bind(this),this._onMouseWheel=ox.bind(this),this._onKeyDown=lx.bind(this),this._onTouchStart=cx.bind(this),this._onTouchMove=ux.bind(this),this._onMouseDown=sx.bind(this),this._onMouseMove=ax.bind(this),this._interceptControlDown=fx.bind(this),this._interceptControlUp=dx.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Yc),this.update(),this.state=oe.NONE}update(t=null){const e=this.object.position;be.copy(e).sub(this.target),be.applyQuaternion(this._quat),this._spherical.setFromVector3(be),this.autoRotate&&this.state===oe.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=He:i>Math.PI&&(i-=He),r<-Math.PI?r+=He:r>Math.PI&&(r-=He),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(be.setFromSpherical(this._spherical),be.applyQuaternion(this._quatInverse),e.copy(this.target).add(be),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=be.length();a=this._clampDistance(o*this._scale);const c=o-a;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),s=!!c}else if(this.object.isOrthographicCamera){const o=new I(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=c!==this.object.zoom;const l=new I(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(o),this.object.updateMatrixWorld(),a=be.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Ns.origin.copy(this.object.position),Ns.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ns.direction))<tx?this.object.lookAt(this.target):(jc.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ns.intersectPlane(jc,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>ja||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ja||this._lastTargetPosition.distanceToSquared(this.target)>ja?(this.dispatchEvent(Yc),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?He/60*this.autoRotateSpeed*t:He/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){be.setFromMatrixColumn(e,0),be.multiplyScalar(-t),this._panOffset.add(be)}_panUp(t,e){this.screenSpacePanning===!0?be.setFromMatrixColumn(e,1):(be.setFromMatrixColumn(e,0),be.crossVectors(this.object.up,be)),be.multiplyScalar(t),this._panOffset.add(be)}_pan(t,e){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;be.copy(r).sub(this.target);let s=be.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*s/i.clientHeight,this.object.matrix),this._panUp(2*e*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=t-i.left,s=e-i.top,a=i.width,o=i.height;this._mouse.x=r/a*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(He*this._rotateDelta.x/e.clientHeight),this._rotateUp(He*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(He*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-He*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(He*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-He*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panStart.set(i,r)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),r=.5*(t.pageX+i.x),s=.5*(t.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(He*this._rotateDelta.x/e.clientHeight),this._rotateUp(He*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new zt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function nx(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function ix(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function rx(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(uh),this.state=oe.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function sx(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case dr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=oe.DOLLY;break;case dr.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=oe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=oe.ROTATE}break;case dr.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=oe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=oe.PAN}break;default:this.state=oe.NONE}this.state!==oe.NONE&&this.dispatchEvent(Ml)}function ax(n){switch(this.state){case oe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case oe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case oe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function ox(n){this.enabled===!1||this.enableZoom===!1||this.state!==oe.NONE||(n.preventDefault(),this.dispatchEvent(Ml),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(uh))}function lx(n){this.enabled!==!1&&this._handleKeyDown(n)}function cx(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case sr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=oe.TOUCH_ROTATE;break;case sr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=oe.TOUCH_PAN;break;default:this.state=oe.NONE}break;case 2:switch(this.touches.TWO){case sr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=oe.TOUCH_DOLLY_PAN;break;case sr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=oe.TOUCH_DOLLY_ROTATE;break;default:this.state=oe.NONE}break;default:this.state=oe.NONE}this.state!==oe.NONE&&this.dispatchEvent(Ml)}function ux(n){switch(this._trackPointer(n),this.state){case oe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case oe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case oe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case oe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=oe.NONE}}function hx(n){this.enabled!==!1&&n.preventDefault()}function fx(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function dx(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var px=ue('<div class="simulation-container svelte-13oaowu"><div class="simulation-header svelte-13oaowu"><h4 class="svelte-13oaowu">Solar System - NEO Asteroids</h4></div> <div class="canvas-container svelte-13oaowu"><canvas class="svelte-13oaowu"></canvas></div></div>');function mx(n,t){li(t,!1);let e=yn(),i,r,s,a,o;const c=149597870700,l=Math.PI/180,u=1,d={a_AU:2.844,e:.6653,i:1.98*l,Omega:57.94*l,omega:238.17*l},f={a_AU:.9227,e:.1914,i:3.34*l,Omega:203.96*l,omega:126.6*l},p={a_AU:2.486,e:.6125,i:2.27*l,Omega:209.47*l,omega:68.69*l},_=[{name:"Mercury",color:13092807,a_AU:.387098,e:.20563,i:7.00487*l,Omega:48.331*l,omega:29.124*l},{name:"Venus",color:15123066,a_AU:.723332,e:.006772,i:3.39471*l,Omega:76.68*l,omega:54.884*l},{name:"Earth",color:7189503,a_AU:1,e:.01671,i:5e-5*l,Omega:348.739*l,omega:102.947*l},{name:"Mars",color:16739159,a_AU:1.523679,e:.0934,i:1.85*l,Omega:49.558*l,omega:286.502*l}],v=[{name:"Hypnos",el:d,color:16777215,size:.025},{name:"Apophis",el:f,color:16711680,size:.025},{name:"Golevka",el:p,color:2031360,size:.025}];let m=[],h=[],T=0;sl(()=>{A()}),Kf(()=>{o&&cancelAnimationFrame(o),s&&s.dispose(),a&&a.dispose(),window.removeEventListener("resize",R)});function y(L,B,V=1e-12,z=50){let G=B<.8?L:Math.PI;for(let Y=0;Y<z;Y++){const k=G-B*Math.sin(G)-L,X=1-B*Math.cos(G),J=-k/X;if(G+=J,Math.abs(J)<V)break}return G}function E(L,B=720){const V=L.a_AU*c,z=L.e,G=[];for(let Y=0;Y<B;Y++){const k=2*Math.PI*Y/B,X=y(k,z),J=V*(1-z*Math.cos(X)),rt=Math.atan2(Math.sqrt(1-z*z)*Math.sin(X),Math.cos(X)-z),_t=J*Math.cos(rt),It=J*Math.sin(rt),Ht=L.Omega,Ot=L.i||0,q=L.omega,K=Math.cos(Ht),ot=Math.sin(Ht),xt=Math.cos(Ot),pt=Math.sin(Ot),Ft=Math.cos(q),ie=Math.sin(q),w=(K*Ft-ot*ie*xt)*_t+(-K*ie-ot*Ft*xt)*It,te=(ot*Ft+K*ie*xt)*_t+(-ot*ie+K*Ft*xt)*It,Ct=ie*pt*_t+Ft*pt*It;G.push(new I(w/c/u,te/c/u,Ct/c/u))}return new Dn().setFromPoints(G)}function C(L,B){const V=L.a_AU*c,z=L.e,G=y(B,z),Y=V*(1-z*Math.cos(G)),k=Math.atan2(Math.sqrt(1-z*z)*Math.sin(G),Math.cos(G)-z),X=Y*Math.cos(k),J=Y*Math.sin(k),rt=L.Omega,_t=L.i||0,It=L.omega,Ht=Math.cos(rt),Ot=Math.sin(rt),q=Math.cos(_t),K=Math.sin(_t),ot=Math.cos(It),xt=Math.sin(It),pt=(Ht*ot-Ot*xt*q)*X+(-Ht*xt-Ot*ot*q)*J,Ft=(Ot*ot+Ht*xt*q)*X+(-Ot*xt+Ht*ot*q)*J,ie=xt*K*X+ot*K*J;return new I(pt/c/u,Ft/c/u,ie/c/u)}function A(){s=new Q0({canvas:dt(e),antialias:!0}),s.setSize(dt(e).clientWidth,dt(e).clientHeight),i=new im,i.background=new Zt(0),r=new Ke(55,dt(e).clientWidth/dt(e).clientHeight,1e-4,1e9),r.position.set(0,2.5,6),a=new ex(r,s.domElement),a.enableDamping=!0,i.add(new pm(16777215,.25));const L=new fm(16777215,2);i.add(L);const B=new sn(new Vr(.06,24,16),new gl({color:16764006}));i.add(B);{const V=E(d,960),z=new Or({color:16777215,transparent:!0,opacity:.95});i.add(new Ds(V,z))}{const V=E(f,960),z=new Or({color:16711680,transparent:!0,opacity:.95});i.add(new Ds(V,z))}{const V=E(p,960),z=new Or({color:2031360,transparent:!0,opacity:.95});i.add(new Ds(V,z))}for(const V of _){const z=E(V,720),G=new Or({color:V.color,transparent:!0,opacity:.9});i.add(new Ds(z,G))}m=[];for(const V of _){const z=new Vr(.03,16,16),G=new gc({color:V.color}),Y=new sn(z,G);i.add(Y),m.push({mesh:Y,el:V,M0:Math.random()*2*Math.PI})}h=[];for(const V of v){const z=new Vr(V.size,12,12),G=new gc({color:V.color}),Y=new sn(z,G);i.add(Y),h.push({mesh:Y,el:V.el,M0:Math.random()*2*Math.PI})}R(),window.addEventListener("resize",R),N()}function R(){const L=dt(e).clientWidth,B=dt(e).clientHeight;s.setSize(L,B),r.aspect=L/B,r.updateProjectionMatrix()}function N(){o=requestAnimationFrame(N),T+=.002;for(const L of m){const B=L.M0+T/Math.pow(L.el.a_AU,1.5),V=C(L.el,B%(2*Math.PI));L.mesh.position.copy(V)}for(const L of h){const B=L.M0+T/Math.pow(L.el.a_AU,1.5),V=C(L.el,B%(2*Math.PI));L.mesh.position.copy(V)}a.update(),s.render(i,r)}zi();var M=px(),S=wt(ft(M),2),P=ft(S);Yf(P,L=>ye(e,L),()=>dt(e)),Kt(n,M),ci()}var _x=ue('<section class="simulator svelte-t6w6l2"><div class="neo-simulation svelte-t6w6l2"><!></div> <div class="neo-list svelte-t6w6l2"><!></div> <div class="neo-detail svelte-t6w6l2"><!></div> <a class="action-btn svelte-t6w6l2" href="https://modelo-colision.onrender.com" target="_blank">Go to Collision Model</a></section>');function gx(n,t){li(t,!1);let e=yn([]),i=yn([]),r=yn(null),s=yn(!1),a=yn(null);async function o(){try{ye(s,!0),ye(a,null);const h=await md("sbdb_query_results.csv",{logProgress:!0,alternativeUrls:[]});ye(i,h.data),console.log("CSV Data Sample:",dt(i).slice(0,3));const T=_d(dt(i).slice(0,50));ye(e,T),console.log(`✅ Procesados ${dt(e).length} asteroides`)}catch(h){console.error("❌ Error cargando asteroides:",h),ye(a,h.message),ye(e,[])}finally{ye(s,!1)}}async function c(){console.log("=== DEBUG LOAD CSV ==="),console.log("Environment:",{DEV:!1,BASE_URL:"/meteor-madness/",MODE:"production"}),console.log("Current location:",window.location.href),await o()}sl(()=>{o()});function l(h){ye(r,h.detail)}zi();var u=_x(),d=ft(u),f=ft(d);mx(f,{});var p=wt(d,2),_=ft(p);Ud(_,{get asteroids(){return dt(e)},get selectedAsteroid(){return dt(r)},get isLoading(){return dt(s)},get loadError(){return dt(a)},get csvAsteroids(){return dt(i)},onDebugReload:c,$$events:{asteroidSelected:l}});var v=wt(p,2),m=ft(v);kd(m,{get selectedAsteroid(){return dt(r)}}),Kt(n,u),ci()}var vx=ue('<section class="mission svelte-7pil9u"><h2>🎯 Strategy</h2> <p> </p> <p>Based on the completed simulation, you must choose the best strategy to save Earth.</p> <div class="strategy-options"><div class="option"><h3>🚀 Nuclear Missile</h3> <p>Destroy the meteorite with nuclear weapons</p></div> <div class="option"><h3>🛸 Gravitational Deflection</h3> <p>Use spacecraft to alter its trajectory</p></div> <div class="option"><h3>⚡ Orbital Laser</h3> <p>Vaporize the meteorite with advanced technology</p></div></div> <button class="action-btn">🔄 Return to Start</button></section>');function xx(n,t){li(t,!1);const e=()=>Lu(ol,"$userName",i),[i,r]=Uu();function s(){nd()}zi();var a=vx(),o=wt(ft(a),2),c=ft(o),l=wt(o,6);Ze(()=>de(c,`Excellent work ${(e()?e():"Commander")??""}. It's time to make critical decisions!`)),ur("click",l,s),Kt(n,a),ci(),r()}var Mx=ue("<main><!></main>");function Sx(n,t){li(t,!1);const e=()=>Lu(al,"$currentScene",i),[i,r]=Uu();zi();var s=Mx(),a=ft(s);{var o=l=>{hd(l,{})},c=l=>{var u=hr(),d=Vn(u);{var f=_=>{gx(_,{})},p=_=>{var v=hr(),m=Vn(v);{var h=T=>{xx(T,{})};Se(m,T=>{e()===fr.MISSION&&T(h)},!0)}Kt(_,v)};Se(d,_=>{e()===fr.SIMULATOR?_(f):_(p,!1)},!0)}Kt(l,u)};Se(a,l=>{e()===fr.INTRO?l(o):l(c,!1)})}Kt(n,s),ci(),r()}Lf(Sx,{target:document.getElementById("app")});
