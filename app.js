

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const player = $('.player')
const heading = $('header h2')
const cdThumb = $('.cd-thumb')
const audio = $('#audio')
const cd = $('.cd')
const playBtn = $('.btn-toggle-play')

const app = {
        currentIndex: 0,
        isPlaying: false, 
        songs: [
        // {
        //     name: '3107 4',
        //     singer: ' W; n, ERIK, Nâu',
        //     path: './New folder/music/song1.mp3',
        //     img:  './New folder/img/song1.jpg'
        // },
        // {
        //     name: 'Hai Mươi Hai',
        //     singer: 'AMEE, Hứa Kim Tuyền',
        //     path: './New folder/music/song2.mp3',
        //     img:  './New folder/img/song2.jpg'
        // },
        // {
        //     name: 'Vì Anh Đâu Có Biết',
        //     singer: 'Madihu, Vũ',
        //     path: './New folder/music/song3.mp3',
        //     img:  '.New folder/img/song3.jpg'
        // },
        // {
        //     name: 'Một Ngàn Nỗi Đau',
        //     singer: 'Văn Mai Hương, Hứa Kim Tuyền',
        //     path: './New folder/music/song4.mp3',
        //     img:  './New folder/img/song4.jpg'
        // },
        // {
        //     name: 'Break My Heart Myself',
        //     singer: 'Bebe Rexha, ITYZY',
        //     path: './New folder/music/song5.mp3',
        //     img:  './New folder/img/song5.jpg'
        // },
        // {
        //     name: 'Summertime',
        //     singer: 'K-391',
        //     path: './New folder/music/song6.mp3',
        //     img:  './New folder/img/song6.jpg'
        // },
        // {
        //     name: 'Lời Tạm Biệt Chưa Nói ',
        //     singer: 'GREY D',
        //     path: './New folder/music/song7.mp3',
        //     img:  './New folder/img/song7.jpg'
        // },
        // {
        //     name: 'Em ngày xưa khác rồi',
        //     singer: 'Hiền Hồ',
        //     path: './New folder/music/song8.mp3',
        //     img:  './New folder/img/song8.jpg'
        // }
            


        {
            name: "Click Pow Get Down",
            singer: "Raftaar x Fortnite",
            path: "./Music/New folder/music/song1.mp3",
            image: "https://images.unsplash.com/photo-1535682215715-c5c6a5d28247?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          },
          {
            name: "Tu Phir Se Aana",
            singer: "Raftaar x Salim Merchant x Karma",
            path: "https://mp3.vlcmusic.com/download.php?track_id=34213&format=320",
            image:
              "https://1.bp.blogspot.com/-kX21dGUuTdM/X85ij1SBeEI/AAAAAAAAKK4/feboCtDKkls19cZw3glZWRdJ6J8alCm-gCNcBGAsYHQ/s16000/Tu%2BAana%2BPhir%2BSe%2BRap%2BSong%2BLyrics%2BBy%2BRaftaar.jpg"
          },
          {
            name: "Naachne Ka Shaunq",
            singer: "Raftaar x Brobha V",
            path:
              "https://mp3.filmysongs.in/download.php?id=Naachne Ka Shaunq Raftaar Ft Brodha V Mp3 Hindi Song Filmysongs.co.mp3",
            image: "https://i.ytimg.com/vi/QvswgfLDuPg/maxresdefault.jpg"
          },
          {
            name: "Mantoiyat",
            singer: "Raftaar x Nawazuddin Siddiqui",
            path: "https://mp3.vlcmusic.com/download.php?track_id=14448&format=320",
            image:
              "https://a10.gaanacdn.com/images/song/39/24225939/crop_480x480_1536749130.jpg"
          },
          {
            name: "Aage Chal",
            singer: "Raftaar",
            path: "https://mp3.vlcmusic.com/download.php?track_id=25791&format=320",
            image:
              "https://a10.gaanacdn.com/images/albums/72/3019572/crop_480x480_3019572.jpg"
          },
          {
            name: "Damn",
            singer: "Raftaar x kr$na",
            path:
              "https://mp3.filmisongs.com/go.php?id=Damn%20Song%20Raftaar%20Ft%20KrSNa.mp3",
            image:
              "https://filmisongs.xyz/wp-content/uploads/2020/07/Damn-Song-Raftaar-KrNa.jpg"
          },
          {
            name: "Feeling You",
            singer: "Raftaar x Harjas",
            path: "https://mp3.vlcmusic.com/download.php?track_id=27145&format=320",
            image:
              "https://a10.gaanacdn.com/gn_img/albums/YoEWlabzXB/oEWlj5gYKz/size_xxl_1586752323.webp"
          }
    ],
    render: function () {
      const htmls = this.songs.map(song => {
        return `
        <div class="song">
            <div class="thumb" style="background-image: url('${song.image}')">
             </div>
        <div class="body">
          <h3 class="title">${song.name}</h3>
          <p class="author">${song.singer}</p>
        </div>
        <div class="option">
          <i class="fas fa-ellipsis-h"></i>
        </div>
      </div>
     `;
      });
      $('.playlist').innerHTML = htmls.join('');
    },
    defineProperties: function(){
        Object.defineProperty(this, 'currentSong',{
              get: function(){
                  return this.songs[this.currentIndex]
              }
        })

    },
    loadCurrentSong: function(){
   
        heading.textContent = this.currentSong.name
        cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`
        audio.src = this.currentSong.path
        },
    handleEvents: function(){
      const _this = this
      const cdWidth = cd.offsetWidth;
      // xử lí phóng to thu nhỏ cd
      document.onscroll = function(){
          const scrollTop = window.scrollY || document.documentElement.scrollTop
          const newWidth = cdWidth - scrollTop
          cd.style.width = newWidth > 0? newWidth + 'px': 0
          cd.style.opacity = newWidth / cdWidth
        }

        //xử lí khi click play
        playBtn.onclick = function(){

          if(_this.isPlaying){
            
            audio.pause()
           
          }
          else{
            
            audio.play()
            

          }
          // khi song được play
          audio.onplay = function(){
            _this.isPlaying = true
            player.classList.add('playing')
          }
          // khi song bị pause
          audio.onpause = function(){
            _this.isPlaying = false
            player.classList.remove('playing')
          }
            
        }
    },
    start: function(){
      // định nghĩa các thuộc tính cho object
        this.defineProperties();
        // lắng nghe / xử lí các sự kiện(DOM events) 
        this.handleEvents();
        // tải thông tin bài hát đầu tiên vào UI khi chạy ứng dụng
        this.loadCurrentSong();
        this.render();
        }
}
app.start();



