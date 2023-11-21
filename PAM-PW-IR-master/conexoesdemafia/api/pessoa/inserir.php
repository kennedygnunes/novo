<!-- Criar uma nova pessoa. -->
 <?php
require '../db.php';

// Verifique se a solicitação é um POST com dados JSON
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'));

    // Valide os dados (exemplo básico)
    if (empty($data->nome) || empty($data->idade)) {
        http_response_code(400); // Bad Request
        echo json_encode(array("message" => "Dados incompletos."));
    } else {
        $nome = $data->nome;
        $idade = $data->idade;

        // Inserir os dados no banco de dados
        $sql = "INSERT INTO pessoa (nome, idade) VALUES ('$nome', $idade)";

        if ($conn->query($sql) === TRUE) {
            http_response_code(201); // Created
            echo json_encode(array("message" => "Pessoa criada com sucesso."));
        } else {
            http_response_code(500); // Internal Server Error
            echo json_encode(array("message" => "Erro ao criar pessoa: " . $conn->error));
        }
    }
} else {
    http_response_code(405); // Method Not Allowed
    echo json_encode(array("message" => "Método não permitido."));
}
?>
