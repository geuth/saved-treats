function openProduct(evt, cityName) {
    var i, prodcontent, itemslinks;
    prodcontent = document.getElementsByClassName("prodcontent");
    for (i = 0; i < prodcontent.length; i++) {
      prodcontent[i].style.display = "none";
    }
    itemslinks = document.getElementsByClassName("itemslinks");
    for (i = 0; i < itemslinks.length; i++) {
      itemslinks[i].className = itemslinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }

  
  $(document).ready(function(){

    $('.carousel').carousel({
        interval: 5000
      });

      $('.productBox').scrollspy({ target: '#navbar-example' })
//document.ready function ends here


  });