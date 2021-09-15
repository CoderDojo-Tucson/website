function swapImage() {
    let imageDisplayed = document.getElementById('display-image');

    if (imageDisplayed.src.match('../images/CoderDojoTucsonLong.png')) {
        imageDisplayed.src = '../images/CoderDojoTucsonVerticalLogo.png';
    } else {
        imageDisplayed.src = '../images/CoderDojoTucsonLong.png';
    }
}