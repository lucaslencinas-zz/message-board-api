const { expect } = require('chai');
const channelService = require('./channelService');

describe('channelService', () => {
  describe('list channels', () => {
    let result;

    beforeEach(() =>
      channelService.list().then(($result) => (result = $result)));

    it('should return the wanted game', () => {
      expect(result.length).to.eql(4);
    });
  });
});
