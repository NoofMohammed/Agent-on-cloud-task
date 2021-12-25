USE appointments;

CREATE TABLE seller (
    id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(255),
    email VARCHAR(255),
    city VARCHAR(255),
    is_deleted TINYINT DEFAULT 0,
    PRIMARY KEY (id)
);
CREATE TABLE buyer (
    id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(255),
    email VARCHAR(255),
    city VARCHAR(255),
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