module.exports = {
    mode: 'jit',
    purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            spacing: {
                600: '600px',
                450: '450px',
                150: '150px',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
