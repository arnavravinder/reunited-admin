firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

document.addEventListener('DOMContentLoaded', () => {
    auth.onAuthStateChanged(user => {
        const isLoginPage = window.location.pathname.endsWith('login.html') || window.location.pathname.endsWith('/');
    
        if (user) {
            if (isLoginPage) {
                window.location.replace('index.html');
            } else {
                document.body.style.display = 'block'; 
            }
        } else {
            if (!isLoginPage) {
                window.location.replace('login.html');
            } else {
                document.body.style.display = 'flex';
            }
        }
    });

    const hamburger = document.getElementById('hamburger-menu');
    const navMenu = document.getElementById('nav-menu');
    const logoutLink = document.getElementById('logout-link');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    if(logoutLink) {
        logoutLink.addEventListener('click', (e) => {
            e.preventDefault();
            auth.signOut().catch(error => console.error('Sign out error', error));
        });
    }
});