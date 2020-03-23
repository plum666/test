Page({
data:{
  mode:'scaleToFill',
  src: '../sources/lizihao.jpg',
  text:'姓名：李子豪',
  bindback: function () {
    const back = wx.getBackgroundAudioManager();
    back.src = "https://sharefs.yun.kugou.com/202003221951/eb08a6dcc94821399fb1a0680e6517f7/G007/M08/10/01/Rw0DAFS5zD2ARYzFAEHXYYCVR3U033.mp3";
    back.title = "温柔";
    back.coverImgUrl = "https://y.gtimg.cn/music/photo_new/T002R300x300M000003suBZs1Cy3uA_1.jpg?max_age=2592000";
    back.play();
    back.onPlay(() => {
      console.log("音乐播放开始");
    })
    back.onEnded(() => {
      console.log("音乐播放结束");
    })
  },
}}
)

