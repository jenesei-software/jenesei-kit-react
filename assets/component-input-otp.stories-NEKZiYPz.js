import{c as z,d as S,K as B,l as j,r as c,n as P,j as s,g as R}from"./iframe-1BJ3w_50.js";import{E as O}from"./component-BgnCZAcu.js";import{I as _}from"./component-OXxxaFMG.js";import{W as q}from"./tools-C97HNiZn.js";import"./preload-helper-C1FmrZbK.js";import"./motion-BWMfmUrw.js";const $=j`
  ${e=>j`
  gap: ${B[e.$size].padding-2}px;
  width: 100%;
  `}
`,F=S.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  ${$};
  ${z};
`,g=e=>{const[h,p]=c.useState(new Array(e.length).fill("")),u=c.useRef([]),d=c.useRef(null),N=P(),w=c.useCallback((t,n)=>{n.preventDefault();const a=n.clipboardData.getData("Text").replace(/\D/g,"").split("");a.length&&p(o=>{var v,k;const l=[...o];let m=t;for(let i=0;i<a.length&&m<l.length;i++)l[m]=a[i],m++;const y=l.join("");return(v=e.onChange)==null||v.call(e,y),l.every(i=>i!=="")&&((k=e.onComplete)==null||k.call(e,y)),setTimeout(()=>{var x,b;const i=l.indexOf("");i!==-1?(x=u.current[i])==null||x.focus():m<l.length&&((b=u.current[m])==null||b.focus())},0),l})},[e]),I=c.useCallback((t,n)=>{/^\d*$/.test(n)&&p(r=>{var o;const a=[...r];return a[t]=n.slice(-1),e.onChange&&e.onChange(a.join("")),a.every(l=>l!=="")&&((o=e.onComplete)==null||o.call(e,a.join(""))),n&&t<r.length-1&&setTimeout(()=>{var l;(l=u.current[t+1])==null||l.focus()},0),a})},[e]),V=(t,n)=>{const r=u.current[t];if(r){if(n.key==="ArrowRight"){const a=t<h.length-1?t+1:0,o=u.current[a];o&&(o.focus(),setTimeout(()=>o.setSelectionRange(0,o.value.length),0))}if(n.key==="ArrowLeft"){const a=t>0?t-1:h.length-1,o=u.current[a];o&&(o.focus(),setTimeout(()=>o.setSelectionRange(0,o.value.length),0))}n.key==="Backspace"&&(r.value?setTimeout(()=>r.setSelectionRange(0,r.value.length),0):t>0&&setTimeout(()=>{const a=u.current[t-1];a&&(a.focus(),a.setSelectionRange(0,a.value.length))},0))}},D=c.useCallback(t=>{setTimeout(()=>t.target.setSelectionRange(0,t.target.value.length),0)},[]);return s.jsxDEV(s.Fragment,{children:[s.jsxDEV(F,{$error:e.error,$size:e.size,id:e.id,ref:d,onBlur:t=>{setTimeout(()=>{var n;d.current&&!d.current.contains(document.activeElement)&&((n=e.onBlur)==null||n.call(e,t))},0)},onFocus:t=>{setTimeout(()=>{var n,r;(n=d.current)!=null&&n.contains(document.activeElement)&&((r=e.onFocus)==null||r.call(e,t))},0)},$sx:e.sx,children:h.map((t,n)=>s.jsxDEV(_,{isWidthAsHeight:!0,tabIndex:n+1,ref:r=>{u.current[n]=r},variety:"standard",type:"text",inputMode:"numeric",maxLength:1,value:t,onFocus:D,onPaste:r=>w(n,r),onChange:r=>I(n,r),onKeyDown:r=>V(n,r),genre:e.genre,size:e.size,sxTypography:e.sxTypography},n,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/components/input-otp/component.tsx",lineNumber:152,columnNumber:11},void 0))},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/components/input-otp/component.tsx",lineNumber:130,columnNumber:7},void 0),e!=null&&e.error?s.jsxDEV(O,{...e.error,size:(e==null?void 0:e.error.size)??e.size,sxTypography:R({size:e.size,weight:400,theme:N})},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/components/input-otp/component.tsx",lineNumber:175,columnNumber:9},void 0):null]},void 0,!0,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/components/input-otp/component.tsx",lineNumber:129,columnNumber:5},void 0)};try{g.displayName="InputOTP",g.__docgenInfo={description:"",displayName:"InputOTP",props:{length:{defaultValue:null,description:"",name:"length",required:!0,type:{name:"number"}},onComplete:{defaultValue:null,description:"",name:"onComplete",required:!1,type:{name:"((otp: string) => void)"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"((event?: FocusEvent<HTMLElement, Element>) => void)"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"((event?: FocusEvent<HTMLElement, Element>) => void)"}},sx:{defaultValue:null,description:"",name:"sx",required:!1,type:{name:"SXProps"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: string) => void)"}},genre:{defaultValue:null,description:"",name:"genre",required:!0,type:{name:"enum",value:[{value:'"gray"'},{value:'"grayBorder"'},{value:'"blackBorder"'},{value:'"realebail-white"'},{value:'"bustmarket-gray"'}]}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"large"'},{value:'"largeMedium"'},{value:'"medium"'},{value:'"mediumSmall"'},{value:'"small"'}]}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"ErrorMessageProps"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},sxTypography:{defaultValue:null,description:"",name:"sxTypography",required:!1,type:{name:"TypographySXProps"}}}}}catch{}const Z={component:g,title:"Component/InputOTP"},A={genre:"blackBorder",size:"largeMedium"},M=e=>s.jsxDEV(q,{children:s.jsxDEV(g,{...e},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/.storybook-stories/default/component-input-otp.stories.tsx",lineNumber:18,columnNumber:7},void 0)},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/.storybook-stories/default/component-input-otp.stories.tsx",lineNumber:17,columnNumber:10},void 0),f={render:e=>s.jsxDEV(M,{...e},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/.storybook-stories/default/component-input-otp.stories.tsx",lineNumber:22,columnNumber:19},void 0),args:{...A,length:6,sx:{default:{width:"320px"}},onComplete(e){console.log("onComplete",e)},onBlur(e){console.log("onBlur",e)},onChange(e){console.log("onChange",e)}}};var T,E,C;f.parameters={...f.parameters,docs:{...(T=f.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: args => <RangeWrapper {...args} />,
  args: {
    ...defaultArgs,
    length: 6,
    sx: {
      default: {
        width: '320px'
      }
    },
    onComplete(otp) {
      console.log('onComplete', otp);
    },
    onBlur(e) {
      console.log('onBlur', e);
    },
    onChange(value) {
      console.log('onChange', value);
    }
  }
}`,...(C=(E=f.parameters)==null?void 0:E.docs)==null?void 0:C.source}}};const G=["InputOTP"];export{f as InputOTP,G as __namedExportsOrder,Z as default};
