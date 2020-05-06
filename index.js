//Database connection configuration

//const Client = require('pg').Client;
//or

const {Client}  = require('pg');
const client = new Client({
 user:"postgres",
 password:"!123qwe",
 host: "localhost",
 port:5432,
 database:"testDb"
})

client.connect()
.then(() => console.log("Connected Successfully!"))
.catch(e => console.log)
.finally(() => client.end())

