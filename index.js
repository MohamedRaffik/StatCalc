const liveServer = require('live-server');
const stat = require('statistical-js');
const jsdom = require('jsdom');

const { JSDOM } = jsdom;
const { window } = new JSDOM('<DOCTYPE html>');
const $ = require('jquery')(window);

liveServer.start();
