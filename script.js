function showSnow() {
    const canvas = document.getElementById("snowCanvas");
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let flakes = [];

    function Snowflake() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.speed = 1 + Math.random() * 3;
        this.radius = 1 + Math.random() * 3;

        this.update = function() {
            this.y += this.speed;
            if (this.y > canvas.height) this.y = 0;
        };

        this.draw = function() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = "white";
            ctx.fill();
        };
    }

    function createSnow() {
        flakes = [];
        for (let i = 0; i < 150; i++) {
            flakes.push(new Snowflake());
        }
    }

    function animateSnow() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        flakes.forEach(flake => {
            flake.update();
            flake.draw();
        });
        requestAnimationFrame(animateSnow);
    }

    createSnow();
    animateSnow();
}