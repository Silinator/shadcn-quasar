import{a as me,I,c as Ce}from"./Icon-B5wH_WmI.js";import{d as z,f as ke,t as M,g as qe,j as we,u as y,b as _e,e as P,n as R,o as W,p as O,k as S,l as D,m as L,q as xe}from"./vue.esm-bundler-egrY_yfx.js";import{f}from"./index-fRFe1AOP.js";var Ee=Object.defineProperty,Be=Object.defineProperties,Ie=Object.getOwnPropertyDescriptors,T=Object.getOwnPropertySymbols,Pe=Object.prototype.hasOwnProperty,Re=Object.prototype.propertyIsEnumerable,F=(e,a,t)=>a in e?Ee(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,m=(e,a)=>{for(var t in a||(a={}))Pe.call(a,t)&&F(e,t,a[t]);if(T)for(var t of T(a))Re.call(a,t)&&F(e,t,a[t]);return e},fe=(e,a)=>Be(e,Ie(a)),ye={directive:"wave",color:"currentColor",initialOpacity:.2,finalOpacity:.1,duration:.4,dissolveDuration:.15,waitForRelease:!0,easing:"ease-out",cancellationPeriod:75,trigger:"auto",tagName:"div",disabled:!1,respectDisabledAttribute:!0,respectPrefersReducedMotion:!0,stopPropagation:!1},We=e=>"config"in e&&"globalProperties"in e.config,Ve=e=>{let a;return e==="vue2"?a=!1:e==="vue3"?a=!0:a=We(e),a?{mounted:"mounted",updated:"updated"}:{mounted:"inserted",updated:"componentUpdated"}},ge=e=>typeof e=="string"&&e!=="auto",K=(e,a)=>{e.dataset.vWaveBoundary=ge(a)?a:"true"},$e=({borderTopLeftRadius:e,borderTopRightRadius:a,borderBottomLeftRadius:t,borderBottomRightRadius:s},n)=>{const o=document.createElement(n);return o.style.top="0",o.style.left="0",o.style.width="100%",o.style.height="100%",o.style.display="block",o.style.position="absolute",o.style.borderRadius=`${e} ${a} ${s} ${t}`,o.style.overflow="hidden",o.style.pointerEvents="none",o.style.webkitMaskImage="-webkit-radial-gradient(white, black)",o.dataset.vWaveContainerInternal="true",o},Oe=({x:e,y:a},t,s)=>{const n=document.createElement("div");return n.style.position="absolute",n.style.width=`${t}px`,n.style.height=`${t}px`,n.style.top=`${a}px`,n.style.left=`${e}px`,n.style.background=s.color,n.style.borderRadius="50%",n.style.opacity=`${s.initialOpacity}`,n.style.transform="translate(-50%,-50%) scale(0)",n.style.transition=`transform ${s.duration}s ${s.easing}, opacity ${s.duration}s ${s.easing}`,n};function k(e,a,t,s){const n=e-t,o=a-s;return Math.sqrt(n*n+o*o)}function Se({x:e,y:a},{width:t,height:s}){const n=k(e,a,0,0),o=k(e,a,t,0),u=k(e,a,0,s),r=k(e,a,t,s);return Math.max(n,o,u,r)}var De=({x:e,y:a},{top:t,left:s})=>({x:e-s,y:a-t}),Le=(e,a)=>{a.position==="static"&&(["top","left","right","bottom"].forEach(t=>{a[t]&&a[t]!=="auto"&&console.warn("[v-wave]:",e,`You're using a \`static\` positioned element with a non-auto value (${a[t]}) for \`${t}\`.`,"It's position will be changed to relative while displaying the wave which might cause the element to visually jump.")}),e.dataset.originalPositionValue=e.style.position,e.style.position="relative")},A=e=>{var a;e.style.position=(a=e.dataset.originalPositionValue)!=null?a:"",delete e.dataset.originalPositionValue},j="vWaveCountInternal";function Ne(e){const a=V(e);he(e,a+1)}function U(e){const a=V(e);he(e,a-1)}function he(e,a){e.dataset[j]=a.toString()}function V(e){var a;return Number.parseInt((a=e.dataset[j])!=null?a:"0",10)}function H(e){delete e.dataset[j]}var ze=2.05,N=(e,a,t)=>{if(t.disabled||t.respectDisabledAttribute&&a.hasAttribute("disabled")||t.respectPrefersReducedMotion&&window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;const s=a.getBoundingClientRect(),n=window.getComputedStyle(a),o=De(e,s),u=ze*Se(o,s),r=a.querySelector("[data-v-wave-container-internal]"),i=r??$e(n,t.tagName),c=Oe(o,u,t);Ne(a),Le(a,n),i.appendChild(c),r||a.appendChild(i);let p=!t.waitForRelease;const l=b=>{typeof b<"u"&&(document.removeEventListener("pointerup",l),document.removeEventListener("pointercancel",l)),p?d():p=!0},d=()=>{c.style.transition=`opacity ${t.dissolveDuration}s linear`,c.style.opacity="0",setTimeout(()=>{c.remove(),U(a),V(a)===0&&(H(a),i.remove(),A(a))},t.dissolveDuration*1e3)};t.waitForRelease&&(document.addEventListener("pointerup",l),document.addEventListener("pointercancel",l));const h=setTimeout(()=>{document.removeEventListener("pointercancel",v),requestAnimationFrame(()=>{c.style.transform="translate(-50%,-50%) scale(1)",c.style.opacity=`${t.finalOpacity}`,setTimeout(()=>l(),t.duration*1e3)})},t.cancellationPeriod),v=()=>{clearTimeout(h),c.remove(),U(a),V(a)===0&&(H(a),i.remove(),A(a)),document.removeEventListener("pointerup",l),document.removeEventListener("pointercancel",l),document.removeEventListener("pointercancel",v)};document.addEventListener("pointercancel",v)},C=new WeakMap,je=(e,a)=>(t,s)=>{if(!C.has(a))return;const n=m(m({},e),C.get(a));if(n.stopPropagation&&t.stopPropagation(),n.trigger===!1)return N(t,a,n);if(ge(n.trigger))return;const o=a.querySelector('[data-v-wave-trigger="true"]');!o&&n.trigger===!0||o&&!t.composedPath().includes(o)||N(s??t,a,fe(m({},n),{waitForRelease:s?!1:n.waitForRelease}))},Y=(e={},a="vue3")=>{const t=m(m({},ye),e),s=Ve(a),n=r=>{if(r.detail!==0)return;const i=r.currentTarget,c=i.dataset.vWaveTrigger;document.querySelectorAll(`[data-v-wave-boundary="${c}"]`).forEach(l=>{const d=r.type==="click";let h;if(d){const b=i.getBoundingClientRect();h={x:b.left+b.width/2,y:b.top+b.height/2}}else h=r;const v=m(m({},t),C.get(l));N(h,l,fe(m({},v),{waitForRelease:d?!1:v.waitForRelease}))})},o={[s.mounted](r,{value:i={}}){var c;C.set(r,i),K(r,(c=i==null?void 0:i.trigger)!=null?c:t.trigger);const p=je(t,r);r.addEventListener("pointerdown",p),r.addEventListener("click",l=>{if(l.detail!==0)return;const d=r.getBoundingClientRect(),h={x:d.left+d.width/2,y:d.top+d.height/2};p(l,h)})},[s.updated](r,{value:i={}}){var c;C.set(r,i),K(r,(c=i==null?void 0:i.trigger)!=null?c:t.trigger)}},u={[s.mounted](r,{arg:i="true"}){r.dataset.vWaveTrigger=i,i!=="true"&&(r.addEventListener("pointerdown",n),r.addEventListener("click",n))},[s.updated](r,{arg:i="true"}){r.dataset.vWaveTrigger=i,i==="true"?(r.removeEventListener("pointerdown",n),r.removeEventListener("click",n)):(r.addEventListener("pointerdown",n),r.addEventListener("click",n))}};return{wave:o,vWave:o,waveTrigger:u,vWaveTrigger:u}},Me={install(e,a={}){if(this.installed)return;this.installed=!0;const t=m(m({},ye),a),{vWave:s,vWaveTrigger:n}=Y(t,e);e.directive(t.directive,s),e.directive(`${t.directive}-trigger`,n)},installed:!1,createLocalWaveDirective:Y},Te=Me;const Fe=["role","aria-disabled","tabindex"],g=z({__name:"Chip",props:{modelValue:{type:Boolean,default:!0},selected:{type:[Boolean,null],default:null},dense:{type:Boolean,default:!1},square:{type:Boolean,default:!1},outline:{type:Boolean,default:!1},clickable:{type:Boolean,default:!1},ripple:{type:Boolean,default:!0},disable:{type:Boolean,default:!1},size:{},class:{}},emits:["update:modelValue","update:selected","click","remove"],setup(e,{emit:a}){const t=e,{wave:s}=Te.createLocalWaveDirective({initialOpacity:.3,finalOpacity:.2,duration:.35}),n=ke(()=>t.disable===!1&&(t.clickable===!0||t.selected!==null)),o=a;function u(l){l.key==="Enter"&&r(l)}function r(l){if(!n.value)return;const d=t.selected!==!0;o("update:selected",d),o("click",l)}function i(){o("update:modelValue",!1),o("remove")}O("onRemove",i);const c=M(t,"selected"),p=M(t,"disable");return O("chipSelected",c),O("chipDisable",p),(l,d)=>t.modelValue?qe((W(),_e("div",{key:0,role:n.value?"button":void 0,"aria-disabled":t.disable?"true":void 0,tabindex:n.value?0:void 0,onClick:r,onKeyup:u,class:R(y(me)(y(be)({dense:l.dense,square:l.square,outline:l.outline,isClickable:n.value,disable:p.value}),t.class))},[P(l.$slots,"default")],42,Fe)),[[y(s),{...l.ripple&&!p.value?{}:{disabled:!0}}]]):we("",!0)}});g.__docgenInfo={exportName:"default",displayName:"Chip",type:1,props:[{name:"modelValue",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"true"},{name:"selected",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"null"},{name:"dense",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"false"},{name:"square",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"false"},{name:"outline",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"false"},{name:"ripple",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"true"},{name:"clickable",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"false"},{name:"disable",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"false"},{name:"size",global:!1,description:"",tags:[],required:!1,type:'"xs" | "sm" | "md" | "lg" | "xl"',declarations:[],schema:{kind:"enum",type:'"xs" | "sm" | "md" | "lg" | "xl"',schema:['"xs"','"sm"','"md"','"lg"','"xl"']}},{name:"class",global:!0,description:"",tags:[],required:!1,type:"any",declarations:[],schema:"any"},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[{name:"click",description:"",tags:[],type:"[event: MouseEvent | KeyboardEvent]",signature:'(event: "click", event: MouseEvent | KeyboardEvent): void',declarations:[],schema:[{kind:"enum",type:"MouseEvent | KeyboardEvent",schema:[{kind:"object",type:"MouseEvent"},{kind:"object",type:"KeyboardEvent"}]}]},{name:"update:modelValue",description:"",tags:[],type:"[val: boolean]",signature:'(event: "update:modelValue", val: boolean): void',declarations:[],schema:[{kind:"enum",type:"boolean",schema:["false","true"]}]},{name:"update:selected",description:"",tags:[],type:"[val: boolean]",signature:'(event: "update:selected", val: boolean): void',declarations:[],schema:[{kind:"enum",type:"boolean",schema:["false","true"]}]},{name:"remove",description:"",tags:[],type:"[]",signature:'(event: "remove"): void',declarations:[],schema:[]}],slots:[{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"modelValue",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"selected",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"dense",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"square",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"outline",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ripple",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"clickable",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"disable",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"size",type:'"xs" | "sm" | "md" | "lg" | "xl"',description:"",declarations:[],schema:{kind:"enum",type:'"xs" | "sm" | "md" | "lg" | "xl"',schema:['"xs"','"sm"','"md"','"lg"','"xl"']}},{name:"class",type:"any",description:"",declarations:[],schema:"any"}],sourceFiles:"D:/Side Projects/shadcn-quasar/src/components/ui/chip/Chip.vue"};const $=z({__name:"ChipIcon",props:{name:{},iconSelected:{default:"check"},variant:{default:"rounded"},filled:{type:Boolean,default:!1},size:{default:"inherit"},class:{}},setup(e){const a=L("chipSelected"),t=e;return(s,n)=>y(a)?(W(),S(y(I),{key:0,name:t.iconSelected,size:t.size,variant:t.variant,filled:t.filled,class:R(t.class)},{default:D(()=>[P(s.$slots,"default")]),_:3},8,["name","size","variant","filled","class"])):(W(),S(y(I),{key:1,name:t.name,variant:t.variant,filled:t.filled,size:t.size,class:R(t.class)},{default:D(()=>[P(s.$slots,"default")]),_:3},8,["name","variant","filled","size","class"]))}});$.__docgenInfo={exportName:"default",displayName:"ChipIcon",type:1,props:[{name:"name",global:!1,description:"",tags:[],required:!0,type:"string",declarations:[],schema:"string"},{name:"iconSelected",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'"check"'},{name:"variant",global:!1,description:"",tags:[],required:!1,type:"IconVariants",declarations:[],schema:{kind:"array",type:"IconVariants"},default:'"rounded"'},{name:"filled",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"false"},{name:"size",global:!1,description:"",tags:[],required:!1,type:"IconVariants",declarations:[],schema:{kind:"array",type:"IconVariants"},default:'"inherit"'},{name:"class",global:!0,description:"",tags:[],required:!1,type:"any",declarations:[],schema:"any"},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[],slots:[{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"size",type:"any",description:"",declarations:[],schema:"any"},{name:"iconSelected",type:"string",description:"",declarations:[],schema:"string"},{name:"filled",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"variant",type:"any",description:"",declarations:[],schema:"any"},{name:"class",type:"any",description:"",declarations:[],schema:"any"},{name:"name",type:"string",description:"",declarations:[],schema:"string"}],sourceFiles:"D:/Side Projects/shadcn-quasar/src/components/ui/chip/ChipIcon.vue"};const ve=z({__name:"ChipRemoveButton",props:{name:{default:"cancel"},variant:{default:"rounded"},filled:{type:Boolean,default:!1},size:{default:"inherit"},class:{}},emits:["click"],setup(e,{emit:a}){const t=e,s=L("chipDisable"),n=L("onRemove"),o=a;function u(r){s!=null&&s.value||(o("click",r),n==null||n())}return(r,i)=>(W(),S(y(I),{onClick:xe(u,["stop"]),role:"button",tabindex:"0",name:t.name,variant:t.variant,filled:t.filled,size:t.size,class:R(y(me)("pointer-events-auto !-mr-2.5 cursor-pointer opacity-60 hover:opacity-100",t.class))},{default:D(()=>[P(r.$slots,"default")]),_:3},8,["name","variant","filled","size","class"]))}});ve.__docgenInfo={exportName:"default",displayName:"ChipRemoveButton",type:1,props:[{name:"size",global:!1,description:"",tags:[],required:!1,type:"any",declarations:[],schema:"any",default:'"inherit"'},{name:"name",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'"cancel"'},{name:"filled",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"false"},{name:"variant",global:!1,description:"",tags:[],required:!1,type:"any",declarations:[],schema:"any",default:'"rounded"'},{name:"class",global:!0,description:"",tags:[],required:!1,type:"any",declarations:[],schema:"any"},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[{name:"click",description:"",tags:[],type:"[event: MouseEvent | KeyboardEvent]",signature:'(event: "click", event: MouseEvent | KeyboardEvent): void',declarations:[],schema:[{kind:"enum",type:"MouseEvent | KeyboardEvent",schema:[{kind:"object",type:"MouseEvent"},{kind:"object",type:"KeyboardEvent"}]}]}],slots:[{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"size",type:"any",description:"",declarations:[],schema:"any"},{name:"name",type:"string",description:"",declarations:[],schema:"string"},{name:"filled",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"variant",type:"any",description:"",declarations:[],schema:"any"},{name:"class",type:"any",description:"",declarations:[],schema:"any"}],sourceFiles:"D:/Side Projects/shadcn-quasar/src/components/ui/chip/ChipRemoveButton.vue"};const be=Ce("bg-primary-foreground text-primary relative m-1 inline-flex max-w-full items-center gap-2 outline-0 [&>i]:-m-1 [&>i]:text-[1.5em]",{variants:{dense:{true:"h-5 px-0.5 py-0",false:"h-7 px-3 py-2"},square:{true:"rounded-lg",false:""},outline:{true:"text-primary border border-current bg-transparent",false:""},size:{xs:"text-[8px]",sm:"text-xs",md:"text-base",lg:"text-xl",xl:"text-2xl"},isClickable:{true:"cursor-pointer select-none focus:shadow-sm focus:outline-none",false:""},disable:{true:"cursor-not-allowed opacity-60",false:""}},compoundVariants:[{dense:!1,square:!1,class:"rounded-2xl"},{dense:!0,square:!1,class:"rounded-xl"}],defaultVariants:{dense:!1,square:!1,outline:!1,size:"md",isClickable:!1,disable:!1}});be.__docgenInfo={exportName:"chipVariants",displayName:"chipVariants",type:2,props:[{name:"dense",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"square",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"outline",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"size",global:!1,description:"",tags:[],required:!1,type:'"xs" | "sm" | "md" | "lg" | "xl"',declarations:[],schema:{kind:"enum",type:'"xs" | "sm" | "md" | "lg" | "xl"',schema:['"xs"','"sm"','"md"','"lg"','"xl"']}},{name:"isClickable",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"disable",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"class",global:!0,description:"",tags:[],required:!1,type:"ClassValue",declarations:[],schema:{kind:"enum",type:"ClassValue",schema:["string","number","bigint","false","true",{kind:"array",type:"ClassArray"},"ClassDictionary"]}},{name:"className",global:!1,description:"",tags:[],required:!1,type:"ClassValue",declarations:[],schema:{kind:"enum",type:"ClassValue",schema:["string","number","bigint","false","true",{kind:"array",type:"ClassArray"},"ClassDictionary"]}}],events:[],slots:[],exposed:[],sourceFiles:"D:/Side Projects/shadcn-quasar/src/components/ui/chip/index.ts"};const He={title:"UI/Chip",component:g,tags:["autodocs"]},q={render:e=>({components:{Chip:g},setup(){return{args:e}},template:`
      <Chip v-bind="args">${e.default}</Chip>
    `}),args:{default:"#007ABF"}},w={render:e=>({components:{Chip:g},setup(){return{args:e}},template:`
      <Chip v-bind="args">${e.default}</Chip>
    `}),args:{class:"bg-orange-400 text-white",default:"Bookmark"}},_={render:e=>({components:{Chip:g,Icon:I},setup(){return{args:e}},template:`
      <Chip v-bind="args">${e.default}</Chip>
    `}),args:{class:"bg-purple-400",default:`
      <Icon name="bluetooth" />
      Bluetooth
    `}},x={render:e=>({components:{Chip:g,ChipIcon:$},setup(){return{args:e}},template:`
      <Chip v-model:selected="args.selected" v-bind="args">${e.default}</Chip>
    `}),args:{onClick:f(),"onUpdate:selected":f(),class:"bg-lime-700",selected:!1,default:`
      <ChipIcon name="bluetooth"/>
      Bluetooth
    `}},E={render:e=>({components:{Chip:g,ChipIcon:$},setup(){return{args:e}},template:`
      <Chip v-model:selected="args.selected" v-bind="args">${e.default}</Chip>
    `}),args:{onClick:f(),"onUpdate:selected":f(),class:"bg-gray-200",selected:!0,default:`
      <ChipIcon name="bluetooth" iconSelected="check_circle"/>
      Bluetooth
    `}},B={render:e=>({components:{Chip:g,ChipIcon:$,ChipRemoveButton:ve},setup(){return{args:e}},template:`
      <Chip v-model:selected="args.selected" v-bind="args">${e.default}</Chip>
    `}),args:{onClick:f(),"onUpdate:selected":f(),onRemove:f(),"onUpdate:modelValue":f(),class:"bg-blue-400",selected:!0,default:`
      <ChipIcon name="bluetooth" iconSelected="check_circle"/>
      Bluetooth
      <ChipRemoveButton filled />
    `}};var G,X,J;q.parameters={...q.parameters,docs:{...(G=q.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
    default: \`#007ABF\`
  }
}`,...(J=(X=q.parameters)==null?void 0:X.docs)==null?void 0:J.source}}};var Q,Z,ee;w.parameters={...w.parameters,docs:{...(Q=w.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(ee=(Z=w.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ae,te,ne;_.parameters={..._.parameters,docs:{...(ae=_.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(ne=(te=_.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var se,re,oe;x.parameters={...x.parameters,docs:{...(se=x.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(oe=(re=x.parameters)==null?void 0:re.docs)==null?void 0:oe.source}}};var ie,le,ce;E.parameters={...E.parameters,docs:{...(ie=E.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(ce=(le=E.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};var de,ue,pe;B.parameters={...B.parameters,docs:{...(de=B.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(pe=(ue=B.parameters)==null?void 0:ue.docs)==null?void 0:pe.source}}};const Ye=["Basic","BasisCustomColors","BasisWithIcon","BasisWithChipIcon","BasisWithChipCustomIcon","BasisWithChipWithRemove"];export{q as Basic,w as BasisCustomColors,E as BasisWithChipCustomIcon,x as BasisWithChipIcon,B as BasisWithChipWithRemove,_ as BasisWithIcon,Ye as __namedExportsOrder,He as default};
