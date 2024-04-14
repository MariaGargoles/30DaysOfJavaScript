//The following is an array of 10 students ages:


const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

/*
    Sort the array and find the min and max age
    Find the median age(one middle item or two middle items divided by two)
    Find the average age(all items divided by number of items)
    Find the range of the ages(max minus min)
    Compare the value of (min - average) and (max - average), use abs() method 1.Slice the first ten countries from the countries array
*/

//short

const sortAges = ages.sort();
console.log(sortAges)

//median

let medianAge;
if (ages.length % 2 === 0) {
    medianAge = (ages[ages.length / 2 - 1] + ages[ages.length / 2]) / 2;
} else {
    medianAge = ages[Math.floor(ages.length / 2)];
}
console.log(medianAge);

//Average

const sumAges = ages.reduce((acc, curr) => acc + curr, 0);
const averageAge = sumAges / ages.length;
console.log(averageAge);

//range
const ageRange = maxAge - minAge;
console.log(ageRange);

//Compare 
const diffMinAvg = Math.abs(minAge - averageAge);
const diffMaxAvg = Math.abs(maxAge - averageAge);
console.log(diffMinAvg);
console.log(diffMaxAvg);


