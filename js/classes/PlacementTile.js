class PlacementTile {
    constructor({position = {x: 0, y: 0}}) {
        this.position = position
        this.size = 64
        this.color = 'rgba(255, 255, 255, 0.15)'
        this.occupied = false
        this.image = new Image()
        this.image.src = "img/ken.png"
        this.frames = {
            max: 19,
            current: 0
        }
    }

    draw() {
        c.fillStyle = this.color
        c.fillRect(this.position.x, this.position.y, this.size, this.size)
    }

    update(mouse) {
        // this.draw()

        if (
            mouse.x > this.position.x &&
            mouse.x < this.position.x + this.size &&
            mouse.y > this.position.y &&
            mouse.y < this.position.y + this.size
        ) {
            c.drawImage(
                this.image,
                this.position.x,
                this.position.y,
                this.size,
                this.size,
            )
            let image2 = new Image()
            image2.src = `img/prepare3/${roundCount}.png`;
            c.drawImage(
                image2,
                this.position.x,
                this.position.y - 50,
                100,
                100,
            )
        } else if (flag) {

            // do nothing
        } else {

            // const cropWidth = this.image.width / this.frames.max
            // const crop = {
            //   position: {
            //     x: cropWidth * this.frames.current,
            //     y: 0
            //   },
            //   width: cropWidth,
            //   height: this.image.height
            // }
            c.drawImage(
                this.image,
                this.position.x,
                this.position.y,
                this.size,
                this.size,
            )
        }
    }
}
