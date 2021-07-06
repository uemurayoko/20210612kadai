for (let i = 1; i <= 100; i++){
    if(i%2!=0){
        continue;
    }
    if(i%3===0 && i%5===0){
        console.log(i + "回　換毛期で犬がアホ毛でモコモコモコモコ");
    }
    else if(i%3===0){
        console.log(i + "回　アホ")
    }
    else if(i%5===0) {
            console.log(i + "回　犬")
    }
    else console.log(i +"回")
}
