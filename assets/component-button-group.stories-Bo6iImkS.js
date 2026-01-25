import{c as g,d as h,l as f,r as j,j as t}from"./iframe-1BJ3w_50.js";import{B as y}from"./component-BB_KxpK4.js";import"./preload-helper-C1FmrZbK.js";import"./component.functions-5Lo1eb4y.js";import"./area-22l_fHsN.js";import"./floating-ui.react-DF04B13p.js";import"./index-B2jwwQNa.js";const N=f`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: space-between;
  & #jenesei-button {
    &:not(:only-child) {
      flex-grow: 1;
      &:first-child {
        border-bottom-right-radius: 0;
        border-top-right-radius: 0;
      }
      &:last-child {
        border-bottom-left-radius: 0;
        border-top-left-radius: 0;
      }
      &:not(:first-child):not(:last-child) {
        border-radius: 0;
      }
    }
  }
`,k=f`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  & #jenesei-button {
    &:not(:only-child) {
      &:first-child {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
      }
      &:last-child {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
      }
      &:not(:first-child):not(:last-child) {
        border-radius: 0;
      }
    }
  }
`,v=h.div`
  & #jenesei-button {
    &:focus-visible {
      z-index: 1;
    }
  }
  ${e=>e.$position==="horizontal"?N:k};
  ${g};
`,n=e=>{var s;const i=j.useId();return t.jsxDEV(v,{$sx:e.sx,$position:e.position,className:e.className,id:`jenesei-button-group-${i}`,children:(s=e.value)==null?void 0:s.map((x,a)=>t.jsxDEV(y,{id:`jenesei-button-${i}-${a}`,...x},a,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/components/button-group/component.tsx",lineNumber:19,columnNumber:9},void 0))},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/components/button-group/component.tsx",lineNumber:12,columnNumber:5},void 0)};try{n.displayName="ButtonGroup",n.__docgenInfo={description:"",displayName:"ButtonGroup",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"ButtonProps[]"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},position:{defaultValue:null,description:"",name:"position",required:!0,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},sx:{defaultValue:null,description:"",name:"sx",required:!1,type:{name:"SXProps"}}}}}catch{}const E={component:n,title:"Component/ButtonGroup"},b=e=>t.jsxDEV(n,{...e,value:[{sx:{default:{justifyContent:"flex-start"}},children:"First",icons:[{type:"id",name:"CallMissed",order:-1}],type:"button",genre:"black",size:"medium"},{sx:{default:{justifyContent:"space-between"}},children:"Third",icons:[{type:"id",name:"Filter2",order:-1}],type:"button",genre:"gray",size:"medium"},{sx:{default:{justifyContent:"space-between"}},children:"Second",icons:[{type:"id",name:"Graph",order:1}],type:"button",genre:"blackBorder",size:"medium"}]},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/.storybook-stories/default/component-button-group.stories.tsx",lineNumber:12,columnNumber:10},void 0),r={render:e=>t.jsxDEV(b,{...e},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/.storybook-stories/default/component-button-group.stories.tsx",lineNumber:60,columnNumber:19},void 0),args:{position:"horizontal"}},o={render:e=>t.jsxDEV(b,{...e},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/.storybook-stories/default/component-button-group.stories.tsx",lineNumber:66,columnNumber:19},void 0),args:{position:"vertical"}};var u,l,d;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => <ButtonGroupWrapper {...args} />,
  args: {
    position: 'horizontal'
  }
}`,...(d=(l=r.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var c,p,m;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => <ButtonGroupWrapper {...args} />,
  args: {
    position: 'vertical'
  }
}`,...(m=(p=o.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const D=["Horizontal","Vertical"];export{r as Horizontal,o as Vertical,D as __namedExportsOrder,E as default};
