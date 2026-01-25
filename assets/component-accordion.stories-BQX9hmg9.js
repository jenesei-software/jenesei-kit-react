import{d as l,l as j,b as $,r as o,j as n,S as s}from"./iframe-1BJ3w_50.js";import{I as z}from"./component.functions-5Lo1eb4y.js";import{B as r}from"./component-BB_KxpK4.js";import{T as D}from"./component-Bhe_aONY.js";import"./preload-helper-C1FmrZbK.js";import"./area-22l_fHsN.js";import"./floating-ui.react-DF04B13p.js";import"./index-B2jwwQNa.js";import"./use-TW0LbYqD.js";import"./link-BZsJ5i8W.js";import"./index-B7Qfo0ta.js";const P=l.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,L=l.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  user-select: none;
`,_=l.div`
  width: 100%;

  ${e=>e.$isAccordionIcon&&j`
      width: calc(100% - 26px);
    `}
`,W=l.div`
  max-height: ${e=>e.$expanded?"9999px":"0"};
  height: ${e=>e.$expanded?"100%":"0"};
  opacity: ${e=>e.$expanded?1:0};
  overflow: hidden;
  ${$};
`,q=l(z)`
  padding: 4px;
  box-sizing: content-box;
  cursor: pointer;
  ${e=>e.$expanded?j`
          transform: rotate(180deg);
        `:j`
          transform: rotate(0deg);
        `}
`,a=e=>{const t=o.useCallback(()=>{e.onClickSummary&&e.onClickSummary()},[e]),c=o.useCallback(i=>{e.onClickIcon&&(i.stopPropagation(),e.onClickIcon())},[e]);return n.jsxDEV(s,{...e.wrapperProps,children:n.jsxDEV(P,{children:[n.jsxDEV(L,{onClick:t,children:[n.jsxDEV(_,{$isAccordionIcon:e.isAccordionIcon,children:e.accordionSummary},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/components/accordion/component.tsx",lineNumber:34,columnNumber:11},void 0),e.isAccordionIcon&&n.jsxDEV(q,{$expanded:e.expanded,onClick:c,name:"Arrow1",color:"black100",type:"id",size:"large"},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/components/accordion/component.tsx",lineNumber:38,columnNumber:13},void 0)]},void 0,!0,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/components/accordion/component.tsx",lineNumber:33,columnNumber:9},void 0),n.jsxDEV(W,{$expanded:e.expanded,children:e.accordionDetails},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/components/accordion/component.tsx",lineNumber:48,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/components/accordion/component.tsx",lineNumber:32,columnNumber:7},void 0)},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/components/accordion/component.tsx",lineNumber:31,columnNumber:5},void 0)};try{a.displayName="Accordion",a.__docgenInfo={description:"",displayName:"Accordion",props:{accordionDetails:{defaultValue:null,description:"",name:"accordionDetails",required:!0,type:{name:"ReactNode"}},accordionSummary:{defaultValue:null,description:"",name:"accordionSummary",required:!0,type:{name:"ReactNode"}},expanded:{defaultValue:null,description:"",name:"expanded",required:!0,type:{name:"boolean"}},wrapperProps:{defaultValue:null,description:"",name:"wrapperProps",required:!0,type:{name:"StackProps"}},isAccordionIcon:{defaultValue:null,description:"",name:"isAccordionIcon",required:!1,type:{name:"boolean"}},onClickIcon:{defaultValue:null,description:"",name:"onClickIcon",required:!1,type:{name:"(() => void)"}},onClickSummary:{defaultValue:null,description:"",name:"onClickSummary",required:!1,type:{name:"(() => void)"}},triggerUpdate:{defaultValue:null,description:"",name:"triggerUpdate",required:!1,type:{name:"unknown[]"}}}}}catch{}const Z={component:a,title:"Component/Accordion"},U=e=>{const[t,c]=o.useState(!1),[i,h]=o.useState(!1),[u,b]=o.useState(!1),m=o.useCallback(()=>{c(d=>!d)},[]),S=o.useCallback(()=>{m()},[m]),E=o.useCallback(()=>{m()},[m]),p=o.useCallback(()=>{h(d=>!d)},[]),V=o.useCallback(()=>{p()},[p]),T=o.useCallback(()=>{p()},[p]),f=o.useCallback(()=>{b(d=>!d)},[]),I=o.useCallback(()=>{f()},[f]),A=o.useCallback(()=>{f()},[f]);return n.jsxDEV(a,{...e,expanded:t,triggerUpdate:[t,i,u],onClickSummary:S,onClickIcon:E,accordionDetails:n.jsxDEV(s,{sx:()=>({default:{gap:"10px",flexDirection:"column",paddingTop:"6px"}}),children:[n.jsxDEV(a,{accordionSummary:n.jsxDEV(r,{sx:{default:{justifyContent:"space-between",width:"100%"}},genre:"productBorder",size:"medium",icons:[{type:"id",name:"Folder",turn:i?180:0}],children:"Show more"},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/.storybook-stories/default/component-accordion.stories.tsx",lineNumber:52,columnNumber:40},void 0),accordionDetails:n.jsxDEV(s,{sx:()=>({default:{gap:"10px",flexDirection:"column",paddingTop:"6px"}}),children:[n.jsxDEV(r,{sx:{default:{justifyContent:"flex-start",width:"100%"}},genre:"gray",size:"medium",children:"First"},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/.storybook-stories/default/component-accordion.stories.tsx",lineNumber:70,columnNumber:17},void 0),n.jsxDEV(r,{sx:{default:{justifyContent:"flex-start",width:"100%"}},genre:"black",size:"medium",children:"Second"},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/.storybook-stories/default/component-accordion.stories.tsx",lineNumber:78,columnNumber:17},void 0),n.jsxDEV(r,{sx:{default:{justifyContent:"flex-start",width:"100%"}},genre:"greenTransparent",size:"medium",children:"Third"},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/.storybook-stories/default/component-accordion.stories.tsx",lineNumber:86,columnNumber:17},void 0)]},void 0,!0,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/.storybook-stories/default/component-accordion.stories.tsx",lineNumber:63,columnNumber:44},void 0),expanded:i,onClickSummary:V,onClickIcon:T,wrapperProps:{sx:{default:{padding:"0px",width:"100%"}}}},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/.storybook-stories/default/component-accordion.stories.tsx",lineNumber:52,columnNumber:11},void 0),n.jsxDEV(a,{accordionSummary:n.jsxDEV(r,{sx:{default:{justifyContent:"flex-start",width:"100%"}},genre:"grayBorder",size:"medium",children:"Show more more"},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/.storybook-stories/default/component-accordion.stories.tsx",lineNumber:102,columnNumber:40},void 0),accordionDetails:n.jsxDEV(s,{sx:()=>({default:{gap:"10px",flexDirection:"column",paddingTop:"6px"}}),children:[n.jsxDEV(r,{sx:{default:{justifyContent:"flex-start",width:"100%"}},genre:"gray",size:"medium",children:"First"},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/.storybook-stories/default/component-accordion.stories.tsx",lineNumber:116,columnNumber:17},void 0),n.jsxDEV(r,{sx:{default:{justifyContent:"flex-start",width:"100%"}},genre:"black",size:"medium",children:"Second"},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/.storybook-stories/default/component-accordion.stories.tsx",lineNumber:124,columnNumber:17},void 0),n.jsxDEV(r,{sx:{default:{justifyContent:"flex-start",width:"100%"}},genre:"greenTransparent",size:"medium",children:"Third"},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/.storybook-stories/default/component-accordion.stories.tsx",lineNumber:132,columnNumber:17},void 0)]},void 0,!0,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/.storybook-stories/default/component-accordion.stories.tsx",lineNumber:109,columnNumber:44},void 0),expanded:u,onClickSummary:I,onClickIcon:A,wrapperProps:{sx:{default:{padding:"0px",width:"100%"}}}},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/.storybook-stories/default/component-accordion.stories.tsx",lineNumber:102,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/.storybook-stories/default/component-accordion.stories.tsx",lineNumber:45,columnNumber:183},void 0)},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/.storybook-stories/default/component-accordion.stories.tsx",lineNumber:45,columnNumber:10},void 0)},M=e=>{const[t,c]=o.useState(!1),i=o.useCallback(()=>{c(b=>!b)},[]),h=o.useCallback(()=>{i()},[i]),u=o.useCallback(()=>{i()},[i]);return n.jsxDEV(a,{...e,expanded:t,triggerUpdate:[t],onClickSummary:h,onClickIcon:u,accordionDetails:n.jsxDEV(s,{sx:()=>({default:{gap:"10px",flexDirection:"column",paddingTop:"6px"}}),children:[n.jsxDEV(r,{sx:{default:{justifyContent:"flex-start",width:"100%"}},genre:"gray",size:"medium",children:"First"},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/.storybook-stories/default/component-accordion.stories.tsx",lineNumber:168,columnNumber:11},void 0),n.jsxDEV(r,{sx:{default:{justifyContent:"flex-start",width:"100%"}},genre:"black",size:"medium",children:"Second"},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/.storybook-stories/default/component-accordion.stories.tsx",lineNumber:176,columnNumber:11},void 0),n.jsxDEV(r,{sx:{default:{justifyContent:"flex-start",width:"100%"}},genre:"greenTransparent",size:"medium",children:"Third"},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/.storybook-stories/default/component-accordion.stories.tsx",lineNumber:184,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/.storybook-stories/default/component-accordion.stories.tsx",lineNumber:161,columnNumber:155},void 0)},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/.storybook-stories/default/component-accordion.stories.tsx",lineNumber:161,columnNumber:10},void 0)},x={render:e=>n.jsxDEV(M,{...e},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/.storybook-stories/default/component-accordion.stories.tsx",lineNumber:195,columnNumber:19},void 0),args:{isAccordionIcon:!0,accordionSummary:n.jsxDEV(s,{sx:{default:{padding:"10px",width:"200px",cursor:"pointer"}},children:n.jsxDEV(D,{sx:{default:{variant:"h4",isHoverUnderlining:!0}},children:"Show"},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/.storybook-stories/default/component-accordion.stories.tsx",lineNumber:205,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/.storybook-stories/default/component-accordion.stories.tsx",lineNumber:198,columnNumber:23},void 0),wrapperProps:{sx:{default:{padding:"0px",width:"100%",maxWidth:"300px"}}}}},k={render:e=>n.jsxDEV(U,{...e},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/.storybook-stories/default/component-accordion.stories.tsx",lineNumber:226,columnNumber:19},void 0),args:{isAccordionIcon:!0,accordionSummary:n.jsxDEV(s,{sx:{default:{padding:"10px",width:"200px",cursor:"pointer"}},children:n.jsxDEV(D,{sx:{default:{variant:"h4",isHoverUnderlining:!0}},children:"MultiLevel"},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/.storybook-stories/default/component-accordion.stories.tsx",lineNumber:236,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/.storybook-stories/default/component-accordion.stories.tsx",lineNumber:229,columnNumber:23},void 0),wrapperProps:{sx:{default:{padding:"0px",width:"100%",maxWidth:"300px"}}}}};var N,y,g;x.parameters={...x.parameters,docs:{...(N=x.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: args => <OneLevelAccordionWrapper {...args} />,
  args: {
    isAccordionIcon: true,
    accordionSummary: <Stack sx={{
      default: {
        padding: '10px',
        width: '200px',
        cursor: 'pointer'
      }
    }}>
        <Typography sx={{
        default: {
          variant: 'h4',
          isHoverUnderlining: true
        }
      }}>
          Show
        </Typography>
      </Stack>,
    wrapperProps: {
      sx: {
        default: {
          padding: '0px',
          width: '100%',
          maxWidth: '300px'
        }
      }
    }
  }
}`,...(g=(y=x.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var w,v,C;k.parameters={...k.parameters,docs:{...(w=k.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: args => <MultiLevelAccordionWrapper {...args} />,
  args: {
    isAccordionIcon: true,
    accordionSummary: <Stack sx={{
      default: {
        padding: '10px',
        width: '200px',
        cursor: 'pointer'
      }
    }}>
        <Typography sx={{
        default: {
          variant: 'h4',
          isHoverUnderlining: true
        }
      }}>
          MultiLevel
        </Typography>
      </Stack>,
    wrapperProps: {
      sx: {
        default: {
          padding: '0px',
          width: '100%',
          maxWidth: '300px'
        }
      }
    }
  }
}`,...(C=(v=k.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};const ee=["OneLevel","MultiLevel"];export{k as MultiLevel,x as OneLevel,ee as __namedExportsOrder,Z as default};
