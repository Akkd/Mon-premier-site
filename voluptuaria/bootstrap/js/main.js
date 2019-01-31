
function input_view(id_of_input) {
    /*
     * donne le type "text" à un input de type password ou le contraire
     * exemple: 
     *   <input type="password"...name="cmdp" id="mdp">
     *   <button class="btn btn-default" type="button" onclick="input_view('mdp')">
     *      <span class="glyphicon glyphicon-eye-open" id="oeil_cmdp"></span>
     *   </button>
     */
    document.getElementById(id_of_input).type = (document.getElementById(id_of_input).type == "text")? "password":"text";
}

var plus_button = document.getElementById('plus-button');
    plus_button.addEventListener("click", function(){
        alert("ok");
}, false);