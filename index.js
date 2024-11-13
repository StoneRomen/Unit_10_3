
// Створіть об'єкт, який матиме одну властивість з масивом об'єктів. Які представляють контакти у вашій контактній книзі. Кожен об'єкт має містити ім'я, номер телефону та адресу електронної пошти. Додайте метод для пошуку контакту за ім'ям та метод для додавання нових контактів.


let contactBook = {
  contacts: [
    { name: "Freddy", phone: "+38066-666-13-13", email: "krueger@elm13.com" },
    { name: "Bruce", phone: "+38098-444-33-22", email: "batman@gothamhero.com" }
  ],

  findContact: function (name) {
    return this.contacts.find(contact => contact.name === name) || "Нема такого";
  },

  addContact: function (name, phone, email) {
    this.contacts.push({ name, phone, email });
  }
};

// Додавання нового контакту:
contactBook.addContact("Stepan", "+38091-909-19-59", "bander@slavanacii.com");

// Пошук контакту за ім'ям:
console.log(contactBook.findContact("Freddy"));

// Пошук неіснуючого контакту:
console.log(contactBook.findContact("Wayne")); 
