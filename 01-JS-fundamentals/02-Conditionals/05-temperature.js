// Check Temparture 
/**
 * Temp below 20 its winter
 * Temp above 40 its hot
 * Temp between 20 and 40 spring
 * 45 and above should be summer
 */


//>45 = summer;
//>40 = hot;




let temp;
if(temp>=45) {
    console.log('It is summer');
} else if(temp>40) {
    console.log('It is hot');
} else if(temp>=20) {
    console.log('It is spring');
} else {
    console.log('It is winter');
} 

