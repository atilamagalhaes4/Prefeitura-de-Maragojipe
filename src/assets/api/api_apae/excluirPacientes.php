<?PHP

    include('conexao.php');

    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With'); 
    header('Content-Type: application/json; charset=utf-8');   
 
    $postJson = json_decode(file_get_contents('php://input'), true);

    if($postJson['requisicao'] == 'deletarPaciente'){
    
    
        $query1 = mysqli_query($mysqli, "DELETE FROM pacientes  WHERE '$postJson[id]' = id");
        $query2 = mysqli_query($mysqli, "DELETE FROM pacientes2  WHERE '$postJson[id]' = id");
    
    
        if($query1 == true && $query2 == true){
    
            $result = json_encode(
                array(
                    'situacao' => 200,
                    'mensagem'=> "Apagamos os 2 query de uma vez."
                )
            );
    
        }
        else if($query1 == true && $query2 == false){
            $query3 = mysqli_query($mysqli, "DELETE FROM pacientes2  WHERE '$postJson[id]' = id");
            if($query3 == true){
                $result = json_encode(
                    array(
                        'situacao' => 200,
                        'mensagem'=> "Mas a segunda tabela sио apagou depois de um segundo query.",
                        'id'=> $postJson['id']
                    )
                );
            }
        }
        else if($query1 == false && $query2 == true){
            $query4 = mysqli_query($mysqli, "DELETE FROM pacientes  WHERE '$postJson[id]' = id");
            if($query4 == true){
                $result = json_encode(
                    array(
                        'situacao' => 200,
                        'mensagem'=> "Mas a primeira tabela sио apagou depois de um segundo query.",
                        'id'=> $postJson['id']
                    )
                );
            }
        }
        else {
            $result = json_encode(
                array(
                    'situacao' => 503,
                    'mensagem'=> "Nao foi possivel apagar nenhum dos dois."
                )
            );
        }
    
        echo $result;
    }
?>