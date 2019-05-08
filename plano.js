class Point
{
  constructor(x, y)
  {
    this.x = 0;
    this.y = 0;
    this.distance = 0;
  }

  distancia(x, y)
  {
    if (x != 0 && y != 0)
    {
      this.distance += Math.sqrt((x - this.x) + (y - this.y))
      this.x = x;
      this.y = y;
      return this.distance;
    }
  }
}
