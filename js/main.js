(function() {

  const url = "https://api.punkapi.com/v2/beers";
  window.onload = function () {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        const items = new ItemsView(data);
        items.render();
      });

    const orderButton = document.getElementById('order-button');
    orderButton.onclick = function(event) {
      event.stopPropagation();
      if(!orderButton.classList.contains('active')) {
        orderButton.classList.add('active')
      } else {
        orderButton.classList.remove('active');
      }
    }

    const closeButton = document.getElementById('close');
    const $modalEl = document.getElementById('modal');
    closeButton.onclick = function() {
      $modalEl.style.display = 'none';
      if(orderButton.classList.contains('active')) {
        orderButton.classList.remove('active');
      }
    }
  }
}());
