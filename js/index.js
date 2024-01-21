let _queue = [];

function focusTitle()
{
    $('#txtQueueName').focus();
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

    document.getElementById('start').valueAsDate = new Date();
    focusTitle();

    $("#txtQueueName").keyup(function(event) {
        if (event.keyCode === 13) {
            addWork();
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
    focusTitle();
    

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
        '<td>'+ convertTZ(new Date(), "Asia/Jakarta").toUTCString() +'</td>'+
        '</tr>'

    );
}

function onDateChange() {
    var table = $("#myTable");
    var tableBodyRow = table.find('tbody tr');
    tableBodyRow.remove();

    _queue = [];
    focusTitle();
    showTable();
}