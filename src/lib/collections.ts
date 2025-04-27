// lib/collection.ts
import clientPromise from "./db"; // adjust path if needed

export async function getDb(dbName: string) {
  const client = await clientPromise;
  return client.db(dbName);
}

export async function getCollection(collectionName: string) {
  const db = await getDb("users_string"); // "users_string" is your database name
  return db.collection(collectionName);
}
