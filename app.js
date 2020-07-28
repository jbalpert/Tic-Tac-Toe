document.addEventListener("DOMContentLoaded", () =>{
    const squares = document.querySelectorAll('.container div');
    squares.forEach(square =>{
        square.addEventListener('click', clickOutcome);
    });

    function clickOutcome(){
        this.textContent = "X";
    }
});