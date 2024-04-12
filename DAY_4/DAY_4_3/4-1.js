/*
    Write a program which tells the number of days in a month.

  Enter a month: January
  January has 31 days.

  Enter a month: JANUARY
  January has 31 day

  Enter a month: February
  February has 28 days.

  Enter a month: FEbruary
  February has 28 days.*/


  let moths_31 =['enero', 'marzo', 'mayo', 'julio', 'agosto', 'octubre', 'diciembre']; 
  let moths_30 =[ 'abril', 'junio', 'septiembre', 'noviembre'];
  let feb = ['febrero'];

  let moth = prompt("Enter a moth: ");
  const monthLower = moth.toLowerCase();


  if (moths_31.includes(monthLower)){
    console.log(`${moth} has 31 days`)
}else if (moths_30.includes(monthLower)){
    console.log(`${moth} has 30 days`)
}else if(feb.includes(monthLower)){
    console.log(`${moth} has 28 or 29 days`)
}else{
    console.log("Not valid")
}