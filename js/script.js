//file javascript

console.log('Javascript is working');

function validateForm() {
    let input = document.getElementById('main-input')
    console.log(input.value);

    if(input.value == '') {
        alert('silahkan isi data pada kolom ini');
    } else {
        console.log('berhasil di eksekusi'); 
        alert('selamat anda berhasil, semoga terbantu')
    }
    ///Algoritma flow
    console.log('berhasil di eksekusi');

    console.log(document.getElementById('main-input'));
}

