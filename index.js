// Task 1.  1. a və b ədədimiz var. Əgər a b-dən böyükdürsə, consolda "a b-den boyukdur" yazılsın, 
// bərabərdirsə "beraber", digər halda isə "a b den kicikdir";
console.log("Task 1");

var a = 40;
var b = 201;

  if (a > b) {
  console.log("a b den boyukdur");
} else if (a === b) {
  console.log("beraberdir");
} else {
  console.log("a b den kicikdir");
}

// Task 2. Students arrayində indeksi cüt olan tələbələri yeni arrayə əlavə edib, yeni yaranmış arrayi consolda yazdırın;
console.log("Task 2");

let students = [

    {id:1, name: "Ali", surname: "Alisoy", age:20, grade: 95},
    
    {id:2, name: "Vusala", surname: "Nabiyeva", age:34, grade: 77},
    
    {id:3, name: "Aliya", surname: "Gurbanzade", age:14, grade: 98},
    
    {id:4, name: "Sabir", surname: "Nuruyev", age:15, grade: 54},
    
    {id:5, name: "Mehman", surname: "Heydarov", age:22, grade: 100},
    
    {id:6, name: "Sevana", surname: "Mammadli", age:41, grade: 35},
    
    {id:7, name: "Ilham", surname: "Babayev", age:24, grade: 95},
    
    {id:8, name: "Namiq", surname: "Gulahmedov", age:20, grade: 95},
    
    {id:9, name: "Aygun", surname: "Kazimova", age:24, grade: 100}    
    ]

    let task2Array = [];
    for (let i = 0; i < students.length; i++) {
      if ( i % 2 == 0 ) {
        task2Array.push(students[i])
       
      } 
    }
    console.log(task2Array);


    // Task 3.  Students arrayində id-i tək olan tələbələrin adlarını consolda yazdırın.

    console.log("Task 3");

    for (let i = 0; i < students.length; i++) {
      if ( students[i].id % 2 == 1) {
        console.log(students[i].name);
      }      
    }


    // Task 4. Students arrayinda yaşı 20+ olan tələbələri yeni arrayə əlavə edib, yeni yaranmış arrayi consolda yazdırın;

    console.log("Task 4");


    var task4Array = [];
    for (let i = 0; i < students.length; i++) {
      if (students[i].age > 20) {
        task4Array.push(students[i])
      }
    }

    console.log(task4Array);



    // Task 5.  Students arrayinda id-i cüt və grade-i 90+ olan tələbələri  yeni arrayə əlavə edib,
    // yeni yaranmış arrayi consolda yazdırın;

    console.log("Task 5");


    var task5Array = [];
    for (let i = 0; i < students.length; i++) {
      if (students[i].id % 2 === 0 && students[i].grade > 90) {
        task5Array.push(students[i])
      }      
    }
    console.log(task5Array);


    // Task 6. Students arrayinda grade-i 100 və ya 95-ə bərabər olan tələbələrin adlarını yeni arrayə əlavə edib,
    // yeni yaranmış arrayi consolda yazdırın;

    console.log("Task 6");


    var task6Array = [];
    for (let i = 0; i < students.length; i++) {
      if (students[i].grade == 95 || students[i].grade == 100) {
        task6Array.push(students[i])
      }      
    }
    console.log(task6Array);




