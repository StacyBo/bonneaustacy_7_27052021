# First installation
## Backend
1. `cd backend`
2. `cp .env.copy .env` and modify the secret key used for JWT
3. `npm install -g sequelize-cli`
4. `npm install -g nodemon`
5. `npm install`
6. `sequelize init`
7. Configure database information in "backend/config/config.json"
8. Install mysql service locally
9. Create the database locally : `sequelize db:create`
10. `npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string`
11. Create the tables `sequelize-cli db:migrate`

## Frontend
1. `cd frontend`
2. `npx create-react-app .`
3. `npm start`

# Optional :
- See the database : 
    - Connect to mysql : `mysql -u root -p`
    - Show the databases : `SHOW DATABASES;`
    - Use the database `USE groupomania_development;`
    - Show the tables : `SHOW TABLES;`
    - Show the table structure : `DESCRIBE user;`
    - Show the data : `SELECT * FROM user`
- Generate a new migration : `sequelize migration:generate --name`
- Revert the last migration : `sequelize db:migrate:undo`
- Migrate the migrations : `sequelize-cli db:migrate`

# Getting started
1. `cd backend`
2. `nodemon server`
3. `cd frontend`
4. `npm start`
5. Go to [http:localhost:3000](http:localhost:3000)
