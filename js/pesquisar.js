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
    const entpoint = `http://127.0.0.1:1880/pesquisarcontatos/${f_pesq}/${valorPesq}`;
    fetch(entpoint);
    .then(res=>res.json());
    .then(res=>{
        console.log(res)
    })    
});
