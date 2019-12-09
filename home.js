function openResidentView() {
    window.open('http://localhost:8080/webpack-dev-server/', '_blank');
}

function showStaffView() {
    document.getElementById("home-btns").outerHTML = "";
    $('.staff-view-hidden').attr('class', 'staff-view');
}

function UpdatedTagsSuccessfully() {
    alert("Your keywords have been successfully updated!");
}

jQuery(document).ready(function(){
    addEvents();
  });

function addEvents() {
    $("#staff-submit").click(function(){
        addTags();
      });
    $('input').on('keypress', (event)=> {
        if(event.which === 13){
            addTags();
        }
});
}

function addTags() {
    var input = $('#keyword-box').val();
    $('input').val('');
    var r = $('<button/>', {
            text: input,
            id: 'keyword'
        });
    $("body").append(r);
}