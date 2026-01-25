import{J as ce,d as g,F as ve,l as H,j as o,r as l,S as ke}from"./iframe-1BJ3w_50.js";import{c as ye,T as m}from"./component-Bhe_aONY.js";import{P as Ne}from"./area-AAM9WxCo.js";import"./preload-helper-C1FmrZbK.js";import"./floating-ui.react-DF04B13p.js";import"./index-B2jwwQNa.js";import"./use-TW0LbYqD.js";import"./link-BZsJ5i8W.js";import"./index-B7Qfo0ta.js";import"./component.functions-5Lo1eb4y.js";import"./area-22l_fHsN.js";const je=g.div`
  display: flex;
  flex-direction: column;
  max-width: 100dvw;
  min-height: 100dvh;
  width: 100%;
  overflow: hidden;
  position: relative;

  background-color: ${e=>ce[e.$bgColor]};
  background-image: url(${e=>e.$bgImage});
`,Ce=e=>{var a,s,u,d,r,t,i,f;let n=`
    "notification notification notification"
    "header header header"
    "nav nav nav"
    "leftAside children rightAside"
    "footer footer footer"
  `;return n=`
      "notification notification notification"
      "${(a=e.$leftAside)!=null&&a.isTopHeader?"leftAside":"header"} header ${(s=e.$rightAside)!=null&&s.isTopHeader?"rightAside":"header"}"
      "${(u=e.$leftAside)!=null&&u.isTopHeader||(d=e.$leftAside)!=null&&d.isTopNav?"leftAside":"nav"} nav ${(r=e.$rightAside)!=null&&r.isTopHeader||(t=e.$rightAside)!=null&&t.isTopNav?"rightAside":"nav"}"
      "leftAside children rightAside"
      "${(i=e.$leftAside)!=null&&i.isTopFooter?"leftAside":"footer"} footer ${(f=e.$rightAside)!=null&&f.isTopFooter?"rightAside":"footer"}"
    `,n};function te(e){return H`
    grid-template-columns: ${()=>`${e.leftAsideWidth} 1fr ${e.rightAsideWidth}`};
    grid-template-rows: ${()=>`${e.notificationHeight} ${e.headerHeight} ${e.navHeight} 1fr ${e.footerHeight}`};
  `}const we=H`
  ${e=>{var t,i,f,x,b,p,h,c,v,k,j,C;const n=(i=(t=e.$leftAside)==null?void 0:t.length)==null?void 0:i.default,a=(x=(f=e.$rightAside)==null?void 0:f.length)==null?void 0:x.default,s=(p=(b=e.$notification)==null?void 0:b.length)==null?void 0:p.default,u=(c=(h=e.$header)==null?void 0:h.length)==null?void 0:c.default,d=(k=(v=e.$nav)==null?void 0:v.length)==null?void 0:k.default,r=(C=(j=e.$footer)==null?void 0:j.length)==null?void 0:C.default;return te({leftAsideWidth:n??"0px",rightAsideWidth:a??"0px",notificationHeight:s??"0px",headerHeight:u??"0px",navHeight:d??"0px",footerHeight:r??"0px"})}}
  ${e=>{var t,i,f,x,b,p;const n=(t=e.$leftAside)==null?void 0:t.length,a=(i=e.$rightAside)==null?void 0:i.length,s=(f=e.$notification)==null?void 0:f.length,u=(x=e.$header)==null?void 0:x.length,d=(b=e.$nav)==null?void 0:b.length,r=(p=e.$footer)==null?void 0:p.length;return Object.entries(e.theme.screens).filter(([h])=>h!=="default").map(([h])=>{var k;const c=h,v=(k=e.theme.screens[c])==null?void 0:k.width;return v?H`
          @media (max-width: ${v}px) {
            ${te({leftAsideWidth:n!=null&&n[c]?n[c]:"0px",rightAsideWidth:a!=null&&a[c]?a[c]:"0px",notificationHeight:s!=null&&s[c]?s[c]:"0px",headerHeight:u!=null&&u[c]?u[c]:"0px",navHeight:d!=null&&d[c]?d[c]:"0px",footerHeight:r!=null&&r[c]?r[c]:"0px"})}
          }
        `:null})}}
`,Ae=g.div`
  display: grid;
  width: 100%;
  height: 100%;

  overflow-y: auto;
  overflow-x: hidden;
  
  min-height: 100dvh;
  max-height: 100dvh;
  
  ${ve};

  ${e=>`
    grid-template-areas: ${Ce(e)};
  `}

  ${we};
`,Ie=g.main`
  z-index: ${e=>{var n;return((n=e==null?void 0:e.$main)==null?void 0:n.zIndex)??"auto"}};
  display: flex;
  grid-area: children;
  max-width: 100%;
  max-height: 100%;
  overflow: ${e=>e.$isScrollOutlet?"auto":"visible"};
  scrollbar-gutter: stable;
`,He=g.section`
  z-index: ${e=>{var n;return((n=e==null?void 0:e.$notification)==null?void 0:n.zIndex)??"auto"}};
  grid-area: notification;
  display: flex;
`,$e=g.header`
  z-index: ${e=>{var n;return((n=e==null?void 0:e.$header)==null?void 0:n.zIndex)??"auto"}};
  grid-area: header;
  display: flex;
`,Se=g.footer`
  z-index: ${e=>{var n;return((n=e==null?void 0:e.$footer)==null?void 0:n.zIndex)??"auto"}};
  grid-area: footer;
  display: flex;
`,Be=g.nav`
  z-index: ${e=>{var n;return((n=e==null?void 0:e.$nav)==null?void 0:n.zIndex)??"auto"}};
  grid-area: nav;
  display: flex;
`,De=g.aside`
  z-index: ${e=>{var n;return((n=e==null?void 0:e.$leftAside)==null?void 0:n.zIndex)??"auto"}};
  grid-area: leftAside;
  display: flex;
`,Ee=g.aside`
  z-index: ${e=>{var n;return((n=e==null?void 0:e.$rightAside)==null?void 0:n.zIndex)??"auto"}};
  grid-area: rightAside;
  display: flex;
`,$=l.createContext(null),N=e=>{var P,O,z,F,J,W,q,R,G,L,X,K,M,Q,U,Y,Z,ee;const{bgColor:n,changeBgColor:a,historyBgColor:s,setDefaultBgColor:u}=S(e.defaultBgColor),{statusBarColor:d,changeStatusBarColor:r,historyStatusBarColor:t,setDefaultStatusBarColor:i}=B(e.defaultStatusBarColor),{bgImage:f,changeBgImage:x,historyBgImage:b,setDefaultBgImage:p}=D(e.defaultBgImage||null),{title:h,changeTitle:c,setHistoryTitle:v,setDefaultTitle:k}=_e(e.defaultTitle||null),{description:j,changeDescription:C,historyDescription:he,setDefaultDescription:xe}=E(e.defaultDescription),{changePreview:be,previewProps:pe}=Ve(e.defaultPreview),{screenActual:y}=ye();return o.jsxDEV($.Provider,{value:{changePreview:be,changeStatusBarColor:r,changeBgColor:a,changeBgImage:x,changeTitle:c,changeDescription:C,historyStatusBarColor:t,historyBgColor:s,historyBgImage:b,setHistoryTitle:v,historyDescription:he,setDefaultStatusBarColor:i,setDefaultBgColor:u,setDefaultBgImage:p,setDefaultTitle:k,setDefaultDescription:xe},children:[o.jsxDEV("title",{children:h},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/contexts/context-app/context.tsx",lineNumber:80,columnNumber:7},void 0),o.jsxDEV("meta",{name:"description",content:j},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/contexts/context-app/context.tsx",lineNumber:81,columnNumber:7},void 0),o.jsxDEV("meta",{name:"theme-color",content:ce[d]},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/contexts/context-app/context.tsx",lineNumber:82,columnNumber:7},void 0),o.jsxDEV("meta",{name:"apple-mobile-web-app-status-bar-style",content:"default"},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/contexts/context-app/context.tsx",lineNumber:83,columnNumber:7},void 0),o.jsxDEV("meta",{name:"mobile-web-app-capable",content:"yes"},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/contexts/context-app/context.tsx",lineNumber:84,columnNumber:7},void 0),o.jsxDEV(Ne,{...pe,children:o.jsxDEV(je,{$bgColor:n,$bgImage:f,children:o.jsxDEV(Ae,{$isScrollOutlet:e.isScrollOutlet,$footer:e.footer,$notification:e.notification,$header:e.header,$nav:e.nav,$leftAside:e.leftAside,$rightAside:e.rightAside,children:[(O=(P=e.notification)==null?void 0:P.length)!=null&&O[y]?o.jsxDEV(He,{$notification:e.notification,children:((z=e.notification)==null?void 0:z.component)||null},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/contexts/context-app/context.tsx",lineNumber:97,columnNumber:15},void 0):null,(J=(F=e.header)==null?void 0:F.length)!=null&&J[y]?o.jsxDEV($e,{$header:e.header,children:((W=e.header)==null?void 0:W.component)||null},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/contexts/context-app/context.tsx",lineNumber:103,columnNumber:15},void 0):null,(R=(q=e.nav)==null?void 0:q.length)!=null&&R[y]?o.jsxDEV(Be,{$nav:e.nav,children:((G=e.nav)==null?void 0:G.component)||null},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/contexts/context-app/context.tsx",lineNumber:109,columnNumber:15},void 0):null,(X=(L=e.leftAside)==null?void 0:L.length)!=null&&X[y]?o.jsxDEV(De,{$leftAside:e.leftAside,children:((K=e.leftAside)==null?void 0:K.component)||null},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/contexts/context-app/context.tsx",lineNumber:113,columnNumber:15},void 0):null,o.jsxDEV(Ie,{$isScrollOutlet:e.isScrollOutlet,$main:e.main,children:e.children},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/contexts/context-app/context.tsx",lineNumber:118,columnNumber:13},void 0),(Q=(M=e.rightAside)==null?void 0:M.length)!=null&&Q[y]?o.jsxDEV(Ee,{$rightAside:e.rightAside,children:((U=e.rightAside)==null?void 0:U.component)||null},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/contexts/context-app/context.tsx",lineNumber:123,columnNumber:15},void 0):null,(Z=(Y=e.footer)==null?void 0:Y.length)!=null&&Z[y]?o.jsxDEV(Se,{$footer:e.footer,children:((ee=e.footer)==null?void 0:ee.component)||null},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/contexts/context-app/context.tsx",lineNumber:129,columnNumber:15},void 0):null]},void 0,!0,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/contexts/context-app/context.tsx",lineNumber:87,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/contexts/context-app/context.tsx",lineNumber:86,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/contexts/context-app/context.tsx",lineNumber:85,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/contexts/context-app/context.tsx",lineNumber:60,columnNumber:5},void 0)},Ve=e=>{const[n,a]=l.useState(e||{visible:!0,defaultVisible:!0}),s=l.useCallback(u=>{a(u)},[]);return l.useEffect(()=>{e&&a(e)},[e]),{previewProps:n,changePreview:s}},S=e=>{const[n,a]=l.useState({bgColor:e,bgColorHistory:[e],bgColorIndex:0}),s=l.useCallback(r=>{a(t=>{const i=[...t.bgColorHistory.slice(0,t.bgColorIndex+1),r];return{bgColor:r,bgColorHistory:i,bgColorIndex:i.length-1}})},[]),u=l.useCallback(r=>{a(t=>{const i=t.bgColorIndex+r;return i>=0&&i<t.bgColorHistory.length?{...t,bgColor:t.bgColorHistory[i],bgColorIndex:i}:t})},[]),d=l.useCallback(()=>{a({bgColor:e,bgColorHistory:[e],bgColorIndex:0})},[e]);return l.useEffect(()=>{a({bgColor:e,bgColorHistory:[e],bgColorIndex:0})},[e]),{bgColor:n.bgColor,changeBgColor:s,historyBgColor:u,setDefaultBgColor:d,bgColorIndex:n.bgColorIndex}},B=e=>{const[n,a]=l.useState({statusBarColor:e,statusBarColorHistory:[e],statusBarColorIndex:0}),s=l.useCallback(r=>{a(t=>{const i=[...t.statusBarColorHistory.slice(0,t.statusBarColorIndex+1),r];return{statusBarColor:r,statusBarColorHistory:i,statusBarColorIndex:i.length-1}})},[]),u=l.useCallback(r=>{a(t=>{const i=t.statusBarColorIndex+r;return i>=0&&i<t.statusBarColorHistory.length?{...t,statusBarColor:t.statusBarColorHistory[i],statusBarColorIndex:i}:t})},[]),d=l.useCallback(()=>{a({statusBarColor:e,statusBarColorHistory:[e],statusBarColorIndex:0})},[e]);return l.useEffect(()=>{a({statusBarColor:e,statusBarColorHistory:[e],statusBarColorIndex:0})},[e]),{statusBarColor:n.statusBarColor,changeStatusBarColor:s,historyStatusBarColor:u,setDefaultStatusBarColor:d,statusBarColorIndex:n.statusBarColorIndex}},D=e=>{const[n,a]=l.useState({bgImage:e,bgImageHistory:[e],bgImageIndex:0}),s=l.useCallback(r=>{a(t=>{const i=[...t.bgImageHistory.slice(0,t.bgImageIndex+1),r];return{bgImage:r,bgImageHistory:i,bgImageIndex:i.length-1}})},[]),u=l.useCallback(r=>{a(t=>{const i=t.bgImageIndex+r;return i>=0&&i<t.bgImageHistory.length?{...t,bgImage:t.bgImageHistory[i],bgImageIndex:i}:t})},[]),d=l.useCallback(()=>{a({bgImage:e,bgImageHistory:[e],bgImageIndex:0})},[e]);return l.useEffect(()=>{a({bgImage:e,bgImageHistory:[e],bgImageIndex:0})},[e]),{bgImage:n.bgImage,changeBgImage:s,historyBgImage:u,setDefaultBgImage:d,bgImageIndex:n.bgImageIndex}},_e=e=>{const[n,a]=l.useState({title:e,titleHistory:[e],titleIndex:0}),s=l.useCallback(r=>{a(t=>{const i=[...t.titleHistory.slice(0,t.titleIndex+1),r];return{title:r,titleHistory:i,titleIndex:i.length-1}})},[]),u=l.useCallback(r=>{a(t=>{const i=t.titleIndex+r;return i>=0&&i<t.titleHistory.length?{...t,title:t.titleHistory[i],titleIndex:i}:t})},[]),d=l.useCallback(()=>{a({title:e,titleHistory:[e],titleIndex:0})},[e]);return l.useEffect(()=>{a({title:e,titleHistory:[e],titleIndex:0})},[e]),{title:n.title,titleIndex:n.titleIndex,titleHistory:n.titleHistory,changeTitle:s,setHistoryTitle:u,setDefaultTitle:d}},E=e=>{const[n,a]=l.useState({description:e,descriptionHistory:[e],descriptionIndex:0}),s=l.useCallback(r=>{a(t=>{const i=[...t.descriptionHistory.slice(0,t.descriptionIndex+1),r];return{description:r,descriptionHistory:i,descriptionIndex:i.length-1}})},[]),u=l.useCallback(r=>{a(t=>{const i=t.descriptionIndex+r;return i>=0&&i<t.descriptionHistory.length?{...t,description:t.descriptionHistory[i],descriptionIndex:i}:t})},[]),d=l.useCallback(()=>{a({description:e,descriptionHistory:[e],descriptionIndex:0})},[e]);return l.useEffect(()=>{a({description:e,descriptionHistory:[e],descriptionIndex:0})},[e]),{description:n.description,changeDescription:s,historyDescription:u,setDefaultDescription:d,descriptionIndex:n.descriptionIndex}};try{$.displayName="AppContext",$.__docgenInfo={description:"",displayName:"AppContext",props:{}}}catch{}try{N.displayName="ProviderApp",N.__docgenInfo={description:`ProviderApp component is a context context that manages various application-level states
such as background color, status bar color, background image, title, and description.
It uses several custom hooks to handle these states and provides them via the AppContext.`,displayName:"ProviderApp",props:{defaultPreview:{defaultValue:null,description:"",name:"defaultPreview",required:!1,type:{name:"PreviewAdditionalProps"}},defaultBgColor:{defaultValue:null,description:"",name:"defaultBgColor",required:!0,type:{name:"enum",value:[{value:'"inherit"'},{value:'"transparent"'},{value:'"currentColor"'},{value:'"black100"'},{value:'"black80"'},{value:'"black60"'},{value:'"black50"'},{value:'"black40"'},{value:'"black10"'},{value:'"black05"'},{value:'"black04"'},{value:'"blackHelena"'},{value:'"blackJanice"'},{value:'"grayJanice"'},{value:'"grayKaren"'},{value:'"grayMonica"'},{value:'"graySandra"'},{value:'"grayPatricia"'},{value:'"graySarah"'},{value:'"grayStassie"'},{value:'"grayAdriana"'},{value:'"greenGoogle"'},{value:'"grayBarbara"'},{value:'"grayStephanie"'},{value:'"grayFrances"'},{value:'"grayTina"'},{value:'"green100"'},{value:'"green50"'},{value:'"green25"'},{value:'"green10"'},{value:'"green10Background"'},{value:'"whiteStandard"'},{value:'"whiteJanice"'},{value:'"yellowGoogle"'},{value:'"yellow100"'},{value:'"yellow50"'},{value:'"yellow25"'},{value:'"yellow10"'},{value:'"yellow10Background"'},{value:'"redGoogle"'},{value:'"red100"'},{value:'"red50"'},{value:'"red25"'},{value:'"red10"'},{value:'"red10Background"'},{value:'"blueGoogle"'},{value:'"blueRest"'},{value:'"blueActive"'},{value:'"blueHover"'},{value:'"blueFocus"'},{value:'"blueBr"'},{value:'"blueKaren"'},{value:'"blueMonica"'},{value:'"violetStephanie"'},{value:'"violetJanice"'},{value:'"amnezia"'}]}},defaultStatusBarColor:{defaultValue:null,description:"",name:"defaultStatusBarColor",required:!0,type:{name:"enum",value:[{value:'"inherit"'},{value:'"transparent"'},{value:'"currentColor"'},{value:'"black100"'},{value:'"black80"'},{value:'"black60"'},{value:'"black50"'},{value:'"black40"'},{value:'"black10"'},{value:'"black05"'},{value:'"black04"'},{value:'"blackHelena"'},{value:'"blackJanice"'},{value:'"grayJanice"'},{value:'"grayKaren"'},{value:'"grayMonica"'},{value:'"graySandra"'},{value:'"grayPatricia"'},{value:'"graySarah"'},{value:'"grayStassie"'},{value:'"grayAdriana"'},{value:'"greenGoogle"'},{value:'"grayBarbara"'},{value:'"grayStephanie"'},{value:'"grayFrances"'},{value:'"grayTina"'},{value:'"green100"'},{value:'"green50"'},{value:'"green25"'},{value:'"green10"'},{value:'"green10Background"'},{value:'"whiteStandard"'},{value:'"whiteJanice"'},{value:'"yellowGoogle"'},{value:'"yellow100"'},{value:'"yellow50"'},{value:'"yellow25"'},{value:'"yellow10"'},{value:'"yellow10Background"'},{value:'"redGoogle"'},{value:'"red100"'},{value:'"red50"'},{value:'"red25"'},{value:'"red10"'},{value:'"red10Background"'},{value:'"blueGoogle"'},{value:'"blueRest"'},{value:'"blueActive"'},{value:'"blueHover"'},{value:'"blueFocus"'},{value:'"blueBr"'},{value:'"blueKaren"'},{value:'"blueMonica"'},{value:'"violetStephanie"'},{value:'"violetJanice"'},{value:'"amnezia"'}]}},defaultBgImage:{defaultValue:null,description:"",name:"defaultBgImage",required:!1,type:{name:"string"}},defaultTitle:{defaultValue:null,description:"",name:"defaultTitle",required:!0,type:{name:"string"}},defaultDescription:{defaultValue:null,description:"",name:"defaultDescription",required:!0,type:{name:"string"}},isScrollOutlet:{defaultValue:null,description:"",name:"isScrollOutlet",required:!1,type:{name:"boolean"}},notification:{defaultValue:null,description:"",name:"notification",required:!1,type:{name:"{ component: ReactElement<unknown, string | JSXElementConstructor<any>>; length?: ScreenWidthProps<string | null>; zIndex?: number; } | undefined"}},header:{defaultValue:null,description:"",name:"header",required:!1,type:{name:"{ component: ReactElement<unknown, string | JSXElementConstructor<any>>; length?: ScreenWidthProps<string | null>; zIndex?: number; } | undefined"}},nav:{defaultValue:null,description:"",name:"nav",required:!1,type:{name:"{ component: ReactElement<unknown, string | JSXElementConstructor<any>>; length?: ScreenWidthProps<string | null>; zIndex?: number; } | undefined"}},footer:{defaultValue:null,description:"",name:"footer",required:!1,type:{name:"{ component: ReactElement<unknown, string | JSXElementConstructor<any>>; length?: ScreenWidthProps<string | null>; zIndex?: number; } | undefined"}},leftAside:{defaultValue:null,description:"",name:"leftAside",required:!1,type:{name:"{ component: ReactElement<unknown, string | JSXElementConstructor<any>>; length?: ScreenWidthProps<string | null>; isTopHeader?: boolean; isTopFooter?: boolean | undefined; isTopNav?: boolean | undefined; zIndex?: number | undefined; } | undefined"}},rightAside:{defaultValue:null,description:"",name:"rightAside",required:!1,type:{name:"{ component: ReactElement<unknown, string | JSXElementConstructor<any>>; length?: ScreenWidthProps<string | null>; isTopHeader?: boolean; isTopFooter?: boolean | undefined; isTopNav?: boolean | undefined; zIndex?: number | undefined; } | undefined"}},main:{defaultValue:null,description:"",name:"main",required:!1,type:{name:"{ zIndex?: number; }"}}}}}catch{}try{S.displayName="useBgColor",S.__docgenInfo={description:"",displayName:"useBgColor",props:{}}}catch{}try{B.displayName="useStatusBarColor",B.__docgenInfo={description:"",displayName:"useStatusBarColor",props:{}}}catch{}try{D.displayName="useBgImage",D.__docgenInfo={description:"",displayName:"useBgImage",props:{}}}catch{}try{E.displayName="useDescription",E.__docgenInfo={description:"",displayName:"useDescription",props:{}}}catch{}const Ke={component:N,title:"Context/App"},Te=o.jsxDEV("div",{style:{backgroundColor:"darkgoldenrod",padding:"2px",height:"100%",width:"100%"},children:o.jsxDEV(m,{sx:{default:{variant:"h8",wrap:"nowrap"}},children:"Notification"},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/.storybook-stories/default/context-app.stories.tsx",lineNumber:18,columnNumber:5},void 0)},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/.storybook-stories/default/context-app.stories.tsx",lineNumber:12,columnNumber:29},void 0),V=o.jsxDEV("div",{style:{backgroundColor:"lightblue",padding:"10px",height:"100%",width:"100%"},children:o.jsxDEV(m,{sx:{default:{variant:"h5",wrap:"nowrap"}},children:"Header"},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/.storybook-stories/default/context-app.stories.tsx",lineNumber:33,columnNumber:5},void 0)},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/.storybook-stories/default/context-app.stories.tsx",lineNumber:27,columnNumber:23},void 0),_=o.jsxDEV("div",{style:{backgroundColor:"lightcoral",padding:"10px",height:"100%",width:"100%"},children:o.jsxDEV(m,{sx:{default:{variant:"h5"}},children:"Footer"},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/.storybook-stories/default/context-app.stories.tsx",lineNumber:48,columnNumber:5},void 0)},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/.storybook-stories/default/context-app.stories.tsx",lineNumber:42,columnNumber:23},void 0),me=o.jsxDEV("div",{style:{backgroundColor:"lightgreen",padding:"10px",height:"100%",width:"100%"},children:o.jsxDEV(m,{sx:{default:{variant:"h6"}},children:"Left Aside"},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/.storybook-stories/default/context-app.stories.tsx",lineNumber:62,columnNumber:5},void 0)},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/.storybook-stories/default/context-app.stories.tsx",lineNumber:56,columnNumber:26},void 0),fe=o.jsxDEV("div",{style:{backgroundColor:"lightyellow",padding:"10px",height:"100%",width:"100%"},children:o.jsxDEV(m,{sx:{default:{variant:"h6"}},children:"Right Aside"},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/.storybook-stories/default/context-app.stories.tsx",lineNumber:76,columnNumber:5},void 0)},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/.storybook-stories/default/context-app.stories.tsx",lineNumber:70,columnNumber:27},void 0),ge=o.jsxDEV("div",{style:{backgroundColor:"beige",padding:"10px",height:"100%",width:"100%"},children:o.jsxDEV(m,{sx:{default:{variant:"h6"}},children:"Nav"},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/.storybook-stories/default/context-app.stories.tsx",lineNumber:90,columnNumber:5},void 0)},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/.storybook-stories/default/context-app.stories.tsx",lineNumber:84,columnNumber:20},void 0),T=o.jsxDEV(ke,{sx:e=>({default:{backgroundColor:e.palette.whiteStandard,padding:"10px",flexDirection:"column",height:"fit-content"},breakpoints:{tablet:{backgroundColor:e.palette.whiteJanice,padding:"10px"},mobile:{backgroundColor:e.palette.grayMonica,padding:"10px"}}}),children:[o.jsxDEV(m,{sx:{default:{variant:"h1"}},children:"Title H1"},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/.storybook-stories/default/context-app.stories.tsx",lineNumber:116,columnNumber:5},void 0),o.jsxDEV(m,{sx:{default:{variant:"h2"}},children:"Title H2"},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/.storybook-stories/default/context-app.stories.tsx",lineNumber:123,columnNumber:5},void 0),o.jsxDEV(m,{sx:{default:{variant:"h3"}},children:"Title H3"},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/.storybook-stories/default/context-app.stories.tsx",lineNumber:130,columnNumber:5},void 0),o.jsxDEV(m,{sx:{default:{variant:"h4"}},children:"Title H4"},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/.storybook-stories/default/context-app.stories.tsx",lineNumber:137,columnNumber:5},void 0),o.jsxDEV(m,{sx:{default:{variant:"h5"}},children:"Title H5"},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/.storybook-stories/default/context-app.stories.tsx",lineNumber:144,columnNumber:5},void 0),o.jsxDEV(m,{sx:{default:{variant:"h6"}},children:"Title H6"},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/.storybook-stories/default/context-app.stories.tsx",lineNumber:151,columnNumber:5},void 0)]},void 0,!0,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/.storybook-stories/default/context-app.stories.tsx",lineNumber:98,columnNumber:25},void 0),w={args:{defaultPreview:{defaultVisible:!1,visible:!0,minTime:2e3,content:o.jsxDEV(m,{sx:{default:{variant:"h6",weight:700}},children:"Loading"},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/.storybook-stories/default/context-app.stories.tsx",lineNumber:165,columnNumber:16},void 0)},defaultBgColor:"whiteStandard",isScrollOutlet:!1,defaultTitle:"Storybook?",defaultDescription:"Description from Storybook?",notification:{component:Te,length:{default:"20px",tablet:"20px",mobile:null}},header:{component:V,length:{default:"80px",tablet:"60px",mobile:"40px"}},leftAside:{component:me,length:{default:"180px",tablet:"160px",mobile:null}},nav:{component:ge,length:{default:"80px",tablet:"60px",mobile:"40px"}},rightAside:{component:fe,length:{default:"180px",tablet:"160px",mobile:null}},footer:{component:_,length:{default:"80px",tablet:"60px",mobile:"40px"}},children:T}},A={render:e=>o.jsxDEV(N,{...e},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/.storybook-stories/default/context-app.stories.tsx",lineNumber:230,columnNumber:19},void 0),args:{defaultBgColor:"black40",isScrollOutlet:!0,header:{component:V,length:{default:"80px",tablet:"60px",mobile:"40px"}},nav:{component:ge,length:{default:"80px",tablet:"60px",mobile:"40px"}},leftAside:{component:me,length:{default:"80px",tablet:"60px",mobile:null},isTopNav:!0},rightAside:{component:fe,length:{default:"80px",tablet:"60px",mobile:null},isTopFooter:!0,isTopHeader:!0},footer:{component:_,length:{default:"80px",tablet:"60px",mobile:"40px"}},children:T}},I={render:e=>o.jsxDEV(N,{...e},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/.storybook-stories/default/context-app.stories.tsx",lineNumber:281,columnNumber:19},void 0),args:{defaultBgColor:"black50",isScrollOutlet:!1,header:{component:V,length:{default:"80px",tablet:"60px",mobile:"40px"}},footer:{component:_,length:{default:"80px",tablet:"60px",mobile:null}},children:T}};var ne,ie,ae;w.parameters={...w.parameters,docs:{...(ne=w.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    defaultPreview: {
      defaultVisible: false,
      visible: true,
      minTime: 2000,
      content: <Typography sx={{
        default: {
          variant: 'h6',
          weight: 700
        }
      }}>
          Loading
        </Typography>
    },
    defaultBgColor: 'whiteStandard',
    isScrollOutlet: false,
    defaultTitle: 'Storybook?',
    defaultDescription: 'Description from Storybook?',
    notification: {
      component: defaultNotification,
      length: {
        default: '20px',
        tablet: '20px',
        mobile: null
      }
    },
    header: {
      component: defaultHeader,
      length: {
        default: '80px',
        tablet: '60px',
        mobile: '40px'
      }
    },
    leftAside: {
      component: defaultLeftAside,
      length: {
        default: '180px',
        tablet: '160px',
        mobile: null
      }
    },
    nav: {
      component: defaultNav,
      length: {
        default: '80px',
        tablet: '60px',
        mobile: '40px'
      }
    },
    rightAside: {
      component: defaultRightAside,
      length: {
        default: '180px',
        tablet: '160px',
        mobile: null
      }
    },
    footer: {
      component: defaultFooter,
      length: {
        default: '80px',
        tablet: '60px',
        mobile: '40px'
      }
    },
    children: defaultChildren
  }
}`,...(ae=(ie=w.parameters)==null?void 0:ie.docs)==null?void 0:ae.source}}};var oe,re,le;A.parameters={...A.parameters,docs:{...(oe=A.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: args => <ProviderApp {...args} />,
  args: {
    defaultBgColor: 'black40',
    isScrollOutlet: true,
    header: {
      component: defaultHeader,
      length: {
        default: '80px',
        tablet: '60px',
        mobile: '40px'
      }
    },
    nav: {
      component: defaultNav,
      length: {
        default: '80px',
        tablet: '60px',
        mobile: '40px'
      }
    },
    leftAside: {
      component: defaultLeftAside,
      length: {
        default: '80px',
        tablet: '60px',
        mobile: null
      },
      isTopNav: true
    },
    rightAside: {
      component: defaultRightAside,
      length: {
        default: '80px',
        tablet: '60px',
        mobile: null
      },
      isTopFooter: true,
      isTopHeader: true
    },
    footer: {
      component: defaultFooter,
      length: {
        default: '80px',
        tablet: '60px',
        mobile: '40px'
      }
    },
    children: defaultChildren
  }
}`,...(le=(re=A.parameters)==null?void 0:re.docs)==null?void 0:le.source}}};var se,ue,de;I.parameters={...I.parameters,docs:{...(se=I.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: args => <ProviderApp {...args} />,
  args: {
    defaultBgColor: 'black50',
    isScrollOutlet: false,
    header: {
      component: defaultHeader,
      length: {
        default: '80px',
        tablet: '60px',
        mobile: '40px'
      }
    },
    footer: {
      component: defaultFooter,
      length: {
        default: '80px',
        tablet: '60px',
        mobile: null
      }
    },
    children: defaultChildren
  }
}`,...(de=(ue=I.parameters)==null?void 0:ue.docs)==null?void 0:de.source}}};const Me=["Default","AsideDifferentTop","WithoutAsides"];export{A as AsideDifferentTop,w as Default,I as WithoutAsides,Me as __namedExportsOrder,Ke as default};
