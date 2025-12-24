/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: '#5526DB',       // Exact purple from design
                lightprimary: '#C9B8FF',  // Light purple button
                graybtn: '#A1A1A1',       // Login button
                dotbg: '#FBB040',         // Yellow dots
                textsecondary: '#6B6B6B', // Subtitle gray
            },
            fontFamily: {
                sans: ['Poppins', 'sans-serif'], // Common in such designs (matches bold/regular)
            },
            borderRadius: {
                'xl': '12px',
                '2xl': '20px',
            }
        },
    },
    plugins: [],
}