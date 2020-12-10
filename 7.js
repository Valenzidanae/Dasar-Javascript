let siswa = [
    { nama_depan: "Jack", nama_belakang: "Ma"},
    { nama_depan: "Jonny", nama_belakang: "English"},
    { nama_depan: "Zayn", nama_belakang: "Malik"}
]

siswa.map(
    (sis, index) => {
        console.log(sis.nama_depan + " " + sis.nama_belakang);
    }
)