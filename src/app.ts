import server from './server';
import * as dotenv from "dotenv";
import sequelize from "./db/dbconnector";

dotenv.config();
const port = parseInt(process.env.PORT || '4000');


sequelize.sync({force: false});

const starter = new server().start(port)
  .then(port => console.log(`Running on port ${port}`))
  .catch(error => {
    console.log(error)
  });

export default starter;
