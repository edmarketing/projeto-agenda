const btn_pesq = document.querySelector("#btn_pesq");
const f_txtpesq = document.querySelector("#f_txtpesq");
const dados = document.querySelector("#dados");

btn_pesq.addEventListener("click",(evt)=>{

    const valorPesq = f_txtpesq.value; 
    if(valorPesq==""){
        alert("Digite uma pesquisa!");
        f_txtpesq.focus();
        return
    }
    const f_pesq = document.querySelector("input[name=f_pesq]:checked").value;
    const endpoint = `http://127.0.0.1:1880/pesquisarcontatos/${f_pesq}/${f_txtpesq}`;
    fetch(endpoint)    
    .then(res=>res.json())
    .then(res=>{
        dados.innerHTML="";
        res.forEach((el)=>{
            const linha=document.createElement("div");
            linha.setAttribute("class","linhadados");
            
            const c1=document.createElement("div");
            c1.setAttribute("class","coluna c1");
            c1.innerHTML=res.nome;
            linha.appendChild(c1);

            dados.appendChild(linha);
        });
    })    
});
