class ItemsView {
  constructor(data) {
    this.data = data;
    this.rootEl = document.getElementById("root");
    this.modal = document.getElementById("modal");
    this.ibuValueEl = document.getElementById("ibu-value");
    this.abvTextEl = document.getElementById("abv-text");
    this.imgEl = document.getElementById("item-image");
    this.descriptionEl = document.getElementById("description-text");
    this.nameEl = document.getElementById('item-name');
  }

  renderNoData() {
    const $emptyElem = document.createElement("div");
    $emptyElem.className = "no-data";
    $emptyElem.innerHTML = " No data!"

    this.rootEl.append($emptyElem);
  }

  onItemClicked(id) {
    this.modal.style.display = "block";
    const { ibu, description, image_url, abv, name } = this.data.find(el => el.id === id);
    this.imgEl.attributes
    this.ibuValueEl.innerText = ibu;
    this.abvTextEl.innerText = `${abv}%`;
    this.imgEl.src = image_url;
    this.descriptionEl.innerText = description;
    this.nameEl.innerText = name;
  }

  renderItems(data) {
    const items = data.map((item) => {
      const { image_url, abv, ibu, name, id } = item;
      // Item Container
      const $el = document.createElement("div");
      $el.className = "item";
      $el.setAttribute('data-id', id);
      $el.onclick = () => this.onItemClicked(id);
      //Item Image
      const $img = document.createElement('img');
      $img.src= image_url;
      $img.className= "item-img";
      $el.append($img);
      //Item Title
      const $title = document.createElement('p');
      $title.className = "item-title";
      $title.innerHTML = `${name}`;
      $el.append($title);
      //Item ibu
      const $IBUContainer = document.createElement('div');
      $IBUContainer.className = "IBU-Container"
      const $ibuEl = document.createElement('span');
      $ibuEl.className = "item-ibu";
      $ibuEl.innerHTML = `IBU: ${ibu}`;
      $IBUContainer.append($ibuEl);
      $el.append($IBUContainer);
      //Item abv
      const $abvContainer = document.createElement('div');
      $abvContainer.className = "abv-container";
      const $abvEl = document.createElement('span');
      $abvEl.className = "item-abv";
      $abvEl.innerHTML = `${abv}%`;
      $abvContainer.append($abvEl);
      $el.append($abvContainer);
      return $el;
    })

    this.rootEl.append(...items);
  }

  render() {
    const { data } = this;
    if(!data.length) {
      return this.renderNoData();
    }
    return this.renderItems(data);
  }

}
