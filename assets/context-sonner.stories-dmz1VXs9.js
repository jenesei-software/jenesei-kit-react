import{p as se,l as u,d as m,b as le,e as de,r as i,n as K,j as t,A as ce,m as ue,g as U,S as me}from"./iframe-1BJ3w_50.js";import{B as c}from"./component-BB_KxpK4.js";import{I as F}from"./component.functions-5Lo1eb4y.js";import{v as G}from"./v4-C6aID195.js";import"./preload-helper-C1FmrZbK.js";import"./floating-ui.react-DF04B13p.js";import"./index-B2jwwQNa.js";import"./area-22l_fHsN.js";const fe=100,xe=.04,x=100,he=.3,ge="black",X=60,be={content:"Undo",onClick:()=>{}},C=m.div`
  position: fixed;
  z-index: ${e=>e.$zIndex};
  max-height: calc(100dvh - 20px);
  width: 320px;
  display: flex;
  margin: 10px;
  gap: ${e=>e.$gap}px;
  box-sizing: content-box;
  overflow-y: visible;
  overflow-x: visible;
  ${se}
  ${e=>e.$position==="bottom-center"?u`
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          justify-content: flex-start;
          flex-direction: column-reverse;
        `:e.$position==="bottom-left"?u`
            left: 0;
            bottom: 0;
            justify-content: flex-start;
            flex-direction: column-reverse;
          `:e.$position==="bottom-right"?u`
              right: 0;
              bottom: 0;
              justify-content: flex-start;
              flex-direction: column-reverse;
            `:e.$position==="top-right"?u`
                top: 0;
                right: 0;
                justify-content: flex-end;
                flex-direction: column;
              `:e.$position==="top-left"?u`
                  top: 0;
                  left: 0;
                  justify-content: flex-end;
                  flex-direction: column;
                `:e.$position==="top-center"?u`
                    top: 0;
                    left: 50%;
                    transform: translateX(-50%);
                    justify-content: flex-end;
                    flex-direction: column;
                  `:u``}
`,p=m.div`
  background: ${e=>e.theme.colors.sonner[e.$genre].wrapper.background};
  color: ${e=>e.theme.colors.sonner[e.$genre].icon.color};
  border-radius: 12px;
  border-style: solid;
  border-color: ${e=>e.theme.colors.sonner[e.$genre].wrapper.borderColor};
  border-width: 1px;
  padding: 16px 20px 16px 20px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  justify-content: flex-start;
  align-self: stretch;
  flex-shrink: 0;
  flex-shrink: 1;
  min-width: 320px;
  min-height: 64px;
  transform-origin: center center;
  box-shadow: ${e=>e.theme.colors.sonner[e.$genre].wrapper.boxShadow};
  overflow: visible;
  &:hover {
    box-shadow: ${e=>e.theme.colors.sonner[e.$genre].wrapper.boxShadowHover};
  }
  ${le};
`,$=m.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  align-items: flex-start;
  justify-content: flex-start;
  align-self: stretch;
  flex-shrink: 0;
  flex: 1;
  position: relative;
  overflow: hidden;
`,O=m.div`
  display: contents;
`,M=m.div`
  color:  ${e=>e.theme.colors.sonner[e.$genre].title.color};
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`,W=m.div`
  color:${e=>e.theme.colors.sonner[e.$genre].description.color};
  text-align: left;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  ${de};
`,R=m.div``;try{C.displayName="SonnerLayout",C.__docgenInfo={description:"",displayName:"SonnerLayout",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{p.displayName="SonnerElementWrapper",p.__docgenInfo={description:"",displayName:"SonnerElementWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{$.displayName="SonnerContent",$.__docgenInfo={description:"",displayName:"SonnerContent",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{O.displayName="SonnerIcon",O.__docgenInfo={description:"",displayName:"SonnerIcon",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{M.displayName="SonnerContentTitle",M.__docgenInfo={description:"",displayName:"SonnerContentTitle",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{W.displayName="SonnerContentDescription",W.__docgenInfo={description:"",displayName:"SonnerContentDescription",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{R.displayName="SonnerButtonWrapper",R.__docgenInfo={description:"",displayName:"SonnerButtonWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const v=i.createContext(null),T=e=>{var q,A,z,P,B,H;const l=i.useMemo(()=>e.visibleToasts,[e.visibleToasts]),f=i.useMemo(()=>{var n;return(n=e==null?void 0:e.default)==null?void 0:n.description},[(q=e==null?void 0:e.default)==null?void 0:q.description]),j=i.useMemo(()=>{var n;return(n=e==null?void 0:e.default)==null?void 0:n.title},[(A=e==null?void 0:e.default)==null?void 0:A.title]),w=i.useMemo(()=>{var n;return(n=e==null?void 0:e.default)==null?void 0:n.button},[(z=e==null?void 0:e.default)==null?void 0:z.button]),k=i.useMemo(()=>{var n;return(n=e==null?void 0:e.default)==null?void 0:n.hidingTime},[(P=e==null?void 0:e.default)==null?void 0:P.hidingTime]),V=i.useMemo(()=>{var n;return((n=e==null?void 0:e.default)==null?void 0:n.hidingMode)??"clickOnButton"},[(B=e==null?void 0:e.default)==null?void 0:B.hidingMode]),E=i.useMemo(()=>{var n;return((n=e==null?void 0:e.default)==null?void 0:n.genre)??ge},[(H=e==null?void 0:e.default)==null?void 0:H.genre]),S=i.useMemo(()=>e.position.includes("top"),[e.position]),[y,D]=i.useState([]),[Q,L]=i.useState(!1),ee=i.useCallback(()=>{L(!0)},[]),I=i.useCallback(()=>{L(!1)},[]),h=i.useCallback(n=>{D(r=>{const d=r.find(o=>o.id===n);if(!d)return r;const a=d.index,s=r.filter(o=>o.id!==n).map(o=>({...o,index:o.index>a?o.index-1:o.index}));return s.length===0&&I(),s})},[I]),g=i.useCallback(n=>{const r=n.id??G(),d=n.hidingTime??k;D(a=>{const s=a.findIndex(b=>b.id===r);let o;if(s!==-1)o=[...a],o[s]={...n,id:r,index:a[s].index};else{o=a.map(N=>({...N,index:N.index+1}));const b={...n,id:r,index:0};o.unshift(b)}return o}),d!==void 0&&setTimeout(()=>{h(r)},d)},[k,h]),ne=i.useCallback((n,r,d)=>{const a=G();return g({...r,id:a,isLoading:!0}),n.then(s=>{g({...d(s,void 0),id:a})}).catch(s=>{g({...d(void 0,s),id:a})})},[g]),te=i.useCallback(n=>{h(n)},[h]),ie=K();return i.useEffect(()=>()=>{D([])},[]),t.jsxDEV(v.Provider,{value:{toast:g,promise:ne,remove:h,contentHistory:y},children:[t.jsxDEV(C,{$zIndex:e.zIndex??fe,$position:e.position,$gap:e.gap,onMouseEnter:ee,onMouseLeave:I,children:t.jsxDEV(ce,{children:y.map(n=>{const r=n.index,d=l?r>l:!1,a=l?r>l-1:!1,s=l?r===l-1:!1,o=n.genre??E,b=ie.colors.sonner[o].button.genre,N=n.hidingMode??V,oe="content"in n?n.content:!1,re="title"in n?n.title:!1,ae="description"in n?n.description:!1;return t.jsxDEV(ye,{isMoreThanLastViewIndexPlusOne:d,isMoreThanLastViewIndex:a,isLastViewIndex:s,isTop:S,id:n.id,icon:n.icon,isLoading:n.isLoading,index:r,buttonGenre:b,hidingMode:N,isHovered:Q,genre:o,content:oe,title:re||j,description:ae||f,button:n.button??w??be,handleOnClick:te},n.id,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/contexts/context-sonner/context.tsx",lineNumber:199,columnNumber:15},void 0)})},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/contexts/context-sonner/context.tsx",lineNumber:185,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/contexts/context-sonner/context.tsx",lineNumber:178,columnNumber:7},void 0),e.children]},void 0,!0,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/contexts/context-sonner/context.tsx",lineNumber:177,columnNumber:5},void 0)},ke=e=>{var f;const l=K();return t.jsxDEV(ue.div,{layout:!0,initial:{opacity:0,scale:1,y:e.isLastViewIndex?e.isTop?x:-x:e.isTop?-x:x},animate:{y:0,opacity:e.isMoreThanLastViewIndex?0:1,pointerEvents:e.isMoreThanLastViewIndex?"none":"auto",display:e.isMoreThanLastViewIndex?"none":"flex",scale:e.isHovered?1:1-e.index*xe,marginTop:e.isTop?e.isHovered||e.index===0?"0px":`-${X}px`:"0px",marginBottom:e.isTop||e.isHovered||e.index===0?"0px":`-${X}px`},style:{zIndex:-e.index},whileInView:{opacity:e.isMoreThanLastViewIndex?0:1},exit:{opacity:0,y:e.isTop?-x:x},transition:{type:"spring",duration:he},children:t.jsxDEV(p,{$genre:e.genre,onClick:()=>e.hidingMode==="clickOnSonner"&&e.handleOnClick(e.id,"clickOnSonner"),children:[(e.isLoading||e.icon)&&t.jsxDEV(O,{children:e.isLoading?t.jsxDEV(F,{size:"medium",type:"loading",name:"Line"},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/contexts/context-sonner/context.tsx",lineNumber:277,columnNumber:15},void 0):e.icon&&t.jsxDEV(F,{...e.icon,size:e.icon.size??"medium"},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/contexts/context-sonner/context.tsx",lineNumber:279,columnNumber:29},void 0)},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/contexts/context-sonner/context.tsx",lineNumber:275,columnNumber:11},void 0),t.jsxDEV($,{children:e.content?e.content:t.jsxDEV(t.Fragment,{children:[e.title&&t.jsxDEV(M,{$genre:e.genre,$sxTypography:U({size:"mediumSmall",weight:700,theme:l}),children:e.title},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/contexts/context-sonner/context.tsx",lineNumber:289,columnNumber:17},void 0),e.description&&t.jsxDEV(W,{$sxTypography:U({size:"mediumSmall",weight:400,theme:l}),$genre:e.genre,children:e.description},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/contexts/context-sonner/context.tsx",lineNumber:301,columnNumber:17},void 0)]},void 0,!0,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/contexts/context-sonner/context.tsx",lineNumber:287,columnNumber:13},void 0)},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/contexts/context-sonner/context.tsx",lineNumber:283,columnNumber:9},void 0),e.button&&"content"in e.button&&((f=e.button)==null?void 0:f.content)&&t.jsxDEV(R,{children:t.jsxDEV(c,{genre:e.buttonGenre,size:"small",onClick:()=>e.hidingMode==="clickOnButton"&&e.handleOnClick(e.id,"clickOnButton"),children:e.button.content},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/contexts/context-sonner/context.tsx",lineNumber:318,columnNumber:13},void 0)},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/contexts/context-sonner/context.tsx",lineNumber:317,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/contexts/context-sonner/context.tsx",lineNumber:270,columnNumber:7},void 0)},e.id,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/contexts/context-sonner/context.tsx",lineNumber:232,columnNumber:5},void 0)},ye=i.memo(ke);try{v.displayName="SonnerContext",v.__docgenInfo={description:"",displayName:"SonnerContext",props:{}}}catch{}try{T.displayName="ProviderSonner",T.__docgenInfo={description:"",displayName:"ProviderSonner",props:{gap:{defaultValue:null,description:"",name:"gap",required:!0,type:{name:"number"}},position:{defaultValue:null,description:"",name:"position",required:!0,type:{name:"enum",value:[{value:'"bottom-right"'},{value:'"bottom-left"'},{value:'"top-right"'},{value:'"top-left"'},{value:'"bottom-center"'},{value:'"top-center"'}]}},visibleToasts:{defaultValue:null,description:"",name:"visibleToasts",required:!1,type:{name:"number"}},zIndex:{defaultValue:null,description:"",name:"zIndex",required:!1,type:{name:"number"}},default:{defaultValue:null,description:"",name:"default",required:!0,type:{name:'Omit<SonnerContentStandardProps, "index">'}}}}}catch{}const Ne=()=>{const e=i.useContext(v);if(!e)throw new Error("useSonner must be used within an ProviderSonner");return e},Ce={component:T,title:"Context/Sonner"},_e=e=>t.jsxDEV(T,{...e,children:t.jsxDEV(ve,{},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/.storybook-stories/default/context-sonner.stories.tsx",lineNumber:15,columnNumber:7},void 0)},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/.storybook-stories/default/context-sonner.stories.tsx",lineNumber:14,columnNumber:10},void 0),ve=()=>{const{toast:e,promise:l}=Ne(),f=()=>{l(new Promise(y=>setTimeout(()=>y("Data loaded successfully!"),3e3)),{title:"ЗАГРУЗКА",description:"Подождите, данные загружаются...",genre:"black",button:!1},()=>({title:"Офигенчик! Офигенчик! Офигенчик!",description:"Данные загрузились! Данные загрузились! Данные загрузились! Данные загрузились!",genre:"greenTransparent",icon:{type:"loading",name:"Blocks"}}))},j=()=>{e({title:"Обычный тост",description:"Или чебурашка?",genre:"black"})},w=()=>{e({title:"Не обычный тост",description:"Да оно же без кнопки!",genre:"black",button:!1,hidingMode:"clickOnSonner"})},k=()=>{e({title:"Предупреждение!",description:"Или чебурашка?",genre:"yellowTransparent"})},V=()=>{e({title:"Ошибка!",description:"Или чебурашка?",genre:"redTransparent"})},E=()=>{e({title:"Успех!",description:"Или чебурашка?",genre:"greenTransparent"})},S=()=>{e({title:"Обычный тост?",description:"Да оно ж само исчезнет!",genre:"black",hidingTime:3e3})};return t.jsxDEV(me,{sx:{default:{padding:"12px",gap:"8px"}},children:[t.jsxDEV(c,{onClick:f,genre:"black",size:"medium",children:"Promise Toast!"},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/.storybook-stories/default/context-sonner.stories.tsx",lineNumber:90,columnNumber:7},void 0),t.jsxDEV(c,{onClick:j,genre:"black",size:"medium",children:"Black Toast!"},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/.storybook-stories/default/context-sonner.stories.tsx",lineNumber:93,columnNumber:7},void 0),t.jsxDEV(c,{onClick:w,genre:"black",size:"medium",children:"Without Button Toast!"},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/.storybook-stories/default/context-sonner.stories.tsx",lineNumber:96,columnNumber:7},void 0),t.jsxDEV(c,{onClick:S,genre:"black",size:"medium",children:"With Hiding Time Toast!"},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/.storybook-stories/default/context-sonner.stories.tsx",lineNumber:99,columnNumber:7},void 0),t.jsxDEV(c,{onClick:V,genre:"redTransparent",size:"medium",children:"Error Toast!"},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/.storybook-stories/default/context-sonner.stories.tsx",lineNumber:102,columnNumber:7},void 0),t.jsxDEV(c,{onClick:k,genre:"yellowTransparent",size:"medium",children:"Warning Toast!"},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/.storybook-stories/default/context-sonner.stories.tsx",lineNumber:105,columnNumber:7},void 0),t.jsxDEV(c,{onClick:E,genre:"greenTransparent",size:"medium",children:"Success Toast!"},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/.storybook-stories/default/context-sonner.stories.tsx",lineNumber:108,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/.storybook-stories/default/context-sonner.stories.tsx",lineNumber:84,columnNumber:10},void 0)},_={render:e=>t.jsxDEV(_e,{...e},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/.storybook-stories/default/context-sonner.stories.tsx",lineNumber:114,columnNumber:19},void 0),args:{visibleToasts:3,position:"bottom-left",gap:12}};var Y,Z,J;_.parameters={..._.parameters,docs:{...(Y=_.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: args => <ProviderSonnerWrapper {...args} />,
  args: {
    visibleToasts: 3,
    position: 'bottom-left',
    gap: 12
  }
}`,...(J=(Z=_.parameters)==null?void 0:Z.docs)==null?void 0:J.source}}};const pe=["Sonner"];export{_ as Sonner,pe as __namedExportsOrder,Ce as default};
