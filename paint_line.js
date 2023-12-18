
document.addEventListener("DOMContentLoaded", function () {
    const drawingArea = document.getElementById("drawing-area");
    let isDrawing = false;
    let [colour, dot_size] = randomColour();

    // this is needed to make the painting go to the backlayer, 
    // but still allow you to paint over old marks
    const elements = document.querySelectorAll('*');
    const zIndexList = [];

    // console.log("Zindex list: " + getZIndexList());
    // console.log("Zindex list size" + getZIndexList().length)
    startDrawing
    drawingArea.addEventListener("mouseover",startDrawing);
    drawingArea.addEventListener("mouseenter", startDrawing);
    drawingArea.addEventListener("mousedown", mouseClick)
    drawingArea.addEventListener("mousemove", draw);
    drawingArea.addEventListener("mouseup", startDrawing);
    drawingArea.addEventListener("mouseleave", stopDrawing);

    function startDrawing(e) {
        [colour, dot_size] = randomColour();
        isDrawing = true;
        draw(e,colour);  // Draw a point at the starting position
    }

    function mouseClick(e) {
        console.log("mouseclick");
        [colour, dot_size] = randomColour();
        isDrawing = false;
        draw(e,colour);  // Draw a point at the starting position
    }
    function draw(e) {
        if (!isDrawing) return;
        const line = document.createElement("div");
        line.classList.add("line");
        line.style.width = dot_size + "px";
        line.style.height = dot_size + "px";
        line.style.backgroundColor = colour;
        new_x_pos= e.clientX +window.scrollX;
        new_y_pos= e.clientY + window.scrollY;
        line.style.left = new_x_pos + "px"
        line.style.top = new_y_pos + "px"
        // diff_x = Math.abs(new_x_pos-old_x_pos)
        // diff_y = Math.abs(new_y_pos-old_y_pos)
        // // Check if there is a big gap between the first and last position 
        // if (diff_x>3||Math.abs(diff_y>3){
        //     // if the gap is large enough create a series of connecting dots 
        //     quantity = 
        // }


        // Update the old position for next iteration
        old_x_pos =new_x_pos
        old_y_pos =new_y_pos
        drawingArea.appendChild(line);
        

        // console.log("Zindex list: " + getZIndexList());
        // console.log("Zindex list size" + getZIndexList().length)
    }

    function stopDrawing() {
        isDrawing = false;
    }

    function randomColour(){
    // Generate random values for red, green, and blue components
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    //Also generate a random size for the dot
    const dot_size = 30 + Math.floor(Math.random() * 100);
    // console.log("Dot_size" + dot_size);
    // Create a CSS color string in the format "rgb(r, g, b)"
    const colour = `rgb(${red}, ${green}, ${blue})`;    
    return [colour, dot_size];
    }

    // Function to check if the mouse is in a specific region
    function isMouseInRegion(region, event) {
        const rect = region.getBoundingClientRect;
        const mouseX = event.clientX;
        const mouseY = event.clientY;

        return (
            mouseX >= rect.left &&
            mouseX <= rect.right &&
            mouseY >= rect.top &&
            mouseY <= rect.bottom
        );
    }


    


    function getZIndexList() {
        const elements = document.querySelectorAll('*');
        const zIndexList = [];

        elements.forEach(element => {
            const zIndex = window.getComputedStyle(element).zIndex;
            if (!isNaN(zIndex)) {
                zIndexList.push({ element, zIndex: parseInt(zIndex) });
            }
        });

        // Sort the list by z-index
        zIndexList.sort((a, b) => a.zIndex - b.zIndex);

        return zIndexList;
    }
});
