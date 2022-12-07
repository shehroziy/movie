import clas from '../modules/class'
import form from '../modules/form'
import loader from '../modules/loader'
import modal from '../modules/modal'
import slider from '../modules/slider'
import tab from '../modules/tab'
import timer from '../modules/timer'
import { openModal } from '../modules/modal'

window.addEventListener('DOMContentLoaded', () => {
    const modalTimerId = setTimeout(
        () => openModal('.modal', modalTimerId),
        50000
    )

    clas()
    form('form', modalTimerId)
    loader()
    modal('[data-modal]', '.modal', modalTimerId)
    slider({
        container: '.offer__slider',
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        slide: '.offer__slide',
        totalCounter: '#total',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner',
    })
    tab(
        '.tabheader__item',
        '.tabcontent',
        '.tabheader__items',
        'tabheader__item_active'
    )
    timer('.timer', '2022-08-11')
})
