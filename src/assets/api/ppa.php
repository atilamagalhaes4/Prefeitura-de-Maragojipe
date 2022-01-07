<?PHP

    include('conexao.php');

    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With'); 
    header('Content-Type: application/json; charset=utf-8');   
 
    $postjson = json_decode(file_get_contents('php://input'), true);

    
if($postjson['requisicao'] == 'pegarDadosPPA'){
        $query = mysqli_query($mysqli, "select * from ppa order by id desc");
            while($row = mysqli_fetch_array($query)){
                $dados[] = array(
                    'id' => $row['id'],
                    'escolha1' => $row['escolha1'],
                    'escolha2' => $row['escolha2'],
                    'escolha3' => $row['escolha3'],
                    'nome' => $row['nome'],
                    'cpf' => $row['cpf'],
                    'distrito' => $row['distrito'],
                    'email' => $row['email'],
                    'lido' => $row['lido'],
                    'comentario' => $row['comentario']
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
    else if($postjson['requisicao'] == 'adcionarComentario'){

        $query = mysqli_query($mysqli, "INSERT INTO ppa SET nome = '$postjson[nome]', distrito = '$postjson[distrito]', cpf = '$postjson[cpf]', email = '$postjson[email]', comentario = '$postjson[comentario]', escolha1 = '$postjson[escolha1]', escolha2 = '$postjson[escolha2]', escolha3= '$postjson[escolha3]', lido = 'false'");
        
        if($query){
        
            $result = json_encode(
                array(
                    'situacao' => true,
                    'mensagem'=> "Salvo com sucesso."
                )
            );
        }
        else {
            $result = json_encode(
                array(
                    'situacao' => false,
                    'mensagem'=> "Não conseguimos salvar, recarregue a pagina e tente novamente!."
                )
            );	
        }
        
        echo $result;
    }
    
    else if($postjson['requisicao'] == 'validarCpf'){
        $query = mysqli_query($mysqli, "select * from ppa where cpf = '$postjson[cpf]' ");
            while($row = mysqli_fetch_array($query)){
                $dados[] = array(
                    'id' => $row['id'],
                    'nome' => $row['nome']
                );
                break;
            }
        if($query && $dados == null){
            $result = json_encode(
                array(
                    'situacao'=>true,
                    'mensagem'=>"Nao consta no sistema",
                    'resultado'=>$dados
                )
            );
        }
        else if($query && $dados != null){
            $result = json_encode(
                array(
                    'situacao'=>false,
                    'mensagem'=>"O usuario já nos deu sua opnião. Obrigado!",
                    'resultado'=>$dados
                )
            );
        }
        else{
            $result = json_encode(
                array(
                    'situacao'=>false,
                    'mensagem'=>"Não foi possivel verificar o sistema."
                )
            );
        }
        echo $result;
    
    }
    
    else if($postjson['requisicao'] == 'pegarUmaMensagem'){
        $query = mysqli_query($mysqli, "select * from ppa where id = '$postjson[id]' ");
            while($row = mysqli_fetch_array($query)){
                $dados[] = array(
                    'id' => $row['id'],
                    'escolha1' => $row['escolha1'],
                    'escolha2' => $row['escolha2'],
                    'escolha3' => $row['escolha3'],
                    'nome' => $row['nome'],
                    'cpf' => $row['cpf'],
                    'distrito' => $row['distrito'],
                    'email' => $row['email'],
                    'lido' => $row['lido'],
                    'comentario' => $row['comentario']
                );
                break;
            }
        if($query && $dados == null){
            $result = json_encode(
                array(
                    'situacao'=>true,
                    'mensagem'=>"Nao consta no sistema",
                    'resultado'=>$dados
                )
            );
        }
        else if($query && $dados != null){
            $result = json_encode(
                array(
                    'situacao'=>false,
                    'mensagem'=>"O usuario já nos deu sua opnião. Obrigado!",
                    'resultado'=>$dados
                )
            );
        }
        else{
            $result = json_encode(
                array(
                    'situacao'=>false,
                    'mensagem'=>"Não foi possivel verificar o sistema."
                )
            );
        }
        echo $result;
    
    }
    
    else if($postjson['requisicao'] == 'situacaoLeitura'){
        $query = mysqli_query($mysqli, "UPDATE  ppa SET lido = '$postjson[dado]' WHERE '$postjson[id]' = id");
    
    
        if($query){
            $result = json_encode(
                array(
                    'situacao' => true,
                    'mensagem'=> "Dados alterados com sucesso."
                )
            );
        }
        else {
            $result = json_encode(
                array(
                    'situacao' => false,
                    'mensagem'=> "Nao foi possivel alterar os dados."
                )
            );	
        }
    
        echo $result;
    }
?>