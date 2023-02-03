localStorage.setItem('Username','admin');
localStorage.setItem('Password','1234567');
localStorage.setItem('Todo','[]')
var usn, pas = 0
function GetUsnAndPas(){
    usn = document.getElementById('usn').value;
    pas = document.getElementById('pas').value;
    CheckAcc(usn,pas)
}
function CheckAcc(usn,pasw){
    if (usn == localStorage.getItem('Username') && pasw == localStorage.getItem('Password')){
        location.href = 'http://127.0.0.1:5500/js/lesson%203/index2.html'
    }
    else{
        alert("username or password is not correct")
    }
}
document.getElementById('username').innerHTML += localStorage.getItem('Username')
function CreateNote(){
    let update_note = document.getElementById('note').value
    let note = localStorage.getItem('Todo')
    if(note != null){
        var arr = JSON.parse(note)
    }
    arr.push(update_note);
    let js = JSON.stringify(arr)
    localStorage.setItem('Todo',js)
    document.getElementById('note').value = '';
}