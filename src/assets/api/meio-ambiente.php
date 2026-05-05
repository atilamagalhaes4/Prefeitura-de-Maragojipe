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

    
    if($postjson['requisicao'] == 'pesquisarCoisasAmbiente'){
        $query = mysqli_query($mysqli, "SELECT * FROM `meio-ambiente`");
            while($row = mysqli_fetch_array($query)){
                $dados[] = array(
                    'id' => $row['id'],
                    'titulo' => $row['titulo'],
                    'categoria' => $row['categoria'],
                    'link' => $row['link']
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