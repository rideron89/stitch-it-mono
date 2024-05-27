import koa from 'koa';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = new koa();

async function main(): Promise<void> {
  app.use(async (ctx) => {
    ctx.body = { message: 'Hello API' };
  });

  app.listen(port, host, () => {
    console.log(`[ ready ] http://${host}:${port}`);
  });
}

void main()
  .then(async () => {
    //
  })
  .catch(async (error) => {
    console.error(error);
    //
    process.exit(1);
  });
