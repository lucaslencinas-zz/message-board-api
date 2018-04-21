const channelService = require('../services/channelService');

/* body message: { name, content } */
/* response.body: { id: name, message } */
function createMessage(req, res, next) {
  const message = req.body;
  const { channelId } = req.params;

  return channelService
    .createMessage(channelId, message)
    .then((createdMessage) => res.status(201).json(createdMessage))
    .catch(next);
}

function removeMessage(req, res, next) {
  const { channelId, messageId } = req.params;

  return channelService
    .removeMessage(channelId, messageId)
    .then(() => res.status(204).send())
    .catch(next);
}

function get(req, res, next) {
  const { channelId } = req.params;

  return channelService.get(channelId)
    .then((wantedChannel) => res.status(200).json(wantedChannel))
    .catch(next);
}

function list(req, res, next) {
  return channelService.list()
    .then((channels) => res.status(200).json(channels))
    .catch(next);
}

module.exports = {
  get,
  list,
  createMessage,
  removeMessage
};
