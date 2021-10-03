const btnRow = document.getElementById("bttnRow");
const btnRem = $("#rem");

$(document).ready(function(){
    $.get("select.php", function(data, status){
        $(btnRow).before(data);
    });
});



$("#add").click(function(){

    $(btnRow).before(`
    <tr id="fakeRow"> 
        <td></td>
        <td id="nameD"><input type="text" required id="nameInp"></td>
        <td id="surNameD"><input type="text" required id="surNameInp"></td>
        <td id="ageD"><input type="number" id="ageInp" max='99' required></td>
    </tr>
    `);
});

$("#sub").click(function(){
    let fake = $("#fakeRow");
    let name = $("#nameInp").val();
    let surName = $("#surNameInp").val();
    let age = $("#ageInp").val();

    $.post("change.php", {
        name:name,
        surName:surName,
        age:age
    },
        function(data, status){
            if(data!="failed" && status=="success"){
                let newRow = `
                    <tr id=${data}}> 
                        <td>${data}</td>
                        <td>${document.getElementById("nameInp").value}</td>
                        <td>${document.getElementById("surNameInp").value}</td>
                        <td>${document.getElementById("ageInp").value}</td>
                        <td><input type="checkbox" name="" id="${data}" class="checkbox"></td>
                    </tr>
                    `;
                $(btnRow).before(newRow);
                fake.remove();
            }else{
                console.log("failed");
            }
    });

});


btnRem.click(function(){
    try{
        let selected = $(":checked")[0].id;
        $.post("remove.php", {
            id:selected
        },
            function(data, status){
                if(data="success"){
                    $("#"+selected).remove();
                }
            
        });
    }catch(error){
        console.log(error);
    }

});


