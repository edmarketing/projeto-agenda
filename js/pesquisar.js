const btn_pesq = document.querySelector("#btn_pesq");
const f_txtpesq = document.querySelector("#f_txtpesq");

btn_pesq.addEventListener("click",(evt)=>{
    const valorPesq = f_txtpesq.value; 
    if(valorPesq==""){
        alert("Digite uma pesquisa!");
        f_txtpesq.focus();
        return
    }
    const f_pesq = document.querySelector("input[name=f_pesq]:checked").value;
    if (f_pesq=="id") {
        
    } else if (f_pesq=="nome") {
        
    } else if (f_pesq=="nasc") {
        
    } else if (f_pesq=="email") {
        
}
});
