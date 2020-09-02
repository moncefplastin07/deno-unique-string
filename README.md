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

### With commend line
if you need generate ```Uniue string``` and display it dirctly in commend line or store it as environment variable you can install this package

```shell
$ deno install --allow-env --allow-read --allow-write --name=uniquestring https://deno.land/x/uniquestring/cli.ts
```
display the ```unique string``` directly in the command line

```shell
$ uniquestring // unique string (64 character by default)
```

```shell
$ uniquestring --length=32 // unique string (32 character)
```
```shell
$ uniquestring --length=32 --to-dotenv // unique string (32 character stor as 'SECRET_KEY' by default)
```
```/.env```
```env
# is random value (32 character)
SECRET_KEY = 6evxpgvpnWufZ2dCiYyE1dsb8v72p22S
```
unique string (32 character stor as 'SECRET_KEY' by default)
```shell
$ uniquestring --length=32 --to-dotenv=SECRET_ID
```
```/.env```
```env
# is random value (32 character)
SECRET_ID = 6evxpgvpnWufZ2dCiYyE1dsb8v72p22S
```