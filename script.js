//header - nav
window.addEventListener("scroll", () => {
  let scroll = window.scrollY;
  const header = document.querySelector("header");
  const topBtn = document.querySelector(".gototop");
  if (scroll > 50) {
    header.classList.add("active");
    topBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    topBtn.classList.remove("active");
  }
});

//trigger
const trigger = document.querySelector(".trigger");
const gnb = document.querySelector(".gnb");
const gnbLinks = gnb.querySelectorAll("a");
trigger.addEventListener("click", function () {
  this.classList.toggle("active");
  gnb.classList.toggle("active");
});
gnbLinks.forEach((link) => {
  link.addEventListener("click", () => {
    trigger.classList.remove("active");
    gnb.classList.remove("active");
  });
});

//login
const openLogin = document.querySelector(".openLogin");
openLogin.addEventListener("click", () => {
  const loginArea = document.querySelector(".login_wrapper");
  const closeLogin = document.querySelector(".closeLogin");
  loginArea.classList.add("active");
  closeLogin.addEventListener("click", () => {
    loginArea.classList.remove("active");
  });
});

//main_slide - slick slider
$(".main_slide_wrap").slick({
  dots: true,
  infinite: true,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
});

//showcase_slide - slick slider
$(".showcase_slide_wrap").slick({
  dots: true,
  infinite: true,
  speed: 800,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

// kakao map
//kakao map
const showPosition = (position) => {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  const container = document.querySelector("#map");

  const options = {
    center: new kakao.maps.LatLng(latitude, longitude),
    level: 3,
  };

  const map = new kakao.maps.Map(container, options);

  //store info
  const positions = [
    {
      title: "이니스프리 강남역점",
      latlng: new kakao.maps.LatLng(37.4979405, 127.0276216),
      address: "서울특별시 강남구 강남대로 396",
      info: "영업시간 : 오전 10시 ~ 저녁 9시",
    },
    {
      title: "이니스프리 강남로데오점",
      latlng: new kakao.maps.LatLng(37.490427, 127.027261),
      address: "서울특별시 강남구 강남로 230",
      info: "영업시간 : 오전 10시 ~ 저녁 9시",
    },
    {
      title: "이니스프리 강남한옥마을점",
      latlng: new kakao.maps.LatLng(37.493465, 127.031865),
      address: "서울특별시 강남구 선릉로 552",
      info: "영업시간 : 오전 10시 ~ 저녁 8시",
    },
    {
      title: "이니스프리 강남역 스토어",
      latlng: new kakao.maps.LatLng(37.498056, 127.027824),
      address: "서울특별시 강남구 강남대로 408",
      info: "영업시간 : 오전 10시 ~ 저녁 9시",
    },
    {
      title: "이니스프리 강남 테헤란로점",
      latlng: new kakao.maps.LatLng(37.49558, 127.027346),
      address: "서울특별시 강남구 테헤란로 112",
      info: "영업시간 : 오전 10시 ~ 저녁 8시",
    },
  ];

  for (let i = 0; i < positions.length; i++) {
    let marker = new kakao.maps.Marker({
      map: map,
      position: positions[i].latlng,
    });

    const content = `
      <div class="wrap">
        <div class="info">
          <div class="title">${positions[i].title}</div>
          <div class="body">
            <div class="img">
              <img src="./img/map-img.jpg" width="73" height="70">
            </div>
            <div class="desc">
              <div class="ellipsis">${positions[i].address}</div>
              <div class="jibun ellipsis">${positions[i].info}</div>
              <div>
                <a target="_blank" href="https://www.innisfree.com">쇼핑몰 바로가기</a>
              </div>
            </div>
          </div>
        </div>
      </div>;
    `;

    const overlay = new kakao.maps.CustomOverlay({
      content: content,
      map: map,
      position: marker.getPosition(),
    });
  }

  //marker
  const markerPosition = new kakao.maps.LatLng(latitude, longitude);
  const marker = new kakao.maps.Marker({
    position: markerPosition,
  });
  marker.setMap(map);

  //marker infowindow
  const iwContent =
    '<div class ="label"><span class="left"></span><span class="center">🍀현재위치</span><span class="right"></span></div>';
  const iwPosition = new kakao.maps.LatLng(latitude, longitude);
  const infowindow = new kakao.maps.CustomOverlay({
    content: iwContent,
    position: iwPosition,
  });

  infowindow.setMap(map);
};
const errorPosition = (err) => {
  alert(err.message);
};

navigator.geolocation.getCurrentPosition(showPosition, errorPosition);

const openMap = document.querySelector(".openMap");
openMap.addEventListener("click", () => {
  const map = document.querySelector("#map");
  map.classList.toggle("active");
  map.relayout();
});
