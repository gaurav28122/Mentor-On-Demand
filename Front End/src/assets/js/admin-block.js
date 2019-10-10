function usermentor(element) {
    if(element.value == "mentor")
        document.getElementById('mentortable').style.display = 'block';
    else
        document.getElementById('mentortable').style.display = 'none';

    if(element.value == "user")
        document.getElementById('usertable').style.display = 'block';
    else
        document.getElementById('usertable').style.display = 'none';
}