/**
 * Напишите класс геометрической точки, принимающей в конструкторе координаты X и Y
 * Если координаты не переданы - 0,0; Аналогично если только 1 координата.
 * Со звездочкой: реализовать метод, который возвращает расстояние от точки до центра координат (0, 0)

 */
class Point {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }

    distanceToOrigin() {
        return Math.sqrt(this.x ** 2 + this.y ** 2);
    }
}

/**
 * Напишите класс геометрической точки в трехмерном пространстве (x, y, z),
 * который будет наследоваться от точки в двумерном пространстве.
 * Реализовать статический метод, который возвращает расстояние между Point3D.
 */

class Point3D extends Point {
    constructor(x = 0, y = 0, z = 0) {
        super(x, y);
        this.z = z;
    }

    static vectorLength(pointA, pointB) {
        const dx = pointA.x - pointB.x;
        const dy = pointA.y - pointB.y;
        const dz = pointA.z - pointB.z;
        return Math.sqrt(dx ** 2 + dy ** 2 + dz ** 2);
    }
}
/**
 * Напишите класс "очередь", в котором можно добавить элемент в конец и получить из начала.
 * Предусмотреть 2 варианта инициализации - массивом в конструкторе (из него создается очередь) и без параметров.
 * Со звездочкой: написать тесты методы класса (oop.spec.js)
 */
class Queue {
    constructor(initialArray = []) {
        this.items = initialArray;
    }

    enqueue(item) {
        this.items.push(item); // Добавляем элемент в конец очереди
    }

    dequeue() {
        if (this.isEmpty()) {
            return null; // Очередь пуста
        }
        return this.items.shift(); // Извлекаем элемент из начала очереди
    }

    peek() {
        if (this.isEmpty()) {
            return null; // Очередь пуста
        }
        return this.items[0]; // Возвращаем элемент из начала очереди без удаления
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }
}


module.exports = {
    Point,
    Point3D,
    Queue,
};
