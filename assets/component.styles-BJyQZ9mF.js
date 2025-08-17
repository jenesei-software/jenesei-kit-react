import{r as o,n as h,j as n,R as b,l as a,d,t as k,c as g,i as x,b as $,K as f,f as v}from"./iframe-C1cYW8BR.js";import{E as y,a as N}from"./style-BXiExXCy.js";import{I as u}from"./component.styles-Aang4-k1.js";import{d as j,g as V}from"./component-Cc1LbGxv.js";const c=e=>{const i=o.useCallback(m=>{var l;(l=e.onChange)==null||l.call(e,m)},[e]),s=h(),r=o.useMemo(()=>n.jsxDEV(n.Fragment,{children:[n.jsxDEV(B,{size:e.sizeIcon||e.size,name:e.view,type:"checkbox",order:e.iconOrder,$genre:e.genre,$checked:e.checked},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/components/checkbox/component.tsx",lineNumber:21,columnNumber:9},void 0),e.children&&e.children]},void 0,!0,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/components/checkbox/component.tsx",lineNumber:20,columnNumber:7},void 0),[e.checked,e.children,e.genre,e.iconOrder,e.size,e.sizeIcon,e.view]),t=n.jsxDEV(u,{size:e.size,type:"loading",name:"Line"},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/components/checkbox/component.tsx",lineNumber:34,columnNumber:28},void 0);return n.jsxDEV(n.Fragment,{children:[n.jsxDEV(E,{type:"button",$genre:e.genre,$error:e.error,$view:e.view,$checked:e.checked,$isWidthAsHeight:e.isWidthAsHeight,$size:e.size,$isDisabled:e.isDisabled,$isHiddenBorder:e.isHiddenBorder,$isNotBackground:e.isNotBackground,$sx:e.sx,$sxTypography:e.sxTypography,disabled:e.isDisabled,tabIndex:0,onClick:()=>!e.isDisabled&&i(!e.checked),children:[n.jsxDEV(b,{color:s.colors.checkbox[e.genre].color.rest,isDisabled:e.isDisabled},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/components/checkbox/component.tsx",lineNumber:55,columnNumber:9},void 0),e.isOnlyLoading?e.isLoading?t:r:n.jsxDEV(n.Fragment,{children:[r,e.isLoading&&t]},void 0,!0,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/components/checkbox/component.tsx",lineNumber:63,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/components/checkbox/component.tsx",lineNumber:38,columnNumber:7},void 0),e!=null&&e.error?n.jsxDEV(y,{...e.error,size:(e==null?void 0:e.error.size)??e.size},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/components/checkbox/component.tsx",lineNumber:69,columnNumber:23},void 0):null]},void 0,!0,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/components/checkbox/component.tsx",lineNumber:37,columnNumber:5},void 0)};try{c.displayName="Checkbox",c.__docgenInfo={description:"",displayName:"Checkbox",props:{checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean"}},genre:{defaultValue:null,description:"",name:"genre",required:!0,type:{name:"enum",value:[{value:'"gray"'},{value:'"grayBorder"'},{value:'"black"'},{value:'"blackBorder"'},{value:'"product"'},{value:'"productBorder"'},{value:'"white"'},{value:'"greenTransparent"'},{value:'"redTransparent"'},{value:'"yellowTransparent"'},{value:'"realebail-product"'},{value:'"realebail-gray"'},{value:'"realebail-white"'},{value:'"bustmarket-gray-violet"'},{value:'"bustmarket-gray"'},{value:'"bustmarket-violet"'},{value:'"bustmarket-white-violet"'}]}},view:{defaultValue:null,description:"",name:"view",required:!0,type:{name:"enum",value:[{value:'"Radio"'},{value:'"Square"'},{value:'"Arrow"'},{value:'"Heart"'}]}},isDisabled:{defaultValue:null,description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},isOnlyLoading:{defaultValue:null,description:"",name:"isOnlyLoading",required:!1,type:{name:"boolean"}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!1,type:{name:"boolean"}},isHiddenBorder:{defaultValue:null,description:"",name:"isHiddenBorder",required:!1,type:{name:"boolean"}},isNotBackground:{defaultValue:null,description:"",name:"isNotBackground",required:!1,type:{name:"boolean"}},iconOrder:{defaultValue:null,description:"",name:"iconOrder",required:!1,type:{name:"number"}},sizeIcon:{defaultValue:null,description:"",name:"sizeIcon",required:!1,type:{name:"enum",value:[{value:'"large"'},{value:'"largeMedium"'},{value:'"medium"'},{value:'"mediumSmall"'},{value:'"small"'}]}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((checked: boolean) => void)"}},isWidthAsHeight:{defaultValue:null,description:"",name:"isWidthAsHeight",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"large"'},{value:'"largeMedium"'},{value:'"medium"'},{value:'"mediumSmall"'},{value:'"small"'}]}},sx:{defaultValue:null,description:"",name:"sx",required:!1,type:{name:"SXProps"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"ErrorMessageProps"}},sxTypography:{defaultValue:null,description:"",name:"sxTypography",required:!1,type:{name:"TypographySXProps"}}}}}catch{}const D=a`
  ${e=>w({...f[e.$size],isWidthAsHeight:e.$isWidthAsHeight})};
`,w=e=>a`
  height: ${e.height}px;
  min-height: ${e.height}px;
  border-radius: ${e.radius}px;
  gap: ${e.padding-2}px;
  ${i=>V(e.font,700,i.theme.font.family)};
  padding: ${e.padding-4}px;
  ${e.isWidthAsHeight&&a`
    width: ${e.height}px;
    min-width: ${e.height}px;
    padding: 0px;
  `};
`,z=a`
  ${e=>a`
    background: ${e.theme.colors.checkbox[e.$genre].background.rest};
    border-color: ${e.theme.colors.checkbox[e.$genre].border.rest};
    color: ${e.theme.colors.checkbox[e.$genre].color.rest};
    &:hover {
      background: ${e.theme.colors.checkbox[e.$genre].background.hover};
      border-color: ${e.theme.colors.checkbox[e.$genre].border.hover};
      color: ${e.theme.colors.checkbox[e.$genre].color.hover};
    }
  `};
`,C=a`
  ${v};
  ${e=>e.$isDisabled?a`
          background: ${e.theme.colors.checkbox[e.$genre].background.rest} !important;
          border-color: ${e.theme.colors.checkbox[e.$genre].border.rest} !important;
          color: ${e.theme.colors.checkbox[e.$genre].color.rest} !important;
        `:""}
`,q=a`
  ${e=>e.$isHiddenBorder&&a`
      border-color: transparent !important;
    `}
`,E=d.button`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border: 1px solid transparent;
  user-select: none;
  cursor: pointer;
  background-color: ${e=>e.$isNotBackground&&"transparent"};

  ${k};
  ${g};
  ${z};
  ${q};
  ${D};
  ${C}
  ${x};
  ${N};
  ${j};
  ${$};
`,B=d(u)`
  ${e=>e.$checked?a`
          & #check {
            color: inherit;
          }
          & #uncheck {
            color: transparent;
          }
        `:a`
          & #check {
            color: transparent;
          }
          & #uncheck {
            color: inherit;
          }
        `}
`;export{c as C};
