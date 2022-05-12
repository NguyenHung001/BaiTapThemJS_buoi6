function soNguyenTo(){
    let n = Number(document.getElementById('n').value);
    let kq = document.getElementById('result')
    let SNT = '';
    let dem = 0;
    if(n <= 1){
        alert('Nhập n lớn hơn 1 !')
    }else{
        for(var i = 2 ; i <= n ; i++){
            for(var j = 1 ; j <= i ; j++){
                if(i % j == 0){
                    dem += 1;
                }
            }
            if(dem ==  2){
                SNT += ' '+i;
            }
            dem = 0;
        }
    }
    document.getElementById('result').innerHTML = SNT;
}