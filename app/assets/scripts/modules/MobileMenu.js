import $ from 'jquery'


// class MobileMenu {
//     constructor() {
//         //alert("Testing from MobileMenu")

//         /* === this code will work but it is not or === */
//         $('.site-header__menu-icon').click(function() {
//             console.log("The top right icon was clicked")
//         }) 
//     }
// }


//==============================
// class MobileMenu {
//     constructor() {
//         this.menuIcon = $(".site-header__menu-icon")
//         this.menuContent = $(".site-header__menu-content")
//         this.events()
//     }

//     events() {
//         this.menuIcon.click(this.toggleTheMenu)
//         console.log(this)
//     }

//     toggleTheMenu() {
//         //console.log("Hooray - the icon was clicked")
//         console.log(this)
//         //=== to remove something off the page ===
//         //this.remove()

//         this.menuContent.toggleClass("site-header__menu-content--is-visible")
//     }
// }


//============================
// class MobileMenu {
//     constructor() {
//         this.menuIcon = $(".site-header__menu-icon")
//         this.menuContent = $(".site-header__menu-content")
//         this.events()
//     }

//     events() {
//         this.menuIcon.click(this.toggleTheMenu.bind("hello world"))
//         console.log(this)
//     }

//     toggleTheMenu() {
//         alert(this)
//         this.menuContent.toggleClass("site-header__menu-content--is-visible")
//     }
// }


//============================
class MobileMenu {
    constructor() {
        this.siteHeader = $(".site-header")
        this.menuIcon = $(".site-header__menu-icon")
        this.menuContent = $(".site-header__menu-content")
        this.events()
    }

    events() {
        this.menuIcon.click(this.toggleTheMenu.bind(this))
        
    }

    toggleTheMenu() {
        this.menuContent.toggleClass("site-header__menu-content--is-visible")
        this.siteHeader.toggleClass("site-header--is-expanded")
        this.menuIcon.toggleClass("site-header__menu-icon--close-x")
    }
}


export default MobileMenu;