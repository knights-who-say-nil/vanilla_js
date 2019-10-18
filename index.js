$(document).ready(function() {
  var products = [
    {id: 1, name: "Lightsaber", price: 100},
    {id: 2, name: "Yoda Sleeping Bag", price: 25},
    {id: 3, name: "Hitchhiker's Guide", price: 42}
  ];

  var productsHTMLString = "";

  products.forEach(function(product) {
    productsHTMLString += `<h1>${product.name}</h1>`;
    productsHTMLString += `<h5>Price: ${product.price}</h5>`;
  });

  $(".products").html(productsHTMLString);

  $("h1").on("mousemove", function(event) {
    $("#x-coordiante").html(event.clientX);
    $("#y-coordiante").html(event.clientY);
  });

  $("p").on("click", function() {
    alert("Do do that!!");
  });

  $(".message").html("My Stuff");

});
