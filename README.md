# Getting started
1. Install mysql if it is not already installed
2. Verify the database connexion config : `backend/config/config.json` **development**
3. Install npm if it is not already installed
4. Install nodemon if it is not already installed `npm install -g nodemon`
5. Install sequelize CLI : `npm install -g sequelize-cli`
6. Create the database locally : `sequelize db:create`
7. `npm install`
8. `cd backend`
9. Add the Admin user : `sequelize-cli db:migrate`
10. Start the backend : `nodemon server`
11. `cd frontend`
12. `npm install`
13. Start the frontend : `npm start`
14. Go to [http:localhost:3000](http:localhost:3000)
15. connect as moderator email: 'moderateur@groupomania.com' password: 'Adminmoderation'

# Some utils

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