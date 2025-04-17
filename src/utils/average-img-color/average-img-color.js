export const getIMGAverageColor = (img, brightness = 1, onerror = () => {}) => {
    // Create a canvas to access the pixels
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    let data;
    canvas.width = img.width;
    canvas.height = img.height;
    // Set canvas dimensions
    try {
        if (!ctx) {
            onerror?.(new Error('Could not get 2d context'));
            return ['', {}];
        }
        ctx.drawImage(img, 0, 0);

        const imageData = ctx.getImageData(0, 0, img.width, img.height);
        data = imageData.data;
    } catch (error) {
        onerror?.(error);
        return ['', {}];
    }

    // Initialize color accumulators
    let red = 0;
    let green = 0;
    let blue = 0;
    // Loop through the canvas to get the colors
    for (let i = 0; i < data.length; i += 4) {
        red += data[i];
        green += data[i + 1];
        blue += data[i + 2];
    }
    // Calculate the averages by dividing each color sum by the total number of pixels
    const numberOfPixels = canvas.width * canvas.height;
    const dataBrightness = parseFloat(
        img.getAttribute('average-brightness') || ''
    );
    brightness = dataBrightness || brightness;
    red = (red / numberOfPixels) * brightness;
    green = (green / numberOfPixels) * brightness;
    blue = (blue / numberOfPixels) * brightness;
    // Limit the minimum value to 0 for colors
    const average = {
        red: red < 0 ? 0 : red,
        green: green < 0 ? 0 : green,
        blue: blue < 0 ? 0 : blue,
    };
    // Return the average color as a string and as an object
    const rgb = `rgb(${average.red}, ${average.green}, ${average.blue})`;
    return [rgb, average];
};
