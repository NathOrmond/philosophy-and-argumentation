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

async function getPageLinks(pageName){ 
  let page = await wiki().page(pageName);
  let pageContents = await page.content();
  let rv = [""];
  for(const pageContent of pageContents){
    if(pageContent.items !== undefined){
      for(const item of pageContent.items){ 
        rv.push(item.title);
      }
    }
  }
  rv.shift();
  return rv;
}

module.exports = {
  getPageText,
  getPageLinks
}
