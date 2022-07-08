<?PHP

date_default_timezone_set('America/Bahia');

define('BD', 'serrmu');
define('USER', 'atila4');
define('SENHA', '44029476a'); 
define('HOST', 'mysql742.umbler.com');
$mysqli = new mysqli(HOST, USER, SENHA, BD);
$mysqli->set_charset("utf8");

/*

<?PHP


date_default_timezone_set('America/Sao_Paulo');

define('BD', 'prefeituradb');
define('USER', 'root');
define('SENHA', ''); 
define('HOST', '127.0.0.1');
$mysqli = new mysqli(HOST, USER, SENHA, BD);
	
?>
 */
?>

