import{f as b,b as $,h as y,e as h,c as g,d,m as v,K as i,l as n,n as x,r as s,j as t,g as E,R as V}from"./iframe-1BJ3w_50.js";import{g as p}from"./component.functions-5Lo1eb4y.js";import{u as k}from"./floating-ui.react-DF04B13p.js";const B=n`
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
`,q=n`
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
`,H=n`
  ${e=>e.$isRadius&&n`
      border-radius: 100px;
    `}
`,z=n`
  ${e=>e.$isPlaystationEffect&&n`
      box-shadow: ${e.theme.effects.button};
    `}
`,O=n`
  height: fit-content;
  min-height: ${e=>i[e.$size].height}px;
  max-height: fit-content;
  padding: 2px ${e=>i[e.$size].padding}px;
  border-radius: ${e=>i[e.$size].radius}px;
  gap: ${e=>i[e.$size].padding-2}px;
  ${e=>e.$isFullSize&&n`
    height: 100%;
    width: 100%;
    border-radius: 0px;
  `};
  ${e=>e.$isWidthAsHeight&&n`
  width: ${i[e.$size].height}px;
  min-width: ${i[e.$size].height}px;
  padding: 0px;
  `};
  ${e=>e.$isMinWidthAsContent&&n`
        min-width: max-content;
      `};
`,w=n`
  border: 1px solid transparent;
`,N=n`
  display: flex;
  align-items: center;
  justify-content: center;
`,M=d(v.button)`
  cursor: pointer;
  user-select: none;

  ${w};
  ${O};
  ${B};
  ${q};
  ${D};
  ${H};
  ${z};
  ${N};
  ${b};
  ${$};
  ${y};
  ${h};
  ${g};
`,S=d.div`
  ${e=>e.$isIconGroup?n`
          display: flex;
          gap: ${i[e.$size].padding-2}px;
          align-items: center;
          order: ${e.$iconGroupOrder||"initial"};
        `:n`
          display: contents;
        `}
`,o=e=>{const a=x(),u=s.useMemo(()=>p({icons:e.icons??[],size:e.size}),[e.icons,e.size]),r=f=>{!e.isDisabled&&e.onClick&&e.onClick(f)},c=s.useRef(null),m=k([c,e.ref]),l=!e.isDisabled&&e.isWhileTapEffect;return t.jsxDEV(M,{$isNotHoverEffect:e.isNotHoverEffect,whileTap:l?{scale:1.1,transition:{duration:.08,ease:"easeOut"}}:void 0,whileHover:l?{scale:.97,transition:{duration:.2,ease:"easeOut"}}:void 0,id:e.id,tabIndex:e.tabIndex??0,$isFullSize:e.isFullSize,$genre:e.genre,$size:e.size,$isDisabled:e.isDisabled,$isDisabledOutline:e.isDisabled??e.isDisabledOutline,$isOutlineBoxShadow:e.isOutlineBoxShadow,$isReadOnly:e.isReadOnly,$isMinWidthAsContent:e.isMinWidthAsContent,$isWidthAsHeight:e.isWidthAsHeight,$isRadius:e.isRadius,$isHidden:e.isHidden,$isPlaystationEffect:e.isPlaystationEffect,$sxTypography:E({size:e.size,weight:700,sx:e.sxTypography,theme:a}),$isHiddenBorder:e.isHiddenBorder||e.isPlaystationEffect,disabled:e.isDisabled,type:e.type??"button",className:e.className,onClick:r,onFocus:e.onFocus,onMouseDown:e.onMouseDown,ref:m,$sx:e.sx,children:[t.jsxDEV(V,{color:a.colors.checkbox[e.genre].color.rest,isDisabled:e.isDisabled||e.isDisabledRipple,isHidden:e.isHidden},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/components/button/component.tsx",lineNumber:61,columnNumber:7},void 0),!e.isOnlyIcon&&t.jsxDEV("div",{style:{order:0,display:"contents"},children:e.children&&e.children},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/components/button/component.tsx",lineNumber:67,columnNumber:29},void 0),t.jsxDEV(S,{$size:e.size,$isIconGroup:e.isIconGroup,$iconGroupOrder:"iconGroupOrder"in e?e.iconGroupOrder:void 0,children:u},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/components/button/component.tsx",lineNumber:68,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/components/button/component.tsx",lineNumber:32,columnNumber:5},void 0)};try{o.displayName="Button",o.__docgenInfo={description:"",displayName:"Button",props:{size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"large"'},{value:'"largeMedium"'},{value:'"medium"'},{value:'"mediumSmall"'},{value:'"small"'}]}},genre:{defaultValue:null,description:"",name:"genre",required:!0,type:{name:"enum",value:[{value:'"gray"'},{value:'"grayBorder"'},{value:'"black"'},{value:'"blackBorder"'},{value:'"product"'},{value:'"productBorder"'},{value:'"white"'},{value:'"greenTransparent"'},{value:'"redTransparent"'},{value:'"yellowTransparent"'},{value:'"realebail-product"'},{value:'"realebail-gray"'},{value:'"realebail-white"'},{value:'"bustmarket-gray-violet"'},{value:'"bustmarket-gray"'},{value:'"bustmarket-violet"'},{value:'"bustmarket-white-violet"'}]}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLElement | null>"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},icons:{defaultValue:null,description:"",name:"icons",required:!1,type:{name:'(Omit<{ type: string; name: any; className?: string; onClick?: ((event: MouseEvent<SVGSVGElement, MouseEvent>) => void); ... 4 more ...; tabIndex?: number | undefined; } & addSXProps, "size"> & { ...; })[] | undefined'}},isDisabled:{defaultValue:null,description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},isDisabledRipple:{defaultValue:null,description:"",name:"isDisabledRipple",required:!1,type:{name:"boolean"}},isHidden:{defaultValue:null,description:"",name:"isHidden",required:!1,type:{name:"boolean"}},isOnlyIcon:{defaultValue:null,description:"",name:"isOnlyIcon",required:!1,type:{name:"boolean"}},isWhileTapEffect:{defaultValue:null,description:"",name:"isWhileTapEffect",required:!1,type:{name:"boolean"}},isWidthAsHeight:{defaultValue:null,description:"",name:"isWidthAsHeight",required:!1,type:{name:"boolean"}},isMinWidthAsContent:{defaultValue:null,description:"",name:"isMinWidthAsContent",required:!1,type:{name:"boolean"}},isRadius:{defaultValue:null,description:"",name:"isRadius",required:!1,type:{name:"boolean"}},isHiddenBorder:{defaultValue:null,description:"",name:"isHiddenBorder",required:!1,type:{name:"boolean"}},isPlaystationEffect:{defaultValue:null,description:"",name:"isPlaystationEffect",required:!1,type:{name:"boolean"}},isNotHoverEffect:{defaultValue:null,description:"",name:"isNotHoverEffect",required:!1,type:{name:"boolean"}},isFullSize:{defaultValue:null,description:"",name:"isFullSize",required:!1,type:{name:"boolean"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"((event: FocusEvent<HTMLButtonElement, Element>) => void)"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}},onMouseDown:{defaultValue:null,description:"",name:"onMouseDown",required:!1,type:{name:"((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"submit"'},{value:'"reset"'}]}},sx:{defaultValue:null,description:"",name:"sx",required:!1,type:{name:"SXProps"}},isReadOnly:{defaultValue:null,description:"",name:"isReadOnly",required:!1,type:{name:"boolean"}},isDisabledOutline:{defaultValue:null,description:"",name:"isDisabledOutline",required:!1,type:{name:"boolean"}},isOutlineBoxShadow:{defaultValue:null,description:"",name:"isOutlineBoxShadow",required:!1,type:{name:"boolean"}},sxTypography:{defaultValue:null,description:"",name:"sxTypography",required:!1,type:{name:"TypographySXProps"}},isIconGroup:{defaultValue:null,description:"",name:"isIconGroup",required:!1,type:{name:"boolean"}},iconGroupOrder:{defaultValue:null,description:"",name:"iconGroupOrder",required:!1,type:{name:"number"}}}}}catch{}export{o as B};
