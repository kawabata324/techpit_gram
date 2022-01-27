<script setup>
import {
  Box,
  Camera,
  LambertMaterial,
  PointLight,
  Renderer,
  Scene,
  Group,
} from "troisjs";
import { onMounted, ref } from "vue";

const renderer = ref(null);
const rubikCube = ref(null);
onMounted(() => {
  renderer.value.onBeforeRender(() => {
    rubikCube.value.group.rotation.x += 0.01;
  });
});
</script>
<template>
  <Renderer resize="window" orbit-ctrl ref="renderer">
    <Camera :position="{ z: 10 }" />
    <Scene background="white">
      <PointLight :position="{ y: 50, z: 50 }" />
      <Group ref="rubikCube"   :rotation="{ y: Math.PI / 4, z: Math.PI / 4 }">
        <Box :scale="{ x: 1, y: 1, z: 1 }" :position="{ x: 0, y: 0, z: 0 }">
          <LambertMaterial />
        </Box>
        <Box :scale="{ x: 1, y: 1, z: 1 }" :position="{ x: -1.1, y: 0, z: 0 }">
          <LambertMaterial />
        </Box>
        <Box :scale="{ x: 1, y: 1, z: 1 }" :position="{ x: 1.1, y: 0, z: 0 }">
          <LambertMaterial />
        </Box>
        <Box :scale="{ x: 1, y: 1, z: 1 }" :position="{ x: 0, y: -1.1, z: 0 }">
          <LambertMaterial />
        </Box>
        <Box :scale="{ x: 1, y: 1, z: 1 }" :position="{ x: 0, y: 1.1, z: 0 }">
          <LambertMaterial />
        </Box>
        <Box
          :scale="{ x: 1, y: 1, z: 1 }"
          :position="{ x: -1.1, y: -1.1, z: 0 }"
        >
          <LambertMaterial />
        </Box>
        <Box :scale="{ x: 1, y: 1, z: 1 }" :position="{ x: 1.1, y: 1.1, z: 0 }">
          <LambertMaterial />
        </Box>
        <Box
          :scale="{ x: 1, y: 1, z: 1 }"
          :position="{ x: -1.1, y: 1.1, z: 0 }"
        >
          <LambertMaterial />
        </Box>
        <Box
          :scale="{ x: 1, y: 1, z: 1 }"
          :position="{ x: 1.1, y: -1.1, z: 0 }"
        >
          <LambertMaterial />
        </Box>
      </Group>
    </Scene>
  </Renderer>
</template>
