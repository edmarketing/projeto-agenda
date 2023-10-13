<?php

    $servidor="localhost";
    $user="root";
    $senha="#Resty220398";
    $db="agenda1_js";
    $con=new mysqli($servidor,$user,$senha,$db);

    $dados=array();

    $query="SELECT * FROM contato";
    $res=mysqli_query($con,$query);
    if(mysqli_num_rows($res) > 0){
        while($reg=mysqli_fetch_array($res)){
            $dados[]=array(
                "n_contato_contato"=>$reg["n_contato_contato"],
                "s_nome_contato"=>$reg["s_nome_contato"],
                "s_telefone_contato"=>$reg["s_telefone_contato"],
                "s_email_contato"=>$reg["s_email_contato"],
                "dt_nasc_contato"=>$reg["dt_nasc_contato"]
            );
        }
    }else{
        echo "Nenhum registro";
    }

    echo json_encode($dados);
?>