import * as chevrotain from 'https://cdn.skypack.dev/chevrotain?dts'

const createToken = chevrotain.createToken;
const Lexer=chevrotain.Lexer;

const tokens=[];
tokens.push(createToken({ name: "From", pattern: /FROM/ }));
tokens.push(createToken({
  name: "WhiteSpace",
  pattern: /\s+p/,
  group: chevrotain.Lexer.SKIPPED
}))

let SelectLexer = new Lexer(tokens,{
  positionTracking: "onlyOffset"
});
const result=SelectLexer.tokenize("FROM  pFROM");
console.log(result)