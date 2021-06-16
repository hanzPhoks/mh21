let helloWorldPopup;

// Open the popup when we enter a given zone
helloWorldPopup = WA.onEnterZone('tuto-1', () => {
    WA.openPopup("msg-1", 'Coucou !', [{
        label: "Fermer",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    }]);
});

// Close the popup when we leave the zone.
WA.onLeaveZone('tuto-1', () => {
    helloWorldPopup.close();
});