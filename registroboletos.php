<?php
//include 'conexion.php';

//hacer la conexion a la base de datos
$conexion=mysqli_connect("localhost","root",'',"sorteos_colorado");

//verificar la conexion a la base de datos
if ($conexion) {
  echo("conectado a la base de datos");
}

//recibir los datos de los botones y demas campos por ajax 
if (isset($_POST['idsBotones'])) {
  // Procesar los datos de Ajax
  $idsBotones = $_POST['idsBotones'];

  //verificar que en verdad $idbotones es un array
  if (is_array($idsBotones)) {
    $registrosInsertados = 0;

    // Recorrer los IDs de botones seleccionados y registrar un boleto para cada uno
    foreach ($idsBotones as $idBoton) {
      // Obtener los datos del formulario HTML
      $nombre = $_POST['nombre'];
      $apellido = $_POST['apellido'];
      $celular = $_POST['celular'];
      $correo = $_POST['correo'];
      $estado = $_POST['estado'];
      $estatus = 'apartado';

      // Insertar el registro en la base de datos
      $query = "INSERT INTO infoboletos (idboleto, numboleto, nombre, apellido, celular, correo, estado, horas_apartada, estatus) VALUES ('', '$idBoton', '$nombre', '$apellido', '$celular', '$correo', '$estado', NOW(), '$estatus')";
      if (mysqli_query($conexion, $query)) {
        $registrosInsertados++;
      } else {
        echo "Error al insertar el registro para el botón $idBoton: " . mysqli_error($conexion);
      }
    }

    // Imprimir un mensaje de éxito
    echo "Se han insertado $registrosInsertados registros en la base de datos.";

  } else {
    echo "Error: los IDs de botones no son un arreglo";
  }
  
} else {
  // Los datos de Ajax no se recibieron, mostrar un mensaje de error
  //echo "Error: no se recibieron los datos de Ajax";
}
  

mysqli_close($conexion);

?>