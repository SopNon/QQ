SET NAMES UTF8;
DROP DATABASE IF EXISTS QQ;
CREATE DATABASE QQ CHARSET=UTF8;
USE QQ;

CREATE TABLE qq_users (
	user_id int(11) PRIMARY KEY AUTO_INCREMENT,
	user_name VARCHAR(24),
	user_pwd VARCHAR(24)
);

INSERT INTO qq_users VALUES(NULL,'小明','123456');