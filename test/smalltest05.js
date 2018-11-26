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
	});