<script>
  import Navbar from "$lib/components/Navbar.svelte";
  import "../styles/global.css";
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link
    href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&display=swap"
    rel="stylesheet"
  />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link
    href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<header>
  <Navbar title="SvelteKit" />
</header>

<main>
  <slot></slot>
</main>

<footer>
  <p>Copyright 2024 Avishek Mishra</p>
</footer>

<style>
  main {
    display: flex;
    flex-direction: column;
    width: 50vw;
    text-align: justify;
    font-weight: bold;
    padding: 20px;
  }
</style>
