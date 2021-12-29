import { setBarWidth } from "./bars.js";
import { setLabelSize } from "./set-label-size.js";
import { currentURL } from "./variables.js";

//Set handle for "data-bar" elements' container 
const graphBars = document.querySelector('.graph-bars');

//Build the bar graph using the "dataSet"
export const buildGraph = (data) => {
    //Set graph title
    let graphTitle = document.querySelector('.graph-title'),
         titleText = document.createTextNode(data[0].title);

    graphTitle.append(titleText);

    /*Iterate through the "dataSet" to create 
    "start-label", "end-label", and "data-bar" elements*/
    data.forEach((item, barCount) => {
        if(barCount > 0) {
            let dataBar = document.createElement('div'),
                barStartLabel = document.createElement('span'),
                startText = document.createTextNode(item.rangeStart),
                barEndLabel = document.createElement('span'),
                endText = document.createTextNode(item.rangeEnd);
            
            //Set "start-label" and "end-label" classes
            barStartLabel.setAttribute('class', 'start-label');
            barEndLabel.setAttribute('class', 'end-label');
            
            //Append "start-label" and "end-label" elements
            barStartLabel.append(startText);
            barEndLabel.append(endText);
            dataBar.append(barStartLabel, barEndLabel);

            //Set "data-bar" element classes and title
            dataBar.setAttribute('class', `data-bar bar${barCount + 1}`);
            dataBar.setAttribute('title', `${item.rangeStart} - ${item.rangeEnd}`);

            //Set "data-bar" element background styles
            dataBar.style.backgroundColor = `${item.color}`;
            dataBar.style.backgroundImage = `
                url('${currentURL}images/${item.background}')
            `;
            
            //Append "data-bar" elements
            graphBars.append(dataBar);

            //Animate "data-bar" widths
            let increaseWidth = setInterval(() => {
                //Set each "data-bar" width incrementally
                setBarWidth(dataBar, item.rangeStart, item.barPercent, item.unit);

                //Set label font size
                setLabelSize();
            }, 15,
            setTimeout(() => {
                clearInterval(increaseWidth);
            }, 3000));
        }
    });
}