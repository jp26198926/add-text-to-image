import { useRef, useEffect, useContext } from "react";
function ImageWithText({src, text}) {
    const canvasRef = useRef(null);

    useEffect(()=>{
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        const image = new Image();
        image.src = src;

        image.onload = () => {
            //Set canvas dimensions to match image
            canvas.width = image.width;
            canvas.height = image.height;

            //Draw the image
            ctx.drawImage(image, 0, 0);            
            ctx.fillStyle = "white";  
            
            const useFont = {
                name: "47px Bahnschrift",
                position: "23px Bahnschrift",
                other: "18px Bahnschrift"
            }

            const coordinates = {
                name: {x: 485, y: 85},
                position: {x: 485, y: 122},
                email: {x: 540, y: 183},
                phone: {x: 540, y: 240},
                website: {x: 540, y: 296}
            }            

            //Add text to the image            
            //convert object into array
            Object.keys(text).filter(key=>key!=="local").map((key) => {               
                ctx.font = (key == "name" || key == "position") ? useFont[key] : useFont.other;
                ctx.fillText(text[key], coordinates[key].x, coordinates[key].y);
            });

        };
    },[src, text]);    

    return (
        <canvas ref={canvasRef} className="border p-3 shadow-md"></canvas>
    )
}

export default ImageWithText