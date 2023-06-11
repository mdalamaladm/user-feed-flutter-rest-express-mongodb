require('dotenv').config();

const bcrypt = require('bcrypt');

const { mongoClient, db } = require('./db.js');

async function main () {
  await db.dropDatabase();
  console.log('[Database] old database removed!');

  const role = await db.createCollection('role');
  console.log('[Collections] Role Collection created!');
  const admin = await role.insertOne({ name: 'admin' });
  console.log('[Role] Admin created!');

  await role.insertOne({ name: 'user' });
  console.log('[Role] User created!');

  const user = await db.createCollection('user');
  console.log('[Collections] Role Collection created!');
  await user.insertOne({
    name: 'Admin',
    description: 'This is admin account',
    photo: '',
    hash: await bcrypt.hash('admin123', 10),
    role_id: admin.insertedId
  });
  console.log('[User] Admin created!');

  await db.createCollection('feed');
  console.log('[Collections] Feed Collection created!');
  await db.createCollection('commentFeed');
  console.log('[Collections] Comment Feed Collection created!');
  await db.createCollection('report');
  console.log('[Collections] Report Collection created!');
  await db.createCollection('image');
  console.log('[Collections] Image Collection created!');

  mongoClient.close();
}

main();