let args = process.argv;
args = args.slice(2);

function timer(num) {
  for (let el of num) {
  if (el < 0 || isNaN(el))  
  return;
  {  setTimeout(() => {
        process.stdout.write('\x07');
        console.log('ding')
   }, Number(el * 1000))
  }
  }
};
  timer(args)


