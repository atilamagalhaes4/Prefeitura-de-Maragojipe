<?PHP

    include('conexao.php');

    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With'); 
    header('Content-Type: application/json; charset=utf-8');   
 
    $postjson = json_decode(file_get_contents('php://input'), true);

    
    
    if($postjson['requisicao'] == 'pesquisarTodos'){
        $query = mysqli_query($mysqli, "select * from porteiro order by id asc");
            while($row = mysqli_fetch_array($query)){
                $dados[] = array(
                    'id' => $row['id'],
                    'numeroCasa' => $row['numeroCasa'],
                    'endereco' => $row['endereco'],
                    'cidade' => $row['cidade'],
                    'admissao' => $row['admissao'],
                    'diretorResponsavel' => $row['diretorResponsavel'],
                    'cargaHoraria' => $row['cargaHoraria'],
                    'situacao' => $row['situacao'],
                    'nomeEscola' => $row['nomeEscola'],
                    'escolaridade' => $row['escolaridade'],
                    'nome' => $row['nome'],
                    'enderecoEscola' => $row['enderecoEscola'],
                    'zonaEscolar' => $row['zonaEscolar'],
                    'distritoEscolar' => $row['distritoEscolar'],
                    'dataNascimento' =>$row['dataNascimento'],
                    'turno' =>$row['turno'],
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
    
    else  if($postjson['requisicao'] == 'deletarPorteiro'){
    
    
        $query = mysqli_query($mysqli, "DELETE FROM porteiro WHERE '$postjson[id]' = id");
    
    
        if($query){
    
            $result = json_encode(
                array(
                    'situacao' => true,
                    'mensagem'=> "Porteiro apagado com sucesso."
                )
            );
    
        }
        else {
            $result = json_encode(
                array(
                    'situacao' => false,
                    'mensagem'=> "Nao foi possivel apagar o dado, tente novamente."
                )
            );
        }
    
        echo $result;
    }
    
    else if($postjson['requisicao'] == 'matricularPorteiros'){

        $query = mysqli_query($mysqli, "INSERT INTO porteiro SET numeroCasa = '$postjson[numeroCasa]', 
        endereco = '$postjson[endereco]', cidade = '$postjson[cidade]', admissao = '$postjson[admissao]',
        diretorResponsavel = '$postjson[diretorResponsavel]',cargaHoraria = '$postjson[cargaHoraria]',
        situacao = '$postjson[situacao]',nomeEscola = '$postjson[nomeEscola]',escolaridade = '$postjson[escolaridade]',
        nome = '$postjson[nome]',enderecoEscola = '$postjson[enderecoEscola]',zonaEscolar = '$postjson[zonaEscolar]',
        distritoEscolar = '$postjson[distritoEscolar]',dataNascimento = '$postjson[dataNascimento]',turno = '$postjson[turno]'");

    $aux = "SELECT LAST_INSERT_ID();";
    $aux1 = mysqli_query($mysqli, $aux);
    $aux2 = mysqli_fetch_array($aux1);


        if($query){
    
            $result = json_encode(
                array(
                    'situacao' => true,
                    'mensagem'=> "Porteiro cadastrado com sucesso.",
                    "id" => $aux2
                )
            );
        }
        else {
            $result = json_encode(
                array(
                    'situacao' => false,
                    'mensagem'=> "Nao foi possivel adcionar o porteiro."
                )
            );	
        }
    
        echo $result;
    }
    
    else if($postjson['requisicao'] == 'editar1Perfil'){
        $query = mysqli_query($mysqli, "select * from porteiro WHERE '$postjson[id]' = id");
            while($row = mysqli_fetch_array($query)){
                $dados[] = array(
                    'id' => $row['id'],
                    'numeroCasa' => $row['numeroCasa'],
                    'endereco' => $row['endereco'],
                    'cidade' => $row['cidade'],
                    'admissao' => $row['admissao'],
                    'diretorResponsavel' => $row['diretorResponsavel'],
                    'cargaHoraria' => $row['cargaHoraria'],
                    'situacao' => $row['situacao'],
                    'nomeEscola' => $row['nomeEscola'],
                    'escolaridade' => $row['escolaridade'],
                    'nome' => $row['nome'],
                    'enderecoEscola' => $row['enderecoEscola'],
                    'zonaEscolar' => $row['zonaEscolar'],
                    'distritoEscolar' => $row['distritoEscolar'],
                    'dataNascimento' =>$row['dataNascimento'],
                    'turno' =>$row['turno'],
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
    
    else if($postjson['requisicao'] == 'editarPorteiro'){

        $query = mysqli_query($mysqli, "UPDATE  porteiro SET numeroCasa = '$postjson[numeroCasa]', 
        endereco = '$postjson[endereco]', cidade = '$postjson[cidade]', admissao = '$postjson[admissao]',
        diretorResponsavel = '$postjson[diretorResponsavel]',cargaHoraria = '$postjson[cargaHoraria]',
        situacao = '$postjson[situacao]',nomeEscola = '$postjson[nomeEscola]',escolaridade = '$postjson[escolaridade]',
        nome = '$postjson[nome]',enderecoEscola = '$postjson[enderecoEscola]',zonaEscolar = '$postjson[zonaEscolar]',
        distritoEscolar = '$postjson[distritoEscolar]',dataNascimento = '$postjson[dataNascimento]',turno = '$postjson[turno]'  WHERE '$postjson[id]' = id");

        if($query){
    
            $result = json_encode(
                array(
                    'situacao' => true,
                    'mensagem'=> "porteiro editado com sucesso."
                )
            );
        }
        else {
            $result = json_encode(
                array(
                    'situacao' => false,
                    'mensagem'=> "Nao foi possivel editar o perfil do porteiro."
                )
            );	
        }
    
        echo $result;
    }
    else if($postjson['requisicao'] == 'pesquisarPorteiro'){
        $query = mysqli_query($mysqli, "select * from porteiro  WHERE '$postjson[escola]' = nomeEscola order by id asc");
            while($row = mysqli_fetch_array($query)){
                $dados[] = array(
                    'id' => $row['id'],
                    'numeroCasa' => $row['numeroCasa'],
                    'endereco' => $row['endereco'],
                    'cidade' => $row['cidade'],
                    'admissao' => $row['admissao'],
                    'diretorResponsavel' => $row['diretorResponsavel'],
                    'cargaHoraria' => $row['cargaHoraria'],
                    'situacao' => $row['situacao'],
                    'nomeEscola' => $row['nomeEscola'],
                    'escolaridade' => $row['escolaridade'],
                    'nome' => $row['nome'],
                    'enderecoEscola' => $row['enderecoEscola'],
                    'zonaEscolar' => $row['zonaEscolar'],
                    'distritoEscolar' => $row['distritoEscolar'],
                    'dataNascimento' =>$row['dataNascimento'],
                    'turno' =>$row['turno'],
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
    else if($postjson['requisicao'] == 'pesquisarPorteiroNome'){
        $pesquisa = $postjson['pesquisa'].'%';
        $query = mysqli_query($mysqli, "select * from porteiro  WHERE nome like '$pesquisa' order by id asc");
            while($row = mysqli_fetch_array($query)){
                $dados[] = array(
                    'id' => $row['id'],
                    'numeroCasa' => $row['numeroCasa'],
                    'endereco' => $row['endereco'],
                    'cidade' => $row['cidade'],
                    'admissao' => $row['admissao'],
                    'diretorResponsavel' => $row['diretorResponsavel'],
                    'cargaHoraria' => $row['cargaHoraria'],
                    'situacao' => $row['situacao'],
                    'nomeEscola' => $row['nomeEscola'],
                    'escolaridade' => $row['escolaridade'],
                    'nome' => $row['nome'],
                    'enderecoEscola' => $row['enderecoEscola'],
                    'zonaEscolar' => $row['zonaEscolar'],
                    'distritoEscolar' => $row['distritoEscolar'],
                    'dataNascimento' =>$row['dataNascimento'],
                    'turno' =>$row['turno'],
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