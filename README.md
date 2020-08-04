# Usag
```js
import { uniqueString } from "https://deno.land/x/uniquestring/mod.ts";

// as default he return 10 random characters
console.log(uniqueString()) // vSmLQc9zKi


/**
 Or
 You can pass the number of characters you want as argument like this Examples
*/

console.log(uniqueString(5)) // BwuX6
console.log(uniqueString(7)) // v60bK3N
console.log(uniqueString(12)) // NzbiH2hsa46s

// Note: all this results is randomly, Which means that you may not get the same results if you run the same code
```