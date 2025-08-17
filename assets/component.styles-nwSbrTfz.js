import{r as i,n as p,j as m,b as y,d}from"./iframe-C1cYW8BR.js";import{a as V}from"./style-BXiExXCy.js";const h=e=>{const{onChange:c}=e,f=i.useCallback((n,r)=>{const a=[...e.values];a[n]=Math.min(e.max,Math.max(e.min,r)),c(a.sort((s,$)=>s-$))},[c,e.max,e.min,e.values]),g=i.useCallback(n=>(n-e.min)/(e.max-e.min)*100,[e.max,e.min]),o=i.useMemo(()=>e.values.map(n=>g(n)),[g,e.values]),l=p(),t=l.colors.range[e.genre].track.background.rest,u=l.colors.range[e.genre].track.gradient.rest,k=l.colors.range[e.genre].thumb.border.rest,v=l.colors.range[e.genre].thumb.background.rest,b=i.useMemo(()=>o.map((n,r)=>{const a=r===0,s=r===o.length-1;return a?`${t} 0%, ${t} ${n}%, ${u} ${n}%`:s?`${u} ${n}%, ${t} ${n}%, ${t} 100%`:`${u} ${n}%`}).join(", "),[u,t,o]),x=i.useMemo(()=>`linear-gradient(to right, ${b})`,[b]);return m.jsxDEV(w,{$size:e.size,$sx:e.sx,$error:e.error,onBlur:e.onBlur,children:[e.values.map((n,r)=>m.jsxDEV(j,{type:"range",$size:e.size,$genre:e.genre,min:e.min,max:e.max,step:e.step,value:n,onChange:a=>f(r,parseFloat(a.target.value)),style:{zIndex:100+r},$colorBackground:v,$colorBorder:k},r,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/components/range/component.tsx",lineNumber:52,columnNumber:9},void 0)),m.jsxDEV(B,{$size:e.size,$genre:e.genre,style:{background:x}},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/components/range/component.tsx",lineNumber:67,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/components/range/component.tsx",lineNumber:50,columnNumber:5},void 0)};try{h.displayName="Range",h.__docgenInfo={description:"",displayName:"Range",props:{values:{defaultValue:null,description:"",name:"values",required:!0,type:{name:"number[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(values: number[]) => void"}},step:{defaultValue:null,description:"",name:"step",required:!0,type:{name:"number"}},min:{defaultValue:null,description:"",name:"min",required:!0,type:{name:"number"}},max:{defaultValue:null,description:"",name:"max",required:!0,type:{name:"number"}},isShowMarker:{defaultValue:null,description:"",name:"isShowMarker",required:!1,type:{name:"boolean"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"FocusEventHandler<HTMLDivElement>"}},sx:{defaultValue:null,description:"",name:"sx",required:!1,type:{name:"SXProps"}},genre:{defaultValue:null,description:"",name:"genre",required:!0,type:{name:"enum",value:[{value:'"gray"'},{value:'"grayBorder"'},{value:'"blackBorder"'},{value:'"realebail-white"'}]}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"large"'},{value:'"largeMedium"'},{value:'"medium"'},{value:'"mediumSmall"'},{value:'"small"'}]}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"ErrorMessageProps"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}}}}}catch{}const w=d.div`
  position: relative;
  display: flex;
  width: 100%;
  box-sizing: border-box;
  align-items: center;
  height: 20px;
  ${V};
  ${y};
`,B=d.div`
  position: absolute;
  height: 3px;
  width: 100%;
  padding: 0px 10px;
  border-radius: 2px;
`,j=d.input`
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
`;export{h as R};
