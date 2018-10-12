const Chalk = require('chalk').constructor;

module.exports = (suppressColors) => {
	const chalk = new Chalk(suppressColors ? {level: 0} : {});

	return (meta) => [
		chalk.blue(`[${meta.req.id}]`),
		chalk.yellow(meta.method),
		meta.url,
		'-',
		meta['status-code'],
		'-',
		meta['response-time'].toFixed(3),
		'ms'
	].join(' ');
};
