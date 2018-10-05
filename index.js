const {Transform} = require('stream');
const chalk = require('chalk');
const bunyan = require('bunyan');

const colorByLevelWeightHash = {
	60: 'red',
	50: 'red',
	40: 'yellow',
	30: 'reset',
	20: 'cyan',
	10: 'blue'
};

function createLogger(stream, prettify, params) {
	prettyStream.pipe(stream);

	return bunyan.createLogger({
		streams: [prettify ? {stream: prettyStream, type: 'raw'} : {stream}],
		...params
	});
}

const prettyStream = new Transform({
	transform: ({time, level, name, msg}, encoding, callback) => {
		callback(null, [
			chalk.gray(`[${time.toUTCString()}]`),
			chalk.green(`[${name}]`),
			chalk[colorByLevelWeightHash[level]](msg)
		].join(' ') + '\n');
	},
	objectMode: true
});

module.exports = createLogger;
