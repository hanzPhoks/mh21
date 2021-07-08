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
