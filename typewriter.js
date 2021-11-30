const sentence = "hello there from lighthouse labs";
let timesThroughTheLoop = 0;

for (let char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, timesThroughTheLoop * 50);
  timesThroughTheLoop += 1;
}