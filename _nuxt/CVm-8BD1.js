import{d as g,bh as b,B as C,p as S,E as _,aT as Q,q as m,aY as O,b6 as $,S as k}from"./Dfa__v7-.js";const A=g({name:"ContentQuery",props:{path:{type:String,required:!1,default:void 0},only:{type:Array,required:!1,default:void 0},without:{type:Array,required:!1,default:void 0},where:{type:Object,required:!1,default:void 0},sort:{type:Object,required:!1,default:void 0},limit:{type:Number,required:!1,default:void 0},skip:{type:Number,required:!1,default:void 0},locale:{type:String,required:!1,default:void 0},find:{type:String,required:!1,default:void 0}},async setup(a){const{path:t,only:n,without:o,where:u,sort:l,limit:d,skip:f,locale:s,find:y}=b(a),p=C(()=>{var e;return(e=t.value)==null?void 0:e.includes("/_")}),h=!S().public.content.experimental.advanceQuery;_(()=>a,()=>r(),{deep:!0});const i=e=>h?e!=null&&e.surround?e.surround:e!=null&&e._id||Array.isArray(e)?e:e==null?void 0:e.result:e.result,{data:c,refresh:r}=await Q(`content-query-${O(a)}`,()=>{let e;return t.value?e=m(t.value):e=m(),n.value&&(e=e.only(n.value)),o.value&&(e=e.without(o.value)),u.value&&(e=e.where(u.value)),l.value&&(e=e.sort(l.value)),d.value&&(e=e.limit(d.value)),f.value&&(e=e.skip(f.value)),s.value&&(e=e.where({_locale:s.value})),y.value==="one"?e.findOne().then(i):y.value==="surround"?t.value?h?e.findSurround(t.value):e.withSurround(t.value).findOne().then(i):(console.warn("[Content] Surround queries requires `path` prop to be set."),console.warn("[Content] Query without `path` will return regular `find()` results."),e.find().then(i)):e.find().then(i)});return{isPartial:p,data:c,refresh:r}},render(a){var v;const t=$(),{data:n,refresh:o,isPartial:u,path:l,only:d,without:f,where:s,sort:y,limit:p,skip:h,locale:i,find:c}=a,r={path:l,only:d,without:f,where:s,sort:y,limit:p,skip:h,locale:i,find:c};if(r.find==="one"){if(!n&&(t!=null&&t["not-found"]))return t["not-found"]({props:r,...this.$attrs});if(t!=null&&t.empty&&(n==null?void 0:n._type)==="markdown"&&!((v=n==null?void 0:n.body)!=null&&v.children.length))return t.empty({props:r,...this.$attrs})}else if((!n||!n.length)&&t!=null&&t["not-found"])return t["not-found"]({props:r,...this.$attrs});return t!=null&&t.default?t.default({data:n,refresh:o,isPartial:u,props:r,...this.$attrs}):((w,q)=>k("pre",null,JSON.stringify({message:"You should use slots with <ContentQuery>!",slot:w,data:q},null,2)))("default",{data:n,props:r,isPartial:u})}}),N=A,R=Object.assign(N,{__name:"ContentQuery"});export{R as default};
