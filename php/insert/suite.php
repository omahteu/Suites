<?php
include "../conexao.php";

if($conn->connect_error){
    echo "$conn->connect_error";
    die("Connection Failed : ". $conn->connect_error);
} else {
    $stmt = $conn->prepare("insert into suite(codigo, numero, nome, horas_locacao, tolerancia, cobranca, excedente) values(?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("sssssss", $codigo, $numero, $nome, $horas_locacao, $tolerancia, $cobranca, $excedente);
    $execval = $stmt->execute();
    sleep(2);
    // header("Location: https://fortalconnect.com.br/cadastro.html");
    $stmt->close();
    $conn->close();
}
