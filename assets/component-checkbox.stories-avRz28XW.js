import{j as i,r as s}from"./iframe-1BJ3w_50.js";import{C as c}from"./component-B8xnSLFB.js";import"./preload-helper-C1FmrZbK.js";import"./component-BgnCZAcu.js";import"./motion-BWMfmUrw.js";import"./component.functions-5Lo1eb4y.js";import"./area-22l_fHsN.js";const g={component:c,title:"Component/Checkbox"},l=e=>{const[d,n]=s.useState(e.checked??!1);return s.useEffect(()=>{n(e.checked??!1)},[e.checked]),i.jsxDEV(c,{...e,checked:d,onChange:m=>n(m)},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/.storybook-stories/default/component-checkbox.stories.tsx",lineNumber:15,columnNumber:10},void 0)},r={render:e=>i.jsxDEV(l,{...e},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/.storybook-stories/default/component-checkbox.stories.tsx",lineNumber:18,columnNumber:19},void 0),args:{genre:"gray",view:{true:{type:"checkbox",name:"Square-true"},false:{type:"checkbox",name:"Square-false"}},checked:!0,children:"First",size:"medium",isLoading:!1,isDisabled:!1,isOnlyLoading:!1,isHiddenBorder:!1}};var a,o,t;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: args => <CheckboxWrapper {...args} />,
  args: {
    genre: 'gray',
    view: {
      true: {
        type: 'checkbox',
        name: 'Square-true'
      },
      false: {
        type: 'checkbox',
        name: 'Square-false'
      }
    },
    checked: true,
    children: 'First',
    size: 'medium',
    isLoading: false,
    isDisabled: false,
    isOnlyLoading: false,
    isHiddenBorder: false
  }
}`,...(t=(o=r.parameters)==null?void 0:o.docs)==null?void 0:t.source}}};const y=["Checkbox"];export{r as Checkbox,y as __namedExportsOrder,g as default};
