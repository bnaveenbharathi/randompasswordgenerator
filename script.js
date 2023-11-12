let keylist=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:'",.<>?/`

function genpass(length){
    let password=""
    for(i=0; i<length ; i++){
      password +=   keylist.charAt(Math.floor(Math.random()*keylist.length))
    }
    return password;
}
let genpassword=(pass)=>{
    document.output.passwordgen.value = genpass(pass)
}
