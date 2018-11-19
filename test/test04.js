"use strict"                       

const assert = require('assert');
const fs = require('fs');

describe('ЗАДАЧА 4: функция isPalindrome', function(){
	it('файл L05-04.js существует ', function(){
		assert(fs.existsSync('L05-04.js'), "Файл L05-04.js не существует");
	});

	it('файл непуст', function(){
		var stats = fs.statSync('L05-04.js');
		var fileSize = stats["size"];
		assert(fileSize > 24, "Файл пуст или слишком маленький");
	});
	
	const isPalindrome = require('../L05-04.js');

	it('Правильно находит палиндром для строки "MADAM I M ADAM"', function(){
		const longestWordLen = require('../L05-04.js');
		assert.strictEqual(isPalindrome("MADAM I M ADAM"), true, "неверно для слова 'MADAM I M ADAM'");
	});

	it('Правильно находит палиндром для строки: "MADAM I "', function(){
		const longestWordLen = require('../L05-04.js');
		assert.strictEqual(isPalindrome("MADAM I "), false, "неверно для слова 'MADAM I'");
	});

	it('Правильно находит палиндром для строки: " "', function(){
		const longestWordLen = require('../L05-04.js');
		assert.strictEqual(isPalindrome(" "), true, "неверно для строки ' '");
	});

	it('Правильно находит палиндром для строки: "ALA ALA ALA"', function(){
		const longestWordLen = require('../L05-04.js');
		assert.strictEqual(isPalindrome("ALA ALA ALA"), true, "неверно для слов 'ALA ALA ALA'");
	});

	it('Правильно находит палиндром для строки: "МVOLAMALI"', function(){
		const longestWordLen = require('../L05-04.js');
		assert.strictEqual(isPalindrome("МVOLAMALI"), false, "неверно для слова 'МVOLAMALI'");
	});
});  