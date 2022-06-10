// https://github.com/natergj/excel4node
const xl = require("excel4node");

const data = [
  {
    name: "Shadab Shaikh",
    email: "shadab@gmail.com",
    mobile: "1234567890",
  },
];

// creating a workbook and two sheets
const wb = new xl.Workbook();
const ws = wb.addWorksheet("Worksheet Name");
const ws1 = wb.addWorksheet("Worksheet Name 2");

// Create style to apply
var style = wb.createStyle({
  font: {
    color: "#FF0800",
    size: 12,
  },
  fill: {
    type: "pattern",
    patternType: "solid",
    fgColor: "292961",
  },

  numberFormat: "$#,##0.00; ($#,##0.00); -",
});

// Apply formula and style into cell on line 1 and column 3
ws.cell(1, 3).formula("A1 + B1").style(style);

// Generate header names
const headingColumnNames = ["Name", "Email", "Mobile"];

//Write Column Title in Excel file
let headingColumnIndex = 1;
headingColumnNames.forEach(heading => {
  ws.cell(1, headingColumnIndex++).string(heading);
});
//Write Data in Excel file
let rowIndex = 2;
data.forEach(record => {
  let columnIndex = 1;
  Object.keys(record).forEach(columnName => {
    ws.cell(rowIndex, columnIndex++).string(record[columnName]);
  });
  rowIndex++;
});
wb.write("TeacherData.xlsx");
