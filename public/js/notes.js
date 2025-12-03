function deleteNote(id) {
  const sikker = confirm("Er du sikker på, at du vil slette denne note?");
  if (!sikker) return;

  fetch(`/api/notes/${id}`, {
    method: "DELETE",
  });

  alert("Noten er blevet slettet.");

  window.location.reload();
}
async function createNote(event) {
  event.preventDefault();

  const title = document.getElementById("title").value;
  const content = document.getElementById("content").value;

  const request = await fetch("/api/notes", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, content }),
  });
  if (request.ok) {
    alert("Noten er blevet oprettet.");
    window.location.href = "/notes/index";
  } else {
    alert("Der opstod en fejl under oprettelsen af noten.");
  }
}
async function updateNote(event, button) {
  event.preventDefault();

  const id = button.getAttribute("data-id");
  const title = document.getElementById("title").value;
  const content = document.getElementById("content").value;

  const request = await fetch(`/api/notes/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, content }),
  });
  if (request.ok) {
    alert("Noten er blevet opdateret.");
    window.location.href = "/notes/index";
  } else {
    alert("Der opstod en fejl under opdateringen af noten.");
  }
}
