"use strict"                       

const assert = require('assert');
const fs = require('fs');

describe('ЗАДАЧА 1: функция numDots', function(){
	it('файл L05-01.js существует ', function(){
		assert(fs.existsSync('L05-01.js'), "Файл L05-01.js не существует");
	});

	it('файл непуст', function(){
		var stats = fs.statSync('L05-01.js');
		var fileSize = stats["size"];
		assert(fileSize > 24, "Файл пуст или слишком маленький");
	});

	it('дает 2 для строки с 2 точками', function(){
           const numDots = require('../L05-01.js');
           assert.strictEqual(numDots("gg.gg.gg"), 2, "неверно для '.*.'");
        });


    it('дает 0 для пустой строки', function(){
           const numDots = require('../L05-01.js');
           assert.strictEqual(numDots(""), 0,"неправильно для пустой строки" );
        });


    it('дает 1 для строки с 1 точкой',function(){
    	const numDots = require('../L05-01.js');
    	assert.strictEqual(numDots("."), 1,"неверно для строки с 1 точкой")
    });


    it('дает 0 для строки без точек',function(){
    	const numDots = require('../L05-01.js');
    	assert.strictEqual(numDots("gg gg"), 0,"неверно для строки с 1 точкой")
    });

    it('дает 4 для строки с 4 точками',function(){
    	const numDots = require('../L05-01.js');
    	assert.strictEqual(numDots("...."), 4,"неверно для строки с 4 точками")
    });

}); 
