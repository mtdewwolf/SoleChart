/** Synthetic-data demo only. Never enter real PHI. */
const routes = new Map([['/','index.html'],['/index.html','index.html'],['/styles.css','styles.css'],['/app.js','app.js'],['/core.js','core.js']]);
const types = {html:'text/html; charset=utf-8',css:'text/css; charset=utf-8',js:'text/javascript; charset=utf-8'};
Bun.serve({hostname:Bun.env.HOST||'127.0.0.1',port:Number(Bun.env.PORT||3000),async fetch(req){
 const path=new URL(req.url).pathname;
 if(path==='/health')return Response.json({status:'ok',mode:'synthetic-demo'});
 const name=routes.get(path);
 if(!name)return new Response('Not found',{status:404});
 const file=Bun.file(new URL('./'+name,import.meta.url));
 if(!(await file.exists()))return new Response('Not found',{status:404});
 return new Response(file,{headers:{'Content-Type':types[name.split('.').pop()]||'text/plain','Cache-Control':'no-store','X-Content-Type-Options':'nosniff','Referrer-Policy':'no-referrer','Content-Security-Policy':"default-src 'self'; img-src 'self' data:; style-src 'self'; script-src 'self'; object-src 'none'; base-uri 'none'"}});
}});
console.log('SoleChart demo: http://localhost:'+ (Bun.env.PORT||3000));