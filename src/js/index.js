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

burgerBtn.addEventListener('click', () => {
    burgerMain.classList.toggle('burger_active')
    if(burgerMain.classList.contains('burger_active')){
        body.classList.add('body_non_scroll')
        burgerBtn.classList.add('burger__btn_active')
        header.classList.add('header_burger_active')
    }else{
        body.classList.remove('body_non_scroll')
        burgerBtn.classList.remove('burger__btn_active')
        header.classList.remove('header_burger_active')
    }
})

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


