const { app, CLIENT_PORT, SERVER_PORT } = require("./frontend");

app.listen(CLIENT_PORT, () => {
  console.log(`Client running at http://localhost:${CLIENT_PORT}`);
});
