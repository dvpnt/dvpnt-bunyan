const chalk = require('chalk');
const expressBunyanLogger = require('express-bunyan-logger');

module.exports = (...params) => expressBunyanLogger({
	genReqId: false,
	logger: require('../logger')(...params),
	format: (meta) => [
		chalk.blue(`[${meta.req.id}]`),
		chalk.yellow(meta.method),
		meta.url,
		'-',
		meta['status-code'],
		'-',
		meta['response-time'],
		'ms'
	].join(' ')
});
