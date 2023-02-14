type Mods = Record<string, boolean | string>;

// Функция для удобного комбинирования классов
export function classNames(cls: string, mods: Mods = {}, additional: string[] = []): string {
    return [
        cls,
        ...additional.filter(Boolean),
        ...Object.entries(mods)
            // Оставляем элементы со значением true
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            .filter(([_, value]) => Boolean(value))
            .map(([className]) => className)
    ]
        .join(" ");
}
