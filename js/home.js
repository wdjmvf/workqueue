$( document ).ready(function() { // เริ่มการทำงาน event Page load

    // alert('Page load');

    // $('#start').datepicker();

    // code สร้างปฏิทินและสั่งให้ปฏิทินเลือกวันที่ในอดีตไม่ได้
    $('#start').datepicker({
        startDate: new Date()  //code สั่งให้ปฏิทินเลือกวันที่ในอดีตไม่ได้
    });

   let myOBject = collectValueFromInput();
   console.log('myOBject = '+ JSON.stringify(myOBject));

   // แสดงหรือซ่อน textbox txtOthersDepartment
   showOrHidetxtOthersDepartment();







}); // จบการทำงาน event page load





function collectValueFromInput() 
{
   //เก็บค่า Value จาก input ใส่ในตัวแปร
   //ดึงข้อมูลจาก input ทั้งหมดมาใส่ในตัวแปร
   // # อ้างอิงถึง id
   // . อ้างอิงถึง class
   const startValue = $('#start').val();
   const dispatcher = $('#txtDispatcher').val();
   const othersDepartmentVal = $('#txtOthersDepartment').val();
   const courtValue = $('#ddlCourt').val();
   const queueNameValue = $('#txtQueueName').val();
   const objectiveValue = $('#txtObjective').val();
   const highligtTextValue = $('#txtHighlightText').val();
   const subTextValue = $('#txtSubText').val();
   const informationValue = $('#txtInformation').val();

   // นำตัวแปรที่รับค่าจาก input ทั้งหมดมาสร้าง Object
   // ตัวอย่างการสร้าง object เปล่า คือ let work = {}
   let work = {
        startDate: startValue,
        dispatcher: dispatcher,
        othersDepartment: othersDepartmentVal,
        court: courtValue,
        queueName: queueNameValue,
        objective: objectiveValue,
        highlightText: highligtTextValue,
        subText: subTextValue,
        information: informationValue
   };

   return work;
}


function showOrHidetxtOthersDepartment() 
{
    // แสดงหรือซ่อน textbox txtOthersDepartment
   const departmentValue = $('#ddlDepartment').val();
   console.log('showOrHidetxtOthersDepartment', departmentValue);
   if (departmentValue === 'Others') 
   {
        $('#txtOthersDepartment').show();
   }
   else 
   {
        $('#txtOthersDepartment').hide();
   }
}
