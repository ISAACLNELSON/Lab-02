'use strict';


const hornPics = [];

function Horn(hornObj){
  this.title = hornObj.title;
  this.image_url = hornObj.image_url;
  this.description = hornObj.description;
  this.keyword = hornObj.keyword;
  this.horns = hornObj.horns;


  hornPics.push(this);
}

Horn.prototype.render = function(){
  //make a template :)
  const hornTemplate = $('#photo-template').html();
  const $newOption = $('<option></option>');
  const $newSection = $('<section></section>');

  $newSection.html(hornTemplate);

  $newSection.find('h2').text(this.title);
  $newSection.find('img').attr('src', this.image_url);
  $newSection.find('img').attr('alt', this.title);
  $newSection.find('p').text(this.description);

  $newSection.attr('class', this.keyword);
  
  $('main').append($newSection);
  
  //dropdown stuff
  $newOption.attr('value', this.keyword);
  $newOption.attr('class', this.keyword);
  $newOption.text(this.title);
  
  
  $('select').append($newOption);
  // console.log(this)
}
//more dropdown stuff

  // filtering the images handler
  $('select').on('change', function() {
    console.log("clicked")
  $('main').hide();
  $('.')
  // let hornsOnDom = $('main').find('keyword');
  console.log(this.value);
  })


$.get('data/page-1.json', data => {
  data.forEach((hornObj) => {
    new Horn(hornObj).render();
  })
})