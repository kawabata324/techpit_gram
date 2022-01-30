<script setup>
import {  ref } from "vue";
import {
  FbxModel,
  Camera,
  Renderer,
  Scene,
  AmbientLight,
} from "troisjs";

const renderer = ref(null);
const model = ref(null);

const onReady = () => {
    renderer.value.onBeforeRender(() => {
    model.value.o3d.rotation.x += 0.01;
  });
};

</script>

<template>
  <div>
    <Renderer ref="renderer" orbit-ctrl resize="window">
      <Camera :position="{ z: 1 }" />
      <Scene background="black">
        <AmbientLight />
        <FbxModel
          ref="model"
          :rotation="{ y: Math.PI / 4, z: Math.PI / 4 }"
          :scale="{ x: 2, y: 2, z: 2 }"
          src="src/models/RubikCube.fbx"
          @load="onReady"
        />
      </Scene>
    </Renderer>
  </div>
</template>
