var point = new Point();

let btn = document.querySelector('#add');
    btn.addEventListener('click', function()
  {
    var x = document.getElementById("X").value;
    var y = document.getElementById("Y").value;

    var distance1 = point.distancia(x, y);

   document.getElementById('distancia').innerHTML = `Distancia = ${distance1}`;
  });
