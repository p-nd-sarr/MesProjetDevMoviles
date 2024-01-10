window.onload = function(){
    const addButton = document.getElementById('addButton');
    const resetButton = document.getElementById('resetButton');

    addButton.onclick = ajouterTache;
    resetButton.onclick = reinitialiserTache;

    function ajouterTache(){
        const tache = document.getElementById('tache');
        const taskList = document.getElementById('taskList');

        if (tache.value){
            let newItem = document.createElement('li');
            newItem.innerHTML = tache.value;

            $(newItem).on('swiperight', function () {
                $(this).toggleClass('done');
            });

            $(newItem).on('swipeleft', function() {
                $(this).hide('slow', function(){
                    $(this).remove();
                });
            });

            taskList.appendChild(newItem);
            $(taskList).listview('refresh');
            tache.value = '';
            tache.focus();
        } 
    }

    function reinitialiserTache(){
        const taskList = document.getElementById('taskList');

        // Supprimer tous les éléments de la liste des tâches
        while (taskList.firstChild) {
            taskList.removeChild(taskList.firstChild);
        }

        // Rafraîchir la liste
        $(taskList).listview('refresh');
    }
}
