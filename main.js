/* 
    MUN Nametag/Credential Automater Script by Carson Ferreira. Coded in January 2023.

    For future Docs, hello! If you need to email me for help, try carson@carsonferreira.com
    !!! Usage Rules !!!:
      - Make sure you format the spreadsheet export to not include any blank columns
      - If the committee name contains special characters, the file saving section may break
    Notes: 
        - ExtendScript (what Adobe uses to script its programs) is based on ECMAScript 3, meaning newer JS features do not work 
            - "let" variables do not work with Photoshop, use "var". "const" works as normal.
            - Arrow functions are not supported
        - File paths use forward slashes (use dialogs instead of definite paths)
 */

var averyTemplate = File.openDialog(["Please select the template document"],["Photoshop Document:*.psd"])
var matrix = File.openDialog(["Please open the matrix CSV file"],["CSV:*.csv"])
var savePath = Folder.selectDialog(["Please select the folder to save files in"])

// Open matrix file to perform array operations
matrix.open("r")

// Store each line of CSV as a string within an array
var csv = []
do {
  var currentLine = matrix.readln()
  csv[csv.length] = currentLine
} while (matrix.eof == false)

// split each csv entry into a distinct array
// each array within "countries" is formatted as: countries[row][column]
// [column] is also the committee number (headers from left to right)
var countries = []
for (var i = 0; i < (csv.length); i++) {
  countries[i] = csv[i].split(",")
}

// These need to be separate from the index because the
// for loop only iterates 8 times. to keep track of 
// committees with 40+ countries, variables need to remember
// what country we're on
var currentCountry = 1
var currentCommittee = 0
var counter = 0

// parent loop moves through the function for every country in the given committee (countries.length)
// nested loop iterates 8 times to represent the number of available slots on the template
function fillDoc() {
  for (currentCountry; currentCountry < countries.length;) {
    for (var index = 1; index <= 8; index++) {
      if ( ( currentCountry == (countries.length - 1) ) || ( countries[currentCountry][currentCommittee] == "" ) ) {
        if (index == 1) {
          return;
        }
        else {
          break;
        }
      }
      var doc = app.open(averyTemplate) // remember opened doc
      var countryLayer = doc.artLayers.getByName(("Country " + index)).textItem
      countryLayer.contents = countries[currentCountry][currentCommittee]
      var committeeLayer = doc.artLayers.getByName(("Committee " + index)).textItem
      committeeLayer.contents = countries[0][currentCommittee]
      currentCountry++
    }
    counter++
    var jpegOptions = new JPEGSaveOptions()
    jpegOptions.quality = 12
    var jpegFile = File(savePath + "/" + "Credential" + " " + countries[0][currentCommittee] + " " + counter + ".jpeg")
    app.activeDocument.saveAs(jpegFile, jpegOptions, true, Extension.LOWERCASE)
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES)
  }
}

for (var i = 0; i < ( (countries[0]).length ); i++) {
  fillDoc()
  counter = 0
  currentCommittee++
  currentCountry = 1
}