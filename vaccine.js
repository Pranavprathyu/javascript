//[ no,district,+ve cases,death rate,curred rate,1st dose vaccine,2nd dose vaccine]
covid_data = [
    [1,'Ernakulam',34000,2000,23000,20000,2000],
    [2,'Idukki',14000,3000,25000,30000,1000],
    [3,'Thrissur',24000,4000,33000,24000,2500],
    [4,'Pathanamthitta',20000,2000,45000,22000,1500],
    [5,'Kozhikode',44000,5000,12000,21000,500],
    [6,'Palakkad',12000,1000,20000,23000,3400],
    [7,'Kottayam',27000,1500,27000,14000,1000],
    [8,'Kollam',14000,2500,25000,18000,2700]
             ]

//1. district having Highest +ve case - 

// let positivecase = covid_data.map((a)=>a[2])
// let Highest = positivecase.reduce((a,b)=>a>b?a:b)
// let HighestDistrict = covid_data.filter((a)=>a[2]==Highest)
// let district = HighestDistrict.map((a)=>a[1])
// console.log(district);






//2. district having Highest 1st dose vaccine - 

// let firstDose = covid_data.map((a)=>a[5])
// let Highest = firstDose.reduce((a,b)=>a>b?a:b)
// let HighestDistrict = covid_data.filter((a)=>a[5]==Highest)
// let district = HighestDistrict.map((a)=>a[1])
// console.log(district);



console.log('-------------------------------------------');
    

//3. district having lowest death rate - 

// let deathRATE = covid_data.map((a)=>a[3])
// let Lowest = deathRATE.reduce((a,b)=>a<b?a:b)
// let lowestDistrict = covid_data.filter((a)=>a[3]==Lowest)
// let district = lowestDistrict.map((a)=>a[1])
// console.log(district);

console.log('-------------------------------------------');
  


 //4. sort data with +ve case in descending order - 

//  let positivecase = covid_data.sort((a,b)=>{return a[2]-b[2]})
//  console.log(positivecase);
 
console.log('-------------------------------------------');
    
//5. is district with +ve cases > 15000 -


// let bDistrict = covid_data.filter((a)=>a[2]>15000)
// let district = bDistrict.map((a)=>a[1])
// console.log(district);

console.log('-------------------------------------------');

//6. sort data with 1st dose vaccine - 

// let firstDose = covid_data.sort((a,b)=> {return a[5]-b[5]})
// console.log(firstDose);

// console.log('-------------------------------------------');

// //7. Print Thrissur details - 
// let District = covid_data.filter((a)=>a[1]=="Thrissur")
// console.log(District);

// console.log('-------------------------------------------');