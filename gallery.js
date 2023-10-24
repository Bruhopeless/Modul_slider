/**
 * Gallery
 * @author F31
 * version v1.0
 */

;class Gallery {
    /**
     * Инициализация объекта слайдера.
     * Загружает все необходимые элементы DOM и добавляет слушателей событий.
     */
    constructor (param) {
        this.slider = document.querySelector (param.elem);
        this.photos = this.slider.querySelectorAll ('.photo img');
        this.btnNav = this.slider.querySelectorAll ('.btn-nav a');
        this.btnDots = this.slider.querySelectorAll ('.dots a');

        if (param.showBtnNav == true) {
            this.btnNav[0].addEventListener('click', () => this.prevPhoto ());
            this.btnNav[1].addEventListener('click', () => this.nextPhoto ());
        }
        else {
            this.btnNav[0].style.display = 'none';
            this.btnNav[1].style.display = 'none';
        }

        this.count = 0;
        this.timer = '';

        if (param.showDots == true) {
            for (let i = 0; i < this.btnDots.length; i++) {
                this.btnDots[i].addEventListener ('click', () => {
                    this.count = i;
                    this.showImg (i);
                });
            }
        }
        else {
            for (let i = 0; i <this.btnDots.length; i++) {
                this.btnDots[i].style.display = 'none';
            }
        }
    }

    /**
     * Переключает слайдер на предыдущее изображение.
     */
    prevPhoto () {
        if(this.count > 0) {
            this.count--;
        }
        else {
            this.count = this.photos.length - 1;
        }
        this.showImg (this.count);
    }

    /**
     * Переключает слайдер на следующее изображение.
     */
    nextPhoto () {
        if(this.count < this.photos.length - 1) {
            this.count++;
        }
        else {
            this.count = 0;
        }
        this.showImg (this.count);
    }

    /**
     * Отображает изображение с указанным индексом.
     * @param {number} count - Индекс изображения для отображения.
     */
    showImg (count) {
        for (let i = 0; i < this.photos.length; i++) {
            if (i == count) {
                this.photos[i].style.opacity = 1;
                this.btnDots[i].style.background = '#989de3';
            }
            else {
                this.photos[i].style.opacity = 0;
                this.btnDots[i].style.background = 'gray';
            }
        }
    }
};

// Создание нового слайдера
let slider = new Gallery ({
    elem: '#slider', 
    showDots: false,
    showBtnNav: true,
});
