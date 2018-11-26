 "use strict"                       

const assert = require('assert');
const fs = require('fs');
const ph2f = require('../L05-02.js');

describe('ЗАДАЧА 2: функция ph2f', function(){
	it('файл L05-02.js существует ', function(){
		assert(fs.existsSync('L05-02.js'), "Файл L05-02.js не существует");
	});

	it('файл непуст', function(){
		var stats = fs.statSync('L05-02.js');
		var fileSize = stats["size"];
		assert(fileSize > 24, "Файл пуст или слишком маленький");
	});

	it('дает верный ответ для строки с 2 вхождениями ph', function(){
           assert(ph2f("photographer"), "fotografer", "неверно для 'photographer'");
        });

	it('дает верный ответ для строки с 5 вхождениями ph', function(){
           assert(ph2f("phphotographpherph"), "ffotografferf", "неверно для 'phphotographpherph'");
        });

	it('дает верный ответ для строки с пустой строкой', function(){
           assert(ph2f(""), "", "неверно для ''");
        });

	it('дает верный ответ для строки без пиханий ph', function(){
           assert(ph2f("fysics is fun"), "fysics is fun", "неверно для 'fysics is fun'");
        });
});