export default function random() {
    (function renderButtons() {
        for (let i = 1; i <= 20; i++) {
            const newButton = document.createElement('button');
            const buttonText = document.createTextNode(i.toString());
            newButton.appendChild(buttonText);
            newButton.setAttribute('value', i.toString());
            newButton.setAttribute('onclick', 'alert(event.target.value)');

            // some styling fun!
            if (i % 2 === 0) {
                newButton.setAttribute('class', 'numberedButtonEven');
            } else {
                newButton.setAttribute('class', 'numberedButtonOdd');
            }

            // insert elements into DOM
            const buttonContainer = document.getElementById('numberedButtons');
            buttonContainer.appendChild(newButton);
        }
    })();


}
