import{f as b,b as g,h as k,e as x,c as $,d as f,l as i,K as a,i as y,r as d,n as v,j as n,g as c,R as N}from"./iframe-1BJ3w_50.js";import{a as w,E as j}from"./component-BgnCZAcu.js";import{I as s}from"./component.functions-5Lo1eb4y.js";const D=i`
  ${e=>i`
  height: ${a[e.$size].height}px;
  min-height: ${a[e.$size].height}px;
  border-radius: ${a[e.$size].radius}px;
  gap: ${a[e.$size].padding-2}px;
  padding: ${a[e.$size].padding-4}px;
  ${e.$isWidthAsHeight&&i`
    width: ${a[e.$size].height}px;
    min-width: ${a[e.$size].height}px;
    padding: 0px;
  `};
  `};
`,V=i`
  ${e=>i`
    background: ${e.theme.colors.checkbox[e.$genre].background.rest};
    border-color: ${e.theme.colors.checkbox[e.$genre].border.rest};
    color: ${e.theme.colors.checkbox[e.$genre].color.rest};
    &:hover {
      background: ${e.theme.colors.checkbox[e.$genre].background.hover};
      border-color: ${e.theme.colors.checkbox[e.$genre].border.hover};
      color: ${e.theme.colors.checkbox[e.$genre].color.hover};
    }
  `};
`,z=i`
  ${y};
  ${e=>e.$isDisabled?i`
          background: ${e.theme.colors.checkbox[e.$genre].background.rest} !important;
          border-color: ${e.theme.colors.checkbox[e.$genre].border.rest} !important;
          color: ${e.theme.colors.checkbox[e.$genre].color.rest} !important;
        `:""}
`,E=i`
  ${e=>e.$isHiddenBorder&&i`
      border-color: transparent !important;
    `}
`,O=f.button`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border: 1px solid transparent;
  user-select: none;
  cursor: pointer;
  background-color: ${e=>e.$isNotBackground&&"transparent"};

  ${b};
  ${g};
  ${V};
  ${E};
  ${D};
  ${z}
  ${k};
  ${w};
  ${x};
  ${$};
`,u=e=>{const m=d.useCallback(h=>{var o;(o=e.onChange)==null||o.call(e,h)},[e.onChange]),r=v(),t=d.useMemo(()=>n.jsxDEV(n.Fragment,{children:[n.jsxDEV(s,{...e.checked?e.view.true:e.view.false,size:(e.checked?e.view.true:e.view.false).size??e.size},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/components/checkbox/component.tsx",lineNumber:23,columnNumber:9},void 0),e.children&&e.children]},void 0,!0,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/components/checkbox/component.tsx",lineNumber:22,columnNumber:7},void 0),[e.checked,e.children,e.size,e.view]),l=n.jsxDEV(s,{size:e.size,type:"loading",name:"Line"},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/components/checkbox/component.tsx",lineNumber:32,columnNumber:28},void 0);return n.jsxDEV(n.Fragment,{children:[n.jsxDEV(O,{type:"button",$genre:e.genre,$error:e.error,$view:e.view,$checked:e.checked,$isWidthAsHeight:e.isWidthAsHeight,$size:e.size,$isDisabled:e.isDisabled,$isHiddenBorder:e.isHiddenBorder,$isNotBackground:e.isNotBackground,$sx:e.sx,$sxTypography:c({size:e.size,weight:700,sx:e.sxTypography,theme:r}),$isDisabledOutline:e.isDisabled??e.isDisabledOutline,$isOutlineBoxShadow:e.isOutlineBoxShadow,$isReadOnly:e.isReadOnly,disabled:e.isDisabled,tabIndex:0,onClick:()=>!e.isDisabled&&m(!e.checked),children:[n.jsxDEV(N,{color:r.colors.checkbox[e.genre].color.rest,isDisabled:e.isDisabled},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/components/checkbox/component.tsx",lineNumber:56,columnNumber:9},void 0),e.isOnlyLoading?e.isLoading?l:t:n.jsxDEV(n.Fragment,{children:[t,e.isLoading&&l]},void 0,!0,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/components/checkbox/component.tsx",lineNumber:64,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/components/checkbox/component.tsx",lineNumber:36,columnNumber:7},void 0),e!=null&&e.error?n.jsxDEV(j,{size:(e==null?void 0:e.error.size)??e.size,sxTypography:c({size:"medium",weight:400,sx:e.sxTypography,theme:r}),...e.error},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/components/checkbox/component.tsx",lineNumber:71,columnNumber:9},void 0):null]},void 0,!0,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/components/checkbox/component.tsx",lineNumber:35,columnNumber:5},void 0)};try{u.displayName="Checkbox",u.__docgenInfo={description:"",displayName:"Checkbox",props:{checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean"}},genre:{defaultValue:null,description:"",name:"genre",required:!0,type:{name:"enum",value:[{value:'"gray"'},{value:'"grayBorder"'},{value:'"black"'},{value:'"blackBorder"'},{value:'"product"'},{value:'"productBorder"'},{value:'"white"'},{value:'"greenTransparent"'},{value:'"redTransparent"'},{value:'"yellowTransparent"'},{value:'"realebail-product"'},{value:'"realebail-gray"'},{value:'"realebail-white"'},{value:'"bustmarket-gray-violet"'},{value:'"bustmarket-gray"'},{value:'"bustmarket-violet"'},{value:'"bustmarket-white-violet"'}]}},view:{defaultValue:null,description:"",name:"view",required:!0,type:{name:'{ true: Omit<{ type: string; name: any; className?: string | undefined; onClick?: ((event: MouseEvent<SVGSVGElement, MouseEvent>) => void) | undefined; ... 4 more ...; tabIndex?: number | undefined; } & addSXProps, "size"> & { ...; }; false: Omit<...> & { ...; }; }'}},isDisabled:{defaultValue:null,description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},isOnlyLoading:{defaultValue:null,description:"",name:"isOnlyLoading",required:!1,type:{name:"boolean"}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!1,type:{name:"boolean"}},isHiddenBorder:{defaultValue:null,description:"",name:"isHiddenBorder",required:!1,type:{name:"boolean"}},isNotBackground:{defaultValue:null,description:"",name:"isNotBackground",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((checked: boolean) => void)"}},isWidthAsHeight:{defaultValue:null,description:"",name:"isWidthAsHeight",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"large"'},{value:'"largeMedium"'},{value:'"medium"'},{value:'"mediumSmall"'},{value:'"small"'}]}},sx:{defaultValue:null,description:"",name:"sx",required:!1,type:{name:"SXProps"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"ErrorMessageProps"}},sxTypography:{defaultValue:null,description:"",name:"sxTypography",required:!1,type:{name:"TypographySXProps"}},isReadOnly:{defaultValue:null,description:"",name:"isReadOnly",required:!1,type:{name:"boolean"}},isDisabledOutline:{defaultValue:null,description:"",name:"isDisabledOutline",required:!1,type:{name:"boolean"}},isOutlineBoxShadow:{defaultValue:null,description:"",name:"isOutlineBoxShadow",required:!1,type:{name:"boolean"}}}}}catch{}export{u as C};
