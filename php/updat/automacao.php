<?php
function update_automacao($suite, $placa, $rele, $id){
    include "../conexao.php";

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $sql = "UPDATE automacao SET suite='$suite', placa='$placa', rele='$rele' WHERE id='$id'";

    if ($conn->query($sql) === TRUE) {
        echo "Record updated successfully";
    } else {
        echo "Error updating record: " . $conn->error;
    }
    sleep(2);
    // header("Location: https://fortalconnect.com.br/os.html");
    $conn->close();
}
?>
