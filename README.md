# movieApp

Nodejs, MYSQL, Angular app

## Create DB

Connect to your MYSQL Server and execute

```
CREATE DATABASE `movies-app`;
```

Import file movies-app.sql into new created DB

```
mysql -u username -p movies-app < movies-app.sql
```

## Install Frontend

From root

```
cd front_end
npm install
npm run build
```

## Install Backend

From root

```
cd server
npm install
npm run start
```
