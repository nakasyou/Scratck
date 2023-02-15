import * as chevrotain from 'https://cdn.skypack.dev/chevrotain?dts'

const createToken = chevrotain.createToken;
const From = createToken({ name: "From", pattern: /FROM/ });
