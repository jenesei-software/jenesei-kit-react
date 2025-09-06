import{l as a,d,t as u,S as o,r as i,j as m}from"./iframe-DqtU7u_4.js";const f=u`
  0% {
    background-position: 100%;
  }
  100% {
    background-position: -100%;
  }
`,t=d(o)`
  background: transparent;

  ${e=>a`
    ${!e.$visible&&a`
      ${e.$type==="secondary"?a`
            background: linear-gradient(
        90deg,
        #f6f7f8 25%,
        #edeef1 50%,
        #f6f7f8 75%
      );
          `:a`
            background: linear-gradient(
        90deg,
        #edeef1 25%,
        #f6f7f8 50%,
        #edeef1 75%
      );   
          `};
      background-size: 200% 100%;
      animation: ${f} 1.5s infinite linear;

    `};
  `}
  & > * {
    opacity: ${e=>e.$visible?1:0};
    transition:
      outline 0s,
      opacity ${e=>e.theme.transition.default};
  }
`;try{t.displayName="StyledSkeleton",t.__docgenInfo={description:"",displayName:"StyledSkeleton",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const l=e=>{const[r,n]=i.useState(e.defaultVisible??!1);return i.useEffect(()=>{if("time"in e){const s=setTimeout(()=>{n(!0)},e.time);return()=>{clearTimeout(s)}}},[e]),i.useEffect(()=>{"visible"in e&&n(!e.visible)},[e]),m.jsxDEV(t,{...e,$visible:r,$type:e.type,children:e.children},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/areas/skeleton/area.tsx",lineNumber:27,columnNumber:5},void 0)};try{l.displayName="Skeleton",l.__docgenInfo={description:"",displayName:"Skeleton",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},isHover:{defaultValue:null,description:"",name:"isHover",required:!1,type:{name:"boolean"}},isRipple:{defaultValue:null,description:"",name:"isRipple",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}},onDragOver:{defaultValue:null,description:"",name:"onDragOver",required:!1,type:{name:"DragEventHandler<HTMLDivElement>"}},onDrop:{defaultValue:null,description:"",name:"onDrop",required:!1,type:{name:"((e: DragEvent<HTMLDivElement>) => void)"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement | null>"}},sx:{defaultValue:null,description:"",name:"sx",required:!1,type:{name:"SXProps"}},visible:{defaultValue:null,description:"",name:"visible",required:!0,type:{name:"boolean"}},defaultVisible:{defaultValue:null,description:"",name:"defaultVisible",required:!1,type:{name:"boolean"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}},time:{defaultValue:null,description:"",name:"time",required:!0,type:{name:"number"}}}}}catch{}export{l as S};
