import{j as r,S as h,m as f,d as k,r as l}from"./iframe-1BJ3w_50.js";import{B as o}from"./component-BB_KxpK4.js";import{L as p}from"./link-BZsJ5i8W.js";import"./preload-helper-C1FmrZbK.js";import"./component.functions-5Lo1eb4y.js";import"./area-22l_fHsN.js";import"./floating-ui.react-DF04B13p.js";import"./index-B2jwwQNa.js";import"./index-B7Qfo0ta.js";const s=e=>r.jsxDEV(h,{sx:e.sx,children:r.jsxDEV("ul",{style:b,children:e.option.map(n=>r.jsxDEV(f.li,{initial:!1,style:x,onClick:()=>{var a;return(a=e.onSelected)==null?void 0:a.call(e,n.id)},children:[(e.isLink??!1)&&"link"in n?r.jsxDEV(p,{...n.link,children:r.jsxDEV(o,{...n.id===e.value&&n.selected?{...n.default,...n.selected}:n.default},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/areas/shared/area.tsx",lineNumber:19,columnNumber:17},void 0)},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/areas/shared/area.tsx",lineNumber:18,columnNumber:15},void 0):r.jsxDEV(o,{...n.id===e.value&&n.selected?{...n.default,...n.selected}:n.default},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/areas/shared/area.tsx",lineNumber:28,columnNumber:15},void 0),n.id===e.value?r.jsxDEV(v,{layoutId:"underline",id:"underline"},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/areas/shared/area.tsx",lineNumber:36,columnNumber:40},void 0):null]},n.id,!0,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/areas/shared/area.tsx",lineNumber:16,columnNumber:11},void 0))},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/areas/shared/area.tsx",lineNumber:14,columnNumber:7},void 0)},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/areas/shared/area.tsx",lineNumber:13,columnNumber:5},void 0),g={listStyle:"none",padding:0,margin:0},b={...g,display:"flex",width:"100%"},x={...g,position:"relative"},v=k(f.div)`
  position: absolute;
  width: 100%;
  left: 0;
  right: 0;
  bottom: -2px;
  height: 2px;
  background: ${e=>e.theme.palette.violetJanice};
`;try{s.displayName="Shared",s.__docgenInfo={description:"",displayName:"Shared",props:{sx:{defaultValue:null,description:"",name:"sx",required:!1,type:{name:"SXProps"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},onSelected:{defaultValue:null,description:"",name:"onSelected",required:!1,type:{name:"((tab: string) => void)"}},isLink:{defaultValue:null,description:"",name:"isLink",required:!1,type:{name:"boolean"}},option:{defaultValue:null,description:"",name:"option",required:!0,type:{name:"{ default: ButtonProps; selected?: Partial<ButtonProps> | undefined; id: string; link: LinkProps; }[] | { default: ButtonProps; selected?: Partial<...> | undefined; id: string; }[]"}}}}}catch{}const _={component:s,title:"Area/Shared"},j=e=>{const[n,a]=l.useState(e.value??"1"),y=t=>{var d;a(t),(d=e.onSelected)==null||d.call(e,t)};return l.useEffect(()=>{a(e.value??"1")},[e.value]),r.jsxDEV(s,{sx:t=>({default:{padding:"16px",position:"relative",width:"100%",height:"100%",backgroundColor:t.palette.whiteStandard,borderRadius:"8px",gap:"8px"}}),...e,onSelected:y,value:n},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/.storybook-stories/default/area-shared.stories.tsx",lineNumber:21,columnNumber:10},void 0)},i={render:e=>r.jsxDEV(j,{...e},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/.storybook-stories/default/area-shared.stories.tsx",lineNumber:34,columnNumber:19},void 0),args:{isLink:!1,value:"1",option:[{id:"1",selected:{genre:"bustmarket-gray-violet"},default:{icons:[{order:-1,type:"bustmarket",name:"Card"}],genre:"bustmarket-gray",children:"Выкупы",size:"medium",sxTypography:{default:{family:"Manrope",weight:400,size:14}}}},{id:"2",selected:{genre:"bustmarket-gray-violet"},default:{icons:[{order:-1,type:"bustmarket",name:"Delivery"}],genre:"bustmarket-gray",children:"Доставки",size:"medium",sxTypography:{default:{family:"Manrope",weight:400,size:14}}}},{id:"3",selected:{genre:"bustmarket-gray-violet"},default:{icons:[{order:-1,type:"bustmarket",name:"Heart"}],genre:"bustmarket-gray",children:"Избранное",size:"medium",sxTypography:{default:{family:"Manrope",weight:400,size:14}}}},{id:"4",selected:{genre:"bustmarket-gray-violet"},default:{icons:[{order:-1,type:"bustmarket",name:"Reviews"}],genre:"bustmarket-gray",children:"Отзывы",size:"medium",sxTypography:{default:{family:"Manrope",weight:400,size:14}}}},{id:"5",selected:{genre:"bustmarket-gray-violet"},default:{icons:[{order:-1,type:"bustmarket",name:"Search"}],genre:"bustmarket-gray",children:"Позиции в поиске",size:"medium",sxTypography:{default:{family:"Manrope",weight:400,size:14}}}},{id:"6",selected:{genre:"bustmarket-gray-violet"},default:{isOutlineBoxShadow:!0,icons:[{order:-1,type:"logo",name:"BustMarket"}],genre:"bustmarket-gray",children:"Тест Лого",size:"medium",sxTypography:{default:{family:"Manrope",weight:400,size:14}}}}]}};var u,m,c;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => <SharedStackWrapper {...args} />,
  args: {
    isLink: false,
    value: '1',
    option: [{
      id: '1',
      selected: {
        genre: 'bustmarket-gray-violet'
      },
      default: {
        icons: [{
          order: -1,
          type: 'bustmarket',
          name: 'Card'
        }],
        genre: 'bustmarket-gray',
        children: 'Выкупы',
        size: 'medium',
        sxTypography: {
          default: {
            family: 'Manrope',
            weight: 400,
            size: 14
          }
        }
      }
    }, {
      id: '2',
      selected: {
        genre: 'bustmarket-gray-violet'
      },
      default: {
        icons: [{
          order: -1,
          type: 'bustmarket',
          name: 'Delivery'
        }],
        genre: 'bustmarket-gray',
        children: 'Доставки',
        size: 'medium',
        sxTypography: {
          default: {
            family: 'Manrope',
            weight: 400,
            size: 14
          }
        }
      }
    }, {
      id: '3',
      selected: {
        genre: 'bustmarket-gray-violet'
      },
      default: {
        icons: [{
          order: -1,
          type: 'bustmarket',
          name: 'Heart'
        }],
        genre: 'bustmarket-gray',
        children: 'Избранное',
        size: 'medium',
        sxTypography: {
          default: {
            family: 'Manrope',
            weight: 400,
            size: 14
          }
        }
      }
    }, {
      id: '4',
      selected: {
        genre: 'bustmarket-gray-violet'
      },
      default: {
        icons: [{
          order: -1,
          type: 'bustmarket',
          name: 'Reviews'
        }],
        genre: 'bustmarket-gray',
        children: 'Отзывы',
        size: 'medium',
        sxTypography: {
          default: {
            family: 'Manrope',
            weight: 400,
            size: 14
          }
        }
      }
    }, {
      id: '5',
      selected: {
        genre: 'bustmarket-gray-violet'
      },
      default: {
        icons: [{
          order: -1,
          type: 'bustmarket',
          name: 'Search'
        }],
        genre: 'bustmarket-gray',
        children: 'Позиции в поиске',
        size: 'medium',
        sxTypography: {
          default: {
            family: 'Manrope',
            weight: 400,
            size: 14
          }
        }
      }
    }, {
      id: '6',
      selected: {
        genre: 'bustmarket-gray-violet'
      },
      default: {
        isOutlineBoxShadow: true,
        icons: [{
          order: -1,
          type: 'logo',
          name: 'BustMarket'
        }],
        genre: 'bustmarket-gray',
        children: 'Тест Лого',
        size: 'medium',
        sxTypography: {
          default: {
            family: 'Manrope',
            weight: 400,
            size: 14
          }
        }
      }
    }]
  }
}`,...(c=(m=i.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const B=["Shared"];export{i as Shared,B as __namedExportsOrder,_ as default};
