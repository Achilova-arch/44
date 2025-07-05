let mevalar=["Shaftoli","Olma","Anor","Mango","Uzum"]
console.log(mevalar);
alert("Boshlanishidagi array uzunligi:" +mevalar.length)
let javob=confirm("Sizning arrayingiz ichidan bittasini o'chirmoqchimiz?")
if(javob==ture){
    mevalar.pop();
    alert("Array uzunligi:" +mevalar.length)
}else{
    alert("Array uzunligi:" +mevalar.length)
}
console.log(mevalar);
