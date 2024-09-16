> This is a minimal reproduction of a cjs packaging issue with y-lwwmap

1. Run:
   ```
   pnpm i
   ```
2. Then:
   ```
   pnpm run ts-node
   ```
3. Observe error:

   ```
   /node_modules/.pnpm/ts-node@10.9.2_@types+node@22.5.5_typescript@5.6.2/node_modules/ts-node/dist/index.js:851
               return old(m, filename);
                      ^
   Error [ERR_REQUIRE_ESM]: require() of ES Module /node_modules/.pnpm/y-lwwmap@0.1.9/node_modules/y-lwwmap/dist/LWWMap.js from /index.ts not supported.
   LWWMap.js is treated as an ES module file as it is a .js file whose nearest parent package.json contains "type": "module" which declares all .js files in that package scope as ES modules.
   Instead either rename LWWMap.js to end in .cjs, change the requiring code to use dynamic import() which is available in all CommonJS modules, or change "type": "module" to "type": "commonjs" in /node_modules/.pnpm/y-lwwmap@0.1.9/node_modules/y-lwwmap/package.json to treat all .js files as CommonJS (using .mjs for all ES modules instead).

       at require.extensions.<computed> [as .js] (/node_modules/.pnpm/ts-node@10.9.2_@types+node@22.5.5_typescript@5.6.2/node_modules/ts-node/dist/index.js:851:20)
       at TracingChannel.traceSync (node:diagnostics_channel:315:14)
       at Object.<anonymous> (/index.ts:27:20) {
     code: 'ERR_REQUIRE_ESM'
   }
   ```
