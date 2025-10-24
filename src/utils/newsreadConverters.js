//this function returns back value per enum

export function newsReadToFeEnum(input){

    switch(input){
        case 1:
            return "10%"
        case 2: 
            return "25%"
        case 3:
            return "50%"
        case 4:
            return "75%"
        case 5:
            return "100%"
        case 0:
            return "0%"
    }

        
}

export const newsReadEnum={
    0:newsReadToFeEnum(0),
    1:newsReadToFeEnum(1),
    2:newsReadToFeEnum(2),
    3:newsReadToFeEnum(3),
    4:newsReadToFeEnum(4),
    5:newsReadToFeEnum(5)
}

