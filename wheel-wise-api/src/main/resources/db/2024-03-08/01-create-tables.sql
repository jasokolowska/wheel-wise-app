# liquibase formatted sql
# changeset jasokolowska:1
CREATE TABLE IF NOT EXISTS users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    enabled BOOLEAN
);

# changeset jasokolowska:2
create table authorities (
    username varchar(50) not null,
    authority varchar(50) not null,
    constraint fk_authorities_users foreign key(username) references users(username)
);

# changeset jasokolowska:3
create unique index ix_auth_username on authorities (username,authority);


# changeset jasokolowska:4
CREATE TABLE Routes (
    route_id INT AUTO_INCREMENT PRIMARY KEY,
    route_name VARCHAR(100),
    start_location VARCHAR(255),
    end_location VARCHAR(255),
    route_map TEXT
);

# changeset jasokolowska:5
CREATE TABLE Events (
    event_id INT AUTO_INCREMENT PRIMARY KEY,
    event_type VARCHAR(50),
    distance DECIMAL(10,2),
    difficulty_level VARCHAR(50),
    start_datetime DATETIME,
    end_datetime DATETIME,
    description TEXT,
    organizer_id INT,
    route_id INT,
    FOREIGN KEY (organizer_id) REFERENCES Users(user_id),
    FOREIGN KEY (route_id) REFERENCES Routes(route_id)
);

# changeset jasokolowska:6
CREATE TABLE Participants (
    participant_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    event_id INT,
    FOREIGN KEY (user_id) REFERENCES Users(user_id),
    FOREIGN KEY (event_id) REFERENCES Events(event_id)
);
