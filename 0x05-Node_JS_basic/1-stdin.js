const { stdin, stdout } = require("process");

stdout.write('Welcome to Holberton School, what is your name?\n');
stdin.setEncoding('utf-8');
stdin.on('readable', () => {
    const name = stdin.read();
    if (name !== null) {
        stdout.write(`Your name is: ${name}`);
    }
});

stdin.on('end', () => {
    stdout.write('This important software is now closing\n');
});