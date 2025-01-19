let scrapeEmails = document.querySelector("#launch-btn");
let emailList = document.querySelector("#email-list");
let copy = document.querySelector("#copy");


// Chrome runtime handler
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    let emails = request.extractedEmails;

    if (emails === null || emails.length === 0) {
        let list_item = document.createElement("li");
        list_item.innerText = "No emails on this page!!";
        emailList.append(list_item);
        return;
    }

    emails.forEach(email => {
        let list_item = document.createElement("li");
        list_item.innerText = email;
        emailList.append(list_item);
    });

    copy.addEventListener("click", async () => {
        if (emailList) {
            const type = "text/plain";
            const blob = new Blob([`${emailList.innerText}`], { type });
            const data = [new ClipboardItem({ [type]: blob })];
            await navigator.clipboard.write(data).then(() => alert("Copied")).catch(() => console.log("error"));
        }
    })
})


// Scraping Method
function scraping() {
    let emailRegex = /[\w\.=-]+@[\w\.-]+\.[\w]{2,3}/gim;
    let extractedEmails = document.body.innerHTML.match(emailRegex);

    chrome.runtime.sendMessage({ extractedEmails })
}

scrapeEmails.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.scripting.executeScript({ target: { tabId: tab.id }, func: scraping, })
});
