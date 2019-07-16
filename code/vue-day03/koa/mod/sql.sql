CREATE TABLE news(
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
	title VARCHAR(100) NOT NULL,
	pubtime INT UNSIGNED
)CHARSET=utf8 ENGINE=INNODB;

INSERT INTO news(title,pubtime)VALUES('这是第1条新闻',NOW());
INSERT INTO news(title,pubtime)VALUES('这是第2条新闻',NOW());
INSERT INTO news(title,pubtime)VALUES('这是第3条新闻',NOW());
INSERT INTO news(title,pubtime)VALUES('这是第4条新闻',NOW());
INSERT INTO news(title,pubtime)VALUES('这是第5条新闻',NOW());
INSERT INTO news(title,pubtime)VALUES('这是第6条新闻',NOW());
INSERT INTO news(title,pubtime)VALUES('这是第7条新闻',NOW());
INSERT INTO news(title,pubtime)VALUES('这是第8条新闻',NOW());
INSERT INTO news(title,pubtime)VALUES('这是第9条新闻',NOW());
INSERT INTO news(title,pubtime)VALUES('这是第10条新闻',NOW());
INSERT INTO news(title,pubtime)VALUES('这是第11条新闻',NOW());

SELECT * FROM news;

TRUNCATE news;