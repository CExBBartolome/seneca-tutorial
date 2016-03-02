var seneca = require('seneca')();

/*
seneca.add({role: 'role', cmd: 'cmd'}, function(args, done) {
	console.log('1st args:', args);
	done(null, null);
});

seneca.add({role: 'role', cmd: 'cmd'}, function(args, done) {
	console.log('2nd args:', args);
	args.superExtras = 'superExtras';
	this.prior(args, function(err, args) {
		console.log('after prior');
		done(err, args);
	});
});

*/

seneca.use(require('./plugin.js'), {option: true});

seneca.act({role: 'role', cmd: 'cmd', extras: 'extras'}, function(err, args) {
	console.log('original done');
	console.log('err:', err);
	console.log('args:', args);
})
