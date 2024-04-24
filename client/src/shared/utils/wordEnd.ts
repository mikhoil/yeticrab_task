export function wordEnd(num: number) {
    if (num % 10 === 1 && num !== 11) {
        return 'заявка';
    }
    if (
        [2, 3, 4].indexOf(num % 10) > -1 &&
        [12, 13, 14].indexOf(num % 100) === -1
    ) {
        return 'заявки';
    }
    return 'заявок';
}
