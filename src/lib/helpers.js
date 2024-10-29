/**
 * Capitalize the first character of the string and the next word after a space.
 *
 * @param {string} s - The input string.
 * @returns {string} The modified string.
 */
export function capitalizeWord(s) {
    return s.split(' ').map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
}

// console.log(capitalizeWord("hello word"))