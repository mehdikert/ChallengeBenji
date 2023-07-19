let r1 = 0 , r2 = 0 , r3 = 0 , r4= 0 ;

function note(i){
    let etoiles = document.querySelectorAll('.container  .star') ;
    if(i <= 5){
        for(let x = i ; x < 5 ; x++){
            etoiles.item(x).classList.remove('YellowStar') ;
            etoiles.item(x).classList.add('WhiteStar') ;
            r1 = 0 ;
        }
        for(let y = 0 ; y < i ; y++){
            etoiles.item(y).classList.add('YellowStar') ;
            etoiles.item(y).classList.remove('WhiteStar') ;
            r1++ ;
        }
    }else if(i <=10){
        for(let x = i ; x < 10 ; x++){
            etoiles.item(x).classList.remove('YellowStar') ;
            etoiles.item(x).classList.add('WhiteStar') ;
            r2 = 0 ;
        }
        for(let y = 5 ; y < i ; y++){
            etoiles.item(y).classList.add('YellowStar') ;
            etoiles.item(y).classList.remove('WhiteStar') ;
            r2++ ;
        }
    }else if(i <= 15){
        for(let x = i ; x < 15 ; x++){
            etoiles.item(x).classList.remove('YellowStar') ;
            etoiles.item(x).classList.add('WhiteStar') ;
            r3 = 0 ;
        }
        for(let y = 10 ; y < i ; y++){
            etoiles.item(y).classList.add('YellowStar') ;
            etoiles.item(y).classList.remove('WhiteStar') ;
            r3++ ;
        }
    }else if (i <= 20){
        for(let x = i ; x <20 ; x++){
            etoiles.item(x).classList.remove('YellowStar') ;
            etoiles.item(x).classList.add('WhiteStar') ;
            r4 = 0 ;
        }
        for(let y = 15 ; y < i ; y++){
            etoiles.item(y).classList.add('YellowStar') ;
            etoiles.item(y).classList.remove('WhiteStar') ;
         r4++ ;
        }
    }

    let r = Math.round((r1+r2+r3+r4)/4) ;
    let etoile = document.querySelectorAll('.etoile')
    for(let x = 0 ; x <= r ; x++){
        etoile.item(x).classList.add('YellowStar') ;
    }

}