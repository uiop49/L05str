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

	const longestWordLen = require('../L05-03.js');
	
	it('Правильно находит длину в пустой строке', function(){	
		assert.strictEqual(longestWordLen(""), 0, "неверно для слова 'Quick'");
	});
	
	it('Правильно находит длину 1 слова', function(){	
		assert.strictEqual(longestWordLen("Quickier"), 8, "неверно для слова 'Quick'");
	});
	
	it('Правильно находит длину в дефолтном предложении', function(){	
		assert.strictEqual(longestWordLen("Quick brown fox jumps, and is gone."), 5, "неверно для слова 'Quick brown fox jumps, and is gone.'");
	});
	
	it('Правильно находит длину в предложении, содержащем другие знаки', function(){	
		assert.strictEqual(longestWordLen("Quick; brown:> fox-+ jumps^%, and;', is gone."), 5, "неверно для слова 'Quick'");
	});
	
	
});
 