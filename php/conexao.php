<?php
	$servidor = "us125-cp.valueserver.com.br";
	$usuario = "fortal_adm_garantias";
	$senha = "{xwl&EGy]o(#";
	$dbname = "fortal_garantias";
    $port = 3306;

    $conn = new mysqli($servidor, $usuario, $senha, $dbname);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    } else {
       echo "Conexao Realizada";
    }
?>
