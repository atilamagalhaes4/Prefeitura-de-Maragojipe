<?PHP

    include('conexao.php');

    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With'); 
    header('Content-Type: application/json; charset=utf-8');   
 
    $postjson = json_decode(file_get_contents('php://input'), true);

    
    if($postjson['requisicao'] == 'pesquisarTodospesquisarAuxiliar'){
        $query = mysqli_query($mysqli, "select * from auxiliar order by id asc");
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
                    'observacoes' =>$row['observacoes'],
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
    else if($postjson['requisicao'] == 'matricularAuxiliares'){

        $query = mysqli_query($mysqli, "INSERT INTO auxiliar SET numeroCasa = '$postjson[numeroCasa]', 
        endereco = '$postjson[endereco]', cidade = '$postjson[cidade]', admissao = '$postjson[admissao]',
        diretorResponsavel = '$postjson[diretorResponsavel]',cargaHoraria = '$postjson[cargaHoraria]',
        situacao = '$postjson[situacao]',nomeEscola = '$postjson[nomeEscola]',escolaridade = '$postjson[escolaridade]',
        nome = '$postjson[nome]',enderecoEscola = '$postjson[enderecoEscola]',zonaEscolar = '$postjson[zonaEscolar]',
        distritoEscolar = '$postjson[distritoEscolar]', observacoes = '$postjson[observacoes]',
        dataNascimento = '$postjson[dataNascimento]',turno = '$postjson[turno]'");

    $aux = "SELECT LAST_INSERT_ID();";
    $aux1 = mysqli_query($mysqli, $aux);
    $aux2 = mysqli_fetch_array($aux1);

        if($query){
    
            $result = json_encode(
                array(
                    'situacao' => true,
                    'mensagem'=> "Auxiliar criado com sucesso.",
                    "id" => $aux2
                )
            );
        }
        else {
            $result = json_encode(
                array(
                    'situacao' => false,
                    'mensagem'=> "Nao foi possivel adcionar o auxiliar."
                )
            );	
        }
    
        echo $result;
    }
    
    else  if($postjson['requisicao'] == 'deletarProfessor'){
    
    
        $query = mysqli_query($mysqli, "DELETE FROM auxiliar  WHERE '$postjson[id]' = id");
    
    
        if($query){
    
            $result = json_encode(
                array(
                    'situacao' => true,
                    'mensagem'=> "Auxiliar apagado com sucesso."
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
    
    else if($postjson['requisicao'] == 'editar1Perfil'){
        $query = mysqli_query($mysqli, "select * from auxiliar WHERE '$postjson[id]' = id");
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
                    'observacoes' =>$row['observacoes'],
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
    
    else if($postjson['requisicao'] == 'editarAuxiliar'){

        $query = mysqli_query($mysqli, "UPDATE  auxiliar SET numeroCasa = '$postjson[numeroCasa]', 
        endereco = '$postjson[endereco]', cidade = '$postjson[cidade]', admissao = '$postjson[admissao]',
        diretorResponsavel = '$postjson[diretorResponsavel]',cargaHoraria = '$postjson[cargaHoraria]',
        situacao = '$postjson[situacao]',nomeEscola = '$postjson[nomeEscola]',escolaridade = '$postjson[escolaridade]',
        nome = '$postjson[nome]',enderecoEscola = '$postjson[enderecoEscola]',zonaEscolar = '$postjson[zonaEscolar]',
        observacoes = '$postjson[observacoes]', distritoEscolar = '$postjson[distritoEscolar]',dataNascimento = '$postjson[dataNascimento]',turno = '$postjson[turno]'  WHERE '$postjson[id]' = id");

        if($query){
    
            $result = json_encode(
                array(
                    'situacao' => true,
                    'mensagem'=> "Auxiliar editado com sucesso."
                )
            );
        }
        else {
            $result = json_encode(
                array(
                    'situacao' => false,
                    'mensagem'=> "Nao foi possivel editar o auxiliar."
                )
            );	
        }
    
        echo $result;
    }
    else if($postjson['requisicao'] == 'pesquisarAuxiliar'){
        $query = mysqli_query($mysqli, "select * from auxiliar  WHERE '$postjson[escola]' = nomeEscola order by id asc");
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
                    'observacoes' =>$row['observacoes'],
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
        else if($postjson['requisicao'] == 'pesquisarAuxiliarNome'){
        $pesquisa = $postjson['pesquisa'].'%';
        $query = mysqli_query($mysqli, "select * from auxiliar  WHERE nome like '$pesquisa' order by id asc");
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
                    'observacoes' =>$row['observacoes'],
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