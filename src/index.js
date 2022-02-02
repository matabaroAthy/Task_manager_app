const application = require('./app/index')
const port = process.env.PORT || 3000;

application.listen(port,console.log(`server listenning on port ${port}...`));