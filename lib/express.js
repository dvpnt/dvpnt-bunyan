const chalk = require('chalk');
const expressBunyanLogger = require('express-bunyan-logger');

module.exports = (logger, skipUrlRegExp) => expressBunyanLogger({
	genReqId: false,
	logger,
	format: (meta) => [
		chalk.blue(`[${meta.req.id}]`),
		chalk.yellow(meta.method),
		meta.url,
		'-',
		meta['status-code'],
		'-',
		Math.round(meta['response-time'] * 1e3) / 1e3,
		'ms'
	].join(' '),
	levelFn: (status, err, {url}) =>
		skipUrlRegExp && skipUrlRegExp.test(url) ? 'trace' : 'info'
});
