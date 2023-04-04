import { MongoClient } from "mongodb";

const connectionString = process.env.ATLAS_URI || "";

const client = new MongoClient("mongodb+srv://arjun:Hack123@cluster0.res46s8.mongodb.net?retryWrites=true&w=majority");

let conn;
try {
  conn = await client.connect();
} catch(e) {
  console.error(e);
}

let db = conn.db("rewards");

export default db;