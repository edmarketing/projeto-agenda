const dados = document.querySelector("#dados");

const preencherdgv=()=>{
    dados.innerHTML="";
    
    const endpoint = `http://127.0.0.1:1880/pesquisartodoscontatos`;
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

            const c2=document.createElement("div");
            c2.setAttribute("class","coluna c2");
            c2.innerHTML=res.nome;
            linha.appendChild(c2);

            const c3=document.createElement("div");
            c3.setAttribute("class","coluna c3");
            c3.innerHTML=res.nome;
            linha.appendChild(c3);

            const c4=document.createElement("div");
            c4.setAttribute("class","coluna c4");
            c4.innerHTML=res.nome;
            linha.appendChild(c4);

            const c5=document.createElement("div");
            c5.setAttribute("class","coluna c5");
            c5.innerHTML=res.nome;
            linha.appendChild(c5);

            dados.appendChild(linha);
        });
    })    
};

preencherdgv();
