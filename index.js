import express from 'express';

import SERVER from './graphql/schema';
import models from './data-layer/models/index';

require('dotenv').config();

const APP = express();

// Middleware: GraphQL
SERVER.applyMiddleware({
  app: APP,
});

// Express: Port
const PORT = 8080 || process.env;

// Sequelize Sync
models.sequelize.sync().then(() => {
  // Express: Listener
  APP.listen(PORT, () => {
    console.log(`The server has started on port: ${PORT}`);
    console.log(`http://localhost:${PORT}/graphql`);
  });
});

// Exports
export default APP;
