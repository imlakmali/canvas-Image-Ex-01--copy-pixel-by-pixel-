function handlFileSelect(event) {

  const file = event.target.files[0];

  if (file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = function () {

      const img = new Image();
      img.src = reader.result;

      img.onload = function () {
        const sourceCanvas = document.getElementById("sourceCanvas");
        sourceCanvas.width = img.width;
        sourceCanvas.height = img.height;
        const sourceCtx = sourceCanvas.getContext("2d");
        sourceCtx.drawImage(img, 0, 0, img.width, img.height);

        const targetCanvas = document.getElementById("targetCanvas");
        targetCanvas.width = img.width;
        targetCanvas.height = img.height;
        const targetCtx = targetCanvas.getContext("2d");
        const imageData = sourceCtx.getImageData(0,0,img.width,img.height);
          // console.log(imageData);
          // console.log(imageData);

        // for(let i = 0 ; i< imageData.data.length ; i+= 4){
        //     //  I chenged the color.
        //   imageData.data[i] = imageData.data[i + 1];
        //   imageData.data[i + 1] = imageData.data[i + 2];
        //   imageData.data[i + 2] = imageData.data[i];
        // }

          targetCtx.putImageData(imageData, 0, 0);

      };
    };
  }
}
document.getElementById("fileInput").addEventListener("change", handlFileSelect);
