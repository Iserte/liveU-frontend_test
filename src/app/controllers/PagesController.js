class PagesController {
  async index(req, res) {
    const { page } = req.query;

    res.render('pages/index', { page });
  }

  async update(req, res) {
    let { page } = req.body;
    const { items } = req.body;

    if (!items) {
      return res.json();
    }

    if (items.length <= 0) {
      return res.json({ page: 1 });
    }

    if (page * 3 > items.length) {
      page -= 1;
    }

    page = parseInt(page, 0);
    if (page < 0) page = 0;

    const pStart = page * 3;
    let pEnd = pStart + 3;

    // eslint-disable-next-line no-unused-expressions
    pEnd > items.length ? (pEnd = items.length) : pEnd;

    const splicedItems = items.slice(pStart, pEnd);

    return res.json({ page, allItems: items, currentItems: splicedItems });
  }
}

export default new PagesController();
