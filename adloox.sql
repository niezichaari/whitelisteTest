-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 12, 2018 at 02:39 PM
-- Server version: 5.7.14
-- PHP Version: 5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `adloox`
--

-- --------------------------------------------------------

--
-- Table structure for table `tested_urls`
--

CREATE TABLE `tested_urls` (
  `id` int(11) NOT NULL,
  `url` varchar(1000) NOT NULL,
  `user_agent` varchar(500) NOT NULL,
  `date_time` datetime NOT NULL,
  `blocked` tinyint(1) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tested_urls`
--

INSERT INTO `tested_urls` (`id`, `url`, `user_agent`, `date_time`, `blocked`) VALUES
(55, 'adloox.com', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:61.0) Gecko/20100101 Firefox/61.0', '2018-05-12 16:38:18', 0),
(54, 'adloox.com', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:61.0) Gecko/20100101 Firefox/61.0', '2018-05-12 16:38:13', 0),
(53, 'adloox.com', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:61.0) Gecko/20100101 Firefox/61.0', '2018-05-12 16:38:08', 0),
(52, 'adloox.com', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:61.0) Gecko/20100101 Firefox/61.0', '2018-05-12 16:37:59', 0),
(51, 'adloox.fr', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:61.0) Gecko/20100101 Firefox/61.0', '2018-05-12 16:37:52', 0),
(50, 'adloox.fr', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:61.0) Gecko/20100101 Firefox/61.0', '2018-05-12 16:37:44', 0),
(49, 'google.fr', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:61.0) Gecko/20100101 Firefox/61.0', '2018-05-12 16:37:34', 0),
(48, 'google.fr', 'undefined', '2018-05-12 16:36:46', 0);

-- --------------------------------------------------------

--
-- Table structure for table `whiteliste`
--

CREATE TABLE `whiteliste` (
  `id` int(11) NOT NULL,
  `domain` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `whiteliste`
--

INSERT INTO `whiteliste` (`id`, `domain`) VALUES
(1, 'google.fr'),
(8, 'adloox.com'),
(7, 'adloox.fr');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tested_urls`
--
ALTER TABLE `tested_urls`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `whiteliste`
--
ALTER TABLE `whiteliste`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tested_urls`
--
ALTER TABLE `tested_urls`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=56;
--
-- AUTO_INCREMENT for table `whiteliste`
--
ALTER TABLE `whiteliste`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
