let _queue = [];
const _txtQnameId = '#txtQueueName';
const _ddlDepartmentId = '#ddlDepartment';
const _ddlCourt = '#ddlCourt';

$( document ).ready(function() {
   initDate();
});

function focusDispatcherTextbox()
{
    $('#txtDispatcher').focus();
}

function showTable(){
    if(_queue.length === 0) {
        $("#myTable").hide();
    } else {
        $("#myTable").show();
    }

}

function initDate()
{
    showTable();

    $('#start').datepicker({
        autoclose: true,
        todayHighlight: true,
        defaultDate: new Date()
    });

  

    focusDispatcherTextbox();

    setEventKeyPressEnterToFocusNext('txtDispatcher', 'txtQueueName');
    

    $(_txtQnameId).keyup(function(event) {
        if (event.keyCode === 13) {
            addWork();
        }
    });

    $(_ddlCourt).on('change', function(){
        $(_txtQnameId).focus();
    })

    
}

function setEventKeyPressEnterToFocusNext(selectorId, nextSelectorId)
{
    $("#"+selectorId).keyup(function(event) {
        if (event.keyCode === 13) {
           $('#'+nextSelectorId) .focus();
            
        }
    });
}

function addWork() {
    let countQueue = _queue.length;
    const txtName = document.getElementById('txtQueueName');
    const name = txtName.value

    const datePicker = document.getElementById('start');
    const dateNow = new Date(datePicker.value);

    const finishDate = dateNow;
    countQueue = countQueue + 10;
    finishDate.setDate((dateNow.getDate() + countQueue) );
    let no = _queue.length + 1;

    addWorkToTable(no, name, finishDate)
    txtName.value = '';

    _queue.push(
        {
            queueDate: finishDate,
            queueName: name,
            queueNo: no
        }
    );

    showTable();
    focusDispatcherTextbox();
    

    // Bonus: You can also put Date object to first arg
    // const date = new Date()
    // convertTZ(date, "Asia/Jakarta") // current date-time in jakarta.
}


function convertTZ(date, tzString) {
    return new Date((typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", { timeZone: tzString }));

}

function addWorkToTable(countRow, name, finishDate) {
    var table = $("#myTable");
    var tableBody = table.find('tbody');
    
    tableBody.append(
        '<tr>'+
        '<td>'+ countRow +'</td>'+
        '<td>'+ name +'</td>'+
        '<td>'+ convertTZ(finishDate, "Asia/Jakarta").toDateString() +'</td>'+
        '<td>'+ convertTZ($('#start').val(), "Asia/Jakarta") +'</td>'+
        '</tr>'

    );
}

function onDateChange() {
    var table = $("#myTable");
    var tableBodyRow = table.find('tbody tr');
    tableBodyRow.remove();

    _queue = [];
    focusDispatcherTextbox();
    showTable();
}