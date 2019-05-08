var point = new Point();

let btn = document.querySelector('#add');
    btn.addEventListener('click', function()
  {
    var x = document.getElementById("X").value;
    var y = document.getElementById("Y").value;


    if (point.x == 0 && point.y == 0)
    {
        point.x = x;
        point.y = y;
    }
    else {
      var distance = point.distancia(x, y);
      document.getElementById('distancia').innerHTML = distance;
    }

  });
