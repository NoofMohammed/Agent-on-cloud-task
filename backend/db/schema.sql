USE appointments;

CREATE TABLE seller (
    id INT AUTO_INCREMENT NOT NULL,
    firstName VARCHAR(255),
    lastName VARCHAR(255),
    password VARCHAR(255),
    email VARCHAR(255) UNIQUE,
    location VARCHAR(255),
    goods_type VARCHAR(255), 
    img VARCHAR(255), 
    is_deleted TINYINT DEFAULT 0,
    PRIMARY KEY (id)
);
CREATE TABLE buyer (
    id INT AUTO_INCREMENT NOT NULL,
    firstName VARCHAR(255),
    lastName VARCHAR(255),
    password VARCHAR(255),
    email VARCHAR(255) UNIQUE,
    is_deleted TINYINT DEFAULT 0,
    PRIMARY KEY (id)
);
CREATE TABLE appointment (
    id INT AUTO_INCREMENT NOT NULL,
    seller_id INT,
    FOREIGN KEY (seller_id) REFERENCES seller(id),
    buyer_id INT,
    FOREIGN KEY (buyer_id) REFERENCES buyer(id),
    is_deleted TINYINT DEFAULT 0,
    PRIMARY KEY (id)
);