
var SpeechRecognition = window.webkitSpeechRecognition;
 var recognition = new SpeechRecognition();

var instructions = document.querySelector("#instructions");
 
recognition.onstart = function() { 
  instructions.innerHTML = 'Voice recognition is ON.';
};
 
recognition.onspeechend = function() {
  instructions.innerHTML = 'No Activity .';
};
 
recognition.onerror = function(event) {
  if(event.error == 'no-speech') {
    instructions.innerHTML = 'Try again.'; 
  }
};

recognition.onresult = function(event) {
	var current = event.resultIndex;
	var transcript = event.results[current][0].transcript;
	transcript.toLowerCase();
	Create(transcript);
	Add(transcript);
	var mobileRepeatBug = (current == 1 && transcript == event.results[0][0].transcript); 
	if (mobileRepeatBug) { 
	txt.value += transcript;
	};
};

var startVoice = function(e) {
	return  recognition.start();
};

function update()
{
	var idoc = document.getElementById('iframe').contentWindow.document;

	idoc.open();
	idoc.write(editor.getValue());
	idoc.write("<style>" + csseditor.getValue() + "</style>");
	idoc.write("<script>" + jseditor.getValue() + "</script>");
	idoc.close();
	
}

function setupEditor()
	{
  window.editor = ace.edit("htmleditor");
  editor.setTheme("ace/theme/monokai");
  editor.getSession().setMode("ace/mode/html");
		editor.setValue("",1);
		
		
editor.getSession().on('change', function() {
    update();
  });



//
window.csseditor = ace.edit("csseditor");
 csseditor.setTheme("ace/theme/monokai");
  csseditor.getSession().setMode("ace/mode/css");
	csseditor.setValue("",1);	
		
  
	csseditor.getSession().on('change', function() {
    update();
  });

//
window.jseditor = ace.edit("jseditor");
  jseditor.setTheme("ace/theme/monokai");
  jseditor.getSession().setMode("ace/mode/javascript");
	jseditor.setValue("",1);	
		
  

  jseditor.getSession().on('change', function() {
    update();
  });

  editor.focus();
  
  
  editor.getEditor().setOptions({
    fontSize: "14pt",
    showLineNumbers: true,
    showGutter: true,
    vScrollBarAlwaysVisible:true,
    enableBasicAutocompletion: true, enableLiveAutocompletion: false });

  
  editor.setBehavioursEnabled(false);
editor.enableBasicAutocompletion(true);

// CSS
csseditor.getEditor().setOptions({
    fontSize: "14pt",
    showLineNumbers: true,
    showGutter: true,
    vScrollBarAlwaysVisible:true,
    enableBasicAutocompletion: true, enableLiveAutocompletion: false });

  csseditor.setShowPrintMargin(false);
  csseditor.setBehavioursEnabled(false);
csseditor.enableBasicAutocompletion(true);

// JAVASCRIPT

jseditor.getEditor().setOptions({
    fontSize: "14pt",
    showLineNumbers: true,
    showGutter: true,
    vScrollBarAlwaysVisible:true,
    enableBasicAutocompletion: true, enableLiveAutocompletion: false });

  jseditor.setShowPrintMargin(false);
  jseditor.setBehavioursEnabled(false);
jseditor.enableBasicAutocompletion(true);
}

setupEditor();
update();
  

String.prototype.indexOfEnd = function(string) {
    var io = this.indexOf(string);
    return io == -1 ? -1 : io + string.length;
};

function Create(transcript) {
		var element = /create/;
		
	 if (element.test(transcript) === true) {
			var splitter = transcript.toLowerCase().split(' ');
			globalSplit = splitter;
	
		var check = elementsArray.indexOf(globalSplit[1]);
			
		 if (check > -1){
				var elem =  "<" + elementsArray[check] + ">" + " " + "<" + "/" + elementsArray[check] + ">";
		return editor.session.insert(editor.getCursorPosition() , elem);
			}
			elementNames.forEach(cop);
			} 
		
		
	//	alert(transcript.toLowerCase());

			
			
};

function Add(transcript) {
		var element = /add/;
		var cursor = editor.getCursorPosition();
			var line = editor.session.getLine(cursor.row);
		if (element.test(transcript) === true) {
			var splitter = transcript.toLowerCase().split(' ');
					if (Attributes.indexOf(splitter[2]) > -1) {
					var addAttribute = " " + splitter[2] + "=" + "'" + "'";
			return editor.session.insert(editor.getCursorPosition() , addAttribute);
				}
			}

};

var globalSplit;


function Each(item) {
				if (Attributes.indexOf(globalSplit[2]) > -1) {
					var addAttribute = "=" + "'" + globalSplit[2] + "'";
			return editor.session.insert(editor.getCursorPosition() , addAttribute);
					}
			else {
			alert("egungun be careful");
			}
} 


	function cop(item) {
		if (globalSplit.indexOf(item) > -1) {
			return eval(item + "("  + ")");
			}
			
				}
	
		
				
			