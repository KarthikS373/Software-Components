const tree = document.getElementById("tree");


$(document).ready(
    () => {
        $.ajax({
            type : 'GET',
            url  : 'testData.js',
            success : (res) => {
                data = JSON.parse(res);
                // console.log(tree);
                for(val of data){
                    if(val.hasOwnProperty('_id')){
                        console.log(val);
                    }
                }
            }
        })
    }
);