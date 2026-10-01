let choice 
let bookingCode

let currentBookingCode = ""
let isBookingCode = false


let inputTicket = 0
let inputPrice = 0 
let ticketCount = 0
let pricePerTicket = 0
let locationPrice = 0
let discountPrice = 0
let servicePrice = 0
let totalPrice = 0
let totalRevenue = 0
let totalBooking = 0

let inputTicketCode = ""
do{
    choice = prompt(`${"=".repeat(35)}
    HỆ THỐNG BÁN VÉ RẠP MOONLIGHT CINEMA
    ${"=".repeat(35)}
    1. Nhập và kiểm chuẩn mã đặt vé
    2. Tính tiền vé xem phim
    3. Thẩm đinh số vé seri ma mắn
    0. thoát`);

    switch(choice){
        case "1":
            bookingCode= prompt("Nhập vào mã vé phòng: ")

            if (bookingCode === ""){
                console.log("Chưa nhập mã vé");
                break;
            }
            currentBookingCode = bookingCode.trim().toUpperCase()

            if(currentBookingCode.length < 6){
                console.log("Độ dài mã tối thiểu phải 6 kí tự");
                break;
            }else if(!currentBookingCode.startsWith("CIN-")){
                console.log("mã phải bắt đầu bằng `cin-`")
                break;
            }else if(currentBookingCode.includes(" ")){
                console.log("Mã vé không được chứa khoảng trắng");
                break;
            }else{
                isBookingCode = true
                console.log("In mã vé thành công !");
            }
            break;
        case "2":
            if(isBookingCode === false){
                console.log("Vui lòng tạo mã vé ở bước 01");
                break;
            }
            while(true){
            ticketCount = Number(prompt("Nhập vào số lượng vé: "))
            
            if(ticketCount=== ""){
                console.log("Mảng không được rỗng");
                break;
            }

            if(Number.isInteger(ticketCount)||Number.isNaN(ticketCount) || ticketCount <= 0){
                console.log("Nhập sai định dạng");
                continue;
            }

            pricePerTicket = Number(prompt("Nhập vào số tiền mỗi vé: "))

            if(ticketCount=== ""){
                console.log("Mảng không được rỗng");
                break;
            }
            
            if(Number.isInteger(pricePerTicket)||Number.isNaN(pricePerTicket)|| pricePerTicket <= 0){
                console.log("Nhập sai định dạng");
                continue;
            }
            
            locationPrice = pricePerTicket * ticketCount
            if(ticketCount > 4){
                discountPrice = Math.round(totalPrice * 0.1)
            }
            servicePrice = Math.round((locationPrice - discountPrice) * 0.08)

            totalPrice = (locationPrice - discountPrice) + servicePrice

            totalRevenue += totalPrice
            totalBooking++
            console.log(`SL: ${ticketCount}
                Đơn giá: ${pricePerTicket}
                Chi phí cơ sở: ${locationPrice}
                giảm giá: ${discountPrice}
                phụ phí: ${servicePrice}
                tổng chi phí: ${totalPrice}`);
            currentBookingCode = ""
            isBookingCode = false
            break;
            }
            break;
        case "3":
            inputTicketCode = prompt("Nhập vào mã số vé: ")

            inputTicketCode.trim()

            let reveseCode = ""
            let isreverse = false
            for(let i = inputTicketCode.length - 1; i <=0; i--){
                reveseCode += i
            }

            if(reveseCode === inputTicketCode){
                isreverse = true
            }

        break;
        case "0":
            console.log("Hẹn gặp lại bạn !");
            break
        default:
            console.log("Lựa chọn không hợp lệ vui lòng nhập lại");
            break;
    }
}while(choice !== "0")