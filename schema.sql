DROP DATABASE IF EXISTS regretsy_images;

CREATE DATABASE regretsy_images;

USE regretsy_images;

CREATE TABLE images (
    id SERIAL,
    listing_id INT NOT NULL,
    75x VARCHAR(20),
    170x VARCHAR(20),
    570x VARCHAR(20),
    fullx VARCHAR(20),
    PRIMARY KEY (ID)
);