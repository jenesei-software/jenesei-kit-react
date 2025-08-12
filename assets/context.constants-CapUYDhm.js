import{r as t,n as ne,j as o,A as te,m as ie,k as oe,l as s,d as c,c as ae}from"./iframe-DcM8uw4S.js";import{B as re}from"./component-Do9xNPLP.js";import{I as L}from"./component.styles-Bmp7pVt-.js";import{g as P}from"./component-ZvurOtfK.js";import{v as q}from"./v4-C6aID195.js";const b=t.createContext(null),A=e=>{var I,$,C,M,O,R;const u=t.useMemo(()=>e.visibleToasts,[e.visibleToasts]),z=t.useMemo(()=>{var n;return(n=e==null?void 0:e.default)==null?void 0:n.description},[(I=e==null?void 0:e.default)==null?void 0:I.description]),B=t.useMemo(()=>{var n;return(n=e==null?void 0:e.default)==null?void 0:n.title},[($=e==null?void 0:e.default)==null?void 0:$.title]),H=t.useMemo(()=>{var n;return(n=e==null?void 0:e.default)==null?void 0:n.button},[(C=e==null?void 0:e.default)==null?void 0:C.button]),w=t.useMemo(()=>{var n;return(n=e==null?void 0:e.default)==null?void 0:n.hidingTime},[(M=e==null?void 0:e.default)==null?void 0:M.hidingTime]),U=t.useMemo(()=>{var n;return((n=e==null?void 0:e.default)==null?void 0:n.hidingMode)??"clickOnButton"},[(O=e==null?void 0:e.default)==null?void 0:O.hidingMode]),F=t.useMemo(()=>{var n;return((n=e==null?void 0:e.default)==null?void 0:n.genre)??me},[(R=e==null?void 0:e.default)==null?void 0:R.genre]),G=t.useMemo(()=>e.position.includes("top"),[e.position]),[D,E]=t.useState([]),[X,S]=t.useState(!1),Y=t.useCallback(()=>{S(!0)},[]),y=t.useCallback(()=>{S(!1)},[]),f=t.useCallback(n=>{E(a=>{const d=a.find(i=>i.id===n);if(!d)return a;const r=d.index,l=a.filter(i=>i.id!==n).map(i=>({...i,index:i.index>r?i.index-1:i.index}));return l.length===0&&y(),l})},[y]),x=t.useCallback(n=>{const a=n.id??q(),d=n.hidingTime??w;E(r=>{const l=r.findIndex(h=>h.id===a);let i;if(l!==-1)i=[...r],i[l]={...n,id:a,index:r[l].index};else{i=r.map(g=>({...g,index:g.index+1}));const h={...n,id:a,index:0};i.unshift(h)}return i}),d!==void 0&&setTimeout(()=>{f(a)},d)},[w,f]),Z=t.useCallback((n,a,d)=>{const r=q();return x({...a,id:r,isLoading:!0}),n.then(l=>{x({...d(l,void 0),id:r})}).catch(l=>{x({...d(void 0,l),id:r})})},[x]),J=t.useCallback(n=>{f(n)},[f]),K=ne();return o.jsxDEV(b.Provider,{value:{toast:x,promise:Z,remove:f,contentHistory:D},children:[o.jsxDEV(_,{$zIndex:e.zIndex??se,$position:e.position,$gap:e.gap,onMouseEnter:Y,onMouseLeave:y,children:o.jsxDEV(te,{children:D.map(n=>{const a=n.index,d=u?a>u:!1,r=u?a>u-1:!1,l=u?a==u-1:!1,i=n.genre??F,h=K.colors.sonner[i].button.genre,g=n.hidingMode??U,Q="content"in n?n.content:!1,p="title"in n?n.title:!1,ee="description"in n?n.description:!1;return o.jsxDEV(de,{isMoreThanLastViewIndexPlusOne:d,isMoreThanLastViewIndex:r,isLastViewIndex:l,isTop:G,id:n.id,icon:n.icon,isLoading:n.isLoading,index:a,buttonGenre:h,hidingMode:g,isHovered:X,genre:i,content:Q,title:p||B,description:ee||z,button:n.button??H??fe,handleOnClick:J},n.id,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/contexts/context-sonner/context.tsx",lineNumber:185,columnNumber:15},void 0)})},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/contexts/context-sonner/context.tsx",lineNumber:171,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/contexts/context-sonner/context.tsx",lineNumber:164,columnNumber:7},void 0),e.children]},void 0,!0,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/contexts/context-sonner/context.tsx",lineNumber:163,columnNumber:5},void 0)},le=e=>o.jsxDEV(ie.div,{layout:!0,initial:{opacity:0,scale:1,y:e.isLastViewIndex?e.isTop?m:-m:e.isTop?-m:m},animate:{y:0,opacity:e.isMoreThanLastViewIndex?0:1,pointerEvents:e.isMoreThanLastViewIndex?"none":"auto",display:e.isMoreThanLastViewIndex?"none":"flex",scale:e.isHovered?1:1-e.index*ce,marginTop:e.isTop?e.isHovered||e.index===0?"0px":`-${W}px`:"0px",marginBottom:e.isTop||e.isHovered||e.index===0?"0px":`-${W}px`},style:{zIndex:-e.index},whileInView:{opacity:e.isMoreThanLastViewIndex?0:1},exit:{opacity:0,y:e.isTop?-m:m},transition:{type:"spring",duration:ue},children:o.jsxDEV(N,{$genre:e.genre,onClick:()=>e.hidingMode==="clickOnSonner"&&e.handleOnClick(e.id,"clickOnSonner"),children:[(e.isLoading||e.icon)&&o.jsxDEV(k,{children:e.isLoading?o.jsxDEV(L,{size:"medium",type:"loading",name:"Line"},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/contexts/context-sonner/context.tsx",lineNumber:261,columnNumber:15},void 0):e.icon&&o.jsxDEV(L,{name:e.icon,type:"id",size:"medium"},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/contexts/context-sonner/context.tsx",lineNumber:263,columnNumber:29},void 0)},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/contexts/context-sonner/context.tsx",lineNumber:259,columnNumber:11},void 0),o.jsxDEV(v,{children:e.content?e.content:o.jsxDEV(o.Fragment,{children:[e.title&&o.jsxDEV(T,{$genre:e.genre,children:e.title},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/contexts/context-sonner/context.tsx",lineNumber:272,columnNumber:31},void 0),e.description&&o.jsxDEV(V,{$genre:e.genre,children:e.description},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/contexts/context-sonner/context.tsx",lineNumber:274,columnNumber:17},void 0)]},void 0,!0,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/contexts/context-sonner/context.tsx",lineNumber:271,columnNumber:13},void 0)},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/contexts/context-sonner/context.tsx",lineNumber:267,columnNumber:9},void 0),e.button&&e.button.content&&o.jsxDEV(j,{children:o.jsxDEV(re,{genre:e.buttonGenre,size:"small",onClick:()=>e.hidingMode==="clickOnButton"&&e.handleOnClick(e.id,"clickOnButton"),children:e.button.content},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/contexts/context-sonner/context.tsx",lineNumber:282,columnNumber:13},void 0)},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/contexts/context-sonner/context.tsx",lineNumber:281,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/contexts/context-sonner/context.tsx",lineNumber:254,columnNumber:7},void 0)},e.id,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/contexts/context-sonner/context.tsx",lineNumber:216,columnNumber:5},void 0),de=t.memo(le);try{b.displayName="SonnerContext",b.__docgenInfo={description:"",displayName:"SonnerContext",props:{}}}catch{}try{A.displayName="ProviderSonner",A.__docgenInfo={description:"",displayName:"ProviderSonner",props:{gap:{defaultValue:null,description:"",name:"gap",required:!0,type:{name:"number"}},position:{defaultValue:null,description:"",name:"position",required:!0,type:{name:"enum",value:[{value:'"bottom-right"'},{value:'"bottom-left"'},{value:'"top-right"'},{value:'"top-left"'},{value:'"bottom-center"'},{value:'"top-center"'}]}},visibleToasts:{defaultValue:null,description:"",name:"visibleToasts",required:!1,type:{name:"number"}},zIndex:{defaultValue:null,description:"",name:"zIndex",required:!1,type:{name:"number"}},default:{defaultValue:null,description:"",name:"default",required:!0,type:{name:'Omit<SonnerContentStandardProps, "index">'}}}}}catch{}const _=c.div`
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
  ${oe}
  ${e=>e.$position==="bottom-center"?s`
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          justify-content: flex-start;
          flex-direction: column-reverse;
        `:e.$position==="bottom-left"?s`
            left: 0;
            bottom: 0;
            justify-content: flex-start;
            flex-direction: column-reverse;
          `:e.$position==="bottom-right"?s`
              right: 0;
              bottom: 0;
              justify-content: flex-start;
              flex-direction: column-reverse;
            `:e.$position==="top-right"?s`
                top: 0;
                right: 0;
                justify-content: flex-end;
                flex-direction: column;
              `:e.$position==="top-left"?s`
                  top: 0;
                  left: 0;
                  justify-content: flex-end;
                  flex-direction: column;
                `:e.$position==="top-center"?s`
                    top: 0;
                    left: 50%;
                    transform: translateX(-50%);
                    justify-content: flex-end;
                    flex-direction: column;
                  `:s``}
`,N=c.div`
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
  ${ae};
`,v=c.div`
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
`,k=c.div`
  display: contents;
`,T=c.div`
  ${e=>P(14,700,e.theme.font.family)}
  color:  ${e=>e.theme.colors.sonner[e.$genre].title.color};
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`,V=c.div`
  ${e=>P(12,400,e.theme.font.family)}
  color:${e=>e.theme.colors.sonner[e.$genre].description.color};
  text-align: left;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`,j=c.div``;try{_.displayName="SonnerLayout",_.__docgenInfo={description:"",displayName:"SonnerLayout",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{N.displayName="SonnerElementWrapper",N.__docgenInfo={description:"",displayName:"SonnerElementWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{v.displayName="SonnerContent",v.__docgenInfo={description:"",displayName:"SonnerContent",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{k.displayName="SonnerIcon",k.__docgenInfo={description:"",displayName:"SonnerIcon",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{T.displayName="SonnerContentTitle",T.__docgenInfo={description:"",displayName:"SonnerContentTitle",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{V.displayName="SonnerContentDescription",V.__docgenInfo={description:"",displayName:"SonnerContentDescription",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{j.displayName="SonnerButtonWrapper",j.__docgenInfo={description:"",displayName:"SonnerButtonWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const se=100,ce=.04,m=100,ue=.3,me="black",W=60,fe={content:"Undo",onClick:()=>{}};export{A as P,b as S};
