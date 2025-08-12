import{j as a,l as s,b as i,d as n,K as d}from"./iframe-DcM8uw4S.js";import{g as u}from"./component-ZvurOtfK.js";import{W as m}from"./motion-BzVqwi6J.js";const c=s`
  ${e=>e.$size?f({...d[e.$size],$isErrorAbsolute:e.$isErrorAbsolute}):null};
`,f=e=>s`
  ${e.$isErrorAbsolute?s`
        position: absolute;
        top: calc(100% + 4px);
        padding-left: ${e.padding}px;
        color: ${r=>r.theme.states.danger};
      `:s`
        position: static;
        padding: 0px ${e.padding}px;
        color: ${r=>r.theme.states.danger};
      `}
`,o=n.div`
  ${e=>u(12,400,e.theme.font.family)};
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  ${c}
  ${i}
`,y=s`
  ${e=>{var r;return((r=e.$error)==null?void 0:r.isError)&&s`
      border-color: ${t=>t.theme.states.danger};
      &:focus,
      &:active,
      &:hover,
      &:focus-visible {
        border-color: ${t=>t.theme.states.danger};
      }
    `}};
`,l=e=>a.jsxDEV(a.Fragment,{children:e.errorMessage&&e.isError?a.jsxDEV(o,{$size:e.size,$sx:e.sx,$isErrorAbsolute:e.isErrorAbsolute,children:a.jsxDEV(m,{text:e.errorMessage},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/styles/error/style.tsx",lineNumber:60,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/styles/error/style.tsx",lineNumber:59,columnNumber:9},void 0):null},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/styles/error/style.tsx",lineNumber:57,columnNumber:5},void 0);try{o.displayName="ErrorMessageComponent",o.__docgenInfo={description:"",displayName:"ErrorMessageComponent",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{l.displayName="ErrorMessage",l.__docgenInfo={description:"",displayName:"ErrorMessage",props:{errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"string"}},isError:{defaultValue:null,description:"",name:"isError",required:!1,type:{name:"boolean"}},isErrorAbsolute:{defaultValue:null,description:"",name:"isErrorAbsolute",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"largeMedium"'},{value:'"mediumSmall"'}]}},sx:{defaultValue:null,description:"",name:"sx",required:!1,type:{name:"SXProps"}}}}}catch{}export{l as E,y as a};
