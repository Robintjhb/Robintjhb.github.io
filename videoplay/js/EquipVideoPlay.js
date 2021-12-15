var map = (function parseParam(url) {
    let index = url.indexOf("\?");
    let map = {};
    if (index != -1) {
      let arr = url.substr(index + 1).split("&");
      for (let i = 0; i < arr.length; i++) {
        if (arr[i]) {
          index = arr[i].indexOf("=");
          if (index != -1) {
            let v = arr[i].split("=");
            map[v[0]] = decodeURIComponent(v[1]);
          }
        }
      }
    }
    return map;
  })(window.location.href);

  var videoObject = {
    init: function (id, src) {
      var self = this;
      this.src = src;
      this.id = id;
      this.flvPlayer = flvjs.createPlayer({
        type: 'flv', url: src, isLive: true
      }, {
        isLive: true,
        enableStashBuffer: false,
        enableWorker: true,
        stashInitialSize: 128,
        videoStateMonitorInterval: 1000,
        decreaseDurationStep: 1,
        enableDurationMonitor: true,
        enableVideoFrozenMonitor: true
      });
      this.flvPlayer.attachMediaElement(document.getElementById(id));
      this.flvPlayer.load();

      this.flvPlayer.play();
      this.reLoad = function () {
        self.flvPlayer.unload();
        self.flvPlayer.destroy();
        window.v = videoObject.init(self.id, self.src);
      };
      return this;
    }
  };


  function flvplay() {

    console.log(map.id);
    window.v = videoObject.init("video", "ws://" + "192.168.4.18:9097" + "/rsip-video/websocket/" + "2");
    // }

    function skipBuffer() {
      setTimeout(() => {
        if (window.v.flvPlayer.buffered.length) {
          let end = window.v.flvPlayer.buffered.end(0);//获取当前buffered值
          let diff = end - window.v.flvPlayer.currentTime;//获取buffered与currentTime的差值
          if (diff >= 0.5) {//如果差值大于等于0.5 手动跳帧 这里可根据自身需求来定
            window.v.flvPlayer.currentTime = window.v.flvPlayer.buffered.end(0);//手动跳帧
          }
        }
        skipBuffer();
      }, 1000 * 60);
    }

    skipBuffer();


  }
