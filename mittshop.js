let youtubePopUp;
let donsPopUp;

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


WA.onEnterZone('yt-mirella', () => {
    WA.openTab("https://www.youtube.com/user/MirellaPageOfficiel");
});
WA.onEnterZone('yt-sebastienGeoffrey', () => {
    WA.openTab("https://www.youtube.com/user/LAOHEAVENMUSIC");
});
WA.onEnterZone('yt-alexiaRabe', () => {
    WA.openTab("https://www.youtube.com/user/alexiarabechannel");
});
WA.onEnterZone('yt-halo', () => {
    WA.openTab("https://www.youtube.com/channel/UCX47pe2Lprb0zFOFp1siDYw");
});
WA.onEnterZone('yt-jeremyBesnard', () => {
    WA.openTab("https://www.youtube.com/channel/UC01Lbrb3W2p2YFns73D8JQw");
});
WA.onEnterZone('yt-generationTemoin', () => {
    WA.openTab("https://www.youtube.com/channel/UCzMauwnWnPHpmiHSa5BobiQ");
});
WA.onEnterZone('yt-samuelOlivier', () => {
    WA.openTab("https://www.youtube.com/channel/UCD1abbs5BwD4fibdwGo4JRA");
});
WA.onEnterZone('yt-elleLimbear', () => {
    WA.openTab("https://www.youtube.com/channel/UCW0lNu0ijva2yxnGGLT9QXg");
});
WA.onEnterZone('yt-kabe', () => {
    WA.openTab("https://www.youtube.com/user/KaBeOGC");
});







