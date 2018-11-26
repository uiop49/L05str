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
		assert(longestWordLen("Quick"), 5, "неверно для слова 'Quick'");
	});

    it('Правильно находит длину длиннейшего слова', function(){
		const longestWordLen = require('../L05-03.js');
		assert(longestWordLen("Slovishe slovo slov 5"), 8, "неверно для строки 'Slovishe slovo slov 5'");
	});

	it('Правильно находит длину длиннейшего слова в строке с небуквами', function(){
		const longestWordLen = require('../L05-03.js');
		assert(longestWordLen("Slo-vi56she slovo slov 5"), 5, "неверно для строки 'Slo-vi56she slovo slov 5'");
	});

	it('Правильно находит длину длиннейшего слова в строке с многочисленными пробелами подряд', function(){
		const longestWordLen = require('../L05-03.js');
		assert(longestWordLen("Slovo o polku     4  igoreve"), 7, "неверно для строки 'Slovo o polku     4  igoreve'");
	});

	it('Правильно находит длину длиннейшего слова в строке с русскими буквами', function(){
		const longestWordLen = require('../L05-03.js');
		assert(longestWordLen("Slovo о полку игореве"), 7, "неверно для строки 'Slovo о полку игореве'");
	});

});
 