import burger from './burger.js'

const lineItem = document.querySelector('.main__line_item');
const marquee = document.querySelector('.marquee');


lineItem.addEventListener('mouseover', () => {
    marquee.forEach(line => {        
        line.style.animationPlayState = 'paused';
    });
});

lineItem.addEventListener('mouseout', () => {
    marquee.style.animationPlayState = 'running';
});


//---------burger---------
const burgerBtn = document.querySelector('.burger__btn')
const burgerMain = document.querySelector('.burger')
const body = document.querySelector('body')
const header = document.querySelector('.header')
const navLinks = document.querySelectorAll('.burger__item')

burgerBtn.addEventListener('click', toggleMenu);
burgerBtn.addEventListener('touchstart', toggleMenu);

function toggleMenu(e) {
    e.preventDefault();
    burgerMain.classList.toggle('burger_active');
    if(burgerMain.classList.contains('burger_active')){
        body.classList.add('body_non_scroll');
        burgerBtn.classList.add('burger__btn_active');
        header.classList.add('header_burger_active');
    } else {
        body.classList.remove('body_non_scroll');
        burgerBtn.classList.remove('burger__btn_active');
        header.classList.remove('header_burger_active');
    }
}



navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (burgerMain.classList.contains('burger_active')) {
            burgerMain.classList.remove('burger_active');
            body.classList.remove('body_non_scroll');
            burgerBtn.classList.remove('burger__btn_active');
            header.classList.remove('header_burger_active');
        }
    });
});


//-------------------------------------------

document.addEventListener('DOMContentLoaded', function () {
    function initializeSlick(target) {
        $(target).slick({
            dots: true,
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
        });
    }

    function updateBlocks(targetId) {
        const blocks = document.querySelectorAll('.filter_block');

        blocks.forEach(block => {
            const slider = block.querySelector('.slider');
            if (slider && $(slider).hasClass('slick-initialized')) {
                $(slider).slick('unslick');
            }
            block.classList.remove('__active');
            block.style.display = 'none';
        });

        const activeBlock = document.getElementById(targetId);
        if (activeBlock) {
            activeBlock.classList.add('__active');
            activeBlock.style.display = 'block';

            // Инициализация слайдера после того, как блок станет видимым
            setTimeout(() => {
                initializeSlick(activeBlock.querySelector('.slider'));
            }, 0);
        }
    }

    document.querySelectorAll('.filter-btn').forEach(button => {
        button.addEventListener('click', function () {
            const targetId = this.getAttribute('data-target');
            updateBlocks(targetId);
        });
    });

    // Инициализация первого блока при загрузке страницы
    updateBlocks('block_5');

    window.addEventListener('resize', function () {
        const activeBlock = document.querySelector('.filter_block.__active');
        if (activeBlock) {
            updateBlocks(activeBlock.id);
        }
    });
});
// -------------------
// const insideArrow2 = document.querySelector('.inside_arrow_2')
// const whatsInsideBody = document.querySelector('.whats-inside_body')


// insideArrow2.addEventListener('click', () => {
//     insideArrow2.classList.toggle('inside_arrow_2_active')
//     whatsInsideBody.classList.toggle('inside_visible')
// })

//---------------------
const whatsInsideBody = document.querySelector('.whats-inside_body');
const triggerElement = document.querySelector('.inside_arrow_2');

triggerElement.addEventListener('click', () => {
    if (!whatsInsideBody.classList.contains('inside_visible')) {
        whatsInsideBody.style.height = `${whatsInsideBody.scrollHeight}px`;
        whatsInsideBody.classList.add('inside_visible');
        triggerElement.classList.add('inside_arrow_2_active')
        // if(!triggerElement.classList.contains('inside_arrow_2_active')){
        // }else{
        //     triggerElement.classList.remove('inside_arrow_2_active')
        // }
        

        whatsInsideBody.addEventListener('transitionend', () => {
            // После завершения анимации делаем высоту auto, чтобы блок мог адаптироваться к изменению контента
            if (whatsInsideBody.classList.contains('inside_visible')) {
                whatsInsideBody.style.height = 'auto';
            }
        }, { once: true });

    } else {
        whatsInsideBody.style.height = `${whatsInsideBody.scrollHeight}px`;

        // Добавляем задержку, чтобы CSS мог отследить изменение высоты перед сворачиванием
        setTimeout(() => {
            whatsInsideBody.style.height = '0px';
            whatsInsideBody.classList.remove('inside_visible');
            triggerElement.classList.remove('inside_arrow_2_active')
        }, 0);
    }
});

// Плавный переход высоты
whatsInsideBody.style.transition = 'height 0.3s ease-in-out, opacity 0.4s ease-in-out';

// --------------

