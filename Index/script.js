function goToIndex() {
    window.location.href = 'index.html';
}
function goToAccount(){
    window.location.href = "Account/account.html";
}
document.querySelector("#site-name").addEventListener("click", goToIndex);
document.querySelector("#site-icon").addEventListener("click", goToIndex);
document.querySelector("#user-icon").addEventListener("click", goToAccount);
