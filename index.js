
//cart filling part
let count=0;

  function Increase(){
    count+=1;
    document.getElementById('Number').innerHTML=count;
  }

  function Decrease(){
    if(count>0)
   {
    count-=1;
    document.getElementById('Number').innerHTML=count;
   }
   else  document.getElementById('Number').innerHTML=0;
  }


  function  ADD(){
    let val = document.getElementById('not').innerHTML;
    count+=+val;
    if(count>0){
      
      document.getElementById('not').innerHTML=count;
    document.getElementById('not').style.display='block';
    }
    else{
      document.getElementById('not').style.display='none';
      document.getElementById('cartFilled').style.display='none';
    }
  }
 
function ShowCart(){
    if(count==0){
        document.getElementById('cart').style.display='block';
        document.getElementById('cartEmpty').style.display='block';
        
    }
    else{
        document.getElementById('cartEmpty').style.display='none';
        document.getElementById('cart').style.display='block';
        document.getElementById('cartFilled').style.display='flex';
        document.getElementById('Qte').innerHTML='$125.00 * '+count;
        document.getElementById('finalPrice').innerHTML='$'+125.00*count;
    }
}
document.addEventListener('mouseup', function(e) {
    var container = document.getElementById('cart');

    if (!container.contains(e.target)) {
        container.style.display = 'none';
    }
});

function deleteFromCart(){
  count--;
  if(count>0){
    document.getElementById('not').innerHTML=count;
    document.getElementById('Number').innerHTML=count;
  document.getElementById('Qte').innerHTML='$125.00 * '+count;
  document.getElementById('finalPrice').innerHTML='$'+125.00*count;

  }
  else{
    document.getElementById('not').style.display='none';
    document.getElementById('cartFilled').style.display='none';
    document.getElementById('cartEmpty').style.display='block';
    document.getElementById('Number').innerHTML=0;
  }

        
}

// scrolling picture part 

let picScroll = document.querySelectorAll('.pic'); // return array 
let  heroImg= document.querySelector('.main-pic'); 

picScroll.forEach(img => {
  img.addEventListener('click', onThumbClick);
});

function onThumbClick(event) {
  //clear active state for all thumbnails
  picScroll.forEach(img => {
      img.classList.remove('active');
  });
  //set active thumbnail
  event.target.parentElement.classList.add('active');
  //update hero image
  document.getElementById('main-pic').src = event.target.src.replace('-thumbnail', '');
}



// gestion des lightbox

const picsScroll = document.querySelectorAll('.pic-scroll');
const mainPic = document.querySelector('.main-pic-scrollPic');

picsScroll.forEach(img =>{
   img.addEventListener('click', onClickScroll);
});
heroImg.addEventListener('click', dispScroll);

function onClickScroll(event) {
  //clear active state for all thumbnails
  picsScroll.forEach(img => {
      img.classList.remove('active');
  });
  //set active thumbnail
  event.target.parentElement.classList.add('active');
  //update hero image
  mainPic.src = event.target.src.replace('-thumbnail', '');
}

const close = document.querySelector('.close');
close.addEventListener('click', e=>{
  document.querySelector('.lightBox').style.display='none';
});

function dispScroll(){
  document.querySelector('.lightBox').style.display='block';

 
 document.addEventListener('mouseup',function(e){
  const scroll = document.querySelector('.pics-scroll');

  if(!scroll.contains(e.target)){
    document.querySelector('.lightBox').style.display='none';
  }
 });
}

// gestion de scrolling en utilisant les fleches next /previous

// put variables in array 

const next = document.querySelector('.next');
const prev = document.querySelector('.previous');
const imagePrincipale = document.querySelector('.main-pic-scrollPic');
const picGallery = document.querySelectorAll(".pic-scroll");

next.addEventListener('click', handleNextBtn);
prev.addEventListener('click', handlePrevBtn);

function handleNextBtn() {
  let imageIndex = getCurrentImageIndex();
  imageIndex++;
  if (imageIndex > 4) {
      imageIndex = 1;
  }
  setPrincipaleImage(imageIndex);
}

function handlePrevBtn() {
  let imageIndex = getCurrentImageIndex();
  imageIndex--;
  if (imageIndex < 1) {
      imageIndex = 4;
  }
  setPrincipaleImage(imageIndex);
}

function getCurrentImageIndex() {
 //pop() give us the last elements of the array after deleting it 
  const imageIndex = parseInt(imagePrincipale.src.split('\\').pop().split('/').pop().replace('.jpg', '').replace('image-product-', ''));
  return imageIndex;
}

function setPrincipaleImage(imageIndex) {
  imagePrincipale.src = `./images/image-product-${imageIndex}.jpg`;
  //images are not sync
  picGallery.forEach(img => {
      img.classList.remove('active');
  });
  //set active thumbnail
  picGallery[imageIndex-1].classList.add('active');
}

