inputTicketCode = "01230"

           inputTicketCode.trim() 

            isInRange = false
            for(let i = 0; i<= inputTicketCode.length; i++ ){
                if(inputTicketCode[i] > 0 || inputTicketCode[i] > 9){
                 isInRange = true
                }
            }

            if(isInRange){
                console.log("mã phải nằm trong khoảng từ 0 đến 9");
            }