"use strict"                       

const assert = require('assert');
const fs = require('fs');

describe('ЗАДАЧА 5: функция isDelResult', function(){
	it('файл L05-05.js существует ', function(){
		assert(fs.existsSync('L05-05.js'), "Файл L05-05.js не существует");
	});

	it('файл непуст', function(){
		var stats = fs.statSync('L05-05.js');
		var fileSize = stats["size"];
		assert(fileSize > 24, "Файл пуст или слишком маленький");
	});
	
	const isDelResult = require('../L05-05.js');
	
	it('Правильно находит определяет для строк: "ALABAMA", "ALMA"', function(){
		const longestWordLen = require('../L05-05.js');
		assert.strictEqual(isDelResult("ALABAMA", "ALMA"), true, "неверно для слова 'Quick'");
	});

	it('Правильно находит определяет для строк: "ALIBABA", "BABA"', function(){
		const longestWordLen = require('../L05-05.js');
		assert.strictEqual(isDelResult("ALIBABA", "BABA"), true, "неверно для слова 'Quick'");
	});

	it('Правильно находит определяет для строк: "ALI", "A"', function(){
		const longestWordLen = require('../L05-05.js');
		assert.strictEqual(isDelResult("ALI", "A"), true, "неверно для слова 'Quick'");
	});

	it('Правильно находит определяет для строк: " ", "ALI"', function(){
		const longestWordLen = require('../L05-05.js');
		assert.strictEqual(isDelResult(" ", "ALI"), false, "неверно для слова 'Quick'");
	});

	it('Правильно находит определяет для строк: " ", " "', function(){
		const longestWordLen = require('../L05-05.js');
		assert.strictEqual(isDelResult(" ", " "), true, "неверно для слова 'Quick'");
	});
}); 