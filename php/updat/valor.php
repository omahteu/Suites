<?php
function update_valor($valor_locacao, $v1h, $v2h, $v3h, $v4h, $v5h, $v6h, $id){
    include "../conexao.php";

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $sql = "UPDATE valor SET valor_locacao='$valor_locacao', v1h='$v1h', v2h='$v2h', v3h='$v3h', v4h='$v4h', v5h='$v5h', v6h='$v6h' WHERE id='$id'";

    if ($conn->query($sql) === TRUE) {
        echo "Record updated successfully";
    } else {
        echo "Error updating record: " . $conn->error;
    }
    sleep(2);
    // header("Location: https://fortalconnect.com.br/os.html");
    $conn->close();
}
