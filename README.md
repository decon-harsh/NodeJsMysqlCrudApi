# NodeJsMysqlCrudApi
#### To run locally
1. `npm start`

#### Endpoints
- Root: `localhost:8080/api/v1`


- Get All Users: `localhost:8080/api/v1/users`
- Post User: `localhost:8080/api/v1/user/`
    * body : {name : string}
- Get User by Id : `localhost:8080/api/user/{id}`
- Update User : `localhost:8080/api/user/{id}`
    * body : {name : string}
- Delete a User : `localhost:8080/api/user/{id}`


- Get All Tasks: `localhost:8080/api/v1/todo`
- Post User: `localhost:8080/api/v1/todo/`
    * body : {title : string, end : DateTime, owner : number(fk user id)}
- Get User by Id : `localhost:8080/api/todo/{id}`
- Update User : `localhost:8080/api/todo/{id}`
    * body : {title : string, end : DateTime, owner : number(fk user id)}
- Delete a User : `localhost:8080/api/todo/{id}`


    



### Sql Commands to Create Tables

```
CREATE TABLE users (
    id SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);
```

```
CREATE TABLE todo(
    id SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    end DATETIME NOT NULL, 
    owner SMALLINT UNSIGNED NOT NULL REFERENCES users(id),
    created_at DATETIME NOT NULL,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
);
```

### Database Uri
mysql://ufhydelnjutmzqj6:F1MSbuqe6AqR0ylbgkaV@b27moh4kvyykhnpa1lgb-mysql.services.clever-cloud.com:3306/b27moh4kvyykhnpa1lgb
