
//hàm tính lãi của tiền gửi ngân hàng mỗi tháng (cộng dồn gốc)
function ex(){
    let rate=parseFloat(document.getElementById("interest_rate_ex").value);
    let money=parseFloat(document.getElementById("amount_ex").value);
    let months=parseFloat(document.getElementById("time_ex").value);
    let ls=rate/1200;
    for(let i=0;i<months;i++){
        money+=money*ls;
    }
    document.getElementById("exBT").innerHTML="Lãi bạn nhận được khi đáo hạn là: "+numberWithCommas(money)+" VNĐ.";
}

//hàm ước tính thời gian
function ex1(){
    let rate=parseFloat(document.getElementById("interest_rate_ex1").value);
    let money=parseFloat(document.getElementById("amount_ex1").value);
    let total=parseFloat(document.getElementById("total_ex1").value);
    let ls=rate/1200;
    let time=0;
while(money<total) {
    money+=money*ls;
    time++; }
    document.getElementById("exBT1").innerHTML="Sau "+time+" tháng bạn sẽ nhận được số tiền "+numberWithCommas(total);
}

//hàm thêm phần thập phân vào sau phần ngàn trong MONEY cho dễ đọc, hàm này đi copy dạo chứ ko phải tự làm hehe
function numberWithCommas(x) {
    let parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}