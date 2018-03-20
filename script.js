
var all = document.getElementById('all');
var animals = document.getElementById('animals');
var bands = document.getElementById('bands');
var colors = document.getElementById('colors');
var fruits = document.getElementById('fruits');

filterElements('all');

all.addEventListener('click', function (event) {
  filterElements('all');
});

animals.addEventListener('click', function (event) {
  filterElements('animals');
});

bands.addEventListener('click', function (event) {
  filterElements('bands');
});

colors.addEventListener('click', function (event) {
  filterElements('colors');
});

fruits.addEventListener('click', function (event) {
  filterElements('fruits');
});

function filterElements (c) {
  var x = document.getElementsByClassName('filter-list');
  for (var i = 0; i < x.length; i++) {
    removeClass(x[i], 'show');

    if (x[i].className.indexOf(c) > -1) {
      x[i].classList.add('show');
    }
    if (c === 'all') {
      x[i].classList.add('show');
    }
  }
}

function removeClass (element, name) {
  var arr1;
  arr1 = element.className.split(' ');
  if (arr1.indexOf('show') > -1) {
    element.classList.remove('show');
  }
}
