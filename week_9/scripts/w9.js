document.getElementById('windowObj').addEventListener('click', event => {
    alert('alert Hello');
    window.alert('Window alert Hello');
    confirm('This is a confirmation box');
    window.confirm('This is a confirmation box from the window');
})

document.getElementById('windowWind').addEventListener('click', event => {
    const popup = window.open('https://spyentist.github.io/WDD330/','WDD 330 Portfolio','width=400,height=400,resizable=yes');
})