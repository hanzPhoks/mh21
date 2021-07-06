let helloWorldPopup;

// Open the popup when we enter a given zone
helloWorldPopup = WA.onEnterZone('tuto-1', () => {
    //WA.disablePlayerControls();
    WA.openPopup("msg1", "Vous pouvez aussi dialoguer directement avec les autres jusqu'à 4.", [{
        label: "Fermer",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
            //WA.restorePlayerControls();

            WA.openPopup("msg1", "Pour discuter à plus que 4, vous trouvrerez des tables et des tentes réparties sur la map.", [{
                label: "Fermer",
                className: "primary",
                callback: (popup) => {
                    // Close the popup when the "Close" button is pressed.
                    popup.close();
                }
            }]);
        }
    }]);
});

// Close the popup when we leave the zone.
WA.onLeaveZone('tuto-1', () => {
    helloWorldPopup.close();
});

// Open the popup when we enter a given zone
donsPopUp = WA.onEnterZone('zone-dons', () => {
    WA.openPopup("msg2", "Dieu nous a en effet mis à cœur de laisser l’entrée libre, afin que personne ne soit freiné pour des raisons financières. C’est donc grâce aux dons que chaque année le festival peut perdurer. Cette année, devenez vous aussi un partenaire du Festival en faisant un don à Event4Him.", [{
        label: "Faire un don",
        className: "primary",
        callback: (popup) => {
            WA.openTab("https://mitthim.fr/dons/");
            // Close the popup when the "Close" button is pressed.
            popup.close();

        }
    }]);
});
// Close the popup when we leave the zone.
WA.onLeaveZone('zone-dons', () => {
    donsPopUp.close();
});


donsChat = WA.onEnterZone('zone-2', () => {
    WA.sendChatMessage("https://mitthim.fr/dons/", "Mitt'him");
    WA.openTab("https://mitthim.fr/dons/");
});

donsChat = WA.onLeaveZone('zone-2', () => {
    WA.sendChatMessage("Merci !", "Mitt'him");
});