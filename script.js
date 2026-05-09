const reelsData = [
  {
    isMuted: true,
    username: "travelwithria",
    likeCount: 125430,
    isLiked: false,
    commentCount: 3241,
    caption: "Sunsets, beaches, and peace 🌅✨ #TravelDiaries",
    video: "./reels/1.mp4",
    userProfile: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    shareCount: 5421,
    isFollowed: true
  },
  {
    isMuted: true,
    username: "fit_rahul",
    likeCount: 98432,
    isLiked: true,
    commentCount: 2145,
    caption: "No pain, no gain 💪🔥 #FitnessMotivation",
    video: "./reels/2.mp4",
    userProfile: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    shareCount: 3890,
    isFollowed: false
  },
  {
    isMuted: true,
    username: "foodie_anu",
    likeCount: 203876,
    isLiked: false,
    commentCount: 5678,
    caption: "Cheese overload 🍕🤤 #FoodLover",
    video: "./reels/3.mp4",
    userProfile: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    shareCount: 7890,
    isFollowed: true
  },
  {
    isMuted: true,
    username: "techguru_aj",
    likeCount: 75432,
    isLiked: true,
    commentCount: 1890,
    caption: "Top AI tools you need this year 🚀",
    video: "./reels/4.mp4",
    userProfile: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    shareCount: 2987,
    isFollowed: true
  },
  {
    isMuted: true,
    username: "dancewithme",
    likeCount: 310987,
    isLiked: false,
    commentCount: 8456,
    caption: "When the beat drops 🎶🔥 #DanceChallenge",
    video: "./reels/5.mp4",
    userProfile: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df",
    shareCount: 12034,
    isFollowed: false
  },
  {
    isMuted: true,
    username: "natureclicks",
    likeCount: 143567,
    isLiked: true,
    commentCount: 3765,
    caption: "Lost in the mountains 🌲🏔️",
    video: "./reels/6.mp4",
    userProfile: "https://images.unsplash.com/photo-1504593811423-6dd665756598",
    shareCount: 4678,
    isFollowed: true
  },
  {
    isMuted: true,
    username: "fashionqueen",
    likeCount: 267890,
    isLiked: false,
    commentCount: 6234,
    caption: "Confidence is my best outfit 👗✨",
    video: "./reels/7.mp4",
    userProfile: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
    shareCount: 9345,
    isFollowed: false
  },
  {
    isMuted: true,
    username: "gamer_zone",
    likeCount: 189654,
    isLiked: true,
    commentCount: 4123,
    caption: "Victory Royale again 🎮👑",
    video: "./reels/8.mp4",
    userProfile: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f",
    shareCount: 6789,
    isFollowed: true
  },
  {
    isMuted: true,
    username: "musicbeats",
    likeCount: 221456,
    isLiked: false,
    commentCount: 5987,
    caption: "This song hits different 🎧❤️",
    video: "./reels/9.mp4",
    userProfile: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
    shareCount: 8456,
    isFollowed: true
  },
  {
    isMuted: true,
    username: "daily_memes",
    likeCount: 412345,
    isLiked: true,
    commentCount: 10234,
    caption: "Tag your funniest friend 😂🤣 #MemeLife",
    video: "./reels/1.mp4",
    userProfile: "https://images.unsplash.com/photo-1504257432389-52343af06ae3",
    shareCount: 15432,
    isFollowed: false
  },
  {
    isMuted: true,
    username: "daily_memes",
    likeCount: 612345,
    isLiked: true,
    commentCount: 10254,
    caption: "Confidence is my best outfit 👗✨",
    video: "./reels/2.mp4",
    userProfile: "https://images.unsplash.com/photo-1504257432389-52343af06ae3",
    shareCount: 15432,
    isFollowed: false
  }
];

var allReels = document.querySelector('.all-reels')

var isMuted = true

function addData() {
  var sum = ''
  reelsData.forEach(function (elem, idx) {


    sum = sum + ` <div class="reel">
                    <video autoplay loop ${elem.isMuted ? 'muted' : ''} src="${elem.video}"></video>
                            <button class="mute" id=${idx}>
                            ${elem.isMuted ? '<i class="ri-volume-mute-fill"></i>' : '<i class="ri-volume-down-fill"></i>'}

        </button>
                    <div class="bottom">
                        <div class="user">
                            <img src="${elem.userProfile}"
                                alt="">
                            <h4>${elem.username}</h4>
                            <button id=${idx} class="follow" >${elem.isFollowed ? 'Unfollow' : 'Follow'}</button>
                        </div>
                        <h3>${elem.caption}</h3>
                    </div>
                    <div class="right">
                        <div id=${idx} class="like">
                            <h4 class="like-icon icon">${elem.isLiked ? '<i class=" love ri-heart-3-fill"></i>' : '<i class="ri-heart-3-line"></i>'}</h4>
                            <h6>${elem.likeCount}</h6>
                        </div>
                        <div class="comment">
                            <h4 class="comment-icon icon"><i class="ri-chat-3-line"></i></h4>
                            <h6>${elem.commentCount}</h6>
                        </div>
                        <div class="share">
                            <h4 class="share-icon icon"><i class="ri-share-forward-line"></i></h4>
                            <h6>${elem.shareCount}</h6>
                        </div>
                        <div class="menu">
                            <h4 class="menu-icon icon"><i class="ri-more-2-fill"></i></h4>
                        </div>
                    </div>
                </div>
`

  })

  allReels.innerHTML = sum
}

addData();

allReels.addEventListener('click', function (dets) {

  if (dets.target.className == 'like') {
    if (!reelsData[dets.target.id].isLiked) {
      reelsData[dets.target.id].likeCount++
      reelsData[dets.target.id].isLiked = true
    } else {
      reelsData[dets.target.id].likeCount--
      reelsData[dets.target.id].isLiked = false
    }
    addData();
  }
  if (dets.target.className == 'follow') {
    if (!reelsData[dets.target.id].isFollowed) {
      reelsData[dets.target.id].isFollowed = true
    } else {
      reelsData[dets.target.id].isFollowed = false
    }
    addData();
  }
  if (dets.target.className == 'mute') {
    if (!reelsData[dets.target.id].isMuted) {
      reelsData[dets.target.id].isMuted = true
    } else {
      reelsData[dets.target.id].isMuted = false
    }
    addData();
  }
})