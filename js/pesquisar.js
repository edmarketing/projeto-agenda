const btn_pesq = document.querySelector("#btn_pesq");
const f_txtpesq = document.querySelector("#f_txtpesq");

btn_pesq.addEventListener("click",(evt)=>{
    if(f_txtpesq.value==""){
        alert("Digite uma pesquisa!");
        f_txtpesq.focus();
        return
    }
});
