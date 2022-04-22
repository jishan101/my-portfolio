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
                "league-spartan": ['"League Spartan"', "sans-serif"],
                quicksand: ["Quicksand", "sans-serif"],
                bebas: ['"Bebas Neue"', "cursive"],
            },
            boxShadow: {
                card: "1px 1px 4px 2px rgba(2,12,27,0.7)",
            },
        },
    },
    plugins: [],
}
