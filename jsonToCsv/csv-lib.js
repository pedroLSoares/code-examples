const { writeFileSync } = require("fs");
const { generate, parse, transform, stringify } = require("csv");

var someData = [
  {
    Country: "Nigeria",
    Population: "200m",
    Continent: "Africa",
    "Official Language(s)": "English",
  },
  {
    Country: "India",
    Population: "1b",
    Continent: "Asia",
    "Official Language(s)": "Hindi, English",
  },
  {
    Country: "United States of America",
    Population: "328m",
    Continent: "North America",
    "Official Language(s)": "English",
  },
  {
    Country: "United Kingdom",
    Population: "66m",
    Continent: "Europe",
    "Official Language(s)": "English",
  },
  {
    Country: "Brazil",
    Population: "209m",
    Continent: "South America",
    "Official Language(s)": "Portugese",
  },
];

stringify(
  someData,
  {
    header: true,
  },
  function (err, output) {
    if (err) {
      console.log(err);
    }
    writeFileSync("someData.csv", output);
  }
);
