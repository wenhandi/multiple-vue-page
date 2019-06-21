<template>
  <div id="app">
    <!-- 屏幕检测 -->
    <screen></screen>
    <qr-code></qr-code>
    <qr-code></qr-code>
    <bind></bind>
    <cargo-way></cargo-way>
    <lock></lock>
    <light></light>
    <camera></camera>
    <gravity></gravity>
    <cold></cold>
    <result></result>
  </div>
</template>

<script>
import screen from "components/detect-ins/screen";
import qrCode from "components/detect-ins/qrCode";
import bind from "components/detect-ins/bind";
import net from "components/detect-ins/net";
import cargoWay from "components/detect-ins/cargoWay";
import lock from "components/detect-ins/lock";
import light from "components/detect-ins/light";
import camera from "components/detect-ins/camera";
import gravity from "components/detect-ins/gravity";
import cold from "components/detect-ins/cold";
import result from "components/detect-ins/result";
export default {
  name: "app",
  components: { screen, qrCode, bind, net, cargoWay, lock, light, camera, gravity, cold, result},
  data(){
    insList: []
  },
  methods: {
    passAll(){
      wx.miniProgram.navigateBack()
    }
  }
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
