// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' });
}
  
// import puppeteer from 'puppeteer';

// export default async function handler(req, res) {
//   const { query } = req.query;

//   try {
//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();

//     await page.goto(`https://www.fravega.com/busqueda?q=${query}`);

//     const productData = await page.evaluate(() => {
//       const productList = Array.from(
//         document.querySelectorAll('.ProductCard__Container')
//       );

//       return productList.map((product) => {
//         const name = product.querySelector('.ProductCard__ProductName')
//           ?.textContent;
//         const price = product.querySelector('.ProductCard__Price')
//           ?.textContent;

//         return { name, price };
//       });
//     });

//     await browser.close();

//     res.status(200).json(productData);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Internal Server Error' });
//   }
// }
