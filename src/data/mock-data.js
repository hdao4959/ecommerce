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
      name: "Samsung Galaxy S24 Ultra",
      slug: "samsung-galaxy-s24",
      category_id: 2,
      variants: [
        {
          id: 1,
          product_id: 1,
          name: "12GB 1TB",
          colors: [
            {
              id: 4423424,
              variant_id: 1,
              name: 'Xám',
              img_thumbnail: "https://cdn2.cellphones.com.vn/358x/media/catalog/product/g/a/galaxy-s24-ultra-xam_1_5.png",
              stock: 100
            },
            {
              id: 4423422,
              variant_id: 1,
              name: 'Đen',
              img_thumbnail: "https://cdn2.cellphones.com.vn/358x/media/catalog/product/g/a/galaxy-s24-ultra-den-1_1_5.png",
              stock: 100
            },
          ],
          description: `Trải nghiệm đỉnh cao trên Samsung S24 Ultra với hiệu năng mạnh mẽ 
          từ vi xử lý tân tiến, kết hợp cùng RAM 12GB cho khả năng đa nhiệm mượt mà. 
          Lưu trữ thoải mái mọi ứng dụng, hình ảnh và video với bộ nhớ trong 256GB.
          Nâng tầm nhiếp ảnh di động với hệ thống camera S24 Ultra 5G tiên tiến, cho ra đời 
          những bức ảnh và video chất lượng chuyên nghiệp. Thiết kế sang trọng, đẳng cấp, 
          khẳng định phong cách thời thượng. Samsung S24 Ultra sở hữu AI thông minh, hiệu 
          năng cực đỉnh cũng đa tính năng cao cấp nhất. Đi kèm với đó là những cải tiến tích 
          cực vượt trội hơn về camera, vi xử lý, và tích hợp AI toàn diện, đây là sản phẩm không 
          thể bỏ qua cho người yêu công nghệ. Cùng xem giá bán và đánh giá chi tiết nhất dòng điện 
          thoại này xem có nên mua không ngay nhé!`,
          price: 44490000,
          product_technical: [
            {
              id: 1,
              variant_id: 1,
              name: "Kích thước màn hình",
              value: '6.8inches',
              type: 'screen'
            },
            {
              id: 3,
              variant_id: 1,
              name: "Công nghệ màn hình",
              value: 'Dynamic AMOLED 2X',
              type: 'screen'
            }
          ]
        },
        {
          id: 2,
          name: "12GB 512GB",
          product_id: 1,
          colors: [
            {
              id: 25252,
              variant_id: 2,
              name: 'Vàng',
              img_thumbnail: "https://cdn2.cellphones.com.vn/358x/media/catalog/product/g/a/galaxy-s24-ultra-vang_1_3.png",
              stock: 100
            },
            {
              id: 144134,
              variant_id: 2,
              name: 'Tím',
              img_thumbnail: "https://cdn2.cellphones.com.vn/358x/media/catalog/product/g/a/galaxy-s24-ultra-tim_1_3.png",
              stock: 100
            },
          ],
          price: 25900000,
          description: `Trải nghiệm đỉnh cao trên Samsung S24 Ultra với hiệu năng mạnh mẽ 
          từ vi xử lý tân tiến, kết hợp cùng RAM 12GB cho khả năng đa nhiệm mượt mà. 
          Lưu trữ thoải mái mọi ứng dụng, hình ảnh và video với bộ nhớ trong 256GB.
          Nâng tầm nhiếp ảnh di động với hệ thống camera S24 Ultra 5G tiên tiến, cho ra đời 
          những bức ảnh và video chất lượng chuyên nghiệp. Thiết kế sang trọng, đẳng cấp, 
          khẳng định phong cách thời thượng. Samsung S24 Ultra sở hữu AI thông minh, hiệu 
          năng cực đỉnh cũng đa tính năng cao cấp nhất. Đi kèm với đó là những cải tiến tích 
          cực vượt trội hơn về camera, vi xử lý, và tích hợp AI toàn diện, đây là sản phẩm không 
          thể bỏ qua cho người yêu công nghệ. Cùng xem giá bán và đánh giá chi tiết nhất dòng điện 
          thoại này xem có nên mua không ngay nhé!`,
          product_technical: [
            {
              id: 2,
              variant_id: 2,
              name: "Kích thước màn hình",
              value: '6.8inches',
              type: 'screen'
            }
          ]
        }
      ]

    }
  ]
}

