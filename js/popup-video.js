$(document).ready(function () {
   /* Get iframe src attribute value i.e. YouTube video url
   and store it in a variable */
   var url = $("#descriptionVideo").attr('src');

   /* For Mobile */
   var url = $("#descriptionVideoMobile").attr('src');

   /* Assign empty url value to the iframe src attribute when
   modal hide, which stop the video playing */
   $("#descriptionModal").on('hide.bs.modal', function () {
      $("#descriptionVideo").attr('src', '');
   });

   /* For Mobile */
   $("#descriptionModalMobile").on('hide.bs.modal', function () {
      $("#descriptionVideoMobile").attr('src', '');
   });

   /* Assign the initially stored url back to the iframe src
   attribute when modal is displayed again */
   $("#descriptionModal").on('show.bs.modal', function () {
      $("#descriptionVideo").attr('src', url);
   });

   /* For Mobile */
   $("#descriptionModalMobile").on('show.bs.modal', function () {
      $("#descriptionVideoMobile").attr('src', url);
   });
});