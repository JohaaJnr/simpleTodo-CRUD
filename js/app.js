$(document).ready(function(){
    
var count = 1;
$('#todos').hide();

$('#form').on('submit', function(e){
    e.preventDefault();
    let addtask = $('#textarea').val();
    
    let counts = count++;
  
    $('#todos').show();
    $('#tasks').append(`
    <tr id="${counts}">
    <th ><i class="bi bi-arrow-return-right"></i></th>
    <td>${addtask}</td>
    <td ><button class="btnn" onclick="$('#${counts}').remove();"><i class="bi bi-trash"></i></button></td>
    </tr>
    `);
    
    $('#textarea').val('');
    
});
});

