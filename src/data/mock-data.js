export const mockData = {
  categories: [
    {
      id: 1,
      name: "Điên thoại",
      parent_id: null
    },
    {
      id: 2,
      name: "Samsung",
      parent_id: 1
    },
    {
      id: 3,
      name: "Máy tính"
    },
  ],
  products: [
    {
      id: 1,
      name:"Samsung Galaxy S24 Ultra",
      slug: "samsung-galaxy-s24",
      category_id: 2,
      variants: [
        {
          id:1,
          name: "12GB 1TB",
          colors: [
            {
              id: 4423424,
              name: 'Xám',
              img_thumbnail: "https://cdn2.cellphones.com.vn/358x/media/catalog/product/d/i/dien-thoai-samsung-galaxy-s25-ultra_1__6.png",
              stock: 100
            },
            {
              id: 4423422,
              name: 'Đen',
              img_thumbnail: "https://cdn2.cellphones.com.vn/358x/media/catalog/product/d/i/dien-thoai-samsung-galaxy-s25-ultra_3__6.png",
              stock: 100
            },
          ],
          price: 44490000,
          
        },
        {
          id:2,
          name: "12GB 512GB",
          colors: [
            {
              id: 25252,
              name: 'Xám',
              img_thumbnail: "https://cdn2.cellphones.com.vn/358x/media/catalog/product/d/i/dien-thoai-samsung-galaxy-s25-ultra_1__6.png",
              stock: 100
            },
            {
              id:144134,
              name: 'Đen',
              img_thumbnail: "https://cdn2.cellphones.com.vn/358x/media/catalog/product/d/i/dien-thoai-samsung-galaxy-s25-ultra_3__6.png",
              stock: 100
            },
          ],
          price: 25900000,
          
        }
      ]

    }
  ]
}

