// add button "Turn off" and styles
// change button name to "Turn on" when clicked
// add message under button 'Last turn on: `{DD-MM-YYYY HH:MM:SS}`'
// change button name to "Turn off" when clicked again
// add message under button 'Last turn off: `{DD-MM-YYYY HH:MM:SS}`'
// change background color to dark-grey when clicked
// change background color to grey when clicked again
// button state should be saved in localStorage and stay avter page reload

const button = document.querySelector('.custom-btn');
const message = document.createElement('p');
// message.style.marginTop = '10px';
button.parentElement.appendChild(message);

const buttonStates = {
    on: 'Turn on',
    off: 'Turn off',
}

console.log(button.textContent);
button.addEventListener('click', () => {
    if (button.textContent === buttonStates.off) {
        button.textContent = buttonStates.on;
        document.body.style.backgroundColor = '#1b1b1b';
        message.textContent = `Last turn off: ${new Date().toLocaleString()}`;
        // localStorage.setItem('buttonState', buttonStates.on);
        // localStorage.setItem('message', message.textContent);
        console.log(button.textContent);
        return;
    } 
    if (button.textContent === buttonStates.on) {
        button.textContent = buttonStates.off;
        document.body.style.backgroundColor = '#e0e5ec';
        message.textContent = `Last turn on: ${new Date().toLocaleString()}`;
        // localStorage.setItem('buttonState', buttonStates.off);
        // localStorage.setItem('message', message.textContent);
        console.log(button.textContent);
    }
});
