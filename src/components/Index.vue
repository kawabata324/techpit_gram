<script setup>
import {
  Box,
  Camera,
  LambertMaterial,
  PointLight,
  Renderer,
  Scene,
  Sphere,
  BasicMaterial,
  Texture,
} from "troisjs";
import { onMounted, ref } from "vue";

const renderer = ref(null);
const box = ref(null);
const sphere = ref(null);

onMounted(() => {
  renderer.value.onBeforeRender(() => {
    box.value.mesh.rotation.x += 0.01;
    sphere.value.group.rotation.y += 0.01;
  });
});
</script>
<template>
  <div class="black">
    <Renderer resize="window" orbit-ctrl ref="renderer" alpha >
      <Camera :position="{ z: 10 }" />
      <Scene>
        <PointLight :position="{ y: 50, z: 50 }" />
        <Box ref="box" :rotation="{ y: Math.PI / 4, z: Math.PI / 4 }">
          <BasicMaterial>
            <Texture src="src/assets/link.png" refraction :refraction-ratio="0.95" />
          </BasicMaterial>
        </Box>
        <Sphere
          ref="sphere"
          :position="{ x: -10, y: -10, z: -10 }"
          :radius="10"
        >
          <BasicMaterial>
            <Texture src="src/assets/splash-bg.jpeg" refraction :refraction-ratio="0.95" />
          </BasicMaterial>
        </Sphere>
      </Scene>
    </Renderer>
  </div>
</template>
<style scoped>
.black{
  background-color: black;
}
</style>
