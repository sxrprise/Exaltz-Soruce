module.exports = {
    name : 'math',
    description: 'does simple math',
    execute(message, args, client) {
         var number1 = args[0];
         if (isNaN(number1)) return message.channel.send('Please provide a valid number 1').then(msg => {msg.delete(1000)});
         var symbol = args[1];
         var number2 = args[2];
         console.log("Symbol:" + symbol + " Number1: " + number1 + " Number2: " + number2);
         if (isNaN(number2)) return message.channel.send('Please provide a valid number 2').then(msg => {msg.delete(1000)});

         number1 = parseInt(number1);
         number2 = parseInt(number2);
         var math = "";
         switch (symbol) {
             case "+":
                 return message.channel.send(number1 + number2); break;
             case "-":
                 return message.channel.send(number1 - number2); break;
             case "/":
                 return message.channel.send(number1 / number2); break;
             case "*":
                 return message.channel.send(number1 * number2); break;
         }

    }
}