// in the name of Allah 
// github.com/SeyyedMahdiHP/JavaScript
// customJs is an extension to make page more configurable
// special thanks to codegena.com/
/* fix right to left and left to right problem for Unicode and ASCII texts*/
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

function setAttrTags_UnicodeBase(tag, attrName, attrValue, unicodeFlag) {
    var elems = document.getElementsByTagName(tag);
    for (var i = 0; i < elems.length; i++) {
        if (isUnicode(elems[i].innerText) === unicodeFlag) 
            elems[i].setAttribute(attrName, attrValue); 
    }
}
function rmvElemsFromTags(tag, elem) {
    var selectedTags = document.getElementsByTagName(tag);
    for (var i = 0; i < selectedTags.length; i++) {
        if (selectedTags)
            selectedTags[i].innerHTML = selectedTags[i].innerHTML.replace(new RegExp(elem, 'g'), "");
    }
}

/* add link preview with  iframe*/
function addcss(css) {
    var head = document.getElementsByTagName('head')[0];
    var s = document.createElement('style');
    s.setAttribute('type', 'text/css');
    if (s.styleSheet) { // IE
        s.styleSheet.cssText = css;
    } else { // the world
        s.appendChild(document.createTextNode(css));
    }
    head.appendChild(s);
}

function isFile(addr) {
    try {
        var exts = "pdf,txt,jpg,jpeg,png,mp3,mp4,psd".split(",");
        var lastPart = addr.split("/").pop().split(".").pop();
        for (let i = 0; i < exts.length; i++) {
            if (lastPart == exts[i]) {
               // console.log("file:" + addr);
                return true;
            }
        }
        //console.log("notfile:" + addr);
        return false;
    } catch (err) {
        console.log(err);
        return true;
    }
}

function addPreview(elem, addr) {
    try {
        var lnk = elem;
        var dv = document.createElement("div");
        lnk.appendChild(dv);
        try {
            var ifr = document.createElement("iframe");
            dv.appendChild(ifr);
            ifr.src = addr;
        } catch (err2) {
            //console.log("err2:" + err2);
        }

    } catch (err) {
       // console.log("err1:" + err);
    }
}

function miniPreview(tag) {
    try {
        var elems = document.querySelectorAll(tag);
        for (var i = 0; i < elems.length; i++) {
            var addr = elems[i].getAttribute('href');
            if (!isFile(addr)) {
                addPreview(elems[i], addr);
            }
        }
    } catch (err) {
        console.log(err);
    }
}
//fix direction problem for Unicode ASCII paragraphs
addcss('blockquote{background:#eee;padding:15px;margin:30px auto;border:1px solid #2b8bcb;font-size:14px;color:#000;position:relative;font-style:normal}blockquote,blockquote a:hover{color:#666}blockquote{display:block;background:#fff;padding:15px 20px 15px 45px;margin:0 0 20px;position:relative;font-family:"b nazanin",Georgia,serif;font-size:16px;line-height:1.2;-moz-box-shadow:2px 2px 15px #ccc;-webkit-box-shadow:2px 2px 15px #ccc;box-shadow:2px 2px 15px #ccc;border-left-style:solid;border-left-width:15px;border-right-style:solid;border-right-width:2px}blockquote::before{content:"\\201C";font-family:Georgia,serif;font-size:40px;font-weight:700;color:#999;position:absolute;left:10px;top:5px}blockquote::after{content:""}blockquote a{text-decoration:none;background:#eee;cursor:pointer;padding:0 3px;color:#c76c0c}blockquote em{font-style:italic}');
addcss(".entry-content p a,.qa-a-item-content p a{direction:ltr;text-align:left}");
setAttrTags_UnicodeBase("p", "style", "text-align:justify; direction:ltr;", false);
setAttrTags_UnicodeBase("p", "style", "text-align:justify; direction:rtl;",  true);
rmvElemsFromTags("blockquote", "<br>");

//add preview to each links in the main section
//if you dont need this feature just comment below lines ans save it
addcss(".qa-main p a div{visibility: hidden;z-index:1; -moz-box-sizing: content-box;    box-sizing: content-box;  position: absolute; transition: z-index steps(1) .3s, opacity .3s, margin-top .3s; width: 256px;    height: 144px;} ");
addcss(".qa-main p a div iframe{width: 400%;    height: 400%;    transform: scale(0.25);  border: none;    -webkit-transform-origin: 0 0;    transform-origin: 0 0;}");
addcss(".qa-main p a:hover>div{visibility:visible} ");
miniPreview(".qa-main p a");
