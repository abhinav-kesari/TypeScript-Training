let review : number[] = [1,23,4.5,5];
let total : number = 0;

for(let i = 0 ; i < review.length;i++){
    console.log(review[i]);
    total+= review[i];
}
console.log(total);
let avg : number = total / review.length ;
console.log(avg);  