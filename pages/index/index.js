const app=getApp()

const BackgroundAudioManager = wx.getBackgroundAudioManager()
BackgroundAudioManager.title="温柔"
BackgroundAudioManager.singer="五月天"
BackgroundAudioManager.epname="温柔"
BackgroundAudioManager.coverImgUrl = 'https://y.gtimg.cn/music/photo_new/T002R300x300M000003suBZs1Cy3uA_1.jpg?max_age=2592000'
BackgroundAudioManager.src='https://sharefs.yun.kugou.com/202003221951/eb08a6dcc94821399fb1a0680e6517f7/G007/M08/10/01/Rw0DAFS5zD2ARYzFAEHXYYCVR3U033.mp3'
Page({
data:{
  mode:'scaleToFill',
  src: '../sources/lizihao.jpg',
  text:'姓名：李子豪',
  isPlayingMusic: true
},
audioPlay: function () {
    var isPlayingMusic = this.data.isPlayingMusic;
    if(isPlayingMusic){
    console.log("暂停");
    BackgroundAudioManager.pause();
    this.setData({
      isPlayingMusic: false
     })
    }
    else{
      BackgroundAudioManager.play();
      this.setData({
        isPlayingMusic: true
      })
    }
  }
})



