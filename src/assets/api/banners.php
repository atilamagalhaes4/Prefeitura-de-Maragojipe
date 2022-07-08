<?PHP

    include('conexao.php');

    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With'); 
    header('Content-Type: application/json; charset=utf-8');   
 
    $postjson = json_decode(file_get_contents('php://input'), true);

if($postjson['requisicao'] == 'pegarNoticias'){

    $query = mysqli_query($mysqli, "select * from banner WHERE '$postjson[tipo]' = tipo order by id desc");

    if($postjson['tipo'] == 'outdoor'){
        $aux = 0;
        while($row = mysqli_fetch_array($query)){
            if($aux<4){
                $dados[] = array(
                    'id' => $row['id'],
                    'titulo' => $row['titulo'],
                    'introducao' => $row['introducao'],
                    'mensagem' => $row['mensagem'],
                    'tipo' => $row['tipo'],
                    'imagem' => $row['imagem'],
                    'link1' => $row['link1'],
                    'link2' => $row['link2'],
                    'link3' => $row['link3'],
                );
                $aux ++;
            }
        }
    }
else if($postjson['tipo'] == 'profissionais'){
    while($row = mysqli_fetch_array($query)){
        $dados[] = array(
            'id' => $row['id'],
            'titulo' => $row['titulo'],
            'introducao' => $row['introducao'],
            'mensagem' => $row['mensagem'],
            'tipo' => $row['tipo'],
            'imagem' => $row['imagem'],
            'link1' => $row['link1'],
            'link2' => $row['link2'],
            'link3' => $row['link3'],
        );
        }
}
    else if($postjson['tipo'] == 'barraLateral'){
        $aux = 0;
        while($row = mysqli_fetch_array($query)){
            if($aux<3){
                $dados[] = array(
                    'id' => $row['id'],
                    'titulo' => $row['titulo'],
                    'introducao' => $row['introducao'],
                    'mensagem' => $row['mensagem'],
                    'tipo' => $row['tipo'],
                    'imagem' => $row['imagem'],
                    'link1' => $row['link1'],
                    'link2' => $row['link2'],
                    'link3' => $row['link3'],
                );
                $aux ++;
            }
        }
    }else if($postjson['tipo'] == 'escola'){
        while($row = mysqli_fetch_array($query)){
            $dados[] = array(
                'id' => $row['id'],
                'titulo' => $row['titulo'],
                'introducao' => $row['introducao'],
                'mensagem' => $row['mensagem'],
                'tipo' => $row['tipo'],
                'imagem' => $row['imagem'],
                'link1' => $row['link1'],
                'link2' => $row['link2'],
                'link3' => $row['link3'],
                
            );
        }
    }else if($postjson['tipo'] == 'geral'){
        while($row = mysqli_fetch_array($query)){
            $dados[] = array(
                'id' => $row['id'],
                'titulo' => $row['titulo'],
                'introducao' => $row['introducao'],
                'mensagem' => $row['mensagem'],
                'tipo' => $row['tipo'],
                'imagem' => $row['imagem'],
                'link1' => $row['link1'],
                'link2' => $row['link2'],
                'link3' => $row['link3'],
            );
        }
    }
    else if($postjson['tipo'] == 'campanha'){
        $aux = 0;
        while($row = mysqli_fetch_array($query)){
            if($aux<4){
                $dados[] = array(
                    'id' => $row['id'],
                    'titulo' => $row['titulo'],
                    'introducao' => $row['introducao'],
                    'mensagem' => $row['mensagem'],
                    'tipo' => $row['tipo'],
                    'imagem' => $row['imagem'],
                    'link1' => $row['link1'],
                    'link2' => $row['link2'],
                    'link3' => $row['link3'],
                );
                $aux ++;
            }
        }
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
    echo $result;
}
else if($postjson['requisicao'] == 'todasNoticias'){

    $query = mysqli_query($mysqli, "select * from banner WHERE '$postjson[tipo]' = tipo order by id desc");

    while($row = mysqli_fetch_array($query)){
            $dados[] = array(
                'id' => $row['id'],
                'titulo' => $row['titulo'],
                'introducao' => $row['introducao'],
                'mensagem' => $row['mensagem'],
                'tipo' => $row['tipo'],
                'imagem' => $row['imagem'],
                'link1' => $row['link1'],
                'link2' => $row['link2'],
                'link3' => $row['link3'],
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
    echo $result;
}
else if($postjson['requisicao'] == 'deletarBanner'){
    
    $query = mysqli_query($mysqli, "DELETE FROM banner  WHERE '$postjson[id]' = id");


    if($query){

        $result = json_encode(
            array(
                'situacao' => true,
                'mensagem'=> "Conta apagada com sucesso."
            )
        );

    }
    else {
        $result = json_encode(
            array(
                'situacao' => false,
                'mensagem'=> "Nao foi possivel apagar a conta, tente novamente."
            )
        );
    }

    echo $result;
}
else if($postjson['requisicao'] == 'editarBanner'){

    $query = mysqli_query($mysqli, "UPDATE  banner SET titulo = '$postjson[titulo]', 
    introducao = '$postjson[introducao]', mensagem = '$postjson[mensagem]', 
    tipo = '$postjson[tipo]', imagem = '$postjson[imagem]', link1 = '$postjson[link1]', link2 = '$postjson[link2]', link3 = '$postjson[link3]'  WHERE '$postjson[id]' = id");
    
    if($query){
    
        $result = json_encode(
            array(
                'situacao' => true,
                'mensagem'=> "professor criado com sucesso."
            )
        );
    }
    else {
        $result = json_encode(
            array(
                'situacao' => false,
                'mensagem'=> "Nao foi possivel criar a matricula."
            )
        );	
    }
    
    echo $result;
}
else if($postjson['requisicao'] == 'adcionarBanner'){

    $query = mysqli_query($mysqli, "INSERT INTO banner SET titulo = '$postjson[titulo]', 
    introducao = '$postjson[introducao]', mensagem = '$postjson[mensagem]', 
    tipo = '$postjson[tipo]', imagem = '$postjson[imagem]', link1 = '$postjson[link1]', link2 = '$postjson[link2]', link3 = '$postjson[link3]'");
    
    if($query){
    
        $result = json_encode(
            array(
                'situacao' => true,
                'mensagem'=> "professor criado com sucesso."
            )
        );
    }
    else {
        $result = json_encode(
            array(
                'situacao' => false,
                'mensagem'=> "Nao foi possivel criar a matricula."
            )
        );	
    }
    
    echo $result;
}

if($postjson['requisicao'] == 'pegarUmaNoticia'){

    $query = mysqli_query($mysqli, "select * from banner WHERE '$postjson[id]' = id order by id desc");
    
    while($row = mysqli_fetch_array($query)){
        $dados[] = array(
            'id' => $row['id'],
            'titulo' => $row['titulo'],
            'introducao' => $row['introducao'],
            'mensagem' => $row['mensagem'],
            'tipo' => $row['tipo'],
            'imagem' => $row['imagem'],
            'link1' => $row['link1'],
            'link2' => $row['link2'],
            'link3' => $row['link3'],
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
    else {
        $result = json_encode(
            array(
                'situacao' => false,
                'mensagem'=> "Nao foi possivel criar a matricula."
            )
        );	
    }
    echo $result;
}
    
?>