<?php

include "conn.php";
include "./Classes/ClassFuncionario.php";
include "./Classes/ClassProduto.php";

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: X-Requested-With, Content-Type, Accept, Origin, Authorization');

$ClassFuncionario = new ClassFuncionario();
$ClassProduto = new ClassProduto();

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    exit;
}


if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    if (isset($data['acao'])) {
        if ($data['acao'] === "ADD_PRODUTO") {
            $item = $data['item'];
            $quantidade = $data['quantidade'];
            $und = $data['und'];
            $resultado = $ClassProduto->AddProduto($conn, $item, $quantidade, $und);
            echo json_encode(['resultado' => $resultado]);
        } else if ($data['acao'] === "SEARCH_PRODUTO") {
            $resultado = $ClassProduto->SearchProduto($conn);
            echo json_encode($resultado);
        } else if ($data['acao'] === "ADD_FUNCIONARIO") {
            $nome = $data['nome'];
            $nascimento = $data['nascimento'];
            $resultado = $ClassFuncionario->AddFuncionario($conn, $nome, $nascimento);
            echo json_encode(['resultado' => $resultado]);
        }
    }
}
