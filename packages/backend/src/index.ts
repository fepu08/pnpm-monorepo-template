import express, { json, type Express } from 'express';

const PORT = process.env.PORT || '3000';

const app: Express = express();
app.use(json());

app.get('/', (_req, res) => {
  res.json({ message: 'Hello World!' });
});

app.listen(PORT, () => {
  console.log(`App listening on port: ${PORT}`);
});

export default app;
