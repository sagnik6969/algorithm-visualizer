// let speed = 0.1;
const sleep = ms => new Promise(r => setTimeout(r, ms));


export default async function insertionsort(values,speed){

  var ids = values.map((val,idx) => idx);

  let n = values.length;

    for(let i = 0 ; i < n; i++){
           
           var key = values[i]
           var j = i-1

           while(j >= 0 && values[j] > key){

               
                    document.getElementById(ids[j]).style.backgroundColor = 'black';
                    document.getElementById(ids[j+1]).style.backgroundColor = 'black';

                    // if(values[j+1] < values[j]){
                    
                       [values[j+1],values[j]] = [values[j],values[j+1]];
                       [ids[j+1],ids[j]] = [ids[j],ids[j+1]];

                       document.getElementById(ids[j]).style.transform = `translateX(${j*10}px)`; 
                       document.getElementById(ids[j+1]).style.transform = `translateX(${(j+1)*10}px)`;
                       

                    // }

                    await sleep(speed * 1000);

                    document.getElementById(ids[j]).style.backgroundColor = "rgb(0, 149, 199)";
                    document.getElementById(ids[j+1]).style.backgroundColor = "rgb(0, 149, 199)";
                    
                    j--;
                    // document.getElementById(ids[j])
                    
          
                
            }
                
    }

    // console.log(values);
    // console.log(ids);

}

