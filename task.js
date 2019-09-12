"use strict"

function calculateQuadraticEquation(){
    let a = +window.a.value;
    let b = +window.b.value;
    let c = +window.c.value;
    let result = getResult(a,b,c);
    window.equation.textContent = `${a}*x^2 + (${b})*x + (${c}) = 0`;
    let span = window.result;
    span.textContent = "х = "+result;
}

function getResult(a,b,c){
    let result ='';
    let discrim = b**2 - 4 * a * c;
    
    if (discrim < 0) { 
      result = null;
      console.log(result);
   } else if (discrim == 0) {
       result = (-b + Math.sqrt(discrim)) / (2*a);;
       console.log(result);
   } else if (discrim > 0) {
       result = [(-b + Math.sqrt(discrim)) / (2*a), (-b - Math.sqrt(discrim)) / (2*a)];
       console.log(result);
   }
  
     return result;
}

function calculateAverageRating(){
    let marks = window.marks.value.split("").map(Number).filter((n)=> !isNaN(n) && n > 0);
    let averageMark = getAverageMark(marks);
    window.averageMark.textContent = averageMark;
}

function getAverageMark(marks){
    let sumResult = 0;
    let averageMark = '';
    const numberMarks = 5;
    for (let i = 0; i < marks.length; i++) {
      sumResult = sumResult + marks[i];
      if (marks.length > numberMarks) {
          console.log(marks.length);   
          marks.splice(numberMarks);
      } 
    }

    averageMark = sumResult / marks.length;
    console.log(averageMark);
    
    return averageMark;
 
}

function calculateDrinkTask(){
    let name = window.personName.value;
    let dateOfBirthday = new Date(window.dateOfBirthday.value);
    let drink = askDrink(name, dateOfBirthday);
    window.drink.textContent = drink;
}

function askDrink(name,dateOfBirthday){
    let currentDate  = new Date();
   let personAge = currentDate.getFullYear() - dateOfBirthday.getFullYear();
   console.log(personAge);
   let result = "";
   // Вывод сообщения на консоль в зависимости от условий
   if (personAge >= 18) {
     result = `Не желаете ли олд-фэшн, ${name}?`;
     console.log(result);
     return result;
   } else {
     result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
     console.log(result);
     return result;
   }
 
}