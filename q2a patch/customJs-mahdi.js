// in the name of Allah 
// github.com/SeyyedMahdiHP/JavaScript
// customJs is an extension to make page more configurable
function isUnicode(str) {
    var letters = [];
    for (var i = 0; i <= str.length; i++) {
        letters[i] = str.substring((i - 1), i);
        if (letters[i].charCodeAt() > 255) {
            return true;
        }
    }
    return false;
}

function setAttrToNonUniCodeTags(tag, attrName, attrValue) {
    var elems = document.getElementsByTagName(tag);
    for (var i = 0; i < elems.length; i++) {
        if (!isUnicode(elems[i].innerText)) elems[i].setAttribute(attrName, attrValue); 
    }
}
setAttrToNonUniCodeTags("p", "style", "text-align:justify; direction:ltr;");

function rmvElemsFromTags(tag, elem) {
    var selectedTags = document.getElementsByTagName(tag);
    for (var i = 0; i < selectedTags.length; i++) {
        if (selectedTags)
            selectedTags[i].innerHTML = selectedTags[i].innerHTML.replace(new RegExp(elem, 'g'), "");
    }
}
rmvElemsFromTags("blockquote", "<br>");


