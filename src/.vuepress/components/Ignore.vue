<template>
<script>
  function setCookie(cName, cValue, expDays) {
    let date = new Date();
    date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
  }
console.log("ignore");
  setCookie('ignore', true, 365);
</script>
</template>

<script>
export default {
  name: "Ignore"
}
</script>
