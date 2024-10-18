import $ from "jquery"

export const nilaiTeknik = (element) => {
    const nilai = ["Selamat", "Pagi", "Siang", "Sore", "Malam"]
    let count = 0

    element.click(() => {
        $('.nilai').text(nilai[count]);
        count = (count + 1) % nilai.length;
    });
}
