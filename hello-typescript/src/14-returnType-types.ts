(function(){
    type User ={
        status:number;
        message: string;
    }

    function create(user: User): { status:number ,message:string} {

    }

    type Response = ReturnType<typeof create>;
})()