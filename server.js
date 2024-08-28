import app from "./app";
import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server rodando na porta ${port}`);
  console.log(`http://localhost:${port}`);
});
