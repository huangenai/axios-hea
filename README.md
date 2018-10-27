# axios-hea
Simple encapsulation of Axios,Easy to use in vue

- [Documentation](https://www.cnblogs.com/huangenai/p/9760039.html)

## Installation
```shell
npm install axios
npm install es6-promise
```

## important

```javascript

main.js

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import promise from 'es6-promise'
import http from "./utils/axios-hea";
import promise from 'es6-promise'

promise.polyfill();
//Axios in use, dealing with compatibility issues in android lower versions

Vue.prototype.$http = http;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");

```

## Usage
``` javascript
<template>
  <div class="hello">
   hello wordk
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  methods: {
    async TestPost() {
      try {
        const res = await this.$http.post("/api/login", {
          account: "huangenai",
          password:"123456"
        });
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    },
    async TestGet() {
      this.$http
        .get("/price")
        .then(res => {
          console.log(res);
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  mounted() {
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>

```

## important hint 
You must set the api address and header 

```javascript
axios.defaults.baseURL = "you api address";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.post["Accept"] = "application/json;charset=UTF-8";
axios.defaults.timeout = 50000;
```

If you package your project into android apk, be sure to register axios, add this

```javascript
promise.polyfill()
```


## more
Please see this document
- [vue axios 简单封装以及思考](https://www.cnblogs.com/huangenai/p/9760039.html)
- [axios 安卓低版本兼容性处理](https://www.cnblogs.com/huangenai/p/9830233.html)

## License
MIT
