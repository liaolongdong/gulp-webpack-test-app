'use strict'

import 'babel-polyfill';
import animation from './animation';
import $ from 'jquery';
// const animation = require('./animation');
// const $ = require('jquery');

// const animation = require('./animation.js');
// console.log(animation);

$('<h1>animations</h>').appendTo('body');
const ul = $('<ul></ul>').appendTo('body');
for(const a of animation){
	$('<li></li>').text(a).appendTo(ul);
}