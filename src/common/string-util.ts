export type CharsetName = 'Uppercase' | 'Lowercase' | 'Numbers' | 'Symbols';

export const charsetNames: CharsetName[] = ['Uppercase', 'Lowercase', 'Numbers', 'Symbols'];


export function generatePassword(charsets: Set<CharsetName>, length: number, excludeSimilar: boolean, excludeSymbols: boolean): string {
    let candidates = '';
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+~`|}{[]:;?><,./-=';

    if (charsets.has('Uppercase')) {
        candidates += uppercase;
    }
    if (charsets.has('Lowercase')) {
        candidates += lowercase;
    }
    if (charsets.has('Numbers')) {
        candidates += numbers;
    }
    if (charsets.has('Symbols')) {
        candidates += symbols;
    }

    if (excludeSimilar) {
        candidates = candidates.replace(/[ilLI|`oO0]/g, '');
    }

    if (excludeSymbols) {
        candidates = candidates.replace(/[!@#$%^&*()_+~`|}{[\]:;?><,./-]/g, '');
    }

    let passwd = '';
    for (let i = 0; i < length; i++) {
        passwd += candidates.charAt(Math.floor(Math.random() * candidates.length));
    }

    return passwd;
}
