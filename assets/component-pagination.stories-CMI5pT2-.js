import{w as u,j as n,r}from"./iframe-BGG-SRPU.js";import{W as m}from"./tools-D0HoeP6P.js";import"./preload-helper-C1FmrZbK.js";const k={component:u,title:"Component/Pagination"},l={buttonControl:{genre:"product",size:"medium",isRadius:!0,isWidthAsHeight:!0,isPlaystationEffect:!0},buttonCount:{active:{genre:"product",size:"medium",isRadius:!0,isPlaystationEffect:!0},inactive:{genre:"white",size:"medium",isRadius:!0,isPlaystationEffect:!0}}},f=e=>{const[d,i]=r.useState(e.index);return r.useEffect(()=>{i(e.index)},[e.index]),n.jsxDEV(m,{children:n.jsxDEV(u,{...e,index:d,changeIndex:c=>i(c)},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/.storybook-stories/default/component-pagination.stories.tsx",lineNumber:41,columnNumber:7},void 0)},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/.storybook-stories/default/component-pagination.stories.tsx",lineNumber:40,columnNumber:10},void 0)},t={render:e=>n.jsxDEV(f,{...e},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/.storybook-stories/default/component-pagination.stories.tsx",lineNumber:45,columnNumber:19},void 0),args:{...l,index:1,length:12,isInfinity:!1,viewQuantity:4,locale:{next:"Next",prev:"Prev"}}};var s,a,o;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: args => <PaginationWrapper {...args} />,
  args: {
    ...defaultArgs,
    index: 1,
    length: 12,
    isInfinity: false,
    viewQuantity: 4,
    locale: {
      next: 'Next',
      prev: 'Prev'
    }
  }
}`,...(o=(a=t.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const v=["Pagination"];export{t as Pagination,v as __namedExportsOrder,k as default};
