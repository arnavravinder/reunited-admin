firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

auth.onAuthStateChanged(user => {
    const isLoginPage = window.location.pathname.endsWith('login.html') || window.location.pathname.endsWith('/');
    if (!user && !isLoginPage) {
        window.location.replace('login.html');
    } else if (user && isLoginPage) {
        window.location.replace('index.html');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('header nav');
    if (nav) {
        const logoutLink = document.createElement('a');
        logoutLink.href = '#';
        logoutLink.textContent = 'Logout';
        logoutLink.style.cursor = 'pointer';
        logoutLink.onclick = (e) => {
            e.preventDefault();
            auth.signOut();
        };
        nav.appendChild(logoutLink);
    }
});