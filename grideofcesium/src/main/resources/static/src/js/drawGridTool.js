
var DrawGridTool = (function () {
    function _() {
    }
    _.addMap = function (idString) {
        var viewer = new Cesium.Viewer(idString, {
            sceneMode: Cesium.SceneMode.SCENE2D,//设置初始场景模式为2D
            animation: false,//是否创建动画小器件，左下角仪表
            baseLayerPicker: false,//是否显示图层选择器
            fullscreenButton: false,//是否显示全屏按钮
            geocoder: false,//是否显示geocoder小器件，右上角查询按钮
            homeButton: false,//是否显示Home按钮
            infoBox: false,//是否显示信息框
            sceneModePicker: false,//是否显示3D/2D选择器
            selectionIndicator: false,//是否显示选取指示器组件
            timeline: false,//是否显示时间轴
            selectionIndicator: false,
            infoBox: false,
            navigationHelpButton: false,//是否显示右上角的帮助按钮
            //scene3DOnly : true,//如果设置为true，则所有几何图形以3D模式绘制以节约GPU资源
            clock: new Cesium.Clock(),//用于控制当前时间的时钟对象
            selectedImageryProviderViewModel: undefined,//当前图像图层的显示模型，仅baseLayerPicker设为true有意义
            imageryProviderViewModels: Cesium.createDefaultImageryProviderViewModels(),//可供BaseLayerPicker选择的图像图层ProviderViewModel数组
            selectedTerrainProviderViewModel: undefined,//当前地形图层的显示模型，仅baseLayerPicker设为true有意义
            terrainProviderViewModels: Cesium.createDefaultTerrainProviderViewModels(),//可供BaseLayerPicker选择的地形图层ProviderViewModel数组
            imageryProvider: new Cesium.UrlTemplateImageryProvider({
                url: "https://www.google.cn/maps/vt?lyrs=s&x={x}&y={y}&z={z}"
            })
        });
        // 取消双击事件
        viewer.cesiumWidget.screenSpaceEventHandler.removeInputAction(Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK);
        //隐藏logo
        viewer._cesiumWidget._creditContainer.style.display = "none";
        //设置初始位置
        viewer.camera.setView({
            destination: Cesium.Cartesian3.fromDegrees(108.50, 33.50, 10000000)
        });
        screenChangedlistter(viewer);
    };
    return _;
})();
