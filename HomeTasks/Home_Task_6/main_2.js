(function(){
    'use strict';
           let firstName = prompt('Введите имя');
           let lastName = prompt('Введите фамилию');


      //////////////Ф-ция определения пола


    let gender,
        str1 = 'М',
        str2 = 'м',
        str3 = 'Ж',
        str4 = 'ж';
           function sex() {

               do {
                   gender = prompt('Введите пол как М или Ж');
               }
               while (  gender !== str1 && gender !== str2 && gender !== str3 && gender !== str4);
           return gender;
           }
    sex();

           let result;


    ////////Ф-ция определения пенсионного возраста

    let message1 = '';
    let message2 = '';
           function askAge() {
               let check = result;

                   do {
                       result = parseInt(prompt('Введите возраст'));
                   }
                   while ( result <=0);
                       if ( (check > 63) && (check = 'M' || 'м') ) {
                           message1 = 'Да';
                       } else if ((check > 60) && (check = 'Ж' || 'ж') ) {
                           message1 = 'Да';
                       } else {
                           message2 = 'Нет';
                       }
               return result;
           }
    askAge();

    alert ('Полное имя :' + ' ' + firstName + ' ' + lastName + '\n' + 'Пол :' + ' ' + gender + '\n' + 'На пенсии :' + ' ' + message1 + message2);

    //   ////////////////////////alert(`Полное имя : ${firstName} ${lastName},  Пол : ${gender}, На пенсии : ${message1 + message2}`);

}());