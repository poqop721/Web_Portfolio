window.onload = function(){

  const content = document.querySelector('.content')
  const path2 = document.querySelector('.path2')
  const path2Length = path2.getTotalLength()

  path2.style.strokeDasharray  = path2Length
  path2.style.strokeDashoffset = calcDashoffset(window.innerHeight * 0.8, content, path2Length)

  const content2 = document.querySelector('.content2')
  const path3 = document.querySelector('.path3')
  const path3Length = path3.getTotalLength()

  path3.style.strokeDasharray  = path3Length
  path3.style.strokeDashoffset = calcDashoffset(window.innerHeight * 0.8, content2, path3Length)

  const content3 = document.querySelector('.content3')
  const path4 = document.querySelector('.path4')
  const path4Length = path4.getTotalLength()

  path4.style.strokeDasharray  = path4Length
  path4.style.strokeDashoffset = calcDashoffset(window.innerHeight * 0.8, content3, path4Length)

  const content4 = document.querySelector('.content4')
  const path5 = document.querySelector('.path5')
  const path5Length = path5.getTotalLength()

  path5.style.strokeDasharray  = path5Length
  path5.style.strokeDashoffset = calcDashoffset(window.innerHeight * 0.8, content4, path5Length)

  const content5 = document.querySelector('.content5')
  const path6 = document.querySelector('.path6')
  const path6Length = path6.getTotalLength()

  path6.style.strokeDasharray  = path6Length
  path6.style.strokeDashoffset = calcDashoffset(window.innerHeight * 0.8, content5, path6Length)

  const footer = document.querySelector('.footer')
  const path7 = document.querySelector('.path7')
  const path7Length = path7.getTotalLength()

  path7.style.strokeDasharray  = path7Length
  path7.style.strokeDashoffset = calcDashoffset(window.innerHeight * 0.8, footer, path7Length)
  // stroke-Dasharray => path의 길이
  // stroke-Dashoffset => 어디서부터 그릴지 => ex length가 1000 이면 strokeDashoffset은 아래로 스크롤 할수록 1000->0

  function calcDashoffset(scrollY, element, length) {
      const ratio = (scrollY - element.offsetTop) / element.offsetHeight
      const value = length - (length * ratio)
      return value < 0 ? 0 : value > length ? length : value // Value가 path 위에선 lenth보다 큰값, 아래선 -가 되서
    } 
    
    function scrollHandler() {
      const scrollY = window.scrollY + (window.innerHeight * 0.8) // 화면 중간부터
      fade(scrollY)
      path2.style.strokeDashoffset = calcDashoffset(scrollY, content, path2Length)
      path3.style.strokeDashoffset = calcDashoffset(scrollY, content2, path3Length)
      path4.style.strokeDashoffset = calcDashoffset(scrollY, content3, path4Length)
      path5.style.strokeDashoffset = calcDashoffset(scrollY, content4, path5Length)
      path6.style.strokeDashoffset = calcDashoffset(scrollY, content5, path6Length)
      path7.style.strokeDashoffset = calcDashoffset(scrollY, footer, path7Length)
    }

    function fade(scrollY){
      var introduceTop = document.querySelector(".introduce").offsetTop;
      var introduce2Top = document.querySelector(".introduce2").offsetTop;
      var skillcontainerTop = document.querySelector(".skillcontainer").offsetTop;
      var letterTop = document.querySelector(".rightBottom").offsetTop;
      var imgDiv2 = document.querySelector(".leftBottom2-2").offsetTop;
      var footer = document.querySelector(".footerdiv").offsetTop;
      var betting = document.querySelector(".betting").offsetTop;
      var cat_tag = document.querySelector(".cat_tag").offsetTop;
      var myweb = document.querySelector(".myweb").offsetTop;


      if((scrollY) -100> introduceTop){
        document.querySelector('.introduce').style.animation='fade-in 0.3s linear .0s both';
      }
      else{
        document.querySelector('.introduce').style.animation='fade-out 0.3s linear .0s both';
      }

      if((scrollY) -300> introduce2Top){
        document.querySelector('.introduce2').style.animation='fade-in 0.3s linear .0s both';
      }
      else{
        document.querySelector('.introduce2').style.animation='fade-out 0.3s linear .0s both';
      }
    
      if((scrollY-100) > skillcontainerTop){
        document.querySelector('.skillcontainer').style.animation='fadeInLeft 0.3s linear .0s both';
        document.querySelector('.orange').style.animation='orangeIn 2s linear .0s both';
        document.querySelector('.blue').style.animation='blueIn 2s linear .0s both';
        document.querySelector('.yellow').style.animation='yellowIn 2s linear .0s both';
        document.querySelector('.purple').style.animation='purpleIn 2s linear .0s both';
        document.querySelector('.green').style.animation='greenIn 2s linear .0s both';
        document.querySelector('.red').style.animation='redIn 2s linear .0s both';
        document.querySelector('.pink').style.animation='pinkIn 2s linear .0s both';
      }
      else{
        document.querySelector('.skillcontainer').style.animation='fadeOutLeft 0.3s linear .0s both';
        document.querySelector('.orange').style.animation='orangeOut 0s linear .0s both';
        document.querySelector('.blue').style.animation='blueOut 0s linear .0s both';
        document.querySelector('.yellow').style.animation='yellowOut 0s linear .0s both';
        document.querySelector('.purple').style.animation='purpleOut 0s linear .0s both';
        document.querySelector('.green').style.animation='greenOut 0s linear .0s both';
        document.querySelector('.red').style.animation='redOut 0s linear .0s both';
        document.querySelector('.pink').style.animation='pinkOut 0s linear .0s both';
      }

      if((scrollY-350) > letterTop){
        document.querySelector('.letters').style.animation='fadeInUp 0.3s linear .0s both';
        document.getElementById("video_obj").play();
      }
      else{
        document.querySelector('.letters').style.animation='fadeOutUp 0.3s linear .0s both';
        document.getElementById("video_obj").pause();
      }
      if((scrollY-350) > imgDiv2){
        document.getElementById("video_obj2").play();
        document.getElementById("video_obj").pause();
      }
      else{
        document.getElementById("video_obj2").pause();
      }
      if((scrollY-150) > footer){
        document.querySelector('.footerdiv').style.animation='fadeInUp 0.3s linear .0s both';
      }
      else{
        document.querySelector('.footerdiv').style.animation='fadeOutUp 0.3s linear .0s both';
      }
      // if((scrollY) -100> betting){
      //   document.querySelector('.betting').style.animation='fadeInUp 0.3s linear .0s both';
      // }
      // else{
      //   document.querySelector('.betting').style.animation='fadeOutUp 0.3s linear .0s both';
      // }
      // if((scrollY) -100> cat_tag){
      //   document.querySelector('.cat_tag').style.animation='fadeInUp 0.3s linear .0s both';
      //   document.getElementById("video_obj2").pause();
      // }
      // else{
      //   document.querySelector('.cat_tag').style.animation='fadeOutUp 0.3s linear .0s both';
      // }
      // if((scrollY) -100> myweb){
      //   document.querySelector('.myweb').style.animation='fadeInUp 0.3s linear .0s both';
      // }
      // else{
      //   document.querySelector('.myweb').style.animation='fadeOutUp 0.3s linear .0s both';
      // }

      
    }
    // window.scollY => 화면이 맨 위부터 내려온 지점.
    // window.innerHeight => (내가 보는)화면의 높이
    // scrollY = 여태껏 내려온 모든 높이
    // element.offsetTop => header 의 높이
    // element.offsetHeight => content의 높이

    window.addEventListener('scroll', scrollHandler)
}
