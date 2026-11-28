/* Prueba de humo: pinta las 16 vistas en node y reporta la que se caiga.
   Esto es lo que faltaba: verifique las tarjetas nuevas una por una, pero nunca
   corri la pestania entera, y por eso una zona muerta temporal viajo a produccion. */
const fs=require('fs');
const D=JSON.parse(fs.readFileSync('/home/claude/app2/app_data2.json','utf8'));
const store={};
const el=()=>({innerHTML:"",textContent:"",style:{},classList:{add(){},remove(){},toggle(){}},dataset:{},value:0,
 appendChild(){},insertAdjacentHTML(){},querySelector:()=>null,querySelectorAll:()=>[],addEventListener(){},
 closest:()=>null,getAttribute:()=>null,setAttribute(){},remove(){},onclick:null,oninput:null,onchange:null,
 disabled:false,id:"",href:"",download:"",click(){}});
global.document={querySelector:(s)=>{store[s]=store[s]||el();return store[s];},querySelectorAll:()=>[],
 getElementById:()=>el(),createElement:()=>el(),body:el(),head:el(),addEventListener(){},documentElement:el()};
global.window=global; global.localStorage={getItem:()=>null,setItem(){},removeItem(){}};
global.alert=()=>{}; global.prompt=()=>null; global.location={href:"",reload(){}};
global.URL={createObjectURL:()=>""}; global.Blob=function(){};
let src=fs.readFileSync('/home/claude/app2/app.js','utf8').replace(/^const D\s*=.*$/m,'');
eval(src+"\nglobal.__V={ST,vRes,vProd,vIns,vMo,vUtil,vCanales,vVentas,vPron,vPlanilla,vPlan,vInv,vVta,vEsc,vAlertas,vDatos,cuadres};");
const V=global.__V; V.ST.anio="2026";
const vistas=[["Resumen",V.vRes,"#p-res"],["Productos",V.vProd,"#p-prod"],["Insumos",V.vIns,"#p-ins"],
 ["Mano de obra",V.vMo,"#p-mo"],["Del costo al EBITDA",V.vUtil,"#p-util"],["Canales",V.vCanales,"#p-can"],
 ["Ventas",V.vVentas,"#p-ventas"],["Pronóstico",V.vPron,"#p-pron"],["Planilla",V.vPlanilla,"#p-planilla"],
 ["Plan de producción",V.vPlan,"#p-plan"],["Inventario",V.vInv,"#p-inv"],["Consumo",V.vVta,"#p-vta"],
 ["Escenarios",V.vEsc,"#p-esc"],["Alertas",V.vAlertas,"#p-ale"],["Editar datos",V.vDatos,"#p-datos"]];
let malas=0;
vistas.forEach(([n,fn,pane])=>{
  try{ fn(); const h=(store[pane]||{}).innerHTML||"";
    const nan=/undefined|NaN/.test(h);
    if(nan) malas++;
    console.log((nan?"  NaN   ":"  OK    ")+n.padEnd(22)+String(h.length).padStart(8)+" bytes");
  }catch(e){ malas++; console.log("  FALLA "+n.padEnd(22)+e.message); }
});
const c=V.cuadres();
console.log("\ncuadres: "+c.filter(x=>x.ok).length+"/"+c.length+"   vistas con problema: "+malas);
process.exit(malas?1:0);
