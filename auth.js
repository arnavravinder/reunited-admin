firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

auth.onAuthStateChanged(user => {
    const isLoginPage = window.location.pathname.endsWith('login.html') || window.location.pathname === '/';
    
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
            document.body.style.display = 'block';
        }
    }
});

function handleLogout() {
    auth.signOut().catch(error => console.error('Sign out error', error));
}

document.addEventListener('DOMContentLoaded', () => {
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
            handleLogout();
        });
    }
});