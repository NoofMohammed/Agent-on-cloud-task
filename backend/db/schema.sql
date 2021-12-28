USE appointments;

CREATE TABLE seller (
    id INT AUTO_INCREMENT NOT NULL,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    password VARCHAR(255),
    email VARCHAR(255) UNIQUE,
    location VARCHAR(255),
    goods_type VARCHAR(255), 
    img VARCHAR(255), 
    PRIMARY KEY (id)
);
CREATE TABLE buyer (
    id INT AUTO_INCREMENT NOT NULL,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    password VARCHAR(255),
    email VARCHAR(255) UNIQUE,
    PRIMARY KEY (id)
);
CREATE TABLE appointment (
    id INT AUTO_INCREMENT NOT NULL,
    date DATETIME,
    state VARCHAR(255),
    seller_id INT,
    FOREIGN KEY (seller_id) REFERENCES seller(id),
    buyer_id INT,
    FOREIGN KEY (buyer_id) REFERENCES buyer(id),
    PRIMARY KEY (id)
);
