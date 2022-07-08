<?php

    include('conexao.php');

    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With'); 
    header('Content-Type: application/json; charset=utf-8');   
 
    $postJson = json_decode(file_get_contents('php://input'), true);

    if($postJson['requisicao'] == 'pegarAllRelatorios'){
    $query = mysqli_query($mysqli, "SELECT * FROM relatorios where nome = '$postJson[nome]' and mae = '$postJson[mae]' order by id asc");
        while($row = mysqli_fetch_array($query)){
                $dados[] = array(    
                'id' => $row['id'],
                "nome"=>$row['nome'],
                'mae' => $row['mae'],
                "comentario"=>$row['comentario'],
                'dataRelatorio' => $row['dataRelatorio'],
                "nomeProfissional"=>$row['nomeProfissional'],
                'area' => $row['area'],
                "categoria"=>$row['categoria']
            );
        }

    if($query){
        $result = json_encode(
            array(
                'situacao'=>true,
                'mensagem'=>"Query feito com sucesso.",
                'resultado'=>$dados
            )
        );
    }
    else{
        $result = json_encode(
            array(
                'situacao'=>false,
                'mensagem'=>"Dados invalidos."
            )
        );
    }
    echo $result;

}

else if($postJson['requisicao'] == 'salvarRelatorio'){


    $query = mysqli_query($mysqli, "INSERT INTO relatorios SET nome = '$postJson[nome]', mae = '$postJson[mae]', 
    comentario = '$postJson[comentario]', nomeProfissional = '$postJson[nomeProfissional]', area = '$postJson[area]',
    categoria = '$postJson[categoria]', dataRelatorio = '$postJson[dataRelatorio]'");


    if($query){

        $result = json_encode(
            array(
                'situacao' => true,
                'mensagem'=> "Relatorio criado com sucesso."
            )
        );
    }
    else {
        $result = json_encode(
            array(
                'situacao' => false,
                'mensagem'=> "Nao foi possivel criar o relatorio."
            )
        );	
    }

    echo $result;
}

?>