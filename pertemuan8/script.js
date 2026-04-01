//fungsi untuk memuat Data dari session storage dan menampilkannya
 function displayGuest(){
    const guestListUI = document.getElementById('guestList');
    guestListUI.innerHTML = ''; //reset tampilan list

    //mengambil data dari session storage, jika kosong buat array baru
    let guest = JSON.parse(sessionStorage.getItem('guest')) || [];

    guests.forEach((guest)=> {
        let li = document.createElement('li');
        li.textContent = guest;
        guestListUI.appendChild(li);
    });
 }
 
//fungsi untuk menambahkan data
function addGuest() {
    const input = document.getElementById('guestInput');
    const guestName = input.value;
    if(guestName === ''){
        alert('nama tidak boleh kosong');
        return;
    }
    
    //ambil data lama
    let guest = JSON.parse(sessionStorage.getItem('guest')) || [];
    guest.push(guestName);

    //simpan kembali ke storage dalam bentuk string
    sessionStorage.setIte('guest', JSON.stringify(guest));
    //bersijkan input dan perbarui tampilan
    input.value = '';
    displayGuest();

    //fungsi untuk menghapus semua data 
    function clearList(){
        if(confirm('Hapus Semua data di sesi ini?')){
            sessionStorage.removeItem('guest');
            displayGuest();
        }
    }

//jalankan fungsi display saay pertama kali dimuat(dibuka)
window.onload = displayGuest
}