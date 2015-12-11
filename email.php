<?php

require_once "vendor/autoload.php";

$transport = Swift_SmtpTransport::newInstance('mail.gandi.net', 587);
$mailer = Swift_Mailer::newInstance($transport);

$transport->setUsername('chris@hawkr.io');
$transport->setPassword(trim(file_get_contents('.emailpass')));

$message = Swift_Message::newInstance();
$message->setSubject("Hawkr Contact Form");
$message->setTo(array("chris@hawkr.io" => "Chris Davison"));

if (filter_var($_REQUEST['email'], FILTER_VALIDATE_EMAIL))
{
	$message->setFrom(array($_REQUEST['email'] => $_REQUEST['name']));
}
else
{
	$message->setFrom(array("chris@hawkr.io" => "Chris Davison"));
}

$body = '<p>Hey Gaffer,</p><p>Someone just contacted us from the Hawkr website.</p><p>Here are the details:</p>';
$body .= '<p><b>Name:</b> ' . $_REQUEST['name'] . '</p>';
$body .= '<p><b>Email:</b> ' . $_REQUEST['email'] . '</p>';
$body .= '<p><b>Mobile:</b> ' . $_REQUEST['mobile'] . '</p>';
$body .= '<p><b>Message:</b> ' . $_REQUEST['message'] . '</p>';

$message->addPart($body, 'text/html');
$result = $mailer->send($message);

if ($result)
{
	header("Location: index.html?success");
}
else
{
	header("Location: index.html?fail");
}
