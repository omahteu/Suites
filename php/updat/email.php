<?php
function update_email($usuario, $senha, $smtp, $porta, $timeout, $email_destino, $email_contabilidade, $autenticacao, $id){
    include "../conexao.php";

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $sql = "UPDATE email SET usuario='$usuario', senha='$senha', smtp='$smtp', porta='$porta', timeout='$timeout', email_destino='$email_destino', email_contabilidade='$email_contabilidade', autenticacao='$autenticacao' WHERE id='$id'";

    if ($conn->query($sql) === TRUE) {
        echo "Record updated successfully";
    } else {
        echo "Error updating record: " . $conn->error;
    }
    sleep(2);
    // header("Location: https://fortalconnect.com.br/os.html");
    $conn->close();
}