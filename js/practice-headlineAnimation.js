const txt = document.querySelector(".txt");
const bg = document.querySelector(".background");

const txtAnimation = ()=>{
	txt.classList.add("getAnimation");
}
const boxAnimation = ()=>{
	bg.classList.add("getAnimation");
	setTimeout(txtAnimation,800);
}
setTimeout(boxAnimation,1000);