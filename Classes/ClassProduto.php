<?php

class ClassProduto
{

    public static function AddProduto($conn, $item, $quantidade, $und)
    {
        $sql = "INSERT INTO produtos values(DEFAULT, ?, ?, ?)";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("sii", $item, $quantidade, $und);
        if ($stmt->execute()) {
            $stmt->close();
            return "Certo";
        } else {
            $stmt->close();
            return "Errado";
        }
    }

    public static function SearchProduto($conn)
    {
        $sql = "SELECT * FROM produtos";
        $stmt = $conn->prepare($sql);
        if ($stmt->execute()) {
            $result = $stmt->get_result();
            $resultado = $result->fetch_all(MYSQLI_ASSOC);
            return $resultado;
        } else {
            return "Erro";
        }
    }
}
