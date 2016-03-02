var pluginName = 'sai';

module.exports = function plugin(option) {
	var globalSeneca = this;

	globalSeneca.add({role: 'role', cmd: 'cmd'}, function(args, done) {
		console.log('1st args:', args);
		done(null, null);
	});

	globalSeneca.add({role: 'role', cmd: 'cmd'}, function(args, done) {
		var seneca = this;
		console.log('2nd args:', args);
		args.superExtras = 'superExtras';

		seneca.prior(args, function(err, args) {
			console.log('after prior');
			done(err, args);
		});
	});

	globalSeneca.add({init: pluginName}, function(args, done){
		console.log('option:', option);
		console.log('args:', args);

		done(null, args);
	});

	return {
		name: pluginName
	};
}
