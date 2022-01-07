<?PHP

    include('conexao.php');

    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With'); 
    header('Content-Type: application/json; charset=utf-8');   
 
    $postjson = json_decode(file_get_contents('php://input'), true);

    if($postjson['requisicao'] == 'matricular'){

        $query = mysqli_query($mysqli, "INSERT INTO matriculas SET idSenso = '$postjson[idSenso]', escola = '$postjson[escola]', 
        enderecoEscola = '$postjson[enderecoEscola]', distrito = '$postjson[distrito]', diretora = '$postjson[diretora]',
        escolaridadeDiretora = '$postjson[escolaridadeDiretora]',nomeAluno = '$postjson[nomeAluno]',
        serie = '$postjson[serie]',documento = '$postjson[documento]',dataNascimento = '$postjson[dataNascimento]',
        idade = '$postjson[idade]',naturalidade = '$postjson[naturalidade]',sexo = '$postjson[sexo]',
        anoLetivo = '$postjson[anoLetivo]',nomeResponsavel1 = '$postjson[nomeResponsavel1]',nomeResponsavel2 = '$postjson[nomeResponsavel2]',turno = '$postjson[turno]',
        enderecoAluno = '$postjson[enderecoAluno]',dataMatricula = '$postjson[dataMatricula]',deficiencia = '$postjson[deficiencia]',
        areaEscola = '$postjson[areaEscola]', telefoneResponsavel1 = '$postjson[telefoneResponsavel1]',
        telefoneResponsavel2 = '$postjson[telefoneResponsavel2]', telefoneResponsavel3 = '$postjson[telefoneResponsavel3]',
        nomeResponsavel3 = '$postjson[nomeResponsavel3]', areaAluno = '$postjson[areaAluno]',profissaoResponsavel1 = '$postjson[profissaoResponsavel1]',
        escolaAntiga = '$postjson[escolaAntiga]', raca = '$postjson[raca]', religiao = '$postjson[religiao]', 
        alergia = '$postjson[alergia]', contatoEmergenciaTelefone = '$postjson[contatoEmergenciaTelefone]', 
        contatoEmergenciaNome = '$postjson[contatoEmergenciaNome]', nomeResponsavelPegador = '$postjson[nomeResponsavelPegador]',
        profissaoResponsavel2 = '$postjson[profissaoResponsavel2]', orientacaoSexual = '$postjson[orientacaoSexual]',cartaoSUS = '$postjson[cartaoSUS]', numeroCamisa = '$postjson[numeroCamisa]', numeroMatricula = '$postjson[numeroMatricula]', observacoes = '$postjson[observacoes]' ");

    $aux = "SELECT LAST_INSERT_ID();";
    $aux1 = mysqli_query($mysqli, $aux);
    $aux2 = mysqli_fetch_array($aux1);


        if($query){
    
            $result = json_encode(
                array(
                    'situacao' => true,
                    'mensagem'=> "matricula criada com sucesso.",
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
    
    else if($postjson['requisicao'] == '20Primeiros'){
        $maximo = 0;
        $query = mysqli_query($mysqli, "select * from matriculas order by id asc");
            while($row = mysqli_fetch_array($query)){
                if($maximo <20){
                    $dados[] = array(
                        'id' => $row['id'],
                        'escola' => $row['escola'],
                        'enderecoEscola' => $row['enderecoEscola'],
                        'distrito' => $row['distrito'],
                        'diretora' => $row['diretora'],
                        'idSenso' => $row['idSenso'],
                        'escolaridadeDiretora' => $row['escolaridadeDiretora'],
                        'nomeAluno' => $row['nomeAluno'],
                        'serie' => $row['serie'],
                        'documento' => $row['documento'],
                        'cartaoSUS' => $row['cartaoSUS'],
                        'numeroCamisa' => $row['numeroCamisa'],
                        'dataNascimento' => $row['dataNascimento'],
                        'idade' => $row['idade'],
                        'naturalidade' => $row['naturalidade'],
                        'sexo' => $row['sexo'],
                        'anoLetivo' => $row['anoLetivo'],
                        'nomeResponsavel1' => $row['nomeResponsavel1'],
                        'nomeResponsavel2' => $row['nomeResponsavel2'],
                        'nomeResponsavel3' => $row['nomeResponsavel3'],
                        'turno' => $row['turno'],
                        'enderecoAluno' => $row['enderecoAluno'],
                        'dataMatricula' => $row['dataMatricula'],
                        'deficiencia' => $row['deficiencia'],
                        'areaEscola' => $row['areaEscola'],
                        'areaAluno' => $row['areaAluno'],
                        'orientacaoSexual' => $row['orientacaoSexual'],
                        'numeroMatricula' => $row['numeroMatricula'],
                        'observacoes' => $row['observacoes'],
                    );
                    $maximo++;
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
    else if($postjson['requisicao'] == '20PrimeirosOPC'){
        $maximo = 0;
        $query = mysqli_query($mysqli, "select * from matriculas  where escola = '$postjson[escola]' order by id asc");
            while($row = mysqli_fetch_array($query)){
                if($maximo <20){
                    $dados[] = array(
                        'id' => $row['id'],
                        'escola' => $row['escola'],
                        'enderecoEscola' => $row['enderecoEscola'],
                        'distrito' => $row['distrito'],
                        'diretora' => $row['diretora'],
                        'idSenso' => $row['idSenso'],
                        'cartaoSUS' => $row['cartaoSUS'],
                        'numeroCamisa' => $row['numeroCamisa'],
                        'escolaridadeDiretora' => $row['escolaridadeDiretora'],
                        'nomeAluno' => $row['nomeAluno'],
                        'serie' => $row['serie'],
                        'documento' => $row['documento'],
                        'dataNascimento' => $row['dataNascimento'],
                        'idade' => $row['idade'],
                        'naturalidade' => $row['naturalidade'],
                        'sexo' => $row['sexo'],
                        'anoLetivo' => $row['anoLetivo'],
                        'nomeResponsavel1' => $row['nomeResponsavel1'],
                        'nomeResponsavel2' => $row['nomeResponsavel2'],
                        'nomeResponsavel3' => $row['nomeResponsavel3'],
                        'turno' => $row['turno'],
                        'enderecoAluno' => $row['enderecoAluno'],
                        'dataMatricula' => $row['dataMatricula'],
                        'deficiencia' => $row['deficiencia'],
                        'areaEscola' => $row['areaEscola'],
                        'areaAluno' => $row['areaAluno'],
                        'orientacaoSexual' => $row['orientacaoSexual'],
                        'numeroMatricula' => $row['numeroMatricula'],
                        'observacoes' => $row['observacoes'],
                    );
                    $maximo++;
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
    else if($postjson['requisicao'] == 'pesquisaAvancada'){
        $query = mysqli_query($mysqli, "select * from matriculas where escola = '$postjson[escola]'
        and  serie = '$postjson[serie]' and turno = '$postjson[turno]' ");
            while($row = mysqli_fetch_array($query)){
                $dados[] = array(
                    'id' => $row['id'],
                    'escola' => $row['escola'],
                    'enderecoEscola' => $row['enderecoEscola'],
                    'distrito' => $row['distrito'],
                    'diretora' => $row['diretora'],
                    'escolaridadeDiretora' => $row['escolaridadeDiretora'],
                    'nomeAluno' => $row['nomeAluno'],
                    'serie' => $row['serie'],
                    'documento' => $row['documento'],
                    'cartaoSUS' => $row['cartaoSUS'],
                    'numeroCamisa' => $row['numeroCamisa'],
                    'idSenso' => $row['idSenso'],
                    'dataNascimento' => $row['dataNascimento'],
                    'idade' => $row['idade'],
                    'naturalidade' => $row['naturalidade'],
                    'sexo' => $row['sexo'],
                    'anoLetivo' => $row['anoLetivo'],
                    'nomeResponsavel1' => $row['nomeResponsavel1'],
                    'nomeResponsavel2' => $row['nomeResponsavel2'],
                    'nomeResponsavel3' => $row['nomeResponsavel3'],
                    'telefoneResponsavel1' => $row['telefoneResponsavel1'],
                    'telefoneResponsavel2' => $row['telefoneResponsavel2'],
                    'telefoneResponsavel3' => $row['telefoneResponsavel3'],
                    'profissaoResponsavel1' => $row['profissaoResponsavel1'],
                    'profissaoResponsavel2' => $row['profissaoResponsavel2'],
                    'turno' => $row['turno'],
                    'enderecoAluno' => $row['enderecoAluno'],
                    'dataMatricula' => $row['dataMatricula'],
                    'deficiencia' => $row['deficiencia'],
                    'areaEscola' => $row['areaEscola'],
                    'areaAluno' => $row['areaAluno'],
                    'escolaAntiga' => $row['escolaAntiga'],
                    'raca' => $row['raca'],
                    'religiao' => $row['religiao'],
                    'alergia' => $row['alergia'],
                    'contatoEmergenciaNome' => $row['contatoEmergenciaNome'],
                    'contatoEmergenciaTelefone' => $row['contatoEmergenciaTelefone'],
                    'nomeResponsavelPegador' => $row['nomeResponsavelPegador'],
                    'orientacaoSexual' => $row['orientacaoSexual'],
                    'numeroMatricula' => $row['numeroMatricula'],
                    'observacoes' => $row['observacoes'],
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
    
    else if($postjson['requisicao'] == 'pesquisaAutomatica'){
        $maximo = 0;
        $pesquisa = $postjson['entrada'].'%';
        $query = mysqli_query($mysqli, "select * from matriculas WHERE escola like '$pesquisa' or nomeAluno like '$pesquisa'
        or enderecoAluno like '$pesquisa' or nomeResponsavel1 like '$pesquisa'  or nomeResponsavel2 like '$pesquisa' or diretora like '$pesquisa'
        or enderecoAluno like '$pesquisa' or numeroMatricula like '$pesquisa' or nomeResponsavel3 like '$pesquisa' or areaAluno like '$pesquisa' order by id desc");
            while($row = mysqli_fetch_array($query)){
                if($maximo <60){
                    $dados[] = array(
                        'id' => $row['id'],
                        'escola' => $row['escola'],
                        'enderecoEscola' => $row['enderecoEscola'],
                        'distrito' => $row['distrito'],
                        'diretora' => $row['diretora'],
                        'escolaridadeDiretora' => $row['escolaridadeDiretora'],
                        'nomeAluno' => $row['nomeAluno'],
                        'serie' => $row['serie'],
                        'documento' => $row['documento'],
                        'cartaoSUS' => $row['cartaoSUS'],
                        'numeroCamisa' => $row['numeroCamisa'],
                        'idSenso' => $row['idSenso'],
                        'dataNascimento' => $row['dataNascimento'],
                        'idade' => $row['idade'],
                        'naturalidade' => $row['naturalidade'],
                        'sexo' => $row['sexo'],
                        'anoLetivo' => $row['anoLetivo'],
                        'nomeResponsavel1' => $row['nomeResponsavel1'],
                        'nomeResponsavel2' => $row['nomeResponsavel2'],
                        'nomeResponsavel3' => $row['nomeResponsavel3'],
                        'turno' => $row['turno'],
                        'enderecoAluno' => $row['enderecoAluno'],
                        'dataMatricula' => $row['dataMatricula'],
                        'deficiencia' => $row['deficiencia'],
                        'areaEscola' => $row['areaEscola'],
                        'areaAluno' => $row['areaAluno'],
                        'orientacaoSexual' => $row['orientacaoSexual'],
                        'numeroMatricula' => $row['numeroMatricula'],
                        'observacoes' => $row['observacoes'],
                    );
                    $maximo++;
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
    
    else if($postjson['requisicao'] == 'pesquisaAlunoRapido1'){
        $maximo = 0;
        $pesquisa = $postjson['nome'].'%';
        $query = mysqli_query($mysqli, "select * from matriculas WHERE nomeAluno like '$pesquisa' or  numeroMatricula like '$pesquisa' order by id desc");
            while($row = mysqli_fetch_array($query)){
                if($maximo <4 && $row['login'] == $postjson['escola']){
                    $dados[] = array(
                        'id' => $row['id'],
                        'nomeAluno' => $row['nomeAluno'],
                    );
                    $maximo++;
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
    
    else if($postjson['requisicao'] == 'pesquisaAlunoRapido'){
        $maximo = 0;
        $pesquisa = $postjson['nome'].'%';
        $query = mysqli_query($mysqli, "select * from matriculas WHERE nomeAluno like '$pesquisa' or  numeroMatricula like '$pesquisa'  order by id desc");
            while($row = mysqli_fetch_array($query)){
                if($maximo <4 && $postjson['escola'] ==$row['escola']){
                    $dados[] = array(
                        'id' => $row['id'],
                        'nomeAluno' => $row['nomeAluno'],
                    );
                    $maximo++;
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
    
    else if($postjson['requisicao'] == 'pesquisaIndividual'){
        $query = mysqli_query($mysqli, "select * from matriculas where id = '$postjson[id]'");
            while($row = mysqli_fetch_array($query)){
                $dados[] = array(
                    'id' => $row['id'],
                    'escola' => $row['escola'],
                    'enderecoEscola' => $row['enderecoEscola'],
                    'distrito' => $row['distrito'],
                    'diretora' => $row['diretora'],
                    'escolaridadeDiretora' => $row['escolaridadeDiretora'],
                    'nomeAluno' => $row['nomeAluno'],
                    'serie' => $row['serie'],
                    'documento' => $row['documento'],
                    'dataNascimento' => $row['dataNascimento'],
                    'idade' => $row['idade'],
                    'naturalidade' => $row['naturalidade'],
                    'idSenso' => $row['idSenso'],
                    'sexo' => $row['sexo'],
                    'anoLetivo' => $row['anoLetivo'],
                    'cartaoSUS' => $row['cartaoSUS'],
                    'numeroCamisa' => $row['numeroCamisa'],
                    'nomeResponsavel1' => $row['nomeResponsavel1'],
                    'nomeResponsavel2' => $row['nomeResponsavel2'],
                    'nomeResponsavel3' => $row['nomeResponsavel3'],
                    'telefoneResponsavel1' => $row['telefoneResponsavel1'],
                    'telefoneResponsavel2' => $row['telefoneResponsavel2'],
                    'telefoneResponsavel3' => $row['telefoneResponsavel3'],
                    'profissaoResponsavel1' => $row['profissaoResponsavel1'],
                    'profissaoResponsavel2' => $row['profissaoResponsavel2'],
                    'turno' => $row['turno'],
                    'enderecoAluno' => $row['enderecoAluno'],
                    'escolaAntiga' => $row['escolaAntiga'],
                    'raca' => $row['raca'],
                    'religiao' => $row['religiao'],
                    'alergia' => $row['alergia'],
                    'contatoEmergenciaNome' => $row['contatoEmergenciaNome'],
                    'contatoEmergenciaTelefone' => $row['contatoEmergenciaTelefone'],
                    'nomeResponsavelPegador' => $row['nomeResponsavelPegador'],
                    'dataMatricula' => $row['dataMatricula'],
                    'deficiencia' => $row['deficiencia'],
                    'orientacaoSexual' => $row['orientacaoSexual'],
                    'numeroMatricula' => $row['numeroMatricula'],
                    'areaEscola' => $row['areaEscola'],
                    'areaAluno' => $row['areaAluno'],
                    'observacoes' => $row['observacoes'],
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

    else if($postjson['requisicao'] == 'salvarMatricula'){
        $query = mysqli_query($mysqli, "UPDATE  matriculas SET idSenso = '$postjson[idSenso]', escola = '$postjson[escola]', 
        enderecoEscola = '$postjson[enderecoEscola]', distrito = '$postjson[distrito]', diretora = '$postjson[diretora]',
        escolaridadeDiretora = '$postjson[escolaridadeDiretora]',nomeAluno = '$postjson[nomeAluno]',
        serie = '$postjson[serie]',documento = '$postjson[documento]',dataNascimento = '$postjson[dataNascimento]',
        idade = '$postjson[idade]',naturalidade = '$postjson[naturalidade]',sexo = '$postjson[sexo]',
        anoLetivo = '$postjson[anoLetivo]',nomeResponsavel1 = '$postjson[nomeResponsavel1]',nomeResponsavel2 = '$postjson[nomeResponsavel2]',turno = '$postjson[turno]',
        enderecoAluno = '$postjson[enderecoAluno]',dataMatricula = '$postjson[dataMatricula]',deficiencia = '$postjson[deficiencia]',
        areaEscola = '$postjson[areaEscola]', telefoneResponsavel1 = '$postjson[telefoneResponsavel1]',
        telefoneResponsavel2 = '$postjson[telefoneResponsavel2]', telefoneResponsavel3 = '$postjson[telefoneResponsavel3]',
        nomeResponsavel3 = '$postjson[nomeResponsavel3]', areaAluno = '$postjson[areaAluno]',profissaoResponsavel1 = '$postjson[profissaoResponsavel1]',
        escolaAntiga = '$postjson[escolaAntiga]', raca = '$postjson[raca]', religiao = '$postjson[religiao]', 
        alergia = '$postjson[alergia]', contatoEmergenciaTelefone = '$postjson[contatoEmergenciaTelefone]', 
        contatoEmergenciaNome = '$postjson[contatoEmergenciaNome]', nomeResponsavelPegador = '$postjson[nomeResponsavelPegador]',
        profissaoResponsavel2 = '$postjson[profissaoResponsavel2]', cartaoSUS = '$postjson[cartaoSUS]', numeroCamisa = '$postjson[numeroCamisa]', orientacaoSexual = '$postjson[orientacaoSexual]', numeroMatricula = '$postjson[numeroMatricula]', observacoes = '$postjson[observacoes]' WHERE '$postjson[id]' = id");
    
    
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
    else  if($postjson['requisicao'] == 'deletarMatricula'){
    
    
        $query = mysqli_query($mysqli, "DELETE FROM matriculas  WHERE '$postjson[id]' = id");
    
    
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
    
    else if($postjson['requisicao'] == 'serieSexo'){
        $query = mysqli_query($mysqli, "select * from matriculas where escola ='$postjson[escola]'");
            while($row = mysqli_fetch_array($query)){
                $dados[] = array(
                    'id' => $row['id'],
                    'serie' => $row['serie'],
                    'turno' => $row['turno'],
                    'sexo' => $row['sexo']
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

    
    else if($postjson['requisicao'] == 'testeMatricula'){

        $query = mysqli_query($mysqli, "select * from matriculas WHERE numeroMatricula ='$postjson[matricula]'");
        $maximo = false;
            while($row = mysqli_fetch_array($query)){
                $maximo = true;
            }
    
        if($maximo == true){
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