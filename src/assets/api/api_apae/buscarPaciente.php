<?PHP

    include('conexao.php');

    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With'); 
    header('Content-Type: application/json; charset=utf-8');   
 
    $postJson = json_decode(file_get_contents('php://input'), true);
    
    if($postJson['requisicao'] == 'buscarPaciente'){
        $maximo = 0;
        $palavra = "%".$postJson['nome']."%";
        $query = mysqli_query($mysqli, "select * from pacientes  where nome like '$palavra' order by nome asc");
            while($row = mysqli_fetch_array($query)){
                if($maximo <20){
                    $dados[] = array(
                        'id' => $row['id'],
                        'nome' => $row['nome']
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
    else    if($postJson['requisicao'] == 'carregarPaciente'){
        $query = mysqli_query($mysqli, "select * from pacientes  where id = '$postJson[id]' order by nome asc");
            while($row = mysqli_fetch_array($query)){
                    $dados[] = array(    
                    'id' => $row['id'],
                    'nome' => $row['nome'],
                    'idade' => $row['idade'],
                    'dataNascimento' => $row['dataNascimento'],
                    'naturalidade' => $row['naturalidade'],
                    'endereco' => $row['endereco'],
                    'nomePai' => $row['nomePai'],
                    'profissaoPai' => $row['profissaoPai'],
                    'nomeMae' => $row['nomeMae'],
                    'profissaoMae' => $row['profissaoMae'],
                    'sexo' => $row['sexo'],
                    'cor' => $row['cor'],
                    'escolaridadePai' => $row['escolaridadePai'],
                    'escolaridadeMae' => $row['escolaridadeMae'],
                    'responsavel' => $row['responsavel'],
                    'nomeEntrevistado' => $row['nomeEntrevistado'],
                    'telefone' => $row['telefone'],
                    'email' => $row['email'],
                    'duracaoGravidez' => $row['duracaoGravidez'],
                    'doencas' => $row['doencas'],
                    'ocorrenciasGestacao' => $row['ocorrenciasGestacao'],
                    'medicacoes' => $row['medicacoes'],
                    'alergia' => $row['alergia'],
                    'sono' => $row['sono'],
                    'acompanhamentoFora' => $row['acompanhamentoFora'],
                    'escola' => $row['escola'],
                    'amigosEscola' => $row['amigosEscola'],
                    'personalidadeCrianca' => $row['personalidadeCrianca'],
                    'habilidadeEscrita' => $row['habilidadeEscrita'],
                    'dificuldadeLeitura' => $row['dificuldadeLeitura'],
                    'gostaEstudar' => $row['gostaEstudar'],
                    'rotinaCrianca' => $row['rotinaCrianca'],
                    'gostaFazerEmCasa' => $row['gostaFazerEmCasa'],
                    'comoCriancaBrinca' => $row['comoCriancaBrinca'],
                    'interageComOsPais' => $row['interageComOsPais']
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

    else     if($postJson['requisicao'] == 'carregarPaciente2'){
        $query = mysqli_query($mysqli, "SELECT * FROM pacientes2  WHERE id = '$postJson[id]'");
            while($row = mysqli_fetch_array($query)){
                    $dados[] = array(    
                    'id' => $row['id'],
                    "interacaoComDemais"=>$row['interacaoComDemais'],
                    "queixaPais"=>$row['queixaPais'],
                    "queixaCriancas"=>$row['queixaCriancas'],
                    "fotoCrianca"=>$row['fotoCrianca'],
                    "rg"=>$row['rg'],
                    "comprovanteResidencia"=>$row['comprovanteResidencia'],
                    "cartaoSUS"=>$row['cartaoSUS'],
                    "fisioterapeuta"=>$row['fisioterapeuta'],
                    "psicologa"=>$row['psicologa'],
                    "assistenteSocial"=>$row['assistenteSocial'],
                    "psicopedagogia"=>$row['psicopedagogia'],
                    "fonoaudiologo"=>$row['fonoaudiologo'],
                    "pedagogia"=>$row['pedagogia'],
                    "nutricionista"=>$row['nutricionista'],
                    "dadosRG"=>$row['dadosRG'],
                    "dadosCPF"=>$row['dadosCPF'],
                    "dadosCartaoSUS"=>$row['dadosCartaoSUS'],
                    "dataAdmissao"=>$row['dataAdmissao'],
                    "relatorio1"=>$row['relatorio1'],
                    "relatorio2"=>$row['relatorio2'],
                    "relatorio3"=>$row['relatorio3'],
                    "relatorio4"=>$row['relatorio4'],
                    "relatorio5"=>$row['relatorio5'],
                    "relatorio6"=>$row['relatorio6'],
                    "relatorio7"=>$row['relatorio7'],
                    "relatorio8"=>$row['relatorio8'],
                    "relatorio9"=>$row['relatorio9'],
                    "relatorio10"=>$row['relatorio10'],
                    "relatorio11"=>$row['relatorio11'],
                    "relatorio12"=>$row['relatorio12'],
                    "relatorio13"=>$row['relatorio13'],
                    "relatorio14"=>$row['relatorio14'],
                    "relatorio15"=>$row['relatorio15'],
                    "relatorio16"=>$row['relatorio16'],
                    "relatorio17"=>$row['relatorio17'],
                    "relatorio18"=>$row['relatorio18'],
                    "relatorio19"=>$row['relatorio19'],
                    "relatorio20"=>$row['relatorio20']
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
    
    else     if($postJson['requisicao'] == 'categoriaPaciente'){
        $query = mysqli_query($mysqli, "SELECT * FROM pacientes order by id asc");
            while($row = mysqli_fetch_array($query)){
                    $dados[] = array(    
                    'id' => $row['id'],
                    "nome"=>$row['nome'],
                    "nomeMae"=>$row['nomeMae']
                );
            }

            $query2 = mysqli_query($mysqli, "SELECT * FROM pacientes2 order by id asc");
            while($row = mysqli_fetch_array($query2)){
                    $dados2[] = array(    
                    'id' => $row['id'],
                    "fisioterapeuta"=>$row['fisioterapeuta'],
                    "psicologa"=>$row['psicologa'],
                    "assistenteSocial"=>$row['assistenteSocial'],
                    "psicopedagogia"=>$row['psicopedagogia'],
                    "fonoaudiologo"=>$row['fonoaudiologo'],
                    "pedagogia"=>$row['pedagogia'],
                    "nutricionista"=>$row['nutricionista']
                );
            }

        if($query && $query2){
            $result = json_encode(
                array(
                    'situacao'=>true,
                    'mensagem'=>"Query feito com sucesso.",
                    'resultado1'=>$dados,
                    'resultado2'=>$dados2
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