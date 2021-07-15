/* eslint-disable no-console */
const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
  // config apm
var apm = require('elastic-apm-node').start({
  serviceName: 'apmhapijs',
  secretToken: 'VYpMojUjGe77Oe7HmP',
  serverUrl: 'https://faa6b3a5b0484f358c641362b0f5e63f.apm.us-west1.gcp.cloud.es.io:443',
  environment: 'production'
})
  const server = Hapi.server({
    port: 2021,
    host: 'localhost',
  });

  server.route(routes);

  await server.start();
  console.log(`server run di ${server.info.uri}`);
};

init();
