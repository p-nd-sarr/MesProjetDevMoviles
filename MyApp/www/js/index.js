function calculerAge(){
   const anneeCourante = new Date().getFullYear();
   // let naissance = document.getElementById('naissance');
   let age = anneeCourante - naissance.value;
   resultat.innerHTML = 'Vous avez ' + age + ' ans!';
}