
var viewDados1 = (function(){
  return{
    funcao(){
      var modal = document.getElementById("myModal");
      var img = document.getElementById("myImg1");
      var modalImg = document.getElementById("img01");
      var captionText = document.getElementById("caption");
      img.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
      var span = document.getElementsByClassName("close")[0];
      span.onclick = function() { 
        modal.style.display = "none"
      }
    }
  }
})
var viewDados2 = (function(){
  return{
    funcao(){
      var modal = document.getElementById("myModal");
      var img = document.getElementById("myImg2");
      var modalImg = document.getElementById("img01");
      var captionText = document.getElementById("caption");
      img.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
      var span = document.getElementsByClassName("close")[0];
      span.onclick = function() { 
        modal.style.display = "none"
      }
    }
  }
})
var viewDados3 = (function(){
  return{
    funcao(){
      var modal = document.getElementById("myModal");
      var img = document.getElementById("myImg3");
      var modalImg = document.getElementById("img01");
      var captionText = document.getElementById("caption");
      img.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
      var span = document.getElementsByClassName("close")[0];
      span.onclick = function() { 
        modal.style.display = "none"
      }
    }
  }
})
var viewDados4 = (function(){
  return{
    funcao(){
      var modal = document.getElementById("myModal");
      var img = document.getElementById("myImg4");
      var modalImg = document.getElementById("img01");
      var captionText = document.getElementById("caption");
      img.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
      var span = document.getElementsByClassName("close")[0];
      span.onclick = function() { 
        modal.style.display = "none"
      }
    }
  }
})

