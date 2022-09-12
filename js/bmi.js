const getBMI=(height,weight,point=2)=>(weight/(height/100)**2).toFixed(point);
// tag,class,id
const elementEl=document.querySelector(".title");
const calcEl=document.querySelector("#calc");
const heightEl=document.querySelector("#height");
const weightEl=document.querySelector("#weight");
console.log(heightEl,weightEl);
console.log(elementEl);
console.log(calcEl);

elementEl.innerHTML="<u>BMI Calculator</u>";
calcEl.innerText="分析";

// 將按鈕增加事件監聽
calcEl.addEventListener("click",()=>{
    let name=document.querySelector("#name").value;
    let height=heightEl.value;
    let weight=weightEl.value;
    let bmi=getBMI(height,weight);
    console.log(bmi);
    alert(`${name} BMI:${bmi}`);

});
