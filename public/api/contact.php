<?php
header("Access-Control-Allow-Origin: *"); // EM DESENVOLVIMENTO. Para produção, restrinja ao seu domínio.
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json; charset=UTF-8");

// Se for uma requisição OPTIONS (preflight), apenas retorne OK.
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Verifica se o método da requisição é POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Pega o corpo da requisição (JSON) e decodifica
    $data = json_decode(file_get_contents("php://input"));

    // Validação básica dos dados (faça uma validação mais robusta)
    if (empty($data->name) || empty($data->email) || empty($data->subject) || empty($data->message)) {
        http_response_code(400); // Bad Request
        echo json_encode(["success" => false, "message" => "Todos os campos são obrigatórios."]);
        exit;
    }

    if (!filter_var($data->email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode(["success" => false, "message" => "Formato de email inválido."]);
        exit;
    }

    // Dados do email
    $to = "seuemail@seudominio.com"; // <<< COLOQUE SEU EMAIL AQUI
    $email_subject = "Nova Mensagem do Site (LD Web Solutions): " . htmlspecialchars($data->subject);
    
    $email_body = "Você recebeu uma nova mensagem do formulário de contato do seu site.\n\n";
    $email_body .= "Nome: " . htmlspecialchars($data->name) . "\n";
    $email_body .= "Email: " . htmlspecialchars($data->email) . "\n";
    $email_body .= "Assunto: " . htmlspecialchars($data->subject) . "\n";
    $email_body .= "Mensagem:\n" . htmlspecialchars($data->message) . "\n";

    // Cabeçalhos do email
    $headers = "From: nao-responda@seudominio.com\n"; // <<< Use um email do seu domínio
    $headers .= "Reply-To: " . htmlspecialchars($data->email) . "\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\n"; // Garante acentuação correta
    $headers .= "X-Mailer: PHP/" . phpversion();

    // Tenta enviar o email
    if (mail($to, $email_subject, $email_body, $headers)) {
        http_response_code(200); // OK
        echo json_encode(["success" => true, "message" => "Mensagem enviada com sucesso!"]);
    } else {
        http_response_code(500); // Internal Server Error
        // Logar o erro real do servidor em um arquivo de log seria ideal aqui
        echo json_encode(["success" => false, "message" => "Falha ao enviar a mensagem. Problema no servidor."]);
    }
} else {
    // Se não for POST, método não permitido
    http_response_code(405); // Method Not Allowed
    echo json_encode(["success" => false, "message" => "Método não permitido."]);
}
?>