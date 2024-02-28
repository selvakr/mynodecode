// const http = require("http");

// const server = http.createServer((req, res) => {
//   console.log(req);
//   res.write("hello");
//   res.end();
// });

// server.listen(5000);

const _ = require("lodash");
const items = [1, [2, [3, [4]]]];
const new_items = _.flattenDeep(items);
console.log(new_items);
const item2 = items.flat(Infinity);
console.log(item2);
