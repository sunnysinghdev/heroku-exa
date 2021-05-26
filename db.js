const { Client } = require('pg');
// const client = new Client({
//     connectionString: process.env.DATABASE_URL || "postgres://hbdpqtsijyzkbc:534d8d394d53966756aab620793e2bd2a827b526dabed32c3a8f315348df5a2b@ec2-3-233-43-103.compute-1.amazonaws.com:5432/d4jjofs416k9du",
//     ssl: {
//         rejectUnauthorized: false
//     }
// });


class DbContext {
    client = new Client({
        connectionString: "postgres://hbdpqtsijyzkbc:534d8d394d53966756aab620793e2bd2a827b526dabed32c3a8f315348df5a2b@ec2-3-233-43-103.compute-1.amazonaws.com:5432/d4jjofs416k9du",
        ssl: {
            rejectUnauthorized: false
        }
    });
    constructor(connectionString) {
        if (connectionString) {
            this.client.connectionString = connectionString;
        }
    }
    execute() {
        this.client.connect();
        //--------Query---------
        // client.query('SELECT table_schema,table_name FROM information_schema.tables;', (err, res) => {
        //     if (err) throw err;
        //     for (let row of res.rows) {
        //         console.log(JSON.stringify(row));
        //     }
        //     client.end();
        // });
        //--------Query---------
        this.client.query('SELECT * FROM accounts;', (err, res) => {
            if (err) throw err;
            for (let row of res.rows) {
                console.log(JSON.stringify(row));
            }
            this.client.end();
        });

        //-----Create-----------
        // client.query(`CREATE TABLE IF NOT EXISTS accounts ( 
        //     user_id serial PRIMARY KEY,
        // 	username VARCHAR ( 50 ) UNIQUE NOT NULL,
        // 	password VARCHAR ( 50 ) NOT NULL,
        // 	email VARCHAR ( 255 ) UNIQUE NOT NULL,
        // 	created_on TIMESTAMP NOT NULL,
        //     last_login TIMESTAMP 
        // )`, (err, res) => {
        //     if (err) {
        //         console.log(JSON.stringify(err));
        //         return;
        //     };
        //     //for (let row of res.rows) {
        //         console.log(JSON.stringify(res));
        //     //}
        //     client.end();
        // });

        //-------Insert-------
        // client.query(`INSERT INTO accounts (user_id, username, password, email, created_on) values($1, $2, $3, $4, $5) returning user_id`,
        // [1,'sunnysinghdev','123','sunnysinghdevcom@gmail.com', new Date()],
        //  (err, res) => {
        //     if (err) {
        //         console.log(JSON.stringify(err));
        //         return;
        //     };
        //     //for (let row of res.rows) {
        //         console.log(JSON.stringify(res));
        //     //}
        //     client.end();
        // });
    }
}

module.exports.DbContext = DbContext;
//export{DbContext}; //ES6