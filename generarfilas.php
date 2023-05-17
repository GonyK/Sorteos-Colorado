<?php

include 'conexion.php';

$datetime = date_create()->format('Y-m-d H:i:s');
$filas=1000;

for($numboletos=1;$numboletos<=$filas;$numboletos++)
{
    //$query="INSERT INTO infoboletos(idboleto,numboleto,nombre,apellido,celular,correo,estado,estatus) values('','1','ulisses','gaspar','6671871590','ulisses@gmail','sinaloa','apartado')";
    $query="INSERT INTO infoboletos(idboleto,numboleto,nombre,apellido,celular,correo,estado,horas_apartada,estatus) values('','$numboletos','','','','','','$datetime','')";
    $resultado=$conexion->query($query);
   // $numboletos++;
}

if ($resultado == TRUE) {
    echo "Nuevos registros ingresados correctamente";
} else {
    echo "Error: " . $query . "<br>" . $conexion->error;
}


?>
