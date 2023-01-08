class SearchView {
  _parentElement = document.querySelector('.search');

  getQuery() {
    const query = this._parentElement.querySelector('.search__field').value;
    this._clearInput();

    return query;
  }

  _clearInput() {
    this._parentElement.querySelector('.search__field').value = '';
  }

  addHandlerSearch(handler) {
    this._parentElement.addEventListener('submit', function (e) {
      //El evento se añade al evento submit del contendor padre para no difenciar entre click y enter
      e.preventDefault();

      handler();
    });
  }
}

export default new SearchView();
