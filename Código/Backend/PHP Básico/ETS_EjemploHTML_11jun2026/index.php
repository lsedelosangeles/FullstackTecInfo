<?php 
    $dato = 15;
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>El dato vale: <?php echo("$dato"); ?></h1>
    <p>Este valor, 
        <?php 
        if ($dato < 20) {
            echo(" es un valor chiquito...");
        } else {
            echo(" no es tan poquito...");
        }
        
         ?>
    </p>
</body>
</html>