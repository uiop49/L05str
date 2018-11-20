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

	it('дает 2 для строки с 2 точками', function(){
           const numDots = require('../L05-01.js');
           assert.strictEqual(numDots("h.*.j"), 2, "неверно для '.*.'");
    });

	it('дает 0 для пустой строки',function(){
		const numDots = require('../L05-01.js');
		assert.strictEqual(numDots(""), 0 , "не 0 на пустой строке");		
	});

	it('дает 0 для строки без точек',function(){
		const numDots = require('../L05-01.js');
		assert.strictEqual(numDots("gyiy"), 0 , "не 0 для строки без точек");		
	});

	it('дает 3 для строки, состоящей из точек',function(){
	const numDots = require('../L05-01.js');
	assert.strictEqual(numDots("..."), 3 , "не 3 для строки из 3 точек");		
	});

});
