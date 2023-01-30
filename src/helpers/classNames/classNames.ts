type Mods = Record<string, boolean | string>;

// Функция для удобного комбинирования классов
export function classNames(cls: string, mods: Mods, additional: string[]): string {
    return [
        cls,
        ...additional,
        ...Object.entries(mods)
            // Оставляем элементы со значением true
            .filter(([className, value]) => Boolean(value))
            .map(([className]) => className)
    ]
        .join(' ');
}
