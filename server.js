///JSON-SERVER
import jsonServer from  'C:/Users/programadores.carioc/node_modules/json-server'; //'C:.\Users\programadores.carioc\node_modules\json-server'
const server = jsonServer.create();
const router = jsonServer.router('database.json'); 
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3200; 

server.use(middlewares);
server.use(router);

server.listen(port);