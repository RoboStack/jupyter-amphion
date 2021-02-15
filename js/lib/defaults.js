
var ArrowOptionsModelDefaults =     {
        _model_module: "jupyter_amphion",
        _model_module_version: "^0.1.0",
        _model_name: "ArrowOptionsModel",
        head_length: 0.3,
        head_radius: 0.1,
        shaft_length: 1.0,
        shaft_radius: 0.05,
    }
    
    

var AxesOptionsModelDefaults =     {
        _model_module: "jupyter_amphion",
        _model_module_version: "^0.1.0",
        _model_name: "AxesOptionsModel",
        axes_length: 1.0,
        axes_radius: 0.1,
    }
    
    

var FlatArrowOptionsModelDefaults =     {
        _model_module: "jupyter_amphion",
        _model_module_version: "^0.1.0",
        _model_name: "FlatArrowOptionsModel",
        arrow_length: 0.3,
    }
    
    

var GridModelDefaults =     {
        _model_module: "jupyter_amphion",
        _model_module_version: "^0.1.0",
        _model_name: "GridModel",
        _view_module: "jupyter_amphion",
        _view_module_version: "^0.1.0",
        _view_name: "GridView",
        cell_size: 0.5,
        color: "#0181c4",
        num_cells: 20,
    }
    
    

var ImageModelDefaults =     {
        _model_module: "jupyter_amphion",
        _model_module_version: "^0.1.0",
        _model_name: "ImageModel",
        _view_module: "jupyter_amphion",
        _view_module_version: "^0.1.0",
        _view_name: "ImageView",
        queue_size: 1,
        ros: undefined,
        topic: "",
    }
    
    

var LaserScanModelDefaults =     {
        _model_module: "jupyter_amphion",
        _model_module_version: "^0.1.0",
        _model_name: "LaserScanModel",
        _view_module: "jupyter_amphion",
        _view_module_version: "^0.1.0",
        _view_name: "LaserScanView",
        alpha: 1.0,
        color_transformer: "Intensity",
        decay_time: 0,
        flat_color: "#ffffff",
        queue_size: 10,
        ros: undefined,
        selectable: false,
        size: 0.05,
        style: "Squares",
        topic: "",
    }
    
    

var MapModelDefaults =     {
        _model_module: "jupyter_amphion",
        _model_module_version: "^0.1.0",
        _model_name: "MapModel",
        _view_module: "jupyter_amphion",
        _view_module_version: "^0.1.0",
        _view_name: "MapView",
        alpha: 1.0,
        color_scheme: "map",
        draw_behind: false,
        ros: undefined,
        topic: "",
    }
    
    

var MarkerModelDefaults =     {
        _model_module: "jupyter_amphion",
        _model_module_version: "^0.1.0",
        _model_name: "MarkerModel",
        _view_module: "jupyter_amphion",
        _view_module_version: "^0.1.0",
        _view_name: "MarkerView",
        namespaces: {},
        queue_size: 1,
        ros: undefined,
        topic: "",
    }
    
    

var MarkerArrayModelDefaults =     {
        _model_module: "jupyter_amphion",
        _model_module_version: "^0.1.0",
        _model_name: "MarkerArrayModel",
        _view_module: "jupyter_amphion",
        _view_module_version: "^0.1.0",
        _view_name: "MarkerArrayView",
        namespaces: {},
        queue_size: 1,
        ros: undefined,
        throttle_rate: 50,
        topic: "",
    }
    
    

var OdometryModelDefaults =     {
        _model_module: "jupyter_amphion",
        _model_module_version: "^0.1.0",
        _model_name: "OdometryModel",
        _view_module: "jupyter_amphion",
        _view_module_version: "^0.1.0",
        _view_name: "OdometryView",
        alpha: 1.0,
        angle_tolerance: 0.1,
        arrow_options: undefined,
        axes_options: undefined,
        color: "#ff0000",
        flat_arrow_options: undefined,
        keep: 100,
        position_tolerance: 0.1,
        ros: undefined,
        topic: "",
        type_attr: "Arrow",
    }
    
    

var PathModelDefaults =     {
        _model_module: "jupyter_amphion",
        _model_module_version: "^0.1.0",
        _model_name: "PathModel",
        _view_module: "jupyter_amphion",
        _view_module_version: "^0.1.0",
        _view_name: "PathView",
        alpha: 1.0,
        color: "#ffffff",
        ros: undefined,
        topic: "",
    }
    
    

var PointCloudModelDefaults =     {
        _model_module: "jupyter_amphion",
        _model_module_version: "^0.1.0",
        _model_name: "PointCloudModel",
        _view_module: "jupyter_amphion",
        _view_module_version: "^0.1.0",
        _view_name: "PointCloudView",
        message_type: "sensor_msgs/PointCloud2",
        ros: undefined,
        topic: "",
    }
    
    

var PolygonModelDefaults =     {
        _model_module: "jupyter_amphion",
        _model_module_version: "^0.1.0",
        _model_name: "PolygonModel",
        _view_module: "jupyter_amphion",
        _view_module_version: "^0.1.0",
        _view_name: "PolygonView",
        ros: undefined,
        topic: "",
    }
    
    

var PoseModelDefaults =     {
        _model_module: "jupyter_amphion",
        _model_module_version: "^0.1.0",
        _model_name: "PoseModel",
        _view_module: "jupyter_amphion",
        _view_module_version: "^0.1.0",
        _view_name: "PoseView",
        alpha: 1.0,
        arrow_options: undefined,
        axes_options: undefined,
        color: "#ff0000",
        ros: undefined,
        topic: "",
        type_attr: "Arrow",
    }
    
    

var PoseArrayModelDefaults =     {
        _model_module: "jupyter_amphion",
        _model_module_version: "^0.1.0",
        _model_name: "PoseArrayModel",
        _view_module: "jupyter_amphion",
        _view_module_version: "^0.1.0",
        _view_name: "PoseArrayView",
        alpha: 1.0,
        arrow_options: undefined,
        axes_options: undefined,
        color: "#ff0000",
        flat_arrow_options: undefined,
        ros: undefined,
        topic: "",
        type_attr: "Arrow",
    }
    
    

var ROSModelDefaults =     {
        _model_module: "jupyter_amphion",
        _model_module_version: "^0.1.0",
        _model_name: "ROSModel",
        url: "ws://10.91.1.111:9090",
    }
    
    

var RobotModelDefaults =     {
        _model_module: "jupyter_amphion",
        _model_module_version: "^0.1.0",
        _model_name: "RobotModel",
        _view_module: "jupyter_amphion",
        _view_module_version: "^0.1.0",
        _view_name: "RobotView",
        description: "robot_description",
        packages: {},
        ros: undefined,
    }
    
    

var TfViewerModelDefaults =     {
        _model_module: "jupyter_amphion",
        _model_module_version: "^0.1.0",
        _model_name: "TfViewerModel",
        _view_module: "jupyter_amphion",
        _view_module_version: "^0.1.0",
        _view_name: "TfViewerView",
        background: "#000000",
        objects: [],
        ros: undefined,
    }
    
    

var Viewer2DModelDefaults =     {
        _model_module: "jupyter_amphion",
        _model_module_version: "^0.1.0",
        _model_name: "Viewer2DModel",
        _view_module: "jupyter_amphion",
        _view_module_version: "^0.1.0",
        _view_name: "Viewer2DView",
        background: "#000000",
        objects: [],
    }
    
    

var Viewer3DModelDefaults =     {
        _model_module: "jupyter_amphion",
        _model_module_version: "^0.1.0",
        _model_name: "Viewer3DModel",
        _view_module: "jupyter_amphion",
        _view_module_version: "^0.1.0",
        _view_name: "Viewer3DView",
        background: "#000000",
        objects: [],
    }
    
    

module.exports = {
    ArrowOptionsModelDefaults: ArrowOptionsModelDefaults,
    AxesOptionsModelDefaults: AxesOptionsModelDefaults,
    FlatArrowOptionsModelDefaults: FlatArrowOptionsModelDefaults,
    GridModelDefaults: GridModelDefaults,
    ImageModelDefaults: ImageModelDefaults,
    LaserScanModelDefaults: LaserScanModelDefaults,
    MapModelDefaults: MapModelDefaults,
    MarkerArrayModelDefaults: MarkerArrayModelDefaults,
    MarkerModelDefaults: MarkerModelDefaults,
    OdometryModelDefaults: OdometryModelDefaults,
    PathModelDefaults: PathModelDefaults,
    PointCloudModelDefaults: PointCloudModelDefaults,
    PolygonModelDefaults: PolygonModelDefaults,
    PoseArrayModelDefaults: PoseArrayModelDefaults,
    PoseModelDefaults: PoseModelDefaults,
    ROSModelDefaults: ROSModelDefaults,
    RobotModelDefaults: RobotModelDefaults,
    TfViewerModelDefaults: TfViewerModelDefaults,
    Viewer2DModelDefaults: Viewer2DModelDefaults,
    Viewer3DModelDefaults: Viewer3DModelDefaults,
}

    
