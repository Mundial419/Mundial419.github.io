function paragraph() {
       if (globalSplit.indexOf("paragraph") > -1 ) {
    var checkStr = elementNames.indexOf("paragraph");
    
    var elem =  "<" + "p" + ">" + " " + "<" + "/" + "p" + ">";
    return editor.session.insert(editor.getCursorPosition() , elem);
    }
  }
  
  function comment() {
       if (globalSplit.indexOf("comment") > -1) {
    var checkStr = elementNames.indexOf("comment");
    
    var elem =  "<" + "!--" + " " + "--" + ">";
    return editor.session.insert(editor.getCursorPosition() , elem);
    }
  }
  
  
  function doctype() {
       if (globalSplit.indexOf("doctype") > -1 ) {
    var checkStr = elementNames.indexOf("doctype");
    
    var elem =  "<" + "!" + "DOCTYPE" + " " + "html" + ">" ;
    return editor.session.insert(editor.getCursorPosition() , elem);
    }
  }
  
  function link() {
       if (globalSplit.indexOf("link") > -1 ) {
    var checkStr = elementNames.indexOf("link");
    
    var elem =  "<" + "link rel=' ' href=' '" + ">";
    return editor.session.insert(editor.getCursorPosition() , elem);
    }
  }
  
  function hyperlink() {
       if (globalSplit.indexOf("hyperlink") > -1 ) {
    var checkStr = elementNames.indexOf("hyperlink");
    
    var elem =  "<" + "a href=' '" + ">" + " " + "<" + "/" + "a" + ">";
    return editor.session.insert(editor.getCursorPosition() , elem);
    }
  }
  
  
  
  function abbreviation() {
       if (globalSplit.indexOf("abbreviation") > -1 ) {
    var checkStr = elementNames.indexOf("abbreviation");
    
    var elem =  "<" + "abbr" + ">" + " " + "<" + "/" + "abbr" + ">";
    return editor.session.insert(editor.getCursorPosition() , elem);
    }
  }
  
  
  
  
  function acronym() {
       if (globalSplit.indexOf("acronym") > -1 ) {
    var checkStr = elementNames.indexOf("acronym");
    
    var elem =  "<" + "acronym" + ">" + " " + "<" + "/" + "acronym" + ">";
    return editor.session.insert(editor.getCursorPosition() , elem);
    }
  }
  
  
  
  
  function address() {
       if (globalSplit.indexOf("address") > -1 ) {
    var checkStr = elementNames.indexOf("address");
    
    var elem =  "<" + "address" + ">" + " " + "<" + "/" + "address" + ">";
    return editor.session.insert(editor.getCursorPosition() , elem);
    }
  }
  
  
  
  
  function applet() {
       if (globalSplit.indexOf("applet") > -1 ) {
    var checkStr = elementNames.indexOf("applet");
    
    var elem =  "<" + "applet" + ">" + " " + "<" + "/" + "applet" + ">";
    return editor.session.insert(editor.getCursorPosition() , elem);
    }
  }
  
  
  
  
  function area() {
       if (globalSplit.indexOf("area") > -1 ) {
    var checkStr = elementNames.indexOf("area");
    
    var elem =  "<" + "area" + ">" + " " + "<" + "/" + "area" + ">";
    return editor.session.insert(editor.getCursorPosition() , elem);
    }
  }
  
  
  
  
  function article() {
       if (globalSplit.indexOf("article") > -1 ) {
    var checkStr = elementNames.indexOf("article");
    
    var elem =  "<" + "article" + ">" + " " + "<" + "/" + "article" + ">";
    return editor.session.insert(editor.getCursorPosition() , elem);
    }
  }
  
  
  
  
  function aside() {
       if (globalSplit.indexOf("aside") > -1 ) {
    var checkStr = elementNames.indexOf("aside");
    
    var elem =  "<" + "aside" + ">" + " " + "<" + "/" + "aside" + ">";
    return editor.session.insert(editor.getCursorPosition() , elem);
    }
  }
  
  
  
  
  function auto() {
       if (globalSplit.indexOf("auto") > -1 ) {
    var checkStr = elementNames.indexOf("auto");
    
    var elem =  "<" + "auto" + ">" + " " + "<" + "/" + "auto" + ">";
    return editor.session.insert(editor.getCursorPosition() , elem);
    }
  }
  
  
  
  
  function audio() {
       if (globalSplit.indexOf("audio") > -1 ) {
    var checkStr = elementNames.indexOf("audio");
    
    var elem =  "<" + "audio" + ">" + " " + "<" + "/" + "audio" + ">";
    return editor.session.insert(editor.getCursorPosition() , elem);
    }
  }
  
  
  
  
  function bold() {
       if (globalSplit.indexOf("bold") > -1 ) {
    var checkStr = elementNames.indexOf("bold");
    
    var elem =  "<" + "b" + ">" + " " + "<" + "/" + "b" + ">";
    return editor.session.insert(editor.getCursorPosition() , elem);
    }
  }
  
  
  
  
  function base() {
       if (globalSplit.indexOf("base") > -1 ) {
    var checkStr = elementNames.indexOf("base");
    
    var elem =  "<" + "base" + ">" + " " + "<" + "/" + "base" + ">";
    return editor.session.insert(editor.getCursorPosition() , elem);
    }
  }
  
  
  
  
  function basefront() {
       if (globalSplit.indexOf("base front ") > -1 ) {
    var checkStr = elementNames.indexOf("base front");
    
    var elem =  "<" + "basefront" + ">" + " " + "<" + "/" + "basefront" + ">";
    return editor.session.insert(editor.getCursorPosition() , elem);
    }
  }
  
  
  
  
  function bidirectional() {
       if (globalSplit.indexOf("bidirectional override") > -1 ) {
    var checkStr = elementNames.indexOf("bidirectional override");
    
    var elem =  "<" + "bdo" + ">" + " " + "<" + "/" + "bdo" + ">";
    return editor.session.insert(editor.getCursorPosition() , elem);
    }
else if (globalSplit.indexOf("bidirectional") > -1 ) {
    var checkStr = elementNames.indexOf("bidirectional");
    
    var elem =  "<" + "bdi" + ">" + " " + "<" + "/" + "bdi" + ">";
    return editor.session.insert(editor.getCursorPosition() , elem);
    }
  }
  
  
  
  
  function big() {
       if (globalSplit.indexOf("big") > -1 ) {
    var checkStr = elementNames.indexOf("big");
    
    var elem =  "<" + "big" + ">" + " " + "<" + "/" + "big" + ">";
    return editor.session.insert(editor.getCursorPosition() , elem);
    }
  }
  
  
  
  
  function blockquote() {
       if (globalSplit.indexOf("blockquote") > -1 ) {
    var checkStr = elementNames.indexOf("blockquote");
    
    var elem =  "<" + "blockquote" + ">" + " " + "<" + "/" + "blockquote" + ">";
    return editor.session.insert(editor.getCursorPosition() , elem);
    }
  }
  
  
  
  
  function body() {
       if (globalSplit.indexOf("body") > -1 ) {
    var checkStr = elementNames.indexOf("body");
    
    var elem =  "<" + "body" + ">" + " " + "<" + "/" + "body" + ">";
    return editor.session.insert(editor.getCursorPosition() , elem);
    }
  }
  
  
  
  
  function Break() {
       if (globalSplit.indexOf("break") > -1 ) {
    var checkStr = elementNames.indexOf("break");
    
    var elem =  "<" + "break" + ">" + " " + "<" + "/" + "break" + ">";
    return editor.session.insert(editor.getCursorPosition() , elem);
    }
  }
  
  
  
  
  function button() {
       if (globalSplit.indexOf("button") > -1 ) {
    var checkStr = elementNames.indexOf("button");
    
    var elem =  "<" + "button" + ">" + " " + "<" + "/" + "button" + ">";
    return editor.session.insert(editor.getCursorPosition() , elem);
    }
  }
  
  
  
  
  function canvas() {
       if (globalSplit.indexOf("canvas") > -1 ) {
    var checkStr = elementNames.indexOf("canvas");
    
    var elem =  "<" + "canvas" + ">" + " " + "<" + "/" + "canvas" + ">";
    return editor.session.insert(editor.getCursorPosition() , elem);
    }
  }
  
  
  
  
  function caption() {
       if (globalSplit.indexOf("caption") > -1 ) {
    var checkStr = elementNames.indexOf("caption");
    
    var elem =  "<" + "caption" + ">" + " " + "<" + "/" + "caption" + ">";
    return editor.session.insert(editor.getCursorPosition() , elem);
    }
  }
  
  
  
  
  function center() {
       if (globalSplit.indexOf("center") > -1 ) {
    var checkStr = elementNames.indexOf("center");
    
    var elem =  "<" + "center" + ">" + " " + "<" + "/" + "center" + ">";
    return editor.session.insert(editor.getCursorPosition() , elem);
    }
  }
  
  
  
  
  function citation() {
       if (globalSplit.indexOf("citation") > -1 ) {
    var checkStr = elementNames.indexOf("citation");
    
    var elem =  "<" + "cite" + ">" + " " + "<" + "/" + "cite" + ">";
    return editor.session.insert(editor.getCursorPosition() , elem);
    }
  }
  
  
  
  
  function code() {
       if (globalSplit.indexOf("code") > -1 ) {
    var checkStr = elementNames.indexOf("code");
    
    var elem =  "<" + "code" + ">" + " " + "<" + "/" + "code" + ">";
    return editor.session.insert(editor.getCursorPosition() , elem);
    }
  }
  
  
  
  
  function column() {
       if (globalSplit.indexOf("column group") > -1 ) {
    var checkStr = elementNames.indexOf("column group");
    
    var elem =  "<" + "colgroup" + ">" + " " + "<" + "/" + "colgroup" + ">";
    return editor.session.insert(editor.getCursorPosition() , elem);
    }
else  if (globalSplit.indexOf("column") > -1 ) {
    var checkStr = elementNames.indexOf("column");
    
    var elem =  "<" + "col" + ">" + " " + "<" + "/" + "col" + ">";
    return editor.session.insert(editor.getCursorPosition() , elem);
    }
  }
  
  
  
  
  function data() {
       if (globalSplit.indexOf("data list") > -1 ) {
    var checkStr = elementNames.indexOf("data list");
    
    var elem =  "<" + "datalist" + ">" + " " + "<" + "/" + "datalist" + ">";
    return editor.session.insert(editor.getCursorPosition() , elem);
    }
else if (globalSplit.indexOf("data") > -1 ) {
    var checkStr = elementNames.indexOf("data");
    
    var elem =  "<" + "data" + ">" + " " + "<" + "/" + "data" + ">";
    return editor.session.insert(editor.getCursorPosition() , elem);
    }
  }
  
  
  
  
  function description() {
       if (globalSplit.indexOf("description term") > -1 ) {
    var checkStr = elementNames.indexOf("description term");
    
    var elem =  "<" + "dt" + ">" + " " + "<" + "/" + "dt" + ">";
    return editor.session.insert(editor.getCursorPosition() , elem);
    }
else  if (globalSplit.indexOf("description list") > -1 ) {
    var checkStr = elementNames.indexOf("description list");
    
    var elem =  "<" + "dl" + ">" + " " + "<" + "/" + "dl" + ">";
    return editor.session.insert(editor.getCursorPosition() , elem);
    }
else  if (globalSplit.indexOf("description") > -1 ) {
    var checkStr = elementNames.indexOf("description");
    
    var elem =  "<" + "dd" + ">" + " " + "<" + "/" + "dd" + ">";
    return editor.session.insert(editor.getCursorPosition() , elem);
    }
  }
  
  
  
  
  function Delete() {
       if (globalSplit.indexOf("Delete") > -1 ) {
    var checkStr = elementNames.indexOf("Delete");
    
    var elem =  "<" + "del" + ">" + " " + "<" + "/" + "del" + ">";
    return editor.session.insert(editor.getCursorPosition() , elem);
    }
  }
  
  
  
  
  function definition() {
       if (globalSplit.indexOf("definition") > -1 ) {
    var checkStr = elementNames.indexOf("definition");
    
    var elem =  "<" + "dfn" + ">" + " " + "<" + "/" + "dfn" + ">";
    return editor.session.insert(editor.getCursorPosition() , elem);
    }
  }
  
  
  
  
  function details() {
       if (globalSplit.indexOf("details") > -1 ) {
    var checkStr = elementNames.indexOf("details");
    
    var elem =  "<" + "details" + ">" + " " + "<" + "/" + "details" + ">";
    return editor.session.insert(editor.getCursorPosition() , elem);
    }
  }
  
  
  
  
  function dialog() {
       if (globalSplit.indexOf("dialog") > -1 ) {
    var checkStr = elementNames.indexOf("dialog");
    
    var elem =  "<" + "dialog" + ">" + " " + "<" + "/" + "dialog" + ">";
    return editor.session.insert(editor.getCursorPosition() , elem);
    }
  }
  
  
  
  
  function direction() {
       if (globalSplit.indexOf("direction") > -1 ) {
    var checkStr = elementNames.indexOf("direction");
    
    var elem =  "<" + "dir" + ">" + " " + "<" + "/" + "dir" + ">";
    return editor.session.insert(editor.getCursorPosition() , elem);
    }
  }
  
  
  
  
  function division() {
       if (globalSplit.indexOf("division") > -1 ) {
    var checkStr = elementNames.indexOf("division");
    
    var elem =  "<" + "div" + ">" + " " + "<" + "/" + "div" + ">";
    return editor.session.insert(editor.getCursorPosition() , elem);
    }
  }
  
  
  
  
  function emphasis() {
       if (globalSplit.indexOf("emphasis") > -1 ) {
    var checkStr = elementNames.indexOf("emphasis");
    
    var elem =  "<" + "em" + ">" + " " + "<" + "/" + "em" + ">";
    return editor.session.insert(editor.getCursorPosition() , elem);
    }
  }
  
  
  
  
  function embed() {
       if (globalSplit.indexOf("embed") > -1 ) {
    var checkStr = elementNames.indexOf("embed");
    
    var elem =  "<" + "embed" + ">" + " " + "<" + "/" + "embed" + ">";
    return editor.session.insert(editor.getCursorPosition() , elem);
    }
  }
  
  
  
  
  function fieldset() {
       if (globalSplit.indexOf("fieldset") > -1 ) {
    var checkStr = elementNames.indexOf("fieldset");
    
    var elem =  "<" + "fieldset" + ">" + " " + "<" + "/" + "fieldset" + ">";
    return editor.session.insert(editor.getCursorPosition() , elem);
    }
  }
  
  
  
  
  function figure() {
       if (globalSplit.indexOf("figure caption") > -1 ) {
    var checkStr = elementNames.indexOf("figure caption");
    
    var elem =  "<" + "p" + ">" + " " + "<" + "/" + "p" + ">";
    return editor.session.insert(editor.getCursorPosition() , elem);
    }
else  if (globalSplit.indexOf("figure") > -1 ) {
    var checkStr = elementNames.indexOf("figure");
    
    var elem =  "<" + "p" + ">" + " " + "<" + "/" + "p" + ">";
    return editor.session.insert(editor.getCursorPosition() , elem);
    }
  }
  
  
  
  
  function font() {
       if (globalSplit.indexOf("font") > -1 ) {
    var checkStr = elementNames.indexOf("font");
    
    var elem =  "<" + "font" + ">" + " " + "<" + "/" + "font" + ">";
    return editor.session.insert(editor.getCursorPosition() , elem);
    }
  }
  
  
  
  
  function footer() {
       if (globalSplit.indexOf("footer") > -1 ) {
    var checkStr = elementNames.indexOf("footer");
    
    var elem =  "<" + "footer" + ">" + " " + "<" + "/" + "footer" + ">";
    return editor.session.insert(editor.getCursorPosition() , elem);
    }
  }
  
  
  
  
  function form() {
       if (globalSplit.indexOf("form") > -1 ) {
    var checkStr = elementNames.indexOf("form");
    
    var elem =  "<" + "form" + ">" + " " + "<" + "/" + "form" + ">";
    return editor.session.insert(editor.getCursorPosition() , elem);
    }
  }
  
  
  
  
  function frame() {
       if (globalSplit.indexOf("frame set") > -1 ) {
    var checkStr = elementNames.indexOf("frame set");
    
    var elem =  "<" + "frameset" + ">" + " " + "<" + "/" + "frameset" + ">";
    return editor.session.insert(editor.getCursorPosition() , elem);
    }
else if (globalSplit.indexOf("frame") > -1 ) {
    var checkStr = elementNames.indexOf("frame");
    
    var elem =  "<" + "frame" + ">" + " " + "<" + "/" + "frame" + ">";
    return editor.session.insert(editor.getCursorPosition() , elem);
    }
  }
  
  
  
  
  function heading() {
       if (globalSplit.indexOf("heading 1") > -1 ) {
    var checkStr = elementNames.indexOf("heading 1");
    
    var elem =  "<" + "h1" + ">" + " " + "<" + "/" + "h1" + ">";
    return editor.session.insert(editor.getCursorPosition() , elem);
    }
else  if (globalSplit.indexOf("heading 2") > -1 ) {
    var checkStr = elementNames.indexOf("heading 2");
    
    var elem =  "<" + "h2" + ">" + " " + "<" + "/" + "h2" + ">";
    return editor.session.insert(editor.getCursorPosition() , elem);
    }
else  if (globalSplit.indexOf("heading 3") > -1 ) {
    var checkStr = elementNames.indexOf("heading 3");
    
    var elem =  "<" + "h3" + ">" + " " + "<" + "/" + "h3" + ">";
    return editor.session.insert(editor.getCursorPosition() , elem);
    }
else  if (globalSplit.indexOf("heading 4") > -1 ) {
    var checkStr = elementNames.indexOf("heading 4");
    
    var elem =  "<" + "h4" + ">" + " " + "<" + "/" + "h4" + ">";
    return editor.session.insert(editor.getCursorPosition() , elem);
    }
else  if (globalSplit.indexOf("heading 5") > -1 ) {
    var checkStr = elementNames.indexOf("heading 5");
    
    var elem =  "<" + "h5" + ">" + " " + "<" + "/" + "h5" + ">";
    return editor.session.insert(editor.getCursorPosition() , elem);
    }
else  if (globalSplit.indexOf("heading 6") > -1 ) {
    var checkStr = elementNames.indexOf("heading 6");
    
    var elem =  "<" + "h6" + ">" + " " + "<" + "/" + "h6" + ">";
    return editor.session.insert(editor.getCursorPosition() , elem);
    }

  }
  
  
  
  
  function head() {
       if (globalSplit.indexOf("head") > -1 ) {
    var checkStr = elementNames.indexOf("head");
    
    var elem =  "<" + "head" + ">" + " " + "<" + "/" + "head" + ">";
    return editor.session.insert(editor.getCursorPosition() , elem);
    }
  }
  
  
  
  
  function header() {
       if (globalSplit.indexOf("header") > -1 ) {
    var checkStr = elementNames.indexOf("header");
    
    var elem =  "<" + "header" + ">" + " " + "<" + "/" + "header" + ">";
    return editor.session.insert(editor.getCursorPosition() , elem);
    }
  }
  
  
  
  
  function horizontal() {
       if (globalSplit.indexOf("horizontal rule") > -1 ) {
    var checkStr = elementNames.indexOf("horizontal rule");
    
    var elem =  "<" + "hr" + ">" + " " + "<" + "/" + "hr" + ">";
    return editor.session.insert(editor.getCursorPosition() , elem);
    }
  }
  
  
  
  
  function html() {
       if (globalSplit.indexOf("html") > -1 ) {
    var checkStr = elementNames.indexOf("html");
    
    var elem =  "<" + "html" + ">" + " " + "<" + "/" + "html" + ">";
    return editor.session.insert(editor.getCursorPosition() , elem);
    }
  }
  
  
  
  
  function heading() {
       if (globalSplit.indexOf("heading 1") > -1 ) {
    var checkStr = elementNames.indexOf("H1");
    
    var elem =  "<" + "h1" + ">" + " " + "<" + "/" + "h1" + ">";
    return editor.session.insert(editor.getCursorPosition() , elem);
    }
else if (globalSplit.indexOf("heading 2") > -1 ) {
    var checkStr = elementNames.indexOf("H2");
    
    var elem =  "<" + "h2" + ">" + " " + "<" + "/" + "h2" + ">";
    return editor.session.insert(editor.getCursorPosition() , elem);
    }
else if (globalSplit.indexOf("heading 4") > -1 ) {
    var checkStr = elementNames.indexOf("H4");
    
    var elem =  "<" + "h4" + ">" + " " + "<" + "/" + "h4" + ">";
    return editor.session.insert(editor.getCursorPosition() , elem);
    }
else if (globalSplit.indexOf("heading 3") > -1 ) {
    var checkStr = elementNames.indexOf("H3");
    
    var elem =  "<" + "h3" + ">" + " " + "<" + "/" + "h3" + ">";
    return editor.session.insert(editor.getCursorPosition() , elem);
    }
else if (globalSplit.indexOf("heading 5") > -1 ) {
    var checkStr = elementNames.indexOf("H5");
    
    var elem =  "<" + "h5" + ">" + " " + "<" + "/" + "h5" + ">";
    return editor.session.insert(editor.getCursorPosition() , elem);
    }
else if (globalSplit.indexOf("heading 6") > -1 ) {
    var checkStr = elementNames.indexOf("H1");
    
    var elem =  "<" + "h6" + ">" + " " + "<" + "/" + "h6" + ">";
    return editor.session.insert(editor.getCursorPosition() , elem);
    }
  }
  
  
  function H2() {
       if (globalSplit.indexOf("H2") > -1 ) {
    var checkStr = elementNames.indexOf("H2");
    
    var elem =  "<" + "h2" + ">" + " " + "<" + "/" + "h2" + ">";
    return editor.session.insert(editor.getCursorPosition() , elem);
    }
  }
  
  function H2() {
       if (globalSplit.indexOf("H2") > -1 ) {
    var checkStr = elementNames.indexOf("H2");
    
    var elem =  "<" + "h2" + ">" + " " + "<" + "/" + "h2" + ">";
    return editor.session.insert(editor.getCursorPosition() , elem);
    }
  }
  
  
  
  
  function italic() {
       if (globalSplit.indexOf("italic") > -1 ) {
    var checkStr = elementNames.indexOf("italic");
    
    var elem =  "<" + "i" + ">" + " " + "<" + "/" + "i" + ">";
    return editor.session.insert(editor.getCursorPosition() , elem);
    }
  }
  
  
  
  
  function iframe() {
       if (globalSplit.indexOf("iframe") > -1 ) {
    var checkStr = elementNames.indexOf("iframe");
    
    var elem =  "<" + "iframe" + ">" + " " + "<" + "/" + "iframe" + ">";
    return editor.session.insert(editor.getCursorPosition() , elem);
    }
  }
  
  
  
  
  function image() {
       if (globalSplit.indexOf("image") > -1 ) {
    var checkStr = elementNames.indexOf("image");
    
    var elem =  "<" + "img" +  " " + "src=' '" + " " + "alt=' '" + ">";
    return editor.session.insert(editor.getCursorPosition() , elem);
    }
  }
  
  
  
  
  function input() {
       if (globalSplit.indexOf("input") > -1 ) {
    var checkStr = elementNames.indexOf("input");
    
    var elem =  "<" + "input" + " " + "type=' '" + ">";
    return editor.session.insert(editor.getCursorPosition() , elem);
    }
  }
  
  
  
  
  function insert() {
       if (globalSplit.indexOf("insert") > -1 ) {
    var checkStr = elementNames.indexOf("insert");
    
    var elem =  "<" + "ins" + ">" + " " + "<" + "/" + "ins" + ">";
    return editor.session.insert(editor.getCursorPosition() , elem);
    }
  }
  
  
  
  
  function keyboard() {
       if (globalSplit.indexOf("keyboard") > -1 ) {
    var checkStr = elementNames.indexOf("keyboard");
    
    var elem =  "<" + "kbd" + ">" + " " + "<" + "/" + "kbd" + ">";
    return editor.session.insert(editor.getCursorPosition() , elem);
    }
  }
  
  
  
  
  function label() {
       if (globalSplit.indexOf("label") > -1 ) {
    var checkStr = elementNames.indexOf("label");
    
    var elem =  "<" + "label" + ">" + " " + "<" + "/" + "label" + ">";
    return editor.session.insert(editor.getCursorPosition() , elem);
    }
  }
  
  
  
  
  function legend() {
       if (globalSplit.indexOf("legend") > -1 ) {
    var checkStr = elementNames.indexOf("legend");
    
    var elem =  "<" + "legend" + ">" + " " + "<" + "/" + "legend" + ">";
    return editor.session.insert(editor.getCursorPosition() , elem);
    }
  }
  
  
  
  
  function list() {
       if (globalSplit.indexOf("list") > -1 ) {
    var checkStr = elementNames.indexOf("list");
    
    var elem =  "<" + "li" + ">" + " " + "<" + "/" + "li" + ">";
    return editor.session.insert(editor.getCursorPosition() , elem);
    }
  }
  
  
  
  
  function main() {
       if (globalSplit.indexOf("main") > -1 ) {
    var checkStr = elementNames.indexOf("main");
    
    var elem =  "<" + "main" + ">" + " " + "<" + "/" + "main" + ">";
    return editor.session.insert(editor.getCursorPosition() , elem);
    }
  }
  
  
  
  
  function map() {
       if (globalSplit.indexOf("map") > -1 ) {
    var checkStr = elementNames.indexOf("map");
    
    var elem =  "<" + "map" + ">" + " " + "<" + "/" + "map" + ">";
    return editor.session.insert(editor.getCursorPosition() , elem);
    }
  }
  
  
  
  
  function mark() {
       if (globalSplit.indexOf("mark") > -1 ) {
    var checkStr = elementNames.indexOf("mark");
    
    var elem =  "<" + "mark" + ">" + " " + "<" + "/" + "mark" + ">";
    return editor.session.insert(editor.getCursorPosition() , elem);
    }
  }
  
  
  
  
  function meta() {
       if (globalSplit.indexOf("meta") > -1 ) {
    var checkStr = elementNames.indexOf("meta");
    
    var elem =  "<" + "meta" + " description=' '" + " " + "content=' '" + ">";
    return editor.session.insert(editor.getCursorPosition() , elem);
    }
  }
  
  
  
  
  function meter() {
       if (globalSplit.indexOf("meter") > -1 ) {
    var checkStr = elementNames.indexOf("meter");
    
    var elem =  "<" + "meter" + ">" + " " + "<" + "/" + "meter" + ">";
    return editor.session.insert(editor.getCursorPosition() , elem);
    }
  }
  
  
  
  
  function navigation() {
       if (globalSplit.indexOf("navigation") > -1 ) {
    var checkStr = elementNames.indexOf("navigation");
    
    var elem =  "<" + "nav" + ">" + " " + "<" + "/" + "nav" + ">";
    return editor.session.insert(editor.getCursorPosition() , elem);
    }
  }
  
  
  
  
  function no() {
       if (globalSplit.indexOf("no script") > -1 ) {
    var checkStr = elementNames.indexOf("noscript");
    
    var elem =  "<" + "noscript" + ">" + " " + "<" + "/" + "noscript" + ">";
    return editor.session.insert(editor.getCursorPosition() , elem);
    }
else if (globalSplit.indexOf("no script") > -1 ) {
    var checkStr = elementNames.indexOf("noscript");
    
    var elem =  "<" + "noscript" + ">" + " " + "<" + "/" + "noscript" + ">";
    return editor.session.insert(editor.getCursorPosition() , elem);
    }
else if (globalSplit.indexOf("no frames") > -1 ) {
    var checkStr = elementNames.indexOf("no frames");
    
    var elem =  "<" + "noframes" + ">" + " " + "<" + "/" + "no frames" + ">";
    return editor.session.insert(editor.getCursorPosition() , elem);
    }

  }
  
  
  
  
  function object() {
       if (globalSplit.indexOf("object") > -1 ) {
    var checkStr = elementNames.indexOf("object");
    
    var elem =  "<" + "object" + ">" + " " + "<" + "/" + "object" + ">";
    return editor.session.insert(editor.getCursorPosition() , elem);
    }
  }
  
  
  
  
  function ordered() {
       if (globalSplit.indexOf("ordered list") > -1 ) {
    var checkStr = elementNames.indexOf("ordered list");
    
    var elem =  "<" + "ol" + ">" + " " + "<" + "/" + "ol" + ">";
    return editor.session.insert(editor.getCursorPosition() , elem);
    }
  }
  
  
  
  
  function option() {
       if (globalSplit.indexOf("option group") > -1 ) {
    var checkStr = elementNames.indexOf("option group");
    
    var elem =  "<" + "optgroup" + ">" + " " + "<" + "/" + "optgroup" + ">";
    return editor.session.insert(editor.getCursorPosition() , elem);
    }
else if (globalSplit.indexOf("option") > -1 ) {
    var checkStr = elementNames.indexOf("option");
    
    var elem =  "<" + "option" + ">" + " " + "<" + "/" + "option" + ">";
    return editor.session.insert(editor.getCursorPosition() , elem);
    }
  }
  
  
  
  
  function output() {
       if (globalSplit.indexOf("output") > -1 ) {
    var checkStr = elementNames.indexOf("output");
    
    var elem =  "<" + "output" + ">" + " " + "<" + "/" + "output" + ">";
    return editor.session.insert(editor.getCursorPosition() , elem);
    }
  }
  
  
  
  
  function parameter() {
       if (globalSplit.indexOf("parameter") > -1 ) {
    var checkStr = elementNames.indexOf("parameter");
    
    var elem =  "<" + "param" + ">" + " " + "<" + "/" + "param" + ">";
    return editor.session.insert(editor.getCursorPosition() , elem);
    }
  }
  
  
  
  
  function picture() {
       if (globalSplit.indexOf("picture") > -1 ) {
    var checkStr = elementNames.indexOf("picture");
    
    var elem =  "<" + "picture" + ">" + " " + "<" + "/" + "picture" + ">";
    return editor.session.insert(editor.getCursorPosition() , elem);
    }
  }
  
  
  
  
  function pre() {
       if (globalSplit.indexOf("pre") > -1 ) {
    var checkStr = elementNames.indexOf("pre");
    
    var elem =  "<" + "pre" + ">" + " " + "<" + "/" + "pre" + ">";
    return editor.session.insert(editor.getCursorPosition() , elem);
    }
  }
  
  
  
  
  function progress() {
       if (globalSplit.indexOf("progress") > -1 ) {
    var checkStr = elementNames.indexOf("progress");
    
    var elem =  "<" + "progress" + ">" + " " + "<" + "/" + "progress" + ">";
    return editor.session.insert(editor.getCursorPosition() , elem);
    }
  }
  
  
  
  
  function quotation() {
       if (globalSplit.indexOf("quotation") > -1 ) {
    var checkStr = elementNames.indexOf("quotation");
    
    var elem =  "<" + "q" + ">" + " " + "<" + "/" + "q" + ">";
    return editor.session.insert(editor.getCursorPosition() , elem);
    }
  }
  
  
  
  
  function ruby() {
       if (globalSplit.indexOf("ruby parenthesis") > -1 ) {
    var checkStr = elementNames.indexOf("ruby parenthesis");
    
    var elem =  "<" + "rp" + ">" + " " + "<" + "/" + "rp" + ">";
    return editor.session.insert(editor.getCursorPosition() , elem);
    }
else if (globalSplit.indexOf("ruby typography") > -1 ) {
    var checkStr = elementNames.indexOf("ruby typography");
    
    var elem =  "<" + "rt" + ">" + " " + "<" + "/" + "rt" + ">";
    return editor.session.insert(editor.getCursorPosition() , elem);
    }
else if (globalSplit.indexOf("ruby") > -1 ) {
    var checkStr = elementNames.indexOf("ruby");
    
    var elem =  "<" + "rp" + ">" + " " + "<" + "/" + "rp" + ">";
    return editor.session.insert(editor.getCursorPosition() , elem);
    }
  }
  
  
  
  
  function s() {
       if (globalSplit.indexOf("s") > -1 ) {
    var checkStr = elementNames.indexOf("s");
    
    var elem =  "<" + "s" + ">" + " " + "<" + "/" + "s" + ">";
    return editor.session.insert(editor.getCursorPosition() , elem);
    }
  }
  
  function sample() {
       if (globalSplit.indexOf("sample") > -1 ) {
    var checkStr = elementNames.indexOf("sample");
    
    var elem =  "<" + "samp" + ">" + " " + "<" + "/" + "samp" + ">";
    return editor.session.insert(editor.getCursorPosition() , elem);
    }
  }
  
  
  function script() {
       if (globalSplit.indexOf("script") > -1 ) {
    var checkStr = elementNames.indexOf("script");
    
    var elem =  "<" + "script" + ">" + " " + "<" + "/" + "script" + ">";
    return editor.session.insert(editor.getCursorPosition() , elem);
    }
  }
  
  
  function section() {
       if (globalSplit.indexOf("section") > -1 ) {
    var checkStr = elementNames.indexOf("section");
    
    var elem =  "<" + "section" + ">" + " " + "<" + "/" + "section" + ">";
    return editor.session.insert(editor.getCursorPosition() , elem);
    }
  }
  
  
  
  function small() {
       if (globalSplit.indexOf("small") > -1 ) {
    var checkStr = elementNames.indexOf("small");
    
    var elem =  "<" + "small" + ">" + " " + "<" + "/" + "small" + ">";
    return editor.session.insert(editor.getCursorPosition() , elem);
    }
  }
  
  
  
  
  
  function select() {
       if (globalSplit.indexOf("select") > -1 ) {
    var checkStr = elementNames.indexOf("select");
    
    var elem =  "<" + "select" + ">" + " " + "<" + "/" + "select" + ">";
    return editor.session.insert(editor.getCursorPosition() , elem);
    }
  }
  
  
  function source() {
       if (globalSplit.indexOf("source") > -1 ) {
    var checkStr = elementNames.indexOf("source");
    
    var elem =  "<" + "source" + ">" + " " + "<" + "/" + "source" + ">";
    return editor.session.insert(editor.getCursorPosition() , elem);
    }
  }
  
  
  function span() {
       if (globalSplit.indexOf("span") > -1 ) {
    var checkStr = elementNames.indexOf("span");
    
    var elem =  "<" + "span" + ">" + " " + "<" + "/" + "span" + ">";
    return editor.session.insert(editor.getCursorPosition() , elem);
    }
  }
  
  
  
  
  function strike() {
       if (globalSplit.indexOf("strike") > -1 ) {
    var checkStr = elementNames.indexOf("strike");
    
    var elem =  "<" + "strike" + ">" + " " + "<" + "/" + "strike" + ">";
    return editor.session.insert(editor.getCursorPosition() , elem);
    }
  }
  
  
  
  function strong() {
       if (globalSplit.indexOf("strong") > -1 ) {
    var checkStr = elementNames.indexOf("strong");
    
    var elem =  "<" + "strong" + ">" + " " + "<" + "/" + "strong" + ">";
    return editor.session.insert(editor.getCursorPosition() , elem);
    }
  }
  
  function style() {
       if (globalSplit.indexOf("style") > -1 ) {
    var checkStr = elementNames.indexOf("style");
    
    var elem =  "<" + "style" + ">" + " " + "<" + "/" + "style" + ">";
    return editor.session.insert(editor.getCursorPosition() , elem);
    }
  }
  
  
  function subscript() {
       if (globalSplit.indexOf("subscript") > -1 ) {
    var checkStr = elementNames.indexOf("subscript");
    
    var elem =  "<" + "sub" + ">" + " " + "<" + "/" + "sub" + ">";
    return editor.session.insert(editor.getCursorPosition() , elem);
    }
  }


function summary() {
       if (globalSplit.indexOf("summary") > -1 ) {
    var checkStr = elementNames.indexOf("summary");
    
    var elem =  "<" + "summary" + ">" + " " + "<" + "/" + "summary" + ">";
    return editor.session.insert(editor.getCursorPosition() , elem);
    }
  }


function superscript() {
       if (globalSplit.indexOf("superscript") > -1 ) {
    var checkStr = elementNames.indexOf("superscript");
    
    var elem =  "<" + "sup" + ">" + " " + "<" + "/" + "sup" + ">";
    return editor.session.insert(editor.getCursorPosition() , elem);
    }
  }


function svg() {
       if (globalSplit.indexOf("svg") > -1 ) {
    var checkStr = elementNames.indexOf("svg");
    
    var elem =  "<" + "svg" + ">" + " " + "<" + "/" + "svg" + ">";
    return editor.session.insert(editor.getCursorPosition() , elem);
    }
  }



  
  function table() {
       if (globalSplit.indexOf("table body") > -1 ) {
    var checkStr = elementNames.indexOf("table body");
    
    var elem =  "<" + "tbody" + ">" + " " + "<" + "/" + "tbody" + ">";
    return editor.session.insert(editor.getCursorPosition() , elem);
    }
else if (globalSplit.indexOf("table cell") > -1 ) {
    var checkStr = elementNames.indexOf("table cell");
    
    var elem =  "<" + "td" + ">" + " " + "<" + "/" + "td" + ">";
    return editor.session.insert(editor.getCursorPosition() , elem);
    }
else if (globalSplit.indexOf("table row") > -1 ) {
    var checkStr = elementNames.indexOf("table row");
    
    var elem =  "<" + "tr" + ">" + " " + "<" + "/" + "tr" + ">";
    return editor.session.insert(editor.getCursorPosition() , elem);
    }
else if (globalSplit.indexOf("table header") > -1 ) {
    var checkStr = elementNames.indexOf("table header");
    
    var elem =  "<" + "th" + ">" + " " + "<" + "/" + "th" + ">";
    return editor.session.insert(editor.getCursorPosition() , elem);
    }
else if (globalSplit.indexOf("table foot") > -1 ) {
    var checkStr = elementNames.indexOf("table foot");
    
    var elem =  "<" + "tfoot" + ">" + " " + "<" + "/" + "tfoot" + ">";
    return editor.session.insert(editor.getCursorPosition() , elem);
    }
  }



  
  function template() {
       if (globalSplit.indexOf("template") > -1 ) {
    var checkStr = elementNames.indexOf("template");
    
    var elem =  "<" + "template" + ">" + " " + "<" + "/" + "template" + ">";
    return editor.session.insert(editor.getCursorPosition() , elem);
    }
  }



  function textarea() {
       if (globalSplit.indexOf("textarea") > -1 ) {
    var checkStr = elementNames.indexOf("textarea");
    
    var elem =  "<" + "textarea" + ">" + " " + "<" + "/" + "textarea" + ">";
    return editor.session.insert(editor.getCursorPosition() , elem);
    }
  }


function time() {
       if (globalSplit.indexOf("time") > -1 ) {
    var checkStr = elementNames.indexOf("time");
    
    var elem =  "<" + "time" + ">" + " " + "<" + "/" + "time" + ">";
    return editor.session.insert(editor.getCursorPosition() , elem);
    }
  }


function title() {
       if (globalSplit.indexOf("title") > -1 ) {
    var checkStr = elementNames.indexOf("title");
    
    var elem =  "<" + "title" + ">" + " " + "<" + "/" + "title" + ">";
    return editor.session.insert(editor.getCursorPosition() , elem);
    }
  }



  
  function track() {
       if (globalSplit.indexOf("track") > -1 ) {
    var checkStr = elementNames.indexOf("track");
    
    var elem =  "<" + "track" + ">" + " " + "<" + "/" + "track" + ">";
    return editor.session.insert(editor.getCursorPosition() , elem);
    }
  }


function teletype() {
       if (globalSplit.indexOf("teletype") > -1 ) {
    var checkStr = elementNames.indexOf("teletype");
    
    var elem =  "<" + "tt" + ">" + " " + "<" + "/" + "tt" + ">";
    return editor.session.insert(editor.getCursorPosition() , elem);
    }
  }



  
  function underline() {
       if (globalSplit.indexOf("underline") > -1 ) {
    var checkStr = elementNames.indexOf("underline");
    
    var elem =  "<" + "u" + ">" + " " + "<" + "/" + "u" + ">";
    return editor.session.insert(editor.getCursorPosition() , elem);
    }
  }



  function unordered() {
       if (globalSplit.indexOf("unordered") > -1 ) {
    var checkStr = elementNames.indexOf("unordered");
    
    var elem =  "<" + "ul" + ">" + " " + "<" + "/" + "ul" + ">";
    return editor.session.insert(editor.getCursorPosition() , elem);
    }
  }


function variable() {
       if (globalSplit.indexOf("variable") > -1 ) {
    var checkStr = elementNames.indexOf("variable");
    
    var elem =  "<" + "var" + ">" + " " + "<" + "/" + "var" + ">";
    return editor.session.insert(editor.getCursorPosition() , elem);
    }
  }



  function video() {
       if (globalSplit.indexOf("video") > -1 ) {
    var checkStr = elementNames.indexOf("video");
    
    var elem =  "<" + "video" + ">" + " " + "<" + "/" + "video" + ">";
    return editor.session.insert(editor.getCursorPosition() , elem);
    }
  }



  



  function word() {
       if (globalSplit.indexOf("word break opportunity") > -1 ) {
    var checkStr = elementNames.indexOf("word break opportunity");
    
    var elem =  "<" + "wbr" + ">" + " " + "<" + "/" + "wbr" + ">";
    return editor.session.insert(editor.getCursorPosition() , elem);
    }
  }
  
  
  
  
  