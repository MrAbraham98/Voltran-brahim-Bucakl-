

$(document).ready(function () {
    var counter = 0;

    $("#addrow").on("click", function () {
        var newRow = $("<tr>");
        var cols = "";

        cols += '<td><select class="custom-select classic"><option>Bölge Seçin</option><option>Bacak</option><option>Göğüs</option><option>Omuz</option><option>Ön Kol</option><option>Arka Kol</option><option>Sırt</option><option>Bel Bölgesi</option></td>';
        cols += '<td><select class="custom-select classic"><option>Hareket Seçin</option><optgroup label="GÖĞÜS HARAKETLERİ"><option>Bench Press</option><option>İncline Press</option><option>İncline Dumbell Press</option><option>İncline Dumbell Fly</option><option>Butterfly</option><option>Decline Barbell Press</option><option>Dumbell Press</option><option>Dumbell Fly</option><option>Pullovers</option><option>Dips</option><option>Bench Press Machine</option><option>Cable Cross Machine</option><option>Push Up</option></optgroup><optgroup label=" ÖN KOL HARAKETLERİ (BİCEPS)"><option>Barbell Curl</option><option>Scott Curl</option><option>Concentration</option><option>İncline Curl</option><option>Altarnatif Curl</option><option>Scott Curl</option><option>Hummer</option></optgroup><optgroup label="ARKA KOL HAREKETLERİ (TRİCEPS)"><option>One Dumbell Triceps</option><option>Push Down Lat Machine</option><option>French Triceps Press</option><option>Close Grip Bench Press</option><option>Dips</option><option>Rope Push Down</option><option>Lying Scull Press</option><option>Kick Back</option></optgroup><optgroup label="BACAK HARAKETLERİ"><option>Leg Press</option><option>Squat</option><option>Leg Extension</option><option>Leg Curl</option><option>Deadlift</option><option>Lunge</option><option>Adductor(iç)</option><option>Adbuctor(dış)</option><option>Gluteus Machine</option><option>Calf</option></optgroup><optgroup label="SIRT HARAKETLERİ"><option>Pulley Row</option><option>Lat PullDown</option><option>Seated Row Pulley</option><option>One Dumbell Rowing</option><option>Pull Up</option><option>Bent Over Barbell Rowing</option><option>Low Row</option><option>T-bar</option></optgroup><optgroup label="OMUZ HARAKETLERİ"><option>Barbell Press Behind</option><option>Side Lateral Raises</option><option>Bent Over Lateral Raises</option><option>Seated Alternate Dumbell Press</option><option>Upright Rowing</option><option>Military Press</option><option>Shrock Dumbell</option><option>Shoulder Press</option><option>Dumbell Press</option><option>Dumbell Front Raises</option><option>Rear Delt Machine</option></optgroup><optgroup label="BEL BÖLGESİ"><option>Twister(Sopa ile Yan Bel)</option><option>Side Bend</option><option>Sit-Up</option><option>Crunches</option><option>Leg Raises</option><option>Hyper Extension</option><option>Twister Machine(Yan Bel)</option><option>Leg Raises</option><option>Twister(Düz Alet)</option><option>Abdominal Machine</option><option>Seated Knee Up</option><option></option></optgroup></select></td>';
        cols += '<td><select class="custom-select classic"><option>Tekrar Sayısı Seçin</option><option>8</option><option>10</option><option>12</option><option>15</option><option>20</option><option>∞</option></td>';
        cols += '<td><select class="custom-select classic"><option>Set Sayısı Seçin</option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></td>';

        cols += '<td><input type="button" class="ibtnDel btn btn-md btn-danger "  value="Delete"></td>';
        newRow.append(cols);
        $("table.order-list").append(newRow);
        counter++;
    });



    $("table.order-list").on("click", ".ibtnDel", function (event) {
        $(this).closest("tr").remove();
        counter -= 1
    });


});



function calculateRow(row) {
    var price = +row.find('input[name^="price"]').val();

}

function calculateGrandTotal() {
    var grandTotal = 0;
    $("table.order-list").find('input[name^="price"]').each(function () {
        grandTotal += +$(this).val();
    });
    $("#grandtotal").text(grandTotal.toFixed(2));
}
