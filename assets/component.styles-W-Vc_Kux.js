import{r as g,w as t,j as l,e as o,k as s,o as m,l as a,d,m as u}from"./iframe-DqtU7u_4.js";import{a as h}from"./style-BufZ4lZw.js";const r=e=>{const c=g.useMemo(()=>({tap:{width:t[e.size].thumb+4,translateX:e.value?t[e.size].width-t[e.size].thumb-t[e.size].padding*3-4:0,transition:{duration:.05}},checked:{translateX:t[e.size].width-t[e.size].thumb-t[e.size].padding*3,transition:{ease:"circInOut",duration:.05}},unchecked:{translateX:0,transition:{ease:"circInOut",duration:.05}}}),[e.size,e.value]);return l.jsxDEV(v,{$genre:e.genre,$isDisabled:e.isDisabled,$isDisabledOutline:e.isDisabled??e.isDisabledOutline,$isOutlineBoxShadow:e.isOutlineBoxShadow,$isReadOnly:e.isReadOnly,$value:e.value,$size:e.size,$error:e.error,tabIndex:0,onClick:()=>{var n;return(n=e.onChange)==null?void 0:n.call(e,!e.value)},whileTap:"tap",animate:e.value?"checked":"unchecked",onKeyDown:n=>{var i;n.key==="Enter"&&((i=e.onChange)==null||i.call(e,!e.value))},children:l.jsxDEV(x,{variants:c,$genre:e.genre,$isDisabled:e.isDisabled,$value:e.value,$size:e.size,$error:e.error},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/components/toggle/component.tsx",lineNumber:55,columnNumber:7},void 0)},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/components/toggle/component.tsx",lineNumber:38,columnNumber:5},void 0)};try{r.displayName="Toggle",r.__docgenInfo={description:"",displayName:"Toggle",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((checked: boolean) => void)"}},isDisabled:{defaultValue:null,description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},genre:{defaultValue:null,description:"",name:"genre",required:!0,type:{name:'"product"'}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"medium"'},{value:'"large"'},{value:'"small"'},{value:'"largeMedium"'},{value:'"mediumSmall"'}]}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"ErrorMessageProps"}},isReadOnly:{defaultValue:null,description:"",name:"isReadOnly",required:!1,type:{name:"boolean"}},isDisabledOutline:{defaultValue:null,description:"",name:"isDisabledOutline",required:!1,type:{name:"boolean"}},isOutlineBoxShadow:{defaultValue:null,description:"",name:"isOutlineBoxShadow",required:!1,type:{name:"boolean"}}}}}catch{}const $=a`
  ${e=>a`
    height: ${t[e.$size].height}px;
    width: ${t[e.$size].width}px;
    padding: ${t[e.$size].padding}px;
    border-radius: 100px;
  `};
`,b=a`
  ${e=>a`
  height: ${t[e.$size].thumb}px;
  width: ${t[e.$size].thumb}px;
  border-radius: 100px;
  `}
`,v=d(u.div)`
  cursor: pointer;
  border: 1px solid transparent;

  display: flex;
  align-items: center;

  ${$};
  ${o};
  ${s};
  ${m};

  ${e=>e.$value?a`
          background: ${e.theme.colors.toggle[e.$genre].active.rest.track};
          border-color: ${e.theme.colors.toggle[e.$genre].active.rest.border};
          justify-content: flex-start;
          &:hover {
            background: ${e.theme.colors.toggle[e.$genre].active.hover.track};
            border-color: ${e.theme.colors.toggle[e.$genre].active.hover.border};
          }
        `:a`
          background: ${e.theme.colors.toggle[e.$genre].unActive.rest.track};
          border-color: ${e.theme.colors.toggle[e.$genre].unActive.rest.border};
          justify-content: flex-start;
          &:hover {
            background: ${e.theme.colors.toggle[e.$genre].unActive.hover.track};
            border-color: ${e.theme.colors.toggle[e.$genre].unActive.hover.border};
          }
        `};

  ${h};
`,x=d(u.div)`
  ${b};
  ${o};

  ${e=>e.$value?a`
          background: ${e.theme.colors.toggle[e.$genre].active.rest.thumb};
          box-shadow: ${e.theme.colors.toggle[e.$genre].active.rest.thumbBoxShadow};
          &:hover {
            background: ${e.theme.colors.toggle[e.$genre].active.hover.thumb};
            box-shadow: ${e.theme.colors.toggle[e.$genre].active.hover.thumbBoxShadow};
          }
        `:a`
          background: ${e.theme.colors.toggle[e.$genre].unActive.rest.thumb};
          box-shadow: ${e.theme.colors.toggle[e.$genre].unActive.rest.thumbBoxShadow};
          &:hover {
            background: ${e.theme.colors.toggle[e.$genre].unActive.hover.thumb};
            box-shadow: ${e.theme.colors.toggle[e.$genre].unActive.hover.thumbBoxShadow};
          }
        `}
`;export{r as T};
