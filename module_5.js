// Задача 1

// Контекст вызова функции
// Внутри функций можно использовать зарезервированное ключевое слово this. Во время исполнения функции, в this записывается ссылка на объект, в контексте которого она была вызвана. Таким образом, в теле функции мы можем получить доступ к свойствам и методам этого объекта.
// const bookShelf = {
//   authors: ["Bernard Cornwell", "Robert Sheckley"],
//   getAuthors() {
//     return this.authors;
//   },
//   addAuthor(authorName) {
//     this.authors.push(authorName);
//   },
// };
// console.log(bookShelf.getAuthors()); // ["Bernard Cornwell", "Robert Sheckley"]
// bookShelf.addAuthor("Tanith Lee");
// console.log(bookShelf.getAuthors()); // ["Bernard Cornwell", "Robert Sheckley", "Tanith Lee"]
// Методы getAuthors и addAuthor это функции (методы объекта), которые вызываются в контексте объекта bookShelf. Во время их выполнения в this записывается ссылка на объект bookShelf и мы можем обратиться к его свойствам и методам.
// Задание
// Выполни рефакторинг методов объекта pizzaPalace, расставив отсутствующие this в местах обращения к свойствам и методам объекта.
// Тесты
// Метод checkPizza объекта pizzaPalace использует this.
// Метод order объекта pizzaPalace использует this
// Вызов pizzaPalace.order("Smoked") возвращает строку "Order accepted, preparing «Smoked» pizza"
// Вызов pizzaPalace.order("Four meats") возвращает строку "Order accepted, preparing «Four meats» pizza"
// Вызов pizzaPalace.order("Big Mike") возвращает строку "Sorry, there is no pizza named «Big Mike»"
// Вызов pizzaPalace.order("Viennese") возвращает строку "Sorry, there is no pizza named «Viennese»"

const pizzaPalace = {
pizzas: ["Supercheese", "Smoked", "Four meats"],
  // Change code below this line
    checkPizza(pizzaName) {
    return pizzas.includes(pizzaName);},
    order(pizzaName) {
    const isPizzaAvailable = checkPizza(pizzaName);
    if (!isPizzaAvailable) {
    return `Sorry, there is no pizza named «${pizzaName}»`;}
    return `Order accepted, preparing «${pizzaName}» pizza`;},
};

// Решение

const pizzaPalace = {
    pizzas: ["Supercheese", "Smoked", "Four meats"],
    checkPizza(pizzaName) {
    return this.pizzas.includes(pizzaName);},
    order(pizzaName) {
    const isPizzaAvailable = this.checkPizza(pizzaName);
    if (!isPizzaAvailable) {
    return `Sorry, there is no pizza named «${pizzaName}»`;}
    return `Order accepted, preparing «${pizzaName}» pizza`;},
};

// Задача 2

// Задача: аккаунт пользователя
// Задание
// Перед увольнением разработчик сломал исходный код управления аккаунтами пользователей нашего сервиса доставки еды. Выполни рефакторинг методов объекта customer, расставив отсутствующие this при обращении к свойствам объекта.
// После объявления объекта мы добавили вызовы методов в той последовательности, в которой твой код будут проверять тесты. Пожалуйста ничего там не меняй.
// Тесты
// Объявлена переменная customer
// Значение переменной customer это объект со свойствами и методами
// Вызов customer.getDiscount() возвращает текущее значение свойства discount
// Вызов customer.setDiscount(0.15) обновляет значение свойства discount
// Вызов customer.getBalance() возвращает текущее значение свойства balance.
// Вызов customer.getOrders() возвращает текущее значение свойства orders
// Вызов customer.addOrder(5000, "Steak") добавляет "Steak" в массив значений свойства orders и обновляет баланс
// Метод getBalance объекта customer использует this
// Метод getDiscount объекта customer использует this
// Метод setDiscount объекта customer использует this
// Метод getOrders объекта customer использует this
// Метод addOrder объекта customer использует this

const customer = {
  username: "Mango",
  balance: 24000,
  discount: 0.1,
  orders: ["Burger", "Pizza", "Salad"],
  // Change code below this line
  getBalance() {
    return balance;
  },
  getDiscount() {
    return discount;
  },
  setDiscount(value) {
    discount = value;
  },
  getOrders() {
    return orders;
  },
  addOrder(cost, order) {
    balance -= cost - cost * discount;
    orders.push(order);
  },
  // Change code above this line
};
customer.setDiscount(0.15);
console.log(customer.getDiscount()); // 0.15
customer.addOrder(5000, "Steak");
console.log(customer.getBalance()); // 19750
console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]

// Решение 

const customer = {
  username: "Mango",
  balance: 24000,
  discount: 0.1,
  orders: ["Burger", "Pizza", "Salad"],
  // Change code below this line
  getBalance() {
    return this.balance;
  },
  getDiscount() {
    return this.discount;
  },
  setDiscount(value) {
    this.discount = value;
  },
  getOrders() {
    return this.orders;
  },
  addOrder(cost, order) {
    this.balance -= cost - cost * this.discount;
    this.orders.push(order);
  },
  // Change code above this line
};
customer.setDiscount(0.15);
console.log(customer.getDiscount()); // 0.15
customer.addOrder(5000, "Steak");
console.log(customer.getBalance()); // 19750
console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]

// Задача 3

// Задача: история заказов
// Задание
// Тестировщики нашли баги в коде сервиса хранения истории заказов еды. Тебе необходимо исправить их, правильно расставив this в методах объекта historyService, чтобы методы начали работать правильно.
// Тесты
// Объявлена переменная historyService
// Значение переменной historyService это объект с исходными свойствами и методами
// Вызов historyService.getOrdersLog() возвращает строку с перечислением данных всех заказов из свойства orders
// Вызов historyService.getEmails() возвращает массив всех уникальных почтовых адресов из свойства orders
// Вызов historyService.getOrdersByEmail("solomon@topmail.net") возвращает [{ email: "solomon@topmail.net", dish: "Burger" }, { email: "solomon@topmail.net", dish: "Apple pie" }]
// Вызов historyService.getOrdersByEmail("artemis@coldmail.net") возвращает [{ email: "artemis@coldmail.net", dish: "Pizza" }]
// Метод getOrdersLog объекта historyService использует this
// Метод getEmails объекта historyService использует this
// Метод getOrdersByEmail объекта historyService использует this

const historyService = {
  orders: [
    { email: "jacob@hotmail.com", dish: "Burrito" },
    { email: "solomon@topmail.net", dish: "Burger" },
    { email: "artemis@coldmail.net", dish: "Pizza" },
    { email: "solomon@topmail.net", dish: "Apple pie" },
    { email: "jacob@hotmail.com", dish: "Taco" },
  ],
  // Change code below this line
  getOrdersLog() {
    return orders
      .map(order => `email: ${order.email} dish: ${order.dish}`)
      .join(" - ");
  },
  getEmails() {
    const emails = orders.map(order => order.email);
    const uniqueEmails = new Set(emails);
    return [...uniqueEmails];
  },
  getOrdersByEmail(email) {
    return orders.filter(order => order.email === email);
  },
  // Change code above this line
};


// Решение

const historyService = {
  orders: [
    { email: "jacob@hotmail.com", dish: "Burrito" },
    { email: "solomon@topmail.net", dish: "Burger" },
    { email: "artemis@coldmail.net", dish: "Pizza" },
    { email: "solomon@topmail.net", dish: "Apple pie" },
    { email: "jacob@hotmail.com", dish: "Taco" },
  ],
  getOrdersLog() {
    return this.orders
      .map(order => `email: ${order.email} dish: ${order.dish}`)
      .join(" - ");
  },
  getEmails() {
    const emails = this.orders.map(order => order.email);
    const uniqueEmails = new Set(emails);
    return [...uniqueEmails];
  },
  getOrdersByEmail(email) {
    return this.orders.filter(order => order.email === email);
  },
};

// Задача 4

// Прототип объекта
// Объекты можно организовать в цепочки так, чтобы свойство не найденное в одном объекте, автоматически искалось бы в другом. Связующим звеном выступает специальное скрытое свойство [[Prototype]], которое в консоли браузера отображается как __proto__.
// const animal = {
//   legs: 4,
// };
// const dog = Object.create(animal);
// dog.name = "Mango";
// console.log(dog); // { name: 'Mango', __proto__: animal }
// console.log(animal.isPrototypeOf(dog)); // true
// Метод Object.create(obj) создаёт и возвращает новый объект, связывая его с объектом obj. Объект, на который указывает ссылка в __proto__, называется прототипом. В нашем примере объект animal это прототип для объекта dog. Метод isPrototypeOf() проверяет является ли объект animal прототипом для dog и возвращает true или false.
// console.log(dog.hasOwnProperty("name")); // true
// console.log(dog.name); // 'Mango'
// console.log(dog.hasOwnProperty("legs")); // false
// console.log(dog.legs); // 4
// Обращение dog.name работает очевидным образом - возвращает собственное свойство name объекта dog. При обращении к dog.legs интерпретатор ищет свойство legs в объекте dog, не находит и продолжает поиск в объекте по ссылке из dog.__proto__, то есть, в данном случае, в объекте animal - его прототипе.
// То есть прототип - это резервное хранилище свойств и методов объекта, автоматически используемое при их поиске. У объекта, который выступает прототипом может также быть свой прототип, у того свой, и так далее.
// Поиск свойства выполняется до первого совпадения. Интерпретатор ищет свойство по имени в объекте, если не находит, то обращается к свойству __proto__, т. е. переходит по ссылке к объекту-прототипу, а затем и прототипу прототипа. Если интерпретатор доберется до конца цепочки и не найдет свойства с таким именем, то вернёт undefined.
// Задание
// Измени код так, чтобы объект parent стал прототипом для объекта в переменной сhild.
// Тесты
// Объявлена переменная parent
// Значение переменной parent это объект
// Вызов parent.hasOwnProperty("surname") возвращает true
// Вызов parent.hasOwnProperty("heritage") возвращает true
// Объявлена переменная child
// Значение переменной child это объект
// Вызов child.hasOwnProperty("name") возвращает true
// Обращение к child.name возвращает "Jason"
// Вызов child.hasOwnProperty("age") возвращает true
// Обращение к child.age возвращает 27
// Вызов child.hasOwnProperty("surname") возвращает false
// Обращение к child.surname возвращает "Moore"
// Вызов child.hasOwnProperty("heritage") возвращает false
// Обращение к child.heritage возвращает "Irish"
// Вызов parent.isPrototypeOf(child) возвращает true
// Используется метод Object.create()

const parent = {
  name: "Stacey",
  surname: "Moore",
  age: 54,
  heritage: "Irish",
};
// Change code below this line
const child = {};
// Change code above this line
child.name = "Jason";
child.age = 27;

// Решение

const parent = {
    name: "Stacey",
    surname: "Moore",
    age: 54,
    heritage: "Irish",
};
const child = Object.create(parent);
child.name = "Jason";
child.age = 27;
console.log(child);
console.log(parent.isPrototypeOf(child)); 
console.log(child.hasOwnProperty("name"));
console.log(child.name);
console.log(child.hasOwnProperty("age"));
console.log(child.legs);

// Задача 5

// Задача: цепочка прототипов
// Задание
// Измени код, построив цепочку прототипов так, чтобы объект ancestor был прототипом для parent, а тот в свою очередь был прототипом для child.
// Тесты
// Объявлена переменная ancestor
// Значение переменной ancestor это объект.
// Объявлена переменная parent
// Значение переменной parent это объект.
// Объявлена переменная child
// Значение переменной child это объект.
// Вызов ancestor.isPrototypeOf("parent") возвращает true
// Вызов parent.isPrototypeOf("child") возвращает true
// Вызов ancestor.hasOwnProperty("surname") возвращает true
// Обращение к ancestor.surname возвращает "Dawson"
// Вызов parent.hasOwnProperty("surname") возвращает true
// Обращение к parent.surname возвращает "Moore"
// Вызов child.hasOwnProperty("surname") возвращает false
// Обращение к child.surname возвращает "Moore"
// Вызов ancestor.hasOwnProperty("heritage") возвращает true
// Обращение к ancestor.heritage возвращает "Irish"
// Вызов parent.hasOwnProperty("heritage") возвращает false
// Обращение к parent.heritage возвращает "Irish"
// Вызов child.hasOwnProperty("heritage") возвращает false
// Обращение к child.heritage возвращает "Irish"
// Используется метод Object.create()

const ancestor = {
  name: "Paul",
  age: 83,
  surname: "Dawson",
  heritage: "Irish",
};
// Change code below this line
const parent = {};
parent.name = "Stacey";
parent.surname = "Moore";
parent.age = 54;
const child = {};
child.name = "Jason";
child.age = 27;
// Change code above this line

// Решение

const ancestor = {
  name: "Paul",
  age: 83,
  surname: "Dawson",
  heritage: "Irish",
};
const parent = Object.create(ancestor);
parent.name = "Stacey";
parent.surname = "Moore";
parent.age = 54;
const child = Object.create(parent);
child.name = "Jason";
child.age = 27;

// Задача 6

// Объявление класса
// Синтаксис литерала объекта позволяет создать один объект. Но часто нужно создать много однотипных объектов с одинаковым набором свойств, но разными значениями и методами для взаимодействия со ними. Всё это нужно сделать динамичекски, во время выполнения программы. Для этого используют классы - специальный синтаксис объявления функции для создания объектов.
// Объявление класса начинается с ключевого слова class, после которого идёт имя класса и фигурные скобки - его тело. Классы принято называть с большой буквы, а в самом названии отражать тип создаваемого объекта (существительное).
// class User {
// Тело класса
// }// const mango = new User();
// console.log(mango); // {}
// const poly = new User();
// console.log(poly); // {}
// Результат вызова new User() это объект, который называется экземпляр класса, потому что содержит данные и поведение, описываемые классом.
// Задание
// Используя ключевое слово class объяви класс Car с пустым телом.
// Тесты
// Объявлен класс Car
// Результат вызова new Car() это пустой объект

// Решение

class Car { }

// Задача 7

// Конструктор класса
// Для инициализации экземпляра в классе есть метод constructor. Если он не объявлен, создаётся конструктор по умолчанию - пустая функция, которая не изменяет экземпляр.
// class User {
//  Синтаксис объявления метода класса
//   constructor(name, email) {
//    Инициализация свойств экземпляра
//     this.name = name;
//     this.email = email;
//   }
// }
// const mango = new User("Mango", "mango@mail.com");
// console.log(mango); // { name: 'Mango', email: 'mango@mail.com' }
// const poly = new User("Poly", "poly@mail.com");
// console.log(poly); // { name: 'Poly', email: 'poly@mail.com' }
// Вызов класса с оператором new приводит к созданию нового объекта и вызову конструктора в контексте этого объекта. То есть this внутри конструктора будет ссылаться на новосозданный объект. Это позволяет добавлять каждому объекту свойства с одинаковыми именами, но разными значениями.
// Свойства name и email называются публичные свойства, потому что они будут собственными свойствами объекта-экземпляра и к ним можно будет получить доступ обратившись через точку.
// Задание
// Добавь классу Car метод constructor который принимает три параметра:
// brand - марка автомобиля.
// model - модель автомобиля.
// price - цена автомобиля.
// Класс Car должен создавать объект с одноимёнными свойствами brand, model и price, значениями которых должны быть переданные аргументы во время её вызова с оператором new.
// Тесты
// Объявлен класс Car
// У класса Car есть метод constructor
// В результате вызова new Car("Audi", "Q3", 36000) получится объект { brand: "Audi", model: "Q3", price: 36000 }
// В результате вызова new Car("BMW", "X5", 58900) получится объект { brand: "BMW", model: "X5", price: 58900 }
// В результате вызова new Car("Nissan","Murano", 31700) получится объект { brand: "Nissan", model: "Murano", price: 31700 }

class Car {
  // Change code below this line
  // Change code above this line
}

// Решение

class Car {
constructor(brand, model, price) {
    this.brand = brand;
    this.model = model;
    this.price = price;
    }
}

// Задача 8

// Объект параметров
// Класс может принимать большое количество входных данных для свойств будущего объекта. Если параметров много (больше 2-х), то обычно применяют паттерн «Объект параметров». Идея этого паттерна в том, чтобы передавать в качестве параметра один объект с логично именованными свойствами. Значения свойств такого объекта заменят набор аргументов.
// class User {
//   Деструктуризируем объект
//   constructor({ name, email }) {
//     this.name = name;
//     this.email = email;
//   }
// }
// const mango = new User({
//   name: "Mango",
//   email: "mango@mail.com",
// });
// console.log(mango); // { name: "Mango", email: "mango@mail.com" }
// const poly = new User({
//   name: "Poly",
//   email: "poly@mail.com",
// });
// console.log(poly); // { name: "Poly", email: "poly@mail.com" }
// Задание
// Выполни рефакторинг класса Car так, чтобы он принимал один параметр - объект со свойсвами brand, model и price. Деструктуризируй объект в сигнатуре (подписи) конструктора.
// Тесты
// Объявлен класс Car
// У класса Car есть метод constructor
// В результате вызова new Car({ brand: "Audi", model: "Q3", price: 36000 }) получится объект { brand: "Audi", model: "Q3", price: 36000 }
// В результате вызова new Car({ brand: "BMW", model: "X5", price: 58900 }) получится объект { brand: "BMW", model: "X5", price: 58900 }
// В результате вызова new Car({ brand: "Nissan", model: "Murano", price: 31700 }) получится объект { brand: "Nissan", model: "Murano", price: 31700 }

class Car {
  // Change code below this line
  constructor(brand, model, price) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
  // Change code above this line
}

// Решение

class Car {
  constructor({brand, model, price}) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
 }

// Задача 9

// Методы класса
// Для работы со свойствами будущего экземпляра используются методы класса. Методы - это просто функции, но с одним отличием, они доступны экземпляру класса.
// class User {
//   constructor({ name, email }) {
//     this.name = name;
//     this.email = email;
//   }
//   Метод getEmail
//   getEmail() {
//     return this.email;
//   }
//   Метод changeEmail
//   changeEmail(newEmail) {
//     this.email = newEmail;
//   }
// }
// Задание
// Добавь классу Car два метода.
// getPrice() - возвращает значение свойства price из объекта который его будет вызывать.
// changePrice(newPrice) - обновляет значение свойства price у объекта который его будет вызывать на newPrice.
// Тесты
// В классе Car объявлен метод getPrice
// Метод getPrice возвращает значение свойства price экземпляра класса который его вызывает
// В классе Car объявлен метод changePrice
// Метод changePrice изменяет значение свойства price экземпляра класса который его вызывает

class Car {
  constructor({ brand, model, price }) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
  // Change code below this line
  // Change code above this line
}

// Решение

class Car {
  constructor({ brand, model, price }) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }getPrice(price) {
    return this.price;
  }
  changePrice(newPrice) {
    this.price = newPrice;
}
}

// Задача 10

// Задача: склад
// Задание
// Напиши класс Storage, который будет создавать объекты для управления складом товаров. Класс ожидает только один аргумент - начальный массив товаров, который записывается на создаваемый объект в свойство items.
// Объяви следующие методы класса:
// getItems() - возвращает массив текущих товаров в свойстве items объекта который вызывает этот метод.
// addItem(newItem) - принимает новый товар newItem и добавляет его в массив товаров в свойстве items объекта который вызывает этот метод.
// removeItem(itemToRemove) - принимает товар itemToRemove и удаляет его из массива товаров в свойстве items объекта который вызывает этот метод.
// Под комментарием мы добавили инициализацию экземпляра и вызовы методов в той последовательности, в которой твой код будут проверять тесты. Пожалуйста ничего там не меняй.
// Тесты
// Объявлен класс Storage
// В классе Storage объявлен метод getItems
// В классе Storage объявлен метод addItem
// В классе Storage объявлен метод removeItem
// Метод getItems возвращает значение свойства items экземпляра класса который его вызывает
// Метод addItem изменяет свойство items экземпляра класса который его вызывает
// Метод removeItem изменяет свойство items экземпляра класса который его вызывает
// В результате вызова new Storage(["Nanitoids", "Prolonger", "Antigravitator"]) значение переменной storage это объект
// У объекта storage есть свойство items
// Первый вызов storage.getItems(), сразу после инциализации экземпляра, возвращает массив ["Nanitoids", "Prolonger", "Antigravitator"]
// Второй вызов, storage.getItems(), после вызова storage.addItem("Droid"), возвращает массив ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// Третий вызов storage.getItems(), после вызова storage.removeItem("Prolonger"), возвращает массив ["Nanitoids", "Antigravitator", "Droid"]

// Change code above this line
const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// Решение

class Storage {
  constructor (items) {
  this.items = items;
  };
 getItems() {
  return this.items;
  };
 addItem(newItem) {
  return this.items.push(newItem);
  };
 removeItem(itemToRemove) {
   for (const item of this.items) {
   if (item === itemToRemove) {
  const index = this.items.indexOf(itemToRemove);
  this.items.splice(index, 1); 
   return this.items;
	 }
	}
}
}
const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// Задача 11

// Задача: конструктор строк
// Задание
// Напиши класс StringBuilder, который принимает один параметр initialValue - произвольную строку, которая записывается на создаваемый объект в свойство value.

// Объяви следующие методы класса:

// getValue() - возвращает текущее значение свойства value.
// padEnd(str) - получает парметр str (строку) и добавляет её в конец значения свойства value объекта который вызывает этот метод.
// padStart(str) - получает парметр str (строку) и добавляет её в начало значения свойства value объекта который вызывает этот метод.
// padBoth(str) - получает парметр str (строку) и добавляет её в начало и в конец значения свойства value объекта который вызывает этот метод.
// Под комментарием мы добавили инициализацию экземпляра и вызовы методов в той последовательности, в которой твой код будут проверять тесты. Пожалуйста ничего там не меняй.

// Тесты
// Объявлен класс StringBuilder
// В классе StringBuilder объявлен метод getValue
// Метод getValue возвращает значение свойства value экземпляра класса который его вызывает
// В классе StringBuilder объявлен метод padEnd
// Метод padEnd изменяет свойство value экземпляра класса, который его вызывает
// В классе StringBuilder объявлен метод padStart
// Метод padStart изменяет свойство value экземпляра класса который его вызывает
// В классе StringBuilder объявлен метод padBoth
// Метод padBoth изменяет свойство value экземпляра класса который его вызывает
// В результате вызова new StringBuilder(".") значение переменной builder это объект
// У объекта builder есть свойство value
// Первый вызов builder.getValue(), сразу после инциализации экземпляра, возвращает строку .
// Второй вызов builder.getValue(), после вызова builder.padStart("^"), возвращает строку ^.
// Третий вызов builder.getValue(), после вызова builder.padEnd("^"), возвращает строку ^.^
// Четвёртый вызов builder.getValue(), после вызова builder.padBoth("="), возвращает строку =^.^=

// Change code above this line
const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="

// Решение

class StringBuilder {
  constructor(initialValue) {
    this.value = initialValue;
  }
  getValue() {
    return this.value;
  }
  padEnd(str) {
    this.value = this.value + str;
  }
  padStart(str) {
    this.value = str + this.value;
  }
  padBoth(str) {
    this.value = str + this.value + str;
  }
}

// Задача 12

// Приватные свойства
// Инкапсуляция - это концепция, предписывающая скрывать то, как устроен класс. Пользователь класса должен получать доступ только к публичному интерфейсу - набору публичных свойств и методов класса. Остальные методы и свойства (не публичные) должны быть не доступны.
// В классах инкапсуляция реализуется приватными свойствами, доступ к которым можно получить только внутри класса.
// Допустим, почта пользователя должна быть недоступна для прямого изменения из вне, то есть приватна. Добавляя к имени свойства символ # мы делаем его приватным. Объявление приватного свойства до инциализации в конструкторе - обязательно.
// class User {
//   Необязательное объявление публичных свойств
//   name;
//   Обязательное объявление приватных свойств
//   #email;
//   constructor({ name, email }) {
//     this.name = name;
//     this.#email = email;
//   }
//   getEmail() {
//     return this.#email;
//   }
//   changeEmail(newEmail) {
//     this.#email = newEmail;
//   }
// }
// const mango = new User({
//   name: "Mango",
//   email: "mango@mail.com",
// });
// mango.changeEmail("mango@supermail.com");
// console.log(mango.getEmail()); // mango@supermail.com
// console.log(mango.#email); // Будет ошибка, это приватное свойство
// Методы класса также могут быть приватными, то есть доступны только в теле класса. Для этого перед их именем необходимо поставить символ #.
// Задание
// Выполни рефакторинг класса Car так, чтобы свойство brand было приватным и добавь два метода для публичного интерфейса, для чтения и изменения этого свойства.
// getBrand() - возвращает значение приватного свойства brand.
// changeBrand(newBrand) - изменяет значение приватного свойства brand на newBrand.
// Тесты
// Объявлен класс Car
// Свойство brand в классе Car объявлено приватным
// Конструктор класса принимает объект со свойствами brand, model и price
// В результате вызова new Car({ brand: "Audi", model: "Q3", price: 36000 }) получится объект { model: "Q3", price: 36000 }
// В результате вызова new Car({ brand: "bmw", model: "X5", price: 58900 }) получится объект { model: "X5", price: 58900 }
// В результате вызова new Car({ brand: "Nissan", model: "Murano", price: 31700 }) получится объект { model: "Murano", price: 31700 }
// У экземпляра нет публичного свойства brand
// Метод getBrand() возвращает значение приватного свойства brand.
// Метод changeBrand("Honda") изменяет значение приватного свойства brand на "Honda"

class Car {
  // Change code below this line
  constructor({ brand, model, price }) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
  // Change code above this line
}

// Решение

