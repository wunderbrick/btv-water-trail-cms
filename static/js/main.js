const carouselHeaderText = new Map([
  [1, "Public Access"],
  
  [2, "Float by Canoe, Kayak, SUP"],
  
  [3, "Fishing"],
  
  [4, "Scenery & Wildlife"],
  
  [5, "History & Culture"],
  
  [6, "Conservation & Stewardship"],
  
  [7, "Relax & Slow Down"]
]);

const carouselContentText = new Map([
  [1, "There are 11 public access sites along the BTV Water Trail that allow safe access to the riverway. The BTV Water Trail Map & Guide highlights these access sites and other key features. In the coming years, we aim to create additional river access points and improve existing sites."],
  
  [2, "The BTV Water Trail offers beautiful scenery, with miles of beginner and family friendly flat water. Other sections have exciting Class I and Class II rapids. Be sure to practice safe boating practices: wear a personal floatation device, check river conditions prior to floating, and have a guide and map."],
  
  [3, "Smallmouth bass, crappie, sunfish, suckers and even musky call the Buckhannon and Tygart Valley River home. Any fisher over 14 years old will need a WVDNR fishing license."],
  
  [4, "Deer, turkey, beaver, herons, otters, kingfishers and bald eagles are often sighted on quiet floats. Around each river bend is the possibility of a new discovery!"],
  
  [5, "Discover unique and interesting historical and cultural points of interest. The Water Trail tells an interconnected story of the natural landscape and its flora/fauna, as well as human culture, heritage, and history. Two covered bridges. Pringle Tree. And numerous other gems. Photo Credit: Janna Vaught"],
  
  [6, "The BTV Water Trail tells an interconnected story of the river and land, its flora and fauna, as well as our own heritage and history. We hope the BTV Water Trail helps enhance connection, foster stewardship, and spark appreciation of the natural World. The Water Trail is an outdoor classroom without walls. We invite you to get outside, explore, and connect with nature."],
  
  [7, 
    // Note: I trimmed this down from the original text while preserving meaning and intent so it wouldn't overflow on mobile.
    "Slow down, relax, and soak in the scenery. Life along the river is an ever changing play: breezes flow through the tree and brush across your skin, sunlight changes as clouds dance overhead, sounds echo as birds call out and wildlife splashes in the water. The BTV Water Trail wants you to enjoy the peaceful setting and preserve and protect these unique rivers and habitats."]
]);

function setCarouselContentOnLoad(){
     let img = document.getElementById("main-page-carousel");
     
     let carouselHeader = document.getElementById("carousel-header");
     
     let carouselContent = document.getElementById("carousel-content");
     
     let newCarouselHeader = carouselHeaderText.get(1);

     carouselHeader.textContent = newCarouselHeader;
     
     let newCarouselContent = carouselContentText.get(1);

     carouselContent.textContent = newCarouselContent;
};

function prevImage() {
     let img = document.getElementById("main-page-carousel");
     
     let carouselHeader = document.getElementById("carousel-header");
     
     let carouselContent = document.getElementById("carousel-content");
 
     let imgNum = img.style['background-image'].replace(/\D/g,'');

     let newImgNum = (imgNum == 1) ? 7 : (imgNum - 1);
      
     img.style = `background-image: ${img.style['background-image']}; animation: fade-out 0.5s ease-in forwards; height:100vh;`

     setTimeout(() => {
       img.style = "background-image:url('/img/carousel/" + newImgNum + ".webp');animation: fade-in 0.5s ease-in forwards; height:100vh";
     
     let newCarouselHeader = carouselHeaderText.get(newImgNum);

     carouselHeader.textContent = newCarouselHeader;
     
     let newCarouselContent = carouselContentText.get(newImgNum);

     carouselContent.textContent = newCarouselContent;
     }, 500);
}

function nextImage() {
  
  let img = document.getElementById("main-page-carousel");
  
  let imgNum = img.style['background-image'].replace(/\D/g,'');

  let newImgNum = (imgNum == 7) ? 1 : (++imgNum);
  
  let carouselHeader = document.getElementById("carousel-header");
     
  let carouselContent = document.getElementById("carousel-content");
  
  img.style = `background-image: ${img.style['background-image']}; animation: fade-out 0.5s ease-in forwards; height:100vh;`

  setTimeout(() => {
       img.style = "background-image:url('/img/carousel/" + newImgNum + ".webp');animation: fade-in 0.5s ease-in forwards; height:100vh";
     
   let newCarouselHeader = carouselHeaderText.get(newImgNum);

   carouselHeader.textContent = newCarouselHeader;
   
   let newCarouselContent = carouselContentText.get(newImgNum);

   carouselContent.textContent = newCarouselContent;
  }, 500);
}

setCarouselContentOnLoad();
