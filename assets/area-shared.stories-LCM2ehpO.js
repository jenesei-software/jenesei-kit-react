import{j as r,a as y,r as u}from"./iframe-CCRJ-oAJ.js";import{B as s}from"./component-gT5rKHKL.js";import{a as h,S as f}from"./component-TDmaol9e.js";import{m as v}from"./floating-ui.react-BxCoI0kM.js";import"./preload-helper-C1FmrZbK.js";import"./component.functions-BY9xW1ff.js";import"./area-BzKORMHz.js";import"./jsx-runtime-BoTEK8Vt.js";import"./index-CnN8fCN8.js";const t=e=>r.jsxDEV(h,{style:k,sx:e.sx,as:"ul",children:e.option.map(a=>r.jsxDEV(v.li,{initial:!1,style:x,onClick:()=>{var n;return(n=e.onSelected)==null?void 0:n.call(e,a.id)},children:[(e.isLink??!1)&&"link"in a?r.jsxDEV(s,{...a.id===e.value&&a.selected?{...a.default,...a.selected}:a.default},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/areas/shared/area.tsx",lineNumber:16,columnNumber:13},void 0):r.jsxDEV(s,{...a.id===e.value&&a.selected?{...a.default,...a.selected}:a.default},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/areas/shared/area.tsx",lineNumber:24,columnNumber:13},void 0),a.id===e.value?r.jsxDEV(f,{layoutId:"underline",id:"underline",sx:{...D,background:y.palette[e.color??"accentBlueLight"]}},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/areas/shared/area.tsx",lineNumber:33,columnNumber:13},void 0):null]},a.id,!0,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/areas/shared/area.tsx",lineNumber:14,columnNumber:9},void 0))},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/src/areas/shared/area.tsx",lineNumber:12,columnNumber:5},void 0),g={listStyle:"none",padding:0,margin:0},k={...g,display:"flex",width:"100%"},x={...g,position:"relative"},D={position:"absolute",width:"100%",left:0,right:0,bottom:-2,height:2};try{t.displayName="Shared",t.__docgenInfo={description:"",displayName:"Shared",props:{sx:{defaultValue:null,description:"",name:"sx",required:!1,type:{name:"CSSProperties"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},onSelected:{defaultValue:null,description:"",name:"onSelected",required:!1,type:{name:"((tab: string) => void)"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"inherit"'},{value:'"transparent"'},{value:'"accentRedLight"'},{value:'"accentOrangeLight"'},{value:'"accentYellowLight"'},{value:'"accentGreenLight"'},{value:'"accentMintLight"'},{value:'"accentTealLight"'},{value:'"accentCyanLight"'},{value:'"accentBlueLight"'},{value:'"accentIndigoLight"'},{value:'"accentPurpleLight"'},{value:'"accentPinkLight"'},{value:'"accentBrownLight"'},{value:'"accentGrayLight"'},{value:'"fillPrimaryLight"'},{value:'"fillSecondaryLight"'},{value:'"fillTertiaryLight"'},{value:'"fillQuaternaryLight"'},{value:'"fillQuinaryLight"'},{value:'"textPrimaryLight"'},{value:'"textSecondaryLight"'},{value:'"textTertiaryLight"'},{value:'"controlMenuLight"'},{value:'"controlTooltipLight"'},{value:'"controlTransparent"'},{value:'"shadowGlassLight"'},{value:'"shadowPrimaryLight"'},{value:'"shadowSecondaryLight"'},{value:'"shadowQuaternaryLight"'},{value:'"productPrimaryLight"'},{value:'"productSecondaryLight"'},{value:'"productTertiaryLight"'},{value:'"productQuaternaryLight"'},{value:'"productQuinaryLight"'},{value:'"current"'},{value:'"accentRedDark"'},{value:'"accentOrangeDark"'},{value:'"accentYellowDark"'},{value:'"accentGreenDark"'},{value:'"accentMintDark"'},{value:'"accentTealDark"'},{value:'"accentCyanDark"'},{value:'"accentBlueDark"'},{value:'"accentIndigoDark"'},{value:'"accentPurpleDark"'},{value:'"accentPinkDark"'},{value:'"accentBrownDark"'},{value:'"accentGrayDark"'},{value:'"fillPrimaryDark"'},{value:'"fillSecondaryDark"'},{value:'"fillTertiaryDark"'},{value:'"fillQuaternaryDark"'},{value:'"fillQuinaryDark"'},{value:'"textPrimaryDark"'},{value:'"textSecondaryDark"'},{value:'"textTertiaryDark"'},{value:'"controlMenuDark"'},{value:'"controlTooltipDark"'},{value:'"productPrimaryDark"'},{value:'"productSecondaryDark"'},{value:'"productTertiaryDark"'},{value:'"productQuaternaryDark"'},{value:'"productQuinaryDark"'},{value:'"shadowGlassDark"'},{value:'"shadowPrimaryDark"'},{value:'"shadowSecondaryDark"'},{value:'"shadowQuaternaryDark"'}]}},isLink:{defaultValue:null,description:"",name:"isLink",required:!1,type:{name:"boolean"}},option:{defaultValue:null,description:"",name:"option",required:!0,type:{name:"{ default: IButton; selected?: Partial<IButton> | undefined; id: string; }[] | { default: IButton; selected?: Partial<IButton> | undefined; id: string; }[]"}}}}}catch{}const R={component:t,title:"Area/3. Shared"},L=e=>{const[a,n]=u.useState(e.value??"1"),p=l=>{var d;n(l),(d=e.onSelected)==null||d.call(e,l)};return u.useEffect(()=>{n(e.value??"1")},[e.value]),r.jsxDEV(t,{sx:{padding:"16px",position:"relative",width:"100%",height:"100%",backgroundColor:y.palette.fillPrimaryDark,borderRadius:"8px",gap:"0px"},...e,onSelected:p,value:a},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/.storybook-stories/default/area-shared.stories.tsx",lineNumber:21,columnNumber:10},void 0)},i={render:e=>r.jsxDEV(L,{...e},void 0,!1,{fileName:"/home/runner/work/jenesei-kit-react/jenesei-kit-react/.storybook-stories/default/area-shared.stories.tsx",lineNumber:32,columnNumber:19},void 0),args:{isLink:!1,value:"1",option:[{id:"1",selected:{genre:"primary"},default:{icons:[{order:-1,type:"id",name:"Bag1"}],genre:"primary",children:"Выкупы",isHiddenBorder:!0,isZeroRadius:!0,size:"medium",sxTypography:{family:"Manrope",weight:"400",size:14}}},{id:"2",selected:{genre:"primary"},default:{icons:[{order:-1,type:"id",name:"Bag1"}],genre:"primary",isHiddenBorder:!0,isZeroRadius:!0,children:"Доставки",size:"medium",sxTypography:{family:"Manrope",weight:"400",size:14}}},{id:"3",selected:{genre:"primary"},default:{icons:[{order:-1,type:"id",name:"Bag1"}],genre:"primary",isHiddenBorder:!0,isZeroRadius:!0,children:"Избранное",size:"medium",sxTypography:{family:"Manrope",weight:"400",size:14}}},{id:"4",selected:{genre:"primary"},default:{icons:[{order:-1,type:"id",name:"Bag1"}],genre:"primary",isHiddenBorder:!0,isZeroRadius:!0,children:"Отзывы",size:"medium",sxTypography:{family:"Manrope",weight:"400",size:14}}},{id:"5",selected:{genre:"primary"},default:{icons:[{order:-1,type:"id",name:"Bag1"}],genre:"primary",isHiddenBorder:!0,isZeroRadius:!0,children:"Позиции в поиске",size:"medium",sxTypography:{family:"Manrope",weight:"400",size:14}}},{id:"6",selected:{genre:"primary"},default:{isZeroRadius:!0,icons:[{order:-1,type:"logo",name:"BustMarket"}],genre:"primary",isHiddenBorder:!0,children:"Тест Лого",size:"medium",sxTypography:{family:"Manrope",weight:"400",size:14}}}]}};var o,c,m;i.parameters={...i.parameters,docs:{...(o=i.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => <SharedStackWrapper {...args} />,
  args: {
    isLink: false,
    value: '1',
    option: [{
      id: '1',
      selected: {
        genre: 'primary'
      },
      default: {
        icons: [{
          order: -1,
          type: 'id',
          name: 'Bag1'
        }],
        genre: 'primary',
        children: 'Выкупы',
        isHiddenBorder: true,
        isZeroRadius: true,
        size: 'medium',
        sxTypography: {
          family: 'Manrope',
          weight: '400',
          size: 14
        }
      }
    }, {
      id: '2',
      selected: {
        genre: 'primary'
      },
      default: {
        icons: [{
          order: -1,
          type: 'id',
          name: 'Bag1'
        }],
        genre: 'primary',
        isHiddenBorder: true,
        isZeroRadius: true,
        children: 'Доставки',
        size: 'medium',
        sxTypography: {
          family: 'Manrope',
          weight: '400',
          size: 14
        }
      }
    }, {
      id: '3',
      selected: {
        genre: 'primary'
      },
      default: {
        icons: [{
          order: -1,
          type: 'id',
          name: 'Bag1'
        }],
        genre: 'primary',
        isHiddenBorder: true,
        isZeroRadius: true,
        children: 'Избранное',
        size: 'medium',
        sxTypography: {
          family: 'Manrope',
          weight: '400',
          size: 14
        }
      }
    }, {
      id: '4',
      selected: {
        genre: 'primary'
      },
      default: {
        icons: [{
          order: -1,
          type: 'id',
          name: 'Bag1'
        }],
        genre: 'primary',
        isHiddenBorder: true,
        isZeroRadius: true,
        children: 'Отзывы',
        size: 'medium',
        sxTypography: {
          family: 'Manrope',
          weight: '400',
          size: 14
        }
      }
    }, {
      id: '5',
      selected: {
        genre: 'primary'
      },
      default: {
        icons: [{
          order: -1,
          type: 'id',
          name: 'Bag1'
        }],
        genre: 'primary',
        isHiddenBorder: true,
        isZeroRadius: true,
        children: 'Позиции в поиске',
        size: 'medium',
        sxTypography: {
          family: 'Manrope',
          weight: '400',
          size: 14
        }
      }
    }, {
      id: '6',
      selected: {
        genre: 'primary'
      },
      default: {
        isZeroRadius: true,
        icons: [{
          order: -1,
          type: 'logo',
          name: 'BustMarket'
        }],
        genre: 'primary',
        isHiddenBorder: true,
        children: 'Тест Лого',
        size: 'medium',
        sxTypography: {
          family: 'Manrope',
          weight: '400',
          size: 14
        }
      }
    }]
  }
}`,...(m=(c=i.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const P=["Example"];export{i as Example,P as __namedExportsOrder,R as default};
