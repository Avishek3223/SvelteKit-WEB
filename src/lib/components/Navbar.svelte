<!-- src/lib/components/Navbar.svelte -->
<script>
    export let title = 'My Website';
</script>

<nav>
    <div class="container">
        <a href="/" class="logo">{title}</a>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
        </ul>
    </div>
</nav>

<style>
    nav {
        background-color: #e8f5ff;
        color: white;
        padding: 1rem;
    }

    .container {
        font-family: 'Source Code Pro', sans-serif;
        font-weight: 700;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .logo {
        font-size: 2rem;
        color: rgb(0, 0, 0);
        text-decoration: none;
    }

    ul {
        list-style: none;
        display: flex;
        gap: 1rem;
    }

    ul li a {
        color: rgb(0, 0, 0);
        text-decoration: none;
        font-size: 1rem;
    }

    ul li a:hover {
        text-decoration: underline;
    }
</style>
