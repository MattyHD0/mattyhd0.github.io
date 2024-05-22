let placeholder = "%changeoutput_<options>_input:<input>_matcher:<matcher>_ifmatch:<output-if-matched>_else:<output-if-not-matched>%"

function createPlaceholder(){

    let element = document.getElementById("condition");
    var value = element.options[element.selectedIndex].value;

    let finalPlaceholder = placeholder.replace("<options>", value)
                                .replace("<options>", value)
                                .replace("<input>", inputText("input1"))
                                .replace("<matcher>", inputText("input2"))
                                .replace("<output-if-matched>", inputText("ontrue"))
                                .replace("<output-if-not-matched>", inputText("onfalse"))
    
    let generatedTextboxElement = document.getElementById("generated-placeholder");
    generatedTextboxElement.value = finalPlaceholder;

}

function inputText(id){
    return document.getElementById(id).value
}