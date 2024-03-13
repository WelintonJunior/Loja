<?php

class ClassFuncionario
{

    public static function AddFuncionario($conn, $nome, $nascimento)
    {

        $sql = "INSERT INTO funcionarios values (DEFAULT, ?, ?)";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("ss", $nome, $nascimento);
        if ($stmt->execute()) {
            $stmt->close();
            return "Certo";
        } else {
            $stmt->close();
            return "Errado";
        }
    }
}
