
CREATE DATABASE IF NOT EXISTS pollos CHARACTER SET utf8 COLLATE utf8_general_ci;
USE pollos;
    CREATE TABLE pollos(
        id INT PRIMARY KEY AUTO_INCREMENT NOT NULL, 
        nombre VARCHAR(40) NOT NULL, 
        img VARCHAR(20) NOT NULL
    );

        INSERT INTO pollos(nombre, img) VALUES
        ("alitas broaster","alitas.jpg"),
        ("pechuga broaster","pechuga.jpg"),
        ("alitas Especial", "alitas_Especial.jpg"),
        ("piernitas", "piernitas.jpg"),
        ("broaster completo", "broaster_Completo.jpg"),
        ("piernas especiales", "piernitas.jpg");

