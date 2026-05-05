<?PHP


// --- CORS CONFIG ---
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');
header('Content-Type: application/json; charset=utf-8');

// Se for requisição OPTIONS (preflight), apenas responde 200 OK e sai
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// --- CONEXÃO ---
include('conexao.php');

// --- LENDO O CORPO DA REQUISIÇÃO ---
$postjson = json_decode(file_get_contents('php://input'), true);

    if($postjson['requisicao'] == 'pegarAgenda'){ // selecione todos de banner
        $query = mysqli_query($mysqli, "select * from agendaPrefeito order by id desc");
            while($row = mysqli_fetch_array($query)){
                $dados[] = array(
                    'id' => $row['id'],
                    'dia' => $row['dia'],
                    'horario' => $row['horario'],
                    'local' => $row['local'],
                    'titulo' => $row['titulo'],
                    'descricao' => $row['descricao'],
                    );
            }
    
        if($query){
            $result = json_encode(
                array(
                    'status'=>200,
                    'mensagem'=>"Query feito com sucesso.",
                    'resultado'=>$dados
                )
            );
        }
        else{
            $result = json_encode(
                array(
                    'status'=>503,
                    'mensagem'=>"Dados invalidos."
                )
            );
        }
        echo $result;
    
    }
    
    else if($postjson['requisicao'] == 'salvarAgenda'){

        $query = mysqli_query($mysqli, "INSERT INTO agendaPrefeito SET dia = '$postjson[dia]', 
        horario = '$postjson[horario]', local = '$postjson[local]', titulo = '$postjson[titulo]',
        descricao = '$postjson[descricao]'");

        if($query){

            $result = json_encode(
                array(
                    'status' => 200,
                    'mensagem'=> "Mensagem enviada com sucesso."
                )
            );
        }
        else {
            $result = json_encode(
                array(
                    'status' => 503,
                    'mensagem'=> "Nao foi possivel enviar a mensagem<br>Tente novamente."
                )
            );	
        }

        echo $result;
    }
        else  if($postjson['requisicao'] == 'deletarAgenda'){
    
    
        $query = mysqli_query($mysqli, "DELETE FROM agendaPrefeito WHERE '$postjson[id]' = id");
    
    
        if($query){
    
            $result = json_encode(
                array(
                    'status' => 200,
                    'mensagem'=> "Agenda apagado com sucesso."
                )
            );
    
        }
        else {
            $result = json_encode(
                array(
                    'status' => 503,
                    'mensagem'=> "Nao foi possivel apagar a agenda, tente novamente."
                )
            );
        }
    
        echo $result;
    }
?>