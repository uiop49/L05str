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

	it('Правильно находит самое длинное слово в предложении ', function(){
		const longestWordLen = require('../L05-03.js');
		assert.strictEqual(longestWordLen("Hello help me pls"), 5, "неверно для предложения 'Hello help me pls'");
	});
    
    it('Правильно находит длину в пустой строке ', function(){
		const longestWordLen = require('../L05-03.js');
		assert.strictEqual(longestWordLen(""), 0, "неверно для предложения пустой строки ");
	});
    
      it('Правильно находит длину в строке с пробелами ', function(){
		const longestWordLen = require('../L05-03.js');
		assert.strictEqual(longestWordLen("           kek       keke           kekek"), 5, "неверно для предложения с пробелами");
	});

});
 