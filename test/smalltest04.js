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

	it('дает истину для одного палиндрома', function(){
		assert.strictEqual(isPalindrome("MADAM I M ADAM"), true, "неверно для 'MADAM I M ADAM'");
	});
	
	it('дает истину для одного палиндром с несколькими подряд идущими пробелами', function(){
		assert.strictEqual(isPalindrome("MADAM I M    ADAM"), true, "неверно для 'MADAM I M    ADAM'");
	});
 
}); 