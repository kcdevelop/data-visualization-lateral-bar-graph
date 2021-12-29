var barWidth= 0;

export const setBarWidth = (barElm, rangeStart, barPercent, unit) => {
    //Offset each "data-bar" from the left along the scale
    let addLeftPadding = `${parseInt(rangeStart)}`;

    //Prevent a respective "data-bar" from extending beyond the "graph-frame"
    if (barPercent >= 100 && addLeftPadding > 0) {
        barPercent = barPercent - ((barPercent - addLeftPadding) - 5);
    }
    
    //Set each "data-bar" elements' width
    barElm.style.width = barWidth <= barPercent ? `${barWidth}${unit}` : false;
    barElm.style.marginLeft = `${addLeftPadding}px`;
    ++barWidth;
}
