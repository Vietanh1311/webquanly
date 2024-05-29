document.addEventListener('DOMContentLoaded', function() {
    const userLoginButton = document.getElementById('userLoginButton');
    const adminLoginButton = document.getElementById('adminLoginButton');
    
    userLoginButton.addEventListener('click', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        login(username, password);
    });

    adminLoginButton.addEventListener('click', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        adminLogin(username, password);
    });

    function login(username, password) {
        const user = JSON.parse(localStorage.getItem(username));
        if (user && user.password === password) {
            alert('Login successful!');
            window.location.href = 'today-tasks.html';
        } else {
            alert('Invalid username or password.');
        }
    }

    function adminLogin(username, password) {
        const user = JSON.parse(localStorage.getItem(username));
        if (user && user.password === password && user.isAdmin) {
            alert('Admin login successful!');
            window.location.href = 'admin.html';
        } else {
            alert('Invalid admin username or password.');
        }
    }

    // Initialize admin user if not already present
    const adminUser = {
        username: 'admin',
        password: 'admin123',
        isAdmin: true
    };
    if (!localStorage.getItem('admin')) {
        localStorage.setItem('admin', JSON.stringify(adminUser));
    }
});


document.addEventListener('DOMContentLoaded', function() {
    const userLoginButton = document.getElementById('userLoginButton');
    const adminLoginButton = document.getElementById('adminLoginButton');
    
    userLoginButton.addEventListener('click', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        login(username, password);
    });

    adminLoginButton.addEventListener('click', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        adminLogin(username, password);
    });

    function login(username, password) {
        const user = JSON.parse(localStorage.getItem(username));
        if (user && user.password === password) {
            alert('Login successful!');
            window.location.href = 'today-tasks.html';
        } else {
            alert('Invalid username or password.');
        }
    }

    function adminLogin(username, password) {
        const user = JSON.parse(localStorage.getItem(username));
        if (user && user.password === password && user.isAdmin) {
            alert('Admin login successful!');
            window.location.href = 'admin.html';
        } else {
            alert('Invalid admin username or password.');
        }
    }

    // Initialize admin user if not already present
    const adminUser = {
        username: 'admin',
        password: 'admin123',
        isAdmin: true
    };
    if (!localStorage.getItem('admin')) {
        localStorage.setItem('admin', JSON.stringify(adminUser));
    }
});


//
document.addEventListener('DOMContentLoaded', function() {
    const userLoginButton = document.getElementById('userLoginButton');
    const adminLoginButton = document.getElementById('adminLoginButton');
    
    userLoginButton.addEventListener('click', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        login(username, password);
    });

    adminLoginButton.addEventListener('click', function(event) {
        event.preventDefault();
        // Redirect to admin-login.html
        window.location.href = 'admin-login.html';
    });

    function login(username, password) {
        const user = JSON.parse(localStorage.getItem(username));
        if (user && user.password === password) {
            alert('Login successful!');
            window.location.href = 'today-tasks.html';
        } else {
            alert('Invalid username or password.');
        }
    }

    // Initialize admin user if not already present
    const adminUser = {
        username: 'admin',
        password: 'admin123',
        isAdmin: true
    };
    if (!localStorage.getItem('admin')) {
        localStorage.setItem('admin', JSON.stringify(adminUser));
    }
});

