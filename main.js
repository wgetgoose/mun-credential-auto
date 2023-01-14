/* 

    MUN Nametag/Credential Automater Script by Carson Ferreira. Coded in January 2023.

    For future Docs, hello! If you need to email me for help, try carson@carsonferreira.com

    Notes: 
        - "let" variables do not work with Photoshop, use "var". "const" works as normal.
        - Arrow functions are not supported
        - File paths need to be forward slashed

 */

// File paths needs to be forward-slash, not Windows backslash
const averyTemplate = File.openDialog(["Please select the template document"])

// Must set opening the document as a variable
var docRef = app.open(averyTemplate)





/* 

Loading the JSON seems to work, but performing actions on it is wonky. Maybe pasting it will be better?
Nevertheless, going to try and use CSV instead with Photoshop's file objects, see https://extendscript.docsforadobe.dev/file-system-access/file-object.html

*/
// var matrix = JSON.parse(File("C:/Users/carson/coding/mun-credential-auto/matrix.json"))
// var firstObject = matrix[0]

// var textLayer = docRef.artLayers.add()
// textLayer.kind = LayerKind.TEXT 

// var fill = textLayer.textItem
// fill.contents = firstItem