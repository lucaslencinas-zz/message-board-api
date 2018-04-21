const createError = require('http-errors');
const uuid = require('uuid');
// const someUUID = uuid.v4();

const channels = [
  {
    id: 'c44be829-3d89-4b70-80be-177b7633bc5b',
    name: 'cleanning',
    messages: []
  },
  {
    id: 'c44be829-3d89-4b70-80be-1773763abc5b',
    name: 'shopping',
    messages: []
  },
  {
    id: '1234e829-3d89-4b70-80be-1773763abc5b',
    name: 'bills',
    messages: []
  }
];

function list() {
  const adaptedChannels = channels.map((channel) => ({ id: channel.id, name: channel.name }));
  return Promise.resolve(adaptedChannels);
}

function get(channelId) {
  const channel = getChannel(channelId);

  return Promise.resolve(channel);
}

/*  */
function createMessage(channelId, message) {
  const channel = getChannel(channelId);
  const createdMessage = Object.assign({}, message, { id: uuid.v4() });

  channel.messages.push(createdMessage);

  return Promise.resolve(createdMessage);
}

function removeMessage(channelId, messageId) {
  const channel = getChannel(channelId);

  channel.messages = channel.messages.filter((message) => message.id !== messageId);

  return Promise.resolve();
}

function getChannel(channelId) {
  const channel = channels.find((storedChannel) => storedChannel.id === channelId);
  if (!channel) {
    throw createError(404, 'Channel not Found');
  }
  return channel;
}

module.exports = {
  list,
  get,
  createMessage,
  removeMessage
};
