/* 

    MUN Nametag/Credential Automater Script by Carson Ferreira. Coded in January 2023.

    For future Docs, hello! If you need to email me for help, try carson@carsonferreira.com

    Notes: 
        - ExtendScript (what Adobe uses to script its programs) is based on ECMAScript 3, meaning newer JS features do not work 
            - "let" variables do not work with Photoshop, use "var". "const" works as normal.
            - Arrow functions are not supported
        - File paths use forward slashes (use dialogs instead of definite paths)

 */

var averyTemplate = File.openDialog(["Please select the template document"],["Photoshop Document:*.psd"])
var matrix = File.openDialog(["Please open the matrix CSV file"],["CSV:*.csv"])

// remembers the document to perform layer operations
// without this, the object model does not work
var doc = app.open(averyTemplate)

// Open matrix file to perform array operations
matrix.open("r")

// Store each line of CSV as array
var csv = []
do {
  var currentLine = matrix.readln()
  csv[csv.length] = currentLine
} while (matrix.eof == false)

// split csv array into an array of arrays
// each array within countries is formatted as: countries[row][committee number]
var countries = []
for (var i = 0; i < (csv.length - 1); i++) {
  countries[i] = csv[i].split(",")
}

var currentCountry // globally accessible
var currentCommittee = 0 // static for now

for (currentCountry = 1; currentCountry <= 8; currentCountry++) {
  var country = doc.artLayers.getByName(("Country " + currentCountry))
  country.textItem.contents = countries[1][0]
  break;
}