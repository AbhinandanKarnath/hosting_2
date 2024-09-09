let start = 0

function fetch_api()
{
    // https://api.coursera.org/api/courses.v1
    const url_link = 'course.json';

    fetch(url_link)
    .then(res => res.json())
    .then(res => {
        // console.log(res);
        let str = ""
        console.log(res.elements[0].name)

        const ele = document.getElementById("container");

        for(let i = start ; i< start+50 ; i++)
        {
            console.log(i+" "+res.elements[i].name)
            str += "<div class ='col-sm-4>"+i+")"+res.elements[i].name+"</div>"
        }
        start +=50;
        
        ele.innerHTML = str;
    })
}

function page()
{
    
}


{/* <div class="col-sm-4">
                    
                    </div> */}
fetch_api()