// LocalStoreg



// abbreviateNumber
function abbreviateNumber(value) {
    var newValue = value;
    if (value >= 1000) {
        var suffixes = ["", "K", "M", "B","T"];
        var suffixNum = Math.floor( (""+value).length/3 );
        var shortValue = '';
        for (var precision = 2; precision >= 1; precision--) {
            shortValue = parseFloat( (suffixNum != 0 ? (value / Math.pow(1000,suffixNum) ) : value).toPrecision(precision));
            var dotLessShortValue = (shortValue + '').replace(/[^a-zA-Z 0-9]+/g,'');
            if (dotLessShortValue.length <= 2) { break; }
        }
        if (shortValue % 1 != 0)  shortValue = shortValue.toFixed(1);
        newValue = shortValue+suffixes[suffixNum];
    }
    return newValue;
}



var numHTML = document.querySelectorAll('.nums p')
numHTML.forEach( p =>{
    console.log(p)
    let smallNum = abbreviateNumber(p.textContent);
    console.log(smallNum)
    p.innerHTML = smallNum
    }
)

//like button


    document.querySelectorAll('.like').forEach((element,i)=>{
        element.parentElement.setAttribute('data-like', `${i}`);

            element.addEventListener('click',(a) =>{

                a.target.parentElement.classList.toggle("like-it");
        
})
    })
