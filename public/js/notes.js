function deleteNote(id) {
  const sikker = confirm("Er du sikker på, at du vil slette denne note?");
  if (!sikker) return;

  fetch(`/api/notes/${id}`, {
    method: "DELETE",
  });

  alert("Noten er blevet slettet.");

  window.location.reload();
}
