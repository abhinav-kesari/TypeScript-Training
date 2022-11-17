var review = [1, 23, 4.5, 5];
var total = 0;
for (var i = 0; i < review.length; i++) {
    console.log(review[i]);
    total += review[i];
}
console.log(total);
var avg = total / review.length;
console.log(avg);
