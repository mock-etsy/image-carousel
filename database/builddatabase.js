$(document).ready(function () {
    let url = "https://openapi.etsy.com/v2/listings/active.js?api_key=",
    key = process.env.ETSY_API_KEY,
    limit = 100

$.ajax({
  url: url,
  data: {
    api_key: key,
    limit: limit
  },
  dataType: "jsonp",
  success: function(data) {
    // log etsy data
    console.log(data);

    // for each listing... *
    for (var i = 0; i < data.results.length; i++) {
      // * assign listing variables
      var item = data.results[i];
      var url = item.url;
      var image = item.MainImage.url_570xN; // 75x75, 170x135, 570xN, fullxfull
      var title = item.title;
      var price = item.price;
      var quantity = item.quantity;

      // * build html structure for each listing
      var result = $(
        '<div class="item">\
                <div class="item-image">\
                    <a href="' +
          url +
          '"><img src="' +
          image +
          '"/></a>\
                </div>\
                <div class="item-details">\
                    <p class="item-title">' +
          title +
          '</p>\
                    <p class="item-price">$' +
          price +
          '</p>\
                    <p class="item-quantity">' +
          quantity +
          " left</p>\
                </div>\
            </div>"
      );

      // * append listings
      $("#some-element").append(result);
    }
  }
});
