import * as swagger from 'swagger2';
import {ui, router as swaggerRouter, Router} from 'swagger2-koa';


const document = swagger.loadDocumentSync('./swagger.yaml') as swagger.Document;
const router: Router = swaggerRouter(document);

router.get('/ping', async (context) => {
  console.log("IM IN PING")
  context.status = 200;
  context.body = {
    serverTime: new Date().toISOString()
  };
});



router.app()         // get the koa 2 server
  .use(ui(document)) // only needed if you want to publish a swagger-ui for the API
  .listen(3000);     // start handling requests on port 3000