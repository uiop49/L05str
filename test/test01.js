"use strict"                       

const assert = require('assert');
const fs = require('fs');

describe('ЗАДАЧА 1: функция numDots', function(){
	it('Файл L05-01.js существует ', function(){
		assert(fs.existsSync('L05-01.js'), "Файл L05-01.js не существует");
	});

	it('Файл непуст', function(){
		var stats = fs.statSync('L05-01.js');
		var fileSize = stats["size"];
		assert(fileSize > 24, "Файл пуст или слишком маленький");
	});

	it('Дает 2 для строки с 2 точками', function(){
           const numDots = require('../L05-01.js');
           assert.strictEqual(numDots(".*."),2,"неверно для '.*.'");
        });
	it('Дает ноль для пустой строки', function(){
			const numDots = require('../L05-01.js');
			assert.strictEqual(numDots(""),0,"неверно для пустой строки");
	})
	it('Дает ноль для длинной строки без точек', function(){
			const numDots = require('../L05-01.js');
			assert.strictEqual(numDots("quick brown fox"),0,"неверно для строки без точек");
	})

	it('Дает кол-во точек для строки только из точек', function(){
			const numDots = require('../L05-01.js');
			assert.strictEqual(numDots("......"),6,"неверно для строки только из точек");
	})
});
 