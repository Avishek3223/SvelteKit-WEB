<script>
  import Navbar from "$lib/components/Navbar.svelte";
  let title = "Hello ";
  function handleClick() {
    title += "World!";
  }
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&display=swap"
    rel="stylesheet"
  />
</svelte:head>


<div>
  <Navbar title="SvelteKit" />
  <h1>{title}</h1>
  <p>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod aliquid enim,
    facere in sequi hic quidem deleniti? Laudantium a perferendis molestias
    praesentium non officiis optio fuga laboriosam explicabo aliquam veritatis
    eveniet repellendus nostrum minus quae consequuntur voluptatibus, atque qui
    soluta nobis modi nemo provident! Blanditiis minus laboriosam incidunt et
    cupiditate?
  </p>
  <button on:click={handleClick}>Click Me</button>
  <input type="text" bind:value={title} />
</div>

<style>
  body {
    font-family: 'Source Code Pro', Arial, sans-serif;
    background-color: #252525;
    color: #333;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    padding: 0;
  }

  h1 {
    color: #ff3e00;
    font-size: 48px;
    margin-bottom: 20px;
    font-family: 'Source Code Pro', sans-serif;
  }

  p {
    font-size: 18px;
    font-family: 'Source Code Pro', sans-serif;
  }

  a {
    color: #ff3e00;
    text-decoration: none;
    font-family: 'Source Code Pro', sans-serif;
  }

  a:hover {
    text-decoration: underline;
  }
</style>
