import { makeAutoObservable } from "mobx"

export default class ItemStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Холодильники'},
            {id: 2, name: 'Смартфоны'},
            {id: 3, name: 'Ноутбуки'},
            {id: 4, name: 'Телевизоры'}
        ]
        this._brands = [
            {id: 1, name: 'Samsung'},
            {id: 2, name: 'Apple'},
            {id: 3, name: 'Lenovo'},
            {id: 4, name: 'Asus'},
        ]
        this._items = [
            {id: 1, name: 'iPhone 12 PRO', price: 25000, rating: 5, img: 'https://ipixel.ru/upload/iblock/06c/oan8l5hmnd66klj7g3v8qnmc2zorbw9r.jpg'},
            {id: 2, name: 'iPhone 12 PRO', price: 25000, rating: 5, img: 'https://ipixel.ru/upload/iblock/06c/oan8l5hmnd66klj7g3v8qnmc2zorbw9r.jpg'},
            {id: 3, name: 'iPhone 12 PRO', price: 25000, rating: 5, img: 'https://ipixel.ru/upload/iblock/06c/oan8l5hmnd66klj7g3v8qnmc2zorbw9r.jpg'},
            {id: 4, name: 'iPhone 12 PRO', price: 25000, rating: 5, img: 'https://ipixel.ru/upload/iblock/06c/oan8l5hmnd66klj7g3v8qnmc2zorbw9r.jpg'},
        ]
        this._selectedType = {};
        this._selectedBrand = {};
        makeAutoObservable(this)
    }

    setType(types) {
        this._types = types
    }

    setBrands(brands) {
        this._brands = brands
    }

    setItems(items) {
        this._items = items
    }

    setSelectedType(type) {
        this._selectedType = type
    }

    setSelectedBrand(brand) {
        this._selectedBrand = brand
    }

    get types() {
        return this._types
    }

    get brands() {
        return this._brands
    }

    get items() {
        return this._items
    }

    get selectedType() {
        return this._selectedType
    }

    get selectedBrand() {
        return this._selectedBrand
    }
}