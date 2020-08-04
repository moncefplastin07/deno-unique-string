
export default function randomString(len=10) {
    let result = "";
    let charactersList = "abcdefjhigklmnopqrstuvwxyzABCDEFJHIGKLMNOPQRSTUVWXYZ0123456789";
    for(var char = 0; char < len; char++){
         let randomCharIndex = Math.floor(Math.random() * charactersList.length);
         result += charactersList[randomCharIndex];
    }
    return result;
}