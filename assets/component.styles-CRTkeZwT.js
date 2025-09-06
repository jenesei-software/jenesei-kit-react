import{r as m,n as x,j as n,K as f,h as $,i as y,e as v,k as N,f as w,b as V,d as j,l as i,o as D}from"./iframe-DqtU7u_4.js";import{E as z,a as C}from"./style-BufZ4lZw.js";import{I as h}from"./component.styles-BSNyc6Hh.js";import{c as E}from"./component-BNEEvMJk.js";const b=e=>{var r,o,d,c,u;const g=m.useCallback(k=>{var s;(s=e.onChange)==null||s.call(e,k)},[e.onChange]),a=x(),t=m.useMemo(()=>n.jsxDEV(n.Fragment,{children:[n.jsxDEV(h,{...e.checked?e.view.true:e.view.false,size:(e.checked?e.view.true:e.view.false).size??e.size},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/components/checkbox/component.tsx",lineNumber:22,columnNumber:9},void 0),e.children&&e.children]},void 0,!0,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/components/checkbox/component.tsx",lineNumber:21,columnNumber:7},void 0),[e.checked,e.children,e.size,e.view]),l=n.jsxDEV(h,{size:e.size,type:"loading",name:"Line"},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/components/checkbox/component.tsx",lineNumber:31,columnNumber:28},void 0);return n.jsxDEV(n.Fragment,{children:[n.jsxDEV(T,{type:"button",$genre:e.genre,$error:e.error,$view:e.view,$font:{size:((r=e.font)==null?void 0:r.size)??f[e.size].font,weight:((o=e.font)==null?void 0:o.weight)??700,family:((d=e.font)==null?void 0:d.family)??a.font.family,height:(c=e.font)==null?void 0:c.height},$checked:e.checked,$isWidthAsHeight:e.isWidthAsHeight,$size:e.size,$isDisabled:e.isDisabled,$isHiddenBorder:e.isHiddenBorder,$isNotBackground:e.isNotBackground,$sx:e.sx,$sxTypography:e.sxTypography,$isDisabledOutline:e.isDisabled??e.isDisabledOutline,$isOutlineBoxShadow:e.isOutlineBoxShadow,$isReadOnly:e.isReadOnly,disabled:e.isDisabled,tabIndex:0,onClick:()=>!e.isDisabled&&g(!e.checked),children:[n.jsxDEV($,{color:a.colors.checkbox[e.genre].color.rest,isDisabled:e.isDisabled},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/components/checkbox/component.tsx",lineNumber:61,columnNumber:9},void 0),e.isOnlyLoading?e.isLoading?l:t:n.jsxDEV(n.Fragment,{children:[t,e.isLoading&&l]},void 0,!0,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/components/checkbox/component.tsx",lineNumber:69,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/components/checkbox/component.tsx",lineNumber:35,columnNumber:7},void 0),e!=null&&e.error?n.jsxDEV(z,{...e.error,size:(e==null?void 0:e.error.size)??e.size,font:{size:12,weight:400,family:((u=e.font)==null?void 0:u.family)??a.font.family}},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/components/checkbox/component.tsx",lineNumber:76,columnNumber:9},void 0):null]},void 0,!0,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/components/checkbox/component.tsx",lineNumber:34,columnNumber:5},void 0)};try{b.displayName="Checkbox",b.__docgenInfo={description:"",displayName:"Checkbox",props:{checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean"}},genre:{defaultValue:null,description:"",name:"genre",required:!0,type:{name:"enum",value:[{value:'"black"'},{value:'"gray"'},{value:'"white"'},{value:'"grayBorder"'},{value:'"blackBorder"'},{value:'"product"'},{value:'"productBorder"'},{value:'"greenTransparent"'},{value:'"redTransparent"'},{value:'"yellowTransparent"'},{value:'"realebail-product"'},{value:'"realebail-gray"'},{value:'"realebail-white"'},{value:'"bustmarket-gray-violet"'},{value:'"bustmarket-gray"'},{value:'"bustmarket-violet"'},{value:'"bustmarket-white-violet"'}]}},view:{defaultValue:null,description:"",name:"view",required:!0,type:{name:'{ true: Omit<{ type: string; name: any; className?: string | undefined; onClick?: ((event: MouseEvent<SVGSVGElement, MouseEvent>) => void) | undefined; ... 4 more ...; tabIndex?: number | undefined; } & addSXProps, "size"> & { ...; }; false: Omit<...> & { ...; }; }'}},isDisabled:{defaultValue:null,description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},isOnlyLoading:{defaultValue:null,description:"",name:"isOnlyLoading",required:!1,type:{name:"boolean"}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!1,type:{name:"boolean"}},isHiddenBorder:{defaultValue:null,description:"",name:"isHiddenBorder",required:!1,type:{name:"boolean"}},isNotBackground:{defaultValue:null,description:"",name:"isNotBackground",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((checked: boolean) => void)"}},isWidthAsHeight:{defaultValue:null,description:"",name:"isWidthAsHeight",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"medium"'},{value:'"large"'},{value:'"small"'},{value:'"largeMedium"'},{value:'"mediumSmall"'}]}},sx:{defaultValue:null,description:"",name:"sx",required:!1,type:{name:"SXProps"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"ErrorMessageProps"}},sxTypography:{defaultValue:null,description:"",name:"sxTypography",required:!1,type:{name:"TypographySXProps"}},isReadOnly:{defaultValue:null,description:"",name:"isReadOnly",required:!1,type:{name:"boolean"}},isDisabledOutline:{defaultValue:null,description:"",name:"isDisabledOutline",required:!1,type:{name:"boolean"}},isOutlineBoxShadow:{defaultValue:null,description:"",name:"isOutlineBoxShadow",required:!1,type:{name:"boolean"}},font:{defaultValue:null,description:"",name:"font",required:!1,type:{name:"FontSizeStylesProps"}}}}}catch{}const O=i`
  ${e=>q({...f[e.$size],isWidthAsHeight:e.$isWidthAsHeight})};
`,q=e=>i`
  height: ${e.height}px;
  min-height: ${e.height}px;
  border-radius: ${e.radius}px;
  gap: ${e.padding-2}px;
  padding: ${e.padding-4}px;
  ${e.isWidthAsHeight&&i`
    width: ${e.height}px;
    min-width: ${e.height}px;
    padding: 0px;
  `};
`,B=i`
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
`,S=i`
  ${D};
  ${e=>e.$isDisabled?i`
          background: ${e.theme.colors.checkbox[e.$genre].background.rest} !important;
          border-color: ${e.theme.colors.checkbox[e.$genre].border.rest} !important;
          color: ${e.theme.colors.checkbox[e.$genre].color.rest} !important;
        `:""}
`,H=i`
  ${e=>e.$isHiddenBorder&&i`
      border-color: transparent !important;
    `}
`,T=j.button`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border: 1px solid transparent;
  user-select: none;
  cursor: pointer;
  background-color: ${e=>e.$isNotBackground&&"transparent"};

  ${y};
  ${v};
  ${B};
  ${H};
  ${O};
  ${S}
  ${N};
  ${w};
  ${C};
  ${E};
  ${V};
`;export{b as C};
