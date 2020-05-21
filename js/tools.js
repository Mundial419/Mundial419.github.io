
var tracker;
	var menuBtn = document.querySelector("#menu");
	var menuStatus;
var undoBtn = document.querySelector("#un");
var redoBtn = document.querySelector("#re");
var findBtn = document.querySelector("#find");
var replaceBtn = document.querySelector("#replace");

  function undo() {        
	if (eval(tracker + "." + "session.getUndoManager().hasUndo()")) {
		eval(tracker + "." + "undo()");
		undoBtn.disabled = false;
	}
	else {
	undoBtn.disabled = true;
	}
		
      }
        
        
  function redo() {
                   if (eval(tracker + "." + "session.getUndoManager().hasRedo()")) {
		eval(tracker + "." + "redo()");
		undoBtn.disabled = false;
	}
		else {
		redoBtn.disabled = true;
		}
        }
        
    function find() {
			editor.clearSelection();
			csseditor.clearSelection();
			jseditor.clearSelection();
			var checkStatus = document.querySelector("#checkF");
			if (checkStatus.checked === true) {
					eval(tracker + "." + "findAll(findBtn.value)");
						}
				else {
		
					eval(tracker + "." + "find(findBtn.value)");
			}
	}
	
	function replace() {
		var checkStatus = document.querySelector("#checkR");
			if (checkStatus.checked === true) {
					eval(tracker + "." + "findAll(findBtn.value)");
			eval(tracker + "." + "replaceAll(findBtn.value)");
				}
				else {
			eval(tracker + "." + "find(findBtn.value)");
			eval(tracker + "." + "replace(findBtn.value)");
			}
	}
	
	function trackChangeH() {
			tracker = "editor";
	}
	function trackChangeC() {
			tracker = "csseditor";
	}
	function trackChangeJ() {
			tracker = "jseditor";
	}
	
	function save() {
		var contentH = editor.getValue();
			var contentC = csseditor.getValue();
			var contentJ = jseditor.getValue();
			
			window.localStorage.setItem("html", contentH);
				window.localStorage.setItem("css", contentC);
				window.localStorage.setItem("javascript", contentJ);
				var para = document.querySelector("#ht");
				para.innerHTML = "HTML <span class='social-spanner'></span><i class='fas fa-microphone-alt' onclick='startVoice()'></i>";
				var paraC = document.querySelector("#cs");
				paraC.innerHTML = "CSS";
				var paraJ = document.querySelector("#js");
				paraJ.innerHTML = "JAVASCRIPT";

	}
	
	function unsave() {
	
	if (editor.getValue() !== window.localStorage.html) {
		var para = document.querySelector("#ht");
				para.innerHTML = "HTML" + "<span style='color:white;'>*</span><span class='social-spanner'></span><i class='fas fa-microphone-alt' onclick='startVoice()'></i>";
		}
	  if (csseditor.getValue() !== window.localStorage.css) {
			var paraC = document.querySelector("#cs");
				paraC.innerHTML = "CSS" + "<span style='color:white;'>*</span>";
			}
		 if (jseditor.getValue() !== window.localStorage.javascript) {
				var paraJ = document.querySelector("#js");
				paraJ.innerHTML = "JAVASCRIPT" + "<span style='color:white;'>*</span>";
				}
			}
		
							
		function goTo() {
			var go = document.querySelector("#goto");
					eval(tracker + "." + "gotoLine(" + go.value + ")");
			
			}
			
		function reset() {
			window.localStorage.html = " ";
			window.localStorage.css = " ";
			window.localStorage.javascript = " ";
			editor.session.setValue("");
			csseditor.session.setValue("");
			jseditor.session.setValue("");
			}
			
			editor.commands.addCommand({
    name: 'save',
    bindKey: {win: 'Ctrl-S',  mac: 'Command-S'},
    exec: function() {
     var contentH = editor.getValue();
			var contentC = csseditor.getValue();
			var contentJ = jseditor.getValue();
			
			window.localStorage.setItem("html", contentH);
				window.localStorage.setItem("css", contentC);
				window.localStorage.setItem("javascript", contentJ);
				var para = document.querySelector("#ht");
				para.innerHTML = "HTML";
				var paraC = document.querySelector("#cs");
				paraC.innerHTML = "CSS";
				var paraJ = document.querySelector("#js");
				paraJ.innerHTML = "JAVASCRIPT";

    },
    readOnly: false // false if this command should not apply in readOnly mode
});

editor.commands.addCommand({
    name: 'redo',
    bindKey: {win: 'Ctrl-Y',  mac: 'Command-Y'},
    exec: function() {
             if (eval(tracker + "." + "session.getUndoManager().hasRedo()")) {
		eval(tracker + "." + "redo()");
		undoBtn.disabled = false;
	}
		else {
		redoBtn.disabled = true;
		}

    },
    readOnly: false // false if this command should not apply in readOnly mode
});


editor.commands.addCommand({
    name: 'undo',
    bindKey: {win: 'Ctrl-Z',  mac: 'Command-Z'},
    exec: function() {
     if (eval(tracker + "." + "session.getUndoManager().hasUndo()")) {
		eval(tracker + "." + "undo()");
		undoBtn.disabled = false;
	}
	else {
	undoBtn.disabled = true;
	}

    },
    readOnly: false // false if this command should not apply in readOnly mode
});


