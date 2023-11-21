
 <?php
require '../db.php';


if ($_SERVER['REQUEST_METHOD'] === 'POST') {


    $conteudo = file_get_contents("php://input");
    $dados = json_decode($conteudo, true);
    $id = $dados['id'];
    $nome = $dados['nome'];
    $cpf = $dados['cpf'];
    $rendimento = $dados['rendimento'];
    $porcentagem= $dados['porcentagem'];
    $aliquota = $dados['aliquota'];
   
    

    $inseriu= mysqli_query($conexao,"INSERT into mafiair values($id,'$nome','$cpf','$rendiemnto','$porcentagem','$aliquota')")or die("Erro ao tentar consultar");
    // $inseriu = mysqli_query($conexao, $query) or die("Não inserido");

}
?>
