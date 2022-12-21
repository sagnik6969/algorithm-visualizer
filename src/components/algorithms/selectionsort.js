// let speed = 0.1;

const sleep = ms => new Promise(r => setTimeout(r, ms));


async function selectionsort(values,speed){

  var ids = values.map((val,idx) => idx);

  console.log(new Date().getTime())

  let n = values.length;

    for(let i = 0 ; i < n; i++){
           

           document.getElementById(ids[i]).style.backgroundColor = '#FFDB89';
           
           var mn_idx = i;

           for(let j = i+1 ; j < n ; j++){

               
                    document.getElementById(ids[j]).style.backgroundColor = 'black';
                    
                    await sleep(speed * 1000);

                    if(values[j] < values[mn_idx]){
                    
                      if(mn_idx !== i)
                            document.getElementById(ids[mn_idx]).style.backgroundColor = "rgb(0, 149, 199)";
                      
                      mn_idx = j;

                      document.getElementById(ids[mn_idx]).style.backgroundColor = '#FFDB89';

                    }
                    else document.getElementById(ids[j]).style.backgroundColor = "rgb(0, 149, 199)";
                    
                    // document.getElementById(ids[j])
                    
          
                
            }
               
                [values[mn_idx],values[i]] = [values[i],values[mn_idx]];
                
                [ids[mn_idx],ids[i]] = [ids[i],ids[mn_idx]];
  

               document.getElementById(ids[i]).style.transform = `translateX(${i*10}px)`; 
               document.getElementById(ids[mn_idx]).style.transform = `translateX(${mn_idx*10}px)`;
               
               document.getElementById(ids[i]).style.backgroundColor = "rgb(0, 149, 199)";; 
               document.getElementById(ids[mn_idx]).style.backgroundColor = "rgb(0, 149, 199)";

               await sleep(speed * 1000);




        
    }

    console.log(values);
    console.log(ids);

}

export default selectionsort;