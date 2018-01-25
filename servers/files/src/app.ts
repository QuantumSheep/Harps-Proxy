import * as express from 'express';
import * as router from './routes/router';
import * as http from 'http';
import * as helmet from 'helmet';
import * as cookieParser from 'cookie-parser';
import * as bodyParser from 'body-parser';
import * as csrf from 'csurf';
import { config } from 'harps-services';

const app = express();
const server = new http.Server(app);

// Autorize proxy connections
app.set('trust proxy', 1);

// Resolve some HTTP issues
app.use(helmet());

// Use the cookie parser middleware
app.use(cookieParser());

// Add the capacity to receive HTTP Request data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

// Enable CSRF protection
app.use(csrf({
    cookie: true
}));

app.use('/avatars', router.avatars);

// Route not found
app.get('*', (req, res) => {
    res.status(404);
    res.send("404");
});

// Listen to a specific port
server.listen(config.servers.files.port, () => {
    console.log(`Files service started on port ${config.servers.files.port} !`);
});