# NodeJsMysqlCrudApi


### Sql Commands to Create Tables
CREATE TABLE users (
    id SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE todo(
    id SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    end DATETIME NOT NULL, 
    owner SMALLINT UNSIGNED NOT NULL REFERENCES users(id),
    created_at DATETIME NOT NULL,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
);

### Database Uri
<!-- mysql://ufhydelnjutmzqj6:F1MSbuqe6AqR0ylbgkaV@b27moh4kvyykhnpa1lgb-mysql.services.clever-cloud.com:3306/b27moh4kvyykhnpa1lgb -->
