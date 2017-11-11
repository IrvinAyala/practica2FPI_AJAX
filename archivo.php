<?php
$sUsuario = $_POST["txtUsuario"];
$sPass = $_POST["txtPass"];
$sResponse = "";

if ($sUsuario == "admin" && $sPass == "admin") {
  $sResponse = "Acesso concedido";
}else {
  $sResponse = "Acceso denegado";
}

header('Content-type: application/json; charset=utf-8');
echo json_encode($sResponse);
 ?>
