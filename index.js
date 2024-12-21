// npm init -y // to install package.json in terminal
//npm i express nodemon mongoose dotenv //instal in terminal as dependencies
// npx nodemon --clean for nodemon error
// npm install -D nodemon  for nodemon installatioin

// insert one
// import connectdb from './db/connect.js';
// import express from 'express';
// import { createdoc } from './modules/movies.js';

// const app=express();
// const port =process.env.PORT||8000;
// const DATABASE_URL=process.env.DATABASE_URL|| "mongodb://127.0.0.1:27017/test";
// //console.clear()// if needed
// connectdb(DATABASE_URL);
// createdoc();
// app.listen(port,()=>console.log(`Server listening on port ${port}`));

//insert many
// import connectdb from './db/connect.js';
// import express from 'express';
// import { insertmanydoc } from './modules/movies.js';

// const app=express();
// const port =process.env.PORT||8000;
// const DATABASE_URL=process.env.DATABASE_URL|| "mongodb://127.0.0.1:27017/test";
// //console.clear()// if needed
// connectdb(DATABASE_URL);
// insertmanydoc();
// app.listen(port,()=>console.log(`Server listening on port ${port}`));

//to find all movies
// import connectdb from './db/connect.js';
// import express from 'express';
// import { alldoc } from './modules/movies.js';
// const app=express();
// const port =process.env.PORT||8000;
// const DATABASE_URL=process.env.DATABASE_URL|| "mongodb://127.0.0.1:27017/test";
// //console.clear()// if needed
// connectdb(DATABASE_URL);
// alldoc();
// app.listen(port,()=>console.log(`Server listening on port ${port}`));

import connectdb from './db/connect.js';
import express from 'express';
import { singledoc } from './modules/movies.js';

const app=express();
const port =process.env.PORT||8000;
const DATABASE_URL=process.env.DATABASE_URL|| "mongodb://127.0.0.1:27017/test";
//console.clear()// if needed
connectdb(DATABASE_URL);
singledoc();
// singledoc("674c0688ddf67167392710bd");// for update
app.listen(port,()=>console.log(`Server listening on port ${port}`));