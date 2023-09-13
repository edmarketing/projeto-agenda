const cabecalho=document.querySelector("#cabecalho");
const menu=document.querySelector("#menu");
const btn_home=document.querySelector("#btn_home");
const btn_novo=document.querySelector("#btn_novo");
const btn_pesquisar=document.querySelector("#btn_pesquisar");
const btn_gestao=document.querySelector("#btn_gestao");
const btn_sobre=document.querySelector("#btn_sobre");
const principal=document.querySelector("#principal");
const if_principal=document.querySelector("#if_principal");

btn_home.addEventListener("click",(evt)=>{
    AbrirPagina(evt.target,"home.html");    
});
btn_novo.addEventListener("click",(evt)=>{
    AbrirPagina(evt.target,"novo.html");   
});
btn_pesquisar.addEventListener("click",(evt)=>{
    AbrirPagina(evt.target,"pesquisar.html");
});
btn_gestao.addEventListener("click",(evt)=>{
    AbrirPagina(evt.target,"gestao.html");
});
btn_sobre.addEventListener("click",(evt)=>{
    AbrirPagina(evt.target,"sobre.html");
});

const AbrirPagina=(el,url)=>{
    const abas = [...document.querySelectorAll(".aba")]
    abas.forEach(e=>{
        e.classList.remove("abaSelecionada");
    });
    el.classList.add("abaSelecionada");
    window.open(url,"if_principal");
}