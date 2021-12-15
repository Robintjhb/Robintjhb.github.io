System.register("chunks:///_virtual/spline-node-wrapper.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './spline-node.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _createClass, _defineProperty, cclegacy, _decorator, Vec3, Vec2, SplineNode;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _createClass = module.createClass;
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Vec3 = module.Vec3;
      Vec2 = module.Vec2;
    }, function (module) {
      SplineNode = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _temp;

      cclegacy._RF.push({}, "04ae8GydjtEIptiC5odtVpt", "spline-node-wrapper", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property,
          type = _decorator.type;
      var SplineNodeWrapper = exports('default', (_dec = ccclass('SplineNodeWrapper'), _dec2 = type(SplineNode), _dec3 = type(Vec3), _dec4 = type(Vec3), _dec5 = type(Vec2), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function () {
        function SplineNodeWrapper() {
          _defineProperty(this, "node", null);
        }

        SplineNodeWrapper.create = function create(node) {
          if (!node) {
            debugger;
          }

          var wrapper = new SplineNodeWrapper();
          wrapper.node = node;
          return wrapper;
        };

        _createClass(SplineNodeWrapper, [{
          key: "splineNode",
          get: function get() {
            return this.node;
          }
        }, {
          key: "position",
          get: function get() {
            if (!this.node) {
              return Vec3.ZERO;
            }

            return this.node.position;
          },
          set: function set(value) {
            if (this.node) {
              this.node.position = value;
            }
          }
        }, {
          key: "direction",
          get: function get() {
            if (!this.node) {
              return Vec3.ZERO;
            }

            return this.node.direction;
          },
          set: function set(value) {
            if (this.node) {
              this.node.direction = value;
            }
          }
        }, {
          key: "scale",
          get: function get() {
            if (!this.node) {
              return Vec2.ONE;
            }

            return this.node.scale;
          },
          set: function set(value) {
            if (this.node) {
              this.node.scale = value;
            }
          }
        }, {
          key: "roll",
          get: function get() {
            if (!this.node) {
              return 0;
            }

            return this.node.roll;
          },
          set: function set(value) {
            if (this.node) {
              this.node.roll = value;
            }
          }
        }]);

        return SplineNodeWrapper;
      }(), _temp), (_applyDecoratedDescriptor(_class2.prototype, "splineNode", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "splineNode"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "position", [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "position"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "direction", [_dec4], Object.getOwnPropertyDescriptor(_class2.prototype, "direction"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "scale", [_dec5], Object.getOwnPropertyDescriptor(_class2.prototype, "scale"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "roll", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "roll"), _class2.prototype)), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/spline-node-controller.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './npm.ts', './index.ts', './utils.ts', './controller.ts', './types.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, _defineProperty, _assertThisInitialized, cclegacy, Color, Vec3, cce, createLineShape, getNodeWorldPostion, Controller, SplineMoveType;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _defineProperty = module.defineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      Color = module.Color;
      Vec3 = module.Vec3;
    }, function (module) {
      cce = module.cce;
    }, null, function (module) {
      createLineShape = module.createLineShape;
      getNodeWorldPostion = module.getNodeWorldPostion;
    }, function (module) {
      Controller = module.default;
    }, function (module) {
      SplineMoveType = module.SplineMoveType;
    }],
    execute: function () {
      cclegacy._RF.push({}, "055a8DTQf1L86joS8tyMPw+", "spline-node-controller", undefined);

      var SPLINE_NODE_SIZE = 10;
      var SplineNodeController = exports('default', /*#__PURE__*/function (_Controller) {
        _inheritsLoose(SplineNodeController, _Controller);

        function SplineNodeController(rootNode) {
          var _this;

          _this = _Controller.call(this, rootNode) || this;

          _defineProperty(_assertThisInitialized(_this), "_node", null);

          _defineProperty(_assertThisInitialized(_this), "_splineNode", null);

          _defineProperty(_assertThisInitialized(_this), "_directionLineShape", null);

          _defineProperty(_assertThisInitialized(_this), "positionNode", null);

          _defineProperty(_assertThisInitialized(_this), "directionNode", null);

          _defineProperty(_assertThisInitialized(_this), "invDirectionNode", null);

          _this.initShape();

          return _this;
        }

        var _proto = SplineNodeController.prototype;

        _proto.initShape = function initShape() {
          this.createShapeNode('BoxController');
          var cube = cce.gizmos.ControllerUtils.cube(SPLINE_NODE_SIZE, SPLINE_NODE_SIZE, SPLINE_NODE_SIZE, Color.YELLOW);
          cube.parent = this.shape;
          this.positionNode = cube;
          this.initHandle(cube, SplineMoveType.Position);
          cube = cce.gizmos.ControllerUtils.cube(SPLINE_NODE_SIZE, SPLINE_NODE_SIZE, SPLINE_NODE_SIZE, Color.YELLOW);
          cube.parent = this.shape;
          this.directionNode = cube;
          this.initHandle(cube, SplineMoveType.Direction);
          cube = cce.gizmos.ControllerUtils.cube(SPLINE_NODE_SIZE, SPLINE_NODE_SIZE, SPLINE_NODE_SIZE, Color.YELLOW);
          cube.parent = this.shape;
          this.invDirectionNode = cube;
          this.initHandle(cube, SplineMoveType.InvDirection);
          this._directionLineShape = createLineShape('Direction Line', Color.RED);
          this._directionLineShape.parent = this.shape;
          this.hide();
        };

        _proto.onShow = function onShow() {
          this.registerCameraMovedEvent();
          this.hideDirection();
        };

        _proto.onHide = function onHide() {
          this.unregisterCameraMoveEvent();
        };

        _proto.showDirection = function showDirection() {
          this.directionNode.active = true;
          this.invDirectionNode.active = true;
          this._directionLineShape.active = true;
          this.updateLineMesh();
        };

        _proto.hideDirection = function hideDirection() {
          this.directionNode.active = false;
          this.invDirectionNode.active = false;
          this._directionLineShape.active = false;
        };

        _proto.setSplineNode = function setSplineNode(node, splineNode) {
          this._splineNode = splineNode;
          this._node = node;
          this.adjustControllerSize();
          this.shape.setWorldPosition(getNodeWorldPostion(node, this._splineNode.position));
          this.directionNode.setWorldPosition(getNodeWorldPostion(node, this._splineNode.direction));
          this.invDirectionNode.setWorldPosition(getNodeWorldPostion(node, this._splineNode.invDirection));
          this.updateLineMesh();
          this.updateController();
        };

        _proto.updateLineMesh = function updateLineMesh() {
          this._directionLineShape.updatePoints([this.directionNode.position, this.invDirectionNode.position]);
        };

        _proto.getSplineNodeWorldPosition = function getSplineNodeWorldPosition() {
          return this.positionNode.getWorldPosition(new Vec3());
        };

        _proto.getSplineNodeWorldDirection = function getSplineNodeWorldDirection() {
          return this.directionNode.getWorldPosition(new Vec3());
        };

        _proto.getSplineNodeWorldInvDirection = function getSplineNodeWorldInvDirection() {
          return this.invDirectionNode.getWorldPosition(new Vec3());
        };

        return SplineNodeController;
      }(Controller));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/terrain-sculpt.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './utils.ts', './mathf.ts', './mesh-vertex.ts', './curve-sample.ts', './spline.ts', './spline-util-renderer.ts', './type.ts', './animation-curve.ts', './scatter-volume.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _defineProperty, _createForOfIteratorHelperLoose, _createClass, cclegacy, _decorator, Vec2, Vec3, CurveRange, Terrain, clamp, node2nodePos, getNodeWorldPostion, pointPolygonMinDistXZ, MeshVertex, CurveSample, Spline, SplineUtilRenderer, VolumeType, UAnimationCurve, ScatterVolume;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _defineProperty = module.defineProperty;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Vec2 = module.Vec2;
      Vec3 = module.Vec3;
      CurveRange = module.CurveRange;
      Terrain = module.Terrain;
      clamp = module.clamp;
    }, function (module) {
      node2nodePos = module.node2nodePos;
      getNodeWorldPostion = module.getNodeWorldPostion;
    }, function (module) {
      pointPolygonMinDistXZ = module.pointPolygonMinDistXZ;
    }, function (module) {
      MeshVertex = module.default;
    }, function (module) {
      CurveSample = module.default;
    }, function (module) {
      Spline = module.default;
    }, function (module) {
      SplineUtilRenderer = module.default;
    }, function (module) {
      VolumeType = module.VolumeType;
    }, function (module) {
      UAnimationCurve = module.default;
    }, function (module) {
      ScatterVolume = module.ScatterVolume;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _temp;

      cclegacy._RF.push({}, "075aejG0z5GtrxYCQTb/NXl", "terrain-sculpt", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property,
          type = _decorator.type;
      var tempSample = new CurveSample();
      var tempVert = new MeshVertex();
      var tempVec2 = new Vec2();
      var tempVec3 = new Vec3();
      var tempMin = new Vec3();
      var tempMax = new Vec3();
      var TerrainSculpt = exports('TerrainSculpt', (_dec = ccclass('TerrainSculpt'), _dec2 = type(VolumeType), _dec3 = type(VolumeType), _dec4 = type(CurveRange), _dec5 = type(CurveRange), _dec6 = type(ScatterVolume), _dec7 = type(ScatterVolume), _dec8 = type(Terrain), _dec9 = type(Terrain), _dec10 = property({
        editorOnly: true
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_SplineUtilRenderer) {
        _inheritsLoose(TerrainSculpt, _SplineUtilRenderer);

        function TerrainSculpt() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _SplineUtilRenderer.call.apply(_SplineUtilRenderer, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "_volumeType", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "_lineWidth", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "_lineSmoothWidth", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "_lineSmootCurve", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "_heightOffset", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "_volumes", _descriptor6, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "_terrain", _descriptor7, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "dirtyWhenSplineMoved", true);

          _initializerDefineProperty(_assertThisInitialized(_this), "_originTerrainData", _descriptor8, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "_clearCacheOldTerrainData", false);

          return _this;
        }

        var _proto = TerrainSculpt.prototype;

        _proto.testBlocks = function testBlocks(x, y, changelist) {
          for (var _iterator = _createForOfIteratorHelperLoose(this._terrain.getBlocks()), _step; !(_step = _iterator()).done;) {
            var i = _step.value;
            var rect = i.getRect();
            tempVec2.set(x, y);

            if (!rect.contains(tempVec2)) {
              continue;
            }

            if (!changelist.includes(i)) {
              changelist.push(i);
            }
          }
        };

        _proto.calcVolumeHeight = function calcVolumeHeight(pos, h) {
          var volumes = this.volumes;

          for (var i = 0; i < volumes.length; i++) {
            if (!volumes[i]) continue;

            if (volumes[i].includePos(pos)) {
              h *= volumes[i].volume;
            }
          }

          return h;
        };

        _proto.compute = function compute() {
          var splineCurve = this.splineCurve;
          var terrain = this.terrain;
          if (!splineCurve || !terrain) return;
          var changelist = new Array();
          var originTerrainData = this._originTerrainData;
          var sculptPositionMap = {};

          if (this._volumeType === VolumeType.Line) {
            var lineSmoothWidth = this.lineSmoothWidth;
            var lineWidth = this.lineWidth;
            var maxDist = lineWidth + lineSmoothWidth;
            var vertexCount = terrain.vertexCount;
            var smoothCurve = this.lineSmootCurve;
            var tileSize = terrain.tileSize;
            splineCurve.getBounding(tempMin, tempMax);
            tempMin.x -= maxDist;
            tempMin.z -= maxDist;
            tempMax.x += maxDist;
            tempMax.z += maxDist;
            node2nodePos(this.spline.node, this.terrain.node, tempMin, tempMin);
            node2nodePos(this.spline.node, this.terrain.node, tempMax, tempMax);
            var x1 = tempMin.x;
            var y1 = tempMin.z;
            var x2 = tempMax.x;
            var y2 = tempMax.z;
            x1 = Math.floor(x1 / tileSize);
            y1 = Math.floor(y1 / tileSize);
            x2 = Math.floor(x2 / tileSize);
            y2 = Math.floor(y2 / tileSize);

            if (x1 > vertexCount[0] - 1 || x2 < 0) {
              return;
            }

            if (y1 > vertexCount[1] - 1 || y2 < 0) {
              return;
            }

            x1 = clamp(x1, 0, vertexCount[0] - 1);
            y1 = clamp(y1, 0, vertexCount[1] - 1);
            x2 = clamp(x2, 0, vertexCount[0] - 1);
            y2 = clamp(y2, 0, vertexCount[1] - 1);
            var linePoints = splineCurve.getPoints();
            var heightOffset = this.heightOffset;

            for (var j = y1; j <= y2; j++) {
              for (var i = x1; i <= x2; i++) {
                tempVec3.set(i * tileSize, 0, j * tileSize);
                node2nodePos(this.terrain.node, this.spline.node, tempVec3, tempVec3);
                var res = pointPolygonMinDistXZ(tempVec3, linePoints);
                var dist = res.dist;
                if (dist > maxDist) continue;
                var t = clamp((res.index - 1 + res.t) / (linePoints.length - 1), 0, 1) * (this.splineCurve instanceof Spline ? this.spline.curves.length : 1);
                splineCurve.getSample(t, tempSample);
                tempVert.position.set(0, 0, dist);
                tempSample.getBent(tempVert, tempVert);
                node2nodePos(this.spline.node, this.terrain.node, tempVert.position, tempVert.position);
                var h = tempVert.position.y;

                if (dist > lineWidth) {
                  var _t = (dist - lineWidth) / lineSmoothWidth;

                  h *= smoothCurve.evaluate(_t, 0.5);
                }

                getNodeWorldPostion(this.terrain.node, tempVert.position, tempVert.position);
                h = this.calcVolumeHeight(tempVert.position, h);
                h += heightOffset;
                var key = i + "_" + j;
                if (sculptPositionMap[key]) continue;

                if (!originTerrainData[key]) {
                  var normal = terrain.getNormal(i, j);
                  originTerrainData[key] = [terrain.getHeight(i, j), normal];
                }

                sculptPositionMap[key] = true;
                terrain.setHeight(i, j, h);
                this.testBlocks(i, j, changelist);
              }
            }
          }

          for (var _key2 in sculptPositionMap) {
            var pos = _key2.split('_');

            var _i = Number(pos[0]);

            var _j = Number(pos[1]);

            var n = terrain._calcNormal(_i, _j);

            terrain._setNormal(_i, _j, n);
          }

          for (var _key3 in originTerrainData) {
            if (sculptPositionMap[_key3]) continue;

            var _pos = _key3.split('_');

            var _i2 = Number(_pos[0]);

            var _j2 = Number(_pos[1]);

            var value = originTerrainData[_key3];
            terrain.setHeight(_i2, _j2, value[0]);

            terrain._setNormal(_i2, _j2, value[1]);

            this.testBlocks(_i2, _j2, changelist);
            delete originTerrainData[_key3];
          }

          for (var _i3 = 0, _changelist = changelist; _i3 < _changelist.length; _i3++) {
            var _i4 = _changelist[_i3];

            _i4._updateHeight();
          }
        };

        _createClass(TerrainSculpt, [{
          key: "volumeType",
          get: function get() {
            return this._volumeType;
          },
          set: function set(value) {
            this._volumeType = value;
            this.dirty = true;
          }
        }, {
          key: "lineWidth",
          get: function get() {
            return this._lineWidth;
          },
          set: function set(value) {
            this._lineWidth = value;
            this.dirty = true;
          }
        }, {
          key: "lineSmoothWidth",
          get: function get() {
            return this._lineSmoothWidth;
          },
          set: function set(value) {
            this._lineSmoothWidth = value;
            this.dirty = true;
          }
        }, {
          key: "lineSmootCurve",
          get: function get() {
            return this._lineSmootCurve;
          },
          set: function set(value) {
            this._lineSmootCurve = value;

            if (value) {
              value.curve.postWrapMode = 1; // Once
            }

            this.dirty = true;
          }
        }, {
          key: "heightOffset",
          get: function get() {
            return this._heightOffset;
          },
          set: function set(value) {
            this._heightOffset = value;
            this.dirty = true;
          }
        }, {
          key: "volumes",
          get: function get() {
            return this._volumes;
          },
          set: function set(value) {
            this._volumes = value;
            this.dirty = true;
          }
        }, {
          key: "terrain",
          get: function get() {
            return this._terrain;
          },
          set: function set(value) {
            this._terrain = value;
            this._originTerrainData = {};
            this.dirty = true;
          }
        }, {
          key: "clearCacheOldTerrainData",
          get: function get() {
            return this._clearCacheOldTerrainData;
          },
          set: function set(value) {
            this._originTerrainData = {};
            this.terrain._asset = this.terrain._asset;
            this._clearCacheOldTerrainData = value;
            this.dirty = true;
          }
        }]);

        return TerrainSculpt;
      }(SplineUtilRenderer), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_volumeType", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return VolumeType.Line;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "volumeType", [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "volumeType"), _class2.prototype), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_lineWidth", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 2;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "lineWidth", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "lineWidth"), _class2.prototype), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_lineSmoothWidth", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 2;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "lineSmoothWidth", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "lineSmoothWidth"), _class2.prototype), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_lineSmootCurve", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return UAnimationCurve.easeInOut(0, 1, 1, 0);
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "lineSmootCurve", [_dec5], Object.getOwnPropertyDescriptor(_class2.prototype, "lineSmootCurve"), _class2.prototype), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "_heightOffset", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "heightOffset", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "heightOffset"), _class2.prototype), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "_volumes", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "volumes", [_dec7], Object.getOwnPropertyDescriptor(_class2.prototype, "volumes"), _class2.prototype), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "_terrain", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "terrain", [_dec9], Object.getOwnPropertyDescriptor(_class2.prototype, "terrain"), _class2.prototype), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "_originTerrainData", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return {};
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "clearCacheOldTerrainData", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "clearCacheOldTerrainData"), _class2.prototype)), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/spritemove.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _inheritsLoose, _defineProperty, _assertThisInitialized, cclegacy, _decorator, systemEvent, SystemEvent, Vec3, find, UITransformComponent, Component;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _defineProperty = module.defineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      systemEvent = module.systemEvent;
      SystemEvent = module.SystemEvent;
      Vec3 = module.Vec3;
      find = module.find;
      UITransformComponent = module.UITransformComponent;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class, _temp;

      cclegacy._RF.push({}, "0bdbfag13xA7bFS5hKcAa7P", "spritemove", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      /**
       * Predefined variables
       * Name = Spritemove
       * DateTime = Thu Dec 09 2021 16:14:21 GMT+0800 (中国标准时间)
       * Author = binfly
       * FileBasename = spritemove.ts
       * FileBasenameNoExtension = spritemove
       * URL = db://assets/ui组件库/拖拽ui移动/spritemove.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/zh/
       *
       */

      var Spritemove = exports('Spritemove', (_dec = ccclass('Spritemove'), _dec(_class = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Spritemove, _Component);

        function Spritemove() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _defineProperty(_assertThisInitialized(_this), "_touch", void 0);

          _defineProperty(_assertThisInitialized(_this), "_event", void 0);

          return _this;
        }

        var _proto = Spritemove.prototype;

        _proto.start = function start() {
          systemEvent.on(SystemEvent.EventType.TOUCH_MOVE, this.onTouchMove, this);
        };

        _proto.onTouchMove = function onTouchMove(touch, event) {
          this._touch = touch;
          this._event = event; //坐标

          var _pos = new Vec3(0, 0, 0);

          var _tempOut = new Vec3(0, 0, 0);

          var uiPos = touch.getUILocation();

          _pos.set(uiPos.x, uiPos.y, 0);

          var uitransform = find("Canvas").getComponent(UITransformComponent); // 将触摸到的 ui 世界坐标转换到相对 canvas 下的本地坐标

          console.log(uiPos);
          uitransform.convertToNodeSpaceAR(_pos, _tempOut); // ui 同步this.node.setPosition(_tempOut);

          console.log(_tempOut);
          this.node.setPosition(_tempOut);
        };

        return Spritemove;
      }(Component), _temp)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/source-mesh.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './mesh-utility.ts', './mesh-vertex.ts'], function (exports) {
  'use strict';

  var _createClass, _defineProperty, cclegacy, gfx, Quat, Vec3, Vec4, Mesh, MeshUtility, MeshVertex, MeshVertexFlags;

  return {
    setters: [function (module) {
      _createClass = module.createClass;
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      gfx = module.gfx;
      Quat = module.Quat;
      Vec3 = module.Vec3;
      Vec4 = module.Vec4;
      Mesh = module.Mesh;
    }, function (module) {
      MeshUtility = module.default;
    }, function (module) {
      MeshVertex = module.default;
      MeshVertexFlags = module.MeshVertexFlags;
    }],
    execute: function () {
      cclegacy._RF.push({}, "0eba73fr/BFAqywv0rcR6s6", "source-mesh", undefined);

      var SourceMesh = exports('default', /*#__PURE__*/function () {
        SourceMesh.build = function build(mesh) {
          return new SourceMesh(mesh);
        };

        var _proto = SourceMesh.prototype;

        _proto.getVertices = function getVertices(subMeshIndex) {
          if (subMeshIndex === void 0) {
            subMeshIndex = 0;
          }

          if (!this._vertices[subMeshIndex]) this.buildData();
          return this._vertices[subMeshIndex];
        };

        _proto.getTriangles = function getTriangles(subMeshIndex) {
          if (subMeshIndex === void 0) {
            subMeshIndex = 0;
          }

          if (!this._vertices[subMeshIndex]) this.buildData();
          return this._triangles[subMeshIndex];
        };

        _proto.getMinX = function getMinX(subMeshIndex) {
          if (subMeshIndex === void 0) {
            subMeshIndex = 0;
          }

          if (!this._vertices[subMeshIndex]) this.buildData();
          return this._minX[subMeshIndex];
        };

        _proto.getLengthX = function getLengthX(subMeshIndex) {
          if (subMeshIndex === void 0) {
            subMeshIndex = 0;
          }

          if (!this._vertices[subMeshIndex]) this.buildData();
          return this._lengthX[subMeshIndex];
        };

        _proto.subCount = function subCount() {
          return this.mesh ? this.mesh.subMeshCount : 0;
        } /// <summary>
        /// constructor is private to enable fluent builder pattern.
        /// Use <see cref="Build(Mesh)"/> to obtain an instance.
        /// </summary>
        /// <param name="mesh"></param>
        ;

        function SourceMesh(mesh) {
          _defineProperty(this, "translation", new Vec3());

          _defineProperty(this, "rotation", new Quat());

          _defineProperty(this, "scale", new Vec3());

          _defineProperty(this, "_mesh", void 0);

          _defineProperty(this, "_vertices", []);

          _defineProperty(this, "_triangles", []);

          _defineProperty(this, "_minZ", [0]);

          _defineProperty(this, "_lengthZ", [0]);

          _defineProperty(this, "_minX", [0]);

          _defineProperty(this, "_lengthX", [0]);

          _defineProperty(this, "_minY", [0]);

          _defineProperty(this, "_lengthY", [0]);

          if (mesh instanceof Mesh) {
            this._mesh = mesh;
            this.translation = new Vec3();
            this.rotation = new Quat();
            this.scale = new Vec3();
          } else {
            this._mesh = mesh._mesh;
            this.translation = mesh.translation.clone();
            this.rotation = mesh.rotation.clone();
            this.scale = mesh.scale.clone();
          }
        }

        _proto.translate = function translate(x, y, z) {
          this.reset();

          if (typeof x === 'number') {
            this.translation.set(x, y, z);
          } else {
            this.translation.set(x);
          }

          return this;
        };

        _proto.rotate = function rotate(rotation) {
          this.reset();
          this.rotation.set(rotation);
          return this;
        };

        _proto.scaleRes = function scaleRes(x, y, z) {
          this.reset();

          if (typeof x === 'number') {
            this.scale.set(x, y, z);
          } else {
            this.scale.set(x);
          }

          return this;
        };

        _proto.reset = function reset() {
          if (this._vertices.length > 0) {
            this._vertices.forEach(function (vs) {
              vs.forEach(function (v) {
                MeshVertex.pool.put(v);
              });
            });

            this._vertices.length = 0;
          }

          this._triangles.length = 0;
        };

        _proto.buildData = function buildData() {
          var subMeshCount = this.mesh.subMeshCount;

          for (var si = 0; si < subMeshCount; si++) {
            // if the mesh is reversed by scale, we must change the culling of the faces by inversing all triangles.
            // the mesh is reverse only if the number of resersing axes is impair.
            var reversed = this.scale.x < 0;
            if (this.scale.y < 0) reversed = !reversed;
            if (this.scale.z < 0) reversed = !reversed;

            if (reversed) {
              this._triangles[si] = MeshUtility.getReversedTriangles(this._mesh, si);
            } else {
              if (!this._triangles[si]) this._triangles[si] = [];

              this._mesh.copyIndices(si, this._triangles[si]);
            } // we transform the source mesh vertices according to rotation/translation/scale


            var vertices = this._vertices[si] = this._vertices[si] || [];

            var positions = this._mesh.readAttribute(si, gfx.AttributeName.ATTR_POSITION);

            var normals = this._mesh.readAttribute(si, gfx.AttributeName.ATTR_NORMAL);

            var tangents = this._mesh.readAttribute(si, gfx.AttributeName.ATTR_TANGENT);

            var hasTangents = tangents && tangents.length > 0;

            var uvs = this._mesh.readAttribute(si, gfx.AttributeName.ATTR_TEX_COORD);

            var hasUvs = uvs && uvs.length > 0;

            var uv1s = this._mesh.readAttribute(si, gfx.AttributeName.ATTR_TEX_COORD1);

            var hasUv1s = uv1s && uv1s.length > 0;

            var colors = this._mesh.readAttribute(si, gfx.AttributeName.ATTR_COLOR);

            var hasColors = colors && colors.length > 0;
            var vertCount = positions.length / 3;
            var i = 0;

            for (; i < vertCount; i++) {
              var flag = MeshVertexFlags.Position | MeshVertexFlags.Normal;
              var transformed = vertices[i];

              if (!transformed) {
                transformed = vertices[i] = MeshVertex.pool.get();
              }

              transformed.position.set(positions[3 * i + 0], positions[3 * i + 1], positions[3 * i + 2]);
              transformed.normal.set(normals[3 * i + 0], normals[3 * i + 1], normals[3 * i + 2]);

              if (hasUvs) {
                transformed.uv.set(uvs[2 * i + 0], uvs[2 * i + 1]);
                flag |= MeshVertexFlags.UV;
              }

              if (hasUv1s) {
                transformed.uv1.set(uv1s[2 * i + 0], uv1s[2 * i + 1]);
                flag |= MeshVertexFlags.UV1;
              }

              if (hasTangents) {
                transformed.tangent.set(tangents[4 * i + 0], tangents[4 * i + 1], tangents[4 * i + 2], tangents[4 * i + 3]);
                flag |= MeshVertexFlags.Tangent;
              }

              if (hasColors) {
                transformed.color.set(colors[4 * i + 0], colors[4 * i + 1], colors[4 * i + 2], colors[4 * i + 3]);
                flag |= MeshVertexFlags.Color;
              } //  apply rotation


              if (!this.rotation.equals(Quat.IDENTITY)) {
                Vec3.transformQuat(transformed.position, transformed.position, this.rotation);
                Vec3.transformQuat(transformed.normal, transformed.normal, this.rotation);

                if (hasTangents) {
                  Vec4.transformQuat(transformed.tangent, transformed.tangent, this.rotation);
                }
              }

              if (!this.scale.equals(Vec3.ONE)) {
                Vec3.multiply(transformed.position, transformed.position, this.scale); // Vec3.multiply(transformed.normal, transformed.normal, this.scale);
                // Vec4.multiply(transformed.tangent, transformed.tangent, this.scale);
              }

              transformed.position.add(this.translation);
              transformed.flag = flag;
            }

            for (; i < vertices.length; i++) {
              if (vertices[i]) {
                MeshVertex.pool.put(vertices[i]);
              }
            }

            vertices.length = vertCount; // find the bounds along x

            this._minX[si] = Number.MAX_SAFE_INTEGER;
            var maxX = -Number.MAX_SAFE_INTEGER;
            this._minY[si] = Number.MAX_SAFE_INTEGER;
            var maxY = -Number.MAX_SAFE_INTEGER;
            this._minZ[si] = Number.MAX_SAFE_INTEGER;
            var maxZ = -Number.MAX_SAFE_INTEGER;

            for (var _i = 0; _i < vertices.length; _i++) {
              var vert = vertices[_i];
              var p = vert.position;
              maxX = Math.max(maxX, p.x);
              this._minX[si] = Math.min(this._minX[si], p.x);
              maxY = Math.max(maxY, p.y);
              this._minY[si] = Math.min(this._minY[si], p.y);
              maxZ = Math.max(maxZ, p.z);
              this._minZ[si] = Math.min(this._minZ[si], p.z);
            }

            this._lengthX[si] = Math.abs(maxX - this._minX[si]);
            this._lengthY[si] = Math.abs(maxY - this._minY[si]);
            this._lengthZ[si] = Math.abs(maxZ - this._minZ[si]);
          }
        };

        _createClass(SourceMesh, [{
          key: "mesh",
          get: function get() {
            return this._mesh;
          }
        }, {
          key: "vertices",
          get: function get() {
            if (!this._vertices[0]) this.buildData();
            return this._vertices[0];
          }
        }, {
          key: "triangles",
          get: function get() {
            if (!this._vertices[0]) this.buildData();
            return this._triangles[0];
          }
        }, {
          key: "minZ",
          get: function get() {
            if (!this._vertices[0]) this.buildData();
            return this._minZ[0];
          }
        }, {
          key: "lengthZ",
          get: function get() {
            if (!this._vertices[0]) this.buildData();
            return this._lengthZ[0];
          }
        }, {
          key: "minX",
          get: function get() {
            if (!this._vertices[0]) this.buildData();
            return this._minX[0];
          }
        }, {
          key: "lengthX",
          get: function get() {
            if (!this._vertices[0]) this.buildData();
            return this._lengthX[0];
          }
        }, {
          key: "minY",
          get: function get() {
            if (!this._vertices[0]) this.buildData();
            return this._minY[0];
          }
        }, {
          key: "lengthY",
          get: function get() {
            if (!this._vertices[0]) this.buildData();
            return this._lengthY[0];
          }
        }]);

        return SourceMesh;
      }());

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/scatter-item.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './type.ts', './source-mesh.ts', './fixed-model-mesh.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _createClass, _initializerDefineProperty, _defineProperty, cclegacy, _decorator, Vec3, Vec4, Mat4, Prefab, ModelComponent, instantiate, Node, Vec2, MeshRenderer, ScatterType, SourceMesh, FixedModelMesh;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _createClass = module.createClass;
      _initializerDefineProperty = module.initializerDefineProperty;
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Vec3 = module.Vec3;
      Vec4 = module.Vec4;
      Mat4 = module.Mat4;
      Prefab = module.Prefab;
      ModelComponent = module.ModelComponent;
      instantiate = module.instantiate;
      Node = module.Node;
      Vec2 = module.Vec2;
      MeshRenderer = module.MeshRenderer;
    }, function (module) {
      ScatterType = module.ScatterType;
    }, function (module) {
      SourceMesh = module.default;
    }, function (module) {
      FixedModelMesh = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp;

      cclegacy._RF.push({}, "10ce4kXixhA/psyIahwT6RE", "scatter-item", undefined);

      var ccclass = _decorator.ccclass,
          type = _decorator.type,
          property = _decorator.property;
      var tempMeshPos = new Vec3();
      var tempMeshNormal = new Vec3();
      var tempMeshTangent = new Vec4();
      var tempArray2 = new Array(2).fill(0);
      var tempArray3 = new Array(3).fill(0);
      var tempArray4 = new Array(4).fill(0);
      var tempMat4 = new Mat4();
      var tempMat4_2 = new Mat4();
      var ScatterItem = exports('default', (_dec = ccclass('ScatterItem'), _dec2 = type(Prefab), _dec3 = type(Prefab), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function () {
        function ScatterItem() {
          _initializerDefineProperty(this, "_prefab", _descriptor, this);

          _initializerDefineProperty(this, "_type", _descriptor2, this);

          _initializerDefineProperty(this, "_volume", _descriptor3, this);

          _defineProperty(this, "_maxCount", 0);

          _defineProperty(this, "_fixedMeshes", []);

          _initializerDefineProperty(this, "_meshStructs", _descriptor4, this);

          _defineProperty(this, "_sourceMesh", null);

          _defineProperty(this, "_updated", false);

          _defineProperty(this, "currentCount", 0);

          _defineProperty(this, "node", null);
        }

        var _proto = ScatterItem.prototype;

        _proto.init = function init(node, maxCount, dataType) {
          this.node = node;
          this._maxCount = maxCount;
          this._type = dataType;
          if (!this.prefab) return; // reset

          this.currentCount = 0;
          this._sourceMesh = null;
          this._fixedMeshes.length = 0;
          var model = this.node.getComponent(ModelComponent);

          if (model) {
            model.destroy();
          }

          var instanceObject = this.node.getComponent('InstanceObject');

          if (instanceObject) {
            instanceObject.destroy();
          }

          this.node.removeAllChildren();
          var tempNode = this._tempNode = instantiate(this.prefab);

          if (dataType === ScatterType.Mesh) {
            tempNode = instantiate(this.prefab);
            tempNode.setPosition(0, 0, 0);
            var tempModel = tempNode.getComponent(ModelComponent) || tempNode.getComponentInChildren(ModelComponent);

            if (tempModel && tempModel.mesh) {
              this._sourceMesh = SourceMesh.build(tempModel.mesh);
              tempModel.node.getWorldRotation(this._sourceMesh.rotation);
              tempModel.node.getWorldPosition(this._sourceMesh.translation);
              tempModel.node.getWorldScale(this._sourceMesh.scale);

              this._sourceMesh.reset();
            }

            var tempMaterials = tempModel && tempModel.sharedMaterials;

            var subMeshCount = this._sourceMesh.subCount();

            this._fixedMeshes.length = 0;
            this._meshStructs.length = 0;

            for (var i = 0; i < subMeshCount; i++) {
              var _node = new Node('ScatterItemModel');

              var _model = _node.addComponent(ModelComponent);

              this._fixedMeshes[i] = FixedModelMesh.create(this._sourceMesh.getVertices(i).length, this._sourceMesh.getTriangles(i).length, _model, this.maxCount);
              this._meshStructs[i] = this._fixedMeshes[i].mesh.struct;
              _model.mesh = this._fixedMeshes[i].mesh;
              _model.shadowCastingMode = tempModel.shadowCastingMode;
              _model.lightmapSettings = tempModel.lightmapSettings;
              var renderingSubMeshes = _model.mesh.renderingSubMeshes;
              var material = tempMaterials[i] || tempMaterials[0];

              for (var j = 0; j < renderingSubMeshes.length; j++) {
                _model.setMaterial(material, j);
              }

              _node.parent = this.node;
            }
          }
        };

        _proto.shiftStructOffset = function shiftStructOffset(offset) {
          var structs = this._meshStructs;

          for (var i = 0; i < structs.length; i++) {
            structs[i].primitives.forEach(function (primitive) {
              return primitive.indexView.offset += offset;
            });
            structs[i].vertexBundles.forEach(function (vertex) {
              return vertex.view.offset += offset;
            });
          }
        };

        _proto.fill = function fill(mat) {
          if (this.currentCount >= this.maxCount || !this.prefab) return false;

          if (this._type === ScatterType.Mesh) {
            this.updateMesh(mat);
          } else if (this._type === ScatterType.Instance) {
            this.updateInstance(mat);
          } else {
            this.updateItem(mat);
          }

          this.currentCount++;
          this._updated = true;
          return true;
        };

        _proto.updateFill = function updateFill() {
          if (!this._updated || !this.prefab) return;

          if (this._type === ScatterType.Mesh) {
            var fixedMeshes = this._fixedMeshes;

            for (var i = 0; i < fixedMeshes.length; i++) {
              fixedMeshes[i].update();
            }
          }

          this._updated = false;
        };

        _proto.endFill = function endFill() {
          if (this._type === ScatterType.Instance) {
            var instanceObject = this.node.getComponent('InstanceObject');

            if (instanceObject) {
              instanceObject.rebuild();
            }
          }
        };

        _proto.updateMesh = function updateMesh(mat) {
          var sourceMesh = this._sourceMesh;
          if (!sourceMesh) return;
          var subCount = sourceMesh.subCount();

          for (var si = 0; si < subCount; si++) {
            var fixedMesh = this._fixedMeshes[si];
            var vertices = sourceMesh.getVertices(si);
            var vertCount = vertices.length;
            var vertOffset = this.currentCount * vertCount;

            for (var i = 0; i < vertCount; i++) {
              var vert = vertices[i];
              var offset = vertOffset + i;
              fixedMesh.writeVertex(offset, 'position', Vec3.toArray(tempArray3, Vec3.transformMat4(tempMeshPos, vert.position, mat)));
              fixedMesh.writeVertex(offset, 'normal', Vec3.toArray(tempArray3, Vec3.transformMat4(tempMeshNormal, vert.position, mat)));
              fixedMesh.writeVertex(offset, 'tangent', Vec4.toArray(tempArray4, Vec4.transformMat4(tempMeshTangent, vert.tangent, mat)));
              fixedMesh.writeVertex(offset, 'uv', Vec2.toArray(tempArray2, vert.uv));
              fixedMesh.writeVertex(offset, 'uv1', Vec2.toArray(tempArray2, vert.uv1));
            }

            var triangles = sourceMesh.triangles;
            var triangleCount = triangles.length;
            var triangleOffset = this.currentCount * triangleCount;

            for (var _i = 0; _i < triangleCount; _i++) {
              fixedMesh.writeIndex(triangleOffset + _i, vertOffset + triangles[_i]);
            }
          }
        };

        _proto.updateItem = function updateItem(mat) {
          var node = instantiate(this.prefab);
          Mat4.multiply(tempMat4, node.worldMatrix, mat);
          node.matrix = tempMat4;
          node.parent = this.node;
        };

        _proto.addInstanceData = function addInstanceData(mat, node, instanceObject) {
          var mr = node.getComponent(MeshRenderer);

          if (mr && mr.mesh && mr.sharedMaterials.length) {
            Mat4.multiply(tempMat4, mat, node.worldMatrix);
            instanceObject.addData(mr, tempMat4);
          }

          var children = node.children;

          for (var i = 0; i < children.length; i++) {
            this.addInstanceData(mat, children[i], instanceObject);
          }
        };

        _proto.updateInstance = function updateInstance(mat) {
          var instanceObject = this.node.getComponent('InstanceObject');

          if (!instanceObject) {
            instanceObject = this.node.addComponent('InstanceObject');
          }

          if (!instanceObject || !this._tempNode) {
            return;
          }

          Mat4.multiply(tempMat4_2, this.node.worldMatrix, mat);
          this.addInstanceData(tempMat4_2, this._tempNode, instanceObject);
        };

        _createClass(ScatterItem, [{
          key: "prefab",
          get: function get() {
            return this._prefab;
          },
          set: function set(value) {
            this._prefab = value;
          }
        }, {
          key: "volume",
          get: function get() {
            return this._volume;
          },
          set: function set(value) {
            this._volume = value;
          }
        }, {
          key: "maxCount",
          get: function get() {
            return this._maxCount;
          }
        }, {
          key: "fixedMeshes",
          get: function get() {
            return this._fixedMeshes;
          }
        }]);

        return ScatterItem;
      }(), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_prefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_type", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return ScatterType.Instance;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_volume", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "prefab", [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "prefab"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "volume", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "volume"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "maxCount", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "maxCount"), _class2.prototype), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_meshStructs", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/videotest.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _inheritsLoose, _defineProperty, _assertThisInitialized, cclegacy, _decorator, renderer, Component;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _defineProperty = module.defineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      renderer = module.renderer;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class, _temp;

      cclegacy._RF.push({}, "1957089hhlBT7QHoPUMGoQN", "videotest", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var Videotest = exports('Videotest', (_dec = ccclass('Videotest'), _dec(_class = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Videotest, _Component);

        function Videotest() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _defineProperty(_assertThisInitialized(_this), "_id", '__cocos_webvideoPlayer__');

          _defineProperty(_assertThisInitialized(_this), "_playing", false);

          _defineProperty(_assertThisInitialized(_this), "_timeupdate", false);

          _defineProperty(_assertThisInitialized(_this), "_copyVideo", false);

          _defineProperty(_assertThisInitialized(_this), "_gl", null);

          _defineProperty(_assertThisInitialized(_this), "_texture", null);

          _defineProperty(_assertThisInitialized(_this), "_video", null);

          _defineProperty(_assertThisInitialized(_this), "_cb_videoOpen", null);

          _defineProperty(_assertThisInitialized(_this), "_cb_videoFirstFrame", null);

          _defineProperty(_assertThisInitialized(_this), "_cb_videoProgress", null);

          _defineProperty(_assertThisInitialized(_this), "_cb_videoFinish", null);

          _defineProperty(_assertThisInitialized(_this), "_cb_videoError", null);

          _defineProperty(_assertThisInitialized(_this), "_cb_videoLoading", null);

          _defineProperty(_assertThisInitialized(_this), "_cb_videoWorking", null);

          _defineProperty(_assertThisInitialized(_this), "_cb_videoFirstFrame_iscall", false);

          _defineProperty(_assertThisInitialized(_this), "__eventListeners", {});

          return _this;
        }

        var _proto = Videotest.prototype; // public constructor() {
        // }

        _proto.start = function start() {// [3]
        } // destroy() {
        //     let cbs: any = this.__eventListeners;
        //     let video = this._video
        //     video.removeEventListener('play', cbs.play, true);
        //     video.removeEventListener('pause', cbs.pause, true);
        //     video.removeEventListener('playing', cbs.pause, true);
        //     video.removeEventListener('canplay', cbs.canplay, true);
        //     video.removeEventListener('canplaythrough', cbs.canplaythrough, true);
        //     video.removeEventListener('suspend', cbs.suspend, true);
        //     video.removeEventListener('ended', cbs.ended, true);
        //     video.removeEventListener('error', cbs.error, true);
        //     video.removeEventListener('loadeddata', cbs.loadeddata, true);
        //     video.removeEventListener('timeupdate', cbs.timeupdate, true);
        //     assetManager.releaseAsset(this._texture)
        //     video.remove()
        // }
        ;

        _proto.update = function update(dt) {
          if (this._copyVideo && this._texture) {
            // cc.log('video.addEventListener _cb_videoProgress:', this._video.currentTime + '/' + this._video.duration)
            this.updateTexture(this._gl, this._texture._texture, this._video); //更新纹理

            this._cb_videoProgress(this._video.currentTime, this._video.duration); //播放进度

          }
        };

        _proto.updateTexture = function updateTexture(gl, texture, video) {
          gl.bindTexture(gl.TEXTURE_2D, texture._glID);
          gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, video);
        };

        _proto.open = function open(url, cb) {
          var _this2 = this;

          this.initTexture(function () {
            _this2._gl = _this2.getGL();
            _this2._video = _this2.setupVideo(url);
            cb && cb(_this2._video.duration);
          });
        };

        _proto.getGL = function getGL() {
          var gl = renderer.device._gl;
          return gl;
        };

        _proto.getTexture = function getTexture() {
          return this._texture;
        };

        _proto.initTexture = function initTexture(cb) {
          var _this3 = this;

          cc.resources.load('shader/video/video_texture', cc.Texture2D, function (err, asset) {
            _this3._texture = asset;
            cb && cb();
          }); // let texture = new cc.renderer.Texture2D(cc.renderer.device, {})
          // return texture;
          // let texture = new cc.Texture2D()
          // return texture;
        };

        _proto.setupVideo = function setupVideo(url) {
          // 1.创建video
          var video = document.createElement('video'); //还是 做的web 页面的video方法 其实我可以拿出其中一部分来 给自己用

          video.volume = 0;
          video.id = this._id;
          video.autoplay = true; // video.muted = true;

          video.loop = false;

          this._bindEvent(video); //事件绑定


          video.src = url;
          video.play();
          return video;
        };

        _proto._bindEvent = function _bindEvent(video) {
          var _this4 = this;

          var cbs = this.__eventListeners;

          var checkReady = function checkReady() {
            if (_this4._playing && _this4._timeupdate) {
              _this4._copyVideo = true;
            }
          };

          cbs.play = function () {
            cc.log('video.addEventListener play');
          };

          cbs.pause = function () {
            cc.log('video.addEventListener pause');
          };

          cbs.playing = function () {
            cc.log('video.addEventListener playing');
            _this4._playing = true;
            checkReady();
          };

          cbs.canplay = function () {
            cc.log('video.addEventListener canplay');
            _this4._cb_videoWorking && _this4._cb_videoWorking();
          };

          cbs.canplaythrough = function () {
            cc.log('video.addEventListener canplaythrough');
          };

          cbs.suspend = function () {
            cc.log('video.addEventListener suspend');
          };

          cbs.ended = function () {
            cc.log('video.addEventListener ended');
            _this4._cb_videoFinish && _this4._cb_videoFinish();
          };

          cbs.error = function () {
            cc.log('video.addEventListener error');
            _this4._cb_videoError && _this4._cb_videoError();
          };

          cbs.loadeddata = function () {
            cc.log('video.addEventListener loadeddata');
            _this4._cb_videoOpen && _this4._cb_videoOpen(true);
          };

          cbs.timeupdate = function () {
            // cc.log('video.addEventListener timeupdate')
            _this4._timeupdate = true;
            checkReady();

            if (_this4._cb_videoFirstFrame && !_this4._cb_videoFirstFrame_iscall) {
              _this4._cb_videoFirstFrame_iscall = true;

              _this4._cb_videoFirstFrame('');
            }
          };

          video.addEventListener('play', cbs.play, true);
          video.addEventListener('pause', cbs.pause, true);
          video.addEventListener('playing', cbs.playing, true);
          video.addEventListener('canplay', cbs.canplay, true);
          video.addEventListener('canplaythrough', cbs.canplaythrough, true);
          video.addEventListener('suspend', cbs.suspend, true);
          video.addEventListener('ended', cbs.ended, true);
          video.addEventListener('error', cbs.error, true);
          video.addEventListener('loadeddata', cbs.loadeddata, true);
          video.addEventListener('timeupdate', cbs.timeupdate, true);
        }
        /**
        * 
        * @param v 
        */
        ;

        _proto.setVolume = function setVolume(v) {
          this._video.volume = v;
        };

        _proto.isPlaying = function isPlaying() {
          return this._playing;
        };

        _proto.isPause = function isPause() {
          return !this._playing;
        };

        _proto.startPlay = function startPlay() {
          this._video.play();
        };

        _proto.resumePlay = function resumePlay() {
          this._video.play();
        };

        _proto.pausePlay = function pausePlay() {
          this._video.pause();
        };

        _proto.stopPlay = function stopPlay() {
          this._video.pause();
        }
        /**
         * 
         * @param time 秒
         */
        ;

        _proto.seekPlay = function seekPlay(time) {
          this._video.currentTime = time;
        }
        /**
         * 打开视频文件成功
         * @param cb return {boolean} true
         */
        ;

        _proto.setVideoOpenCallback = function setVideoOpenCallback(cb) {
          this._cb_videoOpen = cb;
        }
        /**
         * 可以开始渲染第一帧
         * @param cb return {string} shader_key
         */
        ;

        _proto.setVideoFirstFrameCallback = function setVideoFirstFrameCallback(cb) {
          this._cb_videoFirstFrame = cb;
        }
        /**
         * 播放进度
         * @param cb return {process,total}
         */
        ;

        _proto.setVideoProgressCallback = function setVideoProgressCallback(cb) {
          this._cb_videoProgress = cb;
        }
        /**
         * 播放完成
         * @param cb 
         */
        ;

        _proto.setVideoFinishCallback = function setVideoFinishCallback(cb) {
          this._cb_videoFinish = cb;
        }
        /**
         * 播放失败
         * @param cb 
         */
        ;

        _proto.setVideoErrorCallback = function setVideoErrorCallback(cb) {
          this._cb_videoError = cb;
        }
        /**
         * 加载中(开始缓存)
         * @param cb 
         */
        ;

        _proto.setVideoLoadingCallback = function setVideoLoadingCallback(cb) {
          this._cb_videoLoading = cb;
        }
        /**
         * loading结束  开始播放
         * @param cb 
         */
        ;

        _proto.setVideoWorkingCallback = function setVideoWorkingCallback(cb) {
          this._cb_videoWorking = cb;
        };

        return Videotest;
      }(Component), _temp)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/type.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _defineProperty, cclegacy, Enum;

  return {
    setters: [function (module) {
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      Enum = module.Enum;
    }],
    execute: function () {
      exports({
        ScatterType: void 0,
        VolumeType: void 0
      });

      cclegacy._RF.push({}, "33e6exdHldA0LG7DNn25zy1", "type", undefined);

      var ScatterType;

      (function (ScatterType) {
        ScatterType[ScatterType["Mesh"] = 0] = "Mesh";
        ScatterType[ScatterType["Item"] = 1] = "Item";
        ScatterType[ScatterType["Instance"] = 2] = "Instance";
      })(ScatterType || (ScatterType = exports('ScatterType', {})));

      Enum(ScatterType);
      var VolumeInfo = exports('VolumeInfo', function VolumeInfo() {
        _defineProperty(this, "volume", 0);

        _defineProperty(this, "maxCount", 0);

        _defineProperty(this, "count", 0);
      });
      var VolumeType;

      (function (VolumeType) {
        VolumeType[VolumeType["Area"] = 0] = "Area";
        VolumeType[VolumeType["Line"] = 1] = "Line";
      })(VolumeType || (VolumeType = exports('VolumeType', {})));

      Enum(VolumeType);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/sower.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './event.ts', './pool.ts', './spline-util-renderer.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _defineProperty, _createClass, cclegacy, _decorator, Quat, Vec3, Prefab, instantiate, Event, pool, SplineUtilRenderer;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _defineProperty = module.defineProperty;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Quat = module.Quat;
      Vec3 = module.Vec3;
      Prefab = module.Prefab;
      instantiate = module.instantiate;
    }, function (module) {
      Event = module.default;
    }, function (module) {
      pool = module.default;
    }, function (module) {
      SplineUtilRenderer = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _temp;

      cclegacy._RF.push({}, "3c449aeMnlEoqzv7EJdDtvX", "sower", undefined);

      var ccclass = _decorator.ccclass,
          executeInEditMode = _decorator.executeInEditMode,
          _float = _decorator["float"],
          type = _decorator.type,
          _boolean = _decorator["boolean"],
          property = _decorator.property;
      var tempQuat = new Quat();
      var tempBinormal = new Vec3();
      var Sower = exports('default', (_dec = type(Prefab), _dec2 = type(Prefab), ccclass(_class = executeInEditMode(_class = (_class2 = (_temp = /*#__PURE__*/function (_SplineUtilRenderer) {
        _inheritsLoose(Sower, _SplineUtilRenderer);

        function Sower() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _SplineUtilRenderer.call.apply(_SplineUtilRenderer, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "_spacing", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "_spacingRange", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "_scale", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "_scaleRange", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "_rotation", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "_prefab", _descriptor6, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "_translation", _descriptor7, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "_translationRange", _descriptor8, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "onComputedEvent", new Event());

          return _this;
        }

        var _proto = Sower.prototype;

        _proto.compute = function compute() {
          var children = this.generated.children;
          if (this.spacing + this.spacingRange <= 0 || this.prefab == null) return;
          var distance = 0;
          var splineCurve = this.splineCurve;
          var used = 0;

          while (distance <= splineCurve.length) {
            var localXOffset = this.translation.x + Math.random() * this.translationRange.x * Math.sign(this.translation.x) + distance;
            localXOffset = Math.min(localXOffset, splineCurve.length);
            var sample = splineCurve.getSampleAtDistance(localXOffset);
            var node = children[used];

            if (!node) {
              node = instantiate(this.prefab);
              node.parent = this.generated;
            } // apply scale + random


            var rangedScale = this.scale + Math.random() * this.scaleRange;
            rangedScale *= Math.min(sample.scale.x, sample.scale.y);
            node.setScale(rangedScale, rangedScale, rangedScale);
            Quat.fromEuler(tempQuat, this.rotation.x, this.rotation.y, this.rotation.z);
            Quat.multiply(tempQuat, sample.rotation, tempQuat);
            node.setRotation(tempQuat); // move orthogonaly to the spline, according to offset + random

            var zOffset = pool.Vec3.get();
            zOffset = Vec3.transformQuat(zOffset, Vec3.RIGHT, Quat.fromViewUp(tempQuat, sample.tangent, sample.up)).normalize();
            var localZOffset = this.translation.z + Math.random() * this.translationRange.z * Math.sign(this.translation.z);
            localZOffset *= sample.scale.x;
            zOffset.multiplyScalar(localZOffset);
            var yOffset = pool.Vec3.get();
            yOffset.set(sample.transformedUp).normalize();
            var localYOffset = this.translation.y + Math.random() * this.translationRange.y * Math.sign(this.translation.y);
            localYOffset *= sample.scale.y;
            yOffset.multiplyScalar(localYOffset);
            node.position = zOffset.add(yOffset).add(sample.location);
            distance += this.spacing + Math.random() * this.spacingRange;
            used++;
          }

          if (children.length > used) {
            for (var i = children.length - 1; i >= used; i--) {
              children[i].parent = null;
            }
          }

          this.onComputedEvent.invoke();
        };

        _createClass(Sower, [{
          key: "spacing",
          get: function get() {
            return this._spacing;
          },
          set: function set(v) {
            this._spacing = v;
            this.dirty = true;
          }
        }, {
          key: "spacingRange",
          get: function get() {
            return this._spacingRange;
          },
          set: function set(v) {
            this._spacingRange = v;
            this.dirty = true;
          }
        }, {
          key: "scale",
          get: function get() {
            return this._scale;
          },
          set: function set(v) {
            this._scale = v;
            this.dirty = true;
          }
        }, {
          key: "rotation",
          get: function get() {
            return this._rotation;
          },
          set: function set(value) {
            this._rotation = value;
            this.dirty = true;
          }
        }, {
          key: "scaleRange",
          get: function get() {
            return this._scaleRange;
          },
          set: function set(v) {
            this._scaleRange = v;
            this.dirty = true;
          }
        }, {
          key: "translation",
          get: function get() {
            return this._translation;
          },
          set: function set(v) {
            this._translation.set(v);

            this.dirty = true;
          }
        }, {
          key: "translationRange",
          get: function get() {
            return this._translationRange;
          },
          set: function set(v) {
            this._translationRange.set(v);

            this.dirty = true;
          }
        }, {
          key: "prefab",
          get: function get() {
            return this._prefab;
          },
          set: function set(v) {
            this._prefab = v;
            this.generated.removeAllChildren();
            this.dirty = true;
          }
        }]);

        return Sower;
      }(SplineUtilRenderer), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_spacing", [_float], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 10;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_spacingRange", [_float], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_scale", [_float], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_scaleRange", [_float], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "_rotation", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec3();
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "_prefab", [_dec], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "_translation", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec3();
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "_translationRange", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec3();
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "spacing", [_float], Object.getOwnPropertyDescriptor(_class2.prototype, "spacing"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "spacingRange", [_float], Object.getOwnPropertyDescriptor(_class2.prototype, "spacingRange"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "scale", [_float], Object.getOwnPropertyDescriptor(_class2.prototype, "scale"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "rotation", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "rotation"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "scaleRange", [_float], Object.getOwnPropertyDescriptor(_class2.prototype, "scaleRange"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "translation", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "translation"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "translationRange", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "translationRange"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "prefab", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "prefab"), _class2.prototype)), _class2)) || _class) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GraphicsTest.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, _decorator, Graphics, Component;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Graphics = module.Graphics;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "3e844iBwiJGXLT1VNPk099w", "GraphicsTest", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var GraphicsTest = exports('GraphicsTest', (_dec = ccclass('GraphicsTest'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(GraphicsTest, _Component);

        function GraphicsTest() {
          return _Component.apply(this, arguments) || this;
        }

        var _proto = GraphicsTest.prototype;

        _proto.start = function start() {
          this.drawRect();
        };

        _proto.drawRect = function drawRect() {
          var g = this.getComponent(Graphics);
          g.clear();
          g.lineWidth = 10;
          g.fillColor.fromHEX('#ff0000'); // rect

          g.rect(-250, 0, 200, 100); // round rect

          g.roundRect(50, 0, 200, 100, 20);
          g.stroke();
          g.fill();
        };

        return GraphicsTest;
      }(Component)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/fixed-model-mesh.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './fixed-buffer.ts'], function (exports) {
  'use strict';

  var _defineProperty, cclegacy, utils, gfx, Vec3, Mesh, builtinAttributes, FixedBuffer;

  return {
    setters: [function (module) {
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      utils = module.utils;
      gfx = module.gfx;
      Vec3 = module.Vec3;
      Mesh = module.Mesh;
    }, function (module) {
      builtinAttributes = module.builtinAttributes;
      FixedBuffer = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "45f87tuFodG1Zv7KceLZJhn", "fixed-model-mesh", undefined);

      var MAX_VERTICES_COUNT = 65535;
      var FixedModelMesh = exports('default', /*#__PURE__*/function () {
        function FixedModelMesh() {
          _defineProperty(this, "mesh", null);

          _defineProperty(this, "modelComp", null);

          _defineProperty(this, "maxBatchVerticesCount", 0);

          _defineProperty(this, "_buffers", []);

          _defineProperty(this, "_dataView", null);

          _defineProperty(this, "_iView", null);

          _defineProperty(this, "_attrs", {});

          _defineProperty(this, "_stride", 0);
        }

        FixedModelMesh.create = function create(verticesCount, indicesCount, modelComp, modelCount, attributes) {
          if (attributes === void 0) {
            attributes = ['position', 'normal', 'tangent', 'uv', 'uv1'];
          }

          var fixedModelMesh = new FixedModelMesh();
          var gfxAttrs = [];
          var attrs = {};
          var stride = 0;

          for (var i = 0; i < attributes.length; i++) {
            var builtinAttribute = builtinAttributes[attributes[i]];
            var format = builtinAttribute.format;
            gfxAttrs.push(new gfx.Attribute(builtinAttribute.name, format));
            attrs[attributes[i]] = {
              gfxIndex: i,
              offset: stride,
              format: format
            };
            var info = gfx.FormatInfos[format];
            stride += info.size;
          }

          fixedModelMesh._attrs = attrs;
          fixedModelMesh._stride = stride;
          var buffers = fixedModelMesh._buffers;
          var totalVerticesBytes = modelCount * verticesCount * stride;
          var totalIndicesBytes = modelCount * indicesCount * 2;
          var totalBytes = totalVerticesBytes + totalIndicesBytes;
          var arrayBuffer = new ArrayBuffer(totalBytes);
          fixedModelMesh._dataView = new DataView(arrayBuffer, 0, totalVerticesBytes);
          fixedModelMesh._iView = new Uint16Array(arrayBuffer, totalVerticesBytes, modelCount * indicesCount);
          var maxModelCount = Math.floor(MAX_VERTICES_COUNT / verticesCount);
          var arrayBufferVerticesOffset = 0;
          var arrayBufferIndicesOffset = totalVerticesBytes;

          while (modelCount > 0) {
            var currCount = Math.min(maxModelCount, modelCount);
            var buffer = FixedBuffer.create(currCount * verticesCount, currCount * indicesCount, attributes, {
              arrayBuffer: arrayBuffer,
              arrayBufferVerticesOffset: arrayBufferVerticesOffset,
              arrayBufferIndicesOffset: arrayBufferIndicesOffset
            });
            buffers.push(buffer);
            modelCount -= maxModelCount;
            arrayBufferVerticesOffset += buffer.verticesBytes;
            arrayBufferIndicesOffset += buffer.indicesBytes;
          }

          fixedModelMesh.maxBatchVerticesCount = maxModelCount * verticesCount;
          var meshStruct = {
            vertexBundles: [],
            primitives: [],
            minPosition: new Vec3(),
            maxPosition: new Vec3()
          };

          for (var _i = 0; _i < buffers.length; _i++) {
            var vertexBundle = {
              attributes: gfxAttrs,
              view: {
                offset: buffers[_i].verticesOffset,
                length: buffers[_i].verticesBytes,
                count: buffers[_i].verticesCount,
                stride: stride
              }
            };
            meshStruct.vertexBundles.push(vertexBundle);
            var primitive = {
              primitiveMode: gfx.PrimitiveMode.TRIANGLE_LIST,
              vertexBundelIndices: [_i],
              indexView: {
                offset: buffers[_i].indicesOffset,
                length: buffers[_i].indicesBytes,
                count: buffers[_i].indicesCount,
                stride: 2
              }
            };
            meshStruct.primitives.push(primitive);
          }

          var mesh = new Mesh();
          mesh.reset({
            struct: meshStruct,
            data: new Uint8Array(arrayBuffer)
          });
          fixedModelMesh.mesh = mesh;
          fixedModelMesh.modelComp = modelComp;
          return fixedModelMesh;
        };

        var _proto = FixedModelMesh.prototype;

        _proto.writeVertex = function writeVertex(vertOffset, attrName, value) {
          var attr = this._attrs[attrName];
          var offset = vertOffset * this._stride + attr.offset;
          utils.writeBuffer(this._dataView, value, attr.format, offset, this._stride);
        };

        _proto.writeIndex = function writeIndex(indexOffset, value) {
          value = value % this.maxBatchVerticesCount;
          this._iView[indexOffset] = value;
        };

        _proto.update = function update() {
          var modelComp = this.modelComp;
          var subMeshes = this.mesh.renderingSubMeshes;

          for (var i = 0; i < subMeshes.length; i++) {
            var subMesh = subMeshes[i];
            var fixedBuffer = this._buffers[i];
            var vb = subMesh.vertexBuffers[0];
            vb.update(fixedBuffer._vbuffer);
            var ib = subMesh.indexBuffer;
            ib.update(fixedBuffer._ibuffer);
            var model = modelComp.model && modelComp.model.subModels[i];

            if (model) {
              var ia = model.inputAssembler;
              if (!ia) return;
              ia.vertexCount = fixedBuffer.verticesCount;
              ia.indexCount = fixedBuffer.indicesCount;
              model.update();
            }
          }
        };

        return FixedModelMesh;
      }());

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/asset-operation.ts", ['cc'], function (exports) {
  'use strict';

  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "4915a+F6HRKOqzthrteei1v", "asset-operation", undefined);

      var _createMesh;

      var _saveMesh; // @ts-ignore


      var createMesh = exports('createMesh', _createMesh); // @ts-ignore

      var saveMesh = exports('saveMesh', _saveMesh);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/event.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _defineProperty, cclegacy;

  return {
    setters: [function (module) {
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "491abee/xBL+a9q9tGmsGRU", "event", undefined);

      var Event = exports('default', /*#__PURE__*/function () {
        function Event() {
          _defineProperty(this, "_listeners", []);
        }

        var _proto = Event.prototype;

        _proto.addListener = function addListener(cb, target) {
          var listeners = this._listeners;

          for (var i = 0; i < listeners.length; i++) {
            if (listeners[i][0] === cb && listeners[i][1] === target) {
              return;
            }
          }

          this._listeners.push([cb, target]);
        };

        _proto.removeListener = function removeListener(cb, target) {
          var listeners = this._listeners;

          for (var i = 0; i < listeners.length; i++) {
            if (listeners[i][0] === cb) {
              listeners.splice(i, 1);
              return;
            }
          }
        };

        _proto.invoke = function invoke(a1, a2, a3, a4, a5, a6) {
          var args = [];

          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }

          var listeners = this._listeners;

          for (var i = 0; i < listeners.length; i++) {
            var l = listeners[i];
            l[0].apply(l[1], args);
          }
        };

        return Event;
      }());

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/mesh-tiling.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './event.ts', './spline.ts', './spline-util-renderer.ts', './animation-curve.ts', './source-mesh.ts', './mesh-bender.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _defineProperty, _createClass, cclegacy, _decorator, Vec3, Material, Mesh, CurveRange, Vec2, Color, ModelComponent, Node, Quat, Event, Spline, SplineUtilRenderer, UAnimationCurve, SourceMesh, FillingMode, ValueType, AlignType, MirrorType, MeshBender;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _defineProperty = module.defineProperty;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Vec3 = module.Vec3;
      Material = module.Material;
      Mesh = module.Mesh;
      CurveRange = module.CurveRange;
      Vec2 = module.Vec2;
      Color = module.Color;
      ModelComponent = module.ModelComponent;
      Node = module.Node;
      Quat = module.Quat;
    }, function (module) {
      Event = module.default;
    }, function (module) {
      Spline = module.default;
    }, function (module) {
      SplineUtilRenderer = module.default;
    }, function (module) {
      UAnimationCurve = module.default;
    }, function (module) {
      SourceMesh = module.default;
    }, function (module) {
      FillingMode = module.FillingMode;
      ValueType = module.ValueType;
      AlignType = module.AlignType;
      MirrorType = module.MirrorType;
      MeshBender = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _temp;

      cclegacy._RF.push({}, "4a587hdoeRPaoMhtXF2Qk+F", "mesh-tiling", undefined);

      var ccclass = _decorator.ccclass,
          executeInEditMode = _decorator.executeInEditMode,
          _float = _decorator["float"],
          type = _decorator.type,
          _boolean = _decorator["boolean"],
          property = _decorator.property;
      var tempPos = new Vec3();
      var tempRotation = new Vec3();
      var SplineMeshTiling = exports('default', (_dec = type(Material), _dec2 = type(Material), _dec3 = type(Mesh), _dec4 = type(Mesh), _dec5 = type(Vec3), _dec6 = type(Vec3), _dec7 = type(Vec3), _dec8 = property({
        type: FillingMode
      }), _dec9 = type(ValueType), _dec10 = type(ValueType), _dec11 = type(CurveRange), _dec12 = type(CurveRange), _dec13 = type(Vec2), _dec14 = type(Vec2), _dec15 = type(CurveRange), _dec16 = type(CurveRange), _dec17 = type(Vec2), _dec18 = type(Vec2), _dec19 = type(AlignType), _dec20 = type(AlignType), _dec21 = type(MirrorType), _dec22 = type(MirrorType), ccclass(_class = executeInEditMode(_class = (_class2 = (_temp = /*#__PURE__*/function (_SplineUtilRenderer) {
        _inheritsLoose(SplineMeshTiling, _SplineUtilRenderer);

        function SplineMeshTiling() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _SplineUtilRenderer.call.apply(_SplineUtilRenderer, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "_material", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "_mesh", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "_translation", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "_rotation", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "_scale", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "_curveSpace", _descriptor6, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "_mode", _descriptor7, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "_offset", _descriptor8, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "_offsetValueType", _descriptor9, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "_widthCurve", _descriptor10, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "_widthRange", _descriptor11, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "_heightCurve", _descriptor12, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "_heightRange", _descriptor13, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "_alignType", _descriptor14, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "_alignOffset", _descriptor15, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "_mirrorType", _descriptor16, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "_useCustomVertexColor", _descriptor17, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "_customVertexColor", _descriptor18, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "onGenerateEvent", new Event());

          return _this;
        }

        var _proto = SplineMeshTiling.prototype;

        _proto.compute = function compute() {
          if (!this.mesh) {
            return;
          }

          var children = this.generated.children;
          var used = 0;

          if (this.splineCurve instanceof Spline) {
            if (this.curveSpace) {
              var curves = this.spline.curves;

              for (var i = 0; i < curves.length; i++) {
                this._getOrcreate(used++, curves[i]);

                if (this.mirror !== MirrorType.None) {
                  this._getOrcreate(used++, curves[i], this.mirror);
                }
              }
            } else {
              this._getOrcreate(used++, this.spline);

              if (this.mirror !== MirrorType.None) {
                this._getOrcreate(used++, this.spline, this.mirror);
              }
            }
          } else {
            this._getOrcreate(used++, this.splineCurve);

            if (this.mirror !== MirrorType.None) {
              this._getOrcreate(used++, this.splineCurve, this.mirror);
            }
          }

          if (children.length > used) {
            for (var _i = children.length - 1; _i >= used; _i--) {
              children[_i].parent = null;
            }
          }
        };

        _proto._updateMaterials = function _updateMaterials() {
          var children = this.generated.children;

          for (var i = 0; i < children.length; i++) {
            var mc = children[i].getComponent(ModelComponent);
            mc.material = this.material;
          }
        };

        _proto._updateMode = function _updateMode() {
          var children = this.generated.children;

          for (var i = 0; i < children.length; i++) {
            var mb = children[i].getComponent(MeshBender);
            mb.mode = this.mode;
          }
        };

        _proto._getOrcreate = function _getOrcreate(childIdx, target, mirror) {
          if (mirror === void 0) {
            mirror = MirrorType.None;
          }

          var node = this.generated.children[childIdx];

          if (!node) {
            node = new Node();
            node.parent = this.generated;
          }

          var mb = node.getComponent(MeshBender);

          if (!mb) {
            mb = node.addComponent(MeshBender);
          }

          if (target instanceof Spline) {
            mb.setInterval1(target, 0);
          } else {
            mb.setInterval(target);
          }

          var translation = this.translation;
          var rotation = this.rotation;
          var alignOffset = this.alignOffset;
          mb.source = SourceMesh.build(this.mesh).translate(translation).rotate(Quat.fromEuler(new Quat(), rotation.x, rotation.y, rotation.z)).scaleRes(this.scale);
          mb.mode = this.mode;
          mb.offset = this.offset;
          mb.offsetValueType = this.offsetValueType;
          mb.widthCurve = this.widthCurve;
          mb.widthRange = this.widthRange;
          mb.heightCurve = this.heightCurve;
          mb.heightRange = this.heightRange;
          mb.alignType = this.alignType;
          mb.alignOffset = alignOffset;
          mb.customVertexColor = this.customVertexColor;
          mb.useCustomVertexColor = this.useCustomVertexColor;
          mb.mirror = mirror;

          if (mirror === MirrorType.Z) {
            mb.alignOffset *= -1;

            if (mb.alignType === AlignType.Left) {
              mb.alignType = AlignType.Right;
            } else if (mb.alignType === AlignType.Right) {
              mb.alignType = AlignType.Left;
            }
          } else if (mirror === MirrorType.Y) {
            mb.alignOffset *= -1;

            if (mb.alignType === AlignType.Top) {
              mb.alignType = AlignType.Bottom;
            } else if (mb.alignType === AlignType.Bottom) {
              mb.alignType = AlignType.Top;
            }
          }

          var mc = node.getComponent(ModelComponent);

          if (!mc) {
            mc = node.addComponent(ModelComponent);
            mc.material = this.material;
          }

          mb.update();
          this.onGenerateEvent.invoke(node);
          return node;
        };

        _createClass(SplineMeshTiling, [{
          key: "material",
          get: function get() {
            return this._material;
          },
          set: function set(value) {
            this._material = value;

            this._updateMaterials();
          }
        }, {
          key: "mesh",
          get: function get() {
            return this._mesh;
          },
          set: function set(value) {
            this._mesh = value;
            this.reset();
          } // "Translation to apply on the mesh before bending it."

        }, {
          key: "translation",
          get: function get() {
            return this._translation;
          },
          set: function set(value) {
            this._translation = value;
            this.reset();
          } // "Rotation to apply on the mesh before bending it."

        }, {
          key: "rotation",
          get: function get() {
            return this._rotation;
          },
          set: function set(value) {
            this._rotation = value;
            this.reset();
          } // "Scale to apply on the mesh before bending it."

        }, {
          key: "scale",
          get: function get() {
            return this._scale;
          },
          set: function set(value) {
            this._scale = value;
            this.reset();
          } // "If true, the mesh will be bent on play mode. If false, the bent mesh will be kept from the editor mode, allowing lighting baking."
          // public bool updateInPlayMode;
          // "If true, a mesh will be placed on each curve of the spline. If false, a single mesh will be placed for the whole spline."

        }, {
          key: "curveSpace",
          get: function get() {
            return this._curveSpace;
          },
          set: function set(value) {
            this._curveSpace = value;
            this.onCurveChanged();
          } // "The mode to use to fill the choosen interval with the bent mesh."
          // public mode: FillingMode = FillingMode.StretchToInterval;

        }, {
          key: "mode",
          get: /// <summary>
          /// The scaling mode along the spline
          /// </summary>
          function get() {
            return this._mode;
          },
          set: function set(value) {
            if (value == this._mode) return;
            this._mode = value;

            this._updateMode();
          }
        }, {
          key: "offset",
          get: function get() {
            return this._offset;
          },
          set: function set(value) {
            this._offset = value;
            this.onCurveChanged();
          } // @ts-ignore

        }, {
          key: "offsetValueType",
          get: // @ts-ignore
          function get() {
            return this._offsetValueType;
          },
          set: function set(value) {
            this._offsetValueType = value;
            this.onCurveChanged();
          }
        }, {
          key: "widthCurve",
          get: function get() {
            return this._widthCurve;
          },
          set: function set(value) {
            this._widthCurve = value;
            this.dirty = true;
          }
        }, {
          key: "widthRange",
          get: function get() {
            return this._widthRange;
          },
          set: function set(value) {
            this._widthRange = value;
            this.dirty = true;
          }
        }, {
          key: "heightCurve",
          get: function get() {
            return this._heightCurve;
          },
          set: function set(value) {
            this._heightCurve = value;
            this.dirty = true;
          }
        }, {
          key: "heightRange",
          get: function get() {
            return this._heightRange;
          },
          set: function set(value) {
            this._heightRange = value;
            this.dirty = true;
          } // @ts-ignore

        }, {
          key: "alignType",
          get: // @ts-ignore
          function get() {
            return this._alignType;
          },
          set: function set(value) {
            this._alignType = value;
            this.dirty = true;
          }
        }, {
          key: "alignOffset",
          get: function get() {
            return this._alignOffset;
          },
          set: function set(value) {
            this._alignOffset = value;
            this.dirty = true;
          }
        }, {
          key: "mirror",
          get: function get() {
            return this._mirrorType;
          },
          set: function set(value) {
            this._mirrorType = value;
            this.dirty = true;
          }
        }, {
          key: "useCustomVertexColor",
          get: function get() {
            return this._useCustomVertexColor;
          },
          set: function set(v) {
            this._useCustomVertexColor = v;
            this.dirty = true;
          }
        }, {
          key: "customVertexColor",
          get: function get() {
            return this._customVertexColor;
          },
          set: function set(v) {
            this._customVertexColor.set(v);

            if (this._useCustomVertexColor) {
              this.dirty = true;
            }
          }
        }]);

        return SplineMeshTiling;
      }(SplineUtilRenderer), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_material", [_dec], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "material", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "material"), _class2.prototype), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_mesh", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "mesh", [_dec4], Object.getOwnPropertyDescriptor(_class2.prototype, "mesh"), _class2.prototype), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_translation", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec3();
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "translation", [_dec5], Object.getOwnPropertyDescriptor(_class2.prototype, "translation"), _class2.prototype), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_rotation", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec3();
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "rotation", [_dec6], Object.getOwnPropertyDescriptor(_class2.prototype, "rotation"), _class2.prototype), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "_scale", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return Vec3.ONE.clone();
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "scale", [_dec7], Object.getOwnPropertyDescriptor(_class2.prototype, "scale"), _class2.prototype), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "_curveSpace", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "curveSpace", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "curveSpace"), _class2.prototype), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "_mode", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return FillingMode.Repeat;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "mode", [_dec8], Object.getOwnPropertyDescriptor(_class2.prototype, "mode"), _class2.prototype), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "_offset", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "offset", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "offset"), _class2.prototype), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "_offsetValueType", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return ValueType.Absolute;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "offsetValueType", [_dec10], Object.getOwnPropertyDescriptor(_class2.prototype, "offsetValueType"), _class2.prototype), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "_widthCurve", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return UAnimationCurve.one();
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "widthCurve", [_dec12], Object.getOwnPropertyDescriptor(_class2.prototype, "widthCurve"), _class2.prototype), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "_widthRange", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec2(0, 1);
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "widthRange", [_dec14], Object.getOwnPropertyDescriptor(_class2.prototype, "widthRange"), _class2.prototype), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "_heightCurve", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return UAnimationCurve.one();
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "heightCurve", [_dec16], Object.getOwnPropertyDescriptor(_class2.prototype, "heightCurve"), _class2.prototype), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "_heightRange", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec2(0, 1);
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "heightRange", [_dec18], Object.getOwnPropertyDescriptor(_class2.prototype, "heightRange"), _class2.prototype), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "_alignType", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return AlignType.None;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "alignType", [_dec20], Object.getOwnPropertyDescriptor(_class2.prototype, "alignType"), _class2.prototype), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "_alignOffset", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "alignOffset", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "alignOffset"), _class2.prototype), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "_mirrorType", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return MirrorType.None;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "mirror", [_dec22], Object.getOwnPropertyDescriptor(_class2.prototype, "mirror"), _class2.prototype), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "_useCustomVertexColor", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "useCustomVertexColor", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "useCustomVertexColor"), _class2.prototype), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "_customVertexColor", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Color();
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "customVertexColor", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "customVertexColor"), _class2.prototype)), _class2)) || _class) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/spline.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './event.ts', './spline-node.ts', './spline-node-wrapper.ts', './cubic-bezier-curve.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _defineProperty, _assertThisInitialized, _initializerDefineProperty, _createClass, cclegacy, _decorator, Vec3, Node, find, warn, Component, Event, SplineNode, SplineNodeWrapper, CubicBezierCurve;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _defineProperty = module.defineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _initializerDefineProperty = module.initializerDefineProperty;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Vec3 = module.Vec3;
      Node = module.Node;
      find = module.find;
      warn = module.warn;
      Component = module.Component;
    }, function (module) {
      Event = module.default;
    }, function (module) {
      SplineNode = module.default;
    }, function (module) {
      SplineNodeWrapper = module.default;
    }, function (module) {
      CubicBezierCurve = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _temp;

      cclegacy._RF.push({}, "4f3betNZrFAk5ghozl0TFWc", "spline", undefined);

      var ccclass = _decorator.ccclass,
          type = _decorator.type,
          _boolean = _decorator["boolean"],
          integer = _decorator.integer,
          _float = _decorator["float"],
          executeInEditMode = _decorator.executeInEditMode;
      var SplineRootNodeName = '__spline_node_root__'; /// <summary>
      /// A curved line made of oriented nodes.
      /// Each segment is a cubic Bézier curve connected to spline nodes.
      /// It provides methods to get positions and tangent along the spline, specifying a distance or a ratio, plus the curve length.
      /// The spline and the nodes raise events each time something is changed.
      /// </summary>

      var Spline = exports('default', (_dec = type([SplineNode]), _dec2 = type(SplineNodeWrapper), ccclass(_class = executeInEditMode(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Spline, _Component);

        function Spline() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _defineProperty(_assertThisInitialized(_this), "currentSelection", null);

          _defineProperty(_assertThisInitialized(_this), "_addSplineNodeAtLast", false);

          _defineProperty(_assertThisInitialized(_this), "_addSplineNodeAfterSelection", false);

          _defineProperty(_assertThisInitialized(_this), "_deleteSelectSplineNode", false);

          _initializerDefineProperty(_assertThisInitialized(_this), "_nodes", _descriptor, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "curves", []);

          _defineProperty(_assertThisInitialized(_this), "length", 0);

          _defineProperty(_assertThisInitialized(_this), "_isLoop", false);

          _defineProperty(_assertThisInitialized(_this), "_gizmoEditing", false);

          _defineProperty(_assertThisInitialized(_this), "nodeListChanged", new Event());

          _defineProperty(_assertThisInitialized(_this), "curveChanged", new Event());

          _defineProperty(_assertThisInitialized(_this), "_nodeRoot", null);

          _defineProperty(_assertThisInitialized(_this), "_updatingNodes", false);

          _defineProperty(_assertThisInitialized(_this), "startNode", null);

          _defineProperty(_assertThisInitialized(_this), "endNode", null);

          _defineProperty(_assertThisInitialized(_this), "_samples", []);

          _defineProperty(_assertThisInitialized(_this), "_points", []);

          _defineProperty(_assertThisInitialized(_this), "_minPos", new Vec3());

          _defineProperty(_assertThisInitialized(_this), "_maxPos", new Vec3());

          return _this;
        }

        var _proto = Spline.prototype;

        _proto.invokeNodeListChanged = function invokeNodeListChanged() {
          this.nodeListChanged.invoke();
        };

        _proto.invokeCurveChanged = function invokeCurveChanged() {
          this.curveChanged.invoke();
        };

        _proto.onLoad = function onLoad() {
          this._updateNodes();
        };

        _proto.onEnable = function onEnable() {};

        _proto.onDisable = function onDisable() {};

        _proto.addNode = function addNode(pos, direction, up, scale, roll) {
          var node = new Node('SplineNode');
          var splineNode = node.addComponent(SplineNode);
          splineNode.position = pos;
          splineNode.direction = direction;

          if (up !== undefined) {
            splineNode.up = up;
          }

          if (scale !== undefined) {
            splineNode.scale = scale;
          }

          if (roll !== undefined) {
            splineNode.roll = roll;
          }

          node.parent = this._nodeRoot;

          this._nodes.push(splineNode);

          if (!this._updatingNodes) {
            this.invokeNodeListChanged();

            this._createCurves();
          }

          return splineNode;
        };

        _proto.insertNode = function insertNode(pos, direction, index) {
          var node = new Node('SplineNode');
          var splineNode = node.addComponent(SplineNode);
          splineNode.position = pos;
          splineNode.direction = direction;

          this._nodeRoot.insertChild(node, index);

          this._nodes.splice(index, 0, splineNode);

          if (!this._updatingNodes) {
            this.invokeNodeListChanged();

            this._createCurves();
          }

          return splineNode;
        };

        _proto.removeNode = function removeNode(index) {
          var splineNode = this._nodes[index];

          this._nodeRoot.removeChild(splineNode.node);

          this._nodes.splice(index, 1);

          if (!this._updatingNodes) {
            this.invokeNodeListChanged();

            this._createCurves();
          }

          return splineNode;
        };

        _proto._updateNodes = function _updateNodes(autoCreate) {
          if (autoCreate === void 0) {
            autoCreate = true;
          }

          this._updatingNodes = true;
          var nodeRoot = this._nodeRoot = find(SplineRootNodeName, this.node);

          if (!nodeRoot) {
            nodeRoot = this._nodeRoot = new Node(SplineRootNodeName); // some thing is wrong
            // spline node root is missing, try recover from this._nodes

            if (this._nodes.length) {
              var nodes = this._nodes.slice();

              this._nodes.length = 0;

              for (var i = 0; i < nodes.length; i++) {
                var node = nodes[i];
                this.addNode(node.position, node.direction, node.up, node.scale, node.roll);
              }
            } else if (autoCreate) {
              this.addNode(new Vec3(-5, 0, 0), new Vec3(-5, 0, -3));
              this.addNode(new Vec3(5, 0, 0), new Vec3(5, 0, 3));
            }

            nodeRoot.parent = this.node;
          } else {
            this._nodes = nodeRoot.getComponentsInChildren(SplineNode);
          }

          this._createCurves();

          this.invokeNodeListChanged();
          this._updatingNodes = false;
        };

        _proto._createCurves = function _createCurves() {
          this.curves.length = 0;

          for (var i = 0; i < this.nodes.length - 1; i++) {
            var n = this.nodes[i];
            var next = this.nodes[i + 1];
            var curve = new CubicBezierCurve(n, next);
            curve.changed.addListener(this.updateAfterCurveChanged, this);
            this.curves.push(curve);
          }

          this.invokeNodeListChanged();
          this.updateAfterCurveChanged();
        };

        _proto.getCurves = function getCurves() {
          return this.curves;
        };

        _proto.updateAfterCurveChanged = function updateAfterCurveChanged() {
          this.length = 0;

          for (var i = 0; i < this.curves.length; i++) {
            var curve = this.curves[i];
            this.length += curve.length;
          }

          this.invokeCurveChanged();
          this._points.length = 0;
          this._samples.length = 0;
        } /// <summary>
        /// Returns an interpolated sample of the spline, containing all curve data at this time.
        /// Time must be between 0 and the number of nodes.
        /// </summary>
        ;

        _proto.getSample = function getSample(t, out) {
          var index = this.getNodeIndexForTime(t);
          return this.curves[index].getSample(t - index, out);
        } /// <summary>
        /// Returns the curve at the given time.
        /// Time must be between 0 and the number of nodes.
        /// </summary>
        /// <param name="t"></param>
        /// <returns></returns>
        ;

        _proto.getCurve = function getCurve(t) {
          return this.curves[this.getNodeIndexForTime(t)];
        };

        _proto.getNodeIndexForTime = function getNodeIndexForTime(t) {
          if (t < 0 || t > this.nodes.length - 1) {
            throw new Error("Time must be between 0 and last node index (" + (this.nodes.length - 1) + "). Given time was {" + t + "}.");
          }

          var res = Math.floor(t);
          if (res == this.nodes.length - 1) res--;
          return res;
        } /// <summary>
        /// Returns an interpolated sample of the spline, containing all curve data at this distance.
        /// Distance must be between 0 and the spline length.
        /// </summary>
        /// <param name="d"></param>
        /// <returns></returns>
        ;

        _proto.getSampleAtDistance = function getSampleAtDistance(d, out) {
          if (d < 0 || d > this.length) throw new Error("Distance must be between 0 and spline length (" + this.length + "). Given distance was " + d + ".");

          for (var i = 0; i < this.curves.length; i++) {
            var curve = this.curves[i]; // test if distance is approximatly equals to curve length, because spline
            // length may be greater than cumulated curve length due to float precision

            if (d > curve.length && d < curve.length + 0.0001) {
              d = curve.length;
            }

            if (d > curve.length) {
              d -= curve.length;
            } else {
              return curve.getSampleAtDistance(d, out);
            }
          }

          throw new Error("Something went wrong with GetSampleAtDistance.");
        };

        _proto.updateLoopBinding = function updateLoopBinding() {
          if (this.startNode) {
            this.startNode.changed.removeListener(this.startNodeChanged);
          }

          if (this.endNode != null) {
            this.endNode.changed.removeListener(this.endNodeChanged);
          }

          if (this.isLoop) {
            this.startNode = this.nodes[0];
            this.endNode = this.nodes[this.nodes.length - 1];
            this.startNode.changed.addListener(this.startNodeChanged);
            this.endNode.changed.addListener(this.endNodeChanged);
            this.startNodeChanged();
          } else {
            this.startNode = null;
            this.endNode = null;
          }
        };

        _proto.startNodeChanged = function startNodeChanged() {
          var start = this.startNode,
              end = this.endNode;

          if (start && end) {
            end.changed.removeListener(this.endNodeChanged);
            end.position = start.position;
            end.direction = start.direction;
            end.roll = start.roll;
            end.scale = start.scale;
            end.up = start.up;
            end.changed.addListener(this.endNodeChanged);
          }
        };

        _proto.endNodeChanged = function endNodeChanged() {
          var start = this.startNode,
              end = this.endNode;

          if (start && end) {
            start.changed.removeListener(this.startNodeChanged);
            start.position = end.position;
            start.direction = end.direction;
            start.roll = end.roll;
            start.scale = end.scale;
            start.up = end.up;
            start.changed.addListener(this.startNodeChanged);
          }
        };

        _proto.getSamples = function getSamples() {
          if (this._samples.length === 0) {
            var samples = this._samples;
            var curves = this.curves;

            for (var i = 0; i < curves.length; i++) {
              var ss = curves[i].getSamples();

              for (var j = 0; j < ss.length; j++) {
                samples.push(ss[j]);
              }
            }
          }

          return this._samples;
        };

        _proto.getPoints = function getPoints() {
          if (this._points.length === 0) {
            this._caclBoundingBox();
          }

          return this._points;
        };

        _proto.getBounding = function getBounding(min, max) {
          if (this._points.length === 0) {
            this._caclBoundingBox();
          }

          min.set(this._minPos);
          max.set(this._maxPos);
        };

        _proto._caclBoundingBox = function _caclBoundingBox() {
          var points = this._points;

          var min = this._minPos.set(Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);

          var max = this._maxPos.set(-Number.MAX_SAFE_INTEGER, -Number.MAX_SAFE_INTEGER, -Number.MAX_SAFE_INTEGER);

          var samples = this.getSamples();

          for (var i = 0; i < samples.length; i++) {
            var position = points[i] = samples[i].location;
            min.x = Math.min(min.x, position.x);
            min.y = Math.min(min.y, position.y);
            min.z = Math.min(min.z, position.z);
            max.x = Math.max(max.x, position.x);
            max.y = Math.max(max.y, position.y);
            max.z = Math.max(max.z, position.z);
          }

          points.length = samples.length;
        };

        _createClass(Spline, [{
          key: "addSplineNodeAtLast",
          get: function get() {
            return this._addSplineNodeAtLast;
          },
          set: function set(v) {
            if (this._addSplineNodeAtLast === v) return;
            this._addSplineNodeAtLast = v;
            var index = this.nodes.length - 1;
            var lastNode = this.nodes[index];
            var sample = this.getSample(index);
            var offset = sample.tangent.clone().multiplyScalar(this.length / this.nodes.length / 2);
            this.addNode(offset.add(lastNode.position), lastNode.direction);
          }
        }, {
          key: "addSplineNodeAfterSelection",
          get: function get() {
            return this._addSplineNodeAfterSelection;
          },
          set: function set(v) {
            if (this._addSplineNodeAfterSelection === v) return;
            this._addSplineNodeAfterSelection = v;

            if (!this.currentSelection) {
              warn('No SpineNode selected.');
              return;
            }

            var index = this.nodes.indexOf(this.currentSelection);
            if (index === -1) return;
            var sample = this.getSample(index);
            var offset = sample.tangent.clone().multiplyScalar(this.length / this.nodes.length / 2);
            this.insertNode(offset.add(this.currentSelection.position), this.currentSelection.direction, index + 1);
          }
        }, {
          key: "deleteSelectSplineNode",
          get: function get() {
            return this._deleteSelectSplineNode;
          },
          set: function set(v) {
            if (this._deleteSelectSplineNode === v) return;
            this._deleteSelectSplineNode = v;

            if (!this.currentSelection) {
              warn('No SpineNode selected.');
              return;
            }

            var index = this.nodes.indexOf(this.currentSelection);
            if (index === -1) return;
            this.removeNode(index);
          } /// <summary>
          /// The spline nodes.
          /// Warning, this collection shouldn't be changed manualy. Use specific methods to add and remove nodes.
          /// It is public only for the user to enter exact values of position and direction in the inspector (and serialization purposes).
          /// </summary>

        }, {
          key: "nodes",
          get: // @type([SplineNode])
          function get() {
            return this._nodes;
          }
        }, {
          key: "splineNodes",
          get: function get() {
            return this._nodes.map(function (node) {
              return SplineNodeWrapper.create(node);
            });
          },
          set: function set(value) {} /// <summary>
          /// The generated curves. Should not be changed in any way, use nodes instead.
          /// </summary>

        }, {
          key: "isLoop",
          get: function get() {
            return this._isLoop;
          },
          set: function set(v) {
            this._isLoop = v;
            this.updateLoopBinding();
          }
        }, {
          key: "gizmoEditing",
          get: function get() {
            return this._gizmoEditing;
          },
          set: function set(value) {
            this._gizmoEditing = value;

            for (var i = 0; i < this.curves.length; i++) {
              this.curves[i].gizmoEditing = value;
            }
          }
        }]);

        return Spline;
      }(Component), _temp), (_applyDecoratedDescriptor(_class2.prototype, "addSplineNodeAtLast", [_boolean], Object.getOwnPropertyDescriptor(_class2.prototype, "addSplineNodeAtLast"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "addSplineNodeAfterSelection", [_boolean], Object.getOwnPropertyDescriptor(_class2.prototype, "addSplineNodeAfterSelection"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "deleteSelectSplineNode", [_boolean], Object.getOwnPropertyDescriptor(_class2.prototype, "deleteSelectSplineNode"), _class2.prototype), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "_nodes", [_dec], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "splineNodes", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "splineNodes"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "isLoop", [_boolean], Object.getOwnPropertyDescriptor(_class2.prototype, "isLoop"), _class2.prototype)), _class2)) || _class) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/cubic-bezier-curve.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './event.ts', './mathf.ts', './pool.ts', './curve-sample.ts'], function (exports) {
  'use strict';

  var _createClass, _defineProperty, cclegacy, Vec3, Event, mathf, pool, CurveSample;

  return {
    setters: [function (module) {
      _createClass = module.createClass;
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      Vec3 = module.Vec3;
    }, function (module) {
      Event = module.default;
    }, function (module) {
      mathf = module.default;
    }, function (module) {
      pool = module.default;
    }, function (module) {
      CurveSample = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "5325fLfN2hCK5YSAMQE0ffY", "cubic-bezier-curve", undefined);

      var STEP_COUNT = 30;
      var T_STEP = 1.0 / STEP_COUNT;

      function assertTimeInBounds(time) {
        if (time < 0 || time > 1) throw new Error("Time must be between 0 and 1 (was " + time + ").");
      }

      var CubicBezierCurve = exports('default', /*#__PURE__*/function () {
        function CubicBezierCurve(n1, n2) {
          _defineProperty(this, "n1", void 0);

          _defineProperty(this, "n2", void 0);

          _defineProperty(this, "samples", []);

          _defineProperty(this, "changed", new Event());

          _defineProperty(this, "length", 0);

          _defineProperty(this, "_gizmoEditing", false);

          _defineProperty(this, "_points", []);

          _defineProperty(this, "_minPos", new Vec3());

          _defineProperty(this, "_maxPos", new Vec3());

          this.n1 = n1;
          this.n2 = n2;
          this.computeSamples = this.computeSamples.bind(this);
          n1.changed.addListener(this.computeSamples);
          n2.changed.addListener(this.computeSamples);
          this.computeSamples();
        } /// <summary>
        /// Change the start node of the curve.
        /// </summary>
        /// <param name="n1"></param>


        var _proto = CubicBezierCurve.prototype;

        _proto.connectStart = function connectStart(n1) {
          this.n1.changed.removeListener(this.computeSamples);
          this.n1 = n1;
          n1.changed.addListener(this.computeSamples);
          this.computeSamples();
        } /// <summary>
        /// Change the end node of the curve.
        /// </summary>
        /// <param name="n2"></param>
        ;

        _proto.connectEnd = function connectEnd(n2) {
          this.n2.changed.removeListener(this.computeSamples);
          this.n2 = n2;
          n2.changed.addListener(this.computeSamples);
          this.computeSamples();
        } /// <summary>
        /// Convinent method to get the third control point of the curve, as the direction of the end spline node indicates the starting tangent of the next curve.
        /// </summary>
        /// <returns></returns>
        ;

        _proto.getInverseDirection = function getInverseDirection(out) {
          out = out || new Vec3();
          return out.set(this.n2.position).multiplyScalar(2).subtract(this.n2.direction);
        } /// <summary>
        /// Returns point on curve at given time. Time must be between 0 and 1.
        /// </summary>
        /// <param name="t"></param>
        /// <returns></returns>
        ;

        _proto.getLocation = function getLocation(t, out) {
          out = out || new Vec3();
          var omt = 1 - t;
          var omt2 = omt * omt;
          var t2 = t * t;
          var tmpN1Direction = pool.Vec3.get();
          var tmpN2Position = pool.Vec3.get();
          var tmpInverseDirection = pool.Vec3.get();
          out.set(this.n1.position).multiplyScalar(omt2 * omt);
          out.add(tmpN1Direction.set(this.n1.direction).multiplyScalar(3 * omt2 * t));
          out.add(this.getInverseDirection(tmpInverseDirection).multiplyScalar(3 * omt * t2));
          out.add(tmpN2Position.set(this.n2.position).multiplyScalar(t2 * t));
          pool.Vec3.put(tmpN1Direction);
          pool.Vec3.put(tmpN2Position);
          pool.Vec3.put(tmpInverseDirection);
          return out;
        } /// <summary>
        /// Returns tangent of curve at given time. Time must be between 0 and 1.
        /// </summary>
        /// <param name="t"></param>
        /// <returns></returns>
        ;

        _proto.getTangent = function getTangent(t, out) {
          out = out || new Vec3();
          var omt = 1 - t;
          var omt2 = omt * omt;
          var t2 = t * t;
          var tangent = new Vec3(this.n1.position).multiplyScalar(-omt2).add(new Vec3(this.n1.direction).multiplyScalar(3 * omt2 - 2 * omt)).add(this.getInverseDirection().multiplyScalar(-3 * t2 + 2 * t)).add(new Vec3(this.n2.position).multiplyScalar(t2));
          return tangent.normalize();
        };

        _proto.getUp = function getUp(t) {
          return this.n1.up.clone().lerp(this.n2.up, t);
        };

        _proto.getScale = function getScale(t) {
          return this.n1.scale.clone().lerp(this.n2.scale, t);
        };

        _proto.getRoll = function getRoll(t) {
          return mathf.lerp(this.n1.roll, this.n2.roll, t);
        };

        _proto.getSamples = function getSamples() {
          return this.samples;
        };

        _proto.computeSamples = function computeSamples() {
          var samples = this.samples;
          samples.length = STEP_COUNT + 1;
          this.length = 0;
          var previousPosition = this.getLocation(0);

          for (var i = 0; i <= STEP_COUNT; i++) {
            var t = i * T_STEP;
            var position = this.getLocation(t);
            this.length += Vec3.distance(previousPosition, position);
            previousPosition = position;

            if (!samples[i]) {
              samples[i] = new CurveSample();
            }

            this.updateSample(samples[i], this.length, t);
          } // this.length += Vec3.distance(previousPosition, this.getLocation(1));
          // samples.push(this.createSample(this.length, 1));


          this._points.length = 0;
          {
            this.changed.invoke();
          }
        };

        _proto.updateSample = function updateSample(sample, distance, time) {
          return sample.set(this.getLocation(time), this.getTangent(time), this.getUp(time), this.getScale(time), this.getRoll(time), distance, time);
        };

        _proto.getSample = function getSample(time, out) {
          assertTimeInBounds(time);
          var samples = this.samples;
          var previous = samples[0];
          var next = null;

          for (var i = 0; i < samples.length; i++) {
            var cp = samples[i];

            if (cp.timeInCurve >= time) {
              next = cp;
              break;
            }

            previous = cp;
          }

          if (next == null) {
            throw new Error("Can't find curve samples.");
          }

          var t = next == previous ? 0 : (time - previous.timeInCurve) / (next.timeInCurve - previous.timeInCurve);
          return CurveSample.lerp(previous, next, t, out);
        };

        _proto.getSampleAtDistance = function getSampleAtDistance(d, out) {
          if (d < 0 || d > this.length) throw new Error("Distance must be positive and less than curve length. Length = " + this.length + ", given distance was " + d);

          if (d === 0) {
            d = 0.001;
          } else if (d === this.length) {
            d = this.length - 0.001;
          }

          var samples = this.samples;
          var previous = samples[0];
          var next = null;

          for (var i = 0; i < samples.length; i++) {
            var cp = samples[i];

            if (cp.distanceInCurve >= d) {
              next = cp;
              break;
            }

            previous = cp;
          }

          if (next == null) {
            throw new Error("Can't find curve samples.");
          }

          var t = next == previous ? 0 : (d - previous.distanceInCurve) / (next.distanceInCurve - previous.distanceInCurve);
          return CurveSample.lerp(previous, next, t, out);
        };

        _proto.getPoints = function getPoints() {
          if (this._points.length === 0) {
            this._caclBoundingBox();
          }

          return this._points;
        };

        _proto.getBounding = function getBounding(min, max) {
          if (this._points.length === 0) {
            this._caclBoundingBox();
          }

          min.set(this._minPos);
          max.set(this._maxPos);
        };

        _proto._caclBoundingBox = function _caclBoundingBox() {
          var points = this._points;

          var min = this._minPos.set(Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);

          var max = this._maxPos.set(-Number.MAX_SAFE_INTEGER, -Number.MAX_SAFE_INTEGER, -Number.MAX_SAFE_INTEGER);

          var samples = this.getSamples();

          for (var i = 0; i < samples.length; i++) {
            var position = points[i] = samples[i].location;
            min.x = Math.min(min.x, position.x);
            min.y = Math.min(min.y, position.y);
            min.z = Math.min(min.z, position.z);
            max.x = Math.max(max.x, position.x);
            max.y = Math.max(max.y, position.y);
            max.z = Math.max(max.z, position.z);
          }

          points.length = samples.length;
        };

        _createClass(CubicBezierCurve, [{
          key: "gizmoEditing",
          get: function get() {
            return this._gizmoEditing;
          },
          set: function set(value) {
            this._gizmoEditing = value;
          }
        }]);

        return CubicBezierCurve;
      }());

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MainCarmCtrl.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _defineProperty, _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, Vec3, systemEvent, SystemEvent, macro, math, screen, Component;

  return {
    setters: [function (module) {
      _defineProperty = module.defineProperty;
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Vec3 = module.Vec3;
      systemEvent = module.systemEvent;
      SystemEvent = module.SystemEvent;
      macro = module.macro;
      math = module.math;
      screen = module.screen;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _class3, _temp;

      cclegacy._RF.push({}, "59deeRkTxxBD5A9Tgt2DEXn", "MainCarmCtrl", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var MainCarmCtrl = exports('MainCarmCtrl', (_dec = ccclass('MainCarmCtrl'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Number), _dec5 = property(Number), _dec6 = property(String), _dec7 = property(Number), _dec(_class = (_class2 = (_temp = _class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(MainCarmCtrl, _Component);

        function MainCarmCtrl() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "MainCamera", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "CanvasNode", _descriptor2, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "PreMouseMPos", void 0);

          _defineProperty(_assertThisInitialized(_this), "isMOUSE_WHEEL", void 0);

          _defineProperty(_assertThisInitialized(_this), "isMOUSE_Left", void 0);

          _defineProperty(_assertThisInitialized(_this), "isMOUSE_Right", void 0);

          _defineProperty(_assertThisInitialized(_this), "_euler", new Vec3(0, 0, 0));

          _defineProperty(_assertThisInitialized(_this), "isctrl", false);

          _defineProperty(_assertThisInitialized(_this), "M_WHEEL_Number", null);

          _initializerDefineProperty(_assertThisInitialized(_this), "MouseWHEELValue", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "isctrlValue", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "MOUSE_WHEELType", _descriptor5, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "MOUSE_WHEELLocationX", void 0);

          _defineProperty(_assertThisInitialized(_this), "MOUSE_WHEELLocationY", void 0);

          _defineProperty(_assertThisInitialized(_this), "MOUSE_movementX", void 0);

          _defineProperty(_assertThisInitialized(_this), "MOUSE_movementY", void 0);

          _initializerDefineProperty(_assertThisInitialized(_this), "MOUSE_LeftMove", _descriptor6, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = MainCarmCtrl.prototype;

        _proto.onEnable = function onEnable() {
          // console.log(this.MainCamera.getComponent(CameraComponent));
          this.PreMouseMPos = new Vec3(0, 0, 0);
          this.startEvent();
        };

        _proto.startEvent = function startEvent() {
          //注册事件：
          // //滚轮前进后退
          // systemEvent.on(SystemEvent.EventType.MOUSE_WHEEL, this.onMOUSE_WHEEL, this);
          // //滚轮按下 移动相机
          // systemEvent.on(SystemEvent.EventType.MOUSE_DOWN, this.onMOUSE_DOWN, this);
          // systemEvent.on(SystemEvent.EventType.MOUSE_UP, this.onMOUSE_UP, this);
          // systemEvent.on(SystemEvent.EventType.MOUSE_MOVE, this.onMouseMove, this);
          //键盘按键按下
          systemEvent.on(SystemEvent.EventType.KEY_DOWN, this.keyDownEvent, this); //键盘按键抬起

          systemEvent.on(SystemEvent.EventType.KEY_UP, this.keyUpEvent, this); //右键旋转

          this.CanvasNode.on(Node.EventType.MOUSE_MOVE, this.onMOUSE_RightTOUCH_MOVE, this); //滚轮前进后退

          this.CanvasNode.on(Node.EventType.MOUSE_WHEEL, this.onMOUSE_WHEEL, this); //滚轮按下 移动相机

          this.CanvasNode.on(Node.EventType.MOUSE_DOWN, this.onMOUSE_DOWN, this);
          this.CanvasNode.on(Node.EventType.MOUSE_UP, this.onMOUSE_UP, this);
          this.CanvasNode.on(Node.EventType.MOUSE_MOVE, this.onMouseMove, this);
        };

        _proto.onDisable = function onDisable() {
          //在组件 enabled 属性从 true 变为 false 时执行
          //键盘按键按下
          systemEvent.off(SystemEvent.EventType.KEY_DOWN, this.keyDownEvent, this); //键盘按键抬起

          systemEvent.off(SystemEvent.EventType.KEY_UP, this.keyUpEvent, this); //右键旋转

          this.CanvasNode.off(Node.EventType.TOUCH_MOVE, this.onMOUSE_RightTOUCH_MOVE, this); //滚轮前进后退

          this.CanvasNode.off(Node.EventType.MOUSE_WHEEL, this.onMOUSE_WHEEL, this); //滚轮按下 移动相机

          this.CanvasNode.off(Node.EventType.MOUSE_DOWN, this.onMOUSE_DOWN, this);
          this.CanvasNode.off(Node.EventType.MOUSE_UP, this.onMOUSE_UP, this);
          this.CanvasNode.off(Node.EventType.MOUSE_MOVE, this.onMouseMove, this);
        };

        _proto.lateUpdate = function lateUpdate(deltaTime) {
          this.CameraMove(); //鼠标左键按下，上下左右移动相机
          //ctrl键

          if (this.isctrl) {
            this.M_WHEEL_Number = this.isctrlValue.valueOf(); // 0.00005
          } else {
            this.M_WHEEL_Number = this.MouseWHEELValue.valueOf();
          }
        };

        _proto.keyDownEvent = function keyDownEvent(event) {
          switch (event.keyCode) {
            case macro.KEY.ctrl:
              // console.log("按下ctrl");
              this.isctrl = true;
              break;

            case macro.KEY.f11:
              // console.log("按下f11");
              this.Keyf11_event(); //F11事件 全屏切换

              break;

            case macro.KEY.escape:
              // console.log("按下escape");
              this.Keyf11_event(); //escape事件 全屏切换

              break;
          }
        };

        _proto.keyUpEvent = function keyUpEvent(event) {
          switch (event.keyCode) {
            case macro.KEY.ctrl:
              // console.log("抬起");
              this.isctrl = false;
              break;
          }
        }; //滚轮前进后退


        _proto.onMOUSE_WHEEL = function onMOUSE_WHEEL(event) {
          if (this.MOUSE_WHEELType === "add") {
            if (event.getScrollY() != 0) {
              //    console.log(event.getScrollY()/this.M_WHEEL_Number);
              // this.node.translate(new Vec3(0, 0, -event.getScrollY() * this.M_WHEEL_Number));
              this.node.position = this.node.position.add(new Vec3(0, 0, -event.getScrollY() * this.M_WHEEL_Number));
            } else if (event.getScrollX() != 0) {
              // console.log( event.getScrollX()/this.M_WHEEL_Number);
              // this.node.translate(new Vec3(0, 0, -event.getScrollX() * this.M_WHEEL_Number));
              this.node.position = this.node.position.add(new Vec3(0, 0, -event.getScrollX() * this.M_WHEEL_Number));
            }
          } else {
            if (event.getScrollY() != 0) {
              //    console.log(event.getScrollY()/this.M_WHEEL_Number);
              this.node.translate(new Vec3(0, 0, -event.getScrollY() * this.M_WHEEL_Number));
            } else if (event.getScrollX() != 0) {
              // console.log( event.getScrollX()/this.M_WHEEL_Number);
              this.node.translate(new Vec3(0, 0, -event.getScrollX() * this.M_WHEEL_Number));
            }
          }
        }; //鼠标按下


        _proto.onMOUSE_DOWN = function onMOUSE_DOWN(event) {
          //鼠标中键按下
          if (event.getButton() === 1) {
            this.MOUSE_WHEELLocationX = event.getLocationX();
            this.MOUSE_WHEELLocationY = event.getLocationY();
            this.isMOUSE_WHEEL = true;
          } //鼠标右键按下


          if (event.getButton() === 2) {
            this.MOUSE_WHEELLocationX = event.getLocationX();
            this.MOUSE_WHEELLocationY = event.getLocationY();
            this.isMOUSE_Right = true;
          } //鼠标左键按下


          if (event.getButton() === 0) {
            this.MOUSE_WHEELLocationX = event.getLocationX();
            this.MOUSE_WHEELLocationY = event.getLocationY();
            this.isMOUSE_Left = true; //  console.log( "isMOUSE_Left:"+this.isMOUSE_Left);
          }
        } //鼠标抬起
        ;

        _proto.onMOUSE_UP = function onMOUSE_UP(event) {
          //鼠标中键抬起
          if (event.getButton() === 1) {
            this.isMOUSE_WHEEL = false;
          } //鼠标右键抬起


          if (event.getButton() === 2) {
            this.isMOUSE_Right = false;
          } //鼠标左键抬起


          if (event.getButton() === 0) {
            this.isMOUSE_Left = false; // console.log( "isMOUSE_Left:"+this.isMOUSE_Left);
          }
        } //鼠标移动
        ;

        _proto.onMouseMove = function onMouseMove(event) {
          // console.log(event.getButton());
          // console.log ("EventMouse.BUTTON_MISSING:"+EventMouse.BUTTON_MISSING);
          // console.log ("EventMouse.BUTTON_LEFT:"+EventMouse.BUTTON_LEFT);
          //鼠标中键按下
          if (this.isMOUSE_WHEEL || this.isMOUSE_Right || this.isMOUSE_Left) {
            if (event.movementX != 0 || event.movementY != 0) {
              // cc.log(event.getLocationX(),event.getLocationY());
              this.MOUSE_WHEELLocationX = event.getLocationX();
              this.MOUSE_WHEELLocationY = event.getLocationY();
              this.MOUSE_movementX = event.movementX;
              this.MOUSE_movementY = event.movementY;
            }
          }
        };

        _proto.CanvasNode_MOUSE_MOVE = function CanvasNode_MOUSE_MOVE() {
          this.isMOUSE_Left = false; // console.log("MOUSE_  MOVE--CanvasNode:"+ this.isMOUSE_Left);
        };

        _proto.CanvasNode_MOUSE_ENTER = function CanvasNode_MOUSE_ENTER() {
          this.isMOUSE_Left = false; // console.log("MOUSE_  ENTER--CanvasNode:"+ this.isMOUSE_Left);
        };

        _proto.CanvasNode_MOUSE_LEAVE = function CanvasNode_MOUSE_LEAVE() {
          this.isMOUSE_Left = false; // console.log("MOUSE_  LEAVE--CanvasNode:"+ this.isMOUSE_Left);
        }; //鼠标左键按下，上下左右移动相机


        _proto.CameraMove = function CameraMove() {
          if (this.isMOUSE_Left) {
            if (this.PreMouseMPos.x <= 0) {
              this.PreMouseMPos = new Vec3(this.MOUSE_WHEELLocationX, this.MOUSE_WHEELLocationY, 0.0);
            } else {
              var CurMouseMPos = new Vec3(this.MOUSE_WHEELLocationX, this.MOUSE_WHEELLocationY, 0.0);
              var offset = new Vec3(CurMouseMPos.x - this.PreMouseMPos.x, CurMouseMPos.y - this.PreMouseMPos.y, CurMouseMPos.z - this.PreMouseMPos.z);
              offset = new Vec3(-offset.x * this.MOUSE_LeftMove.valueOf(), -offset.y * this.MOUSE_LeftMove.valueOf(), 0); //0.1这个数字的大小可以调节速度 0.005

              this.node.translate(offset);
              this.PreMouseMPos = CurMouseMPos;
            }
          } else {
            this.PreMouseMPos = new Vec3(0, 0, 0);
          }
        } //右键旋转
        ;

        _proto.onMOUSE_RightTOUCH_MOVE = function onMOUSE_RightTOUCH_MOVE(event) {
          if (this.isMOUSE_Right) {
            // let _quat = new Quat();            
            // this.allSeeCamera.getRotation(_quat);
            // //从 欧拉角 得到 四元数值 
            // Quat.fromEuler(_quat, _euler.x, _euler.y, _euler.z);
            var r = new Vec3(0, 0, 0);
            this.MainCamera.getWorldRotation().getEulerAngles(r);
            this._euler.x = r.x;
            this._euler.y = r.y;

            var _addDigreeY = -event.getDeltaX() * (Math.PI / 180) * 3;

            var _addDigreeX = event.getDeltaY() * (Math.PI / 180) * 3;

            this._euler.x += _addDigreeX;
            this._euler.y += _addDigreeY;
            this._euler.z = r.z;
            this.MainCamera.setRotationFromEuler(this._euler.x, this._euler.y, this._euler.z);
          }
        };

        _proto._getDirection = function _getDirection(x, y, z) {
          var result = new Vec3(x, y, z);
          math.Vec3.transformQuat(result, result, this.node.getRotation());
          return result;
        };

        _proto.btnOnClickEvent = function btnOnClickEvent() {
          console.log("dddd"); // screen.requestFullScreen();
        } //F11事件 全屏切换
        ;

        _proto.Keyf11_event = function Keyf11_event() {
          // console.log(find("Game_scene"));
          // //重新加载当前场景
          // if (find("Game_scene")) {
          //     //调转到主界面 ,显示进度条并加载场景 
          //     //查找到Canvas ProgressBar
          //     var canvas = director.getScene().getChildByName('Canvas');
          //     var ProgressBar = canvas.getChildByName('ProgressBar');
          //     //加载Game场景
          //     ProgressBar.getComponent(loadSceneProgressBar).funct('Game_scene');
          // }
          // console.log("Keyf11_event");
          if (screen.fullScreen()) {
            //cc.screen.fullScreen() 在全屏状态 
            screen.exitFullScreen(); //退出全屏
          } else {
            screen.autoFullScreen(); //进行全屏  
            //set_FullScreen();
          }
        };

        _createClass(MainCarmCtrl, null, [{
          key: "inst",
          get: function get() {
            if (!this._inst) {
              this._inst = new MainCarmCtrl();
            }

            return this._inst;
          }
        }]);

        return MainCarmCtrl;
      }(Component), _defineProperty(_class3, "_inst", null), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "MainCamera", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "CanvasNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "MouseWHEELValue", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "isctrlValue", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "MOUSE_WHEELType", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "MOUSE_LeftMove", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/reandgl.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _defineProperty, cclegacy, _decorator, Sprite, Camera, Material, Texture2D, SpriteFrame, RenderTexture, ImageAsset, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Sprite = module.Sprite;
      Camera = module.Camera;
      Material = module.Material;
      Texture2D = module.Texture2D;
      SpriteFrame = module.SpriteFrame;
      RenderTexture = module.RenderTexture;
      ImageAsset = module.ImageAsset;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _temp;

      cclegacy._RF.push({}, "5ba82c0zRhIFa+EydY2eyro", "reandgl", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var Reandgl = exports('Reandgl', (_dec = ccclass('Reandgl'), _dec2 = property({
        type: Sprite
      }), _dec3 = property({
        type: Sprite
      }), _dec4 = property({
        type: Camera
      }), _dec5 = property({
        type: Material
      }), _dec6 = property({
        type: Material
      }), _dec7 = property({
        type: Texture2D
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Reandgl, _Component);

        function Reandgl() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "sprite", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "sprite_Texture", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "camera", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "meshMaterial", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "sprite_Material", _descriptor5, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "_video", null);

          _defineProperty(_assertThisInitialized(_this), "_renderTex", null);

          _defineProperty(_assertThisInitialized(_this), "_textssure", new Texture2D());

          _initializerDefineProperty(_assertThisInitialized(_this), "new_tex2", _descriptor6, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "sp_def", null);

          _defineProperty(_assertThisInitialized(_this), "canvas_video", null);

          return _this;
        }

        var _proto = Reandgl.prototype;

        _proto.start = function start() {
          var _this2 = this; //后面再看吧，主要是降低 新建材质的时候，gfx buffer的内存占用 不断增多


          var spriteFrame = this.sprite.spriteFrame;
          var sp = new SpriteFrame();
          sp.reset({
            originalSize: spriteFrame.originalSize,
            rect: spriteFrame.rect,
            offset: spriteFrame.offset,
            isRotate: spriteFrame.rotated,
            borderTop: spriteFrame.insetTop,
            borderLeft: spriteFrame.insetLeft,
            borderBottom: spriteFrame.insetBottom,
            borderRight: spriteFrame.insetRight
          });
          var renderTex = this._renderTex = new RenderTexture();
          renderTex.reset({
            width: 128,
            height: 128
          });
          this.camera.targetTexture = renderTex;
          console.log(renderTex.getGFXTexture());
          sp.texture = renderTex;
          this.sprite.spriteFrame = sp; // const sp1 = new SpriteFrame();
          // sp1.texture = this.new_tex2;
          // // sp.texture.handleLoadedTexture();
          // this.sprite_Texture.getComponent(Sprite).spriteFrame = sp1;

          this.init();
          this.schedule(function () {
            _this2.updateTexture();
          }, 5);
        };

        _proto.update = function update(deltaTime) {
          // [4]
          //更新贴图
          this.updateTexture();
        };

        _proto.updateTexture = function updateTexture() {
          // this.sprite_Texture.getComponent(Sprite).spriteFrame=null;
          this.canvas_video.getContext('2d').drawImage(this._video, 0, 0, 250, 240);
          var base64String = this.canvas_video.toDataURL('image/png');
          var img = new Image();
          img.setAttribute("crossOrigin", 'Anonymous');
          img.src = base64String;
          var self = this;

          img.onload = function () {
            var imgAsset = new ImageAsset(); //重置此图像资源使用的原始图像源

            imgAsset.reset(img);
            self._textssure.image = imgAsset;

            self._textssure.updateImage();

            self.meshMaterial.setProperty('mainTexture', self._textssure);
            var new_texture = self.meshMaterial.getProperty('mainTexture'); //console.log(new_texture);
            // let test_sp = new SpriteFrame();
            // let test_sp_tex = new Texture2D();//如何修改呢，这里只是更新了一个纹理，
            // //但是这个纹理还是原来的纹理，所以这里需要重新设置一下
            // test_sp_tex.image =imgAsset;
            // test_sp_tex.updateImage();
            // test_sp.texture = test_sp_tex;

            self.sprite_Material.setProperty('mainTexture', self._textssure); // let region = new gfx.BufferTextureCopy();
            // const texBuffers: ArrayBufferView[] = [];
            // texBuffers[0] = new Uint8Array(self._textssure.width * self._textssure.height * 4);
            // director.root.device.copyTextureToBuffers(self._textssure.getGFXTexture(), texBuffers, [region]);
            // director.root.device.copyBuffersToTexture(texBuffers, s_t.getGFXTexture(), [region]);
            // s_t.
            // director.root?.device.copyTextureToBuffers(new_texture.getGFXTexture()!, texBuffers, [region])
            // const sp = SpriteFrame.createWithImage(new_texture.image);
            // self.sp_def = sp;
            // let new_texture2 = new Texture2D();//也就是说只能是新建纹理，在对新建的纹理 清除gfx的缓存
            // new_texture2.image = imgAsset;
            // self.new_tex2 = new_texture2;
            // self.new_tex2.uploadData(self.canvas_video.getContext('2d').getImageData(0, 0, 250, 240));
            // sp.texture = self.new_tex2;
            // sp.texture.handleLoadedTexture();
            // self.sprite_Texture.getComponent(Sprite).spriteFrame.texture=self.new_tex2;
            // sp.decRef();//释放资源
          };
        }; //视频 html元素


        _proto.init = function init() {
          var video = document.createElement('video'); //还是 做的web 页面的video方法 其实我可以拿出其中一部分来 给自己用

          console.log(this._video);
          window.document.body.appendChild(video);
          video.volume = 0;
          video.id = "video";
          video.autoplay = true;
          video.crossOrigin = "anonymous"; // video.muted = true;

          video.loop = true; //循环播放
          // this._bindEvent(video)

          video.src = "http://download.cocos.org/CocosTest/test-case/movie.mp4"; //公司网络 有限制，用热点就好了~
          //video.play();

          this._video = video; //视频 html元素

          var canvas = document.createElement('canvas');
          window.document.body.appendChild(canvas);
          canvas.id = "canvas_video";
          canvas.width = 250;
          canvas.height = 240;
          canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
          var base64String = canvas.toDataURL('image/png');
          this.canvas_video = canvas; //canvas 元素

          console.log(base64String);

          this._video.pause(); //动态创建 iframe
          // var iframe = document.createElement('iframe');
          // document.body.appendChild(iframe);
          // iframe.style.cssText = 'width: 400px; height: 200px;';
          // // iframe.src = 'https://cocos.com';
          // console.log(iframe);
          // let frameWin = document.querySelector('iframe').contentWindow;
          // let frameDoc = frameWin.document;
          // let frameBody = frameDoc.body;
          // const video = document.createElement('video');//还是 做的web 页面的video方法 其实我可以拿出其中一部分来 给自己用
          // frameBody.appendChild(video);

        };

        _proto.videoPlay = function videoPlay() {
          //播放视频
          {
            this._video.src = null;
            window.flvplay(); //调用html 页下的flvplay 方法
          }
          this._video.currentTime = 0; // 时间位置设置为0 开始位置

          this._video.play();

          this._video.volume = 1;
          console.log("videoPlay");
        };

        _proto.resumePlay = function resumePlay() {
          //恢复播放
          this._video.play();
        };

        _proto.pausePlay = function pausePlay() {
          //暂停播放
          this._video.pause();
        };

        _proto.stopPlay = function stopPlay() {
          //停止播放
          this._video.pause();
        };

        return Reandgl;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "sprite", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "sprite_Texture", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "camera", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "meshMaterial", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "sprite_Material", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "new_tex2", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/CaptureUtils.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _defineProperty, cclegacy, mat4, v3, RenderTexture, director, view, UITransform, Node, Camera, SpriteFrame, find, gfx, sys;

  return {
    setters: [function (module) {
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      mat4 = module.mat4;
      v3 = module.v3;
      RenderTexture = module.RenderTexture;
      director = module.director;
      view = module.view;
      UITransform = module.UITransform;
      Node = module.Node;
      Camera = module.Camera;
      SpriteFrame = module.SpriteFrame;
      find = module.find;
      gfx = module.gfx;
      sys = module.sys;
    }],
    execute: function () {
      cclegacy._RF.push({}, "613824pJRVKbLf1BEyoBCp2", "CaptureUtils", undefined);
      /**
       * 矩形
       */

      /**
       * 截图工具
       * @author liwenin
       */


      var CaptureUtils = exports('default', /*#__PURE__*/function () {
        function CaptureUtils() {}
        /**
         * 全局摄像机
         */

        /**
         * 画布
         */

        /**
         * 临时变量
         */

        /**
         * 临时变量
         */

        /**
         * 临时变量
         */

        /**
         * 屏幕捕捉，核心功能——摄像机的锚点在中心点，设置捕捉区域的属性需要注意
         * @param area 捕捉区域，同时也是摄像机的父节点，以及渲染节点
         * @param rect 需要捕捉的内部区域
         */


        CaptureUtils._capture = function _capture(area, rect) {
          var camera = CaptureUtils.getCamera(),
              cNode = camera.node,
              texture = camera.targetTexture = new RenderTexture();
          texture.reset({
            width: rect.width,
            height: rect.height
          });
          cNode.setPosition(rect.x, rect.y);
          area.addChild(cNode);
          camera.orthoHeight = rect.height / 2;
          camera.targetTexture = texture; // 执行渲染，单个渲染会报错，那就直接全部渲染一次吧（单个渲染：cc.director.root.pipeline.render([camera.camera]);）

          director.root.frameMove(0);
          camera.targetTexture = null;
          cNode.parent = null;
          return texture;
        }
        /**
         * 获取节点信息
         * @param node 
         */
        ;

        CaptureUtils._getNodeInfo = function _getNodeInfo(node) {
          var tmpInfo = CaptureUtils._tmpInfo,
              scale = node.getWorldMatrix(CaptureUtils._tmpMat4).getScale(CaptureUtils._tmpVec3);
          tmpInfo.scaleX = scale.x;
          tmpInfo.scaleY = scale.y;
          tmpInfo.scaleZ = scale.z;

          if (node == director.getScene()) {
            var view$1 = view['_visibleRect']; // 可以用cc.view.getVisibleSize()，不过每次调用都会新建一个Size

            tmpInfo.anchorX = tmpInfo.anchorY = 0;
            tmpInfo.width = view$1.width;
            tmpInfo.height = view$1.height;
            tmpInfo.scaleX = tmpInfo.scaleY = 1;
          } else {
            var ui = node.getComponent(UITransform);

            if (ui) {
              tmpInfo.anchorX = ui.anchorX;
              tmpInfo.anchorY = ui.anchorY;
              tmpInfo.width = ui.width;
              tmpInfo.height = ui.height;
            } else {
              tmpInfo.anchorX = tmpInfo.anchorY = 0.5;
              tmpInfo.width = tmpInfo.height = 1;
            }
          }

          return tmpInfo;
        }
        /**
         * 获取摄像机
         */
        ;

        CaptureUtils.getCamera = function getCamera() {
          var camera = CaptureUtils._camera;

          if (!camera) {
            var node = new Node('CaptureUtils');
            camera = CaptureUtils._camera = node.addComponent(Camera); // 采取自动适配尺寸，非全屏

            camera.projection = Camera.ProjectionType.ORTHO;
            camera.near = 0;
            /* 默认1，必须改为0否则黑屏 */

            camera.visibility = 41943040;
            /* 显示2D和3D，显示不同分组需要调整，cc.Layers.Enum.UI_2D | cc.Layers.Enum.UI_3D */
          }

          return camera;
        }
        /**
         * 获取画布——不支持document形式创建，则替换成对应平台提供的方式来创建即可
         */
        ;

        CaptureUtils.getCanvas = function getCanvas() {
          return CaptureUtils._canvas || (CaptureUtils._canvas = document.createElement('canvas'));
        }
        /**
         * 捕捉节点的内部区域
         * @param area 需要捕捉的节点，默认当前场景下的Canvas；用Canvas的原因是它有宽高，而场景没有，这样rect也可不传
         * @param rect 需要捕捉的内部区域，坐标默认捕捉区域的中心点，宽高默认节点的宽高；注意若节点本身宽高为0，会导致捕捉异常，因此必须手动传入rect的宽高；
         */
        ;

        CaptureUtils.capture = function capture(area, rect) {
          var void0 = void 0,
              spf = new SpriteFrame(),
              info;
          area === void0 && (area = find('Canvas') || director.getScene());
          rect === void0 && (rect = {}); // 获取节点信息

          info = CaptureUtils._getNodeInfo(area);

          if (rect.width === void0) {
            rect.width = info.width * info.scaleX;
          }

          if (rect.height === void0) {
            rect.height = info.height * info.scaleY;
          }

          if (rect.x === void0) {
            rect.x = (.5 - info.anchorX) * info.width;
          }

          if (rect.y === void0) {
            rect.y = (.5 - info.anchorY) * info.height;
          }

          spf.texture = CaptureUtils._capture(area, rect); // 此处做了翻转，也可根据官方给的示例将像素点数据进行翻转（调用toImgurl来转换）

          spf.flipUVY = true;
          return spf;
        }
        /**
         * 读取渲染纹理像素信息
         * @param texture 
         */
        ;

        CaptureUtils.readPixels = function readPixels(texture) {
          var width = texture.width,
              height = texture.height,
              arrayBuffer = new ArrayBuffer(width * height * 4),
              region = new gfx.BufferTextureCopy(),
              texExtent = region.texExtent; // region.texOffset.x = region.texOffset.y = 0;

          texExtent.width = width;
          texExtent.height = height;
          director.root.device.copyFramebufferToBuffer(texture.window.framebuffer, arrayBuffer, [region]);
          return new Uint8Array(arrayBuffer);
        }
        /**
         * 渲染纹理转图片路径，根据环境区分；
         * @param texture 渲染纹理
         * @description
         * 1、部分小游戏平台不支持toTempFilePathSync异步版，若需要也可则切换成Promise版本；
         * 2、返回的url可通过“cc.assetManager.loadRemote<cc.ImageAsset>(url, { ext: '.png' }, (_, img) => { let texture = new cc.Texture2D;texture.image = img;”来生成纹理，也可通过"var img = new Image; img.src = url; img.onload = function () { let texture = new cc.Texture2D; texture.reset({ width: img.width, height: img.height }); texture.uploadData(img); };"来生成纹理（web）；
         */
        ;

        CaptureUtils.toImgUrl = function toImgUrl(texture) {
          var data = CaptureUtils.readPixels(texture),
              width = texture.width,
              height = texture.height,
              url;

          if (sys.isNative) {
            var filePath = jsb.fileUtils.getWritablePath() + 'tmpImg.png';
            /* 临时文件名 */

            window['fsUtils'].writeFile(filePath, data);
            url = filePath;
          } else {
            // 通用模式，只要确保能创建一个2d canvas即可
            var canvas = CaptureUtils.getCanvas(),
                ctx = canvas.getContext('2d'),
                toTempFilePathSync = canvas['toTempFilePathSync'],
                rowBytes = width * 4,
                row = 0; // 调整画布成当前纹理大小

            canvas.width = width;
            canvas.height = height; // 写入canvas

            while (row < height) {
              var srow = height - 1 - row,
                  imageData = ctx.createImageData(width, 1),
                  start = srow * width * 4;

              for (var i = 0; i < rowBytes; i++) {
                imageData.data[i] = data[start + i];
              }

              ctx.putImageData(imageData, 0, row++);
            }

            if (typeof toTempFilePathSync === 'function') {
              // 异步版本
              // return new Promise(function (resolve) { toTempFilePathSync.call(canvas, { success(res) { ctx.clearRect(0, 0, width, height),resolve(res.tempFilePath) } }) });
              // 默认参数就是canvas自身大小、类型png，可以都不填写，一个空{}都可以，quality：图片质量，0~1，fileType='jpg'时有效
              url = toTempFilePathSync.call(canvas, {
                /* x: 0, y: 0, width: width, height: height, destWidth: width, destHeight: height, fileType: 'png', quality: 1 */
              });
            } else {
              url = canvas.toDataURL('image/png');
            } // 用完立即清空数据


            ctx.clearRect(0, 0, width, height);
          } // 异步版本
          // return Promise.resolve(url);


          return url;
        };

        return CaptureUtils;
      }());

      _defineProperty(CaptureUtils, "_camera", void 0);

      _defineProperty(CaptureUtils, "_canvas", void 0);

      _defineProperty(CaptureUtils, "_tmpMat4", mat4());

      _defineProperty(CaptureUtils, "_tmpVec3", v3());

      _defineProperty(CaptureUtils, "_tmpInfo", {});

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/spline-gizmo.ts", ['cc', './spline-node.ts', './index.ts', './utils.ts', './types.ts', './spline-node-controller.ts', './pool.ts', './spline.ts', './gizmo.ts', './continuous-line-controller.ts'], function () {
  'use strict';

  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, null, null, null, null, null, null, null, null, null],
    execute: function () {
      cclegacy._RF.push({}, "646b1jdVAhEjYOaHNzLi1SR", "spline-gizmo", undefined);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/spline-grid-util.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Vec3, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Vec3 = module.Vec3;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class, _class2, _descriptor, _descriptor2, _temp;

      cclegacy._RF.push({}, "6d6a74dRY9Ax653BXWidhUA", "spline-grid-util", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var SplineGridUtil = exports('SplineGridUtil', (_dec = ccclass('SplineGridUtil'), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SplineGridUtil, _Component);

        function SplineGridUtil() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "splineNodeGrid", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "splineDirectionGrid", _descriptor2, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = SplineGridUtil.prototype;

        _proto.start = function start() {// Your initialization goes here.
        } // update (deltaTime: number) {
        //     // Your update function goes here.
        // }
        ;

        return SplineGridUtil;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "splineNodeGrid", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec3(1, 1, 1);
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "splineDirectionGrid", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec3(1, 1, 1);
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/animation-curve.ts", ['cc'], function (exports) {
  'use strict';

  var cclegacy, CurveRange, geometry;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      CurveRange = module.CurveRange;
      geometry = module.geometry;
    }],
    execute: function () {
      cclegacy._RF.push({}, "6e273txUKRNG6K/6j/PEtnf", "animation-curve", undefined);

      function createKeyframe(time, value, inTangent, outTangent) {
        if (inTangent === void 0) {
          inTangent = 0;
        }

        if (outTangent === void 0) {
          outTangent = 0;
        }

        var frame = new geometry.Keyframe();
        frame.time = time;
        frame.value = value;
        frame.inTangent = inTangent;
        frame.outTangent = outTangent;
        return frame;
      } // A collection of curves form an [[AnimationClip]].


      var UAnimationCurve = exports('default', /*#__PURE__*/function () {
        function UAnimationCurve() {} // A straight Line starting at /timeStart/, /valueStart/ and ending at /timeEnd/, /valueEnd/


        UAnimationCurve.linear = function linear(timeStart, valueStart, timeEnd, valueEnd) {
          var tangent = (valueEnd - valueStart) / (timeEnd - timeStart);
          var curve = new CurveRange();
          curve.mode = CurveRange.Mode.Curve;
          curve.curve.keyFrames.length = 0;

          if (timeStart === timeEnd) {
            curve.curve.addKey(createKeyframe(timeStart, valueStart));
          } else {
            curve.curve.addKey(createKeyframe(timeStart, valueStart, 0.0, tangent));
            curve.curve.addKey(createKeyframe(timeEnd, valueEnd, tangent, 0.0));
          }

          return curve;
        } // An ease-in and out curve starting at /timeStart/, /valueStart/ and ending at /timeEnd/, /valueEnd/.
        ;

        UAnimationCurve.easeInOut = function easeInOut(timeStart, valueStart, timeEnd, valueEnd) {
          var curve = new CurveRange();
          curve.mode = CurveRange.Mode.Curve;
          curve.curve.keyFrames.length = 0;

          if (timeStart === timeEnd) {
            curve.curve.addKey(createKeyframe(timeStart, valueStart));
          } else {
            curve.curve.addKey(createKeyframe(timeStart, valueStart, 0.0, 0.0));
            curve.curve.addKey(createKeyframe(timeEnd, valueEnd, 0.0, 0.0));
          }

          return curve;
        };

        UAnimationCurve.constant = function constant(value) {
          var curve = new CurveRange();
          curve.constant = value;
          return curve;
        };

        UAnimationCurve.one = function one() {
          return this.constant(1);
        };

        UAnimationCurve.zero = function zero() {
          return this.constant(0);
        };

        return UAnimationCurve;
      }());

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/spline-util-base.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './spline-node.ts', './spline.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _defineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Component, SplineNode, Spline;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _defineProperty = module.defineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }, function (module) {
      SplineNode = module.default;
    }, function (module) {
      Spline = module.default;
    }],
    execute: function () {
      var _dec, _class, _class2, _temp;

      cclegacy._RF.push({}, "6eeeaOuhfFI3o1us6WtGstr", "spline-util-base", undefined);

      var ccclass = _decorator.ccclass,
          executeInEditMode = _decorator.executeInEditMode,
          type = _decorator.type;
      var SplineUtilBase = exports('default', (_dec = type(Spline), ccclass(_class = executeInEditMode(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SplineUtilBase, _Component);

        function SplineUtilBase() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _defineProperty(_assertThisInitialized(_this), "_spline", null);

          _defineProperty(_assertThisInitialized(_this), "_splineNode", null);

          _defineProperty(_assertThisInitialized(_this), "_splineCurve", null);

          return _this;
        }

        _createClass(SplineUtilBase, [{
          key: "spline",
          get: function get() {
            if (!this._spline) {
              var parent = this.node;

              while (parent) {
                this._spline = parent.getComponent(Spline);
                if (this._spline) break;
                parent = parent.parent;
              }
            }

            return this._spline;
          }
        }, {
          key: "splineNode",
          get: function get() {
            if (!this._splineNode) {
              var parent = this.node;

              while (parent) {
                this._splineNode = parent.getComponent(SplineNode);
                if (this._splineNode) break;
                parent = parent.parent;
              }
            }

            return this._splineNode;
          }
        }, {
          key: "splineCurve",
          get: function get() {
            if (!this._splineCurve) {
              var splineNode = this.splineNode;

              if (splineNode) {
                var index = splineNode.node.getSiblingIndex();
                this._splineCurve = this.spline.getCurve(index);
              } else {
                this._splineCurve = this.spline;
              }
            }

            return this._splineCurve;
          }
        }]);

        return SplineUtilBase;
      }(Component), _temp), _applyDecoratedDescriptor(_class2.prototype, "spline", [_dec], Object.getOwnPropertyDescriptor(_class2.prototype, "spline"), _class2.prototype), _class2)) || _class) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/moveui.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _defineProperty, cclegacy, _decorator, Label, Node, geometry, systemEvent, SystemEvent, find, Camera, UITransform, Sprite, Color, Vec3, UITransformComponent, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      Node = module.Node;
      geometry = module.geometry;
      systemEvent = module.systemEvent;
      SystemEvent = module.SystemEvent;
      find = module.find;
      Camera = module.Camera;
      UITransform = module.UITransform;
      Sprite = module.Sprite;
      Color = module.Color;
      Vec3 = module.Vec3;
      UITransformComponent = module.UITransformComponent;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _temp;

      cclegacy._RF.push({}, "7692eo94i9FAq/H6+UOM/l4", "moveui", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var moveui = exports('moveui', (_dec = ccclass('moveui'), _dec2 = property(Label), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(moveui, _Component);

        function moveui() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "labelShow", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "node_ui", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "uiTop", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "crtl_btn", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "uiContent", _descriptor5, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "_touch", void 0);

          _defineProperty(_assertThisInitialized(_this), "_event", void 0);

          _defineProperty(_assertThisInitialized(_this), "istouch", false);

          _defineProperty(_assertThisInitialized(_this), "ui_Scale", false);

          _defineProperty(_assertThisInitialized(_this), "_ray", new geometry.Ray());

          _defineProperty(_assertThisInitialized(_this), "_aabb", new geometry.AABB());

          return _this;
        }

        var _proto = moveui.prototype; //ui放大

        _proto.start = function start() {
          //仿照 layui进行 http://layui.seo56.cn/ 原layui的网站镜像
          //对ui注册事件
          systemEvent.on(SystemEvent.EventType.TOUCH_START, this.onTouchStart, this);
          systemEvent.on(SystemEvent.EventType.TOUCH_END, this.onTouchEnd, this);
          systemEvent.on(SystemEvent.EventType.TOUCH_MOVE, this.onTouchMove, this); // //鼠标形状改变
          // this.uiTop.on(Node.EventType.MOUSE_ENTER, () => {
          //     console.log("MOUSE_ENTER");
          //     game.canvas.style.cursor = "move";//鼠标指针 手形
          // }, this);
          // this.uiTop.on(Node.EventType.MOUSE_LEAVE, () => {
          //     // console.log("MOUSE_LEAVE");
          //     game.canvas.style.cursor = "default";//鼠标指针 恢复默认
          // }, this);
          //控制缩放

          this.btn_event();
        };

        _proto.lateUpdate = function lateUpdate() {// if(this.istouch){
          //     this.set_pot(this._touch, this._event);//设置坐标
          // }
        };

        _proto.onDestroy = function onDestroy() {
          systemEvent.on(SystemEvent.EventType.TOUCH_START, this.onTouchStart, this);
          systemEvent.on(SystemEvent.EventType.TOUCH_END, this.onTouchEnd, this);
          systemEvent.on(SystemEvent.EventType.TOUCH_MOVE, this.onTouchMove, this);
        };

        _proto.onTouchStart = function onTouchStart(touch, event) {
          this.labelShow.string = "TouchStart: " + event.getLocation();
          var uiCamera = find("Canvas/Camera").getComponent(Camera); //ui相机

          var point = touch.getLocation();
          uiCamera.screenPointToRay(point.x, point.y, this._ray);
          var uiTrans = this.uiTop.getComponent(UITransform);
          uiTrans.getComputeAABB(this._aabb); // console.log(geometry.intersect.rayAABB(this._ray, this._aabb));//一直值是998.999

          if (geometry.intersect.rayAABB(this._ray, this._aabb)) {
            console.log('检测成功');
            this.uiTop.getComponent(Sprite).color = new Color().fromHEX('#1273A0'); //颜色变换

            this.get_touch(touch, event); //设置坐标
            //this.set_pot(this._touch, this._event);//设置坐标

            this.istouch = true; //开始触摸
          }
        };

        _proto.onTouchMove = function onTouchMove(touch, event) {
          this.labelShow.string = "TouchMove: " + event.getLocation();

          if (this.istouch) {
            //触摸到移动
            this.get_touch(touch, event); //设置坐标

            this.set_pot(this._touch, this._event); //设置坐标
          }
        };

        _proto.onTouchEnd = function onTouchEnd(touch, event) {
          this.labelShow.string = "TouchEnd: " + event.getLocation();
          this.istouch = false; //触摸

          this.uiTop.getComponent(Sprite).color = new Color().fromHEX('#3CBCF8'); //颜色变换
        };

        _proto.get_touch = function get_touch(touch, event) {
          this._touch = touch;
          this._event = event;
        };

        _proto.set_pot = function set_pot(touch, event) {
          //坐标
          var _pos = new Vec3(0, 0, 0);

          var _tempOut = new Vec3(0, 0, 0);

          var uiPos = touch.getUILocation();

          _pos.set(uiPos.x, uiPos.y, 0);

          var uitransform = find("Canvas").getComponent(UITransformComponent); // 将触摸到的 ui 世界坐标转换到相对 canvas 下的本地坐标

          console.log(uiPos);
          uitransform.convertToNodeSpaceAR(_pos, _tempOut); // ui 同步this.node.setPosition(_tempOut);

          console.log(_tempOut);
          this.node_ui.setPosition(_tempOut);
        };

        _proto.btn_event = function btn_event() {
          var _this2 = this; //控制缩放
          //控制缩放


          for (var index = 0; index < this.crtl_btn.children.length; index++) {
            var item = this.crtl_btn.children[index];

            switch (item.name) {
              case "Button_Small":
                //缩小
                item.on(Node.EventType.TOUCH_START, function () {
                  _this2.uiContent.active = false; //隐藏详细信息
                }, this);
                break;

              case "Button_Large":
                //放大，恢复
                item.on(Node.EventType.TOUCH_START, function () {
                  _this2.uiContent.active = true; //显示Content

                  if (!_this2.ui_Scale) {
                    var scale = 1.5;

                    for (var _index = 0; _index < _this2.node_ui.children.length - 1; _index++) {
                      var _item = _this2.node_ui.children[_index];

                      _item.setScale(new Vec3(1.5, 1.5, 0));
                    }

                    _this2.ui_Scale = true;

                    var uitopwh = _this2.uiTop.getComponent(UITransform).contentSize;

                    _this2.crtl_btn.position = new Vec3(uitopwh.width * scale / 2, uitopwh.height * scale / 2, 0);
                  } else {
                    var _scale = 1;

                    for (var _index2 = 0; _index2 < _this2.node_ui.children.length - 1; _index2++) {
                      var _item2 = _this2.node_ui.children[_index2];

                      _item2.setScale(new Vec3(1, 1, 0));
                    }

                    _this2.ui_Scale = false;

                    var _uitopwh = _this2.uiTop.getComponent(UITransform).contentSize;

                    _this2.crtl_btn.position = new Vec3(_uitopwh.width * _scale / 2, _uitopwh.height * _scale / 2, 0);
                  }
                }, this);
                break;

              case "Button_cls":
                //关闭
                item.on(Node.EventType.TOUCH_START, function () {
                  _this2.node_ui.active = false;
                }, this);
                break;
            }
          }
        };

        return moveui;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "labelShow", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "node_ui", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "uiTop", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "crtl_btn", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "uiContent", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/mesh-utility.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _createForOfIteratorHelperLoose, utils, cclegacy, gfx, ValueType;

  return {
    setters: [function (module) {
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      utils = module.utils;
      cclegacy = module.cclegacy;
      gfx = module.gfx;
      ValueType = module.ValueType;
    }],
    execute: function () {
      cclegacy._RF.push({}, "77f161VtwtBR7xMTl4loQCo", "mesh-utility", undefined);

      var primitiveAttr = {
        positions: {
          size: 3,
          gfxName: gfx.AttributeName.ATTR_POSITION
        },
        normals: {
          size: 3,
          gfxName: gfx.AttributeName.ATTR_NORMAL
        },
        uvs: {
          size: 2,
          gfxName: gfx.AttributeName.ATTR_TEX_COORD
        },
        tangents: {
          size: 4,
          gfxName: gfx.AttributeName.ATTR_TANGENT
        }
      };
      var customAttributes = {
        tagent: {
          name: gfx.AttributeName.ATTR_TANGENT,
          format: gfx.Format.RGBA32F
        }
      };

      function flat(arr) {
        if (arr && arr[0] !== undefined && arr[0] instanceof ValueType) {
          var ret = [];

          for (var i = 0, l = arr.length; i < l; i++) {
            var val = arr[i];
            val.constructor.toArray(ret, val, ret.length);
          }

          return ret;
        }

        return arr;
      }

      function getVerticesCount(primitive) {
        var count = Number.MAX_SAFE_INTEGER;

        for (var name in primitiveAttr) {
          if (primitive[name]) {
            count = Math.min(primitive[name].length / primitiveAttr[name].size, count);
          }
        }

        return count;
      }

      function getIndicesCount(primitive) {
        if (!primitive.indices) {
          return 0;
        }

        return primitive.indices.length;
      }

      function updateMeshVB(mesh, attr, newValues, buffer, stride) {
        var attributes = mesh.struct.vertexBundles[0].attributes;
        var offset = 0;
        var format = gfx.Format.UNKNOWN;

        for (var _iterator = _createForOfIteratorHelperLoose(attributes), _step; !(_step = _iterator()).done;) {
          var a = _step.value;

          if (a.name === attr) {
            format = a.format;
            break;
          }

          offset += gfx.FormatInfos[a.format].size;
        }

        utils.writeBuffer(new DataView(buffer), newValues, format, offset, stride);
      }

      var MeshUtility = exports('default', {
        getReversedTriangles: function getReversedTriangles(mesh, subMeshIndex) {
          if (subMeshIndex === void 0) {
            subMeshIndex = 0;
          }

          var res = [];
          mesh.copyIndices(subMeshIndex, res);
          var triangleCount = res.length / 3;

          for (var i = 0; i < triangleCount; i++) {
            var tmp = res[i * 3];
            res[i * 3] = res[i * 3 + 1];
            res[i * 3 + 1] = tmp;
          }

          return res;
        },
        createMesh: function createMesh(primitive) {
          primitive = Object.assign({}, primitive); // prepare data

          primitive.primitiveMode = primitive.primitiveType;

          for (var name in primitiveAttr) {
            if (primitive[name]) {
              primitive[name] = flat(primitive[name]);
            }
          }

          if (primitive.tangents) {
            primitive.customAttributes = [{
              attr: customAttributes.tagent,
              values: primitive.tangents
            }];
          }

          return utils.createMesh(primitive);
        },
        updateMesh: function updateMesh(modelComp, primitive) {
          var mesh = modelComp.mesh;
          primitive = Object.assign({}, primitive); // prepare data

          primitive.primitiveMode = primitive.primitiveType;

          for (var name in primitiveAttr) {
            if (primitive[name]) {
              primitive[name] = flat(primitive[name]);
            }
          } // update vb 


          var subMesh = mesh.renderingSubMeshes[0];
          var vb = subMesh.vertexBuffers[0];
          var vertCount = getVerticesCount(primitive);
          var newVBSize = vb.stride * vertCount; //@ts-ignore

          var vbuffer = vb.vbuffer;

          if (!vbuffer || vbuffer.length !== newVBSize) {
            //@ts-ignore
            vbuffer = vb.vbuffer = new Uint8Array(newVBSize);

            for (var _name in primitiveAttr) {
              if (primitive[_name]) {
                updateMeshVB(mesh, primitiveAttr[_name].gfxName, primitive[_name], vbuffer.buffer, vb.stride);
              }
            }

            vb.resize(newVBSize);
          } else {
            for (var _name2 in primitiveAttr) {
              if (primitive[_name2]) {
                updateMeshVB(mesh, primitiveAttr[_name2].gfxName, primitive[_name2], vbuffer.buffer, vb.stride);
              }
            }
          }

          vb.update(vbuffer.buffer); // update ib

          if (!primitive.indices) return;
          var ib = subMesh.indexBuffer;
          var newIBSize = getIndicesCount(primitive); //@ts-ignore

          var ibuffer = ib.ibuffer;

          if (!ibuffer || ibuffer.length !== newIBSize) {
            var ctor = ib.stride === 1 ? Uint8Array : ib.stride === 2 ? Uint16Array : Uint32Array; //@ts-ignore

            ibuffer = ib.ibuffer = new ctor(newIBSize);
            ib.resize(newIBSize * ib.stride);
          }

          ibuffer.set(primitive.indices);
          ib.update(ibuffer.buffer); // update ia

          var model = modelComp.model && modelComp.model.subModels[0];
          if (!model) return;
          var ia = model.inputAssembler;
          if (!ia) return;
          ia.vertexCount = vertCount;
          ia.indexCount = newIBSize;
          model.update(); // model.updateCommandBuffer();
        },
        updateOrCreateModelMesh: function updateOrCreateModelMesh(model, primitive) {
          if (!model.mesh) {
            model.mesh = this.createMesh(primitive);
          } else {
            this.updateMesh(model, primitive);
          }
        }
      });

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/raycast.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _createForOfIteratorHelperLoose, Layers, renderer, Mat4, Vec3, cclegacy, geometry, gfx;

  return {
    setters: [function (module) {
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      Layers = module.Layers;
      renderer = module.renderer;
      Mat4 = module.Mat4;
      Vec3 = module.Vec3;
      cclegacy = module.cclegacy;
      geometry = module.geometry;
      gfx = module.gfx;
    }],
    execute: function () {
      cclegacy._RF.push({}, "7881fXu+n9JkY6UxvBywBBF", "raycast", undefined);

      var intersect = geometry.intersect,
          Ray = geometry.Ray,
          Triangle = geometry.Triangle;
      var resultModels = [];
      var m4 = new Mat4();
      var modelRay = new Ray();
      var tri = Triangle.create();
      var v3 = new Vec3();
      var narrowDis = Infinity;

      var narrowphase = function narrowphase(vb, ib, pm, sides, distance) {
        if (distance === void 0) {
          distance = Infinity;
        }

        narrowDis = distance;

        if (pm === gfx.PrimitiveMode.TRIANGLE_LIST) {
          var cnt = ib.length;

          for (var j = 0; j < cnt; j += 3) {
            var i0 = ib[j] * 3;
            var i1 = ib[j + 1] * 3;
            var i2 = ib[j + 2] * 3;
            Vec3.set(tri.a, vb[i0], vb[i0 + 1], vb[i0 + 2]);
            Vec3.set(tri.b, vb[i1], vb[i1 + 1], vb[i1 + 2]);
            Vec3.set(tri.c, vb[i2], vb[i2 + 1], vb[i2 + 2]);
            var dist = intersect.rayTriangle(modelRay, tri, sides);

            if (dist <= 0 || dist >= narrowDis) {
              continue;
            }

            narrowDis = dist;
          }
        } else if (pm === gfx.PrimitiveMode.TRIANGLE_STRIP) {
          var _cnt = ib.length - 2;

          var rev = 0;

          for (var _j = 0; _j < _cnt; _j += 1) {
            var _i = ib[_j - rev] * 3;

            var _i2 = ib[_j + rev + 1] * 3;

            var _i3 = ib[_j + 2] * 3;

            Vec3.set(tri.a, vb[_i], vb[_i + 1], vb[_i + 2]);
            Vec3.set(tri.b, vb[_i2], vb[_i2 + 1], vb[_i2 + 2]);
            Vec3.set(tri.c, vb[_i3], vb[_i3 + 1], vb[_i3 + 2]);
            rev = ~rev;

            var _dist = intersect.rayTriangle(modelRay, tri, sides);

            if (_dist <= 0 || _dist >= narrowDis) {
              continue;
            }

            narrowDis = _dist;
          }
        } else if (pm === gfx.PrimitiveMode.TRIANGLE_FAN) {
          var _cnt2 = ib.length - 1;

          var _i4 = ib[0] * 3;

          Vec3.set(tri.a, vb[_i4], vb[_i4 + 1], vb[_i4 + 2]);

          for (var _j2 = 1; _j2 < _cnt2; _j2 += 1) {
            var _i5 = ib[_j2] * 3;

            var _i6 = ib[_j2 + 1] * 3;

            Vec3.set(tri.b, vb[_i5], vb[_i5 + 1], vb[_i5 + 2]);
            Vec3.set(tri.c, vb[_i6], vb[_i6 + 1], vb[_i6 + 2]);

            var _dist2 = intersect.rayTriangle(modelRay, tri, sides);

            if (_dist2 <= 0 || _dist2 >= narrowDis) {
              continue;
            }

            narrowDis = _dist2;
          }
        }
      };

      var raycast = exports('default', {
        raycastAllModels: function raycastAllModels(renderScene, worldRay, mask, distance) {
          if (mask === void 0) {
            mask = Layers.Enum.DEFAULT;
          }

          if (distance === void 0) {
            distance = Infinity;
          }

          resultModels.length = 0;

          for (var _iterator = _createForOfIteratorHelperLoose(renderScene.models), _step; !(_step = _iterator()).done;) {
            var m = _step.value;
            var transform = m.transform;

            if (!transform || !m.enabled || !(m.node.layer & mask) || !m.worldBounds) {
              continue;
            } // broadphase


            var d = intersect.rayAABB(worldRay, m.worldBounds);

            if (d <= 0 || d >= distance) {
              continue;
            }

            if (m.type === renderer.scene.ModelType.DEFAULT) {
              // transform ray back to model space
              Mat4.invert(m4, transform.getWorldMatrix(m4));
              Vec3.transformMat4(modelRay.o, worldRay.o, m4);
              Vec3.normalize(modelRay.d, Vec3.transformMat4Normal(modelRay.d, worldRay.d, m4));
              d = Infinity;

              for (var i = 0; i < m.subModels.length; ++i) {
                var subModel = m.subModels[i].subMesh;

                if (subModel && subModel.geometricInfo) {
                  var _subModel$geometricIn = subModel.geometricInfo,
                      vb = _subModel$geometricIn.positions,
                      ib = _subModel$geometricIn.indices,
                      sides = _subModel$geometricIn.doubleSided;
                  narrowphase(vb, ib, subModel.primitiveMode, sides, distance);
                  d = Math.min(d, narrowDis * Vec3.multiply(v3, modelRay.d, transform.worldScale).length());
                }
              }
            }

            if (d < distance) {
              resultModels.push({
                node: m.node,
                distance: d
              });
            }
          }

          resultModels.sort(function (a, b) {
            return a.distance - b.distance;
          });
          return resultModels;
        },
        raycastModels: function raycastModels(models, worldRay, mask, distance) {
          if (mask === void 0) {
            mask = Layers.Enum.DEFAULT;
          }

          if (distance === void 0) {
            distance = Infinity;
          }

          resultModels.length = 0;

          for (var _iterator2 = _createForOfIteratorHelperLoose(models), _step2; !(_step2 = _iterator2()).done;) {
            var m = _step2.value;
            var transform = m.transform;

            if (!transform || !m.enabled || !(m.node.layer & mask) || !m.worldBounds) {
              continue;
            } // broadphase


            var d = intersect.rayAABB(worldRay, m.worldBounds);

            if (d <= 0 || d >= distance) {
              continue;
            }

            if (m.type === renderer.scene.ModelType.DEFAULT) {
              // transform ray back to model space
              Mat4.invert(m4, transform.getWorldMatrix(m4));
              Vec3.transformMat4(modelRay.o, worldRay.o, m4);
              Vec3.normalize(modelRay.d, Vec3.transformMat4Normal(modelRay.d, worldRay.d, m4));
              d = Infinity;

              for (var i = 0; i < m.subModels.length; ++i) {
                var subModel = m.subModels[i].subMesh;

                if (subModel && subModel.geometricInfo) {
                  var _subModel$geometricIn2 = subModel.geometricInfo,
                      vb = _subModel$geometricIn2.positions,
                      ib = _subModel$geometricIn2.indices,
                      sides = _subModel$geometricIn2.doubleSided;
                  narrowphase(vb, ib, subModel.primitiveMode, sides, distance);
                  d = Math.min(d, narrowDis * Vec3.multiply(v3, modelRay.d, transform.worldScale).length());
                }
              }
            }

            if (d < distance) {
              resultModels.push({
                node: m.node,
                distance: d
              });
            }
          }

          resultModels.sort(function (a, b) {
            return a.distance - b.distance;
          });
          return resultModels;
        },
        raycastModel: function raycastModel(m, worldRay, distance) {
          if (distance === void 0) {
            distance = Infinity;
          }

          var transform = m.transform; // broadphase

          var d = intersect.rayAABB(worldRay, m.worldBounds);

          if (d <= 0 || d >= distance) {
            return null;
          }

          if (m.type === renderer.scene.ModelType.DEFAULT) {
            // transform ray back to model space
            Mat4.invert(m4, transform.getWorldMatrix(m4));
            Vec3.transformMat4(modelRay.o, worldRay.o, m4);
            Vec3.normalize(modelRay.d, Vec3.transformMat4Normal(modelRay.d, worldRay.d, m4));
            d = Infinity;

            for (var i = 0; i < m.subModels.length; ++i) {
              var subModel = m.subModels[i].subMesh;

              if (subModel && subModel.geometricInfo) {
                var _subModel$geometricIn3 = subModel.geometricInfo,
                    vb = _subModel$geometricIn3.positions,
                    ib = _subModel$geometricIn3.indices,
                    sides = _subModel$geometricIn3.doubleSided;
                narrowphase(vb, ib, subModel.primitiveMode, sides, distance);
                d = Math.min(d, narrowDis * Vec3.multiply(v3, modelRay.d, transform.worldScale).length());
              }
            }
          }

          if (d < distance) {
            return {
              node: m.node,
              distance: d
            };
          }

          return null;
        }
      });

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/treeui.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, _decorator, Component;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "8958elvIAtChJO42toEXQAw", "treeui", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var Treeui = exports('Treeui', (_dec = ccclass('Treeui'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Treeui, _Component);

        function Treeui() {
          return _Component.apply(this, arguments) || this;
        }

        var _proto = Treeui.prototype;

        _proto.start = function start() {};

        return Treeui;
      }(Component)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/scatter.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './mathf.ts', './curve-sample.ts', './spline-util-renderer.ts', './type.ts', './scatter-volume.ts', './scatter-item.ts', './raycast.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _initializerDefineProperty, _inheritsLoose, _assertThisInitialized, _defineProperty, _createClass, cclegacy, _decorator, Vec3, geometry, Mat4, Quat, Node, Terrain, randomRange, Layers, director, js, find, CCObject, pointPolygonMinDistXZ, pointInPolygonAreaXZ, CurveSample, SplineUtilRenderer, VolumeType, ScatterType, VolumeInfo, ScatterVolume, ScatterItem, raycast;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
      _inheritsLoose = module.inheritsLoose;
      _assertThisInitialized = module.assertThisInitialized;
      _defineProperty = module.defineProperty;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Vec3 = module.Vec3;
      geometry = module.geometry;
      Mat4 = module.Mat4;
      Quat = module.Quat;
      Node = module.Node;
      Terrain = module.Terrain;
      randomRange = module.randomRange;
      Layers = module.Layers;
      director = module.director;
      js = module.js;
      find = module.find;
      CCObject = module.CCObject;
    }, function (module) {
      pointPolygonMinDistXZ = module.pointPolygonMinDistXZ;
      pointInPolygonAreaXZ = module.pointInPolygonAreaXZ;
    }, function (module) {
      CurveSample = module.default;
    }, function (module) {
      SplineUtilRenderer = module.default;
    }, function (module) {
      VolumeType = module.VolumeType;
      ScatterType = module.ScatterType;
      VolumeInfo = module.VolumeInfo;
    }, function (module) {
      ScatterVolume = module.ScatterVolume;
    }, function (module) {
      ScatterItem = module.default;
    }, function (module) {
      raycast = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _temp, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _class4, _class5, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _temp2;

      cclegacy._RF.push({}, "8e456p1j4pC/ae9XLvfNodQ", "scatter", undefined);

      var ccclass = _decorator.ccclass,
          executeInEditMode = _decorator.executeInEditMode,
          _float = _decorator["float"],
          type = _decorator.type,
          _boolean = _decorator["boolean"],
          property = _decorator.property;
      var DOWN = new Vec3(0, -1, 0);
      var tempPos = new Vec3();
      var tempScale = new Vec3();
      var tempEuler = new Vec3();
      var tempRay = geometry.Ray.create();
      var tempMat4 = new Mat4();
      var tempQuat = new Quat();
      var invertMatrix = new Mat4();
      var tempVec3 = new Vec3();
      var tempMin = new Vec3();
      var tempMax = new Vec3();
      var tempCurveSample = new CurveSample();
      var StoredScatterData = (_dec = ccclass('StoredScatterData'), _dec2 = type(Mat4), _dec(_class = (_class2 = (_temp = function StoredScatterData(itemIndex, matrix) {
        _initializerDefineProperty(this, "itemIndex", _descriptor, this);

        _initializerDefineProperty(this, "matrix", _descriptor2, this);

        this.itemIndex = itemIndex;
        this.matrix.set(matrix);
      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "itemIndex", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return -1;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "matrix", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Mat4();
        }
      })), _class2)) || _class);
      var Scatter = exports('default', (_dec3 = ccclass('Scatter'), _dec4 = type(Node), _dec5 = type(Terrain), _dec6 = type(Node), _dec7 = type(ScatterVolume), _dec8 = type(ScatterVolume), _dec9 = type(ScatterItem), _dec10 = type(ScatterItem), _dec11 = type(VolumeType), _dec12 = type(VolumeType), _dec13 = type(ScatterType), _dec14 = type(ScatterType), _dec3(_class4 = executeInEditMode(_class4 = (_class5 = (_temp2 = /*#__PURE__*/function (_SplineUtilRenderer) {
        _inheritsLoose(Scatter, _SplineUtilRenderer);

        function Scatter() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _SplineUtilRenderer.call.apply(_SplineUtilRenderer, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "_scale", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "_scaleRange", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "_rotationY", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "_rotationYRange", _descriptor6, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "_itemCount", _descriptor7, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "_generateCountPerFrame", _descriptor8, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "_raycastLayer", _descriptor9, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "_raycastTerrain", _descriptor10, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "_currentItemCount", 0);

          _defineProperty(_assertThisInitialized(_this), "_volumeInfos", []);

          _defineProperty(_assertThisInitialized(_this), "_selfVolumeInfo", new VolumeInfo());

          _initializerDefineProperty(_assertThisInitialized(_this), "_volumes", _descriptor11, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "_items", _descriptor12, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "_type", _descriptor13, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "_scatterLineWidth", _descriptor14, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "_scatterLineOffset", _descriptor15, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "_dataType", _descriptor16, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "_storedDatas", _descriptor17, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "_hasValidItem", false);

          return _this;
        }

        var _proto = Scatter.prototype;

        _proto._onDirtyChanged = function _onDirtyChanged(value) {
          if (value) {
            this._storedDatas.length = 0;

            this._updateVolume();

            this._dirty = true;
          } else if (this._currentItemCount >= this._itemCount) {
            this._dirty = false;
          }
        } // current item count
        ;

        _proto._isPosValid = function _isPosValid(pos) {
          var pointIn = false;

          if (this._type === VolumeType.Line) {
            var dist = pointPolygonMinDistXZ(pos, this.spline.getPoints()).dist;
            pointIn = dist > this._scatterLineOffset && dist < this.scatterLineOffset + this.scatterLineWidth;
          } else if (this._type === VolumeType.Area) {
            pointIn = pointInPolygonAreaXZ(pos, this.spline.getPoints());
          }

          if (!pointIn) {
            return false;
          }

          Vec3.transformMat4(pos, pos, this.spline.node.worldMatrix);
          var volumes = this._volumes;
          var volumeInfos = this._volumeInfos;
          var valid = false;
          var includeByVolumes = 0;

          for (var i = 0; i < volumes.length; i++) {
            var volume = volumes[i];
            if (!volume) continue;
            var info = volumeInfos[i];

            if (volume.includePos(pos)) {
              includeByVolumes++;

              if (info.count >= info.maxCount) {
                continue;
              }

              valid = true;
              info.count++;
              break;
            }
          }

          if (includeByVolumes === 0) {
            if (this._selfVolumeInfo.count < this._selfVolumeInfo.maxCount) {
              valid = true;
              this._selfVolumeInfo.count++;
            }
          }

          return valid;
        };

        _proto._getRandomAreaPoint = function _getRandomAreaPoint() {
          var min = tempMin;
          var max = tempMax;
          this.spline.getBounding(min, max);
          var iterratorCount = 0;

          do {
            if (iterratorCount >= 10) {
              return null;
            }

            tempPos.x = randomRange(min.x, max.x);
            tempPos.y = randomRange(min.y, max.y);
            tempPos.z = randomRange(min.z, max.z);
            iterratorCount++;
          } while (!this._isPosValid(tempPos));

          return tempPos;
        };

        _proto._getRandomLinePint = function _getRandomLinePint() {
          var length = this.spline.length;
          var sample = this.spline.getSampleAtDistance(randomRange(0, length), tempCurveSample);
          tempPos.set(sample.location);
          var normal = tempVec3.set(-sample.tangent.z, 0, sample.tangent.x);
          var width = randomRange(-this._scatterLineWidth, this.scatterLineWidth);
          var dist = Math.sign(width) * this._scatterLineOffset + width;
          normal.multiplyScalar(dist);
          tempPos.add(normal);
          Vec3.transformMat4(tempPos, tempPos, this.spline.node.worldMatrix);
          return tempPos;
        };

        _proto._getNextPosition = function _getNextPosition() {
          var randomPos;

          if (this._type === VolumeType.Area) {
            randomPos = this._getRandomAreaPoint();
          } else if (this._type === VolumeType.Line) {
            randomPos = this._getRandomLinePint();
          }

          if (!randomPos) {
            return null;
          }

          tempRay.o.set(randomPos.x, randomPos.y + 1000, randomPos.z);
          tempRay.d.set(DOWN); // @ts-ignore

          if (this._raycastTerrain) {
            var res = this._raycastTerrain.rayCheck(tempRay.o, tempRay.d, 1, true);

            if (res) {
              Vec3.add(randomPos, res, this._raycastTerrain.node.getWorldPosition(randomPos));
            }
          } else {
            var layer = Layers.Enum.DEFAULT;

            if (this._raycastLayer) {
              layer = this._raycastLayer.layer;
            }

            var results = raycast.raycastAllModels(director.getScene()._renderScene, tempRay, layer);

            if (results.length > 0) {
              randomPos = randomPos;
              Vec3.scaleAndAdd(randomPos, tempRay.o, tempRay.d, results[0].distance);
            }
          }

          Vec3.transformMat4(randomPos, randomPos, invertMatrix);
          return randomPos;
        };

        _proto.onLoad = function onLoad() {
          this._updateVolume();
        };

        _proto.compute = function compute() {
          if (this._items.length <= 0 || !this._hasValidItem) return;
          var storedDatas = this._storedDatas;
          Mat4.invert(invertMatrix, this.node.worldMatrix);

          if (this._currentItemCount < this._itemCount) {
            var items = this._items;

            for (var i = 0; i < this._generateCountPerFrame; i++) {
              if (this._currentItemCount >= this._itemCount) break;
              var storedData = storedDatas[this._currentItemCount];

              if (storedData) {
                var item = items[storedData.itemIndex];

                if (item.fill(storedData.matrix)) {
                  this._currentItemCount++;
                  continue;
                }
              }

              var validPos = this._getNextPosition();

              if (!validPos) {
                continue;
              }

              tempScale.set(this.scale.x + Math.random() * this.scaleRange.x, this.scale.y + Math.random() * this.scaleRange.y, this.scale.z + Math.random() * this.scaleRange.z);
              var rotationY = Math.random() * (this.rotationY + this.rotationYRange);
              tempEuler.set(0, rotationY, 0);
              Quat.fromEuler(tempQuat, tempEuler.x, tempEuler.y, tempEuler.z);
              Mat4.fromRTS(tempMat4, tempQuat, validPos, tempScale);

              for (var j = 0; j < items.length; j++) {
                if (items[j].fill(tempMat4)) {
                  storedDatas[this._currentItemCount] = new StoredScatterData(j, tempMat4);
                  this._currentItemCount++;
                  break;
                }
              }
            }

            for (var _i = 0; _i < items.length; _i++) {
              items[_i].updateFill();
            }

            if (this._currentItemCount >= this._itemCount) {
              // finished
              for (var _i2 = 0; _i2 < items.length; _i2++) {
                items[_i2].endFill();
              }
            }
          } else {
            this.dirty = false;
          }
        };

        _proto._resetState = function _resetState() {
          this._dirtyTime = 0;
          this._currentItemCount = 0;
          var items = this._items;

          if (items) {
            for (var i = 0; i < items.length; i++) {
              items[i].currentCount = 0;
            }
          }

          var volumeInfos = this._volumeInfos;

          if (volumeInfos) {
            for (var _i3 = 0; _i3 < volumeInfos.length; _i3++) {
              volumeInfos[_i3].count = 0;
            }
          }

          if (this._selfVolumeInfo) {
            this._selfVolumeInfo.count = 0;
          }
        };

        _proto._updateVolume = function _updateVolume() {
          this._resetState();

          var infos = this._volumeInfos;
          infos.length = 0;
          var totalVolume = 0;

          for (var i = 0; i < this._volumes.length; i++) {
            var volume = this._volumes[i];
            var info = new VolumeInfo();

            if (volume) {
              volume.volumeChanged.addListener(this._updateVolume, this);
              info.volume = volume.volume;
            } else {
              info.volume = 0;
            }

            infos[i] = info;
            totalVolume += info.volume;
          }

          for (var _i4 = 0; _i4 < infos.length; _i4++) {
            var _info = infos[_i4];

            if (totalVolume) {
              if (totalVolume > 1) {
                _info.volume /= totalVolume;
              }
            } else {
              _info.volume = 0;
            }

            _info.maxCount = _info.volume * this.itemCount;
          }

          this._selfVolumeInfo.count = 0;
          this._selfVolumeInfo.volume = Math.max(0, 1 - totalVolume);
          this._selfVolumeInfo.maxCount = this._selfVolumeInfo.volume * this.itemCount;
          this._dirty = true;

          this._updateItems();
        };

        _proto._updateItems = function _updateItems() {
          this.generated.removeAllChildren();
          this._hasValidItem = false;
          var totalVolume = 0;
          var items = this._items;

          for (var i = 0; i < items.length; i++) {
            var item = items[i];
            if (!item.prefab) continue;
            totalVolume += items[i].volume;
            this._hasValidItem = true;
          }

          if (totalVolume === 0) {
            this._hasValidItem = false;
          }

          if (!this._hasValidItem) {
            return;
          }

          var children = this.generated.children;
          var used = 0;

          for (var _i5 = 0; _i5 < items.length; _i5++) {
            var _item = items[_i5];
            if (!_item.prefab) continue;
            var volume = _item.volume;

            if (totalVolume) {
              volume /= totalVolume;
            } else {
              volume = 0;
            }

            var node = children[_i5];

            if (!node) {
              node = new Node('ScatterItem');
              node.parent = this.generated;
            }

            var maxCount = volume * this.itemCount | 0; // make sure item max count sum equls to total item count

            if (_i5 === items.length - 1) {
              maxCount = this.itemCount - used;
            }

            _item.init(node, maxCount, this._dataType);

            used += maxCount;
          }

          this._dirty = true;
        };

        _createClass(Scatter, [{
          key: "scale",
          get: function get() {
            return this._scale;
          },
          set: function set(v) {
            this._scale = v;
            this.dirty = true;
          }
        }, {
          key: "scaleRange",
          get: function get() {
            return this._scaleRange;
          },
          set: function set(v) {
            this._scaleRange = v;
            this.dirty = true;
          }
        }, {
          key: "rotationY",
          get: function get() {
            return this._rotationY;
          },
          set: function set(value) {
            this._rotationY = value;
            this.dirty = true;
          }
        }, {
          key: "rotationYRange",
          get: function get() {
            return this._rotationYRange;
          },
          set: function set(value) {
            this._rotationYRange = value;
            this.dirty = true;
          } // item count

        }, {
          key: "itemCount",
          get: function get() {
            return this._itemCount;
          },
          set: function set(value) {
            if (this._itemCount === value) return;
            this._itemCount = value;
            this.dirty = true;
          }
        }, {
          key: "generateCountPerFrame",
          get: function get() {
            return this._generateCountPerFrame;
          },
          set: function set(value) {
            this._generateCountPerFrame = value;
          } // racast layer

        }, {
          key: "raycastLayer",
          get: function get() {
            return this._raycastLayer;
          },
          set: function set(l) {
            this._raycastLayer = l;

            if (this._raycastLayer) {
              this._raycastTerrain = this._raycastLayer.getComponent(Terrain);
            } else {
              this._raycastTerrain = null;
            }
          }
        }, {
          key: "currentItemCount",
          get: function get() {
            return this._currentItemCount;
          } // volumes

        }, {
          key: "volumes",
          get: function get() {
            return this._volumes;
          },
          set: function set(value) {
            var oldValue = this._volumes;

            for (var i = 0; i < oldValue.length; i++) {
              if (oldValue[i]) {
                oldValue[i].volumeChanged.removeListener(this._updateVolume, this);
              }
            }

            this._volumes = value;

            this._updateVolume();
          } // scatter items

        }, {
          key: "items",
          get: function get() {
            return this._items;
          },
          set: function set(value) {
            this._items = value;

            this._updateVolume();
          } // scatter type

        }, {
          key: "type",
          get: function get() {
            return this._type;
          },
          set: function set(value) {
            this._type = value;

            this._updateVolume();
          } // used for this.type === VolumeType.Line

        }, {
          key: "scatterLineWidth",
          get: function get() {
            return this._scatterLineWidth;
          },
          set: function set(value) {
            this._scatterLineWidth = value;
            this.dirty = true;
          }
        }, {
          key: "scatterLineOffset",
          get: function get() {
            return this._scatterLineOffset;
          },
          set: function set(value) {
            this._scatterLineOffset = value;
            this.dirty = true;
          }
        }, {
          key: "dataType",
          get: function get() {
            return this._dataType;
          },
          set: function set(value) {
            this._dataType = value;
            this.dirty = true;
          }
        }, {
          key: "generated",
          get: function get() {
            if (!this._generated || this._generated.parent !== this.node) {
              var generatedName = 'generated ' + js.getClassName(this);
              this._generated = find(generatedName, this.node);

              if (!this._generated) {
                this._generated = new Node(generatedName);

                if (!this._showGenerated) {
                  this._generated._objFlags |= CCObject.Flags.DontSave | CCObject.Flags.HideInHierarchy;
                }

                this._generated.parent = this.node;
              }
            }

            return this._generated;
          }
        }]);

        return Scatter;
      }(SplineUtilRenderer), _temp2), (_descriptor3 = _applyDecoratedDescriptor(_class5.prototype, "_scale", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return Vec3.ONE.clone();
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class5.prototype, "_scaleRange", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec3();
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class5.prototype, "_rotationY", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class5.prototype, "_rotationYRange", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 360;
        }
      }), _applyDecoratedDescriptor(_class5.prototype, "scale", [property], Object.getOwnPropertyDescriptor(_class5.prototype, "scale"), _class5.prototype), _applyDecoratedDescriptor(_class5.prototype, "scaleRange", [property], Object.getOwnPropertyDescriptor(_class5.prototype, "scaleRange"), _class5.prototype), _applyDecoratedDescriptor(_class5.prototype, "rotationY", [property], Object.getOwnPropertyDescriptor(_class5.prototype, "rotationY"), _class5.prototype), _applyDecoratedDescriptor(_class5.prototype, "rotationYRange", [property], Object.getOwnPropertyDescriptor(_class5.prototype, "rotationYRange"), _class5.prototype), _descriptor7 = _applyDecoratedDescriptor(_class5.prototype, "_itemCount", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 20;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class5.prototype, "_generateCountPerFrame", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 10;
        }
      }), _applyDecoratedDescriptor(_class5.prototype, "itemCount", [property], Object.getOwnPropertyDescriptor(_class5.prototype, "itemCount"), _class5.prototype), _applyDecoratedDescriptor(_class5.prototype, "generateCountPerFrame", [property], Object.getOwnPropertyDescriptor(_class5.prototype, "generateCountPerFrame"), _class5.prototype), _descriptor9 = _applyDecoratedDescriptor(_class5.prototype, "_raycastLayer", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class5.prototype, "_raycastTerrain", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _applyDecoratedDescriptor(_class5.prototype, "raycastLayer", [_dec6], Object.getOwnPropertyDescriptor(_class5.prototype, "raycastLayer"), _class5.prototype), _applyDecoratedDescriptor(_class5.prototype, "currentItemCount", [property], Object.getOwnPropertyDescriptor(_class5.prototype, "currentItemCount"), _class5.prototype), _descriptor11 = _applyDecoratedDescriptor(_class5.prototype, "_volumes", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _applyDecoratedDescriptor(_class5.prototype, "volumes", [_dec8], Object.getOwnPropertyDescriptor(_class5.prototype, "volumes"), _class5.prototype), _descriptor12 = _applyDecoratedDescriptor(_class5.prototype, "_items", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _applyDecoratedDescriptor(_class5.prototype, "items", [_dec10], Object.getOwnPropertyDescriptor(_class5.prototype, "items"), _class5.prototype), _descriptor13 = _applyDecoratedDescriptor(_class5.prototype, "_type", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return VolumeType.Area;
        }
      }), _applyDecoratedDescriptor(_class5.prototype, "type", [_dec12], Object.getOwnPropertyDescriptor(_class5.prototype, "type"), _class5.prototype), _descriptor14 = _applyDecoratedDescriptor(_class5.prototype, "_scatterLineWidth", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _applyDecoratedDescriptor(_class5.prototype, "scatterLineWidth", [property], Object.getOwnPropertyDescriptor(_class5.prototype, "scatterLineWidth"), _class5.prototype), _descriptor15 = _applyDecoratedDescriptor(_class5.prototype, "_scatterLineOffset", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _applyDecoratedDescriptor(_class5.prototype, "scatterLineOffset", [property], Object.getOwnPropertyDescriptor(_class5.prototype, "scatterLineOffset"), _class5.prototype), _descriptor16 = _applyDecoratedDescriptor(_class5.prototype, "_dataType", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return ScatterType.Instance;
        }
      }), _applyDecoratedDescriptor(_class5.prototype, "dataType", [_dec14], Object.getOwnPropertyDescriptor(_class5.prototype, "dataType"), _class5.prototype), _descriptor17 = _applyDecoratedDescriptor(_class5.prototype, "_storedDatas", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class5)) || _class4) || _class4));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/pool.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _defineProperty, Vec2, Vec3, Vec4, Quat, Mat4, cclegacy;

  return {
    setters: [function (module) {
      _defineProperty = module.defineProperty;
    }, function (module) {
      Vec2 = module.Vec2;
      Vec3 = module.Vec3;
      Vec4 = module.Vec4;
      Quat = module.Quat;
      Mat4 = module.Mat4;
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "909c3539B9HBIjKNpHsQPLH", "pool", undefined);

      var Pool = exports('Pool', /*#__PURE__*/function () {
        function Pool(ctor) {
          _defineProperty(this, "_pool", []);

          _defineProperty(this, "_ctor", null);

          this._ctor = ctor;
        }

        var _proto = Pool.prototype;

        _proto.get = function get() {
          var instance = this._pool.pop();

          if (!instance) {
            instance = new this._ctor();
          }

          return instance;
        };

        _proto.put = function put(instance) {
          this._pool.push(instance);
        };

        return Pool;
      }());
      var pool = exports('default', {
        Vec2: new Pool(Vec2),
        Vec3: new Pool(Vec3),
        Vec4: new Pool(Vec4),
        Quat: new Pool(Quat),
        Mat4: new Pool(Mat4)
      });

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/utils.ts", ['cc', './npm.ts', './index.ts', './mesh-utility.ts'], function (exports) {
  'use strict';

  var cclegacy, Mat4, Vec3, Color, gfx, ModelComponent, Node, Layers, cce, MeshUtility;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Mat4 = module.Mat4;
      Vec3 = module.Vec3;
      Color = module.Color;
      gfx = module.gfx;
      ModelComponent = module.ModelComponent;
      Node = module.Node;
      Layers = module.Layers;
    }, function (module) {
      cce = module.cce;
    }, null, function (module) {
      MeshUtility = module.default;
    }],
    execute: function () {
      exports({
        callGizmoFunction: callGizmoFunction,
        create3DNode: create3DNode,
        createLineShape: createLineShape,
        getNodeLocalPostion: getNodeLocalPostion,
        getNodeWorldPostion: getNodeWorldPostion,
        node2nodeLength: node2nodeLength,
        node2nodePos: node2nodePos
      });

      cclegacy._RF.push({}, "976acvUf6FG467gA3kK0MNs", "utils", undefined);

      var tempMat4 = new Mat4();
      var tempVec3 = new Vec3();

      function createLineShape(name, color) {
        var _cce$gizmos$EngineUti = cce.gizmos.EngineUtils,
            createMesh = _cce$gizmos$EngineUti.createMesh,
            addMeshToNode = _cce$gizmos$EngineUti.addMeshToNode,
            setMeshColor = _cce$gizmos$EngineUti.setMeshColor,
            AttributeName = _cce$gizmos$EngineUti.AttributeName,
            updateVBAttr = _cce$gizmos$EngineUti.updateVBAttr,
            updateIBAttr = _cce$gizmos$EngineUti.updateIBAttr;
        name = name || 'Line';
        color = color || Color.WHITE;
        var mesh = MeshUtility.createMesh({
          positions: [new Vec3(0, 0, 0), new Vec3(0, 1, 0), new Vec3(1, 0, 0), new Vec3(1, 1, 0)],
          indices: [0, 1, 1, 2, 2, 3],
          primitiveType: gfx.PrimitiveMode.LINE_LIST
        });
        var node = create3DNode(name);
        addMeshToNode(node, mesh);
        setMeshColor(node, color);
        var model = node.getComponent(ModelComponent);
        var indices = []; //@ts-ignore

        node.updatePoints = function (points) {
          indices.length = 0;

          for (var i = 1; i < points.length; i++) {
            indices.push(i - 1, i);
          }

          MeshUtility.updateOrCreateModelMesh(model, {
            positions: points,
            indices: indices,
            primitiveType: gfx.PrimitiveMode.LINE_LIST
          });
        };

        return node;
      }

      function create3DNode(name) {
        var node = new Node(name);
        node.layer = Layers.Enum.GIZMOS;
        node.modelColor = new Color();
        return node;
      }

      function callGizmoFunction(cb) {
        return;
      }

      function getNodeLocalPostion(node, position, out, isNormal) {
        if (isNormal === void 0) {
          isNormal = false;
        }

        node.getWorldMatrix(tempMat4);
        Mat4.invert(tempMat4, tempMat4);

        if (isNormal) {
          return Vec3.transformMat4Normal(out || new Vec3(), position, tempMat4);
        } else {
          return Vec3.transformMat4(out || new Vec3(), position, tempMat4);
        }
      }

      function getNodeWorldPostion(node, position, out, isNormal) {
        if (isNormal === void 0) {
          isNormal = false;
        }

        node.getWorldMatrix(tempMat4);

        if (isNormal) {
          return Vec3.transformMat4Normal(out || new Vec3(), position, tempMat4);
        } else {
          return Vec3.transformMat4(out || new Vec3(), position, tempMat4);
        }
      }

      function node2nodePos(node1, node2, position, out, isNormal) {
        if (isNormal === void 0) {
          isNormal = false;
        }

        getNodeWorldPostion(node1, position, out, isNormal);
        getNodeLocalPostion(node2, out, out, isNormal);
        return out;
      }

      function node2nodeLength(node1, node2, length) {
        tempVec3.set(length, 0, 0);
        node2nodePos(node1, node2, tempVec3, tempVec3, true);
        return tempVec3.length();
      }

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/setHTML_Div.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, _decorator, Component;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "9f04aPEIIhIIoWWXDQl9dRr", "setHTML_Div", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var SetHTMLDiv = exports('SetHTMLDiv', (_dec = ccclass('SetHTMLDiv'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SetHTMLDiv, _Component);

        function SetHTMLDiv() {
          return _Component.apply(this, arguments) || this;
        }

        var _proto = SetHTMLDiv.prototype;

        _proto.start = function start() {
          var document = window.document;
          var createDiv = document.createElement("div"); //动态创建div

          createDiv.title = "div title.";
          createDiv.id = "id";
          createDiv.className = "class";
          createDiv.style.position = "absolute"; //浮动

          createDiv.style.height = "100%";
          createDiv.style.width = "100%";
          createDiv.style.pointerEvents = "none"; //允许穿透。。。但之后canvas就又不起作用了。。

          createDiv.innerHTML = "div里面的内容!";
          document.body.appendChild(createDiv); //添加到BODY节点中  
        };

        return SetHTMLDiv;
      }(Component)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/mesh-vertex.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './pool.ts'], function (exports) {
  'use strict';

  var _defineProperty, _applyDecoratedDescriptor, _createClass, _initializerDefineProperty, cclegacy, _decorator, Vec3, Vec2, Vec4, Color, Pool;

  return {
    setters: [function (module) {
      _defineProperty = module.defineProperty;
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _createClass = module.createClass;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Vec3 = module.Vec3;
      Vec2 = module.Vec2;
      Vec4 = module.Vec4;
      Color = module.Color;
    }, function (module) {
      Pool = module.Pool;
    }],
    execute: function () {
      exports('MeshVertexFlags', void 0);

      var _dec, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _class3, _temp;

      cclegacy._RF.push({}, "a0f00WqATFBO554BJ62A8gf", "mesh-vertex", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var MeshVertexFlags;

      (function (MeshVertexFlags) {
        MeshVertexFlags[MeshVertexFlags["None"] = 0] = "None";
        MeshVertexFlags[MeshVertexFlags["Position"] = 1] = "Position";
        MeshVertexFlags[MeshVertexFlags["Normal"] = 2] = "Normal";
        MeshVertexFlags[MeshVertexFlags["Tangent"] = 4] = "Tangent";
        MeshVertexFlags[MeshVertexFlags["UV"] = 8] = "UV";
        MeshVertexFlags[MeshVertexFlags["UV1"] = 16] = "UV1";
        MeshVertexFlags[MeshVertexFlags["Color"] = 32] = "Color";
      })(MeshVertexFlags || (MeshVertexFlags = exports('MeshVertexFlags', {})));

      var MeshVertex = exports('default', (_dec = ccclass('MeshVertex'), _dec(_class = (_class2 = (_temp = _class3 = /*#__PURE__*/function () {
        function MeshVertex() {
          _initializerDefineProperty(this, "position", _descriptor, this);

          _initializerDefineProperty(this, "normal", _descriptor2, this);

          _initializerDefineProperty(this, "tangent", _descriptor3, this);

          _initializerDefineProperty(this, "uv", _descriptor4, this);

          _initializerDefineProperty(this, "uv1", _descriptor5, this);

          _initializerDefineProperty(this, "color", _descriptor6, this);

          _defineProperty(this, "flag", 0);
        }

        MeshVertex.create = function create(position, normal, uv, tangent, color, uv1) {
          var v = new MeshVertex();
          v.set(position, normal, uv, tangent, color, uv1);
          return v;
        };

        var _proto = MeshVertex.prototype;

        _proto.set = function set(position, normal, uv, tangent, color, uv1) {
          if (position instanceof MeshVertex) {
            var vert = position;
            this.position.set(vert.position);
            this.normal.set(vert.normal);
            this.uv.set(vert.uv);
            this.uv1.set(vert.uv1);
            this.tangent.set(vert.tangent);
            this.color.set(vert.color);
            this.flag = vert.flag;
          } else {
            var flag = 0;

            if (position) {
              flag |= MeshVertexFlags.Position;
              this.position.set(Vec3.ZERO);
            }

            if (normal) {
              flag |= MeshVertexFlags.Normal;
              this.normal.set(Vec3.ZERO);
            }

            if (uv) {
              flag |= MeshVertexFlags.UV;
              this.uv.set(Vec2.ZERO);
            }

            if (uv1) {
              flag |= MeshVertexFlags.UV1;
              this.uv1.set(Vec2.ZERO);
            }

            if (tangent) {
              flag |= MeshVertexFlags.Tangent;
              this.tangent.set(Vec4.ZERO);
            }

            if (color) {
              flag |= MeshVertexFlags.Color;
              this.color.set(Color.WHITE);
            }

            this.flag = flag;
          }

          return this;
        };

        _proto.reset = function reset() {
          this.position.set(Vec3.ZERO);
          this.normal.set(Vec3.ZERO);
          this.uv.set(Vec2.ZERO);
          this.uv1.set(Vec2.ZERO);
          this.tangent.set(Vec4.ZERO);
          this.color.set(Color.WHITE);
          this.flag = 0;
        };

        _createClass(MeshVertex, null, [{
          key: "pool",
          get: function get() {
            if (!this._pool) {
              this._pool = new Pool(MeshVertex);
            }

            return this._pool;
          }
        }]);

        return MeshVertex;
      }(), _defineProperty(_class3, "_pool", void 0), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "position", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec3();
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "normal", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec3();
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "tangent", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec4();
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "uv", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec2();
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "uv1", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec2();
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "color", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Color();
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SetCameraMovePath.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _defineProperty, cclegacy, _decorator, Node, Vec3, tween, TweenSystem, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Vec3 = module.Vec3;
      tween = module.tween;
      TweenSystem = module.TweenSystem;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp;

      cclegacy._RF.push({}, "a6187arvetOfooAqE07QX/c", "SetCameraMovePath", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var SetCameraMovePath = exports('SetCameraMovePath', (_dec = ccclass('SetCameraMovePath'), _dec2 = property(Node), _dec3 = property([Node]), _dec4 = property(Node), _dec5 = property([Number]), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SetCameraMovePath, _Component);

        function SetCameraMovePath() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "m_node", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "node_btns", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "nodeArray", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "tween_times", _descriptor4, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "tween", void 0);

          _defineProperty(_assertThisInitialized(_this), "init_pos", void 0);

          _defineProperty(_assertThisInitialized(_this), "_debugMeshLine", null);

          return _this;
        }

        var _proto = SetCameraMovePath.prototype;

        _proto.start = function start() {
          //初始点位置
          this.init_pos = new Vec3(this.m_node.position.x, this.m_node.position.y, this.m_node.position.z);
          this.myTween();
        };

        _proto.myTween = function myTween() {
          var children = this.nodeArray.children;
          console.log(children.length); //用for循环，来进行tween呢，或者动态改 to的状态

          this.tween = tween(this.m_node);

          for (var i = 0; i < children.length; i++) {
            var pot = new Vec3(children[i].position.x, this.m_node.position.y, children[i].position.z);
            this.tween.to(this.tween_times[i], {
              position: pot
            });
          } //  this.tween.start();

        };

        _proto.btn_start = function btn_start() {
          console.log("btn_start");
          this.tween.start(); //隐藏 开始按钮
          // this.node_btns[0].active=false;
        } //暂停
        ;

        _proto.btn_pause = function btn_pause() {
          console.log("暂停");
          TweenSystem.instance.ActionManager.pauseTarget(this.m_node);
        };

        _proto.btn_resume = function btn_resume() {
          //恢复动作
          console.log("恢复"); // const c = new TweenSystem(); 
          // c.ActionManager.resumeTarget(this.node);//-----------没有起作用

          TweenSystem.instance.ActionManager.resumeTarget(this.m_node);
        };

        _proto.btn_stop = function btn_stop() {
          console.log("btn_stop");
          this.tween.stop();
          this.m_node.position = this.init_pos; //重置为初始点
          //显示开始按钮

          this.node_btns[0].active = true; // let test = find("Plane");
          // let com = test.getComponent(MeshRenderer);
          // com.material.setProperty('mainTexture', texture);//材质赋值
        };

        return SetCameraMovePath;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "m_node", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "node_btns", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "nodeArray", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "tween_times", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/controller.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './npm.ts', './index.ts', './utils.ts'], function (exports) {
  'use strict';

  var _defineProperty, cclegacy, js, cce;

  return {
    setters: [function (module) {
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      js = module.js;
    }, function (module) {
      cce = module.cce;
    }, null, null],
    execute: function () {
      cclegacy._RF.push({}, "aa4a2A2+8hPZLJSXNh0jqHD", "controller", undefined);

      var Controller = exports('default', /*#__PURE__*/function () {
        var _proto = Controller.prototype; //#region  TODO: change to declare 

        _proto.createShapeNode = function createShapeNode(name) {
          return cce.gizmos.ControllerBase.prototype.createShapeNode.call(this, name);
        };

        _proto.initHandle = function initHandle(node, axisName) {
          return cce.gizmos.ControllerBase.prototype.initHandle.call(this, node, axisName);
        };

        _proto.updateController = function updateController() {
          return cce.gizmos.ControllerBase.prototype.updateController.call(this);
        };

        _proto.show = function show() {
          return cce.gizmos.ControllerBase.prototype.show.call(this);
        };

        _proto.hide = function hide() {
          return cce.gizmos.ControllerBase.prototype.hide.call(this);
        };

        _proto.registerCameraMovedEvent = function registerCameraMovedEvent() {
          return cce.gizmos.ControllerBase.prototype.registerCameraMovedEvent.call(this);
        };

        _proto.unregisterCameraMoveEvent = function unregisterCameraMoveEvent() {
          return cce.gizmos.ControllerBase.prototype.unregisterCameraMoveEvent.call(this);
        };

        _proto.adjustControllerSize = function adjustControllerSize() {
          return cce.gizmos.ControllerBase.prototype.adjustControllerSize.call(this);
        } //#endregion
        ;

        function Controller(rootNode) {
          _defineProperty(this, "shape", null);

          _defineProperty(this, "_lockSize", true);

          js.addon(this, new cce.gizmos.ControllerBase(rootNode));
        }

        _proto.onControllerMouseDown = function onControllerMouseDown(event) {};

        _proto.onControllerMouseMove = function onControllerMouseMove(event) {};

        _proto.onControllerMouseUp = function onControllerMouseUp(event) {};

        _proto.onMouseDown = function onMouseDown(event) {
          this.onControllerMouseDown(event);
        };

        _proto.onMouseMove = function onMouseMove(event) {
          this.onControllerMouseMove(event);
        };

        _proto.onMouseUp = function onMouseUp(event) {
          this.onControllerMouseUp(event);
        };

        _proto.onMouseLeave = function onMouseLeave(event) {
          this.onMouseUp(event);
        };

        return Controller;
      }());
      if (CC_EDITOR) ;

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/testTree.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Prefab, instantiate, Vec3, UITransform, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Prefab = module.Prefab;
      instantiate = module.instantiate;
      Vec3 = module.Vec3;
      UITransform = module.UITransform;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp;

      cclegacy._RF.push({}, "abc19n53L9ENL0mZM3+szFU", "testTree", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var TestTree = exports('TestTree', (_dec = ccclass('TestTree'), _dec2 = property(Node), _dec3 = property(Prefab), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(TestTree, _Component);

        function TestTree() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "f_node", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "treePrefab", _descriptor2, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = TestTree.prototype; //树节点 基础按钮

        _proto.start = function start() {
          var item1 = instantiate(this.treePrefab);
          item1.parent = this.f_node;
          item1.position = new Vec3(-82.407, 235.45, 0);
          var t1 = item1.getComponent(UITransform);

          for (var index = 0; index < 8; index++) {
            var item = instantiate(this.treePrefab);
            item.parent = item1;
            var t = item.getComponent(UITransform);
            var w = t1.width; //预制体 宽度

            var h = t.height * (index + 1); //预制体 高度

            item.position = new Vec3(w, -h, 0);
          }
        };

        return TestTree;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "f_node", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "treePrefab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ModelTest.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Prefab, instantiate, Layers, UIMeshRenderer, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Prefab = module.Prefab;
      instantiate = module.instantiate;
      Layers = module.Layers;
      UIMeshRenderer = module.UIMeshRenderer;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp;

      cclegacy._RF.push({}, "ae656PcErNI2r2mzTB4GGiH", "ModelTest", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var ModelTest = exports('ModelTest', (_dec = ccclass('ModelTest'), _dec2 = property({
        type: Node
      }), _dec3 = property({
        type: Prefab
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ModelTest, _Component);

        function ModelTest() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "mount", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "prefab", _descriptor2, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = ModelTest.prototype;

        _proto.start = function start() {
          var c = instantiate(this.prefab);
          c.layer = Layers.Enum.UI_2D;
          c.setScale(100, 100, 100);
          this.mount.addChild(c);
          c.addComponent(UIMeshRenderer);
        };

        return ModelTest;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "mount", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "prefab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/npm.ts", ['cc', './env'], function (exports) {
  'use strict';

  var cclegacy, EDITOR;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      EDITOR = module.EDITOR;
    }],
    execute: function () {
      exports('formatPath', formatPath);

      cclegacy._RF.push({}, "b24bcl2VmRBGodK/hExc8EZ", "npm", undefined);

      function formatPath(p) {
        return p.replace(/\\/g, '/');
      }

      var cce = exports('cce', EDITOR);
      var io = exports('io', EDITOR);
      var path = exports('path', EDITOR);
      var fse = exports('fse', EDITOR);
      var base642arraybuffer = exports('base642arraybuffer', EDITOR);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/index.ts", ['cc', './npm.ts', './editor.ts'], function (exports) {
  'use strict';

  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      var _setter = {};
      _setter.base642arraybuffer = module.base642arraybuffer;
      _setter.cce = module.cce;
      _setter.formatPath = module.formatPath;
      _setter.fse = module.fse;
      _setter.io = module.io;
      _setter.path = module.path;
      exports(_setter);
    }, function (module) {
      var _setter = {};
      _setter.Editor = module.Editor;
      _setter.projectAssetPath = module.projectAssetPath;
      _setter.projectPath = module.projectPath;
      exports(_setter);
    }],
    execute: function () {
      cclegacy._RF.push({}, "b55291IcEJJrrvhmxlYUxZT", "index", undefined);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/scatter-volume.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './event.ts', './mathf.ts', './spline-util-base.ts', './type.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _defineProperty, _createClass, cclegacy, _decorator, Vec3, Event, pointInPolygonAreaXZ, pointPolygonMinDistXZ, SplineUtilBase, VolumeType;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _defineProperty = module.defineProperty;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Vec3 = module.Vec3;
    }, function (module) {
      Event = module.default;
    }, function (module) {
      pointInPolygonAreaXZ = module.pointInPolygonAreaXZ;
      pointPolygonMinDistXZ = module.pointPolygonMinDistXZ;
    }, function (module) {
      SplineUtilBase = module.default;
    }, function (module) {
      VolumeType = module.VolumeType;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp;

      cclegacy._RF.push({}, "bbf2asYtpNNfqNmnARQpuH4", "scatter-volume", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property,
          type = _decorator.type,
          executeInEditMode = _decorator.executeInEditMode;
      var tempPos = new Vec3();
      var ScatterVolume = exports('ScatterVolume', (_dec = ccclass('ScatterVolume'), _dec2 = type(VolumeType), _dec(_class = executeInEditMode(_class = (_class2 = (_temp = /*#__PURE__*/function (_SplineUtilBase) {
        _inheritsLoose(ScatterVolume, _SplineUtilBase);

        function ScatterVolume() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _SplineUtilBase.call.apply(_SplineUtilBase, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "_volume", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "_type", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "_lineWidth", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "_includeCap", _descriptor4, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "volumeChanged", new Event());

          return _this;
        }

        var _proto = ScatterVolume.prototype;

        _proto.includePos = function includePos(pos) {
          Vec3.subtract(tempPos, pos, this.spline.node.getWorldPosition(tempPos));

          if (this._type === VolumeType.Area) {
            return pointInPolygonAreaXZ(tempPos, this.splineCurve.getPoints());
          } else if (this._type === VolumeType.Line) {
            var points = this.splineCurve.getPoints();
            var res = pointPolygonMinDistXZ(tempPos, points);

            if (res.dist > this._lineWidth) {
              return false;
            }

            if (res.index === 1 || res.index === points.length - 1) {
              var EPSILON = 0.5;
              return res.t >= -EPSILON && res.t <= 1 + EPSILON;
            }

            return true;
          }

          return false;
        };

        _proto.onEnable = function onEnable() {
          this.spline.curveChanged.addListener(this.onCurveChanged, this);
        };

        _proto.onDisable = function onDisable() {
          this.spline.curveChanged.removeListener(this.onCurveChanged, this);
        };

        _proto.onCurveChanged = function onCurveChanged() {
          this.volumeChanged.invoke();
        };

        _createClass(ScatterVolume, [{
          key: "volume",
          get: function get() {
            return this._volume;
          },
          set: function set(value) {
            if (this._volume === value) return;
            this._volume = value;
            this.volumeChanged.invoke();
          }
        }, {
          key: "type",
          get: function get() {
            return this._type;
          },
          set: function set(value) {
            if (this._type === value) return;
            this._type = value;
            this.volumeChanged.invoke();
          }
        }, {
          key: "lineWidth",
          get: function get() {
            return this._lineWidth;
          },
          set: function set(value) {
            if (this._lineWidth === value) return;
            this._lineWidth = value;
            this.volumeChanged.invoke();
          }
        }, {
          key: "includeCap",
          get: function get() {
            return this._includeCap;
          },
          set: function set(value) {
            this._includeCap = value;
            this.volumeChanged.invoke();
          }
        }]);

        return ScatterVolume;
      }(SplineUtilBase), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_volume", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.5;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "volume", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "volume"), _class2.prototype), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_type", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return VolumeType.Area;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "type", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "type"), _class2.prototype), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_lineWidth", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "lineWidth", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "lineWidth"), _class2.prototype), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_includeCap", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "includeCap", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "includeCap"), _class2.prototype)), _class2)) || _class) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/mesh-tesselate.ts", ['cc', './mesh-vertex.ts'], function (exports) {
  'use strict';

  var cclegacy, Vec3, Vec4, Vec2, MeshVertex;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Vec3 = module.Vec3;
      Vec4 = module.Vec4;
      Vec2 = module.Vec2;
    }, function (module) {
      MeshVertex = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "bf32f8QiGBM0pOS/xpwz1v6", "mesh-tesselate", undefined);

      function interpolate(a, b, fraction) {
        if (fraction === void 0) {
          fraction = 0.5;
        }

        var result = MeshVertex.pool.get();
        Vec3.lerp(result.position, a.position, b.position, fraction);
        Vec3.lerp(result.normal, a.normal, b.normal, fraction);
        Vec4.lerp(result.tangent, a.tangent, b.tangent, fraction);
        Vec2.lerp(result.uv, a.uv, b.uv, fraction); // Round the values to 6dp

        return result;
      } // Add a value to a set once and return the index


      function addOnce(value, list) {
        // Look through the array for the value
        for (var i = 0; i < list.length; i++) {
          // Check the values match
          if (list[i].position.equals(value.position)) {
            // Return the index
            return i;
          }
        } // Add the value to the array as it doesn't exist and return the index


        return list.push(value) - 1;
      }

      var meshTesselate = exports('default', {
        tessellate: function tessellate(vertices, faces, divisions) {
          if (divisions === void 0) {
            divisions = 0;
          } // Add one to the number of divisions (zero represents no divisions)


          divisions += 1; // Define the list of new faces

          var faces1 = []; // Add the new interpolated point to the vertices

          var addVertex = function addVertex(i0, i1, factor) {
            return addOnce(interpolate(vertices[i0], vertices[i1], factor), vertices);
          }; // Iterate through each of the faces


          for (var fi = 0, fl = faces.length; fi < fl; fi += 3) {
            var ia = faces[fi],
                ib = faces[fi + 1],
                ic = faces[fi + 2]; // Interpolate the new vertices and add them to the list returning their vertices

            var iab = addVertex(ia, ib, 1 / divisions);
            var iac = addVertex(ia, ic, 1 / divisions); // Add the new face to the faces

            faces1.push(ia, iab, iac); // Iterate for a number of times relative to divisions

            for (var i = 1; i < divisions; ++i) {
              // Interpolate the new vertices and add them to the list returning their vertices
              var iab1 = addVertex(ia, ib, (i + 1) / divisions);
              var iac1 = addVertex(ia, ic, (i + 1) / divisions); // Iterate for a number of times relative to number of subdivisions

              for (var j = 0; j <= i; ++j) {
                // Add the face to the faces set
                faces1.push(addVertex(iab, iac, j / i), addVertex(iab1, iac1, j / (i + 1)), addVertex(iab1, iac1, (j + 1) / (i + 1))); // Add the new face to the faces set

                if (j < i) faces1.push(addVertex(iab, iac, j / i), addVertex(iab1, iac1, (j + 1) / (i + 1)), addVertex(iab, iac, (j + 1) / i));
              }
            }
          } // Return the list of faces and vertices


          return faces1;
        } // tessellateAlongXDist (vertices: MeshVertex[], faces: number[], space = 1) {
        //     for (let fi = 0; fi < faces.length; fi+=3) {
        //         let fa = faces[fi];
        //         let fb = faces[fi+1];
        //         let fc = faces[fi+2];
        //         let va = vertices[fa];
        //         let vb = vertices[fb];
        //         let vc = vertices[fc];
        //         // let minx = Math.min(va.position.x, vb.position.x, vc.position.x);
        //         // let maxx = Math.max(va.position.x, vb.position.x, vc.position.x);
        //         let minx = Number.MAX_SAFE_INTEGER;
        //         let maxx = -Number.MAX_SAFE_INTEGER;
        //         let points = [va, vb, vc];
        //         let minp, maxp, midp;
        //         for (let i = 0; i < points.length; i++) {
        //             let p = points[i]
        //             if (p.position.x > maxx) {
        //                 maxp = p
        //             }
        //             else if (p.position.x < minx) {
        //                 minp = p
        //             }    
        //         }
        //         for (let i = 0; i < points.length; i++) {
        //             let p = points[i]
        //             if (p !== minp && p !== maxp) {
        //                 midp = p
        //             }
        //         }
        //         let total = maxx - minx;
        //         let count = total / space;
        //         let lastX = minx;
        //         for (let i = 1; i < count; i++) {
        //             let x = minx + i * space;
        //             if (x < midp.position.x) {
        //             }
        //         }
        //     }
        // }

      });

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/continuous-line-controller.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './utils.ts', './controller.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, _defineProperty, _assertThisInitialized, cclegacy, createLineShape, Controller;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _defineProperty = module.defineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      createLineShape = module.createLineShape;
    }, function (module) {
      Controller = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "c404dqgha9J1YgpZRVg/sHq", "continuous-line-controller", undefined);

      var ContinuousLineController = exports('default', /*#__PURE__*/function (_Controller) {
        _inheritsLoose(ContinuousLineController, _Controller);

        function ContinuousLineController(rootNode) {
          var _this;

          _this = _Controller.call(this, rootNode) || this;

          _defineProperty(_assertThisInitialized(_this), "_lineShape", null);

          _this.initShape();

          return _this;
        }

        var _proto = ContinuousLineController.prototype;

        _proto.initShape = function initShape() {
          this.createShapeNode('ContinuousLineController');
          this._lineShape = createLineShape('Continuous Line');
          this._lineShape.parent = this.shape;
        };

        _proto.updatePoints = function updatePoints(points) {
          this._lineShape.updatePoints(points);
        };

        return ContinuousLineController;
      }(Controller));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/fixed-buffer.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _defineProperty, cclegacy, gfx, utils;

  return {
    setters: [function (module) {
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      gfx = module.gfx;
      utils = module.utils;
    }],
    execute: function () {
      cclegacy._RF.push({}, "c525aXqpN1H1aoGvmJh1LMN", "fixed-buffer", undefined);

      var builtinAttributes = exports('builtinAttributes', {
        position: {
          name: gfx.AttributeName.ATTR_POSITION,
          format: gfx.Format.RGB32F
        },
        normal: {
          name: gfx.AttributeName.ATTR_NORMAL,
          format: gfx.Format.RGB32F
        },
        uv: {
          name: gfx.AttributeName.ATTR_TEX_COORD,
          format: gfx.Format.RG32F
        },
        uv1: {
          name: gfx.AttributeName.ATTR_TEX_COORD1,
          format: gfx.Format.RG32F
        },
        color: {
          name: gfx.AttributeName.ATTR_COLOR,
          format: gfx.Format.RGBA32F
        },
        tangent: {
          name: gfx.AttributeName.ATTR_TANGENT,
          format: gfx.Format.RGBA32F
        }
      });
      var FixedBuffer = exports('default', /*#__PURE__*/function () {
        function FixedBuffer() {
          _defineProperty(this, "_buffer", null);

          _defineProperty(this, "_ibuffer", null);

          _defineProperty(this, "_vbuffer", null);

          _defineProperty(this, "_dataView", null);

          _defineProperty(this, "_iView", null);

          _defineProperty(this, "_attrs", {});

          _defineProperty(this, "verticesCount", 0);

          _defineProperty(this, "indicesCount", 0);

          _defineProperty(this, "verticesBytes", 0);

          _defineProperty(this, "indicesBytes", 0);

          _defineProperty(this, "verticesOffset", 0);

          _defineProperty(this, "indicesOffset", 0);

          _defineProperty(this, "stride", 0);
        }

        FixedBuffer.create = function create(verticesCount, indicesCount, attributes, _ref) {
          if (attributes === void 0) {
            attributes = ['position', 'normal', 'tangent', 'uv', 'uv1'];
          }

          var _ref$arrayBuffer = _ref.arrayBuffer,
              arrayBuffer = _ref$arrayBuffer === void 0 ? null : _ref$arrayBuffer,
              _ref$arrayBufferVerti = _ref.arrayBufferVerticesOffset,
              arrayBufferVerticesOffset = _ref$arrayBufferVerti === void 0 ? 0 : _ref$arrayBufferVerti,
              _ref$arrayBufferIndic = _ref.arrayBufferIndicesOffset,
              arrayBufferIndicesOffset = _ref$arrayBufferIndic === void 0 ? 0 : _ref$arrayBufferIndic;
          var attrs = {};
          var stride = 0;

          for (var i = 0; i < attributes.length; i++) {
            var builtinAttribute = builtinAttributes[attributes[i]];
            var format = builtinAttribute.format;
            var info = gfx.FormatInfos[format];
            attrs[attributes[i]] = {
              gfxIndex: i,
              offset: stride,
              format: format
            };
            stride += info.size;
          }

          var fixedBuffer = new FixedBuffer();
          fixedBuffer.verticesCount = verticesCount;
          fixedBuffer.indicesCount = indicesCount;
          fixedBuffer.verticesBytes = verticesCount * stride;
          fixedBuffer.indicesBytes = indicesCount * 2;

          if (arrayBuffer) {
            fixedBuffer.verticesOffset = arrayBufferVerticesOffset;
            fixedBuffer.indicesOffset = arrayBufferIndicesOffset;
            fixedBuffer._buffer = arrayBuffer;
          } else {
            fixedBuffer.verticesOffset = 0;
            fixedBuffer.indicesOffset = fixedBuffer.verticesBytes;
            fixedBuffer._buffer = new ArrayBuffer(verticesCount * stride + indicesCount * 2);
          }

          fixedBuffer._dataView = new DataView(fixedBuffer._buffer, fixedBuffer.verticesOffset, fixedBuffer.verticesBytes);
          fixedBuffer._iView = new Uint16Array(fixedBuffer._buffer, fixedBuffer.indicesOffset, indicesCount);
          fixedBuffer._vbuffer = new Uint8Array(fixedBuffer._buffer, fixedBuffer.verticesOffset, fixedBuffer.verticesBytes);
          fixedBuffer._ibuffer = new Uint8Array(fixedBuffer._buffer, fixedBuffer.indicesOffset, fixedBuffer.indicesBytes);
          fixedBuffer.stride = stride;
          fixedBuffer._attrs = attrs;
          return fixedBuffer;
        };

        var _proto = FixedBuffer.prototype;

        _proto.writeVertex = function writeVertex(vertOffset, attrName, value) {
          var attr = this._attrs[attrName];
          var offset = this.verticesOffset + vertOffset * this.stride + attr.offset;
          utils.writeBuffer(this._dataView, value, attr.format, offset, this.stride);
        };

        _proto.writeIndex = function writeIndex(indexOffset, value) {
          var offset = this.indicesOffset + indexOffset;
          this._iView[offset] = value;
        };

        return FixedBuffer;
      }());

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/mathf.ts", ['cc'], function (exports) {
  'use strict';

  var cclegacy, Vec3;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Vec3 = module.Vec3;
    }],
    execute: function () {
      exports({
        pointDistanceXZ: pointDistanceXZ,
        pointInBoundingXZ: pointInBoundingXZ,
        pointInPolygonAreaXZ: pointInPolygonAreaXZ,
        pointInPolygonLineXZ: pointInPolygonLineXZ,
        pointLineDistanceXZ: pointLineDistanceXZ,
        pointPolygonMinDistXZ: pointPolygonMinDistXZ
      });

      cclegacy._RF.push({}, "c7eb5bTTC1Ic58WBxykaEs8", "mathf", undefined);

      var mathf = exports('default', /*#__PURE__*/function () {
        function mathf() {}

        mathf.lerp = function lerp(a, b, t) {
          return a + (b - a) * t;
        };

        return mathf;
      }());

      function pointInPolygonAreaXZ(point, polygon) {
        var inside = false;
        var x = point.x;
        var z = point.z; // use some raycasting to test hits
        // https://github.com/substack/point-in-polygon/blob/master/index.js

        var length = polygon.length;

        for (var i = 0, j = length - 1; i < length; j = i++) {
          var xi = polygon[i].x,
              zi = polygon[i].z,
              xj = polygon[j].x,
              zj = polygon[j].z,
              intersect = zi > z !== zj > z && x < (xj - xi) * (z - zi) / (zj - zi) + xi;
          if (intersect) inside = !inside;
        }

        return inside;
      }

      var tempLinePos = new Vec3();
      var _pointLineDistanceXZRes = {
        dist: 0,
        t: 0
      };

      function pointLineDistanceXZ(point, start, end, isSegment) {
        if (isSegment === void 0) {
          isSegment = false;
        }

        var dx = end.x - start.x;
        var dz = end.z - start.z;
        var d = dx * dx + dz * dz;
        var t = ((point.x - start.x) * dx + (point.z - start.z) * dz) / d;
        var p;

        if (!isSegment) {
          p = tempLinePos.set(start.x + t * dx, 0, start.z + t * dz);
        } else {
          if (d) {
            if (t < 0) p = start;else if (t > 1) p = end;else p = tempLinePos.set(start.x + t * dx, 0, start.z + t * dz);
          } else {
            p = start;
          }
        }

        dx = point.x - p.x;
        dz = point.z - p.z;
        _pointLineDistanceXZRes.dist = Math.sqrt(dx * dx + dz * dz);
        _pointLineDistanceXZRes.t = t;
        return _pointLineDistanceXZRes;
      }

      function pointInPolygonLineXZ(point, polygon, width, includeCap) {
        if (includeCap === void 0) {
          includeCap = true;
        }

        for (var i = 1, l = polygon.length; i < l; i++) {
          var res = pointLineDistanceXZ(point, polygon[i - 1], polygon[i], true);

          if (res.dist < width) {
            if (!includeCap) {
              if (res.t >= 0 && res.t <= 1) {
                return true;
              }
            } else {
              return true;
            }
          }
        }

        return false;
      }

      var _pointPolygonMinDistXZRes = {
        dist: 0,
        index: 0,
        t: 0
      };

      function pointPolygonMinDistXZ(point, polygon) {
        _pointPolygonMinDistXZRes.dist = Number.MAX_SAFE_INTEGER;

        for (var i = 1; i < polygon.length; i++) {
          var res = pointLineDistanceXZ(point, polygon[i - 1], polygon[i], true);

          if (res.dist < _pointPolygonMinDistXZRes.dist) {
            _pointPolygonMinDistXZRes.dist = res.dist;
            _pointPolygonMinDistXZRes.index = i;
            _pointPolygonMinDistXZRes.t = res.t;
          }
        }

        return _pointPolygonMinDistXZRes;
      }

      function pointInBoundingXZ(point, min, max, expandX, expandZ) {
        if (expandX === void 0) {
          expandX = 0;
        }

        if (expandZ === void 0) {
          expandZ = 0;
        }

        return point.x >= min.x - expandX && point.x <= max.x + expandX && point.z >= min.z - expandZ && point.z <= max.z + expandZ;
      }

      function pointDistanceXZ(a, b) {
        var x = b.x - a.x;
        var z = b.z - a.z;
        return Math.sqrt(x * x + z * z);
      }

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/spline-util-renderer.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './spline-util-base.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _defineProperty, _createClass, cclegacy, _decorator, Mat4, js, find, Node, CCObject, SplineUtilBase;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _defineProperty = module.defineProperty;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Mat4 = module.Mat4;
      js = module.js;
      find = module.find;
      Node = module.Node;
      CCObject = module.CCObject;
    }, function (module) {
      SplineUtilBase = module.default;
    }],
    execute: function () {
      var _dec, _class, _class2, _descriptor, _temp;

      cclegacy._RF.push({}, "c7ffansbHtO8oeW7zNMMVAH", "spline-util-renderer", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var RebuildAfterTime = 0;
      var SplineUtilRenderer = exports('default', (_dec = ccclass('SplineUtilRenderer'), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_SplineUtilBase) {
        _inheritsLoose(SplineUtilRenderer, _SplineUtilBase);

        function SplineUtilRenderer() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _SplineUtilBase.call.apply(_SplineUtilBase, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "_showGenerated", _descriptor, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "_generated", null);

          _defineProperty(_assertThisInitialized(_this), "_dirty", true);

          _defineProperty(_assertThisInitialized(_this), "_dirtyTime", 0);

          _defineProperty(_assertThisInitialized(_this), "dirtyWhenSplineMoved", false);

          _defineProperty(_assertThisInitialized(_this), "splineMatrix", null);

          return _this;
        }

        var _proto = SplineUtilRenderer.prototype;

        _proto._onDirtyChanged = function _onDirtyChanged(value) {
          if (value && !this._dirty) {
            this._dirtyTime = 0;
          }

          this._dirty = value;
        };

        _proto.onLoad = function onLoad() {
          this.onCurveChanged();
        };

        _proto.onEnable = function onEnable() {
          if (this.spline) {
            if (this['onCurveChanged']) {
              this.spline.curveChanged.addListener(this['onCurveChanged'], this);
            }

            if (this['onNodeListChanged']) {
              this.spline.nodeListChanged.addListener(this['onNodeListChanged'], this);
            }
          }

          if (this.generated) {
            this.generated.active = true;
          }
        };

        _proto.onDisable = function onDisable() {
          if (this.spline) {
            if (this['onCurveChanged']) {
              this.spline.curveChanged.removeListener(this['onCurveChanged'], this);
            }

            if (this['onNodeListChanged']) {
              this.spline.curveChanged.removeListener(this['onNodeListChanged'], this);
            }
          }

          if (this.generated) {
            this.generated.active = false;
          }
        };

        _proto.onCurveChanged = function onCurveChanged() {
          this.dirty = true;
        };

        _proto.checkSplineMoved = function checkSplineMoved() {
          if (!this.dirtyWhenSplineMoved) return;
          var worldMatrix = this.spline.node.worldMatrix;

          if (!this.splineMatrix) {
            this.splineMatrix = new Mat4();
          } else if (!this.splineMatrix.equals(worldMatrix)) {
            this.dirty = true;
          }

          this.splineMatrix.set(worldMatrix);
        };

        _proto.reset = function reset() {
          if (this._generated) {
            this._generated.parent = null;
            this._generated = null;
          }

          this.onCurveChanged();
        };

        _proto.update = function update(dt) {
          this.checkSplineMoved();

          if (this.dirty && this.spline) {
            this._dirtyTime += dt;

            if (this._dirtyTime >= RebuildAfterTime) {
              this.compute();
              this.dirty = false;
            } //@ts-ignore


            if (CC_EDITOR) cce.Engine.repaintInEditMode();
          }
        };

        _proto.compute = function compute() {};

        _createClass(SplineUtilRenderer, [{
          key: "showGenerated",
          get: function get() {
            return this._showGenerated;
          },
          set: function set(value) {
            this._showGenerated = value;
            this.reset();
          }
        }, {
          key: "generated",
          get: function get() {
            if (!this._generated || this._generated.parent !== this.node) {
              if (this._generated) {
                this._generated.parent = null;
              }

              var generatedName = 'generated ' + js.getClassName(this);
              this._generated = find(generatedName, this.node);

              if (!this._generated) {
                this._generated = new Node(generatedName);

                if (!this._showGenerated) {
                  this._generated._objFlags |= CCObject.Flags.DontSave | CCObject.Flags.HideInHierarchy;
                }

                this._generated.parent = this.node;
              }
            }

            return this._generated;
          }
        }, {
          key: "dirty",
          get: function get() {
            return this._dirty;
          },
          set: function set(value) {
            this._onDirtyChanged(value);
          }
        }]);

        return SplineUtilRenderer;
      }(SplineUtilBase), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_showGenerated", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "showGenerated", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "showGenerated"), _class2.prototype)), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ClickCamera_to_view.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _defineProperty, cclegacy, _decorator, Node, Prefab, geometry, Camera, systemEvent, SystemEvent, MeshRenderer, Vec3, instantiate, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Prefab = module.Prefab;
      geometry = module.geometry;
      Camera = module.Camera;
      systemEvent = module.systemEvent;
      SystemEvent = module.SystemEvent;
      MeshRenderer = module.MeshRenderer;
      Vec3 = module.Vec3;
      instantiate = module.instantiate;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp;

      cclegacy._RF.push({}, "cf0a5up7BxKELPH6klQiONI", "ClickCamera_to_view", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var ClickCameraToView = exports('ClickCameraToView', (_dec = ccclass('ClickCameraToView'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Prefab), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ClickCameraToView, _Component);

        function ClickCameraToView() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "Node_Camera", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "model", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "ClickPrefab", _descriptor3, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "mainCamera", null);

          _defineProperty(_assertThisInitialized(_this), "_ray", new geometry.Ray());

          _defineProperty(_assertThisInitialized(_this), "_modelComps", []);

          return _this;
        }

        var _proto = ClickCameraToView.prototype; //mesh集合

        _proto.start = function start() {
          this.mainCamera = this.Node_Camera.getComponent(Camera); //相机

          systemEvent.on(SystemEvent.EventType.TOUCH_START, this.onTouchStart, this); //点击

          this._modelComps = this.model.getComponentsInChildren(MeshRenderer); //_model的mesh集合
        } //射线 MESH射线
        ;

        _proto.onTouchStart = function onTouchStart(touch, event) {
          console.log("射线");
          var loc = touch.getLocation();
          this.mainCamera.screenPointToRay(loc.x, loc.y, this._ray);

          for (var i = 0; i < this._modelComps.length - 1; i++) {
            var mo = this._modelComps[i].model;
            var me = this._modelComps[i].mesh;
            var opt = {
              'mode': geometry.ERaycastMode.CLOSEST,
              'distance': Infinity,
              'result': [],
              'subIndices': [],
              'doubleSided': false
            }; //相机射线到模型距离

            var dis = geometry.intersect.rayModel(this._ray, mo, opt);

            if (dis) {
              console.log(mo.node.name, dis);
              var r = opt.result;
              var s = opt.subIndices;
              var hitPoint = new Vec3();

              this._ray.computeHit(hitPoint, r[0].distance);

              var point = instantiate(this.ClickPrefab); //生成物体

              point.parent = this.model;
              point.setWorldPosition(hitPoint);
              point.active = true; //调到的坐标 一直不好调

              this.Node_Camera.position = new Vec3(hitPoint.x, hitPoint.y + 30, hitPoint.z + 30);
            }
          }
        } // update (deltaTime: number) {
        //     // [4]
        // }
        ;

        return ClickCameraToView;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Node_Camera", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "model", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "ClickPrefab", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/loadfbx.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _defineProperty, cclegacy, _decorator, Node, Vec3, MeshRenderer, gfx, utils, Material, Vec4, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Vec3 = module.Vec3;
      MeshRenderer = module.MeshRenderer;
      gfx = module.gfx;
      utils = module.utils;
      Material = module.Material;
      Vec4 = module.Vec4;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _temp;

      cclegacy._RF.push({}, "db457coRodGGauK0D8vuE5s", "loadfbx", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var Loadfbx = exports('Loadfbx', (_dec = ccclass('Loadfbx'), _dec2 = property({
        type: Node
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Loadfbx, _Component);

        function Loadfbx() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "testNode", _descriptor, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "p_vertices", []);

          return _this;
        }

        var _proto = Loadfbx.prototype;

        _proto.start = function start() {//1.对文件的加载：gltf文件，.bin文件
          // 把点坐标赋值给p_vertices
          //动态创建 标签
          // var geometry = new THREE.BoxGeometry(100, 100, 100); //创建一个立方体几何对象Geometry
          // console.log(geometry);
          // console.log('几何体顶点位置数据', geometry.vertices);
          // console.log('三角行面数据', geometry.faces);
          // ————————————————
          // 版权声明：本文为CSDN博主「郭隆邦技术博客」的原创文章，遵循CC 4.0 BY - SA版权协议，转载请附上原文出处链接及本声明。
          // 原文链接：https://blog.csdn.net/u014291990/article/details/103315423
        };

        _proto.loadfile = function loadfile() {
          // 点的坐标
          this.p_vertices = [new Vec3(2.5, 0, 4.3301), //0
          new Vec3(-4.073, 0, 4.33), //1
          new Vec3(-1.456, 0, -4.026) //2
          ];
          var positions = [];

          for (var i = 0; i < this.p_vertices.length; i += 1) {
            positions.push(this.p_vertices[i].x);
            positions.push(this.p_vertices[i].y);
            positions.push(this.p_vertices[i].z);
          }

          positions = [1458.2459716796875, 0, 609.8519897460938, 1458.2459716796875, 0, 2719.674072265625, 2987.52001953125, 0, 2719.674072265625, 1458.2459716796875, 0, 609.8519897460938, 2987.52001953125, 0, 2719.674072265625, 2987.52001953125, 0, 609.8519897460938, 1458.2459716796875, 0, 609.8519897460938, 2987.52001953125, 0, 609.8519897460938, 2987.52001953125, 0, 609.8519897460938, 2987.52001953125, 0, 2719.674072265625, 4516.7939453125, 0, 2719.674072265625, 2987.52001953125, 0, 609.8519897460938, 4516.7939453125, 0, 2719.674072265625, 4516.7939453125, 0, 609.8519897460938, 2987.52001953125, 0, 609.8519897460938, 4516.7939453125, 0, 609.8519897460938, 4516.7939453125, 0, 609.8519897460938, 4516.7939453125, 0, 2719.674072265625, 6046.06201171875, 0, 2719.674072265625, 4516.7939453125, 0, 609.8519897460938, 6046.06201171875, 0, 2719.674072265625, 6046.06201171875, 0, 609.8519897460938, 4516.7939453125, 0, 609.8519897460938, 6046.06201171875, 0, 609.8519897460938, 6046.06201171875, 0, 609.8519897460938, 6046.06201171875, 0, 2719.674072265625, 7575.3359375, 0, 2719.674072265625, 6046.06201171875, 0, 609.8519897460938, 7575.3359375, 0, 2719.674072265625, 7575.3359375, 0, 609.8519897460938, 6046.06201171875, 0, 609.8519897460938, 7575.3359375, 0, 609.8519897460938, 1458.2459716796875, 0, -1499.9759521484375, 1458.2459716796875, 0, 609.8519897460938, 2987.52001953125, 0, 609.8519897460938, 1458.2459716796875, 0, -1499.9759521484375, 2987.52001953125, 0, 609.8519897460938, 2987.52001953125, 0, -1499.9759521484375, 1458.2459716796875, 0, -1499.9759521484375, 2987.52001953125, 0, -1499.9759521484375, 2987.52001953125, 0, -1499.9759521484375, 2987.52001953125, 0, 609.8519897460938, 4516.7939453125, 0, 609.8519897460938, 2987.52001953125, 0, -1499.9759521484375, 4516.7939453125, 0, 609.8519897460938, 4516.7939453125, 0, -1499.9759521484375, 2987.52001953125, 0, -1499.9759521484375, 4516.7939453125, 0, -1499.9759521484375, 4516.7939453125, 0, -1499.9759521484375, 4516.7939453125, 0, 609.8519897460938, 6046.06201171875, 0, 609.8519897460938, 4516.7939453125, 0, -1499.9759521484375, 6046.06201171875, 0, 609.8519897460938, 6046.06201171875, 0, -1499.9759521484375, 4516.7939453125, 0, -1499.9759521484375, 6046.06201171875, 0, -1499.9759521484375, 6046.06201171875, 0, -1499.9759521484375, 6046.06201171875, 0, 609.8519897460938, 7575.3359375, 0, 609.8519897460938, 6046.06201171875, 0, -1499.9759521484375, 7575.3359375, 0, 609.8519897460938, 7575.3359375, 0, -1499.9759521484375, 6046.06201171875, 0, -1499.9759521484375, 7575.3359375, 0, -1499.9759521484375, 1458.2459716796875, 0, -3609.798095703125, 1458.2459716796875, 0, -1499.9759521484375, 2987.52001953125, 0, -1499.9759521484375, 1458.2459716796875, 0, -3609.798095703125, 2987.52001953125, 0, -1499.9759521484375, 2987.52001953125, 0, -3609.798095703125, 1458.2459716796875, 0, -3609.798095703125, 2987.52001953125, 0, -3609.798095703125, 2987.52001953125, 0, -3609.798095703125, 2987.52001953125, 0, -1499.9759521484375, 4516.7939453125, 0, -1499.9759521484375, 2987.52001953125, 0, -3609.798095703125, 4516.7939453125, 0, -1499.9759521484375, 4516.7939453125, 0, -3609.798095703125, 2987.52001953125, 0, -3609.798095703125, 4516.7939453125, 0, -3609.798095703125, 4516.7939453125, 0, -3609.798095703125, 4516.7939453125, 0, -1499.9759521484375, 6046.06201171875, 0, -1499.9759521484375, 4516.7939453125, 0, -3609.798095703125, 6046.06201171875, 0, -1499.9759521484375, 6046.06201171875, 0, -3609.798095703125, 4516.7939453125, 0, -3609.798095703125, 6046.06201171875, 0, -3609.798095703125, 6046.06201171875, 0, -3609.798095703125, 6046.06201171875, 0, -1499.9759521484375, 7575.3359375, 0, -1499.9759521484375, 6046.06201171875, 0, -3609.798095703125, 7575.3359375, 0, -1499.9759521484375, 7575.3359375, 0, -3609.798095703125, 6046.06201171875, 0, -3609.798095703125, 7575.3359375, 0, -3609.798095703125, 1458.2459716796875, 0, -5719.6259765625, 1458.2459716796875, 0, -3609.798095703125, 2987.52001953125, 0, -3609.798095703125, 1458.2459716796875, 0, -5719.6259765625, 2987.52001953125, 0, -3609.798095703125, 2987.52001953125, 0, -5719.6259765625, 1458.2459716796875, 0, -5719.6259765625, 2987.52001953125, 0, -5719.6259765625, 2987.52001953125, 0, -5719.6259765625, 2987.52001953125, 0, -3609.798095703125, 4516.7939453125, 0, -3609.798095703125, 2987.52001953125, 0, -5719.6259765625, 4516.7939453125, 0, -3609.798095703125, 4516.7939453125, 0, -5719.6259765625, 2987.52001953125, 0, -5719.6259765625, 4516.7939453125, 0, -5719.6259765625, 4516.7939453125, 0, -5719.6259765625, 4516.7939453125, 0, -3609.798095703125, 6046.06201171875, 0, -3609.798095703125, 4516.7939453125, 0, -5719.6259765625, 6046.06201171875, 0, -3609.798095703125, 6046.06201171875, 0, -5719.6259765625, 4516.7939453125, 0, -5719.6259765625, 6046.06201171875, 0, -5719.6259765625, 6046.06201171875, 0, -5719.6259765625, 6046.06201171875, 0, -3609.798095703125, 7575.3359375, 0, -3609.798095703125, 6046.06201171875, 0, -5719.6259765625, 7575.3359375, 0, -3609.798095703125, 7575.3359375, 0, -5719.6259765625, 6046.06201171875, 0, -5719.6259765625, 7575.3359375, 0, -5719.6259765625, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], this.setPolygon(positions);
        } //创建面片
        ;

        _proto.setPolygon = function setPolygon(vertices) {
          //vertices 顶点数组      
          var numberOfTriangles = this.p_vertices.length - 2; //三角形的数量等于顶点数减2
          //几何索引

          var indices = [numberOfTriangles * 3]; //triangles数组大小等于三角形数量乘3 此时是15

          indices = [0, 1, 2, 2, 1, 0, 1, 0, 2];
          console.log(indices);
          indices = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; //创建物体，再赋值点信息    

          var go1 = this.testNode;
          go1.name = "Mesh_1"; // go1.parent = this.LineParenttest; //添加父节点

          var mesh = go1.getComponent(MeshRenderer); //用于访问网格的类。

          for (var i = 0; i < this.p_vertices.length; i++) {
            var u = this.p_vertices[i].x + 0.5;
            var v = this.p_vertices[i].z + 0.5;
          } // //主要是在这个了，赋值点和法向
          // console.log("赋值点:" + window.gltf_verticesColors);
          // console.log(window.gltf_indices);


          var primitiveMode = gfx.PrimitiveMode.TRIANGLE_STRIP;
          var attributes = [{
            name: gfx.AttributeName.ATTR_NORMAL,
            format: gfx.Format.RGB32F
          }];
          var IGeometry = {
            positions: vertices,
            //vertices,//positions,// 顶点位置
            // indices: indices, //indices,//几何索引，当使用索引绘制时。
            // positions: window.gltf_verticesColors, //vertices,//positions,// 顶点位置
            indices: indices,
            //window.gltf_indices, //indices,//几何索引，当使用索引绘制时。
            // uvs: uvs,//纹理坐标
            primitiveMode: primitiveMode,
            //几何顶点的拓扑图元。默认值是TRIANGLE_LIST。
            attributes: attributes // 顶点属性 specify vertex attributes, use (positions|normals|uvs|colors) as keys

          };
          var creatmesh = utils.createMesh(IGeometry);
          creatmesh.onLoaded();
          var lineMat = new Material();
          lineMat.initialize({
            effectName: 'unlit',
            states: {
              primitive: gfx.PrimitiveMode.TRIANGLE_LIST
            } //states: { primitive: gfx.PrimitiveMode.TRIANGLE_FAN},

          });
          lineMat.setProperty('mainColor', new Vec4(0, 255, 0, 1));
          mesh.material = lineMat; //this.mat;

          mesh.mesh = creatmesh;
        };

        return Loadfbx;
      }(Component), _temp), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "testNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/webvideoPlayer.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _defineProperty, cclegacy;

  return {
    setters: [function (module) {
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "de822OzM5ZNb6s5W5TJRAEY", "webvideoPlayer", undefined);

      var webvideoPlayer = exports('default', /*#__PURE__*/function () {
        // private __eventCallback = {};
        function webvideoPlayer() {
          _defineProperty(this, "_id", '__cocos_webvideoPlayer__');

          _defineProperty(this, "_playing", false);

          _defineProperty(this, "_timeupdate", false);

          _defineProperty(this, "_copyVideo", false);

          _defineProperty(this, "_gl", null);

          _defineProperty(this, "_texture", null);

          _defineProperty(this, "_video", null);

          _defineProperty(this, "_cb_videoOpen", null);

          _defineProperty(this, "_cb_videoFirstFrame", null);

          _defineProperty(this, "_cb_videoProgress", null);

          _defineProperty(this, "_cb_videoFinish", null);

          _defineProperty(this, "_cb_videoError", null);

          _defineProperty(this, "_cb_videoLoading", null);

          _defineProperty(this, "_cb_videoWorking", null);

          _defineProperty(this, "_cb_videoFirstFrame_iscall", false);

          _defineProperty(this, "__eventListeners", {});
        }

        var _proto = webvideoPlayer.prototype;

        _proto.getTexture = function getTexture() {
          return this._texture;
        };

        _proto._bindEvent = function _bindEvent(video) {
          var _this = this;

          var cbs = this.__eventListeners;

          var checkReady = function checkReady() {
            if (_this._playing && _this._timeupdate) {
              _this._copyVideo = true;
            }
          };

          cbs.play = function () {
            cc.log('video.addEventListener play');
          };

          cbs.pause = function () {
            cc.log('video.addEventListener pause');
          };

          cbs.playing = function () {
            cc.log('video.addEventListener playing');
            _this._playing = true;
            checkReady();
          };

          cbs.canplay = function () {
            cc.log('video.addEventListener canplay');
            _this._cb_videoWorking && _this._cb_videoWorking();
          };

          cbs.canplaythrough = function () {
            cc.log('video.addEventListener canplaythrough');
          };

          cbs.suspend = function () {
            cc.log('video.addEventListener suspend');
          };

          cbs.ended = function () {
            cc.log('video.addEventListener ended');
            _this._cb_videoFinish && _this._cb_videoFinish();
          };

          cbs.error = function () {
            cc.log('video.addEventListener error');
            _this._cb_videoError && _this._cb_videoError();
          };

          cbs.loadeddata = function () {
            cc.log('video.addEventListener loadeddata');
            _this._cb_videoOpen && _this._cb_videoOpen(true);
          };

          cbs.timeupdate = function () {
            // cc.log('video.addEventListener timeupdate')
            _this._timeupdate = true;
            checkReady();

            if (_this._cb_videoFirstFrame && !_this._cb_videoFirstFrame_iscall) {
              _this._cb_videoFirstFrame_iscall = true;

              _this._cb_videoFirstFrame('');
            }
          };

          video.addEventListener('play', cbs.play, true);
          video.addEventListener('pause', cbs.pause, true);
          video.addEventListener('playing', cbs.playing, true);
          video.addEventListener('canplay', cbs.canplay, true);
          video.addEventListener('canplaythrough', cbs.canplaythrough, true);
          video.addEventListener('suspend', cbs.suspend, true);
          video.addEventListener('ended', cbs.ended, true);
          video.addEventListener('error', cbs.error, true);
          video.addEventListener('loadeddata', cbs.loadeddata, true);
          video.addEventListener('timeupdate', cbs.timeupdate, true);
        };

        _proto.open = function open(url, cb) {
          var _this2 = this;

          this.initTexture(function () {
            _this2._gl = _this2.getGL();
            _this2._video = _this2.setupVideo(url);
            cb && cb(_this2._video.duration);
          });
        };

        _proto.getGL = function getGL() {
          var gl = cc.renderer.device._gl;
          return gl;
        };

        _proto.setupVideo = function setupVideo(url) {
          // 1.创建video
          var video = document.createElement('video'); //还是 做的web 页面的video方法 其实我可以拿出其中一部分来 给自己用

          video.volume = 0;
          video.id = this._id;
          video.autoplay = true; // video.muted = true;

          video.loop = false;

          this._bindEvent(video);

          video.src = url;
          video.play();
          return video;
        };

        _proto.initTexture = function initTexture(cb) {
          var _this3 = this;

          cc.resources.load('shader/video/video_texture', cc.Texture2D, function (err, asset) {
            _this3._texture = asset;
            cb && cb();
          }); // let texture = new cc.renderer.Texture2D(cc.renderer.device, {})
          // return texture;
          // let texture = new cc.Texture2D()
          // return texture;
        };

        _proto.updateTexture = function updateTexture(gl, texture, video) {
          gl.bindTexture(gl.TEXTURE_2D, texture._glID);
          gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, video);
        };

        _proto.update = function update(dt) {
          if (this._copyVideo && this._texture) {
            // cc.log('video.addEventListener _cb_videoProgress:', this._video.currentTime + '/' + this._video.duration)
            this.updateTexture(this._gl, this._texture._texture, this._video);

            this._cb_videoProgress(this._video.currentTime, this._video.duration);
          }
        };

        _proto.destroy = function destroy() {
          var cbs = this.__eventListeners;
          var video = this._video;
          video.removeEventListener('play', cbs.play, true);
          video.removeEventListener('pause', cbs.pause, true);
          video.removeEventListener('playing', cbs.pause, true);
          video.removeEventListener('canplay', cbs.canplay, true);
          video.removeEventListener('canplaythrough', cbs.canplaythrough, true);
          video.removeEventListener('suspend', cbs.suspend, true);
          video.removeEventListener('ended', cbs.ended, true);
          video.removeEventListener('error', cbs.error, true);
          video.removeEventListener('loadeddata', cbs.loadeddata, true);
          video.removeEventListener('timeupdate', cbs.timeupdate, true);
          cc.assetManager.releaseAsset(this._texture);
          video.remove();
        }
        /**
         * 
         * @param v 
         */
        ;

        _proto.setVolume = function setVolume(v) {
          this._video.volume = v;
        };

        _proto.isPlaying = function isPlaying() {
          return this._playing;
        };

        _proto.isPause = function isPause() {
          return !this._playing;
        };

        _proto.startPlay = function startPlay() {
          this._video.play();
        };

        _proto.resumePlay = function resumePlay() {
          this._video.play();
        };

        _proto.pausePlay = function pausePlay() {
          this._video.pause();
        };

        _proto.stopPlay = function stopPlay() {
          this._video.pause();
        }
        /**
         * 
         * @param time 秒
         */
        ;

        _proto.seekPlay = function seekPlay(time) {
          this._video.currentTime = time;
        }
        /**
         * 打开视频文件成功
         * @param cb return {boolean} true
         */
        ;

        _proto.setVideoOpenCallback = function setVideoOpenCallback(cb) {
          this._cb_videoOpen = cb;
        }
        /**
         * 可以开始渲染第一帧
         * @param cb return {string} shader_key
         */
        ;

        _proto.setVideoFirstFrameCallback = function setVideoFirstFrameCallback(cb) {
          this._cb_videoFirstFrame = cb;
        }
        /**
         * 播放进度
         * @param cb return {process,total}
         */
        ;

        _proto.setVideoProgressCallback = function setVideoProgressCallback(cb) {
          this._cb_videoProgress = cb;
        }
        /**
         * 播放完成
         * @param cb 
         */
        ;

        _proto.setVideoFinishCallback = function setVideoFinishCallback(cb) {
          this._cb_videoFinish = cb;
        }
        /**
         * 播放失败
         * @param cb 
         */
        ;

        _proto.setVideoErrorCallback = function setVideoErrorCallback(cb) {
          this._cb_videoError = cb;
        }
        /**
         * 加载中(开始缓存)
         * @param cb 
         */
        ;

        _proto.setVideoLoadingCallback = function setVideoLoadingCallback(cb) {
          this._cb_videoLoading = cb;
        }
        /**
         * loading结束  开始播放
         * @param cb 
         */
        ;

        _proto.setVideoWorkingCallback = function setVideoWorkingCallback(cb) {
          this._cb_videoWorking = cb;
        };

        return webvideoPlayer;
      }());

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/reandvideo.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _defineProperty, cclegacy, _decorator, Material, Node, Texture2D, ImageAsset, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Material = module.Material;
      Node = module.Node;
      Texture2D = module.Texture2D;
      ImageAsset = module.ImageAsset;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp;

      cclegacy._RF.push({}, "e3776FYUs9PUb8npcUccSI7", "reandvideo", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var reandvideo = exports('reandvideo', (_dec = ccclass('reandvideo'), _dec2 = property({
        type: Material
      }), _dec3 = property({
        type: Material
      }), _dec4 = property({
        type: Node
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(reandvideo, _Component);

        function reandvideo() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "mesh_Material", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "sprite_Material", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "mesh_Node", _descriptor3, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "_video", null);

          _defineProperty(_assertThisInitialized(_this), "_textssure", new Texture2D());

          _defineProperty(_assertThisInitialized(_this), "canvas_video", null);

          _defineProperty(_assertThisInitialized(_this), "isWebCamera", false);

          return _this;
        }

        var _proto = reandvideo.prototype; //视频 html元素

        _proto.start = function start() {
          this.init();
        };

        _proto.update = function update(deltaTime) {
          //更新贴图
          this.updateTexture();
        };

        _proto.updateTexture = function updateTexture() {
          //更新贴图
          if (this.isWebCamera) {
            //是否为摄像头
            this.WebCamera(); //手机摄像头
          }

          this.canvas_video.getContext('2d').drawImage(this._video, 0, 0, 250, 240);
          var base64String = this.canvas_video.toDataURL('image/png');
          var img = new Image();
          img.setAttribute("crossOrigin", 'Anonymous');
          img.src = base64String;
          var self = this;

          img.onload = function () {
            var imgAsset = new ImageAsset(); //重置此图像资源使用的原始图像源

            imgAsset.reset(img);
            self._textssure.image = imgAsset;
            self.mesh_Material.setProperty('mainTexture', self._textssure);
            self.mesh_Node.setWorldRotationFromEuler(0, self.mesh_Node.eulerAngles.y + 0.1, 0); // let new_texture = self.mesh_Material.getProperty('mainTexture') as Texture2D; //获取贴图  

            self.sprite_Material.setProperty('mainTexture', self._textssure);
          };
        }; //视频 html元素


        _proto.init = function init() {
          var video = document.createElement('video'); //还是 做的web 页面的video方法 其实我可以拿出其中一部分来 给自己用

          console.log(this._video); //window.document.body.appendChild(video);//添加到body中

          video.volume = 0;
          video.id = "video";
          video.autoplay = true;
          video.crossOrigin = "anonymous"; // video.muted = true;

          video.loop = true; //循环播放
          // this._bindEvent(video)

          video.src = "http://download.cocos.org/CocosTest/test-case/movie.mp4"; //公司网络 有限制，用热点就好了~

          this._video = video; //视频 html元素

          var canvas = document.createElement('canvas'); //window.document.body.appendChild(canvas);//   添加到body中

          canvas.id = "canvas_video";
          canvas.width = 250;
          canvas.height = 240;
          canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
          var base64String = canvas.toDataURL('image/png');
          this.canvas_video = canvas; //canvas 元素

          console.log(base64String);

          this._video.play();
        };

        _proto.videoPlay = function videoPlay() {
          //播放视频
          {
            this._video.src = null;
          }
          this._video.currentTime = 0; // 时间位置设置为0 开始位置

          this._video.play();

          this._video.volume = 1;
          console.log("videoPlay");
        };

        _proto.resumePlay = function resumePlay() {
          //恢复播放
          this._video.play();
        };

        _proto.pausePlay = function pausePlay() {
          //暂停播放
          this._video.pause();
        };

        _proto.stopPlay = function stopPlay() {
          //停止播放
          this._video.pause();
        }; //是否为摄像头


        _proto.changeVideo = function changeVideo() {
          //切换视频
          this.isWebCamera = !this.isWebCamera;
          console.log(this.isWebCamera);

          if (this.isWebCamera == false) {
            //是否为摄像头
            this._video.src = "http://download.cocos.org/CocosTest/test-case/movie.mp4";
          }
        };

        _proto.WebCamera = function WebCamera() {
          var _this2 = this; //手机摄像头


          return new Promise(function (resolve, reject) {
            var mediaConstraints = {
              audio: false,
              video: {
                width: _this2._textssure.width,
                height: _this2._textssure.height,
                brightness: {
                  ideal: 2
                }
              }
            };
            navigator.mediaDevices.getUserMedia(mediaConstraints).then(function (mediaStream) {
              _this2._video.srcObject = mediaStream;

              _this2._video.setAttribute('play_video', "true");

              _this2._video.onloadedmetadata = function (e) {
                _this2._video.play();

                resolve(_this2._video);
              };
            })["catch"](function (err) {
              reject(err);
            });
          });
        };

        return reandvideo;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "mesh_Material", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "sprite_Material", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "mesh_Node", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/mesh-bender.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './mesh-utility.ts', './mesh-vertex.ts', './curve-sample.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, _defineProperty, _assertThisInitialized, _createClass, _createForOfIteratorHelperLoose, cclegacy, _decorator, Enum, Vec2, Color, log, Component, clamp, ModelComponent, MeshUtility, MeshVertex, MeshVertexFlags, CurveSample;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _defineProperty = module.defineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Enum = module.Enum;
      Vec2 = module.Vec2;
      Color = module.Color;
      log = module.log;
      Component = module.Component;
      clamp = module.clamp;
      ModelComponent = module.ModelComponent;
    }, function (module) {
      MeshUtility = module.default;
    }, function (module) {
      MeshVertex = module.default;
      MeshVertexFlags = module.MeshVertexFlags;
    }, function (module) {
      CurveSample = module.default;
    }],
    execute: function () {
      exports({
        AlignType: void 0,
        FillingMode: void 0,
        MirrorType: void 0,
        ValueType: void 0
      });

      var _class, _temp;

      cclegacy._RF.push({}, "e6d5cY/mT5Jf50xDNH6cOzK", "mesh-bender", undefined);

      var ccclass = _decorator.ccclass,
          executeInEditMode = _decorator.executeInEditMode; /// <summary>
      /// The mode used by <see cref="MeshBender"/> to bend meshes on the interval.
      /// </summary>

      var FillingMode;

      (function (FillingMode) {
        FillingMode[FillingMode["Once"] = 0] = "Once";
        FillingMode[FillingMode["Repeat"] = 1] = "Repeat";
        FillingMode[FillingMode["StretchToInterval"] = 2] = "StretchToInterval";
      })(FillingMode || (FillingMode = exports('FillingMode', {})));

      Enum(FillingMode);
      var AlignType;

      (function (AlignType) {
        AlignType[AlignType["None"] = 0] = "None";
        AlignType[AlignType["Top"] = 1] = "Top";
        AlignType[AlignType["Bottom"] = 2] = "Bottom";
        AlignType[AlignType["Right"] = 3] = "Right";
        AlignType[AlignType["Left"] = 4] = "Left";
      })(AlignType || (AlignType = exports('AlignType', {})));

      Enum(AlignType);
      var MirrorType;

      (function (MirrorType) {
        MirrorType[MirrorType["None"] = 0] = "None";
        MirrorType[MirrorType["Z"] = 1] = "Z";
        MirrorType[MirrorType["Y"] = 2] = "Y";
      })(MirrorType || (MirrorType = exports('MirrorType', {})));

      Enum(MirrorType);
      var ValueType;

      (function (ValueType) {
        ValueType[ValueType["Absolute"] = 0] = "Absolute";
        ValueType[ValueType["Percent"] = 1] = "Percent";
      })(ValueType || (ValueType = exports('ValueType', {})));

      Enum(ValueType); // fill helpfer

      var _tempWidthRange = new Vec2();

      var _tempHeightRange = new Vec2();

      var _tempZOffset = 0;
      var _tempYOffset = 0;
      var _alignZOffset = 0;
      var _alignYOffset = 0;

      function _beginFill(meshBender) {
        var source = meshBender.source;
        _tempZOffset = 0;
        _tempYOffset = 0;
        _alignZOffset = 0;
        _alignYOffset = 0;

        switch (meshBender.alignType) {
          case AlignType.None:
            break;

          case AlignType.Top:
            _alignYOffset = meshBender.alignOffset;
            _tempYOffset = -(source.minY + source.lengthY);
            break;

          case AlignType.Bottom:
            _alignYOffset = meshBender.alignOffset;
            _tempYOffset = -source.minY;
            break;

          case AlignType.Right:
            _alignZOffset = meshBender.alignOffset;
            _tempZOffset = -(source.minZ + source.lengthZ);
            break;

          case AlignType.Left:
            _alignZOffset = meshBender.alignOffset;
            _tempZOffset = -source.minZ;
            break;
        }

        _tempWidthRange.set(source.minZ + meshBender.widthRange.x * source.lengthZ, source.minZ + meshBender.widthRange.y * source.lengthZ);

        _tempHeightRange.set(source.minY + meshBender.heightRange.x * source.lengthY, source.minY + meshBender.heightRange.y * source.lengthY);
      }

      function _applyVert(meshBender, vert, sample, distanceRatio) {
        vert = MeshVertex.pool.get().set(vert);
        vert.position.z = clamp(vert.position.z, _tempWidthRange.x, _tempWidthRange.y);
        vert.position.y = clamp(vert.position.y, _tempHeightRange.x, _tempHeightRange.y);
        vert.position.z += _tempZOffset;
        vert.position.y += _tempYOffset;

        if (meshBender.widthCurve) {
          vert.position.z *= meshBender.widthCurve.evaluate(distanceRatio, 0.5);
        }

        if (meshBender.heightCurve) {
          vert.position.y *= meshBender.heightCurve.evaluate(distanceRatio, 0.5);
        }

        vert.position.z += _alignZOffset;
        vert.position.y += _alignYOffset;

        if (meshBender.mirror === MirrorType.Y) {
          vert.position.y *= -1;
        } else if (meshBender.mirror === MirrorType.Z) {
          vert.position.z *= -1;
        }

        vert = sample.getBent(vert, vert);
        return vert;
      }

      function _endFill(meshBender, bentVertices, sampleCache, triangles) {
        var vertexFlags = bentVertices[0].flag;
        var colors;

        if (meshBender.useCustomVertexColor) {
          vertexFlags |= MeshVertexFlags.Color;
          colors = [];

          for (var i = 0; i < bentVertices.length; i++) {
            colors.push(meshBender.customVertexColor);
          }
        } else {
          colors = vertexFlags & MeshVertexFlags.Color && bentVertices.map(function (b) {
            return b.color;
          });
        }

        meshBender._vertexFlags = vertexFlags;
        MeshUtility.updateOrCreateModelMesh(meshBender.getComponent(ModelComponent), {
          positions: vertexFlags & MeshVertexFlags.Position && bentVertices.map(function (b) {
            return b.position;
          }),
          normals: vertexFlags & MeshVertexFlags.Normal && bentVertices.map(function (b) {
            return b.normal;
          }),
          tangents: vertexFlags & MeshVertexFlags.Tangent && bentVertices.map(function (b) {
            return b.tangent;
          }),
          uvs: vertexFlags & MeshVertexFlags.UV && bentVertices.map(function (b) {
            return b.uv;
          }),
          uv1s: vertexFlags & MeshVertexFlags.UV1 && bentVertices.map(function (b) {
            return b.uv1;
          }),
          colors: colors,
          indices: triangles || meshBender.source.triangles
        });

        for (var _i = 0; _i < bentVertices.length; _i++) {
          MeshVertex.pool.put(bentVertices[_i]);
        }

        for (var _iterator = _createForOfIteratorHelperLoose(sampleCache), _step; !(_step = _iterator()).done;) {
          var iter = _step.value;
          CurveSample.pool.put(iter[1]);
        }

        sampleCache.clear();
      }

      var MeshBender = exports('default', ccclass(_class = executeInEditMode(_class = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(MeshBender, _Component);

        function MeshBender() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _defineProperty(_assertThisInitialized(_this), "dirty", false);

          _defineProperty(_assertThisInitialized(_this), "result", null);

          _defineProperty(_assertThisInitialized(_this), "useSpline", false);

          _defineProperty(_assertThisInitialized(_this), "spline", null);

          _defineProperty(_assertThisInitialized(_this), "intervalStart", 0);

          _defineProperty(_assertThisInitialized(_this), "intervalEnd", 0);

          _defineProperty(_assertThisInitialized(_this), "curve", null);

          _defineProperty(_assertThisInitialized(_this), "_sampleCache", new Map());

          _defineProperty(_assertThisInitialized(_this), "_vertexFlags", 0);

          _defineProperty(_assertThisInitialized(_this), "_source", null);

          _defineProperty(_assertThisInitialized(_this), "_mode", FillingMode.StretchToInterval);

          _defineProperty(_assertThisInitialized(_this), "_mirror", MirrorType.None);

          _defineProperty(_assertThisInitialized(_this), "_useCustomVertexColor", false);

          _defineProperty(_assertThisInitialized(_this), "_customVertexColor", new Color());

          _defineProperty(_assertThisInitialized(_this), "_offset", 0);

          _defineProperty(_assertThisInitialized(_this), "_offsetValueType", ValueType.Absolute);

          _defineProperty(_assertThisInitialized(_this), "_widthCurve", null);

          _defineProperty(_assertThisInitialized(_this), "_widthRange", new Vec2(0, 1));

          _defineProperty(_assertThisInitialized(_this), "_heightCurve", null);

          _defineProperty(_assertThisInitialized(_this), "_heightRange", new Vec2(0, 1));

          _defineProperty(_assertThisInitialized(_this), "_alignType", AlignType.None);

          _defineProperty(_assertThisInitialized(_this), "_alignOffset", 0);

          return _this;
        }

        var _proto = MeshBender.prototype; /// <summary>
        /// Sets a curve along which the mesh will be bent.
        /// The mesh will be updated if the curve changes.
        /// </summary>
        /// <param name="curve">The <see cref="CubicBezierCurve"/> to bend the source mesh along.</param>

        _proto.setInterval = function setInterval(curve) {
          if (this.curve == curve) return;
          if (curve == null) throw new Error("curve");

          if (this.curve != null) {
            this.curve.changed.removeListener(this.setDirty, this);
          }

          this.curve = curve;
          this.spline = null;
          curve.changed.addListener(this.setDirty, this);
          this.useSpline = false;
          this.dirty = true;
        } /// <summary>
        /// Sets a spline's interval along which the mesh will be bent.
        /// If interval end is absent or set to 0, the interval goes from start to spline length.
        /// The mesh will be update if any of the curve changes on the spline, including curves
        /// outside the given interval.
        /// </summary>
        /// <param name="spline">The <see cref="SplineMesh"/> to bend the source mesh along.</param>
        /// <param name="intervalStart">Distance from the spline start to place the mesh minimum X.<param>
        /// <param name="intervalEnd">Distance from the spline start to stop deforming the source mesh.</param>
        ;

        _proto.setInterval1 = function setInterval1(spline, intervalStart, intervalEnd) {
          if (intervalEnd === void 0) {
            intervalEnd = 0;
          }

          if (this.spline == spline && this.intervalStart == intervalStart && this.intervalEnd == intervalEnd) return;
          if (spline == null) throw new Error("spline");

          if (intervalStart < 0 || intervalStart >= spline.length) {
            throw new Error("interval start must be 0 or greater and lesser than spline length (was " + intervalStart + ")");
          }

          if (intervalEnd != 0 && intervalEnd <= intervalStart || intervalEnd > spline.length) {
            throw new Error("interval end must be 0 or greater than interval start, and lesser than spline length (was " + intervalEnd + ")");
          }

          if (this.spline != null) {
            // unlistening previous spline
            this.spline.curveChanged.removeListener(this.setDirty, this);
          }

          this.spline = spline; // listening new spline

          spline.curveChanged.addListener(this.setDirty, this);
          this.curve = null;
          this.intervalStart = intervalStart;
          this.intervalEnd = intervalEnd;
          this.useSpline = true;
          this.dirty = true;
        };

        _proto.onEnable = function onEnable() {// if (GetComponent<MeshFilter>().sharedMesh != null) {
          //     result = GetComponent<MeshFilter>().sharedMesh;
          // } else {
          //     GetComponent<MeshFilter>().sharedMesh = result = new Mesh();
          //     result.name = "Generated by " + GetType().Name;
          // }
        };

        _proto.update = function update() {
          this.computeIfNeeded();
        };

        _proto.computeIfNeeded = function computeIfNeeded() {
          if (this.dirty) {
            this.compute();
          }
        };

        _proto.setDirty = function setDirty() {
          this.dirty = true;
        } /// <summary>
        /// Bend the mesh. This method may take time and should not be called more than necessary.
        /// Consider using <see cref="ComputeIfNeeded"/> for faster result.
        /// </summary>
        ;

        _proto.compute = function compute() {
          this.dirty = false;

          switch (this.mode) {
            case FillingMode.Once:
              this.fillOnce();
              break;

            case FillingMode.Repeat:
              this.fillRepeat();
              break;

            case FillingMode.StretchToInterval:
              this.fillStretch();
              break;
          }
        };

        _proto.onDestroy = function onDestroy() {
          if (this.curve != null) {
            this.curve.changed.removeListener(this.compute);
          }
        };

        _proto.fillOnce = function fillOnce() {
          var sampleCache = this._sampleCache;
          var source = this.source;
          var bentVertices = [];

          _beginFill(this);

          var offset = this.calcOffset; // for each mesh vertex, we found its projection on the curve

          for (var j = 0; j < source.vertices.length; j++) {
            var vert = source.vertices[j];
            var distance = vert.position.x - source.minX + offset;
            var distanceRate = source.lengthX == 0 ? 0 : Math.abs(vert.position.x - source.minX) / source.lengthX;
            var cacheKey = '' + distance;
            var sample = sampleCache.get(cacheKey);

            if (!sample) {
              if (!this.useSpline) {
                if (distance > this.curve.length) continue;
                sample = this.curve.getSampleAtDistance(distance, CurveSample.pool.get());
              } else {
                var distOnSpline = this.intervalStart + distance; //if (true) { //spline.isLoop) {

                while (distOnSpline > this.spline.length) {
                  distOnSpline -= this.spline.length;
                } //} else if (distOnSpline > spline.Length) {
                //    continue;
                //}


                sample = this.spline.getSampleAtDistance(distOnSpline);
              }

              sampleCache.set(cacheKey, sample);
            }

            vert = _applyVert(this, vert, sample, distanceRate);
            bentVertices.push(vert);
          }

          _endFill(this, bentVertices, sampleCache);
        };

        _proto.fillRepeat = function fillRepeat() {
          var source = this.source;
          var intervalLength = this.useSpline ? (this.intervalEnd == 0 ? this.spline.length : this.intervalEnd) - this.intervalStart : this.curve.length;
          var repetitionCount = Math.floor(intervalLength / source.lengthX);
          var sampleCache = this._sampleCache;
          var sourceVertices = source.vertices; // building triangles and UVs for the repeated mesh

          var triangles = [];

          for (var i = 0; i < repetitionCount + 1; i++) {
            for (var j = 0; j < source.triangles.length; j++) {
              triangles.push(source.triangles[j] + sourceVertices.length * i);
            }
          }

          _beginFill(this); // computing vertices and normals


          var bentVertices = [];
          var offset = this.calcOffset;

          for (var _i2 = 0; _i2 < repetitionCount; _i2++) {
            // for each mesh vertex, we found its projection on the curve
            for (var _j = 0; _j < sourceVertices.length; _j++) {
              var vert = sourceVertices[_j];
              var distance = vert.position.x - source.minX + offset;
              var cacheKey = _i2 + "_" + distance;
              var sample = sampleCache.get(cacheKey);

              if (!sample) {
                if (!this.useSpline) {
                  if (distance > this.curve.length) continue;
                  sample = this.curve.getSampleAtDistance(distance, CurveSample.pool.get());
                } else {
                  var distOnSpline = this.intervalStart + distance; //if (true) { //spline.isLoop) {

                  while (distOnSpline > this.spline.length) {
                    distOnSpline = this.spline.length;
                  } //} else if (distOnSpline > spline.Length) {
                  //    continue;
                  //}


                  sample = this.spline.getSampleAtDistance(distOnSpline);
                }

                sampleCache.set(cacheKey, sample);
              }

              vert = _applyVert(this, vert, sample, distance / intervalLength);
              bentVertices.push(vert);
            }

            offset += source.lengthX;
          } // fill remaining length


          var remainingLength = (this.useSpline ? this.spline.length : this.curve.length) - offset;

          for (var _i3 = 0; _i3 < sourceVertices.length; _i3++) {
            var _vert = sourceVertices[_i3];
            var distanceRate = source.lengthX == 0 ? 0 : Math.abs(_vert.position.x - source.minX) / source.lengthX;

            var _distance = offset + distanceRate * remainingLength;

            var _cacheKey = '' + _distance;

            var _sample = sampleCache.get(_cacheKey);

            if (!_sample) {
              if (!this.useSpline) {
                if (_distance > this.curve.length) continue;
                _sample = this.curve.getSampleAtDistance(_distance, CurveSample.pool.get());
              } else {
                var _distOnSpline = this.intervalStart + _distance; //if (true) { //spline.isLoop) {


                while (_distOnSpline > this.spline.length) {
                  _distOnSpline = this.spline.length;
                } //} else if (distOnSpline > spline.Length) {
                //    continue;
                //}


                _sample = this.spline.getSampleAtDistance(_distOnSpline);
              }

              sampleCache.set(_cacheKey, _sample);
            }

            _vert = _applyVert(this, _vert, _sample, distanceRate);
            bentVertices.push(_vert);
          }

          _endFill(this, bentVertices, sampleCache, triangles);
        };

        _proto.fillStretch = function fillStretch() {
          var bentVertices = [];
          var source = this.source;
          var sampleCache = this._sampleCache;

          _beginFill(this); // for each mesh vertex, we found its projection on the curve


          for (var i = 0; i < source.vertices.length; i++) {
            var vert = source.vertices[i];
            var distanceRate = source.lengthX == 0 ? 0 : Math.abs(vert.position.x - source.minX) / source.lengthX;
            var cacheKey = '' + distanceRate;
            var sample = sampleCache.get(cacheKey);

            if (!sample) {
              if (!this.useSpline) {
                sample = this.curve.getSampleAtDistance(this.curve.length * distanceRate, CurveSample.pool.get());
              } else {
                var intervalLength = this.intervalEnd == 0 ? this.spline.length - this.intervalStart : this.intervalEnd - this.intervalStart;
                var distOnSpline = this.intervalStart + intervalLength * distanceRate;

                if (distOnSpline > this.spline.length) {
                  distOnSpline = this.spline.length;
                  log("dist " + distOnSpline + " spline length " + this.spline.length + " start " + this.intervalStart);
                }

                sample = this.spline.getSampleAtDistance(distOnSpline);
              }

              sampleCache.set(cacheKey, sample);
            }

            vert = _applyVert(this, vert, sample, distanceRate);
            bentVertices.push(vert);
          }

          _endFill(this, bentVertices, sampleCache);
        };

        _createClass(MeshBender, [{
          key: "source",
          get: /// <summary>
          /// The source mesh to bend.
          /// </summary>
          function get() {
            return this._source;
          },
          set: function set(value) {
            if (value == this._source) return;
            this.dirty = true;
            this._source = value;
          }
        }, {
          key: "mode",
          get: /// <summary>
          /// The scaling mode along the spline
          /// </summary>
          function get() {
            return this._mode;
          },
          set: function set(value) {
            if (value == this._mode) return;
            this.dirty = true;
            this._mode = value;
          }
        }, {
          key: "mirror",
          get: function get() {
            return this._mirror;
          },
          set: function set(value) {
            if (value == this._mirror) return;
            this.dirty = true;
            this._mirror = value;
          }
        }, {
          key: "useCustomVertexColor",
          get: function get() {
            return this._useCustomVertexColor;
          },
          set: function set(v) {
            this._useCustomVertexColor = v;
            this.dirty = true;
          }
        }, {
          key: "customVertexColor",
          get: function get() {
            return this._customVertexColor;
          },
          set: function set(v) {
            this._customVertexColor.set(v);

            this.dirty = true;
          }
        }, {
          key: "offset",
          get: function get() {
            return this._offset;
          },
          set: function set(value) {
            this._offset = value;
            this.dirty = true;
          }
        }, {
          key: "offsetValueType",
          get: function get() {
            return this._offsetValueType;
          },
          set: function set(value) {
            this._offsetValueType = value;
            this.dirty = true;
          }
        }, {
          key: "length",
          get: function get() {
            if (this.useSpline) {
              return this.spline.length;
            } else {
              return this.curve.length;
            }
          }
        }, {
          key: "calcOffset",
          get: function get() {
            if (this.offsetValueType === ValueType.Absolute) {
              return this.offset;
            } else {
              return this.offset * this.length;
            }
          }
        }, {
          key: "widthCurve",
          get: function get() {
            return this._widthCurve;
          },
          set: function set(value) {
            this._widthCurve = value;
            this.dirty = true;
          }
        }, {
          key: "widthRange",
          get: function get() {
            return this._widthRange;
          },
          set: function set(value) {
            this._widthRange.set(value);

            this.dirty = true;
          }
        }, {
          key: "heightCurve",
          get: function get() {
            return this._heightCurve;
          },
          set: function set(value) {
            this._heightCurve = value;
            this.dirty = true;
          }
        }, {
          key: "heightRange",
          get: function get() {
            return this._heightRange;
          },
          set: function set(value) {
            this._heightRange.set(value);

            this.dirty = true;
          }
        }, {
          key: "alignType",
          get: function get() {
            return this._alignType;
          },
          set: function set(value) {
            this._alignType = value;
            this.dirty = true;
          }
        }, {
          key: "alignOffset",
          get: function get() {
            return this._alignOffset;
          },
          set: function set(value) {
            this._alignOffset = value;
            this.dirty = true;
          }
        }]);

        return MeshBender;
      }(Component), _temp)) || _class) || _class);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/curve-sample.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './mathf.ts', './pool.ts', './mesh-vertex.ts'], function (exports) {
  'use strict';

  var _createClass, _defineProperty, cclegacy, Vec3, Quat, Vec2, mathf, pool, Pool, MeshVertex;

  return {
    setters: [function (module) {
      _createClass = module.createClass;
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      Vec3 = module.Vec3;
      Quat = module.Quat;
      Vec2 = module.Vec2;
    }, function (module) {
      mathf = module.default;
    }, function (module) {
      pool = module.default;
      Pool = module.Pool;
    }, function (module) {
      MeshVertex = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "e97a3DFPW5DtprWvZMLUB55", "curve-sample", undefined);

      var front = new Vec3(0, 0, 1);
      var RAD = Math.PI / 180;
      var RESET_QUAT = Quat.fromEuler(new Quat(), 0, -90, 0);
      var CurveSample = exports('default', /*#__PURE__*/function () {
        function CurveSample() {
          _defineProperty(this, "location", new Vec3());

          _defineProperty(this, "tangent", new Vec3());

          _defineProperty(this, "up", new Vec3());

          _defineProperty(this, "scale", new Vec2());

          _defineProperty(this, "roll", 0);

          _defineProperty(this, "distanceInCurve", 0);

          _defineProperty(this, "timeInCurve", 0);

          _defineProperty(this, "_transformedUp", null);

          _defineProperty(this, "_rotation", null);

          _defineProperty(this, "_bentRotation", null);
        }

        CurveSample.create = function create(location, tangent, up, scale, roll, distanceInCurve, timeInCurve) {
          return new CurveSample().set(location, tangent, up, scale, roll, distanceInCurve, timeInCurve);
        };

        var _proto = CurveSample.prototype;

        _proto.set = function set(location, tangent, up, scale, roll, distanceInCurve, timeInCurve) {
          this.location.set(location);
          this.tangent.set(tangent);
          this.up.set(up);
          this.scale.set(scale);
          this.roll = roll;
          this.distanceInCurve = distanceInCurve;
          this.timeInCurve = timeInCurve;

          if (this._transformedUp) {
            pool.Vec3.put(this._transformedUp);
            this._transformedUp = null;
          }

          if (this._rotation) {
            pool.Quat.put(this._rotation);
            this._rotation = null;
          }

          if (this._bentRotation) {
            pool.Quat.put(this._bentRotation);
            this._bentRotation = null;
          }

          return this;
        } /// <summary>
        /// Linearly interpolates between two curve samples.
        /// </summary>
        /// <param name="a"></param>
        /// <param name="b"></param>
        /// <param name="t"></param>
        /// <returns></returns>
        ;

        CurveSample.lerp = function lerp(a, b, t, out) {
          var tmp_location = pool.Vec3.get();
          var tmp_tangent = pool.Vec3.get();
          var tmp_up = pool.Vec3.get();
          var tmp_scale = pool.Vec2.get();
          out = out || new CurveSample();
          out.set(Vec3.lerp(tmp_location, a.location, b.location, t), Vec3.lerp(tmp_tangent, a.tangent, b.tangent, t).normalize(), Vec3.lerp(tmp_up, a.up, b.up, t), Vec2.lerp(tmp_scale, a.scale, b.scale, t), mathf.lerp(a.roll, b.roll, t), mathf.lerp(a.distanceInCurve, b.distanceInCurve, t), mathf.lerp(a.timeInCurve, b.timeInCurve, t));
          pool.Vec3.put(tmp_location);
          pool.Vec3.put(tmp_tangent);
          pool.Vec3.put(tmp_up);
          pool.Vec2.put(tmp_scale);
          return out;
        };

        _proto.getBent = function getBent(vert, out) {
          if (!out) {
            out = MeshVertex.create(vert);
          } else if (out !== vert) {
            out.set(vert);
          } // application of scale


          var tempVec3 = pool.Vec3.get();
          Vec3.multiply(out.position, out.position, tempVec3.set(0, this.scale.y, this.scale.x));
          pool.Vec3.put(tempVec3); // application of roll

          var q = pool.Quat.get();
          Quat.fromAxisAngle(q, Vec3.RIGHT, this.roll * RAD);
          Vec3.transformQuat(out.position, out.position, q);
          Vec3.transformQuat(out.normal, out.normal, q);
          Vec3.transformQuat(out.tangent, out.tangent, q);
          pool.Quat.put(q); // reset X value

          out.position.x = 0; // application of the rotation + location

          q = this.bentRotation;
          Vec3.transformQuat(out.position, out.position, q);
          out.position.add(this.location);
          Vec3.transformQuat(out.normal, out.normal, q);
          Vec3.transformQuat(out.tangent, out.tangent, q);
          return out;
        };

        _createClass(CurveSample, [{
          key: "transformedUp",
          get: function get() {
            if (!this._transformedUp) {
              var axisQuat = pool.Quat.get();
              var upVector = pool.Vec3.get();
              Quat.fromAxisAngle(axisQuat, front, this.roll * RAD);
              Vec3.transformQuat(upVector, this.up, axisQuat);
              this._transformedUp = Vec3.cross(new Vec3(), this.tangent, Vec3.cross(upVector, upVector, this.tangent).normalize());
              pool.Quat.put(axisQuat);
              pool.Vec3.put(upVector);
            }

            return this._transformedUp;
          } /// <summary>
          /// Rotation is a look-at quaternion calculated from the tangent, roll and up vector. Mixing non zero roll and custom up vector is not advised.
          /// </summary>

        }, {
          key: "rotation",
          get: function get() {
            if (!this._rotation) {
              this._rotation = Quat.fromViewUp(new Quat(), this.tangent, this.transformedUp);
            }

            return this._rotation;
          }
        }, {
          key: "bentRotation",
          get: function get() {
            if (!this._bentRotation) {
              var tangent = pool.Vec3.get();
              var upVector = pool.Vec3.get();
              tangent.set(this.tangent);
              upVector.set(this.up); // tangent is the same with up
              // excursion tangent a little

              if (Math.abs(Vec3.dot(tangent, this.up) - 1) < 0.01) {
                tangent.x += 0.01;
                tangent.normalize();
              }

              Vec3.cross(upVector, tangent, upVector).normalize();
              Vec3.cross(upVector, upVector, tangent);
              var rotation = new Quat();
              Quat.fromViewUp(rotation, tangent, upVector);
              this._bentRotation = Quat.multiply(rotation, rotation, RESET_QUAT);
              pool.Vec3.put(tangent);
              pool.Vec3.put(upVector);
            }

            return this._bentRotation;
          }
        }], [{
          key: "pool",
          get: function get() {
            if (!this._pool) {
              this._pool = new Pool(CurveSample);
            }

            return this._pool;
          }
        }]);

        return CurveSample;
      }());

      _defineProperty(CurveSample, "_pool", void 0);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/spline-node.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './event.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _defineProperty, _assertThisInitialized, _initializerDefineProperty, _createClass, cclegacy, _decorator, Vec3, Vec2, Component, Event;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _defineProperty = module.defineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _initializerDefineProperty = module.initializerDefineProperty;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Vec3 = module.Vec3;
      Vec2 = module.Vec2;
      Component = module.Component;
    }, function (module) {
      Event = module.default;
    }],
    execute: function () {
      var _dec, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _temp;

      cclegacy._RF.push({}, "ea25fgiLE9K94BRKQOBQ6rg", "spline-node", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var SplineNode = exports('default', (_dec = ccclass('SplineNode'), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SplineNode, _Component);

        function SplineNode() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _defineProperty(_assertThisInitialized(_this), "changed", new Event());

          _initializerDefineProperty(_assertThisInitialized(_this), "_position", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "_direction", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "_up", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "_scale", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "_roll", _descriptor5, _assertThisInitialized(_this));

          return _this;
        }

        _createClass(SplineNode, [{
          key: "position",
          get: function get() {
            return this._position;
          },
          set: function set(v) {
            if (this._position.equals(v)) return;

            this._position.set(v); // this.node.position = v;


            this.changed.invoke(this);
          } /// <summary>
          /// Node direction
          /// </summary>

        }, {
          key: "direction",
          get: function get() {
            return this._direction;
          },
          set: function set(v) {
            if (this._direction.equals(v)) return;

            this._direction.set(v);

            this.changed.invoke(this);
          }
        }, {
          key: "invDirection",
          get: function get() {
            return this.position.clone().multiplyScalar(2).subtract(this.direction);
          },
          set: function set(v) {
            this.direction = this.position.clone().multiplyScalar(2).subtract(v);
          } /// <summary>
          /// Up vector to apply at this node.
          /// Usefull to specify the orientation when the tangent blend with the world UP (gimball lock)
          /// This value is not used on the spline itself but is commonly used on bended content.
          /// </summary>

        }, {
          key: "up",
          get: function get() {
            return this._up;
          },
          set: function set(v) {
            if (this._up.equals(v)) return;

            this._up.set(v);

            this.changed.invoke(this);
          } /// <summary>
          /// Scale to apply at this node.
          /// This value is not used on the spline itself but is commonly used on bended content.
          /// </summary>

        }, {
          key: "scale",
          get: function get() {
            return this._scale;
          },
          set: function set(v) {
            if (this._scale.equals(v)) return;

            this._scale.set(v);

            this.changed.invoke(this);
          } /// <summary>
          /// Roll to apply at this node.
          /// This value is not used on the spline itself but is commonly used on bended content.
          /// </summary>

        }, {
          key: "roll",
          get: function get() {
            return this._roll;
          },
          set: function set(v) {
            if (this._roll === v) return;
            this._roll = v;
            this.changed.invoke(this);
          }
        }]);

        return SplineNode;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_position", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec3();
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "position", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "position"), _class2.prototype), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_direction", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec3();
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "direction", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "direction"), _class2.prototype), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_up", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return Vec3.UP.clone();
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "up", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "up"), _class2.prototype), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_scale", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return Vec2.ONE.clone();
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "scale", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "scale"), _class2.prototype), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "_roll", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "roll", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "roll"), _class2.prototype)), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/gizmo.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './utils.ts'], function (exports) {
  'use strict';

  var _createClass, _defineProperty, cclegacy;

  return {
    setters: [function (module) {
      _createClass = module.createClass;
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, null],
    execute: function () {
      cclegacy._RF.push({}, "ec920DofWZHA6zPB49x/+7d", "gizmo", undefined);

      var Gizmo = exports('default', /*#__PURE__*/function () {
        Gizmo.register = function register(componentName, componentGizmo) {} //#region extends from GizmoBase, TODO: change to declare
        // declare _target: any;
        // declare node: Node;
        // declare nodes: Node[];
        ;

        var _proto = Gizmo.prototype;

        _proto.getGizmoRoot = function getGizmoRoot() {
          return window.cce.gizmos.Gizmo.prototype.getGizmoRoot.call(this);
        };

        _proto.recordChanges = function recordChanges() {
          return window.cce.gizmos.Gizmo.prototype.recordChanges.call(this);
        };

        _proto.commitChanges = function commitChanges() {
          return window.cce.gizmos.Gizmo.prototype.commitChanges.call(this);
        };

        _proto.onComponentChanged = function onComponentChanged(node) {
          return window.cce.gizmos.Gizmo.prototype.onComponentChanged.call(this, node);
        };

        _proto.registerCameraMovedEvent = function registerCameraMovedEvent() {
          return window.cce.gizmos.Gizmo.prototype.registerCameraMovedEvent.call(this);
        };

        _proto.unregisterCameraMoveEvent = function unregisterCameraMoveEvent() {
          return window.cce.gizmos.Gizmo.prototype.unregisterCameraMoveEvent.call(this);
        };

        function Gizmo(target) {
          _defineProperty(this, "_showTransformGizmo", true);

          cc.js.addon(this, new window.cce.gizmos.Gizmo(target));
        }

        _proto.layer = function layer() {
          return 'foreground';
        };

        _proto.updateController = function updateController() {
          this.updateControllerData();
          this.updateControllerTransform();
        };

        _proto.updateControllerData = function updateControllerData() {};

        _proto.updateControllerTransform = function updateControllerTransform() {};

        _proto.onTargetUpdate = function onTargetUpdate() {
          this.updateController();
        };

        _proto.onNodeChanged = function onNodeChanged() {
          this.updateController();
        };

        _proto.showTransformGizmo = function showTransformGizmo(show) {
          // if (!window.cce.gizmos.transformTool) return;
          // // TODO: remove hack
          // if (show) {
          //     window.cce.gizmos.transformTool.show();
          // }
          // else {
          //     window.cce.gizmos.transformTool.hide();
          // }
          this._showTransformGizmo = show;
        };

        _proto.getTransformGizmoNode = function getTransformGizmoNode() {
          var transformTool = window.cce.gizmos.transformTool;
          return transformTool && transformTool.node;
        };

        _proto.show = function show() {
          window.cce.gizmos.Gizmo.prototype.show.call(this);
        };

        _proto.onUpdate = function onUpdate() {
          // TODO: show/hide transformTool in showTransformGizmo has no effect, should remove hack
          if (this._showTransformGizmo) {
            window.cce.gizmos.transformTool.show();
          } else {
            window.cce.gizmos.transformTool.hide();
          }
        };

        _proto.commitNodeChanged = function commitNodeChanged(node) {
          var _cce$gizmos$Utils;

          for (var _len = arguments.length, param = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            param[_key - 1] = arguments[_key];
          } // @ts-ignore


          (_cce$gizmos$Utils = cce.gizmos.Utils).onNodeChanged.apply(_cce$gizmos$Utils, [node].concat(param));
        };

        _createClass(Gizmo, [{
          key: "target",
          get: //#endregion
          function get() {
            return this._target;
          } // component 的 gizmo 是1对1关系，transform gizmo 可以同时操作多个对像
          ,
          set: function set(value) {
            var nodes = this.nodes;
            if (nodes && nodes.length > 0) ;
            this._target = value;
            nodes = this.nodes;

            if (nodes && nodes.length > 0) {
              // this.registerTransformEvent(this.nodes);
              // this.registerNodeEvents(this.nodes);
              if (this.onTargetUpdate) {
                this.onTargetUpdate();
              }
            } else {
              this.hide();
            }
          }
        }]);

        return Gizmo;
      }());
      if (CC_EDITOR) ;

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/editor.ts", ['cc', './env', './npm.ts'], function (exports) {
  'use strict';

  var cclegacy, EDITOR;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      EDITOR = module.EDITOR;
    }, null],
    execute: function () {
      cclegacy._RF.push({}, "ecf777/C31MVJNamTmKSC+3", "editor", undefined);

      var Editor = exports('Editor', EDITOR);
      var projectPath = exports('projectPath', EDITOR);
      var projectAssetPath = exports('projectAssetPath', EDITOR);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/test.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Vec3, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Vec3 = module.Vec3;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp;

      cclegacy._RF.push({}, "edd43PS8N9I46y4PIijUeNm", "test", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var Test = exports('Test', (_dec = ccclass('Test'), _dec2 = property(Node), _dec3 = property(Node), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Test, _Component);

        function Test() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "btn", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "p", _descriptor2, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = Test.prototype; //p 节点

        _proto.start = function start() {
          var _this2 = this;

          this.btn.on(Node.EventType.TOUCH_START, function () {
            _this2.btn.setScale(new Vec3(2, 2, 0));
          });
        };

        return Test;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "btn", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "p", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/types.ts", ['cc'], function (exports) {
  'use strict';

  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports('SplineMoveType', void 0);

      cclegacy._RF.push({}, "f04a0j9OINCgrkh0zdhdXrp", "types", undefined);

      var SplineMoveType;

      (function (SplineMoveType) {
        SplineMoveType[SplineMoveType["None"] = 0] = "None";
        SplineMoveType[SplineMoveType["Node"] = 1] = "Node";
        SplineMoveType[SplineMoveType["Position"] = 2] = "Position";
        SplineMoveType[SplineMoveType["Direction"] = 3] = "Direction";
        SplineMoveType[SplineMoveType["InvDirection"] = 4] = "InvDirection";
      })(SplineMoveType || (SplineMoveType = exports('SplineMoveType', {})));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/spline-smoother.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './pool.ts', './spline.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _defineProperty, _assertThisInitialized, _initializerDefineProperty, _createClass, cclegacy, _decorator, Vec3, Component, pool, Spline;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _defineProperty = module.defineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _initializerDefineProperty = module.initializerDefineProperty;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Vec3 = module.Vec3;
      Component = module.Component;
    }, function (module) {
      pool = module.default;
    }, function (module) {
      Spline = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _temp;

      cclegacy._RF.push({}, "f4722OckFpGqb0dQB+UAi/S", "spline-smoother", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property,
          executeInEditMode = _decorator.executeInEditMode;
      var splineSmoother = exports('splineSmoother', (_dec = ccclass('splineSmoother'), _dec2 = property({
        step: 0.1
      }), _dec(_class = executeInEditMode(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(splineSmoother, _Component);

        function splineSmoother() {
          var _this;

          _this = _Component.call(this) || this;

          _defineProperty(_assertThisInitialized(_this), "_smoothing", false);

          _defineProperty(_assertThisInitialized(_this), "_spline", null);

          _initializerDefineProperty(_assertThisInitialized(_this), "_curvature", _descriptor, _assertThisInitialized(_this));

          _this.splineNodeListChanged = _this.splineNodeListChanged.bind(_assertThisInitialized(_this));
          _this.onNodeChanged = _this.onNodeChanged.bind(_assertThisInitialized(_this));
          return _this;
        }

        var _proto = splineSmoother.prototype;

        _proto.onEnable = function onEnable() {
          this.smoothAll();
          this.spline.nodeListChanged.addListener(this.splineNodeListChanged);

          for (var i = 0; i < this.spline.nodes.length; i++) {
            this.spline.nodes[i].changed.addListener(this.onNodeChanged);
          }
        };

        _proto.onDisable = function onDisable() {
          this.spline.nodeListChanged.removeListener(this.splineNodeListChanged);

          for (var i = 0; i < this.spline.nodes.length; i++) {
            this.spline.nodes[i].changed.removeListener(this.onNodeChanged);
          }
        };

        _proto.splineNodeListChanged = function splineNodeListChanged(args) {
          if (args.newItems != null) {
            for (var i = 0; i < args.newItems.length; i++) {
              args.newItems[i].changed.addListener(this.onNodeChanged);
            }
          }

          if (args.removedItems != null) {
            for (var _i = 0; _i < args.removedItems.length; _i++) {
              args.removedItems[_i].changed.removeListener(this.onNodeChanged);
            }
          }
        };

        _proto.onNodeChanged = function onNodeChanged(node) {
          this.smoothNode(node);
          var nodes = this.spline.nodes;
          var index = nodes.indexOf(node);

          if (index > 0) {
            this.smoothNode(nodes[index - 1]);
          }

          if (index < nodes.length - 1) {
            this.smoothNode(nodes[index + 1]);
          }
        };

        _proto.smoothNode = function smoothNode(node) {
          if (this._smoothing) return;
          this._smoothing = true;
          var nodes = this.spline.nodes;
          var index = nodes.indexOf(node);
          var pos = node.position; // For the direction, we need to compute a smooth vector.
          // Orientation is obtained by substracting the vectors to the previous and next way points,
          // which give an acceptable tangent in most situations.
          // Then we apply a part of the average magnitude of these two vectors, according to the smoothness we want.

          var dir = pool.Vec3.get().set(Vec3.ZERO);
          var toPos = pool.Vec3.get();
          var averageMagnitude = 0;

          if (index !== 0) {
            var previousPos = nodes[index - 1].position;
            var toPrevious = toPos.set(pos).subtract(previousPos);
            averageMagnitude += toPrevious.length();
            dir.add(toPrevious.normalize());
          }

          if (index != nodes.length - 1) {
            var nextPos = nodes[index + 1].position;
            var toNext = toPos.set(pos).subtract(nextPos);
            averageMagnitude += toNext.length();
            dir.subtract(toNext.normalize());
          }

          averageMagnitude *= 0.5; // This constant should vary between 0 and 0.5, and allows to add more or less smoothness.

          dir = dir.normalize().multiplyScalar(averageMagnitude * this.curvature); // In SplineMesh, the node direction is not relative to the node position. 

          var controlPoint = dir.add(pos); // We only set one direction at each spline node because SplineMesh only support mirrored direction between curves.

          node.direction = controlPoint;
          pool.Vec3.put(dir);
          pool.Vec3.put(toPos);
          this._smoothing = false;
        };

        _proto.smoothAll = function smoothAll() {
          var nodes = this.spline.nodes;

          for (var i = 0; i < nodes.length; i++) {
            this.smoothNode(nodes[i]);
          }
        };

        _createClass(splineSmoother, [{
          key: "spline",
          get: function get() {
            if (!this._spline) {
              this._spline = this.getComponent(Spline);
            }

            return this._spline;
          }
        }, {
          key: "curvature",
          get: function get() {
            return this._curvature;
          },
          set: function set(value) {
            this._curvature = value;
            this.smoothAll();
          }
        }]);

        return splineSmoother;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_curvature", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.3;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "curvature", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "curvature"), _class2.prototype)), _class2)) || _class) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/spline-curve-interface.ts", ['cc'], function () {
  'use strict';

  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "f52bdvdp09JvYK1DHZuLYtH", "spline-curve-interface", undefined);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/main", ['./event.ts', './spline-node.ts', './spline-node-wrapper.ts', './npm.ts', './editor.ts', './index.ts', './mesh-utility.ts', './utils.ts', './controller.ts', './types.ts', './spline-node-controller.ts', './mathf.ts', './pool.ts', './mesh-vertex.ts', './curve-sample.ts', './cubic-bezier-curve.ts', './spline.ts', './spline-util-base.ts', './spline-util-renderer.ts', './type.ts', './animation-curve.ts', './scatter-volume.ts', './terrain-sculpt.ts', './spritemove.ts', './source-mesh.ts', './fixed-buffer.ts', './fixed-model-mesh.ts', './scatter-item.ts', './videotest.ts', './sower.ts', './GraphicsTest.ts', './asset-operation.ts', './mesh-bender.ts', './mesh-tiling.ts', './MainCarmCtrl.ts', './reandgl.ts', './CaptureUtils.ts', './gizmo.ts', './continuous-line-controller.ts', './spline-gizmo.ts', './spline-grid-util.ts', './moveui.ts', './raycast.ts', './treeui.ts', './scatter.ts', './setHTML_Div.ts', './SetCameraMovePath.ts', './testTree.ts', './ModelTest.ts', './mesh-tesselate.ts', './ClickCamera_to_view.ts', './loadfbx.ts', './webvideoPlayer.ts', './reandvideo.ts', './test.ts', './spline-smoother.ts', './spline-curve-interface.ts'], function () {
  'use strict';

  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});
//# sourceMappingURL=index.js.map