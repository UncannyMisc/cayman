
var sectionHeight = function() {
  var total    = $(window).height(),
      $main = $('main').css('height','auto');

  if ($main.outerHeight(true) < total) {
    var margin = $main.outerHeight(true) - $main.height();
    $main.height(total - margin - 20);
  } else {
    $main.css('height','auto');
  }
}

//$(window).resize(sectionHeight);

$(function() {
  $("section h1, section h2, section h3").each(function(){
    $("nav ul").append("<li class='tag-" + this.nodeName.toLowerCase() + "'><a href='#" + $(this).text().toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g,'') + "'>" + $(this).text() + "</a></li>");
    $(this).attr("id",$(this).text().toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g,''));
    $("nav ul li:first-child a").parent().addClass("active");
  });

  $("nav ul li").on("click", "a", function(event) {
    var position = $($(this).attr("href")).offset().top - 190;
    $("html, body").animate({scrollTop: position}, 400);
    $("nav ul li a").parent().removeClass("active");
    $(this).parent().addClass("active");
    event.preventDefault();
  });

  //sectionHeight();

  //$('img').on('load', sectionHeight);
});
/*
function getAllByClass(classname, node) {
    if (!document.getElementsByClassName) {
        if (!node) {
            node =  document.body;
        }

        var a = [],
            re = new RegExp('\\b' + classname + '\\b'),
            els = node.getElementsByTagName("*");

        for (var i = 0, j = els.length; i < j; i++) {
            if (re.test(els[i].className)) {
                a.push(els[i]);
            }
        }
    } else {
        return document.getElementsByClassName(classname);
    }

    return a;
}
function myFunction() {
	var y = document.getElementById("content").querySelector("nav").querySelector("ul");
	var x = document.getElementById("content").querySelectorAll("h1,h2,h3,h4");
	x[0].style.backgroundColor = "red";
	for (var i = 0, j = x.length; i < j; i++) {
        // Create anchor element. 
        var b = document.createElement('li'); 
        var a = document.createElement('a'); 
		b.appendChild(a);
		// Create the text node for anchor element. 
		//var link = document.createTextNode(x[i].id); 
		
		// Append the text node to anchor element. 
		//a.appendChild(link);  
		  
		// Set the title. 
		a.title = x[i].getAttribute("id") || $heading.innerText.toLowerCase().replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '').replace(/ +/g, '-'); 
		  
		// Set the href property. 
		a.href = '#'+x[i].getAttribute("id") || $heading.innerText.toLowerCase().replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '').replace(/ +/g, '-'); 
		
		a.innerText = '#';
		// Append the anchor element to the body. 
		y.appendChild(b); 
		/*
		document.querySelectorAll('.post-content h1, .post-content h2, .post-content h3, .post-content h4').forEach($heading => {

    //create id from heading text
  var id = $heading.getAttribute("id") || $heading.innerText.toLowerCase().replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '').replace(/ +/g, '-');

  //add id to heading
  $heading.setAttribute('id', id);

  //append parent class to heading
  $heading.classList.add('anchor-heading');

  //create anchor
  $anchor = document.createElement('a');
  //$anchor.className = 'anchor-link';
	}
	   
}
myFunction();

*/