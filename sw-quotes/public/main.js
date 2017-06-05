const update = document.getElementById('update');
const del = document.getElementById('delete');

update.addEventListener('click', () => {
  // fetch takes two params
  // the first being the path (/quotes)
  fetch('quotes', {
    // second being options
    method: 'put',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: 'vader',
      quote: 'i find your lack of faith disturbing',
    }),
  })
    .then((res) => {
      if (res.ok) return res.json();
    })
    .then((data) => {
      console.log(data);
      window.location.reload(true);
    });
});

del.addEventListener('click', () => {
  fetch('quotes', {
    method: 'delete',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: 'Darth Vader',
    }),
  })
  .then((res) => {
    if (res.ok) return res.json();
  })
    .then((data) => {
      console.log(data);
      window.location.reload();
    });
});
