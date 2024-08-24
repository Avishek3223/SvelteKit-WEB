<!-- src/lib/components/Navbar.svelte -->
<script>
    export let title = 'My Website';
</script>

<nav class="border-b-2 border-black">
    <div class="flex justify-between items-center px-10 font-bold">
        <a href="/" class="logo">{title}</a>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/notes">Notes</a></li>
            <li><a href="/contact">Contact</a></li>
        </ul>
    </div>
</nav>

<style>
    nav {
        background-color: #f2f9ff;
        color: white;
        padding: 1rem;
    }

    .logo {
        font-size: 2rem;
        color: rgb(0, 0, 0);
        text-decoration: none;
    }

    ul {
        list-style: none;
        display: flex;
        gap:3rem;
    }

    ul li a {
        color: rgb(0, 0, 0);
        text-decoration: none;
        font-size: 1.3rem;
    }

    ul li a:hover {
        text-decoration: underline;
    }
</style>
