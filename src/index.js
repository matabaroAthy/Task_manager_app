const application = require('./app/index')
const connectDB = require('./db/config/connect');

const port = process.env.PORT || 3000;

const run = async () => {
    try {
        await connectDB();
        application.listen(port,console.log(`server listenning on port ${port}...`));
    }catch (e) {
        console.log(e);
    }
}
run();
