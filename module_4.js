// Задача 1

// Функция как значение
// Функции не отличаются от чисел, строк или массивов - это просто специальный тип данных (объект высшего порядка), значение, которое можно хранить в переменной или передавать, как аргумент, в другую функцию.

// function greet(name) {
//   return `Добро пожаловать ${name}.`;
// }
//  Вызываем функцию greet
//  и выводим результат в консоль
// console.log(greet("Mango"));
// Добро пожаловать Mango.

// Выводим функцию greet
// в консоль не вызывая её
// console.log(greet);
// 
/*
ƒ greet() {
  return `Добро пожаловать ${name}.`; }
 */
// В первом логе мы вызываем функцию greet при помощи круглых скобок и в консоль выводится результат её выполнения. Во втором логе передаётся ссылка на функцию, а не результат её вызова (отсутствуют круглые скобки), поэтому в консоль выводится тело функции. Это значит, что функцию можно присвоить в переменную или передать, как аругмент, другой функции.
// Задание
// Дополни код так, чтобы в переменной result был результат выполнения функции makePizza, а в переменной pointer была ссылка на функцию makePizza.
// Тесты
// Объявлена функция makePizza
// Объявлена переменная result
// Значение переменной result это строка "Your pizza is being prepared, please wait."
// Значение переменной result получено с помощью вызова функции
// Объявлена переменная pointer
// Значение переменной pointer это ссылка на функцию makePizza

function makePizza() {
  return "Your pizza is being prepared, please wait.";
}
// Change code below this line
const result = null;
const pointer = null;

// Решение

function makePizza() {
return "Your pizza is being prepared, please wait.";
}
const result = makePizza(); 
const pointer = makePizza;

// Задача 2

// Колбэк-функции
// Функция обратного вызова (callback, колбэк) - это функция, которая передаётся другой функции в качестве аргумента и та, в свою очередь, вызывает переданную функцию.
// Функция высшего порядка(higher order function) - функция, принимающая в качестве параметров другие функции или возвращающая функцию как результат.
// Колбэк-функция
// function greet(name) {
//   consle.log(`Добро пожаловать ${name}.`);
// }
// Функция высшего порядка
// function registerGuest(name, callback) {
//   console.log(`Регистрируем гостя ${name}.`);
//   callback(name);
// }
// registerGuest("Mango", greet);
// Мы передали ссылку на функцию greet как аргумент, поэтому она будет присвоена в параметр callback и вызвана внутри функции registerGuest через круглые скобки. Имя параметра для колбэка может быть произвольным, главное помнить, что значением будет функция.
// Задание
// Дополни функцию makeMessage так, чтобы она ожидала вторым параметром (параметр callback) колбэк-функцию и возвращала ее вызов. Функция deliverPizza или makePizza будет передаваться как колбэк и ожидать аргументом имя готовой доставляемой пиццы.
// Тесты
// Объявлена функция deliverPizza
// Объявлена функция makePizza
// Объявлена функция makeMessage
// Функция makeMessage принимает два параметра, названые согласно задания, pizzaName и callback
// Вызов makeMessage("Royal Grand", makePizza) возвращает строку "Pizza Royal Grand is being prepared, please wait..."
// Вызов makeMessage("Ultracheese", deliverPizza) возвращает строку "Delivering Ultracheese pizza."

function deliverPizza(pizzaName) {
  return `Delivering ${pizzaName} pizza.`;
}
function makePizza(pizzaName) {
  return `Pizza ${pizzaName} is being prepared, please wait...`;
}
// Chande code below this line
function makeMessage(pizzaName) {
  return;
}

// Решение

function deliverPizza(pizzaName) {
  return `Delivering ${pizzaName} pizza.`;
}
function makePizza(pizzaName) {
  return `Pizza ${pizzaName} is being prepared, please wait...`;
}
function makeMessage(pizzaName, callback) {
  return callback (pizzaName);
}

// Задача 3

// Инлайн-колбэки
// Если колбэк-функция маленькая и нужна только для передачи аргументом, её можно объявить прямо при вызове функции в которую передаём колбэк. Такая функция будет доступна только как значение параметра и больше нигде в коде.
// function registerGuest(name, callback) {
//   console.log(`Регистрируем гостя ${name}.`);
//   callback(name);
// }
// Передаём инлайн функцию greet как колбэк
// registerGuest("Mango", function greet(name) {
//   consle.log(`Добро пожаловать ${name}.`);
// });
// Передаём инлайн функцию notify как колбэк
// registerGuest("Poly", function notify(name) {
//   consle.log(`Уважаемый(ая) ${name}, ваш номер будет готов через 30 минут.`);
// });
// Задание
// Дополни второй вызов функции makePizza(pizzaName, callback), передав вторым аргументом инлайн колбэк-функцию eatPizza(pizzaName), которая логирует строку "Eating pizza <имя пиццы>".
// Тесты
// Объявлена функция makePizza
// Функция makePizza принимает два параметра
// Вторым аргументом при вызове makePizza("Ultracheese") передана функция eatPizza с единственным параметром pizzaName

// Решение

function makePizza(pizzaName, callback) {
  console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
  callback(pizzaName);
}
makePizza("Royal Grand", function deliverPizza(pizzaName) {
  console.log(`Delivering pizza ${pizzaName}.`);
});
makePizza("Ultracheese", function eatPizza(pizzaName) {
  console.log(`Eating pizza ${pizzaName}.`);
});

// Задача 4

// Несколько колбэков
// Функция может принимать произвольное количество колбэков. Например, представим что мы пишем логику принятия звонков для телефона. Программа должна включить автоответчик если абонент недоступен, или соединить звонок в противном случае. Доступность абонента будем имитировать генератором случайного числа, чтобы между разными вызовами функции можно было получить различные результаты.
// function processCall(recipient) {
//   Имитируем доступность абонента случайным числом
//   const isRecipientAvailable = Math.random() > 0.5;
//   if (!isRecipientAvailable) {
//     console.log(`Абонент ${recipient} недоступен, оставьте сообщение.`);
//     Логика активации автоответчика
//   } else {
//     console.log(`Соединяем с ${recipient}, ожидайте...`);
//     Логика принятия звонка
//   }
// }
// processCall("Mango");
// Проблема такого подхода в том, что функция processCall делает слишком много и привязывает проверку доступности абонента к двум заранее определённым действиям. Что если в будущем вместо автоответчика нужно будет оставлять голограмму?
// Мы могли бы написать функцию так, чтобы она возвращала какое-то значение и потом по результату её выполнения делать проверки и выполнять нужный код. Но проверки не относятся к внешнему коду и будут его засорять.
// Выполним рефакторинг функции так, чтобы она принимала два колбэка onAvailable и onNotAvailable, и вызывала их по условию.
// function processCall(recipient, onAvailable, onNotAvailable) {
//   Имитируем доступеность абонента случайным числом
//   const isRecipientAvailable = Math.random() > 0.5;
//   if (!isRecipientAvailable) {
//     onNotAvailable(recipient);
//     return;
//   }
//   onAvailable(recipient);
// }
// function takeCall(name) {
//   console.log(`Соединяем с ${name}, ожидайте...`);
//  Логика принятия звонка
// }
// function activateAnsweringMachine(name) {
//   console.log(`Абонент ${name} недоступен, оставьте сообщение.`);
//   Логика активации автоответчика
// }
// function leaveHoloMessage(name) {
//   console.log(`Абонент ${name} недоступен, записываем голограмму.`);
//   Логика записи голограммы
// }
// processCall("Mango", takeCall, activateAnsweringMachine);
// processCall("Poly", takeCall, leaveHoloMessage);
// Колбэки применяются для обработки действий пользователя на странице, при обработке запросов на сервер, выполнения заранее неизвестных функций и т. п. В этом и заключается их суть - это функции предназначенные для отложенного выполнения.
// Задание
// Необходимо написать логику обработки заказа пиццы. Выполни рефакторинг метода order так, чтобы он принимал вторым и третим параметрами два колбэка onSuccess и onError.
// Если в свойстве pizzas нет пиццы с названием из параметра pizzaName, метод order должен возвращать результат вызова колбэка onError, передавая ему аргументом строку "There is no pizza with a name <имя пиццы> in the assortment."
// Если в свойстве pizzas есть пицца с названием из параметра pizzaName, метод order должен возвращать результат вызова колбэка onSuccess, передавая ему аргументом имя заказанной пиццы.
// После объявления объекта pizzaPalace мы добавили колбэки и вызовы методов. Пожалуйста ничего там не меняй.
// Тесты
// Метод order объявляет три параметра
// Вызов pizzaPalace.order("Smoked", makePizza, onOrderError) возвращает "Your order is accepted. Cooking pizza Smoked."
// Вызов pizzaPalace.order("Four meats", makePizza, onOrderError) возвращает "Your order is accepted. Cooking pizza Four meats."
// Вызов pizzaPalace.order("Big Mike", makePizza, onOrderError) возвращает "Error! There is no pizza with a name Big Mike in the assortment."
// Вызов pizzaPalace.order("Vienna", makePizza, onOrderError) возвращает "Error! There is no pizza with a name Vienna in the assortment."

const pizzaPalace = {
  pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
  order(pizzaName) {},
};
// Change code above this line
// Callback for onSuccess
function makePizza(pizzaName) {
  return `Your order is accepted. Cooking pizza ${pizzaName}.`;
}
// Callback for onError
function onOrderError(error) {
  return `Error! ${error}`;
}
// Method calls with callbacks
pizzaPalace.order('Smoked', makePizza, onOrderError);
pizzaPalace.order('Four meats', makePizza, onOrderError);
pizzaPalace.order('Big Mike', makePizza, onOrderError);
pizzaPalace.order('Vienna', makePizza, onOrderError);

// Решение

const pizzaPalace = {
  pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
  order(pizzaName, onSuccess, onError) {
  	let message = onError(`There is no pizza with a name ${pizzaName} in the assortment.`)
    this.pizzas.forEach((pizza) => {if(pizza==pizzaName){message = onSuccess(pizzaName)}})
    return message;
  },
};
function makePizza(pizzaName) {
  return `Your order is accepted. Cooking pizza ${pizzaName}.`;
}
function onOrderError(error) {
  return `Error! ${error}`;
}
pizzaPalace.order('Smoked', makePizza, onOrderError);
pizzaPalace.order('Four meats', makePizza, onOrderError);
pizzaPalace.order('Big Mike', makePizza, onOrderError);
pizzaPalace.order('Vienna', makePizza, onOrderError);

// Задача 5

// Метод forEach(callback)
// Перебирающий метод массива, который используется как замена циклов for и for...of при работе с коллекцией.
// массив.forEach(function callback(element, index, array) {
// Тело коллбек-функции
// });
// Поэлементно перебирает массив.
// Вызывает коллбек-функцию для каждого элемента массива.
// Ничего не возвращает.
// Аргументы коллбек-функции это значение текущего элемента element, его индекс index и сам исходный массив array. Объявлять можно только те параметры которые нужны, чаще всего это элемент, главное не забывать про их порядок.
// const numbers = [5, 10, 15, 20, 25];
// Классический for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(`Индекс ${i}, значение ${numbers[i]}`);
// }
// Перебирающий forEach
// numbers.forEach(function (number, index) {
//   console.log(`Индекс ${index}, значение ${number}`);
// });
// Единственным случаем, когда стоит использовать циклы for или for...of для перебора массива, это задачи с прерыванием выполнения цикла. Прервать выполнение метода forEach нельзя, он всегда перебирает массив до конца.
// Задание
// Функция calculateTotalPrice(orderedItems) принимает один параметр orderedItems - массив чисел, и рассчитывает общую сумму его элементов, которая сохраняется в переменной totalPrice и возвращается как результат работы функции.
// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.
// Тесты
// Объявлена функция calculateTotalPrice(orderedItems)
// Для перебора массива orderedItems использован метод forEach
// Вызов функции calculateTotalPrice([12, 85, 37, 4]) возвращает 138
// Вызов функции calculateTotalPrice([164, 48, 291]) возвращает 503
// Вызов функции calculateTotalPrice([412, 371, 94, 63, 176]) возвращает 1116
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение

function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;
  // Change code below this line
  for (let i = 0; i < orderedItems.length; i += 1) {
    totalPrice += orderedItems[i];
  }
  // Change code above this line
  return totalPrice;
}

// Решение

function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;
  orderedItems.forEach(iteam => {
      totalPrice += iteam});
  return totalPrice;
}

// Задача 6

// Задача. Фильтрация массива чисел
// Задание
// Функция filterArray(numbers, value) принимает массив чисел numbers и возвращает новый массив, в котором будут только те элементы оригинального массива, которые больше чем значение параметра value.
// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.
// Тесты
// Объявлена функция filterArray(numbers, value)
// Для перебора массива numbers использован метод forEach
// Вызов функции filterArray([1, 2, 3, 4, 5], 3) возвращает [4, 5]
// Вызов функции filterArray([1, 2, 3, 4, 5], 4) возвращает [5]
// Вызов функции filterArray([1, 2, 3, 4, 5], 5) возвращает []
// Вызов функции filterArray([12, 24, 8, 41, 76], 38) возвращает [41, 76]
// Вызов функции filterArray([12, 24, 8, 41, 76], 20) возвращает [24, 41, 76]
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение

function filterArray(numbers, value) {
  const filteredNumbers = [];
  // Change code below this line
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] > value) {
      filteredNumbers.push(numbers[i]);
    }
  }
  // Change code above this line
  return filteredNumbers;
}

// Решение

function filterArray(numbers, value) {
  const filteredNumbers = [];
  numbers.forEach(item => {
    if(item > value) {
      filteredNumbers.push(item);
    }
  });
  return filteredNumbers;
}

// Задача 7

// Задача. Общие элементы
// Задание
// Функция getCommonElements(firstArray, secondArray) принимает два массива произвольной длины в параметры firstArray и secondArray, и возвращает новый массив их общих элементов, то есть тех которые есть в обоих массивах.
// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.
// Тесты
// Объявлена функция getCommonElements(firstArray, secondArray)
// Для перебора параметра (массива) использован метод forEach
// Вызов getCommonElements([1, 2, 3], [2, 4]) возвращает [2]
// Вызов getCommonElements([1, 2, 3], [2, 1, 17, 19]) возвращает [1, 2]
// Вызов getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]) возвращает [12, 27, 3]
// Вызов getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]) возвращает [10, 30, 40]
// Вызов getCommonElements([1, 2, 3], [10, 20, 30]) возвращает []
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение

function getCommonElements(firstArray, secondArray) {
  const commonElements = [];
  // Change code below this line
  for (let i = 0; i < firstArray.length; i += 1) {
    if (secondArray.includes(firstArray[i])) {
      commonElements.push(firstArray[i]);
    }
  }
  return commonElements;
  // Change code above this line
}

// Решение

function getCommonElements(firstArray, secondArray) {
  const commonElements = [];
  firstArray.forEach(number => {
    if (secondArray.includes(number)) {
      commonElements.push(number);
    }
  });
  return commonElements;
}

// Задача 8

// Стрелочные функции.
// Стрелочные функции имеют сокращённый, более лаконичный синтаксис, что уменьшает объем кода, особенно когда функция маленькая или если она используется как коллбек.
// Все стрелки создаются как функциональное выражение, и если функция не анонимна, то она должна быть присвоена переменной.
// Обычное объявление функции
// function classicAdd(a, b, c) {
//   return a + b + c;
// }
// Тоже самое как стрелочная функция
// const arrowAdd = (a, b, c) => {
//   return a + b + c;
// };
// Ключевое слово function не используется, вместо этого сразу идёт объявление параметров, за которыми следует символ => и тело функции.
// Если параметров несколько, то они перечисляются через запятую в круглых скобках, между знаками равно = и стрелкой =>.
// const add = (a, b, c) => {
//   return a + b + c;
// };
// Если параметр один, его объявление может быть без круглых скобок.
// const add = a => {
//   return a + 5;
// };
// Если параметров нет, то обязательно должны быть пустые круглые скобки.
// const greet = () => {
//   console.log("Привет!");
// };
// Задание
// Выполни рефакторинг функции calculateTotalPrice() так, чтобы она была объявлена как стрелочная.
// Тесты
// Объявлена переменная calculateTotalPrice
// Переменной calculateTotalPrice присвоена стрелочная функция с параметрами (quantity, pricePerItem)
// Вызов calculateTotalPrice(5, 100) возвращает 500
// Вызов calculateTotalPrice(8, 60) возвращает 480
// Вызов calculateTotalPrice(3, 400) возвращает 1200
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение

// Change code below this line

function calculateTotalPrice(quantity, pricePerItem) {
  // Change code above this line
  return quantity * pricePerItem;
}

// Решение

  const calculateTotalPrice = (quantity, pricePerItem) => {
  return quantity * pricePerItem;
}

// Задача 9

// Неявный возврат
// В стрелочной функции после символа => идёт её тело. Здесь может быть два варианта: с фигурными скобками и без них.
// const add = (a, b, c) => {
//   console.log(a, b, c);
//   return a + b + c;
// };
// Если фигурные скобки есть, и функция должна возвращать какое-то значение, необходимо явно поставить return. Это называется явный возврат (explicit return). Такой синтаксис используется в том случае, если в теле функции нужно выполнить ещё какие-то инструкции кроме возврата значения.
// const add = (a, b, c) => a + b + c;
// Если фигурных скобок нет, то возвращается результат выражения стоящего после =>. Это называется неявный возврат (implicit return). В примере вернётся результат выражения сложения параметров a, b и c.
// Синтаксис неявного возврата сильно сокращает «шум» объявления функции с телом и возвращаемым выражением, но подходит только в случае когда в теле функции не нужно выполнять никаких дополнительных инструкций кроме возврата значения.
// До
// function classicAdd(a, b, c) {
//   return a + b + c;
// }
// После
// const arrowAdd = (a, b, c) => a + b + c;
// Задание
// Выполни рефакторинг функции calculateTotalPrice() так, чтобы она использовала неявный возврат.
// Тесты
// Объявлена переменная calculateTotalPrice
// Переменной calculateTotalPrice присвоена стрелочная функция с параметрами (quantity, pricePerItem)
// В функции использован неявный возврат
// Вызов calculateTotalPrice(5, 100) возвращает 500
// Вызов calculateTotalPrice(8, 60) возвращает 480
// Вызов calculateTotalPrice(3, 400) возвращает 1200
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение

// Change code below this line
const calculateTotalPrice = (quantity, pricePerItem) => {
  return quantity * pricePerItem;
};
// Change code above this line

// Решение

const calculateTotalPrice = (quantity, pricePerItem) => 
   quantity * pricePerItem;

// Задача 10

// Стрелочные функции как коллбеки
// Анонимные стрелочные функции отлично подходят как коллбеки для перебирающих методов массива из-за более краткого синтаксиса объявления, особенно если не нужно тело функции.
// const numbers = [5, 10, 15, 20, 25];
// Объявление функции
// numbers.forEach(function (number, index) {
//   console.log(`Индекс ${index}, значение ${number}`);
// });
// Анонимная стрелочная функция
// numbers.forEach((number, index) => {
//   console.log(`Индекс ${index}, значение ${number}`);
// });
// Стрелочную коллбек-функцию также можно объявлять отдельно и передавать на неё ссылку. Это стоит делать если одна функция используется в нескольих местах программы или если она громоздкая.
// const numbers = [5, 10, 15, 20, 25];
// const logMessage = (number, index) => {
//   console.log(`Индекс ${index}, значение ${number}`);
// };
// numbers.forEach(logMessage);
// Задание
// Выполни рефакторинг функции calculateTotalPrice(orderedItems) заменив её объявление на стрелочную функцию. Замени коллбек-функцию передаваемую в метод forEach() на стрелочную функцию.
// Тесты
// Объявлена переменная calculateTotalPrice
// Переменной calculateTotalPrice присвоена стрелочная функция с параметром (orderedItems)
// Для перебора массива orderedItems использован метод forEach
// Коллбек для метода forEach это стрелочная функция
// Вызов функции calculateTotalPrice([12, 85, 37, 4]) возвращает 138
// Вызов функции calculateTotalPrice([164, 48, 291]) возвращает 503
// Вызов функции calculateTotalPrice([412, 371, 94, 63, 176]) возвращает 1116
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение

// Change code below this line
function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;
  orderedItems.forEach(function (item) {
    totalPrice += item;
  });
  return totalPrice;
}
// Change code above this line

// Решение

const calculateTotalPrice = (orderedItems) => {
  let totalPrice = 0;
  orderedItems.forEach(
    (item) => {
    totalPrice += item;
  });
  return totalPrice;
}

// Задача 11

// Задача. Фильтрация массива чисел 2.0
// Задание
// Замени объявление функции filterArray() и коллбек для метода forEach() на стрелочные функции.
// Тесты
// Объявлена переменная filterArray
// Переменной filterArray присвоена стрелочная функция с параметрами (numbers, value)
// Для перебора массива numbers использован метод forEach
// Коллбек для метода forEach это стрелочная функция
// Вызов функции filterArray([1, 2, 3, 4, 5], 3) возвращает [4, 5]
// Вызов функции filterArray([1, 2, 3, 4, 5], 4) возвращает [5]
// Вызов функции filterArray([1, 2, 3, 4, 5], 5) возвращает []
// Вызов функции filterArray([12, 24, 8, 41, 76], 38) возвращает [41, 76]
// Вызов функции filterArray([12, 24, 8, 41, 76], 20) возвращает [24, 41, 76]
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение

// Change code below this line
function filterArray(numbers, value) {
  const filteredNumbers = [];
  numbers.forEach(function (number) {
    if (number > value) {
      filteredNumbers.push(number);
    }
  });
  // Change code above this line
  return filteredNumbers;
}

// Решение

const filterArray = (numbers, value) => {
  let filteredNumbers = [];
  numbers.forEach((number) => {
    if (number > value) { 
      filteredNumbers.push(number);
  }
  });
  return filteredNumbers;
}

// Задача 12

// Задача. Общие элементы 2.0
// Задание
// Замени объявление функции getCommonElements() и коллбек для метода forEach() на стрелочные функции.
// Тесты
// -Объявлена переменная getCommonElements.
// Переменной getCommonElements присвоена стрелочная функция с параметрами (firstArray, secondArray)
// Для перебора массива firstArray использован метод forEach
// Коллбек для метода forEach это стрелочная функция
// Вызов getCommonElements([1, 2, 3], [2, 4]) возвращает [2]
// Вызов getCommonElements([1, 2, 3], [2, 1, 17, 19]) возвращает [1, 2]
// Вызов getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]) возвращает [12, 27, 3]
// Вызов getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]) возвращает [10, 30, 40]
// Вызов getCommonElements([1, 2, 3], [10, 20, 30]) возвращает []
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение

// Change code below this line
function getCommonElements(firstArray, secondArray) {
  const commonElements = [];
  firstArray.forEach(function (element) {
    if (secondArray.includes(element)) {
      commonElements.push(element);
    }
  });
  // Change code above this line
  return commonElements;
}

// Решение

const getCommonElements = (firstArray, secondArray) => {
  let commonElements = [];
  firstArray.forEach(element => {
    if (secondArray.includes(element)) {
      commonElements.push(element);
    }
  });
  return commonElements;
}

// Задача 13

// Чистые функции
// Функция с побочными эффектами - это функция которая в процессе выполнения может изменять или использовать глобальные переменные, изменять значение аргументов ссылочного типа, выполнять операции ввода-вывода и т. п.
// const dirtyMultiply = (array, value) => {
//   for (let i = 0; i < array.length; i += 1) {
//     array[i] = array[i] * value;
//   }
// };
// const numbers = [1, 2, 3, 4, 5];
// dirtyMultiply(numbers, 2);
// Произошла мутация исходных данных - массива numbers
// console.log(numbers); // [2, 4, 6, 8, 10]
// Функция dirtyMultiply(array, value) умножает каждый элемент массива array на число value. Она изменяет (мутирует) исходный массив по ссылке.
// Чистая функция (pure function) - это функция результат которой зависит только от значений переданных аргументов. При одинаковых аргументах она всегда возвращает один и тот же результат и не имеет побочных эффектов, то есть не изменяет значения аргументов.
// Напишем реализацию чистой функции умножения элементов массива, возвращающей новый массив, не изменяя исходный.
// const pureMultiply = (array, value) => {
//   const newArray = [];
//   array.forEach(element => {
//     newArray.push(element * value);
//   });
//   return newArray;
// };
// const numbers = [1, 2, 3, 4, 5];
// const doubledNumbers = pureMultiply(numbers, 2);
// Не произошло мутации исходных данных
// console.log(numbers); // [1, 2, 3, 4, 5]
// Функция вернула новый массив с изменёнными данными
// console.log(doubledNumbers); // [2, 4, 6, 8, 10]
// Задание
// Функция changeEven(numbers, value) принимает массив чисел numbers и обновляет каждый элемент, значение которого это чётное число, добавляя к нему значение параметра value.
// Выполни рефакторинг функции так, чтобы она стала чистой - не изменяла массив чисел numbers, а создавала, наполняла и возвращала новый массив с обновлёнными значениями.
// Тесты
// Объявлена функция changeEven(numbers, value)
// Функция changeEven не изменяет значение параметра numbers
// Вызов changeEven([1, 2, 3, 4, 5], 10) возвращает новый массив [1, 12, 3, 14, 5]
// Вызов changeEven([2, 8, 3, 7, 4, 6], 10) возвращает новый массив [12, 18, 3, 7, 14, 16]
// Вызов changeEven([17, 24, 68, 31, 42], 100) возвращает новый массив [17, 124, 168, 31, 142]
// Вызов changeEven([44, 13, 81, 92, 36, 54], 100) возвращает новый массив [144, 13, 81, 192, 136, 154]
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение

function changeEven(numbers, value) {
  // Change code below this line
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 2 === 0) {
      numbers[i] = numbers[i] + value;
    }
  }
  // Change code above this line
}

// Решение

function changeEven(numbers, value) {
   let newArray = [];
  numbers.forEach(number => {
    number % 2 === 0 ? newArray.push(number + value) : newArray.push(number);
  })
      return newArray;
}

// Задаяа 14

// Метод map()
// Большинство перебирающих методов массива это чистые функции. Они создают новый массив, заполняют его, применяя к значению каждого элемента указанную коллбек-функцию, после чего возвращают этот новый массив.
// Метод map(callback) используется для трансформации массива. Он вызывает коллбек-функцию для каждого элемента исходного массива, а результат её работы записывает в новый массив, который и будет результатом выполнения метода.
// массив.map((element, index, array) => {
// Тело коллбек-функции
// });
// Поэлементно перебирает оригинальный массив.
// Не изменяет оригинальный массив.
// Результат работа коллбек-функции записывается в новый массив.
// Возвращает новый массив такой же длины.
// Его можно использовать для того, чтобы изменить каждый элемент массива. Оригинальный массив используется как эталон, на базе которого можно сделать другую коллекцию.
// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// const planetsInUpperCase = planets.map(planet => planet.toUpperCase());
// console.log(planetsInUpperCase); // ["EARTH", "MARS", "VENUS", "JUPITER"]
// const planetsInLowerCase = planets.map(planet => planet.toLowerCase());
// console.log(planetsInLowerCase); // ["earth", "mars", "venus", "jupiter"]
// Оригинальный массив не изменился
// console.log(planets); // ["Earth", "Mars", "Venus", "Jupiter"]
// Использование анонимных стрелочных функций с неявным возвратом сильно сокращает «шум» объявления коллбек-функции, делая код чище и проще для восприятия.
// Задание
// Дополни код так, чтобы в переменной planetsLengths получился массив длин названий планет. Обязательно используй метод map().
// Тесты
// Объявлена переменная planets
// Значение переменной planets это массив ["Earth", "Mars", "Venus", "Jupiter"]
// Объявлена переменная planetsLengths
// Значение переменной planetsLengths это массив [5, 4, 6, 6]
// Для перебора массива планет использован метод map()

const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// Change code below this line
const planetsLengths = planets;

// Решение

const planets = ["Earth", "Mars", "Venus", "Jupiter"];
let planetsLengths = planets.map(planet => planet.length);

// Задача 15

// Метод map() и массив объектов
// Мы уже знаем что повседневная задача это манипуляция массивом объектов. Например, получить массив значений свойства из всех объектов. Есть массив студентов, а нужно получить отдельный массив их имён.
// const students = [
//   { name: "Mango", score: 83 },
//   { name: "Poly", score: 59 },
//   { name: "Ajax", score: 37 },
//   { name: "Kiwi", score: 94 },
//   { name: "Houston", score: 64 },
// ];
// const names = students.map(student => student.name);
// console.log(names); // ["Mango", "Poly", "Ajax", "Kiwi", "Houston"]
// Используя метод map() можно перебрать массив объектов, и в коллбек-функции вернуть значение свойства каждого из них.
// Задание
// Используя метод map() сделай так, чтобы в переменной titles получился массив названий книг (свойство title) из всех объектов массива books.
// Тесты
// Объявлена переменная books
// Значение переменной books это массив
// Объявлена переменная titles
// Значение переменной titles это массив ["The Last Kingdom", "Beside Still Waters", "The Dream of a Ridiculous Man", "Redder Than Blood", "Enemy of God"]
// Для перебора массива books используется метод map() как чистая функция

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
];
// Change code below this line

const titles = books;

// Решение

// Задача 16

// Метод flatMap()
// Метод flatMap(callback) аналогичен методу map(), но применяется в случаях, когда результат это многомерный массив который необходимо «разгладить».
// массив.flatMap((element, index, array) => {
// Тело коллбек-функции
// });
// В массиве students хранится список студентов со списком предметов, которые посещает студент, в свойстве courses. Несколько студентов могут посещать один и тот же предмет. Необходимо составить список всех предметов, которые посещает эта группа студентов, пока даже повторяющихся.
// const students = [
//   { name: "Mango", courses: ["mathematics", "physics"] },
//   { name: "Poly", courses: ["science", "mathematics"] },
//   { name: "Kiwi", courses: ["physics", "biology"] },
// ];
// students.map(student => student.courses);
// [["mathematics", "physics"], ["science", "mathematics"], ["physics", "biology"]]
// students.flatMap(student => student.courses);
// ["mathematics", "physics", "science", "mathematics", "physics", "biology"];
// Он вызывает коллбек-функцию для каждого элемента исходного массива, а результат её работы записывает в новый массив. Отличие от map() в том, что новый массив «разглаживается» на глубину равную единице (одна вложенность). Этот разглаженный массив и есть результат работы flatMap().
// Задание
// Используя метод flatMap() сделай так, чтобы в переменной genres получился массив всех жанров книг (свойство genres) из массива книг books.
// Тесты
// Объявлена переменная books
// Значение переменной books это массив объектов
// Объявлена переменная genres
// Значение переменной genres это массив [ "adventure", "history", "fiction", "horror", "mysticism" ]
// Для перебора массива books используется метод flatMap()

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["adventure", "history"],
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    genres: ["fiction"],
  },
  {
    title: "Redder Than Blood",
    author: "Tanith Lee",
    genres: ["horror", "mysticism"],
  },
];
// Change code below this line
const genres = books;

// Решение

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["adventure", "history"],
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    genres: ["fiction"],
  },
  {
    title: "Redder Than Blood",
    author: "Tanith Lee",
    genres: ["horror", "mysticism"],
  },
];
const genres = books.flatMap(book => book.genres);

// Задача 17

// Задача. Имена пользователей
// Этот массив объектов мы будем передавать в параметр users при вызове функции из задания.
// [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     skills: ["ipsum", "lorem"],
//     gender: "male",
//     age: 37,
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//     gender: "female",
//     age: 34,
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//     gender: "male",
//     age: 24,
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     skills: ["adipisicing", "irure", "velit"],
//     gender: "female",
//     age: 21,
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     skills: ["ex", "culpa", "nostrud"],
//     gender: "male",
//     age: 27,
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     skills: ["non", "amet", "ipsum"],
//     gender: "male",
//     age: 38,
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     skills: ["lorem", "veniam", "culpa"],
//     gender: "female",
//     age: 39,
//   },
// ];
// Задание
// Дополни функцию getUserNames(users) так, чтобы она возвращала массив имён пользователей (свойство name) из массива объектов в параметре users.
// Тесты
// Объявлена переменная getUserNames
// Переменной getUserNames присвоена стрелочная функция с параметром (users).
// Для перебора параметра users используется метод map()
// Вызов функции с указанным массивом пользователей возвращает массив ["Moore Hensley", "Sharlene Bush", "Ross Vazquez", "Elma Head", "Carey Barr", "Blackburn Dotson", "Sheree Anthony"]
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение

// Change code below this line
const getUserNames = users => {
  };
  // Change code above this line

// Решение 

const getUserNames = users => {
  const getUserNames = users.map(user => user.name);
  return getUserNames;
  };

// Задача 18

// Задача. Почты пользователей
// Этот массив объектов мы будем передавать в параметр users при вызове функции из задания.
// [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     skills: ["ipsum", "lorem"],
//     gender: "male",
//     age: 37,
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//     gender: "female",
//     age: 34,
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//     gender: "male",
//     age: 24,
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     skills: ["adipisicing", "irure", "velit"],
//     gender: "female",
//     age: 21,
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     skills: ["ex", "culpa", "nostrud"],
//     gender: "male",
//     age: 27,
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     skills: ["non", "amet", "ipsum"],
//     gender: "male",
//     age: 38,
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     skills: ["lorem", "veniam", "culpa"],
//     gender: "female",
//     age: 39,
//   },
// ];
// Задание
// Дополни функцию getUserEmails(users) так, чтобы она возвращала массив почтовых адресов пользователей (свойство email) из массива объектов в параметре users.
// Тесты
// Объявлена переменная getUserNames
// Переменной getUserNames присвоена стрелочная функция с параметром (users)
// Для перебора параметра users используется метод map()
// Вызов функции с указанным массивом пользователей возвращает массив ["moorehensley@indexia.com", "sharlenebush@tubesys.com", "rossvazquez@xinware.com", "elmahead@omatom.com", "careybarr@nurali.com", "blackburndotson@furnigeer.com", "shereeanthony@kog.com"]
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение

// Change code below this line
const getUserEmails = users => {
  };
  // Change code above this line

// Решение

const getUserEmails = users => {
  const getUserEmails = users.map(user => user.email);  
return getUserEmails;
  };

// Задача 19

// Методы filter и find
// Метод filter(callback) используется для единственной операции - фильтрации массива, то есть когда необходимо выбрать более одного элемента из коллекции по какому-то критерию.
// массив.filter((element, index, array) => {
// Тело коллбек-функции
// });
// Не изменяет оригинальный массив.
// Поэлементно перебирает оригинальный массив.
// Возвращает новый массив.
// Добавляет в возвращаемый массив элементы которые удовлетворяют условию коллбек-функции.
// Если коллбек вернул true элемент добавляется в возвращаемый массив.
// Если коллбек вернул false элемент не добавляется в возвращаемый массив.
// Если ни один элемент не удовлетворил условию, возвращает пустой массив.
// const values = [51, -3, 27, 21, -68, 42, -37];
// const positiveValues = values.filter(value => value >= 0);
// console.log(positiveValues); // [51, 27, 21, 42]
// const negativeValues = values.filter(value => value < 0);
// console.log(negativeValues); // [-3, -68, -37]
// const bigValues = values.filter(value => value > 1000);
// console.log(bigValues); // []
// Оригинальный массив не изменился
// console.log(values); // [51, -3, 27, 21, -68, 42, -37]
// То есть метод filter вызывает коллбек-функцию для каждого элемента исходного массива и если результат её выполнения true, текущий элемент добавляет в новый массив.
// Задание
// Дополни код так, чтобы в переменной evenNumbers получился массив чётных чисел из массива numbers, а в переменной oddNumbers массив нечётных. Обязательно используй метод filter().
// Тесты
// Объявлена переменная numbers
// Значение переменной numbers это массив [17, 24, 82, 61, 36, 18, 47, 52, 73]
// Объявлена переменная evenNumbers
// Значение переменной evenNumbers это массив [24, 82, 36, 18, 52]
// Объявлена переменная oddNumbers
// Значение переменной oddNumbers это массив [17, 61, 47, 73]
// Для перебора массива numbers использован метод filter()

const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// Change code below this line
const evenNumbers = numbers;
const oddNumbers = numbers;

// Решение

