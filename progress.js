var util = require('util');
var EventEmitter = require('events').EventEmitter;

var ProgressBar = function() {
	this.progress = 0;
};

util.inherits(ProgressBar, EventEmitter);

var progressbar = new ProgressBar();

progressbar.on('start', function(){
	console.log('Starting...');
	progressbar.emit('progress');
});

progressbar.on('progress', function(){
	do {
		if((this.progress %10) === 0 ){
			console.log('Progress: ' + this.progress + '%');
		};
		this.progress++;
	} while(this.progress <= 100);

});

progressbar.on('stop', function(){
	console.log('Stopping.')
});

progressbar.emit('start');

progressbar.emit('stop');