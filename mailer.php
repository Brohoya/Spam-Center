<?php

	$data['mailDuSpammeur'] = $_POST['mail'];
	$data['objet'] = $_POST['objet'];
	$data['message'] = $_POST['message'];

	$header="MIME-Version: 1.0\r\n";
	$header.='From:"estien.com"<support@estia.com>'."\n";
	$header.='Content-Type:text/html; charset="uft-8"'."\n";
	$header.='Content-Transfer-Encoding: 8bit';

	mail($data['mailDuSpammeur'], $data['objet'],$data['message'],$header);
?>