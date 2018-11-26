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

	it('дает истину для одного палиндрома', function(){
		const isPalindrome = require('../L05-04.js');
		assert.strictEqual(isPalindrome("MADAM I M ADAM"), true, "неверно для 'MADAM I M ADAM'");
	});

	it('дает ложь для одного непалиндрома', function(){
		const isPalindrome = require('../L05-04.js');
		assert.strictEqual(isPalindrome("MADA"), false, "неверно для 'MADA'");
	});
 
    it('дает ложь для одного непалиндрома', function(){
		const isPalindrome = require('../L05-04.js');
		assert.strictEqual(isPalindrome("MADA AND MADAM"), false, "неверно для 'MADA AND MADAM'");
	});
    
    it('дает ложь для одного непалиндрома', function(){
		const isPalindrome = require('../L05-04.js');
		assert.strictEqual(isPalindrome("MADA ADAM"), true, "неверно для 'MADA ADAM'");
	});
});
 