<?PHP

    include('conexao.php');

    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With'); 
    header('Content-Type: application/json; charset=utf-8');   
 
    $postjson = json_decode(file_get_contents('php://input'), true);

    if($postjson['requisicao'] == 'verificarCPF'){ // selecione todos de banner
        $query = mysqli_query($mysqli, "select * from corridaDB where cpf = '$postjson[cpf]'");
            while($row = mysqli_fetch_array($query)){
                $dados[] = array(
                    'id' => $row['id']
                    );
            }
    
        if($query && $dados != null){
            $result = json_encode(
                array(
                    'status'=> 200
                )
            );
        }
        if($query && $dados == null){
            $result = json_encode(
                array(
                    'status'=> 404
                )
            );
        }
        else{
            $result = json_encode(
                array(
                    'status'=> 503
                )
            );
        }
        echo $result;
    
    }
    else if($postjson['requisicao'] == 'salvarCandidato'){

        
        $dataSalvar  = date("Y-m-d H:i:s", time());

        $query = mysqli_query($mysqli, "INSERT INTO corridaDB SET dataNascimento = '$postjson[dataNascimento]', 
        nome = '$postjson[nome]', sexo = '$postjson[sexo]', categoria = '$postjson[categoria]',
        cpf = '$postjson[cpf]', cidade = '$postjson[cidade]', equipe = '$postjson[equipe]',
        celular = '$postjson[celular]', distancia = '$postjson[distancia]', dataInscricao = '$dataSalvar', subCategoria = '$postjson[subCategoria]'");

        if($query){

            $result = json_encode(
                array(
                    'status' => 201,
                    'mensagem'=> "Candidato salvo com sucesso."
                )
            );
        }
        else {
            $result = json_encode(
                array(
                    'status' => 503,
                    'mensagem'=> "Não foi possivel lhe inscrever.<br>Tente novamente."
                )
            );	
        }

        echo $result;
    }
	
    else if($postjson['requisicao'] == 'verCandidato'){
        $query = mysqli_query($mysqli, "select * from corridaDB where cpf = '$postjson[cpf]'");
            while($row = mysqli_fetch_array($query)){
                $dados[] = array(
                    'id' => $row['id'],
                    'dataNascimento' => $row['dataNascimento'],
                    'nome' => $row['nome'],
                    'sexo' => $row['sexo'],
                    'categoria' => $row['categoria'],
                    'cpf' => $row['cpf'],
                    'cidade' => $row['cidade'],
                    'equipe' => $row['equipe'],
                    'celular' => $row['celular'],
                    'distancia' => $row['distancia'],
                    'subCategoria' => $row['subCategoria'],
                    'dataInscricao' => $row['dataInscricao'],
                    );
                    break;
            }
    
        if($query && $dados != null){
            $result = json_encode(
                array(
                    'status'=> 200,
                    'dados' => $dados,
                    'mensagem' => "Candidato encontrado com sucesso"
                )
            );
        }
        else if($query && $dados == null){
            $result = json_encode(
                array(
                    'status'=> 404,
                    'mensagem' => "Candidato não encontrado."
                )
            );
        }
        else{
            $result = json_encode(
                array(
                    'status'=> 503,
                    'mensagem' => "Erro interno"
                )
            );
        }
        echo $result;
    
    }
?>