import{c as Ae,I as C,a as Qe}from"./Icon-CeZgD9zQ.js";import{d as H,a as Ze,y as X,q as ea,j as aa,z as ta,x as na,e as L,s as N,u as y,A as sa,o as T,p as j,b as M,w as U,i as K,B as ra}from"./iframe-IBiDiJ2h.js";var ia=Object.defineProperty,oa=Object.defineProperties,la=Object.getOwnPropertyDescriptors,J=Object.getOwnPropertySymbols,da=Object.prototype.hasOwnProperty,ca=Object.prototype.propertyIsEnumerable,Q=(e,a,t)=>a in e?ia(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,m=(e,a)=>{for(var t in a||(a={}))da.call(a,t)&&Q(e,t,a[t]);if(J)for(var t of J(a))ca.call(a,t)&&Q(e,t,a[t]);return e},He=(e,a)=>oa(e,la(a)),Ye={directive:"wave",color:"currentColor",initialOpacity:.2,finalOpacity:.1,duration:.4,dissolveDuration:.15,waitForRelease:!0,easing:"ease-out",cancellationPeriod:75,trigger:"auto",tagName:"div",disabled:!1,respectDisabledAttribute:!0,respectPrefersReducedMotion:!0,stopPropagation:!1},pa=e=>"config"in e&&"globalProperties"in e.config,ua=e=>{let a;return e==="vue2"?a=!1:e==="vue3"?a=!0:a=pa(e),a?{mounted:"mounted",updated:"updated"}:{mounted:"inserted",updated:"componentUpdated"}},Ge=e=>typeof e=="string"&&e!=="auto",Z=(e,a)=>{e.dataset.vWaveBoundary=Ge(a)?a:"true"},ma=({borderTopLeftRadius:e,borderTopRightRadius:a,borderBottomLeftRadius:t,borderBottomRightRadius:s},n)=>{const i=document.createElement(n);return i.style.top="0",i.style.left="0",i.style.width="100%",i.style.height="100%",i.style.display="block",i.style.position="absolute",i.style.borderRadius=`${e} ${a} ${s} ${t}`,i.style.overflow="hidden",i.style.pointerEvents="none",i.style.webkitMaskImage="-webkit-radial-gradient(white, black)",i.dataset.vWaveContainerInternal="true",i},fa=({x:e,y:a},t,s)=>{const n=document.createElement("div");return n.style.position="absolute",n.style.width=`${t}px`,n.style.height=`${t}px`,n.style.top=`${a}px`,n.style.left=`${e}px`,n.style.background=s.color,n.style.borderRadius="50%",n.style.opacity=`${s.initialOpacity}`,n.style.transform="translate(-50%,-50%) scale(0)",n.style.transition=`transform ${s.duration}s ${s.easing}, opacity ${s.duration}s ${s.easing}`,n};function w(e,a,t,s){const n=e-t,i=a-s;return Math.sqrt(n*n+i*i)}function ha({x:e,y:a},{width:t,height:s}){const n=w(e,a,0,0),i=w(e,a,t,0),u=w(e,a,0,s),r=w(e,a,t,s);return Math.max(n,i,u,r)}var ga=({x:e,y:a},{top:t,left:s})=>({x:e-s,y:a-t}),ya=(e,a)=>{a.position==="static"&&(["top","left","right","bottom"].forEach(t=>{a[t]&&a[t]!=="auto"&&console.warn("[v-wave]:",e,`You're using a \`static\` positioned element with a non-auto value (${a[t]}) for \`${t}\`.`,"It's position will be changed to relative while displaying the wave which might cause the element to visually jump.")}),e.dataset.originalPositionValue=e.style.position,e.style.position="relative")},ee=e=>{var a;e.style.position=(a=e.dataset.originalPositionValue)!=null?a:"",delete e.dataset.originalPositionValue},Y="vWaveCountInternal";function va(e){const a=F(e);Xe(e,a+1)}function ae(e){const a=F(e);Xe(e,a-1)}function Xe(e,a){e.dataset[Y]=a.toString()}function F(e){var a;return Number.parseInt((a=e.dataset[Y])!=null?a:"0",10)}function te(e){delete e.dataset[Y]}var ba=2.05,A=(e,a,t)=>{if(t.disabled||t.respectDisabledAttribute&&a.hasAttribute("disabled")||t.respectPrefersReducedMotion&&window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;const s=a.getBoundingClientRect(),n=window.getComputedStyle(a),i=ga(e,s),u=ba*ha(i,s),r=a.querySelector("[data-v-wave-container-internal]"),o=r??ma(n,t.tagName),l=fa(i,u,t);va(a),ya(a,n),o.appendChild(l),r||a.appendChild(o);let f=!t.waitForRelease;const c=b=>{typeof b<"u"&&(document.removeEventListener("pointerup",c),document.removeEventListener("pointercancel",c)),f?h():f=!0},h=()=>{l.style.transition=`opacity ${t.dissolveDuration}s linear`,l.style.opacity="0",setTimeout(()=>{l.remove(),ae(a),F(a)===0&&(te(a),o.remove(),ee(a))},t.dissolveDuration*1e3)};t.waitForRelease&&(document.addEventListener("pointerup",c),document.addEventListener("pointercancel",c));const g=setTimeout(()=>{document.removeEventListener("pointercancel",v),requestAnimationFrame(()=>{l.style.transform="translate(-50%,-50%) scale(1)",l.style.opacity=`${t.finalOpacity}`,setTimeout(()=>c(),t.duration*1e3)})},t.cancellationPeriod),v=()=>{clearTimeout(g),l.remove(),ae(a),F(a)===0&&(te(a),o.remove(),ee(a)),document.removeEventListener("pointerup",c),document.removeEventListener("pointercancel",c),document.removeEventListener("pointercancel",v)};document.addEventListener("pointercancel",v)},k=new WeakMap,Ca=(e,a)=>(t,s)=>{if(!k.has(a))return;const n=m(m({},e),k.get(a));if(n.stopPropagation&&t.stopPropagation(),n.trigger===!1)return A(t,a,n);if(Ge(n.trigger))return;const i=a.querySelector('[data-v-wave-trigger="true"]');!i&&n.trigger===!0||i&&!t.composedPath().includes(i)||A(s??t,a,He(m({},n),{waitForRelease:s?!1:n.waitForRelease}))},ne=(e={},a="vue3")=>{const t=m(m({},Ye),e),s=ua(a),n=r=>{if(r.detail!==0)return;const o=r.currentTarget,l=o.dataset.vWaveTrigger;document.querySelectorAll(`[data-v-wave-boundary="${l}"]`).forEach(c=>{const h=r.type==="click";let g;if(h){const b=o.getBoundingClientRect();g={x:b.left+b.width/2,y:b.top+b.height/2}}else g=r;const v=m(m({},t),k.get(c));A(g,c,He(m({},v),{waitForRelease:h?!1:v.waitForRelease}))})},i={[s.mounted](r,{value:o={}}){var l;k.set(r,o),Z(r,(l=o==null?void 0:o.trigger)!=null?l:t.trigger);const f=Ca(t,r);r.addEventListener("pointerdown",f),r.addEventListener("click",c=>{if(c.detail!==0)return;const h=r.getBoundingClientRect(),g={x:h.left+h.width/2,y:h.top+h.height/2};f(c,g)})},[s.updated](r,{value:o={}}){var l;k.set(r,o),Z(r,(l=o==null?void 0:o.trigger)!=null?l:t.trigger)}},u={[s.mounted](r,{arg:o="true"}){r.dataset.vWaveTrigger=o,o!=="true"&&(r.addEventListener("pointerdown",n),r.addEventListener("click",n))},[s.updated](r,{arg:o="true"}){r.dataset.vWaveTrigger=o,o==="true"?(r.removeEventListener("pointerdown",n),r.removeEventListener("click",n)):(r.addEventListener("pointerdown",n),r.addEventListener("click",n))}};return{wave:i,vWave:i,waveTrigger:u,vWaveTrigger:u}},ka={install(e,a={}){if(this.installed)return;this.installed=!0;const t=m(m({},Ye),a),{vWave:s,vWaveTrigger:n}=ne(t,e);e.directive(t.directive,s),e.directive(`${t.directive}-trigger`,n)},installed:!1,createLocalWaveDirective:ne},xa=ka;function wa(){const e=getComputedStyle(document.documentElement);return{initialOpacity:parseFloat(e.getPropertyValue("--ripple-initial-opacity"))||.3,finalOpacity:parseFloat(e.getPropertyValue("--ripple-final-opacity"))||.2,duration:parseFloat(e.getPropertyValue("--ripple-duration"))||.35}}const{wave:Ba}=xa.createLocalWaveDirective(wa()),qa=["role","aria-disabled","tabindex"],d=H({directives:{ripple:Ba},__name:"Chip",props:{modelValue:{type:Boolean,default:!0},selected:{type:[Boolean,null],default:null},dense:{type:Boolean,default:!1},square:{type:Boolean,default:!1},outline:{type:Boolean,default:!1},clickable:{type:Boolean,default:!1},ripple:{type:Boolean,default:!0},disable:{type:Boolean,default:!1},size:{},class:{}},emits:["update:modelValue","update:selected","click","remove"],setup(e,{emit:a}){const t=e,s=Ze(()=>t.disable===!1&&(t.clickable===!0||t.selected!==null)),n=a;function i(l){if(!s.value)return;const f=t.selected!==!0;n("update:selected",f),n("click",l)}function u(){n("update:modelValue",!1),n("remove")}j("onRemove",u);const r=X(t,"selected");j("chipSelected",r);const o=X(t,"disable");return j("chipDisable",o),(l,f)=>{const c=ta("ripple");return t.modelValue?ea((T(),na("div",{key:0,role:s.value?"button":void 0,"aria-disabled":t.disable?"true":void 0,tabindex:s.value?0:void 0,onClick:i,onKeyup:sa(i,["enter"]),class:N(y(Ae)(y(Je)({dense:l.dense,square:l.square,outline:l.outline,size:l.size,isClickable:s.value,disable:o.value}),t.class))},[L(l.$slots,"default")],42,qa)),[[c,{...t.ripple&&!t.disable?{}:{disabled:!0}}]]):aa("",!0)}}});d.__docgenInfo={exportName:"default",displayName:"Chip",type:1,props:[{name:"square",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"false"},{name:"modelValue",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"true"},{name:"selected",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"null"},{name:"dense",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"false"},{name:"outline",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"false"},{name:"ripple",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"true"},{name:"clickable",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"false"},{name:"disable",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"false"},{name:"size",global:!1,description:"",tags:[],required:!1,type:'"md" | "xs" | "sm" | "lg" | "xl"',declarations:[],schema:{kind:"enum",type:'"md" | "xs" | "sm" | "lg" | "xl"',schema:['"md"','"xs"','"sm"','"lg"','"xl"']}},{name:"class",global:!0,description:"",tags:[],required:!1,type:"any",declarations:[],schema:"any"},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[{name:"click",description:"",tags:[],type:"[event: MouseEvent | KeyboardEvent]",signature:'(event: "click", event: MouseEvent | KeyboardEvent): void',declarations:[],schema:[{kind:"enum",type:"MouseEvent | KeyboardEvent",schema:[{kind:"object",type:"MouseEvent"},{kind:"object",type:"KeyboardEvent"}]}]},{name:"update:modelValue",description:"",tags:[],type:"[val: boolean]",signature:'(event: "update:modelValue", val: boolean): void',declarations:[],schema:[{kind:"enum",type:"boolean",schema:["false","true"]}]},{name:"update:selected",description:"",tags:[],type:"[val: boolean]",signature:'(event: "update:selected", val: boolean): void',declarations:[],schema:[{kind:"enum",type:"boolean",schema:["false","true"]}]},{name:"remove",description:"",tags:[],type:"[]",signature:'(event: "remove"): void',declarations:[],schema:[]}],slots:[{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"square",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"modelValue",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"selected",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"dense",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"outline",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ripple",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"clickable",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"disable",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"size",type:'"md" | "xs" | "sm" | "lg" | "xl"',description:"",declarations:[],schema:{kind:"enum",type:'"md" | "xs" | "sm" | "lg" | "xl"',schema:['"md"','"xs"','"sm"','"lg"','"xl"']}},{name:"class",type:"any",description:"",declarations:[],schema:"any"}],sourceFiles:"D:/Side Projects/shadcn-quasar/src/components/ui/chip/Chip.vue"};const x=H({__name:"ChipIcon",props:{name:{},iconSelected:{default:"check"},variant:{default:"rounded"},filled:{type:Boolean,default:!1},size:{default:"inherit"},class:{}},setup(e){const a=K("chipSelected"),t=e;return(s,n)=>y(a)?(T(),M(y(C),{key:0,name:t.iconSelected,size:t.size,variant:t.variant,filled:t.filled,class:N(t.class)},{default:U(()=>[L(s.$slots,"default")]),_:3},8,["name","size","variant","filled","class"])):(T(),M(y(C),{key:1,name:t.name,variant:t.variant,filled:t.filled,size:t.size,class:N(t.class)},{default:U(()=>[L(s.$slots,"default")]),_:3},8,["name","variant","filled","size","class"]))}});x.__docgenInfo={exportName:"default",displayName:"ChipIcon",type:1,props:[{name:"name",global:!1,description:"",tags:[],required:!0,type:"string",declarations:[],schema:"string"},{name:"iconSelected",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'"check"'},{name:"variant",global:!1,description:"",tags:[],required:!1,type:"IconVariants",declarations:[],schema:{kind:"array",type:"IconVariants"},default:'"rounded"'},{name:"filled",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"false"},{name:"size",global:!1,description:"",tags:[],required:!1,type:"IconVariants",declarations:[],schema:{kind:"array",type:"IconVariants"},default:'"inherit"'},{name:"class",global:!0,description:"",tags:[],required:!1,type:"any",declarations:[],schema:"any"},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[],slots:[{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"size",type:"any",description:"",declarations:[],schema:"any"},{name:"variant",type:"any",description:"",declarations:[],schema:"any"},{name:"iconSelected",type:"string",description:"",declarations:[],schema:"string"},{name:"filled",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"class",type:"any",description:"",declarations:[],schema:"any"},{name:"name",type:"string",description:"",declarations:[],schema:"string"}],sourceFiles:"D:/Side Projects/shadcn-quasar/src/components/ui/chip/ChipIcon.vue"};const G=H({__name:"ChipRemoveButton",props:{name:{default:"cancel"},variant:{default:"rounded"},filled:{type:Boolean,default:!1},size:{default:"inherit"},class:{}},emits:["click"],setup(e,{emit:a}){const t=e,s=K("chipDisable"),n=K("onRemove"),i=a;function u(r){s!=null&&s.value||(i("click",r),n==null||n())}return(r,o)=>(T(),M(y(C),{onClick:ra(u,["stop"]),role:"button",tabindex:"0",name:t.name,variant:t.variant,filled:t.filled,size:t.size,class:N(y(Ae)("pointer-events-auto !-mr-2.5 cursor-pointer opacity-60 hover:opacity-100",t.class))},{default:U(()=>[L(r.$slots,"default")]),_:3},8,["name","variant","filled","size","class"]))}});G.__docgenInfo={exportName:"default",displayName:"ChipRemoveButton",type:1,props:[{name:"size",global:!1,description:"",tags:[],required:!1,type:"any",declarations:[],schema:"any",default:'"inherit"'},{name:"variant",global:!1,description:"",tags:[],required:!1,type:"any",declarations:[],schema:"any",default:'"rounded"'},{name:"name",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'"cancel"'},{name:"filled",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"false"},{name:"class",global:!0,description:"",tags:[],required:!1,type:"any",declarations:[],schema:"any"},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[{name:"click",description:"",tags:[],type:"[event: MouseEvent | KeyboardEvent]",signature:'(event: "click", event: MouseEvent | KeyboardEvent): void',declarations:[],schema:[{kind:"enum",type:"MouseEvent | KeyboardEvent",schema:[{kind:"object",type:"MouseEvent"},{kind:"object",type:"KeyboardEvent"}]}]}],slots:[{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"size",type:"any",description:"",declarations:[],schema:"any"},{name:"variant",type:"any",description:"",declarations:[],schema:"any"},{name:"name",type:"string",description:"",declarations:[],schema:"string"},{name:"filled",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"class",type:"any",description:"",declarations:[],schema:"any"}],sourceFiles:"D:/Side Projects/shadcn-quasar/src/components/ui/chip/ChipRemoveButton.vue"};const Je=Qe("bg-primary-foreground text-primary relative m-1 inline-flex max-w-full items-center gap-2 outline-0 [&>i]:-m-1 [&>i]:text-[1.5em]",{variants:{dense:{true:"h-[1.5em] px-[0.4em] py-0",false:"h-[2em] px-[0.9em] py-[0.5em]"},square:{true:"rounded-lg",false:""},outline:{true:"text-primary border border-current bg-transparent",false:""},size:{xs:"text-[8px]",sm:"text-xs",md:"text-base",lg:"text-xl",xl:"text-2xl"},isClickable:{true:"cursor-pointer select-none focus:shadow-sm focus:outline-none",false:""},disable:{true:"cursor-not-allowed opacity-60",false:""}},compoundVariants:[{dense:!1,square:!1,class:"rounded-2xl"},{dense:!0,square:!1,class:"rounded-xl"}],defaultVariants:{dense:!1,square:!1,outline:!1,size:"md",isClickable:!1,disable:!1}});Je.__docgenInfo={exportName:"chipVariants",displayName:"chipVariants",type:2,props:[{name:"dense",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"square",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"outline",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"size",global:!1,description:"",tags:[],required:!1,type:'"md" | "xs" | "sm" | "lg" | "xl"',declarations:[],schema:{kind:"enum",type:'"md" | "xs" | "sm" | "lg" | "xl"',schema:['"md"','"xs"','"sm"','"lg"','"xl"']}},{name:"isClickable",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"disable",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"class",global:!0,description:"",tags:[],required:!1,type:"ClassValue",declarations:[],schema:{kind:"enum",type:"ClassValue",schema:["string","number","bigint","false","true",{kind:"array",type:"ClassArray"},"ClassDictionary"]}},{name:"className",global:!1,description:"",tags:[],required:!1,type:"ClassValue",declarations:[],schema:{kind:"enum",type:"ClassValue",schema:["string","number","bigint","false","true",{kind:"array",type:"ClassArray"},"ClassDictionary"]}}],events:[],slots:[],exposed:[],sourceFiles:"D:/Side Projects/shadcn-quasar/src/components/ui/chip/index.ts"};const{fn:p}=__STORYBOOK_MODULE_TEST__,Ea={title:"UI/Chip",component:d,tags:["autodocs"]},B={render:e=>({components:{Chip:d},setup(){return{args:e}},template:`
      <Chip v-bind="args">${e.default}</Chip>
    `}),args:{class:"bg-blue-500 text-white",default:"#007ABF"}},q={render:e=>({components:{Chip:d},setup(){return{args:e}},template:`
      <Chip v-bind="args">${e.default}</Chip>
    `}),args:{class:"bg-orange-400 text-white",default:"Bookmark"}},_={render:e=>({components:{Chip:d},setup(){return{args:e}},template:`
      <Chip v-bind="args">${e.default}</Chip>
    `}),args:{class:"bg-red-500 text-white",square:!0,default:"Bookmark"}},$={render:e=>({components:{Chip:d},setup(){return{args:e}},template:`
      <Chip v-bind="args">${e.default}</Chip>
    `}),args:{class:"text-emerald-500",outline:!0,default:"Bookmark"}},E={render:e=>({components:{Chip:d},setup(){return{args:e}},template:`
      <Chip v-bind="args">${e.default}</Chip>
    `}),args:{class:"text-amber-700",outline:!0,square:!0,default:"Bookmark"}},I={render:e=>({components:{Chip:d},setup(){return{args:e}},template:`
      <Chip v-bind="args">${e.default}</Chip>
    `}),args:{class:"bg-rose-700 text-white",disable:!0,default:"Bookmark"}},R={render:e=>({components:{Chip:d},setup(){return{args:e}},template:`
      <Chip v-bind="args">${e.default}</Chip>
    `}),args:{class:"bg-fuchsia-800 text-white",dense:!0,default:"Bookmark"}},S={render:e=>({components:{Chip:d,Icon:C},setup(){return{args:e}},template:`
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
    `}),args:{class:"bg-green-300 text-white",size:"xs",default:'<Icon filled name="bookmark" /> Bookmark'}},P={render:e=>({components:{Chip:d,Icon:C},setup(){return{args:e}},template:`
      <Chip v-bind="args">${e.default}</Chip>
    `}),args:{class:"bg-green-300 text-white text-6xl",default:'<Icon filled name="bookmark" /> Bookmark'}},z={render:e=>({components:{Chip:d,Icon:C},setup(){return{args:e}},template:`
      <Chip v-bind="args">${e.default}</Chip>
    `}),args:{class:"bg-purple-400",default:`
      <Icon name="bluetooth" />
      Bluetooth
    `}},V={render:e=>({components:{Chip:d,ChipIcon:x},setup(){return{args:e}},template:`
      <Chip v-model:selected="args.selected" v-bind="args">${e.default}</Chip>
    `}),args:{onClick:p(),"onUpdate:selected":p(),class:"bg-lime-700",selected:!1,default:`
      <ChipIcon name="bluetooth"/>
      Bluetooth
    `}},W={render:e=>({components:{Chip:d,ChipIcon:x},setup(){return{args:e}},template:`
      <Chip v-model:selected="args.selected" v-bind="args">${e.default}</Chip>
    `}),args:{onClick:p(),"onUpdate:selected":p(),class:"bg-gray-200",selected:!0,default:`
      <ChipIcon name="bluetooth" iconSelected="check_circle"/>
      Bluetooth
    `}},O={render:e=>({components:{Chip:d,ChipIcon:x,ChipRemoveButton:G},setup(){return{args:e}},template:`
      <Chip v-model:selected="args.selected" v-bind="args">${e.default}</Chip>
    `}),args:{onClick:p(),"onUpdate:selected":p(),onRemove:p(),"onUpdate:modelValue":p(),class:"bg-blue-400",selected:!0,default:`
      <ChipIcon name="bluetooth" iconSelected="check_circle"/>
      Bluetooth
      <ChipRemoveButton filled />
    `}},D={render:e=>({components:{Chip:d,ChipIcon:x,ChipRemoveButton:G},setup(){return{args:e}},template:`
      <Chip v-model:selected="args.selected" v-bind="args">${e.default}</Chip>
    `}),args:{onClick:p(),"onUpdate:selected":p(),onRemove:p(),"onUpdate:modelValue":p(),class:"text-blue-600",selected:!0,outline:!0,default:`
      <ChipIcon name="bluetooth" iconSelected="check_circle"/>
      Bluetooth
      <ChipRemoveButton filled />
    `}};var se,re,ie;B.parameters={...B.parameters,docs:{...(se=B.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(ie=(re=B.parameters)==null?void 0:re.docs)==null?void 0:ie.source}}};var oe,le,de;q.parameters={...q.parameters,docs:{...(oe=q.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(de=(le=q.parameters)==null?void 0:le.docs)==null?void 0:de.source}}};var ce,pe,ue;_.parameters={..._.parameters,docs:{...(ce=_.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(ue=(pe=_.parameters)==null?void 0:pe.docs)==null?void 0:ue.source}}};var me,fe,he;$.parameters={...$.parameters,docs:{...(me=$.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(he=(fe=$.parameters)==null?void 0:fe.docs)==null?void 0:he.source}}};var ge,ye,ve;E.parameters={...E.parameters,docs:{...(ge=E.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(ve=(ye=E.parameters)==null?void 0:ye.docs)==null?void 0:ve.source}}};var be,Ce,ke;I.parameters={...I.parameters,docs:{...(be=I.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
}`,...(ke=(Ce=I.parameters)==null?void 0:Ce.docs)==null?void 0:ke.source}}};var xe,we,Be;R.parameters={...R.parameters,docs:{...(xe=R.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
}`,...(Be=(we=R.parameters)==null?void 0:we.docs)==null?void 0:Be.source}}};var qe,_e,$e;S.parameters={...S.parameters,docs:{...(qe=S.parameters)==null?void 0:qe.docs,source:{originalSource:`{
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
}`,...($e=(_e=S.parameters)==null?void 0:_e.docs)==null?void 0:$e.source}}};var Ee,Ie,Re;P.parameters={...P.parameters,docs:{...(Ee=P.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
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
}`,...(Re=(Ie=P.parameters)==null?void 0:Ie.docs)==null?void 0:Re.source}}};var Se,Pe,ze;z.parameters={...z.parameters,docs:{...(Se=z.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
}`,...(ze=(Pe=z.parameters)==null?void 0:Pe.docs)==null?void 0:ze.source}}};var Ve,We,Oe;V.parameters={...V.parameters,docs:{...(Ve=V.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
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
}`,...(Oe=(We=V.parameters)==null?void 0:We.docs)==null?void 0:Oe.source}}};var De,Le,Ne;W.parameters={...W.parameters,docs:{...(De=W.parameters)==null?void 0:De.docs,source:{originalSource:`{
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
}`,...(Ne=(Le=W.parameters)==null?void 0:Le.docs)==null?void 0:Ne.source}}};var Te,Fe,je;O.parameters={...O.parameters,docs:{...(Te=O.parameters)==null?void 0:Te.docs,source:{originalSource:`{
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
}`,...(je=(Fe=O.parameters)==null?void 0:Fe.docs)==null?void 0:je.source}}};var Me,Ue,Ke;D.parameters={...D.parameters,docs:{...(Me=D.parameters)==null?void 0:Me.docs,source:{originalSource:`{
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
}`,...(Ke=(Ue=D.parameters)==null?void 0:Ue.docs)==null?void 0:Ke.source}}};const Ia=["Basic","BasisCustomColors","Square","Outline","OutlineSquared","disabled","dense","DiffrentSizes","CustomSize","BasisWithIcon","BasisWithChipIcon","BasisWithChipCustomIcon","BasisWithChipWithRemove","OutlinedWithChipWithRemove"];export{B as Basic,q as BasisCustomColors,W as BasisWithChipCustomIcon,V as BasisWithChipIcon,O as BasisWithChipWithRemove,z as BasisWithIcon,P as CustomSize,S as DiffrentSizes,$ as Outline,E as OutlineSquared,D as OutlinedWithChipWithRemove,_ as Square,Ia as __namedExportsOrder,Ea as default,R as dense,I as disabled};
