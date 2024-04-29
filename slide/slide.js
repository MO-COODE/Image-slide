

    let images = ['/images/image1.jpg', '/images/image2.png', '/images/image3.jpeg', '/images/image4.jpeg', '/images/image5.png', '/images/image6.jpeg', '/images/image7.jpg', '/images/image8.jpg', '/images/image9.jpg' ]

    let img = document.getElementById('img');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');

    let currentImage = 0;

    //next button
    nextBtn.addEventListener('click', () => {
        nextImg();     
    });

    function nextImg() {
        currentImage ++;

        if(currentImage > images.length - 1){
        currentImage = 0;
        };

        img.src = images[currentImage];   
    };


    //previous button
    prevBtn.addEventListener('click', () => {
        prevImg();      
    });

    function prevImg() {
        currentImage --;

        if(currentImage < 0){
        currentImage = images.length - 1;
        };

        img.src = images[currentImage];
    }   
