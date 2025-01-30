
let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

console.log('secret Message Length = ' + secretMessage.length);

secretMessage.pop()

console.log('secret Message Length = ' + secretMessage.length);

secretMessage.push('to','Program')

let indexOfEasily = secretMessage.indexOf('easily');
secretMessage[indexOfEasily] = 'right'

//remove first string of the array
secretMessage.shift()
secretMessage.unshift('Programming')
secretMessage.splice(6,10,'know')


console.log(secretMessage.join(' '))
