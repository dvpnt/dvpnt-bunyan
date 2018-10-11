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
		Math.round(meta['response-time'] * 1e3) / 1e3,
		'ms'
	].join(' ');
};
