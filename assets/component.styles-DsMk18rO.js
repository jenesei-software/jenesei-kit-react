import{n as R,r as l,j as u,u as E,o as k,v as A,b as D,d as V,K as r,l as n,f as s,p as T}from"./iframe-DqtU7u_4.js";import{E as H,a as N}from"./style-BufZ4lZw.js";import{a as O}from"./component-BNEEvMJk.js";const v=e=>{var h,g,$,x,b;const i=R(),m=l.useRef(null),w=O([m,e.ref]),t=l.useMemo(()=>i.font.sizeDefault.default*i.font.lineHeight,[i.font.lineHeight,i.font.sizeDefault.default]),d=l.useMemo(()=>e.maxRows?e.maxRows*t:0,[t,e.maxRows]),c=l.useMemo(()=>e.minRows?e.minRows*t:t,[t,e.minRows]),f=l.useCallback(()=>{const a=m.current;if(a&&e.isAutoHeight){a.style.height="auto";const o=Math.min(a.scrollHeight,d);a.style.height=`${o}px`}},[e.isAutoHeight,d]),q=l.useCallback(a=>{var o,y;if(e.isNoSpaces){const z=a.replace(/\s+/g,"");(o=e.onChange)==null||o.call(e,z)}else(y=e.onChange)==null||y.call(e,a)},[e]);return l.useEffect(()=>{e.isAutoHeight&&requestAnimationFrame(f)},[e.value,f,e.isAutoHeight]),u.jsxDEV(u.Fragment,{children:[u.jsxDEV(B,{$isInputEffect:e.isInputEffect,$isDisabled:e.isDisabled,$isDisabledOutline:e.isDisabled??e.isDisabledOutline,$isOutlineBoxShadow:e.isOutlineBoxShadow,$sx:e.sx,$genre:e.genre,$size:e.size,$lineHeight:t,$isReadOnly:e.isReadOnly,className:e.className,tabIndex:-1,children:u.jsxDEV(_,{tabIndex:0,ref:w,$font:{size:((h=e.font)==null?void 0:h.size)??16,weight:((g=e.font)==null?void 0:g.weight)??(e.isBold?500:400),family:(($=e.font)==null?void 0:$.family)??i.font.family,height:((x=e.font)==null?void 0:x.height)??`${t}px`},$lineHeight:t,$isResize:e.isResize,$error:e.error,$isInputEffect:e.isInputEffect,$isLoading:e.isLoading,$genre:e.genre,$size:e.size,$isBold:e.isBold,$isDisabled:e.isDisabled,maxLength:e.maxLength,minLength:e.minLength,disabled:e.isDisabled,readOnly:e.isReadOnly,required:e.isRequired,defaultValue:e.defaultValue===null?"":e.defaultValue,value:e.value===null?"":e.value,rows:e.minRows,placeholder:e.placeholder,onChange:a=>q(a.target.value),onBlur:e.onBlur,onFocus:e.onFocus,onKeyDown:e.onKeyDown,name:e.name,autoComplete:e.autoComplete,id:e.id,style:{minHeight:`${c}px`,maxHeight:e.isResize?"none":e.isAutoHeight?`${d}px`:`${c}px`}},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/components/textarea/component.tsx",lineNumber:67,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/components/textarea/component.tsx",lineNumber:54,columnNumber:7},void 0),e!=null&&e.error?u.jsxDEV(H,{...e.error,size:(e==null?void 0:e.error.size)??e.size,font:{size:12,weight:400,family:((b=e.font)==null?void 0:b.family)??i.font.family}},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/components/textarea/component.tsx",lineNumber:108,columnNumber:9},void 0):null]},void 0,!0,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/components/textarea/component.tsx",lineNumber:53,columnNumber:5},void 0)};try{v.displayName="TextArea",v.__docgenInfo={description:"",displayName:"TextArea",props:{error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"ErrorMessageProps"}},font:{defaultValue:null,description:"",name:"font",required:!1,type:{name:"FontSizeStylesProps"}},sx:{defaultValue:null,description:"",name:"sx",required:!1,type:{name:"SXProps"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},autoComplete:{defaultValue:null,description:"",name:"autoComplete",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"RefObject<HTMLTextAreaElement | null>"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},genre:{defaultValue:null,description:"",name:"genre",required:!0,type:{name:"enum",value:[{value:'"gray"'},{value:'"grayBorder"'},{value:'"blackBorder"'},{value:'"realebail-white"'}]}},minRows:{defaultValue:null,description:"",name:"minRows",required:!0,type:{name:"number"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"medium"'},{value:'"large"'},{value:'"small"'},{value:'"largeMedium"'},{value:'"mediumSmall"'}]}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},maxLength:{defaultValue:null,description:"",name:"maxLength",required:!1,type:{name:"number"}},minLength:{defaultValue:null,description:"",name:"minLength",required:!1,type:{name:"number"}},isDisabled:{defaultValue:null,description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},isDisabledOutline:{defaultValue:null,description:"",name:"isDisabledOutline",required:!1,type:{name:"boolean"}},isOutlineBoxShadow:{defaultValue:null,description:"",name:"isOutlineBoxShadow",required:!1,type:{name:"boolean"}},isResize:{defaultValue:null,description:"",name:"isResize",required:!1,type:{name:"boolean"}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!1,type:{name:"boolean"}},isReadOnly:{defaultValue:null,description:"",name:"isReadOnly",required:!1,type:{name:"boolean"}},isInputEffect:{defaultValue:null,description:"",name:"isInputEffect",required:!1,type:{name:"boolean"}},isRequired:{defaultValue:null,description:"",name:"isRequired",required:!1,type:{name:"boolean"}},isNoSpaces:{defaultValue:null,description:"",name:"isNoSpaces",required:!1,type:{name:"boolean"}},isBold:{defaultValue:null,description:"",name:"isBold",required:!1,type:{name:"boolean"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"((event?: FocusEvent<HTMLTextAreaElement, Element>) => void)"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"((event?: FocusEvent<HTMLTextAreaElement, Element>) => void)"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: string) => void)"}},onKeyDown:{defaultValue:null,description:"",name:"onKeyDown",required:!1,type:{name:"KeyboardEventHandler<HTMLTextAreaElement>"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string | null"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string"}},isAutoHeight:{defaultValue:null,description:"",name:"isAutoHeight",required:!1,type:{name:"boolean"}},maxRows:{defaultValue:null,description:"",name:"maxRows",required:!1,type:{name:"number"}}}}}catch{}const L=n`
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
`,S=n`
  ${e=>e.$isInputEffect&&n`
      box-shadow: ${e.theme.effects.input};
    `}
`,j=n`
  ${e=>n`
    padding: ${r[e.$size].padding-4}px ${r[e.$size].padding}px ${r[e.$size].padding-4}px ${r[e.$size].padding}px;
    border-radius: ${r[e.$size].radius}px;
    min-height: ${r[e.$size].height}px;
  `};
`,B=V.div`
  border: 1px solid;
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  overflow: hidden;
  width: 100%;
  ${E};
  ${j};
  ${L};
  ${S};
  ${k};
  ${A};
  ${D};
`,I=n`
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
`,C=n`
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
`,M=n`
  ${e=>!e.$isResize&&n`
      resize: none;
    `}
`,F=n`
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
  ${C};
  ${M};
  ${I};
  ${T};
  ${N};
`,_=V.textarea`
  ${F};
`;export{v as T};
