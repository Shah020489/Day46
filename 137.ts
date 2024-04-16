const x: number = 10;
const y: number = 20;
try {
   if (x > y) {
       console.log('x is less than y.');
   } else {
       throw new Error('x is not less than y.');
   }
} catch (error) {
   console.error('Catch block executed:', error);
}