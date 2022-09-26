<?php

function update_cartao_credito($bandeira, $porcentagem, $id){
    include "../conexao.php";

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $sql = "UPDATE credito SET bandeira='$bandeira', porcentagem='$porcentagem' WHERE id='$id'";

    if ($conn->query($sql) === TRUE) {
        echo "Record updated successfully";
    } else {
        echo "Error updating record: " . $conn->error;
    }
    sleep(2);
    // header("Location: https://fortalconnect.com.br/os.html");
    $conn->close();
}

function altera_cartao_debito($bandeira, $porcentagem, $id){
    include "../conexao.php";

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $sql = "UPDATE debito SET bandeira='$bandeira', porcentagem='$porcentagem' WHERE id='$id'";

    if ($conn->query($sql) === TRUE) {
        echo "Record updated successfully";
    } else {
        echo "Error updating record: " . $conn->error;
    }
    sleep(2);
    // header("Location: https://fortalconnect.com.br/os.html");
    $conn->close();
}
