/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            container: {
                center: true,
                padding: "2rem",
                screens: {
                    "2xl": "800px",
                },
            },
            keyframes: {
                "text-dash": {
                    from: {
                        "stroke-dashoffset": 0,
                    },
                    to: {
                        "stroke-dashoffset": 20,
                    },
                },
            },
            animation: {
                "text-dash": "text-dash 4s infinite linear",
            },
            colors: {
                foreground: "#ffffff",
                "muted-foreground": "#dedede",
            },
        },
    },
    plugins: [],
};
