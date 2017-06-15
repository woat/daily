const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');
const deleteButton = document.getElementById('delete');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('is-active');
});

deleteButton.addEventListener('click', () => {
  swal({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    type: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, delete it!',
    cancelButtonText: 'No, cancel!',
    confirmButtonClass: 'button is-success',
    cancelButtonClass: 'button is-danger',
    buttonsStyling: false,
  })
    .then(() => {
      swal('Deleted!', 'Your file has been deleted.', 'success')
      .then(() => {
        fetch(`${deleteButton.dataset.id}`, { method: 'DELETE' });
        window.location.href = '/';
      });
    });
});

console.log('js successfully loaded');
