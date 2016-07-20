var fs = require('fs');
var parse = require('@sole/kindle-clippings-parser').parse;
var format = require('@sole/kindle-clippings-html-formatter');

var filename = process.argv[2];

if(filename === undefined) {
	console.error('Need clippings file name to proceed');
	process.exit(-1);
}

var contents = fs.readFileSync(filename, 'utf-8');
var parsed = parse(contents);
var formatted = format(parsed);


var output = '<html><head><meta charset="utf-8"><title>Clippings</title></head><body>' + formatted + '</body></html>';
console.log(output);
