import{l,d as t,S as i,j as n}from"./iframe-DcM8uw4S.js";const a=t(i)`
  overflow-x: hidden;
  overflow-y: hidden;

  ${e=>l`
    ${e.$horizontal&&l`
      scrollbar-gutter: stable;
      overflow-x: auto;
    `}

    ${e.$vertical&&l`
      scrollbar-gutter: stable;
      overflow-y: auto;
    `}

    ${e.$isAlwaysHorizontal&&l`
      scrollbar-gutter: stable;
      overflow-x: scroll;
    `}

    ${e.$isAlwaysVertical&&l`
      scrollbar-gutter: stable;
      overflow-y: scroll;
    `}
  `}
`;try{a.displayName="StyledScroll",a.__docgenInfo={description:"",displayName:"StyledScroll",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const r=e=>n.jsxDEV(a,{...e,$horizontal:e.horizontal,$vertical:e.vertical,$isAlwaysHorizontal:e.isAlwaysHorizontal,$isAlwaysVertical:e.isAlwaysVertical,children:e.children},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/areas/scroll/area.tsx",lineNumber:7,columnNumber:5},void 0);try{r.displayName="Scroll",r.__docgenInfo={description:"",displayName:"Scroll",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},isHover:{defaultValue:null,description:"",name:"isHover",required:!1,type:{name:"boolean"}},isRipple:{defaultValue:null,description:"",name:"isRipple",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}},onDrop:{defaultValue:null,description:"",name:"onDrop",required:!1,type:{name:"((e: DragEvent<HTMLDivElement>) => void)"}},onDragOver:{defaultValue:null,description:"",name:"onDragOver",required:!1,type:{name:"DragEventHandler<HTMLDivElement>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement | null>"}},sx:{defaultValue:null,description:"",name:"sx",required:!1,type:{name:"SXProps"}},vertical:{defaultValue:null,description:"",name:"vertical",required:!1,type:{name:"boolean"}},horizontal:{defaultValue:null,description:"",name:"horizontal",required:!1,type:{name:"boolean"}},isAlwaysVertical:{defaultValue:null,description:"",name:"isAlwaysVertical",required:!1,type:{name:"boolean"}},isAlwaysHorizontal:{defaultValue:null,description:"",name:"isAlwaysHorizontal",required:!1,type:{name:"boolean"}}}}}catch{}export{r as S};
