const elements = document.querySelectorAll('li.item');
   
   console.log(`Number of categories: ${elements.length}`);
   
   
   for( let i = 0; i < elements.length; i += 1){
   console.log(`Category: ${elements[i].querySelector('h2').textContent}`)
   console.log(`Elements: ${elements[i].querySelectorAll('ul li').length}`)
   }