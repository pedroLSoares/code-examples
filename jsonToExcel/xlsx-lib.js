const xlsx = require("xlsx");

const result = xlsx.utils.json_to_sheet([
  {
    field1: "<h1>test</h1>",
    field2: "test2",
    field3: "testing3",
  },
]);

workbook = xlsx.utils.book_new();

xlsx.utils.book_append_sheet(workbook, result);

xlsx.writeFile(workbook, "test.xlsx", { cellStyles: true });

console.log(result);
