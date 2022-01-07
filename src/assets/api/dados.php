<?PHP

    include('conexao.php');

    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With'); 
    header('Content-Type: application/json; charset=utf-8');   
 
    require_once('phpMailer/PHPMailer.php');
    require_once('phpMailer/SMTP.php');
    require_once('phpMailer/Exception.php');

    // enviar email
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\SMTP;
    use PHPMailer\PHPMailer\Exception;
    
    $postjson = json_decode(file_get_contents('php://input'), true);

    if($postjson['requisicao'] == 'pegarBanners'){ // selecione todos de banner
        $query = mysqli_query($mysqli, "select * from banner order by id desc");
            while($row = mysqli_fetch_array($query)){
                $dados[] = array(
                    'id' => $row['id'],
                    'imagem' => $row['imagem'],
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
    
    }else if($postjson['requisicao'] == 'pegarBoletim'){
        $query = mysqli_query($mysqli, "select * from boletim order by id desc");
            while($row = mysqli_fetch_array($query)){
                $dados[] = array(
                    'id' => $row['id'],
                    'imagem' => $row['imagem'],
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
    else if($postjson['requisicao'] == 'pegarVacinometro'){
        $query = mysqli_query($mysqli, "select * from vacinometro order by id desc");
            while($row = mysqli_fetch_array($query)){
                $dados[] = array(
                    'id' => $row['id'],
                    'imagem' => $row['imagem'],
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
    else if($postjson['requisicao'] == 'pegarCampanha'){
        $query = mysqli_query($mysqli, "select * from campanha order by id desc");
            while($row = mysqli_fetch_array($query)){
                $dados[] = array(
                    'id' => $row['id'],
                    'imagem' => $row['imagem'],
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
    else if($postjson['requisicao'] == 'pegarDuasNoticias'){
        $query = mysqli_query($mysqli, "select * from noticias order by id desc");
        $qtd = 0;
        while($row = mysqli_fetch_array($query)){
            if($qtd == 2) break;
            $dados[] = array(
            'id' => $row['id'],
            'titulo' => $row['titulo'],
            'thumb' => $row['thumb'],
            'introducao' => $row['introducao'],
            'imagem' => $row['imagem'],
            'mensagem' => $row['mensagem'],
            'autor' => $row['autor'],
            'dataPost' => $row['dataPost'],
            'visualizacoes' => $row['visualizacoes']
            );
            $qtd ++;
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
    else if($postjson['requisicao'] == 'quatroNoticias'){
        $query = mysqli_query($mysqli, "select * from noticias order by id desc");
        $qtd = 0;
        while($row = mysqli_fetch_array($query)){
            if($qtd >=2 && $qtd<=5){
                $dados[] = array(
                    'id' => $row['id'],
                    'titulo' => $row['titulo'],
                    'thumb' => $row['thumb'],
                );
            }
            if($qtd == 5) break;
            $qtd ++;                
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
    else if($postjson['requisicao'] == 'pegarNoticia'){
        $query = mysqli_query($mysqli, "select * from noticias where titulo = '$postjson[titulo]' ");
        while($row = mysqli_fetch_array($query)){
            $dados[] = array(
            'id' => $row['id'],
            'titulo' => $row['titulo'],
            'thumb' => $row['thumb'],
            'introducao' => $row['introducao'],
            'imagem' => $row['imagem'],
            'mensagem' => $row['mensagem'],
            'autor' => $row['autor'],
            'dataPost' => $row['dataPost'],
            'visualizacoes' => $row['visualizacoes']
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
    else if($postjson['requisicao'] == 'alterarView'){


        $query = mysqli_query($mysqli, "UPDATE  noticias SET  visualizacoes = '$postjson[visualizacoes]' where id = '$postjson[id]'");
    
    
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
    else if($postjson['requisicao'] == 'pesquisarNoticia'){
        $aux = "%".$postjson['pesquisa']."%";
        $query = mysqli_query($mysqli, "select * from noticias where titulo  like '$aux' or introducao like '$aux' or mensagem  like '$aux' order by id desc");
        $atila = 0;
        while($row = mysqli_fetch_array($query)){
            if($atila < $postjson['maximo']){
                $dados[] = array(
                'id' => $row['id'],
                'titulo' => $row['titulo'],
                'thumb' => $row['thumb'],
                'introducao' => $row['introducao'],
                'imagem' => $row['imagem'],
                'mensagem' => $row['mensagem'],
                'autor' => $row['autor'],
                'dataPost' => $row['dataPost'],
                'visualizacoes' => $row['visualizacoes']
                );
            }
            $atila++;
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
    else if($postjson['requisicao'] == 'pegarQuantidade'){
        $query = mysqli_query($mysqli, "select * from noticias order by id desc");
        $aux = 0;
        while($row = mysqli_fetch_array($query)){
            if($aux >= $postjson['minimo'] && $postjson['maximo']> $aux){
                $dados[] = array(
                    'id' => $row['id'],
                    'titulo' => $row['titulo'],
                    'thumb' => $row['thumb'],
                    'introducao' => $row['introducao']
                    );        
            }
            $aux ++;
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
    else if($postjson['requisicao'] == 'enviarMensagem'){ // mandara so uma mensagem
        
        $mail = new PHPMailer(true); // o true eh pra ambiente de producao pra ver os logs
        $infoEmail;
//https://myaccount.google.com/lesssecureapps?pli=1&rapt=AEjHL4O4S6TtKH1f2Iy3X7zdJDZbwJUmyPzMN4rzZG-FhdYNElUjVVO5ZfxCtXo5rnfJkefsbNCaOulSg9baNmroDkiGthdp-w
        try{
            $mail->SMTPDebug = SMTP::DEBUG_SERVER; // nao obrigatorio
            $mail->IsSMTP();
            $mail->Host = "smtp.gmail.com";
            $mail->SMTPAuth = true;
            $mail->Username = "engenhe.teste@gmail.com";
            $mail->Password = "44029476a";
            $mail->Port = 587;
            $mail->setFrom('engenhe.teste@gmail.com');
            $mail->addAddress($postjson['destinatario']);
            $mail->isHTML(true);
            $mail->Subject = $postjson['assunto'];
            $mail->Body = $postjson['mensagem'];
//            $mail->AltBody = "Seu pedido foi recebido";

            if($mail->send()){
                $infoEmail ="Email enviado com sucesso";
            }
            else{
                $infoEmail = "Não foi possivel te enviar uma copia";
            }


        }catch(Exception $e){
            $infoEmail = "Erro ao enviar email.";// {$mail->ErrorInfo}
        }
    }

    else if($postjson['requisicao'] == 'pegarUltimas'){
        $query = mysqli_query($mysqli, "select * from noticias order by id desc");
        $aux = 0;
        while($row = mysqli_fetch_array($query)){
            if($aux < $postjson['maximo']&& $postjson['titulo'] != $row['titulo']){
                $dados[] = array(
                    'id' => $row['id'],
                    'titulo' => $row['titulo'],
                    'thumb' => $row['thumb'],
                );        
            $aux ++;
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
    
    else if($postjson['requisicao'] == 'osSecretarios'){
        $query = mysqli_query($mysqli, "select * from secretarios order by id desc");
        while($row = mysqli_fetch_array($query)){
            $dados[] = array(
                'id' => $row['id'],
                'setor' => $row['setor'],
                'foto' => $row['foto'],
                'responsavel' => $row['responsavel'],
                'telefone' => $row['telefone'],
                'endereco' => $row['endereco'],
                'email' => $row['email']
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
    
    if($postjson['requisicao'] == 'ondeComer'){ // selecione todos de banner
        $query = mysqli_query($mysqli, "select * from comer order by id asc");
            while($row = mysqli_fetch_array($query)){
                $dados[] = array(
                    'id' => $row['id'],
                    'nome1' => $row['nome1'],
                    'rua1' => $row['rua1'],
                    'contato1' => $row['contato1'],
                    'nome2' => $row['nome2'],
                    'rua2' => $row['rua2'],
                    'contato2' => $row['contato2'],
                    'nome3' => $row['nome3'],
                    'rua3' => $row['rua3'],
                    'contato3' => $row['contato3'],
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
    
    if($postjson['requisicao'] == 'ondeFicar'){ // selecione todos de banner
        $query = mysqli_query($mysqli, "select * from ficar order by id asc");
            while($row = mysqli_fetch_array($query)){
                $dados[] = array(
                    'id' => $row['id'],
                    'nome1' => $row['nome1'],
                    'rua1' => $row['rua1'],
                    'contato1' => $row['contato1'],
                    'nome2' => $row['nome2'],
                    'rua2' => $row['rua2'],
                    'contato2' => $row['contato2'],
                    'nome3' => $row['nome3'],
                    'rua3' => $row['rua3'],
                    'contato3' => $row['contato3'],
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
    else if($postjson['requisicao'] == 'solicitacoes'){

        $query = mysqli_query($mysqli, "INSERT INTO solicitacoes SET nome = '$postjson[nome]', 
        localidade = '$postjson[localidade]', email = '$postjson[email]', assunto = '$postjson[assunto]',
        mensagem = '$postjson[mensagem]'");

        if($query){

            $result = json_encode(
                array(
                    'situacao' => true,
                    'mensagem'=> "Mensagem enviada com sucesso."
                )
            );
        }
        else {
            $result = json_encode(
                array(
                    'situacao' => false,
                    'mensagem'=> "Nao foi possivel enviar a mensagem<br>Tente novamente."
                )
            );	
        }

        echo $result;
    }
	
?>