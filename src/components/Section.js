export default class Section {
  constructor(renderer, containerSelector) {
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  clear() {
    this._container.innerHTML = '';
  }

  renderItems(items) {
    this.clear();

    items.forEach(item => {
      this.addItem(item);
    });
  }

  addItem(item, prepend=false) {
    const card = this._renderer(item);

    if (prepend) {
      this._container.prepend(card);
    } else {
      this._container.append(card);
    }
  }
}