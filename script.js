const toggleButton = document.getElementById('toggle');
const sideBar = document.getElementById('side-bar');

toggleButton.addEventListener('click', show);

function show() {
    sideBar.classList.toggle('active');
};

const contain = document.querySelector('.expo');

contain.addEventListener('click', () => {
    sideBar.classList.remove('active');
})

const cube = document.querySelector('.cube');
const container = document.querySelector('.cube-container')

// CUBE TOURNE AC MOUSEMOVE
container.addEventListener('mousemove', (e) => {

    rotY = e.clientX / 2;
    rotZ = e.clientY / 2;

    cube.style.animation = 'none'
    cube.style.transform = 'rotateY(' + rotY + 'deg) rotateZ(' + rotZ + 'deg)';
    cube.style.transition = '0.5s ease-out';

    container.addEventListener('mouseleave', () => {
        cube.style.animation = 'roll 1500s infinite linear';
    });
});

// TOURNER CUBE AC FLECHES
document.body.addEventListener('click', function(e) {

    // CHOISIT FACE ALEATOIRE
    const classes = ['front', 'back', 'top', 'bottom', 'right', 'left'];
    classToUse = classes[Math.floor(Math.random() * classes.length)];

    if (cube.classList.contains(classToUse)) {
        classToUse = classes[Math.floor(Math.random() * classes.length)];
    };

    // AJOUT CLASSE A MONTRER A FACE ALEATOIRE
    if (e.target.classList.contains('arrow')) {
        cube.classList.remove('front', 'back', 'top', 'bottom', 'right', 'left');
        cube.classList.add(classToUse);
        cube.style.animation = 'none';
        cube.style.transition = '1.2s ease';
    };
});


document.querySelectorAll('.arrow').forEach(item => {
    item.addEventListener('mouseleave', () => {
        cube.style.animation = 'spin 1500s infinite linear';
        cube.classList.remove('front', 'back', 'top', 'bottom', 'right', 'left');
    });
});