export function getFormattedDateTime(dateTime: number) {
    return new Date(dateTime).toLocaleDateString('ru-RU', {
        hour: 'numeric',
        minute: 'numeric',
    });
}
