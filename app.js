const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const channelController = require('./controllers/channelController');
const errorMiddleware = require('./middlewares/errorMiddleware');

console.log(errorMiddleware);
console.log(channelController);

const app = express();
app.use(cors());

const api = express
  .Router()
  .use(bodyParser.json())
  .get('/channels', channelController.list)
  .get('/channels/:channelId', channelController.get)
  .post('/channels/:channelId/messages', channelController.createMessage)
  .delete('/channels/:channelId/messages/:messageId', channelController.removeMessage);
  // .put('/channels/:channelId/messages/:messageId', channelController.updateMessage);

app.use('/api', api);
app.use(errorMiddleware);

app.listen(3001, () => {
  console.log('API listen on port 3001!');
});
