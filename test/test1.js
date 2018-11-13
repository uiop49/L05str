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
		assert(fileSize > 0, "Файл пуст");
	});

	const numDots = require('../L05-01.js');

	it('дает 1 для строки с одной точкой', function(){
           assert(numDots(".")==1, "неверно для '.'");
        });

	it('дает 0 для строки без точек', function(){
           assert(numDots("lala")==0, "неверно для 'lala'");
        });

	it('дает 2 для строки a.a.', function(){
           assert(numDots("a.a.")==2, "неверно для 'a.a.'");
        });

	it('дает 2 для строки .aa.', function(){
           assert(numDots(".aa.")==2, "неверно для '.aa.'");
        });

});
