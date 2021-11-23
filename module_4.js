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

// // Колбэк-функция
// function greet(name) {
//   consle.log(`Добро пожаловать ${name}.`);
// }

// // Функция высшего порядка
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

// Chande code below this line
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

// // Передаём инлайн функцию greet как колбэк
// registerGuest("Mango", function greet(name) {
//   consle.log(`Добро пожаловать ${name}.`);
// });

// // Передаём инлайн функцию notify как колбэк
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
//   // Имитируем доступность абонента случайным числом
//   const isRecipientAvailable = Math.random() > 0.5;

//   if (!isRecipientAvailable) {
//     console.log(`Абонент ${recipient} недоступен, оставьте сообщение.`);
//     // Логика активации автоответчика
//   } else {
//     console.log(`Соединяем с ${recipient}, ожидайте...`);
//     // Логика принятия звонка
//   }
// }

// processCall("Mango");
// Проблема такого подхода в том, что функция processCall делает слишком много и привязывает проверку доступности абонента к двум заранее определённым действиям. Что если в будущем вместо автоответчика нужно будет оставлять голограмму?

// Мы могли бы написать функцию так, чтобы она возвращала какое-то значение и потом по результату её выполнения делать проверки и выполнять нужный код. Но проверки не относятся к внешнему коду и будут его засорять.

// Выполним рефакторинг функции так, чтобы она принимала два колбэка onAvailable и onNotAvailable, и вызывала их по условию.

// function processCall(recipient, onAvailable, onNotAvailable) {
//   // Имитируем доступеность абонента случайным числом
//   const isRecipientAvailable = Math.random() > 0.5;

//   if (!isRecipientAvailable) {
//     onNotAvailable(recipient);
//     return;
//   }

//   onAvailable(recipient);
// }

// function takeCall(name) {
//   console.log(`Соединяем с ${name}, ожидайте...`);
//   // Логика принятия звонка
// }

// function activateAnsweringMachine(name) {
//   console.log(`Абонент ${name} недоступен, оставьте сообщение.`);
//   // Логика активации автоответчика
// }

// function leaveHoloMessage(name) {
//   console.log(`Абонент ${name} недоступен, записываем голограмму.`);
//   // Логика записи голограммы
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

// Задача 5

// Метод forEach(callback)
// Перебирающий метод массива, который используется как замена циклов for и for...of при работе с коллекцией.

// массив.forEach(function callback(element, index, array) {
//   // Тело коллбек-функции
// });
// Поэлементно перебирает массив.
// Вызывает коллбек-функцию для каждого элемента массива.
// Ничего не возвращает.
// Аргументы коллбек-функции это значение текущего элемента element, его индекс index и сам исходный массив array. Объявлять можно только те параметры которые нужны, чаще всего это элемент, главное не забывать про их порядок.

// const numbers = [5, 10, 15, 20, 25];

// // Классический for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(`Индекс ${i}, значение ${numbers[i]}`);
// }

// // Перебирающий forEach
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

