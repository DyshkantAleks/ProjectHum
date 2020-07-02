'use strict'
const $ = window.$

//tabs
const $tabs = $('.service__item')

$tabs.on('click', (ev)=> {
$(ev.target).addClass('active-decor').siblings().removeClass('active-decor')
let $tabText = $(`#${ev.target.getAttribute('data-id')}`)
 $tabText.addClass('active-tab')
 .siblings()
 .removeClass('active-tab')
})

//Our Amazing Work---------------------------------------------------------------------
//начальная подгрузка излображений
const ourWorksGallery = document.querySelectorAll('.our-works__item')
let webCounter = 1
let grafCountter = 1
let landCountter = 1
let wPressCountter = 1
function addSrc(el){   
   switch(el.classList[1]){
      case 'graf': el.querySelector('img').src = `./images/StepProjectHam/graphic-design${grafCountter}.jpg`
     
      grafCountter++;
      break;

      case 'web': el.querySelector('img').src = `./images/StepProjectHam/web-design${webCounter}.jpg`
      
      webCounter++
      break;
      
      case 'landing': el.querySelector('img').src = `./images/StepProjectHam/landing-page${landCountter}.jpg`
    
      landCountter++
      break;

      case 'wordpress': el.querySelector('img').src = `./images/StepProjectHam/wordpress${wPressCountter}.jpg`
     
      wPressCountter++
     
      break;
   }
}

ourWorksGallery.forEach(el => addSrc(el))
//подгрузка изображений
const $buttonLoad =$('#imgLoad')

function addImages(ev){
   ev.preventDefault()
   $buttonLoad.hide()
   $('.loader').show()
   setTimeout(()=>{
      ourWorksGallery.forEach(el => el.after(el.cloneNode(true)))
      const newOurWorksGallery = document.querySelectorAll('.our-works__item')
      webCounter = 1
      grafCountter = 1
      landCountter = 1
      wPressCountter = 1
      newOurWorksGallery.forEach(el => addSrc(el))
      $buttonLoad.show()
      $('.loader').hide()
      if(newOurWorksGallery.length > 35) $buttonLoad.hide()
   }, 2000) 
}


 $buttonLoad.on('click', addImages) 
      




//изотоп---------------------------------------------------------------------
const $filterButtons = $('.our-works__nav ul')
const $filterItems = $('.our-works__items')
$('.tab').on('click', (ev) =>{
 $(ev.target).addClass('border-decor')
.siblings().removeClass('border-decor')
})

$filterButtons.on('click', filterImg)

function filterImg(ev){
   $('.our-works__item').hide()  
   if( ev.target.dataset.filter === '*') $(`.our-works__item`).fadeIn()
   
   else 
   {$(`${ev.target.dataset.filter}`).fadeIn()}  
   
}

//masonry---------------------------------------------------------------------

$('.masonry-gallery__wrapper').masonry({
   itemSelector: '.item',
   columnWidth: 10,
   singleMode: false,
   percentPosition: true,
  gutter: 5,   
})

//slider----------------------------------------------------------------------
const informationForSlider = [
   {name:"Artem",
   profession: "Онлайн-ментор",
   comment: "Lorem Ipsum - это текст-'рыба', часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной 'рыбой' для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.",
   src: 'images/reviews/Artem.jpg'
 },
 {name: 'Daria',
  profession: 'Course Coordinator',
   comment: " другой текс о Дарье Lorem Ipsum - это текст-'рыба', часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной 'рыбой' для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.",
   src: 'images/reviews/daria.jpg',
 },
 {name: 'Yaroslav',
    profession: 'Преподаватель',
    comment: " Какой то текст о Ярославе Lorem Ipsum - это текст-'рыба', часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной 'рыбой' для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.",
    src: 'images/reviews/Yaroslav.jpg',
 },
 { name: 'Hasan',
   profession: 'Developer',
    comment: " Какой то текст о Hasan Lorem Ipsum - это текст-'рыба', часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной 'рыбой' для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.",
    src: 'images/reviews/Layer5.png',
 },
 { name: 'Some Woomen',
 profession: 'Some proffesion',
 comment: " Какой то текст о this hero) Lorem Ipsum - это текст-'рыба', часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной 'рыбой' для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.",
 src: 'images/reviews/Layer6.png',
},
{ name: 'another Woomen',
profession: 'proffesion',
comment: " Какой то текст о this hero) Lorem Ipsum - это текст-'рыба', часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной 'рыбой' для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.",
src: 'images/reviews/Layer8.png',
},
]

//заполнение карусели
informationForSlider.forEach((el) => 
$('.slider__navigation-items').append(`<li><img src="${el.src}" alt="${el.name, el.profession} photo"></li>`)
)
//большой слайд------------------------------------------------------
/informationForSlider.forEach((el) => $('.slider__items').append(` <li> 
<span class="fa fa-quote-left"></span>  
<p class="slider__text">${el.comment}</p>
<p class="slider__author">${el.name}<p class="author-profession">${el.profession}</p></p>
<img src="${el.src}" alt="author photo"></li>`))


$('.slider__navigation-items').slick({
   dots:true,   
   slidesToShow:3, 
   speed:1000,
   easing: 'ease',
   initialSlide: 1,
  centerMode: true,  
  focusOnSelect: true,
  asNavFor:'.slider__items',
});

 $('.slider__items').slick({
   asNavFor: '.slider__navigation-items',
   arrows:false,
   speed:1000,
   easing: 'ease',  
   initialSlide: 1,
 })

