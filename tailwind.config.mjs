/** @type {import('tailwindcss').Config} */
export default {
    content:[
        './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
        './node_modules/flowbite/**/*.js'
    ],
    theme:{
        extend:{
            colors:{
                primary:{
                    '50':'#fef6ee',
                    '100':'#fcebd8',
                    '200':'#f8d2b0',
                    '300':'#f3b27e',
                    '400':'#ed884a',
                    '500':'#ea7132',
                    '600':'#da501c',
                    '700':'#b53c19',
                    '800':'#90311c',
                    '900':'#742b1a',
                    '950':'#3f130b',
                },
            },
            fontFamily:{
                poppins:[ 'Poppins', 'sans-serif' ],
            },
        },
    },
    plugins:[
        require('flowbite/plugin'),
        require('@tailwindcss/typography'),
    ],
};
