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

loadLines = function() {
  for (var i = true; i == true;) {
    var reading = matrix.readln()
    $.writeln(reading)
    $.writeln("End of file: " + matrix.eof)
    if (matrix.eof == true) {
      $.writeln("End of file!")
      i = false
    }
    else {
      $.writeln("Moving! Iterating --> " + i)
    }
  }
  return
}

loadLines()