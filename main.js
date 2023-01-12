/* 

    MUN Nametag/Credential Automater Script by Carson Ferreira. Coded in January 2023.

    For future Docs, hello! If you need to email me for help, try carson@carsonferreira.com

    Notes: 
        - "let" variables do not work with Photoshop, use "var". "const" works as normal.
        - Arrow functions are not supported
        - File paths need to be forward slashed

 */

// File paths needs to be forward-slash, not Windows backslash
const averyTemplate = File("C:/Users/carson/coding/mun-credential-auto/Avery5390NameBadgesInsertRefills.psd")

// Arrow functions not supported
var openTemplate = function() {
    app.open(averyTemplate)
} 
openTemplate()