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
		assert(isPalindrome("MADAM I M ADAM"), true, "неверно для 'MADAM I AM ADAM'");
	});

	it('дает ложь для одного непалиндрома', function(){
		const isPalindrome = require('../L05-04.js');
		assert(isPalindrome("MADA") == false, "неверно для 'MADA'");
	});

	it('дает ложь для еще одного палиндрома', function(){
		const isPalindrome = require('../L05-04.js');
		assert(isPalindrome("тор 5   но он5 рот   "), true, "неверно для 'тор 5   но он5 рот   '");
	});

	it('дает ложь для еще одного непалиндрома', function(){
		const isPalindrome = require('../L05-04.js');
		assert(isPalindrome("ВодаАдоВ") == false, "неверно для 'ВодаАдоВ'");
	});
 
});
 