import{c as V,d as p,r as i,n as S,j as o}from"./iframe-1BJ3w_50.js";import{I as k}from"./component-OXxxaFMG.js";import{a as E}from"./component-BgnCZAcu.js";import{W as z}from"./tools-C97HNiZn.js";import"./preload-helper-C1FmrZbK.js";import"./motion-BWMfmUrw.js";const B=p.div`
  position: relative;
  display: flex;
  width: 100%;
  box-sizing: border-box;
  align-items: center;
  height: 20px;
  ${E};
  ${V};
`,R=p.div`
  position: absolute;
  height: 3px;
  width: 100%;
  padding: 0px 10px;
  border-radius: 2px;
`,D=p.input`
  position: absolute;
  width: 100%;
  outline: none !important;
  pointer-events: none;
  appearance: none;
  -webkit-appearance: none;
  background: transparent;
  left: 0;
  margin: 0;
  &::-webkit-slider-thumb {
    pointer-events: all;
    width: 16px;
    height: 16px;
    margin: 0;
    padding: 0;
    border-radius: 50%;
    background: ${e=>e.$colorBackground};
    border: 3px ${e=>e.$colorBorder} solid;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: 0px;
    transition:
      transform ${e=>e.theme.transition.default},
      color ${e=>e.theme.transition.default},
      background-color ${e=>e.theme.transition.default};
    &:hover {
      transform: scale(1.2);
    }
  }
`,f=e=>{const{onChange:l}=e,d=i.useCallback((a,t)=>{const m=[...e.values];m[a]=Math.min(e.max,Math.max(e.min,t)),l(m.sort((b,j)=>b-j))},[l,e.max,e.min,e.values]),s=i.useCallback(a=>(a-e.min)/(e.max-e.min)*100,[e.max,e.min]),u=i.useMemo(()=>e.values.map(a=>s(a)),[s,e.values]),n=S(),r=n.colors.range[e.genre].track.background.rest,c=n.colors.range[e.genre].track.gradient.rest,w=n.colors.range[e.genre].thumb.border.rest,y=n.colors.range[e.genre].thumb.background.rest,h=i.useMemo(()=>u.map((a,t)=>{const m=t===0,b=t===u.length-1;return m?`${r} 0%, ${r} ${a}%, ${c} ${a}%`:b?`${c} ${a}%, ${r} ${a}%, ${r} 100%`:`${c} ${a}%`}).join(", "),[c,r,u]),N=i.useMemo(()=>`linear-gradient(to right, ${h})`,[h]);return o.jsxDEV(B,{$size:e.size,$sx:e.sx,$error:e.error,onBlur:e.onBlur,children:[e.values.map((a,t)=>o.jsxDEV(D,{type:"range",$size:e.size,$genre:e.genre,min:e.min,max:e.max,step:e.step,value:a,onChange:m=>d(t,parseFloat(m.target.value)),style:{zIndex:100+t},$colorBackground:y,$colorBorder:w},t,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/components/range/component.tsx",lineNumber:53,columnNumber:9},void 0)),o.jsxDEV(R,{$size:e.size,$genre:e.genre,style:{background:N}},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/components/range/component.tsx",lineNumber:68,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/components/range/component.tsx",lineNumber:51,columnNumber:5},void 0)};try{f.displayName="Range",f.__docgenInfo={description:"",displayName:"Range",props:{values:{defaultValue:null,description:"",name:"values",required:!0,type:{name:"number[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(values: number[]) => void"}},step:{defaultValue:null,description:"",name:"step",required:!0,type:{name:"number"}},min:{defaultValue:null,description:"",name:"min",required:!0,type:{name:"number"}},max:{defaultValue:null,description:"",name:"max",required:!0,type:{name:"number"}},isShowMarker:{defaultValue:null,description:"",name:"isShowMarker",required:!1,type:{name:"boolean"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"FocusEventHandler<HTMLDivElement>"}},sx:{defaultValue:null,description:"",name:"sx",required:!1,type:{name:"SXProps"}},genre:{defaultValue:null,description:"",name:"genre",required:!0,type:{name:"enum",value:[{value:'"gray"'},{value:'"grayBorder"'},{value:'"blackBorder"'},{value:'"realebail-white"'},{value:'"bustmarket-gray"'}]}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"large"'},{value:'"largeMedium"'},{value:'"medium"'},{value:'"mediumSmall"'},{value:'"small"'}]}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"ErrorMessageProps"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}}}}}catch{}const L={component:f,title:"Component/Range"},q=e=>{const[l,d]=i.useState(100),[s,u]=i.useState(1e6);return o.jsxDEV(z,{sx:{default:{flexDirection:"column",minWidth:"500px"}},children:[o.jsxDEV(k,{propsNumeric:{allowLeadingZeros:!1,thousandSeparator:" ",allowNegative:!1,allowedDecimalSeparators:["."],decimalScale:2,decimalSeparator:",",suffix:" $",isAllowed:n=>{const{floatValue:r}=n;return(r??0)>=0&&(r??0)<=(s??1e7)}},isReadOnly:!0,variety:"numeric",placeholder:"От",value:l.toString(),onChange:n=>{const r=n.floatValue;console.log(r),r!==void 0&&d(r)},genre:"realebail-white",size:"small"},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/.storybook-stories/default/component-range.stories.tsx",lineNumber:22,columnNumber:7},void 0),o.jsxDEV(k,{propsNumeric:{allowLeadingZeros:!1,thousandSeparator:" ",allowNegative:!1,allowedDecimalSeparators:["."],decimalScale:2,decimalSeparator:",",suffix:" $",isAllowed:n=>{const{floatValue:r}=n;return(r??0)>=(l??0)&&(r??0)<=1e7}},isReadOnly:!0,variety:"numeric",placeholder:"От",value:s.toString(),onChange:n=>{const r=n.floatValue;console.log(r),r!==void 0&&u(r)},genre:"realebail-white",size:"small"},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/.storybook-stories/default/component-range.stories.tsx",lineNumber:41,columnNumber:7},void 0),o.jsxDEV(f,{...e,min:0,max:1e6,values:[l,s],onChange:n=>{d(n[0]),u(n[1])}},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/.storybook-stories/default/component-range.stories.tsx",lineNumber:60,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/.storybook-stories/default/component-range.stories.tsx",lineNumber:16,columnNumber:10},void 0)},g={render:e=>o.jsxDEV(q,{...e},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/.storybook-stories/default/component-range.stories.tsx",lineNumber:67,columnNumber:19},void 0),args:{genre:"realebail-white",size:"medium",step:1e3}};var x,v,$;g.parameters={...g.parameters,docs:{...(x=g.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => <RangeWrapper {...args} />,
  args: {
    genre: 'realebail-white',
    size: 'medium',
    step: 1000
  }
}`,...($=(v=g.parameters)==null?void 0:v.docs)==null?void 0:$.source}}};const P=["Range"];export{g as Range,P as __namedExportsOrder,L as default};
