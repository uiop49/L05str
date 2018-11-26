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

	it('дает верный ответ для строки с 2 вхождениями ph', function(){
           const ph2f = require('../L05-02.js');
           assert(ph2f("photographer"), "fotografer", "неверно для 'photographer'");
    });

	it('дает верный ответ для пустой строки', function(){
           const ph2f = require('../L05-02.js');
           assert(ph2f('') == '', "неверно для ''");
    });

	it('дает верный ответ для ph', function(){
           const ph2f = require('../L05-02.js');
           assert(ph2f("ph"), "f", "неверно для 'ph'");
    });

	it('дает верный ответ для нескольких подряд идущих phphph', function(){
           const ph2f = require('../L05-02.js');
           assert(ph2f("phphph"), "fff", "неверно для 'phphph'");
    });
    
    it('дает верный ответ для строки без ph', function() {
    	const ph2f = require('../L05-02.js');
    	assert(ph2f("perhviy igrock"), "perhviy igrock", "неверно для 'perhviy igrock'");
    });

}); 