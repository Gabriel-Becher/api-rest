import app from "./app";

const port = 3001;
app.listen(port, () => {
  console.log(`Server rodando na porta ${port}`);
  console.log(`http://localhost:${port}`);
});
