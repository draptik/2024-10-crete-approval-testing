import{g as Z,h as G,i as H,j as I,k as J,l as O,m as Q,n as ee,o as ne,p as te,q as se,r as oe}from"../modules/unplugin-icons-BiNNzdo9.js";import{d as z,t as $,S as le,X as ae,o as g,b as B,f as re,h as M,z as e,c as x,k as o,l as n,i as l,e as u,x as ie,C as m,Y as ue,F as ce,W as de,Z as k,g as L}from"../modules/vue-qvk6Dvoz.js";import{L as _e}from"../modules/shiki-D08S6ckH.js";import{u as pe}from"./DrawingPreview.vue_vue_type_script_setup_true_lang-DFWKBpLI.js";import{_ as a,V as h}from"./play-DvooyMX3.js";import"../index-B0Af5hWB.js";import"./context-B1if4ArU.js";import"./PrintStyle.vue_vue_type_script_setup_true_lang-BwA2eoZA.js";const me=z({__name:"Draggable",props:{storageKey:{},initial:{}},setup(D){const c=D,w=$(null),f=c.initial??{x:0,y:0},b=c.storageKey?le(c.storageKey,f):$(f),{style:y}=ae(w,{initialValue:b});return(v,d)=>(g(),B("div",{ref_key:"el",ref:w,class:"fixed",style:M(e(y))},[re(v.$slots,"default")],4))}}),ge=u("svg",{width:"1em",height:"1em",class:"-mt-0.5",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},[u("path",{d:"M21.71 3.29a1 1 0 0 0-1.42 0l-18 18a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l18-18a1 1 0 0 0 0-1.42z",fill:"currentColor"})],-1),we=u("svg",{viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},[u("line",{x1:"2",y1:"15",x2:"22",y2:"4",stroke:"currentColor","stroke-width":"1","stroke-linecap":"round"}),u("line",{x1:"2",y1:"24",x2:"28",y2:"10",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round"}),u("line",{x1:"7",y1:"31",x2:"29",y2:"19",stroke:"currentColor","stroke-width":"3","stroke-linecap":"round"})],-1),fe={class:"flex bg-main p-2"},ve={class:"inline-block w-7 text-center"},ke={class:"pt-.5"},Be=z({__name:"DrawingControls",setup(D){const{brush:c,canClear:w,canRedo:f,canUndo:b,clear:y,drauu:v,drawingEnabled:d,drawingMode:r,drawingPinned:i,brushColors:S}=pe();function V(){v.undo()}function U(){v.redo()}let C="stylus";function _(p){r.value=p,d.value=!0,p!=="eraseLine"&&(C=p)}function E(p){c.color=p,d.value=!0,r.value=C}return(p,t)=>{const K=Z,N=G,R=H,j=I,A=J,F=O,P=Q,Y=ee,q=ne,T=te,W=se,X=oe;return e(d)||e(i)?(g(),x(me,{key:0,class:l(["flex flex-wrap text-xl p-2 gap-1 rounded-md bg-main shadow transition-opacity duration-200 z-20 border border-main",!e(d)&&e(i)?"opacity-40 hover:opacity-90":""]),"storage-key":"slidev-drawing-pos","initial-x":10,"initial-y":10},{default:o(()=>[n(a,{title:"Draw with stylus",class:l({shallow:e(r)!=="stylus"}),onClick:t[0]||(t[0]=s=>_("stylus"))},{default:o(()=>[n(K)]),_:1},8,["class"]),n(a,{title:"Draw a line",class:l({shallow:e(r)!=="line"}),onClick:t[1]||(t[1]=s=>_("line"))},{default:o(()=>[ge]),_:1},8,["class"]),n(a,{title:"Draw an arrow",class:l({shallow:e(r)!=="arrow"}),onClick:t[2]||(t[2]=s=>_("arrow"))},{default:o(()=>[n(N)]),_:1},8,["class"]),n(a,{title:"Draw an ellipse",class:l({shallow:e(r)!=="ellipse"}),onClick:t[3]||(t[3]=s=>_("ellipse"))},{default:o(()=>[n(R)]),_:1},8,["class"]),n(a,{title:"Draw a rectangle",class:l({shallow:e(r)!=="rectangle"}),onClick:t[4]||(t[4]=s=>_("rectangle"))},{default:o(()=>[n(j)]),_:1},8,["class"]),n(a,{title:"Erase",class:l({shallow:e(r)!=="eraseLine"}),onClick:t[5]||(t[5]=s=>_("eraseLine"))},{default:o(()=>[n(A)]),_:1},8,["class"]),n(h),n(e(_e),null,{popper:o(()=>[u("div",fe,[u("div",ve,ie(e(c).size),1),u("div",ke,[m(u("input",{"onUpdate:modelValue":t[6]||(t[6]=s=>e(c).size=s),type:"range",min:"1",max:"15",onChange:t[7]||(t[7]=s=>r.value=e(C))},null,544),[[ue,e(c).size]])])])]),default:o(()=>[n(a,{title:"Adjust stroke width",class:l({shallow:e(r)==="eraseLine"})},{default:o(()=>[we]),_:1},8,["class"])]),_:1}),(g(!0),B(ce,null,de(e(S),s=>(g(),x(a,{key:s,title:"Set brush color",class:l(e(c).color===s&&e(r)!=="eraseLine"?"active":"shallow"),onClick:be=>E(s)},{default:o(()=>[u("div",{class:l(["w-6 h-6 transition-all transform border",e(c).color!==s?"rounded-1/2 scale-85 border-white":"rounded-md border-gray-300/50"]),style:M(e(d)?{background:s}:{borderColor:s})},null,6)]),_:2},1032,["class","onClick"]))),128)),n(h),n(a,{title:"Undo",class:l({disabled:!e(b)}),onClick:t[8]||(t[8]=s=>V())},{default:o(()=>[n(F)]),_:1},8,["class"]),n(a,{title:"Redo",class:l({disabled:!e(f)}),onClick:t[9]||(t[9]=s=>U())},{default:o(()=>[n(P)]),_:1},8,["class"]),n(a,{title:"Delete",class:l({disabled:!e(w)}),onClick:t[10]||(t[10]=s=>e(y)())},{default:o(()=>[n(Y)]),_:1},8,["class"]),n(h),n(a,{title:e(i)?"Unpin drawing":"Pin drawing",class:l({shallow:!e(i)}),onClick:t[11]||(t[11]=s=>i.value=!e(i))},{default:o(()=>[m(n(q,{class:"transform -rotate-45"},null,512),[[k,e(i)]]),m(n(T,null,null,512),[[k,!e(i)]])]),_:1},8,["title","class"]),e(d)?(g(),x(a,{key:0,title:e(i)?"Drawing pinned":"Drawing unpinned",class:l({shallow:!e(d)}),onClick:t[12]||(t[12]=s=>d.value=!e(d))},{default:o(()=>[m(n(W,null,null,512),[[k,e(i)]]),m(n(X,null,null,512),[[k,!e(i)]])]),_:1},8,["title","class"])):L("",!0)]),_:1},8,["class"])):L("",!0)}}});export{Be as default};
