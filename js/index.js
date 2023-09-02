let menu = document.querySelector(".menubar");
let navlist = document.querySelector(".navlist");
let list = document.querySelectorAll(".navlist li");
menu.addEventListener("click",()=>{
   menu.classList.toggle("fa-xmark"); 
    navlist.classList.toggle("close");
    
    
    
});
navlist.addEventListener("click",(e)=>{
    let active = document.querySelector(".active");
    if(active){
        active.classList.remove("active");
    }
    e.target.classList.add("active");
    
});
// navlist.addEventListener("click",(e)=>{
//     // list.forEach((item) => {
//     // //   item.classList.remove("active");
//     // });
//     e.target.classList.add("active");
//   });

window.document.addEventListener("click",(e)=>{
    if(e.target.id !== "navlist" && e.target.id !== "menubar"){
        menu.classList.remove("fa-xmark"); 
         navlist.classList.remove("close");
        
    }
})