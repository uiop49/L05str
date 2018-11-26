"use strict"                       

const assert = require('assert');
const fs = require('fs');
const isPalindrome = require('../L05-04.js');

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
		assert.strictEqual(isPalindrome("MADAM I M ADAM"), true, "неверно для 'MADAM I M ADAM'");
	});

	it('дает ложь для одного непалиндрома', function(){
		assert.strictEqual(isPalindrome("MADA"), false, "неверно для 'MADA'");
	});

	it('дает истину для пустого палиндрома', function(){
		assert.strictEqual(isPalindrome(""), true, "неверно для ''");
	});

	it('дает истину для палиндрома с другими символами', function(){
		assert.strictEqual(isPalindrome("M%ADПатриархAM# I MКириллADAM..."), true, 
		"неверно для 'M%ADПатриархAM# I AMКириллADAM...'");
	});

	it('дает ложь для непалиндрома с другими символами', function(){
		assert.strictEqual(isPalindrome("M%AПатриархAM# I MКириллADAM..."), false, 
		"неверно для 'M%AПатриархAM# I AMКириллADAM...'");
	});

	it('дает истину для палиндрома с четным кол-вом символов', function(){
		assert.strictEqual(isPalindrome("M%ADПатриархAM# I IMКириллADAM..."), true, 
		"неверно для 'M%ADПатриархAM# I IMКириллADAM...'");
	});
 
});
 