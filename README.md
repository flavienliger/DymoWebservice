# Dymo WebService Online

Problem: webservice dymo usable only in localhost:port

[Solution: make server who call localhost:port](https://flavienliger.github.io/2016/03/08/Jeux-de-piste-D-Y-M-O.html) (fr)


## Getting start

- Windows OS
- Install [DLS 8.5.3](http://www.labelwriter.com/software/dls/win/DLSSetup.8.5.3.1897.exe)
- Install [WebService Beta 2](http://www.labelwriter.com/SDK_Beta/DYMO_Web_Service_Install_1.0_Beta2.exe)
- Start Webservice, in notification "Configure", enable "Use single port", and set port to 41951.
- Install [Visual C++ Redistributable 64 or 32bits](https://www.smartftp.com/support/kb/the-program-cant-start-because-api-ms-win-crt-runtime-l1-1-0dll-is-missing-f2702.html)
- Install [Wamp](http://www.wampserver.com) or [via sourceForge](https://sourceforge.net/projects/wampserver/)

### Wamp configuration
- Enable php_curl extension (by default is enable)
- [Put online WampServer](http://www.simonewebdesign.it/how-to-put-online-your-wampserver/). 
Tl;dr: 
  - Open port 80
  - Allow extern, wamp > Apache > httpd.conf replace :
  ```
  #   onlineoffline tag - don't remove
    Require local
  ```
  By :
  ```
  #   onlineoffline tag - don't remove
    Require all granted
  ```

### Install File

- Copy git/server/dymo.php to wamp/www

## How To use

- Copy git/client/DYMO.Label.Framework.2.0.2_edited.js in your project

### Call library

```javascript
dymo.label.framework.init('http://yourip/dymo.php?', function(){

  /* === classic function - Framework === */
  /* --- exemple print label (barcode) --- */
  
  var text = '123456789';
  
  var labelXml = `<?xml version="1.0" encoding="utf-8"?>
    <DieCutLabel Version="8.0" Units="twips">
        <PaperOrientation>Landscape</PaperOrientation>
        <Id>LargeAddress</Id>
        <PaperName>30321 Large Address</PaperName>
        <DrawCommands>
            <RoundRectangle X="0" Y="0" Width="2025" Height="5020" Rx="270" Ry="270" />
        </DrawCommands>
        <ObjectInfo>
            <BarcodeObject>
                <Name>Code-barres</Name>
                <ForeColor Alpha="255" Red="0" Green="0" Blue="0" />
                <BackColor Alpha="0" Red="255" Green="255" Blue="255" />
                <LinkedObjectName></LinkedObjectName>
                <Rotation>Rotation0</Rotation>
                <IsMirrored>False</IsMirrored>
                <IsVariable>False</IsVariable>
                <Text>`+text+`</Text>
                <Type>Code39</Type>
                <Size>Large</Size>
                <TextPosition>Bottom</TextPosition>
                <TextFont Family="Arial" Size="14" Bold="True" Italic="False" Underline="False" Strikeout="False" />
                <CheckSumFont Family="Arial" Size="14" Bold="True" Italic="False" Underline="False" Strikeout="False" />
                <TextEmbedding>None</TextEmbedding>
                <ECLevel>0</ECLevel>
                <HorizontalAlignment>Center</HorizontalAlignment>
                <QuietZonesPadding Left="0" Top="0" Right="0" Bottom="0" />
            </BarcodeObject>
            <Bounds X="332" Y="120" Width="4335" Height="1720" />
        </ObjectInfo>
    </DieCutLabel>`;

    var label = dymo.label.framework.openLabelXml(labelXml);
    
    var printers = dymo.label.framework.getPrinters();
    
    if (printers.length == 0)
        throw "No DYMO printers are installed. Install DYMO printers.";

    var printerName = "";
    for (var i = 0; i < printers.length; ++i){
        var printer = printers[i];
        if (printer.printerType == "LabelWriterPrinter"){
            printerName = printer.name;
            break;
        }
    }

    if (printerName == "")
        throw "No LabelWriter printers found. Install LabelWriter printer";
    
    // finally print the label
    label.print(printerName);
});
```

## Annexes

### Test configuration

- Open: http://localhost/dymo.php?/DYMO/DLS/Printing/StatusConnected > "true"
- Open: http://yourip/dymo.php?/DYMO/DLS/Printing/StatusConnected > "true"

### Change Dymo PORT
- Edit dymo.php, line 5
```php
$port = 41951; // by your port
```
