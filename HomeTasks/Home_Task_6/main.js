(function(){
    'use strict';

    let inputValues = [4, 2, 1, 5, 8, 3, 1, 8, 5, 4, 3];

    function findDuplicates(obj) {
        let result = {};
        for (let i = 0; i < obj.length; ++i)
        {
            let a = obj[i];
            result[a] = result[a] + 1 || 1;
        }

        let out = document.getElementById('out');
        for (let key in result)
            out.innerHTML += key + ' - ' + result[key] + '<br>';
           // console.log(key + ' - ' + result[key]);

    }

    findDuplicates(inputValues);


/////////////////делаем ДЗ на занятие/////////////////////////////


    // let numbers = prompt('Введите цифры').split(' ').map(str => parseInt(str));
    //
    // alert(findDuplicates(numbers));
    //
    // function findDuplicates(numbers) {
    //     let results = {};
    //
    //     for(let a of numbers) {
    //         if (results[a]) {
    //             results[a]++;
    //         } else {
    //             results[a] = 1;
    //         }
    //     }



      // let out = document.getElementById('out');
      //       for (let key in results)
      //           out.innerHTML += key + ' - ' + results[key] + '<br>';
      //   console.log(key + ' - ' + results[key]);
       // console.log( 'number = ' + acc);
       // console.log( num);

    //         let out = results.reduce (function (acc, num) {
    //
    //         return `${num} - ${acc[num]}\n` ;
    //     });
    //
    //        return out;
    // }




                //let inputValues = [1, 2, 1, 5, 8, 3, 1, 8, 5, 4, 3];
                // функцию findDuplicates требутся реализовать
                //let result7 = findDuplicates(inputValues);
                //  console.log(result);
                // Результат должен быть таким:
                // 1 - 3
                // 5 - 2
                // 8 - 2
                // 3 - 2

    //let inputValues = [1, 2, 1, 5, 8, 3, 1, 8, 5, 4, 3];

    // function findDuplicates(arr) {
    //     let result = [];
    //     let i = 0;
    //
    //   arr.sort().reduce(function(sum, item) {
    //         result.push(sum);
    //         if (sum == item) (
    //             ++result[i]
    //         )
    //         return sum + item;
    //     });
    //     result.push(result);
    // return result;
    // }
    // console.log(findDuplicates([1, 1, 2, 3]));
    //

    //let result7 = findDuplicates(inputValues);

    ///////////////////////////////////////////////////////////////////////////////
    // let arr = [111, 1, 1, 2, 3, 4, 4, 5, 6, 6, 7];
    // let sorted_arr = arr.slice().sort();
    //
    // let results = [];
    // for (let i = 0; i < sorted_arr.length; i++) {
    //
    //     if (sorted_arr[i + 1] !== sorted_arr[i]) {
    //             results.push(sorted_arr[i]);
    //     }
    // }
    //     console.log(results);



    /////////////////////////////////////////////////////////////////////////////////////////

    // function getSums(arr7) {
    //     let result = [];
    //
    //     let totalSum = arr7.reduce(function(sum, item) {
    //         result.push(sum);
    //         return sum + item;
    //     });
    //     result.push(totalSum);
    //     return result;
    // }
    // console.log(getSums([1,2,3,4,5,6,7])); // результат: 1,3,6,10

    ///////////////////второй способ/////////////////////////////////////

    // var arr = [1, 3, 4, 1, 111, 9, 4, 5];
    // var result = [];
    // arr.forEach(function(a){
    //     if (result[a] != undefined)
    //         ++result[a];
    //     else
    //         result[a] = 1;
    // });
    // for (var key in result)
    //     console.log('число ' + key + ' == ' + result[key] + ' раз(а) <br>');



// //////////////////ForEach////////////////////////
//     let arr = ["Яблоко", "Апельсин", "Груша", 1, 2, 32];
//     arr.forEach(function(item, i, arr) {
//         console.log( i + ": " + item + " (массив:" + arr + ")" );
//     });
//
// //////////////////filter////////////////////////
//     let arr2 = [1, -1, 2, -2, 3, 0];
//     let positiveArr = arr2.filter(function(item, arr2) {
//         return item >= 0;
//     });
//         console.log( positiveArr + arr2); // 1,2,3
//
//
// //////////////////map////////////////////////
//     let names = ['HTML', 'CSS', 'JavaScript'];
//     let nameLengths = names.map(function(name) {
//         return name.length;
//     });
// // получили массив с длинами
//     console.log( nameLengths ); // 4,3,10
//
// //////////////////every some ////////////////////////
//     let arr3 = [1, -1, 2, -2, 3];
//
//     function isPositive(number) {
//         return number > 0;
//     }
//
//     console.log( arr3.every(isPositive) ); // false, не все положительные
//     console.log( arr3.some(isPositive) ); // true, есть хоть одно положительное
//
//
//         //////////////////reduce ////////////////////////
//             let arr4 = [1, 2, 3, 4, 5]
//
//         // для каждого элемента массива запустить функцию,
//         // промежуточный результат передавать первым аргументом далее
//             let result = arr4.reduce(function(previousValue, currentItem) {
//                 return previousValue + currentItem;
//             }, 0);
//         console.log( result + arr4); // 15
//
//
//     //////////////////переписать в map ////////////////////////
//
//     let arr5 = ["Есть", "жизнь", "на", "Марсе"];
//     let arrLength = [];
//     for (let i = 0; i < arr5.length; i++) {
//         arrLength[i] = arr5[i].length;
//     }
//     console.log( arrLength ); // 4,5,2,5
//
//
//     let arr6 = ["Есть", "жизнь", "на", "Марсе"];
//     let arrLength2 = arr6.map(function(item) {
//         return item.length;
//     });
//     console.log( arrLength2 ); // 4,5,2,5
//
//
//
//     ////////////////// reduce посчитать суммы getSums( arr ) = [ 1, 1+2, 1+2+3, 1+2+3+4, 1+2+3+4+5 ] = [ 1, 3, 6, 10, 15 ]  ////////////////////////
//
//     function getSums(arr7) {
//         let result = [];
//         //if (!arr7.length) return result;
//         let totalSum = arr7.reduce(function(sum, item) {
//             result.push(sum);
//             return sum + item;
//         });
//         result.push(totalSum);
//         return result;
//     }
//     console.log(getSums([1,2,3,4,5,6,7])); // результат: 1,3,6,10
//
//
//     function getSums2(arr8) {
//     let res=[];
//         //if (!arr7.length) return result;
//         let result3 = arr8.reduce(function(sum, item) {
//            res.push(sum);
//             return sum + item;
//         });
//        // result.push(totalSum);
//         return result3;
//     }
//     console.log(getSums2([1,2,3,4,5])); // результат: 1,3,6,10
//
//
//
//     //////////////////////////////////////////////////////////////////////////////
//     let fruits = ['Яблоко', 'Банан'];
//     console.log(fruits.length);
//
//     let first = fruits[0];
// // Яблоко
//
//     let last = fruits[fruits.length - 1];
// // Банан
//
// ////////итерирование по массиву /////////////////////////////////
//
//     fruits.forEach(function(item, index, array) {
//         console.log(item, index);
//     });
// // Яблоко 0
// // Банан 1
//
//     //Добавление элемента в конец массива
//         let newLength = fruits.push('Апельсин');
//     // ["Яблоко", "Банан", "Апельсин"]
//         console.log(fruits);
//
//
//     //Удаление последнего элемента массива
//
//     let last1 = fruits.pop(); // удалим Апельсин (из конца)
//     // ["Яблоко", "Банан"];
//     console.log(fruits);
//
//     //Удаление первого элемента массива
//     let first1 = fruits.shift(); // удалим Яблоко (из начала)
//     // ["Банан"];
//     console.log(fruits);
//
//     //Добавление элемента в начало массива
//         let newLength1 = fruits.unshift('Клубника') // добавляет в начало
//     // ["Клубника", "Банан"];
//     console.log(fruits);
//
//
//     //Поиск номера элемента в массиве
//
//         fruits.push('Манго');
//     // ["Клубника", "Банан", "Манго"]
//     console.log(fruits);
//         let pos = fruits.indexOf('Банан');
//     // 1
//     console.log(pos);
//
//     //Удаление элемента с определённым индексом
//     let removedItem = fruits.splice(pos, 1); // так можно удалить элемент
//
//     // ["Клубника", "Манго"]
//     console.log(fruits);
//
//
//
//     // Удаление нескольких элементов, начиная с определённого индекса
//     let vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];
//     console.log(vegetables);
// // ["Капуста", "Репа", "Редиска", "Морковка"]
//
//     let pos1 = 1, n = 2;
//
//     let removedItems = vegetables.splice(pos1, n);
// // так можно удалить элементы, n определяет количество элементов для удаления,
// // начиная с позиции(pos) и далее в направлении конца массива.
//
//     console.log(vegetables);
// // ["Капуста", "Морковка"] (исходный массив изменён)
//
//     console.log(removedItems);
// // ["Репа", "Редиска"]
//
//
// // Создание копии массива
//     var shallowCopy = fruits.slice(); // так можно создать копию массива
// // ["Клубника", "Манго"]
//     console.log(shallowCopy);




}());