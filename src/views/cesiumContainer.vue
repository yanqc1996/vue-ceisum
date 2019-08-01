<template>
    <div id="cesiumContainer"></div>
</template>

<script>
    // 哪个组件需要 在哪里引入 也可以在main.js全局引入
    /*
    全局：
      import Cesium from 'cesium/Cesium'
      // noinspection ES6UnusedImports
        import widget from 'cesium/Widgets/widgets.css'
        在全局的mounted阶段：
        this.$nextTick(() => {
        let viewer = new Cesium.Viewer('cesiumContainer')
      })
    */

    // 局部组件引用
    import Cesium from 'cesium/Cesium'
    // noinspection ES6UnusedImports
    import widget from 'cesium/Widgets/widgets.css'
    export default {
        name: "cesiumContainer",
        mounted () {
            this.$nextTick(() => {
                this.cesiumInit()
            })
        },
        methods: {
            cesiumInit(){
                let viewer = new Cesium.Viewer('cesiumContainer', {
                    terrainProvider: Cesium.createWorldTerrain(),
                    scene3DOnly: true,//仅渲染3D部分，减少GPU内存
                    selectionIndicator: false,//选择指示器
                    baseLayerPicker: false,//基本图层选择器
                });
            }
        }
    }
</script>

<style scoped>

</style>
