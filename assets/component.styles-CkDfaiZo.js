import{r,j as n,S as l,d as o,l as i,e as s}from"./iframe-DqtU7u_4.js";import{I as m}from"./component.styles-BSNyc6Hh.js";const c=e=>{const a=r.useCallback(()=>{e.onClickSummary&&e.onClickSummary()},[e]),t=r.useCallback(d=>{e.onClickIcon&&(d.stopPropagation(),e.onClickIcon())},[e]);return n.jsxDEV(l,{...e.wrapperProps,children:n.jsxDEV(u,{children:[n.jsxDEV(p,{onClick:a,children:[n.jsxDEV(f,{$isAccordionIcon:e.isAccordionIcon,children:e.accordionSummary},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/components/accordion/component.tsx",lineNumber:34,columnNumber:11},void 0),e.isAccordionIcon&&n.jsxDEV(x,{$expanded:e.expanded,onClick:t,name:"Arrow1",color:"black100",type:"id",size:"large"},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/components/accordion/component.tsx",lineNumber:38,columnNumber:13},void 0)]},void 0,!0,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/components/accordion/component.tsx",lineNumber:33,columnNumber:9},void 0),n.jsxDEV(k,{$expanded:e.expanded,children:e.accordionDetails},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/components/accordion/component.tsx",lineNumber:48,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/components/accordion/component.tsx",lineNumber:32,columnNumber:7},void 0)},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/components/accordion/component.tsx",lineNumber:31,columnNumber:5},void 0)};try{c.displayName="Accordion",c.__docgenInfo={description:"",displayName:"Accordion",props:{accordionDetails:{defaultValue:null,description:"",name:"accordionDetails",required:!0,type:{name:"ReactNode"}},accordionSummary:{defaultValue:null,description:"",name:"accordionSummary",required:!0,type:{name:"ReactNode"}},expanded:{defaultValue:null,description:"",name:"expanded",required:!0,type:{name:"boolean"}},wrapperProps:{defaultValue:null,description:"",name:"wrapperProps",required:!0,type:{name:"StackProps"}},isAccordionIcon:{defaultValue:null,description:"",name:"isAccordionIcon",required:!1,type:{name:"boolean"}},onClickIcon:{defaultValue:null,description:"",name:"onClickIcon",required:!1,type:{name:"(() => void)"}},onClickSummary:{defaultValue:null,description:"",name:"onClickSummary",required:!1,type:{name:"(() => void)"}},triggerUpdate:{defaultValue:null,description:"",name:"triggerUpdate",required:!1,type:{name:"unknown[]"}}}}}catch{}const u=o.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,p=o.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  user-select: none;
`,f=o.div`
  width: 100%;

  ${e=>e.$isAccordionIcon&&i`
      width: calc(100% - 26px);
    `}
`,k=o.div`
  max-height: ${e=>e.$expanded?"9999px":"0"};
  height: ${e=>e.$expanded?"100%":"0"};
  opacity: ${e=>e.$expanded?1:0};
  overflow: hidden;
  ${s};
`,x=o(m)`
  padding: 4px;
  box-sizing: content-box;
  cursor: pointer;
  ${e=>e.$expanded?i`
          transform: rotate(180deg);
        `:i`
          transform: rotate(0deg);
        `}
`;export{c as A};
