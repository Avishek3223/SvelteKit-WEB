<script>
  import image from "$lib/assets/notes.svg";
  let title = "Hello world!";
</script>

<div class="flex w-full justify-between items-center ">
  <div class="w-[50vw]">
    <h1>{title}</h1>
    <p>
      Welcome to my first Svelte website! This project is an exciting journey
      into the world of SvelteKit, where I'm exploring the power of modern web
      development. Here, you'll find a simple and clean interface, built with
      performance and responsiveness in mind.
    </p>
    <p>
      Svelte is a unique framework that compiles your code into efficient,
      imperative code that directly manipulates the DOM. With SvelteKit, I'm
      able to build a full-featured app with ease and flexibility. Stay tuned as
      I continue to add new features and content!
    </p>
  </div>
  <img class="w-[40%]" src={image} alt="Illustration" />
</div>

<style>
  h1 {
    font-size: 8rem;
    margin-bottom: 20px;
    font-family: "Bebas Neue", sans-serif;
    background: linear-gradient(to right, rgb(7, 46, 58), rgb(24, 24, 24));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }

  p {
    font-size: 18px;
    margin-bottom: 20px;
  }

  input {
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    flex-grow: 1;
    margin-left: 10px;
  }

  .button_input {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
  }

  button {
    background-color: #ff3e00;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
  }

  button:hover {
    background-color: #e53900;
  }
</style>
