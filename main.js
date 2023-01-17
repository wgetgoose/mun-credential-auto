/* 

    MUN Nametag/Credential Automater Script by Carson Ferreira. Coded in January 2023.

    For future Docs, hello! If you need to email me for help, try carson@carsonferreira.com

    Notes: 
        - ExtendScript (what Adobe uses to script its programs) is based on ECMAScript 3, meaning newer JS features do not work 
            - "let" variables do not work with Photoshop, use "var". "const" works as normal.
            - Arrow functions are not supported
        - File paths use forward slashes (use dialogs instead of definite paths)

 */

// Asks the user to select the PSD and CSV
// var averyTemplate = File.openDialog(["Please select the template document"],["Photoshop Document:*.psd"])
// app.open(averyTemplate)
var matrix = File.openDialog(["Please open the matrix CSV file"],["CSV:*.csv"])
matrix.open("r")

// Store each line of CSV as array
var csv = []
for (var i = true; i == true;) {
  var currentLine = matrix.readln()
  csv[csv.length] = currentLine
  if (matrix.eof == true) {
    $.writeln("End of file!")
    i = false
  }
}

$.writeln(csv)