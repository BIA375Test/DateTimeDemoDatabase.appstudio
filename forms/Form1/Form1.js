let pw = "BIA375!"

Button2.onclick=function(){
    // best - accounts for time zones
    let now = new Date()
    let date = now.getFullYear()+ '-' + (now.getMonth()+1)+'-'+now.getDate()
    let time = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds()
    let dateTime = date + ' ' + time
    lblMessage.textContent = messageHello
    lblMessage.textContent = `The second method datetime is: ${dateTime}`
    
    let query = "INSERT INTO demodatetime (start) VALUES ('" + dateTime + "')"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=clc90595&pass=" + pw + "&database=clc90595&query=" + query)

    if (req.status == 200) { //transit worked.
        if (req.responseText == 500)    // means the insert succeeded
            lblMessage2.textContent = "You have successfully added the data!"
        else
            lblMessage2.textContent = "There was a problem with adding the data to the database."
    } else {
        // transit error
        lblMessage3.textContent = "Error: " + req.status
    }  

}

    
Button1.onclick=function(){
    // get current date and time 
    // this one doesn't account for time zone
    let now = new Date().toISOString().slice(0, 19).replace('T', ' ')
    lblMessage.textContent = `The ISO date time is ${now}`
    
    let query = "INSERT INTO demodatetime (start) VALUES ('" + now + "')"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=clc90595&pass=" + pw + "&database=clc90595&query=" + query)

    if (req.status == 200) { //transit worked.
        if (req.responseText == 500)    // means the insert succeeded
            lblMessage2.textContent = "You have successfully added the data!"
        else
            lblMessage2.textContent = "There was a problem with adding the data to the database."
    } else {
        // transit error
        NlblMessage3.textContent = "Error: " + req.status
    }  
    
}





