const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const path = require('path');
const routes =require('./routes')
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const connect =require('./config/db')
const methodOverride = require('method-override') // xu li put delete

app.use(methodOverride('_method'))

app.use(bodyParser.urlencoded({ extended: true })); // Dòng này rất quan trọng

connect();
// su dung HTTP
// app.use(morgan('combined'));

// Cấu hình để phục vụ các tệp tĩnh từ thư mục public
app.use(express.static(path.join(__dirname, '../public')));



// Sử dụng { engine } để yêu cầu `express-handlebars`
app.engine('hbs', engine({
    extname:'.hbs',
    helpers:{
        sum: (a,b) => a + b
    }
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname,'resources\\views'))

// gui tao tuyen duong
routes(app)

app.listen(port, () => console.log(`Server is running at http://localhost:${port}`));