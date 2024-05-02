
let text = document.getElementById('text');

function get_info(id) {
    if (id == 'btn1') {
        text.innerHTML = `
        <span class='span_btn'>Ansia:</span> L'uso eccessivo dei social media può portare a un aumento dell'ansia, causata dalla pressione sociale, dalla paura di perdere eventi o notizie importanti e dalla costante confronto con le vite degli altri.
        <br>
        <br>
        <span class='span_btn'>Depressione:</span> La dipendenza dai social media e l'esposizione a contenuti negativi possono contribuire allo sviluppo della depressione, influenzando negativamente l'umore e l'autostima degli individui.
        <br>
        <br>
        <span class='span_btn'>Stress:</span> La continua ricezione di notifiche, la necessità di mantenere una presenza online e il confronto costante con opinioni diverse possono causare stress e sovraccarico cognitivo.
        <br>
        <br>
        <span class='span_btn'>Dipendenza digitale:</span> La dipendenza da social media, caratterizzata da un uso compulsivo e incontrollato, può avere gravi conseguenze sulla salute mentale e sulle relazioni interpersonali.
        `
    } else if (id == 'btn2') {
        text.innerHTML = `
        <span class='span_btn'>Sonno disturbato:</span>  L'esposizione alla luce blu dei dispositivi digitali prima di coricarsi può interferire con il ciclo del sonno, causando difficoltà nell'addormentarsi e riducendo la qualità del sonno.
        <br>
        <br>
        <span class='span_btn'>Sedentarietà:</span>  L'uso prolungato dei social media può portare a uno stile di vita sedentario, con conseguenti rischi per la salute come l'obesità, le malattie cardiache e il diabete.
        <br>
        <br>
        <span class='span_btn'>Affaticamento visivo:</span> La fissazione prolungata sui dispositivi digitali può causare affaticamento degli occhi, secchezza oculare e altri disturbi visivi.
        
        ` 
    } else if (id == 'btn3') {
        text.innerHTML = `
        <span class='span_btn'>Percezione distorta del proprio corpo:</span> L'esposizione a immagini idealizzate e ritoccate su social media può influenzare negativamente la percezione che le persone hanno del proprio corpo, portando a insicurezze e disturbi alimentari come l'anoressia o la bulimia.
        <br>
        <br>
        <span class='span_btn'>Problematiche di autostima:</span> Il confronto costante con le vite e le immagini degli altri sui social media può minare l'autostima e il senso di valore personale degli individui, portando a sentimenti di inadeguatezza e insoddisfazione.
        
        `
    } else if (id == 'btn4') {
        text.innerHTML = `
        <span class='span_btn'>Comportamenti influenzati:</span> L'esposizione a determinati contenuti sui social media può influenzare le decisioni e i comportamenti degli individui, spingendoli ad adottare azioni specifiche come partecipare a proteste, sostenere cause sociali o seguire determinate tendenze di consumo.
        ` 
    } 
}