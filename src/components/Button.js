



export default
    function Button({onRoll}) {
       
       function getRandom(min, max) {
            min = Math.ceil(1);
            max = Math.floor(6);
            return Math.floor(Math.random() * (max - min + 1) + min); 
          }
        function handleClick() {
            const randomNumber = getRandom();
            console.log(getRandom());
            onRoll(randomNumber); 
        }

        return <button onClick={handleClick}>Бросить кубик</button>;
} 