 "use strict"                       

const assert = require('assert');
const fs = require('fs');

describe('ЗАДАЧА 1: функция numDots', function(){
	it('файл L05-01.js существует ', function(){
		assert(fs.existsSync('L05-01.js'), "Файл L05-01.js не существует");
	});

	it('файл непуст', function(){
		var stats = fs.statSync('L05-01.js');
		var fileSize = stats["size"];
		assert(fileSize > 24, "Файл пуст или слишком маленький");
	});
	
	const numDots = require('../L05-01.js');
	
	it('дает 0 для пустой строки', function(){
		assert.strictEqual(
			numDots(''), 0, "неверно для ''");
	});
	
	it('дает 0 для строки без точек', function(){
		assert.strictEqual(
		   numDots('строка без точек'), 0, "неверно для 'строка без точек'");

        });
			
});
 