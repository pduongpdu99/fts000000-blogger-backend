const { express, http, dotenv, cors } = require("./import-libs").libs;
const routerIndex = require("./modules/v1/api/route.index");

const app = express();
const server = http.createServer(app);

const dotENV = dotenv.config().parsed;

// cors
app.use(cors());

// router
app.use("/v1", routerIndex);

// listen
server.listen(dotENV["PORT"], dotENV["IP"], function () {
  console.log(`Server run at: http://${dotENV["IP"]}:${dotENV["PORT"]}`);
});
