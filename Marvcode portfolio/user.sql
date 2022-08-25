CREATE TABLE `users` (
`id` INT( 10 ) NOT NULL AUTO_INCREMENT PRIMARY KEY ,
`username` VARCHAR( 32 ) NOT NULL ,
`password` VARCHAR( 32 ) NOT NULL ,
`email` TEXT NOT NULL ,
`hash` VARCHAR( 32 ) NOT NULL ,
`active` INT( 1 ) NOT NULL DEFAULT '0'
) ENGINE = MYISAM ;