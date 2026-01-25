import{r as d,j as o,t as p}from"./iframe-1BJ3w_50.js";import{B as f}from"./component-BB_KxpK4.js";import{u as b}from"./use-gvMOft5u.js";import"./preload-helper-C1FmrZbK.js";import"./component.functions-5Lo1eb4y.js";import"./area-22l_fHsN.js";import"./floating-ui.react-DF04B13p.js";import"./index-B2jwwQNa.js";import"./area-AAM9WxCo.js";import"./component-CA38-cs0.js";import"./context.hooks-CbRbSMYZ.js";import"./use-TW0LbYqD.js";import"./v4-C6aID195.js";const i=e=>{const t=d.useRef(null),c=d.useCallback(()=>{var n;(n=t.current)==null||n.click()},[]),{handleAddFiles:g}=b({onSave:e.onSave,locale:e.locale,dialog:e.dialog,imageSettings:e.imageSettings,refInput:t});return o.jsxDEV(o.Fragment,{children:[o.jsxDEV(f,{...e.button,onClick:n=>{var l,r;(r=(l=e.button).onClick)==null||r.call(l,n),c()},children:e.button.children||e.locale.buttonAdd},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/components/image-button/component.tsx",lineNumber:26,columnNumber:7},void 0),o.jsxDEV("input",{ref:t,type:"file",accept:p,multiple:!0,style:{display:"none"},onChange:n=>{n.target.files&&g(n.target.files)}},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/components/image-button/component.tsx",lineNumber:35,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/components/image-button/component.tsx",lineNumber:25,columnNumber:5},void 0)};try{i.displayName="ImageButton",i.__docgenInfo={description:"",displayName:"ImageButton",props:{button:{defaultValue:null,description:"",name:"button",required:!0,type:{name:"ButtonProps"}},dialog:{defaultValue:null,description:"",name:"dialog",required:!0,type:{name:"{ button: ButtonProps; buttonDelete: ButtonProps; }"}},imageSettings:{defaultValue:null,description:"",name:"imageSettings",required:!0,type:{name:"{ maxSize: number; maxCount: number; aspect?: number | undefined; }"}},locale:{defaultValue:null,description:"",name:"locale",required:!0,type:{name:"{ buttonAdd: string; dialogSave: string; dialogCancel: string; dialogAddImage: string; dialogDeleteImage: string; }"}},onSave:{defaultValue:null,description:"",name:"onSave",required:!0,type:{name:"(files: ImageSelectItemProps[] | null) => void"}},sx:{defaultValue:null,description:"",name:"sx",required:!1,type:{name:"SXProps"}}}}}catch{}const j={component:i,title:"Component/Image/Button"},a={args:{button:{genre:"blackBorder",size:"medium",children:"Add Image"},dialog:{button:{genre:"blackBorder",size:"medium"},buttonDelete:{genre:"blackBorder",size:"medium"}},locale:{buttonAdd:"Add Image",dialogSave:"Save",dialogCancel:"Cancel",dialogAddImage:"Add",dialogDeleteImage:"Delete"},imageSettings:{aspect:2/2,maxCount:1,maxSize:5*1024*1024},onSave(e){e?e.forEach(t=>{console.log(`Added file: ${t.name}, size: ${t.isNew} bytes`)}):console.log("No files added")}}};var m,s,u;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    button: {
      genre: 'blackBorder',
      size: 'medium',
      children: 'Add Image'
    },
    dialog: {
      button: {
        genre: 'blackBorder',
        size: 'medium'
      },
      buttonDelete: {
        genre: 'blackBorder',
        size: 'medium'
      }
    },
    locale: {
      buttonAdd: 'Add Image',
      dialogSave: 'Save',
      dialogCancel: 'Cancel',
      dialogAddImage: 'Add',
      dialogDeleteImage: 'Delete'
    },
    imageSettings: {
      aspect: 2 / 2,
      maxCount: 1,
      maxSize: 5 * 1024 * 1024 // 5 MB
    },
    onSave(files) {
      if (files) {
        files.forEach(file => {
          console.log(\`Added file: \${file.name}, size: \${file.isNew} bytes\`);
        });
      } else {
        console.log('No files added');
      }
    }
  }
}`,...(u=(s=a.parameters)==null?void 0:s.docs)==null?void 0:u.source}}};const z=["Button"];export{a as Button,z as __namedExportsOrder,j as default};
