// fetch
const getInfo = async () => {
    const request = new Request('/json/resume.json');
    //fetch() starts a request and returns a promise. When the request completes, the promise is resolved with the Response object.
    //If the request fails due to some network problems, the promise is rejected.
    const response = await fetch(request);
   // await fetch(‘/cvjson’) starts an HTTP request to ‘/movies’ URL. Because the await keyword is present,
   //the asynchronous function is paused until the request completes.
    const cvObj = await response.json();
    //response.json() is a method on the Response object that lets you extract a JSON object from the response.
    //The method returns a promise, so you have to wait for the JSON: await response.json().
    //console.log(cvObj)
    return cvObj;
}


const populateCv = (cvObj) => {

    let presentationHtml = ``;
cvObj.presentation.forEach(element => {
    const listItem = `<li>${element}</li>`;

    presentationHtml +=listItem
    console.log(element);
});
document.getElementById('presentationList').innerHTML = presentationHtml;


let educationHtml = ``;
cvObj.education.forEach(element => {
    const listItem = `<li>${element}</li>`;

    educationHtml +=listItem
    console.log(element);
});
document.getElementById('educationList').innerHTML = educationHtml;

let languageHtml = ``;
cvObj.languages.forEach(element => {
    let listItem = `<li>${element}</li>`;
    languageHtml +=listItem
    console.log(cvObj.language);
    //console.log(cvObj.language);
});
document.getElementById('languageList').innerHTML = languageHtml;

let skillsHtml = ``;
cvObj.skills.forEach(element => {
    let listItem = `<li>${element}</li>`;
    skillsHtml +=listItem
    console.log(cvObj.language);
    //console.log(cvObj.skills);
});

document.getElementById('skillsList').innerHTML = skillsHtml;
}


const cvObj = await getInfo();
populateCv(cvObj);