/* 

    MUN Nametag/Credential Automater Script by Carson Ferreira. Coded in January 2023.

    For future Docs, hello! If you need to email me for help, try carson@carsonferreira.com

    Notes: "let" variables do not work with Photoshop, use "var". "const" works as normal.

 */


const defaultUnit = preferences.rulerUnits
preferences.rulerUnits = Units.INCHES


// File paths needs to be forward-slash, not Windows backslash
const averyTemplate = File("C:/Users/carson/coding/mun-credential-auto/Avery5390NameBadgesInsertRefills.psd")

// Arrow functions not supported
var openTemplate = function() {
    app.open(averyTemplate)
} 
openTemplate()


// var artLayerRef = docRef.artLayers.add()
// artLayerRef.kind = LayerKind.TEXT

// var textItemRef = artLayerRef.textItem
// textItemRef.contents = "Hello, World"

// docRef = null
// artLayerRef = null
// textItemRef = null