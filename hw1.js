//создаем конструктор, что бы не пилить каждый объект вручную 
var Cars = function (car, model, speed, fuel, ident) { //функция принимает аргументы, которые будут содержимым свойств объекта
    this.car = car; // через this обращаемся к свойствам созданого объекта и передаем им значения, указаны в аргументах
    this.model = model;
    this.speed = speed;
    this.fuel = fuel;
    this.run = function () {
    console.log(this.car + ' ' + this.model + " rides at a speed of " + this.speed + " on " + this.fuel);
    }; // метод объекта выводит фразу с подставленными значениями свойств объекта
    this.number = { //регистрационный номер машины
        ident: ident,
        numb: function () {
            return Math.floor(Math.random() * 9999);
        } //функция возвращает рандомное число от 1 до 9999, что бы не придумывать номера машин
    };
};
//вызываем конструктор с помощью new для создания 100500 машинок
var tesla = new Cars('tesla', 'asd', 230, 'electro', 'ha');
var lada = new Cars('lada', 'x1', 200, 'petrol', 'hb');
var nissan = new Cars('nissan', 'x2', 240, 'electro', 'fg');
var mers = new Cars('mers', 'x3', 250, 'petrol', 'jh');
var toyota = new Cars('toyota', 'x4', 260, 'petrol', 'df');
var honda = new Cars('honda', 'x5', 130, 'diesel', 'kl');
var hundai = new Cars('hundai', 'x6', 150, 'petrol', 'vb');
var renault = new Cars('renault', 'x7', 160, 'electro', 'sd');
var pegout = new Cars('pegout', 'x8', 170, 'petrol', 'nn');
var tavria = new Cars('tavria', 'x9', 140, 'diesel', 'iu');

console.log(tesla, tesla.run(), tesla['number'].numb());
// смотрим, что получилось в итоге для каждого объекта

var tractor = {
    tesla,
    lada
}