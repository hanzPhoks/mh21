let donsPopUp;

WA.onEnterZone('zone-1', () => {
    donsPopUp = WA.openPopup("msg1", "our vous offrir des concerts de musique chrétienne, l’entrée du festival est gratuite. C’est grâce à vous que Mitt’Him est possible : même modeste, votre don nous encourage à continuer 😊", [{
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
    donsPopUp = WA.openPopup("msg2", "our vous offrir des concerts de musique chrétienne, l’entrée du festival est gratuite. C’est grâce à vous que Mitt’Him est possible : même modeste, votre don nous encourage à continuer 😊", [{
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
