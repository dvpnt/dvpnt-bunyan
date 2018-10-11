const {Transform} = require('stream');
const chalk = require('chalk');

const colorByLevelWeightHash = {
	60: 'red',
	50: 'red',
	40: 'yellow',
	30: 'reset',
	20: 'cyan',
	10: 'blue'
};

class PrettyStream extends Transform {
	constructor(options) {
		super({
			...options,
			readableObjectMode: true,
			writableObjectMode: false
		});
	}

	_transform({time, level, name, msg}, encoding, callback) {
		callback(null, [
			chalk.gray(`[${time.toISOString().replace('T', ' ').slice(0, -5)}]`),
			chalk.green(`[${name}]`),
			chalk[colorByLevelWeightHash[level]](msg)
		].join(' ') + '\n');
	}
}

module.exports = PrettyStream;
