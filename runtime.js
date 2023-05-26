function show_runtime() {
  window.setTimeout("show_runtime()", 1000);
  X = new Date("04/15/2023 19:35:19");
  Y = new Date();
  T = (Y.getTime() - X.getTime());
  M = 24 * 60 * 60 * 1000;
  a = T / M;
  A = Math.floor(a);
  b = (a - A) * 24;
  B = Math.floor(b);
  c = (b - B) * 60;
  C = Math.floor((b - B) * 60);
  D = Math.floor((c - C) * 60);
  runtime_span.innerHTML = "Website Runtime: " + A + "&nbspDays&nbsp" + B + "&nbspHours&nbsp" + C + "&nbspMinutes&nbsp" + D + "&nbspSeconds"
}
show_runtime();