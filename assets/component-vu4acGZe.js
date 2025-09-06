import{i as h,e as g,f as v,k as x,b as V,d as c,m as E,K as i,l as n,n as k,r as u,j as t,h as q}from"./iframe-DqtU7u_4.js";import{g as B}from"./component.styles-BSNyc6Hh.js";import{c as p,a as D}from"./component-BNEEvMJk.js";const H=n`
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
`,z=n`
  ${e=>e.$isHidden?n`
          opacity: 0.5;
          background: ${e.theme.colors.button[e.$genre].background.rest} !important;
          color: ${e.theme.colors.button[e.$genre].color.rest} !important;
        `:n`
          opacity: 1;
        `}
`,w=n`
  ${e=>e.$isHiddenBorder&&n`
      border: 0px transparent !important;
    `}
`,N=n`
  ${e=>e.$isRadius&&n`
      border-radius: 100px;
    `}
`,O=n`
  ${e=>e.$isPlaystationEffect&&n`
      box-shadow: ${e.theme.effects.button};
    `}
`,S=n`
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
`,M=n`
  border: 1px solid transparent;
`,I=n`
  display: flex;
  align-items: center;
  justify-content: center;
`,R=c(E.button)`
  cursor: pointer;
  user-select: none;

  ${M};
  ${S};
  ${H};
  ${z};
  ${w};
  ${N};
  ${O};
  ${I};
  ${h};
  ${g};
  ${v};
  ${x};
  ${p};
  ${V};
`,T=c.div`
  ${e=>e.$isIconGroup?n`
          display: flex;
          gap: ${i[e.$size].padding-2}px;
          align-items: center;
          order: ${e.$iconGroupOrder||"initial"};
        `:n`
          display: contents;
        `}
`,r=e=>{var l,o,d,s;const a=k(),m=u.useMemo(()=>B({icons:e.icons??[],size:e.size}),[e.icons,e.size]),f=$=>{!e.isDisabled&&e.onClick&&e.onClick($)},b=u.useRef(null),y=D([b,e.ref]);return t.jsxDEV(R,{$font:{size:((l=e.font)==null?void 0:l.size)??i[e.size].font,weight:((o=e.font)==null?void 0:o.weight)??700,family:((d=e.font)==null?void 0:d.family)??a.font.family,height:(s=e.font)==null?void 0:s.height},$isNotHoverEffect:e.isNotHoverEffect,whileTap:e.isWhileTapEffect?{scale:.9,transition:{duration:.01}}:{},id:e.id,tabIndex:e.tabIndex??0,$isFullSize:e.isFullSize,$genre:e.genre,$size:e.size,$isDisabled:e.isDisabled,$isDisabledOutline:e.isDisabled??e.isDisabledOutline,$isOutlineBoxShadow:e.isOutlineBoxShadow,$isReadOnly:e.isReadOnly,$isMinWidthAsContent:e.isMinWidthAsContent,$isWidthAsHeight:e.isWidthAsHeight,$isRadius:e.isRadius,$isHidden:e.isHidden,$isPlaystationEffect:e.isPlaystationEffect,$sxTypography:e.sxTypography,$isHiddenBorder:e.isHiddenBorder||e.isPlaystationEffect,disabled:e.isDisabled,type:e.type??"button",className:e.className,onClick:f,onFocus:e.onFocus,onMouseDown:e.onMouseDown,ref:y,$sx:e.sx,children:[t.jsxDEV(q,{color:a.colors.checkbox[e.genre].color.rest,isDisabled:e.isDisabled??e.isDisabledRipple,isHidden:e.isHidden},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/components/button/component.tsx",lineNumber:63,columnNumber:7},void 0),!e.isOnlyIcon&&t.jsxDEV("div",{style:{order:0,display:"contents"},children:e.children&&e.children},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/components/button/component.tsx",lineNumber:69,columnNumber:29},void 0),t.jsxDEV(T,{$size:e.size,$isIconGroup:e.isIconGroup,$iconGroupOrder:"iconGroupOrder"in e?e.iconGroupOrder:void 0,children:m},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/components/button/component.tsx",lineNumber:70,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/components/button/component.tsx",lineNumber:29,columnNumber:5},void 0)};try{r.displayName="Button",r.__docgenInfo={description:"",displayName:"Button",props:{size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"medium"'},{value:'"large"'},{value:'"small"'},{value:'"largeMedium"'},{value:'"mediumSmall"'}]}},genre:{defaultValue:null,description:"",name:"genre",required:!0,type:{name:"enum",value:[{value:'"black"'},{value:'"gray"'},{value:'"white"'},{value:'"grayBorder"'},{value:'"blackBorder"'},{value:'"product"'},{value:'"productBorder"'},{value:'"greenTransparent"'},{value:'"redTransparent"'},{value:'"yellowTransparent"'},{value:'"realebail-product"'},{value:'"realebail-gray"'},{value:'"realebail-white"'},{value:'"bustmarket-gray-violet"'},{value:'"bustmarket-gray"'},{value:'"bustmarket-violet"'},{value:'"bustmarket-white-violet"'}]}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLElement | null>"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},icons:{defaultValue:null,description:"",name:"icons",required:!1,type:{name:'(Omit<{ type: string; name: any; className?: string; onClick?: ((event: MouseEvent<SVGSVGElement, MouseEvent>) => void); ... 4 more ...; tabIndex?: number | undefined; } & addSXProps, "size"> & { ...; })[] | undefined'}},isDisabled:{defaultValue:null,description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},isDisabledRipple:{defaultValue:null,description:"",name:"isDisabledRipple",required:!1,type:{name:"boolean"}},isHidden:{defaultValue:null,description:"",name:"isHidden",required:!1,type:{name:"boolean"}},isOnlyIcon:{defaultValue:null,description:"",name:"isOnlyIcon",required:!1,type:{name:"boolean"}},isWhileTapEffect:{defaultValue:null,description:"",name:"isWhileTapEffect",required:!1,type:{name:"boolean"}},isWidthAsHeight:{defaultValue:null,description:"",name:"isWidthAsHeight",required:!1,type:{name:"boolean"}},isMinWidthAsContent:{defaultValue:null,description:"",name:"isMinWidthAsContent",required:!1,type:{name:"boolean"}},isRadius:{defaultValue:null,description:"",name:"isRadius",required:!1,type:{name:"boolean"}},isHiddenBorder:{defaultValue:null,description:"",name:"isHiddenBorder",required:!1,type:{name:"boolean"}},isPlaystationEffect:{defaultValue:null,description:"",name:"isPlaystationEffect",required:!1,type:{name:"boolean"}},isNotHoverEffect:{defaultValue:null,description:"",name:"isNotHoverEffect",required:!1,type:{name:"boolean"}},isFullSize:{defaultValue:null,description:"",name:"isFullSize",required:!1,type:{name:"boolean"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"((event: FocusEvent<HTMLButtonElement, Element>) => void)"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}},onMouseDown:{defaultValue:null,description:"",name:"onMouseDown",required:!1,type:{name:"((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"reset"'},{value:'"submit"'}]}},sx:{defaultValue:null,description:"",name:"sx",required:!1,type:{name:"SXProps"}},font:{defaultValue:null,description:"",name:"font",required:!1,type:{name:"FontSizeStylesProps"}},isReadOnly:{defaultValue:null,description:"",name:"isReadOnly",required:!1,type:{name:"boolean"}},isDisabledOutline:{defaultValue:null,description:"",name:"isDisabledOutline",required:!1,type:{name:"boolean"}},isOutlineBoxShadow:{defaultValue:null,description:"",name:"isOutlineBoxShadow",required:!1,type:{name:"boolean"}},sxTypography:{defaultValue:null,description:"",name:"sxTypography",required:!1,type:{name:"TypographySXProps"}},isIconGroup:{defaultValue:null,description:"",name:"isIconGroup",required:!1,type:{name:"boolean"}},iconGroupOrder:{defaultValue:null,description:"",name:"iconGroupOrder",required:!1,type:{name:"number"}}}}}catch{}export{r as B};
