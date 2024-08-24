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
  <link
    href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<header>
  <Navbar title="SvelteKit" />
</header>

<main
  class="flex items-center justify-between w-full px-10 text-justify font-bold max-md:w-[90vw]"
>
    <slot></slot>
</main>
