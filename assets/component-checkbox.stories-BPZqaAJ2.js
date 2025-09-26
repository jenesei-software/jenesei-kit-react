import{h as c,j as i,r as s}from"./iframe-CXAkBJcX.js";const f={component:c,title:"Component/Checkbox"},u=e=>{const[d,r]=s.useState(e.checked??!1);return s.useEffect(()=>{r(e.checked??!1)},[e.checked]),i.jsxDEV(c,{...e,checked:d,onChange:l=>r(l)},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/.storybook-stories/default/component-checkbox.stories.tsx",lineNumber:15,columnNumber:10},void 0)},n={render:e=>i.jsxDEV(u,{...e},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/.storybook-stories/default/component-checkbox.stories.tsx",lineNumber:18,columnNumber:19},void 0),args:{genre:"gray",view:{true:{type:"checkbox",name:"Square-true"},false:{type:"checkbox",name:"Square-false"}},checked:!0,children:"First",size:"medium",isLoading:!1,isDisabled:!1,isOnlyLoading:!1,isHiddenBorder:!1}};var a,o,t;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(t=(o=n.parameters)==null?void 0:o.docs)==null?void 0:t.source}}};const k=["Checkbox"];export{n as Checkbox,k as __namedExportsOrder,f as default};
