<?PHP

    include('conexao.php');

    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With'); 
    header('Content-Type: application/json; charset=utf-8');   
 
    
    $postjson = json_decode(file_get_contents('php://input'), true);

    if($postjson['requisicao'] == 'todasAsNoticias'){
        $query = mysqli_query($mysqli, "SELECT * FROM noticias ORDER BY id DESC");
            while($row = mysqli_fetch_array($query)){
                $dados[] = array(
                    'id' => $row['id'],
                    'titulo' => $row['titulo'],
                    'nome' => $row['nome'],
                    'dataPublicacao' => $row['dataPublicacao'],
                    'mensagem' => $row['mensagem'],
                    'mensagem2' => $row['mensagem2'],
                    'assunto' => $row['assunto'],
                    'imagem' => $row['imagem'],
                    'pdf' => $row['pdf'],
                    'link1' => $row['link1'],
                    'link2' => $row['link2'],
                    'link3' => $row['link3'],
                    );
            }
    
        if($query && $dados != null){
            $result = json_encode(
                array(
                    'status'=> 200,
                    'mensagem'=>"Query feito com sucesso.",
                    'data'=>$dados
                )
            );
        }
        else if($query && $dados == null){
            $result = json_encode(
                array(
                    'status'=> 404,
                    'mensagem'=>"Nenhum dado encontrado.",
                    'resultado'=>$dados
                )
            );
        }
        else{
            $result = json_encode(
                array(
                    'status'=>503,
                    'mensagem'=>"Erro interno."
                )
            );
        }
        echo $result;
    
    }
	
    else if($postjson['requisicao'] == 'pegarSelecionado'){
        $query = mysqli_query($mysqli, "SELECT * FROM noticias WHERE id = '$postjson[id]' ORDER BY id DESC");
            while($row = mysqli_fetch_array($query)){
                $dados[] = array(
                    'id' => $row['id'],
                    'titulo' => $row['titulo'],
                    'nome' => $row['nome'],
                    'dataPublicacao' => $row['dataPublicacao'],
                    'mensagem' => $row['mensagem'],
                    'mensagem2' => $row['mensagem2'],
                    'assunto' => $row['assunto'],
                    'imagem' => $row['imagem'],
                    'pdf' => $row['pdf'],
                    'link1' => $row['link1'],
                    'link2' => $row['link2'],
                    'link3' => $row['link3'],
                    );
            }
    
        if($query && $dados != null){
            $result = json_encode(
                array(
                    'status'=> 200,
                    'mensagem'=>"Query feito com sucesso.",
                    'data'=>$dados
                )
            );
        }
        else if($query && $dados == null){
            $result = json_encode(
                array(
                    'status'=> 404,
                    'mensagem'=>"Nenhum dado encontrado."
                )
            );
        }
        else{
            $result = json_encode(
                array(
                    'status'=>503,
                    'mensagem'=>"Erro interno."
                )
            );
        }
        echo $result;
    
    }
?>