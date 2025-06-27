# AdminPortal
How to run locally
1. create a local database using the Admin Portal/database.sql
2. in appraisal\src\main\resources\application.properties, put in the required details from your database
3. to run the backend, enter the folder appraisal, compile using command mvn clean install and then run using mvn spring-boot:run
4. to run the frontend, enter the folder frontend and use command npm start