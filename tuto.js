let helloWorldPopup;
let donsPopUp;

WA.onEnterZone('tuto-1', () => {
    helloWorldPopup = WA.openPopup("msg1", "Vous pouvez aussi dialoguer directement avec les autres jusqu'à 4.", [{
        label: "Fermer",
        className: "primary",
        callback: (popup) => {
            popup.close();
            helloWorldPopup = WA.openPopup("msg1", "Pour discuter à plus que 4, vous trouvrerez des tables et des tentes réparties sur la map.", [{
                label: "Fermer",
                className: "primary",
                callback: (popup) => {
                    popup.close();
                }
            }]);
        }
    }]);
});

WA.onLeaveZone('tuto-1', () => {
    helloWorldPopup.close();
});


WA.onEnterZone('zone-dons', () => {
    donsPopUp = WA.openPopup("msg2", "Dieu nous a en effet mis à cœur de laisser l’entrée libre, et c'est grâce aux dons que chaque année le festival peut se dérouler.", [{
        label: "Faire un don",
        className: "primary",
        callback: (popup) => {
            WA.openTab("https://mitthim.fr/dons/");
            popup.close();
        }
    }]);
});

WA.onLeaveZone('zone-dons', () => {
    donsPopUp.close();
});
