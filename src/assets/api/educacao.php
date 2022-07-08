<?PHP

    include('conexao.php');

    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With'); 
    header('Content-Type: application/json; charset=utf-8');   
 
    $postjson = json_decode(file_get_contents('php://input'), true);

    if($postjson['requisicao'] == 'login'){
        $query = mysqli_query($mysqli, "select * from contas where login = '$postjson[login]' and senha = '$postjson[senha]' order by id desc");
            while($row = mysqli_fetch_array($query)){
                $dados[] = array(
                    'id' => $row['id'],
                    'login' => $row['login'],
                    'senha' => $row['senha'],
                    'categoria' => $row['categoria'],
                    'obs' => $row['obs']
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
    elseif($postjson['requisicao'] == 'todasEscolas'){
        $query = mysqli_query($mysqli, "select * from contas");
        while($row = mysqli_fetch_array($query)){
                $dados[] = array(
                    'nome' => $row['login'],
                    'categoria' => $row['categoria']
                );
            }
    
        if($query){
            $result = json_encode(
                array(
                    'situacao'=>true,
                    'mensagem'=>"Query feito com sucesso.",
                    'dados'=>$dados
                )
            );
        }
        else{
            $result = json_encode(
                array(
                    'situacao'=>false,
                    'mensagem'=>"Erro ao fazer o query."
                )
            );
        }
        echo $result;
    
    }
    elseif($postjson['requisicao'] == 'verificacao'){
        $query = mysqli_query($mysqli, "select * from contas where obs = '$postjson[token]'");
        $aux = false;            
        while($row = mysqli_fetch_array($query)){
                $dados[] = array(
                    'id' => $row['id'],
                    'login' => $row['login'],
                    'senha' => $row['senha'],
                    'obs' => $row['obs'],
                    'endereco' => $row['endereco'],
                    'area' => $row['area'],
                    'distrito' => $row['distrito'],
                    'categoria' => $row['categoria']
                );
                $aux = true;
            }

        if($query){
            $result = json_encode(
                array(
                    'situacao'=>true,
                    'mensagem'=>"Query feito com sucesso.",
                    'resultado'=>$aux,
                    'dados'=>$dados
                )
            );
        }
        else{
            $result = json_encode(
                array(
                    'situacao'=>false,
                    'mensagem'=>"Erro ao fazer o query."
                )
            );
        }
        echo $result;
    
    }
    else if($postjson['requisicao'] == 'novoToken'){
        
        $query = mysqli_query($mysqli, "UPDATE contas SET obs = '$postjson[obs]' where id = '$postjson[id]'");
            
        if($query){
            $result = json_encode(
                array(
                    'situacao'=>true,
                    'mensagem'=>"Query feito com sucesso."
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
    
    else if($postjson['requisicao'] == 'alterarSenha'){
        
        $query = mysqli_query($mysqli, "UPDATE contas SET senha = '$postjson[senha]' where id = '$postjson[id]'");

        if($query){
            $result = json_encode(
                array(
                    'situacao'=>true,
                    'mensagem'=>"Query feito com sucesso."
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

    
?>