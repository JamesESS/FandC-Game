export class InputHandler {
    constructor(){
        this.keys = [];
        console.log("hello");
        window.addEventListener('keydown', e => {
            // console.log(e.key, this.keys);
            if (
            (e.key === "Right" || e.key === "ArrowRight" || e.key === "d" || e.key === "D" ||
            e.key === "Left" || e.key === "ArrowLeft" || e.key === "a" || e.key === "A"   ||
            e.key === "Up" || e.key === "ArrowUp" || e.key === "w" || e.key === "W"       ||
            e.key === "Down" || e.key === "ArrowDown" || e.key === "s" || e.key === "S"   ||
            e.key === " " || e.code === "Space" )
            && this.keys.indexOf(e.key) === -1) {
                this.keys.push(e.key);
            }
            // console.log(e.key, this.keys);
        });
        window.addEventListener('keyup', e => {
            // console.log(e.key, this.keys);
            if (
            (e.key === "Right" || e.key === "ArrowRight" || e.key === "d" || e.key === "D") ||
            (e.key === "Left" || e.key === "ArrowLeft" || e.key === "a" || e.key === "A")   ||
            (e.key === "Up" || e.key === "ArrowUp" || e.key === "w" || e.key === "W")       ||
            (e.key === "Down" || e.key === "ArrowDown" || e.key === "s" || e.key === "S")   ||
            (e.key === " " || e.code === "Space")) {
                this.keys.splice(this.keys.indexOf(e.key), 1);
            }
        });
    }
}