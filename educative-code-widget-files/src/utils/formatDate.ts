type dateConfig = {
    year: 'numeric' | '2-digit'
    month: 'numeric' | '2-digit' | 'long' | 'narrow' | 'short'
    day: 'numeric' | '2-digit'
}

export const formatDate = (date: string) => {
    const dateObject = new Date(date);
    const config: dateConfig = {
        year:  'numeric',
        month: 'long',
        day:   '2-digit'
    };

    const dateTimeFormat = new Intl.DateTimeFormat('default', config);

    const [
        { value: month },
        { value: literal0 },
        { value: day },
        { value: literal1 },
        { value: year }
    ] = dateTimeFormat.formatToParts(dateObject);

    return `${month} ${day}, ${year}`;
}
