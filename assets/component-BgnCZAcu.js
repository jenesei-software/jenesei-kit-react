import{j as a,l as s,c as t,e as l,d,K as n}from"./iframe-1BJ3w_50.js";import{W as u}from"./motion-BWMfmUrw.js";const m=s`
  ${e=>e.$size?e.$isErrorAbsolute?s`
        position: absolute;
        top: calc(100% + 4px);
        padding-left: ${n[e.$size].padding}px;
        color: ${r=>r.theme.states.danger};
      `:s`
        position: static;
        padding: 0px ${n[e.$size].padding}px;
        color: ${r=>r.theme.states.danger};
      `:null}
`,c=d.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  ${m};
  ${t};
  ${l};
`,g=s`
  ${e=>{var r;return((r=e.$error)==null?void 0:r.isError)&&s`
      border-color: ${o=>o.theme.states.danger};
      &:focus,
      &:active,
      &:hover,
      &:focus-visible {
        border-color: ${o=>o.theme.states.danger};
      }
    `}};
`,i=e=>a.jsxDEV(a.Fragment,{children:e.errorMessage&&e.isError?a.jsxDEV(c,{$size:e.size,$sxTypography:e.sxTypography,$sx:e.sx,$isErrorAbsolute:e.isErrorAbsolute,children:a.jsxDEV(u,{text:e.errorMessage},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/components/error/component.tsx",lineNumber:61,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/components/error/component.tsx",lineNumber:55,columnNumber:9},void 0):null},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/components/error/component.tsx",lineNumber:53,columnNumber:5},void 0);try{i.displayName="ErrorMessage",i.__docgenInfo={description:"",displayName:"ErrorMessage",props:{errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"string"}},isError:{defaultValue:null,description:"",name:"isError",required:!1,type:{name:"boolean"}},isErrorAbsolute:{defaultValue:null,description:"",name:"isErrorAbsolute",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"large"'},{value:'"largeMedium"'},{value:'"medium"'},{value:'"mediumSmall"'},{value:'"small"'}]}},sxTypography:{defaultValue:null,description:"",name:"sxTypography",required:!1,type:{name:"TypographySXProps"}},sx:{defaultValue:null,description:"",name:"sx",required:!1,type:{name:"SXProps"}}}}}catch{}export{i as E,g as a};
