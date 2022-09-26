<?php
include "../conexao.php";

if($conn->connect_error){
    echo "$conn->connect_error";
    die("Connection Failed : ". $conn->connect_error);
} else {
    $stmt = $conn->prepare("insert into produto(codigo, descricao, valor_unitario, quantidade, categoria, data) values(?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("ssssss", $codigo, $descricao, $valor_unitario, $quantidade, $categoria, $data);
    $execval = $stmt->execute();
    sleep(2);
    // header("Location: https://fortalconnect.com.br/cadastro.html");
    $stmt->close();
    $conn->close();
}
