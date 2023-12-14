export async function getChartsData() {
  try {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const caseId = urlParams.get("case");
    const URL = window.location.href;
    if (caseId === null) {
      return alert(
        `Please specify case number in the URL \n(example: ${URL}?case={YOUR_CASE_ID})`
      );
    }
    // CHANGE TO THE SERVER AND PORT REQUIRED, AND ADD /StatisticsWebservice AFTER THE PORT
    const response = await fetch(
      `http://localhost:9090/api/documentationController/charts/${caseId}`
    );
    //if (response.headers.get("content-length") == 0) {
    //return window.location.replace("`https://riy-cho-asc2-t.int.cma.org.sa:9091/StatisticsWebsite/views/error.html");
    //}
    const jsonString = await response.json(); //extract JSON from the http response

    return jsonString;
  } catch (error) {
    console.log(error);
  }
}
export async function getDatatableData() {
  try {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const caseId = urlParams.get("case");
    const URL = window.location.href;
    if (caseId === null) {
      return alert(
        `Please specify case number in the URL \n(example: ${URL}?case={YOUR_CASE_ID})`
      );
    }
    // CHANGE TO THE SERVER AND PORT REQUIRED, AND ADD /StatisticsWebservice AFTER THE PORT
    const response = await fetch(
      `http://localhost:9090/api/documentationController/document/${caseId}`
    );
    if (response.headers.get("content-length") == 0) {
      window.location.replace("/StatisticsWebsite/views/error.html");
      return;
    }
    const jsonString = await response.json(); //extract JSON from the http response
    if (jsonString) {
      $("body").removeClass("preload");
      $(".loader-wrapper").fadeOut("slow");
    }

    return jsonString;
  } catch (error) {
    console.log(error);
  }
}
