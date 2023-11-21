<?php
    require './conexoesdemafia/api/db.php';
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type");

    $conexao = conectar();
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $conteudo = file_get_contents("php://input");
    $dados = json_decode($conteudo, true);
    $id = $dados['id'];
    $nome = $dados['nome'];
    $rendimento = $dados['rendimento'];
    $cpf = $dados['cpf'];
    

    $inseriu= mysqli_query($conexao,"INSERT into mafiair values($id,'$nome','$rendimento','$cpf')")or die("Erro ao tentar consultar");
    // $inseriu = mysqli_query($conexao, $query) or die("Não inserido");

   
    fecharConexao($conexao);


    }

    if ($_SERVER['REQUEST_METHOD'] === 'GET') {

        $sql = "SELECT * FROM mafiair";
    $res = mysqli_query($conexao, $sql) or die("Erro ao tentar consultar");

    $item = $res->fetch_all();
    echo json_encode($item);



    }


?>