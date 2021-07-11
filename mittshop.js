let youtubePopUp;
let donsPopUp;
let arrayYT = [
    {
        "zone" : "yt-mirella",
        "lien" : "https://www.youtube.com/user/MirellaPageOfficiel",
        "msgbox" : "yt1",
        "text" : "de Mirella"
    },{
        "zone" : "yt-sebastienGeoffrey",
        "lien" : "https://www.youtube.com/user/LAOHEAVENMUSIC",
        "msgbox" : "yt2",
        "text" : "de Sebastien Geffroy"
    },{
        "zone" : "yt-alexiaRabe",
        "lien" : "https://www.youtube.com/user/alexiarabechannel",
        "msgbox" : "yt3",
        "text" : "d'Alexia Rabé"
    },{
        "zone" : "yt-halo",
        "lien" : "https://www.youtube.com/channel/UCX47pe2Lprb0zFOFp1siDYw",
        "msgbox" : "yt4",
        "text" : "d'Halo Music"
    },{
        "zone" : "yt-jeremyBesnard",
        "lien" : "https://www.youtube.com/channel/UC01Lbrb3W2p2YFns73D8JQw",
        "msgbox" : "yt5",
        "text" : "de Jérèmy Besnard"
    },{
        "zone" : "yt-generationTemoin",
        "lien" : "https://www.youtube.com/channel/UCzMauwnWnPHpmiHSa5BobiQ",
        "msgbox" : "yt6",
        "text" : "de Génération Témoin"
    },{
        "zone" : "yt-samuelOlivier",
        "lien" : "https://www.youtube.com/channel/UCD1abbs5BwD4fibdwGo4JRA",
        "msgbox" : "yt7",
        "text" : "de Samuel Olivier"
    },{
        "zone" : "yt-elleLimbear",
        "lien" : "https://www.youtube.com/channel/UCW0lNu0ijva2yxnGGLT9QXg",
        "msgbox" : "yt8",
        "text" : "d'Elle Limebear"
    },{
        "zone" : "yt-kabe",
        "lien" : "https://www.youtube.com/user/KaBeOGC",
        "msgbox" : "yt9",
        "text" : "de Kabe"
    } 
];


arrayYT.forEach(artiste => {
    let ytPopUp;
    
    WA.onEnterZone(artiste.zone, () => {
        ytPopUp = WA.openPopup(artiste.msgbox, `Voir la chaine Youtube ${artiste.text}`, [{
            label: "Voir",
            className: "primary",
            callback: (popup) => {
                WA.openTab(artiste.lien);
                popup.close();
            }
        }]);
    });
    WA.onLeaveZone(artiste.zone, () => {
        ytPopUp.close();
    });
});


WA.onEnterZone('zone-1', () => {
    donsPopUp = WA.openPopup("msg1", "Dieu nous a en effet mis à cœur de laisser l’entrée libre, et c'est grâce aux dons que chaque année le festival peut se dérouler.", [{
        label: "Faire un don",
        className: "primary",
        callback: (popup) => {
            WA.openTab("https://mitthim.fr/dons/");
            popup.close();
        }
    }]);
});
WA.onLeaveZone('zone-1', () => {
    donsPopUp.close();
});


WA.onEnterZone('zone-2', () => {
    donsPopUp = WA.openPopup("msg2", "Dieu nous a en effet mis à cœur de laisser l’entrée libre, et c'est grâce aux dons que chaque année le festival peut se dérouler.", [{
        label: "Faire un don",
        className: "primary",
        callback: (popup) => {
            WA.openTab("https://mitthim.fr/dons/");
            popup.close();
        }
    }]);
});
WA.onLeaveZone('zone-2', () => {
    donsPopUp.close();
});
