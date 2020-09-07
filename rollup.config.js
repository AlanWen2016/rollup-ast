import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import json from 'rollup-plugin-json';


export default {
    input: 'index.js',
    output: [{
        file: 'dist/dist.cjs.js',
        name: 'cjs_test',
        format: 'umd'
    }
    ],
    plugins: [
        // resolve({
        //     jsnext: true,
        //     main: true,
        //     browser: true
        // }),
        commonjs(),
        json()
    ]
}