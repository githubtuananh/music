const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
const playList = $('.playlist')
const Cd = $('.cd')
const cdThumb = $('.cd-thumb')
const btnPlay = $('.btn-toggle-play')
const audio = $('audio')
const player = $('.player')
const nameOfSong = $('header h2')
const nameOfAuthor = $('header h4')
const progress = $('.progress_bar')
const btnPrev = $('.btn-prev')
const btnNext = $('.btn-next')
const btnRandom = $('.btn-random')
const btnRepeat = $('.btn-repeat')
const style = $('[type="text/css"]');


// const btnPause = $('.fa-pause')
const app = {
  cdAnimate : cdThumb.animate({transform: 'rotate(360deg)'},{duration:10000,iterations:Infinity}),
  isRanDom: false,
  isRepeat: false,
  indexCurrentSong: 2,
  played: [],
  songs: [
    {
      name: "Nàng thơ",
      singer: "xxx",
      path: "./music/NangTho-HoangDung-6413381.mp3",
      image: "https://i.ytimg.com/vi/jTLhQf5KJSc/maxresdefault.jpg"
    },
    {
      name: "Bước qua mùa cô đơn",
      singer: "xxx",
      path: "./music/BuocQuaMuaCoDon-Vu-6879419.mp3",
      image:
        "https://1.bp.blogspot.com/-kX21dGUuTdM/X85ij1SBeEI/AAAAAAAAKK4/feboCtDKkls19cZw3glZWRdJ6J8alCm-gCNcBGAsYHQ/s16000/Tu%2BAana%2BPhir%2BSe%2BRap%2BSong%2BLyrics%2BBy%2BRaftaar.jpg"
    },
    {
      name: "Bông hoa đẹp nhất",
      singer: "xxx",
      path: "./music/BongHoaDepNhat-QuanAP-6607955.mp3",
      image:
        "https://a10.gaanacdn.com/images/song/39/24225939/crop_480x480_1536749130.jpg"
    },
    {
      name: "Độ đúng đời",
      singer: "Raftaar",
      path: "./music/DoDungDoiStreamDenBaoGio2-DoMixiNguyenCaoThienHung-6836224.mp3",
      image:
        "https://a10.gaanacdn.com/images/albums/72/3019572/crop_480x480_3019572.jpg"
    },
    // {
    //   name: "Phố đã lên đèn",
    //   singer: "xxx",
    //   path:
    //     "./music/PhoDaLenDen-HuyenTamMon-6938343.mp3",
    //   image:
    //     "https://filmisongs.xyz/wp-content/uploads/2020/07/Damn-Song-Raftaar-KrNa.jpg"
    // },
    {
      name: "Vu vơ",
      singer: "xx",
      path: "./music/VuVo-JustaTeeYanbi-2440207.mp3",
      image:
        "https://a10.gaanacdn.com/gn_img/albums/YoEWlabzXB/oEWlj5gYKz/size_xxl_1586752323.webp"
    },
    {
      name: "Suýt nữa thì",
      singer: "Raftaar x Fortnite",
      path: "./music/Suyt Nua Thi - Andiez.mp3",
      image: "https://i.ytimg.com/vi/jTLhQf5KJSc/maxresdefault.jpg"
    },
    {
      name: "Một nhà",
      singer: "Raftaar x Salim Merchant x Karma",
      path: "./music/Mot Nha - Da LAB.mp3",
      image:
        "https://1.bp.blogspot.com/-kX21dGUuTdM/X85ij1SBeEI/AAAAAAAAKK4/feboCtDKkls19cZw3glZWRdJ6J8alCm-gCNcBGAsYHQ/s16000/Tu%2BAana%2BPhir%2BSe%2BRap%2BSong%2BLyrics%2BBy%2BRaftaar.jpg"
    },
    {
      name: "Một phút",
      singer: "Raftaar x Nawazuddin Siddiqui",
      path: "./music/1 Phut - Andiez.mp3",
      image:
        "https://a10.gaanacdn.com/images/song/39/24225939/crop_480x480_1536749130.jpg"
    },
    // {
    //   name: "Do dung doi 4",
    //   singer: "Raftaar",
    //   path: "./music/DoDungDoiStreamDenBaoGio2-DoMixiNguyenCaoThienHung-6836224.mp3",
    //   image:
    //     "https://a10.gaanacdn.com/images/albums/72/3019572/crop_480x480_3019572.jpg"
    // },
    {
      name: "Ba kể con nghe",
      singer: "Raftaar x kr$na",
      path:
        "./music/Ba Ke Con Nghe - Duong Tran Nghia.mp3",
      image:
        "https://filmisongs.xyz/wp-content/uploads/2020/07/Damn-Song-Raftaar-KrNa.jpg"
    },
    // {
    //   name: "vu vo 6",
    //   singer: "Raftaar x Harjas",
    //   path: "./music/VuVo-JustaTeeYanbi-2440207.mp3",
    //   image:
    //     "https://a10.gaanacdn.com/gn_img/albums/YoEWlabzXB/oEWlj5gYKz/size_xxl_1586752323.webp"
    // }
  ],


  //function event
  handleEvent: function(){
  //function scroll top
    this.cdAnimate.pause()
    const widthCd = Cd.offsetWidth
    document.onscroll = () => {
      const newWidth =widthCd - window.scrollY || document.documentElement.scrollTop
      Cd.style.width = newWidth <= 0 ? 0 : newWidth + 'px'
      Cd.style.opacity = newWidth/widthCd
    }

  //function click play and pause 
    btnPlay.onclick = () => {
      player.classList.toggle('playing')

      var arrClass =Array.from(player.classList)
      if(arrClass.some((e) => e === 'playing')){
        audio.play()
        this.cdAnimate.play()
      }
      else{
        audio.pause()
        this.cdAnimate.pause()
      }     
    }

    //seek
    audio.ontimeupdate = (e) => {
      if(audio.duration)
        style.innerHTML = ".progress{ width: " + (e.target.currentTime*100 /e.target.duration) + "%}";
    }
    progress.onmousedown = function(e){
      audio.currentTime = (e.offsetX/progress.offsetWidth) * audio.duration
    }



    // audio.ontimeupdate = (e) => {
    //   if(audio.duration)
    //   { 
    //     style.innerHTML = ".progress::-webkit-slider-thumb { width: " + e.target.currentTime*progress.offsetWidth /e.target.duration + "px}";
    //     progress.value =0
    //   }

    // }
    // progress.onchange = (e) => {
    //   const seekTime =  (audio.duration / 100) * e.target.value;
    //   audio.currentTime = seekTime
    //   // style.innerHTML = ".progress::-webkit-slider-thumb { width: " + 0 + "px;}";
    // }

    //prev button
    btnPrev.onclick = () => {
      this.cdAnimate.play()
      player.classList.add('playing')
      if(this.isRanDom) this.randomSong()
      else this.prevSong()
      audio.play()
    }
    //next button
    btnNext.onclick = () => {
      this.cdAnimate.play()
      player.classList.add('playing')
      if(this.isRanDom) this.randomSong()
      else this.nextSong()
      audio.play()
      
    }
    // random button
    btnRandom.onclick = () => {
      btnRandom.classList.toggle('active')
      this.isRanDom = !this.isRanDom
    }
    // repeat button
    btnRepeat.onclick = () => {
      this.isRepeat = !this.isRepeat
      btnRepeat.classList.toggle('active')
    }

    // the end
    audio.onended = () => {
      // if(this.isRanDom){
      //   this.randomSong()
      // }
      // else{
      //   this.nextSong()
      // }
      // audio.play()
      if(this.isRepeat) audio.play()
      else{btnNext.click()}
    }
  },

  //get song current
  getCurrentSong: function(){
    return this.songs[this.indexCurrentSong]
  },

  //render songs
  renderSongs: function(){
      var htmls = this.songs.map(song => 
      ` <div class="song ">
        <div class="thumb" style="background-image: url(${song.image})"></div>
        <div class="body">
            <h3 class="title">${song.name}</h3>
            <p class="author">${song.singer}</p>
        </div>
        <div class="option">
            <i class="fa fa-ellipsis-h" aria-hidden="true"></i>
        </div>
      </div> `) 
      playList.innerHTML = htmls.join('')
  },
  

  //load current song
  loadCurrentSong: function(){
    nameOfSong.innerHTML = this.getCurrentSong().name
    nameOfAuthor.innerHTML = this.getCurrentSong().singer
    cdThumb.style.backgroundImage = `url(${this.getCurrentSong().image})`
    audio.src = this.getCurrentSong().path
    this.activeAdd()
    this.scrollSong()

  },

  //next song
  nextSong: function(){
    this.indexCurrentSong++
    if(this.indexCurrentSong > this.songs.length-1){
      this.indexCurrentSong = 0
    }
    this.loadCurrentSong()
  },

  //prev song
  prevSong: function(){
    this.indexCurrentSong--
    if(this.indexCurrentSong<0){
      this.indexCurrentSong=this.songs.length-1
    }
    this.loadCurrentSong()
  },

  //random song
  randomSong: function(){
    do{
      var newIndex = Math.floor(Math.random()*this.songs.length)
    }
    while(this.played.some(e => e==newIndex) || newIndex==this.indexCurrentSong)

    this.played.push(newIndex)
    if(this.played.length == this.songs.length){
      this.played = [this.indexCurrentSong]
    }
    this.indexCurrentSong = newIndex
    this.loadCurrentSong()
  },

  //add clas active for song
  activeAdd: function(){
    var actived
    var listSong = Array.from(playList.children)
    listSong.forEach((song,index)=>{
      if(index===this.indexCurrentSong){
        song.classList.add('active')
      }else{
        song.classList.remove('active')
      }
    })
  },
  
  //scrollintoview
  scrollSong: function(){
    const songActive = $('.song.active')
    setTimeout(() => {
      songActive.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
      })
    }, 500);
  },
  
  //click active song
  activeSong: function(){
    var listSong = Array.from(playList.children)
    listSong.forEach((song,index)=>{
      song.onclick = () => {
        this.indexCurrentSong = index
        this.loadCurrentSong()
        audio.play()
        this.cdAnimate.play()
        player.classList.add('playing')
      }
    })
  },
  
  //START
  start: function(){  
    this.renderSongs()
    this.handleEvent()
    this.loadCurrentSong()
    this.activeSong()
  }
}
app.start()