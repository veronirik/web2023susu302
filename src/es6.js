"use strict";
// в данных задачах нужно использовать возможности es6
// ко всем заданиям можно дописать свои тесты в файле es6.spec.js
// Можно менять параметры функций (например сделать им значения по умолчанию)

// Напишите функцию, которая принимает ФИО пользователя и возвращает
// строку формата Имя Фамилия
function fioToName(fio) {
    const [lastName, firstName, ...otherNames] = fio.split(' ');
    return `${firstName} ${lastName}`;
}

// преобразуйте массив чисел так, чтобы в нем остались только
// уникальные элементы
// присмотритесь к коллекции "Set"
function filterUnique(array) {
    return Array.from(new Set(array));
}

// Задача: разница зарплат
// в функцию приходит массив из n зарплат сотрудников фирмы
// ваша задача определить, во сколько раз зарплата самого высокооплачиваемого
// сотрудника превышает зарплату самого низкооплачиваемого
// присмотритесь к методу .reduce
function calculateSalaryDifference(array) {
    if (array.length === 0) {
        return 0; // Если массив пуст, разница в зарплатах равна 0
    }

    const maxSalary = array.reduce((max, current) => (current > max ? current : max), array[0]);
    const minSalary = array.reduce((min, current) => (current < min ? current : min), array[0]);

    return maxSalary / minSalary;
}
// Реализуйте класс "словарь слов" (как толковый словарь)
// класс должен быть безопасным и работать только со словами
// присмотритесь к коллекции "Map"
// Словарь - (string, string), и все это не null и не undefined
// * покройте класс тестами
class Dictionary {
    constructor() {
        this.words = new Map();
    }

    addWord(word, definition) {
        if (typeof word === 'string' && typeof definition === 'string') {
            this.words.set(word, definition);
        } else {
            throw new Error("Both word and definition must be non-null strings.");
        }
    }

    getDefinition(word) {
        return this.words.get(word);
    }

    deleteWord(word) {
        return this.words.delete(word);
    }

    hasWord(word) {
        return this.words.has(word);
    }
}


module.exports = {
    fioToName,
    filterUnique,
    Dictionary,
    calculateSalaryDifference
};