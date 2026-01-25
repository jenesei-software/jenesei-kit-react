import{r,K as h,j as n,S as A,c as q,d as E,m as y,l as c,n as P,t as T,g as M}from"./iframe-1BJ3w_50.js";import{B as f}from"./component-BB_KxpK4.js";import{a as O,E as W}from"./component-BgnCZAcu.js";import{I as _}from"./component-hzBW2S_u.js";import{T as N}from"./component-Bhe_aONY.js";import{u as G}from"./use-gvMOft5u.js";import{u as L}from"./context.hooks-CbRbSMYZ.js";import"./preload-helper-C1FmrZbK.js";import"./component.functions-5Lo1eb4y.js";import"./area-22l_fHsN.js";import"./floating-ui.react-DF04B13p.js";import"./index-B2jwwQNa.js";import"./motion-BWMfmUrw.js";import"./use-TW0LbYqD.js";import"./link-BZsJ5i8W.js";import"./index-B7Qfo0ta.js";import"./area-AAM9WxCo.js";import"./component-CA38-cs0.js";import"./v4-C6aID195.js";const I=e=>{const a=r.useMemo(()=>h[e.size],[e.size]),s=r.useMemo(()=>`${a.radius}px`,[a.radius]),[u,o]=r.useState(null),w=r.useMemo(()=>({propsCustom:{image:u,br:s},propsDialog:{borderRadius:s,padding:"0",background:"whiteStandard"},onRemove(){o(null)},content:i=>{var x,k,p,g;return n.jsxDEV(A,{sx:{default:{position:"relative",overflow:"hidden",aspectRatio:`${e.imageSettings.aspect*2} / 2`,width:"auto",maxWidth:"70dvw",height:"85dvh",borderRadius:(x=i==null?void 0:i.propsCustom)==null?void 0:x.br},breakpoints:{tablet:{maxWidth:"95dvw"}}},children:[(k=i==null?void 0:i.propsCustom)!=null&&k.image?n.jsxDEV(_,{sxStack:m=>({default:{width:"100%",height:"100%",alignItems:"center",justifyContent:"center",backgroundColor:m.palette.black10,position:"absolute",pointerEvents:"none"}}),isShowBeforeImage:!0,sxImage:{default:{objectFit:"contain"}},alt:(p=i.propsCustom)==null?void 0:p.image.imageSrc,src:(g=i.propsCustom)==null?void 0:g.image.imageSrc,componentFallback:n.jsxDEV(N,{sx:{default:{variant:"h6"}},children:e.locale.imageFallback},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/hooks/use-image-view/use.tsx",lineNumber:72,columnNumber:17},void 0)},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/hooks/use-image-view/use.tsx",lineNumber:51,columnNumber:13},void 0):null,n.jsxDEV(f,{sx:{default:{position:"absolute",bottom:15,right:15}},genre:"realebail-white",size:"small",icons:[{type:"id",name:"Arrow4"}],isWidthAsHeight:!0,isHiddenBorder:!0,isRadius:!0,onClick:()=>{var m;return(m=i.remove)==null?void 0:m.call(i)}},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/hooks/use-image-view/use.tsx",lineNumber:84,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/hooks/use-image-view/use.tsx",lineNumber:32,columnNumber:9},void 0)}}),[s,e.imageSettings.aspect,e.locale.imageFallback,u]),{add:d}=L(w);return{handleAdd:r.useCallback(i=>{o(i),d()},[d])}};try{I.displayName="useImageView",I.__docgenInfo={description:"",displayName:"useImageView",props:{genre:{defaultValue:null,description:"",name:"genre",required:!0,type:{name:"enum",value:[{value:'"gray"'},{value:'"grayBorder"'},{value:'"blackBorder"'},{value:'"realebail-white"'}]}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"large"'},{value:'"largeMedium"'},{value:'"medium"'},{value:'"mediumSmall"'},{value:'"small"'}]}},imageSettings:{defaultValue:null,description:"",name:"imageSettings",required:!0,type:{name:"{ maxSize: number; maxCount: number; width: number; height: number; aspect: number; }"}},locale:{defaultValue:null,description:"",name:"locale",required:!0,type:{name:'Pick<{ imageFallback: string; buttonReset: string; dragAndDrop: string; } & { buttonAdd: string; dialogSave: string; dialogCancel: string; dialogAddImage: string; dialogDeleteImage: string; }, "imageFallback">'}}}}}catch{}const H=c`
  ${e=>c`
    background: ${e.theme.colors.imageSelect[e.$genre].background.rest};
    color: ${e.theme.colors.imageSelect[e.$genre].color.rest};
    &:active {
      background: ${e.theme.colors.imageSelect[e.$genre].background.rest};
      color: ${e.theme.colors.imageSelect[e.$genre].color.rest};
    }
    &:focus-visible {
      background: ${e.theme.colors.imageSelect[e.$genre].background.rest};
      color: ${e.theme.colors.imageSelect[e.$genre].color.rest};
    }
  `};
`,Y=c`
  ${e=>c`
    padding: ${h[e.$size].padding}px;
    border-radius: ${h[e.$size].radius}px;
  `};
`,J=c`
  ${e=>c`
    gap: ${h[e.$size].padding-2}px;
  `};
`,K=E.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  
  ${J};
  ${O};
  ${q};
`,U=E(y.div)`
  border: 2px dashed;
  display: flex;
  flex-direction: column;
  width: 100%;

  ${H}
  ${Y}
`,z=e=>{const{onChange:a}=e,s=r.useMemo(()=>h[e.size],[e.size]),[u,o]=r.useState(e.images||[]),[w,d]=r.useState(!1),b=r.useRef(null),i=P(),x=t=>{var l;t.preventDefault(),(l=t.dataTransfer.files)!=null&&l.length&&D(t.dataTransfer.files)},k=t=>{o(l=>{const v=l.filter(S=>S.id!==t);return a==null||a(v),v})},p=r.useCallback(t=>{t&&o(l=>{const v=t.map((B,F)=>({...B,index:l.length+F})),S=[...l,...v];return a==null||a(S),S})},[a]),g=()=>{var t;(t=b.current)==null||t.click()},m=()=>{o(e.defaultImages||[]),a==null||a(e.defaultImages||[])},{handleAddFiles:D}=G({onSave:p,locale:e.locale,dialog:{button:{genre:e.propsButton.default.genre,size:e.propsButton.default.size},buttonDelete:{genre:e.propsButton.delete.genre,size:e.propsButton.delete.size}},imageSettings:{maxSize:e.imageSettings.maxSize,maxCount:e.imageSettings.maxCount-u.length,aspect:e.imageSettings.aspect},refInput:b}),{handleAdd:R}=I({size:e.size,locale:e.locale,imageSettings:e.imageSettings,genre:e.genre});return r.useEffect(()=>{o(e.images||[])},[e.images]),n.jsxDEV(n.Fragment,{children:[n.jsxDEV(K,{$genre:e.genre,$size:e.size,id:e.id,$sx:e.sx,$error:e.error,children:[n.jsxDEV(U,{onDrop:t=>{x(t),d(!1)},onDragOver:t=>t.preventDefault(),onDragEnter:()=>d(!0),onDragLeave:()=>d(!1),animate:{borderColor:w?i.colors.imageSelect[e.genre].border.hover:i.colors.imageSelect[e.genre].border.rest},transition:{duration:.3},$genre:e.genre,$size:e.size,children:[n.jsxDEV(y.div,{transition:{layout:{duration:.3,ease:"easeInOut",type:"spring"}},layout:!0,style:{display:"flex",flexWrap:"wrap",gap:`${s.padding-2}px`},children:[u.map(t=>t.url&&n.jsxDEV(y.div,{style:{position:"relative",width:`${e.imageSettings.width}px`,height:`${e.imageSettings.height}px`,userSelect:"none",overflow:"hidden",borderRadius:`${s.radius}px`,flexGrow:1},layout:!0,transition:{layout:{duration:.3,ease:"easeInOut",type:"spring"}},children:[n.jsxDEV(_,{sxStack:l=>({default:{width:"100%",height:"100%",alignItems:"center",justifyContent:"center",backgroundColor:l.palette.black10,position:"absolute",pointerEvents:"none"}}),isShowBeforeImage:e.isContain,sxImage:{default:{objectFit:e.isContain?"contain":"cover"}},alt:t.name||"image",src:t.url,componentFallback:n.jsxDEV(N,{sx:{default:{variant:"h6"}},children:e.locale.imageFallback},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/components/image-select/component.tsx",lineNumber:180,columnNumber:25},void 0)},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/components/image-select/component.tsx",lineNumber:159,columnNumber:21},void 0),n.jsxDEV(f,{sx:{default:{position:"absolute",top:5,right:5}},genre:e.genre,size:"small",icons:[{type:"id",name:"Close"}],isWidthAsHeight:!0,isHiddenBorder:!0,isRadius:!0,onClick:()=>k(t.id)},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/components/image-select/component.tsx",lineNumber:191,columnNumber:21},void 0),n.jsxDEV(f,{sx:{default:{position:"absolute",bottom:5,right:5}},genre:e.genre,size:"small",icons:[{type:"id",name:"Activity"}],isWidthAsHeight:!0,isHiddenBorder:!0,isRadius:!0,onClick:()=>t.url&&R({id:t.id,imageSrc:t.url})},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/components/image-select/component.tsx",lineNumber:212,columnNumber:21},void 0)]},t.id,!0,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/components/image-select/component.tsx",lineNumber:139,columnNumber:19},void 0)),u.length===0?n.jsxDEV("div",{onClick:g,style:{position:"relative",width:`${e.imageSettings.width}px`,height:`${e.imageSettings.height}px`,userSelect:"none",overflow:"hidden",borderRadius:`${s.radius}px`,flexGrow:1,display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center",cursor:"pointer"},children:n.jsxDEV(N,{style:{color:i.colors.imageSelect[e.genre].color.rest},sx:{default:{}},children:e.locale.dragAndDrop},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/components/image-select/component.tsx",lineNumber:255,columnNumber:17},void 0)},"empty",!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/components/image-select/component.tsx",lineNumber:237,columnNumber:15},void 0):null]},void 0,!0,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/components/image-select/component.tsx",lineNumber:125,columnNumber:11},void 0),n.jsxDEV("input",{ref:b,type:"file",accept:T,multiple:!0,style:{display:"none"},onChange:t=>{t.target.files&&D(t.target.files)}},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/components/image-select/component.tsx",lineNumber:269,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/components/image-select/component.tsx",lineNumber:108,columnNumber:9},void 0),n.jsxDEV(A,{sx:{default:{flexGrow:1,gap:`${s.padding-2}px`}},children:[n.jsxDEV(f,{type:"button",genre:e.genre,size:e.size,sx:{default:{flexGrow:3}},isRadius:!0,onClick:g,children:e.locale.buttonAdd},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/components/image-select/component.tsx",lineNumber:281,columnNumber:11},void 0),n.jsxDEV(f,{isRadius:!0,type:"button",sx:{default:{flexGrow:1}},onClick:m,genre:e.genre,size:e.size,children:e.locale.buttonReset},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/components/image-select/component.tsx",lineNumber:295,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/components/image-select/component.tsx",lineNumber:280,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/components/image-select/component.tsx",lineNumber:107,columnNumber:7},void 0),e!=null&&e.error?n.jsxDEV(W,{...e.error,size:(e==null?void 0:e.error.size)??e.size,sxTypography:M({size:e.size,weight:400,theme:i})},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/components/image-select/component.tsx",lineNumber:312,columnNumber:9},void 0):null]},void 0,!0,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/components/image-select/component.tsx",lineNumber:106,columnNumber:5},void 0)};try{z.displayName="ImageSelect",z.__docgenInfo={description:"",displayName:"ImageSelect",props:{locale:{defaultValue:null,description:"",name:"locale",required:!0,type:{name:"{ imageFallback: string; buttonReset: string; dragAndDrop: string; } & { buttonAdd: string; dialogSave: string; dialogCancel: string; dialogAddImage: string; dialogDeleteImage: string; }"}},genre:{defaultValue:null,description:"",name:"genre",required:!0,type:{name:"enum",value:[{value:'"gray"'},{value:'"grayBorder"'},{value:'"blackBorder"'},{value:'"realebail-white"'}]}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"large"'},{value:'"largeMedium"'},{value:'"medium"'},{value:'"mediumSmall"'},{value:'"small"'}]}},propsButton:{defaultValue:null,description:"",name:"propsButton",required:!0,type:{name:'{ default: Pick<ButtonProps, "genre" | "size">; delete: Pick<ButtonProps, "genre" | "size">; }'}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((images: ImageSelectItemProps[]) => void)"}},isContain:{defaultValue:null,description:"",name:"isContain",required:!1,type:{name:"boolean"}},imageSettings:{defaultValue:null,description:"",name:"imageSettings",required:!0,type:{name:"{ maxSize: number; maxCount: number; width: number; height: number; aspect: number; }"}},defaultImages:{defaultValue:null,description:"",name:"defaultImages",required:!0,type:{name:"ImageSelectItemProps[]"}},images:{defaultValue:null,description:"",name:"images",required:!0,type:{name:"ImageSelectItemProps[]"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"ErrorMessageProps"}},sx:{defaultValue:null,description:"",name:"sx",required:!1,type:{name:"SXProps"}}}}}catch{}const be={component:z,title:"Component/Image/Select"},j={args:{propsButton:{default:{genre:"product",size:"medium"},delete:{genre:"blackBorder",size:"medium"}},sx:{default:{width:"100%"}},onChange(e){console.log("Selected images:",e)},genre:"realebail-white",size:"medium",imageSettings:{aspect:900/600,maxSize:5*1024*1024,maxCount:5,width:200,height:200},isContain:!0,locale:{buttonAdd:"Add Image",dialogSave:"Save",dialogCancel:"Cancel",dialogAddImage:"Add",dialogDeleteImage:"Delete",imageFallback:"Fallback image",buttonReset:"Reset image",dragAndDrop:"Drag and drop your files here"},defaultImages:[],images:[{id:0,index:0,isNew:!1,url:"https://drupal-prod.visitcalifornia.com/sites/default/files/styles/fluid_1920/public/2020-06/VC_PlacesToVisit_LosAngelesCounty_RF_1170794243.jpg.webp?itok=46pJYz8v"}]}};var C,V,$;j.parameters={...j.parameters,docs:{...(C=j.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    propsButton: {
      default: {
        genre: 'product',
        size: 'medium'
      },
      delete: {
        genre: 'blackBorder',
        size: 'medium'
      }
    },
    sx: {
      default: {
        width: '100%'
      }
    },
    onChange(images) {
      console.log('Selected images:', images);
    },
    genre: 'realebail-white',
    size: 'medium',
    imageSettings: {
      aspect: 900 / 600,
      maxSize: 5 * 1024 * 1024,
      maxCount: 5,
      width: 200,
      height: 200
    },
    isContain: true,
    locale: {
      buttonAdd: 'Add Image',
      dialogSave: 'Save',
      dialogCancel: 'Cancel',
      dialogAddImage: 'Add',
      dialogDeleteImage: 'Delete',
      imageFallback: 'Fallback image',
      buttonReset: 'Reset image',
      dragAndDrop: 'Drag and drop your files here'
    },
    defaultImages: [],
    images: [{
      id: 0,
      index: 0,
      isNew: false,
      url: 'https://drupal-prod.visitcalifornia.com/sites/default/files/styles/fluid_1920/public/2020-06/VC_PlacesToVisit_LosAngelesCounty_RF_1170794243.jpg.webp?itok=46pJYz8v'
    }]
  }
}`,...($=(V=j.parameters)==null?void 0:V.docs)==null?void 0:$.source}}};const xe=["Select"];export{j as Select,xe as __namedExportsOrder,be as default};
