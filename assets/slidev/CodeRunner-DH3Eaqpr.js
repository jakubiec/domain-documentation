const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/slidev/shiki-DxhgU3-j.js","assets/monaco/bundled-types-5bawswpH.js","assets/modules/file-saver-igGfcqei.js","assets/modules/vue-DS2shmMQ.js","assets/monaco/bundled-types-BnuwJtRS.css","assets/modules/shiki-rtLvZPFg.js","assets/modules/shiki-Bxv373Z5.css"])))=>i.map(i=>d[i]);
import{E as L}from"../modules/unplugin-icons-D-mv8FW1.js";import{a8 as P,t as b,d as N,G as D,o as i,b as a,U as H,z,Y as J,N as F,a9 as K,M as U,E as q,J as G,a2 as W,e as Y,x as C,K as x,F as k,Z as M,c as Z,i as Q,g as R,aa as X,h as ee,l as T,k as te}from"../modules/vue-DS2shmMQ.js";import{j as ne,_ as V,e as re,f as $}from"../monaco/bundled-types-5bawswpH.js";import{k as se,m as oe}from"../index-DawE00pv.js";import{u as ie}from"./context-G1rcknZt.js";import{_ as ae}from"./IconButton.vue_vue_type_script_setup_true_lang-DwODlcj3.js";import"../modules/file-saver-igGfcqei.js";import"../modules/shiki-rtLvZPFg.js";function le(s){return Array.from({length:s})}function ce(){console.log("Hello from snippets/external.ts")}const ue=Object.freeze(Object.defineProperty({__proto__:null,emptyArray:le,sayHello:ce},Symbol.toStringTag,{value:"Module"})),B={vue:P,"./external":ue},de=[],pe=ne(async()=>{const s={javascript:E,js:E,typescript:E,ts:E},{getHighlighter:t}=await V(async()=>{const{getHighlighter:o}=await import("./shiki-DxhgU3-j.js");return{getHighlighter:o}},__vite__mapDeps([0,1,2,3,4,5,6])),r=await t(),f=async(o,p,l)=>{try{const d=s[p];if(!d)throw new Error(`Runner for language "${p}" not found`);return await d(o,{options:l,highlight:r,run:async(e,n)=>await f(e,n,l)})}catch(d){return console.error(d),{error:`${d}`}}};for(const o of de){const p=await o(s);Object.assign(s,p)}return{highlight:r,run:f}});function me(s){const t=b([]),r=e=>t.value.push({error:String(e)}),f=(...e)=>t.value.push(e.map(p)),o=Object.assign({},console);o.info=o.log=o.debug=o.warn=o.error=f,o.clear=()=>t.value.length=0;try{const e=`return async (console, __slidev_import, __slidev_on_error) => {
      try {
        ${d(s)}
      } catch (e) {
        __slidev_on_error(e)
      }
    }`;new Function(e)()(o,n=>{const u=B[n];if(!u)throw new Error(`Module not found: ${n}.
Available modules: ${Object.keys(B).join(", ")}. Please refer to https://sli.dev/custom/config-code-runners#additional-runner-dependencies`);return u},r)}catch(e){r(e)}function p(e){return typeof e=="string"?{text:e}:{text:l(e),highlightLang:"javascript"}}function l(e){var u;let n="";if(e instanceof Error)n=`Error: ${JSON.stringify(e.message)}`;else if(e==null||typeof e=="symbol")n=String(e);else if(Array.isArray(e))n=`[${e.map(l).join(", ")}]`;else if(e instanceof Set){const c=[...e];n=`Set (${e.size}) {${c.map(l).join(", ")}}`}else if(e instanceof Map){const c=[...e.entries()];n=`Map (${e.size}) {${c.map(([m,h])=>`${l(m)} => ${l(h)}`).join(", ")}}`}else if(e instanceof RegExp)n=e.toString();else if(typeof e=="string")n=JSON.stringify(e);else if(typeof e=="object"){const c=((u=e.constructor)==null?void 0:u.name)??"",m=c&&c==="Object"?"":c;n=(m?`${m}: `:"")+JSON.stringify(e,(g,_)=>_===void 0?"__undefined__":_,2).replace(/"__undefined__"/g,"undefined"),n=String(n)}else n=String(e);return n}function d(e){return e=e.replace('import "reflect-metadata"',"").replace('require("reflect-metadata")',""),e=e.replace("export {};",""),e}return t}let O;async function E(s){O??(O=await V(()=>import("../monaco/bundled-types-5bawswpH.js").then(r=>r.t),__vite__mapDeps([1,2,3,4]))),s=O.transpileModule(s,{compilerOptions:{module:O.ModuleKind.ESNext,target:O.ScriptTarget.ES2022},transformers:{after:[fe]}}).outputText;const t=/import\s*\((.+)\)/g;return s=s.replace(t,(r,f)=>`__slidev_import(${f})`),me(s)}function fe(s){const{factory:t}=s,{isImportDeclaration:r,isNamedImports:f,NodeFlags:o}=O;return p=>{var d,e;const l=[...p.statements];for(let n=0;n<l.length;n++){const u=l[n];if(!r(u))continue;let c;const m=(d=u.importClause)==null?void 0:d.namedBindings,h=[];if((e=u.importClause)!=null&&e.name&&h.push(t.createBindingElement(void 0,t.createIdentifier("default"),u.importClause.name)),m)if(f(m)){for(const _ of m.elements)h.push(t.createBindingElement(void 0,_.propertyName,_.name));c=t.createObjectBindingPattern(h)}else c=t.createIdentifier(m.name.text);else c=t.createObjectBindingPattern(h);const g=t.createVariableStatement(void 0,t.createVariableDeclarationList([t.createVariableDeclaration(c,void 0,void 0,t.createAwaitExpression(t.createCallExpression(t.createIdentifier("import"),void 0,[u.moduleSpecifier])))],o.Const));l[n]=g}return t.updateSourceFile(p,l)}}const he=N({__name:"DomElement",props:{element:{}},setup(s){const t=s,r=b();return D(()=>{r.value&&r.value.appendChild(t.element)}),(f,o)=>(i(),a("div",{ref_key:"container",ref:r},null,512))}}),_e={key:0,class:"text-sm text-center opacity-50"},ve={key:1,class:"text-sm text-center opacity-50"},ge={key:2,class:"text-sm text-center opacity-50"},ye=["innerHTML"],xe={key:1,class:"text-red-500"},be={key:3,class:"output-line"},Se=["innerHTML"],we={key:2,class:"separator"},ke={key:0,class:"absolute right-1 top-1 max-h-full flex gap-1"},Te=N({__name:"CodeRunner",props:{modelValue:{},lang:{},autorun:{type:[Boolean,String]},height:{},showOutputAt:{type:[null,Boolean,String,Number,Array]},highlightOutput:{type:Boolean},runnerOptions:{}},emits:["update:modelValue"],setup(s,{emit:t}){const r=s,f=t,{isPrintMode:o}=se(),p=H(r,"modelValue",f),{$renderContext:l,$clicksContext:d}=ie(),e=z(()=>!["slide","presenter"].includes(l.value)),n=o.value?"once":r.autorun,u=b(n),c=J(),m=b(0),h=b(),g=b(r.showOutputAt);if(r.showOutputAt){const S=oe();F(()=>{const y=d.calculate(r.showOutputAt);y?(d.register(S,y),K(()=>{g.value=!y.isActive.value})):g.value=!1}),U(()=>d.unregister(S))}const _=re(200,async()=>{if(e.value)return;const{highlight:S,run:y}=await pe();h.value=S;const j=setTimeout(()=>{u.value=!0},500);c.value=await y(p.value,r.lang,r.runnerOptions??{}),m.value+=1,u.value=!1,clearTimeout(j)});return n==="once"?_():n&&q(p,_,{immediate:!0}),(S,y)=>{const j=L;return i(),a(k,null,[G(Y("div",{class:"relative flex flex-col rounded-b border-t border-main",style:ee({height:r.height}),"data-waitfor":".slidev-runner-output"},[e.value?(i(),a("div",_e,' Code is disabled in the "'+C(x(l))+'" mode ',1)):u.value?(i(),a("div",ve," Running... ")):c.value?(i(),a("div",{key:`run-${m.value}`,class:"slidev-runner-output"},[(i(!0),a(k,null,M(x($)(X(c.value)),(v,I)=>(i(),a(k,{key:I},["html"in v?(i(),a("div",{key:0,innerHTML:v.html},null,8,ye)):"error"in v?(i(),a("div",xe,C(v.error),1)):"element"in v?(i(),Z(he,{key:2,element:v.element},null,8,["element"])):(i(),a("div",be,[(i(!0),a(k,null,M(x($)(v),(w,A)=>(i(),a(k,{key:A},[w.highlightLang&&h.value?(i(),a("span",{key:0,class:"highlighted",innerHTML:h.value(w.text,w.highlightLang)},null,8,Se)):(i(),a("span",{key:1,class:Q(w.class)},C(w.text),3)),A<x($)(v).length-1?(i(),a("span",we,",")):R("",!0)],64))),128))]))],64))),128))])):(i(),a("div",ge," Click the play button to run the code "))],4),[[W,!g.value]]),x(p).trim()?(i(),a("div",ke,[T(ae,{class:"w-8 h-8 max-h-full flex justify-center items-center",title:"Run code",onClick:x(_)},{default:te(()=>[T(j)]),_:1},8,["onClick"])])):R("",!0)],64)}}});export{Te as default};
