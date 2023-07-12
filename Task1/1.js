// Просим пользователя ввести температуру в градусах Цельсия
const celsius = prompt("Введите температуру в градусах Цельсия:");

// Преобразуем введенное значение в число
const celsiusValue = parseFloat(celsius);

// Вычисляем температуру в градусах Фаренгейта
const fahrenheit = (9 / 5) * celsiusValue + 32;

// Округляем значение до одной десятой
const roundedFahrenheit = fahrenheit.toFixed(1);

// Выводим сообщение с результатом
alert(`Цельсий: ${celsiusValue}, Фаренгейт: ${roundedFahrenheit}`);
