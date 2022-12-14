const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)


const heading = $('header h2')
const cdThumb = $('.cd-thumb')
const audio = $('#audio')
const playBtn = $('.btn-toggle-play')
const player = $('.player')
const progress = $('#progress')
const nextBtn = $('.btn-next')
const prevBtn = $('.btn-prev')
const randomBtn = $('.btn-random')
const repeatBtn = $('.btn-repeat')
const playlist =  $('.playlist')

const app = {
    currentIndex: 0,
    isPlaying: false,
    isRandom: false,
    isRepeat: false,

    songs: [
        {
            name: 'Little do you know',
            author: 'Alex & Sierra',
            image: './assets/img/Suzy4.jpg',
            path: './assets/music/Little_do_you_know_Alex_&_Sierra.mp3'
        },
        {
            name: 'When night falls',
            author: 'Eddi Kim',
            image: './assets/img/Suzy2.jpg',
            path: './assets/music/When_night_falls_Eddi_Kim.mp3'
        },
        {
            name: 'Too late',
            author: 'Addie Nicole',
            image: './assets/img/TooLate.jfif',
            path: './assets/music/Too_Late_Addie Nicole.mp3'
        },
        {
            name: 'Versace',
            author: 'The Same Persons',
            image: './assets/img/versace.jfif',
            path: './assets/music/Versace_The_Same_Persons.mp3'
        },
        {
            name: 'Set fire to the rain',
            author: 'Rain Adele ft. Vahn Remix',
            image: './assets/img/setFireToTheRain.jfif',
            path: './assets/music/Set_Fire_To_The_Rain_Adele_x_Vahn_Remix.mp3'
        },
        {
            name: 'Kiss Remix',
            author: 'Hung Bobi Remix',
            image: './assets/img/Kiss.jfif',
            path: './assets/music/Kiss_Hung_Bobi_Remix.mp3'
        },
        {
            name: 'Trap Queen Remix',
            author: 'Adriana Gomez',
            image: './assets/img/trapQueen.jfif',
            path: './assets/music/Trap_Queen_Remix_Adriana_Gomez.mp3'
        },
        {
            name: 'Devil From Heaven',
            author: 'TVT Remix',
            image: './assets/img/Devil.jpg',
            path: './assets/music/Ac_ma_den_tu_thien_duong_TVT_Remix.mp3'
        },
        {
            name: 'Cheap Thrills',
            author: 'Sia',
            image: './assets/img/CheapThrill.jfif',
            path: './assets/music/Cheap_Thrills_Sia.mp3'
        },
        {
            name: 'Let\'s marriage',
            author: 'Masew ft. Masiu',
            image: './assets/img/CuoiThoi.jpg',
            path: './assets/music/Cuoi_Thoi_Masew_x_Masiu.mp3'
        },
        {
            name: 'Diamond Ver 2',
            author: 'VQ Remix',
            image: './assets/img/diamond.jfif',
            path: './assets/music/Diamond_Ver2_VQ_Remix.mp3'
        },
        {
            name: 'Everytime we touch',
            author: 'Cascada',
            image: './assets/img/Everytimewetouch.jfif',
            path: './assets/music/Everytime_we_touch.mp3'
        },
        {
            name: 'How to love',
            author: 'Cash Cash ft. Sofia Reyes',
            image: './assets/img/howtolove.jfif',
            path: './assets/music/How_to_love_Cash_Cash_ft_Sofia_Reyes.mp3'
        },
        {
            name: 'I need your love',
            author: 'Madilyn Bailey',
            image: './assets/img/IneedYourLove.jfif',
            path: './assets/music/I_need_your_love_Madilyn_Bailey.mp3'
        },
        {
            name: 'Larg Remix',
            author: 'Elgit Doda',
            image: './assets/img/larg.jfif',
            path: './assets/music/Larg_Elgit_Doda.mp3'
        },
        {
            name: 'Love me like you do',
            author: 'Ellie Goulding',
            image: './assets/img/LoveMeLikeYouDo.jfif',
            path: './assets/music/Love_me_like_you_do_Ellie_Goulding.mp3'
        },
        {
            name: 'Love story',
            author: 'Taylor Swift',
            image: './assets/img/Taylor.jpg',
            path: './assets/music/Love_story_Taylor_Swift.mp3'
        },
        {
            name: 'Love the way you lie',
            author: 'Skylar Grey',
            image: './assets/img/Suzy3.jpg',
            path: './assets/music/Love_the_way_you_like_Skylar_Grey.mp3'
        },
        {
            name: 'Nevada',
            author: 'Vicetone ft. Cozi Zuehlsdorff',
            image: './assets/img/Nevada.jfif',
            path: './assets/music/Nevada_Vicetone_feat_Cozi_Zuehlsdorff.mp3'
        },
        {
            name: 'Payphone',
            author: 'Alex G',
            image: './assets/img/payphone.jfif',
            path: './assets/music/Payphone_Alex_G.mp3'
        }
    ],

    render: function(){
       const htmls = this.songs.map((song, index)=>{
        return `
            <div class="song ${index === this.currentIndex ? 'active': ''}" data-index="${index}">
            <div class="thumb" style="background-image: url('${song.image}')"></div>
            <div class="body">
            <h3 class="title">${song.name}</h3>
            <p class="author">${song.author}</p>
            </div>
            <div class="option">
            <i class="fas fa-ellipsis-h"></i>
            </div>
        </div>
        `
       }) 
         playlist.innerHTML = htmls.join('') 
    },


    defineProperty: function(){
        Object.defineProperty(this, 'currentSong', {
            get: function(){
                return this.songs[this.currentIndex]
            }
        })
    },

    handlEvents: function(){
        const _this = this
        const cd = $(".cd")
        const cdWidth = cd.offsetWidth

        
        // X??? l?? CD quay
        const cdThumbAnimate = cdThumb.animate([{
                transform: 'rotate(360deg)'
            }
        ], {
            duration: 15000, 
            iterations: Infinity 
        })

        cdThumbAnimate.pause() //M???c ?????nh ban ?????u n?? s??? ng???ng quay


        // X??? l?? ph??ng to/ thu nh??? CD
        document.onscroll = function(){
          const scrollTop = window.scrollY || document.documentElement.scrollTop
          const newCdWidth = cdWidth - scrollTop

          cd.style.width = newCdWidth > 0 ? newCdWidth + 'px' : 0
          cd.style.opacity = newCdWidth / cdWidth
        }

        // MOUSE EVENT
        // x??? l?? khi click play
        playBtn.onclick = function(){
            if(_this.isPlaying){
                audio.pause()
            }
            else{
                audio.play()
            }
        }

        //Khi b??i h??t ???????c play
        audio.onplay = function(){
            _this.isPlaying = true
            player.classList.add('playing')
            cdThumbAnimate.play()
        }

        //Khi b??i h??t b??? pause
        audio.onpause = function(){
            _this.isPlaying = false
            player.classList.remove('playing')
            cdThumbAnimate.pause()
        }

        //Khi ti???n ????? b??i h??t thay ?????i
        audio.ontimeupdate = function(){
            if(typeof audio.duration != NaN){
                const progressPercent = Math.floor(audio.currentTime / audio.duration * 100)
                progress.value = progressPercent
            }
        }   

        // x??? l?? khi tua b??i h??t
        progress.oninput = function(e){
            const seekTime = e.target.value  * audio.duration / 100
            audio.currentTime = seekTime
        }

        //X??? l?? khi next b??i h??t
        nextBtn.onclick = function(){
            if(_this.isRandom == true){
                _this.playRandomSong()
            } 
            else{
                _this.nextSong()
            }
              audio.play()
              _this.render()
              _this.scrollToActiveSong()
        }

        //X??? l?? khi Prev b??i h??t
        prevBtn.onclick = function(){
            if(_this.isRandom == true){
                _this.playRandomSong()
            } else{
                _this.PrevSong()
            }
                audio.play()
                _this.render()
                _this.scrollToActiveSong()
        }

        //X??? l?? b???t / t???t random Song
        randomBtn.onclick = function(){
            _this.isRandom = !_this.isRandom
            randomBtn.classList.toggle('active', _this.isRandom)
        }
        

        //X??? l?? b???t / t???t repeat
        repeatBtn.onclick = function(){
            _this.isRepeat = !_this.isRepeat
            repeatBtn.classList.toggle('active', _this.isRepeat)
        } 

        //K???t th??c b??i t??? chuy???n sang b??i k??? ti???p
        audio.onended = function(){
            if(_this.isRepeat){
                audio.play() 
            } else{
                nextBtn.click() // T??? b???m v??o n??t next
            }
        }
        
        // X??? l?? Keyboard Events
        document.onkeyup = function(e) {
            if(e.which === 32){
                playBtn.click()
            }
            else if(e.which === 37){
                prevBtn.click()
            }
            else if(e.which===39){
                nextBtn.click()
            }
        }

        //L???ng nghe h??nh vi click v??o playlist
        playlist.onclick = function(e){
            const songNode = e.target.closest('.song:not(.active)')

            if(songNode || e.target.closest('.option')){
                // X??? l?? khi click v??o song
                if(songNode){
                    _this.currentIndex = Number(songNode.dataset.index)
                    _this.loadCurrentSong()
                    _this.render()
                    audio.play()
                }

                //X??? l?? khi click v??o song option

            }

        }
    },

    //Next b??i h??t
    nextSong: function(){
        this.currentIndex++
        if(this.currentIndex >= this.songs.length){
            this.currentIndex = 0
        }
        this.loadCurrentSong()
    },

    //Prev b??i h??t
    PrevSong: function(){
        this.currentIndex--
        if(this.currentIndex < 0){
            this.currentIndex = this.songs.length
        }
        this.loadCurrentSong()
    },

    // Random b??i h??t
    playRandomSong: function(){
        let newIndex
        do{
            newIndex = Math.floor(Math.random() * this.songs.length)
        } while(newIndex === this.currentIndex)

        this.currentIndex = newIndex
        this.loadCurrentSong()
    },

    loadCurrentSong: function(){
        heading.textContent = this.currentSong.name
        cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`
        audio.src = this.currentSong.path

    },

    scrollToActiveSong: function(){
        setTimeout(() => {
            $('.song.active').scrollIntoView({
                behavior: 'smooth',
                block: 'nearest'
            })
        }, 100)
    },

    start: function(){
        // ?????nh ngh??a c??c thu???c t??nh cho Object
        this.defineProperty()

        // L???ng nghe/ x??? l?? c??c s??? ki???n
        this.handlEvents()

        // T???i th??ng tin b??i h??t ?????u ti??n khi ch???y ???ng d???ng
        this.loadCurrentSong()

        // Render Playlist
        this.render()

    },
}
    app.start()