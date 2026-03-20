// Zenith Web Interaction Logic

document.addEventListener('DOMContentLoaded', () => {
    const triggerBar = document.getElementById('zenith-trigger-bar');
    const radialDock = document.getElementById('radial-dock');

    if (triggerBar && radialDock) {
        triggerBar.addEventListener('mouseenter', () => {
            radialDock.classList.remove('hidden');
        });

        // Simple way to hide it for now, can be improved with 
        // a larger bounding box or timeout
        window.addEventListener('mousemove', (e) => {
            const rect = triggerBar.getBoundingClientRect();
            const dockRect = radialDock.getBoundingClientRect();
            
            // If mouse is too far from both trigger and dock, hide it
            const buffer = 50;
            const isNearTrigger = e.clientY < rect.bottom + buffer;
            const isNearDock = e.clientY < dockRect.bottom + buffer && 
                               e.clientX > dockRect.left - buffer && 
                               e.clientX < dockRect.right + buffer;

            if (!isNearTrigger && !isNearDock) {
                radialDock.classList.add('hidden');
            }
        });
    }

    console.log('Zenith Web initialized.');
});
