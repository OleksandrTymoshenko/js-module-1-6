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

