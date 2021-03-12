//import wiki from 'wikijs';
const wiki = require('wikijs').default;

async function getPageText(pageName){
  let rv = "";
  let page = await wiki().page(pageName);
  let pageContents = await page.content();
  for(const pageContent of pageContents){
    rv += pageContent.content;
    if(pageContent.items !== undefined){
      for(const item of pageContent.items){
        rv += item.title;
        rv += item.content;
      }
    }
  }
  return rv;
}

module.exports = {
  getPageText
}
