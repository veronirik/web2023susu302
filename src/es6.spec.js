const assert = require('assert');
const core = require('./es6');

describe('es6', () => {
    describe('#fioToName', () => {
        it('ФИО в Имя Фамилия корректно', () => {
            assert.strictEqual(core.fioToName('Иванов Иван Иванович'), 'Иван Иванов');
        });

        it('ФИ в Имя Фамилия', () => {
            assert.strictEqual(core.fioToName('Петров Петр'), 'Петр Петров');
        });
    });

    describe('#filterUnique', () => {
        it('массив с уникальными равен сам себе', () => {
            assert.deepStrictEqual(core.filterUnique([1, 2, 3]), [1, 2, 3]);
        });

        it('массив с неуникальными отфильтрован', () => {
            assert.deepStrictEqual(core.filterUnique([1, 1, 1, 1]), [1]);
        });

        it('пустой массив', () => {
            assert.deepStrictEqual(core.filterUnique([]), []);
        });
    });

    describe('#calculateSalaryDifference', () => {
        it('считает разницу корректно', () => {
            assert.strictEqual(core.calculateSalaryDifference([1, 2, 3]), 3);
        });

        it('на пустой массив возвращается falsy значение', () => {
            assert.strictEqual(!!core.calculateSalaryDifference([]), false);
        });
    });

    describe('#Dictionary', () => {
        it('экземпляр класса создается', () => {
            const dictionary = new core.Dictionary();

            assert.strictEqual(!!dictionary, true);
        });

        it('добавление и получение слов', () => {
            const dictionary = new core.Dictionary();

            dictionary.addWord("apple", "a fruit");
            dictionary.addWord("car", "a vehicle");

            const definition = dictionary.getDefinition("apple");
            assert.strictEqual(definition, "a fruit");
        });

        it('проверка наличия слова', () => {
            const dictionary = new core.Dictionary();

            dictionary.addWord("apple", "a fruit");

            assert.strictEqual(dictionary.hasWord("apple"), true);
            assert.strictEqual(dictionary.hasWord("banana"), false);
        });

        it('удаление слова', () => {
            const dictionary = new core.Dictionary();

            dictionary.addWord("apple", "a fruit");
            dictionary.addWord("car", "a vehicle");

            dictionary.deleteWord("apple");
            assert.strictEqual(dictionary.hasWord("apple"), false);
        });
    });
});