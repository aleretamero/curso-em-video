let num = [5, 8, 4];
num[3] = 6;
num.push(2);
num.sort();
//console.log(num)

/*
for (let pos=0; pos < num.length; pos++)
{
    console.log(num[pos])
}
*/

for (let pos in num) {
  console.log(num[pos]);
}
