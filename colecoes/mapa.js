
function recebeAdmin(map){
  let admin = [];
  for ([key , value] of map){
    if ( value === 'Administrador' ){
      admin.push(key);
    }
  }
  return admin;
};
const membros = new Map()
membros.set('João','Administrador');
membros.set('Patricia','Administrador');
membros.set('Cleiton','Usuario');
membros.set('Marcela','Administrador');
membros.set('Sheila','Usuario');

console.log(recebeAdmin(membros));