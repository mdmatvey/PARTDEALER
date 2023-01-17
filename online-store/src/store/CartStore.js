import { makeAutoObservable } from "mobx"

export default class UserStore {
    constructor() {
        this._cartItems = []
        this._selectedItems = []
        makeAutoObservable(this)
    }

    setCartItems(items) {
        this._cartItems = items
    }

    setSelectedItems(items) {
        this._selectedItems = items
    }

    get cartItems() {
        return this._cartItems
    }
    
    get selectedItems() {
        return this._selectedItems
    }
}