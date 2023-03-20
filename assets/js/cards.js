// base code for the cards

function generateCard(data) {

var cardBase = `<div class="card text-bg-dark mb-3" style="max-width: 18rem;">
  <div class="card-header">${data.header}</div>
  <div class="card-body">
    <h5 class="card-title">${data.title}</h5>
    <p class="card-text">${data.content}</p>
  </div>
</div>
`;

  return cardBase;
}