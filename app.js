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

  const $newSection = $('<section></section>');

  $newSection.html(hornTemplate);

  $newSection.find('h2').text(this.title);
  $newSection.find('img').attr('src', this.image_url);
  $newSection.find('img').attr('alt', this.title);
  $newSection.find('p').text(this.description);

  $('main').append($newSection);
}

$.get('data/page-1.json', data => {
  data.forEach((hornObj) => {
    new Horn(hornObj).render();
  })
})