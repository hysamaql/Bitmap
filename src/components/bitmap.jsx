export function Bitmap (num, radius, max){
    let canvas = document.getElementById("canv");
    let context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i <=num; i++) {
        context.beginPath();
        let rand_x = Math.random(i) * max;
        let rand_y = Math.random(i) * max;
        context.arc(rand_x, rand_y, radius, 0, 2*Math.PI);
        context.fill();
        context.closePath();
    }
}