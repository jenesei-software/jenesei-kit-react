import{I as i}from"./component-CDVTgdYL.js";import"./iframe-DcM8uw4S.js";import"./consts-C-5JDkHU.js";import"./use-DHXH0krX.js";import"./area-Czvenhgf.js";import"./component.styles-Bmp7pVt-.js";import"./component-Do9xNPLP.js";import"./component-ZvurOtfK.js";import"./index-BBgS0SmT.js";import"./component.constants-JkVODZp5.js";import"./context.hooks-BHE37xHN.js";import"./v4-C6aID195.js";const I={component:i,title:"Component/Image/Button"},e={args:{button:{genre:"blackBorder",size:"medium",children:"Add Image"},dialog:{button:{genre:"blackBorder",size:"medium"},buttonDelete:{genre:"blackBorder",size:"medium"}},locale:{buttonAdd:"Add Image",dialogSave:"Save",dialogCancel:"Cancel",dialogAddImage:"Add",dialogDeleteImage:"Delete"},imageSettings:{aspect:2/2,maxCount:1,maxSize:5*1024*1024},onSave(n){n?n.forEach(o=>{console.log(`Added file: ${o.name}, size: ${o.isNew} bytes`)}):console.log("No files added")}}};var a,t,d;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
