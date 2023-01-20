import * as dotenv from 'dotenv';
dotenv.config();
export function loadEnvironmentVariable() {
    const envVar = process.env.SECRET_KEY;

    if (!envVar) {
        throw new Error(`Config must include keyname`)
    }

    return envVar;
}

// module.exports = {
//     secretKey: loadEnvironmentVariable('SECRET_KEY'),
// }