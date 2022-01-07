<?PHP

    include('conexao.php');

    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With'); 
    header('Content-Type: application/json; charset=utf-8');   
 
    $postjson = json_decode(file_get_contents('php://input'), true);

    
    if($postjson['requisicao'] == 'pegarCanais'){
        $query = mysqli_query($mysqli, "select * from iptv order by nome asc");
            while($row = mysqli_fetch_array($query)){
                $dados[] = array(
                    'id' => $row['id'],
                    'nome' => $row['nome'],
                    'logo' => $row['logo'],
                    'url' => $row['url'],
                    'categoria' => $row['categoria']
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
    else if($postjson['requisicao'] == 'subir1'){

        $query = mysqli_query($mysqli, "INSERT INTO iptv SET nome = '$postjson[nome]',url = '$postjson[url]',logo = '$postjson[logo]',categoria = '$postjson[categoria]'");
        
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
                    'mensagem'=> "Nao deu pra salvar."
                )
            );	
        }
        
        echo $result;
    }
    else if($postjson['requisicao'] == 'pesquisaRapida'){
        $pesquisa = $postjson['pesquisa'].'%';
        $query = mysqli_query($mysqli, "select * from iptv WHERE  nome like  '$pesquisa' order by nome asc");
            while($row = mysqli_fetch_array($query)){
                $dados[] = array(
                    'id' => $row['id'],
                    'nome' => $row['nome'],
                    'logo' => $row['logo'],
                    'url' => $row['url'],
                    'categoria' => $row['categoria']
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