const id = "redoc";

function ReplaceServersURL() {
  return {
    Server: {
      leave(Server) {
        if ("SERVERS_URL" in process.env) {
          Server.url = process.env.SERVERS_URL;
        }
      },
    },
  };
}

/** @type {import('@redocly/openapi-cli').CustomRulesConfig} */
const decorators = {
  oas3: {
    "replace-servers-url": ReplaceServersURL,
  },
};

module.exports = {
  id,
  decorators,
};
