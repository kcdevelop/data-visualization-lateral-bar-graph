const labelFontSize = [11, 12, 14]; //Font sizes

//Set "bar-label" font size
export const setLabelSize = () => {
    let barNumber = document.querySelectorAll('.data-bar'),
         pixelSize = `${labelFontSize[0]}px`;

    //Iterate through"data-bar" elements and set the "data-label" font size
    barNumber.forEach((barLabel) => {
        barLabel.style.fontSize = pixelSize;
    });
}