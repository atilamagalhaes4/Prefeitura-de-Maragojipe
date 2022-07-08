<?PHP

    include('conexao.php');

    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With'); 
    header('Content-Type: application/json; charset=utf-8');   
 
    $postJson = json_decode(file_get_contents('php://input'), true);

    if($postJson['requisicao'] == 'validarLogin'){
        $query = mysqli_query($mysqli, "SELECT * FROM contas WHERE login = '$postJson[login]' and senha = '$postJson[senha]'");
        
            while($row = mysqli_fetch_array($query)){
                    $dados[] = array(
                    'id' => $row['id'],
                    'login' => $row['login'],
                    'senha' => $row['senha'],
                    'area' => $row['area']
                );
            }
    
        if($query && $dados != NULL){
            $result = json_encode(
                array(
                    'status'=>"200",
                    'mensagem'=>"Conta encontrada com sucesso.",
                    'resultado'=>$dados
                )
            );
        }
        else if($query){
            $result = json_encode(
                array(
                    'status'=>"404",
                    'mensagem'=>"Procura feito com sucesso mas não achou login nenhum.",
                    'resultado'=>$dados
                )
            );
        }
        else{
            $result = json_encode(
                array(
                    'status'=>"503",
                    'mensagem'=>"Internal server error."
                )
            );
        }
        echo $result;
    
    }
    else if($postJson['requisicao'] == 'alterarSenha'){

    $query = mysqli_query($mysqli, "UPDATE contas SET senha = '$postJson[senha]' WHERE '$postJson[id]' = id");
    
    
    if($query){
    
        $result = json_encode(
            array(
                'situacao' => 200,
                'mensagem'=> "Senha alterada com sucesso."
            )
        );
    }
    else {
        $result = json_encode(
            array(
                'situacao' => 503,
                'mensagem'=> "Não foi possivel alterar a senha."
            )
        );	
    }
    
    echo $result;
    }
?>