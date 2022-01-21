const { writeFileSync } = require("fs");
const { parse } = require("json2csv");

const fields = ["field1", "field2", "field3"];
const opts = { fields };

try {
  const csv = parse(
    { field1: "test", field2: "test2", field3: "testing3" },
    opts
  );
  writeFileSync("teste.csv", csv);
  console.log(csv);
} catch (err) {
  console.error(err);
}
