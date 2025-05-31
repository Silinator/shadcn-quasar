import{c as Ae,I as C,a as Qe}from"./Icon-CWK44FWs.js";import{d as H,c as Ze,q as X,l as ea,f as aa,s as ta,a as L,n as N,u as g,x as na,o as T,w as F,b as M,p as j,i as K,y as sa}from"./iframe-dsDNp8sV.js";import{P as ra}from"./Primitive-CQo_fuJn.js";var oa=Object.defineProperty,ia=Object.defineProperties,la=Object.getOwnPropertyDescriptors,J=Object.getOwnPropertySymbols,da=Object.prototype.hasOwnProperty,ca=Object.prototype.propertyIsEnumerable,Q=(e,t,a)=>t in e?oa(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,m=(e,t)=>{for(var a in t||(t={}))da.call(t,a)&&Q(e,a,t[a]);if(J)for(var a of J(t))ca.call(t,a)&&Q(e,a,t[a]);return e},He=(e,t)=>ia(e,la(t)),Ye={directive:"wave",color:"currentColor",initialOpacity:.2,finalOpacity:.1,duration:.4,dissolveDuration:.15,waitForRelease:!0,easing:"ease-out",cancellationPeriod:75,trigger:"auto",tagName:"div",disabled:!1,respectDisabledAttribute:!0,respectPrefersReducedMotion:!0,stopPropagation:!1},pa=e=>"config"in e&&"globalProperties"in e.config,ua=e=>{let t;return e==="vue2"?t=!1:e==="vue3"?t=!0:t=pa(e),t?{mounted:"mounted",updated:"updated"}:{mounted:"inserted",updated:"componentUpdated"}},Ge=e=>typeof e=="string"&&e!=="auto",Z=(e,t)=>{e.dataset.vWaveBoundary=Ge(t)?t:"true"},ma=({borderTopLeftRadius:e,borderTopRightRadius:t,borderBottomLeftRadius:a,borderBottomRightRadius:s},n)=>{const o=document.createElement(n);return o.style.top="0",o.style.left="0",o.style.width="100%",o.style.height="100%",o.style.display="block",o.style.position="absolute",o.style.borderRadius=`${e} ${t} ${s} ${a}`,o.style.overflow="hidden",o.style.pointerEvents="none",o.style.webkitMaskImage="-webkit-radial-gradient(white, black)",o.dataset.vWaveContainerInternal="true",o},fa=({x:e,y:t},a,s)=>{const n=document.createElement("div");return n.style.position="absolute",n.style.width=`${a}px`,n.style.height=`${a}px`,n.style.top=`${t}px`,n.style.left=`${e}px`,n.style.background=s.color,n.style.borderRadius="50%",n.style.opacity=`${s.initialOpacity}`,n.style.transform="translate(-50%,-50%) scale(0)",n.style.transition=`transform ${s.duration}s ${s.easing}, opacity ${s.duration}s ${s.easing}`,n};function w(e,t,a,s){const n=e-a,o=t-s;return Math.sqrt(n*n+o*o)}function ha({x:e,y:t},{width:a,height:s}){const n=w(e,t,0,0),o=w(e,t,a,0),u=w(e,t,0,s),r=w(e,t,a,s);return Math.max(n,o,u,r)}var ga=({x:e,y:t},{top:a,left:s})=>({x:e-s,y:t-a}),ya=(e,t)=>{t.position==="static"&&(["top","left","right","bottom"].forEach(a=>{t[a]&&t[a]!=="auto"&&console.warn("[v-wave]:",e,`You're using a \`static\` positioned element with a non-auto value (${t[a]}) for \`${a}\`.`,"It's position will be changed to relative while displaying the wave which might cause the element to visually jump.")}),e.dataset.originalPositionValue=e.style.position,e.style.position="relative")},ee=e=>{var t;e.style.position=(t=e.dataset.originalPositionValue)!=null?t:"",delete e.dataset.originalPositionValue},Y="vWaveCountInternal";function va(e){const t=U(e);Xe(e,t+1)}function ae(e){const t=U(e);Xe(e,t-1)}function Xe(e,t){e.dataset[Y]=t.toString()}function U(e){var t;return Number.parseInt((t=e.dataset[Y])!=null?t:"0",10)}function te(e){delete e.dataset[Y]}var ba=2.05,A=(e,t,a)=>{if(a.disabled||a.respectDisabledAttribute&&t.hasAttribute("disabled")||a.respectPrefersReducedMotion&&window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;const s=t.getBoundingClientRect(),n=window.getComputedStyle(t),o=ga(e,s),u=ba*ha(o,s),r=t.querySelector("[data-v-wave-container-internal]"),i=r??ma(n,a.tagName),l=fa(o,u,a);va(t),ya(t,n),i.appendChild(l),r||t.appendChild(i);let f=!a.waitForRelease;const c=b=>{typeof b<"u"&&(document.removeEventListener("pointerup",c),document.removeEventListener("pointercancel",c)),f?h():f=!0},h=()=>{l.style.transition=`opacity ${a.dissolveDuration}s linear`,l.style.opacity="0",setTimeout(()=>{l.remove(),ae(t),U(t)===0&&(te(t),i.remove(),ee(t))},a.dissolveDuration*1e3)};a.waitForRelease&&(document.addEventListener("pointerup",c),document.addEventListener("pointercancel",c));const y=setTimeout(()=>{document.removeEventListener("pointercancel",v),requestAnimationFrame(()=>{l.style.transform="translate(-50%,-50%) scale(1)",l.style.opacity=`${a.finalOpacity}`,setTimeout(()=>c(),a.duration*1e3)})},a.cancellationPeriod),v=()=>{clearTimeout(y),l.remove(),ae(t),U(t)===0&&(te(t),i.remove(),ee(t)),document.removeEventListener("pointerup",c),document.removeEventListener("pointercancel",c),document.removeEventListener("pointercancel",v)};document.addEventListener("pointercancel",v)},k=new WeakMap,Ca=(e,t)=>(a,s)=>{if(!k.has(t))return;const n=m(m({},e),k.get(t));if(n.stopPropagation&&a.stopPropagation(),n.trigger===!1)return A(a,t,n);if(Ge(n.trigger))return;const o=t.querySelector('[data-v-wave-trigger="true"]');!o&&n.trigger===!0||o&&!a.composedPath().includes(o)||A(s??a,t,He(m({},n),{waitForRelease:s?!1:n.waitForRelease}))},ne=(e={},t="vue3")=>{const a=m(m({},Ye),e),s=ua(t),n=r=>{if(r.detail!==0)return;const i=r.currentTarget,l=i.dataset.vWaveTrigger;document.querySelectorAll(`[data-v-wave-boundary="${l}"]`).forEach(c=>{const h=r.type==="click";let y;if(h){const b=i.getBoundingClientRect();y={x:b.left+b.width/2,y:b.top+b.height/2}}else y=r;const v=m(m({},a),k.get(c));A(y,c,He(m({},v),{waitForRelease:h?!1:v.waitForRelease}))})},o={[s.mounted](r,{value:i={}}){var l;k.set(r,i),Z(r,(l=i==null?void 0:i.trigger)!=null?l:a.trigger);const f=Ca(a,r);r.addEventListener("pointerdown",f),r.addEventListener("click",c=>{if(c.detail!==0)return;const h=r.getBoundingClientRect(),y={x:h.left+h.width/2,y:h.top+h.height/2};f(c,y)})},[s.updated](r,{value:i={}}){var l;k.set(r,i),Z(r,(l=i==null?void 0:i.trigger)!=null?l:a.trigger)}},u={[s.mounted](r,{arg:i="true"}){r.dataset.vWaveTrigger=i,i!=="true"&&(r.addEventListener("pointerdown",n),r.addEventListener("click",n))},[s.updated](r,{arg:i="true"}){r.dataset.vWaveTrigger=i,i==="true"?(r.removeEventListener("pointerdown",n),r.removeEventListener("click",n)):(r.addEventListener("pointerdown",n),r.addEventListener("click",n))}};return{wave:o,vWave:o,waveTrigger:u,vWaveTrigger:u}},ka={install(e,t={}){if(this.installed)return;this.installed=!0;const a=m(m({},Ye),t),{vWave:s,vWaveTrigger:n}=ne(a,e);e.directive(a.directive,s),e.directive(`${a.directive}-trigger`,n)},installed:!1,createLocalWaveDirective:ne},xa=ka;function wa(){const e=getComputedStyle(document.documentElement);return{initialOpacity:parseFloat(e.getPropertyValue("--ripple-initial-opacity"))||.3,finalOpacity:parseFloat(e.getPropertyValue("--ripple-final-opacity"))||.2,duration:parseFloat(e.getPropertyValue("--ripple-duration"))||.35}}const{wave:qa}=xa.createLocalWaveDirective(wa()),d=H({directives:{ripple:qa},__name:"Chip",props:{modelValue:{type:Boolean,default:!0},selected:{type:[Boolean,null],default:null},dense:{type:Boolean,default:!1},square:{type:Boolean,default:!1},outline:{type:Boolean,default:!1},clickable:{type:Boolean,default:!1},ripple:{type:Boolean,default:!0},disable:{type:Boolean,default:!1},size:{},class:{},asChild:{type:Boolean,default:!1},as:{default:"div"}},emits:["update:modelValue","update:selected","click","remove"],setup(e,{emit:t}){const a=e,s=Ze(()=>a.disable===!1&&(a.clickable===!0||a.selected!==null)),n=t;function o(l){if(!s.value)return;const f=a.selected!==!0;n("update:selected",f),n("click",l)}function u(){n("update:modelValue",!1),n("remove")}j("onRemove",u);const r=X(a,"selected");j("chipSelected",r);const i=X(a,"disable");return j("chipDisable",i),(l,f)=>{const c=ta("ripple");return a.modelValue?ea((T(),L(g(ra),{key:0,as:a.as,asChild:a.asChild,role:s.value?"button":void 0,"aria-disabled":a.disable?"true":void 0,tabindex:s.value?0:void 0,onClick:o,onKeyup:na(o,["enter"]),class:N(g(Ae)(g(Je)({dense:l.dense,square:l.square,outline:l.outline,size:l.size,isClickable:s.value,disable:i.value}),a.class))},{default:F(()=>[M(l.$slots,"default")]),_:3},8,["as","asChild","role","aria-disabled","tabindex","class"])),[[c,{...a.ripple&&!a.disable?{}:{disabled:!0}}]]):aa("",!0)}}});d.__docgenInfo={exportName:"default",displayName:"Chip",type:1,props:[{name:"square",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"false"},{name:"asChild",global:!1,description:`Change the default rendered element for the one passed as a child, merging their props and behavior.\r
\r
Read our [Composition](https://www.reka-ui.com/docs/guides/composition) guide for more details.`,tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"false"},{name:"as",global:!1,description:"The element or component this component should render as. Can be overwritten by `asChild`.",tags:[{name:"defaultValue",text:'"div"'}],required:!1,type:"string",declarations:[],schema:"string",default:'"div"'},{name:"modelValue",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"true"},{name:"selected",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"null"},{name:"dense",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"false"},{name:"outline",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"false"},{name:"ripple",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"true"},{name:"clickable",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"false"},{name:"disable",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"false"},{name:"size",global:!1,description:"",tags:[],required:!1,type:'"md" | "xs" | "sm" | "lg" | "xl"',declarations:[],schema:{kind:"enum",type:'"md" | "xs" | "sm" | "lg" | "xl"',schema:['"md"','"xs"','"sm"','"lg"','"xl"']}},{name:"class",global:!0,description:"",tags:[],required:!1,type:"any",declarations:[],schema:"any"},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[{name:"click",description:"",tags:[],type:"[event: MouseEvent | KeyboardEvent]",signature:'(event: "click", event: MouseEvent | KeyboardEvent): void',declarations:[],schema:[{kind:"enum",type:"MouseEvent | KeyboardEvent",schema:[{kind:"object",type:"MouseEvent"},{kind:"object",type:"KeyboardEvent"}]}]},{name:"update:modelValue",description:"",tags:[],type:"[val: boolean]",signature:'(event: "update:modelValue", val: boolean): void',declarations:[],schema:[{kind:"enum",type:"boolean",schema:["false","true"]}]},{name:"update:selected",description:"",tags:[],type:"[val: boolean]",signature:'(event: "update:selected", val: boolean): void',declarations:[],schema:[{kind:"enum",type:"boolean",schema:["false","true"]}]},{name:"remove",description:"",tags:[],type:"[]",signature:'(event: "remove"): void',declarations:[],schema:[]}],slots:[{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"square",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"asChild",type:"boolean",description:`Change the default rendered element for the one passed as a child, merging their props and behavior.\r
\r
Read our [Composition](https://www.reka-ui.com/docs/guides/composition) guide for more details.`,declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"as",type:"string",description:"The element or component this component should render as. Can be overwritten by `asChild`.",declarations:[],schema:"string"},{name:"modelValue",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"selected",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"dense",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"outline",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ripple",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"clickable",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"disable",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"size",type:'"md" | "xs" | "sm" | "lg" | "xl"',description:"",declarations:[],schema:{kind:"enum",type:'"md" | "xs" | "sm" | "lg" | "xl"',schema:['"md"','"xs"','"sm"','"lg"','"xl"']}},{name:"class",type:"any",description:"",declarations:[],schema:"any"}],sourceFiles:"D:/Side Projects/shadcn-quasar/src/components/ui/chip/Chip.vue"};const x=H({__name:"ChipIcon",props:{name:{},iconSelected:{default:"check"},variant:{default:"rounded"},filled:{type:Boolean,default:!1},size:{default:"inherit"},class:{}},setup(e){const t=K("chipSelected"),a=e;return(s,n)=>g(t)?(T(),L(g(C),{key:0,name:a.iconSelected,size:a.size,variant:a.variant,filled:a.filled,class:N(a.class)},{default:F(()=>[M(s.$slots,"default")]),_:3},8,["name","size","variant","filled","class"])):(T(),L(g(C),{key:1,name:a.name,variant:a.variant,filled:a.filled,size:a.size,class:N(a.class)},{default:F(()=>[M(s.$slots,"default")]),_:3},8,["name","variant","filled","size","class"]))}});x.__docgenInfo={exportName:"default",displayName:"ChipIcon",type:1,props:[{name:"name",global:!1,description:"",tags:[],required:!0,type:"string",declarations:[],schema:"string"},{name:"iconSelected",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'"check"'},{name:"variant",global:!1,description:"",tags:[],required:!1,type:"IconVariants",declarations:[],schema:{kind:"array",type:"IconVariants"},default:'"rounded"'},{name:"filled",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"false"},{name:"size",global:!1,description:"",tags:[],required:!1,type:"IconVariants",declarations:[],schema:{kind:"array",type:"IconVariants"},default:'"inherit"'},{name:"class",global:!0,description:"",tags:[],required:!1,type:"any",declarations:[],schema:"any"},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[],slots:[{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"size",type:"any",description:"",declarations:[],schema:"any"},{name:"variant",type:"any",description:"",declarations:[],schema:"any"},{name:"iconSelected",type:"string",description:"",declarations:[],schema:"string"},{name:"filled",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"class",type:"any",description:"",declarations:[],schema:"any"},{name:"name",type:"string",description:"",declarations:[],schema:"string"}],sourceFiles:"D:/Side Projects/shadcn-quasar/src/components/ui/chip/ChipIcon.vue"};const G=H({__name:"ChipRemoveButton",props:{name:{default:"cancel"},variant:{default:"rounded"},filled:{type:Boolean,default:!1},size:{default:"inherit"},class:{}},emits:["click"],setup(e,{emit:t}){const a=e,s=K("chipDisable"),n=K("onRemove"),o=t;function u(r){s!=null&&s.value||(o("click",r),n==null||n())}return(r,i)=>(T(),L(g(C),{onClick:sa(u,["stop"]),role:"button",tabindex:"0",name:a.name,variant:a.variant,filled:a.filled,size:a.size,class:N(g(Ae)("pointer-events-auto !-mr-2.5 cursor-pointer opacity-60 hover:opacity-100",a.class))},{default:F(()=>[M(r.$slots,"default")]),_:3},8,["name","variant","filled","size","class"]))}});G.__docgenInfo={exportName:"default",displayName:"ChipRemoveButton",type:1,props:[{name:"size",global:!1,description:"",tags:[],required:!1,type:"any",declarations:[],schema:"any",default:'"inherit"'},{name:"variant",global:!1,description:"",tags:[],required:!1,type:"any",declarations:[],schema:"any",default:'"rounded"'},{name:"name",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'"cancel"'},{name:"filled",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"false"},{name:"class",global:!0,description:"",tags:[],required:!1,type:"any",declarations:[],schema:"any"},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[{name:"click",description:"",tags:[],type:"[event: MouseEvent | KeyboardEvent]",signature:'(event: "click", event: MouseEvent | KeyboardEvent): void',declarations:[],schema:[{kind:"enum",type:"MouseEvent | KeyboardEvent",schema:[{kind:"object",type:"MouseEvent"},{kind:"object",type:"KeyboardEvent"}]}]}],slots:[{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"size",type:"any",description:"",declarations:[],schema:"any"},{name:"variant",type:"any",description:"",declarations:[],schema:"any"},{name:"name",type:"string",description:"",declarations:[],schema:"string"},{name:"filled",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"class",type:"any",description:"",declarations:[],schema:"any"}],sourceFiles:"D:/Side Projects/shadcn-quasar/src/components/ui/chip/ChipRemoveButton.vue"};const Je=Qe("bg-primary-foreground text-primary relative m-1 inline-flex max-w-full items-center gap-2 outline-0 [&>i]:-m-1 [&>i]:text-[1.5em]",{variants:{dense:{true:"h-[1.5em] px-[0.4em] py-0",false:"h-[2em] px-[0.9em] py-[0.5em]"},square:{true:"rounded-lg",false:""},outline:{true:"text-primary border border-current bg-transparent",false:""},size:{xs:"text-[8px]",sm:"text-xs",md:"text-base",lg:"text-xl",xl:"text-2xl"},isClickable:{true:"cursor-pointer select-none focus:shadow-sm focus:outline-none",false:""},disable:{true:"cursor-not-allowed opacity-60",false:""}},compoundVariants:[{dense:!1,square:!1,class:"rounded-2xl"},{dense:!0,square:!1,class:"rounded-xl"}],defaultVariants:{dense:!1,square:!1,outline:!1,size:"md",isClickable:!1,disable:!1}});Je.__docgenInfo={exportName:"chipVariants",displayName:"chipVariants",type:2,props:[{name:"dense",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"square",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"outline",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"size",global:!1,description:"",tags:[],required:!1,type:'"md" | "xs" | "sm" | "lg" | "xl"',declarations:[],schema:{kind:"enum",type:'"md" | "xs" | "sm" | "lg" | "xl"',schema:['"md"','"xs"','"sm"','"lg"','"xl"']}},{name:"isClickable",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"disable",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"class",global:!0,description:"",tags:[],required:!1,type:"ClassValue",declarations:[],schema:{kind:"enum",type:"ClassValue",schema:["string","number","bigint","false","true",{kind:"array",type:"ClassArray"},"ClassDictionary"]}},{name:"className",global:!1,description:"",tags:[],required:!1,type:"ClassValue",declarations:[],schema:{kind:"enum",type:"ClassValue",schema:["string","number","bigint","false","true",{kind:"array",type:"ClassArray"},"ClassDictionary"]}}],events:[],slots:[],exposed:[],sourceFiles:"D:/Side Projects/shadcn-quasar/src/components/ui/chip/index.ts"};const{fn:p}=__STORYBOOK_MODULE_TEST__,Ia={title:"UI/Chip",component:d,tags:["autodocs"]},q={render:e=>({components:{Chip:d},setup(){return{args:e}},template:`
      <Chip v-bind="args">${e.default}</Chip>
    `}),args:{class:"bg-blue-500 text-white",default:"#007ABF"}},B={render:e=>({components:{Chip:d},setup(){return{args:e}},template:`
      <Chip v-bind="args">${e.default}</Chip>
    `}),args:{class:"bg-orange-400 text-white",default:"Bookmark"}},_={render:e=>({components:{Chip:d},setup(){return{args:e}},template:`
      <Chip v-bind="args">${e.default}</Chip>
    `}),args:{class:"bg-red-500 text-white",square:!0,default:"Bookmark"}},$={render:e=>({components:{Chip:d},setup(){return{args:e}},template:`
      <Chip v-bind="args">${e.default}</Chip>
    `}),args:{class:"text-emerald-500",outline:!0,default:"Bookmark"}},I={render:e=>({components:{Chip:d},setup(){return{args:e}},template:`
      <Chip v-bind="args">${e.default}</Chip>
    `}),args:{class:"text-amber-700",outline:!0,square:!0,default:"Bookmark"}},E={render:e=>({components:{Chip:d},setup(){return{args:e}},template:`
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
}`,...(de=(le=B.parameters)==null?void 0:le.docs)==null?void 0:de.source}}};var ce,pe,ue;_.parameters={..._.parameters,docs:{...(ce=_.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(he=(fe=$.parameters)==null?void 0:fe.docs)==null?void 0:he.source}}};var ge,ye,ve;I.parameters={...I.parameters,docs:{...(ge=I.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(qe=(we=R.parameters)==null?void 0:we.docs)==null?void 0:qe.source}}};var Be,_e,$e;S.parameters={...S.parameters,docs:{...(Be=S.parameters)==null?void 0:Be.docs,source:{originalSource:`{
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
}`,...($e=(_e=S.parameters)==null?void 0:_e.docs)==null?void 0:$e.source}}};var Ie,Ee,Re;P.parameters={...P.parameters,docs:{...(Ie=P.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
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
}`,...(Re=(Ee=P.parameters)==null?void 0:Ee.docs)==null?void 0:Re.source}}};var Se,Pe,ze;z.parameters={...z.parameters,docs:{...(Se=z.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
}`,...(Ne=(Le=W.parameters)==null?void 0:Le.docs)==null?void 0:Ne.source}}};var Te,Fe,Me;O.parameters={...O.parameters,docs:{...(Te=O.parameters)==null?void 0:Te.docs,source:{originalSource:`{
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
}`,...(Me=(Fe=O.parameters)==null?void 0:Fe.docs)==null?void 0:Me.source}}};var Ue,je,Ke;D.parameters={...D.parameters,docs:{...(Ue=D.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
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
}`,...(Ke=(je=D.parameters)==null?void 0:je.docs)==null?void 0:Ke.source}}};const Ea=["Basic","BasisCustomColors","Square","Outline","OutlineSquared","disabled","dense","DiffrentSizes","CustomSize","BasisWithIcon","BasisWithChipIcon","BasisWithChipCustomIcon","BasisWithChipWithRemove","OutlinedWithChipWithRemove"];export{q as Basic,B as BasisCustomColors,W as BasisWithChipCustomIcon,V as BasisWithChipIcon,O as BasisWithChipWithRemove,z as BasisWithIcon,P as CustomSize,S as DiffrentSizes,$ as Outline,I as OutlineSquared,D as OutlinedWithChipWithRemove,_ as Square,Ea as __namedExportsOrder,Ia as default,R as dense,E as disabled};
