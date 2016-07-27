var Product = require('../models/product');
var mongoose = require('mongoose');
mongoose.connect('localhost:27017/shopping')
var products = [ 
	new Product({
		imagePath: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
		title: 'Gothic Game',
		'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consequuntur debitis delectus deserunt dolore dolorem eum expedita, inventore nobis omnis perferendis possimus quas repellat soluta, sunt voluptate, voluptates! Assumenda, nulla?',
		price: 10
	}),
	
	new Product({
		imagePath: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
		title: 'Gothic Game',
		'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consequuntur debitis delectus deserunt dolore dolorem eum expedita, inventore nobis omnis perferendis possimus quas repellat soluta, sunt voluptate, voluptates! Assumenda, nulla?',
		price: 10
	}),
	
	new Product({
		imagePath: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
		title: 'Gothic Game',
		'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consequuntur debitis delectus deserunt dolore dolorem eum expedita, inventore nobis omnis perferendis possimus quas repellat soluta, sunt voluptate, voluptates! Assumenda, nulla?',
		price: 10
	}),
	
	new Product({
		imagePath: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
		title: 'Gothic Game',
		'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consequuntur debitis delectus deserunt dolore dolorem eum expedita, inventore nobis omnis perferendis possimus quas repellat soluta, sunt voluptate, voluptates! Assumenda, nulla?',
		price: 10
	}),
]; 

var done = 0;
for(var i=0; i<products.length; i++){
	products[i].save(function(err, result){
		done++;
		if( done == products.length){
			exit();
		}
	});
}

function exit(){
	mongoose.disconnect();
}