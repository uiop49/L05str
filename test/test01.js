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
           assert.strictEqual(numDots(".*."), 2, "неверно для '.*.'");
        });

	it('дает 4 для строки с 4 точками "./././.*@^#&*!@"', function(){
           const numDots = require('../L05-01.js');
           assert.strictEqual(numDots("./././.*@^#&*!@"), 4, "неверно для './././.*@^#&*!@'");
        });

	it('дает  для строки с 3 точками "Глушков.Валерий..Юрьевич,!"', function(){
           const numDots = require('../L05-01.js');
           assert.strictEqual(numDots("Глушков.Валерий..Юрьевич,!"), 3, "неверно для 'Глушков.Валерий..Юрьевич,!'");
        });

	it('дает 0 для пустой строки ""', function(){
           const numDots = require('../L05-01.js');
           assert.strictEqual(numDots(""), 0, "неверно для ''");
        });

	it('дает 0 для пустой строки с пробелом " "', function(){
           const numDots = require('../L05-01.js');
           assert.strictEqual(numDots(" "), 0, "неверно для ' '");
        });

	it('дает 0 для  строки без точек "Меня зовут Валерий "', function(){
           const numDots = require('../L05-01.js');
           assert.strictEqual(numDots("Меня зовут Валерий "), 0, "неверно для 'Меня зовут Валерий '");
        });

  it('дает  для строки с 13 точек с пробелами "Глушков........   Валерий..Юр.ьевич,.!."', function(){
           const numDots = require('../L05-01.js');
           assert.strictEqual(numDots("Глушков........   Валерий..Юр.ьевич,.!."), 13, "неверно для 'Глушков........   Валерий..Юр.ьевич,.!.'");
        });


});
 