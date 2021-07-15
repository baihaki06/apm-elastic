const { nanoid } = require('nanoid');
const books = require('./books');

// berhasil pertama
const addBuku = (req, h) => {
  const {
    name, pageCount, readPage, reading, year, author, summary, publisher,
  } = req.payload;

  if (pageCount < readPage) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal Menambahkan Buku. readPage tidak boleh lebih besar dari pageCount',
    });
    response.code(400);
    return response;
  }
  if (name === undefined) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal Menambahkan Buku. Mohon Isi Nama Buku',
    });
    response.code(400);
    return response;
  }

  const id = nanoid(16);
  const finished = (pageCount === readPage);
  const insertedAt = new Date().toISOString();
  const updatedAt = insertedAt;
  const isibuku = {
    id,
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    finished,
    reading,
    insertedAt,
    updatedAt,
  };

  books.push(isibuku);

  const berhasil = books.filter((buku) => buku.id === id).length > 0;

  if (berhasil) {
    const response = h.response({
      status: 'success',
      message: 'Buku berhasil ditambahkan',
      data: {
        bookId: id,
      },
    });
    response.code(201);

    return response;
  }

  const response = h.response({
    status: 'fail',
    message: 'Buku gagal ditambahkan',
  });
  response.code(500);

  return response;
};

// berhasil kedua
const getSemuaBuku = (req, h) => {
  // eslint-disable-next-line no-unused-vars
  const { name, reading, finished } = req.query;
  // console.log(reading);
  // console.log(name);
  // console.log(finished);
  const response = h.response({
    status: 'success',
    data: {
      books: books.map((book) => ({
        id: book.id,
        name: book.name,
        publisher: book.publisher,
      })),
    },
  });
  response.code(200);
  return response;
};

// berhasil ketiga
const getBukuId = (req, h) => {
  const { bookId } = req.params;
  // console.log(req.params);
  // console.log(bookId);
  // eslint-disable-next-line no-shadow
  const book = books.filter((book) => book.id === bookId)[0];
  // console.log(book);
  // if (book !== undefined) {
  //   return {
  //     status: 'success',
  //     data: {
  //       book,
  //     },
  //   };
  // }
  if (book !== undefined) {
    const response = h.response({
      status: 'success',
      data: {
        book,
      },
    });
    response.code(200);
    return response;
  }

  const response = h.response({
    status: 'fail',
    message: 'Buku tidak ditemukan',
  });
  response.code(404);
  return response;
};

const editBukuById = (req, h) => {
  const { bookId } = req.params;
  const {
    name, year, author, summary, publisher, pageCount, readPage, reading,
  } = req.payload;
  const updatedAt = new Date().toISOString();
  const index = books.findIndex((book) => book.id === bookId);

  if (index !== -1) {
    if (name === undefined) {
      const response = h.response({
        status: 'fail',
        message: 'Gagal memperbarui buku. Mohon isi nama Buku',
      });
      response.code(400);

      return response;
    }

    if (pageCount < readPage) {
      const response = h.response({
        status: 'fail',
        message: 'Gagal memperbarui buku. readPage tidak boleh lebih Besar dari pageCount',
      });
      response.code(400);

      return response;
    }

    const finished = (pageCount === readPage);

    books[index] = {
      ...books[index],
      name,
      year,
      author,
      summary,
      publisher,
      pageCount,
      readPage,
      finished,
      reading,
      updatedAt,
    };

    const response = h.response({
      status: 'success',
      message: 'Buku berhasil diperbarui',
    });
    response.code(200);

    return response;
  }

  const response = h.response({
    status: 'fail',
    message: 'Gagal memperbarui buku. Id tidak ditemukan',
  });
  response.code(404);

  return response;
};

const hapusBukuById = (req, h) => {
  const { bookId } = req.params;

  const index = books.findIndex((note) => note.id === bookId);

  if (index !== -1) {
    books.splice(index, 1);
    const response = h.response({
      status: 'success',
      message: 'Buku berhasil dihapus',
    });
    response.code(200);

    return response;
  }

  const response = h.response({
    status: 'fail',
    message: 'Buku gagal dihapus. Id tidak ditemukan',
  });
  response.code(404);

  return response;
};

module.exports = {
  addBuku, getSemuaBuku, getBukuId, editBukuById, hapusBukuById,
};
