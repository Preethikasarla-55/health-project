// Example: Handling an error in a bot
const { ActivityHandler } = require('botbuilder');

class MyBot extends ActivityHandler {
    constructor() {
        super();

        this.onMessage(async (context, next) => {
            try {
                // Your bot logic that might cause an error
                await context.sendActivity('Hello, this is my bot!');
                // ...
            } catch (error) {
                console.error('An error occurred:', error);
                await context.sendActivity('Oops, something went wrong!');
                // You can handle the error or log it for debugging purposes
            } finally {
                await next();
            }
        });
    }
}

module.exports.MyBot = MyBot;
