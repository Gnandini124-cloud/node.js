const a= `hello`;
const b= `World`;
function mod(p,q){
    return p%q;
}
const val = `
${mod(97,24)}
${a} ${b} ${5+5} ${5-5} ${5-3}

single quotes '



double quote"



NEW \n Line

`;
console.log(val);