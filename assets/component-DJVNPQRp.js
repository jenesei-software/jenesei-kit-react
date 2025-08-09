import{v as y,c as g,i as v,b as x,d as m,m as k,K as f,l as n,n as z,r as d,j as a,R as E}from"./iframe-B6wTuebw.js";import{I as l}from"./component.styles-DJkzBuyw.js";import{d as N,g as V,a as p}from"./component-Drvbu2mC.js";const H=n`
  ${e=>n`
    background: ${e.theme.colors.button[e.$genre].background.rest};
    border-color: ${e.theme.colors.button[e.$genre].border.rest};
    color: ${e.theme.colors.button[e.$genre].color.rest};
    &:hover {
      ${(!e.$isHidden||e.$isNotHoverEffect)&&n`
        background: ${e.theme.colors.button[e.$genre].background.hover};
        border-color: ${e.theme.colors.button[e.$genre].border.hover};
        color: ${e.theme.colors.button[e.$genre].color.hover};
      `}
    }
  `};
`,j=n`
  ${e=>e.$isHidden?n`
          opacity: 0.5;
          background: ${e.theme.colors.button[e.$genre].background.rest} !important;
          color: ${e.theme.colors.button[e.$genre].color.rest} !important;
        `:n`
          opacity: 1;
        `}
`,D=n`
  ${e=>e.$isHiddenBorder&&n`
      border: 0px transparent !important;
    `}
`,B=n`
  ${e=>e.$isRadius&&n`
      border-radius: 100px;
    `}
`,q=n`
  ${e=>e.$isPlaystationEffect&&n`
      box-shadow: ${e.theme.effects.button};
    `}
`,I=m.div`
  ${e=>e.$isIconGroup?n`
          display: flex;
          gap: ${f[e.$size].padding-2}px;
          align-items: center;
          order: ${e.$iconGroupOrder||"initial"};
        `:n`
          display: contents;
        `}
`,w=n`
  ${e=>M({...f[e.$size],isFullSize:e.$isFullSize,isWidthAsHeight:e.$isWidthAsHeight,isMinWidthAsContent:e.$isMinWidthAsContent})};
`,M=e=>n`
  height: fit-content;
  min-height: ${e.height}px;
  max-height: fit-content;
  padding: 2px ${e.padding}px;
  border-radius: ${e.radius}px;
  gap: ${e.padding-2}px;
  ${s=>V(e.font,700,s.theme.font.family)};
  ${()=>e.isFullSize&&n`
      height: 100%;
      width: 100%;
      border-radius: 0px;
    `};
  ${e.isWidthAsHeight&&n`
    width: ${e.height}px;
    min-width: ${e.height}px;
    padding: 0px;
  `};
  ${e.isMinWidthAsContent&&n`
    min-width: max-content;
  `};
`,S=n`
  border: 1px solid transparent;
`,T=n`
  display: flex;
  align-items: center;
  justify-content: center;
`,W=m(k.button)`
  cursor: pointer;
  user-select: none;

  ${S};
  ${w};
  ${H};
  ${j};
  ${D};
  ${B};
  ${q};
  ${T};
  ${y};
  ${g};
  ${v};
  ${N};
  ${x};
`,o=e=>{const s=z(),c=d.useMemo(()=>{var r,u;return(u=(r=e.icons??[])==null?void 0:r.filter(t=>!t.isHidden))==null?void 0:u.map((t,i)=>(t==null?void 0:t.type)==="id"?a.jsxDEV(l,{name:t==null?void 0:t.name,type:"id",size:(t==null?void 0:t.size)??e.size,turn:t.turn,order:t.order},`${t.type}-${t.name}-${i}`,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/components/button/component.tsx",lineNumber:26,columnNumber:13},void 0):(t==null?void 0:t.type)==="logo"?a.jsxDEV(l,{name:t==null?void 0:t.name,type:"logo",size:(t==null?void 0:t.size)??e.size,turn:t.turn,order:t.order},`${t.type}-${t.name}-${i}`,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/components/button/component.tsx",lineNumber:35,columnNumber:13},void 0):(t==null?void 0:t.type)==="checkbox"?a.jsxDEV(l,{name:t==null?void 0:t.name,type:"checkbox",size:(t==null?void 0:t.size)??e.size,turn:t.turn,order:t.order},`${t.type}-${t.name}-${i}`,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/components/button/component.tsx",lineNumber:44,columnNumber:13},void 0):(t==null?void 0:t.type)==="loading"?a.jsxDEV(l,{name:t==null?void 0:t.name,type:"loading",size:(t==null?void 0:t.size)??e.size,turn:t.turn,order:t.order},`${t.type}-${t.name}-${i}`,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/components/button/component.tsx",lineNumber:53,columnNumber:13},void 0):(t==null?void 0:t.type)==="realebail"?a.jsxDEV(l,{name:t==null?void 0:t.name,type:"realebail",size:(t==null?void 0:t.size)??e.size,turn:t.turn,order:t.order},`${t.type}-${t.name}-${i}`,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/components/button/component.tsx",lineNumber:62,columnNumber:13},void 0):null)},[e.icons,e.size]),b=r=>{!e.isDisabled&&e.onClick&&e.onClick(r)},$=d.useRef(null),h=p([$,e.ref]);return a.jsxDEV(W,{$isNotHoverEffect:e.isNotHoverEffect,whileTap:e.isWhileTapEffect?{scale:.9,transition:{duration:.02}}:{},id:e.id,tabIndex:e.tabIndex??0,$isFullSize:e.isFullSize,$genre:e.genre,$size:e.size,$isDisabled:e.isDisabled,$isMinWidthAsContent:e.isMinWidthAsContent,$isWidthAsHeight:e.isWidthAsHeight,$isRadius:e.isRadius,$isHidden:e.isHidden,$isPlaystationEffect:e.isPlaystationEffect,$sxTypography:e.sxTypography,$isHiddenBorder:e.isHiddenBorder||e.isPlaystationEffect,disabled:e.isDisabled,type:e.type??"button",className:e.className,onClick:b,onFocus:e.onFocus,onMouseDown:e.onMouseDown,ref:h,$sx:e.sx,children:[a.jsxDEV(E,{color:s.colors.checkbox[e.genre].color.rest,isDisabled:e.isDisabled??e.isDisabledRipple,isHidden:e.isHidden},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/components/button/component.tsx",lineNumber:110,columnNumber:7},void 0),!e.isOnlyIcon&&a.jsxDEV("div",{style:{order:0,display:"contents"},children:e.children&&e.children},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/components/button/component.tsx",lineNumber:116,columnNumber:29},void 0),a.jsxDEV(I,{$size:e.size,$isIconGroup:e.isIconGroup,$iconGroupOrder:"iconGroupOrder"in e?e.iconGroupOrder:void 0,children:c},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/components/button/component.tsx",lineNumber:117,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/components/button/component.tsx",lineNumber:85,columnNumber:5},void 0)};try{o.displayName="Button",o.__docgenInfo={description:"",displayName:"Button",props:{size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"largeMedium"'},{value:'"mediumSmall"'}]}},genre:{defaultValue:null,description:"",name:"genre",required:!0,type:{name:"enum",value:[{value:'"black"'},{value:'"gray"'},{value:'"white"'},{value:'"grayBorder"'},{value:'"blackBorder"'},{value:'"product"'},{value:'"productBorder"'},{value:'"greenTransparent"'},{value:'"redTransparent"'},{value:'"yellowTransparent"'},{value:'"realebail-product"'},{value:'"realebail-gray"'},{value:'"realebail-white"'}]}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLElement | null>"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},icons:{defaultValue:null,description:"",name:"icons",required:!1,type:{name:'((Omit<IconItemProps<"id">, "size"> & { isHidden?: boolean; size?: IThemeSize | "100%"; }) | (Omit<IconItemProps<"checkbox">, "size"> & { ...; }) | (Omit<...> & { ...; }) | (Omit<...> & { ...; }) | (Omit<...> & { ...; }))[] | undefined'}},isDisabled:{defaultValue:null,description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},isDisabledRipple:{defaultValue:null,description:"",name:"isDisabledRipple",required:!1,type:{name:"boolean"}},isHidden:{defaultValue:null,description:"",name:"isHidden",required:!1,type:{name:"boolean"}},isOnlyIcon:{defaultValue:null,description:"",name:"isOnlyIcon",required:!1,type:{name:"boolean"}},isWhileTapEffect:{defaultValue:null,description:"",name:"isWhileTapEffect",required:!1,type:{name:"boolean"}},isWidthAsHeight:{defaultValue:null,description:"",name:"isWidthAsHeight",required:!1,type:{name:"boolean"}},isMinWidthAsContent:{defaultValue:null,description:"",name:"isMinWidthAsContent",required:!1,type:{name:"boolean"}},isRadius:{defaultValue:null,description:"",name:"isRadius",required:!1,type:{name:"boolean"}},isHiddenBorder:{defaultValue:null,description:"",name:"isHiddenBorder",required:!1,type:{name:"boolean"}},isPlaystationEffect:{defaultValue:null,description:"",name:"isPlaystationEffect",required:!1,type:{name:"boolean"}},isNotHoverEffect:{defaultValue:null,description:"",name:"isNotHoverEffect",required:!1,type:{name:"boolean"}},isFullSize:{defaultValue:null,description:"",name:"isFullSize",required:!1,type:{name:"boolean"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"((event: FocusEvent<HTMLButtonElement, Element>) => void)"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}},onMouseDown:{defaultValue:null,description:"",name:"onMouseDown",required:!1,type:{name:"((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"reset"'},{value:'"submit"'}]}},sx:{defaultValue:null,description:"",name:"sx",required:!1,type:{name:"SXProps"}},sxTypography:{defaultValue:null,description:"",name:"sxTypography",required:!1,type:{name:"TypographySXProps"}},isIconGroup:{defaultValue:null,description:"",name:"isIconGroup",required:!1,type:{name:"boolean"}},iconGroupOrder:{defaultValue:null,description:"",name:"iconGroupOrder",required:!1,type:{name:"number"}}}}}catch{}export{o as B};
