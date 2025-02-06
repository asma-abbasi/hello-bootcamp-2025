(function(){
    type User = {
        name: string;
        address: string;
        username: string;
        password: string;
    };

    type Person = Pick<User, "name" | "address">;
})()