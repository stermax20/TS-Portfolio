document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('imgModal');
    if (modal instanceof HTMLElement) {
        const modalImg = document.getElementById('imgModalContent');
        if (modalImg instanceof HTMLImageElement) {
            const closeBtn = document.getElementsByClassName('close')[0];
            if (closeBtn instanceof HTMLElement) {
                const images = document.querySelectorAll('.project-img');
                if (images instanceof NodeList) {
                    images.forEach((img) => {
                        if (img instanceof HTMLImageElement) {
                            img.addEventListener('click', () => {
                                modal.style.display = 'block';
                                modalImg.src = img.src;
                            });
                        }
                    });
                }

                closeBtn.addEventListener('click', () => {
                    modal.style.display = 'none';
                });

                window.addEventListener('click', (event) => {
                    if (event.target === modal) {
                        modal.style.display = 'none';
                    }
                });
            }
        }
    }
});
