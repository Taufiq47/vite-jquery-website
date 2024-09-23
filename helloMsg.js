import $ from "jquery"

export const nilaiTeknik = (element) => {
    const nilai = ["Zenioritas", "Zolidaritas", "Loyalitaz"]
    let count = 0

    element.click(() => {
        $('.nilai').text(nilai[count]);
        count = (count + 1) % nilai.length;
    });
}