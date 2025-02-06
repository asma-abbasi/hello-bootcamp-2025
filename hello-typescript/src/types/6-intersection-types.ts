(function():void{
    type Person ={
        fname:string,
        lname:string,
    }
    type User =Person & {
        username:string,
        password:string
    }
})()