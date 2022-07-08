<?PHP

date_default_timezone_set('America/Bahia');

define('BD', 'maragojipe_db_ba');
define('USER', 'atila');
define('SENHA', '44029476a'); 
define('HOST', 'mysql465.umbler.com');
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

