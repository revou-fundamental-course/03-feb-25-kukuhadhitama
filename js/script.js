//file javascript

console.log('Javascript is working');

function validateForm() {
    let input = document.getElementById('main-input')
    console.log(input.value);

    if(input.value == '') {
        alert('silahkan isi data terlebih dahulu'); 
    } else {
        console.log('berhasil di eksekusi'); 
        alert('selamat anda berhasil, semoga terbantu')
    }
        document.getElementById('main-result').value =  (input.value*1.8)+32;
        document.getElementById('cara-konversi').value = input.value
        console.log('berhasil di eksekusi')


///Algoritma flow
    console.log('berhasil di eksekusi');

    console.log(document.getElementById('main-input'));
}

