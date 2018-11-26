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
		assert(longestWordLen("Quick")==5, "неверно для слова 'Quick'");
	});

	it('Правильно находит длину пустой строки', function(){
		const longestWordLen = require('../L05-03.js');
		assert(longestWordLen("")==0, "неверно для пустой строки");
	});

	it('Правильно находит длину длинного предложения', function(){
	const longestWordLen = require('../L05-03.js');
	assert(longestWordLen("Quick brown fox jumps, and is gone")==5, "неверно для слова длинного предложения");
	});
});
 