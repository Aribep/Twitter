import * as bcrypt from "bcrypt";
// npm i bcrypt

const password = 'abcd1234';
const hashed = bcrypt.hashSync(password, 10);
console.log(`password: ${password}, hashed: ${hashed}`);

// abcd1234
// $2b$10$5fxc2gcGX32zF9yOEB7kquTnRveZK.ConfACGGvA2KB20Aw3xCAEi

const result = bcrypt.compareSync('abcd1234', hashed);
console.log(result);