"use strict"                       

const assert = require('assert');
const fs = require('fs');

describe('ЗАДАЧА 2: функция ph2f', function(){
	it('файл L05-02.js существует ', function(){
		assert(fs.existsSync('L05-02.js'), "Файл L05-02.js не существует");
	});

	it('файл непуст', function(){
		var stats = fs.statSync('L05-02.js');
		var fileSize = stats["size"];
		assert(fileSize > 24, "Файл пуст или слишком маленький");
	});

	it('дает верный ответ для строки с 2 вхождениями ph "photographer"', function(){
           const ph2f = require('../L05-02.js');
           assert(ph2f("photographer"), "fotografer", "неверно для 'photographer'");
        });

	it('дает верный ответ для строки с 3 вхождениями ph"phphph"', function(){
		const ph2f = require('../L05-02.js');
		var s = "phphph"
		assert.strictEqual(
			ph2f(s).trimRight().length, s.length - 3, "ошибка при 'phphph'");
	})

	it('дает верный ответ для пустой строки ""', function(){
		const ph2f = require('../L05-02.js');
		var s = ""
		assert.strictEqual(
			ph2f(s), "", "ошибка при ''");
	})

	it('дает верный ответ для cтроки без ph "My name is Valery"', function(){
		const ph2f = require('../L05-02.js');
		var s = "My name is Valery"
		assert.strictEqual(
			ph2f(s), "My name is Valery", "ошибка при 'My name is Valery'");
	})

});
 