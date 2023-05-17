<?php

//$hostname='localhost';
//$database='sorteos_colorado';
//$username='root';
//$password='';

//$conexion=mysqli_connect($hostname,$username,$password,$database);
//if(!$conexion){
  //  echo "Lo sentimos, el sitio web esta experimentado problemas";
//}
$conexion=mysqli_connect("localhost","root",'',"sorteos_colorado");
if($conexion){
  echo "si se conecto";
}
?>