(function() {
    window.addEventListener('DOMContentLoaded', () => {
        // Create a container bar to hold both buttons side-by-side
        const navContainer = document.createElement('div');

        // Style the container to float cleanly over the webpage content
        Object.assign(navContainer.style, {
            position: 'fixed',
            bottom: '20px',
            left: '20px',
            zIndex: '999999',
            display: 'flex',
            gap: '6px',
            backgroundColor: '#222222',
            padding: '6px',
            borderRadius: '30px',
            boxShadow: '0 4px 16px rgba(0,0,0,0.25)',
            fontFamily: 'sans-serif'
        });

        // Helper function to quickly create styled buttons
        function createNavButton(text, clickAction) {
            const btn = document.createElement('button');
            btn.innerText = text;

            Object.assign(btn.style, {
                padding: '8px 14px',
                backgroundColor: 'transparent',
                color: '#ffffff',
                border: 'none',
                borderRadius: '20px',
                cursor: 'pointer',
                fontSize: '13px',
                fontWeight: 'bold',
                transition: 'background-color 0.2s ease'
            });

            btn.addEventListener('mouseenter', () => {
                btn.style.backgroundColor = '#444444';
            });
            btn.addEventListener('mouseleave', () => {
                btn.style.backgroundColor = 'transparent';
            });

            btn.addEventListener('click', clickAction);
            return btn;
        }

        // Create the individual Back and Forward buttons
        const backBtn = createNavButton('←', () => window.history.back());
        const forwardBtn = createNavButton('→', () => window.history.forward());

        // Assemble the navigation bar
        navContainer.appendChild(backBtn);
        navContainer.appendChild(forwardBtn);
        document.body.appendChild(navContainer);
    });

    window.addEventListener('keydown', (e) => {
        // Alt + Left Arrow goes Back
        if (e.altKey && e.key === 'ArrowLeft') {
            window.history.back();
        }
        // Alt + Right Arrow goes Forward
        if (e.altKey && e.key === 'ArrowRight') {
            window.history.forward();
        }
    });
})();