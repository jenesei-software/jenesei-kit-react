import{n as v,r as l,j as r,D as V,f as q,h as w,b as R,d as $,K as i,l as n,g as E}from"./iframe-DcM8uw4S.js";import{E as z,a as k}from"./style-BKyxtLDF.js";import{a as A,g as s}from"./component-ZvurOtfK.js";const h=e=>{const u=v(),m=l.useRef(null),x=A([m,e.ref]),t=l.useMemo(()=>u.font.sizeDefault.default*u.font.lineHeight,[u.font.lineHeight,u.font.sizeDefault.default]),d=l.useMemo(()=>e.maxRows?e.maxRows*t:0,[t,e.maxRows]),c=l.useMemo(()=>e.minRows?e.minRows*t:t,[t,e.minRows]),f=l.useCallback(()=>{const a=m.current;if(a&&e.isAutoHeight){a.style.height="auto";const o=Math.min(a.scrollHeight,d);a.style.height=`${o}px`}},[e.isAutoHeight,d]),b=l.useCallback(a=>{var o,g;if(e.isNoSpaces){const y=a.replace(/\s+/g,"");(o=e.onChange)==null||o.call(e,y)}else(g=e.onChange)==null||g.call(e,a)},[e]);return l.useEffect(()=>{e.isAutoHeight&&requestAnimationFrame(f)},[e.value,f,e.isAutoHeight]),r.jsxDEV(r.Fragment,{children:[r.jsxDEV(N,{$isInputEffect:e.isInputEffect,$isDisabled:e.isDisabled,$sx:e.sx,$genre:e.genre,$size:e.size,$lineHeight:t,$isReadOnly:e.isReadOnly,className:e.className,tabIndex:-1,children:r.jsxDEV(C,{tabIndex:0,ref:x,$lineHeight:t,$isResize:e.isResize,$error:e.error,$isInputEffect:e.isInputEffect,$isLoading:e.isLoading,$genre:e.genre,$size:e.size,$isBold:e.isBold,$isDisabled:e.isDisabled,maxLength:e.maxLength,minLength:e.minLength,disabled:e.isDisabled,readOnly:e.isReadOnly,required:e.isRequired,defaultValue:e.defaultValue===null?"":e.defaultValue,value:e.value===null?"":e.value,rows:e.minRows,placeholder:e.placeholder,onChange:a=>b(a.target.value),onBlur:e.onBlur,onFocus:e.onFocus,onKeyDown:e.onKeyDown,name:e.name,autoComplete:e.autoComplete,id:e.id,style:{minHeight:`${c}px`,maxHeight:e.isResize?"none":e.isAutoHeight?`${d}px`:`${c}px`}},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/components/textarea/component.tsx",lineNumber:65,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/components/textarea/component.tsx",lineNumber:54,columnNumber:7},void 0),e!=null&&e.error?r.jsxDEV(z,{...e.error,size:(e==null?void 0:e.error.size)??e.size},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/components/textarea/component.tsx",lineNumber:99,columnNumber:23},void 0):null]},void 0,!0,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/components/textarea/component.tsx",lineNumber:53,columnNumber:5},void 0)};try{h.displayName="TextArea",h.__docgenInfo={description:"",displayName:"TextArea",props:{error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"ErrorMessageProps"}},sx:{defaultValue:null,description:"",name:"sx",required:!1,type:{name:"SXProps"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},autoComplete:{defaultValue:null,description:"",name:"autoComplete",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"RefObject<HTMLTextAreaElement | null>"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},genre:{defaultValue:null,description:"",name:"genre",required:!0,type:{name:"enum",value:[{value:'"gray"'},{value:'"grayBorder"'},{value:'"blackBorder"'},{value:'"realebail-white"'}]}},minRows:{defaultValue:null,description:"",name:"minRows",required:!0,type:{name:"number"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"largeMedium"'},{value:'"mediumSmall"'}]}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},maxLength:{defaultValue:null,description:"",name:"maxLength",required:!1,type:{name:"number"}},minLength:{defaultValue:null,description:"",name:"minLength",required:!1,type:{name:"number"}},isDisabled:{defaultValue:null,description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},isResize:{defaultValue:null,description:"",name:"isResize",required:!1,type:{name:"boolean"}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!1,type:{name:"boolean"}},isReadOnly:{defaultValue:null,description:"",name:"isReadOnly",required:!1,type:{name:"boolean"}},isInputEffect:{defaultValue:null,description:"",name:"isInputEffect",required:!1,type:{name:"boolean"}},isRequired:{defaultValue:null,description:"",name:"isRequired",required:!1,type:{name:"boolean"}},isNoSpaces:{defaultValue:null,description:"",name:"isNoSpaces",required:!1,type:{name:"boolean"}},isBold:{defaultValue:null,description:"",name:"isBold",required:!1,type:{name:"boolean"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"((event?: FocusEvent<HTMLTextAreaElement, Element>) => void)"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"((event?: FocusEvent<HTMLTextAreaElement, Element>) => void)"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: string) => void)"}},onKeyDown:{defaultValue:null,description:"",name:"onKeyDown",required:!1,type:{name:"KeyboardEventHandler<HTMLTextAreaElement>"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string | null"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string"}},isAutoHeight:{defaultValue:null,description:"",name:"isAutoHeight",required:!1,type:{name:"boolean"}},maxRows:{defaultValue:null,description:"",name:"maxRows",required:!1,type:{name:"number"}}}}}catch{}const H=n`
  ${e=>n`
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
`,T=n`
  ${e=>e.$isInputEffect&&n`
      box-shadow: ${e.theme.effects.input};
    `}
`,D=n`
  ${e=>n`
    padding: ${i[e.$size].padding-4}px ${i[e.$size].padding}px ${i[e.$size].padding-4}px ${i[e.$size].padding}px;
    border-radius: ${i[e.$size].radius}px;
    min-height: ${i[e.$size].height}px;
  `};
`,N=$.div`
  border: 1px solid;
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  overflow: hidden;
  width: 100%;
  ${V};
  ${D};
  ${H};
  ${T};
  ${q};
  ${w};
  ${R};
`,L=n`
  &::placeholder,
  &::-webkit-input-placeholder {
    ${e=>s(16,e.$isBold?500:400,e.theme.font.family,e.theme.font.lineHeight)};
    color: ${e=>e.theme.colors.input[e.$genre].color.placeholder};
    opacity: 1;
  }
  &:-ms-input-placeholder {
    ${e=>s(16,e.$isBold?500:400,e.theme.font.family,e.theme.font.lineHeight)};
    color: ${e=>e.theme.colors.input[e.$genre].color.placeholder};
    opacity: 1;
  }
`,j=n`
  ${e=>n`
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
`,I=n`
  ${e=>!e.$isResize&&n`
      resize: none;
    `}
`,B=n`
  overflow-x: hidden;
  width: -webkit-fill-available;
  padding: 0 !important;
  border: none !important;
  margin: 0 !important;
  white-space: normal;
  text-overflow: ellipsis;
  height: auto;
  background-color: transparent;
  ${e=>s(16,e.$isBold?500:400,e.theme.font.family,`${e.$lineHeight}px`)};

  ${j};
  ${I};
  ${L};
  ${E};
  ${k};
`,C=$.textarea`
  ${B};
`;export{h as T};
