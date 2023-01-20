"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const qs_1 = __importDefault(require("qs"));
const server = (0, fastify_1.default)({
    logger: false,
    querystringParser: str => qs_1.default.parse(str),
});
server.get("/auth", {
    preValidation: (request, reply, done) => {
        const { username, password } = request.query;
        done(username !== "admin" ? new Error("Must be admin") : undefined); // only validate `admin` account
    },
}, (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
    const customerHeader = request.headers["h-Custom"];
    // do something with request data
    console.log(request.query);
    return `logged in! \n`;
}));
server.listen({ port: 8080 }, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Server listening at ${address}`);
});
