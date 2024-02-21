$(".globalDownload").on("click", function () {
  if($(".globalDownload")){
    console.log("print");
  }else{
    console.log('no print')
  }
  // $("body").addClass("preload");
  // $(".loader-wrapper").fadeIn("slow");
  // html2canvas(document.querySelector("#print-container"), {
  //   scale: 1,
  // })
  //   .then((canvas) => {
  //     var imgData = canvas.toDataURL("image/png", 1);
  //     let pdf;
  //     if (canvas.width > canvas.height) {
  //       pdf = new jsPDF("l", "pt", [canvas.width, canvas.height]);
  //     } else {
  //       pdf = new jsPDF("p", "pt", [canvas.width, canvas.height]);
  //     }
  //     var pdfWidth = pdf.internal.pageSize.getWidth();
  //     var pdfHeight = pdf.internal.pageSize.getHeight();
  //     pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
  //     pdf.save("Charts.pdf");
  //   })
  //   .then(() => {
  //     $("body").removeClass("preload");
  //     $(".loader-wrapper").fadeOut("slow");
  //   });
});
