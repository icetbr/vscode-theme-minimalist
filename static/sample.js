'use strict';

const MongoClient = require('mongodb').MongoClient;
const async = require('async');
const __ = require('lodash');
const { diff } = require('deep-object-diff');
const utils = require('helpers/utils');

const { options, uri, mongoConfig } = utils.getMongoConfig();

let db;

module.exports = {

  connect(cb) {
    MongoClient.connect(uri, options, (error, client) => {
      if (error) {
        return cb(new Error(error));
      }
      db = client.db(mongoConfig.dbName);
      cb();
    });
  },

  collection(name) {
    return db.collection(name);
  },

  clean(collections, cb) {
    // TODO some commentary
    const actions = [this.connect, this.dropDatabase];
    if (collections) {
      actions.push(this.addCollections.bind(null, collections));
    }
    //db.close
    async.series(actions, cb);
  },

  dropDatabase(cb) {
    db.dropDatabase(cb);
  },

  drop(cb) {
    // This is faster then dropping the database
    db.collections((error, collections) => {
      if (error) {
        return cb(new Error(error));
      }
      async.each(collections, (collection, cb1) => {
        if (collection.collectionName.indexOf('system') === 0) {
          return cb1();
        }
        collection.remove(cb1);
      }, cb);
    });
  }
};
