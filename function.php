<?php
$fullname = $_POST['fullname'];
$email = $_POST['email'];
$message = $_POST['message'];

$to = 'asusrogstrixyerevan2023@gmail.com';
$subject = 'New CV approach';
$body = "Name: $fullname\nEmail: $email\nMessage:\n$message";

$headers = array(
    'From: ' . $email,
    'Reply-To: ' . $email,
    'X-Mailer: PHP/' . phpversion()
);

$currentTime = time();
$lastSentTime = file_get_contents('last_sent_time.txt');
$ip = $_SERVER['REMOTE_ADDR'];

if ($lastSentTime && $ip === file_get_contents('last_sent_ip.txt') && $currentTime - $lastSentTime < 3600) {
    echo 'You have already sent a message within the past hour.';
} else {
    if (mail($to, $subject, $body, implode("\r\n", $headers))) {
        echo 'Email sent successfully';
        file_put_contents('last_sent_time.txt', $currentTime);
        file_put_contents('last_sent_ip.txt', $ip);
    } else {
        echo 'An error occurred while sending the email';
    }
}
?>
