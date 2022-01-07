<?PHP

    include('conexao.php');

    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With'); 
    header('Content-Type: application/json; charset=utf-8');   
 
    $postjson = json_decode(file_get_contents('php://input'), true);

    
    if($postjson['requisicao'] == 'pegarFrase'){
        $query = mysqli_query($mysqli, "select * from frases order by id desc");
            while($row = mysqli_fetch_array($query)){
                $dados[] = array(
                    'id' => $row['id'],
                    'frase' => $row['frase']
                );
                break;
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
    else if($postjson['requisicao'] == 'InserirFrase'){

        $query = mysqli_query($mysqli, "INSERT INTO frases SET frase = '$postjson[frase]'");
        
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
                    'mensagem'=> "Não deu pra salvar."
                )
            );	
        }
        
        echo $result;
    }
?>