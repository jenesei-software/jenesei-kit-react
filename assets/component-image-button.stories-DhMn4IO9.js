import{I as i}from"./component-DinFTFca.js";import"./iframe-B6wTuebw.js";import"./consts-Dxh7K3Vi.js";import"./use-DvY-4Z8i.js";import"./area-bvsuznK2.js";import"./component.styles-DJkzBuyw.js";import"./component-DJVNPQRp.js";import"./component-Drvbu2mC.js";import"./index-DeY6W6It.js";import"./component.constants-KeXfb_fd.js";import"./context.hooks-CeQ2Ufrn.js";import"./v4-C6aID195.js";const I={component:i,title:"Component/Image/Button"},e={args:{button:{genre:"blackBorder",size:"medium",children:"Add Image"},dialog:{button:{genre:"blackBorder",size:"medium"},buttonDelete:{genre:"blackBorder",size:"medium"}},locale:{buttonAdd:"Add Image",dialogSave:"Save",dialogCancel:"Cancel",dialogAddImage:"Add",dialogDeleteImage:"Delete"},imageSettings:{aspect:2/2,maxCount:1,maxSize:5*1024*1024},onSave(n){n?n.forEach(o=>{console.log(`Added file: ${o.name}, size: ${o.isNew} bytes`)}):console.log("No files added")}}};var a,t,d;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
