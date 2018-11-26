"use strict"                       

const assert = require('assert');
const fs = require('fs');
const longestWordLen = require('../L05-03.js');

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
		assertStrictEqual(longestWordLen("Quick"), 5, "неверно для слова 'Quick'");
	});

	it('Правильно находит макс длину слова в предложении1', function(){
		assertStrictEqual(longestWordLen("Quicks brown fox jumps, and is gone."), 6,
		 "неверно для предложения 'Quicks brown fox jumps, and is gone.'");
	});

	it('Правильно находит макс длину слова в предложении2', function(){
		assertStrictEqual(longestWordLen("славянQuickess№ brown fox)Патриарх Кирилл, and)))is gone.."), 8,
		 "неверно для предложения 'славянQuickess№ brown fox)Патриарх Кирилл, and)))is gone..'");
	});

	it('Правильно находит макс длину слова в пустом предложении', function(){
		assertStrictEqual(longestWordLen(""), 0, "неверно для ''");
	});

});
 