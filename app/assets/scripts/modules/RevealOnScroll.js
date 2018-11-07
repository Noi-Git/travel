import $ from 'jquery'
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints'


class RevealOnScroll {
    constructor() {
        this.itemsToReveal = $(".feature-item")
        this.hideInitially() /* to hide item when the page load */
        this.createWaypoints()
    }

    hideInitially() {
        this.itemsToReveal.addClass("reveal-item")
    }

    createWaypoints() {
        this.itemsToReveal.each(function() {
            // alert("testing")
            var currentItem = this
            new Waypoint({
                element: currentItem,
                handler: function() {
                    $(currentItem).addClass("reveal-item--is-visible")
                },
                offset: "90%"
            })
        })
    }
}

export default RevealOnScroll