import { io } from "https://cdn.socket.io/4.7.5/socket.io.esm.min.js";
import "https://unpkg.com/panzoom@9.4.0/dist/panzoom.min.js"
const socket = io();
var canv = document.getElementById("schedadelpersonaggio")
function getAssets(str) {
    return "https://egregge.ddns.net/assets/"+str
}
/**
 * @type {import("panzoom").PanZoomOptions}
 */
var zoomopt = {
    autocenter: true, 
    bounds: false,
    minZoom: 1, 
    maxZoom: 10,
    onTouch: (e) => {
        if (!e.target.hasScrollBar()) {
            e.preventDefault()
        }
        //socket.emit("log", e.targetTouches)
    }
}
var zoom = panzoom(canv, zoomopt)
function MaxChar(char, str) {
    if (str.length>char) {
        return str.slice(0,Math.max(0, char-3))+"..."
    }
    return str
}
/**
 * @param {string} txt
 */
function firstCapital(txt) {
    var t = txt.split("")
    t[0]=t[0].toUpperCase()
    return t.join("")
}
function maxpixel(ele,pixel, str) {
    ele.innerHTML=str
}
// console.log(zoom)
var charname = window.location.pathname.slice("/dnd/schedadelpersonaggio/".length)

// console.log(socket)
socket.on("updateData", updateData)
socket.emit("init",charname.toLowerCase().replace(/[^A-Za-z0-9]/,""))

// var dc = canv.getContext("2d")
// var img = document.createElement("img")
// var img = new Image();
// img.onload = function(){
//     dc.drawImage(img,0,0, 1238, 1632,); // Or at whatever offset you like
// };
// img.src = getAssets("dnd_1.jpg");
// 1238 x 1632
function updateData(data) {
    console.log(data)
    document.getElementById("nomepersonaggio").innerHTML=data.nome.nome+" "+data.nome.cognome
    document.getElementById("title").innerHTML=data.nome.nome+" "+data.nome.cognome
    
    document.getElementById("classeelivello").innerHTML=data.origine.classe+" "+data.origine.livello
    document.getElementById("background").innerHTML=data.origine.background
    document.getElementById("nomegiocatore").innerHTML=data.giocatore
    document.getElementById("razza").innerHTML=data.origine.razza
    document.getElementById("allineamento").innerHTML=data.origine.allineamento
    document.getElementById("puntiesperienza").innerHTML=data.origine.puntiesperienza+" PE"
    
    document.getElementById("forza").innerHTML=data.statistiche.forza
    document.getElementById("destrezza").innerHTML=data.statistiche.destrezza
    document.getElementById("costituzione").innerHTML=data.statistiche.costituzione
    document.getElementById("intelligenza").innerHTML=data.statistiche.intelligenza
    document.getElementById("saggezza").innerHTML=data.statistiche.saggezza
    document.getElementById("carisma").innerHTML=data.statistiche.carisma

    
    document.getElementById("msforza").innerHTML=data.modificatorestatistica.forza>0?"+"+data.modificatorestatistica.forza:data.modificatorestatistica.forza
    document.getElementById("msdestrezza").innerHTML=data.modificatorestatistica.destrezza>0?"+"+data.modificatorestatistica.destrezza:data.modificatorestatistica.destrezza
    document.getElementById("mscostituzione").innerHTML=data.modificatorestatistica.costituzione>0?"+"+data.modificatorestatistica.costituzione:data.modificatorestatistica.costituzione
    document.getElementById("msintelligenza").innerHTML=data.modificatorestatistica.intelligenza>0?"+"+data.modificatorestatistica.intelligenza:data.modificatorestatistica.intelligenza
    document.getElementById("mssaggezza").innerHTML=data.modificatorestatistica.saggezza>0?"+"+data.modificatorestatistica.saggezza:data.modificatorestatistica.saggezza
    document.getElementById("mscarisma").innerHTML=data.modificatorestatistica.carisma>0?"+"+data.modificatorestatistica.carisma:data.modificatorestatistica.carisma

    document.getElementById("ispirazione").innerHTML=data.ispirazione?"Si":"No"
    document.getElementById("bonusdicompetenza").innerHTML=data.bonusdicompetenza
    
    document.getElementById("tirisalvezzaforzav").innerHTML=data.tirisalvezza.forza.valore
    document.getElementById("tirisalvezzadestrezzav").innerHTML=data.tirisalvezza.destrezza.valore
    document.getElementById("tirisalvezzacostituzionev").innerHTML=data.tirisalvezza.costituzione.valore
    document.getElementById("tirisalvezzaintelligenzav").innerHTML=data.tirisalvezza.intelligenza.valore
    document.getElementById("tirisalvezzasaggezzav").innerHTML=data.tirisalvezza.saggezza.valore
    document.getElementById("tirisalvezzacarismav").innerHTML=data.tirisalvezza.carisma.valore

    document.getElementById("tirisalvezzaforzaa").setAttribute("fill",data.tirisalvezza.forza.attivo?"black":"transparent")
    document.getElementById("tirisalvezzadestrezzaa").setAttribute("fill",data.tirisalvezza.destrezza.attivo?"black":"transparent")
    document.getElementById("tirisalvezzacostituzionea").setAttribute("fill",data.tirisalvezza.costituzione.attivo?"black":"transparent")
    document.getElementById("tirisalvezzaintelligenzaa").setAttribute("fill",data.tirisalvezza.intelligenza.attivo?"black":"transparent")
    document.getElementById("tirisalvezzasaggezzaa").setAttribute("fill",data.tirisalvezza.saggezza.attivo?"black":"transparent")
    document.getElementById("tirisalvezzacarismaa").setAttribute("fill",data.tirisalvezza.carisma.attivo?"black":"transparent")

    document.getElementById("abilitaacrobaziaa").setAttribute("fill",data.abilita.acrobazia.attivo?"black":"transparent")
    document.getElementById("abilitaaddestramentoanimalia").setAttribute("fill",data.abilita.addestramentoanimali.attivo?"black":"transparent")
    document.getElementById("abilitaarcanoa").setAttribute("fill",data.abilita.arcano.attivo?"black":"transparent")
    document.getElementById("abilitaatleticaa").setAttribute("fill",data.abilita.atletica.attivo?"black":"transparent")
    document.getElementById("abilitafurtivitaa").setAttribute("fill",data.abilita.furtivita.attivo?"black":"transparent")
    document.getElementById("abilitaindagarea").setAttribute("fill",data.abilita.indagare.attivo?"black":"transparent")
    document.getElementById("abilitaingannoa").setAttribute("fill",data.abilita.inganno.attivo?"black":"transparent")
    document.getElementById("abilitaintimidirea").setAttribute("fill",data.abilita.intimidire.attivo?"black":"transparent")
    document.getElementById("abilitaintrattenerea").setAttribute("fill",data.abilita.intrattenere.attivo?"black":"transparent")
    document.getElementById("abilitaintuizionea").setAttribute("fill",data.abilita.intuizione.attivo?"black":"transparent")
    document.getElementById("abilitamedicinaa").setAttribute("fill",data.abilita.medicina.attivo?"black":"transparent")
    document.getElementById("abilitanaturaa").setAttribute("fill",data.abilita.natura.attivo?"black":"transparent")
    document.getElementById("abilitapercezionea").setAttribute("fill",data.abilita.percezione.attivo?"black":"transparent")
    document.getElementById("abilitapersuasionea").setAttribute("fill",data.abilita.persuasione.attivo?"black":"transparent")
    document.getElementById("abilitarapiditadimanoa").setAttribute("fill",data.abilita.rapiditadimano.attivo?"black":"transparent")
    document.getElementById("abilitareligionea").setAttribute("fill",data.abilita.religione.attivo?"black":"transparent")
    document.getElementById("abilitasopravvivenzaa").setAttribute("fill",data.abilita.sopravvivenza.attivo?"black":"transparent")
    document.getElementById("abilitastoriaa").setAttribute("fill",data.abilita.storia.attivo?"black":"transparent")

    document.getElementById("abilitaacrobaziav").innerHTML=data.abilita.acrobazia.valore
    document.getElementById("abilitaaddestramentoanimaliv").innerHTML=data.abilita.addestramentoanimali.valore
    document.getElementById("abilitaarcanov").innerHTML=data.abilita.arcano.valore
    document.getElementById("abilitaatleticav").innerHTML=data.abilita.atletica.valore
    document.getElementById("abilitafurtivitav").innerHTML=data.abilita.furtivita.valore
    document.getElementById("abilitaindagarev").innerHTML=data.abilita.indagare.valore
    document.getElementById("abilitaingannov").innerHTML=data.abilita.inganno.valore
    document.getElementById("abilitaintimidirev").innerHTML=data.abilita.intimidire.valore
    document.getElementById("abilitaintrattenerev").innerHTML=data.abilita.intrattenere.valore
    document.getElementById("abilitaintuizionev").innerHTML=data.abilita.intuizione.valore
    document.getElementById("abilitamedicinav").innerHTML=data.abilita.medicina.valore
    document.getElementById("abilitanaturav").innerHTML=data.abilita.natura.valore
    document.getElementById("abilitapercezionev").innerHTML=data.abilita.percezione.valore
    document.getElementById("abilitapersuasionev").innerHTML=data.abilita.persuasione.valore
    document.getElementById("abilitarapiditadimanov").innerHTML=data.abilita.rapiditadimano.valore
    document.getElementById("abilitareligionev").innerHTML=data.abilita.religione.valore
    document.getElementById("abilitasopravvivenzav").innerHTML=data.abilita.sopravvivenza.valore
    document.getElementById("abilitastoriav").innerHTML=data.abilita.storia.valore
    
    document.getElementById("ca").innerHTML=data.ca
    document.getElementById("iniziativa").innerHTML=data.iniziativa
    document.getElementById("velocita").innerHTML=data.velocita
    
    document.getElementById("puntiferitaatt").innerHTML=data.puntiferita.max
    document.getElementById("puntiferitamax").innerHTML=data.puntiferita.attuali
    document.getElementById("puntiferitatemp").innerHTML=data.puntiferita.temp>0?data.puntiferita.temp:""
    
    document.getElementById("dadivitatot").innerHTML=data.dadivita.totale
    document.getElementById("dadivitaatt").innerHTML=data.dadivita.attuale

    document.getElementById("tscontromortes0").setAttribute("fill","transparent")
    document.getElementById("tscontromortes1").setAttribute("fill","transparent")
    document.getElementById("tscontromortes2").setAttribute("fill","transparent")

    document.getElementById("tscontromortef0").setAttribute("fill","transparent")
    document.getElementById("tscontromortef1").setAttribute("fill","transparent")
    document.getElementById("tscontromortef2").setAttribute("fill","transparent")
    for (var i =0; i<data.tscontromorte.success;i++) {
        document.getElementById("tscontromortes"+i).setAttribute("fill", "black")
    }
    for (var i =0; i<data.tscontromorte.falliment;i++) {
        document.getElementById("tscontromortef"+i).setAttribute("fill", "black")
    }

    document.getElementById("saggezzapercezionepassiva").innerHTML=data.saggezzapercezionepassiva
    document.getElementById("tratticaratteriali").innerHTML=data.tratticaratteriali
    document.getElementById("ideali").innerHTML=data.ideali
    document.getElementById("legami").innerHTML=data.legami
    document.getElementById("difetti").innerHTML=data.difetti
    
    for (var ele in data.attacchieincantesimi) {
        var tr = document.createElement("tr")
        var tdn = document.createElement("td")
        var tdb = document.createElement("td")
        var tdd = document.createElement("td")
        var sn = document.createElement("span")
        sn.innerHTML=ele.nome
        tdn.appendChild(sn)

        var sb = document.createElement("span")
        sb.innerHTML=ele.bonusatt
        sb.style.fontSize="24px"
        sb.style.justifyContent="center"
        sb.style.display="flex"
        tdb.appendChild(sb)

        var sd = document.createElement("span")
        sd.innerHTML=ele.dannitipo
        sd.style.fontSize="24px"
        sd.style.justifyContent="center"
        sd.style.display="flex"
        tdd.appendChild(sd)

        tr.appendChild(tdn)
        tr.appendChild(tdb)
        tr.appendChild(tdd)

        document.getElementById("attacchieincantesimi").appendChild(tr)
    }

    for (var i in data.privilegietratti) {
        var ele = data.privilegietratti[i]
        // var tr = document.createElement("tr")
        // var td = document.createElement("td")
        var p = document.createElement("p")
        p.innerHTML=ele
        // td.appendChild(p)
        // tr.appendChild(td)
        document.getElementById("privilegietratti").appendChild(p)
    }
    for (var i in data.altrecompetenzeelinguaggi) {
        var ele = data.altrecompetenzeelinguaggi[i]
        //var tr = document.createElement("tr")
        //var td = document.createElement("td")
        var span = document.createElement("p")
        span.innerHTML=ele
        //td.appendChild(span)
        //tr.appendChild(td)
        document.getElementById("altrecompetenzeelinguaggi").appendChild(span)
    }
    for (var i in data.equipaggiamento) {
        var ele = data.equipaggiamento[i]
        var tr = document.createElement("tr")
        
        var tdq = document.createElement("td")
        tdq.style.width="100%"
        var spanq = document.createElement("span")
        spanq.innerHTML=ele.quantita+"x"
        spanq.style.fontSize="24px"
        spanq.style.width="100%"
        spanq.style.float="right"
        spanq.style.textAlign="right"
        // spanq.style.justifyContent="center"
        // spanq.style.display="flex"
        spanq.style.textWrap="nowrap"
        // spanq.style.overflowX="auto"
        tdq.appendChild(spanq)

        var tdn = document.createElement("td")
        tdn.style.width="100%"
        var spann = document.createElement("span")
        spann.innerHTML=firstCapital(ele.nome)
        spann.style.fontSize="24px"
        spann.style.width="100%"
        spann.style.float="left"
        spann.classList.add("equipscroll")
        // spann.style.justifyContent="center"
        // spann.style.display="flex"
        spann.style.textWrap="nowrap"
        // spann.style.overflowX="auto"
        tdn.appendChild(spann)
        
        tr.appendChild(tdq)
        tr.appendChild(tdn)
        document.getElementById("equipaggiamento").appendChild(tr)
    }
    document.getElementById("mr").innerHTML=data.monete.mr
    document.getElementById("ma").innerHTML=data.monete.ma
    document.getElementById("me").innerHTML=data.monete.me
    document.getElementById("mo").innerHTML=data.monete.mo
    document.getElementById("mp").innerHTML=data.monete.mp
}
