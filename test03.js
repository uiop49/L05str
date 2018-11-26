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
		assertStrictEqual(longestWordLen("Quick"), 5, "неверно для слова 'Quick'");
	});

	it('Правильно находит длину c разными символами', function(){
		const longestWordLen = require('../L05-03.js');
		assertStrictEqual(longestWordLen("asd?///we212322e1Quwick..><"), 6, "неверно для слова 'asd?///we212322e1Quwick..><'");
	});

	it('Правильно находит строку без слов', function(){
		const longestWordLen = require('../L05-03.js');
		assertStrictEqual(longestWordLen("1233123123123"), 0, "неверно для слова '1233123123123'");
	});
});
