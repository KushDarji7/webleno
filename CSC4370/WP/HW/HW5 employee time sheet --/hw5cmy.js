document.addEventListener('DOMContentLoaded', () => {

    //card options
    const tileArray = [
        {
            name: 'n1',
            img: 'tile/n1.jpg'
        },
        {
            name: 'n1',
            img: 'tile/n1.jpg'
        },
        {
            name: 'n2',
            img: 'tile/n2.jpg'
        },
        {
            name: 'n2',
            img: 'tile/n2.jpg'
        },
        {
            name: 'n3',
            img: 'tile/n3.jpg'
        },
        {
            name: 'n3',
            img: 'tile/n3.jpg'
        },
        {
            name: 'n4',
            img: 'tile/n4.jpg'
        },
        {
            name: 'n4',
            img: 'tile/n4.jpg'
        },
        {
            name: 'n5',
            img: 'tile/n5.jpg'
        },
        {
            name: 'n5',
            img: 'tile/n5.jpg'
        },
        {
            name: 'n6',
            img: 'tile/n6.jpg'
        },
        {
            name: 'n6',
            img: 'tile/n6.jpg'
        },
        {
            name: 'n7',
            img: 'tile/n7.jpg'
        },
        {
            name: 'n7',
            img: 'tile/n7.jpg'
        },
        {
            name: 'n8',
            img: 'tile/n8.jpg'
        },
        {
            name: 'n8',
            img: 'tile/n8.jpg'
        },


    ]

    tileArray.sort(() => 0.5 - Math.random())

    const memBoard = document.querySelector('.memBoard')
    const resultDisplay = document.querySelector(".results")
    var tileChosen = []
    var tileChosenId = []
    var tilesWon = []


    //game board

    function newBoard() {

        for (let i = 0; i < tileArray.length; i++) {
            var tile = document.createElement('img')
            tile.setAttribute('src', 'tile/match.jpg')
            tile.setAttribute('data-id', i)
            tile.addEventListener('click', flipTile)
            memBoard.appendChild(tile)

        }
    }

    //check for matches
    function checkForMatch() {
        var tiles = document.querySelectorAll('img')
        const optionOneId = tileChosenId[0]
        const optionTwoId = tileChosenId[1]

        if (tileChosen[0] === tileChosen[1]) {
            alert('well done hunter you found a match')
            tiles[optionOneId].setAttribute('src', 'tile/nomatch.jpg')
            tiles[optionTwoId].setAttribute('src', 'tile/nomatch.jpg')
            tilesWon.push(tileChosen)
        } else {
            tiles[optionOneId].setAttribute('src', 'tile/match.jpg')
            tiles[optionTwoId].setAttribute('src', 'tile/match.jpg')
            
            //alert('Thats not the one huter, try again')
        }

        //clears tiles chosed and chosed ids to try again
        tileChosen = []
        tileChosenId = []
        //scoring system
        //resultDisplay.textContent = tilesWon.length     ///hgerer 
        if (tilesWon.length === tileArray.length / 2) {
            resultDisplay.textContent = 'Well done hunter you managed to find all the beast'
        }
    }

    //flip card
    function flipTile() {
        var tileId = this.getAttribute('data-id')
        tileChosen.push(tileArray[tileId].name)
        tileChosenId.push(tileId)
        this.setAttribute('src', tileArray[tileId].img)

        if (tileChosen.length === 2) {
            setTimeout(checkForMatch(), 600) // in mill sec
        }
    }



    newBoard();




})
