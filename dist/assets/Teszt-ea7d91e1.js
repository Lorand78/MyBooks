import{_ as f,a as s,o as p,g as u,d as t,w as l,A as b,b as d,B as i}from"./index-1eb53deb.js";const g={data:()=>({dialog:!1,dialogDelete:!1,headers:[{text:"Dessert (100g serving)",align:"start",sortable:!1,value:"name"},{text:"Calories",value:"calories"},{text:"Fat (g)",value:"fat"},{text:"Carbs (g)",value:"carbs"},{text:"Protein (g)",value:"protein"},{text:"Actions",value:"actions",sortable:!1}],desserts:[],editedIndex:-1,editedItem:{name:"",calories:0,fat:0,carbs:0,protein:0},defaultItem:{name:"",calories:0,fat:0,carbs:0,protein:0}}),computed:{formTitle(){return this.editedIndex===-1?"New Item":"Edit Item"}},watch:{dialog(e){e||this.close()},dialogDelete(e){e||this.closeDelete()}},created(){this.initialize()},methods:{initialize(){this.desserts=[{name:"Frozen Yogurt",calories:159,fat:6,carbs:24,protein:4},{name:"Ice cream sandwich",calories:237,fat:9,carbs:37,protein:4.3},{name:"Eclair",calories:262,fat:16,carbs:23,protein:6},{name:"Cupcake",calories:305,fat:3.7,carbs:67,protein:4.3},{name:"Gingerbread",calories:356,fat:16,carbs:49,protein:3.9},{name:"Jelly bean",calories:375,fat:0,carbs:94,protein:0},{name:"Lollipop",calories:392,fat:.2,carbs:98,protein:0},{name:"Honeycomb",calories:408,fat:3.2,carbs:87,protein:6.5},{name:"Donut",calories:452,fat:25,carbs:51,protein:4.9},{name:"KitKat",calories:518,fat:26,carbs:65,protein:7}]},editItem(e){this.editedIndex=this.desserts.indexOf(e),this.editedItem=Object.assign({},e),this.dialog=!0},deleteItem(e){this.editedIndex=this.desserts.indexOf(e),this.editedItem=Object.assign({},e),this.dialogDelete=!0},deleteItemConfirm(){this.desserts.splice(this.editedIndex,1),this.closeDelete()},close(){this.dialog=!1,this.$nextTick(()=>{this.editedItem=Object.assign({},this.defaultItem),this.editedIndex=-1})},closeDelete(){this.dialogDelete=!1,this.$nextTick(()=>{this.editedItem=Object.assign({},this.defaultItem),this.editedIndex=-1})},save(){this.editedIndex>-1?Object.assign(this.desserts[this.editedIndex],this.editedItem):this.desserts.push(this.editedItem),this.close()}}},v={class:"d-flex align-center justify-center",style:{height:"100vh"}},x=i("a",{href:"#",class:"text-body-2 font-weight-regular"},"Elfelejtett jelszó?",-1),I=i("div",{class:"mt-2"},[i("p",{class:"text-body-2"},[d("Nincs felhasználód? "),i("a",{href:"#"},"Regisztráció")])],-1);function _(e,a,w,z,D,V){const n=s("v-text-field"),r=s("v-img"),c=s("v-btn"),m=s("v-form"),h=s("v-sheet");return p(),u("div",v,[t(h,{width:"400",class:"mx-auto"},{default:l(()=>[t(m,{"fast-fail":"",onSubmit:b(e.login,["prevent"])},{default:l(()=>[t(n,{variant:"underlined",modelValue:e.username,"onUpdate:modelValue":a[0]||(a[0]=o=>e.username=o),label:"Felhasználó"},null,8,["modelValue"]),t(n,{variant:"underlined",modelValue:e.password,"onUpdate:modelValue":a[1]||(a[1]=o=>e.password=o),label:"Jelszó"},null,8,["modelValue"]),x,t(c,{type:"submit",variant:"outlined",color:"primary",block:"",class:"mt-2"},{default:l(()=>[t(r,{src:"../../images/lock.png",width:50}),d(" Belépés")]),_:1})]),_:1},8,["onSubmit"]),I]),_:1})])}const y=f(g,[["render",_]]);export{y as default};