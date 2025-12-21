<?php
// Simple demo mailer — haqiqiy serverda mail() ishlashi konfiguratsiyaga bog‘liq.
// Demo uchun faqat xabarni qabul qilishni tasdiqlaymiz.a
header('Content-Type: application/json');
function clean($v){
  return htmlspecialchars(trim($v ?? ''), ENT_QUOTES, 'UTF-8');
}
$name = clean($_POST['name'] ?? '');
$email = clean($_POST['email'] ?? '');
$message = clean($_POST['message'] ?? '');
if ($name === '' || $email === '' || $message === '') {
  http_response_code(400);
  echo json_encode(['ok' => false, 'msg' => 'Barcha maydonlarni to‘ldiring.']);
  exit;
}
// Bu yerda mail() yoki DB ga yozishni qo‘shishingiz mumkin.
// mail('info@urgdu.uz', 'Aloqa formasi', "Ism: $name\nEmail: $email\nXabar:\n$message");
echo json_encode(['ok' => true, 'msg' => 'Xabaringiz qabul qilindi. Tez orada javob beramiz.']);
