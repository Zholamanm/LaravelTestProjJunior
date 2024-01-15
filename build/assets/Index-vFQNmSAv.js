import{w as r,v as I,a as T,b as C}from"./runtime-dom.esm-bundler-AhNrgLCT.js";import{b as U,c as N,d as q,e as L,_ as j,a as A}from"./method_4-jtxZILaq.js";import{_ as O,d as Q,r as F,o as l,c as a,a as s,F as c,f as d,w as f,g as u,h as g,e as p,t as n,n as y,i as w,j as P,k as S}from"./app-3xq8wrCa.js";import"https://unpkg.com/vue@3/dist/vue.esm-browser.js";const J="/assets/images/shop/product-categories-v1-img1.png",D="/assets/images/shop/product-categories-v1-img2.png",B="/assets/images/shop/product-categories-v1-img3.png",R="/assets/images/shop/product-categories-v1-img4.png",M="/assets/images/shop/product-categories-v1-img5.png",E="/assets/images/shop/product-categories-v1-img6.png",z=Q({name:"Index",mounted(){$(document).trigger("initJQuery"),this.getProducts(),this.getFilterList()},data(){return{products:[],popupProduct:null,filterList:[],categories:[],colors:[],tags:[],prices:[],selectedSortOption:"featured",pagination:[],count:0}},methods:{increaseCount(){this.count+=1},decreaseCount(){this.count!=0&&(this.count-=1)},addToCart(t,i){let h=i?1:this.count,_=localStorage.getItem("cart");this.count=1,$(".qtyValue").val(1),console.log(h);let b=[{id:t,qty:h}];_?(_=JSON.parse(_),_.forEach(m=>{m.id===t&&(m.qty=Number(m.qty)+Number(h),b=null)}),Array.prototype.push.apply(_,b),localStorage.setItem("cart",JSON.stringify(_))):localStorage.setItem("cart",JSON.stringify([{id:t,qty:1}]))},filterProducts(){let t=$("#priceRange").val();this.prices=t.replace(/[\s+]|[$]/g,"").split("-"),this.getProducts(),console.log(t)},addColor(t){this.colors.includes(t)?this.colors=this.colors.filter(i=>i!==t):this.colors.push(t)},addTag(t){this.tags.includes(t)?this.tags=this.tags.filter(i=>i!==t):this.tags.push(t)},getProductList(){console.log(this.tags)},getProducts(t=1){this.axios.post("/api/products",{categories:this.categories,colors:this.colors,tags:this.tags,prices:this.prices,page:t}).then(i=>{this.products=i.data.data,this.sortProducts(),this.pagination=i.data.meta,console.log(this.pagination)}).finally(i=>{$(document).trigger("initJQuery")})},getProduct(t){this.axios.get(`/api/products/${t}`).then(i=>{this.popupProduct=i.data.data}).finally(i=>{$(document).trigger("initJQuery")})},getFilterList(){this.axios.get("/api/products/filters").then(t=>{console.log(this.selectedSortOption),this.filterList=t.data,$("#price-range").length&&($("#price-range").slider({range:!0,min:this.filterList.price.min,max:this.filterList.price.max,values:[this.filterList.price.min,this.filterList.price.max],slide:function(i,h){$("#priceRange").val("$"+h.values[0]+" - $"+h.values[1])}}),$("#priceRange").val("$"+$("#price-range").slider("values",0)+" - $"+$("#price-range").slider("values",1)))}).finally(t=>{$(document).trigger("initJQuery")})},sortProducts(){switch(this.selectedSortOption){case"best_selling":this.products.sort((t,i)=>i.count-t.count);break;case"alpha_asc":this.products.sort((t,i)=>t.title.localeCompare(i.title));break;case"alpha_desc":this.products.sort((t,i)=>i.title.localeCompare(t.title));break;case"price_low_high":this.products.sort((t,i)=>t.price-i.price);break;case"price_high_low":this.products.sort((t,i)=>i.price-t.price);break}}},watch:{selectedSortOption(t){console.log("Сортировка изменена на:",t),this.sortProducts()}}}),G={class:"overflow-hidden"},Z=g('<div class="breadcrumb-area" style="background-image:url(/assets/images/inner-pages/breadcum-bg.png);"><div class="container"><div class="row"><div class="col-xl-12"><div class="breadcrumb-content pb-60 text-center wow fadeInUp animated"><h2>Shop Grid</h2><div class="breadcrumb-menu"><ul><li><a href="index.html"><i class="flaticon-home pe-2"></i>Home</a></li><li><i class="flaticon-next"></i></li><li class="active">Shop Grid</li></ul></div></div></div></div></div></div><section class="product-categories-one pb-60"><div class="container"><div class="row wow fadeInUp animated"><div class="col-xl-12"><div class="product-categories-one__inner"><ul><li><a href="#0" class="img-box"><div class="inner"><img src="'+J+'" alt=""></div></a><div class="title"><a href="#0"><h6>Accessories</h6></a></div></li><li><a href="#0" class="img-box"><div class="inner"><img src="'+D+'" alt=""></div></a><div class="title"><a href="#0"><h6>Furnitures</h6></a></div></li><li><a href="#0" class="img-box"><div class="inner"><img src="'+B+'" alt=""></div></a><div class="title"><a href="#0"><h6>Jewellery</h6></a></div></li><li><a href="#0" class="img-box"><div class="inner"><img src="'+R+'" alt=""></div></a><div class="title"><a href="#0"><h6>Shoes</h6></a></div></li><li><a href="#0" class="img-box"><div class="inner"><img src="'+M+'" alt=""></div></a><div class="title"><a href="#0"><h6>Electronics</h6></a></div></li><li><a href="#0" class="img-box"><div class="inner"><img src="'+E+'" alt=""></div></a><div class="title"><a href="#0"><h6>Fashion</h6></a></div></li></ul></div></div></div></div></section>',2),H={class:"product-grid pt-60 pb-120"},x={class:"container"},K={class:"row gx-4"},W={class:"col-xl-3 col-lg-4"},X={class:"shop-grid-sidebar"},Y=s("button",{class:"remove-sidebar d-lg-none d-block"},[s("i",{class:"flaticon-cross"})],-1),ss={class:"sidebar-holder"},ts=g('<form action="#0" class="footer-default__subscrib-form m-0 p-0 wow fadeInUp animated"><div class="footer-input-box p-0"><input type="email" placeholder="Email address" name="email"><button type="submit" class="subscribe_btn"><i class="flaticon-magnifying-glass"></i></button></div></form>',1),es={class:"single-sidebar-box mt-30 wow fadeInUp animated"},is=s("h4",null,"Select Categories",-1),os={class:"checkbox-item"},ls={class:"form-group"},as=["value","id"],ns=["for"],cs={class:"single-sidebar-box mt-30 wow fadeInUp animated"},rs=s("h4",null,"Color Option ",-1),ds={class:"color-option"},ps=["onClick"],us={class:"single-sidebar-box mt-30 wow fadeInUp animated"},hs=s("h4",null,"Filter By Price",-1),_s={class:"slider-box"},gs=s("div",{id:"price-range",class:"slider"},null,-1),vs=s("div",{class:"output-price"},[s("label",{for:"priceRange"},"Price:"),p(),s("input",{type:"text",id:"priceRange",readonly:""})],-1),ms={class:"single-sidebar-box mt-30 wow fadeInUp animated pb-0 border-bottom-0"},fs=s("h4",null,"Tags ",-1),bs={class:"popular-tag"},ys=["onClick"],ws={class:"col-xl-9 col-lg-8"},ks={class:"row"},Cs={class:"col-xl-12"},$s={class:"shop-grid-page-top-info p-0 justify-content-md-between justify-content-center"},Ps=s("div",{class:"left-box wow fadeInUp animated"},[s("p",null,"Showing 1–12 of 50 Results")],-1),Ss={class:"right-box justify-content-md-between justify-content-center wow fadeInUp animated"},Us=g('<option value="featured">Featured</option><option value="best_selling">Best selling</option><option value="alpha_asc">Alphabetically, A-Z</option><option value="alpha_desc">Alphabetically, Z-A</option><option value="price_low_high">Price, low to high</option><option value="price_high_low">Price, high to low</option><option value="date_old_new">Date, old to new</option>',7),Ns=[Us],qs=s("div",{class:"product-view-style d-flex justify-content-md-between justify-content-center"},[s("ul",{class:"nav nav-pills",id:"pills-tab",role:"tablist"},[s("li",{class:"nav-item",role:"presentation"},[s("button",{class:"nav-link active",id:"pills-grid-tab","data-bs-toggle":"pill","data-bs-target":"#pills-grid",type:"button",role:"tab","aria-selected":"true"},[s("i",{class:"flaticon-grid"})])]),s("li",{class:"nav-item",role:"presentation"},[s("button",{class:"nav-link",id:"pills-list-tab","data-bs-toggle":"pill","data-bs-target":"#pills-list",type:"button",role:"tab","aria-selected":"false"},[s("i",{class:"flaticon-list"})])])]),s("button",{class:"slidebarfilter d-lg-none d-flex"},[s("i",{class:"flaticon-edit"})])],-1),Ls={class:"row"},Vs={class:"col-12"},Is={class:"tab-content",id:"pills-tabContent"},Ts={class:"tab-pane fade show active",id:"pills-grid",role:"tabpanel","aria-labelledby":"pills-grid-tab"},js={class:"row"},As={class:"col-xl-4 col-lg-6 col-6"},Os={class:"products-three-single w-100 mt-30"},Qs={class:"products-three-single-img"},Fs=["src"],Js=s("img",{src:A,alt:"",class:"hover-img"},null,-1),Ds=s("div",{class:"products-grid-one__badge-box"},[s("span",{class:"bg_base badge new"},"New")],-1),Bs=["onClick"],Rs={class:"products-grid__usefull-links"},Ms=s("li",null,[s("a",{href:"wishlist.html"},[s("i",{class:"flaticon-heart"}),p(),s("span",null," wishlist")])],-1),Es=s("li",null,[s("a",{href:"compare.html"},[s("i",{class:"flaticon-left-and-right-arrows"}),s("span",null," compare")])],-1),zs=["onClick","href"],Gs=s("i",{class:"flaticon-visibility"},null,-1),Zs=s("span",null," quick view",-1),Hs=[Gs,Zs],xs=["id"],Ks={key:0,class:"container"},Ws={class:"row justify-content-between align-items-center"},Xs={class:"col-lg-6"},Ys={key:0,class:"quick-view__left-content"},st={class:"tabs"},tt={class:"popup-product-thumb-box"},et={class:"tab-nav popup-product-thumb"},it=["href"],ot=["src"],lt={class:"popup-product-main-image-box"},at=["id"],nt={class:"popup-product-single-image"},ct=["src"],rt=s("button",{class:"prev"},[s("i",{class:"flaticon-back"})],-1),dt=s("button",{class:"next"},[s("i",{class:"flaticon-next"})],-1),pt={class:"col-lg-6"},ut={class:"popup-right-content"},ht=g('<div class="ratting"><i class="flaticon-star"></i> <i class="flaticon-star"></i> <i class="flaticon-star"></i><i class="flaticon-star"></i> <i class="flaticon-star"></i><span>(112)</span></div>',1),_t={class:"text"},gt={class:"price"},vt=s("del",null," $65 USD",-1),mt=s("h6",null," In stuck",-1),ft={class:"color-varient"},bt=["onClick"],yt={class:"add-product"},wt=s("h6",null,"Qty:",-1),kt={class:"button-group"},Ct={class:"qtySelector text-center"},$t=s("i",{class:"flaticon-minus"},null,-1),Pt=[$t],St=s("i",{class:"flaticon-plus"},null,-1),Ut=[St],Nt=g('<div class="payment-method"><a href="#0"><img src="'+U+'" alt=""></a><a href="#0"><img src="'+N+'" alt=""></a> <a href="#0"><img src="'+q+'" alt=""></a><a href="#0"><img src="'+L+'" alt=""></a></div>',1),qt={class:"products-three-single-content text-center"},Lt=s("del",null,"$200.00",-1),Vt={class:"tab-pane fade",id:"pills-list",role:"tabpanel","aria-labelledby":"pills-list-tab"},It={class:"row"},Tt={class:"col-12"},jt={class:"product-grid-two list mt-30"},At={class:"product-grid-two__img"},Ot={href:"shop-details-2.html",class:"d-block"},Qt=["src"],Ft=s("img",{src:j,alt:"",class:"hover-img"},null,-1),Jt=s("div",{class:"products-grid-one__badge-box"},[s("span",{class:"badge discount"},"Best")],-1),Dt=["id"],Bt={key:0,class:"container"},Rt={class:"row justify-content-between align-items-center"},Mt={class:"col-lg-6"},Et={key:0,class:"quick-view__left-content"},zt={class:"tabs"},Gt={class:"popup-product-thumb-box"},Zt={class:"tab-nav popup-product-thumb"},Ht=["href"],xt=["src"],Kt={class:"popup-product-main-image-box"},Wt=["id"],Xt={class:"popup-product-single-image"},Yt=["src"],se=s("button",{class:"prev"},[s("i",{class:"flaticon-back"})],-1),te=s("button",{class:"next"},[s("i",{class:"flaticon-next"})],-1),ee={class:"col-lg-6"},ie={class:"popup-right-content"},oe=g('<div class="ratting"><i class="flaticon-star"></i> <i class="flaticon-star"></i> <i class="flaticon-star"></i><i class="flaticon-star"></i> <i class="flaticon-star"></i><span>(112)</span></div>',1),le={class:"text"},ae={class:"price"},ne=s("del",null," $65 USD",-1),ce=s("h6",null," In stuck",-1),re={class:"color-varient"},de=["onClick"],pe={class:"add-product"},ue=s("h6",null,"Qty:",-1),he={class:"button-group"},_e={class:"qtySelector text-center"},ge=s("i",{class:"flaticon-minus"},null,-1),ve=[ge],me=s("i",{class:"flaticon-plus"},null,-1),fe=[me],be=s("button",{class:"btn--primary"}," Add to Cart ",-1),ye=g('<div class="payment-method"><a href="#0"><img src="'+U+'" alt=""></a><a href="#0"><img src="'+N+'" alt=""></a> <a href="#0"><img src="'+q+'" alt=""></a><a href="#0"><img src="'+L+'" alt=""></a></div>',1),we={class:"product-grid-two-content text-center"},ke=s("span",null,"Modern",-1),Ce={href:"shop-details-2.html"},$e=s("del",null,"$200",-1),Pe={class:"text"},Se={class:"product-grid-two__overlay-box"},Ue=["onClick"],Ne=s("h6",null,[s("a",{href:"cart.html"},"Add To Cart")],-1),qe=[Ne],Le={class:"icon"},Ve=["onClick","href"],Ie=s("i",{class:"flaticon-eye"},null,-1),Te=[Ie],je=s("li",null,[s("a",{href:"wishlist.html"},[s("i",{class:"flaticon-heart"})])],-1),Ae={key:0,class:"row"},Oe={class:"col-12 d-flex justify-content-center wow fadeInUp animated"},Qe={class:"pagination text-center"},Fe={key:0,class:"next"},Je=s("i",{class:"flaticon-left-arrow-1","aria-hidden":"true"},null,-1),De=[Je],Be=["onClick"],Re={key:1},Me={key:1,class:"next"},Ee=s("i",{class:"flaticon-next-1","aria-hidden":"true"},null,-1),ze=[Ee];function Ge(t,i,h,_,b,m){const k=F("router-link");return l(),a("div",null,[s("main",G,[Z,s("div",H,[s("div",x,[s("div",K,[s("div",W,[s("div",X,[Y,s("div",ss,[ts,s("div",es,[is,s("div",os,[s("form",null,[(l(!0),a(c,null,d(t.filterList.categories,e=>(l(),a("div",ls,[f(s("input",{value:e.id,"onUpdate:modelValue":i[0]||(i[0]=o=>t.categories=o),type:"checkbox",id:e.id},null,8,as),[[T,t.categories]]),s("label",{for:e.id},n(e.title),9,ns)]))),256))])])]),s("div",cs,[rs,s("ul",ds,[(l(!0),a(c,null,d(t.filterList.colors,e=>(l(),a("li",null,[s("a",{onClick:r(o=>t.addColor(e.id),["prevent"]),class:y(["color-option-single",{"rounded-circle":t.colors.includes(e.id)}]),style:w(`background: #${e.title}`)},[s("span",null,n(e.title),1)],14,ps)]))),256))])]),s("div",us,[hs,s("div",_s,[gs,vs,s("button",{onClick:i[1]||(i[1]=r((...e)=>t.filterProducts&&t.filterProducts(...e),["prevent"])),class:"filterbtn",type:"submit"}," Filter ")])]),s("div",ms,[fs,s("ul",bs,[(l(!0),a(c,null,d(t.filterList.tags,e=>(l(),a("li",null,[s("a",{onClick:r(o=>t.addTag(e.id),["prevent"]),class:y({active:t.tags.includes(e.id)}),href:"#0"},n(e.title),11,ys)]))),256))])])])])]),s("div",ws,[s("div",ks,[s("div",Cs,[s("div",$s,[Ps,s("div",Ss,[s("div",null,[s("div",null,[f(s("select",{class:"nice-select",style:{width:"200px","margin-top":"10px"},"onUpdate:modelValue":i[2]||(i[2]=e=>t.selectedSortOption=e)},Ns,512),[[I,t.selectedSortOption]])])]),qs])])])]),s("div",Ls,[s("div",Vs,[s("div",Is,[s("div",Ts,[s("div",js,[(l(!0),a(c,null,d(t.products,e=>(l(),a("div",As,[s("div",Os,[s("div",Qs,[P(k,{class:"d-block",to:{name:"products.show",params:{id:e.id}}},{default:S(()=>[s("img",{src:e.image_url,class:"first-img",alt:""},null,8,Fs),p(),Js]),_:2},1032,["to"]),Ds,s("a",{onClick:r(o=>t.addToCart(e.id,!0),["prevent"]),href:"cart.html",class:"addcart btn--primary style2"}," Add To Cart ",8,Bs),s("div",Rs,[s("ul",null,[Ms,Es,s("li",null,[s("a",{onClick:o=>t.getProduct(e.id),href:`#popup${e.id}`,class:"popup_link"},Hs,8,zs)])])])]),s("div",{id:`popup${e.id}`,class:"product-gird__quick-view-popup mfp-hide"},[t.popupProduct?(l(),a("div",Ks,[s("div",Ws,[s("div",Xs,[t.popupProduct.product_images.length>2?(l(),a("div",Ys,[s("div",st,[s("div",tt,[s("ul",null,[(l(!0),a(c,null,d(t.popupProduct.product_images,o=>(l(),a("li",et,[s("a",{href:`#tabb${o.id}`},[s("img",{src:o.filepath,alt:""},null,8,ot)],8,it)]))),256))])]),s("div",lt,[(l(!0),a(c,null,d(t.popupProduct.product_images,o=>(l(),a("div",{id:`tabb${o.id}`,class:"tab-item popup-product-image"},[s("div",nt,[s("img",{src:o.filepath,alt:""},null,8,ct)])],8,at))),256)),rt,dt])])])):u("",!0)]),s("div",pt,[s("div",ut,[s("h3",null,n(t.popupProduct.title),1),ht,s("p",_t,n(t.popupProduct.description),1),s("div",gt,[s("h2",null,[p(" $"+n(t.popupProduct.price)+" USD ",1),vt]),mt]),s("div",ft,[(l(!0),a(c,null,d(t.popupProduct.group_products,o=>(l(),a(c,null,[(l(!0),a(c,null,d(o.colors,v=>(l(),a("a",{onClick:r(V=>t.getProduct(o.id),["prevent"]),href:"#0",style:w(`background: #${v.title}`),class:"color-name"},[s("span",null,n(v.title),1)],12,bt))),256))],64))),256))]),s("div",yt,[wt,s("div",kt,[s("div",Ct,[s("span",{class:"decreaseQty",onClick:i[3]||(i[3]=r((...o)=>t.decreaseCount&&t.decreaseCount(...o),["prevent"]))},Pt),p(),f(s("input",{type:"number",class:"qtyValue1",value:"1","onUpdate:modelValue":i[4]||(i[4]=o=>t.count=o)},null,512),[[C,t.count]]),s("span",{class:"increaseQty",onClick:i[5]||(i[5]=r((...o)=>t.increaseCount&&t.increaseCount(...o),["prevent"]))},Ut)]),s("button",{onClick:i[6]||(i[6]=r(o=>t.addToCart(t.popupProduct.id),["prevent"])),class:"btn--primary"}," Add to Cart ")])]),Nt])])])])):u("",!0)],8,xs),s("div",qt,[s("span",null,n(e.category.title),1),s("h5",null,[P(k,{to:{name:"products.show",params:{id:e.id}}},{default:S(()=>[p(n(e.title),1)]),_:2},1032,["to"])]),s("p",null,[Lt,p(" $"+n(e.price),1)])])])]))),256))])]),s("div",Vt,[s("div",It,[(l(!0),a(c,null,d(t.products,e=>(l(),a("div",Tt,[s("div",jt,[s("div",At,[s("a",Ot,[s("img",{src:e.image_url,class:"first-img",alt:""},null,8,Qt),p(),Ft]),Jt]),s("div",{id:`popup${e.id}`,class:"product-gird__quick-view-popup mfp-hide"},[t.popupProduct?(l(),a("div",Bt,[s("div",Rt,[s("div",Mt,[t.popupProduct.product_images.length>2?(l(),a("div",Et,[s("div",zt,[s("div",Gt,[s("ul",null,[(l(!0),a(c,null,d(t.popupProduct.product_images,o=>(l(),a("li",Zt,[s("a",{href:`#tabb${o.id}`},[s("img",{src:o.filepath,alt:""},null,8,xt)],8,Ht)]))),256))])]),s("div",Kt,[(l(!0),a(c,null,d(t.popupProduct.product_images,o=>(l(),a("div",{id:`tabb${o.id}`,class:"tab-item popup-product-image"},[s("div",Xt,[s("img",{src:o.filepath,alt:""},null,8,Yt)])],8,Wt))),256)),se,te])])])):u("",!0)]),s("div",ee,[s("div",ie,[s("h3",null,n(t.popupProduct.title),1),oe,s("p",le,n(t.popupProduct.description),1),s("div",ae,[s("h2",null,[p(" $"+n(t.popupProduct.price)+" USD ",1),ne]),ce]),s("div",re,[(l(!0),a(c,null,d(t.popupProduct.group_products,o=>(l(),a(c,null,[(l(!0),a(c,null,d(o.colors,v=>(l(),a("a",{onClick:r(V=>t.getProduct(o.id),["prevent"]),href:"#0",style:w(`background: #${v.title}`),class:"color-name"},[s("span",null,n(v.title),1)],12,de))),256))],64))),256))]),s("div",pe,[ue,s("div",he,[s("div",_e,[s("span",{class:"decreaseQty",onClick:i[7]||(i[7]=r((...o)=>t.decreaseCount&&t.decreaseCount(...o),["prevent"]))},ve),p(),f(s("input",{type:"number",class:"qtyValue1",value:"1","onUpdate:modelValue":i[8]||(i[8]=o=>t.count=o)},null,512),[[C,t.count]]),s("span",{class:"increaseQty",onClick:i[9]||(i[9]=r((...o)=>t.increaseCount&&t.increaseCount(...o),["prevent"]))},fe)]),be])]),ye])])])])):u("",!0)],8,Dt),s("div",we,[ke,s("h5",null,[s("a",Ce,n(e.title),1)]),s("p",null,[$e,p(" "+n(e.price),1)]),s("p",Pe,n(e.description),1),s("div",Se,[s("div",{class:"title",onClick:r(o=>t.addToCart(e.id,!0),["prevent"])},qe,8,Ue),s("div",Le,[s("ul",null,[s("li",null,[s("a",{onClick:o=>t.getProduct(e.id),href:`#popup${e.id}`,class:"popup_link"},Te,8,Ve)]),je])])])])])]))),256))])])])])]),t.pagination.last_page>1?(l(),a("div",Ae,[s("div",Oe,[s("ul",Qe,[t.pagination.current_page!==1?(l(),a("li",Fe,[s("a",{onClick:i[10]||(i[10]=r(e=>t.getProducts(t.pagination.current_page-1),["prevent"])),href:"#0"},De)])):u("",!0),(l(!0),a(c,null,d(t.pagination.links,e=>(l(),a("li",null,[Number(e.label)&&t.pagination.current_page-e.label<2&&t.pagination.current_page-e.label>-2||Number(e.label)===1||Number(e.label)===t.pagination.last_page?(l(),a("a",{key:0,onClick:r(o=>t.getProducts(e.label),["prevent"]),class:y(e.active?"active":""),href:"#0"},n(e.label),11,Be)):u("",!0),Number(e.label)&&t.pagination.current_page-e.label===2&&t.pagination.current_page!==3||Number(e.label)&&t.pagination.current_page-e.label===-2&&t.pagination.last_page-t.pagination.current_page!==2?(l(),a("a",Re,"...")):u("",!0)]))),256)),t.pagination.current_page!==t.pagination.last_page?(l(),a("li",Me,[s("a",{onClick:i[11]||(i[11]=r(e=>t.getProducts(t.pagination.current_page+1),["prevent"])),href:"#0"},ze)])):u("",!0)])])])):u("",!0)])])])])])])}const We=O(z,[["render",Ge]]);export{We as default};
