
step 1: create mysql db with the help of following query

CREATE TABLE `login` ( `id` int(11) NOT NULL AUTO_INCREMENT, `firstname` varchar(30) DEFAULT NULL, `lastname` varchar(30) DEFAULT NULL, `email` varchar(50) NOT NULL, `password` varchar(128) NOT NULL, PRIMARY KEY (`id`), UNIQUE KEY `username` (`email`), UNIQUE KEY `email` (`email`) ) ENGINE=MyISAM AUTO_INCREMENT=13 DEFAULT CHARSET=utf8

step 2: open signup.html
step 3: submit the form
step 4: fill login form with correct credintional