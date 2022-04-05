// level {1/2/3}
// Level 2 - sum of first xfibonacci numbers

const findFibonacci = (n) => {
   let fibo = [];
   let sum = 0;
   if(n <= 0) {
      return 0;
   }
   else {
      if(n < 2) {
         return n;
      }
      else {
         fibo[0] = findFibonacci(0);
         fibo[1] = findFibonacci(1);
         sum = fibo[0] + fibo[1];
      }
   }
   for(let i = 2; i < n; i++) {
      fibo[i] = fibo[i-1] + fibo[i-2];
      sum =  sum + fibo[i];
   }
   return sum;
}

console.log(findFibonacci(7))
