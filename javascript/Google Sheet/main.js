var $form = $('foo'),
    url = 'https://script.google.com/macros/s/AKfycbzHY2v8VGnlCgFfMEt3BXsbMWmipXovK5qLmmRFeqxS4be7LiQ/exec'

$('#submit-form').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject()
  }).success(
    // do something
  );
})