export default function random_rgba() {
  var o = Math.round, r = Math.random, s = 255;
  return o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s);
}