var piRef = activeDocument.pathItems;

var txRef = activeDocument.textFrames;
var docRef = app.activeDocument;
var pureBlack = new CMYKColor();
pureBlack.black = 100;
var red = new CMYKColor();
red.black = 0;
red.magenta = 100;
red.yellow = 100;
red.cyan = 0;
var white = new CMYKColor();


if(docRef.selection[0] != null){
    startGUI();
} else {
    alert("Please draw a guide rectangle to set width of scale bar", undefined, undefined);
    };



function startGUI() {
    var win = new Window("dialog", "Compass and scale generator", undefined);
    win.orientation = "column";
    win.alignChildren = ["fill", "fill"]

    var firstGroup = win.add("panel", undefined, undefined);
    firstGroup.orientation = "column";
    firstGroup.alignChildren = ["fill", "fill"];
     var secondGroup = win.add("panel", undefined, undefined);
    secondGroup.orientation = "row";
    secondGroup.alignChildren = ["fill", "fill"];

    ttl_scaleNum = firstGroup.add("statictext", undefined, "Number of tick marks");
    var txt_scaleNum = firstGroup.add("edittext { characters: 3, justify: 'left', active: true}");
    txt_scaleNum.helpTip = "Number of markers on scale bar";
    txt_scaleNum.text = 3;

    var_scaleMax = firstGroup.add("statictext", undefined, "Maximum number on scale");
    var txt_scaleMax = firstGroup.add("edittext { characters: 6, justify: 'left', active: true}");
    txt_scaleMax.helpTip = "Rightmost number on scale bar";
    txt_scaleMax.text = 1000

    var ttlleUnit = firstGroup.add("statictext", undefined, "Unit of measurement");
    var txt_scaleUnit = firstGroup.add("edittext { characters: 3, justify: 'left', active: true}");
    txt_scaleUnit.helpTip = "e.g. m, km";
    txt_scaleUnit.text = "km";

    txt_scaleNutive = true;


    var genBtnecondp.add("button", undefined, "Generate");
    genBtn.maximumSize = [100,20];
    genBtn.helpTip = "Generate compass rose and scale bar";
    genBtn.onClick = function(){
        drawCompass(txt_scaleNum.text, txt_scaleMax.text, txt_scaleUnit.text);
        win.close();
        }
    win.addEventListener ('keydown', function(kd) {enter(kd)});
    function enter(k) {
        if (k.keyName == "Enter") {
            drawCompass(txt_scaleNum.text, txt_scaleMax.text, txt_scaleUnit.text);
            win.close();
        }
    }

    var quitBtn = secondGrodd("button", undefined, "Close");
    quitBtn.helpTip = "Cancel operation";
    quitBtn.maximumSize = [100,20];

    quitBtn.onClick = function(        win.close();
        }

    win.center();
    win.show();

    };

function drawCompass(scaleNeMax, scaleUnit){


    docRef.selection[0].stroked = false;

var selY = docRef.selection[0].top;
    var seldocRef.selection[0].left;
    var selWidth = docRef.selection[0].width;
    var scaleHeight = 2;
    docRef.selection[0].remove();

    // draw compass north arrow

    var nArrow = p.add();
    var nArrowWidth = 5.395;
var nArrowHeight = 13.037;
    nArrow.strokeWidth = 0;

    nArrow.setEntirePath([[selY, selX],[selY + nArrowWidth/2, s+ nArrowHeight],[selY + nArrowWidth, selX]]);

    nArrow.filled = true;
    nArrow.fillColor = red;
    nArrow.toselY + 33.24;
    nArrow.left = selX + selWidth/2 - nArrowWidth/2;
    nArrow.stroked = true;
    nArrow.strokeColor = pureBlack;
    nArrow.strokeWidth = 0.25;
    nArrow.closed = true;
    nArrow.selected = true;

    // draw compass centre

    var compDiam = 6.5;
    var compassiRef.ellipse(selY + 22.84, selX lWidth/2 - compDiam/2, compDiam, compDiam, false, true);

    compass.filled = true;
    compass.stroked = true;
    compass.fillColor = e;
    compass.strokeColor = pureBlack;
    compass.strokeWidth = 1;
    compass.selected = true;

    // draw scale bar base

    var scaleBar = piRef.rectangle(selY, selX, selW, scaleHeight, false);
    scalefilled = true;
    scaleBar.stroked = true;
    scaleBar.fillColor = white;
    scaleBar.strokeColor = pureBlack;
    scaleBar.strokeWidth = 0.35;
    scaleBar.selected = true;

    // draw North label
    var northLabel = txRef.add();
    northLabel.contents = "N";
  rthLabel.top = selY + 45;
    northLabel.left = selX + selWidth/2;
    northLabel.selected = true;
    var northChar = northLabel.characters[0].characterAttributes;
    var northPara = northLabel.paragraphs[0].paragraphAttributes;
    northChar.size = 6;
    // northChar.textFont = app.textFonts.getByName("HelveticaNeueLTPro-Bd");
    northChar.fillColor = pureBlack;
    northPara.justification = Justification.CENTER;

    // draw scale bar divisions and text

    for (i=0; i < scaleNum; i++){
        var scaleDiv = piRef.add();
        var scalePos = (sdth / (scaleNum-1)) * (i);
        var scaleVal = (scaleMax / (scaleNum-1)) * (i);
        scaleDiv.setEntirePath([[selX + scalePos, selY + scaleHeight], [selX + scalePos, selY]]);
        scaleDiv.filled = false;
        scaleDiv.stroked = true;
        scaleDiv.strokeColor = pureBlack;
        scaleDiv.strokeWidth = 0.35;
        scaleDiv.selected = true;

        var tx = txRef.add();
        if (i < (scaleNum-1)){
            tx.contents = Math.floVal);
            tx.top = selY + scaleHeight + 12.5;
            tx.left = selX + scalePos;
            tx.selected = true;
            } else {
            tx.contents = Math.floor(scaleVal) + " " + scaleUnit;
            tx.top = selY + scaleHeight + 12.5;
            tx.left = selX + scalePos + 5;
            tx.selected = true;
            }

        var charCount = tx.textRange.characters.length;
        for (j=0; j < charCount; j++){
        txChar = tx.textRange.characters[j].characterAttributes;
            var txPara = tx.textRange.paragraphs[0].paragraphAttributes;
            txChar.size = "6";
            // txChar.textFont = app.textFonts.getByName("HelveticaNeueLTPro-Roman");
            txChar.fillColor = pureBlack;
            txPara.justification = Justification.CENTER;
            }

        }

    app.executeMenuCommand('group');

}
