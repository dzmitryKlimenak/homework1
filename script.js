// HOMEWORK 1 !!!!

// ДЗ1 ЗАДАЧА 1

(function () {
    'use strict';

    function PolygonPoint (arr) {
        let obj = {};

        for (let i = 0; i < arr.length; i++) {
            let str = String(arr[i].x) + ',' + String(arr[i].y);
            obj[str] = true;
        }
        return Object.keys(obj).join(' ');
    }

    let arr = [{x : 12, y : 13}, {x : 56, y : 45}, {x : 77, y : 81}, {x : 5, y : 667}];

    console.log(PolygonPoint(arr));

})();

// ДЗ1 ЗАДАЧА 2

(function () {
    'use strict';

    let numbers = [5, -8, 1, 2, 0, 2, -4, 4, 5, 5, 6, 0];

    let uniqueNum = numbers.filter(function(value) {
        return numbers.indexOf(value) === numbers.lastIndexOf(value);
});

    console.log(uniqueNum);

})();














