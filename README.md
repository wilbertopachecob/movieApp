# movieApp

Nodejs, MYSQL, Angular app. The focus is functionality not appareance, so its not going to look like Netflix but it will work as well as it.

# Create and import DB

Connect to your MYSQL Server and execute

```
CREATE DATABASE `movies-app`;
```

Import file movies-app.sql into new created DB

```
mysql -u username -p movies-app < movies-app.sql
```

# Generate Frontend

From root

```
cd front_end
npm install
npm run build
```

# Run Backend

From root

```
cd server
npm install
npm run start
```
