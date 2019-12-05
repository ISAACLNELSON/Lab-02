'use strict';


const hornPics = [];

function Horn(hornObj) {
  this.title = hornObj.title;
  this.image_url = hornObj.image_url;
  this.description = hornObj.description;
  this.keyword = hornObj.keyword;
  this.horns = hornObj.horns;


  
}

Horn.prototype.render = function () {
  //make a template :)
  const hornTemplate = $('#photo-template').html();
  
  const $newOption = $(`<option>${this.title}</option>`);
  
  const $newSection = $('<section></section>');

  $newSection.html(hornTemplate);
  //rip jquery :(
  $newSection.find('h2').text(this.title);
  $newSection.find('img').attr('src', this.image_url);
  $newSection.find('p').text(this.description);
  $newSection.find('img').attr('alt', this.title);

  $newSection.attr('class', this.keyword);

  $('main').append($newSection);

  //dropdown stuff
  $newOption.attr('value', this.keyword);
  $newOption.attr('class', this.keyword);
  $newOption.text(this.title);


  $('#filter').append($newOption);

}
//more dropdown stufff

// filtering the images handler
$('#filter').on('change', function () {
  console.log("clicked")
  $('section').hide();
  $(`.${this.value}`).show();
  console.log();
});

$('#sort').on('change', function () {
  console.log("clicked")
  console.log();
  //on click, hide section
  $('section').hide();
  // re-get json filter appropriately 
  if(this.value === 'horns'){
    $.get('data/page-1.json', data => {
      data.sort((a, b) => {
        if(a.horns > b.horns){
          return -1
        } else if(a.horns < b.horns){
          return 1
        } else {
          return 0
        }
      });
      data.forEach((hornObj) => {
        hornPics.push(hornObj.keyword);
        new Horn(hornObj).render();
      });
    });
  } else if (this.value === 'title'){
    $.get('data/page-1.json', data => {
      data.sort((a, b) => {
        if(a.title > b.title){
          return 1
        } else if(a.title < b.title){
          return -1
        } else {
          return 0
        }
      });
      data.forEach((hornObj) => {
        hornPics.push(hornObj.keyword);
        new Horn(hornObj).render();
      });
    });
  }
  }); 
 


$.get('data/page-1.json', data => {
  data.sort((a, b) => {
    if(a.horns > b.horns){
      return 1
    } else if(a.horns < b.horns){
      return -1
    } else {
      return 0
    }
  });

  data.forEach((hornObj) => {
    hornPics.push(hornObj.keyword);
    new Horn(hornObj).render();
  });
});