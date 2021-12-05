CREATE DATABASE  IF NOT EXISTS `servicos`;

use `servicos`;


CREATE TABLE `tecnico`(
   `tec_codigo` int NOT NULL AUTO_INCREMENT,  
  `tec_nome` varchar(20) DEFAULT NULL,  
  `aut_apelido` varchar(10) DEFAULT NULL,
  `tec_sexo` char(1) DEFAULT NULL,
  `tec_contratado` int, 
  `tec_dtnascimento` date,  
  PRIMARY KEY (`tec_codigo`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

CREATE TABLE `ordemservico` (
  `ord_codigo` int NOT NULL AUTO_INCREMENT,  
  `ord_tipo` varchar(10) DEFAULT NULL,
  `ord_marca` varchar(10) DEFAULT NULL,
  `ord_nroserie` varchar(15) DEFAULT NULL,
  `ord_defeito` varchar(15) DEFAULT NULL,  
  `tec_codigo` int NOT NULL,
  PRIMARY KEY (`ord_codigo`),
  CONSTRAINT `fk_ordemservico_tecnico` FOREIGN KEY (`tec_codigo`) REFERENCES `tecnico` (`tec_codigo`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;