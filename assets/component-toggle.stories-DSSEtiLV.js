import{b as g,h as $,i as v,l as o,d as h,m as b,C as r,r as f,j as n}from"./iframe-1BJ3w_50.js";import{a as k}from"./component-BgnCZAcu.js";import{T as x}from"./component-Bhe_aONY.js";import{W as u,a as j}from"./tools-C97HNiZn.js";import"./preload-helper-C1FmrZbK.js";import"./motion-BWMfmUrw.js";import"./floating-ui.react-DF04B13p.js";import"./index-B2jwwQNa.js";import"./use-TW0LbYqD.js";import"./link-BZsJ5i8W.js";import"./index-B7Qfo0ta.js";const N=o`
  ${e=>o`
    height: ${r[e.$size].height}px;
    width: ${r[e.$size].width}px;
    padding: ${r[e.$size].padding}px;
    border-radius: 100px;
  `};
`,y=o`
  ${e=>o`
  height: ${r[e.$size].thumb}px;
  width: ${r[e.$size].thumb}px;
  border-radius: 100px;
  `}
`,w=h(b.div)`
  cursor: pointer;
  border: 1px solid transparent;

  display: flex;
  align-items: center;

  ${N};
  ${g};
  ${$};
  ${v};

  ${e=>e.$value?o`
          background: ${e.theme.colors.toggle[e.$genre].active.rest.track};
          border-color: ${e.theme.colors.toggle[e.$genre].active.rest.border};
          justify-content: flex-start;
          &:hover {
            background: ${e.theme.colors.toggle[e.$genre].active.hover.track};
            border-color: ${e.theme.colors.toggle[e.$genre].active.hover.border};
          }
        `:o`
          background: ${e.theme.colors.toggle[e.$genre].unActive.rest.track};
          border-color: ${e.theme.colors.toggle[e.$genre].unActive.rest.border};
          justify-content: flex-start;
          &:hover {
            background: ${e.theme.colors.toggle[e.$genre].unActive.hover.track};
            border-color: ${e.theme.colors.toggle[e.$genre].unActive.hover.border};
          }
        `};

  ${k};
`,D=h(b.div)`
  ${y};
  ${g};

  ${e=>e.$value?o`
          background: ${e.theme.colors.toggle[e.$genre].active.rest.thumb};
          box-shadow: ${e.theme.colors.toggle[e.$genre].active.rest.thumbBoxShadow};
          &:hover {
            background: ${e.theme.colors.toggle[e.$genre].active.hover.thumb};
            box-shadow: ${e.theme.colors.toggle[e.$genre].active.hover.thumbBoxShadow};
          }
        `:o`
          background: ${e.theme.colors.toggle[e.$genre].unActive.rest.thumb};
          box-shadow: ${e.theme.colors.toggle[e.$genre].unActive.rest.thumbBoxShadow};
          &:hover {
            background: ${e.theme.colors.toggle[e.$genre].unActive.hover.thumb};
            box-shadow: ${e.theme.colors.toggle[e.$genre].unActive.hover.thumbBoxShadow};
          }
        `}
`,i=e=>{const a=f.useMemo(()=>({tap:{width:r[e.size].thumb+4,translateX:e.value?r[e.size].width-r[e.size].thumb-r[e.size].padding*3-4:0,transition:{duration:.05}},checked:{translateX:r[e.size].width-r[e.size].thumb-r[e.size].padding*3,transition:{ease:"circInOut",duration:.05}},unchecked:{translateX:0,transition:{ease:"circInOut",duration:.05}}}),[e.size,e.value]);return n.jsxDEV(w,{$genre:e.genre,$isDisabled:e.isDisabled,$isDisabledOutline:e.isDisabled??e.isDisabledOutline,$isOutlineBoxShadow:e.isOutlineBoxShadow,$isReadOnly:e.isReadOnly,$value:e.value,$size:e.size,$error:e.error,tabIndex:0,onClick:()=>{var t;return(t=e.onChange)==null?void 0:t.call(e,!e.value)},whileTap:"tap",animate:e.value?"checked":"unchecked",onKeyDown:t=>{var s;t.key==="Enter"&&((s=e.onChange)==null||s.call(e,!e.value))},children:n.jsxDEV(D,{variants:a,$genre:e.genre,$isDisabled:e.isDisabled,$value:e.value,$size:e.size,$error:e.error},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/components/toggle/component.tsx",lineNumber:56,columnNumber:7},void 0)},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/components/toggle/component.tsx",lineNumber:39,columnNumber:5},void 0)};try{i.displayName="Toggle",i.__docgenInfo={description:"",displayName:"Toggle",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((checked: boolean) => void)"}},isDisabled:{defaultValue:null,description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},genre:{defaultValue:null,description:"",name:"genre",required:!0,type:{name:'"product"'}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"large"'},{value:'"largeMedium"'},{value:'"medium"'},{value:'"mediumSmall"'},{value:'"small"'}]}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"ErrorMessageProps"}},isReadOnly:{defaultValue:null,description:"",name:"isReadOnly",required:!1,type:{name:"boolean"}},isDisabledOutline:{defaultValue:null,description:"",name:"isDisabledOutline",required:!1,type:{name:"boolean"}},isOutlineBoxShadow:{defaultValue:null,description:"",name:"isOutlineBoxShadow",required:!1,type:{name:"boolean"}}}}}catch{}const I={component:i,title:"Component/Toggle"},z=()=>{const[e,a]=f.useState(!1);return n.jsxDEV(u,{sx:{default:{flexDirection:"row"}},children:n.jsxDEV(u,{sx:{default:{flexDirection:"column"}},children:[n.jsxDEV(x,{sx:{default:{variant:"h5",color:"black100"}},children:"List - size"},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/.storybook-stories/default/component-toggle.stories.tsx",lineNumber:24,columnNumber:9},void 0),n.jsxDEV(j,{children:[n.jsxDEV(i,{genre:"product",size:"large",value:e,onChange:t=>a(t)},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/.storybook-stories/default/component-toggle.stories.tsx",lineNumber:33,columnNumber:11},void 0),n.jsxDEV(i,{genre:"product",size:"largeMedium",value:e,onChange:t=>a(t)},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/.storybook-stories/default/component-toggle.stories.tsx",lineNumber:34,columnNumber:11},void 0),n.jsxDEV(i,{genre:"product",size:"medium",value:e,onChange:t=>a(t)},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/.storybook-stories/default/component-toggle.stories.tsx",lineNumber:35,columnNumber:11},void 0),n.jsxDEV(i,{genre:"product",size:"mediumSmall",value:e,onChange:t=>a(t)},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/.storybook-stories/default/component-toggle.stories.tsx",lineNumber:36,columnNumber:11},void 0),n.jsxDEV(i,{genre:"product",size:"small",value:e,onChange:t=>a(t)},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/.storybook-stories/default/component-toggle.stories.tsx",lineNumber:37,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/.storybook-stories/default/component-toggle.stories.tsx",lineNumber:32,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/.storybook-stories/default/component-toggle.stories.tsx",lineNumber:19,columnNumber:7},void 0)},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/.storybook-stories/default/component-toggle.stories.tsx",lineNumber:14,columnNumber:10},void 0)},l={render:()=>n.jsxDEV(z,{},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/.storybook-stories/default/component-toggle.stories.tsx",lineNumber:43,columnNumber:17},void 0),args:{genre:"product",isDisabled:!1,value:!0,size:"small"}};var d,c,m;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <ToggleWrapperAll />,
  args: {
    genre: 'product',
    isDisabled: false,
    value: true,
    size: 'small'
  }
}`,...(m=(c=l.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const M=["Toggle"];export{l as Toggle,M as __namedExportsOrder,I as default};
