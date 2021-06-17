let helloWorldPopup;

// Open the popup when we enter a given zone
helloWorldPopup = WA.onEnterZone('tuto-1', () => {
    WA.disablePlayerControls();
    WA.openPopup("msg1", "Vous pouvez aussi dialoguer directement avec les autres jusqu'à 4.", [{
        label: "Fermer",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
            WA.restorePlayerControls();

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