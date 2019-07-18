DROP DATABASE IF EXISTS regretsy_images;

CREATE DATABASE regretsy_images;

USE regretsy_images;

CREATE TABLE listings (
    id SERIAL,
    listing_id BIGINT NOT NULL,
    PRIMARY KEY (ID)
);

CREATE TABLE images (
    id SERIAL,
    listing_id BIGINT NOT NULL,
    mainImage BOOLEAN,
    PRIMARY KEY (ID),
);