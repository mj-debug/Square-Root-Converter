let root = 1/2;

	function square_root(){
    	let num = document.getElementById('num').value;
        	num = parseInt(num);

    	let square_root_of_num = num ** root;

    	document.getElementById('root').innerHTML = square_root_of_num;

	}

	reset.addEventListener('click', () =>{
		document.getElementById('num').value="";
		document.getElementById('root').innerHTML = "";
	})