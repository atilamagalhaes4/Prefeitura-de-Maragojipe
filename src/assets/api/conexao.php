<?PHP

date_default_timezone_set('America/Bahia');

define('BD', 'atilam03_maragojipe_db_ba');
define('USER', 'atilam03_administrador');
define('SENHA', '44029476Aa@');
define('HOST', 'localhost');
$mysqli = new mysqli(HOST, USER, SENHA, BD);
$mysqli->set_charset("utf8");

?>

