let header = document.getElementById('header');

const headerHtml = `
    <h1 class="header-title">PERSONAL PROYECTS</h1>
    <nav class="header-nav">
        <ul class="header-nav-ul">
            <li class="header-nav-ul-li">
                <a href="/index.html">Proyects</a>
                <a href="/html/aboutMe.html">About me</a>
                <a href="/html/contact.html">Contact</a>
                <a href="/html/blog.html">Blog</a>
            </li>
        </ul>
    </nav>
`;

header.innerHTML = headerHtml;