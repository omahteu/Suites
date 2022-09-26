<?php
include "../conexao.php";


if ($conn->connect_error) {
    echo "$conn->connect_error";
    die("Connection Failed : " . $conn->connect_error);
} else {
    $stmt = $conn->prepare("insert into categoria(categoria) values(?)");
    $stmt->bind_param("s", $categoria);
    $execval = $stmt->execute();
    sleep(2);
    // header("Location: https://fortalconnect.com.br/cadastro.html");
    $stmt->close();
    $conn->close();
}
