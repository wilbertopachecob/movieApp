-- MySQL dump 10.13  Distrib 8.0.23, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: movies-app
-- ------------------------------------------------------
-- Server version	8.0.23

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `comment_likes`
--

DROP TABLE IF EXISTS `comment_likes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comment_likes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `comment_id` int NOT NULL,
  `user_id` int NOT NULL,
  `movie_id` int NOT NULL,
  `comment_like` tinyint(1) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `comment_id` (`comment_id`) /*!80000 INVISIBLE */,
  KEY `movie_id` (`movie_id`),
  CONSTRAINT `comment_id_fk` FOREIGN KEY (`comment_id`) REFERENCES `comments` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `movie_id_fk` FOREIGN KEY (`movie_id`) REFERENCES `movies` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comment_likes`
--

LOCK TABLES `comment_likes` WRITE;
/*!40000 ALTER TABLE `comment_likes` DISABLE KEYS */;
INSERT INTO `comment_likes` VALUES (1,15,1,4,1,'2021-03-25 04:01:43','2021-03-25 04:01:43'),(2,24,1,4,0,'2021-03-25 04:20:05','2021-03-25 04:20:05'),(3,32,1,4,0,'2021-03-25 20:04:01','2021-03-25 20:04:01'),(4,33,1,4,1,'2021-03-25 20:20:40','2021-03-25 20:20:40'),(5,29,1,4,1,'2021-03-29 20:01:13','2021-03-29 20:01:13'),(6,30,1,4,0,'2021-03-29 20:06:00','2021-03-29 20:06:00'),(7,37,1,4,0,'2021-03-29 20:33:03','2021-03-29 20:33:03'),(8,39,1,4,1,'2021-03-29 20:33:20','2021-03-29 20:33:20'),(9,23,1,2,1,'2021-03-30 00:19:29','2021-03-30 00:19:29'),(10,40,1,2,0,'2021-03-30 00:20:56','2021-03-30 00:20:56'),(11,41,1,4,1,'2021-03-30 01:50:05','2021-03-30 01:50:05');
/*!40000 ALTER TABLE `comment_likes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comments`
--

DROP TABLE IF EXISTS `comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comments` (
  `id` int NOT NULL AUTO_INCREMENT,
  `content` longtext NOT NULL,
  `movie_id` int NOT NULL,
  `user_id` int NOT NULL,
  `parent_id` int DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comments`
--

LOCK TABLES `comments` WRITE;
/*!40000 ALTER TABLE `comments` DISABLE KEYS */;
INSERT INTO `comments` VALUES (15,'Four',4,1,NULL,'2021-03-22 21:47:22','2021-03-22 21:47:22'),(21,'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',5,1,NULL,'2021-03-22 21:55:59','2021-03-22 21:55:59'),(23,'Hello',2,1,NULL,'2021-03-23 22:43:17','2021-03-23 22:43:17'),(24,'dfg sdfg s',4,1,NULL,'2021-03-24 04:09:01','2021-03-24 04:09:01'),(29,'Reply',4,1,24,'2021-03-24 04:45:04','2021-03-24 04:45:04'),(30,'dfgbsfdghbdf',4,1,15,'2021-03-24 04:48:09','2021-03-24 04:48:09'),(32,'stnyjyuk tuikl tuil yolyi',4,1,15,'2021-03-24 05:09:49','2021-03-24 05:09:49'),(33,'Another one',4,1,NULL,'2021-03-24 15:17:34','2021-03-24 15:17:34'),(37,'tyunmtimtuik tui t',4,1,33,'2021-03-24 15:19:06','2021-03-24 15:19:06'),(38,'srthnetyjry k yik tiuk tui ',4,1,37,'2021-03-24 15:19:24','2021-03-24 15:19:24'),(39,'svrth ruyj tuil yiol yiol yiol yiol yio, tkut jh fgnf',4,1,37,'2021-03-24 15:19:32','2021-03-24 15:19:32'),(40,'Yo hello',2,1,NULL,'2021-03-30 00:20:47','2021-03-30 00:20:47'),(41,'Mical Reply\n',4,1,30,'2021-03-30 01:49:57','2021-03-30 01:49:57');
/*!40000 ALTER TABLE `comments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `movie_ratings`
--

DROP TABLE IF EXISTS `movie_ratings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `movie_ratings` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `movie_id` int NOT NULL,
  `rating_id` int NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movie_ratings`
--

LOCK TABLES `movie_ratings` WRITE;
/*!40000 ALTER TABLE `movie_ratings` DISABLE KEYS */;
INSERT INTO `movie_ratings` VALUES (1,1,4,2,'2021-03-23 20:16:48','2021-03-30 01:50:08'),(3,1,2,3,'2021-03-23 22:39:17','2021-03-23 22:39:17'),(4,1,3,5,'2021-03-24 03:57:43','2021-03-24 03:57:43'),(5,1,5,4,'2021-03-24 03:57:54','2021-03-24 03:57:54'),(6,1,6,3,'2021-03-24 03:57:57','2021-03-24 03:57:57'),(7,1,6,2,'2021-03-24 03:57:59','2021-03-24 03:57:59');
/*!40000 ALTER TABLE `movie_ratings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `movies`
--

DROP TABLE IF EXISTS `movies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `movies` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `plot` longtext NOT NULL,
  `genre` varchar(45) NOT NULL,
  `cast` longtext NOT NULL,
  `language` varchar(100) NOT NULL,
  `poster` varchar(2083) NOT NULL,
  `director` varchar(100) NOT NULL,
  `country` varchar(45) NOT NULL,
  `released` date NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movies`
--

LOCK TABLES `movies` WRITE;
/*!40000 ALTER TABLE `movies` DISABLE KEYS */;
INSERT INTO `movies` VALUES (2,'Home Alone dfghdf','An eight-year-old troublemaker must protect his house from a pair of burglars when he is accidentally left home alone by his family during Christmas vacation.','Comedy','Macaulay Culkin, Joe Pesci, Daniel Stern, John Heard','English','https://m.media-amazon.com/images/M/MV5BMzFkM2YwOTQtYzk2Mi00N2VlLWE3NTItN2YwNDg1YmY0ZDNmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg','Chris Columbus','United States','1990-11-16','2021-03-04 04:06:58','2021-03-04 19:11:14'),(3,'Spider-Man: Far from Home','Following the events of Avengers: Endgame (2019), Spider-Man must step up to take on new threats in a world that has changed forever.','Action','Tom Holland, Samuel L. Jackson, Jake Gyllenhaal, Marisa Tomei','Italian','https://m.media-amazon.com/images/M/MV5BMGZlNTY1ZWUtYTMzNC00ZjUyLWE0MjQtMTMxN2E3ODYxMWVmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg','Jon Watts','United States','2019-07-02','2021-03-04 04:10:19','2021-03-04 04:10:19'),(4,'Home Alone 2: Lost in New York','One year after Kevin McCallister was left home alone and had to defeat a pair of bumbling burglars, he accidentally finds himself stranded in New York City - and the same criminals are not far behind.','Family','Macaulay Culkin, Joe Pesci, Daniel Stern, Catherine O\'Hara','English','https://m.media-amazon.com/images/M/MV5BNDI1MzM0Y2YtYmIyMS00ODE3LTlhZjEtZTUyNmEzMTNhZWU5XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg','Chris Columbus','United States','1992-11-20','2021-03-04 04:12:55','2021-03-04 04:12:55'),(5,'Home','An alien on the run from his own people makes friends with a girl. He tries to help her on her quest, but can be an interference.','Animation','Jim Parsons, Rihanna, Steve Martin, Jennifer Lopez','French','https://m.media-amazon.com/images/M/MV5BMjExOTQ4MDMyMV5BMl5BanBnXkFtZTgwMTE3NDM2MzE@._V1_SX300.jpg','Tim Johnson','United States','2015-03-27','2021-03-04 04:15:53','2021-03-04 04:15:53'),(6,'Sweet Home Alabama','A young woman who\'s reinvented herself as a New York City socialite must return home to Alabama to obtain a divorce from her husband, after seven years of separation.','Comedy','Reese Witherspoon, Josh Lucas, Patrick Dempsey, Candice Bergen','English','https://m.media-amazon.com/images/M/MV5BMjEwMjIwMDQ4OV5BMl5BanBnXkFtZTYwNzc3OTY3._V1_SX300.jpg','Andy Tennant','United States','2002-09-27','2021-03-04 04:18:14','2021-03-04 04:18:14'),(12,'Et eum ex mollit qui','Aut tempora vitae et','Eligendi aliqua Max','Autem quisquam vitae','Urdu','https://www.gilixyn.tv','Esse dolorem cupidi','Colombia','1983-04-26','2021-03-04 19:10:50','2021-03-04 19:10:50'),(13,'Magnam non sunt quis','Aut labore sed quisq','Aut tenetur dolores ','Ullamco aut consequa','Tatar','https://www.cynohebetuzis.org','Dolor laborum rem in','Bosnia and Herzegovina','2004-02-19','2021-03-22 18:48:35','2021-03-22 18:48:35');
/*!40000 ALTER TABLE `movies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ratings`
--

DROP TABLE IF EXISTS `ratings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ratings` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `name_UNIQUE` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ratings`
--

LOCK TABLES `ratings` WRITE;
/*!40000 ALTER TABLE `ratings` DISABLE KEYS */;
INSERT INTO `ratings` VALUES (2,'Bad'),(4,'Good'),(5,'Great'),(3,'Okay'),(1,'Terrible');
/*!40000 ALTER TABLE `ratings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(10) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `name_UNIQUE` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'admin'),(2,'user');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `email` varchar(254) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `role_id` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Admin','admin@gmail.com','$2b$10$tD9auiy3wLC3/94nYHhhZ.ia1123.Lg0elavJ47e1XVUh1/yKSp4i','2021-03-03 03:46:39','2021-03-03 03:46:39',1);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-03-29 20:56:14
