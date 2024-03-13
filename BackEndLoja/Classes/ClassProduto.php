<?php

class ClassProduto
{

    public static function AddProduto($conn, $item, $quantidade, $und)
    {
        $sql = "INSERT INTO produtos values(DEFAULT, ?, ?, ?)";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("sii", $item, $quantidade, $und);
        if ($stmt->execute()) {
            return "Certo";
        } else {
            return "Errado";
        }
    }
}
