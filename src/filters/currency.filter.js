export default function currencyFilter(value, currency = 'UAH') {
    console.log(new Intl.NumberFormat('ru-RU', {
        style: 'currency',
        currency: currency
    }))
    console.log(value)
    return new Intl.NumberFormat('ru-RU', {
        style: 'currency',
        currency: currency
    }).format(value)
}
