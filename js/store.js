'use strict'
const redux = require('redux');
const createStore = redux.createStore;

const reducers = require('./reducers/index');

const store = createStore(reducers.gameReducer);
module.exports  = store;
