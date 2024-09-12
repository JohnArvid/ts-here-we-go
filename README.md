# ts-here-we-go
trying out ts

## Installera TypeScript, Rollup och relevanta plugins genom npm
<pre>npm install --save-dev typescript rollup @rollup/plugin-typescript rollup-plugin-terser</pre>

## konfigurera ts: 
<pre>
  {
  "compilerOptions": {
    "module": "ESNext",
    "target": "ESNext",
    "moduleResolution": "Node",
    "esModuleInterop": true,
    "strict": true
  }
}
</pre>

## konfigurera rollup: 
<pre>
  import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/index.ts',
  output: {
    file: 'dist/bundle.js',
    format: 'es',
    plugins: [terser()]
  },
  plugins: [
    typescript()
  ]
};

</pre>

## Kör byggnadsprocessen
<pre>npx rollup -c</pre>
