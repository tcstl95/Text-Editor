const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event

// Added event handler for beforeinstallprompt
window.addEventListener('beforeinstallprompt', (event) => {
    
    event.preventDefault();

    window.deferredPrompt = event;
    
    butInstall.classList.toggle('hidden', false);
});


butInstall.classList.toggle('hidden', false);



// TODO: Implement a click event handler on the `butInstall` element
// Implemented click event handler
butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
        return;
    }
    promptEvent.prompt();
   window.deferredPrompt = null;
    butInstall.classList.toggle('hidden', true);
});
 

// TODO: Add an handler for the `appinstalled` event
// Added a handler for appinstalled
window.addEventListener('appinstalled', (event) => {
    window.deferredPrompt = null;
});

