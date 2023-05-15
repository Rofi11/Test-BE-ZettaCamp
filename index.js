/**
 * Direction:
 * Find maximum number of words from given sentences.
 *
 * Expected:
 * 23
 */

// siapakan variabel soal yang kana di hitung
    // ada 3
const sentences = [
    'Mauris ultricies sed sapien eget malesuada. Suspendisse et aliquet odio, id ultrices erat. Praesent vehicula erat nulla. Aliquam a lorem urna. Donec.',
    'Duis at tellus et ex bibendum pellentesque sed in nibh. Sed aliquet, diam id mollis facilisis, massa metus accumsan elit, at mattis magna.',
    'Sed non nibh quam. Pellentesque eget ultrices diam. Aliquam diam justo, consectetur ac dui lobortis, vestibulum bibendum lorem. Sed porta pulvinar.',
];


// buat function
function FindMaxWord(sentences) {
    // 1.siapkan variabel untuk menampung jumlah kata
    let maxWords = 0;

    // 2. loop untuk mencari tau yang paling banyak word nya
    for (let i = 0; i < sentences.length; i++) {
        // split dulu dan masukan kedalam variabel
        let words = sentences[i].split(" ")
        // hitung length nya
        let wordLength = words.length
        // buat kondisi untuk mencari yang terbesar
        if(maxWords < wordLength){
            maxWords = wordLength
        }
    }
    // 3. kembalikan nilai
    return maxWords;
}

console.log(FindMaxWord(sentences));