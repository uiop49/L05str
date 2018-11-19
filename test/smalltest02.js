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

	const ph2f = require('../L05-02.js');
	
	it('дает верный ответ для строки с 2 вхождениями ph', function(){   
    		assert.strictEqual(ph2f("photographer"), "fotografer", "неверно для 'photographer'");
        });
		
});
 