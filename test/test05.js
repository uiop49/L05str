"use strict"                       

const assert = require('assert');
const fs = require('fs');

describe('ЗАДАЧА 5: функция isDelResult', function(){
	it('файл L05-05.js существует ', function(){
		assert(fs.existsSync('L05-05.js'), "Файл L05-05.js не существует");
	});

	it('файл непуст', function(){
		var stats = fs.statSync('L05-05.js');
		var fileSize = stats["size"];
		assert(fileSize > 24, "Файл пуст или слишком маленький");
	});
	
	const isDelResult = require('../L05-05.js');
	
	it('дает истину для пары дефолтной пары', function(){
		assert.strictEqual(isDelResult("ALABAMA", "ALMA"), true, "неверно для 'ALABAMA', 'ALMA'");
	});

	it('дает истину для пары строк с пробелами', function(){
		assert.strictEqual(isDelResult("WHAT A BEAUTIFUL DAY", "WAT A FUL DY"), true, "неверно для 'WHAT A BEAUTIFUL DAY", "WAT A FUL DY'");
	});
    
    it('дает фолс для пары с однаковыми символами, но с разным расположением', function(){
		assert.strictEqual(isDelResult("ALGA", "GALA"), false, "неверно для 'ALGA', 'GALA'");
	});
    
    it('дает истину для пары дефолтной пары c пробелами в словах', function(){
		assert.strictEqual(isDelResult("A L A B A M A", "A L M A"), true, "неверно для 'A L A B A M A', 'A L M A'");
	});
	it('дает истину для пустой строки', function(){
		assert.strictEqual(isDelResult("ALABAMA", ""), true, "неверно для 'ALABAMA', ''");
	});
});