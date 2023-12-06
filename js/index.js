const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')
const targetScore = 9999999999999
let flag = false
let score = 0
let peopleSFundraising = 0;
let randomNumbers = generateRandomNumbers();
let roundCount = 0;
let attackPower = 25;
let returnCost = 0;

function saveAsImage() {
    var element = document.getElementById('forScreenShot');
    element.addEventListener('click', function () {
        html2canvas(element).then(function (canvas) {
            var newCanvas = document.createElement("canvas");
            var context = newCanvas.getContext('2d');
            newCanvas.width = canvas.width;
            newCanvas.height = canvas.height;

            const roundCount = 100; // Assuming you have a variable 'roundCount' defined

            context.drawImage(canvas, 0, 0); // Draw the original canvas onto the new canvas

            const image = new Image();
            image.crossOrigin = "Anonymous";
            image.src = 'img/share.png';
            image.onload = function () {
                context.drawImage(image, 0, 0, canvas.width, canvas.height); // Draw the image onto the canvas

                const text = '我在2027守衛台灣，堅持了 ${level} 天，<br>全臺排名${parseInt(Math.random()*7000)}，守衛台灣需要你！';
                context.font = '40px Arial';
                context.fillStyle = 'white';
                context.textAlign = 'center';
                const centerX = newCanvas.width / 2;
                const centerY = newCanvas.height /2;
                context.fillText(text, centerX, centerY);

                var imageData = newCanvas.toDataURL("image/png");
                var a = document.createElement('a');
                a.href = imageData;
                a.download = 'page_screenshot.png';
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
            };
        });
    });
}




function generateRandomNumbers() {
    const numbers = [];
    const randomNum1 = Math.floor(Math.random() * (70 - 40 + 1)) + 40;
    numbers.push("總計： " + randomNum1.toString() + "%<br>台灣全境被破壞，預計10年內完成重建，請民眾踴躍募捐");


    const randomNum2 = Math.floor(Math.random() * (1000 - 300 + 1)) + 300;
    numbers.push("總計： " + peopleSFundraising.toString() + `億美金<br>您捐贈了${Math.floor(peopleSFundraising / 0.23) * 60}元新台幣`);


    const randomNum3 = Math.floor(Math.random() * (10 - 5 + 1)) + 5;
    numbers.push("總計： " + randomNum3.toString() + "年GDP");


    const randomNum4 = Math.floor(Math.random() * (200000000 - 90000000 + 1)) + 90000000;
    numbers.push("總計： " + randomNum4.toString());


    const randomNum5 = Math.floor(Math.random() * (2000000 - 500000 + 1)) + 500000;
    numbers.push("總計： " + randomNum5.toString() + "人<br>有淚水濕透的母親，失去親人的孤兒和痛苦的哀號；每一個數字都代表著一個生命的熄滅，一個家庭的破碎，以及無數人心中永遠無法彌補的傷痛");


    const randomNum6 = Math.floor(Math.random() * (700 - 300 + 1)) + 300;
    const result = Math.round((randomNum6 / 2300) * 100);
    const resultFriend = Math.floor(result / 100 * 400);
    const resultFamily = Math.floor(result / 100 * 20);
    numbers.push("總計： " + randomNum6.toString() + "萬<br>" + `台北約${result}%的居民失業<br>您身邊的朋友有${resultFriend}人失業<br>您的親人有${resultFamily}人失業`);

    return numbers;
}


canvas.width = 1280
canvas.height = 768

c.fillStyle = 'white'
c.fillRect(0, 0, canvas.width, canvas.height)

const placementTilesData2D = []

for (let i = 0; i < placementTilesData.length; i += 20) {
    placementTilesData2D.push(placementTilesData.slice(i, i + 20))
}


const placementTiles = []

placementTilesData2D.forEach((row, y) => {
    row.forEach((symbol, x) => {
        if (symbol === 14) {
            placementTiles.push(
                new PlacementTile({
                    position: {
                        x: x * 64,
                        y: y * 64
                    }
                })
            )
        }
    })
})

const image = new Image()

image.onload = () => {
    animate()
}

image.src = 'img/prepare2/1.png'

const enemies = []

function spawnEnemies(spawnCount) {
    enemiesFlag = true
    for (let i = 1; i < spawnCount + 1; i++) {
        const xOffset = i * 150
        enemies.push(
            new Enemy({
                position: {x: waypoints[0].x - xOffset, y: waypoints[0].y}
            }, enemySpeed, roundCount)
        )
    }
}

let buildings = []
let activeTile = undefined
let enemyCount = 3
let enemySpeed = 1.7
let hearts = 10
let coins = 50

const explosions = []
let enemiesFlag = true


let flag2 = false

function win2Draw() {
    randomNumbers = generateRandomNumbers();
    // Check if the myDiv element already exists
    const myDiv = document.querySelector('#myDiv');
    if (myDiv) {
        return; // Exit the function if the element already exists
    }

    const divElement = document.createElement('div');
    divElement.id = 'myDiv';
    divElement.classList.add('grid-container');

    const firstRowElement = document.createElement('div');
    firstRowElement.textContent = '戰損報告 - 點擊分享';
    firstRowElement.id = 'firstRow';
    divElement.appendChild(firstRowElement);

    let describe = ["損毀建築", "軍費開支", "經濟損失", "消耗彈藥", "傷亡人數", "失業人口", "破碎家庭"]
    let index = 0;

    const childElement11 = document.createElement('div');
    childElement11.id = 'row1col1';
    childElement11.classList.add('child');
    const imgElement11 = document.createElement('img');
    imgElement11.src = 'img/Partition11.png';
    imgElement11.classList.add('image');
    childElement11.appendChild(imgElement11);
    const textElement11 = document.createElement('div');
    textElement11.innerHTML = '' + randomNumbers[index];
    textElement11.classList.add('text-right');
    childElement11.appendChild(textElement11);
    const textBelowElement11 = document.createElement('div');
    textBelowElement11.textContent = describe[index];
    textBelowElement11.classList.add('text-below');
    childElement11.appendChild(textBelowElement11);
    divElement.appendChild(childElement11);
    index++;

    const childElement12 = document.createElement('div');
    childElement12.id = 'row1col2';
    childElement12.classList.add('child');
    const imgElement12 = document.createElement('img');
    imgElement12.src = 'img/Partition12.png';
    imgElement12.classList.add('image');
    childElement12.appendChild(imgElement12);
    const textElement12 = document.createElement('div');
    textElement12.innerHTML = '' + randomNumbers[index];
    textElement12.classList.add('text-right');
    childElement12.appendChild(textElement12);
    const textBelowElement12 = document.createElement('div');
    textBelowElement12.textContent = describe[index];
    textBelowElement12.classList.add('text-below');
    childElement12.appendChild(textBelowElement12);
    divElement.appendChild(childElement12);
    index++;
    index++;
    index++;



    const childElement31 = document.createElement('div');
    childElement31.id = 'row3col1';
    childElement31.classList.add('child');
    const imgElement31 = document.createElement('img');
    imgElement31.src = 'img/Partition31.png';
    imgElement31.classList.add('image');
    childElement31.appendChild(imgElement31);
    const textElement31 = document.createElement('div');
    textElement31.innerHTML = '' + randomNumbers[index];
    textElement31.classList.add('text-right');
    childElement31.appendChild(textElement31);
    const textBelowElement31 = document.createElement('div');
    textBelowElement31.textContent = describe[index];
    textBelowElement31.classList.add('text-below');
    childElement31.appendChild(textBelowElement31);
    divElement.appendChild(childElement31);
    index++;


    const childElement32 = document.createElement('div');
    childElement32.id = 'row3col2';
    childElement32.classList.add('child');
    const imgElement32 = document.createElement('img');
    imgElement32.src = 'img/Partition32.png';
    imgElement32.classList.add('image');
    childElement32.appendChild(imgElement32);
    const textElement32 = document.createElement('div');
    textElement32.innerHTML = '' + randomNumbers[index];
    textElement32.classList.add('text-right');
    childElement32.appendChild(textElement32);
    const textBelowElement32 = document.createElement('div');
    textBelowElement32.textContent = describe[index];
    textBelowElement32.classList.add('text-below');
    childElement32.appendChild(textBelowElement32);
    divElement.appendChild(childElement32);


    const canvasLayer = document.querySelector('body > div:nth-child(1) > canvas');
    canvasLayer.parentNode.insertBefore(divElement, canvasLayer); 
    saveAsImage();
}





function showSubsidyText() {
    var subsidyText = document.getElementById("subsidy");
    subsidyText.style.display = "flex";

    var endScreenDiv = document.getElementById("endScreen");
    function endLevel() {
        endScreenDiv.style.display = "block";
    }
    if (level !== 1) {
        peopleSFundraising += 50 * level;
        endLevel();
    }

}

let level = 1;
function hideSubsidyText() {
    var endScreenDiv = document.getElementById("endScreen");
    var endImage = document.getElementById("endImage");
    function nextLevel() {
        endScreenDiv.style.display = "none";
        var subsidyText = document.getElementById("subsidy");
        subsidyText.style.display = "none";
        subsidyText.style.fontSize = "32px"; 
        subsidyText.innerHTML = "點擊進入下一關";
        endImage.src = `img/prepare4/${roundCount}.png`;
        console.log(`nextLevel:${roundCount},${level}`);
    }
    function handleClick() {
        const element2 = document.getElementById('forScreenShot');
        element2.removeEventListener('click', handleClick);
        nextLevel();
        if (enemies.length === 0) {
            spawnEnemies(enemyCount);
        }
    }

    const element = document.getElementById('forScreenShot');
    element.addEventListener('click', handleClick);
    console.log(level)
    if (level !== 1) {
        console.log(level)
        coins += 50 * level;
        document.querySelector('#currentCost').innerHTML = "美式武器售價" + currentCost.toString() + " 億新台幣"
        document.querySelector('#coins').innerHTML = coins.toString() + " 億新台幣"
    }
}



setTimeout(function () {
    hideSubsidyText();
}, 2000);

let isRoadVisible = true;

function drawRoad() {
    if (isRoadVisible) {
        c.beginPath();
        c.moveTo(waypoints[0].x, waypoints[0].y);
        for (let i = 1; i < waypoints.length; i++) {
            const waypoint = waypoints[i];
            c.lineTo(waypoint.x, waypoint.y);
        }
        c.lineWidth = 75;
        c.strokeStyle = 'rgba(89,73,73,0.5)';
        c.stroke();
        const image = new Image();
        image.src = 'img/Green_Taiwan_White_Cross.png';
        c.drawImage(
            image,
            canvas.width - 75,
            260,
            75,
            50,
        )
    }


}


// 動畫
function animate() {

    const animationId = requestAnimationFrame(animate)

    function over() {
        if (flag) {
            // console.log('game over')
            cancelAnimationFrame(animationId)
            document.querySelector('#gameOver').style.display = 'flex'
            isRoadVisible = false;
            win2Draw()
        }
    }

    over()

    c.drawImage(image, 0, 0, canvas.width, canvas.height)
    drawRoad();
    for (let i = enemies.length - 1; i >= 0; i--) {
        over()
        const enemy = enemies[i]
        enemy.update()
        if (enemy.position.x > canvas.width) {
            hearts -= 1
            enemies.splice(i, 1)
            document.querySelector('#hearts').innerHTML = hearts

            if (hearts <= 0 || roundCount >= 7) {
                flag = true
                image.src = 'img/ruins.jpg'
                cancelAnimationFrame(animationId)
                document.querySelector('#gameOver').style.display = 'flex'
            }
            if (hearts <= 0 || roundCount >= 7) {
                // console.log('game over')
                cancelAnimationFrame(animationId)
                document.querySelector('#gameOver').style.display = 'flex'
                win2Draw()
            }
        }
    }

    for (let i = explosions.length - 1; i >= 0; i--) {
        over()
        const explosion = explosions[i]
        explosion.draw()
        explosion.update()

        if (explosion.frames.current >= explosion.frames.max - 1) {
            explosions.splice(i, 1)
        }

        // console.log(explosions)
    }


    if (enemies.length === 0 && enemiesFlag) {
        enemiesFlag = false;
        over();
        enemyCount += 1;
        enemySpeed += 0.2;
        roundCount += 1;
        // activeTile.isOccupied = false
        image.src = `img/prepare2/${roundCount}.png`;
        coins += returnCost*3;
        returnCost = 0;
        cancelAnimationFrame(animationId)
        buildings = []
        if (roundCount>=3 && roundCount<=6) {
            attackPower -= 5;
            enemyCount += 1;
        }
        enemyCount = Math.ceil(enemyCount * 1.3);
        showSubsidyText()
        setTimeout(function () {
            hideSubsidyText();
            level += 1;
        }, 1000);

    }


    placementTiles.forEach((tile) => {
        over()
        tile.update(mouse)
    })


    buildings.forEach((building) => {
        over()
        building.update()
        building.target = null
        const validEnemies = enemies.filter((enemy) => {
            const xDifference = enemy.center.x - building.center.x
            const yDifference = enemy.center.y - building.center.y
            const distance = Math.hypot(xDifference, yDifference)
            return distance < enemy.radius + building.radius
        })
        building.target = validEnemies[0]

        for (let i = building.projectiles.length - 1; i >= 0; i--) {
            const projectile = building.projectiles[i]

            projectile.update()

            const xDifference = projectile.enemy.center.x - projectile.position.x
            const yDifference = projectile.enemy.center.y - projectile.position.y
            const distance = Math.hypot(xDifference, yDifference)

            if (distance < projectile.enemy.radius + projectile.radius) {
                projectile.enemy.health -= attackPower
                if (projectile.enemy.health <= 0) {
                    const enemyIndex = enemies.findIndex((enemy) => {
                        return projectile.enemy === enemy
                    })

                    if (enemyIndex > -1) {
                        enemies.splice(enemyIndex, 1)

                        if (coins >= targetScore) {
                            flag = true
                            image.src = 'img/ruins2.jpg'
                            cancelAnimationFrame(animationId)
                            document.querySelector('#gameOver').style.display = 'flex'
                        }
                        if (coins >= targetScore) {
                            // console.log('game over')
                            cancelAnimationFrame(animationId)
                            document.querySelector('#gameOver').style.display = 'flex'
                            win2Draw()
                        }
                    }
                }

                // console.log(projectile.enemy.health)
                explosions.push(
                    new Sprite({
                        position: {x: projectile.position.x, y: projectile.position.y},
                        imageSrc: './img/explosion.png',
                        frames: {max: 4},
                        offset: {x: 0, y: 0}
                    })
                )
                building.projectiles.splice(i, 1)
            }
        }
    })
}

const mouse = {
    x: undefined,
    y: undefined
}

let currentCost = 10;
canvas.addEventListener('click', (event) => {
    if (activeTile.roundCount !== roundCount) {
        activeTile.isOccupied = false;
    }
    if (activeTile && !activeTile.isOccupied && coins - currentCost >= 0) {
        coins -= currentCost;
        returnCost += Math.ceil(currentCost*0.9);
        currentCost += 15 * roundCount;
        document.querySelector('#currentCost').innerHTML = "美式武器售價" + currentCost.toString() + " 億新台幣"
        document.querySelector('#coins').innerHTML = coins.toString() + " 億新台幣"
        buildings.push(
            new Building({
                position: {
                    x: activeTile.position.x,
                    y: activeTile.position.y
                }
            },roundCount)
        )
        activeTile.isOccupied = true;
        activeTile.roundCount = roundCount;
        buildings.sort((a, b) => {
            return a.position.y - b.position.y
        })
    }
})

window.addEventListener('mousemove', (event) => {
    mouse.x = event.clientX
    mouse.y = event.clientY

    activeTile = null
    for (let i = 0; i < placementTiles.length; i++) {
        const tile = placementTiles[i]
        if (
            mouse.x > tile.position.x &&
            mouse.x < tile.position.x + tile.size &&
            mouse.y > tile.position.y &&
            mouse.y < tile.position.y + tile.size
        ) {
            activeTile = tile
            break
        }
    }
})