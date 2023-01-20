
// import { fastifyIn }
// import fp from 'fastify-plugin';
// // import * from '../config/config';

// export function fp(function (fastify, opts, done){

//     fastify.register(require('fastify-jwt'),{
//         secret: 'hyeur'
//     })
    
//     fastify.decorate("authenticate", async function (request, reply) {
//         try {
//             await request.jwtVerify()
//         } catch (err) {
//             reply.send(err)
//         }        
//     })

//     done()
// })