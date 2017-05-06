$(function(){
  $('#form').submit(function(e) {
      e.preventDefault();
      $(".remove").remove();

      var product = $('.product').val().toUpperCase();
      var index = product.indexOf(" ");  // Gets the first index where a space occours
      var brand = product.substr(0, index); // Gets the first part
      var model = product.substr(index + 1);  // Gets the text part

      $.ajax({
          url: '/reviews',
          method: 'POST',
          data: {
            brand: brand,
            model: model
          },
          dataType: "JSON",
          success: function(data) {
            for(var i=0; i<data.length; i++) {
              classification = get_classification(data[i].cluster);

              var row = $('<tr/>');
              row.addClass("temp");
              row.append("<th scope='row'>" + (i+1) + "</th>")
              row.append($('<td/>').html(data[i].website));
              row.append($('<td/>').html((data[i].link).link(data[i].link)));
              row.append($('<td/>').html(classification));
              $('.results tr:last').after(row);
            }

            $('.results').show();
            window.location.hash = '.table';
          }
      });
  });
});

function get_classification(cluster) {
  if (cluster == 0) return 'Helpful';
  else if (cluster == 1) return 'Very Helpful';

  return 'Neutral';
}
