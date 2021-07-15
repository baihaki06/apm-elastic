const {
  addBuku, getSemuaBuku, getBukuId, editBukuById, hapusBukuById,
} = require('./handler');  
  const routes = [
    {
      method: 'POST',
      path: '/buku',
      handler: addBuku,
      options: {
        cors: {
          origin: ['*'],
        },
      },
    },
    {
      method: 'GET',
      path: '/buku',
      handler: getSemuaBuku,
    },
    {
      method: 'GET',
      path: '/buku/{bookId}',
      handler: getBukuId,
  
    },
    {
      method: 'PUT',
      path: '/buku/{bookId}',
      handler: editBukuById,
    },
    {
      method: 'DELETE',
      path: '/buku/{bookId}',
      handler: hapusBukuById,
    },
  
  ];
  
  module.exports = routes;
  