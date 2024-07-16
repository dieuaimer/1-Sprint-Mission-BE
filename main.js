import * as article from './ArticleService.js'
import * as products from './ProductService.js'

// ----------------products--------------------
// try {
//   const result = await products.getProductList();
//   if (result) {
//     console.log(result);
//   }
// } catch (e) {
//   if (e.response) {
//     console.log(e.response.status);
//     console.log(e.response.data);
//   } else {
//     console.log('Failed requests')
//   }
// }

// try {
//   const result = await products.getProduct(7);
//   if (result) {
//     console.log(result);
//   } 
// } catch (e) {
//   if (e.response) {
//     console.log(e.response.status);
//     console.log(e.response.data);
//   } else {
//     console.log('Failed requests')
//   }
// }

// const productData = [
//   {name: "감자", description: "강원도 감자", price: 1000, tags:["채소", "강원도"], images: ['https://thumbnail7.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/6597174365713211-338aa9b8-a411-4d36-8127-24be7159bad0.jpg']},
//   {name: "피데기", description: "포항 구룡포 피데기", price: 20000, tags:["해산물", "포항", "구룡포"], images:['https://imagecdn.skstoa.com/goods/422/26466422_g.jpg']},
//   {name: "랍스타", description: "캐나다산 랍스타", price: 80000, tags:["해산물", "캐나다"], images:['https://sitem.ssgcdn.com/99/24/95/item/1000081952499_i1_750.jpg']},
// ]

// productData.forEach(async (product, idx) => {
//   try {
//     const result = await products.createProduct(product);
//     console.log(result);
//     if (result) {
//       console.log(`Product ${idx + 1} created successfully`);
//     } else {
//       console.log(`Failed to create Product ${idx + 1}`);
//     }
//   } catch (e) {
//     if (e.response) {
//       console.log(e.response.status);
//       console.log(e.response.data);
//     } else {
//       console.log('Failed requests');
//     }
//   }
// });
// const patchData = {name: "간장 게장", description: "부산 간장 게장", price: 5000, tags:["해산물", "부산"], images: ['https://img.siksinhot.com/place/1554961754138062.JPG']}

// try {
//   const result = await products.patchProduct(43, patchData);
//   if (result) {
//     console.log(result);
//   }
// } catch (e) {
//   if (e.response) {
//     console.log(e.response.status);
//     console.log(e.response.data);
//   }
// }

try {
  const result = await products.deleteProduct(50);
  if (!result.data) {
    console.log('Deleted but no content returned');
  } 
} catch (e) {
  if (e.response) {
    console.log(e.response.status);
    console.log(e.response.data);
  }
}

// ----------------articles--------------------
// article.getArticleList()
//   .then(result => {
//     if (result) {
//       console.log('ArticleList: ', result, '\n');
//     } else {
//       console.log('Failed to get ArticleList');
//     }
//   });



// article.getArticle(45)
//   .then(result => {
//     if (result) {
//       console.log('Article: ', result, '\n');
//     } else {
//       console.log('Failed to get Article');
//     }
//   });


// const articlesData = [
//   {title: '감자', content: '포슬포슬하고 맛있어요. 배송상태도 아주 훌륭합니다.', image: 'https://thumbnail7.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/6597174365713211-338aa9b8-a411-4d36-8127-24be7159bad0.jpg'},
//   {title: '피데기', content: '쫀득하니 맛있습니다. 맥주안주로 아주 훌륭합니다.', image: 'https://imagecdn.skstoa.com/goods/422/26466422_g.jpg'},
//   {title: '랍스타', content: '정말 살아있는 랍스타가 배송되네요. 아주 신선합니다.', image: 'https://sitem.ssgcdn.com/99/24/95/item/1000081952499_i1_750.jpg'},
// ]

// Promise.all(articlesData.map(data => article.createArticle(data)))
//   .then(results => {
//     results.forEach((result, idx) => {
//       if (result) {
//         console.log(`Article ${idx + 1} saved successfully:`, result);
//       } else {
//         console.log(`Failed to save Article ${idx + 1}`);
//       }
//     })
//   })


// const updateData = {
//   title: '간장게장',
//   content: '일단 배송상태는 훌륭합니다. 맛은 먹어보고 후기 남기겠습니다.',
//   image: 'https://img.siksinhot.com/place/1457073937720734.jpg',
// }

// article.patchArticle(58, updateData)
//   .then((result) => {
//     if (result) {
//       console.log('Update Data: ', result, '\n');
//     } else {
//       console.log('Failed to update');
//     }
//   })


// article.deleteArticle(77)
//   .then((result) => {
//     if (result) {
//       console.log(result.message);
//     } else {
//       console.log('Failed to delete the article');
//     }
//   })



