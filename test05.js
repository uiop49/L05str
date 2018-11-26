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

	it('дает истину для пары ALABAMA, ALMA', function(){
		const isDelResult = require('../L05-05.js');
		assert.strictEqual(isDelResult("ALABAMA", "ALMA"), true, "неверно для 'ALABAMA', 'ALMA'");
	});

	it('дает истину для пары "", ""', function(){
		const isDelResult = require('../L05-05.js');
		assert.strictEqual(isDelResult("", ""), true, "неверно для '', ''");
	});

	it('дает ложь для пары ALABAMA, ALMAA', function(){
		const isDelResult = require('../L05-05.js');
		assert.strictEqual(isDelResult("ALABAMA", "ALMAA"), false, "неверно для 'ALABAMA', 'ALMAA'");
	});

	it('дает истину для пары kekekeke, kek', function(){
		const isDelResult = require('../L05-05.js');
		assert.strictEqual(isDelResult("kekekeke", "kek"), true, "неверно для 'kekekeke', 'kek'");
	});

});