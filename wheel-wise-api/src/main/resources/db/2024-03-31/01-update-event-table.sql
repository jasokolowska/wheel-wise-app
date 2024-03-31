-- liquibase formatted sql
-- changeset jasokolowska:7
ALTER TABLE Events
    ADD title VARCHAR(250),
    ADD subtitle VARCHAR(250),
    ADD img VARCHAR(250);
