CREATE DATABASE cmsc100ef2l;

CREATE TABLE IF NOT EXISTS `degree` (
  `degree_id` int(11) NOT NULL AUTO_INCREMENT,
  `degree_code` varchar(6) DEFAULT NULL,
  `description` varchar(30) DEFAULT NULL,
  `total_units` decimal(4,0) NOT NULL,
  PRIMARY KEY (`degree_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

INSERT INTO `degree` (`degree_id`, `degree_code`, `description`, `total_units`) VALUES
(1, 'BSCS', 'BS Computer Science', 144),
(3, 'BSSTAT', 'BS Statistics', 0);

CREATE TABLE IF NOT EXISTS `student` (
  `studentno` varchar(10) NOT NULL,
  `name` varchar(100) NOT NULL,
  `birthday` date DEFAULT NULL,
  PRIMARY KEY (`studentno`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `student` (`studentno`, `name`, `birthday`) VALUES
('2008-00196', 'Bautista, Kristine', '1991-05-15');
