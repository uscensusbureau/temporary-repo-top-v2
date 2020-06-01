// Update display to seach and filter products
var $ = require('jquery');
var slugify = require('slugify');

// console.log("connected!")

$('#product-search-form').submit(function (e) {
  e.preventDefault();
  var filter = $( '#search-field').val();
  var products = document.getElementsByName('productCard');
  console.log(products)
  for (i = 0; i < products.length; i++) {
    if (products[ i ].getElementsByTagName('h2')[ 0 ]) {
      productName = products[ i ].getElementsByTagName('h2')[ 0 ].innerText.toLowerCase();
      productNameSlugified = slugify(productName.split('.').join("-").split(':').join("-"));
      if (productName.includes(filter)) {
        $('#product-card-' + productNameSlugified).removeClass('pc-inactive');
      } else {
        $('#product-card-' + productNameSlugified).addClass('pc-inactive');
      }
    }
  }
});

$('#product-filter-form').submit(function (e) {
  e.preventDefault();
  var selectedValues = document.getElementsByName('filter-checkbox');
  var products = document.getElementsByName('productCard');
  for (i = 0; i < selectedValues.length; i++) {
    for (j = 0; j < products.length; j++ ) {
      productYear = products[ j ].getElementsByTagName('h3')[ 0 ].innerText;
      productTopic = products[ j ].getElementsByTagName('h4')[ 0 ].innerText;
      productAgency = products[ j ].getElementsByTagName('h5')[ 0 ].innerText;
      productName = products[ j ].getElementsByTagName('h2')[ 0 ].innerText.toLowerCase();
      productNameSlugified = slugify(productName.split('.').join("-").split(':').join("-"));
      if (selectedValues[ i ].checked == true ) {
        var filter = selectedValues[ i ].value
        if ( productTopic.includes(filter) || filter == productYear || productAgency.includes(filter)) {
          $('#product-card-' + productNameSlugified).removeClass('pc-inactive');
        } else {
          $('#product-card-' + productNameSlugified).addClass('pc-inactive');
        }
      }
    }
  }
});

$('.usa-card').on('click', function () {
  $( this ).next('.modal').removeClass('modal-inactive').addClass('modal-active');
});

$(".close").on("click", function () {
  $(".modal-active").removeClass('modal-active').addClass('modal-inactive');
});

$('.data-card-group').on('click', function (e) {
    var dataCard = e.target.closest("li").id;
    // toggle the description of the challenge at top of page
    $('.modal-active').addClass('modal-inactive');
    $('.modal-active').removeClass('modal-active');
    $("#modal-" + dataCard).removeClass('modal-inactive').addClass('modal-active');

    var datasets = document.getElementsByClassName("data-set-card");
    if (datasets) {
      for (i = 0; i < datasets.length; i++ ) {
        dataName = datasets[ i ].getElementsByTagName('h2')[ 0 ].innerText
        dataNameSlugified = slugify(dataName.toLowerCase().replace('(', '').replace(')', '').replace(':', '').split(" ").join("-"));
        dataCategory = datasets[ i ].getElementsByTagName('h3')[ 0 ].innerText;
        dataCategoryArray = dataCategory.toLowerCase().replace('(', '').replace(')', '').split(' ');
        if ( dataCategoryArray.includes(dataCard) ) {
          console.log("display match!", dataCard, dataCategoryArray)
          $('#data-set-card-' + dataNameSlugified).removeClass('pc-inactive');
        } else {
          console.log("no match!", dataCard, dataCategoryArray)
          $('#data-set-card-' + dataNameSlugified).addClass('pc-inactive');
        }
      }
    }
  });

  // 
  //
  // $('#data-search-form').submit(function (e) {
  //   e.preventDefault();
  //   var filter = $( '#search-field').val();
  //   var dataSets = document.getElementsByName('data-set-card');
  //   if (dataSets) {
  //     for (i = 0; i < dataSets.length; i++) {
  //       if (dataSets[ i ].getElementsByTagName('h2')[ 0 ]) {
  //         dataName = dataSets[ i ].getElementsByTagName('h2')[ 0 ].innerText
  //         dataPS = dataSets[ i ].getElementsByTagName('h3')[ 0 ].innerText
  //         dataDescription = dataSets[ i ].getElementsByTagName('p')[ 0 ].innerText
  //         dataNameSlugified = slugify(dataName.toLowerCase().replace('(', ' ').replace(')', '').replace('–⁠', ' ').replace('-', ' ').replace('&', '').replace('*', ' ').split(" ").join("-"));
  //         if (dataName.toLowerCase().includes(filter) || dataPS.toLowerCase().includes(filter) || dataDescription.toLowerCase().includes(filter)) {
  //           console.log(dataNameSlugified);
  //           $('#data-set-card-' + dataNameSlugified).removeClass('pc-inactive');
  //         } else {
  //           console.log("mismatch", dataNameSlugified);
  //           $('#data-set-card-' + dataNameSlugified).addClass('pc-inactive');
  //         }
  //       }
  //     }
  //   }
  // });
