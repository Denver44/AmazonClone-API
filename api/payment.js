import app from "../app.js";
import route from "../routes/payment.js";

app.use("/api/", route);

export default app;
