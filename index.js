import app from "./app.js";
import routes from "./routes/router.js";

const PORT = process.env.PORT || 5000;

app.use("/", routes);

app.listen(PORT, () => console.log(`listening the port at  ${PORT}`));
