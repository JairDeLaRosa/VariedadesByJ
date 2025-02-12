export function capitalizeFirstLetter(str) {
    if (!str) return ""; // Maneja cadenas vacías
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

