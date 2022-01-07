<?PHP

    include('conexao.php');

    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With'); 
    header('Content-Type: application/json; charset=utf-8');   
 
    $postjson = json_decode(file_get_contents('php://input'), true);

    
    if($postjson['requisicao'] == 'pesquisarCoisasAmbiente'){
        $query = mysqli_query($mysqli, "select * from meio-ambiente order by id asc");
            while($row = mysqli_fetch_array($query)){
                $dados[] = array(
                    'id' => $row['id'],
                    'titulo' => $row['titulo'],
                    'categoria' => $row['categoria'],
                    'link' => $row['link']
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
?>