<?php
function update_igs($social, $fantasia, $cnpj, $cidade, $endereco, $numero, $bairro, $telefone, $telefone2, $telefone3, $id){
    include "../conexao.php";

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $sql = "UPDATE igs SET social='$social', fantasia='$fantasia', cnpj='$cnpj', cidade='$cidade', endereco='$endereco', numero='$numero', bairro='$bairro', telefone='$telefone', telefone2='$telefone2', telefone3='$telefone3' WHERE id='$id'";

    if ($conn->query($sql) === TRUE) {
        echo "Record updated successfully";
    } else {
        echo "Error updating record: " . $conn->error;
    }
    sleep(2);
    // header("Location: https://fortalconnect.com.br/os.html");
    $conn->close();
}