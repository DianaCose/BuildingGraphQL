const { ApolloError } = require("apollo-server-errors");
const _ = require("lodash");

module.exports = {
  async speakers(session, args, { dataSources }) {
    try {
      const speakers = await dataSources.speakerAPI.getSpeaker();
      const returns = speakers.filter((speaker) => {
        return _.filter(session.speakers, { id: speaker.id }).length > 0;
      });
      return returns;
    } catch (error) {
      return new ApolloError("unable to get speakers", "SPEAKERAPIERROR", {
        token: UNIQUE,
      });
    }
  },
};
