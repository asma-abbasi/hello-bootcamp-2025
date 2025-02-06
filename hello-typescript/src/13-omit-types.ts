(function(){
    type User = {
        name: string;
        address: string;
        username: string;
        password: string;
    };

    type Person = Omit<User, "username" | "password">;
})()