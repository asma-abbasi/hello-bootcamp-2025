(function (): void {
    const button = document.querySelector("#btn") ;

    //const button2 = document.querySelector("#btn")!;
    //const button2 = document.querySelector("#btn") as element ;

    button!.addEventListener('click',()=>{
        console.log('clicked!')
    })

    // (button as HTMLButtonElement).addEventListener('click',()=>{
    //     console.log('clicked!')
    // })

})()