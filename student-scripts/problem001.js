function triangleArea(a, b, c) {
    if (a+b<=c || a+c<=b || b+c<=a || a<=0 || b<=0 || c<=0) {
        return -1;
    }
    else {
      let circuit = a+b+c;
      let p = circuit/2;
      let area = Math.sqrt(p*(p-a)*(p-b)*(p-c));
      area = Math.round(area * 100) / 100;

      return area;
    }
}
