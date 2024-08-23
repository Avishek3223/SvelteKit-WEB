<script>
    let title = 'Hello ';
    function handleClick(){
        title += 'World!';
    }
</script>

<div>
  <h1>{title}</h1>
  <p>
    Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
  </p>
  <button on:click={handleClick}>Click Me</button>
  <input type="text" bind:value={title}>
</div>

<style>
  body {
    font-family: Arial, sans-serif;
    background-color: #f9f9f9;
    color: #333;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
  }

  h1 {
    color: #ff3e00;
    font-size: 48px;
    margin-bottom: 20px;
  }

  p {
    font-size: 18px;
  }

  a {
    color: #ff3e00;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
</style>
