<?php
include "../conexao.php";


if ($conn->connect_error) {
    echo "$conn->connect_error";
    die("Connection Failed : " . $conn->connect_error);
} else {
    $stmt = $conn->prepare("insert into automacao(suite, placa, rele) values(?, ?, ?)");
    $stmt->bind_param("sss", $suite, $placa, $rele);
    $execval = $stmt->execute();
    sleep(2);
    // header("Location: https://fortalconnect.com.br/cadastro.html");
    $stmt->close();
    $conn->close();
}
