<?PHP

    include('conexao.php');

    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With'); 
    header('Content-Type: application/json; charset=utf-8');   
 
    $postjson = json_decode(file_get_contents('php://input'), true);

    if($postjson['requisicao'] == 'matricularProfessores'){

        $query = mysqli_query($mysqli, "INSERT INTO professores SET 
        escolaEnsino = '$postjson[escolaEnsino]',
        diretorDele = '$postjson[diretorDele]',
        enderecoEscolaAtua = '$postjson[enderecoEscolaAtua]',
        zonaEscolaAtua = '$postjson[zonaEscolaAtua]',
        enderecoEscolaHoraExtra = '$postjson[enderecoEscolaHoraExtra]',
        zonaEscolaExtra = '$postjson[zonaEscolaExtra]',
        distritoEscolaExtra = '$postjson[distritoEscolaExtra]',
        materia2 = '$postjson[materia2]',
        diretorSegundaEscola = '$postjson[diretorSegundaEscola]',
        turnoEscolaExtra = '$postjson[turnoEscolaExtra]',
        cargaHorariaAdcional = '$postjson[cargaHorariaAdcional]',
        QualEscolaHoraExtra = '$postjson[QualEscolaHoraExtra]',
        cargaHoraria = '$postjson[cargaHoraria]',
        turnoEscolaNormal = '$postjson[turnoEscolaNormal]',
        materia1 = '$postjson[materia1]',
        condicao = '$postjson[condicao]',
        observacoes = '$postjson[observacoes]',
        formacao = '$postjson[formacao]',
        dataNascimento = '$postjson[dataNascimento]',
        nome = '$postjson[nome]',
        distritoEscolaAtua = '$postjson[distritoEscolaAtua]' ");

    $aux = "SELECT LAST_INSERT_ID();";
    $aux1 = mysqli_query($mysqli, $aux);
    $aux2 = mysqli_fetch_array($aux1);

        if($query){
    
            $result = json_encode(
                array(
                    'situacao' => true,
                    'mensagem'=> "professor criado com sucesso.",
                    "id" => $aux2
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
    else if($postjson['requisicao'] == 'pesquisarTodos'){
        $query = mysqli_query($mysqli, "select * from professores order by id asc");
            while($row = mysqli_fetch_array($query)){
                $dados[] = array(
                    'id' => $row['id'],
                    'escolaEnsino' => $row['escolaEnsino'],
                    'diretorDele' => $row['diretorDele'],
                    'enderecoEscolaAtua' => $row['enderecoEscolaAtua'],
                    'zonaEscolaAtua' => $row['zonaEscolaAtua'],
                'enderecoEscolaHoraExtra' => $row['enderecoEscolaHoraExtra'],
                    'zonaEscolaExtra' => $row['zonaEscolaExtra'],
                    'observacoes' => $row['observacoes'],
                    'distritoEscolaExtra' => $row['distritoEscolaExtra'],
                    'materia2' => $row['materia2'],
                    'diretorSegundaEscola' => $row['diretorSegundaEscola'],
                    'turnoEscolaExtra' => $row['turnoEscolaExtra'],
                    'cargaHorariaAdcional' => $row['cargaHorariaAdcional'],
                    'QualEscolaHoraExtra' => $row['QualEscolaHoraExtra'],
                    'cargaHoraria' => $row['cargaHoraria'],
                    'turnoEscolaNormal' => $row['turnoEscolaNormal'],
                    'materia1' => $row['materia1'],
                    'condicao' => $row['condicao'],
                    'formacao' => $row['formacao'],
                    'dataNascimento' => $row['dataNascimento'],
                    'nome' => $row['nome'],
                    'distritoEscolaAtua' => $row['distritoEscolaAtua']
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
        else if($postjson['requisicao'] == 'pesquisarProfessor'){
        $query = mysqli_query($mysqli, "select * from professores where '$postjson[escola]' = escolaEnsino order by id asc");
            while($row = mysqli_fetch_array($query)){
                $dados[] = array(
                    'id' => $row['id'],
                    'escolaEnsino' => $row['escolaEnsino'],
                    'diretorDele' => $row['diretorDele'],
                    'enderecoEscolaAtua' => $row['enderecoEscolaAtua'],
                    'zonaEscolaAtua' => $row['zonaEscolaAtua'],
                'enderecoEscolaHoraExtra' => $row['enderecoEscolaHoraExtra'],
                    'observacoes' => $row['observacoes'],
                    'zonaEscolaExtra' => $row['zonaEscolaExtra'],
                    'distritoEscolaExtra' => $row['distritoEscolaExtra'],
                    'materia2' => $row['materia2'],
                    'diretorSegundaEscola' => $row['diretorSegundaEscola'],
                    'turnoEscolaExtra' => $row['turnoEscolaExtra'],
                    'cargaHorariaAdcional' => $row['cargaHorariaAdcional'],
                    'QualEscolaHoraExtra' => $row['QualEscolaHoraExtra'],
                    'cargaHoraria' => $row['cargaHoraria'],
                    'turnoEscolaNormal' => $row['turnoEscolaNormal'],
                    'materia1' => $row['materia1'],
                    'condicao' => $row['condicao'],
                    'formacao' => $row['formacao'],
                    'dataNascimento' => $row['dataNascimento'],
                    'nome' => $row['nome'],
                    'distritoEscolaAtua' => $row['distritoEscolaAtua']
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
    else  if($postjson['requisicao'] == 'deletarProfessor'){
    
    
        $query = mysqli_query($mysqli, "DELETE FROM professores  WHERE '$postjson[id]' = id");
    
    
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
    
    else if($postjson['requisicao'] == 'editar1Perfil'){
        $query = mysqli_query($mysqli, "select * from professores WHERE '$postjson[id]' = id");
            while($row = mysqli_fetch_array($query)){
                $dados[] = array(
                    'id' => $row['id'],
                    'escolaEnsino' => $row['escolaEnsino'],
                    'diretorDele' => $row['diretorDele'],
                    'enderecoEscolaAtua' => $row['enderecoEscolaAtua'],
                    'zonaEscolaAtua' => $row['zonaEscolaAtua'],
                'enderecoEscolaHoraExtra' => $row['enderecoEscolaHoraExtra'],
                    'observacoes' => $row['observacoes'],
                    'zonaEscolaExtra' => $row['zonaEscolaExtra'],
                    'distritoEscolaExtra' => $row['distritoEscolaExtra'],
                    'materia2' => $row['materia2'],
                    'diretorSegundaEscola' => $row['diretorSegundaEscola'],
                    'turnoEscolaExtra' => $row['turnoEscolaExtra'],
                    'cargaHorariaAdcional' => $row['cargaHorariaAdcional'],
                    'QualEscolaHoraExtra' => $row['QualEscolaHoraExtra'],
                    'cargaHoraria' => $row['cargaHoraria'],
                    'turnoEscolaNormal' => $row['turnoEscolaNormal'],
                    'materia1' => $row['materia1'],
                    'condicao' => $row['condicao'],
                    'formacao' => $row['formacao'],
                    'dataNascimento' => $row['dataNascimento'],
                    'nome' => $row['nome'],
                    'distritoEscolaAtua' => $row['distritoEscolaAtua']
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
    else if($postjson['requisicao'] == 'editarProfessor'){

        $query = mysqli_query($mysqli, "UPDATE  professores SET escolaEnsino = '$postjson[escolaEnsino]', 
        diretorDele = '$postjson[diretorDele]', enderecoEscolaAtua = '$postjson[enderecoEscolaAtua]', zonaEscolaAtua = '$postjson[zonaEscolaAtua]',
        enderecoEscolaHoraExtra = '$postjson[enderecoEscolaHoraExtra]',zonaEscolaExtra = '$postjson[zonaEscolaExtra]',
        distritoEscolaExtra = '$postjson[distritoEscolaExtra]',materia2 = '$postjson[materia2]',diretorSegundaEscola = '$postjson[diretorSegundaEscola]',
        turnoEscolaExtra = '$postjson[turnoEscolaExtra]',cargaHorariaAdcional = '$postjson[cargaHorariaAdcional]',QualEscolaHoraExtra = '$postjson[QualEscolaHoraExtra]',
        observacoes = '$postjson[observacoes]',
        cargaHoraria = '$postjson[cargaHoraria]',turnoEscolaNormal = '$postjson[turnoEscolaNormal]',materia1 = '$postjson[materia1]',condicao = '$postjson[condicao]',
        formacao = '$postjson[formacao]',dataNascimento = '$postjson[dataNascimento]',nome = '$postjson[nome]',
        distritoEscolaAtua = '$postjson[distritoEscolaAtua]'  WHERE '$postjson[id]' = id");

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
    
    else if($postjson['requisicao'] == 'pesquisarProfessorNome'){
        $pesquisa = $postjson['pesquisa'].'%';
        $query = mysqli_query($mysqli, "select * from professores WHERE  nome like '$pesquisa' ");
            while($row = mysqli_fetch_array($query)){
                $dados[] = array(
                    'id' => $row['id'],
                    'escolaEnsino' => $row['escolaEnsino'],
                    'diretorDele' => $row['diretorDele'],
                    'enderecoEscolaAtua' => $row['enderecoEscolaAtua'],
                    'zonaEscolaAtua' => $row['zonaEscolaAtua'],
                'enderecoEscolaHoraExtra' => $row['enderecoEscolaHoraExtra'],
                    'observacoes' => $row['observacoes'],
                    'zonaEscolaExtra' => $row['zonaEscolaExtra'],
                    'distritoEscolaExtra' => $row['distritoEscolaExtra'],
                    'materia2' => $row['materia2'],
                    'diretorSegundaEscola' => $row['diretorSegundaEscola'],
                    'turnoEscolaExtra' => $row['turnoEscolaExtra'],
                    'cargaHorariaAdcional' => $row['cargaHorariaAdcional'],
                    'QualEscolaHoraExtra' => $row['QualEscolaHoraExtra'],
                    'cargaHoraria' => $row['cargaHoraria'],
                    'turnoEscolaNormal' => $row['turnoEscolaNormal'],
                    'materia1' => $row['materia1'],
                    'condicao' => $row['condicao'],
                    'formacao' => $row['formacao'],
                    'dataNascimento' => $row['dataNascimento'],
                    'nome' => $row['nome'],
                    'distritoEscolaAtua' => $row['distritoEscolaAtua']
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