/* 

    MUN Nametag/Credential Automater Script by Carson Ferreira. Coded in January 2023.

    For future Docs, hello! If you need to email me for help, try carson@carsonferreira.com

    Notes: 
        - "let" variables do not work with Photoshop, use "var". "const" works as normal.
        - Arrow functions are not supported
        - File paths need to be forward slashed

 */

// Asks the user to select the PSD and CSV
// var averyTemplate = File.openDialog(["Please select the template document"],["Photoshop Document:*.psd"])
var matrix = File.openDialog(["Please open the matrix CSV file"],["CSV:*.csv"])
matrix.open("r")

var lines = []


// Makes programs hang like a motherfucker
loadLines = function() {
  var reading = matrix.readln()
  $.writeln(reading)
  // $.writeln(readLine)
  $.writeln(matrix.eof)
  for (var i = false; i != true;) {
    if (matrix.eof == true) {
      $.writeln("End of file")
      i = true
    }
    else {
      $.writeln("Moving!")
      // i = true // without this, it hangs photoshop and VSCode
    }
  }
  return
}

loadLines()

// Must set opening the document as a variable
// var docRef = app.open(averyTemplate)
// var test = matrix.readln()

// var textLayer = docRef.artLayers.add()
// textLayer.kind = LayerKind.TEXT
// textLayer.textItem.contents = test


/* 

Loading the JSON seems to work, but performing actions on it is wonky. Maybe pasting it will be better?
Nevertheless, going to try and use CSV instead with Photoshop's file objects, see https://extendscript.docsforadobe.dev/file-system-access/file-object.html

*/
// var matrix = JSON.parse(File("C:/Users/carson/coding/mun-credential-auto/matrix.json"))
// var firstObject = matrix[0]



// var fill = textLayer.textItem
// fill.contents = firstItem