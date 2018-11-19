"use strict"                       

const assert = require('assert');
const fs = require('fs');

describe('ЗАДАЧА 3: функция longestWordLen', function(){
	it('файл L05-03.js существует ', function(){
		assert(fs.existsSync('L05-03.js'), "Файл L05-03.js не существует");
	});

	it('файл непуст', function(){
		var stats = fs.statSync('L05-03.js');
		var fileSize = stats["size"];
		assert(fileSize > 24, "Файл пуст или слишком маленький");
	});

	it('Правильно находит длину 1 слова', function(){
		const longestWordLen = require('../L05-03.js');
		assert.strictEqual(longestWordLen("Quick"), 5, "неверно для слова 'Quick'");
	});

	it('Правильно находит длину слова в пустой строке', function(){
		const longestWordLen = require('../L05-03.js');
		assert.strictEqual(longestWordLen(""), 0, "неверно для ''");
	});

	it('Правильно находит длину с посторонними символами "/;js.com&"', function(){
		const longestWordLen = require('../L05-03.js');
		assert.strictEqual(longestWordLen("/;js.com&"), 3, "неверно для слова '/;js.com&'");
	});

	it("Правильно находит длину слова в строке: i'm not sure ", function(){
		const longestWordLen = require('../L05-03.js');
		assert.strictEqual(longestWordLen("i'm not sure"), 4, "неверно для строки: i'm not sure");
	});


}); 