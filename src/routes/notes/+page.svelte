<script lang="ts">
  let note: string = ""; // The current note content
  let editing: boolean = false; // Toggle between view and edit mode
  let savedNote: string = ""; // The saved note content
  let notes: string[] = []; // Array to store all notes
  let currentIndex: number | null = null; // Index of the note currently being edited

  function saveNote() {
    if (currentIndex === null) {
      // Add new note
      notes = [...notes, note];
    } else {
      // Update existing note
      notes[currentIndex] = note;
    }
    resetForm();
  }

  function editNote(index: number) {
    currentIndex = index;
    note = notes[index];
    editing = true;
  }

  function deleteNote(index: number) {
    notes = notes.filter((_, i) => i !== index);
  }

  function cancelEdit() {
    resetForm();
  }

  function resetForm() {
    note = "";
    editing = false;
    currentIndex = null;
  }

  // Determine the button text based on the editing state
  $: buttonText = currentIndex === null ? "Save Note" : "Update Note";
</script>

<div class="max-w-lg mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
  <h1 class="text-3xl font-semibold mb-6 text-center">My Notes</h1>

  <!-- Display list of notes -->
  {#if notes.length}
    <div class="mb-4">
      {#each notes as note, index}
        <div class="mb-2 p-4 bg-gray-100 rounded-md border border-gray-300">
          <p class="text-lg text-gray-800 whitespace-pre-line">{note}</p>
          <div class="flex justify-end space-x-2 mt-2">
            <button 
              on:click={() => editNote(index)}
              class="bg-blue-500 text-white py-1 px-3 rounded-md hover:bg-blue-600 transition duration-300"
            >
              Edit
            </button>
            <button 
              on:click={() => deleteNote(index)}
              class="bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600 transition duration-300"
            >
              Delete
            </button>
          </div>
        </div>
      {/each}
    </div>
  {:else}
    <p class="text-center text-gray-600">No notes available. Please add a new note.</p>
  {/if}

  <!-- Note form for creating or editing notes -->
  <div>
    <textarea
      class="w-full h-40 p-3 border border-gray-300 rounded-md mb-4 focus:ring-2 focus:ring-blue-500 focus:outline-none"
      placeholder="Write your note here..."
      bind:value={note}
    ></textarea>

    <div class="flex justify-end space-x-4">
      <button 
        on:click={saveNote} 
        class="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-300"
      >
        {buttonText}
      </button>
      
      {#if editing}
        <button 
          on:click={cancelEdit} 
          class="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition duration-300"
        >
          Cancel
        </button>
      {/if}
    </div>
  </div>
</div>
