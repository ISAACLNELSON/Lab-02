'use strict';


const moreHornPics = [];

function moreHorn(moreHornObj) {
  this.title = moreHornObj.title;
  this.image_url = moreHornObj.image_url;
  this.description = moreHornObj.description;
  this.keyword = moreHornObj.keyword;
  this.moreHorns = moreHornObj.moreHorns;


  
}

moreHorn.prototype.render = function () {
  //make a template :)
  const moreHornTemplate = $('#photo-template').html();
  const $newOption = $(`<option>${this.title}</option>`);
  const $newSection = $('<section></section>');

  $newSection.html(moreHornTemplate);

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

}
//more dropdown stufff

// filtering the images handler
$('select').on('change', function () {
  console.log("clicked")
  $('section').hide();
  $(`.${this.value}`).show();
  console.log();
});


$.get('data/page-2.json', data => {
  data.forEach((moreHornObj) => {
    moreHornPics.push(moreHornObj.keyword);
    new moreHorn(moreHornObj).render();
  });
});