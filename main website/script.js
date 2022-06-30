// Mobile Menu Toggle
const mobileList = $( ".mobile-list" );
function menuToggle (event){
    $(".menu-icon").click("click", function() {
        mobileList.slideToggle( "slow", function() {
            mobileList.toggleClass("is-closed");
    })
    $( "body").toggleClass("dark-bg")})
}
function iconToggle (event){
    $(".close-icon").click("click", function() {
        mobileList.slideToggle( "slow",  function() {
            mobileList.toggleClass("is-closed");
    })
    $( "body").toggleClass("dark-bg")})
}
menuToggle()
iconToggle()

