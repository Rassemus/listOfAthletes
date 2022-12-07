-- Create new database
CREATE database urheilijat_kanta;
USE urheilijat_kanta;

-- Create new table
CREATE TABLE `urheilijat` (
	`id` INT(11) NOT NULL AUTO_INCREMENT,
	`etunimi` VARCHAR(50) NOT NULL COLLATE 'utf8mb4_general_ci',
	`sukunimi` VARCHAR(100) NOT NULL COLLATE 'utf8mb4_general_ci',
	`syntymavuosi` YEAR NOT NULL, 
	`kutsumanimi` VARCHAR(50) NOT NULL COLLATE 'utf8mb4_general_ci',
	`paino` DOUBLE NULL DEFAULT NULL,
	`www` VARCHAR(200) NULL DEFAULT NULL COLLATE 'utf8mb4_general_ci',
	`laji` VARCHAR(50) NOT NULL COLLATE 'utf8mb4_general_ci',
	`saavutukset` VARCHAR(100) NULL DEFAULT NULL COLLATE 'utf8mb4_general_ci',
	PRIMARY KEY (`id`) USING BTREE
)
COLLATE='utf8mb4_general_ci'
ENGINE=InnoDB
AUTO_INCREMENT=6
;

-- Populate "urheilijat" table
INSERT INTO urheilijat (etunimi,sukunimi,syntymavuosi,kutsumanimi,paino,www,laji,saavutukset)
VALUES ("Kalle","Palander",1977,"Kape",85,"https://fi.wikipedia.org/wiki/Kalle_Palander#/media/Tiedosto:Kalle_Palander_Schladming_2008.jpg","Alppihiihto", "MM Kultaa pujottelu, MM pronssi alppiyhdistetty");

INSERT INTO urheilijat (etunimi,sukunimi,syntymavuosi,kutsumanimi,paino,www,laji,saavutukset)
VALUES ("Kalle","Rovanperä",2000,"",78,"https://fi.wikipedia.org/wiki/Kalle_Rovanper%C3%A4#/media/Tiedosto:KalleRallySweden2020(2)_(cropped).jpg","Ralli", "Kaudella 2022 sijoitus: 1");

INSERT INTO urheilijat (etunimi,sukunimi,syntymavuosi,kutsumanimi,paino,www,laji,saavutukset)
VALUES ("Eldrick","Woods",1975,"Tiger",85,"https://fi.wikipedia.org/wiki/Tiger_Woods#/media/Tiedosto:TigerWoodsOct2011.jpg","AGolf", "The master tournament voitot: 1997,2001,2002,2005,2019. U.S Open voitot: 2000,2002,2008. The Open Championship voitot: 2000, 2005, 2006");

-- Create test user
CREATE USER 'sampleuser'@'localhost' IDENTIFIED BY 'oranges';
GRANT INSERT, UPDATE, DELETE, SELECT ON urheilijat TO 'sampleuser'@'localhost';
