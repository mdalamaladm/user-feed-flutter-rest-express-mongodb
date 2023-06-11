require('dotenv').config();

const { MongoClient } = require('mongodb');

const mongoUrl = process.env.MONGODB_URL;
const mongoClient = new MongoClient(mongoUrl);

exports.mongoClient = mongoClient;

exports.db = mongoClient.db('userFeed');
