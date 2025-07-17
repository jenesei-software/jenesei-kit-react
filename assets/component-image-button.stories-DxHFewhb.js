import{I as i}from"./component-BzEMa_n1.js";import"./iframe-QU8fN3qd.js";import"./consts-Cu_wIy0p.js";import"./use-C0ug_6N5.js";import"./area-B3obfx2W.js";import"./component.styles-BXL2CLnv.js";import"./component-CY6kWhjr.js";import"./component-D4WFv5P-.js";import"./index-tRtRZTnV.js";import"./component.constants-DBNlyk1z.js";import"./context.hooks-BnN5Cf_g.js";import"./v4-C6aID195.js";const I={component:i,title:"Component/Image/Button"},e={args:{button:{genre:"blackBorder",size:"medium",children:"Add Image"},dialog:{button:{genre:"blackBorder",size:"medium"},buttonDelete:{genre:"blackBorder",size:"medium"}},locale:{buttonAdd:"Add Image",dialogSave:"Save",dialogCancel:"Cancel",dialogAddImage:"Add",dialogDeleteImage:"Delete"},imageSettings:{aspect:2/2,maxCount:1,maxSize:5*1024*1024},onSave(n){n?n.forEach(o=>{console.log(`Added file: ${o.name}, size: ${o.isNew} bytes`)}):console.log("No files added")}}};var a,t,d;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(d=(t=e.parameters)==null?void 0:t.docs)==null?void 0:d.source}}};const S=["Button"];export{e as Button,S as __namedExportsOrder,I as default};
