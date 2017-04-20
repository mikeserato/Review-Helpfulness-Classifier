$(function(){
  $('.results').hide();

  $('#form').submit(function(e) {
      e.preventDefault();

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
            title = data[0].brand + " " + data[0].model + " REVIEWS";
            $('.result_title').text(title);

            for(var i=0; i<data.length; i++) {
              classification = get_classification(data[i].tree_decision);

              var row = $('<tr/>');
              row.append($('<th/>').html(i+1));
              row.append($('<td/>').html(data[i].website));
              row.append($('<td/>').html((data[i].link).link(data[i].link)));
              row.append($('<td/>').html(classification));
              $('.results tr:last').after(row);
            }

            $('.results').show();
          }
      });
  });
});

function get_classification(tree_decision) {
  if (tree_decision == 4) return 'Very Helpful'
  else if (tree_decision == 3) return 'Helpful'
  else if (tree_decision == 2) return 'Neutral'
  else if (tree_decision == 1) return 'Unhelpful'

  return 'Very Unhelpful'
}
