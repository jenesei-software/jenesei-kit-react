import{z as V,i as w,B as q,c as T,d as x,K as r,l as a,e as s,o as E,n as z,r as t,j as u,g as h}from"./iframe-1BJ3w_50.js";import{a as k,E as R}from"./component-BgnCZAcu.js";import{u as D}from"./floating-ui.react-DF04B13p.js";const A=a`
  ${e=>a`
    background: ${e.theme.colors.input[e.$genre].background.rest};
    border-color: ${e.theme.colors.input[e.$genre].border.rest};
    color: ${e.theme.colors.input[e.$genre].color.rest};

    &:active {
      background: ${e.theme.colors.input[e.$genre].background.rest};
      border-color: ${e.theme.colors.input[e.$genre].border.rest};
      color: ${e.theme.colors.input[e.$genre].color.rest};
    }
    &:hover {
      background: ${e.theme.colors.input[e.$genre].background.hover};
      border-color: ${e.theme.colors.input[e.$genre].border.hover};
      color: ${e.theme.colors.input[e.$genre].color.hover};
    }
    &:focus-visible {
      border-color: ${e.theme.colors.input[e.$genre].border.rest};
      background: ${e.theme.colors.input[e.$genre].background.rest};
      color: ${e.theme.colors.input[e.$genre].color.rest};
    }
  `};
`,H=a`
  ${e=>e.$isInputEffect&&a`
      box-shadow: ${e.theme.effects.input};
    `}
`,L=a`
  ${e=>a`
    padding: ${r[e.$size].padding-4}px ${r[e.$size].padding}px ${r[e.$size].padding-4}px ${r[e.$size].padding}px;
    border-radius: ${r[e.$size].radius}px;
    min-height: ${r[e.$size].height}px;
  `};
`,N=x.div`
  border: 1px solid;
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  overflow: hidden;
  width: 100%;
  ${V};
  ${L};
  ${A};
  ${H};
  ${w};
  ${q};
  ${T};
`,M=a`
  &::placeholder,
  &::-webkit-input-placeholder {
    ${s};
    color: ${e=>e.theme.colors.input[e.$genre].color.placeholder};
    opacity: 1;
  }
  &:-ms-input-placeholder {
    ${s};
    color: ${e=>e.theme.colors.input[e.$genre].color.placeholder};
    opacity: 1;
  }
`,O=a`
  ${e=>a`
    color: ${e.theme.colors.input[e.$genre].color.rest};
    border-color: transparent;
    &:active {
      color: ${e.theme.colors.input[e.$genre].color.rest};
    }
    &:hover {
      color: ${e.theme.colors.input[e.$genre].color.hover};
    }
    &:focus-visible {
      color: ${e.theme.colors.input[e.$genre].color.rest};
    }
  `};
`,S=a`
  ${e=>!e.$isResize&&a`
      resize: none;
    `}
`,C=a`
  overflow-x: hidden;
  width: -webkit-fill-available;
  padding: 0 !important;
  border: none !important;
  margin: 0 !important;
  white-space: normal;
  text-overflow: ellipsis;
  height: auto;
  background-color: transparent;

  ${s};
  ${O};
  ${S};
  ${M};
  ${E};
  ${k};
`,j=x.textarea`
  ${C};
`,$=e=>{const i=z(),c=t.useRef(null),y=D([c,e.ref]),l=t.useMemo(()=>i.font.sizeDevice.default*i.font.lineHeight,[i.font.lineHeight,i.font.sizeDevice.default]),d=t.useMemo(()=>e.maxRows?e.maxRows*l:0,[l,e.maxRows]),m=t.useMemo(()=>e.minRows?e.minRows*l:l,[l,e.minRows]),f=t.useCallback(()=>{const n=c.current;if(n&&e.isAutoHeight){n.style.height="auto";const o=Math.min(n.scrollHeight,d);n.style.height=`${o}px`}},[e.isAutoHeight,d]),b=t.useCallback(n=>{var o,g;if(e.isNoSpaces){const v=n.replace(/\s+/g,"");(o=e.onChange)==null||o.call(e,v)}else(g=e.onChange)==null||g.call(e,n)},[e]);return t.useEffect(()=>{e.isAutoHeight&&requestAnimationFrame(f)},[e.value,f,e.isAutoHeight]),u.jsxDEV(u.Fragment,{children:[u.jsxDEV(N,{$isInputEffect:e.isInputEffect,$isDisabled:e.isDisabled,$isDisabledOutline:e.isDisabled??e.isDisabledOutline,$isOutlineBoxShadow:e.isOutlineBoxShadow,$sx:e.sx,$genre:e.genre,$size:e.size,$lineHeight:l,$isReadOnly:e.isReadOnly,className:e.className,tabIndex:-1,children:u.jsxDEV(j,{tabIndex:0,ref:y,$sxTypography:h({size:e.size,weight:e.isBold?500:400,sx:e.sxTypography,theme:i}),$lineHeight:l,$isResize:e.isResize,$error:e.error,$isInputEffect:e.isInputEffect,$isLoading:e.isLoading,$genre:e.genre,$size:e.size,$isBold:e.isBold,$isDisabled:e.isDisabled,maxLength:e.maxLength,minLength:e.minLength,disabled:e.isDisabled,readOnly:e.isReadOnly,required:e.isRequired,defaultValue:e.defaultValue===null?"":e.defaultValue,value:e.value===null?"":e.value,rows:e.minRows,placeholder:e.placeholder,onChange:n=>b(n.target.value),onBlur:e.onBlur,onFocus:e.onFocus,onKeyDown:e.onKeyDown,onMouseDown:e.onMouseDown,onClick:e.onClick,name:e.name,"aria-label":e.ariaLabel??e.name,autoComplete:e.autoComplete,id:e.id,style:{minHeight:`${m}px`,maxHeight:e.isResize?"none":e.isAutoHeight?`${d}px`:`${m}px`}},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/components/textarea/component.tsx",lineNumber:69,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/components/textarea/component.tsx",lineNumber:56,columnNumber:7},void 0),e!=null&&e.error?u.jsxDEV(R,{...e.error,size:(e==null?void 0:e.error.size)??e.size,sxTypography:h({size:e.size,weight:400,sx:e.sxTypography,theme:i})},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/components/textarea/component.tsx",lineNumber:113,columnNumber:9},void 0):null]},void 0,!0,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/components/textarea/component.tsx",lineNumber:55,columnNumber:5},void 0)};try{$.displayName="TextArea",$.__docgenInfo={description:"",displayName:"TextArea",props:{error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"ErrorMessageProps"}},sxTypography:{defaultValue:null,description:"",name:"sxTypography",required:!1,type:{name:"TypographySXProps"}},sx:{defaultValue:null,description:"",name:"sx",required:!1,type:{name:"SXProps"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},ariaLabel:{defaultValue:null,description:"",name:"ariaLabel",required:!1,type:{name:"string"}},autoComplete:{defaultValue:null,description:"",name:"autoComplete",required:!1,type:{name:"string | (string & {})"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"RefObject<HTMLTextAreaElement | null>"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},genre:{defaultValue:null,description:"",name:"genre",required:!0,type:{name:"enum",value:[{value:'"gray"'},{value:'"grayBorder"'},{value:'"blackBorder"'},{value:'"realebail-white"'},{value:'"bustmarket-gray"'}]}},minRows:{defaultValue:null,description:"",name:"minRows",required:!0,type:{name:"number"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"large"'},{value:'"largeMedium"'},{value:'"medium"'},{value:'"mediumSmall"'},{value:'"small"'}]}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},maxLength:{defaultValue:null,description:"",name:"maxLength",required:!1,type:{name:"number"}},minLength:{defaultValue:null,description:"",name:"minLength",required:!1,type:{name:"number"}},isDisabled:{defaultValue:null,description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},isDisabledOutline:{defaultValue:null,description:"",name:"isDisabledOutline",required:!1,type:{name:"boolean"}},isOutlineBoxShadow:{defaultValue:null,description:"",name:"isOutlineBoxShadow",required:!1,type:{name:"boolean"}},isResize:{defaultValue:null,description:"",name:"isResize",required:!1,type:{name:"boolean"}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!1,type:{name:"boolean"}},isReadOnly:{defaultValue:null,description:"",name:"isReadOnly",required:!1,type:{name:"boolean"}},isInputEffect:{defaultValue:null,description:"",name:"isInputEffect",required:!1,type:{name:"boolean"}},isRequired:{defaultValue:null,description:"",name:"isRequired",required:!1,type:{name:"boolean"}},isNoSpaces:{defaultValue:null,description:"",name:"isNoSpaces",required:!1,type:{name:"boolean"}},isBold:{defaultValue:null,description:"",name:"isBold",required:!1,type:{name:"boolean"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"((event?: FocusEvent<HTMLTextAreaElement, Element>) => void)"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"((event?: FocusEvent<HTMLTextAreaElement, Element>) => void)"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: string) => void)"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLTextAreaElement>"}},onMouseDown:{defaultValue:null,description:"",name:"onMouseDown",required:!1,type:{name:"MouseEventHandler<HTMLTextAreaElement>"}},onKeyDown:{defaultValue:null,description:"",name:"onKeyDown",required:!1,type:{name:"KeyboardEventHandler<HTMLTextAreaElement>"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string | null"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string"}},isAutoHeight:{defaultValue:null,description:"",name:"isAutoHeight",required:!1,type:{name:"boolean"}},maxRows:{defaultValue:null,description:"",name:"maxRows",required:!1,type:{name:"number"}}}}}catch{}export{$ as T};
