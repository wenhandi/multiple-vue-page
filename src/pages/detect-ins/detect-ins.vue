<template>
  <div id="app">
    <!-- 屏幕检测 -->
    <screen></screen>
    <qr-code></qr-code>
    <qr-code></qr-code>
    <screen></screen>
    <qr-code></qr-code>
    <qr-code></qr-code>
    <qr-code></qr-code>
  </div>
</template>

<script>
import screen from "components/detect-ins/screen";
import qrCode from "components/detect-ins/qrCode";
export default {
  name: "app",
  components: { screen, qrCode, qrCode, qrCode, qrCode, qrCode, }
};
</script>

<style>
#app {
  font-size: 18px;
  margin-left: 40px;
  margin-right: 40px;
}
.ins-tip{
  font-size: 14px;
  color: #777777;
}
.hor-center {
  text-align: center;
}
.ins-img{
  width: 100%;
}
.between-flex{
  display: flex;
  justify-content: space-between;
}
.box-49{
  width: 49%;
}
.margin-b-30{
  margin-bottom: 30px;
}
.part{
  margin-bottom: 80px;
}
</style>
