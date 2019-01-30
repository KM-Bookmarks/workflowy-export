
function wkf_export() {
    console.log("wkf_export: Starting");
    var item = WF.rootItem();
    console.log("wkf_export: Ending");
}

console.log("Hello. This message was sent from scripts/inject.js");

wkf_export();

