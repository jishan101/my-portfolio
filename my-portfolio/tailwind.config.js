module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./styles/**/*.css",
    ],
    theme: {
        extend: {
            colors: {
                "back-color": "var(--back-color)",
                "action-color": "var(--action-color)",
                "primary-color": "var(--primary-color)",
                "secondary-color": "var(--secondary-color)",
            },
            fontFamily: {
                valencia: ["valencia"],
                // "cera-round-pro": ["cera-round-pro", "cera-round-pro-thin", "cera-round-pro-light", "cera-round-pro-medium", "cera-round-pro-bold", "cera-round-pro-black"],
                "cera-round-pro": ["Cera Round Pro"],
                "league-spartan": ['"League Spartan"', "sans-serif"],
                quicksand: ["Quicksand", "sans-serif"],
                bebas: ['"Bebas Neue"', "cursive"],
            },
        },
    },
    plugins: [],
}
