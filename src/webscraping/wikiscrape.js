//import wiki from 'wikijs';
const wiki = require('wikijs').default;

async function getPageText(pageName){
  let rv = "";
  console.log("> Scraping the web for text... this may take a while!");
  try{
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
    console.log(`> Got text from the internet ${rv.split(' ').length} words long!`);
    return rv;
  }catch(err){
    return -1;
  }
}

async function getPageLinks(pageName){ 
  let page = await wiki().page(pageName);
  let rv = [""];
  if(page !== undefined){
    let pageContents = await page.content();
    for(const pageContent of pageContents){
      if(pageContent.title == "See also"){
        rv = pageContent.content.split("\n");
      } 
    }
    rv.shift();
  } else { 
    rv = [
      "Christianity", 
      "God", 
      "Philosophy of Religion"
    ];
  }
  return rv;
}

module.exports = {
  getPageText,
  getPageLinks
}
