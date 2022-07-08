<?PHP

    include('conexao.php');

    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With'); 
    header('Content-Type: application/json; charset=utf-8');   
 
    $postJson = json_decode(file_get_contents('php://input'), true);

if($postJson['requisicao'] == 'salvamentoPrimario'){

    $query = mysqli_query($mysqli, "INSERT INTO pacientes SET nome = '$postJson[nome]', idade = '$postJson[idade]', 
    dataNascimento = '$postJson[dataNascimento]', naturalidade = '$postJson[naturalidade]', endereco = '$postJson[endereco]',
    nomePai = '$postJson[nomePai]',profissaoPai = '$postJson[profissaoPai]', nomeMae = '$postJson[nomeMae]',profissaoMae = '$postJson[profissaoMae]',
    sexo = '$postJson[sexo]', cor = '$postJson[cor]',escolaridadePai = '$postJson[escolaridadePai]',escolaridadeMae = '$postJson[escolaridadeMae]',
    responsavel = '$postJson[responsavel]',nomeEntrevistado = '$postJson[nomeEntrevistado]',telefone = '$postJson[telefone]',email = '$postJson[email]',
    duracaoGravidez = '$postJson[duracaoGravidez]',doencas = '$postJson[doencas]',ocorrenciasGestacao = '$postJson[ocorrenciasGestacao]',
    medicacoes = '$postJson[medicacoes]', alergia = '$postJson[alergia]', sono = '$postJson[sono]', acompanhamentoFora = '$postJson[acompanhamentoFora]',
    escola = '$postJson[escola]', amigosEscola = '$postJson[amigosEscola]',personalidadeCrianca = '$postJson[personalidadeCrianca]',
    habilidadeEscrita = '$postJson[habilidadeEscrita]', dificuldadeLeitura = '$postJson[dificuldadeLeitura]', gostaEstudar = '$postJson[gostaEstudar]', 
    rotinaCrianca = '$postJson[rotinaCrianca]', gostaFazerEmCasa = '$postJson[gostaFazerEmCasa]', 
    comoCriancaBrinca = '$postJson[comoCriancaBrinca]', interageComOsPais = '$postJson[interageComOsPais]'");
    
    
    if($query){
    
        $result = json_encode(
            array(
                'situacao' => 200,
                'mensagem'=> "matricula criada com sucesso."
            )
        );
    }
    else {
        $result = json_encode(
            array(
                'situacao' => 503,
                'mensagem'=> "Nao foi possivel criar a matricula."
            )
        );	
    }
    
    echo $result;
    }
    
else if($postJson['requisicao'] == 'salvamentoSecundario'){

    $query = mysqli_query($mysqli, "INSERT INTO pacientes2 SET interacaoComDemais = '$postJson[interacaoComDemais]', queixaPais = '$postJson[queixaPais]', 
    queixaCriancas = '$postJson[queixaCriancas]', fotoCrianca = '$postJson[fotoCrianca]', rg = '$postJson[rg]',
    comprovanteResidencia = '$postJson[comprovanteResidencia]',cartaoSUS = '$postJson[cartaoSUS]', fisioterapeuta = '$postJson[fisioterapeuta]',psicologa = '$postJson[psicologa]',
    assistenteSocial = '$postJson[assistenteSocial]', psicopedagogia = '$postJson[psicopedagogia]',fonoaudiologo = '$postJson[fonoaudiologo]',pedagogia = '$postJson[pedagogia]',
    nutricionista = '$postJson[nutricionista]', dataAdmissao = '$postJson[dataAdmissao]', dadosCartaoSUS = '$postJson[dadosCartaoSUS]',
    dadosCPF = '$postJson[dadosCPF]', dadosRG = '$postJson[dadosRG]', relatorio1 = '$postJson[relatorio1]',relatorio2 = '$postJson[relatorio2]',
    relatorio3 = '$postJson[relatorio3]',relatorio4 = '$postJson[relatorio4]',relatorio5 = '$postJson[relatorio5]',relatorio6 = '$postJson[relatorio6]',
    relatorio7 = '$postJson[relatorio7]',relatorio8 = '$postJson[relatorio8]',relatorio9 = '$postJson[relatorio9]',relatorio10 = '$postJson[relatorio10]',
    relatorio11 = '$postJson[relatorio11]',relatorio12 = '$postJson[relatorio12]',relatorio13 = '$postJson[relatorio13]',relatorio14 = '$postJson[relatorio14]',
    relatorio15 = '$postJson[relatorio15]',relatorio16 = '$postJson[relatorio16]',relatorio17 = '$postJson[relatorio17]',relatorio18 = '$postJson[relatorio18]',
    relatorio19 = '$postJson[relatorio19]',relatorio20 = '$postJson[relatorio20]'");
    
    
    if($query){
    
        $result = json_encode(
            array(
                'situacao' => 200,
                'mensagem'=> "matricula criada com sucesso."
            )
        );
    }
    else {
        $result = json_encode(
            array(
                'situacao' => 503,
                'mensagem'=> "Nao foi possivel criar a matricula."
            )
        );	
    }
    
    echo $result;
    }
?>