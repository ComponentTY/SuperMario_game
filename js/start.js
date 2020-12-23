(function (global) {
    window.onload = function () {
        var choseBtn = document.querySelector('.chose-btn')
        let choseBtnTop = choseBtn.style.top
        console.log(document.querySelector('.chose-btn').style.top)
        document.addEventListener('keypress', (e) => {
            // up 119 87
            // down 115 83 
            // left 97
            // right 100
            // J 106
            // K 107
            console.log(e.keyCode)
            const keyCode = e.keyCode
            switch (keyCode) {
                case 119:
                    if (choseBtnTop === 0) {
                        choseBtnTop = choseBtn.style.top = 20 + 'px'
                    } else {
                        choseBtnTop = choseBtn.style.top = 0
                    }
                    break
                case 115:
                    if (choseBtnTop === 0) {
                        choseBtnTop = choseBtn.style.top = 20 + 'px'
                    } else {
                        choseBtnTop = choseBtn.style.top = 0
                    }
                    break
            }
        }, true)
    }
})(window)