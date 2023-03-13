function confirmDelete(delUrl) {
  if (confirm("Are you sure you want to delete this?")) {
    document.location = `api/user/logs?log=${delUrl}`;
  }
}
