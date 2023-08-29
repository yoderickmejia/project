import mysql from "mysql2";

import { config } from "dotenv";
config();



const connection = mysql.createConnection({
    host: 'bbcgimkcigjzrxeezxer-mysql.services.clever-cloud.com',
    database: 'bbcgimkcigjzrxeezxer',
    user: 'ultjkkdf08bdxpa9',
    password: 'z2UDc3OnucUzC7W7ciAi',

});

export default connection.promise();





