/*
SQLyog Community v12.5.1 (64 bit)
MySQL - 10.1.19-MariaDB : Database - pickeringtoyota_toyota
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`pickeringtoyota_toyota` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `pickeringtoyota_toyota`;

/*Table structure for table `tbl_chat_sessions` */

DROP TABLE IF EXISTS `tbl_chat_sessions`;

CREATE TABLE `tbl_chat_sessions` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `session_id` VARCHAR(256) NOT NULL,
  `session_ip` VARCHAR(32) DEFAULT NULL,
  `is_online` TINYINT(1) NOT NULL DEFAULT '0',
  `session_email` VARCHAR(128) DEFAULT NULL,
  `session_name` VARCHAR(128) DEFAULT NULL,
  `create_time` VARCHAR(21) DEFAULT NULL,
  `update_time` VARCHAR(21) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=INNODB DEFAULT CHARSET=utf8;

/*Data for the table `tbl_chat_sessions` */

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

/*
SQLyog Community v12.5.1 (64 bit)
MySQL - 10.1.19-MariaDB : Database - pickeringtoyota_toyota
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`pickeringtoyota_toyota` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `pickeringtoyota_toyota`;

/*Table structure for table `tbl_chat_messges` */

DROP TABLE IF EXISTS `tbl_chat_messges`;

CREATE TABLE `tbl_chat_messges` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `chat_from` INT(11) NOT NULL,
  `chat_to` INT(11) NOT NULL,
  `chat_message` TEXT NOT NULL,
  `chat_time` VARCHAR(21) NOT NULL,
  `chat_type` VARCHAR(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=INNODB DEFAULT CHARSET=utf8;

/*Data for the table `tbl_chat_messges` */

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
