const ones = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
const tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
const scales = ["", "thousand", "million", "billion", "trillion"];

function numberToWords(num) {
    if (num < 0 || num > 999999999999) {
        throw new Error("Number out of range");
    }
    if (num === 0) return "zero";

    function convertBelowThousand(n) {
        let result = "";
        if (n >= 100) {
            result += ones[Math.floor(n / 100)] + " hundred";
            n %= 100;
            if (n) result += " ";
        }
        if (n >= 20) {
            result += tens[Math.floor(n / 10)];
            if (n % 10) result += "-" + ones[n % 10];
        } else if (n > 0) {
            result += ones[n];
        }
        return result;
    }

    let chunks = [];
    let scaleIndex = 0;
    while (num > 0) {
        let chunk = num % 1000;
        if (chunk > 0) {
            let chunkWords = convertBelowThousand(chunk);
            if (scales[scaleIndex]) {
                chunkWords += " " + scales[scaleIndex];
            }
            chunks.unshift(chunkWords);
        }
        num = Math.floor(num / 1000);
        scaleIndex++;
    }
    return chunks.join(" ").replace(/\s+/g, " ").trim();
}
