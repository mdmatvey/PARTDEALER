import { makeAutoObservable } from "mobx"

export default class UserStore {
    constructor() {
        this._cartItems = []
        makeAutoObservable(this)
    }

    addCartItem(item) {
        this._cartItems = [...this._cartItems, item]
    }

    removeCartItem(itemID) {
        this._cartItems = this._cartItems.filter(item => item.id !== itemID)
    }

    get cartItems() {
        return this._cartItems
    }
}