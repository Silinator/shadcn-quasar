import{a as Ae,I as C,c as Qe}from"./Icon-BrGviInw.js";import{d as H,f as Ze,t as X,g as ea,j as aa,u as g,b as ta,e as L,n as N,o as j,p as T,k as U,l as F,m as K,q as na}from"./vue.esm-bundler-egrY_yfx.js";import{f as p}from"./index-BMS2073q.js";var sa=Object.defineProperty,ra=Object.defineProperties,oa=Object.getOwnPropertyDescriptors,J=Object.getOwnPropertySymbols,ia=Object.prototype.hasOwnProperty,la=Object.prototype.propertyIsEnumerable,Q=(e,a,t)=>a in e?sa(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,h=(e,a)=>{for(var t in a||(a={}))ia.call(a,t)&&Q(e,t,a[t]);if(J)for(var t of J(a))la.call(a,t)&&Q(e,t,a[t]);return e},He=(e,a)=>ra(e,oa(a)),Ye={directive:"wave",color:"currentColor",initialOpacity:.2,finalOpacity:.1,duration:.4,dissolveDuration:.15,waitForRelease:!0,easing:"ease-out",cancellationPeriod:75,trigger:"auto",tagName:"div",disabled:!1,respectDisabledAttribute:!0,respectPrefersReducedMotion:!0,stopPropagation:!1},da=e=>"config"in e&&"globalProperties"in e.config,ca=e=>{let a;return e==="vue2"?a=!1:e==="vue3"?a=!0:a=da(e),a?{mounted:"mounted",updated:"updated"}:{mounted:"inserted",updated:"componentUpdated"}},Ge=e=>typeof e=="string"&&e!=="auto",Z=(e,a)=>{e.dataset.vWaveBoundary=Ge(a)?a:"true"},ua=({borderTopLeftRadius:e,borderTopRightRadius:a,borderBottomLeftRadius:t,borderBottomRightRadius:s},n)=>{const o=document.createElement(n);return o.style.top="0",o.style.left="0",o.style.width="100%",o.style.height="100%",o.style.display="block",o.style.position="absolute",o.style.borderRadius=`${e} ${a} ${s} ${t}`,o.style.overflow="hidden",o.style.pointerEvents="none",o.style.webkitMaskImage="-webkit-radial-gradient(white, black)",o.dataset.vWaveContainerInternal="true",o},pa=({x:e,y:a},t,s)=>{const n=document.createElement("div");return n.style.position="absolute",n.style.width=`${t}px`,n.style.height=`${t}px`,n.style.top=`${a}px`,n.style.left=`${e}px`,n.style.background=s.color,n.style.borderRadius="50%",n.style.opacity=`${s.initialOpacity}`,n.style.transform="translate(-50%,-50%) scale(0)",n.style.transition=`transform ${s.duration}s ${s.easing}, opacity ${s.duration}s ${s.easing}`,n};function w(e,a,t,s){const n=e-t,o=a-s;return Math.sqrt(n*n+o*o)}function ma({x:e,y:a},{width:t,height:s}){const n=w(e,a,0,0),o=w(e,a,t,0),m=w(e,a,0,s),r=w(e,a,t,s);return Math.max(n,o,m,r)}var fa=({x:e,y:a},{top:t,left:s})=>({x:e-s,y:a-t}),ha=(e,a)=>{a.position==="static"&&(["top","left","right","bottom"].forEach(t=>{a[t]&&a[t]!=="auto"&&console.warn("[v-wave]:",e,`You're using a \`static\` positioned element with a non-auto value (${a[t]}) for \`${t}\`.`,"It's position will be changed to relative while displaying the wave which might cause the element to visually jump.")}),e.dataset.originalPositionValue=e.style.position,e.style.position="relative")},ee=e=>{var a;e.style.position=(a=e.dataset.originalPositionValue)!=null?a:"",delete e.dataset.originalPositionValue},Y="vWaveCountInternal";function ga(e){const a=M(e);Xe(e,a+1)}function ae(e){const a=M(e);Xe(e,a-1)}function Xe(e,a){e.dataset[Y]=a.toString()}function M(e){var a;return Number.parseInt((a=e.dataset[Y])!=null?a:"0",10)}function te(e){delete e.dataset[Y]}var ya=2.05,A=(e,a,t)=>{if(t.disabled||t.respectDisabledAttribute&&a.hasAttribute("disabled")||t.respectPrefersReducedMotion&&window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;const s=a.getBoundingClientRect(),n=window.getComputedStyle(a),o=fa(e,s),m=ya*ma(o,s),r=a.querySelector("[data-v-wave-container-internal]"),l=r??ua(n,t.tagName),d=pa(o,m,t);ga(a),ha(a,n),l.appendChild(d),r||a.appendChild(l);let f=!t.waitForRelease;const i=b=>{typeof b<"u"&&(document.removeEventListener("pointerup",i),document.removeEventListener("pointercancel",i)),f?u():f=!0},u=()=>{d.style.transition=`opacity ${t.dissolveDuration}s linear`,d.style.opacity="0",setTimeout(()=>{d.remove(),ae(a),M(a)===0&&(te(a),l.remove(),ee(a))},t.dissolveDuration*1e3)};t.waitForRelease&&(document.addEventListener("pointerup",i),document.addEventListener("pointercancel",i));const y=setTimeout(()=>{document.removeEventListener("pointercancel",v),requestAnimationFrame(()=>{d.style.transform="translate(-50%,-50%) scale(1)",d.style.opacity=`${t.finalOpacity}`,setTimeout(()=>i(),t.duration*1e3)})},t.cancellationPeriod),v=()=>{clearTimeout(y),d.remove(),ae(a),M(a)===0&&(te(a),l.remove(),ee(a)),document.removeEventListener("pointerup",i),document.removeEventListener("pointercancel",i),document.removeEventListener("pointercancel",v)};document.addEventListener("pointercancel",v)},k=new WeakMap,va=(e,a)=>(t,s)=>{if(!k.has(a))return;const n=h(h({},e),k.get(a));if(n.stopPropagation&&t.stopPropagation(),n.trigger===!1)return A(t,a,n);if(Ge(n.trigger))return;const o=a.querySelector('[data-v-wave-trigger="true"]');!o&&n.trigger===!0||o&&!t.composedPath().includes(o)||A(s??t,a,He(h({},n),{waitForRelease:s?!1:n.waitForRelease}))},ne=(e={},a="vue3")=>{const t=h(h({},Ye),e),s=ca(a),n=r=>{if(r.detail!==0)return;const l=r.currentTarget,d=l.dataset.vWaveTrigger;document.querySelectorAll(`[data-v-wave-boundary="${d}"]`).forEach(i=>{const u=r.type==="click";let y;if(u){const b=l.getBoundingClientRect();y={x:b.left+b.width/2,y:b.top+b.height/2}}else y=r;const v=h(h({},t),k.get(i));A(y,i,He(h({},v),{waitForRelease:u?!1:v.waitForRelease}))})},o={[s.mounted](r,{value:l={}}){var d;k.set(r,l),Z(r,(d=l==null?void 0:l.trigger)!=null?d:t.trigger);const f=va(t,r);r.addEventListener("pointerdown",f),r.addEventListener("click",i=>{if(i.detail!==0)return;const u=r.getBoundingClientRect(),y={x:u.left+u.width/2,y:u.top+u.height/2};f(i,y)})},[s.updated](r,{value:l={}}){var d;k.set(r,l),Z(r,(d=l==null?void 0:l.trigger)!=null?d:t.trigger)}},m={[s.mounted](r,{arg:l="true"}){r.dataset.vWaveTrigger=l,l!=="true"&&(r.addEventListener("pointerdown",n),r.addEventListener("click",n))},[s.updated](r,{arg:l="true"}){r.dataset.vWaveTrigger=l,l==="true"?(r.removeEventListener("pointerdown",n),r.removeEventListener("click",n)):(r.addEventListener("pointerdown",n),r.addEventListener("click",n))}};return{wave:o,vWave:o,waveTrigger:m,vWaveTrigger:m}},ba={install(e,a={}){if(this.installed)return;this.installed=!0;const t=h(h({},Ye),a),{vWave:s,vWaveTrigger:n}=ne(t,e);e.directive(t.directive,s),e.directive(`${t.directive}-trigger`,n)},installed:!1,createLocalWaveDirective:ne},Ca=ba;const ka=["role","aria-disabled","tabindex"],c=H({__name:"Chip",props:{modelValue:{type:Boolean,default:!0},selected:{type:[Boolean,null],default:null},dense:{type:Boolean,default:!1},square:{type:Boolean,default:!1},outline:{type:Boolean,default:!1},clickable:{type:Boolean,default:!1},ripple:{type:Boolean,default:!0},disable:{type:Boolean,default:!1},size:{},class:{}},emits:["update:modelValue","update:selected","click","remove"],setup(e,{emit:a}){const t=e,{wave:s}=Ca.createLocalWaveDirective({initialOpacity:.3,finalOpacity:.2,duration:.35}),n=Ze(()=>t.disable===!1&&(t.clickable===!0||t.selected!==null)),o=a;function m(i){i.key==="Enter"&&r(i)}function r(i){if(!n.value)return;const u=t.selected!==!0;o("update:selected",u),o("click",i)}function l(){o("update:modelValue",!1),o("remove")}T("onRemove",l);const d=X(t,"selected");T("chipSelected",d);const f=X(t,"disable");return T("chipDisable",f),(i,u)=>t.modelValue?ea((j(),ta("div",{key:0,role:n.value?"button":void 0,"aria-disabled":t.disable?"true":void 0,tabindex:n.value?0:void 0,onClick:r,onKeyup:m,class:N(g(Ae)(g(Je)({dense:i.dense,square:i.square,outline:i.outline,size:i.size,isClickable:n.value,disable:f.value}),t.class))},[L(i.$slots,"default")],42,ka)),[[g(s),{...i.ripple&&!f.value?{}:{disabled:!0}}]]):aa("",!0)}});c.__docgenInfo={exportName:"default",displayName:"Chip",type:1,props:[{name:"square",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"false"},{name:"modelValue",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"true"},{name:"selected",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"null"},{name:"dense",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"false"},{name:"outline",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"false"},{name:"ripple",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"true"},{name:"clickable",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"false"},{name:"disable",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"false"},{name:"size",global:!1,description:"",tags:[],required:!1,type:'"md" | "xs" | "sm" | "lg" | "xl"',declarations:[],schema:{kind:"enum",type:'"md" | "xs" | "sm" | "lg" | "xl"',schema:['"md"','"xs"','"sm"','"lg"','"xl"']}},{name:"class",global:!0,description:"",tags:[],required:!1,type:"any",declarations:[],schema:"any"},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[{name:"click",description:"",tags:[],type:"[event: MouseEvent | KeyboardEvent]",signature:'(event: "click", event: MouseEvent | KeyboardEvent): void',declarations:[],schema:[{kind:"enum",type:"MouseEvent | KeyboardEvent",schema:[{kind:"object",type:"MouseEvent"},{kind:"object",type:"KeyboardEvent"}]}]},{name:"update:modelValue",description:"",tags:[],type:"[val: boolean]",signature:'(event: "update:modelValue", val: boolean): void',declarations:[],schema:[{kind:"enum",type:"boolean",schema:["false","true"]}]},{name:"update:selected",description:"",tags:[],type:"[val: boolean]",signature:'(event: "update:selected", val: boolean): void',declarations:[],schema:[{kind:"enum",type:"boolean",schema:["false","true"]}]},{name:"remove",description:"",tags:[],type:"[]",signature:'(event: "remove"): void',declarations:[],schema:[]}],slots:[{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"square",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"modelValue",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"selected",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"dense",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"outline",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ripple",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"clickable",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"disable",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"size",type:'"md" | "xs" | "sm" | "lg" | "xl"',description:"",declarations:[],schema:{kind:"enum",type:'"md" | "xs" | "sm" | "lg" | "xl"',schema:['"md"','"xs"','"sm"','"lg"','"xl"']}},{name:"class",type:"any",description:"",declarations:[],schema:"any"}],sourceFiles:"D:/Side Projects/shadcn-quasar/src/components/ui/chip/Chip.vue"};const x=H({__name:"ChipIcon",props:{name:{},iconSelected:{default:"check"},variant:{default:"rounded"},filled:{type:Boolean,default:!1},size:{default:"inherit"},class:{}},setup(e){const a=K("chipSelected"),t=e;return(s,n)=>g(a)?(j(),U(g(C),{key:0,name:t.iconSelected,size:t.size,variant:t.variant,filled:t.filled,class:N(t.class)},{default:F(()=>[L(s.$slots,"default")]),_:3},8,["name","size","variant","filled","class"])):(j(),U(g(C),{key:1,name:t.name,variant:t.variant,filled:t.filled,size:t.size,class:N(t.class)},{default:F(()=>[L(s.$slots,"default")]),_:3},8,["name","variant","filled","size","class"]))}});x.__docgenInfo={exportName:"default",displayName:"ChipIcon",type:1,props:[{name:"name",global:!1,description:"",tags:[],required:!0,type:"string",declarations:[],schema:"string"},{name:"iconSelected",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'"check"'},{name:"variant",global:!1,description:"",tags:[],required:!1,type:"IconVariants",declarations:[],schema:{kind:"array",type:"IconVariants"},default:'"rounded"'},{name:"filled",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"false"},{name:"size",global:!1,description:"",tags:[],required:!1,type:"IconVariants",declarations:[],schema:{kind:"array",type:"IconVariants"},default:'"inherit"'},{name:"class",global:!0,description:"",tags:[],required:!1,type:"any",declarations:[],schema:"any"},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[],slots:[{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"size",type:"any",description:"",declarations:[],schema:"any"},{name:"variant",type:"any",description:"",declarations:[],schema:"any"},{name:"iconSelected",type:"string",description:"",declarations:[],schema:"string"},{name:"filled",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"class",type:"any",description:"",declarations:[],schema:"any"},{name:"name",type:"string",description:"",declarations:[],schema:"string"}],sourceFiles:"D:/Side Projects/shadcn-quasar/src/components/ui/chip/ChipIcon.vue"};const G=H({__name:"ChipRemoveButton",props:{name:{default:"cancel"},variant:{default:"rounded"},filled:{type:Boolean,default:!1},size:{default:"inherit"},class:{}},emits:["click"],setup(e,{emit:a}){const t=e,s=K("chipDisable"),n=K("onRemove"),o=a;function m(r){s!=null&&s.value||(o("click",r),n==null||n())}return(r,l)=>(j(),U(g(C),{onClick:na(m,["stop"]),role:"button",tabindex:"0",name:t.name,variant:t.variant,filled:t.filled,size:t.size,class:N(g(Ae)("pointer-events-auto !-mr-2.5 cursor-pointer opacity-60 hover:opacity-100",t.class))},{default:F(()=>[L(r.$slots,"default")]),_:3},8,["name","variant","filled","size","class"]))}});G.__docgenInfo={exportName:"default",displayName:"ChipRemoveButton",type:1,props:[{name:"size",global:!1,description:"",tags:[],required:!1,type:"any",declarations:[],schema:"any",default:'"inherit"'},{name:"variant",global:!1,description:"",tags:[],required:!1,type:"any",declarations:[],schema:"any",default:'"rounded"'},{name:"name",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'"cancel"'},{name:"filled",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"false"},{name:"class",global:!0,description:"",tags:[],required:!1,type:"any",declarations:[],schema:"any"},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[{name:"click",description:"",tags:[],type:"[event: MouseEvent | KeyboardEvent]",signature:'(event: "click", event: MouseEvent | KeyboardEvent): void',declarations:[],schema:[{kind:"enum",type:"MouseEvent | KeyboardEvent",schema:[{kind:"object",type:"MouseEvent"},{kind:"object",type:"KeyboardEvent"}]}]}],slots:[{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"size",type:"any",description:"",declarations:[],schema:"any"},{name:"variant",type:"any",description:"",declarations:[],schema:"any"},{name:"name",type:"string",description:"",declarations:[],schema:"string"},{name:"filled",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"class",type:"any",description:"",declarations:[],schema:"any"}],sourceFiles:"D:/Side Projects/shadcn-quasar/src/components/ui/chip/ChipRemoveButton.vue"};const Je=Qe("bg-primary-foreground text-primary relative m-1 inline-flex max-w-full items-center gap-2 outline-0 [&>i]:-m-1 [&>i]:text-[1.5em]",{variants:{dense:{true:"h-[1.5em] px-[0.4em] py-0",false:"h-[2em] px-[0.9em] py-[0.5em]"},square:{true:"rounded-lg",false:""},outline:{true:"text-primary border border-current bg-transparent",false:""},size:{xs:"text-[8px]",sm:"text-xs",md:"text-base",lg:"text-xl",xl:"text-2xl"},isClickable:{true:"cursor-pointer select-none focus:shadow-sm focus:outline-none",false:""},disable:{true:"cursor-not-allowed opacity-60",false:""}},compoundVariants:[{dense:!1,square:!1,class:"rounded-2xl"},{dense:!0,square:!1,class:"rounded-xl"}],defaultVariants:{dense:!1,square:!1,outline:!1,size:"md",isClickable:!1,disable:!1}});Je.__docgenInfo={exportName:"chipVariants",displayName:"chipVariants",type:2,props:[{name:"dense",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"square",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"outline",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"size",global:!1,description:"",tags:[],required:!1,type:'"md" | "xs" | "sm" | "lg" | "xl"',declarations:[],schema:{kind:"enum",type:'"md" | "xs" | "sm" | "lg" | "xl"',schema:['"md"','"xs"','"sm"','"lg"','"xl"']}},{name:"isClickable",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"disable",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"class",global:!0,description:"",tags:[],required:!1,type:"ClassValue",declarations:[],schema:{kind:"enum",type:"ClassValue",schema:["string","number","bigint","false","true",{kind:"array",type:"ClassArray"},"ClassDictionary"]}},{name:"className",global:!1,description:"",tags:[],required:!1,type:"ClassValue",declarations:[],schema:{kind:"enum",type:"ClassValue",schema:["string","number","bigint","false","true",{kind:"array",type:"ClassArray"},"ClassDictionary"]}}],events:[],slots:[],exposed:[],sourceFiles:"D:/Side Projects/shadcn-quasar/src/components/ui/chip/index.ts"};const Ba={title:"UI/Chip",component:c,tags:["autodocs"]},q={render:e=>({components:{Chip:c},setup(){return{args:e}},template:`
      <Chip v-bind="args">${e.default}</Chip>
    `}),args:{class:"bg-blue-500 text-white",default:"#007ABF"}},B={render:e=>({components:{Chip:c},setup(){return{args:e}},template:`
      <Chip v-bind="args">${e.default}</Chip>
    `}),args:{class:"bg-orange-400 text-white",default:"Bookmark"}},$={render:e=>({components:{Chip:c},setup(){return{args:e}},template:`
      <Chip v-bind="args">${e.default}</Chip>
    `}),args:{class:"bg-red-500 text-white",square:!0,default:"Bookmark"}},_={render:e=>({components:{Chip:c},setup(){return{args:e}},template:`
      <Chip v-bind="args">${e.default}</Chip>
    `}),args:{class:"text-emerald-500",outline:!0,default:"Bookmark"}},I={render:e=>({components:{Chip:c},setup(){return{args:e}},template:`
      <Chip v-bind="args">${e.default}</Chip>
    `}),args:{class:"text-amber-700",outline:!0,square:!0,default:"Bookmark"}},E={render:e=>({components:{Chip:c},setup(){return{args:e}},template:`
      <Chip v-bind="args">${e.default}</Chip>
    `}),args:{class:"bg-rose-700 text-white",disable:!0,default:"Bookmark"}},R={render:e=>({components:{Chip:c},setup(){return{args:e}},template:`
      <Chip v-bind="args">${e.default}</Chip>
    `}),args:{class:"bg-fuchsia-800 text-white",dense:!0,default:"Bookmark"}},S={render:e=>({components:{Chip:c,Icon:C},setup(){return{args:e}},template:`
      <Chip v-bind="args">${e.default}</Chip>
      <Chip v-bind="args" size="sm">${e.default}</Chip>
      <Chip v-bind="args" size="md">${e.default}</Chip>
      <Chip v-bind="args" size="lg">${e.default}</Chip>
      <Chip v-bind="args" size="xl">${e.default}</Chip>
      <br />
      <Chip v-bind="args" dense >${e.default}</Chip>
      <Chip v-bind="args" dense size="sm">${e.default}</Chip>
      <Chip v-bind="args" dense size="md">${e.default}</Chip>
      <Chip v-bind="args" dense size="lg">${e.default}</Chip>
      <Chip v-bind="args" dense size="xl">${e.default}</Chip>
    `}),args:{class:"bg-green-300 text-white",size:"xs",default:'<Icon filled name="bookmark" /> Bookmark'}},z={render:e=>({components:{Chip:c,Icon:C},setup(){return{args:e}},template:`
      <Chip v-bind="args">${e.default}</Chip>
    `}),args:{class:"bg-green-300 text-white text-6xl",default:'<Icon filled name="bookmark" /> Bookmark'}},P={render:e=>({components:{Chip:c,Icon:C},setup(){return{args:e}},template:`
      <Chip v-bind="args">${e.default}</Chip>
    `}),args:{class:"bg-purple-400",default:`
      <Icon name="bluetooth" />
      Bluetooth
    `}},W={render:e=>({components:{Chip:c,ChipIcon:x},setup(){return{args:e}},template:`
      <Chip v-model:selected="args.selected" v-bind="args">${e.default}</Chip>
    `}),args:{onClick:p(),"onUpdate:selected":p(),class:"bg-lime-700",selected:!1,default:`
      <ChipIcon name="bluetooth"/>
      Bluetooth
    `}},V={render:e=>({components:{Chip:c,ChipIcon:x},setup(){return{args:e}},template:`
      <Chip v-model:selected="args.selected" v-bind="args">${e.default}</Chip>
    `}),args:{onClick:p(),"onUpdate:selected":p(),class:"bg-gray-200",selected:!0,default:`
      <ChipIcon name="bluetooth" iconSelected="check_circle"/>
      Bluetooth
    `}},O={render:e=>({components:{Chip:c,ChipIcon:x,ChipRemoveButton:G},setup(){return{args:e}},template:`
      <Chip v-model:selected="args.selected" v-bind="args">${e.default}</Chip>
    `}),args:{onClick:p(),"onUpdate:selected":p(),onRemove:p(),"onUpdate:modelValue":p(),class:"bg-blue-400",selected:!0,default:`
      <ChipIcon name="bluetooth" iconSelected="check_circle"/>
      Bluetooth
      <ChipRemoveButton filled />
    `}},D={render:e=>({components:{Chip:c,ChipIcon:x,ChipRemoveButton:G},setup(){return{args:e}},template:`
      <Chip v-model:selected="args.selected" v-bind="args">${e.default}</Chip>
    `}),args:{onClick:p(),"onUpdate:selected":p(),onRemove:p(),"onUpdate:modelValue":p(),class:"text-blue-600",selected:!0,outline:!0,default:`
      <ChipIcon name="bluetooth" iconSelected="check_circle"/>
      Bluetooth
      <ChipRemoveButton filled />
    `}};var se,re,oe;q.parameters={...q.parameters,docs:{...(se=q.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Chip
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Chip v-bind="args">\${args.default}</Chip>
    \`
  }),
  args: {
    class: 'bg-blue-500 text-white',
    default: \`#007ABF\`
  }
}`,...(oe=(re=q.parameters)==null?void 0:re.docs)==null?void 0:oe.source}}};var ie,le,de;B.parameters={...B.parameters,docs:{...(ie=B.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Chip
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Chip v-bind="args">\${args.default}</Chip>
    \`
  }),
  args: {
    class: 'bg-orange-400 text-white',
    default: \`Bookmark\`
  }
}`,...(de=(le=B.parameters)==null?void 0:le.docs)==null?void 0:de.source}}};var ce,ue,pe;$.parameters={...$.parameters,docs:{...(ce=$.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Chip
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Chip v-bind="args">\${args.default}</Chip>
    \`
  }),
  args: {
    class: 'bg-red-500 text-white',
    square: true,
    default: \`Bookmark\`
  }
}`,...(pe=(ue=$.parameters)==null?void 0:ue.docs)==null?void 0:pe.source}}};var me,fe,he;_.parameters={..._.parameters,docs:{...(me=_.parameters)==null?void 0:me.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Chip
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Chip v-bind="args">\${args.default}</Chip>
    \`
  }),
  args: {
    class: 'text-emerald-500',
    outline: true,
    default: \`Bookmark\`
  }
}`,...(he=(fe=_.parameters)==null?void 0:fe.docs)==null?void 0:he.source}}};var ge,ye,ve;I.parameters={...I.parameters,docs:{...(ge=I.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Chip
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Chip v-bind="args">\${args.default}</Chip>
    \`
  }),
  args: {
    class: 'text-amber-700',
    outline: true,
    square: true,
    default: \`Bookmark\`
  }
}`,...(ve=(ye=I.parameters)==null?void 0:ye.docs)==null?void 0:ve.source}}};var be,Ce,ke;E.parameters={...E.parameters,docs:{...(be=E.parameters)==null?void 0:be.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Chip
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Chip v-bind="args">\${args.default}</Chip>
    \`
  }),
  args: {
    class: 'bg-rose-700 text-white',
    disable: true,
    default: \`Bookmark\`
  }
}`,...(ke=(Ce=E.parameters)==null?void 0:Ce.docs)==null?void 0:ke.source}}};var xe,we,qe;R.parameters={...R.parameters,docs:{...(xe=R.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Chip
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Chip v-bind="args">\${args.default}</Chip>
    \`
  }),
  args: {
    class: 'bg-fuchsia-800 text-white',
    dense: true,
    default: \`Bookmark\`
  }
}`,...(qe=(we=R.parameters)==null?void 0:we.docs)==null?void 0:qe.source}}};var Be,$e,_e;S.parameters={...S.parameters,docs:{...(Be=S.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Chip,
      Icon
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Chip v-bind="args">\${args.default}</Chip>
      <Chip v-bind="args" size="sm">\${args.default}</Chip>
      <Chip v-bind="args" size="md">\${args.default}</Chip>
      <Chip v-bind="args" size="lg">\${args.default}</Chip>
      <Chip v-bind="args" size="xl">\${args.default}</Chip>
      <br />
      <Chip v-bind="args" dense >\${args.default}</Chip>
      <Chip v-bind="args" dense size="sm">\${args.default}</Chip>
      <Chip v-bind="args" dense size="md">\${args.default}</Chip>
      <Chip v-bind="args" dense size="lg">\${args.default}</Chip>
      <Chip v-bind="args" dense size="xl">\${args.default}</Chip>
    \`
  }),
  args: {
    class: 'bg-green-300 text-white',
    size: 'xs',
    default: \`<Icon filled name="bookmark" /> Bookmark\`
  }
}`,...(_e=($e=S.parameters)==null?void 0:$e.docs)==null?void 0:_e.source}}};var Ie,Ee,Re;z.parameters={...z.parameters,docs:{...(Ie=z.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Chip,
      Icon
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Chip v-bind="args">\${args.default}</Chip>
    \`
  }),
  args: {
    class: 'bg-green-300 text-white text-6xl',
    default: \`<Icon filled name="bookmark" /> Bookmark\`
  }
}`,...(Re=(Ee=z.parameters)==null?void 0:Ee.docs)==null?void 0:Re.source}}};var Se,ze,Pe;P.parameters={...P.parameters,docs:{...(Se=P.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Chip,
      Icon
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Chip v-bind="args">\${args.default}</Chip>
    \`
  }),
  args: {
    class: 'bg-purple-400',
    default: \`
      <Icon name="bluetooth" />
      Bluetooth
    \`
  }
}`,...(Pe=(ze=P.parameters)==null?void 0:ze.docs)==null?void 0:Pe.source}}};var We,Ve,Oe;W.parameters={...W.parameters,docs:{...(We=W.parameters)==null?void 0:We.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Chip,
      ChipIcon
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Chip v-model:selected="args.selected" v-bind="args">\${args.default}</Chip>
    \`
  }),
  args: {
    onClick: fn(),
    'onUpdate:selected': fn(),
    class: 'bg-lime-700',
    selected: false,
    default: \`
      <ChipIcon name="bluetooth"/>
      Bluetooth
    \`
  }
}`,...(Oe=(Ve=W.parameters)==null?void 0:Ve.docs)==null?void 0:Oe.source}}};var De,Le,Ne;V.parameters={...V.parameters,docs:{...(De=V.parameters)==null?void 0:De.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Chip,
      ChipIcon
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Chip v-model:selected="args.selected" v-bind="args">\${args.default}</Chip>
    \`
  }),
  args: {
    onClick: fn(),
    'onUpdate:selected': fn(),
    class: 'bg-gray-200',
    selected: true,
    default: \`
      <ChipIcon name="bluetooth" iconSelected="check_circle"/>
      Bluetooth
    \`
  }
}`,...(Ne=(Le=V.parameters)==null?void 0:Le.docs)==null?void 0:Ne.source}}};var je,Me,Te;O.parameters={...O.parameters,docs:{...(je=O.parameters)==null?void 0:je.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Chip,
      ChipIcon,
      ChipRemoveButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Chip v-model:selected="args.selected" v-bind="args">\${args.default}</Chip>
    \`
  }),
  args: {
    onClick: fn(),
    'onUpdate:selected': fn(),
    onRemove: fn(),
    'onUpdate:modelValue': fn(),
    class: 'bg-blue-400',
    selected: true,
    default: \`
      <ChipIcon name="bluetooth" iconSelected="check_circle"/>
      Bluetooth
      <ChipRemoveButton filled />
    \`
  }
}`,...(Te=(Me=O.parameters)==null?void 0:Me.docs)==null?void 0:Te.source}}};var Ue,Fe,Ke;D.parameters={...D.parameters,docs:{...(Ue=D.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Chip,
      ChipIcon,
      ChipRemoveButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Chip v-model:selected="args.selected" v-bind="args">\${args.default}</Chip>
    \`
  }),
  args: {
    onClick: fn(),
    'onUpdate:selected': fn(),
    onRemove: fn(),
    'onUpdate:modelValue': fn(),
    class: 'text-blue-600',
    selected: true,
    outline: true,
    default: \`
      <ChipIcon name="bluetooth" iconSelected="check_circle"/>
      Bluetooth
      <ChipRemoveButton filled />
    \`
  }
}`,...(Ke=(Fe=D.parameters)==null?void 0:Fe.docs)==null?void 0:Ke.source}}};const $a=["Basic","BasisCustomColors","Square","Outline","OutlineSquared","disabled","dense","DiffrentSizes","CustomSize","BasisWithIcon","BasisWithChipIcon","BasisWithChipCustomIcon","BasisWithChipWithRemove","OutlinedWithChipWithRemove"];export{q as Basic,B as BasisCustomColors,V as BasisWithChipCustomIcon,W as BasisWithChipIcon,O as BasisWithChipWithRemove,P as BasisWithIcon,z as CustomSize,S as DiffrentSizes,_ as Outline,I as OutlineSquared,D as OutlinedWithChipWithRemove,$ as Square,$a as __namedExportsOrder,Ba as default,R as dense,E as disabled};
